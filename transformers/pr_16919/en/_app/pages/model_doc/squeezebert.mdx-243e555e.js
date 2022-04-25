import{S as gm,i as _m,s as bm,e as i,k as p,w as b,t as r,M as km,c as l,d as s,m as u,a as d,x as k,h as a,b as g,F as e,g as v,y as z,q as $,o as q,B as w,v as zm,L as C}from"../../chunks/vendor-6b77c823.js";import{T as In}from"../../chunks/Tip-39098574.js";import{D as K}from"../../chunks/Docstring-1088f2fb.js";import{C as P}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ne}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as x}from"../../chunks/ExampleCodeBlock-5212b321.js";function $m(T){let o,h,n,m,y;return m=new P({props:{code:`from transformers import SqueezeBertModel, SqueezeBertConfig

# Initializing a SqueezeBERT configuration
configuration = SqueezeBertConfig()

# Initializing a model from the configuration above
model = SqueezeBertModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SqueezeBertModel, SqueezeBertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a SqueezeBERT configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = SqueezeBertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration above</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SqueezeBertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){o=i("p"),h=r("Examples:"),n=p(),b(m.$$.fragment)},l(c){o=l(c,"P",{});var _=d(o);h=a(_,"Examples:"),_.forEach(s),n=u(c),k(m.$$.fragment,c)},m(c,_){v(c,o,_),e(o,h),v(c,n,_),z(m,c,_),y=!0},p:C,i(c){y||($(m.$$.fragment,c),y=!0)},o(c){q(m.$$.fragment,c),y=!1},d(c){c&&s(o),c&&s(n),w(m,c)}}}function qm(T){let o,h;return o=new P({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){b(o.$$.fragment)},l(n){k(o.$$.fragment,n)},m(n,m){z(o,n,m),h=!0},p:C,i(n){h||($(o.$$.fragment,n),h=!0)},o(n){q(o.$$.fragment,n),h=!1},d(n){w(o,n)}}}function wm(T){let o,h;return o=new P({props:{code:`Internal class hierarchy:
SqueezeBertModel
    SqueezeBertEncoder
        SqueezeBertModule
        SqueezeBertSelfAttention
            ConvActivation
            ConvDropoutLayerNorm`,highlighted:`Internal <span class="hljs-keyword">class</span> <span class="hljs-symbol">hierarchy:
<span class="hljs-symbol">SqueezeBertModel</span></span>
    <span class="hljs-symbol">SqueezeBertEncoder</span>
        <span class="hljs-symbol">SqueezeBertModule</span>
        <span class="hljs-symbol">SqueezeBertSelfAttention</span>
            <span class="hljs-symbol">ConvActivation</span>
            <span class="hljs-symbol">ConvDropoutLayerNorm</span>`}}),{c(){b(o.$$.fragment)},l(n){k(o.$$.fragment,n)},m(n,m){z(o,n,m),h=!0},p:C,i(n){h||($(o.$$.fragment,n),h=!0)},o(n){q(o.$$.fragment,n),h=!1},d(n){w(o,n)}}}function vm(T){let o,h;return o=new P({props:{code:`Input data is in [batch, sequence_length, hidden_size] format.

Data inside the encoder is in [batch, hidden_size, sequence_length] format. But, if \`output_hidden_states == True\`, the data from inside the encoder is returned in [batch, sequence_length, hidden_size] format.

The final output of the encoder is in [batch, sequence_length, hidden_size] format.`,highlighted:`<span class="hljs-keyword">Input</span> data <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

Data inside the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, hidden_size, sequence_length] <span class="hljs-keyword">format</span>. But, <span class="hljs-keyword">if</span> \`output_hidden_states == <span class="hljs-keyword">True</span>\`, the data <span class="hljs-keyword">from</span> inside the encoder <span class="hljs-keyword">is</span> returned <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

The final output <span class="hljs-keyword">of</span> the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.`}}),{c(){b(o.$$.fragment)},l(n){k(o.$$.fragment,n)},m(n,m){z(o,n,m),h=!0},p:C,i(n){h||($(o.$$.fragment,n),h=!0)},o(n){q(o.$$.fragment,n),h=!1},d(n){w(o,n)}}}function ym(T){let o,h,n,m,y;return{c(){o=i("p"),h=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),n=i("code"),m=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){o=l(c,"P",{});var _=d(o);h=a(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),n=l(_,"CODE",{});var A=d(n);m=a(A,"Module"),A.forEach(s),y=a(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(c,_){v(c,o,_),e(o,h),e(o,n),e(n,m),e(o,y)},d(c){c&&s(o)}}}function Tm(T){let o,h,n,m,y;return m=new P({props:{code:`from transformers import SqueezeBertTokenizer, SqueezeBertModel
import torch

tokenizer = SqueezeBertTokenizer.from_pretrained("squeezebert/squeezebert-uncased")
model = SqueezeBertModel.from_pretrained("squeezebert/squeezebert-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SqueezeBertTokenizer, SqueezeBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = SqueezeBertTokenizer.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SqueezeBertModel.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){o=i("p"),h=r("Example:"),n=p(),b(m.$$.fragment)},l(c){o=l(c,"P",{});var _=d(o);h=a(_,"Example:"),_.forEach(s),n=u(c),k(m.$$.fragment,c)},m(c,_){v(c,o,_),e(o,h),v(c,n,_),z(m,c,_),y=!0},p:C,i(c){y||($(m.$$.fragment,c),y=!0)},o(c){q(m.$$.fragment,c),y=!1},d(c){c&&s(o),c&&s(n),w(m,c)}}}function Sm(T){let o,h;return o=new P({props:{code:`Internal class hierarchy:
SqueezeBertModel
    SqueezeBertEncoder
        SqueezeBertModule
        SqueezeBertSelfAttention
            ConvActivation
            ConvDropoutLayerNorm`,highlighted:`Internal <span class="hljs-keyword">class</span> <span class="hljs-symbol">hierarchy:
<span class="hljs-symbol">SqueezeBertModel</span></span>
    <span class="hljs-symbol">SqueezeBertEncoder</span>
        <span class="hljs-symbol">SqueezeBertModule</span>
        <span class="hljs-symbol">SqueezeBertSelfAttention</span>
            <span class="hljs-symbol">ConvActivation</span>
            <span class="hljs-symbol">ConvDropoutLayerNorm</span>`}}),{c(){b(o.$$.fragment)},l(n){k(o.$$.fragment,n)},m(n,m){z(o,n,m),h=!0},p:C,i(n){h||($(o.$$.fragment,n),h=!0)},o(n){q(o.$$.fragment,n),h=!1},d(n){w(o,n)}}}function Bm(T){let o,h;return o=new P({props:{code:`Input data is in [batch, sequence_length, hidden_size] format.

Data inside the encoder is in [batch, hidden_size, sequence_length] format. But, if \`output_hidden_states == True\`, the data from inside the encoder is returned in [batch, sequence_length, hidden_size] format.

The final output of the encoder is in [batch, sequence_length, hidden_size] format.`,highlighted:`<span class="hljs-keyword">Input</span> data <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

Data inside the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, hidden_size, sequence_length] <span class="hljs-keyword">format</span>. But, <span class="hljs-keyword">if</span> \`output_hidden_states == <span class="hljs-keyword">True</span>\`, the data <span class="hljs-keyword">from</span> inside the encoder <span class="hljs-keyword">is</span> returned <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

The final output <span class="hljs-keyword">of</span> the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.`}}),{c(){b(o.$$.fragment)},l(n){k(o.$$.fragment,n)},m(n,m){z(o,n,m),h=!0},p:C,i(n){h||($(o.$$.fragment,n),h=!0)},o(n){q(o.$$.fragment,n),h=!1},d(n){w(o,n)}}}function Em(T){let o,h,n,m,y;return{c(){o=i("p"),h=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),n=i("code"),m=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){o=l(c,"P",{});var _=d(o);h=a(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),n=l(_,"CODE",{});var A=d(n);m=a(A,"Module"),A.forEach(s),y=a(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(c,_){v(c,o,_),e(o,h),e(o,n),e(n,m),e(o,y)},d(c){c&&s(o)}}}function jm(T){let o,h,n,m,y;return m=new P({props:{code:`from transformers import SqueezeBertTokenizer, SqueezeBertForMaskedLM
import torch

tokenizer = SqueezeBertTokenizer.from_pretrained("squeezebert/squeezebert-uncased")
model = SqueezeBertForMaskedLM.from_pretrained("squeezebert/squeezebert-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SqueezeBertTokenizer, SqueezeBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = SqueezeBertTokenizer.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SqueezeBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){o=i("p"),h=r("Example:"),n=p(),b(m.$$.fragment)},l(c){o=l(c,"P",{});var _=d(o);h=a(_,"Example:"),_.forEach(s),n=u(c),k(m.$$.fragment,c)},m(c,_){v(c,o,_),e(o,h),v(c,n,_),z(m,c,_),y=!0},p:C,i(c){y||($(m.$$.fragment,c),y=!0)},o(c){q(m.$$.fragment,c),y=!1},d(c){c&&s(o),c&&s(n),w(m,c)}}}function Mm(T){let o,h;return o=new P({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){b(o.$$.fragment)},l(n){k(o.$$.fragment,n)},m(n,m){z(o,n,m),h=!0},p:C,i(n){h||($(o.$$.fragment,n),h=!0)},o(n){q(o.$$.fragment,n),h=!1},d(n){w(o,n)}}}function Fm(T){let o,h;return o=new P({props:{code:`Internal class hierarchy:
SqueezeBertModel
    SqueezeBertEncoder
        SqueezeBertModule
        SqueezeBertSelfAttention
            ConvActivation
            ConvDropoutLayerNorm`,highlighted:`Internal <span class="hljs-keyword">class</span> <span class="hljs-symbol">hierarchy:
<span class="hljs-symbol">SqueezeBertModel</span></span>
    <span class="hljs-symbol">SqueezeBertEncoder</span>
        <span class="hljs-symbol">SqueezeBertModule</span>
        <span class="hljs-symbol">SqueezeBertSelfAttention</span>
            <span class="hljs-symbol">ConvActivation</span>
            <span class="hljs-symbol">ConvDropoutLayerNorm</span>`}}),{c(){b(o.$$.fragment)},l(n){k(o.$$.fragment,n)},m(n,m){z(o,n,m),h=!0},p:C,i(n){h||($(o.$$.fragment,n),h=!0)},o(n){q(o.$$.fragment,n),h=!1},d(n){w(o,n)}}}function xm(T){let o,h;return o=new P({props:{code:`Input data is in [batch, sequence_length, hidden_size] format.

Data inside the encoder is in [batch, hidden_size, sequence_length] format. But, if \`output_hidden_states == True\`, the data from inside the encoder is returned in [batch, sequence_length, hidden_size] format.

The final output of the encoder is in [batch, sequence_length, hidden_size] format.`,highlighted:`<span class="hljs-keyword">Input</span> data <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

Data inside the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, hidden_size, sequence_length] <span class="hljs-keyword">format</span>. But, <span class="hljs-keyword">if</span> \`output_hidden_states == <span class="hljs-keyword">True</span>\`, the data <span class="hljs-keyword">from</span> inside the encoder <span class="hljs-keyword">is</span> returned <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

The final output <span class="hljs-keyword">of</span> the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.`}}),{c(){b(o.$$.fragment)},l(n){k(o.$$.fragment,n)},m(n,m){z(o,n,m),h=!0},p:C,i(n){h||($(o.$$.fragment,n),h=!0)},o(n){q(o.$$.fragment,n),h=!1},d(n){w(o,n)}}}function Cm(T){let o,h,n,m,y;return{c(){o=i("p"),h=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),n=i("code"),m=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){o=l(c,"P",{});var _=d(o);h=a(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),n=l(_,"CODE",{});var A=d(n);m=a(A,"Module"),A.forEach(s),y=a(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(c,_){v(c,o,_),e(o,h),e(o,n),e(n,m),e(o,y)},d(c){c&&s(o)}}}function Pm(T){let o,h,n,m,y;return m=new P({props:{code:`import torch
from transformers import SqueezeBertTokenizer, SqueezeBertForSequenceClassification

tokenizer = SqueezeBertTokenizer.from_pretrained("squeezebert/squeezebert-uncased")
model = SqueezeBertForSequenceClassification.from_pretrained("squeezebert/squeezebert-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SqueezeBertTokenizer, SqueezeBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = SqueezeBertTokenizer.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SqueezeBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){o=i("p"),h=r("Example of single-label classification:"),n=p(),b(m.$$.fragment)},l(c){o=l(c,"P",{});var _=d(o);h=a(_,"Example of single-label classification:"),_.forEach(s),n=u(c),k(m.$$.fragment,c)},m(c,_){v(c,o,_),e(o,h),v(c,n,_),z(m,c,_),y=!0},p:C,i(c){y||($(m.$$.fragment,c),y=!0)},o(c){q(m.$$.fragment,c),y=!1},d(c){c&&s(o),c&&s(n),w(m,c)}}}function Am(T){let o,h;return o=new P({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = SqueezeBertForSequenceClassification.from_pretrained("squeezebert/squeezebert-uncased", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SqueezeBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){b(o.$$.fragment)},l(n){k(o.$$.fragment,n)},m(n,m){z(o,n,m),h=!0},p:C,i(n){h||($(o.$$.fragment,n),h=!0)},o(n){q(o.$$.fragment,n),h=!1},d(n){w(o,n)}}}function Lm(T){let o,h,n,m,y;return m=new P({props:{code:`import torch
from transformers import SqueezeBertTokenizer, SqueezeBertForSequenceClassification

tokenizer = SqueezeBertTokenizer.from_pretrained("squeezebert/squeezebert-uncased")
model = SqueezeBertForSequenceClassification.from_pretrained("squeezebert/squeezebert-uncased", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SqueezeBertTokenizer, SqueezeBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = SqueezeBertTokenizer.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SqueezeBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){o=i("p"),h=r("Example of multi-label classification:"),n=p(),b(m.$$.fragment)},l(c){o=l(c,"P",{});var _=d(o);h=a(_,"Example of multi-label classification:"),_.forEach(s),n=u(c),k(m.$$.fragment,c)},m(c,_){v(c,o,_),e(o,h),v(c,n,_),z(m,c,_),y=!0},p:C,i(c){y||($(m.$$.fragment,c),y=!0)},o(c){q(m.$$.fragment,c),y=!1},d(c){c&&s(o),c&&s(n),w(m,c)}}}function Nm(T){let o,h;return o=new P({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = SqueezeBertForSequenceClassification.from_pretrained("squeezebert/squeezebert-uncased", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SqueezeBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){b(o.$$.fragment)},l(n){k(o.$$.fragment,n)},m(n,m){z(o,n,m),h=!0},p:C,i(n){h||($(o.$$.fragment,n),h=!0)},o(n){q(o.$$.fragment,n),h=!1},d(n){w(o,n)}}}function Im(T){let o,h;return o=new P({props:{code:`Internal class hierarchy:
SqueezeBertModel
    SqueezeBertEncoder
        SqueezeBertModule
        SqueezeBertSelfAttention
            ConvActivation
            ConvDropoutLayerNorm`,highlighted:`Internal <span class="hljs-keyword">class</span> <span class="hljs-symbol">hierarchy:
<span class="hljs-symbol">SqueezeBertModel</span></span>
    <span class="hljs-symbol">SqueezeBertEncoder</span>
        <span class="hljs-symbol">SqueezeBertModule</span>
        <span class="hljs-symbol">SqueezeBertSelfAttention</span>
            <span class="hljs-symbol">ConvActivation</span>
            <span class="hljs-symbol">ConvDropoutLayerNorm</span>`}}),{c(){b(o.$$.fragment)},l(n){k(o.$$.fragment,n)},m(n,m){z(o,n,m),h=!0},p:C,i(n){h||($(o.$$.fragment,n),h=!0)},o(n){q(o.$$.fragment,n),h=!1},d(n){w(o,n)}}}function Dm(T){let o,h;return o=new P({props:{code:`Input data is in [batch, sequence_length, hidden_size] format.

Data inside the encoder is in [batch, hidden_size, sequence_length] format. But, if \`output_hidden_states == True\`, the data from inside the encoder is returned in [batch, sequence_length, hidden_size] format.

The final output of the encoder is in [batch, sequence_length, hidden_size] format.`,highlighted:`<span class="hljs-keyword">Input</span> data <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

Data inside the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, hidden_size, sequence_length] <span class="hljs-keyword">format</span>. But, <span class="hljs-keyword">if</span> \`output_hidden_states == <span class="hljs-keyword">True</span>\`, the data <span class="hljs-keyword">from</span> inside the encoder <span class="hljs-keyword">is</span> returned <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

The final output <span class="hljs-keyword">of</span> the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.`}}),{c(){b(o.$$.fragment)},l(n){k(o.$$.fragment,n)},m(n,m){z(o,n,m),h=!0},p:C,i(n){h||($(o.$$.fragment,n),h=!0)},o(n){q(o.$$.fragment,n),h=!1},d(n){w(o,n)}}}function Om(T){let o,h,n,m,y;return{c(){o=i("p"),h=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),n=i("code"),m=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){o=l(c,"P",{});var _=d(o);h=a(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),n=l(_,"CODE",{});var A=d(n);m=a(A,"Module"),A.forEach(s),y=a(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(c,_){v(c,o,_),e(o,h),e(o,n),e(n,m),e(o,y)},d(c){c&&s(o)}}}function Rm(T){let o,h,n,m,y;return m=new P({props:{code:`from transformers import SqueezeBertTokenizer, SqueezeBertForMultipleChoice
import torch

tokenizer = SqueezeBertTokenizer.from_pretrained("squeezebert/squeezebert-uncased")
model = SqueezeBertForMultipleChoice.from_pretrained("squeezebert/squeezebert-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SqueezeBertTokenizer, SqueezeBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = SqueezeBertTokenizer.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SqueezeBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){o=i("p"),h=r("Example:"),n=p(),b(m.$$.fragment)},l(c){o=l(c,"P",{});var _=d(o);h=a(_,"Example:"),_.forEach(s),n=u(c),k(m.$$.fragment,c)},m(c,_){v(c,o,_),e(o,h),v(c,n,_),z(m,c,_),y=!0},p:C,i(c){y||($(m.$$.fragment,c),y=!0)},o(c){q(m.$$.fragment,c),y=!1},d(c){c&&s(o),c&&s(n),w(m,c)}}}function Wm(T){let o,h;return o=new P({props:{code:`Internal class hierarchy:
SqueezeBertModel
    SqueezeBertEncoder
        SqueezeBertModule
        SqueezeBertSelfAttention
            ConvActivation
            ConvDropoutLayerNorm`,highlighted:`Internal <span class="hljs-keyword">class</span> <span class="hljs-symbol">hierarchy:
<span class="hljs-symbol">SqueezeBertModel</span></span>
    <span class="hljs-symbol">SqueezeBertEncoder</span>
        <span class="hljs-symbol">SqueezeBertModule</span>
        <span class="hljs-symbol">SqueezeBertSelfAttention</span>
            <span class="hljs-symbol">ConvActivation</span>
            <span class="hljs-symbol">ConvDropoutLayerNorm</span>`}}),{c(){b(o.$$.fragment)},l(n){k(o.$$.fragment,n)},m(n,m){z(o,n,m),h=!0},p:C,i(n){h||($(o.$$.fragment,n),h=!0)},o(n){q(o.$$.fragment,n),h=!1},d(n){w(o,n)}}}function Km(T){let o,h;return o=new P({props:{code:`Input data is in [batch, sequence_length, hidden_size] format.

Data inside the encoder is in [batch, hidden_size, sequence_length] format. But, if \`output_hidden_states == True\`, the data from inside the encoder is returned in [batch, sequence_length, hidden_size] format.

The final output of the encoder is in [batch, sequence_length, hidden_size] format.`,highlighted:`<span class="hljs-keyword">Input</span> data <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

Data inside the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, hidden_size, sequence_length] <span class="hljs-keyword">format</span>. But, <span class="hljs-keyword">if</span> \`output_hidden_states == <span class="hljs-keyword">True</span>\`, the data <span class="hljs-keyword">from</span> inside the encoder <span class="hljs-keyword">is</span> returned <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

The final output <span class="hljs-keyword">of</span> the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.`}}),{c(){b(o.$$.fragment)},l(n){k(o.$$.fragment,n)},m(n,m){z(o,n,m),h=!0},p:C,i(n){h||($(o.$$.fragment,n),h=!0)},o(n){q(o.$$.fragment,n),h=!1},d(n){w(o,n)}}}function Hm(T){let o,h,n,m,y;return{c(){o=i("p"),h=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),n=i("code"),m=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){o=l(c,"P",{});var _=d(o);h=a(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),n=l(_,"CODE",{});var A=d(n);m=a(A,"Module"),A.forEach(s),y=a(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(c,_){v(c,o,_),e(o,h),e(o,n),e(n,m),e(o,y)},d(c){c&&s(o)}}}function Qm(T){let o,h,n,m,y;return m=new P({props:{code:`from transformers import SqueezeBertTokenizer, SqueezeBertForTokenClassification
import torch

tokenizer = SqueezeBertTokenizer.from_pretrained("squeezebert/squeezebert-uncased")
model = SqueezeBertForTokenClassification.from_pretrained("squeezebert/squeezebert-uncased")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SqueezeBertTokenizer, SqueezeBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = SqueezeBertTokenizer.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SqueezeBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>)

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
`}}),{c(){o=i("p"),h=r("Example:"),n=p(),b(m.$$.fragment)},l(c){o=l(c,"P",{});var _=d(o);h=a(_,"Example:"),_.forEach(s),n=u(c),k(m.$$.fragment,c)},m(c,_){v(c,o,_),e(o,h),v(c,n,_),z(m,c,_),y=!0},p:C,i(c){y||($(m.$$.fragment,c),y=!0)},o(c){q(m.$$.fragment,c),y=!1},d(c){c&&s(o),c&&s(n),w(m,c)}}}function Um(T){let o,h;return o=new P({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){b(o.$$.fragment)},l(n){k(o.$$.fragment,n)},m(n,m){z(o,n,m),h=!0},p:C,i(n){h||($(o.$$.fragment,n),h=!0)},o(n){q(o.$$.fragment,n),h=!1},d(n){w(o,n)}}}function Vm(T){let o,h;return o=new P({props:{code:`Internal class hierarchy:
SqueezeBertModel
    SqueezeBertEncoder
        SqueezeBertModule
        SqueezeBertSelfAttention
            ConvActivation
            ConvDropoutLayerNorm`,highlighted:`Internal <span class="hljs-keyword">class</span> <span class="hljs-symbol">hierarchy:
<span class="hljs-symbol">SqueezeBertModel</span></span>
    <span class="hljs-symbol">SqueezeBertEncoder</span>
        <span class="hljs-symbol">SqueezeBertModule</span>
        <span class="hljs-symbol">SqueezeBertSelfAttention</span>
            <span class="hljs-symbol">ConvActivation</span>
            <span class="hljs-symbol">ConvDropoutLayerNorm</span>`}}),{c(){b(o.$$.fragment)},l(n){k(o.$$.fragment,n)},m(n,m){z(o,n,m),h=!0},p:C,i(n){h||($(o.$$.fragment,n),h=!0)},o(n){q(o.$$.fragment,n),h=!1},d(n){w(o,n)}}}function Gm(T){let o,h;return o=new P({props:{code:`Input data is in [batch, sequence_length, hidden_size] format.

Data inside the encoder is in [batch, hidden_size, sequence_length] format. But, if \`output_hidden_states == True\`, the data from inside the encoder is returned in [batch, sequence_length, hidden_size] format.

The final output of the encoder is in [batch, sequence_length, hidden_size] format.`,highlighted:`<span class="hljs-keyword">Input</span> data <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

Data inside the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, hidden_size, sequence_length] <span class="hljs-keyword">format</span>. But, <span class="hljs-keyword">if</span> \`output_hidden_states == <span class="hljs-keyword">True</span>\`, the data <span class="hljs-keyword">from</span> inside the encoder <span class="hljs-keyword">is</span> returned <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.

The final output <span class="hljs-keyword">of</span> the encoder <span class="hljs-keyword">is</span> <span class="hljs-keyword">in</span> [batch, sequence_length, hidden_size] <span class="hljs-keyword">format</span>.`}}),{c(){b(o.$$.fragment)},l(n){k(o.$$.fragment,n)},m(n,m){z(o,n,m),h=!0},p:C,i(n){h||($(o.$$.fragment,n),h=!0)},o(n){q(o.$$.fragment,n),h=!1},d(n){w(o,n)}}}function Jm(T){let o,h,n,m,y;return{c(){o=i("p"),h=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),n=i("code"),m=r("Module"),y=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(c){o=l(c,"P",{});var _=d(o);h=a(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),n=l(_,"CODE",{});var A=d(n);m=a(A,"Module"),A.forEach(s),y=a(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(c,_){v(c,o,_),e(o,h),e(o,n),e(n,m),e(o,y)},d(c){c&&s(o)}}}function Xm(T){let o,h,n,m,y;return m=new P({props:{code:`from transformers import SqueezeBertTokenizer, SqueezeBertForQuestionAnswering
import torch

tokenizer = SqueezeBertTokenizer.from_pretrained("squeezebert/squeezebert-uncased")
model = SqueezeBertForQuestionAnswering.from_pretrained("squeezebert/squeezebert-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SqueezeBertTokenizer, SqueezeBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = SqueezeBertTokenizer.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SqueezeBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;squeezebert/squeezebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){o=i("p"),h=r("Example:"),n=p(),b(m.$$.fragment)},l(c){o=l(c,"P",{});var _=d(o);h=a(_,"Example:"),_.forEach(s),n=u(c),k(m.$$.fragment,c)},m(c,_){v(c,o,_),e(o,h),v(c,n,_),z(m,c,_),y=!0},p:C,i(c){y||($(m.$$.fragment,c),y=!0)},o(c){q(m.$$.fragment,c),y=!1},d(c){c&&s(o),c&&s(n),w(m,c)}}}function Ym(T){let o,h;return o=new P({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){b(o.$$.fragment)},l(n){k(o.$$.fragment,n)},m(n,m){z(o,n,m),h=!0},p:C,i(n){h||($(o.$$.fragment,n),h=!0)},o(n){q(o.$$.fragment,n),h=!1},d(n){w(o,n)}}}function Zm(T){let o,h,n,m,y,c,_,A,Pa,vr,ce,Fe,Dn,Bt,Aa,On,La,yr,oe,Na,Et,Ia,Da,jt,Oa,Ra,Tr,sn,Wa,Sr,nn,Rn,Ka,Br,on,Ha,Er,re,Wn,Qa,Ua,Kn,Va,Ga,Mt,Ja,Hn,Xa,Ya,jr,xe,Za,Ft,ei,ti,Mr,pe,Ce,Qn,xt,si,Un,ni,Fr,U,Ct,oi,Pt,ri,rn,ai,ii,li,ue,di,an,ci,pi,ln,ui,hi,mi,Pe,fi,Vn,gi,xr,he,Ae,Gn,At,_i,Jn,bi,Cr,L,Lt,ki,Xn,zi,$i,Le,dn,qi,wi,cn,vi,yi,Ti,Yn,Zn,Si,Bi,Nt,Ei,pn,ji,Mi,Fi,ae,It,xi,eo,Ci,Pi,Dt,un,Ai,to,Li,Ni,hn,Ii,so,Di,Oi,Ne,Ot,Ri,Rt,Wi,no,Ki,Hi,Qi,ee,Wt,Ui,oo,Vi,Gi,Ie,Ji,me,Xi,ro,Yi,Zi,ao,el,tl,sl,mn,Kt,Pr,fe,De,io,Ht,nl,lo,ol,Ar,Y,Qt,rl,Ut,al,co,il,ll,dl,Oe,fn,cl,pl,gn,ul,hl,ml,Vt,fl,_n,gl,_l,Lr,ge,Re,po,Gt,bl,uo,kl,Nr,S,Jt,zl,ho,$l,ql,Xt,wl,Yt,vl,yl,Tl,Zt,Sl,bn,Bl,El,jl,es,Ml,ts,Fl,xl,Cl,ss,Pl,mo,Al,Ll,Nl,fo,Il,Dl,We,Ol,go,Rl,Wl,Ke,Kl,te,ns,Hl,_e,Ql,kn,Ul,Vl,_o,Gl,Jl,Xl,He,Yl,Qe,Ir,be,Ue,bo,os,Zl,ko,ed,Dr,B,rs,td,as,sd,zo,nd,od,rd,is,ad,ls,id,ld,dd,ds,cd,zn,pd,ud,hd,cs,md,ps,fd,gd,_d,us,bd,$o,kd,zd,$d,qo,qd,wd,Ve,vd,wo,yd,Td,Ge,Sd,V,hs,Bd,ke,Ed,$n,jd,Md,vo,Fd,xd,Cd,Je,Pd,Xe,Ad,Ye,Or,ze,Ze,yo,ms,Ld,To,Nd,Rr,E,fs,Id,So,Dd,Od,gs,Rd,_s,Wd,Kd,Hd,bs,Qd,qn,Ud,Vd,Gd,ks,Jd,zs,Xd,Yd,Zd,$s,ec,Bo,tc,sc,nc,Eo,oc,rc,et,ac,jo,ic,lc,tt,dc,H,qs,cc,$e,pc,wn,uc,hc,Mo,mc,fc,gc,st,_c,nt,bc,ot,kc,rt,zc,at,Wr,qe,it,Fo,ws,$c,xo,qc,Kr,j,vs,wc,Co,vc,yc,ys,Tc,Ts,Sc,Bc,Ec,Ss,jc,vn,Mc,Fc,xc,Bs,Cc,Es,Pc,Ac,Lc,js,Nc,Po,Ic,Dc,Oc,Ao,Rc,Wc,lt,Kc,Lo,Hc,Qc,dt,Uc,se,Ms,Vc,we,Gc,yn,Jc,Xc,No,Yc,Zc,ep,ct,tp,pt,Hr,ve,ut,Io,Fs,sp,Do,np,Qr,M,xs,op,Oo,rp,ap,Cs,ip,Ps,lp,dp,cp,As,pp,Tn,up,hp,mp,Ls,fp,Ns,gp,_p,bp,Is,kp,Ro,zp,$p,qp,Wo,wp,vp,ht,yp,Ko,Tp,Sp,mt,Bp,G,Ds,Ep,ye,jp,Sn,Mp,Fp,Ho,xp,Cp,Pp,ft,Ap,gt,Lp,_t,Ur,Te,bt,Qo,Os,Np,Uo,Ip,Vr,F,Rs,Dp,Se,Op,Vo,Rp,Wp,Go,Kp,Hp,Qp,Ws,Up,Ks,Vp,Gp,Jp,Hs,Xp,Bn,Yp,Zp,eu,Qs,tu,Us,su,nu,ou,Vs,ru,Jo,au,iu,lu,Xo,du,cu,kt,pu,Yo,uu,hu,zt,mu,J,Gs,fu,Be,gu,En,_u,bu,Zo,ku,zu,$u,$t,qu,qt,wu,wt,Gr;return c=new ne({}),Bt=new ne({}),xt=new ne({}),Ct=new K({props:{name:"class transformers.SqueezeBertConfig",anchor:"transformers.SqueezeBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"embedding_size",val:" = 768"},{name:"q_groups",val:" = 4"},{name:"k_groups",val:" = 4"},{name:"v_groups",val:" = 4"},{name:"post_attention_groups",val:" = 1"},{name:"intermediate_groups",val:" = 4"},{name:"output_groups",val:" = 4"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the SqueezeBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertModel">SqueezeBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.SqueezeBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.SqueezeBertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.SqueezeBertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.SqueezeBertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.SqueezeBertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.SqueezeBertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.SqueezeBertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.SqueezeBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.SqueezeBertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/pr_16919/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.SqueezeBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.SqueezeBertConfig.layer_norm_eps",description:"<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;",name:"layer_norm_eps"},{anchor:"transformers.SqueezeBertConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The ID of the token in the word embedding to use as padding.`,name:"pad_token_id"},{anchor:"transformers.SqueezeBertConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
The dimension of the word embedding vectors.`,name:"embedding_size"},{anchor:"transformers.SqueezeBertConfig.q_groups",description:`<strong>q_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The number of groups in Q layer.`,name:"q_groups"},{anchor:"transformers.SqueezeBertConfig.k_groups",description:`<strong>k_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The number of groups in K layer.`,name:"k_groups"},{anchor:"transformers.SqueezeBertConfig.v_groups",description:`<strong>v_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The number of groups in V layer.`,name:"v_groups"},{anchor:"transformers.SqueezeBertConfig.post_attention_groups",description:`<strong>post_attention_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of groups in the first feed forward network layer.`,name:"post_attention_groups"},{anchor:"transformers.SqueezeBertConfig.intermediate_groups",description:`<strong>intermediate_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The number of groups in the second feed forward network layer.`,name:"intermediate_groups"},{anchor:"transformers.SqueezeBertConfig.output_groups",description:`<strong>output_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The number of groups in the third feed forward network layer.`,name:"output_groups"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/squeezebert/configuration_squeezebert.py#L30"}}),Pe=new x({props:{anchor:"transformers.SqueezeBertConfig.example",$$slots:{default:[$m]},$$scope:{ctx:T}}}),At=new ne({}),Lt=new K({props:{name:"class transformers.SqueezeBertTokenizer",anchor:"transformers.SqueezeBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/squeezebert/tokenization_squeezebert.py#L47"}}),It=new K({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.SqueezeBertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.SqueezeBertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/tokenization_bert.py#L248",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ot=new K({props:{name:"get_special_tokens_mask",anchor:"transformers.SqueezeBertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.SqueezeBertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.SqueezeBertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.SqueezeBertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/tokenization_bert.py#L273",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Wt=new K({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.SqueezeBertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.SqueezeBertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/tokenization_bert.py#L301",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ie=new x({props:{anchor:"transformers.SqueezeBertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[qm]},$$scope:{ctx:T}}}),Kt=new K({props:{name:"save_vocabulary",anchor:"transformers.SqueezeBertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bert/tokenization_bert.py#L330"}}),Ht=new ne({}),Qt=new K({props:{name:"class transformers.SqueezeBertTokenizerFast",anchor:"transformers.SqueezeBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/squeezebert/tokenization_squeezebert_fast.py#L53"}}),Gt=new ne({}),Jt=new K({props:{name:"class transformers.SqueezeBertModel",anchor:"transformers.SqueezeBertModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertConfig">SqueezeBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/squeezebert/modeling_squeezebert.py#L549"}}),We=new x({props:{anchor:"transformers.SqueezeBertModel.example",$$slots:{default:[wm]},$$scope:{ctx:T}}}),Ke=new x({props:{anchor:"transformers.SqueezeBertModel.example-2",$$slots:{default:[vm]},$$scope:{ctx:T}}}),ns=new K({props:{name:"forward",anchor:"transformers.SqueezeBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer">SqueezeBertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.SqueezeBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SqueezeBertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.SqueezeBertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.SqueezeBertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SqueezeBertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.SqueezeBertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SqueezeBertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SqueezeBertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/squeezebert/modeling_squeezebert.py#L574",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertConfig"
>SqueezeBertConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),He=new In({props:{$$slots:{default:[ym]},$$scope:{ctx:T}}}),Qe=new x({props:{anchor:"transformers.SqueezeBertModel.forward.example",$$slots:{default:[Tm]},$$scope:{ctx:T}}}),os=new ne({}),rs=new K({props:{name:"class transformers.SqueezeBertForMaskedLM",anchor:"transformers.SqueezeBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertConfig">SqueezeBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/squeezebert/modeling_squeezebert.py#L649"}}),Ve=new x({props:{anchor:"transformers.SqueezeBertForMaskedLM.example",$$slots:{default:[Sm]},$$scope:{ctx:T}}}),Ge=new x({props:{anchor:"transformers.SqueezeBertForMaskedLM.example-2",$$slots:{default:[Bm]},$$scope:{ctx:T}}}),hs=new K({props:{name:"forward",anchor:"transformers.SqueezeBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer">SqueezeBertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.SqueezeBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SqueezeBertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.SqueezeBertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.SqueezeBertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SqueezeBertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.SqueezeBertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SqueezeBertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SqueezeBertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SqueezeBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/squeezebert/modeling_squeezebert.py#L668",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertConfig"
>SqueezeBertConfig</a>) and inputs.</p>
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
`}}),Je=new In({props:{$$slots:{default:[Em]},$$scope:{ctx:T}}}),Xe=new x({props:{anchor:"transformers.SqueezeBertForMaskedLM.forward.example",$$slots:{default:[jm]},$$scope:{ctx:T}}}),Ye=new x({props:{anchor:"transformers.SqueezeBertForMaskedLM.forward.example-2",$$slots:{default:[Mm]},$$scope:{ctx:T}}}),ms=new ne({}),fs=new K({props:{name:"class transformers.SqueezeBertForSequenceClassification",anchor:"transformers.SqueezeBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertConfig">SqueezeBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/squeezebert/modeling_squeezebert.py#L735"}}),et=new x({props:{anchor:"transformers.SqueezeBertForSequenceClassification.example",$$slots:{default:[Fm]},$$scope:{ctx:T}}}),tt=new x({props:{anchor:"transformers.SqueezeBertForSequenceClassification.example-2",$$slots:{default:[xm]},$$scope:{ctx:T}}}),qs=new K({props:{name:"forward",anchor:"transformers.SqueezeBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer">SqueezeBertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.SqueezeBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SqueezeBertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.SqueezeBertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.SqueezeBertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SqueezeBertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.SqueezeBertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SqueezeBertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SqueezeBertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SqueezeBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/squeezebert/modeling_squeezebert.py#L748",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertConfig"
>SqueezeBertConfig</a>) and inputs.</p>
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
`}}),st=new In({props:{$$slots:{default:[Cm]},$$scope:{ctx:T}}}),nt=new x({props:{anchor:"transformers.SqueezeBertForSequenceClassification.forward.example",$$slots:{default:[Pm]},$$scope:{ctx:T}}}),ot=new x({props:{anchor:"transformers.SqueezeBertForSequenceClassification.forward.example-2",$$slots:{default:[Am]},$$scope:{ctx:T}}}),rt=new x({props:{anchor:"transformers.SqueezeBertForSequenceClassification.forward.example-3",$$slots:{default:[Lm]},$$scope:{ctx:T}}}),at=new x({props:{anchor:"transformers.SqueezeBertForSequenceClassification.forward.example-4",$$slots:{default:[Nm]},$$scope:{ctx:T}}}),ws=new ne({}),vs=new K({props:{name:"class transformers.SqueezeBertForMultipleChoice",anchor:"transformers.SqueezeBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertConfig">SqueezeBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/squeezebert/modeling_squeezebert.py#L835"}}),lt=new x({props:{anchor:"transformers.SqueezeBertForMultipleChoice.example",$$slots:{default:[Im]},$$scope:{ctx:T}}}),dt=new x({props:{anchor:"transformers.SqueezeBertForMultipleChoice.example-2",$$slots:{default:[Dm]},$$scope:{ctx:T}}}),Ms=new K({props:{name:"forward",anchor:"transformers.SqueezeBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer">SqueezeBertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.SqueezeBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SqueezeBertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.SqueezeBertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.SqueezeBertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SqueezeBertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.SqueezeBertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SqueezeBertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SqueezeBertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SqueezeBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <em>num_choices</em> is the size of the second dimension of the input tensors. (see
<em>input_ids</em> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/squeezebert/modeling_squeezebert.py#L846",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertConfig"
>SqueezeBertConfig</a>) and inputs.</p>
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
`}}),ct=new In({props:{$$slots:{default:[Om]},$$scope:{ctx:T}}}),pt=new x({props:{anchor:"transformers.SqueezeBertForMultipleChoice.forward.example",$$slots:{default:[Rm]},$$scope:{ctx:T}}}),Fs=new ne({}),xs=new K({props:{name:"class transformers.SqueezeBertForTokenClassification",anchor:"transformers.SqueezeBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertConfig">SqueezeBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/squeezebert/modeling_squeezebert.py#L929"}}),ht=new x({props:{anchor:"transformers.SqueezeBertForTokenClassification.example",$$slots:{default:[Wm]},$$scope:{ctx:T}}}),mt=new x({props:{anchor:"transformers.SqueezeBertForTokenClassification.example-2",$$slots:{default:[Km]},$$scope:{ctx:T}}}),Ds=new K({props:{name:"forward",anchor:"transformers.SqueezeBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer">SqueezeBertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.SqueezeBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SqueezeBertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.SqueezeBertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.SqueezeBertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SqueezeBertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.SqueezeBertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SqueezeBertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SqueezeBertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SqueezeBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/squeezebert/modeling_squeezebert.py#L941",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertConfig"
>SqueezeBertConfig</a>) and inputs.</p>
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
`}}),ft=new In({props:{$$slots:{default:[Hm]},$$scope:{ctx:T}}}),gt=new x({props:{anchor:"transformers.SqueezeBertForTokenClassification.forward.example",$$slots:{default:[Qm]},$$scope:{ctx:T}}}),_t=new x({props:{anchor:"transformers.SqueezeBertForTokenClassification.forward.example-2",$$slots:{default:[Um]},$$scope:{ctx:T}}}),Os=new ne({}),Rs=new K({props:{name:"class transformers.SqueezeBertForQuestionAnswering",anchor:"transformers.SqueezeBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SqueezeBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertConfig">SqueezeBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/squeezebert/modeling_squeezebert.py#L1008"}}),kt=new x({props:{anchor:"transformers.SqueezeBertForQuestionAnswering.example",$$slots:{default:[Vm]},$$scope:{ctx:T}}}),zt=new x({props:{anchor:"transformers.SqueezeBertForQuestionAnswering.example-2",$$slots:{default:[Gm]},$$scope:{ctx:T}}}),Gs=new K({props:{name:"forward",anchor:"transformers.SqueezeBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer">SqueezeBertTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/squeezebert/modeling_squeezebert.py#L1019",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertConfig"
>SqueezeBertConfig</a>) and inputs.</p>
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
`}}),$t=new In({props:{$$slots:{default:[Jm]},$$scope:{ctx:T}}}),qt=new x({props:{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.example",$$slots:{default:[Xm]},$$scope:{ctx:T}}}),wt=new x({props:{anchor:"transformers.SqueezeBertForQuestionAnswering.forward.example-2",$$slots:{default:[Ym]},$$scope:{ctx:T}}}),{c(){o=i("meta"),h=p(),n=i("h1"),m=i("a"),y=i("span"),b(c.$$.fragment),_=p(),A=i("span"),Pa=r("SqueezeBERT"),vr=p(),ce=i("h2"),Fe=i("a"),Dn=i("span"),b(Bt.$$.fragment),Aa=p(),On=i("span"),La=r("Overview"),yr=p(),oe=i("p"),Na=r("The SqueezeBERT model was proposed in "),Et=i("a"),Ia=r("SqueezeBERT: What can computer vision teach NLP about efficient neural networks?"),Da=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, Kurt W. Keutzer. It\u2019s a
bidirectional transformer similar to the BERT model. The key difference between the BERT architecture and the
SqueezeBERT architecture is that SqueezeBERT uses `),jt=i("a"),Oa=r("grouped convolutions"),Ra=r(`
instead of fully-connected layers for the Q, K, V and FFN layers.`),Tr=p(),sn=i("p"),Wa=r("The abstract from the paper is the following:"),Sr=p(),nn=i("p"),Rn=i("em"),Ka=r(`Humans read and write hundreds of billions of messages every day. Further, due to the availability of large datasets,
large computing systems, and better neural network models, natural language processing (NLP) technology has made
significant strides in understanding, proofreading, and organizing these messages. Thus, there is a significant
opportunity to deploy NLP in myriad applications to help web users, social networks, and businesses. In particular, we
consider smartphones and other mobile devices as crucial platforms for deploying NLP models at scale. However, today\u2019s
highly-accurate NLP neural network models such as BERT and RoBERTa are extremely computationally expensive, with
BERT-base taking 1.7 seconds to classify a text snippet on a Pixel 3 smartphone. In this work, we observe that methods
such as grouped convolutions have yielded significant speedups for computer vision networks, but many of these
techniques have not been adopted by NLP neural network designers. We demonstrate how to replace several operations in
self-attention layers with grouped convolutions, and we use this technique in a novel network architecture called
SqueezeBERT, which runs 4.3x faster than BERT-base on the Pixel 3 while achieving competitive accuracy on the GLUE test
set. The SqueezeBERT code will be released.`),Br=p(),on=i("p"),Ha=r("Tips:"),Er=p(),re=i("ul"),Wn=i("li"),Qa=r(`SqueezeBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right
rather than the left.`),Ua=p(),Kn=i("li"),Va=r(`SqueezeBERT is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained
with a causal language modeling (CLM) objective are better in that regard.`),Ga=p(),Mt=i("li"),Ja=r(`For best results when finetuning on sequence classification tasks, it is recommended to start with the
`),Hn=i("em"),Xa=r("squeezebert/squeezebert-mnli-headless"),Ya=r(" checkpoint."),jr=p(),xe=i("p"),Za=r("This model was contributed by "),Ft=i("a"),ei=r("forresti"),ti=r("."),Mr=p(),pe=i("h2"),Ce=i("a"),Qn=i("span"),b(xt.$$.fragment),si=p(),Un=i("span"),ni=r("SqueezeBertConfig"),Fr=p(),U=i("div"),b(Ct.$$.fragment),oi=p(),Pt=i("p"),ri=r("This is the configuration class to store the configuration of a "),rn=i("a"),ai=r("SqueezeBertModel"),ii=r(`. It is used to instantiate a
SqueezeBERT model according to the specified arguments, defining the model architecture.`),li=p(),ue=i("p"),di=r("Configuration objects inherit from "),an=i("a"),ci=r("PretrainedConfig"),pi=r(` and can be used to control the model outputs. Read the
documentation from `),ln=i("a"),ui=r("PretrainedConfig"),hi=r(" for more information."),mi=p(),b(Pe.$$.fragment),fi=p(),Vn=i("p"),gi=r(`Attributes: pretrained_config_archive_map (Dict[str, str]): A dictionary containing all the available pre-trained
checkpoints.`),xr=p(),he=i("h2"),Ae=i("a"),Gn=i("span"),b(At.$$.fragment),_i=p(),Jn=i("span"),bi=r("SqueezeBertTokenizer"),Cr=p(),L=i("div"),b(Lt.$$.fragment),ki=p(),Xn=i("p"),zi=r("Constructs a SqueezeBert tokenizer."),$i=p(),Le=i("p"),dn=i("a"),qi=r("SqueezeBertTokenizer"),wi=r(" is identical to "),cn=i("a"),vi=r("BertTokenizer"),yi=r(" and runs end-to-end tokenization: punctuation splitting"),Ti=p(),Yn=i("ul"),Zn=i("li"),Si=r("wordpiece."),Bi=p(),Nt=i("p"),Ei=r("Refer to superclass "),pn=i("a"),ji=r("BertTokenizer"),Mi=r(" for usage examples and documentation concerning parameters."),Fi=p(),ae=i("div"),b(It.$$.fragment),xi=p(),eo=i("p"),Ci=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Pi=p(),Dt=i("ul"),un=i("li"),Ai=r("single sequence: "),to=i("code"),Li=r("[CLS] X [SEP]"),Ni=p(),hn=i("li"),Ii=r("pair of sequences: "),so=i("code"),Di=r("[CLS] A [SEP] B [SEP]"),Oi=p(),Ne=i("div"),b(Ot.$$.fragment),Ri=p(),Rt=i("p"),Wi=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),no=i("code"),Ki=r("prepare_for_model"),Hi=r(" method."),Qi=p(),ee=i("div"),b(Wt.$$.fragment),Ui=p(),oo=i("p"),Vi=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format:`),Gi=p(),b(Ie.$$.fragment),Ji=p(),me=i("p"),Xi=r("If "),ro=i("code"),Yi=r("token_ids_1"),Zi=r(" is "),ao=i("code"),el=r("None"),tl=r(", this method only returns the first portion of the mask (0s)."),sl=p(),mn=i("div"),b(Kt.$$.fragment),Pr=p(),fe=i("h2"),De=i("a"),io=i("span"),b(Ht.$$.fragment),nl=p(),lo=i("span"),ol=r("SqueezeBertTokenizerFast"),Ar=p(),Y=i("div"),b(Qt.$$.fragment),rl=p(),Ut=i("p"),al=r("Constructs a \u201CFast\u201D SqueezeBert tokenizer (backed by HuggingFace\u2019s "),co=i("em"),il=r("tokenizers"),ll=r(" library)."),dl=p(),Oe=i("p"),fn=i("a"),cl=r("SqueezeBertTokenizerFast"),pl=r(" is identical to "),gn=i("a"),ul=r("BertTokenizerFast"),hl=r(` and runs end-to-end tokenization: punctuation
splitting + wordpiece.`),ml=p(),Vt=i("p"),fl=r("Refer to superclass "),_n=i("a"),gl=r("BertTokenizerFast"),_l=r(" for usage examples and documentation concerning parameters."),Lr=p(),ge=i("h2"),Re=i("a"),po=i("span"),b(Gt.$$.fragment),bl=p(),uo=i("span"),kl=r("SqueezeBertModel"),Nr=p(),S=i("div"),b(Jt.$$.fragment),zl=p(),ho=i("p"),$l=r("The bare SqueezeBERT Model transformer outputting raw hidden-states without any specific head on top."),ql=p(),Xt=i("p"),wl=r("The SqueezeBERT model was proposed in "),Yt=i("a"),vl=r(`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),yl=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),Tl=p(),Zt=i("p"),Sl=r("This model inherits from "),bn=i("a"),Bl=r("PreTrainedModel"),El=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jl=p(),es=i("p"),Ml=r("This model is also a PyTorch "),ts=i("a"),Fl=r("torch.nn.Module"),xl=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cl=p(),ss=i("p"),Pl=r(`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),mo=i("em"),Al=r("squeezebert/squeezebert-mnli-headless"),Ll=r(" checkpoint as a starting point."),Nl=p(),fo=i("p"),Il=r("Hierarchy:"),Dl=p(),b(We.$$.fragment),Ol=p(),go=i("p"),Rl=r("Data layouts:"),Wl=p(),b(Ke.$$.fragment),Kl=p(),te=i("div"),b(ns.$$.fragment),Hl=p(),_e=i("p"),Ql=r("The "),kn=i("a"),Ul=r("SqueezeBertModel"),Vl=r(" forward method, overrides the "),_o=i("code"),Gl=r("__call__"),Jl=r(" special method."),Xl=p(),b(He.$$.fragment),Yl=p(),b(Qe.$$.fragment),Ir=p(),be=i("h2"),Ue=i("a"),bo=i("span"),b(os.$$.fragment),Zl=p(),ko=i("span"),ed=r("SqueezeBertForMaskedLM"),Dr=p(),B=i("div"),b(rs.$$.fragment),td=p(),as=i("p"),sd=r("SqueezeBERT Model with a "),zo=i("code"),nd=r("language modeling"),od=r(" head on top."),rd=p(),is=i("p"),ad=r("The SqueezeBERT model was proposed in "),ls=i("a"),id=r(`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),ld=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),dd=p(),ds=i("p"),cd=r("This model inherits from "),zn=i("a"),pd=r("PreTrainedModel"),ud=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hd=p(),cs=i("p"),md=r("This model is also a PyTorch "),ps=i("a"),fd=r("torch.nn.Module"),gd=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_d=p(),us=i("p"),bd=r(`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),$o=i("em"),kd=r("squeezebert/squeezebert-mnli-headless"),zd=r(" checkpoint as a starting point."),$d=p(),qo=i("p"),qd=r("Hierarchy:"),wd=p(),b(Ve.$$.fragment),vd=p(),wo=i("p"),yd=r("Data layouts:"),Td=p(),b(Ge.$$.fragment),Sd=p(),V=i("div"),b(hs.$$.fragment),Bd=p(),ke=i("p"),Ed=r("The "),$n=i("a"),jd=r("SqueezeBertForMaskedLM"),Md=r(" forward method, overrides the "),vo=i("code"),Fd=r("__call__"),xd=r(" special method."),Cd=p(),b(Je.$$.fragment),Pd=p(),b(Xe.$$.fragment),Ad=p(),b(Ye.$$.fragment),Or=p(),ze=i("h2"),Ze=i("a"),yo=i("span"),b(ms.$$.fragment),Ld=p(),To=i("span"),Nd=r("SqueezeBertForSequenceClassification"),Rr=p(),E=i("div"),b(fs.$$.fragment),Id=p(),So=i("p"),Dd=r(`SqueezeBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Od=p(),gs=i("p"),Rd=r("The SqueezeBERT model was proposed in "),_s=i("a"),Wd=r(`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),Kd=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),Hd=p(),bs=i("p"),Qd=r("This model inherits from "),qn=i("a"),Ud=r("PreTrainedModel"),Vd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gd=p(),ks=i("p"),Jd=r("This model is also a PyTorch "),zs=i("a"),Xd=r("torch.nn.Module"),Yd=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zd=p(),$s=i("p"),ec=r(`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),Bo=i("em"),tc=r("squeezebert/squeezebert-mnli-headless"),sc=r(" checkpoint as a starting point."),nc=p(),Eo=i("p"),oc=r("Hierarchy:"),rc=p(),b(et.$$.fragment),ac=p(),jo=i("p"),ic=r("Data layouts:"),lc=p(),b(tt.$$.fragment),dc=p(),H=i("div"),b(qs.$$.fragment),cc=p(),$e=i("p"),pc=r("The "),wn=i("a"),uc=r("SqueezeBertForSequenceClassification"),hc=r(" forward method, overrides the "),Mo=i("code"),mc=r("__call__"),fc=r(" special method."),gc=p(),b(st.$$.fragment),_c=p(),b(nt.$$.fragment),bc=p(),b(ot.$$.fragment),kc=p(),b(rt.$$.fragment),zc=p(),b(at.$$.fragment),Wr=p(),qe=i("h2"),it=i("a"),Fo=i("span"),b(ws.$$.fragment),$c=p(),xo=i("span"),qc=r("SqueezeBertForMultipleChoice"),Kr=p(),j=i("div"),b(vs.$$.fragment),wc=p(),Co=i("p"),vc=r(`SqueezeBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),yc=p(),ys=i("p"),Tc=r("The SqueezeBERT model was proposed in "),Ts=i("a"),Sc=r(`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),Bc=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),Ec=p(),Ss=i("p"),jc=r("This model inherits from "),vn=i("a"),Mc=r("PreTrainedModel"),Fc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xc=p(),Bs=i("p"),Cc=r("This model is also a PyTorch "),Es=i("a"),Pc=r("torch.nn.Module"),Ac=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lc=p(),js=i("p"),Nc=r(`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),Po=i("em"),Ic=r("squeezebert/squeezebert-mnli-headless"),Dc=r(" checkpoint as a starting point."),Oc=p(),Ao=i("p"),Rc=r("Hierarchy:"),Wc=p(),b(lt.$$.fragment),Kc=p(),Lo=i("p"),Hc=r("Data layouts:"),Qc=p(),b(dt.$$.fragment),Uc=p(),se=i("div"),b(Ms.$$.fragment),Vc=p(),we=i("p"),Gc=r("The "),yn=i("a"),Jc=r("SqueezeBertForMultipleChoice"),Xc=r(" forward method, overrides the "),No=i("code"),Yc=r("__call__"),Zc=r(" special method."),ep=p(),b(ct.$$.fragment),tp=p(),b(pt.$$.fragment),Hr=p(),ve=i("h2"),ut=i("a"),Io=i("span"),b(Fs.$$.fragment),sp=p(),Do=i("span"),np=r("SqueezeBertForTokenClassification"),Qr=p(),M=i("div"),b(xs.$$.fragment),op=p(),Oo=i("p"),rp=r(`SqueezeBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),ap=p(),Cs=i("p"),ip=r("The SqueezeBERT model was proposed in "),Ps=i("a"),lp=r(`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),dp=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),cp=p(),As=i("p"),pp=r("This model inherits from "),Tn=i("a"),up=r("PreTrainedModel"),hp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mp=p(),Ls=i("p"),fp=r("This model is also a PyTorch "),Ns=i("a"),gp=r("torch.nn.Module"),_p=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bp=p(),Is=i("p"),kp=r(`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),Ro=i("em"),zp=r("squeezebert/squeezebert-mnli-headless"),$p=r(" checkpoint as a starting point."),qp=p(),Wo=i("p"),wp=r("Hierarchy:"),vp=p(),b(ht.$$.fragment),yp=p(),Ko=i("p"),Tp=r("Data layouts:"),Sp=p(),b(mt.$$.fragment),Bp=p(),G=i("div"),b(Ds.$$.fragment),Ep=p(),ye=i("p"),jp=r("The "),Sn=i("a"),Mp=r("SqueezeBertForTokenClassification"),Fp=r(" forward method, overrides the "),Ho=i("code"),xp=r("__call__"),Cp=r(" special method."),Pp=p(),b(ft.$$.fragment),Ap=p(),b(gt.$$.fragment),Lp=p(),b(_t.$$.fragment),Ur=p(),Te=i("h2"),bt=i("a"),Qo=i("span"),b(Os.$$.fragment),Np=p(),Uo=i("span"),Ip=r("SqueezeBertForQuestionAnswering"),Vr=p(),F=i("div"),b(Rs.$$.fragment),Dp=p(),Se=i("p"),Op=r(`SqueezeBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Vo=i("code"),Rp=r("span start logits"),Wp=r(" and "),Go=i("code"),Kp=r("span end logits"),Hp=r(")."),Qp=p(),Ws=i("p"),Up=r("The SqueezeBERT model was proposed in "),Ks=i("a"),Vp=r(`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),Gp=r(` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),Jp=p(),Hs=i("p"),Xp=r("This model inherits from "),Bn=i("a"),Yp=r("PreTrainedModel"),Zp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eu=p(),Qs=i("p"),tu=r("This model is also a PyTorch "),Us=i("a"),su=r("torch.nn.Module"),nu=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ou=p(),Vs=i("p"),ru=r(`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),Jo=i("em"),au=r("squeezebert/squeezebert-mnli-headless"),iu=r(" checkpoint as a starting point."),lu=p(),Xo=i("p"),du=r("Hierarchy:"),cu=p(),b(kt.$$.fragment),pu=p(),Yo=i("p"),uu=r("Data layouts:"),hu=p(),b(zt.$$.fragment),mu=p(),J=i("div"),b(Gs.$$.fragment),fu=p(),Be=i("p"),gu=r("The "),En=i("a"),_u=r("SqueezeBertForQuestionAnswering"),bu=r(" forward method, overrides the "),Zo=i("code"),ku=r("__call__"),zu=r(" special method."),$u=p(),b($t.$$.fragment),qu=p(),b(qt.$$.fragment),wu=p(),b(wt.$$.fragment),this.h()},l(t){const f=km('[data-svelte="svelte-1phssyn"]',document.head);o=l(f,"META",{name:!0,content:!0}),f.forEach(s),h=u(t),n=l(t,"H1",{class:!0});var Js=d(n);m=l(Js,"A",{id:!0,class:!0,href:!0});var er=d(m);y=l(er,"SPAN",{});var tr=d(y);k(c.$$.fragment,tr),tr.forEach(s),er.forEach(s),_=u(Js),A=l(Js,"SPAN",{});var sr=d(A);Pa=a(sr,"SqueezeBERT"),sr.forEach(s),Js.forEach(s),vr=u(t),ce=l(t,"H2",{class:!0});var Xs=d(ce);Fe=l(Xs,"A",{id:!0,class:!0,href:!0});var nr=d(Fe);Dn=l(nr,"SPAN",{});var or=d(Dn);k(Bt.$$.fragment,or),or.forEach(s),nr.forEach(s),Aa=u(Xs),On=l(Xs,"SPAN",{});var rr=d(On);La=a(rr,"Overview"),rr.forEach(s),Xs.forEach(s),yr=u(t),oe=l(t,"P",{});var Ee=d(oe);Na=a(Ee,"The SqueezeBERT model was proposed in "),Et=l(Ee,"A",{href:!0,rel:!0});var ar=d(Et);Ia=a(ar,"SqueezeBERT: What can computer vision teach NLP about efficient neural networks?"),ar.forEach(s),Da=a(Ee,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, Kurt W. Keutzer. It\u2019s a
bidirectional transformer similar to the BERT model. The key difference between the BERT architecture and the
SqueezeBERT architecture is that SqueezeBERT uses `),jt=l(Ee,"A",{href:!0,rel:!0});var ir=d(jt);Oa=a(ir,"grouped convolutions"),ir.forEach(s),Ra=a(Ee,`
instead of fully-connected layers for the Q, K, V and FFN layers.`),Ee.forEach(s),Tr=u(t),sn=l(t,"P",{});var lr=d(sn);Wa=a(lr,"The abstract from the paper is the following:"),lr.forEach(s),Sr=u(t),nn=l(t,"P",{});var dr=d(nn);Rn=l(dr,"EM",{});var cr=d(Rn);Ka=a(cr,`Humans read and write hundreds of billions of messages every day. Further, due to the availability of large datasets,
large computing systems, and better neural network models, natural language processing (NLP) technology has made
significant strides in understanding, proofreading, and organizing these messages. Thus, there is a significant
opportunity to deploy NLP in myriad applications to help web users, social networks, and businesses. In particular, we
consider smartphones and other mobile devices as crucial platforms for deploying NLP models at scale. However, today\u2019s
highly-accurate NLP neural network models such as BERT and RoBERTa are extremely computationally expensive, with
BERT-base taking 1.7 seconds to classify a text snippet on a Pixel 3 smartphone. In this work, we observe that methods
such as grouped convolutions have yielded significant speedups for computer vision networks, but many of these
techniques have not been adopted by NLP neural network designers. We demonstrate how to replace several operations in
self-attention layers with grouped convolutions, and we use this technique in a novel network architecture called
SqueezeBERT, which runs 4.3x faster than BERT-base on the Pixel 3 while achieving competitive accuracy on the GLUE test
set. The SqueezeBERT code will be released.`),cr.forEach(s),dr.forEach(s),Br=u(t),on=l(t,"P",{});var pr=d(on);Ha=a(pr,"Tips:"),pr.forEach(s),Er=u(t),re=l(t,"UL",{});var je=d(re);Wn=l(je,"LI",{});var ur=d(Wn);Qa=a(ur,`SqueezeBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right
rather than the left.`),ur.forEach(s),Ua=u(je),Kn=l(je,"LI",{});var hr=d(Kn);Va=a(hr,`SqueezeBERT is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained
with a causal language modeling (CLM) objective are better in that regard.`),hr.forEach(s),Ga=u(je),Mt=l(je,"LI",{});var Ys=d(Mt);Ja=a(Ys,`For best results when finetuning on sequence classification tasks, it is recommended to start with the
`),Hn=l(Ys,"EM",{});var mr=d(Hn);Xa=a(mr,"squeezebert/squeezebert-mnli-headless"),mr.forEach(s),Ya=a(Ys," checkpoint."),Ys.forEach(s),je.forEach(s),jr=u(t),xe=l(t,"P",{});var Zs=d(xe);Za=a(Zs,"This model was contributed by "),Ft=l(Zs,"A",{href:!0,rel:!0});var fr=d(Ft);ei=a(fr,"forresti"),fr.forEach(s),ti=a(Zs,"."),Zs.forEach(s),Mr=u(t),pe=l(t,"H2",{class:!0});var en=d(pe);Ce=l(en,"A",{id:!0,class:!0,href:!0});var gr=d(Ce);Qn=l(gr,"SPAN",{});var _r=d(Qn);k(xt.$$.fragment,_r),_r.forEach(s),gr.forEach(s),si=u(en),Un=l(en,"SPAN",{});var br=d(Un);ni=a(br,"SqueezeBertConfig"),br.forEach(s),en.forEach(s),Fr=u(t),U=l(t,"DIV",{class:!0});var Z=d(U);k(Ct.$$.fragment,Z),oi=u(Z),Pt=l(Z,"P",{});var tn=d(Pt);ri=a(tn,"This is the configuration class to store the configuration of a "),rn=l(tn,"A",{href:!0});var kr=d(rn);ai=a(kr,"SqueezeBertModel"),kr.forEach(s),ii=a(tn,`. It is used to instantiate a
SqueezeBERT model according to the specified arguments, defining the model architecture.`),tn.forEach(s),li=u(Z),ue=l(Z,"P",{});var Me=d(ue);di=a(Me,"Configuration objects inherit from "),an=l(Me,"A",{href:!0});var zr=d(an);ci=a(zr,"PretrainedConfig"),zr.forEach(s),pi=a(Me,` and can be used to control the model outputs. Read the
documentation from `),ln=l(Me,"A",{href:!0});var $r=d(ln);ui=a($r,"PretrainedConfig"),$r.forEach(s),hi=a(Me," for more information."),Me.forEach(s),mi=u(Z),k(Pe.$$.fragment,Z),fi=u(Z),Vn=l(Z,"P",{});var Tu=d(Vn);gi=a(Tu,`Attributes: pretrained_config_archive_map (Dict[str, str]): A dictionary containing all the available pre-trained
checkpoints.`),Tu.forEach(s),Z.forEach(s),xr=u(t),he=l(t,"H2",{class:!0});var Jr=d(he);Ae=l(Jr,"A",{id:!0,class:!0,href:!0});var Su=d(Ae);Gn=l(Su,"SPAN",{});var Bu=d(Gn);k(At.$$.fragment,Bu),Bu.forEach(s),Su.forEach(s),_i=u(Jr),Jn=l(Jr,"SPAN",{});var Eu=d(Jn);bi=a(Eu,"SqueezeBertTokenizer"),Eu.forEach(s),Jr.forEach(s),Cr=u(t),L=l(t,"DIV",{class:!0});var Q=d(L);k(Lt.$$.fragment,Q),ki=u(Q),Xn=l(Q,"P",{});var ju=d(Xn);zi=a(ju,"Constructs a SqueezeBert tokenizer."),ju.forEach(s),$i=u(Q),Le=l(Q,"P",{});var qr=d(Le);dn=l(qr,"A",{href:!0});var Mu=d(dn);qi=a(Mu,"SqueezeBertTokenizer"),Mu.forEach(s),wi=a(qr," is identical to "),cn=l(qr,"A",{href:!0});var Fu=d(cn);vi=a(Fu,"BertTokenizer"),Fu.forEach(s),yi=a(qr," and runs end-to-end tokenization: punctuation splitting"),qr.forEach(s),Ti=u(Q),Yn=l(Q,"UL",{});var xu=d(Yn);Zn=l(xu,"LI",{});var Cu=d(Zn);Si=a(Cu,"wordpiece."),Cu.forEach(s),xu.forEach(s),Bi=u(Q),Nt=l(Q,"P",{});var Xr=d(Nt);Ei=a(Xr,"Refer to superclass "),pn=l(Xr,"A",{href:!0});var Pu=d(pn);ji=a(Pu,"BertTokenizer"),Pu.forEach(s),Mi=a(Xr," for usage examples and documentation concerning parameters."),Xr.forEach(s),Fi=u(Q),ae=l(Q,"DIV",{class:!0});var jn=d(ae);k(It.$$.fragment,jn),xi=u(jn),eo=l(jn,"P",{});var Au=d(eo);Ci=a(Au,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Au.forEach(s),Pi=u(jn),Dt=l(jn,"UL",{});var Yr=d(Dt);un=l(Yr,"LI",{});var vu=d(un);Ai=a(vu,"single sequence: "),to=l(vu,"CODE",{});var Lu=d(to);Li=a(Lu,"[CLS] X [SEP]"),Lu.forEach(s),vu.forEach(s),Ni=u(Yr),hn=l(Yr,"LI",{});var yu=d(hn);Ii=a(yu,"pair of sequences: "),so=l(yu,"CODE",{});var Nu=d(so);Di=a(Nu,"[CLS] A [SEP] B [SEP]"),Nu.forEach(s),yu.forEach(s),Yr.forEach(s),jn.forEach(s),Oi=u(Q),Ne=l(Q,"DIV",{class:!0});var Zr=d(Ne);k(Ot.$$.fragment,Zr),Ri=u(Zr),Rt=l(Zr,"P",{});var ea=d(Rt);Wi=a(ea,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),no=l(ea,"CODE",{});var Iu=d(no);Ki=a(Iu,"prepare_for_model"),Iu.forEach(s),Hi=a(ea," method."),ea.forEach(s),Zr.forEach(s),Qi=u(Q),ee=l(Q,"DIV",{class:!0});var vt=d(ee);k(Wt.$$.fragment,vt),Ui=u(vt),oo=l(vt,"P",{});var Du=d(oo);Vi=a(Du,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format:`),Du.forEach(s),Gi=u(vt),k(Ie.$$.fragment,vt),Ji=u(vt),me=l(vt,"P",{});var Mn=d(me);Xi=a(Mn,"If "),ro=l(Mn,"CODE",{});var Ou=d(ro);Yi=a(Ou,"token_ids_1"),Ou.forEach(s),Zi=a(Mn," is "),ao=l(Mn,"CODE",{});var Ru=d(ao);el=a(Ru,"None"),Ru.forEach(s),tl=a(Mn,", this method only returns the first portion of the mask (0s)."),Mn.forEach(s),vt.forEach(s),sl=u(Q),mn=l(Q,"DIV",{class:!0});var Wu=d(mn);k(Kt.$$.fragment,Wu),Wu.forEach(s),Q.forEach(s),Pr=u(t),fe=l(t,"H2",{class:!0});var ta=d(fe);De=l(ta,"A",{id:!0,class:!0,href:!0});var Ku=d(De);io=l(Ku,"SPAN",{});var Hu=d(io);k(Ht.$$.fragment,Hu),Hu.forEach(s),Ku.forEach(s),nl=u(ta),lo=l(ta,"SPAN",{});var Qu=d(lo);ol=a(Qu,"SqueezeBertTokenizerFast"),Qu.forEach(s),ta.forEach(s),Ar=u(t),Y=l(t,"DIV",{class:!0});var yt=d(Y);k(Qt.$$.fragment,yt),rl=u(yt),Ut=l(yt,"P",{});var sa=d(Ut);al=a(sa,"Constructs a \u201CFast\u201D SqueezeBert tokenizer (backed by HuggingFace\u2019s "),co=l(sa,"EM",{});var Uu=d(co);il=a(Uu,"tokenizers"),Uu.forEach(s),ll=a(sa," library)."),sa.forEach(s),dl=u(yt),Oe=l(yt,"P",{});var wr=d(Oe);fn=l(wr,"A",{href:!0});var Vu=d(fn);cl=a(Vu,"SqueezeBertTokenizerFast"),Vu.forEach(s),pl=a(wr," is identical to "),gn=l(wr,"A",{href:!0});var Gu=d(gn);ul=a(Gu,"BertTokenizerFast"),Gu.forEach(s),hl=a(wr,` and runs end-to-end tokenization: punctuation
splitting + wordpiece.`),wr.forEach(s),ml=u(yt),Vt=l(yt,"P",{});var na=d(Vt);fl=a(na,"Refer to superclass "),_n=l(na,"A",{href:!0});var Ju=d(_n);gl=a(Ju,"BertTokenizerFast"),Ju.forEach(s),_l=a(na," for usage examples and documentation concerning parameters."),na.forEach(s),yt.forEach(s),Lr=u(t),ge=l(t,"H2",{class:!0});var oa=d(ge);Re=l(oa,"A",{id:!0,class:!0,href:!0});var Xu=d(Re);po=l(Xu,"SPAN",{});var Yu=d(po);k(Gt.$$.fragment,Yu),Yu.forEach(s),Xu.forEach(s),bl=u(oa),uo=l(oa,"SPAN",{});var Zu=d(uo);kl=a(Zu,"SqueezeBertModel"),Zu.forEach(s),oa.forEach(s),Nr=u(t),S=l(t,"DIV",{class:!0});var N=d(S);k(Jt.$$.fragment,N),zl=u(N),ho=l(N,"P",{});var eh=d(ho);$l=a(eh,"The bare SqueezeBERT Model transformer outputting raw hidden-states without any specific head on top."),eh.forEach(s),ql=u(N),Xt=l(N,"P",{});var ra=d(Xt);wl=a(ra,"The SqueezeBERT model was proposed in "),Yt=l(ra,"A",{href:!0,rel:!0});var th=d(Yt);vl=a(th,`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),th.forEach(s),yl=a(ra,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),ra.forEach(s),Tl=u(N),Zt=l(N,"P",{});var aa=d(Zt);Sl=a(aa,"This model inherits from "),bn=l(aa,"A",{href:!0});var sh=d(bn);Bl=a(sh,"PreTrainedModel"),sh.forEach(s),El=a(aa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aa.forEach(s),jl=u(N),es=l(N,"P",{});var ia=d(es);Ml=a(ia,"This model is also a PyTorch "),ts=l(ia,"A",{href:!0,rel:!0});var nh=d(ts);Fl=a(nh,"torch.nn.Module"),nh.forEach(s),xl=a(ia,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ia.forEach(s),Cl=u(N),ss=l(N,"P",{});var la=d(ss);Pl=a(la,`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),mo=l(la,"EM",{});var oh=d(mo);Al=a(oh,"squeezebert/squeezebert-mnli-headless"),oh.forEach(s),Ll=a(la," checkpoint as a starting point."),la.forEach(s),Nl=u(N),fo=l(N,"P",{});var rh=d(fo);Il=a(rh,"Hierarchy:"),rh.forEach(s),Dl=u(N),k(We.$$.fragment,N),Ol=u(N),go=l(N,"P",{});var ah=d(go);Rl=a(ah,"Data layouts:"),ah.forEach(s),Wl=u(N),k(Ke.$$.fragment,N),Kl=u(N),te=l(N,"DIV",{class:!0});var Tt=d(te);k(ns.$$.fragment,Tt),Hl=u(Tt),_e=l(Tt,"P",{});var Fn=d(_e);Ql=a(Fn,"The "),kn=l(Fn,"A",{href:!0});var ih=d(kn);Ul=a(ih,"SqueezeBertModel"),ih.forEach(s),Vl=a(Fn," forward method, overrides the "),_o=l(Fn,"CODE",{});var lh=d(_o);Gl=a(lh,"__call__"),lh.forEach(s),Jl=a(Fn," special method."),Fn.forEach(s),Xl=u(Tt),k(He.$$.fragment,Tt),Yl=u(Tt),k(Qe.$$.fragment,Tt),Tt.forEach(s),N.forEach(s),Ir=u(t),be=l(t,"H2",{class:!0});var da=d(be);Ue=l(da,"A",{id:!0,class:!0,href:!0});var dh=d(Ue);bo=l(dh,"SPAN",{});var ch=d(bo);k(os.$$.fragment,ch),ch.forEach(s),dh.forEach(s),Zl=u(da),ko=l(da,"SPAN",{});var ph=d(ko);ed=a(ph,"SqueezeBertForMaskedLM"),ph.forEach(s),da.forEach(s),Dr=u(t),B=l(t,"DIV",{class:!0});var I=d(B);k(rs.$$.fragment,I),td=u(I),as=l(I,"P",{});var ca=d(as);sd=a(ca,"SqueezeBERT Model with a "),zo=l(ca,"CODE",{});var uh=d(zo);nd=a(uh,"language modeling"),uh.forEach(s),od=a(ca," head on top."),ca.forEach(s),rd=u(I),is=l(I,"P",{});var pa=d(is);ad=a(pa,"The SqueezeBERT model was proposed in "),ls=l(pa,"A",{href:!0,rel:!0});var hh=d(ls);id=a(hh,`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),hh.forEach(s),ld=a(pa,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),pa.forEach(s),dd=u(I),ds=l(I,"P",{});var ua=d(ds);cd=a(ua,"This model inherits from "),zn=l(ua,"A",{href:!0});var mh=d(zn);pd=a(mh,"PreTrainedModel"),mh.forEach(s),ud=a(ua,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ua.forEach(s),hd=u(I),cs=l(I,"P",{});var ha=d(cs);md=a(ha,"This model is also a PyTorch "),ps=l(ha,"A",{href:!0,rel:!0});var fh=d(ps);fd=a(fh,"torch.nn.Module"),fh.forEach(s),gd=a(ha,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ha.forEach(s),_d=u(I),us=l(I,"P",{});var ma=d(us);bd=a(ma,`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),$o=l(ma,"EM",{});var gh=d($o);kd=a(gh,"squeezebert/squeezebert-mnli-headless"),gh.forEach(s),zd=a(ma," checkpoint as a starting point."),ma.forEach(s),$d=u(I),qo=l(I,"P",{});var _h=d(qo);qd=a(_h,"Hierarchy:"),_h.forEach(s),wd=u(I),k(Ve.$$.fragment,I),vd=u(I),wo=l(I,"P",{});var bh=d(wo);yd=a(bh,"Data layouts:"),bh.forEach(s),Td=u(I),k(Ge.$$.fragment,I),Sd=u(I),V=l(I,"DIV",{class:!0});var ie=d(V);k(hs.$$.fragment,ie),Bd=u(ie),ke=l(ie,"P",{});var xn=d(ke);Ed=a(xn,"The "),$n=l(xn,"A",{href:!0});var kh=d($n);jd=a(kh,"SqueezeBertForMaskedLM"),kh.forEach(s),Md=a(xn," forward method, overrides the "),vo=l(xn,"CODE",{});var zh=d(vo);Fd=a(zh,"__call__"),zh.forEach(s),xd=a(xn," special method."),xn.forEach(s),Cd=u(ie),k(Je.$$.fragment,ie),Pd=u(ie),k(Xe.$$.fragment,ie),Ad=u(ie),k(Ye.$$.fragment,ie),ie.forEach(s),I.forEach(s),Or=u(t),ze=l(t,"H2",{class:!0});var fa=d(ze);Ze=l(fa,"A",{id:!0,class:!0,href:!0});var $h=d(Ze);yo=l($h,"SPAN",{});var qh=d(yo);k(ms.$$.fragment,qh),qh.forEach(s),$h.forEach(s),Ld=u(fa),To=l(fa,"SPAN",{});var wh=d(To);Nd=a(wh,"SqueezeBertForSequenceClassification"),wh.forEach(s),fa.forEach(s),Rr=u(t),E=l(t,"DIV",{class:!0});var D=d(E);k(fs.$$.fragment,D),Id=u(D),So=l(D,"P",{});var vh=d(So);Dd=a(vh,`SqueezeBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),vh.forEach(s),Od=u(D),gs=l(D,"P",{});var ga=d(gs);Rd=a(ga,"The SqueezeBERT model was proposed in "),_s=l(ga,"A",{href:!0,rel:!0});var yh=d(_s);Wd=a(yh,`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),yh.forEach(s),Kd=a(ga,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),ga.forEach(s),Hd=u(D),bs=l(D,"P",{});var _a=d(bs);Qd=a(_a,"This model inherits from "),qn=l(_a,"A",{href:!0});var Th=d(qn);Ud=a(Th,"PreTrainedModel"),Th.forEach(s),Vd=a(_a,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_a.forEach(s),Gd=u(D),ks=l(D,"P",{});var ba=d(ks);Jd=a(ba,"This model is also a PyTorch "),zs=l(ba,"A",{href:!0,rel:!0});var Sh=d(zs);Xd=a(Sh,"torch.nn.Module"),Sh.forEach(s),Yd=a(ba,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ba.forEach(s),Zd=u(D),$s=l(D,"P",{});var ka=d($s);ec=a(ka,`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),Bo=l(ka,"EM",{});var Bh=d(Bo);tc=a(Bh,"squeezebert/squeezebert-mnli-headless"),Bh.forEach(s),sc=a(ka," checkpoint as a starting point."),ka.forEach(s),nc=u(D),Eo=l(D,"P",{});var Eh=d(Eo);oc=a(Eh,"Hierarchy:"),Eh.forEach(s),rc=u(D),k(et.$$.fragment,D),ac=u(D),jo=l(D,"P",{});var jh=d(jo);ic=a(jh,"Data layouts:"),jh.forEach(s),lc=u(D),k(tt.$$.fragment,D),dc=u(D),H=l(D,"DIV",{class:!0});var X=d(H);k(qs.$$.fragment,X),cc=u(X),$e=l(X,"P",{});var Cn=d($e);pc=a(Cn,"The "),wn=l(Cn,"A",{href:!0});var Mh=d(wn);uc=a(Mh,"SqueezeBertForSequenceClassification"),Mh.forEach(s),hc=a(Cn," forward method, overrides the "),Mo=l(Cn,"CODE",{});var Fh=d(Mo);mc=a(Fh,"__call__"),Fh.forEach(s),fc=a(Cn," special method."),Cn.forEach(s),gc=u(X),k(st.$$.fragment,X),_c=u(X),k(nt.$$.fragment,X),bc=u(X),k(ot.$$.fragment,X),kc=u(X),k(rt.$$.fragment,X),zc=u(X),k(at.$$.fragment,X),X.forEach(s),D.forEach(s),Wr=u(t),qe=l(t,"H2",{class:!0});var za=d(qe);it=l(za,"A",{id:!0,class:!0,href:!0});var xh=d(it);Fo=l(xh,"SPAN",{});var Ch=d(Fo);k(ws.$$.fragment,Ch),Ch.forEach(s),xh.forEach(s),$c=u(za),xo=l(za,"SPAN",{});var Ph=d(xo);qc=a(Ph,"SqueezeBertForMultipleChoice"),Ph.forEach(s),za.forEach(s),Kr=u(t),j=l(t,"DIV",{class:!0});var O=d(j);k(vs.$$.fragment,O),wc=u(O),Co=l(O,"P",{});var Ah=d(Co);vc=a(Ah,`SqueezeBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Ah.forEach(s),yc=u(O),ys=l(O,"P",{});var $a=d(ys);Tc=a($a,"The SqueezeBERT model was proposed in "),Ts=l($a,"A",{href:!0,rel:!0});var Lh=d(Ts);Sc=a(Lh,`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),Lh.forEach(s),Bc=a($a,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),$a.forEach(s),Ec=u(O),Ss=l(O,"P",{});var qa=d(Ss);jc=a(qa,"This model inherits from "),vn=l(qa,"A",{href:!0});var Nh=d(vn);Mc=a(Nh,"PreTrainedModel"),Nh.forEach(s),Fc=a(qa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qa.forEach(s),xc=u(O),Bs=l(O,"P",{});var wa=d(Bs);Cc=a(wa,"This model is also a PyTorch "),Es=l(wa,"A",{href:!0,rel:!0});var Ih=d(Es);Pc=a(Ih,"torch.nn.Module"),Ih.forEach(s),Ac=a(wa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wa.forEach(s),Lc=u(O),js=l(O,"P",{});var va=d(js);Nc=a(va,`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),Po=l(va,"EM",{});var Dh=d(Po);Ic=a(Dh,"squeezebert/squeezebert-mnli-headless"),Dh.forEach(s),Dc=a(va," checkpoint as a starting point."),va.forEach(s),Oc=u(O),Ao=l(O,"P",{});var Oh=d(Ao);Rc=a(Oh,"Hierarchy:"),Oh.forEach(s),Wc=u(O),k(lt.$$.fragment,O),Kc=u(O),Lo=l(O,"P",{});var Rh=d(Lo);Hc=a(Rh,"Data layouts:"),Rh.forEach(s),Qc=u(O),k(dt.$$.fragment,O),Uc=u(O),se=l(O,"DIV",{class:!0});var St=d(se);k(Ms.$$.fragment,St),Vc=u(St),we=l(St,"P",{});var Pn=d(we);Gc=a(Pn,"The "),yn=l(Pn,"A",{href:!0});var Wh=d(yn);Jc=a(Wh,"SqueezeBertForMultipleChoice"),Wh.forEach(s),Xc=a(Pn," forward method, overrides the "),No=l(Pn,"CODE",{});var Kh=d(No);Yc=a(Kh,"__call__"),Kh.forEach(s),Zc=a(Pn," special method."),Pn.forEach(s),ep=u(St),k(ct.$$.fragment,St),tp=u(St),k(pt.$$.fragment,St),St.forEach(s),O.forEach(s),Hr=u(t),ve=l(t,"H2",{class:!0});var ya=d(ve);ut=l(ya,"A",{id:!0,class:!0,href:!0});var Hh=d(ut);Io=l(Hh,"SPAN",{});var Qh=d(Io);k(Fs.$$.fragment,Qh),Qh.forEach(s),Hh.forEach(s),sp=u(ya),Do=l(ya,"SPAN",{});var Uh=d(Do);np=a(Uh,"SqueezeBertForTokenClassification"),Uh.forEach(s),ya.forEach(s),Qr=u(t),M=l(t,"DIV",{class:!0});var R=d(M);k(xs.$$.fragment,R),op=u(R),Oo=l(R,"P",{});var Vh=d(Oo);rp=a(Vh,`SqueezeBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Vh.forEach(s),ap=u(R),Cs=l(R,"P",{});var Ta=d(Cs);ip=a(Ta,"The SqueezeBERT model was proposed in "),Ps=l(Ta,"A",{href:!0,rel:!0});var Gh=d(Ps);lp=a(Gh,`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),Gh.forEach(s),dp=a(Ta,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),Ta.forEach(s),cp=u(R),As=l(R,"P",{});var Sa=d(As);pp=a(Sa,"This model inherits from "),Tn=l(Sa,"A",{href:!0});var Jh=d(Tn);up=a(Jh,"PreTrainedModel"),Jh.forEach(s),hp=a(Sa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sa.forEach(s),mp=u(R),Ls=l(R,"P",{});var Ba=d(Ls);fp=a(Ba,"This model is also a PyTorch "),Ns=l(Ba,"A",{href:!0,rel:!0});var Xh=d(Ns);gp=a(Xh,"torch.nn.Module"),Xh.forEach(s),_p=a(Ba,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ba.forEach(s),bp=u(R),Is=l(R,"P",{});var Ea=d(Is);kp=a(Ea,`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),Ro=l(Ea,"EM",{});var Yh=d(Ro);zp=a(Yh,"squeezebert/squeezebert-mnli-headless"),Yh.forEach(s),$p=a(Ea," checkpoint as a starting point."),Ea.forEach(s),qp=u(R),Wo=l(R,"P",{});var Zh=d(Wo);wp=a(Zh,"Hierarchy:"),Zh.forEach(s),vp=u(R),k(ht.$$.fragment,R),yp=u(R),Ko=l(R,"P",{});var em=d(Ko);Tp=a(em,"Data layouts:"),em.forEach(s),Sp=u(R),k(mt.$$.fragment,R),Bp=u(R),G=l(R,"DIV",{class:!0});var le=d(G);k(Ds.$$.fragment,le),Ep=u(le),ye=l(le,"P",{});var An=d(ye);jp=a(An,"The "),Sn=l(An,"A",{href:!0});var tm=d(Sn);Mp=a(tm,"SqueezeBertForTokenClassification"),tm.forEach(s),Fp=a(An," forward method, overrides the "),Ho=l(An,"CODE",{});var sm=d(Ho);xp=a(sm,"__call__"),sm.forEach(s),Cp=a(An," special method."),An.forEach(s),Pp=u(le),k(ft.$$.fragment,le),Ap=u(le),k(gt.$$.fragment,le),Lp=u(le),k(_t.$$.fragment,le),le.forEach(s),R.forEach(s),Ur=u(t),Te=l(t,"H2",{class:!0});var ja=d(Te);bt=l(ja,"A",{id:!0,class:!0,href:!0});var nm=d(bt);Qo=l(nm,"SPAN",{});var om=d(Qo);k(Os.$$.fragment,om),om.forEach(s),nm.forEach(s),Np=u(ja),Uo=l(ja,"SPAN",{});var rm=d(Uo);Ip=a(rm,"SqueezeBertForQuestionAnswering"),rm.forEach(s),ja.forEach(s),Vr=u(t),F=l(t,"DIV",{class:!0});var W=d(F);k(Rs.$$.fragment,W),Dp=u(W),Se=l(W,"P",{});var Ln=d(Se);Op=a(Ln,`SqueezeBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Vo=l(Ln,"CODE",{});var am=d(Vo);Rp=a(am,"span start logits"),am.forEach(s),Wp=a(Ln," and "),Go=l(Ln,"CODE",{});var im=d(Go);Kp=a(im,"span end logits"),im.forEach(s),Hp=a(Ln,")."),Ln.forEach(s),Qp=u(W),Ws=l(W,"P",{});var Ma=d(Ws);Up=a(Ma,"The SqueezeBERT model was proposed in "),Ks=l(Ma,"A",{href:!0,rel:!0});var lm=d(Ks);Vp=a(lm,`SqueezeBERT: What can computer vision teach NLP about efficient neural
networks?`),lm.forEach(s),Gp=a(Ma,` by Forrest N. Iandola, Albert E. Shaw, Ravi Krishna, and Kurt W.
Keutzer`),Ma.forEach(s),Jp=u(W),Hs=l(W,"P",{});var Fa=d(Hs);Xp=a(Fa,"This model inherits from "),Bn=l(Fa,"A",{href:!0});var dm=d(Bn);Yp=a(dm,"PreTrainedModel"),dm.forEach(s),Zp=a(Fa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fa.forEach(s),eu=u(W),Qs=l(W,"P",{});var xa=d(Qs);tu=a(xa,"This model is also a PyTorch "),Us=l(xa,"A",{href:!0,rel:!0});var cm=d(Us);su=a(cm,"torch.nn.Module"),cm.forEach(s),nu=a(xa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xa.forEach(s),ou=u(W),Vs=l(W,"P",{});var Ca=d(Vs);ru=a(Ca,`For best results finetuning SqueezeBERT on text classification tasks, it is recommended to use the
`),Jo=l(Ca,"EM",{});var pm=d(Jo);au=a(pm,"squeezebert/squeezebert-mnli-headless"),pm.forEach(s),iu=a(Ca," checkpoint as a starting point."),Ca.forEach(s),lu=u(W),Xo=l(W,"P",{});var um=d(Xo);du=a(um,"Hierarchy:"),um.forEach(s),cu=u(W),k(kt.$$.fragment,W),pu=u(W),Yo=l(W,"P",{});var hm=d(Yo);uu=a(hm,"Data layouts:"),hm.forEach(s),hu=u(W),k(zt.$$.fragment,W),mu=u(W),J=l(W,"DIV",{class:!0});var de=d(J);k(Gs.$$.fragment,de),fu=u(de),Be=l(de,"P",{});var Nn=d(Be);gu=a(Nn,"The "),En=l(Nn,"A",{href:!0});var mm=d(En);_u=a(mm,"SqueezeBertForQuestionAnswering"),mm.forEach(s),bu=a(Nn," forward method, overrides the "),Zo=l(Nn,"CODE",{});var fm=d(Zo);ku=a(fm,"__call__"),fm.forEach(s),zu=a(Nn," special method."),Nn.forEach(s),$u=u(de),k($t.$$.fragment,de),qu=u(de),k(qt.$$.fragment,de),wu=u(de),k(wt.$$.fragment,de),de.forEach(s),W.forEach(s),this.h()},h(){g(o,"name","hf:doc:metadata"),g(o,"content",JSON.stringify(ef)),g(m,"id","squeezebert"),g(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(m,"href","#squeezebert"),g(n,"class","relative group"),g(Fe,"id","overview"),g(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Fe,"href","#overview"),g(ce,"class","relative group"),g(Et,"href","https://arxiv.org/abs/2006.11316"),g(Et,"rel","nofollow"),g(jt,"href","https://blog.yani.io/filter-group-tutorial"),g(jt,"rel","nofollow"),g(Ft,"href","https://huggingface.co/forresti"),g(Ft,"rel","nofollow"),g(Ce,"id","transformers.SqueezeBertConfig"),g(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Ce,"href","#transformers.SqueezeBertConfig"),g(pe,"class","relative group"),g(rn,"href","/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertModel"),g(an,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),g(ln,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),g(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ae,"id","transformers.SqueezeBertTokenizer"),g(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Ae,"href","#transformers.SqueezeBertTokenizer"),g(he,"class","relative group"),g(dn,"href","/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertTokenizer"),g(cn,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer"),g(pn,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizer"),g(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(mn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(De,"id","transformers.SqueezeBertTokenizerFast"),g(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(De,"href","#transformers.SqueezeBertTokenizerFast"),g(fe,"class","relative group"),g(fn,"href","/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertTokenizerFast"),g(gn,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizerFast"),g(_n,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertTokenizerFast"),g(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Re,"id","transformers.SqueezeBertModel"),g(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Re,"href","#transformers.SqueezeBertModel"),g(ge,"class","relative group"),g(Yt,"href","https://arxiv.org/abs/2006.11316"),g(Yt,"rel","nofollow"),g(bn,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),g(ts,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(ts,"rel","nofollow"),g(kn,"href","/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertModel"),g(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ue,"id","transformers.SqueezeBertForMaskedLM"),g(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Ue,"href","#transformers.SqueezeBertForMaskedLM"),g(be,"class","relative group"),g(ls,"href","https://arxiv.org/abs/2006.11316"),g(ls,"rel","nofollow"),g(zn,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),g(ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(ps,"rel","nofollow"),g($n,"href","/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertForMaskedLM"),g(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ze,"id","transformers.SqueezeBertForSequenceClassification"),g(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Ze,"href","#transformers.SqueezeBertForSequenceClassification"),g(ze,"class","relative group"),g(_s,"href","https://arxiv.org/abs/2006.11316"),g(_s,"rel","nofollow"),g(qn,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),g(zs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(zs,"rel","nofollow"),g(wn,"href","/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertForSequenceClassification"),g(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(it,"id","transformers.SqueezeBertForMultipleChoice"),g(it,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(it,"href","#transformers.SqueezeBertForMultipleChoice"),g(qe,"class","relative group"),g(Ts,"href","https://arxiv.org/abs/2006.11316"),g(Ts,"rel","nofollow"),g(vn,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),g(Es,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Es,"rel","nofollow"),g(yn,"href","/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertForMultipleChoice"),g(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ut,"id","transformers.SqueezeBertForTokenClassification"),g(ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ut,"href","#transformers.SqueezeBertForTokenClassification"),g(ve,"class","relative group"),g(Ps,"href","https://arxiv.org/abs/2006.11316"),g(Ps,"rel","nofollow"),g(Tn,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),g(Ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Ns,"rel","nofollow"),g(Sn,"href","/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertForTokenClassification"),g(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(bt,"id","transformers.SqueezeBertForQuestionAnswering"),g(bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(bt,"href","#transformers.SqueezeBertForQuestionAnswering"),g(Te,"class","relative group"),g(Ks,"href","https://arxiv.org/abs/2006.11316"),g(Ks,"rel","nofollow"),g(Bn,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),g(Us,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Us,"rel","nofollow"),g(En,"href","/docs/transformers/pr_16919/en/model_doc/squeezebert#transformers.SqueezeBertForQuestionAnswering"),g(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,f){e(document.head,o),v(t,h,f),v(t,n,f),e(n,m),e(m,y),z(c,y,null),e(n,_),e(n,A),e(A,Pa),v(t,vr,f),v(t,ce,f),e(ce,Fe),e(Fe,Dn),z(Bt,Dn,null),e(ce,Aa),e(ce,On),e(On,La),v(t,yr,f),v(t,oe,f),e(oe,Na),e(oe,Et),e(Et,Ia),e(oe,Da),e(oe,jt),e(jt,Oa),e(oe,Ra),v(t,Tr,f),v(t,sn,f),e(sn,Wa),v(t,Sr,f),v(t,nn,f),e(nn,Rn),e(Rn,Ka),v(t,Br,f),v(t,on,f),e(on,Ha),v(t,Er,f),v(t,re,f),e(re,Wn),e(Wn,Qa),e(re,Ua),e(re,Kn),e(Kn,Va),e(re,Ga),e(re,Mt),e(Mt,Ja),e(Mt,Hn),e(Hn,Xa),e(Mt,Ya),v(t,jr,f),v(t,xe,f),e(xe,Za),e(xe,Ft),e(Ft,ei),e(xe,ti),v(t,Mr,f),v(t,pe,f),e(pe,Ce),e(Ce,Qn),z(xt,Qn,null),e(pe,si),e(pe,Un),e(Un,ni),v(t,Fr,f),v(t,U,f),z(Ct,U,null),e(U,oi),e(U,Pt),e(Pt,ri),e(Pt,rn),e(rn,ai),e(Pt,ii),e(U,li),e(U,ue),e(ue,di),e(ue,an),e(an,ci),e(ue,pi),e(ue,ln),e(ln,ui),e(ue,hi),e(U,mi),z(Pe,U,null),e(U,fi),e(U,Vn),e(Vn,gi),v(t,xr,f),v(t,he,f),e(he,Ae),e(Ae,Gn),z(At,Gn,null),e(he,_i),e(he,Jn),e(Jn,bi),v(t,Cr,f),v(t,L,f),z(Lt,L,null),e(L,ki),e(L,Xn),e(Xn,zi),e(L,$i),e(L,Le),e(Le,dn),e(dn,qi),e(Le,wi),e(Le,cn),e(cn,vi),e(Le,yi),e(L,Ti),e(L,Yn),e(Yn,Zn),e(Zn,Si),e(L,Bi),e(L,Nt),e(Nt,Ei),e(Nt,pn),e(pn,ji),e(Nt,Mi),e(L,Fi),e(L,ae),z(It,ae,null),e(ae,xi),e(ae,eo),e(eo,Ci),e(ae,Pi),e(ae,Dt),e(Dt,un),e(un,Ai),e(un,to),e(to,Li),e(Dt,Ni),e(Dt,hn),e(hn,Ii),e(hn,so),e(so,Di),e(L,Oi),e(L,Ne),z(Ot,Ne,null),e(Ne,Ri),e(Ne,Rt),e(Rt,Wi),e(Rt,no),e(no,Ki),e(Rt,Hi),e(L,Qi),e(L,ee),z(Wt,ee,null),e(ee,Ui),e(ee,oo),e(oo,Vi),e(ee,Gi),z(Ie,ee,null),e(ee,Ji),e(ee,me),e(me,Xi),e(me,ro),e(ro,Yi),e(me,Zi),e(me,ao),e(ao,el),e(me,tl),e(L,sl),e(L,mn),z(Kt,mn,null),v(t,Pr,f),v(t,fe,f),e(fe,De),e(De,io),z(Ht,io,null),e(fe,nl),e(fe,lo),e(lo,ol),v(t,Ar,f),v(t,Y,f),z(Qt,Y,null),e(Y,rl),e(Y,Ut),e(Ut,al),e(Ut,co),e(co,il),e(Ut,ll),e(Y,dl),e(Y,Oe),e(Oe,fn),e(fn,cl),e(Oe,pl),e(Oe,gn),e(gn,ul),e(Oe,hl),e(Y,ml),e(Y,Vt),e(Vt,fl),e(Vt,_n),e(_n,gl),e(Vt,_l),v(t,Lr,f),v(t,ge,f),e(ge,Re),e(Re,po),z(Gt,po,null),e(ge,bl),e(ge,uo),e(uo,kl),v(t,Nr,f),v(t,S,f),z(Jt,S,null),e(S,zl),e(S,ho),e(ho,$l),e(S,ql),e(S,Xt),e(Xt,wl),e(Xt,Yt),e(Yt,vl),e(Xt,yl),e(S,Tl),e(S,Zt),e(Zt,Sl),e(Zt,bn),e(bn,Bl),e(Zt,El),e(S,jl),e(S,es),e(es,Ml),e(es,ts),e(ts,Fl),e(es,xl),e(S,Cl),e(S,ss),e(ss,Pl),e(ss,mo),e(mo,Al),e(ss,Ll),e(S,Nl),e(S,fo),e(fo,Il),e(S,Dl),z(We,S,null),e(S,Ol),e(S,go),e(go,Rl),e(S,Wl),z(Ke,S,null),e(S,Kl),e(S,te),z(ns,te,null),e(te,Hl),e(te,_e),e(_e,Ql),e(_e,kn),e(kn,Ul),e(_e,Vl),e(_e,_o),e(_o,Gl),e(_e,Jl),e(te,Xl),z(He,te,null),e(te,Yl),z(Qe,te,null),v(t,Ir,f),v(t,be,f),e(be,Ue),e(Ue,bo),z(os,bo,null),e(be,Zl),e(be,ko),e(ko,ed),v(t,Dr,f),v(t,B,f),z(rs,B,null),e(B,td),e(B,as),e(as,sd),e(as,zo),e(zo,nd),e(as,od),e(B,rd),e(B,is),e(is,ad),e(is,ls),e(ls,id),e(is,ld),e(B,dd),e(B,ds),e(ds,cd),e(ds,zn),e(zn,pd),e(ds,ud),e(B,hd),e(B,cs),e(cs,md),e(cs,ps),e(ps,fd),e(cs,gd),e(B,_d),e(B,us),e(us,bd),e(us,$o),e($o,kd),e(us,zd),e(B,$d),e(B,qo),e(qo,qd),e(B,wd),z(Ve,B,null),e(B,vd),e(B,wo),e(wo,yd),e(B,Td),z(Ge,B,null),e(B,Sd),e(B,V),z(hs,V,null),e(V,Bd),e(V,ke),e(ke,Ed),e(ke,$n),e($n,jd),e(ke,Md),e(ke,vo),e(vo,Fd),e(ke,xd),e(V,Cd),z(Je,V,null),e(V,Pd),z(Xe,V,null),e(V,Ad),z(Ye,V,null),v(t,Or,f),v(t,ze,f),e(ze,Ze),e(Ze,yo),z(ms,yo,null),e(ze,Ld),e(ze,To),e(To,Nd),v(t,Rr,f),v(t,E,f),z(fs,E,null),e(E,Id),e(E,So),e(So,Dd),e(E,Od),e(E,gs),e(gs,Rd),e(gs,_s),e(_s,Wd),e(gs,Kd),e(E,Hd),e(E,bs),e(bs,Qd),e(bs,qn),e(qn,Ud),e(bs,Vd),e(E,Gd),e(E,ks),e(ks,Jd),e(ks,zs),e(zs,Xd),e(ks,Yd),e(E,Zd),e(E,$s),e($s,ec),e($s,Bo),e(Bo,tc),e($s,sc),e(E,nc),e(E,Eo),e(Eo,oc),e(E,rc),z(et,E,null),e(E,ac),e(E,jo),e(jo,ic),e(E,lc),z(tt,E,null),e(E,dc),e(E,H),z(qs,H,null),e(H,cc),e(H,$e),e($e,pc),e($e,wn),e(wn,uc),e($e,hc),e($e,Mo),e(Mo,mc),e($e,fc),e(H,gc),z(st,H,null),e(H,_c),z(nt,H,null),e(H,bc),z(ot,H,null),e(H,kc),z(rt,H,null),e(H,zc),z(at,H,null),v(t,Wr,f),v(t,qe,f),e(qe,it),e(it,Fo),z(ws,Fo,null),e(qe,$c),e(qe,xo),e(xo,qc),v(t,Kr,f),v(t,j,f),z(vs,j,null),e(j,wc),e(j,Co),e(Co,vc),e(j,yc),e(j,ys),e(ys,Tc),e(ys,Ts),e(Ts,Sc),e(ys,Bc),e(j,Ec),e(j,Ss),e(Ss,jc),e(Ss,vn),e(vn,Mc),e(Ss,Fc),e(j,xc),e(j,Bs),e(Bs,Cc),e(Bs,Es),e(Es,Pc),e(Bs,Ac),e(j,Lc),e(j,js),e(js,Nc),e(js,Po),e(Po,Ic),e(js,Dc),e(j,Oc),e(j,Ao),e(Ao,Rc),e(j,Wc),z(lt,j,null),e(j,Kc),e(j,Lo),e(Lo,Hc),e(j,Qc),z(dt,j,null),e(j,Uc),e(j,se),z(Ms,se,null),e(se,Vc),e(se,we),e(we,Gc),e(we,yn),e(yn,Jc),e(we,Xc),e(we,No),e(No,Yc),e(we,Zc),e(se,ep),z(ct,se,null),e(se,tp),z(pt,se,null),v(t,Hr,f),v(t,ve,f),e(ve,ut),e(ut,Io),z(Fs,Io,null),e(ve,sp),e(ve,Do),e(Do,np),v(t,Qr,f),v(t,M,f),z(xs,M,null),e(M,op),e(M,Oo),e(Oo,rp),e(M,ap),e(M,Cs),e(Cs,ip),e(Cs,Ps),e(Ps,lp),e(Cs,dp),e(M,cp),e(M,As),e(As,pp),e(As,Tn),e(Tn,up),e(As,hp),e(M,mp),e(M,Ls),e(Ls,fp),e(Ls,Ns),e(Ns,gp),e(Ls,_p),e(M,bp),e(M,Is),e(Is,kp),e(Is,Ro),e(Ro,zp),e(Is,$p),e(M,qp),e(M,Wo),e(Wo,wp),e(M,vp),z(ht,M,null),e(M,yp),e(M,Ko),e(Ko,Tp),e(M,Sp),z(mt,M,null),e(M,Bp),e(M,G),z(Ds,G,null),e(G,Ep),e(G,ye),e(ye,jp),e(ye,Sn),e(Sn,Mp),e(ye,Fp),e(ye,Ho),e(Ho,xp),e(ye,Cp),e(G,Pp),z(ft,G,null),e(G,Ap),z(gt,G,null),e(G,Lp),z(_t,G,null),v(t,Ur,f),v(t,Te,f),e(Te,bt),e(bt,Qo),z(Os,Qo,null),e(Te,Np),e(Te,Uo),e(Uo,Ip),v(t,Vr,f),v(t,F,f),z(Rs,F,null),e(F,Dp),e(F,Se),e(Se,Op),e(Se,Vo),e(Vo,Rp),e(Se,Wp),e(Se,Go),e(Go,Kp),e(Se,Hp),e(F,Qp),e(F,Ws),e(Ws,Up),e(Ws,Ks),e(Ks,Vp),e(Ws,Gp),e(F,Jp),e(F,Hs),e(Hs,Xp),e(Hs,Bn),e(Bn,Yp),e(Hs,Zp),e(F,eu),e(F,Qs),e(Qs,tu),e(Qs,Us),e(Us,su),e(Qs,nu),e(F,ou),e(F,Vs),e(Vs,ru),e(Vs,Jo),e(Jo,au),e(Vs,iu),e(F,lu),e(F,Xo),e(Xo,du),e(F,cu),z(kt,F,null),e(F,pu),e(F,Yo),e(Yo,uu),e(F,hu),z(zt,F,null),e(F,mu),e(F,J),z(Gs,J,null),e(J,fu),e(J,Be),e(Be,gu),e(Be,En),e(En,_u),e(Be,bu),e(Be,Zo),e(Zo,ku),e(Be,zu),e(J,$u),z($t,J,null),e(J,qu),z(qt,J,null),e(J,wu),z(wt,J,null),Gr=!0},p(t,[f]){const Js={};f&2&&(Js.$$scope={dirty:f,ctx:t}),Pe.$set(Js);const er={};f&2&&(er.$$scope={dirty:f,ctx:t}),Ie.$set(er);const tr={};f&2&&(tr.$$scope={dirty:f,ctx:t}),We.$set(tr);const sr={};f&2&&(sr.$$scope={dirty:f,ctx:t}),Ke.$set(sr);const Xs={};f&2&&(Xs.$$scope={dirty:f,ctx:t}),He.$set(Xs);const nr={};f&2&&(nr.$$scope={dirty:f,ctx:t}),Qe.$set(nr);const or={};f&2&&(or.$$scope={dirty:f,ctx:t}),Ve.$set(or);const rr={};f&2&&(rr.$$scope={dirty:f,ctx:t}),Ge.$set(rr);const Ee={};f&2&&(Ee.$$scope={dirty:f,ctx:t}),Je.$set(Ee);const ar={};f&2&&(ar.$$scope={dirty:f,ctx:t}),Xe.$set(ar);const ir={};f&2&&(ir.$$scope={dirty:f,ctx:t}),Ye.$set(ir);const lr={};f&2&&(lr.$$scope={dirty:f,ctx:t}),et.$set(lr);const dr={};f&2&&(dr.$$scope={dirty:f,ctx:t}),tt.$set(dr);const cr={};f&2&&(cr.$$scope={dirty:f,ctx:t}),st.$set(cr);const pr={};f&2&&(pr.$$scope={dirty:f,ctx:t}),nt.$set(pr);const je={};f&2&&(je.$$scope={dirty:f,ctx:t}),ot.$set(je);const ur={};f&2&&(ur.$$scope={dirty:f,ctx:t}),rt.$set(ur);const hr={};f&2&&(hr.$$scope={dirty:f,ctx:t}),at.$set(hr);const Ys={};f&2&&(Ys.$$scope={dirty:f,ctx:t}),lt.$set(Ys);const mr={};f&2&&(mr.$$scope={dirty:f,ctx:t}),dt.$set(mr);const Zs={};f&2&&(Zs.$$scope={dirty:f,ctx:t}),ct.$set(Zs);const fr={};f&2&&(fr.$$scope={dirty:f,ctx:t}),pt.$set(fr);const en={};f&2&&(en.$$scope={dirty:f,ctx:t}),ht.$set(en);const gr={};f&2&&(gr.$$scope={dirty:f,ctx:t}),mt.$set(gr);const _r={};f&2&&(_r.$$scope={dirty:f,ctx:t}),ft.$set(_r);const br={};f&2&&(br.$$scope={dirty:f,ctx:t}),gt.$set(br);const Z={};f&2&&(Z.$$scope={dirty:f,ctx:t}),_t.$set(Z);const tn={};f&2&&(tn.$$scope={dirty:f,ctx:t}),kt.$set(tn);const kr={};f&2&&(kr.$$scope={dirty:f,ctx:t}),zt.$set(kr);const Me={};f&2&&(Me.$$scope={dirty:f,ctx:t}),$t.$set(Me);const zr={};f&2&&(zr.$$scope={dirty:f,ctx:t}),qt.$set(zr);const $r={};f&2&&($r.$$scope={dirty:f,ctx:t}),wt.$set($r)},i(t){Gr||($(c.$$.fragment,t),$(Bt.$$.fragment,t),$(xt.$$.fragment,t),$(Ct.$$.fragment,t),$(Pe.$$.fragment,t),$(At.$$.fragment,t),$(Lt.$$.fragment,t),$(It.$$.fragment,t),$(Ot.$$.fragment,t),$(Wt.$$.fragment,t),$(Ie.$$.fragment,t),$(Kt.$$.fragment,t),$(Ht.$$.fragment,t),$(Qt.$$.fragment,t),$(Gt.$$.fragment,t),$(Jt.$$.fragment,t),$(We.$$.fragment,t),$(Ke.$$.fragment,t),$(ns.$$.fragment,t),$(He.$$.fragment,t),$(Qe.$$.fragment,t),$(os.$$.fragment,t),$(rs.$$.fragment,t),$(Ve.$$.fragment,t),$(Ge.$$.fragment,t),$(hs.$$.fragment,t),$(Je.$$.fragment,t),$(Xe.$$.fragment,t),$(Ye.$$.fragment,t),$(ms.$$.fragment,t),$(fs.$$.fragment,t),$(et.$$.fragment,t),$(tt.$$.fragment,t),$(qs.$$.fragment,t),$(st.$$.fragment,t),$(nt.$$.fragment,t),$(ot.$$.fragment,t),$(rt.$$.fragment,t),$(at.$$.fragment,t),$(ws.$$.fragment,t),$(vs.$$.fragment,t),$(lt.$$.fragment,t),$(dt.$$.fragment,t),$(Ms.$$.fragment,t),$(ct.$$.fragment,t),$(pt.$$.fragment,t),$(Fs.$$.fragment,t),$(xs.$$.fragment,t),$(ht.$$.fragment,t),$(mt.$$.fragment,t),$(Ds.$$.fragment,t),$(ft.$$.fragment,t),$(gt.$$.fragment,t),$(_t.$$.fragment,t),$(Os.$$.fragment,t),$(Rs.$$.fragment,t),$(kt.$$.fragment,t),$(zt.$$.fragment,t),$(Gs.$$.fragment,t),$($t.$$.fragment,t),$(qt.$$.fragment,t),$(wt.$$.fragment,t),Gr=!0)},o(t){q(c.$$.fragment,t),q(Bt.$$.fragment,t),q(xt.$$.fragment,t),q(Ct.$$.fragment,t),q(Pe.$$.fragment,t),q(At.$$.fragment,t),q(Lt.$$.fragment,t),q(It.$$.fragment,t),q(Ot.$$.fragment,t),q(Wt.$$.fragment,t),q(Ie.$$.fragment,t),q(Kt.$$.fragment,t),q(Ht.$$.fragment,t),q(Qt.$$.fragment,t),q(Gt.$$.fragment,t),q(Jt.$$.fragment,t),q(We.$$.fragment,t),q(Ke.$$.fragment,t),q(ns.$$.fragment,t),q(He.$$.fragment,t),q(Qe.$$.fragment,t),q(os.$$.fragment,t),q(rs.$$.fragment,t),q(Ve.$$.fragment,t),q(Ge.$$.fragment,t),q(hs.$$.fragment,t),q(Je.$$.fragment,t),q(Xe.$$.fragment,t),q(Ye.$$.fragment,t),q(ms.$$.fragment,t),q(fs.$$.fragment,t),q(et.$$.fragment,t),q(tt.$$.fragment,t),q(qs.$$.fragment,t),q(st.$$.fragment,t),q(nt.$$.fragment,t),q(ot.$$.fragment,t),q(rt.$$.fragment,t),q(at.$$.fragment,t),q(ws.$$.fragment,t),q(vs.$$.fragment,t),q(lt.$$.fragment,t),q(dt.$$.fragment,t),q(Ms.$$.fragment,t),q(ct.$$.fragment,t),q(pt.$$.fragment,t),q(Fs.$$.fragment,t),q(xs.$$.fragment,t),q(ht.$$.fragment,t),q(mt.$$.fragment,t),q(Ds.$$.fragment,t),q(ft.$$.fragment,t),q(gt.$$.fragment,t),q(_t.$$.fragment,t),q(Os.$$.fragment,t),q(Rs.$$.fragment,t),q(kt.$$.fragment,t),q(zt.$$.fragment,t),q(Gs.$$.fragment,t),q($t.$$.fragment,t),q(qt.$$.fragment,t),q(wt.$$.fragment,t),Gr=!1},d(t){s(o),t&&s(h),t&&s(n),w(c),t&&s(vr),t&&s(ce),w(Bt),t&&s(yr),t&&s(oe),t&&s(Tr),t&&s(sn),t&&s(Sr),t&&s(nn),t&&s(Br),t&&s(on),t&&s(Er),t&&s(re),t&&s(jr),t&&s(xe),t&&s(Mr),t&&s(pe),w(xt),t&&s(Fr),t&&s(U),w(Ct),w(Pe),t&&s(xr),t&&s(he),w(At),t&&s(Cr),t&&s(L),w(Lt),w(It),w(Ot),w(Wt),w(Ie),w(Kt),t&&s(Pr),t&&s(fe),w(Ht),t&&s(Ar),t&&s(Y),w(Qt),t&&s(Lr),t&&s(ge),w(Gt),t&&s(Nr),t&&s(S),w(Jt),w(We),w(Ke),w(ns),w(He),w(Qe),t&&s(Ir),t&&s(be),w(os),t&&s(Dr),t&&s(B),w(rs),w(Ve),w(Ge),w(hs),w(Je),w(Xe),w(Ye),t&&s(Or),t&&s(ze),w(ms),t&&s(Rr),t&&s(E),w(fs),w(et),w(tt),w(qs),w(st),w(nt),w(ot),w(rt),w(at),t&&s(Wr),t&&s(qe),w(ws),t&&s(Kr),t&&s(j),w(vs),w(lt),w(dt),w(Ms),w(ct),w(pt),t&&s(Hr),t&&s(ve),w(Fs),t&&s(Qr),t&&s(M),w(xs),w(ht),w(mt),w(Ds),w(ft),w(gt),w(_t),t&&s(Ur),t&&s(Te),w(Os),t&&s(Vr),t&&s(F),w(Rs),w(kt),w(zt),w(Gs),w($t),w(qt),w(wt)}}}const ef={local:"squeezebert",sections:[{local:"overview",title:"Overview"},{local:"transformers.SqueezeBertConfig",title:"SqueezeBertConfig"},{local:"transformers.SqueezeBertTokenizer",title:"SqueezeBertTokenizer"},{local:"transformers.SqueezeBertTokenizerFast",title:"SqueezeBertTokenizerFast"},{local:"transformers.SqueezeBertModel",title:"SqueezeBertModel"},{local:"transformers.SqueezeBertForMaskedLM",title:"SqueezeBertForMaskedLM"},{local:"transformers.SqueezeBertForSequenceClassification",title:"SqueezeBertForSequenceClassification"},{local:"transformers.SqueezeBertForMultipleChoice",title:"SqueezeBertForMultipleChoice"},{local:"transformers.SqueezeBertForTokenClassification",title:"SqueezeBertForTokenClassification"},{local:"transformers.SqueezeBertForQuestionAnswering",title:"SqueezeBertForQuestionAnswering"}],title:"SqueezeBERT"};function tf(T){return zm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class df extends gm{constructor(o){super();_m(this,o,tf,Zm,bm,{})}}export{df as default,ef as metadata};
