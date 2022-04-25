import{S as ol,i as nl,s as sl,e as r,k as m,w,t as l,M as rl,c as a,d as o,m as u,a as i,x as v,h as d,b as f,F as e,g as k,y as $,q as T,o as y,B as I,v as al,L as Q}from"../../chunks/vendor-6b77c823.js";import{T as bo}from"../../chunks/Tip-39098574.js";import{D as N}from"../../chunks/Docstring-1088f2fb.js";import{C as H}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ke}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as W}from"../../chunks/ExampleCodeBlock-5212b321.js";function il(B){let s,g,c,p,b;return{c(){s=r("p"),g=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);g=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var M=i(c);p=d(M,"Module"),M.forEach(o),b=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){k(n,s,h),e(s,g),e(s,c),e(c,p),e(s,b)},d(n){n&&o(s)}}}function ll(B){let s,g,c,p,b;return p=new H({props:{code:`from transformers import RobertaTokenizer, IBertModel
import torch

tokenizer = RobertaTokenizer.from_pretrained("kssteven/ibert-roberta-base")
model = IBertModel.from_pretrained("kssteven/ibert-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, IBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = IBertModel.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){s=r("p"),g=l("Example:"),c=m(),w(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);g=d(h,"Example:"),h.forEach(o),c=u(n),v(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,g),k(n,c,h),$(p,n,h),b=!0},p:Q,i(n){b||(T(p.$$.fragment,n),b=!0)},o(n){y(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),I(p,n)}}}function dl(B){let s,g,c,p,b;return{c(){s=r("p"),g=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);g=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var M=i(c);p=d(M,"Module"),M.forEach(o),b=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){k(n,s,h),e(s,g),e(s,c),e(c,p),e(s,b)},d(n){n&&o(s)}}}function cl(B){let s,g,c,p,b;return p=new H({props:{code:`from transformers import RobertaTokenizer, IBertForMaskedLM
import torch

tokenizer = RobertaTokenizer.from_pretrained("kssteven/ibert-roberta-base")
model = IBertForMaskedLM.from_pretrained("kssteven/ibert-roberta-base")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, IBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = IBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){s=r("p"),g=l("Example:"),c=m(),w(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);g=d(h,"Example:"),h.forEach(o),c=u(n),v(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,g),k(n,c,h),$(p,n,h),b=!0},p:Q,i(n){b||(T(p.$$.fragment,n),b=!0)},o(n){y(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),I(p,n)}}}function pl(B){let s,g;return s=new H({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(s.$$.fragment)},l(c){v(s.$$.fragment,c)},m(c,p){$(s,c,p),g=!0},p:Q,i(c){g||(T(s.$$.fragment,c),g=!0)},o(c){y(s.$$.fragment,c),g=!1},d(c){I(s,c)}}}function hl(B){let s,g,c,p,b;return{c(){s=r("p"),g=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);g=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var M=i(c);p=d(M,"Module"),M.forEach(o),b=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){k(n,s,h),e(s,g),e(s,c),e(c,p),e(s,b)},d(n){n&&o(s)}}}function ml(B){let s,g,c,p,b;return p=new H({props:{code:`import torch
from transformers import RobertaTokenizer, IBertForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("kssteven/ibert-roberta-base")
model = IBertForSequenceClassification.from_pretrained("kssteven/ibert-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, IBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = IBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){s=r("p"),g=l("Example of single-label classification:"),c=m(),w(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);g=d(h,"Example of single-label classification:"),h.forEach(o),c=u(n),v(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,g),k(n,c,h),$(p,n,h),b=!0},p:Q,i(n){b||(T(p.$$.fragment,n),b=!0)},o(n){y(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),I(p,n)}}}function ul(B){let s,g;return s=new H({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = IBertForSequenceClassification.from_pretrained("kssteven/ibert-roberta-base", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = IBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(s.$$.fragment)},l(c){v(s.$$.fragment,c)},m(c,p){$(s,c,p),g=!0},p:Q,i(c){g||(T(s.$$.fragment,c),g=!0)},o(c){y(s.$$.fragment,c),g=!1},d(c){I(s,c)}}}function fl(B){let s,g,c,p,b;return p=new H({props:{code:`import torch
from transformers import RobertaTokenizer, IBertForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("kssteven/ibert-roberta-base")
model = IBertForSequenceClassification.from_pretrained("kssteven/ibert-roberta-base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, IBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = IBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){s=r("p"),g=l("Example of multi-label classification:"),c=m(),w(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);g=d(h,"Example of multi-label classification:"),h.forEach(o),c=u(n),v(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,g),k(n,c,h),$(p,n,h),b=!0},p:Q,i(n){b||(T(p.$$.fragment,n),b=!0)},o(n){y(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),I(p,n)}}}function gl(B){let s,g;return s=new H({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = IBertForSequenceClassification.from_pretrained("kssteven/ibert-roberta-base", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = IBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){w(s.$$.fragment)},l(c){v(s.$$.fragment,c)},m(c,p){$(s,c,p),g=!0},p:Q,i(c){g||(T(s.$$.fragment,c),g=!0)},o(c){y(s.$$.fragment,c),g=!1},d(c){I(s,c)}}}function _l(B){let s,g,c,p,b;return{c(){s=r("p"),g=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);g=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var M=i(c);p=d(M,"Module"),M.forEach(o),b=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){k(n,s,h),e(s,g),e(s,c),e(c,p),e(s,b)},d(n){n&&o(s)}}}function bl(B){let s,g,c,p,b;return p=new H({props:{code:`from transformers import RobertaTokenizer, IBertForMultipleChoice
import torch

tokenizer = RobertaTokenizer.from_pretrained("kssteven/ibert-roberta-base")
model = IBertForMultipleChoice.from_pretrained("kssteven/ibert-roberta-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, IBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = IBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){s=r("p"),g=l("Example:"),c=m(),w(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);g=d(h,"Example:"),h.forEach(o),c=u(n),v(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,g),k(n,c,h),$(p,n,h),b=!0},p:Q,i(n){b||(T(p.$$.fragment,n),b=!0)},o(n){y(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),I(p,n)}}}function kl(B){let s,g,c,p,b;return{c(){s=r("p"),g=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);g=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var M=i(c);p=d(M,"Module"),M.forEach(o),b=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){k(n,s,h),e(s,g),e(s,c),e(c,p),e(s,b)},d(n){n&&o(s)}}}function wl(B){let s,g,c,p,b;return p=new H({props:{code:`from transformers import RobertaTokenizer, IBertForTokenClassification
import torch

tokenizer = RobertaTokenizer.from_pretrained("kssteven/ibert-roberta-base")
model = IBertForTokenClassification.from_pretrained("kssteven/ibert-roberta-base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, IBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = IBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>)

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
`}}),{c(){s=r("p"),g=l("Example:"),c=m(),w(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);g=d(h,"Example:"),h.forEach(o),c=u(n),v(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,g),k(n,c,h),$(p,n,h),b=!0},p:Q,i(n){b||(T(p.$$.fragment,n),b=!0)},o(n){y(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),I(p,n)}}}function vl(B){let s,g;return s=new H({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(s.$$.fragment)},l(c){v(s.$$.fragment,c)},m(c,p){$(s,c,p),g=!0},p:Q,i(c){g||(T(s.$$.fragment,c),g=!0)},o(c){y(s.$$.fragment,c),g=!1},d(c){I(s,c)}}}function $l(B){let s,g,c,p,b;return{c(){s=r("p"),g=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);g=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var M=i(c);p=d(M,"Module"),M.forEach(o),b=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){k(n,s,h),e(s,g),e(s,c),e(c,p),e(s,b)},d(n){n&&o(s)}}}function Tl(B){let s,g,c,p,b;return p=new H({props:{code:`from transformers import RobertaTokenizer, IBertForQuestionAnswering
import torch

tokenizer = RobertaTokenizer.from_pretrained("kssteven/ibert-roberta-base")
model = IBertForQuestionAnswering.from_pretrained("kssteven/ibert-roberta-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, IBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = IBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){s=r("p"),g=l("Example:"),c=m(),w(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);g=d(h,"Example:"),h.forEach(o),c=u(n),v(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,g),k(n,c,h),$(p,n,h),b=!0},p:Q,i(n){b||(T(p.$$.fragment,n),b=!0)},o(n){y(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),I(p,n)}}}function yl(B){let s,g;return s=new H({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(s.$$.fragment)},l(c){v(s.$$.fragment,c)},m(c,p){$(s,c,p),g=!0},p:Q,i(c){g||(T(s.$$.fragment,c),g=!0)},o(c){y(s.$$.fragment,c),g=!1},d(c){I(s,c)}}}function Il(B){let s,g,c,p,b,n,h,M,Kn,dn,oe,we,ko,Je,Yn,wo,Zn,cn,ve,Xn,Ke,es,ts,pn,Ht,os,hn,Ut,vo,ns,mn,G,ss,Ye,rs,as,Ze,is,ls,un,ne,$e,$o,Xe,ds,To,cs,fn,U,et,ps,tt,hs,Gt,ms,us,fs,se,gs,Vt,_s,bs,Jt,ks,ws,gn,re,Te,yo,ot,vs,Io,$s,_n,z,nt,Ts,Bo,ys,Is,st,Bs,Kt,Ms,qs,zs,rt,Fs,at,xs,Es,Cs,it,js,lt,Ps,As,Ss,L,dt,Rs,ae,Ns,Yt,Ls,Ds,Mo,Os,Ws,Qs,ye,Hs,Ie,bn,ie,Be,qo,ct,Us,zo,Gs,kn,F,pt,Vs,ht,Js,Fo,Ks,Ys,Zs,mt,Xs,Zt,er,tr,or,ut,nr,ft,sr,rr,ar,P,gt,ir,le,lr,Xt,dr,cr,xo,pr,hr,mr,Me,ur,qe,fr,ze,wn,de,Fe,Eo,_t,gr,Co,_r,vn,x,bt,br,jo,kr,wr,kt,vr,eo,$r,Tr,yr,wt,Ir,vt,Br,Mr,qr,q,$t,zr,ce,Fr,to,xr,Er,Po,Cr,jr,Pr,xe,Ar,Ee,Sr,Ce,Rr,je,Nr,Pe,$n,pe,Ae,Ao,Tt,Lr,So,Dr,Tn,E,yt,Or,Ro,Wr,Qr,It,Hr,oo,Ur,Gr,Vr,Bt,Jr,Mt,Kr,Yr,Zr,D,qt,Xr,he,ea,no,ta,oa,No,na,sa,ra,Se,aa,Re,yn,me,Ne,Lo,zt,ia,Do,la,In,C,Ft,da,Oo,ca,pa,xt,ha,so,ma,ua,fa,Et,ga,Ct,_a,ba,ka,A,jt,wa,ue,va,ro,$a,Ta,Wo,ya,Ia,Ba,Le,Ma,De,qa,Oe,Bn,fe,We,Qo,Pt,za,Ho,Fa,Mn,j,At,xa,ge,Ea,Uo,Ca,ja,Go,Pa,Aa,Sa,St,Ra,ao,Na,La,Da,Rt,Oa,Nt,Wa,Qa,Ha,S,Lt,Ua,_e,Ga,io,Va,Ja,Vo,Ka,Ya,Za,Qe,Xa,He,ei,Ue,qn;return n=new ke({}),Je=new ke({}),Xe=new ke({}),et=new N({props:{name:"class transformers.IBertConfig",anchor:"transformers.IBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"quant_mode",val:" = False"},{name:"force_dequant",val:" = 'none'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.IBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the I-BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16919/en/model_doc/ibert#transformers.IBertModel">IBertModel</a>`,name:"vocab_size"},{anchor:"transformers.IBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.IBertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.IBertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.IBertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.IBertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.IBertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.IBertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.IBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.IBertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_16919/en/model_doc/ibert#transformers.IBertModel">IBertModel</a>`,name:"type_vocab_size"},{anchor:"transformers.IBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.IBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.IBertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.IBertConfig.quant_mode",description:`<strong>quant_mode</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to quantize the model or not.`,name:"quant_mode"},{anchor:"transformers.IBertConfig.force_dequant",description:`<strong>force_dequant</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;none&quot;</code>) &#x2014;
Force dequantize specific nonlinear layer. Dequatized layers are then executed with full precision.
<code>&quot;none&quot;</code>, <code>&quot;gelu&quot;</code>, <code>&quot;softmax&quot;</code>, <code>&quot;layernorm&quot;</code> and <code>&quot;nonlinear&quot;</code> are supported. As deafult, it is set as
<code>&quot;none&quot;</code>, which does not dequantize any layers. Please specify <code>&quot;gelu&quot;</code>, <code>&quot;softmax&quot;</code>, or <code>&quot;layernorm&quot;</code> to
dequantize GELU, Softmax, or LayerNorm, respectively. <code>&quot;nonlinear&quot;</code> will dequantize all nonlinear layers,
i.e., GELU, Softmax, and LayerNorm.`,name:"force_dequant"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/ibert/configuration_ibert.py#L36"}}),ot=new ke({}),nt=new N({props:{name:"class transformers.IBertModel",anchor:"transformers.IBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.IBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/ibert#transformers.IBertConfig">IBertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/ibert/modeling_ibert.py#L732"}}),dt=new N({props:{name:"forward",anchor:"transformers.IBertModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.IBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.IBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.IBertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.IBertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.IBertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.IBertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.IBertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.IBertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.IBertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/ibert/modeling_ibert.py#L771",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/ibert#transformers.IBertConfig"
>IBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ye=new bo({props:{$$slots:{default:[il]},$$scope:{ctx:B}}}),Ie=new W({props:{anchor:"transformers.IBertModel.forward.example",$$slots:{default:[ll]},$$scope:{ctx:B}}}),ct=new ke({}),pt=new N({props:{name:"class transformers.IBertForMaskedLM",anchor:"transformers.IBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.IBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/ibert#transformers.IBertConfig">IBertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/ibert/modeling_ibert.py#L856"}}),gt=new N({props:{name:"forward",anchor:"transformers.IBertForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.IBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.IBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.IBertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.IBertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.IBertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.IBertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.IBertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.IBertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.IBertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.IBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.IBertForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/ibert/modeling_ibert.py#L875",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/ibert#transformers.IBertConfig"
>IBertConfig</a>) and inputs.</p>
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
`}}),Me=new bo({props:{$$slots:{default:[dl]},$$scope:{ctx:B}}}),qe=new W({props:{anchor:"transformers.IBertForMaskedLM.forward.example",$$slots:{default:[cl]},$$scope:{ctx:B}}}),ze=new W({props:{anchor:"transformers.IBertForMaskedLM.forward.example-2",$$slots:{default:[pl]},$$scope:{ctx:B}}}),_t=new ke({}),bt=new N({props:{name:"class transformers.IBertForSequenceClassification",anchor:"transformers.IBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.IBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/ibert#transformers.IBertConfig">IBertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/ibert/modeling_ibert.py#L971"}}),$t=new N({props:{name:"forward",anchor:"transformers.IBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.IBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.IBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.IBertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.IBertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.IBertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.IBertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.IBertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.IBertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.IBertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.IBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/ibert/modeling_ibert.py#L984",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/ibert#transformers.IBertConfig"
>IBertConfig</a>) and inputs.</p>
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
`}}),xe=new bo({props:{$$slots:{default:[hl]},$$scope:{ctx:B}}}),Ee=new W({props:{anchor:"transformers.IBertForSequenceClassification.forward.example",$$slots:{default:[ml]},$$scope:{ctx:B}}}),Ce=new W({props:{anchor:"transformers.IBertForSequenceClassification.forward.example-2",$$slots:{default:[ul]},$$scope:{ctx:B}}}),je=new W({props:{anchor:"transformers.IBertForSequenceClassification.forward.example-3",$$slots:{default:[fl]},$$scope:{ctx:B}}}),Pe=new W({props:{anchor:"transformers.IBertForSequenceClassification.forward.example-4",$$slots:{default:[gl]},$$scope:{ctx:B}}}),Tt=new ke({}),yt=new N({props:{name:"class transformers.IBertForMultipleChoice",anchor:"transformers.IBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.IBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/ibert#transformers.IBertConfig">IBertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/ibert/modeling_ibert.py#L1067"}}),qt=new N({props:{name:"forward",anchor:"transformers.IBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.IBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.IBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.IBertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.IBertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.IBertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.IBertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.IBertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.IBertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.IBertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.IBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/ibert/modeling_ibert.py#L1080",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/ibert#transformers.IBertConfig"
>IBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Se=new bo({props:{$$slots:{default:[_l]},$$scope:{ctx:B}}}),Re=new W({props:{anchor:"transformers.IBertForMultipleChoice.forward.example",$$slots:{default:[bl]},$$scope:{ctx:B}}}),zt=new ke({}),Ft=new N({props:{name:"class transformers.IBertForTokenClassification",anchor:"transformers.IBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.IBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/ibert#transformers.IBertConfig">IBertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/ibert/modeling_ibert.py#L1160"}}),jt=new N({props:{name:"forward",anchor:"transformers.IBertForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.IBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.IBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.IBertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.IBertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.IBertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.IBertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.IBertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.IBertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.IBertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.IBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/ibert/modeling_ibert.py#L1175",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/ibert#transformers.IBertConfig"
>IBertConfig</a>) and inputs.</p>
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
`}}),Le=new bo({props:{$$slots:{default:[kl]},$$scope:{ctx:B}}}),De=new W({props:{anchor:"transformers.IBertForTokenClassification.forward.example",$$slots:{default:[wl]},$$scope:{ctx:B}}}),Oe=new W({props:{anchor:"transformers.IBertForTokenClassification.forward.example-2",$$slots:{default:[vl]},$$scope:{ctx:B}}}),Pt=new ke({}),At=new N({props:{name:"class transformers.IBertForQuestionAnswering",anchor:"transformers.IBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.IBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/ibert#transformers.IBertConfig">IBertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/ibert/modeling_ibert.py#L1261"}}),Lt=new N({props:{name:"forward",anchor:"transformers.IBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.IBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.IBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.IBertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.IBertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.IBertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.IBertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.IBertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.IBertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.IBertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.IBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.IBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/ibert/modeling_ibert.py#L1275",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/ibert#transformers.IBertConfig"
>IBertConfig</a>) and inputs.</p>
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
`}}),Qe=new bo({props:{$$slots:{default:[$l]},$$scope:{ctx:B}}}),He=new W({props:{anchor:"transformers.IBertForQuestionAnswering.forward.example",$$slots:{default:[Tl]},$$scope:{ctx:B}}}),Ue=new W({props:{anchor:"transformers.IBertForQuestionAnswering.forward.example-2",$$slots:{default:[yl]},$$scope:{ctx:B}}}),{c(){s=r("meta"),g=m(),c=r("h1"),p=r("a"),b=r("span"),w(n.$$.fragment),h=m(),M=r("span"),Kn=l("I-BERT"),dn=m(),oe=r("h2"),we=r("a"),ko=r("span"),w(Je.$$.fragment),Yn=m(),wo=r("span"),Zn=l("Overview"),cn=m(),ve=r("p"),Xn=l("The I-BERT model was proposed in "),Ke=r("a"),es=l("I-BERT: Integer-only BERT Quantization"),ts=l(` by
Sehoon Kim, Amir Gholami, Zhewei Yao, Michael W. Mahoney and Kurt Keutzer. It\u2019s a quantized version of RoBERTa running
inference up to four times faster.`),pn=m(),Ht=r("p"),os=l("The abstract from the paper is the following:"),hn=m(),Ut=r("p"),vo=r("em"),ns=l(`Transformer based models, like BERT and RoBERTa, have achieved state-of-the-art results in many Natural Language
Processing tasks. However, their memory footprint, inference latency, and power consumption are prohibitive for
efficient inference at the edge, and even at the data center. While quantization can be a viable solution for this,
previous work on quantizing Transformer based models use floating-point arithmetic during inference, which cannot
efficiently utilize integer-only logical units such as the recent Turing Tensor Cores, or traditional integer-only ARM
processors. In this work, we propose I-BERT, a novel quantization scheme for Transformer based models that quantizes
the entire inference with integer-only arithmetic. Based on lightweight integer-only approximation methods for
nonlinear operations, e.g., GELU, Softmax, and Layer Normalization, I-BERT performs an end-to-end integer-only BERT
inference without any floating point calculation. We evaluate our approach on GLUE downstream tasks using
RoBERTa-Base/Large. We show that for both cases, I-BERT achieves similar (and slightly higher) accuracy as compared to
the full-precision baseline. Furthermore, our preliminary implementation of I-BERT shows a speedup of 2.4 - 4.0x for
INT8 inference on a T4 GPU system as compared to FP32 inference. The framework has been developed in PyTorch and has
been open-sourced.`),mn=m(),G=r("p"),ss=l("This model was contributed by "),Ye=r("a"),rs=l("kssteven"),as=l(". The original code can be found "),Ze=r("a"),is=l("here"),ls=l("."),un=m(),ne=r("h2"),$e=r("a"),$o=r("span"),w(Xe.$$.fragment),ds=m(),To=r("span"),cs=l("IBertConfig"),fn=m(),U=r("div"),w(et.$$.fragment),ps=m(),tt=r("p"),hs=l("This is the configuration class to store the configuration of a "),Gt=r("a"),ms=l("IBertModel"),us=l(`. It is used to instantiate a I-BERT
model according to the specified arguments,`),fs=m(),se=r("p"),gs=l("Configuration objects inherit from "),Vt=r("a"),_s=l("PretrainedConfig"),bs=l(` and can be used to control the model outputs. Read the
documentation from `),Jt=r("a"),ks=l("PretrainedConfig"),ws=l(" for more information."),gn=m(),re=r("h2"),Te=r("a"),yo=r("span"),w(ot.$$.fragment),vs=m(),Io=r("span"),$s=l("IBertModel"),_n=m(),z=r("div"),w(nt.$$.fragment),Ts=m(),Bo=r("p"),ys=l("The bare I-BERT Model transformer outputting raw hidden-states without any specific head on top."),Is=m(),st=r("p"),Bs=l("This model inherits from "),Kt=r("a"),Ms=l("PreTrainedModel"),qs=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zs=m(),rt=r("p"),Fs=l("This model is also a PyTorch "),at=r("a"),xs=l("torch.nn.Module"),Es=l(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cs=m(),it=r("p"),js=l(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),lt=r("a"),Ps=l(`Attention is
all you need`),As=l(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ss=m(),L=r("div"),w(dt.$$.fragment),Rs=m(),ae=r("p"),Ns=l("The "),Yt=r("a"),Ls=l("IBertModel"),Ds=l(" forward method, overrides the "),Mo=r("code"),Os=l("__call__"),Ws=l(" special method."),Qs=m(),w(ye.$$.fragment),Hs=m(),w(Ie.$$.fragment),bn=m(),ie=r("h2"),Be=r("a"),qo=r("span"),w(ct.$$.fragment),Us=m(),zo=r("span"),Gs=l("IBertForMaskedLM"),kn=m(),F=r("div"),w(pt.$$.fragment),Vs=m(),ht=r("p"),Js=l("I-BERT Model with a "),Fo=r("code"),Ks=l("language modeling"),Ys=l(" head on top."),Zs=m(),mt=r("p"),Xs=l("This model inherits from "),Zt=r("a"),er=l("PreTrainedModel"),tr=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),or=m(),ut=r("p"),nr=l("This model is also a PyTorch "),ft=r("a"),sr=l("torch.nn.Module"),rr=l(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ar=m(),P=r("div"),w(gt.$$.fragment),ir=m(),le=r("p"),lr=l("The "),Xt=r("a"),dr=l("IBertForMaskedLM"),cr=l(" forward method, overrides the "),xo=r("code"),pr=l("__call__"),hr=l(" special method."),mr=m(),w(Me.$$.fragment),ur=m(),w(qe.$$.fragment),fr=m(),w(ze.$$.fragment),wn=m(),de=r("h2"),Fe=r("a"),Eo=r("span"),w(_t.$$.fragment),gr=m(),Co=r("span"),_r=l("IBertForSequenceClassification"),vn=m(),x=r("div"),w(bt.$$.fragment),br=m(),jo=r("p"),kr=l(`I-BERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),wr=m(),kt=r("p"),vr=l("This model inherits from "),eo=r("a"),$r=l("PreTrainedModel"),Tr=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yr=m(),wt=r("p"),Ir=l("This model is also a PyTorch "),vt=r("a"),Br=l("torch.nn.Module"),Mr=l(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qr=m(),q=r("div"),w($t.$$.fragment),zr=m(),ce=r("p"),Fr=l("The "),to=r("a"),xr=l("IBertForSequenceClassification"),Er=l(" forward method, overrides the "),Po=r("code"),Cr=l("__call__"),jr=l(" special method."),Pr=m(),w(xe.$$.fragment),Ar=m(),w(Ee.$$.fragment),Sr=m(),w(Ce.$$.fragment),Rr=m(),w(je.$$.fragment),Nr=m(),w(Pe.$$.fragment),$n=m(),pe=r("h2"),Ae=r("a"),Ao=r("span"),w(Tt.$$.fragment),Lr=m(),So=r("span"),Dr=l("IBertForMultipleChoice"),Tn=m(),E=r("div"),w(yt.$$.fragment),Or=m(),Ro=r("p"),Wr=l(`I-BERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Qr=m(),It=r("p"),Hr=l("This model inherits from "),oo=r("a"),Ur=l("PreTrainedModel"),Gr=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vr=m(),Bt=r("p"),Jr=l("This model is also a PyTorch "),Mt=r("a"),Kr=l("torch.nn.Module"),Yr=l(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zr=m(),D=r("div"),w(qt.$$.fragment),Xr=m(),he=r("p"),ea=l("The "),no=r("a"),ta=l("IBertForMultipleChoice"),oa=l(" forward method, overrides the "),No=r("code"),na=l("__call__"),sa=l(" special method."),ra=m(),w(Se.$$.fragment),aa=m(),w(Re.$$.fragment),yn=m(),me=r("h2"),Ne=r("a"),Lo=r("span"),w(zt.$$.fragment),ia=m(),Do=r("span"),la=l("IBertForTokenClassification"),In=m(),C=r("div"),w(Ft.$$.fragment),da=m(),Oo=r("p"),ca=l(`I-BERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),pa=m(),xt=r("p"),ha=l("This model inherits from "),so=r("a"),ma=l("PreTrainedModel"),ua=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fa=m(),Et=r("p"),ga=l("This model is also a PyTorch "),Ct=r("a"),_a=l("torch.nn.Module"),ba=l(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ka=m(),A=r("div"),w(jt.$$.fragment),wa=m(),ue=r("p"),va=l("The "),ro=r("a"),$a=l("IBertForTokenClassification"),Ta=l(" forward method, overrides the "),Wo=r("code"),ya=l("__call__"),Ia=l(" special method."),Ba=m(),w(Le.$$.fragment),Ma=m(),w(De.$$.fragment),qa=m(),w(Oe.$$.fragment),Bn=m(),fe=r("h2"),We=r("a"),Qo=r("span"),w(Pt.$$.fragment),za=m(),Ho=r("span"),Fa=l("IBertForQuestionAnswering"),Mn=m(),j=r("div"),w(At.$$.fragment),xa=m(),ge=r("p"),Ea=l(`I-BERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Uo=r("code"),Ca=l("span start logits"),ja=l(" and "),Go=r("code"),Pa=l("span end logits"),Aa=l(")."),Sa=m(),St=r("p"),Ra=l("This model inherits from "),ao=r("a"),Na=l("PreTrainedModel"),La=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Da=m(),Rt=r("p"),Oa=l("This model is also a PyTorch "),Nt=r("a"),Wa=l("torch.nn.Module"),Qa=l(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ha=m(),S=r("div"),w(Lt.$$.fragment),Ua=m(),_e=r("p"),Ga=l("The "),io=r("a"),Va=l("IBertForQuestionAnswering"),Ja=l(" forward method, overrides the "),Vo=r("code"),Ka=l("__call__"),Ya=l(" special method."),Za=m(),w(Qe.$$.fragment),Xa=m(),w(He.$$.fragment),ei=m(),w(Ue.$$.fragment),this.h()},l(t){const _=rl('[data-svelte="svelte-1phssyn"]',document.head);s=a(_,"META",{name:!0,content:!0}),_.forEach(o),g=u(t),c=a(t,"H1",{class:!0});var Dt=i(c);p=a(Dt,"A",{id:!0,class:!0,href:!0});var Jo=i(p);b=a(Jo,"SPAN",{});var Ko=i(b);v(n.$$.fragment,Ko),Ko.forEach(o),Jo.forEach(o),h=u(Dt),M=a(Dt,"SPAN",{});var Yo=i(M);Kn=d(Yo,"I-BERT"),Yo.forEach(o),Dt.forEach(o),dn=u(t),oe=a(t,"H2",{class:!0});var Ot=i(oe);we=a(Ot,"A",{id:!0,class:!0,href:!0});var Zo=i(we);ko=a(Zo,"SPAN",{});var Xo=i(ko);v(Je.$$.fragment,Xo),Xo.forEach(o),Zo.forEach(o),Yn=u(Ot),wo=a(Ot,"SPAN",{});var en=i(wo);Zn=d(en,"Overview"),en.forEach(o),Ot.forEach(o),cn=u(t),ve=a(t,"P",{});var Wt=i(ve);Xn=d(Wt,"The I-BERT model was proposed in "),Ke=a(Wt,"A",{href:!0,rel:!0});var tn=i(Ke);es=d(tn,"I-BERT: Integer-only BERT Quantization"),tn.forEach(o),ts=d(Wt,` by
Sehoon Kim, Amir Gholami, Zhewei Yao, Michael W. Mahoney and Kurt Keutzer. It\u2019s a quantized version of RoBERTa running
inference up to four times faster.`),Wt.forEach(o),pn=u(t),Ht=a(t,"P",{});var on=i(Ht);os=d(on,"The abstract from the paper is the following:"),on.forEach(o),hn=u(t),Ut=a(t,"P",{});var nn=i(Ut);vo=a(nn,"EM",{});var sn=i(vo);ns=d(sn,`Transformer based models, like BERT and RoBERTa, have achieved state-of-the-art results in many Natural Language
Processing tasks. However, their memory footprint, inference latency, and power consumption are prohibitive for
efficient inference at the edge, and even at the data center. While quantization can be a viable solution for this,
previous work on quantizing Transformer based models use floating-point arithmetic during inference, which cannot
efficiently utilize integer-only logical units such as the recent Turing Tensor Cores, or traditional integer-only ARM
processors. In this work, we propose I-BERT, a novel quantization scheme for Transformer based models that quantizes
the entire inference with integer-only arithmetic. Based on lightweight integer-only approximation methods for
nonlinear operations, e.g., GELU, Softmax, and Layer Normalization, I-BERT performs an end-to-end integer-only BERT
inference without any floating point calculation. We evaluate our approach on GLUE downstream tasks using
RoBERTa-Base/Large. We show that for both cases, I-BERT achieves similar (and slightly higher) accuracy as compared to
the full-precision baseline. Furthermore, our preliminary implementation of I-BERT shows a speedup of 2.4 - 4.0x for
INT8 inference on a T4 GPU system as compared to FP32 inference. The framework has been developed in PyTorch and has
been open-sourced.`),sn.forEach(o),nn.forEach(o),mn=u(t),G=a(t,"P",{});var be=i(G);ss=d(be,"This model was contributed by "),Ye=a(be,"A",{href:!0,rel:!0});var rn=i(Ye);rs=d(rn,"kssteven"),rn.forEach(o),as=d(be,". The original code can be found "),Ze=a(be,"A",{href:!0,rel:!0});var an=i(Ze);is=d(an,"here"),an.forEach(o),ls=d(be,"."),be.forEach(o),un=u(t),ne=a(t,"H2",{class:!0});var Qt=i(ne);$e=a(Qt,"A",{id:!0,class:!0,href:!0});var ln=i($e);$o=a(ln,"SPAN",{});var ti=i($o);v(Xe.$$.fragment,ti),ti.forEach(o),ln.forEach(o),ds=u(Qt),To=a(Qt,"SPAN",{});var oi=i(To);cs=d(oi,"IBertConfig"),oi.forEach(o),Qt.forEach(o),fn=u(t),U=a(t,"DIV",{class:!0});var lo=i(U);v(et.$$.fragment,lo),ps=u(lo),tt=a(lo,"P",{});var zn=i(tt);hs=d(zn,"This is the configuration class to store the configuration of a "),Gt=a(zn,"A",{href:!0});var ni=i(Gt);ms=d(ni,"IBertModel"),ni.forEach(o),us=d(zn,`. It is used to instantiate a I-BERT
model according to the specified arguments,`),zn.forEach(o),fs=u(lo),se=a(lo,"P",{});var co=i(se);gs=d(co,"Configuration objects inherit from "),Vt=a(co,"A",{href:!0});var si=i(Vt);_s=d(si,"PretrainedConfig"),si.forEach(o),bs=d(co,` and can be used to control the model outputs. Read the
documentation from `),Jt=a(co,"A",{href:!0});var ri=i(Jt);ks=d(ri,"PretrainedConfig"),ri.forEach(o),ws=d(co," for more information."),co.forEach(o),lo.forEach(o),gn=u(t),re=a(t,"H2",{class:!0});var Fn=i(re);Te=a(Fn,"A",{id:!0,class:!0,href:!0});var ai=i(Te);yo=a(ai,"SPAN",{});var ii=i(yo);v(ot.$$.fragment,ii),ii.forEach(o),ai.forEach(o),vs=u(Fn),Io=a(Fn,"SPAN",{});var li=i(Io);$s=d(li,"IBertModel"),li.forEach(o),Fn.forEach(o),_n=u(t),z=a(t,"DIV",{class:!0});var O=i(z);v(nt.$$.fragment,O),Ts=u(O),Bo=a(O,"P",{});var di=i(Bo);ys=d(di,"The bare I-BERT Model transformer outputting raw hidden-states without any specific head on top."),di.forEach(o),Is=u(O),st=a(O,"P",{});var xn=i(st);Bs=d(xn,"This model inherits from "),Kt=a(xn,"A",{href:!0});var ci=i(Kt);Ms=d(ci,"PreTrainedModel"),ci.forEach(o),qs=d(xn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xn.forEach(o),zs=u(O),rt=a(O,"P",{});var En=i(rt);Fs=d(En,"This model is also a PyTorch "),at=a(En,"A",{href:!0,rel:!0});var pi=i(at);xs=d(pi,"torch.nn.Module"),pi.forEach(o),Es=d(En,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),En.forEach(o),Cs=u(O),it=a(O,"P",{});var Cn=i(it);js=d(Cn,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),lt=a(Cn,"A",{href:!0,rel:!0});var hi=i(lt);Ps=d(hi,`Attention is
all you need`),hi.forEach(o),As=d(Cn,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Cn.forEach(o),Ss=u(O),L=a(O,"DIV",{class:!0});var Ge=i(L);v(dt.$$.fragment,Ge),Rs=u(Ge),ae=a(Ge,"P",{});var po=i(ae);Ns=d(po,"The "),Yt=a(po,"A",{href:!0});var mi=i(Yt);Ls=d(mi,"IBertModel"),mi.forEach(o),Ds=d(po," forward method, overrides the "),Mo=a(po,"CODE",{});var ui=i(Mo);Os=d(ui,"__call__"),ui.forEach(o),Ws=d(po," special method."),po.forEach(o),Qs=u(Ge),v(ye.$$.fragment,Ge),Hs=u(Ge),v(Ie.$$.fragment,Ge),Ge.forEach(o),O.forEach(o),bn=u(t),ie=a(t,"H2",{class:!0});var jn=i(ie);Be=a(jn,"A",{id:!0,class:!0,href:!0});var fi=i(Be);qo=a(fi,"SPAN",{});var gi=i(qo);v(ct.$$.fragment,gi),gi.forEach(o),fi.forEach(o),Us=u(jn),zo=a(jn,"SPAN",{});var _i=i(zo);Gs=d(_i,"IBertForMaskedLM"),_i.forEach(o),jn.forEach(o),kn=u(t),F=a(t,"DIV",{class:!0});var V=i(F);v(pt.$$.fragment,V),Vs=u(V),ht=a(V,"P",{});var Pn=i(ht);Js=d(Pn,"I-BERT Model with a "),Fo=a(Pn,"CODE",{});var bi=i(Fo);Ks=d(bi,"language modeling"),bi.forEach(o),Ys=d(Pn," head on top."),Pn.forEach(o),Zs=u(V),mt=a(V,"P",{});var An=i(mt);Xs=d(An,"This model inherits from "),Zt=a(An,"A",{href:!0});var ki=i(Zt);er=d(ki,"PreTrainedModel"),ki.forEach(o),tr=d(An,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),An.forEach(o),or=u(V),ut=a(V,"P",{});var Sn=i(ut);nr=d(Sn,"This model is also a PyTorch "),ft=a(Sn,"A",{href:!0,rel:!0});var wi=i(ft);sr=d(wi,"torch.nn.Module"),wi.forEach(o),rr=d(Sn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sn.forEach(o),ar=u(V),P=a(V,"DIV",{class:!0});var J=i(P);v(gt.$$.fragment,J),ir=u(J),le=a(J,"P",{});var ho=i(le);lr=d(ho,"The "),Xt=a(ho,"A",{href:!0});var vi=i(Xt);dr=d(vi,"IBertForMaskedLM"),vi.forEach(o),cr=d(ho," forward method, overrides the "),xo=a(ho,"CODE",{});var $i=i(xo);pr=d($i,"__call__"),$i.forEach(o),hr=d(ho," special method."),ho.forEach(o),mr=u(J),v(Me.$$.fragment,J),ur=u(J),v(qe.$$.fragment,J),fr=u(J),v(ze.$$.fragment,J),J.forEach(o),V.forEach(o),wn=u(t),de=a(t,"H2",{class:!0});var Rn=i(de);Fe=a(Rn,"A",{id:!0,class:!0,href:!0});var Ti=i(Fe);Eo=a(Ti,"SPAN",{});var yi=i(Eo);v(_t.$$.fragment,yi),yi.forEach(o),Ti.forEach(o),gr=u(Rn),Co=a(Rn,"SPAN",{});var Ii=i(Co);_r=d(Ii,"IBertForSequenceClassification"),Ii.forEach(o),Rn.forEach(o),vn=u(t),x=a(t,"DIV",{class:!0});var K=i(x);v(bt.$$.fragment,K),br=u(K),jo=a(K,"P",{});var Bi=i(jo);kr=d(Bi,`I-BERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Bi.forEach(o),wr=u(K),kt=a(K,"P",{});var Nn=i(kt);vr=d(Nn,"This model inherits from "),eo=a(Nn,"A",{href:!0});var Mi=i(eo);$r=d(Mi,"PreTrainedModel"),Mi.forEach(o),Tr=d(Nn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nn.forEach(o),yr=u(K),wt=a(K,"P",{});var Ln=i(wt);Ir=d(Ln,"This model is also a PyTorch "),vt=a(Ln,"A",{href:!0,rel:!0});var qi=i(vt);Br=d(qi,"torch.nn.Module"),qi.forEach(o),Mr=d(Ln,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ln.forEach(o),qr=u(K),q=a(K,"DIV",{class:!0});var R=i(q);v($t.$$.fragment,R),zr=u(R),ce=a(R,"P",{});var mo=i(ce);Fr=d(mo,"The "),to=a(mo,"A",{href:!0});var zi=i(to);xr=d(zi,"IBertForSequenceClassification"),zi.forEach(o),Er=d(mo," forward method, overrides the "),Po=a(mo,"CODE",{});var Fi=i(Po);Cr=d(Fi,"__call__"),Fi.forEach(o),jr=d(mo," special method."),mo.forEach(o),Pr=u(R),v(xe.$$.fragment,R),Ar=u(R),v(Ee.$$.fragment,R),Sr=u(R),v(Ce.$$.fragment,R),Rr=u(R),v(je.$$.fragment,R),Nr=u(R),v(Pe.$$.fragment,R),R.forEach(o),K.forEach(o),$n=u(t),pe=a(t,"H2",{class:!0});var Dn=i(pe);Ae=a(Dn,"A",{id:!0,class:!0,href:!0});var xi=i(Ae);Ao=a(xi,"SPAN",{});var Ei=i(Ao);v(Tt.$$.fragment,Ei),Ei.forEach(o),xi.forEach(o),Lr=u(Dn),So=a(Dn,"SPAN",{});var Ci=i(So);Dr=d(Ci,"IBertForMultipleChoice"),Ci.forEach(o),Dn.forEach(o),Tn=u(t),E=a(t,"DIV",{class:!0});var Y=i(E);v(yt.$$.fragment,Y),Or=u(Y),Ro=a(Y,"P",{});var ji=i(Ro);Wr=d(ji,`I-BERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ji.forEach(o),Qr=u(Y),It=a(Y,"P",{});var On=i(It);Hr=d(On,"This model inherits from "),oo=a(On,"A",{href:!0});var Pi=i(oo);Ur=d(Pi,"PreTrainedModel"),Pi.forEach(o),Gr=d(On,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),On.forEach(o),Vr=u(Y),Bt=a(Y,"P",{});var Wn=i(Bt);Jr=d(Wn,"This model is also a PyTorch "),Mt=a(Wn,"A",{href:!0,rel:!0});var Ai=i(Mt);Kr=d(Ai,"torch.nn.Module"),Ai.forEach(o),Yr=d(Wn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wn.forEach(o),Zr=u(Y),D=a(Y,"DIV",{class:!0});var Ve=i(D);v(qt.$$.fragment,Ve),Xr=u(Ve),he=a(Ve,"P",{});var uo=i(he);ea=d(uo,"The "),no=a(uo,"A",{href:!0});var Si=i(no);ta=d(Si,"IBertForMultipleChoice"),Si.forEach(o),oa=d(uo," forward method, overrides the "),No=a(uo,"CODE",{});var Ri=i(No);na=d(Ri,"__call__"),Ri.forEach(o),sa=d(uo," special method."),uo.forEach(o),ra=u(Ve),v(Se.$$.fragment,Ve),aa=u(Ve),v(Re.$$.fragment,Ve),Ve.forEach(o),Y.forEach(o),yn=u(t),me=a(t,"H2",{class:!0});var Qn=i(me);Ne=a(Qn,"A",{id:!0,class:!0,href:!0});var Ni=i(Ne);Lo=a(Ni,"SPAN",{});var Li=i(Lo);v(zt.$$.fragment,Li),Li.forEach(o),Ni.forEach(o),ia=u(Qn),Do=a(Qn,"SPAN",{});var Di=i(Do);la=d(Di,"IBertForTokenClassification"),Di.forEach(o),Qn.forEach(o),In=u(t),C=a(t,"DIV",{class:!0});var Z=i(C);v(Ft.$$.fragment,Z),da=u(Z),Oo=a(Z,"P",{});var Oi=i(Oo);ca=d(Oi,`I-BERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Oi.forEach(o),pa=u(Z),xt=a(Z,"P",{});var Hn=i(xt);ha=d(Hn,"This model inherits from "),so=a(Hn,"A",{href:!0});var Wi=i(so);ma=d(Wi,"PreTrainedModel"),Wi.forEach(o),ua=d(Hn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hn.forEach(o),fa=u(Z),Et=a(Z,"P",{});var Un=i(Et);ga=d(Un,"This model is also a PyTorch "),Ct=a(Un,"A",{href:!0,rel:!0});var Qi=i(Ct);_a=d(Qi,"torch.nn.Module"),Qi.forEach(o),ba=d(Un,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Un.forEach(o),ka=u(Z),A=a(Z,"DIV",{class:!0});var X=i(A);v(jt.$$.fragment,X),wa=u(X),ue=a(X,"P",{});var fo=i(ue);va=d(fo,"The "),ro=a(fo,"A",{href:!0});var Hi=i(ro);$a=d(Hi,"IBertForTokenClassification"),Hi.forEach(o),Ta=d(fo," forward method, overrides the "),Wo=a(fo,"CODE",{});var Ui=i(Wo);ya=d(Ui,"__call__"),Ui.forEach(o),Ia=d(fo," special method."),fo.forEach(o),Ba=u(X),v(Le.$$.fragment,X),Ma=u(X),v(De.$$.fragment,X),qa=u(X),v(Oe.$$.fragment,X),X.forEach(o),Z.forEach(o),Bn=u(t),fe=a(t,"H2",{class:!0});var Gn=i(fe);We=a(Gn,"A",{id:!0,class:!0,href:!0});var Gi=i(We);Qo=a(Gi,"SPAN",{});var Vi=i(Qo);v(Pt.$$.fragment,Vi),Vi.forEach(o),Gi.forEach(o),za=u(Gn),Ho=a(Gn,"SPAN",{});var Ji=i(Ho);Fa=d(Ji,"IBertForQuestionAnswering"),Ji.forEach(o),Gn.forEach(o),Mn=u(t),j=a(t,"DIV",{class:!0});var ee=i(j);v(At.$$.fragment,ee),xa=u(ee),ge=a(ee,"P",{});var go=i(ge);Ea=d(go,`I-BERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Uo=a(go,"CODE",{});var Ki=i(Uo);Ca=d(Ki,"span start logits"),Ki.forEach(o),ja=d(go," and "),Go=a(go,"CODE",{});var Yi=i(Go);Pa=d(Yi,"span end logits"),Yi.forEach(o),Aa=d(go,")."),go.forEach(o),Sa=u(ee),St=a(ee,"P",{});var Vn=i(St);Ra=d(Vn,"This model inherits from "),ao=a(Vn,"A",{href:!0});var Zi=i(ao);Na=d(Zi,"PreTrainedModel"),Zi.forEach(o),La=d(Vn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vn.forEach(o),Da=u(ee),Rt=a(ee,"P",{});var Jn=i(Rt);Oa=d(Jn,"This model is also a PyTorch "),Nt=a(Jn,"A",{href:!0,rel:!0});var Xi=i(Nt);Wa=d(Xi,"torch.nn.Module"),Xi.forEach(o),Qa=d(Jn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jn.forEach(o),Ha=u(ee),S=a(ee,"DIV",{class:!0});var te=i(S);v(Lt.$$.fragment,te),Ua=u(te),_e=a(te,"P",{});var _o=i(_e);Ga=d(_o,"The "),io=a(_o,"A",{href:!0});var el=i(io);Va=d(el,"IBertForQuestionAnswering"),el.forEach(o),Ja=d(_o," forward method, overrides the "),Vo=a(_o,"CODE",{});var tl=i(Vo);Ka=d(tl,"__call__"),tl.forEach(o),Ya=d(_o," special method."),_o.forEach(o),Za=u(te),v(Qe.$$.fragment,te),Xa=u(te),v(He.$$.fragment,te),ei=u(te),v(Ue.$$.fragment,te),te.forEach(o),ee.forEach(o),this.h()},h(){f(s,"name","hf:doc:metadata"),f(s,"content",JSON.stringify(Bl)),f(p,"id","ibert"),f(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(p,"href","#ibert"),f(c,"class","relative group"),f(we,"id","overview"),f(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(we,"href","#overview"),f(oe,"class","relative group"),f(Ke,"href","https://arxiv.org/abs/2101.01321"),f(Ke,"rel","nofollow"),f(Ye,"href","https://huggingface.co/kssteven"),f(Ye,"rel","nofollow"),f(Ze,"href","https://github.com/kssteven418/I-BERT"),f(Ze,"rel","nofollow"),f($e,"id","transformers.IBertConfig"),f($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f($e,"href","#transformers.IBertConfig"),f(ne,"class","relative group"),f(Gt,"href","/docs/transformers/pr_16919/en/model_doc/ibert#transformers.IBertModel"),f(Vt,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),f(Jt,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),f(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Te,"id","transformers.IBertModel"),f(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Te,"href","#transformers.IBertModel"),f(re,"class","relative group"),f(Kt,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),f(at,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(at,"rel","nofollow"),f(lt,"href","https://arxiv.org/abs/1706.03762"),f(lt,"rel","nofollow"),f(Yt,"href","/docs/transformers/pr_16919/en/model_doc/ibert#transformers.IBertModel"),f(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Be,"id","transformers.IBertForMaskedLM"),f(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Be,"href","#transformers.IBertForMaskedLM"),f(ie,"class","relative group"),f(Zt,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),f(ft,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ft,"rel","nofollow"),f(Xt,"href","/docs/transformers/pr_16919/en/model_doc/ibert#transformers.IBertForMaskedLM"),f(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fe,"id","transformers.IBertForSequenceClassification"),f(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Fe,"href","#transformers.IBertForSequenceClassification"),f(de,"class","relative group"),f(eo,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),f(vt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(vt,"rel","nofollow"),f(to,"href","/docs/transformers/pr_16919/en/model_doc/ibert#transformers.IBertForSequenceClassification"),f(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ae,"id","transformers.IBertForMultipleChoice"),f(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ae,"href","#transformers.IBertForMultipleChoice"),f(pe,"class","relative group"),f(oo,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),f(Mt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Mt,"rel","nofollow"),f(no,"href","/docs/transformers/pr_16919/en/model_doc/ibert#transformers.IBertForMultipleChoice"),f(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ne,"id","transformers.IBertForTokenClassification"),f(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ne,"href","#transformers.IBertForTokenClassification"),f(me,"class","relative group"),f(so,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),f(Ct,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ct,"rel","nofollow"),f(ro,"href","/docs/transformers/pr_16919/en/model_doc/ibert#transformers.IBertForTokenClassification"),f(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(We,"id","transformers.IBertForQuestionAnswering"),f(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(We,"href","#transformers.IBertForQuestionAnswering"),f(fe,"class","relative group"),f(ao,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),f(Nt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Nt,"rel","nofollow"),f(io,"href","/docs/transformers/pr_16919/en/model_doc/ibert#transformers.IBertForQuestionAnswering"),f(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,_){e(document.head,s),k(t,g,_),k(t,c,_),e(c,p),e(p,b),$(n,b,null),e(c,h),e(c,M),e(M,Kn),k(t,dn,_),k(t,oe,_),e(oe,we),e(we,ko),$(Je,ko,null),e(oe,Yn),e(oe,wo),e(wo,Zn),k(t,cn,_),k(t,ve,_),e(ve,Xn),e(ve,Ke),e(Ke,es),e(ve,ts),k(t,pn,_),k(t,Ht,_),e(Ht,os),k(t,hn,_),k(t,Ut,_),e(Ut,vo),e(vo,ns),k(t,mn,_),k(t,G,_),e(G,ss),e(G,Ye),e(Ye,rs),e(G,as),e(G,Ze),e(Ze,is),e(G,ls),k(t,un,_),k(t,ne,_),e(ne,$e),e($e,$o),$(Xe,$o,null),e(ne,ds),e(ne,To),e(To,cs),k(t,fn,_),k(t,U,_),$(et,U,null),e(U,ps),e(U,tt),e(tt,hs),e(tt,Gt),e(Gt,ms),e(tt,us),e(U,fs),e(U,se),e(se,gs),e(se,Vt),e(Vt,_s),e(se,bs),e(se,Jt),e(Jt,ks),e(se,ws),k(t,gn,_),k(t,re,_),e(re,Te),e(Te,yo),$(ot,yo,null),e(re,vs),e(re,Io),e(Io,$s),k(t,_n,_),k(t,z,_),$(nt,z,null),e(z,Ts),e(z,Bo),e(Bo,ys),e(z,Is),e(z,st),e(st,Bs),e(st,Kt),e(Kt,Ms),e(st,qs),e(z,zs),e(z,rt),e(rt,Fs),e(rt,at),e(at,xs),e(rt,Es),e(z,Cs),e(z,it),e(it,js),e(it,lt),e(lt,Ps),e(it,As),e(z,Ss),e(z,L),$(dt,L,null),e(L,Rs),e(L,ae),e(ae,Ns),e(ae,Yt),e(Yt,Ls),e(ae,Ds),e(ae,Mo),e(Mo,Os),e(ae,Ws),e(L,Qs),$(ye,L,null),e(L,Hs),$(Ie,L,null),k(t,bn,_),k(t,ie,_),e(ie,Be),e(Be,qo),$(ct,qo,null),e(ie,Us),e(ie,zo),e(zo,Gs),k(t,kn,_),k(t,F,_),$(pt,F,null),e(F,Vs),e(F,ht),e(ht,Js),e(ht,Fo),e(Fo,Ks),e(ht,Ys),e(F,Zs),e(F,mt),e(mt,Xs),e(mt,Zt),e(Zt,er),e(mt,tr),e(F,or),e(F,ut),e(ut,nr),e(ut,ft),e(ft,sr),e(ut,rr),e(F,ar),e(F,P),$(gt,P,null),e(P,ir),e(P,le),e(le,lr),e(le,Xt),e(Xt,dr),e(le,cr),e(le,xo),e(xo,pr),e(le,hr),e(P,mr),$(Me,P,null),e(P,ur),$(qe,P,null),e(P,fr),$(ze,P,null),k(t,wn,_),k(t,de,_),e(de,Fe),e(Fe,Eo),$(_t,Eo,null),e(de,gr),e(de,Co),e(Co,_r),k(t,vn,_),k(t,x,_),$(bt,x,null),e(x,br),e(x,jo),e(jo,kr),e(x,wr),e(x,kt),e(kt,vr),e(kt,eo),e(eo,$r),e(kt,Tr),e(x,yr),e(x,wt),e(wt,Ir),e(wt,vt),e(vt,Br),e(wt,Mr),e(x,qr),e(x,q),$($t,q,null),e(q,zr),e(q,ce),e(ce,Fr),e(ce,to),e(to,xr),e(ce,Er),e(ce,Po),e(Po,Cr),e(ce,jr),e(q,Pr),$(xe,q,null),e(q,Ar),$(Ee,q,null),e(q,Sr),$(Ce,q,null),e(q,Rr),$(je,q,null),e(q,Nr),$(Pe,q,null),k(t,$n,_),k(t,pe,_),e(pe,Ae),e(Ae,Ao),$(Tt,Ao,null),e(pe,Lr),e(pe,So),e(So,Dr),k(t,Tn,_),k(t,E,_),$(yt,E,null),e(E,Or),e(E,Ro),e(Ro,Wr),e(E,Qr),e(E,It),e(It,Hr),e(It,oo),e(oo,Ur),e(It,Gr),e(E,Vr),e(E,Bt),e(Bt,Jr),e(Bt,Mt),e(Mt,Kr),e(Bt,Yr),e(E,Zr),e(E,D),$(qt,D,null),e(D,Xr),e(D,he),e(he,ea),e(he,no),e(no,ta),e(he,oa),e(he,No),e(No,na),e(he,sa),e(D,ra),$(Se,D,null),e(D,aa),$(Re,D,null),k(t,yn,_),k(t,me,_),e(me,Ne),e(Ne,Lo),$(zt,Lo,null),e(me,ia),e(me,Do),e(Do,la),k(t,In,_),k(t,C,_),$(Ft,C,null),e(C,da),e(C,Oo),e(Oo,ca),e(C,pa),e(C,xt),e(xt,ha),e(xt,so),e(so,ma),e(xt,ua),e(C,fa),e(C,Et),e(Et,ga),e(Et,Ct),e(Ct,_a),e(Et,ba),e(C,ka),e(C,A),$(jt,A,null),e(A,wa),e(A,ue),e(ue,va),e(ue,ro),e(ro,$a),e(ue,Ta),e(ue,Wo),e(Wo,ya),e(ue,Ia),e(A,Ba),$(Le,A,null),e(A,Ma),$(De,A,null),e(A,qa),$(Oe,A,null),k(t,Bn,_),k(t,fe,_),e(fe,We),e(We,Qo),$(Pt,Qo,null),e(fe,za),e(fe,Ho),e(Ho,Fa),k(t,Mn,_),k(t,j,_),$(At,j,null),e(j,xa),e(j,ge),e(ge,Ea),e(ge,Uo),e(Uo,Ca),e(ge,ja),e(ge,Go),e(Go,Pa),e(ge,Aa),e(j,Sa),e(j,St),e(St,Ra),e(St,ao),e(ao,Na),e(St,La),e(j,Da),e(j,Rt),e(Rt,Oa),e(Rt,Nt),e(Nt,Wa),e(Rt,Qa),e(j,Ha),e(j,S),$(Lt,S,null),e(S,Ua),e(S,_e),e(_e,Ga),e(_e,io),e(io,Va),e(_e,Ja),e(_e,Vo),e(Vo,Ka),e(_e,Ya),e(S,Za),$(Qe,S,null),e(S,Xa),$(He,S,null),e(S,ei),$(Ue,S,null),qn=!0},p(t,[_]){const Dt={};_&2&&(Dt.$$scope={dirty:_,ctx:t}),ye.$set(Dt);const Jo={};_&2&&(Jo.$$scope={dirty:_,ctx:t}),Ie.$set(Jo);const Ko={};_&2&&(Ko.$$scope={dirty:_,ctx:t}),Me.$set(Ko);const Yo={};_&2&&(Yo.$$scope={dirty:_,ctx:t}),qe.$set(Yo);const Ot={};_&2&&(Ot.$$scope={dirty:_,ctx:t}),ze.$set(Ot);const Zo={};_&2&&(Zo.$$scope={dirty:_,ctx:t}),xe.$set(Zo);const Xo={};_&2&&(Xo.$$scope={dirty:_,ctx:t}),Ee.$set(Xo);const en={};_&2&&(en.$$scope={dirty:_,ctx:t}),Ce.$set(en);const Wt={};_&2&&(Wt.$$scope={dirty:_,ctx:t}),je.$set(Wt);const tn={};_&2&&(tn.$$scope={dirty:_,ctx:t}),Pe.$set(tn);const on={};_&2&&(on.$$scope={dirty:_,ctx:t}),Se.$set(on);const nn={};_&2&&(nn.$$scope={dirty:_,ctx:t}),Re.$set(nn);const sn={};_&2&&(sn.$$scope={dirty:_,ctx:t}),Le.$set(sn);const be={};_&2&&(be.$$scope={dirty:_,ctx:t}),De.$set(be);const rn={};_&2&&(rn.$$scope={dirty:_,ctx:t}),Oe.$set(rn);const an={};_&2&&(an.$$scope={dirty:_,ctx:t}),Qe.$set(an);const Qt={};_&2&&(Qt.$$scope={dirty:_,ctx:t}),He.$set(Qt);const ln={};_&2&&(ln.$$scope={dirty:_,ctx:t}),Ue.$set(ln)},i(t){qn||(T(n.$$.fragment,t),T(Je.$$.fragment,t),T(Xe.$$.fragment,t),T(et.$$.fragment,t),T(ot.$$.fragment,t),T(nt.$$.fragment,t),T(dt.$$.fragment,t),T(ye.$$.fragment,t),T(Ie.$$.fragment,t),T(ct.$$.fragment,t),T(pt.$$.fragment,t),T(gt.$$.fragment,t),T(Me.$$.fragment,t),T(qe.$$.fragment,t),T(ze.$$.fragment,t),T(_t.$$.fragment,t),T(bt.$$.fragment,t),T($t.$$.fragment,t),T(xe.$$.fragment,t),T(Ee.$$.fragment,t),T(Ce.$$.fragment,t),T(je.$$.fragment,t),T(Pe.$$.fragment,t),T(Tt.$$.fragment,t),T(yt.$$.fragment,t),T(qt.$$.fragment,t),T(Se.$$.fragment,t),T(Re.$$.fragment,t),T(zt.$$.fragment,t),T(Ft.$$.fragment,t),T(jt.$$.fragment,t),T(Le.$$.fragment,t),T(De.$$.fragment,t),T(Oe.$$.fragment,t),T(Pt.$$.fragment,t),T(At.$$.fragment,t),T(Lt.$$.fragment,t),T(Qe.$$.fragment,t),T(He.$$.fragment,t),T(Ue.$$.fragment,t),qn=!0)},o(t){y(n.$$.fragment,t),y(Je.$$.fragment,t),y(Xe.$$.fragment,t),y(et.$$.fragment,t),y(ot.$$.fragment,t),y(nt.$$.fragment,t),y(dt.$$.fragment,t),y(ye.$$.fragment,t),y(Ie.$$.fragment,t),y(ct.$$.fragment,t),y(pt.$$.fragment,t),y(gt.$$.fragment,t),y(Me.$$.fragment,t),y(qe.$$.fragment,t),y(ze.$$.fragment,t),y(_t.$$.fragment,t),y(bt.$$.fragment,t),y($t.$$.fragment,t),y(xe.$$.fragment,t),y(Ee.$$.fragment,t),y(Ce.$$.fragment,t),y(je.$$.fragment,t),y(Pe.$$.fragment,t),y(Tt.$$.fragment,t),y(yt.$$.fragment,t),y(qt.$$.fragment,t),y(Se.$$.fragment,t),y(Re.$$.fragment,t),y(zt.$$.fragment,t),y(Ft.$$.fragment,t),y(jt.$$.fragment,t),y(Le.$$.fragment,t),y(De.$$.fragment,t),y(Oe.$$.fragment,t),y(Pt.$$.fragment,t),y(At.$$.fragment,t),y(Lt.$$.fragment,t),y(Qe.$$.fragment,t),y(He.$$.fragment,t),y(Ue.$$.fragment,t),qn=!1},d(t){o(s),t&&o(g),t&&o(c),I(n),t&&o(dn),t&&o(oe),I(Je),t&&o(cn),t&&o(ve),t&&o(pn),t&&o(Ht),t&&o(hn),t&&o(Ut),t&&o(mn),t&&o(G),t&&o(un),t&&o(ne),I(Xe),t&&o(fn),t&&o(U),I(et),t&&o(gn),t&&o(re),I(ot),t&&o(_n),t&&o(z),I(nt),I(dt),I(ye),I(Ie),t&&o(bn),t&&o(ie),I(ct),t&&o(kn),t&&o(F),I(pt),I(gt),I(Me),I(qe),I(ze),t&&o(wn),t&&o(de),I(_t),t&&o(vn),t&&o(x),I(bt),I($t),I(xe),I(Ee),I(Ce),I(je),I(Pe),t&&o($n),t&&o(pe),I(Tt),t&&o(Tn),t&&o(E),I(yt),I(qt),I(Se),I(Re),t&&o(yn),t&&o(me),I(zt),t&&o(In),t&&o(C),I(Ft),I(jt),I(Le),I(De),I(Oe),t&&o(Bn),t&&o(fe),I(Pt),t&&o(Mn),t&&o(j),I(At),I(Lt),I(Qe),I(He),I(Ue)}}}const Bl={local:"ibert",sections:[{local:"overview",title:"Overview"},{local:"transformers.IBertConfig",title:"IBertConfig"},{local:"transformers.IBertModel",title:"IBertModel"},{local:"transformers.IBertForMaskedLM",title:"IBertForMaskedLM"},{local:"transformers.IBertForSequenceClassification",title:"IBertForSequenceClassification"},{local:"transformers.IBertForMultipleChoice",title:"IBertForMultipleChoice"},{local:"transformers.IBertForTokenClassification",title:"IBertForTokenClassification"},{local:"transformers.IBertForQuestionAnswering",title:"IBertForQuestionAnswering"}],title:"I-BERT"};function Ml(B){return al(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class jl extends ol{constructor(s){super();nl(this,s,Ml,Il,sl,{})}}export{jl as default,Bl as metadata};
