import{S as Rd,i as Fd,s as zd,e as i,k as g,w as k,t as r,M as Cd,c as l,d as o,m as _,a as d,x as M,h as a,b as m,F as e,g as L,y as w,q as v,o as X,B as $,v as qd,L as A}from"../../chunks/vendor-6b77c823.js";import{T as io}from"../../chunks/Tip-39098574.js";import{D as F}from"../../chunks/Docstring-1088f2fb.js";import{C as S}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as re}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as P}from"../../chunks/ExampleCodeBlock-5212b321.js";function Ed(T){let s,f,c,p,b;return p=new S({props:{code:`from transformers import XLMRobertaXLModel, XLMRobertaXLConfig

# Initializing a XLM_ROBERTA_XL bert-base-uncased style configuration
configuration = XLMRobertaXLConfig()

# Initializing a model from the bert-base-uncased style configuration
model = XLMRobertaXLModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMRobertaXLModel, XLMRobertaXLConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a XLM_ROBERTA_XL bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = XLMRobertaXLConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaXLModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){s=i("p"),f=r("Examples:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=a(h,"Examples:"),h.forEach(o),c=_(n),M(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),w(p,n,h),b=!0},p:A,i(n){b||(v(p.$$.fragment,n),b=!0)},o(n){X(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),$(p,n)}}}function jd(T){let s,f,c,p,b;return{c(){s=i("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),p=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var h=d(s);f=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(h,"CODE",{});var y=d(c);p=a(y,"Module"),y.forEach(o),b=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){L(n,s,h),e(s,f),e(s,c),e(c,p),e(s,b)},d(n){n&&o(s)}}}function Pd(T){let s,f,c,p,b;return p=new S({props:{code:`from transformers import RobertaTokenizer, XLMRobertaXLModel
import torch

tokenizer = RobertaTokenizer.from_pretrained("xlm-roberta-xlarge")
model = XLMRobertaXLModel.from_pretrained("xlm-roberta-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, XLMRobertaXLModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaXLModel.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){s=i("p"),f=r("Example:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=a(h,"Example:"),h.forEach(o),c=_(n),M(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),w(p,n,h),b=!0},p:A,i(n){b||(v(p.$$.fragment,n),b=!0)},o(n){X(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),$(p,n)}}}function Ad(T){let s,f,c,p,b;return{c(){s=i("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),p=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var h=d(s);f=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(h,"CODE",{});var y=d(c);p=a(y,"Module"),y.forEach(o),b=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){L(n,s,h),e(s,f),e(s,c),e(c,p),e(s,b)},d(n){n&&o(s)}}}function Sd(T){let s,f,c,p,b;return p=new S({props:{code:`from transformers import RobertaTokenizer, RobertaForCausalLM, RobertaConfig
import torch

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
config = RobertaConfig.from_pretrained("roberta-base")
config.is_decoder = True
model = RobertaForCausalLM.from_pretrained("roberta-base", config=config)
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)
prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, RobertaForCausalLM, RobertaConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = RobertaConfig.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForCausalLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>, config=config)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){s=i("p"),f=r("Example:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=a(h,"Example:"),h.forEach(o),c=_(n),M(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),w(p,n,h),b=!0},p:A,i(n){b||(v(p.$$.fragment,n),b=!0)},o(n){X(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),$(p,n)}}}function Nd(T){let s,f,c,p,b;return{c(){s=i("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),p=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var h=d(s);f=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(h,"CODE",{});var y=d(c);p=a(y,"Module"),y.forEach(o),b=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){L(n,s,h),e(s,f),e(s,c),e(c,p),e(s,b)},d(n){n&&o(s)}}}function Id(T){let s,f,c,p,b;return p=new S({props:{code:`from transformers import RobertaTokenizer, XLMRobertaXLForMaskedLM
import torch

tokenizer = RobertaTokenizer.from_pretrained("xlm-roberta-xlarge")
model = XLMRobertaXLForMaskedLM.from_pretrained("xlm-roberta-xlarge")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, XLMRobertaXLForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaXLForMaskedLM.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){s=i("p"),f=r("Example:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=a(h,"Example:"),h.forEach(o),c=_(n),M(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),w(p,n,h),b=!0},p:A,i(n){b||(v(p.$$.fragment,n),b=!0)},o(n){X(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),$(p,n)}}}function Od(T){let s,f;return s=new S({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(s.$$.fragment)},l(c){M(s.$$.fragment,c)},m(c,p){w(s,c,p),f=!0},p:A,i(c){f||(v(s.$$.fragment,c),f=!0)},o(c){X(s.$$.fragment,c),f=!1},d(c){$(s,c)}}}function Dd(T){let s,f,c,p,b;return{c(){s=i("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),p=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var h=d(s);f=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(h,"CODE",{});var y=d(c);p=a(y,"Module"),y.forEach(o),b=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){L(n,s,h),e(s,f),e(s,c),e(c,p),e(s,b)},d(n){n&&o(s)}}}function Wd(T){let s,f,c,p,b;return p=new S({props:{code:`import torch
from transformers import RobertaTokenizer, XLMRobertaXLForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("xlm-roberta-xlarge")
model = XLMRobertaXLForSequenceClassification.from_pretrained("xlm-roberta-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, XLMRobertaXLForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaXLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){s=i("p"),f=r("Example of single-label classification:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=a(h,"Example of single-label classification:"),h.forEach(o),c=_(n),M(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),w(p,n,h),b=!0},p:A,i(n){b||(v(p.$$.fragment,n),b=!0)},o(n){X(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),$(p,n)}}}function Bd(T){let s,f;return s=new S({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = XLMRobertaXLForSequenceClassification.from_pretrained("xlm-roberta-xlarge", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaXLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(s.$$.fragment)},l(c){M(s.$$.fragment,c)},m(c,p){w(s,c,p),f=!0},p:A,i(c){f||(v(s.$$.fragment,c),f=!0)},o(c){X(s.$$.fragment,c),f=!1},d(c){$(s,c)}}}function Qd(T){let s,f,c,p,b;return p=new S({props:{code:`import torch
from transformers import RobertaTokenizer, XLMRobertaXLForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("xlm-roberta-xlarge")
model = XLMRobertaXLForSequenceClassification.from_pretrained("xlm-roberta-xlarge", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, XLMRobertaXLForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaXLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){s=i("p"),f=r("Example of multi-label classification:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=a(h,"Example of multi-label classification:"),h.forEach(o),c=_(n),M(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),w(p,n,h),b=!0},p:A,i(n){b||(v(p.$$.fragment,n),b=!0)},o(n){X(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),$(p,n)}}}function Hd(T){let s,f;return s=new S({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = XLMRobertaXLForSequenceClassification.from_pretrained(
    "xlm-roberta-xlarge", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaXLForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){k(s.$$.fragment)},l(c){M(s.$$.fragment,c)},m(c,p){w(s,c,p),f=!0},p:A,i(c){f||(v(s.$$.fragment,c),f=!0)},o(c){X(s.$$.fragment,c),f=!1},d(c){$(s,c)}}}function Ud(T){let s,f,c,p,b;return{c(){s=i("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),p=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var h=d(s);f=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(h,"CODE",{});var y=d(c);p=a(y,"Module"),y.forEach(o),b=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){L(n,s,h),e(s,f),e(s,c),e(c,p),e(s,b)},d(n){n&&o(s)}}}function Vd(T){let s,f,c,p,b;return p=new S({props:{code:`from transformers import RobertaTokenizer, XLMRobertaXLForMultipleChoice
import torch

tokenizer = RobertaTokenizer.from_pretrained("xlm-roberta-xlarge")
model = XLMRobertaXLForMultipleChoice.from_pretrained("xlm-roberta-xlarge")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, XLMRobertaXLForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaXLForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){s=i("p"),f=r("Example:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=a(h,"Example:"),h.forEach(o),c=_(n),M(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),w(p,n,h),b=!0},p:A,i(n){b||(v(p.$$.fragment,n),b=!0)},o(n){X(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),$(p,n)}}}function Gd(T){let s,f,c,p,b;return{c(){s=i("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),p=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var h=d(s);f=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(h,"CODE",{});var y=d(c);p=a(y,"Module"),y.forEach(o),b=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){L(n,s,h),e(s,f),e(s,c),e(c,p),e(s,b)},d(n){n&&o(s)}}}function Jd(T){let s,f,c,p,b;return p=new S({props:{code:`from transformers import RobertaTokenizer, XLMRobertaXLForTokenClassification
import torch

tokenizer = RobertaTokenizer.from_pretrained("xlm-roberta-xlarge")
model = XLMRobertaXLForTokenClassification.from_pretrained("xlm-roberta-xlarge")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, XLMRobertaXLForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaXLForTokenClassification.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>)

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
`}}),{c(){s=i("p"),f=r("Example:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=a(h,"Example:"),h.forEach(o),c=_(n),M(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),w(p,n,h),b=!0},p:A,i(n){b||(v(p.$$.fragment,n),b=!0)},o(n){X(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),$(p,n)}}}function Kd(T){let s,f;return s=new S({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(s.$$.fragment)},l(c){M(s.$$.fragment,c)},m(c,p){w(s,c,p),f=!0},p:A,i(c){f||(v(s.$$.fragment,c),f=!0)},o(c){X(s.$$.fragment,c),f=!1},d(c){$(s,c)}}}function Yd(T){let s,f,c,p,b;return{c(){s=i("p"),f=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=i("code"),p=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=l(n,"P",{});var h=d(s);f=a(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=l(h,"CODE",{});var y=d(c);p=a(y,"Module"),y.forEach(o),b=a(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){L(n,s,h),e(s,f),e(s,c),e(c,p),e(s,b)},d(n){n&&o(s)}}}function Zd(T){let s,f,c,p,b;return p=new S({props:{code:`from transformers import RobertaTokenizer, XLMRobertaXLForQuestionAnswering
import torch

tokenizer = RobertaTokenizer.from_pretrained("xlm-roberta-xlarge")
model = XLMRobertaXLForQuestionAnswering.from_pretrained("xlm-roberta-xlarge")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, XLMRobertaXLForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaXLForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){s=i("p"),f=r("Example:"),c=g(),k(p.$$.fragment)},l(n){s=l(n,"P",{});var h=d(s);f=a(h,"Example:"),h.forEach(o),c=_(n),M(p.$$.fragment,n)},m(n,h){L(n,s,h),e(s,f),L(n,c,h),w(p,n,h),b=!0},p:A,i(n){b||(v(p.$$.fragment,n),b=!0)},o(n){X(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),$(p,n)}}}function ec(T){let s,f;return s=new S({props:{code:`# target is "nice puppet"
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
`}}),{c(){k(s.$$.fragment)},l(c){M(s.$$.fragment,c)},m(c,p){w(s,c,p),f=!0},p:A,i(c){f||(v(s.$$.fragment,c),f=!0)},o(c){X(s.$$.fragment,c),f=!1},d(c){$(s,c)}}}function tc(T){let s,f,c,p,b,n,h,y,Fs,Yn,ae,Re,Ho,bt,zs,Uo,Cs,Zn,Fe,qs,Lt,Es,js,es,lo,Ps,ts,co,Vo,As,os,po,Ss,ns,ho,kt,Ns,Go,Is,Os,ss,Q,Ds,Mt,Ws,Bs,wt,Qs,Hs,vt,Us,Vs,rs,ie,ze,Jo,Xt,Gs,Ko,Js,as,N,$t,Ks,G,Ys,mo,Zs,er,Yo,tr,or,Tt,nr,sr,rr,le,ar,uo,ir,lr,fo,dr,cr,pr,Ce,is,de,qe,Zo,yt,hr,en,mr,ls,I,xt,ur,ce,fr,go,gr,_r,Rt,br,Lr,kr,te,Mr,tn,wr,R,vr,on,Xr,$r,nn,Tr,yr,sn,xr,Rr,rn,Fr,zr,an,Cr,qr,ln,Er,jr,dn,Pr,Ar,Ft,Sr,Nr,H,zt,Ir,pe,Or,_o,Dr,Wr,cn,Br,Qr,Hr,Ee,Ur,je,ds,he,Pe,pn,Ct,Vr,hn,Gr,cs,J,qt,Jr,K,Kr,mn,Yr,Zr,bo,ea,ta,Et,oa,na,sa,U,jt,ra,me,aa,Lo,ia,la,un,da,ca,pa,Ae,ha,Se,ps,ue,Ne,fn,Pt,ma,gn,ua,hs,Y,At,fa,Z,ga,_n,_a,ba,ko,La,ka,St,Ma,wa,va,z,Nt,Xa,fe,$a,Mo,Ta,ya,bn,xa,Ra,Fa,Ie,za,Oe,Ca,De,ms,ge,We,Ln,It,qa,kn,Ea,us,O,Ot,ja,Mn,Pa,Aa,_e,Sa,wo,Na,Ia,Dt,Oa,Da,Wa,x,Wt,Ba,be,Qa,vo,Ha,Ua,wn,Va,Ga,Ja,Be,Ka,Qe,Ya,He,Za,Ue,ei,Ve,fs,Le,Ge,vn,Bt,ti,Xn,oi,gs,D,Qt,ni,$n,si,ri,ke,ai,Xo,ii,li,Ht,di,ci,pi,V,Ut,hi,Me,mi,$o,ui,fi,Tn,gi,_i,bi,Je,Li,Ke,_s,we,Ye,yn,Vt,ki,xn,Mi,bs,W,Gt,wi,Rn,vi,Xi,ve,$i,To,Ti,yi,Jt,xi,Ri,Fi,C,Kt,zi,Xe,Ci,yo,qi,Ei,Fn,ji,Pi,Ai,Ze,Si,et,Ni,tt,Ls,$e,ot,zn,Yt,Ii,Cn,Oi,ks,B,Zt,Di,Te,Wi,qn,Bi,Qi,En,Hi,Ui,Vi,ye,Gi,xo,Ji,Ki,eo,Yi,Zi,el,q,to,tl,xe,ol,Ro,nl,sl,jn,rl,al,il,nt,ll,st,dl,rt,Ms;return n=new re({}),bt=new re({}),Xt=new re({}),$t=new F({props:{name:"class transformers.XLMRobertaXLConfig",anchor:"transformers.XLMRobertaXLConfig",parameters:[{name:"vocab_size",val:" = 250880"},{name:"hidden_size",val:" = 2560"},{name:"num_hidden_layers",val:" = 36"},{name:"num_attention_heads",val:" = 32"},{name:"intermediate_size",val:" = 10240"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 514"},{name:"type_vocab_size",val:" = 1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaXLConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 250880) &#x2014;
Vocabulary size of the XLM_ROBERTA_XL model. Defines the number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17196/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLModel">XLMRobertaXLModel</a>.`,name:"vocab_size"},{anchor:"transformers.XLMRobertaXLConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2560) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.XLMRobertaXLConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 36) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.XLMRobertaXLConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.XLMRobertaXLConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 10240) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.XLMRobertaXLConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.XLMRobertaXLConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.XLMRobertaXLConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.XLMRobertaXLConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 514) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.XLMRobertaXLConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_17196/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLModel">XLMRobertaXLModel</a> or
<code>TFXLMRobertaXLModel</code>.`,name:"type_vocab_size"},{anchor:"transformers.XLMRobertaXLConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.XLMRobertaXLConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.XLMRobertaXLConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.XLMRobertaXLConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.XLMRobertaXLConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm_roberta_xl/configuration_xlm_roberta_xl.py#L34"}}),Ce=new P({props:{anchor:"transformers.XLMRobertaXLConfig.example",$$slots:{default:[Ed]},$$scope:{ctx:T}}}),yt=new re({}),xt=new F({props:{name:"class transformers.XLMRobertaXLModel",anchor:"transformers.XLMRobertaXLModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.XLMRobertaXLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig">XLMRobertaXLConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L669"}}),zt=new F({props:{name:"forward",anchor:"transformers.XLMRobertaXLModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaXLModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaXLModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaXLModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaXLModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>. <a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaXLModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaXLModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaXLModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaXLModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaXLModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaXLModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.XLMRobertaXLModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.XLMRobertaXLModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.XLMRobertaXLModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L709",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig"
>XLMRobertaXLConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ee=new io({props:{$$slots:{default:[jd]},$$scope:{ctx:T}}}),je=new P({props:{anchor:"transformers.XLMRobertaXLModel.forward.example",$$slots:{default:[Pd]},$$scope:{ctx:T}}}),Ct=new re({}),qt=new F({props:{name:"class transformers.XLMRobertaXLForCausalLM",anchor:"transformers.XLMRobertaXLForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig">XLMRobertaXLConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L851"}}),jt=new F({props:{name:"forward",anchor:"transformers.XLMRobertaXLForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>. <a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.XLMRobertaXLForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L876",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig"
>XLMRobertaXLConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ae=new io({props:{$$slots:{default:[Ad]},$$scope:{ctx:T}}}),Se=new P({props:{anchor:"transformers.XLMRobertaXLForCausalLM.forward.example",$$slots:{default:[Sd]},$$scope:{ctx:T}}}),Pt=new re({}),At=new F({props:{name:"class transformers.XLMRobertaXLForMaskedLM",anchor:"transformers.XLMRobertaXLForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig">XLMRobertaXLConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1001"}}),Nt=new F({props:{name:"forward",anchor:"transformers.XLMRobertaXLForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>. <a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1029",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig"
>XLMRobertaXLConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ie=new io({props:{$$slots:{default:[Nd]},$$scope:{ctx:T}}}),Oe=new P({props:{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.example",$$slots:{default:[Id]},$$scope:{ctx:T}}}),De=new P({props:{anchor:"transformers.XLMRobertaXLForMaskedLM.forward.example-2",$$slots:{default:[Od]},$$scope:{ctx:T}}}),It=new re({}),Ot=new F({props:{name:"class transformers.XLMRobertaXLForSequenceClassification",anchor:"transformers.XLMRobertaXLForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig">XLMRobertaXLConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1129"}}),Wt=new F({props:{name:"forward",anchor:"transformers.XLMRobertaXLForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>. <a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1142",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig"
>XLMRobertaXLConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Be=new io({props:{$$slots:{default:[Dd]},$$scope:{ctx:T}}}),Qe=new P({props:{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.example",$$slots:{default:[Wd]},$$scope:{ctx:T}}}),He=new P({props:{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.example-2",$$slots:{default:[Bd]},$$scope:{ctx:T}}}),Ue=new P({props:{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.example-3",$$slots:{default:[Qd]},$$scope:{ctx:T}}}),Ve=new P({props:{anchor:"transformers.XLMRobertaXLForSequenceClassification.forward.example-4",$$slots:{default:[Hd]},$$scope:{ctx:T}}}),Bt=new re({}),Qt=new F({props:{name:"class transformers.XLMRobertaXLForMultipleChoice",anchor:"transformers.XLMRobertaXLForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig">XLMRobertaXLConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1226"}}),Ut=new F({props:{name:"forward",anchor:"transformers.XLMRobertaXLForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaXLForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaXLForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaXLForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>. <a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaXLForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaXLForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaXLForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaXLForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaXLForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaXLForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1238",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig"
>XLMRobertaXLConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Je=new io({props:{$$slots:{default:[Ud]},$$scope:{ctx:T}}}),Ke=new P({props:{anchor:"transformers.XLMRobertaXLForMultipleChoice.forward.example",$$slots:{default:[Vd]},$$scope:{ctx:T}}}),Vt=new re({}),Gt=new F({props:{name:"class transformers.XLMRobertaXLForTokenClassification",anchor:"transformers.XLMRobertaXLForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig">XLMRobertaXLConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1320"}}),Kt=new F({props:{name:"forward",anchor:"transformers.XLMRobertaXLForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>. <a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1337",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig"
>XLMRobertaXLConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ze=new io({props:{$$slots:{default:[Gd]},$$scope:{ctx:T}}}),et=new P({props:{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.example",$$slots:{default:[Jd]},$$scope:{ctx:T}}}),tt=new P({props:{anchor:"transformers.XLMRobertaXLForTokenClassification.forward.example-2",$$slots:{default:[Kd]},$$scope:{ctx:T}}}),Yt=new re({}),Zt=new F({props:{name:"class transformers.XLMRobertaXLForQuestionAnswering",anchor:"transformers.XLMRobertaXLForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17196/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig">XLMRobertaXLConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1435"}}),to=new F({props:{name:"forward",anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_17196/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See
<a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_17196/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>. <a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/models/xlm_roberta_xl/modeling_xlm_roberta_xl.py#L1448",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17196/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLConfig"
>XLMRobertaXLConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),nt=new io({props:{$$slots:{default:[Yd]},$$scope:{ctx:T}}}),st=new P({props:{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.example",$$slots:{default:[Zd]},$$scope:{ctx:T}}}),rt=new P({props:{anchor:"transformers.XLMRobertaXLForQuestionAnswering.forward.example-2",$$slots:{default:[ec]},$$scope:{ctx:T}}}),{c(){s=i("meta"),f=g(),c=i("h1"),p=i("a"),b=i("span"),k(n.$$.fragment),h=g(),y=i("span"),Fs=r("XLM-RoBERTa-XL"),Yn=g(),ae=i("h2"),Re=i("a"),Ho=i("span"),k(bt.$$.fragment),zs=g(),Uo=i("span"),Cs=r("Overview"),Zn=g(),Fe=i("p"),qs=r("The XLM-RoBERTa-XL model was proposed in "),Lt=i("a"),Es=r("Larger-Scale Transformers for Multilingual Masked Language Modeling"),js=r(" by Naman Goyal, Jingfei Du, Myle Ott, Giri Anantharaman, Alexis Conneau."),es=g(),lo=i("p"),Ps=r("The abstract from the paper is the following:"),ts=g(),co=i("p"),Vo=i("em"),As=r("Recent work has demonstrated the effectiveness of cross-lingual language model pretraining for cross-lingual understanding. In this study, we present the results of two larger multilingual masked language models, with 3.5B and 10.7B parameters. Our two new models dubbed XLM-R XL and XLM-R XXL outperform XLM-R by 1.8% and 2.4% average accuracy on XNLI. Our model also outperforms the RoBERTa-Large model on several English tasks of the GLUE benchmark by 0.3% on average while handling 99 more languages. This suggests pretrained models with larger capacity may obtain both strong performance on high-resource languages while greatly improving low-resource languages. We make our code and models publicly available."),os=g(),po=i("p"),Ss=r("Tips:"),ns=g(),ho=i("ul"),kt=i("li"),Ns=r(`XLM-RoBERTa-XL is a multilingual model trained on 100 different languages. Unlike some XLM multilingual models, it does
not require `),Go=i("code"),Is=r("lang"),Os=r(` tensors to understand which language is used, and should be able to determine the correct
language from the input ids.`),ss=g(),Q=i("p"),Ds=r("This model was contributed by "),Mt=i("a"),Ws=r("Soonhwan-Kwon"),Bs=r(" and "),wt=i("a"),Qs=r("stefan-it"),Hs=r(". The original code can be found "),vt=i("a"),Us=r("here"),Vs=r("."),rs=g(),ie=i("h2"),ze=i("a"),Jo=i("span"),k(Xt.$$.fragment),Gs=g(),Ko=i("span"),Js=r("XLMRobertaXLConfig"),as=g(),N=i("div"),k($t.$$.fragment),Ks=g(),G=i("p"),Ys=r("This is the configuration class to store the configuration of a "),mo=i("a"),Zs=r("XLMRobertaXLModel"),er=r(" or a "),Yo=i("code"),tr=r("TFXLMRobertaXLModel"),or=r(`.
It is used to instantiate a XLM_ROBERTA_XL model according to the specified arguments, defining the model
architecture. Instantiating a configuration with the defaults will yield a similar configuration to that of the
XLM_ROBERTA_XL `),Tt=i("a"),nr=r("facebook/xlm-roberta-xl"),sr=r(" architecture."),rr=g(),le=i("p"),ar=r("Configuration objects inherit from "),uo=i("a"),ir=r("PretrainedConfig"),lr=r(` and can be used to control the model outputs. Read the
documentation from `),fo=i("a"),dr=r("PretrainedConfig"),cr=r(" for more information."),pr=g(),k(Ce.$$.fragment),is=g(),de=i("h2"),qe=i("a"),Zo=i("span"),k(yt.$$.fragment),hr=g(),en=i("span"),mr=r("XLMRobertaXLModel"),ls=g(),I=i("div"),k(xt.$$.fragment),ur=g(),ce=i("p"),fr=r(`The bare XLM-RoBERTa-xlarge Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),go=i("a"),gr=r("PreTrainedModel"),_r=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Rt=i("a"),br=r("torch.nn.Module"),Lr=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),kr=g(),te=i("p"),Mr=r(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),tn=i("em"),wr=r(`Attention is
all you need`),R=i("em"),vr=r(`by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin. To behave as an decoder the model needs to be initialized with the `),on=i("code"),Xr=r("is_decoder"),$r=r(`
argument of the configuration set to `),nn=i("code"),Tr=r("True"),yr=r(`. To be used in a Seq2Seq model, the model needs to initialized with
both `),sn=i("code"),xr=r("is_decoder"),Rr=r(" argument and "),rn=i("code"),Fr=r("add_cross_attention"),zr=r(" set to "),an=i("code"),Cr=r("True"),qr=r("; an "),ln=i("code"),Er=r("encoder_hidden_states"),jr=r(` is then expected as
an input to the forward pass. .. `),dn=i("em"),Pr=r("Attention is all you need"),Ar=r(": "),Ft=i("a"),Sr=r("https://arxiv.org/abs/1706.03762"),Nr=g(),H=i("div"),k(zt.$$.fragment),Ir=g(),pe=i("p"),Or=r("The "),_o=i("a"),Dr=r("XLMRobertaXLModel"),Wr=r(" forward method, overrides the "),cn=i("code"),Br=r("__call__"),Qr=r(" special method."),Hr=g(),k(Ee.$$.fragment),Ur=g(),k(je.$$.fragment),ds=g(),he=i("h2"),Pe=i("a"),pn=i("span"),k(Ct.$$.fragment),Vr=g(),hn=i("span"),Gr=r("XLMRobertaXLForCausalLM"),cs=g(),J=i("div"),k(qt.$$.fragment),Jr=g(),K=i("p"),Kr=r("XLM-RoBERTa-xlarge Model with a "),mn=i("code"),Yr=r("language modeling"),Zr=r(` head on top for CLM fine-tuning.
This model inherits from `),bo=i("a"),ea=r("PreTrainedModel"),ta=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Et=i("a"),oa=r("torch.nn.Module"),na=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),sa=g(),U=i("div"),k(jt.$$.fragment),ra=g(),me=i("p"),aa=r("The "),Lo=i("a"),ia=r("XLMRobertaXLForCausalLM"),la=r(" forward method, overrides the "),un=i("code"),da=r("__call__"),ca=r(" special method."),pa=g(),k(Ae.$$.fragment),ha=g(),k(Se.$$.fragment),ps=g(),ue=i("h2"),Ne=i("a"),fn=i("span"),k(Pt.$$.fragment),ma=g(),gn=i("span"),ua=r("XLMRobertaXLForMaskedLM"),hs=g(),Y=i("div"),k(At.$$.fragment),fa=g(),Z=i("p"),ga=r("XLM-RoBERTa-xlarge Model with a "),_n=i("code"),_a=r("language modeling"),ba=r(` head on top.
This model inherits from `),ko=i("a"),La=r("PreTrainedModel"),ka=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),St=i("a"),Ma=r("torch.nn.Module"),wa=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),va=g(),z=i("div"),k(Nt.$$.fragment),Xa=g(),fe=i("p"),$a=r("The "),Mo=i("a"),Ta=r("XLMRobertaXLForMaskedLM"),ya=r(" forward method, overrides the "),bn=i("code"),xa=r("__call__"),Ra=r(" special method."),Fa=g(),k(Ie.$$.fragment),za=g(),k(Oe.$$.fragment),Ca=g(),k(De.$$.fragment),ms=g(),ge=i("h2"),We=i("a"),Ln=i("span"),k(It.$$.fragment),qa=g(),kn=i("span"),Ea=r("XLMRobertaXLForSequenceClassification"),us=g(),O=i("div"),k(Ot.$$.fragment),ja=g(),Mn=i("p"),Pa=r(`XLM-RoBERTa-xlarge Model transformer with a sequence classification/regression head on top (a linear layer on top
of the pooled output) e.g. for GLUE tasks.`),Aa=g(),_e=i("p"),Sa=r("This model inherits from "),wo=i("a"),Na=r("PreTrainedModel"),Ia=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Dt=i("a"),Oa=r("torch.nn.Module"),Da=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Wa=g(),x=i("div"),k(Wt.$$.fragment),Ba=g(),be=i("p"),Qa=r("The "),vo=i("a"),Ha=r("XLMRobertaXLForSequenceClassification"),Ua=r(" forward method, overrides the "),wn=i("code"),Va=r("__call__"),Ga=r(" special method."),Ja=g(),k(Be.$$.fragment),Ka=g(),k(Qe.$$.fragment),Ya=g(),k(He.$$.fragment),Za=g(),k(Ue.$$.fragment),ei=g(),k(Ve.$$.fragment),fs=g(),Le=i("h2"),Ge=i("a"),vn=i("span"),k(Bt.$$.fragment),ti=g(),Xn=i("span"),oi=r("XLMRobertaXLForMultipleChoice"),gs=g(),D=i("div"),k(Qt.$$.fragment),ni=g(),$n=i("p"),si=r(`XLM-Roberta-xlarge Model with a multiple choice classification head on top (a linear layer on top of the pooled
output and a softmax) e.g. for RocStories/SWAG tasks.`),ri=g(),ke=i("p"),ai=r("This model inherits from "),Xo=i("a"),ii=r("PreTrainedModel"),li=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Ht=i("a"),di=r("torch.nn.Module"),ci=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),pi=g(),V=i("div"),k(Ut.$$.fragment),hi=g(),Me=i("p"),mi=r("The "),$o=i("a"),ui=r("XLMRobertaXLForMultipleChoice"),fi=r(" forward method, overrides the "),Tn=i("code"),gi=r("__call__"),_i=r(" special method."),bi=g(),k(Je.$$.fragment),Li=g(),k(Ke.$$.fragment),_s=g(),we=i("h2"),Ye=i("a"),yn=i("span"),k(Vt.$$.fragment),ki=g(),xn=i("span"),Mi=r("XLMRobertaXLForTokenClassification"),bs=g(),W=i("div"),k(Gt.$$.fragment),wi=g(),Rn=i("p"),vi=r(`XLM-Roberta-xlarge Model with a token classification head on top (a linear layer on top of the hidden-states
output) e.g. for Named-Entity-Recognition (NER) tasks.`),Xi=g(),ve=i("p"),$i=r("This model inherits from "),To=i("a"),Ti=r("PreTrainedModel"),yi=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Jt=i("a"),xi=r("torch.nn.Module"),Ri=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Fi=g(),C=i("div"),k(Kt.$$.fragment),zi=g(),Xe=i("p"),Ci=r("The "),yo=i("a"),qi=r("XLMRobertaXLForTokenClassification"),Ei=r(" forward method, overrides the "),Fn=i("code"),ji=r("__call__"),Pi=r(" special method."),Ai=g(),k(Ze.$$.fragment),Si=g(),k(et.$$.fragment),Ni=g(),k(tt.$$.fragment),Ls=g(),$e=i("h2"),ot=i("a"),zn=i("span"),k(Yt.$$.fragment),Ii=g(),Cn=i("span"),Oi=r("XLMRobertaXLForQuestionAnswering"),ks=g(),B=i("div"),k(Zt.$$.fragment),Di=g(),Te=i("p"),Wi=r(`XLM-Roberta-xlarge Model with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layers on top of the hidden-states output to compute `),qn=i("code"),Bi=r("span start logits"),Qi=r(" and "),En=i("code"),Hi=r("span end logits"),Ui=r(")."),Vi=g(),ye=i("p"),Gi=r("This model inherits from "),xo=i("a"),Ji=r("PreTrainedModel"),Ki=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),eo=i("a"),Yi=r("torch.nn.Module"),Zi=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),el=g(),q=i("div"),k(to.$$.fragment),tl=g(),xe=i("p"),ol=r("The "),Ro=i("a"),nl=r("XLMRobertaXLForQuestionAnswering"),sl=r(" forward method, overrides the "),jn=i("code"),rl=r("__call__"),al=r(" special method."),il=g(),k(nt.$$.fragment),ll=g(),k(st.$$.fragment),dl=g(),k(rt.$$.fragment),this.h()},l(t){const u=Cd('[data-svelte="svelte-1phssyn"]',document.head);s=l(u,"META",{name:!0,content:!0}),u.forEach(o),f=_(t),c=l(t,"H1",{class:!0});var oo=d(c);p=l(oo,"A",{id:!0,class:!0,href:!0});var Pn=d(p);b=l(Pn,"SPAN",{});var An=d(b);M(n.$$.fragment,An),An.forEach(o),Pn.forEach(o),h=_(oo),y=l(oo,"SPAN",{});var Sn=d(y);Fs=a(Sn,"XLM-RoBERTa-XL"),Sn.forEach(o),oo.forEach(o),Yn=_(t),ae=l(t,"H2",{class:!0});var no=d(ae);Re=l(no,"A",{id:!0,class:!0,href:!0});var Nn=d(Re);Ho=l(Nn,"SPAN",{});var In=d(Ho);M(bt.$$.fragment,In),In.forEach(o),Nn.forEach(o),zs=_(no),Uo=l(no,"SPAN",{});var On=d(Uo);Cs=a(On,"Overview"),On.forEach(o),no.forEach(o),Zn=_(t),Fe=l(t,"P",{});var so=d(Fe);qs=a(so,"The XLM-RoBERTa-XL model was proposed in "),Lt=l(so,"A",{href:!0,rel:!0});var Dn=d(Lt);Es=a(Dn,"Larger-Scale Transformers for Multilingual Masked Language Modeling"),Dn.forEach(o),js=a(so," by Naman Goyal, Jingfei Du, Myle Ott, Giri Anantharaman, Alexis Conneau."),so.forEach(o),es=_(t),lo=l(t,"P",{});var Wn=d(lo);Ps=a(Wn,"The abstract from the paper is the following:"),Wn.forEach(o),ts=_(t),co=l(t,"P",{});var Bn=d(co);Vo=l(Bn,"EM",{});var Qn=d(Vo);As=a(Qn,"Recent work has demonstrated the effectiveness of cross-lingual language model pretraining for cross-lingual understanding. In this study, we present the results of two larger multilingual masked language models, with 3.5B and 10.7B parameters. Our two new models dubbed XLM-R XL and XLM-R XXL outperform XLM-R by 1.8% and 2.4% average accuracy on XNLI. Our model also outperforms the RoBERTa-Large model on several English tasks of the GLUE benchmark by 0.3% on average while handling 99 more languages. This suggests pretrained models with larger capacity may obtain both strong performance on high-resource languages while greatly improving low-resource languages. We make our code and models publicly available."),Qn.forEach(o),Bn.forEach(o),os=_(t),po=l(t,"P",{});var Hn=d(po);Ss=a(Hn,"Tips:"),Hn.forEach(o),ns=_(t),ho=l(t,"UL",{});var Un=d(ho);kt=l(Un,"LI",{});var ro=d(kt);Ns=a(ro,`XLM-RoBERTa-XL is a multilingual model trained on 100 different languages. Unlike some XLM multilingual models, it does
not require `),Go=l(ro,"CODE",{});var Vn=d(Go);Is=a(Vn,"lang"),Vn.forEach(o),Os=a(ro,` tensors to understand which language is used, and should be able to determine the correct
language from the input ids.`),ro.forEach(o),Un.forEach(o),ss=_(t),Q=l(t,"P",{});var ee=d(Q);Ds=a(ee,"This model was contributed by "),Mt=l(ee,"A",{href:!0,rel:!0});var Gn=d(Mt);Ws=a(Gn,"Soonhwan-Kwon"),Gn.forEach(o),Bs=a(ee," and "),wt=l(ee,"A",{href:!0,rel:!0});var Jn=d(wt);Qs=a(Jn,"stefan-it"),Jn.forEach(o),Hs=a(ee,". The original code can be found "),vt=l(ee,"A",{href:!0,rel:!0});var Kn=d(vt);Us=a(Kn,"here"),Kn.forEach(o),Vs=a(ee,"."),ee.forEach(o),rs=_(t),ie=l(t,"H2",{class:!0});var ws=d(ie);ze=l(ws,"A",{id:!0,class:!0,href:!0});var cl=d(ze);Jo=l(cl,"SPAN",{});var pl=d(Jo);M(Xt.$$.fragment,pl),pl.forEach(o),cl.forEach(o),Gs=_(ws),Ko=l(ws,"SPAN",{});var hl=d(Ko);Js=a(hl,"XLMRobertaXLConfig"),hl.forEach(o),ws.forEach(o),as=_(t),N=l(t,"DIV",{class:!0});var at=d(N);M($t.$$.fragment,at),Ks=_(at),G=l(at,"P",{});var it=d(G);Ys=a(it,"This is the configuration class to store the configuration of a "),mo=l(it,"A",{href:!0});var ml=d(mo);Zs=a(ml,"XLMRobertaXLModel"),ml.forEach(o),er=a(it," or a "),Yo=l(it,"CODE",{});var ul=d(Yo);tr=a(ul,"TFXLMRobertaXLModel"),ul.forEach(o),or=a(it,`.
It is used to instantiate a XLM_ROBERTA_XL model according to the specified arguments, defining the model
architecture. Instantiating a configuration with the defaults will yield a similar configuration to that of the
XLM_ROBERTA_XL `),Tt=l(it,"A",{href:!0,rel:!0});var fl=d(Tt);nr=a(fl,"facebook/xlm-roberta-xl"),fl.forEach(o),sr=a(it," architecture."),it.forEach(o),rr=_(at),le=l(at,"P",{});var Fo=d(le);ar=a(Fo,"Configuration objects inherit from "),uo=l(Fo,"A",{href:!0});var gl=d(uo);ir=a(gl,"PretrainedConfig"),gl.forEach(o),lr=a(Fo,` and can be used to control the model outputs. Read the
documentation from `),fo=l(Fo,"A",{href:!0});var _l=d(fo);dr=a(_l,"PretrainedConfig"),_l.forEach(o),cr=a(Fo," for more information."),Fo.forEach(o),pr=_(at),M(Ce.$$.fragment,at),at.forEach(o),is=_(t),de=l(t,"H2",{class:!0});var vs=d(de);qe=l(vs,"A",{id:!0,class:!0,href:!0});var bl=d(qe);Zo=l(bl,"SPAN",{});var Ll=d(Zo);M(yt.$$.fragment,Ll),Ll.forEach(o),bl.forEach(o),hr=_(vs),en=l(vs,"SPAN",{});var kl=d(en);mr=a(kl,"XLMRobertaXLModel"),kl.forEach(o),vs.forEach(o),ls=_(t),I=l(t,"DIV",{class:!0});var lt=d(I);M(xt.$$.fragment,lt),ur=_(lt),ce=l(lt,"P",{});var zo=d(ce);fr=a(zo,`The bare XLM-RoBERTa-xlarge Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),go=l(zo,"A",{href:!0});var Ml=d(go);gr=a(Ml,"PreTrainedModel"),Ml.forEach(o),_r=a(zo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Rt=l(zo,"A",{href:!0,rel:!0});var wl=d(Rt);br=a(wl,"torch.nn.Module"),wl.forEach(o),Lr=a(zo,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),zo.forEach(o),kr=_(lt),te=l(lt,"P",{});var ao=d(te);Mr=a(ao,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),tn=l(ao,"EM",{});var vl=d(tn);wr=a(vl,`Attention is
all you need`),vl.forEach(o),R=l(ao,"EM",{});var E=d(R);vr=a(E,`by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin. To behave as an decoder the model needs to be initialized with the `),on=l(E,"CODE",{});var Xl=d(on);Xr=a(Xl,"is_decoder"),Xl.forEach(o),$r=a(E,`
argument of the configuration set to `),nn=l(E,"CODE",{});var $l=d(nn);Tr=a($l,"True"),$l.forEach(o),yr=a(E,`. To be used in a Seq2Seq model, the model needs to initialized with
both `),sn=l(E,"CODE",{});var Tl=d(sn);xr=a(Tl,"is_decoder"),Tl.forEach(o),Rr=a(E," argument and "),rn=l(E,"CODE",{});var yl=d(rn);Fr=a(yl,"add_cross_attention"),yl.forEach(o),zr=a(E," set to "),an=l(E,"CODE",{});var xl=d(an);Cr=a(xl,"True"),xl.forEach(o),qr=a(E,"; an "),ln=l(E,"CODE",{});var Rl=d(ln);Er=a(Rl,"encoder_hidden_states"),Rl.forEach(o),jr=a(E,` is then expected as
an input to the forward pass. .. `),E.forEach(o),dn=l(ao,"EM",{});var Fl=d(dn);Pr=a(Fl,"Attention is all you need"),Fl.forEach(o),Ar=a(ao,": "),Ft=l(ao,"A",{href:!0,rel:!0});var zl=d(Ft);Sr=a(zl,"https://arxiv.org/abs/1706.03762"),zl.forEach(o),ao.forEach(o),Nr=_(lt),H=l(lt,"DIV",{class:!0});var dt=d(H);M(zt.$$.fragment,dt),Ir=_(dt),pe=l(dt,"P",{});var Co=d(pe);Or=a(Co,"The "),_o=l(Co,"A",{href:!0});var Cl=d(_o);Dr=a(Cl,"XLMRobertaXLModel"),Cl.forEach(o),Wr=a(Co," forward method, overrides the "),cn=l(Co,"CODE",{});var ql=d(cn);Br=a(ql,"__call__"),ql.forEach(o),Qr=a(Co," special method."),Co.forEach(o),Hr=_(dt),M(Ee.$$.fragment,dt),Ur=_(dt),M(je.$$.fragment,dt),dt.forEach(o),lt.forEach(o),ds=_(t),he=l(t,"H2",{class:!0});var Xs=d(he);Pe=l(Xs,"A",{id:!0,class:!0,href:!0});var El=d(Pe);pn=l(El,"SPAN",{});var jl=d(pn);M(Ct.$$.fragment,jl),jl.forEach(o),El.forEach(o),Vr=_(Xs),hn=l(Xs,"SPAN",{});var Pl=d(hn);Gr=a(Pl,"XLMRobertaXLForCausalLM"),Pl.forEach(o),Xs.forEach(o),cs=_(t),J=l(t,"DIV",{class:!0});var qo=d(J);M(qt.$$.fragment,qo),Jr=_(qo),K=l(qo,"P",{});var ct=d(K);Kr=a(ct,"XLM-RoBERTa-xlarge Model with a "),mn=l(ct,"CODE",{});var Al=d(mn);Yr=a(Al,"language modeling"),Al.forEach(o),Zr=a(ct,` head on top for CLM fine-tuning.
This model inherits from `),bo=l(ct,"A",{href:!0});var Sl=d(bo);ea=a(Sl,"PreTrainedModel"),Sl.forEach(o),ta=a(ct,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Et=l(ct,"A",{href:!0,rel:!0});var Nl=d(Et);oa=a(Nl,"torch.nn.Module"),Nl.forEach(o),na=a(ct,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),ct.forEach(o),sa=_(qo),U=l(qo,"DIV",{class:!0});var pt=d(U);M(jt.$$.fragment,pt),ra=_(pt),me=l(pt,"P",{});var Eo=d(me);aa=a(Eo,"The "),Lo=l(Eo,"A",{href:!0});var Il=d(Lo);ia=a(Il,"XLMRobertaXLForCausalLM"),Il.forEach(o),la=a(Eo," forward method, overrides the "),un=l(Eo,"CODE",{});var Ol=d(un);da=a(Ol,"__call__"),Ol.forEach(o),ca=a(Eo," special method."),Eo.forEach(o),pa=_(pt),M(Ae.$$.fragment,pt),ha=_(pt),M(Se.$$.fragment,pt),pt.forEach(o),qo.forEach(o),ps=_(t),ue=l(t,"H2",{class:!0});var $s=d(ue);Ne=l($s,"A",{id:!0,class:!0,href:!0});var Dl=d(Ne);fn=l(Dl,"SPAN",{});var Wl=d(fn);M(Pt.$$.fragment,Wl),Wl.forEach(o),Dl.forEach(o),ma=_($s),gn=l($s,"SPAN",{});var Bl=d(gn);ua=a(Bl,"XLMRobertaXLForMaskedLM"),Bl.forEach(o),$s.forEach(o),hs=_(t),Y=l(t,"DIV",{class:!0});var jo=d(Y);M(At.$$.fragment,jo),fa=_(jo),Z=l(jo,"P",{});var ht=d(Z);ga=a(ht,"XLM-RoBERTa-xlarge Model with a "),_n=l(ht,"CODE",{});var Ql=d(_n);_a=a(Ql,"language modeling"),Ql.forEach(o),ba=a(ht,` head on top.
This model inherits from `),ko=l(ht,"A",{href:!0});var Hl=d(ko);La=a(Hl,"PreTrainedModel"),Hl.forEach(o),ka=a(ht,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),St=l(ht,"A",{href:!0,rel:!0});var Ul=d(St);Ma=a(Ul,"torch.nn.Module"),Ul.forEach(o),wa=a(ht,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),ht.forEach(o),va=_(jo),z=l(jo,"DIV",{class:!0});var oe=d(z);M(Nt.$$.fragment,oe),Xa=_(oe),fe=l(oe,"P",{});var Po=d(fe);$a=a(Po,"The "),Mo=l(Po,"A",{href:!0});var Vl=d(Mo);Ta=a(Vl,"XLMRobertaXLForMaskedLM"),Vl.forEach(o),ya=a(Po," forward method, overrides the "),bn=l(Po,"CODE",{});var Gl=d(bn);xa=a(Gl,"__call__"),Gl.forEach(o),Ra=a(Po," special method."),Po.forEach(o),Fa=_(oe),M(Ie.$$.fragment,oe),za=_(oe),M(Oe.$$.fragment,oe),Ca=_(oe),M(De.$$.fragment,oe),oe.forEach(o),jo.forEach(o),ms=_(t),ge=l(t,"H2",{class:!0});var Ts=d(ge);We=l(Ts,"A",{id:!0,class:!0,href:!0});var Jl=d(We);Ln=l(Jl,"SPAN",{});var Kl=d(Ln);M(It.$$.fragment,Kl),Kl.forEach(o),Jl.forEach(o),qa=_(Ts),kn=l(Ts,"SPAN",{});var Yl=d(kn);Ea=a(Yl,"XLMRobertaXLForSequenceClassification"),Yl.forEach(o),Ts.forEach(o),us=_(t),O=l(t,"DIV",{class:!0});var mt=d(O);M(Ot.$$.fragment,mt),ja=_(mt),Mn=l(mt,"P",{});var Zl=d(Mn);Pa=a(Zl,`XLM-RoBERTa-xlarge Model transformer with a sequence classification/regression head on top (a linear layer on top
of the pooled output) e.g. for GLUE tasks.`),Zl.forEach(o),Aa=_(mt),_e=l(mt,"P",{});var Ao=d(_e);Sa=a(Ao,"This model inherits from "),wo=l(Ao,"A",{href:!0});var ed=d(wo);Na=a(ed,"PreTrainedModel"),ed.forEach(o),Ia=a(Ao,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Dt=l(Ao,"A",{href:!0,rel:!0});var td=d(Dt);Oa=a(td,"torch.nn.Module"),td.forEach(o),Da=a(Ao,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Ao.forEach(o),Wa=_(mt),x=l(mt,"DIV",{class:!0});var j=d(x);M(Wt.$$.fragment,j),Ba=_(j),be=l(j,"P",{});var So=d(be);Qa=a(So,"The "),vo=l(So,"A",{href:!0});var od=d(vo);Ha=a(od,"XLMRobertaXLForSequenceClassification"),od.forEach(o),Ua=a(So," forward method, overrides the "),wn=l(So,"CODE",{});var nd=d(wn);Va=a(nd,"__call__"),nd.forEach(o),Ga=a(So," special method."),So.forEach(o),Ja=_(j),M(Be.$$.fragment,j),Ka=_(j),M(Qe.$$.fragment,j),Ya=_(j),M(He.$$.fragment,j),Za=_(j),M(Ue.$$.fragment,j),ei=_(j),M(Ve.$$.fragment,j),j.forEach(o),mt.forEach(o),fs=_(t),Le=l(t,"H2",{class:!0});var ys=d(Le);Ge=l(ys,"A",{id:!0,class:!0,href:!0});var sd=d(Ge);vn=l(sd,"SPAN",{});var rd=d(vn);M(Bt.$$.fragment,rd),rd.forEach(o),sd.forEach(o),ti=_(ys),Xn=l(ys,"SPAN",{});var ad=d(Xn);oi=a(ad,"XLMRobertaXLForMultipleChoice"),ad.forEach(o),ys.forEach(o),gs=_(t),D=l(t,"DIV",{class:!0});var ut=d(D);M(Qt.$$.fragment,ut),ni=_(ut),$n=l(ut,"P",{});var id=d($n);si=a(id,`XLM-Roberta-xlarge Model with a multiple choice classification head on top (a linear layer on top of the pooled
output and a softmax) e.g. for RocStories/SWAG tasks.`),id.forEach(o),ri=_(ut),ke=l(ut,"P",{});var No=d(ke);ai=a(No,"This model inherits from "),Xo=l(No,"A",{href:!0});var ld=d(Xo);ii=a(ld,"PreTrainedModel"),ld.forEach(o),li=a(No,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Ht=l(No,"A",{href:!0,rel:!0});var dd=d(Ht);di=a(dd,"torch.nn.Module"),dd.forEach(o),ci=a(No,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),No.forEach(o),pi=_(ut),V=l(ut,"DIV",{class:!0});var ft=d(V);M(Ut.$$.fragment,ft),hi=_(ft),Me=l(ft,"P",{});var Io=d(Me);mi=a(Io,"The "),$o=l(Io,"A",{href:!0});var cd=d($o);ui=a(cd,"XLMRobertaXLForMultipleChoice"),cd.forEach(o),fi=a(Io," forward method, overrides the "),Tn=l(Io,"CODE",{});var pd=d(Tn);gi=a(pd,"__call__"),pd.forEach(o),_i=a(Io," special method."),Io.forEach(o),bi=_(ft),M(Je.$$.fragment,ft),Li=_(ft),M(Ke.$$.fragment,ft),ft.forEach(o),ut.forEach(o),_s=_(t),we=l(t,"H2",{class:!0});var xs=d(we);Ye=l(xs,"A",{id:!0,class:!0,href:!0});var hd=d(Ye);yn=l(hd,"SPAN",{});var md=d(yn);M(Vt.$$.fragment,md),md.forEach(o),hd.forEach(o),ki=_(xs),xn=l(xs,"SPAN",{});var ud=d(xn);Mi=a(ud,"XLMRobertaXLForTokenClassification"),ud.forEach(o),xs.forEach(o),bs=_(t),W=l(t,"DIV",{class:!0});var gt=d(W);M(Gt.$$.fragment,gt),wi=_(gt),Rn=l(gt,"P",{});var fd=d(Rn);vi=a(fd,`XLM-Roberta-xlarge Model with a token classification head on top (a linear layer on top of the hidden-states
output) e.g. for Named-Entity-Recognition (NER) tasks.`),fd.forEach(o),Xi=_(gt),ve=l(gt,"P",{});var Oo=d(ve);$i=a(Oo,"This model inherits from "),To=l(Oo,"A",{href:!0});var gd=d(To);Ti=a(gd,"PreTrainedModel"),gd.forEach(o),yi=a(Oo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),Jt=l(Oo,"A",{href:!0,rel:!0});var _d=d(Jt);xi=a(_d,"torch.nn.Module"),_d.forEach(o),Ri=a(Oo,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Oo.forEach(o),Fi=_(gt),C=l(gt,"DIV",{class:!0});var ne=d(C);M(Kt.$$.fragment,ne),zi=_(ne),Xe=l(ne,"P",{});var Do=d(Xe);Ci=a(Do,"The "),yo=l(Do,"A",{href:!0});var bd=d(yo);qi=a(bd,"XLMRobertaXLForTokenClassification"),bd.forEach(o),Ei=a(Do," forward method, overrides the "),Fn=l(Do,"CODE",{});var Ld=d(Fn);ji=a(Ld,"__call__"),Ld.forEach(o),Pi=a(Do," special method."),Do.forEach(o),Ai=_(ne),M(Ze.$$.fragment,ne),Si=_(ne),M(et.$$.fragment,ne),Ni=_(ne),M(tt.$$.fragment,ne),ne.forEach(o),gt.forEach(o),Ls=_(t),$e=l(t,"H2",{class:!0});var Rs=d($e);ot=l(Rs,"A",{id:!0,class:!0,href:!0});var kd=d(ot);zn=l(kd,"SPAN",{});var Md=d(zn);M(Yt.$$.fragment,Md),Md.forEach(o),kd.forEach(o),Ii=_(Rs),Cn=l(Rs,"SPAN",{});var wd=d(Cn);Oi=a(wd,"XLMRobertaXLForQuestionAnswering"),wd.forEach(o),Rs.forEach(o),ks=_(t),B=l(t,"DIV",{class:!0});var _t=d(B);M(Zt.$$.fragment,_t),Di=_(_t),Te=l(_t,"P",{});var Wo=d(Te);Wi=a(Wo,`XLM-Roberta-xlarge Model with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layers on top of the hidden-states output to compute `),qn=l(Wo,"CODE",{});var vd=d(qn);Bi=a(vd,"span start logits"),vd.forEach(o),Qi=a(Wo," and "),En=l(Wo,"CODE",{});var Xd=d(En);Hi=a(Xd,"span end logits"),Xd.forEach(o),Ui=a(Wo,")."),Wo.forEach(o),Vi=_(_t),ye=l(_t,"P",{});var Bo=d(ye);Gi=a(Bo,"This model inherits from "),xo=l(Bo,"A",{href:!0});var $d=d(xo);Ji=a($d,"PreTrainedModel"),$d.forEach(o),Ki=a(Bo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.) This model is also a PyTorch `),eo=l(Bo,"A",{href:!0,rel:!0});var Td=d(eo);Yi=a(Td,"torch.nn.Module"),Td.forEach(o),Zi=a(Bo,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Bo.forEach(o),el=_(_t),q=l(_t,"DIV",{class:!0});var se=d(q);M(to.$$.fragment,se),tl=_(se),xe=l(se,"P",{});var Qo=d(xe);ol=a(Qo,"The "),Ro=l(Qo,"A",{href:!0});var yd=d(Ro);nl=a(yd,"XLMRobertaXLForQuestionAnswering"),yd.forEach(o),sl=a(Qo," forward method, overrides the "),jn=l(Qo,"CODE",{});var xd=d(jn);rl=a(xd,"__call__"),xd.forEach(o),al=a(Qo," special method."),Qo.forEach(o),il=_(se),M(nt.$$.fragment,se),ll=_(se),M(st.$$.fragment,se),dl=_(se),M(rt.$$.fragment,se),se.forEach(o),_t.forEach(o),this.h()},h(){m(s,"name","hf:doc:metadata"),m(s,"content",JSON.stringify(oc)),m(p,"id","xlmrobertaxl"),m(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(p,"href","#xlmrobertaxl"),m(c,"class","relative group"),m(Re,"id","overview"),m(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Re,"href","#overview"),m(ae,"class","relative group"),m(Lt,"href","https://arxiv.org/abs/2105.00572"),m(Lt,"rel","nofollow"),m(Mt,"href","https://github.com/Soonhwan-Kwon"),m(Mt,"rel","nofollow"),m(wt,"href","https://huggingface.co/stefan-it"),m(wt,"rel","nofollow"),m(vt,"href","https://github.com/pytorch/fairseq/tree/master/examples/xlmr"),m(vt,"rel","nofollow"),m(ze,"id","transformers.XLMRobertaXLConfig"),m(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ze,"href","#transformers.XLMRobertaXLConfig"),m(ie,"class","relative group"),m(mo,"href","/docs/transformers/pr_17196/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLModel"),m(Tt,"href","https://huggingface.co/facebook/xlm-roberta-xl"),m(Tt,"rel","nofollow"),m(uo,"href","/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig"),m(fo,"href","/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig"),m(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qe,"id","transformers.XLMRobertaXLModel"),m(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(qe,"href","#transformers.XLMRobertaXLModel"),m(de,"class","relative group"),m(go,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),m(Rt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Rt,"rel","nofollow"),m(Ft,"href","https://arxiv.org/abs/1706.03762"),m(Ft,"rel","nofollow"),m(_o,"href","/docs/transformers/pr_17196/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLModel"),m(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Pe,"id","transformers.XLMRobertaXLForCausalLM"),m(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Pe,"href","#transformers.XLMRobertaXLForCausalLM"),m(he,"class","relative group"),m(bo,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),m(Et,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Et,"rel","nofollow"),m(Lo,"href","/docs/transformers/pr_17196/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLForCausalLM"),m(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ne,"id","transformers.XLMRobertaXLForMaskedLM"),m(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ne,"href","#transformers.XLMRobertaXLForMaskedLM"),m(ue,"class","relative group"),m(ko,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),m(St,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(St,"rel","nofollow"),m(Mo,"href","/docs/transformers/pr_17196/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLForMaskedLM"),m(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(We,"id","transformers.XLMRobertaXLForSequenceClassification"),m(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(We,"href","#transformers.XLMRobertaXLForSequenceClassification"),m(ge,"class","relative group"),m(wo,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),m(Dt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Dt,"rel","nofollow"),m(vo,"href","/docs/transformers/pr_17196/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLForSequenceClassification"),m(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ge,"id","transformers.XLMRobertaXLForMultipleChoice"),m(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ge,"href","#transformers.XLMRobertaXLForMultipleChoice"),m(Le,"class","relative group"),m(Xo,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),m(Ht,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Ht,"rel","nofollow"),m($o,"href","/docs/transformers/pr_17196/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLForMultipleChoice"),m(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ye,"id","transformers.XLMRobertaXLForTokenClassification"),m(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ye,"href","#transformers.XLMRobertaXLForTokenClassification"),m(we,"class","relative group"),m(To,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),m(Jt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Jt,"rel","nofollow"),m(yo,"href","/docs/transformers/pr_17196/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLForTokenClassification"),m(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ot,"id","transformers.XLMRobertaXLForQuestionAnswering"),m(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ot,"href","#transformers.XLMRobertaXLForQuestionAnswering"),m($e,"class","relative group"),m(xo,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),m(eo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(eo,"rel","nofollow"),m(Ro,"href","/docs/transformers/pr_17196/en/model_doc/xlm-roberta-xl#transformers.XLMRobertaXLForQuestionAnswering"),m(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,s),L(t,f,u),L(t,c,u),e(c,p),e(p,b),w(n,b,null),e(c,h),e(c,y),e(y,Fs),L(t,Yn,u),L(t,ae,u),e(ae,Re),e(Re,Ho),w(bt,Ho,null),e(ae,zs),e(ae,Uo),e(Uo,Cs),L(t,Zn,u),L(t,Fe,u),e(Fe,qs),e(Fe,Lt),e(Lt,Es),e(Fe,js),L(t,es,u),L(t,lo,u),e(lo,Ps),L(t,ts,u),L(t,co,u),e(co,Vo),e(Vo,As),L(t,os,u),L(t,po,u),e(po,Ss),L(t,ns,u),L(t,ho,u),e(ho,kt),e(kt,Ns),e(kt,Go),e(Go,Is),e(kt,Os),L(t,ss,u),L(t,Q,u),e(Q,Ds),e(Q,Mt),e(Mt,Ws),e(Q,Bs),e(Q,wt),e(wt,Qs),e(Q,Hs),e(Q,vt),e(vt,Us),e(Q,Vs),L(t,rs,u),L(t,ie,u),e(ie,ze),e(ze,Jo),w(Xt,Jo,null),e(ie,Gs),e(ie,Ko),e(Ko,Js),L(t,as,u),L(t,N,u),w($t,N,null),e(N,Ks),e(N,G),e(G,Ys),e(G,mo),e(mo,Zs),e(G,er),e(G,Yo),e(Yo,tr),e(G,or),e(G,Tt),e(Tt,nr),e(G,sr),e(N,rr),e(N,le),e(le,ar),e(le,uo),e(uo,ir),e(le,lr),e(le,fo),e(fo,dr),e(le,cr),e(N,pr),w(Ce,N,null),L(t,is,u),L(t,de,u),e(de,qe),e(qe,Zo),w(yt,Zo,null),e(de,hr),e(de,en),e(en,mr),L(t,ls,u),L(t,I,u),w(xt,I,null),e(I,ur),e(I,ce),e(ce,fr),e(ce,go),e(go,gr),e(ce,_r),e(ce,Rt),e(Rt,br),e(ce,Lr),e(I,kr),e(I,te),e(te,Mr),e(te,tn),e(tn,wr),e(te,R),e(R,vr),e(R,on),e(on,Xr),e(R,$r),e(R,nn),e(nn,Tr),e(R,yr),e(R,sn),e(sn,xr),e(R,Rr),e(R,rn),e(rn,Fr),e(R,zr),e(R,an),e(an,Cr),e(R,qr),e(R,ln),e(ln,Er),e(R,jr),e(te,dn),e(dn,Pr),e(te,Ar),e(te,Ft),e(Ft,Sr),e(I,Nr),e(I,H),w(zt,H,null),e(H,Ir),e(H,pe),e(pe,Or),e(pe,_o),e(_o,Dr),e(pe,Wr),e(pe,cn),e(cn,Br),e(pe,Qr),e(H,Hr),w(Ee,H,null),e(H,Ur),w(je,H,null),L(t,ds,u),L(t,he,u),e(he,Pe),e(Pe,pn),w(Ct,pn,null),e(he,Vr),e(he,hn),e(hn,Gr),L(t,cs,u),L(t,J,u),w(qt,J,null),e(J,Jr),e(J,K),e(K,Kr),e(K,mn),e(mn,Yr),e(K,Zr),e(K,bo),e(bo,ea),e(K,ta),e(K,Et),e(Et,oa),e(K,na),e(J,sa),e(J,U),w(jt,U,null),e(U,ra),e(U,me),e(me,aa),e(me,Lo),e(Lo,ia),e(me,la),e(me,un),e(un,da),e(me,ca),e(U,pa),w(Ae,U,null),e(U,ha),w(Se,U,null),L(t,ps,u),L(t,ue,u),e(ue,Ne),e(Ne,fn),w(Pt,fn,null),e(ue,ma),e(ue,gn),e(gn,ua),L(t,hs,u),L(t,Y,u),w(At,Y,null),e(Y,fa),e(Y,Z),e(Z,ga),e(Z,_n),e(_n,_a),e(Z,ba),e(Z,ko),e(ko,La),e(Z,ka),e(Z,St),e(St,Ma),e(Z,wa),e(Y,va),e(Y,z),w(Nt,z,null),e(z,Xa),e(z,fe),e(fe,$a),e(fe,Mo),e(Mo,Ta),e(fe,ya),e(fe,bn),e(bn,xa),e(fe,Ra),e(z,Fa),w(Ie,z,null),e(z,za),w(Oe,z,null),e(z,Ca),w(De,z,null),L(t,ms,u),L(t,ge,u),e(ge,We),e(We,Ln),w(It,Ln,null),e(ge,qa),e(ge,kn),e(kn,Ea),L(t,us,u),L(t,O,u),w(Ot,O,null),e(O,ja),e(O,Mn),e(Mn,Pa),e(O,Aa),e(O,_e),e(_e,Sa),e(_e,wo),e(wo,Na),e(_e,Ia),e(_e,Dt),e(Dt,Oa),e(_e,Da),e(O,Wa),e(O,x),w(Wt,x,null),e(x,Ba),e(x,be),e(be,Qa),e(be,vo),e(vo,Ha),e(be,Ua),e(be,wn),e(wn,Va),e(be,Ga),e(x,Ja),w(Be,x,null),e(x,Ka),w(Qe,x,null),e(x,Ya),w(He,x,null),e(x,Za),w(Ue,x,null),e(x,ei),w(Ve,x,null),L(t,fs,u),L(t,Le,u),e(Le,Ge),e(Ge,vn),w(Bt,vn,null),e(Le,ti),e(Le,Xn),e(Xn,oi),L(t,gs,u),L(t,D,u),w(Qt,D,null),e(D,ni),e(D,$n),e($n,si),e(D,ri),e(D,ke),e(ke,ai),e(ke,Xo),e(Xo,ii),e(ke,li),e(ke,Ht),e(Ht,di),e(ke,ci),e(D,pi),e(D,V),w(Ut,V,null),e(V,hi),e(V,Me),e(Me,mi),e(Me,$o),e($o,ui),e(Me,fi),e(Me,Tn),e(Tn,gi),e(Me,_i),e(V,bi),w(Je,V,null),e(V,Li),w(Ke,V,null),L(t,_s,u),L(t,we,u),e(we,Ye),e(Ye,yn),w(Vt,yn,null),e(we,ki),e(we,xn),e(xn,Mi),L(t,bs,u),L(t,W,u),w(Gt,W,null),e(W,wi),e(W,Rn),e(Rn,vi),e(W,Xi),e(W,ve),e(ve,$i),e(ve,To),e(To,Ti),e(ve,yi),e(ve,Jt),e(Jt,xi),e(ve,Ri),e(W,Fi),e(W,C),w(Kt,C,null),e(C,zi),e(C,Xe),e(Xe,Ci),e(Xe,yo),e(yo,qi),e(Xe,Ei),e(Xe,Fn),e(Fn,ji),e(Xe,Pi),e(C,Ai),w(Ze,C,null),e(C,Si),w(et,C,null),e(C,Ni),w(tt,C,null),L(t,Ls,u),L(t,$e,u),e($e,ot),e(ot,zn),w(Yt,zn,null),e($e,Ii),e($e,Cn),e(Cn,Oi),L(t,ks,u),L(t,B,u),w(Zt,B,null),e(B,Di),e(B,Te),e(Te,Wi),e(Te,qn),e(qn,Bi),e(Te,Qi),e(Te,En),e(En,Hi),e(Te,Ui),e(B,Vi),e(B,ye),e(ye,Gi),e(ye,xo),e(xo,Ji),e(ye,Ki),e(ye,eo),e(eo,Yi),e(ye,Zi),e(B,el),e(B,q),w(to,q,null),e(q,tl),e(q,xe),e(xe,ol),e(xe,Ro),e(Ro,nl),e(xe,sl),e(xe,jn),e(jn,rl),e(xe,al),e(q,il),w(nt,q,null),e(q,ll),w(st,q,null),e(q,dl),w(rt,q,null),Ms=!0},p(t,[u]){const oo={};u&2&&(oo.$$scope={dirty:u,ctx:t}),Ce.$set(oo);const Pn={};u&2&&(Pn.$$scope={dirty:u,ctx:t}),Ee.$set(Pn);const An={};u&2&&(An.$$scope={dirty:u,ctx:t}),je.$set(An);const Sn={};u&2&&(Sn.$$scope={dirty:u,ctx:t}),Ae.$set(Sn);const no={};u&2&&(no.$$scope={dirty:u,ctx:t}),Se.$set(no);const Nn={};u&2&&(Nn.$$scope={dirty:u,ctx:t}),Ie.$set(Nn);const In={};u&2&&(In.$$scope={dirty:u,ctx:t}),Oe.$set(In);const On={};u&2&&(On.$$scope={dirty:u,ctx:t}),De.$set(On);const so={};u&2&&(so.$$scope={dirty:u,ctx:t}),Be.$set(so);const Dn={};u&2&&(Dn.$$scope={dirty:u,ctx:t}),Qe.$set(Dn);const Wn={};u&2&&(Wn.$$scope={dirty:u,ctx:t}),He.$set(Wn);const Bn={};u&2&&(Bn.$$scope={dirty:u,ctx:t}),Ue.$set(Bn);const Qn={};u&2&&(Qn.$$scope={dirty:u,ctx:t}),Ve.$set(Qn);const Hn={};u&2&&(Hn.$$scope={dirty:u,ctx:t}),Je.$set(Hn);const Un={};u&2&&(Un.$$scope={dirty:u,ctx:t}),Ke.$set(Un);const ro={};u&2&&(ro.$$scope={dirty:u,ctx:t}),Ze.$set(ro);const Vn={};u&2&&(Vn.$$scope={dirty:u,ctx:t}),et.$set(Vn);const ee={};u&2&&(ee.$$scope={dirty:u,ctx:t}),tt.$set(ee);const Gn={};u&2&&(Gn.$$scope={dirty:u,ctx:t}),nt.$set(Gn);const Jn={};u&2&&(Jn.$$scope={dirty:u,ctx:t}),st.$set(Jn);const Kn={};u&2&&(Kn.$$scope={dirty:u,ctx:t}),rt.$set(Kn)},i(t){Ms||(v(n.$$.fragment,t),v(bt.$$.fragment,t),v(Xt.$$.fragment,t),v($t.$$.fragment,t),v(Ce.$$.fragment,t),v(yt.$$.fragment,t),v(xt.$$.fragment,t),v(zt.$$.fragment,t),v(Ee.$$.fragment,t),v(je.$$.fragment,t),v(Ct.$$.fragment,t),v(qt.$$.fragment,t),v(jt.$$.fragment,t),v(Ae.$$.fragment,t),v(Se.$$.fragment,t),v(Pt.$$.fragment,t),v(At.$$.fragment,t),v(Nt.$$.fragment,t),v(Ie.$$.fragment,t),v(Oe.$$.fragment,t),v(De.$$.fragment,t),v(It.$$.fragment,t),v(Ot.$$.fragment,t),v(Wt.$$.fragment,t),v(Be.$$.fragment,t),v(Qe.$$.fragment,t),v(He.$$.fragment,t),v(Ue.$$.fragment,t),v(Ve.$$.fragment,t),v(Bt.$$.fragment,t),v(Qt.$$.fragment,t),v(Ut.$$.fragment,t),v(Je.$$.fragment,t),v(Ke.$$.fragment,t),v(Vt.$$.fragment,t),v(Gt.$$.fragment,t),v(Kt.$$.fragment,t),v(Ze.$$.fragment,t),v(et.$$.fragment,t),v(tt.$$.fragment,t),v(Yt.$$.fragment,t),v(Zt.$$.fragment,t),v(to.$$.fragment,t),v(nt.$$.fragment,t),v(st.$$.fragment,t),v(rt.$$.fragment,t),Ms=!0)},o(t){X(n.$$.fragment,t),X(bt.$$.fragment,t),X(Xt.$$.fragment,t),X($t.$$.fragment,t),X(Ce.$$.fragment,t),X(yt.$$.fragment,t),X(xt.$$.fragment,t),X(zt.$$.fragment,t),X(Ee.$$.fragment,t),X(je.$$.fragment,t),X(Ct.$$.fragment,t),X(qt.$$.fragment,t),X(jt.$$.fragment,t),X(Ae.$$.fragment,t),X(Se.$$.fragment,t),X(Pt.$$.fragment,t),X(At.$$.fragment,t),X(Nt.$$.fragment,t),X(Ie.$$.fragment,t),X(Oe.$$.fragment,t),X(De.$$.fragment,t),X(It.$$.fragment,t),X(Ot.$$.fragment,t),X(Wt.$$.fragment,t),X(Be.$$.fragment,t),X(Qe.$$.fragment,t),X(He.$$.fragment,t),X(Ue.$$.fragment,t),X(Ve.$$.fragment,t),X(Bt.$$.fragment,t),X(Qt.$$.fragment,t),X(Ut.$$.fragment,t),X(Je.$$.fragment,t),X(Ke.$$.fragment,t),X(Vt.$$.fragment,t),X(Gt.$$.fragment,t),X(Kt.$$.fragment,t),X(Ze.$$.fragment,t),X(et.$$.fragment,t),X(tt.$$.fragment,t),X(Yt.$$.fragment,t),X(Zt.$$.fragment,t),X(to.$$.fragment,t),X(nt.$$.fragment,t),X(st.$$.fragment,t),X(rt.$$.fragment,t),Ms=!1},d(t){o(s),t&&o(f),t&&o(c),$(n),t&&o(Yn),t&&o(ae),$(bt),t&&o(Zn),t&&o(Fe),t&&o(es),t&&o(lo),t&&o(ts),t&&o(co),t&&o(os),t&&o(po),t&&o(ns),t&&o(ho),t&&o(ss),t&&o(Q),t&&o(rs),t&&o(ie),$(Xt),t&&o(as),t&&o(N),$($t),$(Ce),t&&o(is),t&&o(de),$(yt),t&&o(ls),t&&o(I),$(xt),$(zt),$(Ee),$(je),t&&o(ds),t&&o(he),$(Ct),t&&o(cs),t&&o(J),$(qt),$(jt),$(Ae),$(Se),t&&o(ps),t&&o(ue),$(Pt),t&&o(hs),t&&o(Y),$(At),$(Nt),$(Ie),$(Oe),$(De),t&&o(ms),t&&o(ge),$(It),t&&o(us),t&&o(O),$(Ot),$(Wt),$(Be),$(Qe),$(He),$(Ue),$(Ve),t&&o(fs),t&&o(Le),$(Bt),t&&o(gs),t&&o(D),$(Qt),$(Ut),$(Je),$(Ke),t&&o(_s),t&&o(we),$(Vt),t&&o(bs),t&&o(W),$(Gt),$(Kt),$(Ze),$(et),$(tt),t&&o(Ls),t&&o($e),$(Yt),t&&o(ks),t&&o(B),$(Zt),$(to),$(nt),$(st),$(rt)}}}const oc={local:"xlmrobertaxl",sections:[{local:"overview",title:"Overview"},{local:"transformers.XLMRobertaXLConfig",title:"XLMRobertaXLConfig"},{local:"transformers.XLMRobertaXLModel",title:"XLMRobertaXLModel"},{local:"transformers.XLMRobertaXLForCausalLM",title:"XLMRobertaXLForCausalLM"},{local:"transformers.XLMRobertaXLForMaskedLM",title:"XLMRobertaXLForMaskedLM"},{local:"transformers.XLMRobertaXLForSequenceClassification",title:"XLMRobertaXLForSequenceClassification"},{local:"transformers.XLMRobertaXLForMultipleChoice",title:"XLMRobertaXLForMultipleChoice"},{local:"transformers.XLMRobertaXLForTokenClassification",title:"XLMRobertaXLForTokenClassification"},{local:"transformers.XLMRobertaXLForQuestionAnswering",title:"XLMRobertaXLForQuestionAnswering"}],title:"XLM-RoBERTa-XL"};function nc(T){return qd(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class cc extends Rd{constructor(s){super();Fd(this,s,nc,tc,zd,{})}}export{cc as default,oc as metadata};
