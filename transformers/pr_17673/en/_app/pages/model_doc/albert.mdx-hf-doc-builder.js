import{S as T3,i as y3,s as w3,e as n,k as h,w as T,t as a,M as $3,c as s,d as t,m,a as r,x as y,h as i,b as u,G as e,g as b,y as w,q as $,o as A,B as F,v as A3,L as oe}from"../../chunks/vendor-hf-doc-builder.js";import{T as we}from"../../chunks/Tip-hf-doc-builder.js";import{D as N}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ne}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Fe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as te}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function F3(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertConfig, AlbertModel

# Initializing an ALBERT-xxlarge style configuration
albert_xxlarge_configuration = AlbertConfig()

# Initializing an ALBERT-base style configuration
albert_base_configuration = AlbertConfig(
    hidden_size=768,
    num_attention_heads=12,
    intermediate_size=3072,
)

# Initializing a model from the ALBERT-base style configuration
model = AlbertModel(albert_xxlarge_configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertConfig, AlbertModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing an ALBERT-xxlarge style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>albert_xxlarge_configuration = AlbertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing an ALBERT-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>albert_base_configuration = AlbertConfig(
<span class="hljs-meta">... </span>    hidden_size=<span class="hljs-number">768</span>,
<span class="hljs-meta">... </span>    num_attention_heads=<span class="hljs-number">12</span>,
<span class="hljs-meta">... </span>    intermediate_size=<span class="hljs-number">3072</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the ALBERT-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertModel(albert_xxlarge_configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),g=a("Examples:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Examples:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function x3(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer
tokenizer = AlbertTokenizer(vocab_file='Your/Sentincepiece/Model/Path',do_lower_case=False)
tokenizer('I love huggingface.')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer(vocab_file=<span class="hljs-string">&#x27;Your/Sentincepiece/Model/Path&#x27;</span>,do_lower_case=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer(<span class="hljs-string">&#x27;I love huggingface.&#x27;</span>)
{<span class="hljs-string">&#x27;input_ids&#x27;</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">97</span>, <span class="hljs-number">9</span>, <span class="hljs-number">16</span>, <span class="hljs-number">5</span>, <span class="hljs-number">20</span>, <span class="hljs-number">2</span>], <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>], <span class="hljs-string">&#x27;attention_mask&#x27;</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>]}`}}),{c(){d=n("p"),g=a("You could use your sentincepiece model to build the AlbertTokenizer:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"You could use your sentincepiece model to build the AlbertTokenizer:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function E3(x){let d,g;return d=new ne({props:{code:`tokenizer=AlbertTokenizer.from_pretrained('albert-base-v2')
tokenizer('I love huggingface.')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer=AlbertTokenizer.from_pretrained(<span class="hljs-string">&#x27;albert-base-v2&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer(<span class="hljs-string">&#x27;I love huggingface.&#x27;</span>)
{<span class="hljs-string">&#x27;input_ids&#x27;</span>: [<span class="hljs-number">2</span>, <span class="hljs-number">31</span>, <span class="hljs-number">339</span>, <span class="hljs-number">20676</span>, <span class="hljs-number">6413</span>, <span class="hljs-number">9</span>, <span class="hljs-number">3</span>], <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>], <span class="hljs-string">&#x27;attention_mask&#x27;</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>]}`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function M3(x){let d,g,c,p,_;return p=new ne({props:{code:`tokenizer = AlbertTokenizer(vocab_file='Your/Sentincepiece/Model/Path',do_lower_case=False)
tokenizer.tokenize('[CLS][SEP]')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer(vocab_file=<span class="hljs-string">&#x27;Your/Sentincepiece/Model/Path&#x27;</span>,do_lower_case=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.tokenize(<span class="hljs-string">&#x27;[CLS][SEP]&#x27;</span>)
[<span class="hljs-string">&#x27;[&#x27;</span>, <span class="hljs-string">&#x27;CL&#x27;</span>, <span class="hljs-string">&#x27;S&#x27;</span>, <span class="hljs-string">&#x27;][&#x27;</span>, <span class="hljs-string">&#x27;SE&#x27;</span>, <span class="hljs-string">&#x27;P&#x27;</span>, <span class="hljs-string">&#x27;]&#x27;</span>]`}}),{c(){d=n("p"),g=a("For example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"For example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function z3(x){let d,g,c,p,_,l,f,E;return f=new ne({props:{code:`tokenizer.save_pretrained('Your/Save/Path')
tokenizer = AlbertTokenizer.from_pretrained('Your/Save/Path')
tokenizer.tokenize('[CLS][SEP]')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.save_pretrained(<span class="hljs-string">&#x27;Your/Save/Path&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&#x27;Your/Save/Path&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.tokenize(<span class="hljs-string">&#x27;[CLS][SEP]&#x27;</span>)
[<span class="hljs-string">&#x27;[CLS]&#x27;</span>, <span class="hljs-string">&#x27;[SEP]&#x27;</span>]`}}),{c(){d=n("p"),g=a("Using "),c=n("code"),p=a("from_pretrained"),_=a(":"),l=h(),T(f.$$.fragment)},l(L){d=s(L,"P",{});var I=r(d);g=i(I,"Using "),c=s(I,"CODE",{});var M=r(c);p=i(M,"from_pretrained"),M.forEach(t),_=i(I,":"),I.forEach(t),l=m(L),y(f.$$.fragment,L)},m(L,I){b(L,d,I),e(d,g),e(d,c),e(c,p),e(d,_),b(L,l,I),w(f,L,I),E=!0},p:oe,i(L){E||($(f.$$.fragment,L),E=!0)},o(L){A(f.$$.fragment,L),E=!1},d(L){L&&t(d),L&&t(l),F(f,L)}}}function j3(x){let d,g,c,p,_,l,f,E,L,I;return f=new te({props:{anchor:"transformers.AlbertTokenizer.example-3",$$slots:{default:[M3]},$$scope:{ctx:x}}}),L=new te({props:{anchor:"transformers.AlbertTokenizer.example-4",$$slots:{default:[z3]},$$scope:{ctx:x}}}),{c(){d=n("p"),g=a("Due to some internal reasons, unexpected word segmentation may occur when initializing a tokenizer from scratch. You could try to use "),c=n("code"),p=a("from_pretrained"),_=a("."),l=h(),T(f.$$.fragment),E=h(),T(L.$$.fragment)},l(M){d=s(M,"P",{});var S=r(d);g=i(S,"Due to some internal reasons, unexpected word segmentation may occur when initializing a tokenizer from scratch. You could try to use "),c=s(S,"CODE",{});var O=r(c);p=i(O,"from_pretrained"),O.forEach(t),_=i(S,"."),S.forEach(t),l=m(M),y(f.$$.fragment,M),E=m(M),y(L.$$.fragment,M)},m(M,S){b(M,d,S),e(d,g),e(d,c),e(c,p),e(d,_),b(M,l,S),w(f,M,S),b(M,E,S),w(L,M,S),I=!0},p(M,S){const O={};S&2&&(O.$$scope={dirty:S,ctx:M}),f.$set(O);const Z={};S&2&&(Z.$$scope={dirty:S,ctx:M}),L.$set(Z)},i(M){I||($(f.$$.fragment,M),$(L.$$.fragment,M),I=!0)},o(M){A(f.$$.fragment,M),A(L.$$.fragment,M),I=!1},d(M){M&&t(d),M&&t(l),F(f,M),M&&t(E),F(L,M)}}}function q3(x){let d,g,c,p,_;return p=new ne({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=n("p"),g=a("sequence pair mask has the following format:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"sequence pair mask has the following format:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function P3(x){let d,g,c,p,_;return p=new ne({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=n("p"),g=a("sequence pair mask has the following format:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"sequence pair mask has the following format:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function C3(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function L3(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, AlbertModel
import torch

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = AlbertModel.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertModel.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function I3(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function O3(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, AlbertForPreTraining
import torch

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = AlbertForPreTraining.from_pretrained("albert-base-v2")

input_ids = torch.tensor(tokenizer.encode("Hello, my dog is cute", add_special_tokens=True)).unsqueeze(0)
# Batch size 1
outputs = model(input_ids)

prediction_logits = outputs.prediction_logits
sop_logits = outputs.sop_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForPreTraining.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>)).unsqueeze(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>sop_logits = outputs.sop_logits`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function N3(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function S3(x){let d,g,c,p,_;return p=new ne({props:{code:`import torch
from transformers import AlbertTokenizer, AlbertForMaskedLM

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = AlbertForMaskedLM.from_pretrained("albert-base-v2")

# add mask_token
inputs = tokenizer("The capital of [MASK] is Paris.", return_tensors="pt")
with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]
predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add mask_token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of [MASK] is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;france&#x27;</span>`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function D3(x){let d,g;return d=new ne({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)
outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.81</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function W3(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function U3(x){let d,g,c,p,_;return p=new ne({props:{code:`import torch
from transformers import AlbertTokenizer, AlbertForSequenceClassification

tokenizer = AlbertTokenizer.from_pretrained("textattack/albert-base-v2-imdb")
model = AlbertForSequenceClassification.from_pretrained("textattack/albert-base-v2-imdb")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=n("p"),g=a("Example of single-label classification:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example of single-label classification:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function B3(x){let d,g;return d=new ne({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = AlbertForSequenceClassification.from_pretrained("textattack/albert-base-v2-imdb", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.12</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function R3(x){let d,g,c,p,_;return p=new ne({props:{code:`import torch
from transformers import AlbertTokenizer, AlbertForSequenceClassification

tokenizer = AlbertTokenizer.from_pretrained("textattack/albert-base-v2-imdb")
model = AlbertForSequenceClassification.from_pretrained("textattack/albert-base-v2-imdb", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=n("p"),g=a("Example of multi-label classification:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example of multi-label classification:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function H3(x){let d,g;return d=new ne({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = AlbertForSequenceClassification.from_pretrained(
    "textattack/albert-base-v2-imdb", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Q3(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function V3(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, AlbertForMultipleChoice
import torch

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = AlbertForMultipleChoice.from_pretrained("albert-base-v2")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function K3(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function J3(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, AlbertForTokenClassification
import torch

tokenizer = AlbertTokenizer.from_pretrained("vumichien/tiny-albert")
model = AlbertForTokenClassification.from_pretrained("vumichien/tiny-albert")

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
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;vumichien/tiny-albert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/tiny-albert&quot;</span>)

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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function G3(x){let d,g;return d=new ne({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.66</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function X3(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function Y3(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, AlbertForQuestionAnswering
import torch

tokenizer = AlbertTokenizer.from_pretrained("twmkn9/albert-base-v2-squad2")
model = AlbertForQuestionAnswering.from_pretrained("twmkn9/albert-base-v2-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, AlbertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;twmkn9/albert-base-v2-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;twmkn9/albert-base-v2-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Z3(x){let d,g;return d=new ne({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([12])
target_end_index = torch.tensor([13])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">12</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">13</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">7.36</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function eM(x){let d,g,c,p,_,l,f,E,L,I,M,S,O,Z,ue,Q,ge,ce,X,D,re,ee,j,P,se,V,_e,be,K,ke,pe,q,ve,J,ae,le,G,he,ie,W,me,B,de;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=h(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),E=n("li"),L=a("having all inputs as a list, tuple or dict in the first positional arguments."),I=h(),M=n("p"),S=a("This second option is useful when using "),O=n("code"),Z=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=n("code"),ge=a("model(inputs)"),ce=a("."),X=h(),D=n("p"),re=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=h(),j=n("ul"),P=n("li"),se=a("a single Tensor with "),V=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),K=n("code"),ke=a("model(inputs_ids)"),pe=h(),q=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=n("code"),ae=a("model([input_ids, attention_mask])"),le=a(" or "),G=n("code"),he=a("model([input_ids, attention_mask, token_type_ids])"),ie=h(),W=n("li"),me=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),de=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),c=m(v),p=s(v,"UL",{});var Y=r(p);_=s(Y,"LI",{});var Ee=r(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=m(Y),E=s(Y,"LI",{});var xe=r(E);L=i(xe,"having all inputs as a list, tuple or dict in the first positional arguments."),xe.forEach(t),Y.forEach(t),I=m(v),M=s(v,"P",{});var C=r(M);S=i(C,"This second option is useful when using "),O=s(C,"CODE",{});var Me=r(O);Z=i(Me,"tf.keras.Model.fit"),Me.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=s(C,"CODE",{});var $e=r(Q);ge=i($e,"model(inputs)"),$e.forEach(t),ce=i(C,"."),C.forEach(t),X=m(v),D=s(v,"P",{});var ze=r(D);re=i(ze,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ze.forEach(t),ee=m(v),j=s(v,"UL",{});var U=r(j);P=s(U,"LI",{});var R=r(P);se=i(R,"a single Tensor with "),V=s(R,"CODE",{});var je=r(V);_e=i(je,"input_ids"),je.forEach(t),be=i(R," only and nothing else: "),K=s(R,"CODE",{});var qe=r(K);ke=i(qe,"model(inputs_ids)"),qe.forEach(t),R.forEach(t),pe=m(U),q=s(U,"LI",{});var H=r(q);ve=i(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s(H,"CODE",{});var Pe=r(J);ae=i(Pe,"model([input_ids, attention_mask])"),Pe.forEach(t),le=i(H," or "),G=s(H,"CODE",{});var Ce=r(G);he=i(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),H.forEach(t),ie=m(U),W=s(U,"LI",{});var fe=r(W);me=i(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=s(fe,"CODE",{});var Te=r(B);de=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),fe.forEach(t),U.forEach(t)},m(v,z){b(v,d,z),e(d,g),b(v,c,z),b(v,p,z),e(p,_),e(_,l),e(p,f),e(p,E),e(E,L),b(v,I,z),b(v,M,z),e(M,S),e(M,O),e(O,Z),e(M,ue),e(M,Q),e(Q,ge),e(M,ce),b(v,X,z),b(v,D,z),e(D,re),b(v,ee,z),b(v,j,z),e(j,P),e(P,se),e(P,V),e(V,_e),e(P,be),e(P,K),e(K,ke),e(j,pe),e(j,q),e(q,ve),e(q,J),e(J,ae),e(q,le),e(q,G),e(G,he),e(j,ie),e(j,W),e(W,me),e(W,B),e(B,de)},d(v){v&&t(d),v&&t(c),v&&t(p),v&&t(I),v&&t(M),v&&t(X),v&&t(D),v&&t(ee),v&&t(j)}}}function tM(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function oM(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, TFAlbertModel
import tensorflow as tf

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = TFAlbertModel.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertModel.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function nM(x){let d,g,c,p,_,l,f,E,L,I,M,S,O,Z,ue,Q,ge,ce,X,D,re,ee,j,P,se,V,_e,be,K,ke,pe,q,ve,J,ae,le,G,he,ie,W,me,B,de;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=h(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),E=n("li"),L=a("having all inputs as a list, tuple or dict in the first positional arguments."),I=h(),M=n("p"),S=a("This second option is useful when using "),O=n("code"),Z=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=n("code"),ge=a("model(inputs)"),ce=a("."),X=h(),D=n("p"),re=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=h(),j=n("ul"),P=n("li"),se=a("a single Tensor with "),V=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),K=n("code"),ke=a("model(inputs_ids)"),pe=h(),q=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=n("code"),ae=a("model([input_ids, attention_mask])"),le=a(" or "),G=n("code"),he=a("model([input_ids, attention_mask, token_type_ids])"),ie=h(),W=n("li"),me=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),de=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),c=m(v),p=s(v,"UL",{});var Y=r(p);_=s(Y,"LI",{});var Ee=r(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=m(Y),E=s(Y,"LI",{});var xe=r(E);L=i(xe,"having all inputs as a list, tuple or dict in the first positional arguments."),xe.forEach(t),Y.forEach(t),I=m(v),M=s(v,"P",{});var C=r(M);S=i(C,"This second option is useful when using "),O=s(C,"CODE",{});var Me=r(O);Z=i(Me,"tf.keras.Model.fit"),Me.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=s(C,"CODE",{});var $e=r(Q);ge=i($e,"model(inputs)"),$e.forEach(t),ce=i(C,"."),C.forEach(t),X=m(v),D=s(v,"P",{});var ze=r(D);re=i(ze,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ze.forEach(t),ee=m(v),j=s(v,"UL",{});var U=r(j);P=s(U,"LI",{});var R=r(P);se=i(R,"a single Tensor with "),V=s(R,"CODE",{});var je=r(V);_e=i(je,"input_ids"),je.forEach(t),be=i(R," only and nothing else: "),K=s(R,"CODE",{});var qe=r(K);ke=i(qe,"model(inputs_ids)"),qe.forEach(t),R.forEach(t),pe=m(U),q=s(U,"LI",{});var H=r(q);ve=i(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s(H,"CODE",{});var Pe=r(J);ae=i(Pe,"model([input_ids, attention_mask])"),Pe.forEach(t),le=i(H," or "),G=s(H,"CODE",{});var Ce=r(G);he=i(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),H.forEach(t),ie=m(U),W=s(U,"LI",{});var fe=r(W);me=i(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=s(fe,"CODE",{});var Te=r(B);de=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),fe.forEach(t),U.forEach(t)},m(v,z){b(v,d,z),e(d,g),b(v,c,z),b(v,p,z),e(p,_),e(_,l),e(p,f),e(p,E),e(E,L),b(v,I,z),b(v,M,z),e(M,S),e(M,O),e(O,Z),e(M,ue),e(M,Q),e(Q,ge),e(M,ce),b(v,X,z),b(v,D,z),e(D,re),b(v,ee,z),b(v,j,z),e(j,P),e(P,se),e(P,V),e(V,_e),e(P,be),e(P,K),e(K,ke),e(j,pe),e(j,q),e(q,ve),e(q,J),e(J,ae),e(q,le),e(q,G),e(G,he),e(j,ie),e(j,W),e(W,me),e(W,B),e(B,de)},d(v){v&&t(d),v&&t(c),v&&t(p),v&&t(I),v&&t(M),v&&t(X),v&&t(D),v&&t(ee),v&&t(j)}}}function sM(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function rM(x){let d,g,c,p,_;return p=new ne({props:{code:`import tensorflow as tf
from transformers import AlbertTokenizer, TFAlbertForPreTraining

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = TFAlbertForPreTraining.from_pretrained("albert-base-v2")

input_ids = tf.constant(tokenizer.encode("Hello, my dog is cute", add_special_tokens=True))[None, :]
# Batch size 1
outputs = model(input_ids)

prediction_logits = outputs.prediction_logits
sop_logits = outputs.sop_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForPreTraining.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tf.constant(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>))[<span class="hljs-literal">None</span>, :]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>sop_logits = outputs.sop_logits`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function aM(x){let d,g,c,p,_,l,f,E,L,I,M,S,O,Z,ue,Q,ge,ce,X,D,re,ee,j,P,se,V,_e,be,K,ke,pe,q,ve,J,ae,le,G,he,ie,W,me,B,de;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=h(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),E=n("li"),L=a("having all inputs as a list, tuple or dict in the first positional arguments."),I=h(),M=n("p"),S=a("This second option is useful when using "),O=n("code"),Z=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=n("code"),ge=a("model(inputs)"),ce=a("."),X=h(),D=n("p"),re=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=h(),j=n("ul"),P=n("li"),se=a("a single Tensor with "),V=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),K=n("code"),ke=a("model(inputs_ids)"),pe=h(),q=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=n("code"),ae=a("model([input_ids, attention_mask])"),le=a(" or "),G=n("code"),he=a("model([input_ids, attention_mask, token_type_ids])"),ie=h(),W=n("li"),me=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),de=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),c=m(v),p=s(v,"UL",{});var Y=r(p);_=s(Y,"LI",{});var Ee=r(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=m(Y),E=s(Y,"LI",{});var xe=r(E);L=i(xe,"having all inputs as a list, tuple or dict in the first positional arguments."),xe.forEach(t),Y.forEach(t),I=m(v),M=s(v,"P",{});var C=r(M);S=i(C,"This second option is useful when using "),O=s(C,"CODE",{});var Me=r(O);Z=i(Me,"tf.keras.Model.fit"),Me.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=s(C,"CODE",{});var $e=r(Q);ge=i($e,"model(inputs)"),$e.forEach(t),ce=i(C,"."),C.forEach(t),X=m(v),D=s(v,"P",{});var ze=r(D);re=i(ze,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ze.forEach(t),ee=m(v),j=s(v,"UL",{});var U=r(j);P=s(U,"LI",{});var R=r(P);se=i(R,"a single Tensor with "),V=s(R,"CODE",{});var je=r(V);_e=i(je,"input_ids"),je.forEach(t),be=i(R," only and nothing else: "),K=s(R,"CODE",{});var qe=r(K);ke=i(qe,"model(inputs_ids)"),qe.forEach(t),R.forEach(t),pe=m(U),q=s(U,"LI",{});var H=r(q);ve=i(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s(H,"CODE",{});var Pe=r(J);ae=i(Pe,"model([input_ids, attention_mask])"),Pe.forEach(t),le=i(H," or "),G=s(H,"CODE",{});var Ce=r(G);he=i(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),H.forEach(t),ie=m(U),W=s(U,"LI",{});var fe=r(W);me=i(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=s(fe,"CODE",{});var Te=r(B);de=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),fe.forEach(t),U.forEach(t)},m(v,z){b(v,d,z),e(d,g),b(v,c,z),b(v,p,z),e(p,_),e(_,l),e(p,f),e(p,E),e(E,L),b(v,I,z),b(v,M,z),e(M,S),e(M,O),e(O,Z),e(M,ue),e(M,Q),e(Q,ge),e(M,ce),b(v,X,z),b(v,D,z),e(D,re),b(v,ee,z),b(v,j,z),e(j,P),e(P,se),e(P,V),e(V,_e),e(P,be),e(P,K),e(K,ke),e(j,pe),e(j,q),e(q,ve),e(q,J),e(J,ae),e(q,le),e(q,G),e(G,he),e(j,ie),e(j,W),e(W,me),e(W,B),e(B,de)},d(v){v&&t(d),v&&t(c),v&&t(p),v&&t(I),v&&t(M),v&&t(X),v&&t(D),v&&t(ee),v&&t(j)}}}function iM(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function lM(x){let d,g,c,p,_;return p=new ne({props:{code:`import tensorflow as tf
from transformers import AlbertTokenizer, TFAlbertForMaskedLM

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = TFAlbertForMaskedLM.from_pretrained("albert-base-v2")

# add mask_token
inputs = tokenizer(f"The capital of [MASK] is Paris.", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[0][1]
predicted_token_id = tf.math.argmax(logits[0, mask_token_index], axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add mask_token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">f&quot;The capital of [MASK] is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(logits[<span class="hljs-number">0</span>, mask_token_index], axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;france&#x27;</span>`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function dM(x){let d,g;return d=new ne({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)
outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.81</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function cM(x){let d,g,c,p,_,l,f,E,L,I,M,S,O,Z,ue,Q,ge,ce,X,D,re,ee,j,P,se,V,_e,be,K,ke,pe,q,ve,J,ae,le,G,he,ie,W,me,B,de;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=h(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),E=n("li"),L=a("having all inputs as a list, tuple or dict in the first positional arguments."),I=h(),M=n("p"),S=a("This second option is useful when using "),O=n("code"),Z=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=n("code"),ge=a("model(inputs)"),ce=a("."),X=h(),D=n("p"),re=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=h(),j=n("ul"),P=n("li"),se=a("a single Tensor with "),V=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),K=n("code"),ke=a("model(inputs_ids)"),pe=h(),q=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=n("code"),ae=a("model([input_ids, attention_mask])"),le=a(" or "),G=n("code"),he=a("model([input_ids, attention_mask, token_type_ids])"),ie=h(),W=n("li"),me=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),de=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),c=m(v),p=s(v,"UL",{});var Y=r(p);_=s(Y,"LI",{});var Ee=r(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=m(Y),E=s(Y,"LI",{});var xe=r(E);L=i(xe,"having all inputs as a list, tuple or dict in the first positional arguments."),xe.forEach(t),Y.forEach(t),I=m(v),M=s(v,"P",{});var C=r(M);S=i(C,"This second option is useful when using "),O=s(C,"CODE",{});var Me=r(O);Z=i(Me,"tf.keras.Model.fit"),Me.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=s(C,"CODE",{});var $e=r(Q);ge=i($e,"model(inputs)"),$e.forEach(t),ce=i(C,"."),C.forEach(t),X=m(v),D=s(v,"P",{});var ze=r(D);re=i(ze,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ze.forEach(t),ee=m(v),j=s(v,"UL",{});var U=r(j);P=s(U,"LI",{});var R=r(P);se=i(R,"a single Tensor with "),V=s(R,"CODE",{});var je=r(V);_e=i(je,"input_ids"),je.forEach(t),be=i(R," only and nothing else: "),K=s(R,"CODE",{});var qe=r(K);ke=i(qe,"model(inputs_ids)"),qe.forEach(t),R.forEach(t),pe=m(U),q=s(U,"LI",{});var H=r(q);ve=i(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s(H,"CODE",{});var Pe=r(J);ae=i(Pe,"model([input_ids, attention_mask])"),Pe.forEach(t),le=i(H," or "),G=s(H,"CODE",{});var Ce=r(G);he=i(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),H.forEach(t),ie=m(U),W=s(U,"LI",{});var fe=r(W);me=i(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=s(fe,"CODE",{});var Te=r(B);de=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),fe.forEach(t),U.forEach(t)},m(v,z){b(v,d,z),e(d,g),b(v,c,z),b(v,p,z),e(p,_),e(_,l),e(p,f),e(p,E),e(E,L),b(v,I,z),b(v,M,z),e(M,S),e(M,O),e(O,Z),e(M,ue),e(M,Q),e(Q,ge),e(M,ce),b(v,X,z),b(v,D,z),e(D,re),b(v,ee,z),b(v,j,z),e(j,P),e(P,se),e(P,V),e(V,_e),e(P,be),e(P,K),e(K,ke),e(j,pe),e(j,q),e(q,ve),e(q,J),e(J,ae),e(q,le),e(q,G),e(G,he),e(j,ie),e(j,W),e(W,me),e(W,B),e(B,de)},d(v){v&&t(d),v&&t(c),v&&t(p),v&&t(I),v&&t(M),v&&t(X),v&&t(D),v&&t(ee),v&&t(j)}}}function pM(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function hM(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, TFAlbertForSequenceClassification
import tensorflow as tf

tokenizer = AlbertTokenizer.from_pretrained("vumichien/albert-base-v2-imdb")
model = TFAlbertForSequenceClassification.from_pretrained("vumichien/albert-base-v2-imdb")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-imdb&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-imdb&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function mM(x){let d,g;return d=new ne({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFAlbertForSequenceClassification.from_pretrained("vumichien/albert-base-v2-imdb", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-imdb&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.12</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function fM(x){let d,g,c,p,_,l,f,E,L,I,M,S,O,Z,ue,Q,ge,ce,X,D,re,ee,j,P,se,V,_e,be,K,ke,pe,q,ve,J,ae,le,G,he,ie,W,me,B,de;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=h(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),E=n("li"),L=a("having all inputs as a list, tuple or dict in the first positional arguments."),I=h(),M=n("p"),S=a("This second option is useful when using "),O=n("code"),Z=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=n("code"),ge=a("model(inputs)"),ce=a("."),X=h(),D=n("p"),re=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=h(),j=n("ul"),P=n("li"),se=a("a single Tensor with "),V=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),K=n("code"),ke=a("model(inputs_ids)"),pe=h(),q=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=n("code"),ae=a("model([input_ids, attention_mask])"),le=a(" or "),G=n("code"),he=a("model([input_ids, attention_mask, token_type_ids])"),ie=h(),W=n("li"),me=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),de=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),c=m(v),p=s(v,"UL",{});var Y=r(p);_=s(Y,"LI",{});var Ee=r(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=m(Y),E=s(Y,"LI",{});var xe=r(E);L=i(xe,"having all inputs as a list, tuple or dict in the first positional arguments."),xe.forEach(t),Y.forEach(t),I=m(v),M=s(v,"P",{});var C=r(M);S=i(C,"This second option is useful when using "),O=s(C,"CODE",{});var Me=r(O);Z=i(Me,"tf.keras.Model.fit"),Me.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=s(C,"CODE",{});var $e=r(Q);ge=i($e,"model(inputs)"),$e.forEach(t),ce=i(C,"."),C.forEach(t),X=m(v),D=s(v,"P",{});var ze=r(D);re=i(ze,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ze.forEach(t),ee=m(v),j=s(v,"UL",{});var U=r(j);P=s(U,"LI",{});var R=r(P);se=i(R,"a single Tensor with "),V=s(R,"CODE",{});var je=r(V);_e=i(je,"input_ids"),je.forEach(t),be=i(R," only and nothing else: "),K=s(R,"CODE",{});var qe=r(K);ke=i(qe,"model(inputs_ids)"),qe.forEach(t),R.forEach(t),pe=m(U),q=s(U,"LI",{});var H=r(q);ve=i(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s(H,"CODE",{});var Pe=r(J);ae=i(Pe,"model([input_ids, attention_mask])"),Pe.forEach(t),le=i(H," or "),G=s(H,"CODE",{});var Ce=r(G);he=i(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),H.forEach(t),ie=m(U),W=s(U,"LI",{});var fe=r(W);me=i(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=s(fe,"CODE",{});var Te=r(B);de=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),fe.forEach(t),U.forEach(t)},m(v,z){b(v,d,z),e(d,g),b(v,c,z),b(v,p,z),e(p,_),e(_,l),e(p,f),e(p,E),e(E,L),b(v,I,z),b(v,M,z),e(M,S),e(M,O),e(O,Z),e(M,ue),e(M,Q),e(Q,ge),e(M,ce),b(v,X,z),b(v,D,z),e(D,re),b(v,ee,z),b(v,j,z),e(j,P),e(P,se),e(P,V),e(V,_e),e(P,be),e(P,K),e(K,ke),e(j,pe),e(j,q),e(q,ve),e(q,J),e(J,ae),e(q,le),e(q,G),e(G,he),e(j,ie),e(j,W),e(W,me),e(W,B),e(B,de)},d(v){v&&t(d),v&&t(c),v&&t(p),v&&t(I),v&&t(M),v&&t(X),v&&t(D),v&&t(ee),v&&t(j)}}}function uM(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function gM(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, TFAlbertForMultipleChoice
import tensorflow as tf

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = TFAlbertForMultipleChoice.from_pretrained("albert-base-v2")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function _M(x){let d,g,c,p,_,l,f,E,L,I,M,S,O,Z,ue,Q,ge,ce,X,D,re,ee,j,P,se,V,_e,be,K,ke,pe,q,ve,J,ae,le,G,he,ie,W,me,B,de;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=h(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),E=n("li"),L=a("having all inputs as a list, tuple or dict in the first positional arguments."),I=h(),M=n("p"),S=a("This second option is useful when using "),O=n("code"),Z=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=n("code"),ge=a("model(inputs)"),ce=a("."),X=h(),D=n("p"),re=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=h(),j=n("ul"),P=n("li"),se=a("a single Tensor with "),V=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),K=n("code"),ke=a("model(inputs_ids)"),pe=h(),q=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=n("code"),ae=a("model([input_ids, attention_mask])"),le=a(" or "),G=n("code"),he=a("model([input_ids, attention_mask, token_type_ids])"),ie=h(),W=n("li"),me=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),de=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),c=m(v),p=s(v,"UL",{});var Y=r(p);_=s(Y,"LI",{});var Ee=r(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=m(Y),E=s(Y,"LI",{});var xe=r(E);L=i(xe,"having all inputs as a list, tuple or dict in the first positional arguments."),xe.forEach(t),Y.forEach(t),I=m(v),M=s(v,"P",{});var C=r(M);S=i(C,"This second option is useful when using "),O=s(C,"CODE",{});var Me=r(O);Z=i(Me,"tf.keras.Model.fit"),Me.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=s(C,"CODE",{});var $e=r(Q);ge=i($e,"model(inputs)"),$e.forEach(t),ce=i(C,"."),C.forEach(t),X=m(v),D=s(v,"P",{});var ze=r(D);re=i(ze,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ze.forEach(t),ee=m(v),j=s(v,"UL",{});var U=r(j);P=s(U,"LI",{});var R=r(P);se=i(R,"a single Tensor with "),V=s(R,"CODE",{});var je=r(V);_e=i(je,"input_ids"),je.forEach(t),be=i(R," only and nothing else: "),K=s(R,"CODE",{});var qe=r(K);ke=i(qe,"model(inputs_ids)"),qe.forEach(t),R.forEach(t),pe=m(U),q=s(U,"LI",{});var H=r(q);ve=i(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s(H,"CODE",{});var Pe=r(J);ae=i(Pe,"model([input_ids, attention_mask])"),Pe.forEach(t),le=i(H," or "),G=s(H,"CODE",{});var Ce=r(G);he=i(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),H.forEach(t),ie=m(U),W=s(U,"LI",{});var fe=r(W);me=i(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=s(fe,"CODE",{});var Te=r(B);de=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),fe.forEach(t),U.forEach(t)},m(v,z){b(v,d,z),e(d,g),b(v,c,z),b(v,p,z),e(p,_),e(_,l),e(p,f),e(p,E),e(E,L),b(v,I,z),b(v,M,z),e(M,S),e(M,O),e(O,Z),e(M,ue),e(M,Q),e(Q,ge),e(M,ce),b(v,X,z),b(v,D,z),e(D,re),b(v,ee,z),b(v,j,z),e(j,P),e(P,se),e(P,V),e(V,_e),e(P,be),e(P,K),e(K,ke),e(j,pe),e(j,q),e(q,ve),e(q,J),e(J,ae),e(q,le),e(q,G),e(G,he),e(j,ie),e(j,W),e(W,me),e(W,B),e(B,de)},d(v){v&&t(d),v&&t(c),v&&t(p),v&&t(I),v&&t(M),v&&t(X),v&&t(D),v&&t(ee),v&&t(j)}}}function bM(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function kM(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, TFAlbertForTokenClassification
import tensorflow as tf

tokenizer = AlbertTokenizer.from_pretrained("vumichien/tiny-albert")
model = TFAlbertForTokenClassification.from_pretrained("vumichien/tiny-albert")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;vumichien/tiny-albert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/tiny-albert&quot;</span>)

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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function vM(x){let d,g;return d=new ne({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.66</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function TM(x){let d,g,c,p,_,l,f,E,L,I,M,S,O,Z,ue,Q,ge,ce,X,D,re,ee,j,P,se,V,_e,be,K,ke,pe,q,ve,J,ae,le,G,he,ie,W,me,B,de;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=h(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),E=n("li"),L=a("having all inputs as a list, tuple or dict in the first positional arguments."),I=h(),M=n("p"),S=a("This second option is useful when using "),O=n("code"),Z=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=n("code"),ge=a("model(inputs)"),ce=a("."),X=h(),D=n("p"),re=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=h(),j=n("ul"),P=n("li"),se=a("a single Tensor with "),V=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),K=n("code"),ke=a("model(inputs_ids)"),pe=h(),q=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=n("code"),ae=a("model([input_ids, attention_mask])"),le=a(" or "),G=n("code"),he=a("model([input_ids, attention_mask, token_type_ids])"),ie=h(),W=n("li"),me=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),de=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),c=m(v),p=s(v,"UL",{});var Y=r(p);_=s(Y,"LI",{});var Ee=r(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=m(Y),E=s(Y,"LI",{});var xe=r(E);L=i(xe,"having all inputs as a list, tuple or dict in the first positional arguments."),xe.forEach(t),Y.forEach(t),I=m(v),M=s(v,"P",{});var C=r(M);S=i(C,"This second option is useful when using "),O=s(C,"CODE",{});var Me=r(O);Z=i(Me,"tf.keras.Model.fit"),Me.forEach(t),ue=i(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=s(C,"CODE",{});var $e=r(Q);ge=i($e,"model(inputs)"),$e.forEach(t),ce=i(C,"."),C.forEach(t),X=m(v),D=s(v,"P",{});var ze=r(D);re=i(ze,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ze.forEach(t),ee=m(v),j=s(v,"UL",{});var U=r(j);P=s(U,"LI",{});var R=r(P);se=i(R,"a single Tensor with "),V=s(R,"CODE",{});var je=r(V);_e=i(je,"input_ids"),je.forEach(t),be=i(R," only and nothing else: "),K=s(R,"CODE",{});var qe=r(K);ke=i(qe,"model(inputs_ids)"),qe.forEach(t),R.forEach(t),pe=m(U),q=s(U,"LI",{});var H=r(q);ve=i(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s(H,"CODE",{});var Pe=r(J);ae=i(Pe,"model([input_ids, attention_mask])"),Pe.forEach(t),le=i(H," or "),G=s(H,"CODE",{});var Ce=r(G);he=i(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),H.forEach(t),ie=m(U),W=s(U,"LI",{});var fe=r(W);me=i(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=s(fe,"CODE",{});var Te=r(B);de=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),fe.forEach(t),U.forEach(t)},m(v,z){b(v,d,z),e(d,g),b(v,c,z),b(v,p,z),e(p,_),e(_,l),e(p,f),e(p,E),e(E,L),b(v,I,z),b(v,M,z),e(M,S),e(M,O),e(O,Z),e(M,ue),e(M,Q),e(Q,ge),e(M,ce),b(v,X,z),b(v,D,z),e(D,re),b(v,ee,z),b(v,j,z),e(j,P),e(P,se),e(P,V),e(V,_e),e(P,be),e(P,K),e(K,ke),e(j,pe),e(j,q),e(q,ve),e(q,J),e(J,ae),e(q,le),e(q,G),e(G,he),e(j,ie),e(j,W),e(W,me),e(W,B),e(B,de)},d(v){v&&t(d),v&&t(c),v&&t(p),v&&t(I),v&&t(M),v&&t(X),v&&t(D),v&&t(ee),v&&t(j)}}}function yM(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function wM(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, TFAlbertForQuestionAnswering
import tensorflow as tf

tokenizer = AlbertTokenizer.from_pretrained("vumichien/albert-base-v2-squad2")
model = TFAlbertForQuestionAnswering.from_pretrained("vumichien/albert-base-v2-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, TFAlbertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function $M(x){let d,g;return d=new ne({props:{code:`# target is "nice puppet"
target_start_index = tf.constant([12])
target_end_index = tf.constant([13])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">12</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">13</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">7.36</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function AM(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function FM(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertModel

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertModel.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertModel.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function xM(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function EM(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForPreTraining

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForPreTraining.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.sop_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForPreTraining.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.sop_logits`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function MM(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function zM(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForMaskedLM

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForMaskedLM.from_pretrained("albert-base-v2")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function jM(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function qM(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForSequenceClassification

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForSequenceClassification.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function PM(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function CM(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForMultipleChoice

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForMultipleChoice.from_pretrained("albert-base-v2")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function LM(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function IM(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForTokenClassification

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForTokenClassification.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function OM(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function NM(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForQuestionAnswering

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForQuestionAnswering.from_pretrained("albert-base-v2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function SM(x){let d,g,c,p,_,l,f,E,L,I,M,S,O,Z,ue,Q,ge,ce,X,D,re,ee,j,P,se,V,_e,be,K,ke,pe,q,ve,J,ae,le,G,he,ie,W,me,B,de,v,z,Y,Ee,xe,C,Me,$e,ze,U,R,je,qe,H,Pe,Ce,fe,Te,wn,Lc,Mr,zg,Ic,jg,uf,bt,zr,qg,Ut,Pg,cd,Cg,Lg,pd,Ig,Og,jr,Ng,Sg,Dg,bo,Wg,hd,Ug,Bg,md,Rg,Hg,Qg,$n,gf,ko,An,Oc,qr,Vg,Nc,Kg,_f,ye,Pr,Jg,Cr,Gg,Lr,Xg,Yg,Zg,Ir,e_,fd,t_,o_,n_,Sc,s_,r_,Fn,a_,Or,i_,ud,l_,d_,c_,xn,p_,En,h_,to,Nr,m_,Dc,f_,u_,Sr,gd,g_,Wc,__,b_,_d,k_,Uc,v_,T_,Mn,Dr,y_,Wr,w_,Bc,$_,A_,F_,vt,Ur,x_,Rc,E_,M_,zn,z_,vo,j_,Hc,q_,P_,Qc,C_,L_,I_,bd,Br,bf,To,jn,Vc,Rr,O_,Kc,N_,kf,kt,Hr,S_,Bt,D_,Jc,W_,U_,Qr,B_,R_,kd,H_,Q_,V_,oo,Vr,K_,Gc,J_,G_,Kr,vd,X_,Xc,Y_,Z_,Td,eb,Yc,tb,ob,Tt,Jr,nb,Zc,sb,rb,qn,ab,ep,ib,vf,yo,Pn,tp,Gr,lb,op,db,Tf,wo,Xr,cb,Yr,pb,yd,hb,mb,yf,$o,Zr,fb,ea,ub,wd,gb,_b,wf,Ao,Cn,np,ta,bb,sp,kb,$f,Ge,oa,vb,rp,Tb,yb,na,wb,$d,$b,Ab,Fb,sa,xb,ra,Eb,Mb,zb,yt,aa,jb,Fo,qb,Ad,Pb,Cb,ap,Lb,Ib,Ob,Ln,Nb,In,Af,xo,On,ip,ia,Sb,lp,Db,Ff,Xe,la,Wb,Eo,Ub,dp,Bb,Rb,cp,Hb,Qb,Vb,da,Kb,Fd,Jb,Gb,Xb,ca,Yb,pa,Zb,ek,tk,wt,ha,ok,Mo,nk,xd,sk,rk,pp,ak,ik,lk,Nn,dk,Sn,xf,zo,Dn,hp,ma,ck,mp,pk,Ef,Ye,fa,hk,ua,mk,fp,fk,uk,gk,ga,_k,Ed,bk,kk,vk,_a,Tk,ba,yk,wk,$k,nt,ka,Ak,jo,Fk,Md,xk,Ek,up,Mk,zk,jk,Wn,qk,Un,Pk,Bn,Mf,qo,Rn,gp,va,Ck,_p,Lk,zf,Ze,Ta,Ik,bp,Ok,Nk,ya,Sk,zd,Dk,Wk,Uk,wa,Bk,$a,Rk,Hk,Qk,Ue,Aa,Vk,Po,Kk,jd,Jk,Gk,kp,Xk,Yk,Zk,Hn,ev,Qn,tv,Vn,ov,Kn,nv,Jn,jf,Co,Gn,vp,Fa,sv,Tp,rv,qf,et,xa,av,yp,iv,lv,Ea,dv,qd,cv,pv,hv,Ma,mv,za,fv,uv,gv,$t,ja,_v,Lo,bv,Pd,kv,vv,wp,Tv,yv,wv,Xn,$v,Yn,Pf,Io,Zn,$p,qa,Av,Ap,Fv,Cf,tt,Pa,xv,Fp,Ev,Mv,Ca,zv,Cd,jv,qv,Pv,La,Cv,Ia,Lv,Iv,Ov,st,Oa,Nv,Oo,Sv,Ld,Dv,Wv,xp,Uv,Bv,Rv,es,Hv,ts,Qv,os,Lf,No,ns,Ep,Na,Vv,Mp,Kv,If,ot,Sa,Jv,So,Gv,zp,Xv,Yv,jp,Zv,eT,tT,Da,oT,Id,nT,sT,rT,Wa,aT,Ua,iT,lT,dT,rt,Ba,cT,Do,pT,Od,hT,mT,qp,fT,uT,gT,ss,_T,rs,bT,as,Of,Wo,is,Pp,Ra,kT,Cp,vT,Nf,Be,Ha,TT,Lp,yT,wT,Qa,$T,Nd,AT,FT,xT,Va,ET,Ka,MT,zT,jT,ls,qT,At,Ja,PT,Uo,CT,Sd,LT,IT,Ip,OT,NT,ST,ds,DT,cs,Sf,Bo,ps,Op,Ga,WT,Np,UT,Df,Re,Xa,BT,Ro,RT,Sp,HT,QT,Dp,VT,KT,JT,Ya,GT,Dd,XT,YT,ZT,Za,e1,ei,t1,o1,n1,hs,s1,Ft,ti,r1,Ho,a1,Wd,i1,l1,Wp,d1,c1,p1,ms,h1,fs,Wf,Qo,us,Up,oi,m1,Bp,f1,Uf,He,ni,u1,si,g1,Rp,_1,b1,k1,ri,v1,Ud,T1,y1,w1,ai,$1,ii,A1,F1,x1,gs,E1,at,li,M1,Vo,z1,Bd,j1,q1,Hp,P1,C1,L1,_s,I1,bs,O1,ks,Bf,Ko,vs,Qp,di,N1,Vp,S1,Rf,Qe,ci,D1,Kp,W1,U1,pi,B1,Rd,R1,H1,Q1,hi,V1,mi,K1,J1,G1,Ts,X1,it,fi,Y1,Jo,Z1,Hd,ey,ty,Jp,oy,ny,sy,ys,ry,ws,ay,$s,Hf,Go,As,Gp,ui,iy,Xp,ly,Qf,Ve,gi,dy,Yp,cy,py,_i,hy,Qd,my,fy,uy,bi,gy,ki,_y,by,ky,Fs,vy,xt,vi,Ty,Xo,yy,Vd,wy,$y,Zp,Ay,Fy,xy,xs,Ey,Es,Vf,Yo,Ms,eh,Ti,My,th,zy,Kf,Ke,yi,jy,oh,qy,Py,wi,Cy,Kd,Ly,Iy,Oy,$i,Ny,Ai,Sy,Dy,Wy,zs,Uy,lt,Fi,By,Zo,Ry,Jd,Hy,Qy,nh,Vy,Ky,Jy,js,Gy,qs,Xy,Ps,Jf,en,Cs,sh,xi,Yy,rh,Zy,Gf,Je,Ei,ew,tn,tw,ah,ow,nw,ih,sw,rw,aw,Mi,iw,Gd,lw,dw,cw,zi,pw,ji,hw,mw,fw,Ls,uw,dt,qi,gw,on,_w,Xd,bw,kw,lh,vw,Tw,yw,Is,ww,Os,$w,Ns,Xf,nn,Ss,dh,Pi,Aw,ch,Fw,Yf,Le,Ci,xw,ph,Ew,Mw,Li,zw,Yd,jw,qw,Pw,Ii,Cw,Oi,Lw,Iw,Ow,hh,Nw,Sw,Rt,mh,Ni,Dw,Ww,fh,Si,Uw,Bw,uh,Di,Rw,Hw,gh,Wi,Qw,Vw,Et,Ui,Kw,sn,Jw,_h,Gw,Xw,bh,Yw,Zw,e$,Ds,t$,Ws,Zf,rn,Us,kh,Bi,o$,vh,n$,eu,Ie,Ri,s$,an,r$,Th,a$,i$,yh,l$,d$,c$,Hi,p$,Zd,h$,m$,f$,Qi,u$,Vi,g$,_$,b$,wh,k$,v$,Ht,$h,Ki,T$,y$,Ah,Ji,w$,$$,Fh,Gi,A$,F$,xh,Xi,x$,E$,Mt,Yi,M$,ln,z$,Eh,j$,q$,Mh,P$,C$,L$,Bs,I$,Rs,tu,dn,Hs,zh,Zi,O$,jh,N$,ou,Oe,el,S$,tl,D$,qh,W$,U$,B$,ol,R$,ec,H$,Q$,V$,nl,K$,sl,J$,G$,X$,Ph,Y$,Z$,Qt,Ch,rl,e2,t2,Lh,al,o2,n2,Ih,il,s2,r2,Oh,ll,a2,i2,zt,dl,l2,cn,d2,Nh,c2,p2,Sh,h2,m2,f2,Qs,u2,Vs,nu,pn,Ks,Dh,cl,g2,Wh,_2,su,Ne,pl,b2,Uh,k2,v2,hl,T2,tc,y2,w2,$2,ml,A2,fl,F2,x2,E2,Bh,M2,z2,Vt,Rh,ul,j2,q2,Hh,gl,P2,C2,Qh,_l,L2,I2,Vh,bl,O2,N2,jt,kl,S2,hn,D2,Kh,W2,U2,Jh,B2,R2,H2,Js,Q2,Gs,ru,mn,Xs,Gh,vl,V2,Xh,K2,au,Se,Tl,J2,Yh,G2,X2,yl,Y2,oc,Z2,eA,tA,wl,oA,$l,nA,sA,rA,Zh,aA,iA,Kt,em,Al,lA,dA,tm,Fl,cA,pA,om,xl,hA,mA,nm,El,fA,uA,qt,Ml,gA,fn,_A,sm,bA,kA,rm,vA,TA,yA,Ys,wA,Zs,iu,un,er,am,zl,$A,im,AA,lu,De,jl,FA,lm,xA,EA,ql,MA,nc,zA,jA,qA,Pl,PA,Cl,CA,LA,IA,dm,OA,NA,Jt,cm,Ll,SA,DA,pm,Il,WA,UA,hm,Ol,BA,RA,mm,Nl,HA,QA,Pt,Sl,VA,gn,KA,fm,JA,GA,um,XA,YA,ZA,tr,eF,or,du,_n,nr,gm,Dl,tF,_m,oF,cu,We,Wl,nF,bn,sF,bm,rF,aF,km,iF,lF,dF,Ul,cF,sc,pF,hF,mF,Bl,fF,Rl,uF,gF,_F,vm,bF,kF,Gt,Tm,Hl,vF,TF,ym,Ql,yF,wF,wm,Vl,$F,AF,$m,Kl,FF,xF,Ct,Jl,EF,kn,MF,Am,zF,jF,Fm,qF,PF,CF,sr,LF,rr,pu;return l=new Fe({}),Z=new Fe({}),Mr=new Fe({}),zr=new N({props:{name:"class transformers.AlbertConfig",anchor:"transformers.AlbertConfig",parameters:[{name:"vocab_size",val:" = 30000"},{name:"embedding_size",val:" = 128"},{name:"hidden_size",val:" = 4096"},{name:"num_hidden_layers",val:" = 12"},{name:"num_hidden_groups",val:" = 1"},{name:"num_attention_heads",val:" = 64"},{name:"intermediate_size",val:" = 16384"},{name:"inner_group_num",val:" = 1"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout_prob",val:" = 0"},{name:"attention_probs_dropout_prob",val:" = 0"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"classifier_dropout_prob",val:" = 0.1"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 3"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30000) &#x2014;
Vocabulary size of the ALBERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertModel">AlbertModel</a> or <a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.TFAlbertModel">TFAlbertModel</a>.`,name:"vocab_size"},{anchor:"transformers.AlbertConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Dimensionality of vocabulary embeddings.`,name:"embedding_size"},{anchor:"transformers.AlbertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.AlbertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.AlbertConfig.num_hidden_groups",description:`<strong>num_hidden_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of groups for the hidden layers, parameters in the same group are shared.`,name:"num_hidden_groups"},{anchor:"transformers.AlbertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.AlbertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 16384) &#x2014;
The dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.AlbertConfig.inner_group_num",description:`<strong>inner_group_num</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of inner repetition of attention and ffn.`,name:"inner_group_num"},{anchor:"transformers.AlbertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu_new&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.AlbertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.AlbertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.AlbertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
(e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.AlbertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertModel">AlbertModel</a> or <a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.TFAlbertModel">TFAlbertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.AlbertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.AlbertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.AlbertConfig.classifier_dropout_prob",description:`<strong>classifier_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for attached classifiers.`,name:"classifier_dropout_prob"},{anchor:"transformers.AlbertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/configuration_albert.py#L36"}}),$n=new te({props:{anchor:"transformers.AlbertConfig.example",$$slots:{default:[F3]},$$scope:{ctx:x}}}),qr=new Fe({}),Pr=new N({props:{name:"class transformers.AlbertTokenizer",anchor:"transformers.AlbertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.AlbertTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.AlbertTokenizer.remove_space",description:`<strong>remove_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to strip the text when tokenizing (removing excess spaces before and after the string).`,name:"remove_space"},{anchor:"transformers.AlbertTokenizer.keep_accents",description:`<strong>keep_accents</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to keep accents when tokenizing.`,name:"keep_accents"},{anchor:"transformers.AlbertTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.AlbertTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.AlbertTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.AlbertTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.AlbertTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.AlbertTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.AlbertTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.AlbertTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.AlbertTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/tokenization_albert.py#L59"}}),Fn=new te({props:{anchor:"transformers.AlbertTokenizer.example",$$slots:{default:[x3]},$$scope:{ctx:x}}}),xn=new te({props:{anchor:"transformers.AlbertTokenizer.example-2",$$slots:{default:[E3]},$$scope:{ctx:x}}}),En=new we({props:{$$slots:{default:[j3]},$$scope:{ctx:x}}}),Nr=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/tokenization_albert.py#L292",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Dr=new N({props:{name:"get_special_tokens_mask",anchor:"transformers.AlbertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/tokenization_albert.py#L317",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ur=new N({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/tokenization_albert.py#L345",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),zn=new te({props:{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[q3]},$$scope:{ctx:x}}}),Br=new N({props:{name:"save_vocabulary",anchor:"transformers.AlbertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/tokenization_albert.py#L375"}}),Rr=new Fe({}),Hr=new N({props:{name:"class transformers.AlbertTokenizerFast",anchor:"transformers.AlbertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.AlbertTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.AlbertTokenizerFast.remove_space",description:`<strong>remove_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to strip the text when tokenizing (removing excess spaces before and after the string).`,name:"remove_space"},{anchor:"transformers.AlbertTokenizerFast.keep_accents",description:`<strong>keep_accents</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to keep accents when tokenizing.`,name:"keep_accents"},{anchor:"transformers.AlbertTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.AlbertTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The end of sequence token. .. note:: When building a sequence using special tokens, this is not the token
that is used for the end of sequence. The token used is the <code>sep_token</code>.`,name:"eos_token"},{anchor:"transformers.AlbertTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.AlbertTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.AlbertTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.AlbertTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.AlbertTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/tokenization_albert_fast.py#L72"}}),Vr=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/tokenization_albert_fast.py#L170",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Jr=new N({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/tokenization_albert_fast.py#L195",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),qn=new te({props:{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[P3]},$$scope:{ctx:x}}}),Gr=new Fe({}),Xr=new N({props:{name:"class transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"sop_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.`,name:"loss"},{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.sop_logits",description:`<strong>sop_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"sop_logits"},{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_albert.py#L535"}}),Zr=new N({props:{name:"class transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput",anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput",parameters:[{name:"loss",val:": Tensor = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"sop_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.sop_logits",description:`<strong>sop_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"sop_logits"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_tf_albert.py#L634"}}),ta=new Fe({}),oa=new N({props:{name:"class transformers.AlbertModel",anchor:"transformers.AlbertModel",parameters:[{name:"config",val:": AlbertConfig"},{name:"add_pooling_layer",val:": bool = True"}],parametersDescription:[{anchor:"transformers.AlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_albert.py#L638"}}),aa=new N({props:{name:"forward",anchor:"transformers.AlbertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": NoneType = None"},{name:"output_hidden_states",val:": NoneType = None"},{name:"return_dict",val:": NoneType = None"}],parametersDescription:[{anchor:"transformers.AlbertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_17673/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17673/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17673/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_albert.py#L682",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ln=new we({props:{$$slots:{default:[C3]},$$scope:{ctx:x}}}),In=new te({props:{anchor:"transformers.AlbertModel.forward.example",$$slots:{default:[L3]},$$scope:{ctx:x}}}),ia=new Fe({}),la=new N({props:{name:"class transformers.AlbertForPreTraining",anchor:"transformers.AlbertForPreTraining",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_albert.py#L768"}}),ha=new N({props:{name:"forward",anchor:"transformers.AlbertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"sentence_order_label",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_17673/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17673/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17673/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.AlbertForPreTraining.forward.sentence_order_label",description:`<strong>sentence_order_label</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>. <code>0</code> indicates original order (sequence A, then
sequence B), <code>1</code> indicates switched order (sequence B, then sequence A).`,name:"sentence_order_label"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_albert.py#L788",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"
>transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.</p>
</li>
<li>
<p><strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>sop_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
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
  href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"
>transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nn=new we({props:{$$slots:{default:[I3]},$$scope:{ctx:x}}}),Sn=new te({props:{anchor:"transformers.AlbertForPreTraining.forward.example",$$slots:{default:[O3]},$$scope:{ctx:x}}}),ma=new Fe({}),fa=new N({props:{name:"class transformers.AlbertForMaskedLM",anchor:"transformers.AlbertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.AlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_albert.py#L914"}}),ka=new N({props:{name:"forward",anchor:"transformers.AlbertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_17673/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17673/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17673/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_albert.py#L936",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wn=new we({props:{$$slots:{default:[N3]},$$scope:{ctx:x}}}),Un=new te({props:{anchor:"transformers.AlbertForMaskedLM.forward.example",$$slots:{default:[S3]},$$scope:{ctx:x}}}),Bn=new te({props:{anchor:"transformers.AlbertForMaskedLM.forward.example-2",$$slots:{default:[D3]},$$scope:{ctx:x}}}),va=new Fe({}),Ta=new N({props:{name:"class transformers.AlbertForSequenceClassification",anchor:"transformers.AlbertForSequenceClassification",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_albert.py#L1029"}}),Aa=new N({props:{name:"forward",anchor:"transformers.AlbertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_17673/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17673/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17673/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_albert.py#L1042",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Hn=new we({props:{$$slots:{default:[W3]},$$scope:{ctx:x}}}),Qn=new te({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example",$$slots:{default:[U3]},$$scope:{ctx:x}}}),Vn=new te({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-2",$$slots:{default:[B3]},$$scope:{ctx:x}}}),Kn=new te({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-3",$$slots:{default:[R3]},$$scope:{ctx:x}}}),Jn=new te({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-4",$$slots:{default:[H3]},$$scope:{ctx:x}}}),Fa=new Fe({}),xa=new N({props:{name:"class transformers.AlbertForMultipleChoice",anchor:"transformers.AlbertForMultipleChoice",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_albert.py#L1330"}}),ja=new N({props:{name:"forward",anchor:"transformers.AlbertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_17673/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17673/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17673/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <em>num_choices</em> is the size of the second dimension of the input tensors. (see
<em>input_ids</em> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_albert.py#L1341",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xn=new we({props:{$$slots:{default:[Q3]},$$scope:{ctx:x}}}),Yn=new te({props:{anchor:"transformers.AlbertForMultipleChoice.forward.example",$$slots:{default:[V3]},$$scope:{ctx:x}}}),qa=new Fe({}),Pa=new N({props:{name:"class transformers.AlbertForTokenClassification",anchor:"transformers.AlbertForTokenClassification",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_albert.py#L1131"}}),Oa=new N({props:{name:"forward",anchor:"transformers.AlbertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_17673/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17673/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17673/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_albert.py#L1151",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),es=new we({props:{$$slots:{default:[K3]},$$scope:{ctx:x}}}),ts=new te({props:{anchor:"transformers.AlbertForTokenClassification.forward.example",$$slots:{default:[J3]},$$scope:{ctx:x}}}),os=new te({props:{anchor:"transformers.AlbertForTokenClassification.forward.example-2",$$slots:{default:[G3]},$$scope:{ctx:x}}}),Na=new Fe({}),Sa=new N({props:{name:"class transformers.AlbertForQuestionAnswering",anchor:"transformers.AlbertForQuestionAnswering",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_albert.py#L1223"}}),Ba=new N({props:{name:"forward",anchor:"transformers.AlbertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_17673/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17673/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.AlbertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.AlbertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.AlbertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.AlbertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.AlbertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.AlbertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.AlbertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.AlbertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17673/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.AlbertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.AlbertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_albert.py#L1237",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ss=new we({props:{$$slots:{default:[X3]},$$scope:{ctx:x}}}),rs=new te({props:{anchor:"transformers.AlbertForQuestionAnswering.forward.example",$$slots:{default:[Y3]},$$scope:{ctx:x}}}),as=new te({props:{anchor:"transformers.AlbertForQuestionAnswering.forward.example-2",$$slots:{default:[Z3]},$$scope:{ctx:x}}}),Ra=new Fe({}),Ha=new N({props:{name:"class transformers.TFAlbertModel",anchor:"transformers.TFAlbertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_tf_albert.py#L761"}}),ls=new we({props:{$$slots:{default:[eM]},$$scope:{ctx:x}}}),Ja=new N({props:{name:"call",anchor:"transformers.TFAlbertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_17673/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17673/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17673/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_tf_albert.py#L767",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ds=new we({props:{$$slots:{default:[tM]},$$scope:{ctx:x}}}),cs=new te({props:{anchor:"transformers.TFAlbertModel.call.example",$$slots:{default:[oM]},$$scope:{ctx:x}}}),Ga=new Fe({}),Xa=new N({props:{name:"class transformers.TFAlbertForPreTraining",anchor:"transformers.TFAlbertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_tf_albert.py#L822"}}),hs=new we({props:{$$slots:{default:[nM]},$$scope:{ctx:x}}}),ti=new N({props:{name:"call",anchor:"transformers.TFAlbertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"sentence_order_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_17673/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17673/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForPreTraining.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForPreTraining.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForPreTraining.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForPreTraining.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForPreTraining.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForPreTraining.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForPreTraining.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForPreTraining.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17673/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_tf_albert.py#L838",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput"
>transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>sop_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
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
  href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput"
>transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ms=new we({props:{$$slots:{default:[sM]},$$scope:{ctx:x}}}),fs=new te({props:{anchor:"transformers.TFAlbertForPreTraining.call.example",$$slots:{default:[rM]},$$scope:{ctx:x}}}),oi=new Fe({}),ni=new N({props:{name:"class transformers.TFAlbertForMaskedLM",anchor:"transformers.TFAlbertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_tf_albert.py#L941"}}),gs=new we({props:{$$slots:{default:[aM]},$$scope:{ctx:x}}}),li=new N({props:{name:"call",anchor:"transformers.TFAlbertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_17673/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17673/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17673/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_tf_albert.py#L954",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),_s=new we({props:{$$slots:{default:[iM]},$$scope:{ctx:x}}}),bs=new te({props:{anchor:"transformers.TFAlbertForMaskedLM.call.example",$$slots:{default:[lM]},$$scope:{ctx:x}}}),ks=new te({props:{anchor:"transformers.TFAlbertForMaskedLM.call.example-2",$$slots:{default:[dM]},$$scope:{ctx:x}}}),di=new Fe({}),ci=new N({props:{name:"class transformers.TFAlbertForSequenceClassification",anchor:"transformers.TFAlbertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_tf_albert.py#L1050"}}),Ts=new we({props:{$$slots:{default:[cM]},$$scope:{ctx:x}}}),fi=new N({props:{name:"call",anchor:"transformers.TFAlbertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_17673/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17673/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17673/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_tf_albert.py#L1066",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ys=new we({props:{$$slots:{default:[pM]},$$scope:{ctx:x}}}),ws=new te({props:{anchor:"transformers.TFAlbertForSequenceClassification.call.example",$$slots:{default:[hM]},$$scope:{ctx:x}}}),$s=new te({props:{anchor:"transformers.TFAlbertForSequenceClassification.call.example-2",$$slots:{default:[mM]},$$scope:{ctx:x}}}),ui=new Fe({}),gi=new N({props:{name:"class transformers.TFAlbertForMultipleChoice",anchor:"transformers.TFAlbertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_tf_albert.py#L1341"}}),Fs=new we({props:{$$slots:{default:[fM]},$$scope:{ctx:x}}}),vi=new N({props:{name:"call",anchor:"transformers.TFAlbertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_17673/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17673/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17673/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_tf_albert.py#L1365",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),xs=new we({props:{$$slots:{default:[uM]},$$scope:{ctx:x}}}),Es=new te({props:{anchor:"transformers.TFAlbertForMultipleChoice.call.example",$$slots:{default:[gM]},$$scope:{ctx:x}}}),Ti=new Fe({}),yi=new N({props:{name:"class transformers.TFAlbertForTokenClassification",anchor:"transformers.TFAlbertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_tf_albert.py#L1140"}}),zs=new we({props:{$$slots:{default:[_M]},$$scope:{ctx:x}}}),Fi=new N({props:{name:"call",anchor:"transformers.TFAlbertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_17673/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17673/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17673/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_tf_albert.py#L1161",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),js=new we({props:{$$slots:{default:[bM]},$$scope:{ctx:x}}}),qs=new te({props:{anchor:"transformers.TFAlbertForTokenClassification.call.example",$$slots:{default:[kM]},$$scope:{ctx:x}}}),Ps=new te({props:{anchor:"transformers.TFAlbertForTokenClassification.call.example-2",$$slots:{default:[vM]},$$scope:{ctx:x}}}),xi=new Fe({}),Ei=new N({props:{name:"class transformers.TFAlbertForQuestionAnswering",anchor:"transformers.TFAlbertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_tf_albert.py#L1236"}}),Ls=new we({props:{$$slots:{default:[TM]},$$scope:{ctx:x}}}),qi=new N({props:{name:"call",anchor:"transformers.TFAlbertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_17673/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_17673/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17673/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFAlbertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_tf_albert.py#L1250",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Is=new we({props:{$$slots:{default:[yM]},$$scope:{ctx:x}}}),Os=new te({props:{anchor:"transformers.TFAlbertForQuestionAnswering.call.example",$$slots:{default:[wM]},$$scope:{ctx:x}}}),Ns=new te({props:{anchor:"transformers.TFAlbertForQuestionAnswering.call.example-2",$$slots:{default:[$M]},$$scope:{ctx:x}}}),Pi=new Fe({}),Ci=new N({props:{name:"class transformers.FlaxAlbertModel",anchor:"transformers.FlaxAlbertModel",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_flax_albert.py#L679"}}),Ui=new N({props:{name:"__call__",anchor:"transformers.FlaxAlbertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_17673/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17673/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17673/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
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
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ds=new we({props:{$$slots:{default:[AM]},$$scope:{ctx:x}}}),Ws=new te({props:{anchor:"transformers.FlaxAlbertModel.__call__.example",$$slots:{default:[FM]},$$scope:{ctx:x}}}),Bi=new Fe({}),Ri=new N({props:{name:"class transformers.FlaxAlbertForPreTraining",anchor:"transformers.FlaxAlbertForPreTraining",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_flax_albert.py#L750"}}),Yi=new N({props:{name:"__call__",anchor:"transformers.FlaxAlbertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_17673/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17673/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForPreTraining.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForPreTraining.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForPreTraining.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForPreTraining.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17673/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <code>transformers.models.albert.modeling_flax_albert.FlaxAlbertForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>sop_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
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
<p><code>transformers.models.albert.modeling_flax_albert.FlaxAlbertForPreTrainingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bs=new we({props:{$$slots:{default:[xM]},$$scope:{ctx:x}}}),Rs=new te({props:{anchor:"transformers.FlaxAlbertForPreTraining.__call__.example",$$slots:{default:[EM]},$$scope:{ctx:x}}}),Zi=new Fe({}),el=new N({props:{name:"class transformers.FlaxAlbertForMaskedLM",anchor:"transformers.FlaxAlbertForMaskedLM",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_flax_albert.py#L833"}}),dl=new N({props:{name:"__call__",anchor:"transformers.FlaxAlbertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_17673/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17673/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17673/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qs=new we({props:{$$slots:{default:[MM]},$$scope:{ctx:x}}}),Vs=new te({props:{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.example",$$slots:{default:[zM]},$$scope:{ctx:x}}}),cl=new Fe({}),pl=new N({props:{name:"class transformers.FlaxAlbertForSequenceClassification",anchor:"transformers.FlaxAlbertForSequenceClassification",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_flax_albert.py#L903"}}),kl=new N({props:{name:"__call__",anchor:"transformers.FlaxAlbertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_17673/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17673/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17673/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Js=new we({props:{$$slots:{default:[jM]},$$scope:{ctx:x}}}),Gs=new te({props:{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.example",$$slots:{default:[qM]},$$scope:{ctx:x}}}),vl=new Fe({}),Tl=new N({props:{name:"class transformers.FlaxAlbertForMultipleChoice",anchor:"transformers.FlaxAlbertForMultipleChoice",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_flax_albert.py#L977"}}),Ml=new N({props:{name:"__call__",anchor:"transformers.FlaxAlbertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_17673/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17673/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17673/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ys=new we({props:{$$slots:{default:[PM]},$$scope:{ctx:x}}}),Zs=new te({props:{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.example",$$slots:{default:[CM]},$$scope:{ctx:x}}}),zl=new Fe({}),jl=new N({props:{name:"class transformers.FlaxAlbertForTokenClassification",anchor:"transformers.FlaxAlbertForTokenClassification",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_flax_albert.py#L1051"}}),Sl=new N({props:{name:"__call__",anchor:"transformers.FlaxAlbertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_17673/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17673/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17673/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tr=new we({props:{$$slots:{default:[LM]},$$scope:{ctx:x}}}),or=new te({props:{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.example",$$slots:{default:[IM]},$$scope:{ctx:x}}}),Dl=new Fe({}),Wl=new N({props:{name:"class transformers.FlaxAlbertForQuestionAnswering",anchor:"transformers.FlaxAlbertForQuestionAnswering",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_flax_albert.py#L1120"}}),Jl=new N({props:{name:"__call__",anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertTokenizer">AlbertTokenizer</a>. See <a href="/docs/transformers/pr_17673/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17673/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17673/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_flax_albert.py#L556",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig"
>AlbertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17673/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),sr=new we({props:{$$slots:{default:[OM]},$$scope:{ctx:x}}}),rr=new te({props:{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.example",$$slots:{default:[NM]},$$scope:{ctx:x}}}),{c(){d=n("meta"),g=h(),c=n("h1"),p=n("a"),_=n("span"),T(l.$$.fragment),f=h(),E=n("span"),L=a("ALBERT"),I=h(),M=n("h2"),S=n("a"),O=n("span"),T(Z.$$.fragment),ue=h(),Q=n("span"),ge=a("Overview"),ce=h(),X=n("p"),D=a("The ALBERT model was proposed in "),re=n("a"),ee=a("ALBERT: A Lite BERT for Self-supervised Learning of Language Representations"),j=a(` by Zhenzhong Lan, Mingda Chen, Sebastian Goodman, Kevin Gimpel, Piyush Sharma,
Radu Soricut. It presents two parameter-reduction techniques to lower memory consumption and increase the training
speed of BERT:`),P=h(),se=n("ul"),V=n("li"),_e=a("Splitting the embedding matrix into two smaller matrices."),be=h(),K=n("li"),ke=a("Using repeating layers split among groups."),pe=h(),q=n("p"),ve=a("The abstract from the paper is the following:"),J=h(),ae=n("p"),le=n("em"),G=a(`Increasing model size when pretraining natural language representations often results in improved performance on
downstream tasks. However, at some point further model increases become harder due to GPU/TPU memory limitations,
longer training times, and unexpected model degradation. To address these problems, we present two parameter-reduction
techniques to lower memory consumption and increase the training speed of BERT. Comprehensive empirical evidence shows
that our proposed methods lead to models that scale much better compared to the original BERT. We also use a
self-supervised loss that focuses on modeling inter-sentence coherence, and show it consistently helps downstream tasks
with multi-sentence inputs. As a result, our best model establishes new state-of-the-art results on the GLUE, RACE, and
SQuAD benchmarks while having fewer parameters compared to BERT-large.`),he=h(),ie=n("p"),W=a("Tips:"),me=h(),B=n("ul"),de=n("li"),v=a(`ALBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),z=h(),Y=n("li"),Ee=a(`ALBERT uses repeating layers which results in a small memory footprint, however the computational cost remains
similar to a BERT-like architecture with the same number of hidden layers as it has to iterate through the same
number of (repeating) layers.`),xe=h(),C=n("p"),Me=a("This model was contributed by "),$e=n("a"),ze=a("lysandre"),U=a(`. This model jax version was contributed by
`),R=n("a"),je=a("kamalkraj"),qe=a(". The original code can be found "),H=n("a"),Pe=a("here"),Ce=a("."),fe=h(),Te=n("h2"),wn=n("a"),Lc=n("span"),T(Mr.$$.fragment),zg=h(),Ic=n("span"),jg=a("AlbertConfig"),uf=h(),bt=n("div"),T(zr.$$.fragment),qg=h(),Ut=n("p"),Pg=a("This is the configuration class to store the configuration of a "),cd=n("a"),Cg=a("AlbertModel"),Lg=a(" or a "),pd=n("a"),Ig=a("TFAlbertModel"),Og=a(`. It is used
to instantiate an ALBERT model according to the specified arguments, defining the model architecture. Instantiating
a configuration with the defaults will yield a similar configuration to that of the ALBERT
`),jr=n("a"),Ng=a("albert-xxlarge-v2"),Sg=a(" architecture."),Dg=h(),bo=n("p"),Wg=a("Configuration objects inherit from "),hd=n("a"),Ug=a("PretrainedConfig"),Bg=a(` and can be used to control the model outputs. Read the
documentation from `),md=n("a"),Rg=a("PretrainedConfig"),Hg=a(" for more information."),Qg=h(),T($n.$$.fragment),gf=h(),ko=n("h2"),An=n("a"),Oc=n("span"),T(qr.$$.fragment),Vg=h(),Nc=n("span"),Kg=a("AlbertTokenizer"),_f=h(),ye=n("div"),T(Pr.$$.fragment),Jg=h(),Cr=n("p"),Gg=a("Construct an ALBERT tokenizer. Based on "),Lr=n("a"),Xg=a("SentencePiece"),Yg=a("."),Zg=h(),Ir=n("p"),e_=a("This tokenizer inherits from "),fd=n("a"),t_=a("PreTrainedTokenizer"),o_=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),n_=h(),Sc=n("p"),s_=a("Example:"),r_=h(),T(Fn.$$.fragment),a_=h(),Or=n("p"),i_=a("You could still use AlbertTokenizer with the "),ud=n("a"),l_=a("pipeline()"),d_=a("\uFF1A"),c_=h(),T(xn.$$.fragment),p_=h(),T(En.$$.fragment),h_=h(),to=n("div"),T(Nr.$$.fragment),m_=h(),Dc=n("p"),f_=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),u_=h(),Sr=n("ul"),gd=n("li"),g_=a("single sequence: "),Wc=n("code"),__=a("[CLS] X [SEP]"),b_=h(),_d=n("li"),k_=a("pair of sequences: "),Uc=n("code"),v_=a("[CLS] A [SEP] B [SEP]"),T_=h(),Mn=n("div"),T(Dr.$$.fragment),y_=h(),Wr=n("p"),w_=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Bc=n("code"),$_=a("prepare_for_model"),A_=a(" method."),F_=h(),vt=n("div"),T(Ur.$$.fragment),x_=h(),Rc=n("p"),E_=a("Create a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),M_=h(),T(zn.$$.fragment),z_=h(),vo=n("p"),j_=a("If "),Hc=n("code"),q_=a("token_ids_1"),P_=a(" is "),Qc=n("code"),C_=a("None"),L_=a(", this method only returns the first portion of the mask (0s)."),I_=h(),bd=n("div"),T(Br.$$.fragment),bf=h(),To=n("h2"),jn=n("a"),Vc=n("span"),T(Rr.$$.fragment),O_=h(),Kc=n("span"),N_=a("AlbertTokenizerFast"),kf=h(),kt=n("div"),T(Hr.$$.fragment),S_=h(),Bt=n("p"),D_=a("Construct a \u201Cfast\u201D ALBERT tokenizer (backed by HuggingFace\u2019s "),Jc=n("em"),W_=a("tokenizers"),U_=a(` library). Based on
`),Qr=n("a"),B_=a("Unigram"),R_=a(`. This
tokenizer inherits from `),kd=n("a"),H_=a("PreTrainedTokenizerFast"),Q_=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),V_=h(),oo=n("div"),T(Vr.$$.fragment),K_=h(),Gc=n("p"),J_=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),G_=h(),Kr=n("ul"),vd=n("li"),X_=a("single sequence: "),Xc=n("code"),Y_=a("[CLS] X [SEP]"),Z_=h(),Td=n("li"),eb=a("pair of sequences: "),Yc=n("code"),tb=a("[CLS] A [SEP] B [SEP]"),ob=h(),Tt=n("div"),T(Jr.$$.fragment),nb=h(),Zc=n("p"),sb=a("Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),rb=h(),T(qn.$$.fragment),ab=h(),ep=n("p"),ib=a("if token_ids_1 is None, only returns the first portion of the mask (0s)."),vf=h(),yo=n("h2"),Pn=n("a"),tp=n("span"),T(Gr.$$.fragment),lb=h(),op=n("span"),db=a("Albert specific outputs"),Tf=h(),wo=n("div"),T(Xr.$$.fragment),cb=h(),Yr=n("p"),pb=a("Output type of "),yd=n("a"),hb=a("AlbertForPreTraining"),mb=a("."),yf=h(),$o=n("div"),T(Zr.$$.fragment),fb=h(),ea=n("p"),ub=a("Output type of "),wd=n("a"),gb=a("TFAlbertForPreTraining"),_b=a("."),wf=h(),Ao=n("h2"),Cn=n("a"),np=n("span"),T(ta.$$.fragment),bb=h(),sp=n("span"),kb=a("AlbertModel"),$f=h(),Ge=n("div"),T(oa.$$.fragment),vb=h(),rp=n("p"),Tb=a("The bare ALBERT Model transformer outputting raw hidden-states without any specific head on top."),yb=h(),na=n("p"),wb=a("This model inherits from "),$d=n("a"),$b=a("PreTrainedModel"),Ab=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fb=h(),sa=n("p"),xb=a("This model is also a PyTorch "),ra=n("a"),Eb=a("torch.nn.Module"),Mb=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zb=h(),yt=n("div"),T(aa.$$.fragment),jb=h(),Fo=n("p"),qb=a("The "),Ad=n("a"),Pb=a("AlbertModel"),Cb=a(" forward method, overrides the "),ap=n("code"),Lb=a("__call__"),Ib=a(" special method."),Ob=h(),T(Ln.$$.fragment),Nb=h(),T(In.$$.fragment),Af=h(),xo=n("h2"),On=n("a"),ip=n("span"),T(ia.$$.fragment),Sb=h(),lp=n("span"),Db=a("AlbertForPreTraining"),Ff=h(),Xe=n("div"),T(la.$$.fragment),Wb=h(),Eo=n("p"),Ub=a("Albert Model with two heads on top as done during the pretraining: a "),dp=n("code"),Bb=a("masked language modeling"),Rb=a(` head and a
`),cp=n("code"),Hb=a("sentence order prediction (classification)"),Qb=a(" head."),Vb=h(),da=n("p"),Kb=a("This model inherits from "),Fd=n("a"),Jb=a("PreTrainedModel"),Gb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xb=h(),ca=n("p"),Yb=a("This model is also a PyTorch "),pa=n("a"),Zb=a("torch.nn.Module"),ek=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tk=h(),wt=n("div"),T(ha.$$.fragment),ok=h(),Mo=n("p"),nk=a("The "),xd=n("a"),sk=a("AlbertForPreTraining"),rk=a(" forward method, overrides the "),pp=n("code"),ak=a("__call__"),ik=a(" special method."),lk=h(),T(Nn.$$.fragment),dk=h(),T(Sn.$$.fragment),xf=h(),zo=n("h2"),Dn=n("a"),hp=n("span"),T(ma.$$.fragment),ck=h(),mp=n("span"),pk=a("AlbertForMaskedLM"),Ef=h(),Ye=n("div"),T(fa.$$.fragment),hk=h(),ua=n("p"),mk=a("Albert Model with a "),fp=n("code"),fk=a("language modeling"),uk=a(" head on top."),gk=h(),ga=n("p"),_k=a("This model inherits from "),Ed=n("a"),bk=a("PreTrainedModel"),kk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vk=h(),_a=n("p"),Tk=a("This model is also a PyTorch "),ba=n("a"),yk=a("torch.nn.Module"),wk=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$k=h(),nt=n("div"),T(ka.$$.fragment),Ak=h(),jo=n("p"),Fk=a("The "),Md=n("a"),xk=a("AlbertForMaskedLM"),Ek=a(" forward method, overrides the "),up=n("code"),Mk=a("__call__"),zk=a(" special method."),jk=h(),T(Wn.$$.fragment),qk=h(),T(Un.$$.fragment),Pk=h(),T(Bn.$$.fragment),Mf=h(),qo=n("h2"),Rn=n("a"),gp=n("span"),T(va.$$.fragment),Ck=h(),_p=n("span"),Lk=a("AlbertForSequenceClassification"),zf=h(),Ze=n("div"),T(Ta.$$.fragment),Ik=h(),bp=n("p"),Ok=a(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Nk=h(),ya=n("p"),Sk=a("This model inherits from "),zd=n("a"),Dk=a("PreTrainedModel"),Wk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uk=h(),wa=n("p"),Bk=a("This model is also a PyTorch "),$a=n("a"),Rk=a("torch.nn.Module"),Hk=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qk=h(),Ue=n("div"),T(Aa.$$.fragment),Vk=h(),Po=n("p"),Kk=a("The "),jd=n("a"),Jk=a("AlbertForSequenceClassification"),Gk=a(" forward method, overrides the "),kp=n("code"),Xk=a("__call__"),Yk=a(" special method."),Zk=h(),T(Hn.$$.fragment),ev=h(),T(Qn.$$.fragment),tv=h(),T(Vn.$$.fragment),ov=h(),T(Kn.$$.fragment),nv=h(),T(Jn.$$.fragment),jf=h(),Co=n("h2"),Gn=n("a"),vp=n("span"),T(Fa.$$.fragment),sv=h(),Tp=n("span"),rv=a("AlbertForMultipleChoice"),qf=h(),et=n("div"),T(xa.$$.fragment),av=h(),yp=n("p"),iv=a(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),lv=h(),Ea=n("p"),dv=a("This model inherits from "),qd=n("a"),cv=a("PreTrainedModel"),pv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hv=h(),Ma=n("p"),mv=a("This model is also a PyTorch "),za=n("a"),fv=a("torch.nn.Module"),uv=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gv=h(),$t=n("div"),T(ja.$$.fragment),_v=h(),Lo=n("p"),bv=a("The "),Pd=n("a"),kv=a("AlbertForMultipleChoice"),vv=a(" forward method, overrides the "),wp=n("code"),Tv=a("__call__"),yv=a(" special method."),wv=h(),T(Xn.$$.fragment),$v=h(),T(Yn.$$.fragment),Pf=h(),Io=n("h2"),Zn=n("a"),$p=n("span"),T(qa.$$.fragment),Av=h(),Ap=n("span"),Fv=a("AlbertForTokenClassification"),Cf=h(),tt=n("div"),T(Pa.$$.fragment),xv=h(),Fp=n("p"),Ev=a(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Mv=h(),Ca=n("p"),zv=a("This model inherits from "),Cd=n("a"),jv=a("PreTrainedModel"),qv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pv=h(),La=n("p"),Cv=a("This model is also a PyTorch "),Ia=n("a"),Lv=a("torch.nn.Module"),Iv=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ov=h(),st=n("div"),T(Oa.$$.fragment),Nv=h(),Oo=n("p"),Sv=a("The "),Ld=n("a"),Dv=a("AlbertForTokenClassification"),Wv=a(" forward method, overrides the "),xp=n("code"),Uv=a("__call__"),Bv=a(" special method."),Rv=h(),T(es.$$.fragment),Hv=h(),T(ts.$$.fragment),Qv=h(),T(os.$$.fragment),Lf=h(),No=n("h2"),ns=n("a"),Ep=n("span"),T(Na.$$.fragment),Vv=h(),Mp=n("span"),Kv=a("AlbertForQuestionAnswering"),If=h(),ot=n("div"),T(Sa.$$.fragment),Jv=h(),So=n("p"),Gv=a(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),zp=n("code"),Xv=a("span start logits"),Yv=a(" and "),jp=n("code"),Zv=a("span end logits"),eT=a(")."),tT=h(),Da=n("p"),oT=a("This model inherits from "),Id=n("a"),nT=a("PreTrainedModel"),sT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rT=h(),Wa=n("p"),aT=a("This model is also a PyTorch "),Ua=n("a"),iT=a("torch.nn.Module"),lT=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dT=h(),rt=n("div"),T(Ba.$$.fragment),cT=h(),Do=n("p"),pT=a("The "),Od=n("a"),hT=a("AlbertForQuestionAnswering"),mT=a(" forward method, overrides the "),qp=n("code"),fT=a("__call__"),uT=a(" special method."),gT=h(),T(ss.$$.fragment),_T=h(),T(rs.$$.fragment),bT=h(),T(as.$$.fragment),Of=h(),Wo=n("h2"),is=n("a"),Pp=n("span"),T(Ra.$$.fragment),kT=h(),Cp=n("span"),vT=a("TFAlbertModel"),Nf=h(),Be=n("div"),T(Ha.$$.fragment),TT=h(),Lp=n("p"),yT=a("The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),wT=h(),Qa=n("p"),$T=a("This model inherits from "),Nd=n("a"),AT=a("TFPreTrainedModel"),FT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xT=h(),Va=n("p"),ET=a("This model is also a "),Ka=n("a"),MT=a("tf.keras.Model"),zT=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jT=h(),T(ls.$$.fragment),qT=h(),At=n("div"),T(Ja.$$.fragment),PT=h(),Uo=n("p"),CT=a("The "),Sd=n("a"),LT=a("TFAlbertModel"),IT=a(" forward method, overrides the "),Ip=n("code"),OT=a("__call__"),NT=a(" special method."),ST=h(),T(ds.$$.fragment),DT=h(),T(cs.$$.fragment),Sf=h(),Bo=n("h2"),ps=n("a"),Op=n("span"),T(Ga.$$.fragment),WT=h(),Np=n("span"),UT=a("TFAlbertForPreTraining"),Df=h(),Re=n("div"),T(Xa.$$.fragment),BT=h(),Ro=n("p"),RT=a("Albert Model with two heads on top for pretraining: a "),Sp=n("code"),HT=a("masked language modeling"),QT=a(" head and a "),Dp=n("code"),VT=a("sentence order prediction"),KT=a(" (classification) head."),JT=h(),Ya=n("p"),GT=a("This model inherits from "),Dd=n("a"),XT=a("TFPreTrainedModel"),YT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ZT=h(),Za=n("p"),e1=a("This model is also a "),ei=n("a"),t1=a("tf.keras.Model"),o1=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),n1=h(),T(hs.$$.fragment),s1=h(),Ft=n("div"),T(ti.$$.fragment),r1=h(),Ho=n("p"),a1=a("The "),Wd=n("a"),i1=a("TFAlbertForPreTraining"),l1=a(" forward method, overrides the "),Wp=n("code"),d1=a("__call__"),c1=a(" special method."),p1=h(),T(ms.$$.fragment),h1=h(),T(fs.$$.fragment),Wf=h(),Qo=n("h2"),us=n("a"),Up=n("span"),T(oi.$$.fragment),m1=h(),Bp=n("span"),f1=a("TFAlbertForMaskedLM"),Uf=h(),He=n("div"),T(ni.$$.fragment),u1=h(),si=n("p"),g1=a("Albert Model with a "),Rp=n("code"),_1=a("language modeling"),b1=a(" head on top."),k1=h(),ri=n("p"),v1=a("This model inherits from "),Ud=n("a"),T1=a("TFPreTrainedModel"),y1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),w1=h(),ai=n("p"),$1=a("This model is also a "),ii=n("a"),A1=a("tf.keras.Model"),F1=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),x1=h(),T(gs.$$.fragment),E1=h(),at=n("div"),T(li.$$.fragment),M1=h(),Vo=n("p"),z1=a("The "),Bd=n("a"),j1=a("TFAlbertForMaskedLM"),q1=a(" forward method, overrides the "),Hp=n("code"),P1=a("__call__"),C1=a(" special method."),L1=h(),T(_s.$$.fragment),I1=h(),T(bs.$$.fragment),O1=h(),T(ks.$$.fragment),Bf=h(),Ko=n("h2"),vs=n("a"),Qp=n("span"),T(di.$$.fragment),N1=h(),Vp=n("span"),S1=a("TFAlbertForSequenceClassification"),Rf=h(),Qe=n("div"),T(ci.$$.fragment),D1=h(),Kp=n("p"),W1=a(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),U1=h(),pi=n("p"),B1=a("This model inherits from "),Rd=n("a"),R1=a("TFPreTrainedModel"),H1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Q1=h(),hi=n("p"),V1=a("This model is also a "),mi=n("a"),K1=a("tf.keras.Model"),J1=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),G1=h(),T(Ts.$$.fragment),X1=h(),it=n("div"),T(fi.$$.fragment),Y1=h(),Jo=n("p"),Z1=a("The "),Hd=n("a"),ey=a("TFAlbertForSequenceClassification"),ty=a(" forward method, overrides the "),Jp=n("code"),oy=a("__call__"),ny=a(" special method."),sy=h(),T(ys.$$.fragment),ry=h(),T(ws.$$.fragment),ay=h(),T($s.$$.fragment),Hf=h(),Go=n("h2"),As=n("a"),Gp=n("span"),T(ui.$$.fragment),iy=h(),Xp=n("span"),ly=a("TFAlbertForMultipleChoice"),Qf=h(),Ve=n("div"),T(gi.$$.fragment),dy=h(),Yp=n("p"),cy=a(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),py=h(),_i=n("p"),hy=a("This model inherits from "),Qd=n("a"),my=a("TFPreTrainedModel"),fy=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uy=h(),bi=n("p"),gy=a("This model is also a "),ki=n("a"),_y=a("tf.keras.Model"),by=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ky=h(),T(Fs.$$.fragment),vy=h(),xt=n("div"),T(vi.$$.fragment),Ty=h(),Xo=n("p"),yy=a("The "),Vd=n("a"),wy=a("TFAlbertForMultipleChoice"),$y=a(" forward method, overrides the "),Zp=n("code"),Ay=a("__call__"),Fy=a(" special method."),xy=h(),T(xs.$$.fragment),Ey=h(),T(Es.$$.fragment),Vf=h(),Yo=n("h2"),Ms=n("a"),eh=n("span"),T(Ti.$$.fragment),My=h(),th=n("span"),zy=a("TFAlbertForTokenClassification"),Kf=h(),Ke=n("div"),T(yi.$$.fragment),jy=h(),oh=n("p"),qy=a(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Py=h(),wi=n("p"),Cy=a("This model inherits from "),Kd=n("a"),Ly=a("TFPreTrainedModel"),Iy=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oy=h(),$i=n("p"),Ny=a("This model is also a "),Ai=n("a"),Sy=a("tf.keras.Model"),Dy=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wy=h(),T(zs.$$.fragment),Uy=h(),lt=n("div"),T(Fi.$$.fragment),By=h(),Zo=n("p"),Ry=a("The "),Jd=n("a"),Hy=a("TFAlbertForTokenClassification"),Qy=a(" forward method, overrides the "),nh=n("code"),Vy=a("__call__"),Ky=a(" special method."),Jy=h(),T(js.$$.fragment),Gy=h(),T(qs.$$.fragment),Xy=h(),T(Ps.$$.fragment),Jf=h(),en=n("h2"),Cs=n("a"),sh=n("span"),T(xi.$$.fragment),Yy=h(),rh=n("span"),Zy=a("TFAlbertForQuestionAnswering"),Gf=h(),Je=n("div"),T(Ei.$$.fragment),ew=h(),tn=n("p"),tw=a(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ah=n("code"),ow=a("span start logits"),nw=a(" and "),ih=n("code"),sw=a("span end logits"),rw=a(")."),aw=h(),Mi=n("p"),iw=a("This model inherits from "),Gd=n("a"),lw=a("TFPreTrainedModel"),dw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cw=h(),zi=n("p"),pw=a("This model is also a "),ji=n("a"),hw=a("tf.keras.Model"),mw=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fw=h(),T(Ls.$$.fragment),uw=h(),dt=n("div"),T(qi.$$.fragment),gw=h(),on=n("p"),_w=a("The "),Xd=n("a"),bw=a("TFAlbertForQuestionAnswering"),kw=a(" forward method, overrides the "),lh=n("code"),vw=a("__call__"),Tw=a(" special method."),yw=h(),T(Is.$$.fragment),ww=h(),T(Os.$$.fragment),$w=h(),T(Ns.$$.fragment),Xf=h(),nn=n("h2"),Ss=n("a"),dh=n("span"),T(Pi.$$.fragment),Aw=h(),ch=n("span"),Fw=a("FlaxAlbertModel"),Yf=h(),Le=n("div"),T(Ci.$$.fragment),xw=h(),ph=n("p"),Ew=a("The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),Mw=h(),Li=n("p"),zw=a("This model inherits from "),Yd=n("a"),jw=a("FlaxPreTrainedModel"),qw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Pw=h(),Ii=n("p"),Cw=a("This model is also a Flax Linen "),Oi=n("a"),Lw=a("flax.linen.Module"),Iw=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ow=h(),hh=n("p"),Nw=a("Finally, this model supports inherent JAX features such as:"),Sw=h(),Rt=n("ul"),mh=n("li"),Ni=n("a"),Dw=a("Just-In-Time (JIT) compilation"),Ww=h(),fh=n("li"),Si=n("a"),Uw=a("Automatic Differentiation"),Bw=h(),uh=n("li"),Di=n("a"),Rw=a("Vectorization"),Hw=h(),gh=n("li"),Wi=n("a"),Qw=a("Parallelization"),Vw=h(),Et=n("div"),T(Ui.$$.fragment),Kw=h(),sn=n("p"),Jw=a("The "),_h=n("code"),Gw=a("FlaxAlbertPreTrainedModel"),Xw=a(" forward method, overrides the "),bh=n("code"),Yw=a("__call__"),Zw=a(" special method."),e$=h(),T(Ds.$$.fragment),t$=h(),T(Ws.$$.fragment),Zf=h(),rn=n("h2"),Us=n("a"),kh=n("span"),T(Bi.$$.fragment),o$=h(),vh=n("span"),n$=a("FlaxAlbertForPreTraining"),eu=h(),Ie=n("div"),T(Ri.$$.fragment),s$=h(),an=n("p"),r$=a("Albert Model with two heads on top as done during the pretraining: a "),Th=n("code"),a$=a("masked language modeling"),i$=a(` head and a
`),yh=n("code"),l$=a("sentence order prediction (classification)"),d$=a(" head."),c$=h(),Hi=n("p"),p$=a("This model inherits from "),Zd=n("a"),h$=a("FlaxPreTrainedModel"),m$=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),f$=h(),Qi=n("p"),u$=a("This model is also a Flax Linen "),Vi=n("a"),g$=a("flax.linen.Module"),_$=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),b$=h(),wh=n("p"),k$=a("Finally, this model supports inherent JAX features such as:"),v$=h(),Ht=n("ul"),$h=n("li"),Ki=n("a"),T$=a("Just-In-Time (JIT) compilation"),y$=h(),Ah=n("li"),Ji=n("a"),w$=a("Automatic Differentiation"),$$=h(),Fh=n("li"),Gi=n("a"),A$=a("Vectorization"),F$=h(),xh=n("li"),Xi=n("a"),x$=a("Parallelization"),E$=h(),Mt=n("div"),T(Yi.$$.fragment),M$=h(),ln=n("p"),z$=a("The "),Eh=n("code"),j$=a("FlaxAlbertPreTrainedModel"),q$=a(" forward method, overrides the "),Mh=n("code"),P$=a("__call__"),C$=a(" special method."),L$=h(),T(Bs.$$.fragment),I$=h(),T(Rs.$$.fragment),tu=h(),dn=n("h2"),Hs=n("a"),zh=n("span"),T(Zi.$$.fragment),O$=h(),jh=n("span"),N$=a("FlaxAlbertForMaskedLM"),ou=h(),Oe=n("div"),T(el.$$.fragment),S$=h(),tl=n("p"),D$=a("Albert Model with a "),qh=n("code"),W$=a("language modeling"),U$=a(" head on top."),B$=h(),ol=n("p"),R$=a("This model inherits from "),ec=n("a"),H$=a("FlaxPreTrainedModel"),Q$=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),V$=h(),nl=n("p"),K$=a("This model is also a Flax Linen "),sl=n("a"),J$=a("flax.linen.Module"),G$=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),X$=h(),Ph=n("p"),Y$=a("Finally, this model supports inherent JAX features such as:"),Z$=h(),Qt=n("ul"),Ch=n("li"),rl=n("a"),e2=a("Just-In-Time (JIT) compilation"),t2=h(),Lh=n("li"),al=n("a"),o2=a("Automatic Differentiation"),n2=h(),Ih=n("li"),il=n("a"),s2=a("Vectorization"),r2=h(),Oh=n("li"),ll=n("a"),a2=a("Parallelization"),i2=h(),zt=n("div"),T(dl.$$.fragment),l2=h(),cn=n("p"),d2=a("The "),Nh=n("code"),c2=a("FlaxAlbertPreTrainedModel"),p2=a(" forward method, overrides the "),Sh=n("code"),h2=a("__call__"),m2=a(" special method."),f2=h(),T(Qs.$$.fragment),u2=h(),T(Vs.$$.fragment),nu=h(),pn=n("h2"),Ks=n("a"),Dh=n("span"),T(cl.$$.fragment),g2=h(),Wh=n("span"),_2=a("FlaxAlbertForSequenceClassification"),su=h(),Ne=n("div"),T(pl.$$.fragment),b2=h(),Uh=n("p"),k2=a(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),v2=h(),hl=n("p"),T2=a("This model inherits from "),tc=n("a"),y2=a("FlaxPreTrainedModel"),w2=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),$2=h(),ml=n("p"),A2=a("This model is also a Flax Linen "),fl=n("a"),F2=a("flax.linen.Module"),x2=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),E2=h(),Bh=n("p"),M2=a("Finally, this model supports inherent JAX features such as:"),z2=h(),Vt=n("ul"),Rh=n("li"),ul=n("a"),j2=a("Just-In-Time (JIT) compilation"),q2=h(),Hh=n("li"),gl=n("a"),P2=a("Automatic Differentiation"),C2=h(),Qh=n("li"),_l=n("a"),L2=a("Vectorization"),I2=h(),Vh=n("li"),bl=n("a"),O2=a("Parallelization"),N2=h(),jt=n("div"),T(kl.$$.fragment),S2=h(),hn=n("p"),D2=a("The "),Kh=n("code"),W2=a("FlaxAlbertPreTrainedModel"),U2=a(" forward method, overrides the "),Jh=n("code"),B2=a("__call__"),R2=a(" special method."),H2=h(),T(Js.$$.fragment),Q2=h(),T(Gs.$$.fragment),ru=h(),mn=n("h2"),Xs=n("a"),Gh=n("span"),T(vl.$$.fragment),V2=h(),Xh=n("span"),K2=a("FlaxAlbertForMultipleChoice"),au=h(),Se=n("div"),T(Tl.$$.fragment),J2=h(),Yh=n("p"),G2=a(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),X2=h(),yl=n("p"),Y2=a("This model inherits from "),oc=n("a"),Z2=a("FlaxPreTrainedModel"),eA=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),tA=h(),wl=n("p"),oA=a("This model is also a Flax Linen "),$l=n("a"),nA=a("flax.linen.Module"),sA=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),rA=h(),Zh=n("p"),aA=a("Finally, this model supports inherent JAX features such as:"),iA=h(),Kt=n("ul"),em=n("li"),Al=n("a"),lA=a("Just-In-Time (JIT) compilation"),dA=h(),tm=n("li"),Fl=n("a"),cA=a("Automatic Differentiation"),pA=h(),om=n("li"),xl=n("a"),hA=a("Vectorization"),mA=h(),nm=n("li"),El=n("a"),fA=a("Parallelization"),uA=h(),qt=n("div"),T(Ml.$$.fragment),gA=h(),fn=n("p"),_A=a("The "),sm=n("code"),bA=a("FlaxAlbertPreTrainedModel"),kA=a(" forward method, overrides the "),rm=n("code"),vA=a("__call__"),TA=a(" special method."),yA=h(),T(Ys.$$.fragment),wA=h(),T(Zs.$$.fragment),iu=h(),un=n("h2"),er=n("a"),am=n("span"),T(zl.$$.fragment),$A=h(),im=n("span"),AA=a("FlaxAlbertForTokenClassification"),lu=h(),De=n("div"),T(jl.$$.fragment),FA=h(),lm=n("p"),xA=a(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),EA=h(),ql=n("p"),MA=a("This model inherits from "),nc=n("a"),zA=a("FlaxPreTrainedModel"),jA=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),qA=h(),Pl=n("p"),PA=a("This model is also a Flax Linen "),Cl=n("a"),CA=a("flax.linen.Module"),LA=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),IA=h(),dm=n("p"),OA=a("Finally, this model supports inherent JAX features such as:"),NA=h(),Jt=n("ul"),cm=n("li"),Ll=n("a"),SA=a("Just-In-Time (JIT) compilation"),DA=h(),pm=n("li"),Il=n("a"),WA=a("Automatic Differentiation"),UA=h(),hm=n("li"),Ol=n("a"),BA=a("Vectorization"),RA=h(),mm=n("li"),Nl=n("a"),HA=a("Parallelization"),QA=h(),Pt=n("div"),T(Sl.$$.fragment),VA=h(),gn=n("p"),KA=a("The "),fm=n("code"),JA=a("FlaxAlbertPreTrainedModel"),GA=a(" forward method, overrides the "),um=n("code"),XA=a("__call__"),YA=a(" special method."),ZA=h(),T(tr.$$.fragment),eF=h(),T(or.$$.fragment),du=h(),_n=n("h2"),nr=n("a"),gm=n("span"),T(Dl.$$.fragment),tF=h(),_m=n("span"),oF=a("FlaxAlbertForQuestionAnswering"),cu=h(),We=n("div"),T(Wl.$$.fragment),nF=h(),bn=n("p"),sF=a(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),bm=n("code"),rF=a("span start logits"),aF=a(" and "),km=n("code"),iF=a("span end logits"),lF=a(")."),dF=h(),Ul=n("p"),cF=a("This model inherits from "),sc=n("a"),pF=a("FlaxPreTrainedModel"),hF=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),mF=h(),Bl=n("p"),fF=a("This model is also a Flax Linen "),Rl=n("a"),uF=a("flax.linen.Module"),gF=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_F=h(),vm=n("p"),bF=a("Finally, this model supports inherent JAX features such as:"),kF=h(),Gt=n("ul"),Tm=n("li"),Hl=n("a"),vF=a("Just-In-Time (JIT) compilation"),TF=h(),ym=n("li"),Ql=n("a"),yF=a("Automatic Differentiation"),wF=h(),wm=n("li"),Vl=n("a"),$F=a("Vectorization"),AF=h(),$m=n("li"),Kl=n("a"),FF=a("Parallelization"),xF=h(),Ct=n("div"),T(Jl.$$.fragment),EF=h(),kn=n("p"),MF=a("The "),Am=n("code"),zF=a("FlaxAlbertPreTrainedModel"),jF=a(" forward method, overrides the "),Fm=n("code"),qF=a("__call__"),PF=a(" special method."),CF=h(),T(sr.$$.fragment),LF=h(),T(rr.$$.fragment),this.h()},l(o){const k=$3('[data-svelte="svelte-1phssyn"]',document.head);d=s(k,"META",{name:!0,content:!0}),k.forEach(t),g=m(o),c=s(o,"H1",{class:!0});var Gl=r(c);p=s(Gl,"A",{id:!0,class:!0,href:!0});var xm=r(p);_=s(xm,"SPAN",{});var Em=r(_);y(l.$$.fragment,Em),Em.forEach(t),xm.forEach(t),f=m(Gl),E=s(Gl,"SPAN",{});var Mm=r(E);L=i(Mm,"ALBERT"),Mm.forEach(t),Gl.forEach(t),I=m(o),M=s(o,"H2",{class:!0});var Xl=r(M);S=s(Xl,"A",{id:!0,class:!0,href:!0});var zm=r(S);O=s(zm,"SPAN",{});var jm=r(O);y(Z.$$.fragment,jm),jm.forEach(t),zm.forEach(t),ue=m(Xl),Q=s(Xl,"SPAN",{});var qm=r(Q);ge=i(qm,"Overview"),qm.forEach(t),Xl.forEach(t),ce=m(o),X=s(o,"P",{});var Yl=r(X);D=i(Yl,"The ALBERT model was proposed in "),re=s(Yl,"A",{href:!0,rel:!0});var Pm=r(re);ee=i(Pm,"ALBERT: A Lite BERT for Self-supervised Learning of Language Representations"),Pm.forEach(t),j=i(Yl,` by Zhenzhong Lan, Mingda Chen, Sebastian Goodman, Kevin Gimpel, Piyush Sharma,
Radu Soricut. It presents two parameter-reduction techniques to lower memory consumption and increase the training
speed of BERT:`),Yl.forEach(t),P=m(o),se=s(o,"UL",{});var Zl=r(se);V=s(Zl,"LI",{});var Cm=r(V);_e=i(Cm,"Splitting the embedding matrix into two smaller matrices."),Cm.forEach(t),be=m(Zl),K=s(Zl,"LI",{});var Lm=r(K);ke=i(Lm,"Using repeating layers split among groups."),Lm.forEach(t),Zl.forEach(t),pe=m(o),q=s(o,"P",{});var Im=r(q);ve=i(Im,"The abstract from the paper is the following:"),Im.forEach(t),J=m(o),ae=s(o,"P",{});var Om=r(ae);le=s(Om,"EM",{});var Nm=r(le);G=i(Nm,`Increasing model size when pretraining natural language representations often results in improved performance on
downstream tasks. However, at some point further model increases become harder due to GPU/TPU memory limitations,
longer training times, and unexpected model degradation. To address these problems, we present two parameter-reduction
techniques to lower memory consumption and increase the training speed of BERT. Comprehensive empirical evidence shows
that our proposed methods lead to models that scale much better compared to the original BERT. We also use a
self-supervised loss that focuses on modeling inter-sentence coherence, and show it consistently helps downstream tasks
with multi-sentence inputs. As a result, our best model establishes new state-of-the-art results on the GLUE, RACE, and
SQuAD benchmarks while having fewer parameters compared to BERT-large.`),Nm.forEach(t),Om.forEach(t),he=m(o),ie=s(o,"P",{});var Sm=r(ie);W=i(Sm,"Tips:"),Sm.forEach(t),me=m(o),B=s(o,"UL",{});var ed=r(B);de=s(ed,"LI",{});var Dm=r(de);v=i(Dm,`ALBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),Dm.forEach(t),z=m(ed),Y=s(ed,"LI",{});var Wm=r(Y);Ee=i(Wm,`ALBERT uses repeating layers which results in a small memory footprint, however the computational cost remains
similar to a BERT-like architecture with the same number of hidden layers as it has to iterate through the same
number of (repeating) layers.`),Wm.forEach(t),ed.forEach(t),xe=m(o),C=s(o,"P",{});var Xt=r(C);Me=i(Xt,"This model was contributed by "),$e=s(Xt,"A",{href:!0,rel:!0});var Um=r($e);ze=i(Um,"lysandre"),Um.forEach(t),U=i(Xt,`. This model jax version was contributed by
`),R=s(Xt,"A",{href:!0,rel:!0});var Bm=r(R);je=i(Bm,"kamalkraj"),Bm.forEach(t),qe=i(Xt,". The original code can be found "),H=s(Xt,"A",{href:!0,rel:!0});var Rm=r(H);Pe=i(Rm,"here"),Rm.forEach(t),Ce=i(Xt,"."),Xt.forEach(t),fe=m(o),Te=s(o,"H2",{class:!0});var td=r(Te);wn=s(td,"A",{id:!0,class:!0,href:!0});var Hm=r(wn);Lc=s(Hm,"SPAN",{});var Qm=r(Lc);y(Mr.$$.fragment,Qm),Qm.forEach(t),Hm.forEach(t),zg=m(td),Ic=s(td,"SPAN",{});var Vm=r(Ic);jg=i(Vm,"AlbertConfig"),Vm.forEach(t),td.forEach(t),uf=m(o),bt=s(o,"DIV",{class:!0});var Yt=r(bt);y(zr.$$.fragment,Yt),qg=m(Yt),Ut=s(Yt,"P",{});var Zt=r(Ut);Pg=i(Zt,"This is the configuration class to store the configuration of a "),cd=s(Zt,"A",{href:!0});var Km=r(cd);Cg=i(Km,"AlbertModel"),Km.forEach(t),Lg=i(Zt," or a "),pd=s(Zt,"A",{href:!0});var Jm=r(pd);Ig=i(Jm,"TFAlbertModel"),Jm.forEach(t),Og=i(Zt,`. It is used
to instantiate an ALBERT model according to the specified arguments, defining the model architecture. Instantiating
a configuration with the defaults will yield a similar configuration to that of the ALBERT
`),jr=s(Zt,"A",{href:!0,rel:!0});var Gm=r(jr);Ng=i(Gm,"albert-xxlarge-v2"),Gm.forEach(t),Sg=i(Zt," architecture."),Zt.forEach(t),Dg=m(Yt),bo=s(Yt,"P",{});var vn=r(bo);Wg=i(vn,"Configuration objects inherit from "),hd=s(vn,"A",{href:!0});var Xm=r(hd);Ug=i(Xm,"PretrainedConfig"),Xm.forEach(t),Bg=i(vn,` and can be used to control the model outputs. Read the
documentation from `),md=s(vn,"A",{href:!0});var Ym=r(md);Rg=i(Ym,"PretrainedConfig"),Ym.forEach(t),Hg=i(vn," for more information."),vn.forEach(t),Qg=m(Yt),y($n.$$.fragment,Yt),Yt.forEach(t),gf=m(o),ko=s(o,"H2",{class:!0});var od=r(ko);An=s(od,"A",{id:!0,class:!0,href:!0});var Zm=r(An);Oc=s(Zm,"SPAN",{});var ef=r(Oc);y(qr.$$.fragment,ef),ef.forEach(t),Zm.forEach(t),Vg=m(od),Nc=s(od,"SPAN",{});var tf=r(Nc);Kg=i(tf,"AlbertTokenizer"),tf.forEach(t),od.forEach(t),_f=m(o),ye=s(o,"DIV",{class:!0});var Ae=r(ye);y(Pr.$$.fragment,Ae),Jg=m(Ae),Cr=s(Ae,"P",{});var nd=r(Cr);Gg=i(nd,"Construct an ALBERT tokenizer. Based on "),Lr=s(nd,"A",{href:!0,rel:!0});var of=r(Lr);Xg=i(of,"SentencePiece"),of.forEach(t),Yg=i(nd,"."),nd.forEach(t),Zg=m(Ae),Ir=s(Ae,"P",{});var sd=r(Ir);e_=i(sd,"This tokenizer inherits from "),fd=s(sd,"A",{href:!0});var nf=r(fd);t_=i(nf,"PreTrainedTokenizer"),nf.forEach(t),o_=i(sd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),sd.forEach(t),n_=m(Ae),Sc=s(Ae,"P",{});var sf=r(Sc);s_=i(sf,"Example:"),sf.forEach(t),r_=m(Ae),y(Fn.$$.fragment,Ae),a_=m(Ae),Or=s(Ae,"P",{});var rd=r(Or);i_=i(rd,"You could still use AlbertTokenizer with the "),ud=s(rd,"A",{href:!0});var rf=r(ud);l_=i(rf,"pipeline()"),rf.forEach(t),d_=i(rd,"\uFF1A"),rd.forEach(t),c_=m(Ae),y(xn.$$.fragment,Ae),p_=m(Ae),y(En.$$.fragment,Ae),h_=m(Ae),to=s(Ae,"DIV",{class:!0});var Tn=r(to);y(Nr.$$.fragment,Tn),m_=m(Tn),Dc=s(Tn,"P",{});var af=r(Dc);f_=i(af,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),af.forEach(t),u_=m(Tn),Sr=s(Tn,"UL",{});var ad=r(Sr);gd=s(ad,"LI",{});var rc=r(gd);g_=i(rc,"single sequence: "),Wc=s(rc,"CODE",{});var lf=r(Wc);__=i(lf,"[CLS] X [SEP]"),lf.forEach(t),rc.forEach(t),b_=m(ad),_d=s(ad,"LI",{});var ac=r(_d);k_=i(ac,"pair of sequences: "),Uc=s(ac,"CODE",{});var df=r(Uc);v_=i(df,"[CLS] A [SEP] B [SEP]"),df.forEach(t),ac.forEach(t),ad.forEach(t),Tn.forEach(t),T_=m(Ae),Mn=s(Ae,"DIV",{class:!0});var id=r(Mn);y(Dr.$$.fragment,id),y_=m(id),Wr=s(id,"P",{});var ld=r(Wr);w_=i(ld,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Bc=s(ld,"CODE",{});var cf=r(Bc);$_=i(cf,"prepare_for_model"),cf.forEach(t),A_=i(ld," method."),ld.forEach(t),id.forEach(t),F_=m(Ae),vt=s(Ae,"DIV",{class:!0});var eo=r(vt);y(Ur.$$.fragment,eo),x_=m(eo),Rc=s(eo,"P",{});var pf=r(Rc);E_=i(pf,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),pf.forEach(t),M_=m(eo),y(zn.$$.fragment,eo),z_=m(eo),vo=s(eo,"P",{});var yn=r(vo);j_=i(yn,"If "),Hc=s(yn,"CODE",{});var hf=r(Hc);q_=i(hf,"token_ids_1"),hf.forEach(t),P_=i(yn," is "),Qc=s(yn,"CODE",{});var mf=r(Qc);C_=i(mf,"None"),mf.forEach(t),L_=i(yn,", this method only returns the first portion of the mask (0s)."),yn.forEach(t),eo.forEach(t),I_=m(Ae),bd=s(Ae,"DIV",{class:!0});var ff=r(bd);y(Br.$$.fragment,ff),ff.forEach(t),Ae.forEach(t),bf=m(o),To=s(o,"H2",{class:!0});var dd=r(To);jn=s(dd,"A",{id:!0,class:!0,href:!0});var NF=r(jn);Vc=s(NF,"SPAN",{});var SF=r(Vc);y(Rr.$$.fragment,SF),SF.forEach(t),NF.forEach(t),O_=m(dd),Kc=s(dd,"SPAN",{});var DF=r(Kc);N_=i(DF,"AlbertTokenizerFast"),DF.forEach(t),dd.forEach(t),kf=m(o),kt=s(o,"DIV",{class:!0});var ar=r(kt);y(Hr.$$.fragment,ar),S_=m(ar),Bt=s(ar,"P",{});var ir=r(Bt);D_=i(ir,"Construct a \u201Cfast\u201D ALBERT tokenizer (backed by HuggingFace\u2019s "),Jc=s(ir,"EM",{});var WF=r(Jc);W_=i(WF,"tokenizers"),WF.forEach(t),U_=i(ir,` library). Based on
`),Qr=s(ir,"A",{href:!0,rel:!0});var UF=r(Qr);B_=i(UF,"Unigram"),UF.forEach(t),R_=i(ir,`. This
tokenizer inherits from `),kd=s(ir,"A",{href:!0});var BF=r(kd);H_=i(BF,"PreTrainedTokenizerFast"),BF.forEach(t),Q_=i(ir,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),ir.forEach(t),V_=m(ar),oo=s(ar,"DIV",{class:!0});var ic=r(oo);y(Vr.$$.fragment,ic),K_=m(ic),Gc=s(ic,"P",{});var RF=r(Gc);J_=i(RF,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),RF.forEach(t),G_=m(ic),Kr=s(ic,"UL",{});var hu=r(Kr);vd=s(hu,"LI",{});var IF=r(vd);X_=i(IF,"single sequence: "),Xc=s(IF,"CODE",{});var HF=r(Xc);Y_=i(HF,"[CLS] X [SEP]"),HF.forEach(t),IF.forEach(t),Z_=m(hu),Td=s(hu,"LI",{});var OF=r(Td);eb=i(OF,"pair of sequences: "),Yc=s(OF,"CODE",{});var QF=r(Yc);tb=i(QF,"[CLS] A [SEP] B [SEP]"),QF.forEach(t),OF.forEach(t),hu.forEach(t),ic.forEach(t),ob=m(ar),Tt=s(ar,"DIV",{class:!0});var lr=r(Tt);y(Jr.$$.fragment,lr),nb=m(lr),Zc=s(lr,"P",{});var VF=r(Zc);sb=i(VF,"Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),VF.forEach(t),rb=m(lr),y(qn.$$.fragment,lr),ab=m(lr),ep=s(lr,"P",{});var KF=r(ep);ib=i(KF,"if token_ids_1 is None, only returns the first portion of the mask (0s)."),KF.forEach(t),lr.forEach(t),ar.forEach(t),vf=m(o),yo=s(o,"H2",{class:!0});var mu=r(yo);Pn=s(mu,"A",{id:!0,class:!0,href:!0});var JF=r(Pn);tp=s(JF,"SPAN",{});var GF=r(tp);y(Gr.$$.fragment,GF),GF.forEach(t),JF.forEach(t),lb=m(mu),op=s(mu,"SPAN",{});var XF=r(op);db=i(XF,"Albert specific outputs"),XF.forEach(t),mu.forEach(t),Tf=m(o),wo=s(o,"DIV",{class:!0});var fu=r(wo);y(Xr.$$.fragment,fu),cb=m(fu),Yr=s(fu,"P",{});var uu=r(Yr);pb=i(uu,"Output type of "),yd=s(uu,"A",{href:!0});var YF=r(yd);hb=i(YF,"AlbertForPreTraining"),YF.forEach(t),mb=i(uu,"."),uu.forEach(t),fu.forEach(t),yf=m(o),$o=s(o,"DIV",{class:!0});var gu=r($o);y(Zr.$$.fragment,gu),fb=m(gu),ea=s(gu,"P",{});var _u=r(ea);ub=i(_u,"Output type of "),wd=s(_u,"A",{href:!0});var ZF=r(wd);gb=i(ZF,"TFAlbertForPreTraining"),ZF.forEach(t),_b=i(_u,"."),_u.forEach(t),gu.forEach(t),wf=m(o),Ao=s(o,"H2",{class:!0});var bu=r(Ao);Cn=s(bu,"A",{id:!0,class:!0,href:!0});var e0=r(Cn);np=s(e0,"SPAN",{});var t0=r(np);y(ta.$$.fragment,t0),t0.forEach(t),e0.forEach(t),bb=m(bu),sp=s(bu,"SPAN",{});var o0=r(sp);kb=i(o0,"AlbertModel"),o0.forEach(t),bu.forEach(t),$f=m(o),Ge=s(o,"DIV",{class:!0});var no=r(Ge);y(oa.$$.fragment,no),vb=m(no),rp=s(no,"P",{});var n0=r(rp);Tb=i(n0,"The bare ALBERT Model transformer outputting raw hidden-states without any specific head on top."),n0.forEach(t),yb=m(no),na=s(no,"P",{});var ku=r(na);wb=i(ku,"This model inherits from "),$d=s(ku,"A",{href:!0});var s0=r($d);$b=i(s0,"PreTrainedModel"),s0.forEach(t),Ab=i(ku,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ku.forEach(t),Fb=m(no),sa=s(no,"P",{});var vu=r(sa);xb=i(vu,"This model is also a PyTorch "),ra=s(vu,"A",{href:!0,rel:!0});var r0=r(ra);Eb=i(r0,"torch.nn.Module"),r0.forEach(t),Mb=i(vu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vu.forEach(t),zb=m(no),yt=s(no,"DIV",{class:!0});var dr=r(yt);y(aa.$$.fragment,dr),jb=m(dr),Fo=s(dr,"P",{});var lc=r(Fo);qb=i(lc,"The "),Ad=s(lc,"A",{href:!0});var a0=r(Ad);Pb=i(a0,"AlbertModel"),a0.forEach(t),Cb=i(lc," forward method, overrides the "),ap=s(lc,"CODE",{});var i0=r(ap);Lb=i(i0,"__call__"),i0.forEach(t),Ib=i(lc," special method."),lc.forEach(t),Ob=m(dr),y(Ln.$$.fragment,dr),Nb=m(dr),y(In.$$.fragment,dr),dr.forEach(t),no.forEach(t),Af=m(o),xo=s(o,"H2",{class:!0});var Tu=r(xo);On=s(Tu,"A",{id:!0,class:!0,href:!0});var l0=r(On);ip=s(l0,"SPAN",{});var d0=r(ip);y(ia.$$.fragment,d0),d0.forEach(t),l0.forEach(t),Sb=m(Tu),lp=s(Tu,"SPAN",{});var c0=r(lp);Db=i(c0,"AlbertForPreTraining"),c0.forEach(t),Tu.forEach(t),Ff=m(o),Xe=s(o,"DIV",{class:!0});var so=r(Xe);y(la.$$.fragment,so),Wb=m(so),Eo=s(so,"P",{});var dc=r(Eo);Ub=i(dc,"Albert Model with two heads on top as done during the pretraining: a "),dp=s(dc,"CODE",{});var p0=r(dp);Bb=i(p0,"masked language modeling"),p0.forEach(t),Rb=i(dc,` head and a
`),cp=s(dc,"CODE",{});var h0=r(cp);Hb=i(h0,"sentence order prediction (classification)"),h0.forEach(t),Qb=i(dc," head."),dc.forEach(t),Vb=m(so),da=s(so,"P",{});var yu=r(da);Kb=i(yu,"This model inherits from "),Fd=s(yu,"A",{href:!0});var m0=r(Fd);Jb=i(m0,"PreTrainedModel"),m0.forEach(t),Gb=i(yu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yu.forEach(t),Xb=m(so),ca=s(so,"P",{});var wu=r(ca);Yb=i(wu,"This model is also a PyTorch "),pa=s(wu,"A",{href:!0,rel:!0});var f0=r(pa);Zb=i(f0,"torch.nn.Module"),f0.forEach(t),ek=i(wu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wu.forEach(t),tk=m(so),wt=s(so,"DIV",{class:!0});var cr=r(wt);y(ha.$$.fragment,cr),ok=m(cr),Mo=s(cr,"P",{});var cc=r(Mo);nk=i(cc,"The "),xd=s(cc,"A",{href:!0});var u0=r(xd);sk=i(u0,"AlbertForPreTraining"),u0.forEach(t),rk=i(cc," forward method, overrides the "),pp=s(cc,"CODE",{});var g0=r(pp);ak=i(g0,"__call__"),g0.forEach(t),ik=i(cc," special method."),cc.forEach(t),lk=m(cr),y(Nn.$$.fragment,cr),dk=m(cr),y(Sn.$$.fragment,cr),cr.forEach(t),so.forEach(t),xf=m(o),zo=s(o,"H2",{class:!0});var $u=r(zo);Dn=s($u,"A",{id:!0,class:!0,href:!0});var _0=r(Dn);hp=s(_0,"SPAN",{});var b0=r(hp);y(ma.$$.fragment,b0),b0.forEach(t),_0.forEach(t),ck=m($u),mp=s($u,"SPAN",{});var k0=r(mp);pk=i(k0,"AlbertForMaskedLM"),k0.forEach(t),$u.forEach(t),Ef=m(o),Ye=s(o,"DIV",{class:!0});var ro=r(Ye);y(fa.$$.fragment,ro),hk=m(ro),ua=s(ro,"P",{});var Au=r(ua);mk=i(Au,"Albert Model with a "),fp=s(Au,"CODE",{});var v0=r(fp);fk=i(v0,"language modeling"),v0.forEach(t),uk=i(Au," head on top."),Au.forEach(t),gk=m(ro),ga=s(ro,"P",{});var Fu=r(ga);_k=i(Fu,"This model inherits from "),Ed=s(Fu,"A",{href:!0});var T0=r(Ed);bk=i(T0,"PreTrainedModel"),T0.forEach(t),kk=i(Fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fu.forEach(t),vk=m(ro),_a=s(ro,"P",{});var xu=r(_a);Tk=i(xu,"This model is also a PyTorch "),ba=s(xu,"A",{href:!0,rel:!0});var y0=r(ba);yk=i(y0,"torch.nn.Module"),y0.forEach(t),wk=i(xu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xu.forEach(t),$k=m(ro),nt=s(ro,"DIV",{class:!0});var ao=r(nt);y(ka.$$.fragment,ao),Ak=m(ao),jo=s(ao,"P",{});var pc=r(jo);Fk=i(pc,"The "),Md=s(pc,"A",{href:!0});var w0=r(Md);xk=i(w0,"AlbertForMaskedLM"),w0.forEach(t),Ek=i(pc," forward method, overrides the "),up=s(pc,"CODE",{});var $0=r(up);Mk=i($0,"__call__"),$0.forEach(t),zk=i(pc," special method."),pc.forEach(t),jk=m(ao),y(Wn.$$.fragment,ao),qk=m(ao),y(Un.$$.fragment,ao),Pk=m(ao),y(Bn.$$.fragment,ao),ao.forEach(t),ro.forEach(t),Mf=m(o),qo=s(o,"H2",{class:!0});var Eu=r(qo);Rn=s(Eu,"A",{id:!0,class:!0,href:!0});var A0=r(Rn);gp=s(A0,"SPAN",{});var F0=r(gp);y(va.$$.fragment,F0),F0.forEach(t),A0.forEach(t),Ck=m(Eu),_p=s(Eu,"SPAN",{});var x0=r(_p);Lk=i(x0,"AlbertForSequenceClassification"),x0.forEach(t),Eu.forEach(t),zf=m(o),Ze=s(o,"DIV",{class:!0});var io=r(Ze);y(Ta.$$.fragment,io),Ik=m(io),bp=s(io,"P",{});var E0=r(bp);Ok=i(E0,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),E0.forEach(t),Nk=m(io),ya=s(io,"P",{});var Mu=r(ya);Sk=i(Mu,"This model inherits from "),zd=s(Mu,"A",{href:!0});var M0=r(zd);Dk=i(M0,"PreTrainedModel"),M0.forEach(t),Wk=i(Mu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mu.forEach(t),Uk=m(io),wa=s(io,"P",{});var zu=r(wa);Bk=i(zu,"This model is also a PyTorch "),$a=s(zu,"A",{href:!0,rel:!0});var z0=r($a);Rk=i(z0,"torch.nn.Module"),z0.forEach(t),Hk=i(zu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zu.forEach(t),Qk=m(io),Ue=s(io,"DIV",{class:!0});var ct=r(Ue);y(Aa.$$.fragment,ct),Vk=m(ct),Po=s(ct,"P",{});var hc=r(Po);Kk=i(hc,"The "),jd=s(hc,"A",{href:!0});var j0=r(jd);Jk=i(j0,"AlbertForSequenceClassification"),j0.forEach(t),Gk=i(hc," forward method, overrides the "),kp=s(hc,"CODE",{});var q0=r(kp);Xk=i(q0,"__call__"),q0.forEach(t),Yk=i(hc," special method."),hc.forEach(t),Zk=m(ct),y(Hn.$$.fragment,ct),ev=m(ct),y(Qn.$$.fragment,ct),tv=m(ct),y(Vn.$$.fragment,ct),ov=m(ct),y(Kn.$$.fragment,ct),nv=m(ct),y(Jn.$$.fragment,ct),ct.forEach(t),io.forEach(t),jf=m(o),Co=s(o,"H2",{class:!0});var ju=r(Co);Gn=s(ju,"A",{id:!0,class:!0,href:!0});var P0=r(Gn);vp=s(P0,"SPAN",{});var C0=r(vp);y(Fa.$$.fragment,C0),C0.forEach(t),P0.forEach(t),sv=m(ju),Tp=s(ju,"SPAN",{});var L0=r(Tp);rv=i(L0,"AlbertForMultipleChoice"),L0.forEach(t),ju.forEach(t),qf=m(o),et=s(o,"DIV",{class:!0});var lo=r(et);y(xa.$$.fragment,lo),av=m(lo),yp=s(lo,"P",{});var I0=r(yp);iv=i(I0,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),I0.forEach(t),lv=m(lo),Ea=s(lo,"P",{});var qu=r(Ea);dv=i(qu,"This model inherits from "),qd=s(qu,"A",{href:!0});var O0=r(qd);cv=i(O0,"PreTrainedModel"),O0.forEach(t),pv=i(qu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qu.forEach(t),hv=m(lo),Ma=s(lo,"P",{});var Pu=r(Ma);mv=i(Pu,"This model is also a PyTorch "),za=s(Pu,"A",{href:!0,rel:!0});var N0=r(za);fv=i(N0,"torch.nn.Module"),N0.forEach(t),uv=i(Pu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pu.forEach(t),gv=m(lo),$t=s(lo,"DIV",{class:!0});var pr=r($t);y(ja.$$.fragment,pr),_v=m(pr),Lo=s(pr,"P",{});var mc=r(Lo);bv=i(mc,"The "),Pd=s(mc,"A",{href:!0});var S0=r(Pd);kv=i(S0,"AlbertForMultipleChoice"),S0.forEach(t),vv=i(mc," forward method, overrides the "),wp=s(mc,"CODE",{});var D0=r(wp);Tv=i(D0,"__call__"),D0.forEach(t),yv=i(mc," special method."),mc.forEach(t),wv=m(pr),y(Xn.$$.fragment,pr),$v=m(pr),y(Yn.$$.fragment,pr),pr.forEach(t),lo.forEach(t),Pf=m(o),Io=s(o,"H2",{class:!0});var Cu=r(Io);Zn=s(Cu,"A",{id:!0,class:!0,href:!0});var W0=r(Zn);$p=s(W0,"SPAN",{});var U0=r($p);y(qa.$$.fragment,U0),U0.forEach(t),W0.forEach(t),Av=m(Cu),Ap=s(Cu,"SPAN",{});var B0=r(Ap);Fv=i(B0,"AlbertForTokenClassification"),B0.forEach(t),Cu.forEach(t),Cf=m(o),tt=s(o,"DIV",{class:!0});var co=r(tt);y(Pa.$$.fragment,co),xv=m(co),Fp=s(co,"P",{});var R0=r(Fp);Ev=i(R0,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),R0.forEach(t),Mv=m(co),Ca=s(co,"P",{});var Lu=r(Ca);zv=i(Lu,"This model inherits from "),Cd=s(Lu,"A",{href:!0});var H0=r(Cd);jv=i(H0,"PreTrainedModel"),H0.forEach(t),qv=i(Lu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lu.forEach(t),Pv=m(co),La=s(co,"P",{});var Iu=r(La);Cv=i(Iu,"This model is also a PyTorch "),Ia=s(Iu,"A",{href:!0,rel:!0});var Q0=r(Ia);Lv=i(Q0,"torch.nn.Module"),Q0.forEach(t),Iv=i(Iu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Iu.forEach(t),Ov=m(co),st=s(co,"DIV",{class:!0});var po=r(st);y(Oa.$$.fragment,po),Nv=m(po),Oo=s(po,"P",{});var fc=r(Oo);Sv=i(fc,"The "),Ld=s(fc,"A",{href:!0});var V0=r(Ld);Dv=i(V0,"AlbertForTokenClassification"),V0.forEach(t),Wv=i(fc," forward method, overrides the "),xp=s(fc,"CODE",{});var K0=r(xp);Uv=i(K0,"__call__"),K0.forEach(t),Bv=i(fc," special method."),fc.forEach(t),Rv=m(po),y(es.$$.fragment,po),Hv=m(po),y(ts.$$.fragment,po),Qv=m(po),y(os.$$.fragment,po),po.forEach(t),co.forEach(t),Lf=m(o),No=s(o,"H2",{class:!0});var Ou=r(No);ns=s(Ou,"A",{id:!0,class:!0,href:!0});var J0=r(ns);Ep=s(J0,"SPAN",{});var G0=r(Ep);y(Na.$$.fragment,G0),G0.forEach(t),J0.forEach(t),Vv=m(Ou),Mp=s(Ou,"SPAN",{});var X0=r(Mp);Kv=i(X0,"AlbertForQuestionAnswering"),X0.forEach(t),Ou.forEach(t),If=m(o),ot=s(o,"DIV",{class:!0});var ho=r(ot);y(Sa.$$.fragment,ho),Jv=m(ho),So=s(ho,"P",{});var uc=r(So);Gv=i(uc,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),zp=s(uc,"CODE",{});var Y0=r(zp);Xv=i(Y0,"span start logits"),Y0.forEach(t),Yv=i(uc," and "),jp=s(uc,"CODE",{});var Z0=r(jp);Zv=i(Z0,"span end logits"),Z0.forEach(t),eT=i(uc,")."),uc.forEach(t),tT=m(ho),Da=s(ho,"P",{});var Nu=r(Da);oT=i(Nu,"This model inherits from "),Id=s(Nu,"A",{href:!0});var ex=r(Id);nT=i(ex,"PreTrainedModel"),ex.forEach(t),sT=i(Nu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nu.forEach(t),rT=m(ho),Wa=s(ho,"P",{});var Su=r(Wa);aT=i(Su,"This model is also a PyTorch "),Ua=s(Su,"A",{href:!0,rel:!0});var tx=r(Ua);iT=i(tx,"torch.nn.Module"),tx.forEach(t),lT=i(Su,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Su.forEach(t),dT=m(ho),rt=s(ho,"DIV",{class:!0});var mo=r(rt);y(Ba.$$.fragment,mo),cT=m(mo),Do=s(mo,"P",{});var gc=r(Do);pT=i(gc,"The "),Od=s(gc,"A",{href:!0});var ox=r(Od);hT=i(ox,"AlbertForQuestionAnswering"),ox.forEach(t),mT=i(gc," forward method, overrides the "),qp=s(gc,"CODE",{});var nx=r(qp);fT=i(nx,"__call__"),nx.forEach(t),uT=i(gc," special method."),gc.forEach(t),gT=m(mo),y(ss.$$.fragment,mo),_T=m(mo),y(rs.$$.fragment,mo),bT=m(mo),y(as.$$.fragment,mo),mo.forEach(t),ho.forEach(t),Of=m(o),Wo=s(o,"H2",{class:!0});var Du=r(Wo);is=s(Du,"A",{id:!0,class:!0,href:!0});var sx=r(is);Pp=s(sx,"SPAN",{});var rx=r(Pp);y(Ra.$$.fragment,rx),rx.forEach(t),sx.forEach(t),kT=m(Du),Cp=s(Du,"SPAN",{});var ax=r(Cp);vT=i(ax,"TFAlbertModel"),ax.forEach(t),Du.forEach(t),Nf=m(o),Be=s(o,"DIV",{class:!0});var Lt=r(Be);y(Ha.$$.fragment,Lt),TT=m(Lt),Lp=s(Lt,"P",{});var ix=r(Lp);yT=i(ix,"The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),ix.forEach(t),wT=m(Lt),Qa=s(Lt,"P",{});var Wu=r(Qa);$T=i(Wu,"This model inherits from "),Nd=s(Wu,"A",{href:!0});var lx=r(Nd);AT=i(lx,"TFPreTrainedModel"),lx.forEach(t),FT=i(Wu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wu.forEach(t),xT=m(Lt),Va=s(Lt,"P",{});var Uu=r(Va);ET=i(Uu,"This model is also a "),Ka=s(Uu,"A",{href:!0,rel:!0});var dx=r(Ka);MT=i(dx,"tf.keras.Model"),dx.forEach(t),zT=i(Uu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Uu.forEach(t),jT=m(Lt),y(ls.$$.fragment,Lt),qT=m(Lt),At=s(Lt,"DIV",{class:!0});var hr=r(At);y(Ja.$$.fragment,hr),PT=m(hr),Uo=s(hr,"P",{});var _c=r(Uo);CT=i(_c,"The "),Sd=s(_c,"A",{href:!0});var cx=r(Sd);LT=i(cx,"TFAlbertModel"),cx.forEach(t),IT=i(_c," forward method, overrides the "),Ip=s(_c,"CODE",{});var px=r(Ip);OT=i(px,"__call__"),px.forEach(t),NT=i(_c," special method."),_c.forEach(t),ST=m(hr),y(ds.$$.fragment,hr),DT=m(hr),y(cs.$$.fragment,hr),hr.forEach(t),Lt.forEach(t),Sf=m(o),Bo=s(o,"H2",{class:!0});var Bu=r(Bo);ps=s(Bu,"A",{id:!0,class:!0,href:!0});var hx=r(ps);Op=s(hx,"SPAN",{});var mx=r(Op);y(Ga.$$.fragment,mx),mx.forEach(t),hx.forEach(t),WT=m(Bu),Np=s(Bu,"SPAN",{});var fx=r(Np);UT=i(fx,"TFAlbertForPreTraining"),fx.forEach(t),Bu.forEach(t),Df=m(o),Re=s(o,"DIV",{class:!0});var It=r(Re);y(Xa.$$.fragment,It),BT=m(It),Ro=s(It,"P",{});var bc=r(Ro);RT=i(bc,"Albert Model with two heads on top for pretraining: a "),Sp=s(bc,"CODE",{});var ux=r(Sp);HT=i(ux,"masked language modeling"),ux.forEach(t),QT=i(bc," head and a "),Dp=s(bc,"CODE",{});var gx=r(Dp);VT=i(gx,"sentence order prediction"),gx.forEach(t),KT=i(bc," (classification) head."),bc.forEach(t),JT=m(It),Ya=s(It,"P",{});var Ru=r(Ya);GT=i(Ru,"This model inherits from "),Dd=s(Ru,"A",{href:!0});var _x=r(Dd);XT=i(_x,"TFPreTrainedModel"),_x.forEach(t),YT=i(Ru,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ru.forEach(t),ZT=m(It),Za=s(It,"P",{});var Hu=r(Za);e1=i(Hu,"This model is also a "),ei=s(Hu,"A",{href:!0,rel:!0});var bx=r(ei);t1=i(bx,"tf.keras.Model"),bx.forEach(t),o1=i(Hu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hu.forEach(t),n1=m(It),y(hs.$$.fragment,It),s1=m(It),Ft=s(It,"DIV",{class:!0});var mr=r(Ft);y(ti.$$.fragment,mr),r1=m(mr),Ho=s(mr,"P",{});var kc=r(Ho);a1=i(kc,"The "),Wd=s(kc,"A",{href:!0});var kx=r(Wd);i1=i(kx,"TFAlbertForPreTraining"),kx.forEach(t),l1=i(kc," forward method, overrides the "),Wp=s(kc,"CODE",{});var vx=r(Wp);d1=i(vx,"__call__"),vx.forEach(t),c1=i(kc," special method."),kc.forEach(t),p1=m(mr),y(ms.$$.fragment,mr),h1=m(mr),y(fs.$$.fragment,mr),mr.forEach(t),It.forEach(t),Wf=m(o),Qo=s(o,"H2",{class:!0});var Qu=r(Qo);us=s(Qu,"A",{id:!0,class:!0,href:!0});var Tx=r(us);Up=s(Tx,"SPAN",{});var yx=r(Up);y(oi.$$.fragment,yx),yx.forEach(t),Tx.forEach(t),m1=m(Qu),Bp=s(Qu,"SPAN",{});var wx=r(Bp);f1=i(wx,"TFAlbertForMaskedLM"),wx.forEach(t),Qu.forEach(t),Uf=m(o),He=s(o,"DIV",{class:!0});var Ot=r(He);y(ni.$$.fragment,Ot),u1=m(Ot),si=s(Ot,"P",{});var Vu=r(si);g1=i(Vu,"Albert Model with a "),Rp=s(Vu,"CODE",{});var $x=r(Rp);_1=i($x,"language modeling"),$x.forEach(t),b1=i(Vu," head on top."),Vu.forEach(t),k1=m(Ot),ri=s(Ot,"P",{});var Ku=r(ri);v1=i(Ku,"This model inherits from "),Ud=s(Ku,"A",{href:!0});var Ax=r(Ud);T1=i(Ax,"TFPreTrainedModel"),Ax.forEach(t),y1=i(Ku,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ku.forEach(t),w1=m(Ot),ai=s(Ot,"P",{});var Ju=r(ai);$1=i(Ju,"This model is also a "),ii=s(Ju,"A",{href:!0,rel:!0});var Fx=r(ii);A1=i(Fx,"tf.keras.Model"),Fx.forEach(t),F1=i(Ju,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ju.forEach(t),x1=m(Ot),y(gs.$$.fragment,Ot),E1=m(Ot),at=s(Ot,"DIV",{class:!0});var fo=r(at);y(li.$$.fragment,fo),M1=m(fo),Vo=s(fo,"P",{});var vc=r(Vo);z1=i(vc,"The "),Bd=s(vc,"A",{href:!0});var xx=r(Bd);j1=i(xx,"TFAlbertForMaskedLM"),xx.forEach(t),q1=i(vc," forward method, overrides the "),Hp=s(vc,"CODE",{});var Ex=r(Hp);P1=i(Ex,"__call__"),Ex.forEach(t),C1=i(vc," special method."),vc.forEach(t),L1=m(fo),y(_s.$$.fragment,fo),I1=m(fo),y(bs.$$.fragment,fo),O1=m(fo),y(ks.$$.fragment,fo),fo.forEach(t),Ot.forEach(t),Bf=m(o),Ko=s(o,"H2",{class:!0});var Gu=r(Ko);vs=s(Gu,"A",{id:!0,class:!0,href:!0});var Mx=r(vs);Qp=s(Mx,"SPAN",{});var zx=r(Qp);y(di.$$.fragment,zx),zx.forEach(t),Mx.forEach(t),N1=m(Gu),Vp=s(Gu,"SPAN",{});var jx=r(Vp);S1=i(jx,"TFAlbertForSequenceClassification"),jx.forEach(t),Gu.forEach(t),Rf=m(o),Qe=s(o,"DIV",{class:!0});var Nt=r(Qe);y(ci.$$.fragment,Nt),D1=m(Nt),Kp=s(Nt,"P",{});var qx=r(Kp);W1=i(qx,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),qx.forEach(t),U1=m(Nt),pi=s(Nt,"P",{});var Xu=r(pi);B1=i(Xu,"This model inherits from "),Rd=s(Xu,"A",{href:!0});var Px=r(Rd);R1=i(Px,"TFPreTrainedModel"),Px.forEach(t),H1=i(Xu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xu.forEach(t),Q1=m(Nt),hi=s(Nt,"P",{});var Yu=r(hi);V1=i(Yu,"This model is also a "),mi=s(Yu,"A",{href:!0,rel:!0});var Cx=r(mi);K1=i(Cx,"tf.keras.Model"),Cx.forEach(t),J1=i(Yu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yu.forEach(t),G1=m(Nt),y(Ts.$$.fragment,Nt),X1=m(Nt),it=s(Nt,"DIV",{class:!0});var uo=r(it);y(fi.$$.fragment,uo),Y1=m(uo),Jo=s(uo,"P",{});var Tc=r(Jo);Z1=i(Tc,"The "),Hd=s(Tc,"A",{href:!0});var Lx=r(Hd);ey=i(Lx,"TFAlbertForSequenceClassification"),Lx.forEach(t),ty=i(Tc," forward method, overrides the "),Jp=s(Tc,"CODE",{});var Ix=r(Jp);oy=i(Ix,"__call__"),Ix.forEach(t),ny=i(Tc," special method."),Tc.forEach(t),sy=m(uo),y(ys.$$.fragment,uo),ry=m(uo),y(ws.$$.fragment,uo),ay=m(uo),y($s.$$.fragment,uo),uo.forEach(t),Nt.forEach(t),Hf=m(o),Go=s(o,"H2",{class:!0});var Zu=r(Go);As=s(Zu,"A",{id:!0,class:!0,href:!0});var Ox=r(As);Gp=s(Ox,"SPAN",{});var Nx=r(Gp);y(ui.$$.fragment,Nx),Nx.forEach(t),Ox.forEach(t),iy=m(Zu),Xp=s(Zu,"SPAN",{});var Sx=r(Xp);ly=i(Sx,"TFAlbertForMultipleChoice"),Sx.forEach(t),Zu.forEach(t),Qf=m(o),Ve=s(o,"DIV",{class:!0});var St=r(Ve);y(gi.$$.fragment,St),dy=m(St),Yp=s(St,"P",{});var Dx=r(Yp);cy=i(Dx,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Dx.forEach(t),py=m(St),_i=s(St,"P",{});var eg=r(_i);hy=i(eg,"This model inherits from "),Qd=s(eg,"A",{href:!0});var Wx=r(Qd);my=i(Wx,"TFPreTrainedModel"),Wx.forEach(t),fy=i(eg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eg.forEach(t),uy=m(St),bi=s(St,"P",{});var tg=r(bi);gy=i(tg,"This model is also a "),ki=s(tg,"A",{href:!0,rel:!0});var Ux=r(ki);_y=i(Ux,"tf.keras.Model"),Ux.forEach(t),by=i(tg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tg.forEach(t),ky=m(St),y(Fs.$$.fragment,St),vy=m(St),xt=s(St,"DIV",{class:!0});var fr=r(xt);y(vi.$$.fragment,fr),Ty=m(fr),Xo=s(fr,"P",{});var yc=r(Xo);yy=i(yc,"The "),Vd=s(yc,"A",{href:!0});var Bx=r(Vd);wy=i(Bx,"TFAlbertForMultipleChoice"),Bx.forEach(t),$y=i(yc," forward method, overrides the "),Zp=s(yc,"CODE",{});var Rx=r(Zp);Ay=i(Rx,"__call__"),Rx.forEach(t),Fy=i(yc," special method."),yc.forEach(t),xy=m(fr),y(xs.$$.fragment,fr),Ey=m(fr),y(Es.$$.fragment,fr),fr.forEach(t),St.forEach(t),Vf=m(o),Yo=s(o,"H2",{class:!0});var og=r(Yo);Ms=s(og,"A",{id:!0,class:!0,href:!0});var Hx=r(Ms);eh=s(Hx,"SPAN",{});var Qx=r(eh);y(Ti.$$.fragment,Qx),Qx.forEach(t),Hx.forEach(t),My=m(og),th=s(og,"SPAN",{});var Vx=r(th);zy=i(Vx,"TFAlbertForTokenClassification"),Vx.forEach(t),og.forEach(t),Kf=m(o),Ke=s(o,"DIV",{class:!0});var Dt=r(Ke);y(yi.$$.fragment,Dt),jy=m(Dt),oh=s(Dt,"P",{});var Kx=r(oh);qy=i(Kx,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Kx.forEach(t),Py=m(Dt),wi=s(Dt,"P",{});var ng=r(wi);Cy=i(ng,"This model inherits from "),Kd=s(ng,"A",{href:!0});var Jx=r(Kd);Ly=i(Jx,"TFPreTrainedModel"),Jx.forEach(t),Iy=i(ng,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ng.forEach(t),Oy=m(Dt),$i=s(Dt,"P",{});var sg=r($i);Ny=i(sg,"This model is also a "),Ai=s(sg,"A",{href:!0,rel:!0});var Gx=r(Ai);Sy=i(Gx,"tf.keras.Model"),Gx.forEach(t),Dy=i(sg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sg.forEach(t),Wy=m(Dt),y(zs.$$.fragment,Dt),Uy=m(Dt),lt=s(Dt,"DIV",{class:!0});var go=r(lt);y(Fi.$$.fragment,go),By=m(go),Zo=s(go,"P",{});var wc=r(Zo);Ry=i(wc,"The "),Jd=s(wc,"A",{href:!0});var Xx=r(Jd);Hy=i(Xx,"TFAlbertForTokenClassification"),Xx.forEach(t),Qy=i(wc," forward method, overrides the "),nh=s(wc,"CODE",{});var Yx=r(nh);Vy=i(Yx,"__call__"),Yx.forEach(t),Ky=i(wc," special method."),wc.forEach(t),Jy=m(go),y(js.$$.fragment,go),Gy=m(go),y(qs.$$.fragment,go),Xy=m(go),y(Ps.$$.fragment,go),go.forEach(t),Dt.forEach(t),Jf=m(o),en=s(o,"H2",{class:!0});var rg=r(en);Cs=s(rg,"A",{id:!0,class:!0,href:!0});var Zx=r(Cs);sh=s(Zx,"SPAN",{});var e7=r(sh);y(xi.$$.fragment,e7),e7.forEach(t),Zx.forEach(t),Yy=m(rg),rh=s(rg,"SPAN",{});var t7=r(rh);Zy=i(t7,"TFAlbertForQuestionAnswering"),t7.forEach(t),rg.forEach(t),Gf=m(o),Je=s(o,"DIV",{class:!0});var Wt=r(Je);y(Ei.$$.fragment,Wt),ew=m(Wt),tn=s(Wt,"P",{});var $c=r(tn);tw=i($c,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ah=s($c,"CODE",{});var o7=r(ah);ow=i(o7,"span start logits"),o7.forEach(t),nw=i($c," and "),ih=s($c,"CODE",{});var n7=r(ih);sw=i(n7,"span end logits"),n7.forEach(t),rw=i($c,")."),$c.forEach(t),aw=m(Wt),Mi=s(Wt,"P",{});var ag=r(Mi);iw=i(ag,"This model inherits from "),Gd=s(ag,"A",{href:!0});var s7=r(Gd);lw=i(s7,"TFPreTrainedModel"),s7.forEach(t),dw=i(ag,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ag.forEach(t),cw=m(Wt),zi=s(Wt,"P",{});var ig=r(zi);pw=i(ig,"This model is also a "),ji=s(ig,"A",{href:!0,rel:!0});var r7=r(ji);hw=i(r7,"tf.keras.Model"),r7.forEach(t),mw=i(ig,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ig.forEach(t),fw=m(Wt),y(Ls.$$.fragment,Wt),uw=m(Wt),dt=s(Wt,"DIV",{class:!0});var _o=r(dt);y(qi.$$.fragment,_o),gw=m(_o),on=s(_o,"P",{});var Ac=r(on);_w=i(Ac,"The "),Xd=s(Ac,"A",{href:!0});var a7=r(Xd);bw=i(a7,"TFAlbertForQuestionAnswering"),a7.forEach(t),kw=i(Ac," forward method, overrides the "),lh=s(Ac,"CODE",{});var i7=r(lh);vw=i(i7,"__call__"),i7.forEach(t),Tw=i(Ac," special method."),Ac.forEach(t),yw=m(_o),y(Is.$$.fragment,_o),ww=m(_o),y(Os.$$.fragment,_o),$w=m(_o),y(Ns.$$.fragment,_o),_o.forEach(t),Wt.forEach(t),Xf=m(o),nn=s(o,"H2",{class:!0});var lg=r(nn);Ss=s(lg,"A",{id:!0,class:!0,href:!0});var l7=r(Ss);dh=s(l7,"SPAN",{});var d7=r(dh);y(Pi.$$.fragment,d7),d7.forEach(t),l7.forEach(t),Aw=m(lg),ch=s(lg,"SPAN",{});var c7=r(ch);Fw=i(c7,"FlaxAlbertModel"),c7.forEach(t),lg.forEach(t),Yf=m(o),Le=s(o,"DIV",{class:!0});var pt=r(Le);y(Ci.$$.fragment,pt),xw=m(pt),ph=s(pt,"P",{});var p7=r(ph);Ew=i(p7,"The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),p7.forEach(t),Mw=m(pt),Li=s(pt,"P",{});var dg=r(Li);zw=i(dg,"This model inherits from "),Yd=s(dg,"A",{href:!0});var h7=r(Yd);jw=i(h7,"FlaxPreTrainedModel"),h7.forEach(t),qw=i(dg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),dg.forEach(t),Pw=m(pt),Ii=s(pt,"P",{});var cg=r(Ii);Cw=i(cg,"This model is also a Flax Linen "),Oi=s(cg,"A",{href:!0,rel:!0});var m7=r(Oi);Lw=i(m7,"flax.linen.Module"),m7.forEach(t),Iw=i(cg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cg.forEach(t),Ow=m(pt),hh=s(pt,"P",{});var f7=r(hh);Nw=i(f7,"Finally, this model supports inherent JAX features such as:"),f7.forEach(t),Sw=m(pt),Rt=s(pt,"UL",{});var ur=r(Rt);mh=s(ur,"LI",{});var u7=r(mh);Ni=s(u7,"A",{href:!0,rel:!0});var g7=r(Ni);Dw=i(g7,"Just-In-Time (JIT) compilation"),g7.forEach(t),u7.forEach(t),Ww=m(ur),fh=s(ur,"LI",{});var _7=r(fh);Si=s(_7,"A",{href:!0,rel:!0});var b7=r(Si);Uw=i(b7,"Automatic Differentiation"),b7.forEach(t),_7.forEach(t),Bw=m(ur),uh=s(ur,"LI",{});var k7=r(uh);Di=s(k7,"A",{href:!0,rel:!0});var v7=r(Di);Rw=i(v7,"Vectorization"),v7.forEach(t),k7.forEach(t),Hw=m(ur),gh=s(ur,"LI",{});var T7=r(gh);Wi=s(T7,"A",{href:!0,rel:!0});var y7=r(Wi);Qw=i(y7,"Parallelization"),y7.forEach(t),T7.forEach(t),ur.forEach(t),Vw=m(pt),Et=s(pt,"DIV",{class:!0});var gr=r(Et);y(Ui.$$.fragment,gr),Kw=m(gr),sn=s(gr,"P",{});var Fc=r(sn);Jw=i(Fc,"The "),_h=s(Fc,"CODE",{});var w7=r(_h);Gw=i(w7,"FlaxAlbertPreTrainedModel"),w7.forEach(t),Xw=i(Fc," forward method, overrides the "),bh=s(Fc,"CODE",{});var $7=r(bh);Yw=i($7,"__call__"),$7.forEach(t),Zw=i(Fc," special method."),Fc.forEach(t),e$=m(gr),y(Ds.$$.fragment,gr),t$=m(gr),y(Ws.$$.fragment,gr),gr.forEach(t),pt.forEach(t),Zf=m(o),rn=s(o,"H2",{class:!0});var pg=r(rn);Us=s(pg,"A",{id:!0,class:!0,href:!0});var A7=r(Us);kh=s(A7,"SPAN",{});var F7=r(kh);y(Bi.$$.fragment,F7),F7.forEach(t),A7.forEach(t),o$=m(pg),vh=s(pg,"SPAN",{});var x7=r(vh);n$=i(x7,"FlaxAlbertForPreTraining"),x7.forEach(t),pg.forEach(t),eu=m(o),Ie=s(o,"DIV",{class:!0});var ht=r(Ie);y(Ri.$$.fragment,ht),s$=m(ht),an=s(ht,"P",{});var xc=r(an);r$=i(xc,"Albert Model with two heads on top as done during the pretraining: a "),Th=s(xc,"CODE",{});var E7=r(Th);a$=i(E7,"masked language modeling"),E7.forEach(t),i$=i(xc,` head and a
`),yh=s(xc,"CODE",{});var M7=r(yh);l$=i(M7,"sentence order prediction (classification)"),M7.forEach(t),d$=i(xc," head."),xc.forEach(t),c$=m(ht),Hi=s(ht,"P",{});var hg=r(Hi);p$=i(hg,"This model inherits from "),Zd=s(hg,"A",{href:!0});var z7=r(Zd);h$=i(z7,"FlaxPreTrainedModel"),z7.forEach(t),m$=i(hg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hg.forEach(t),f$=m(ht),Qi=s(ht,"P",{});var mg=r(Qi);u$=i(mg,"This model is also a Flax Linen "),Vi=s(mg,"A",{href:!0,rel:!0});var j7=r(Vi);g$=i(j7,"flax.linen.Module"),j7.forEach(t),_$=i(mg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),mg.forEach(t),b$=m(ht),wh=s(ht,"P",{});var q7=r(wh);k$=i(q7,"Finally, this model supports inherent JAX features such as:"),q7.forEach(t),v$=m(ht),Ht=s(ht,"UL",{});var _r=r(Ht);$h=s(_r,"LI",{});var P7=r($h);Ki=s(P7,"A",{href:!0,rel:!0});var C7=r(Ki);T$=i(C7,"Just-In-Time (JIT) compilation"),C7.forEach(t),P7.forEach(t),y$=m(_r),Ah=s(_r,"LI",{});var L7=r(Ah);Ji=s(L7,"A",{href:!0,rel:!0});var I7=r(Ji);w$=i(I7,"Automatic Differentiation"),I7.forEach(t),L7.forEach(t),$$=m(_r),Fh=s(_r,"LI",{});var O7=r(Fh);Gi=s(O7,"A",{href:!0,rel:!0});var N7=r(Gi);A$=i(N7,"Vectorization"),N7.forEach(t),O7.forEach(t),F$=m(_r),xh=s(_r,"LI",{});var S7=r(xh);Xi=s(S7,"A",{href:!0,rel:!0});var D7=r(Xi);x$=i(D7,"Parallelization"),D7.forEach(t),S7.forEach(t),_r.forEach(t),E$=m(ht),Mt=s(ht,"DIV",{class:!0});var br=r(Mt);y(Yi.$$.fragment,br),M$=m(br),ln=s(br,"P",{});var Ec=r(ln);z$=i(Ec,"The "),Eh=s(Ec,"CODE",{});var W7=r(Eh);j$=i(W7,"FlaxAlbertPreTrainedModel"),W7.forEach(t),q$=i(Ec," forward method, overrides the "),Mh=s(Ec,"CODE",{});var U7=r(Mh);P$=i(U7,"__call__"),U7.forEach(t),C$=i(Ec," special method."),Ec.forEach(t),L$=m(br),y(Bs.$$.fragment,br),I$=m(br),y(Rs.$$.fragment,br),br.forEach(t),ht.forEach(t),tu=m(o),dn=s(o,"H2",{class:!0});var fg=r(dn);Hs=s(fg,"A",{id:!0,class:!0,href:!0});var B7=r(Hs);zh=s(B7,"SPAN",{});var R7=r(zh);y(Zi.$$.fragment,R7),R7.forEach(t),B7.forEach(t),O$=m(fg),jh=s(fg,"SPAN",{});var H7=r(jh);N$=i(H7,"FlaxAlbertForMaskedLM"),H7.forEach(t),fg.forEach(t),ou=m(o),Oe=s(o,"DIV",{class:!0});var mt=r(Oe);y(el.$$.fragment,mt),S$=m(mt),tl=s(mt,"P",{});var ug=r(tl);D$=i(ug,"Albert Model with a "),qh=s(ug,"CODE",{});var Q7=r(qh);W$=i(Q7,"language modeling"),Q7.forEach(t),U$=i(ug," head on top."),ug.forEach(t),B$=m(mt),ol=s(mt,"P",{});var gg=r(ol);R$=i(gg,"This model inherits from "),ec=s(gg,"A",{href:!0});var V7=r(ec);H$=i(V7,"FlaxPreTrainedModel"),V7.forEach(t),Q$=i(gg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),gg.forEach(t),V$=m(mt),nl=s(mt,"P",{});var _g=r(nl);K$=i(_g,"This model is also a Flax Linen "),sl=s(_g,"A",{href:!0,rel:!0});var K7=r(sl);J$=i(K7,"flax.linen.Module"),K7.forEach(t),G$=i(_g,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_g.forEach(t),X$=m(mt),Ph=s(mt,"P",{});var J7=r(Ph);Y$=i(J7,"Finally, this model supports inherent JAX features such as:"),J7.forEach(t),Z$=m(mt),Qt=s(mt,"UL",{});var kr=r(Qt);Ch=s(kr,"LI",{});var G7=r(Ch);rl=s(G7,"A",{href:!0,rel:!0});var X7=r(rl);e2=i(X7,"Just-In-Time (JIT) compilation"),X7.forEach(t),G7.forEach(t),t2=m(kr),Lh=s(kr,"LI",{});var Y7=r(Lh);al=s(Y7,"A",{href:!0,rel:!0});var Z7=r(al);o2=i(Z7,"Automatic Differentiation"),Z7.forEach(t),Y7.forEach(t),n2=m(kr),Ih=s(kr,"LI",{});var eE=r(Ih);il=s(eE,"A",{href:!0,rel:!0});var tE=r(il);s2=i(tE,"Vectorization"),tE.forEach(t),eE.forEach(t),r2=m(kr),Oh=s(kr,"LI",{});var oE=r(Oh);ll=s(oE,"A",{href:!0,rel:!0});var nE=r(ll);a2=i(nE,"Parallelization"),nE.forEach(t),oE.forEach(t),kr.forEach(t),i2=m(mt),zt=s(mt,"DIV",{class:!0});var vr=r(zt);y(dl.$$.fragment,vr),l2=m(vr),cn=s(vr,"P",{});var Mc=r(cn);d2=i(Mc,"The "),Nh=s(Mc,"CODE",{});var sE=r(Nh);c2=i(sE,"FlaxAlbertPreTrainedModel"),sE.forEach(t),p2=i(Mc," forward method, overrides the "),Sh=s(Mc,"CODE",{});var rE=r(Sh);h2=i(rE,"__call__"),rE.forEach(t),m2=i(Mc," special method."),Mc.forEach(t),f2=m(vr),y(Qs.$$.fragment,vr),u2=m(vr),y(Vs.$$.fragment,vr),vr.forEach(t),mt.forEach(t),nu=m(o),pn=s(o,"H2",{class:!0});var bg=r(pn);Ks=s(bg,"A",{id:!0,class:!0,href:!0});var aE=r(Ks);Dh=s(aE,"SPAN",{});var iE=r(Dh);y(cl.$$.fragment,iE),iE.forEach(t),aE.forEach(t),g2=m(bg),Wh=s(bg,"SPAN",{});var lE=r(Wh);_2=i(lE,"FlaxAlbertForSequenceClassification"),lE.forEach(t),bg.forEach(t),su=m(o),Ne=s(o,"DIV",{class:!0});var ft=r(Ne);y(pl.$$.fragment,ft),b2=m(ft),Uh=s(ft,"P",{});var dE=r(Uh);k2=i(dE,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),dE.forEach(t),v2=m(ft),hl=s(ft,"P",{});var kg=r(hl);T2=i(kg,"This model inherits from "),tc=s(kg,"A",{href:!0});var cE=r(tc);y2=i(cE,"FlaxPreTrainedModel"),cE.forEach(t),w2=i(kg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),kg.forEach(t),$2=m(ft),ml=s(ft,"P",{});var vg=r(ml);A2=i(vg,"This model is also a Flax Linen "),fl=s(vg,"A",{href:!0,rel:!0});var pE=r(fl);F2=i(pE,"flax.linen.Module"),pE.forEach(t),x2=i(vg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),vg.forEach(t),E2=m(ft),Bh=s(ft,"P",{});var hE=r(Bh);M2=i(hE,"Finally, this model supports inherent JAX features such as:"),hE.forEach(t),z2=m(ft),Vt=s(ft,"UL",{});var Tr=r(Vt);Rh=s(Tr,"LI",{});var mE=r(Rh);ul=s(mE,"A",{href:!0,rel:!0});var fE=r(ul);j2=i(fE,"Just-In-Time (JIT) compilation"),fE.forEach(t),mE.forEach(t),q2=m(Tr),Hh=s(Tr,"LI",{});var uE=r(Hh);gl=s(uE,"A",{href:!0,rel:!0});var gE=r(gl);P2=i(gE,"Automatic Differentiation"),gE.forEach(t),uE.forEach(t),C2=m(Tr),Qh=s(Tr,"LI",{});var _E=r(Qh);_l=s(_E,"A",{href:!0,rel:!0});var bE=r(_l);L2=i(bE,"Vectorization"),bE.forEach(t),_E.forEach(t),I2=m(Tr),Vh=s(Tr,"LI",{});var kE=r(Vh);bl=s(kE,"A",{href:!0,rel:!0});var vE=r(bl);O2=i(vE,"Parallelization"),vE.forEach(t),kE.forEach(t),Tr.forEach(t),N2=m(ft),jt=s(ft,"DIV",{class:!0});var yr=r(jt);y(kl.$$.fragment,yr),S2=m(yr),hn=s(yr,"P",{});var zc=r(hn);D2=i(zc,"The "),Kh=s(zc,"CODE",{});var TE=r(Kh);W2=i(TE,"FlaxAlbertPreTrainedModel"),TE.forEach(t),U2=i(zc," forward method, overrides the "),Jh=s(zc,"CODE",{});var yE=r(Jh);B2=i(yE,"__call__"),yE.forEach(t),R2=i(zc," special method."),zc.forEach(t),H2=m(yr),y(Js.$$.fragment,yr),Q2=m(yr),y(Gs.$$.fragment,yr),yr.forEach(t),ft.forEach(t),ru=m(o),mn=s(o,"H2",{class:!0});var Tg=r(mn);Xs=s(Tg,"A",{id:!0,class:!0,href:!0});var wE=r(Xs);Gh=s(wE,"SPAN",{});var $E=r(Gh);y(vl.$$.fragment,$E),$E.forEach(t),wE.forEach(t),V2=m(Tg),Xh=s(Tg,"SPAN",{});var AE=r(Xh);K2=i(AE,"FlaxAlbertForMultipleChoice"),AE.forEach(t),Tg.forEach(t),au=m(o),Se=s(o,"DIV",{class:!0});var ut=r(Se);y(Tl.$$.fragment,ut),J2=m(ut),Yh=s(ut,"P",{});var FE=r(Yh);G2=i(FE,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),FE.forEach(t),X2=m(ut),yl=s(ut,"P",{});var yg=r(yl);Y2=i(yg,"This model inherits from "),oc=s(yg,"A",{href:!0});var xE=r(oc);Z2=i(xE,"FlaxPreTrainedModel"),xE.forEach(t),eA=i(yg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),yg.forEach(t),tA=m(ut),wl=s(ut,"P",{});var wg=r(wl);oA=i(wg,"This model is also a Flax Linen "),$l=s(wg,"A",{href:!0,rel:!0});var EE=r($l);nA=i(EE,"flax.linen.Module"),EE.forEach(t),sA=i(wg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),wg.forEach(t),rA=m(ut),Zh=s(ut,"P",{});var ME=r(Zh);aA=i(ME,"Finally, this model supports inherent JAX features such as:"),ME.forEach(t),iA=m(ut),Kt=s(ut,"UL",{});var wr=r(Kt);em=s(wr,"LI",{});var zE=r(em);Al=s(zE,"A",{href:!0,rel:!0});var jE=r(Al);lA=i(jE,"Just-In-Time (JIT) compilation"),jE.forEach(t),zE.forEach(t),dA=m(wr),tm=s(wr,"LI",{});var qE=r(tm);Fl=s(qE,"A",{href:!0,rel:!0});var PE=r(Fl);cA=i(PE,"Automatic Differentiation"),PE.forEach(t),qE.forEach(t),pA=m(wr),om=s(wr,"LI",{});var CE=r(om);xl=s(CE,"A",{href:!0,rel:!0});var LE=r(xl);hA=i(LE,"Vectorization"),LE.forEach(t),CE.forEach(t),mA=m(wr),nm=s(wr,"LI",{});var IE=r(nm);El=s(IE,"A",{href:!0,rel:!0});var OE=r(El);fA=i(OE,"Parallelization"),OE.forEach(t),IE.forEach(t),wr.forEach(t),uA=m(ut),qt=s(ut,"DIV",{class:!0});var $r=r(qt);y(Ml.$$.fragment,$r),gA=m($r),fn=s($r,"P",{});var jc=r(fn);_A=i(jc,"The "),sm=s(jc,"CODE",{});var NE=r(sm);bA=i(NE,"FlaxAlbertPreTrainedModel"),NE.forEach(t),kA=i(jc," forward method, overrides the "),rm=s(jc,"CODE",{});var SE=r(rm);vA=i(SE,"__call__"),SE.forEach(t),TA=i(jc," special method."),jc.forEach(t),yA=m($r),y(Ys.$$.fragment,$r),wA=m($r),y(Zs.$$.fragment,$r),$r.forEach(t),ut.forEach(t),iu=m(o),un=s(o,"H2",{class:!0});var $g=r(un);er=s($g,"A",{id:!0,class:!0,href:!0});var DE=r(er);am=s(DE,"SPAN",{});var WE=r(am);y(zl.$$.fragment,WE),WE.forEach(t),DE.forEach(t),$A=m($g),im=s($g,"SPAN",{});var UE=r(im);AA=i(UE,"FlaxAlbertForTokenClassification"),UE.forEach(t),$g.forEach(t),lu=m(o),De=s(o,"DIV",{class:!0});var gt=r(De);y(jl.$$.fragment,gt),FA=m(gt),lm=s(gt,"P",{});var BE=r(lm);xA=i(BE,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),BE.forEach(t),EA=m(gt),ql=s(gt,"P",{});var Ag=r(ql);MA=i(Ag,"This model inherits from "),nc=s(Ag,"A",{href:!0});var RE=r(nc);zA=i(RE,"FlaxPreTrainedModel"),RE.forEach(t),jA=i(Ag,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ag.forEach(t),qA=m(gt),Pl=s(gt,"P",{});var Fg=r(Pl);PA=i(Fg,"This model is also a Flax Linen "),Cl=s(Fg,"A",{href:!0,rel:!0});var HE=r(Cl);CA=i(HE,"flax.linen.Module"),HE.forEach(t),LA=i(Fg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Fg.forEach(t),IA=m(gt),dm=s(gt,"P",{});var QE=r(dm);OA=i(QE,"Finally, this model supports inherent JAX features such as:"),QE.forEach(t),NA=m(gt),Jt=s(gt,"UL",{});var Ar=r(Jt);cm=s(Ar,"LI",{});var VE=r(cm);Ll=s(VE,"A",{href:!0,rel:!0});var KE=r(Ll);SA=i(KE,"Just-In-Time (JIT) compilation"),KE.forEach(t),VE.forEach(t),DA=m(Ar),pm=s(Ar,"LI",{});var JE=r(pm);Il=s(JE,"A",{href:!0,rel:!0});var GE=r(Il);WA=i(GE,"Automatic Differentiation"),GE.forEach(t),JE.forEach(t),UA=m(Ar),hm=s(Ar,"LI",{});var XE=r(hm);Ol=s(XE,"A",{href:!0,rel:!0});var YE=r(Ol);BA=i(YE,"Vectorization"),YE.forEach(t),XE.forEach(t),RA=m(Ar),mm=s(Ar,"LI",{});var ZE=r(mm);Nl=s(ZE,"A",{href:!0,rel:!0});var e3=r(Nl);HA=i(e3,"Parallelization"),e3.forEach(t),ZE.forEach(t),Ar.forEach(t),QA=m(gt),Pt=s(gt,"DIV",{class:!0});var Fr=r(Pt);y(Sl.$$.fragment,Fr),VA=m(Fr),gn=s(Fr,"P",{});var qc=r(gn);KA=i(qc,"The "),fm=s(qc,"CODE",{});var t3=r(fm);JA=i(t3,"FlaxAlbertPreTrainedModel"),t3.forEach(t),GA=i(qc," forward method, overrides the "),um=s(qc,"CODE",{});var o3=r(um);XA=i(o3,"__call__"),o3.forEach(t),YA=i(qc," special method."),qc.forEach(t),ZA=m(Fr),y(tr.$$.fragment,Fr),eF=m(Fr),y(or.$$.fragment,Fr),Fr.forEach(t),gt.forEach(t),du=m(o),_n=s(o,"H2",{class:!0});var xg=r(_n);nr=s(xg,"A",{id:!0,class:!0,href:!0});var n3=r(nr);gm=s(n3,"SPAN",{});var s3=r(gm);y(Dl.$$.fragment,s3),s3.forEach(t),n3.forEach(t),tF=m(xg),_m=s(xg,"SPAN",{});var r3=r(_m);oF=i(r3,"FlaxAlbertForQuestionAnswering"),r3.forEach(t),xg.forEach(t),cu=m(o),We=s(o,"DIV",{class:!0});var _t=r(We);y(Wl.$$.fragment,_t),nF=m(_t),bn=s(_t,"P",{});var Pc=r(bn);sF=i(Pc,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),bm=s(Pc,"CODE",{});var a3=r(bm);rF=i(a3,"span start logits"),a3.forEach(t),aF=i(Pc," and "),km=s(Pc,"CODE",{});var i3=r(km);iF=i(i3,"span end logits"),i3.forEach(t),lF=i(Pc,")."),Pc.forEach(t),dF=m(_t),Ul=s(_t,"P",{});var Eg=r(Ul);cF=i(Eg,"This model inherits from "),sc=s(Eg,"A",{href:!0});var l3=r(sc);pF=i(l3,"FlaxPreTrainedModel"),l3.forEach(t),hF=i(Eg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Eg.forEach(t),mF=m(_t),Bl=s(_t,"P",{});var Mg=r(Bl);fF=i(Mg,"This model is also a Flax Linen "),Rl=s(Mg,"A",{href:!0,rel:!0});var d3=r(Rl);uF=i(d3,"flax.linen.Module"),d3.forEach(t),gF=i(Mg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Mg.forEach(t),_F=m(_t),vm=s(_t,"P",{});var c3=r(vm);bF=i(c3,"Finally, this model supports inherent JAX features such as:"),c3.forEach(t),kF=m(_t),Gt=s(_t,"UL",{});var xr=r(Gt);Tm=s(xr,"LI",{});var p3=r(Tm);Hl=s(p3,"A",{href:!0,rel:!0});var h3=r(Hl);vF=i(h3,"Just-In-Time (JIT) compilation"),h3.forEach(t),p3.forEach(t),TF=m(xr),ym=s(xr,"LI",{});var m3=r(ym);Ql=s(m3,"A",{href:!0,rel:!0});var f3=r(Ql);yF=i(f3,"Automatic Differentiation"),f3.forEach(t),m3.forEach(t),wF=m(xr),wm=s(xr,"LI",{});var u3=r(wm);Vl=s(u3,"A",{href:!0,rel:!0});var g3=r(Vl);$F=i(g3,"Vectorization"),g3.forEach(t),u3.forEach(t),AF=m(xr),$m=s(xr,"LI",{});var _3=r($m);Kl=s(_3,"A",{href:!0,rel:!0});var b3=r(Kl);FF=i(b3,"Parallelization"),b3.forEach(t),_3.forEach(t),xr.forEach(t),xF=m(_t),Ct=s(_t,"DIV",{class:!0});var Er=r(Ct);y(Jl.$$.fragment,Er),EF=m(Er),kn=s(Er,"P",{});var Cc=r(kn);MF=i(Cc,"The "),Am=s(Cc,"CODE",{});var k3=r(Am);zF=i(k3,"FlaxAlbertPreTrainedModel"),k3.forEach(t),jF=i(Cc," forward method, overrides the "),Fm=s(Cc,"CODE",{});var v3=r(Fm);qF=i(v3,"__call__"),v3.forEach(t),PF=i(Cc," special method."),Cc.forEach(t),CF=m(Er),y(sr.$$.fragment,Er),LF=m(Er),y(rr.$$.fragment,Er),Er.forEach(t),_t.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(DM)),u(p,"id","albert"),u(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(p,"href","#albert"),u(c,"class","relative group"),u(S,"id","overview"),u(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(S,"href","#overview"),u(M,"class","relative group"),u(re,"href","https://arxiv.org/abs/1909.11942"),u(re,"rel","nofollow"),u($e,"href","https://huggingface.co/lysandre"),u($e,"rel","nofollow"),u(R,"href","https://huggingface.co/kamalkraj"),u(R,"rel","nofollow"),u(H,"href","https://github.com/google-research/ALBERT"),u(H,"rel","nofollow"),u(wn,"id","transformers.AlbertConfig"),u(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wn,"href","#transformers.AlbertConfig"),u(Te,"class","relative group"),u(cd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertModel"),u(pd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.TFAlbertModel"),u(jr,"href","https://huggingface.co/albert-xxlarge-v2"),u(jr,"rel","nofollow"),u(hd,"href","/docs/transformers/pr_17673/en/main_classes/configuration#transformers.PretrainedConfig"),u(md,"href","/docs/transformers/pr_17673/en/main_classes/configuration#transformers.PretrainedConfig"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(An,"id","transformers.AlbertTokenizer"),u(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(An,"href","#transformers.AlbertTokenizer"),u(ko,"class","relative group"),u(Lr,"href","https://github.com/google/sentencepiece"),u(Lr,"rel","nofollow"),u(fd,"href","/docs/transformers/pr_17673/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(ud,"href","/docs/transformers/pr_17673/en/main_classes/pipelines#transformers.pipeline"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Mn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bd,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jn,"id","transformers.AlbertTokenizerFast"),u(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(jn,"href","#transformers.AlbertTokenizerFast"),u(To,"class","relative group"),u(Qr,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),u(Qr,"rel","nofollow"),u(kd,"href","/docs/transformers/pr_17673/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pn,"id","transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"),u(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pn,"href","#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"),u(yo,"class","relative group"),u(yd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertForPreTraining"),u(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.TFAlbertForPreTraining"),u($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cn,"id","transformers.AlbertModel"),u(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cn,"href","#transformers.AlbertModel"),u(Ao,"class","relative group"),u($d,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel"),u(ra,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ra,"rel","nofollow"),u(Ad,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertModel"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(On,"id","transformers.AlbertForPreTraining"),u(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(On,"href","#transformers.AlbertForPreTraining"),u(xo,"class","relative group"),u(Fd,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel"),u(pa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(pa,"rel","nofollow"),u(xd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertForPreTraining"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dn,"id","transformers.AlbertForMaskedLM"),u(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Dn,"href","#transformers.AlbertForMaskedLM"),u(zo,"class","relative group"),u(Ed,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel"),u(ba,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ba,"rel","nofollow"),u(Md,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertForMaskedLM"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Rn,"id","transformers.AlbertForSequenceClassification"),u(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Rn,"href","#transformers.AlbertForSequenceClassification"),u(qo,"class","relative group"),u(zd,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel"),u($a,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u($a,"rel","nofollow"),u(jd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertForSequenceClassification"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gn,"id","transformers.AlbertForMultipleChoice"),u(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gn,"href","#transformers.AlbertForMultipleChoice"),u(Co,"class","relative group"),u(qd,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel"),u(za,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(za,"rel","nofollow"),u(Pd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertForMultipleChoice"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Zn,"id","transformers.AlbertForTokenClassification"),u(Zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Zn,"href","#transformers.AlbertForTokenClassification"),u(Io,"class","relative group"),u(Cd,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel"),u(Ia,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ia,"rel","nofollow"),u(Ld,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertForTokenClassification"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ns,"id","transformers.AlbertForQuestionAnswering"),u(ns,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ns,"href","#transformers.AlbertForQuestionAnswering"),u(No,"class","relative group"),u(Id,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel"),u(Ua,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ua,"rel","nofollow"),u(Od,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertForQuestionAnswering"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(is,"id","transformers.TFAlbertModel"),u(is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(is,"href","#transformers.TFAlbertModel"),u(Wo,"class","relative group"),u(Nd,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ka,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ka,"rel","nofollow"),u(Sd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.TFAlbertModel"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ps,"id","transformers.TFAlbertForPreTraining"),u(ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ps,"href","#transformers.TFAlbertForPreTraining"),u(Bo,"class","relative group"),u(Dd,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.TFPreTrainedModel"),u(ei,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ei,"rel","nofollow"),u(Wd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.TFAlbertForPreTraining"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(us,"id","transformers.TFAlbertForMaskedLM"),u(us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(us,"href","#transformers.TFAlbertForMaskedLM"),u(Qo,"class","relative group"),u(Ud,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.TFPreTrainedModel"),u(ii,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ii,"rel","nofollow"),u(Bd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.TFAlbertForMaskedLM"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vs,"id","transformers.TFAlbertForSequenceClassification"),u(vs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(vs,"href","#transformers.TFAlbertForSequenceClassification"),u(Ko,"class","relative group"),u(Rd,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.TFPreTrainedModel"),u(mi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(mi,"rel","nofollow"),u(Hd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.TFAlbertForSequenceClassification"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(As,"id","transformers.TFAlbertForMultipleChoice"),u(As,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(As,"href","#transformers.TFAlbertForMultipleChoice"),u(Go,"class","relative group"),u(Qd,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.TFPreTrainedModel"),u(ki,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ki,"rel","nofollow"),u(Vd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.TFAlbertForMultipleChoice"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ms,"id","transformers.TFAlbertForTokenClassification"),u(Ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ms,"href","#transformers.TFAlbertForTokenClassification"),u(Yo,"class","relative group"),u(Kd,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ai,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ai,"rel","nofollow"),u(Jd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.TFAlbertForTokenClassification"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cs,"id","transformers.TFAlbertForQuestionAnswering"),u(Cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cs,"href","#transformers.TFAlbertForQuestionAnswering"),u(en,"class","relative group"),u(Gd,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.TFPreTrainedModel"),u(ji,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ji,"rel","nofollow"),u(Xd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.TFAlbertForQuestionAnswering"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ss,"id","transformers.FlaxAlbertModel"),u(Ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ss,"href","#transformers.FlaxAlbertModel"),u(nn,"class","relative group"),u(Yd,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Oi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Oi,"rel","nofollow"),u(Ni,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ni,"rel","nofollow"),u(Si,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Si,"rel","nofollow"),u(Di,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Di,"rel","nofollow"),u(Wi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Wi,"rel","nofollow"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Us,"id","transformers.FlaxAlbertForPreTraining"),u(Us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Us,"href","#transformers.FlaxAlbertForPreTraining"),u(rn,"class","relative group"),u(Zd,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Vi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Vi,"rel","nofollow"),u(Ki,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ki,"rel","nofollow"),u(Ji,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ji,"rel","nofollow"),u(Gi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Gi,"rel","nofollow"),u(Xi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Xi,"rel","nofollow"),u(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hs,"id","transformers.FlaxAlbertForMaskedLM"),u(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hs,"href","#transformers.FlaxAlbertForMaskedLM"),u(dn,"class","relative group"),u(ec,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(sl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(sl,"rel","nofollow"),u(rl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(rl,"rel","nofollow"),u(al,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(al,"rel","nofollow"),u(il,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(il,"rel","nofollow"),u(ll,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(ll,"rel","nofollow"),u(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ks,"id","transformers.FlaxAlbertForSequenceClassification"),u(Ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ks,"href","#transformers.FlaxAlbertForSequenceClassification"),u(pn,"class","relative group"),u(tc,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(fl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(fl,"rel","nofollow"),u(ul,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ul,"rel","nofollow"),u(gl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(gl,"rel","nofollow"),u(_l,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(_l,"rel","nofollow"),u(bl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(bl,"rel","nofollow"),u(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xs,"id","transformers.FlaxAlbertForMultipleChoice"),u(Xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xs,"href","#transformers.FlaxAlbertForMultipleChoice"),u(mn,"class","relative group"),u(oc,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel"),u($l,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u($l,"rel","nofollow"),u(Al,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Al,"rel","nofollow"),u(Fl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Fl,"rel","nofollow"),u(xl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(xl,"rel","nofollow"),u(El,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(El,"rel","nofollow"),u(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(er,"id","transformers.FlaxAlbertForTokenClassification"),u(er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(er,"href","#transformers.FlaxAlbertForTokenClassification"),u(un,"class","relative group"),u(nc,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Cl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Cl,"rel","nofollow"),u(Ll,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ll,"rel","nofollow"),u(Il,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Il,"rel","nofollow"),u(Ol,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ol,"rel","nofollow"),u(Nl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Nl,"rel","nofollow"),u(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nr,"id","transformers.FlaxAlbertForQuestionAnswering"),u(nr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(nr,"href","#transformers.FlaxAlbertForQuestionAnswering"),u(_n,"class","relative group"),u(sc,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Rl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Rl,"rel","nofollow"),u(Hl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Hl,"rel","nofollow"),u(Ql,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ql,"rel","nofollow"),u(Vl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Vl,"rel","nofollow"),u(Kl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Kl,"rel","nofollow"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),b(o,g,k),b(o,c,k),e(c,p),e(p,_),w(l,_,null),e(c,f),e(c,E),e(E,L),b(o,I,k),b(o,M,k),e(M,S),e(S,O),w(Z,O,null),e(M,ue),e(M,Q),e(Q,ge),b(o,ce,k),b(o,X,k),e(X,D),e(X,re),e(re,ee),e(X,j),b(o,P,k),b(o,se,k),e(se,V),e(V,_e),e(se,be),e(se,K),e(K,ke),b(o,pe,k),b(o,q,k),e(q,ve),b(o,J,k),b(o,ae,k),e(ae,le),e(le,G),b(o,he,k),b(o,ie,k),e(ie,W),b(o,me,k),b(o,B,k),e(B,de),e(de,v),e(B,z),e(B,Y),e(Y,Ee),b(o,xe,k),b(o,C,k),e(C,Me),e(C,$e),e($e,ze),e(C,U),e(C,R),e(R,je),e(C,qe),e(C,H),e(H,Pe),e(C,Ce),b(o,fe,k),b(o,Te,k),e(Te,wn),e(wn,Lc),w(Mr,Lc,null),e(Te,zg),e(Te,Ic),e(Ic,jg),b(o,uf,k),b(o,bt,k),w(zr,bt,null),e(bt,qg),e(bt,Ut),e(Ut,Pg),e(Ut,cd),e(cd,Cg),e(Ut,Lg),e(Ut,pd),e(pd,Ig),e(Ut,Og),e(Ut,jr),e(jr,Ng),e(Ut,Sg),e(bt,Dg),e(bt,bo),e(bo,Wg),e(bo,hd),e(hd,Ug),e(bo,Bg),e(bo,md),e(md,Rg),e(bo,Hg),e(bt,Qg),w($n,bt,null),b(o,gf,k),b(o,ko,k),e(ko,An),e(An,Oc),w(qr,Oc,null),e(ko,Vg),e(ko,Nc),e(Nc,Kg),b(o,_f,k),b(o,ye,k),w(Pr,ye,null),e(ye,Jg),e(ye,Cr),e(Cr,Gg),e(Cr,Lr),e(Lr,Xg),e(Cr,Yg),e(ye,Zg),e(ye,Ir),e(Ir,e_),e(Ir,fd),e(fd,t_),e(Ir,o_),e(ye,n_),e(ye,Sc),e(Sc,s_),e(ye,r_),w(Fn,ye,null),e(ye,a_),e(ye,Or),e(Or,i_),e(Or,ud),e(ud,l_),e(Or,d_),e(ye,c_),w(xn,ye,null),e(ye,p_),w(En,ye,null),e(ye,h_),e(ye,to),w(Nr,to,null),e(to,m_),e(to,Dc),e(Dc,f_),e(to,u_),e(to,Sr),e(Sr,gd),e(gd,g_),e(gd,Wc),e(Wc,__),e(Sr,b_),e(Sr,_d),e(_d,k_),e(_d,Uc),e(Uc,v_),e(ye,T_),e(ye,Mn),w(Dr,Mn,null),e(Mn,y_),e(Mn,Wr),e(Wr,w_),e(Wr,Bc),e(Bc,$_),e(Wr,A_),e(ye,F_),e(ye,vt),w(Ur,vt,null),e(vt,x_),e(vt,Rc),e(Rc,E_),e(vt,M_),w(zn,vt,null),e(vt,z_),e(vt,vo),e(vo,j_),e(vo,Hc),e(Hc,q_),e(vo,P_),e(vo,Qc),e(Qc,C_),e(vo,L_),e(ye,I_),e(ye,bd),w(Br,bd,null),b(o,bf,k),b(o,To,k),e(To,jn),e(jn,Vc),w(Rr,Vc,null),e(To,O_),e(To,Kc),e(Kc,N_),b(o,kf,k),b(o,kt,k),w(Hr,kt,null),e(kt,S_),e(kt,Bt),e(Bt,D_),e(Bt,Jc),e(Jc,W_),e(Bt,U_),e(Bt,Qr),e(Qr,B_),e(Bt,R_),e(Bt,kd),e(kd,H_),e(Bt,Q_),e(kt,V_),e(kt,oo),w(Vr,oo,null),e(oo,K_),e(oo,Gc),e(Gc,J_),e(oo,G_),e(oo,Kr),e(Kr,vd),e(vd,X_),e(vd,Xc),e(Xc,Y_),e(Kr,Z_),e(Kr,Td),e(Td,eb),e(Td,Yc),e(Yc,tb),e(kt,ob),e(kt,Tt),w(Jr,Tt,null),e(Tt,nb),e(Tt,Zc),e(Zc,sb),e(Tt,rb),w(qn,Tt,null),e(Tt,ab),e(Tt,ep),e(ep,ib),b(o,vf,k),b(o,yo,k),e(yo,Pn),e(Pn,tp),w(Gr,tp,null),e(yo,lb),e(yo,op),e(op,db),b(o,Tf,k),b(o,wo,k),w(Xr,wo,null),e(wo,cb),e(wo,Yr),e(Yr,pb),e(Yr,yd),e(yd,hb),e(Yr,mb),b(o,yf,k),b(o,$o,k),w(Zr,$o,null),e($o,fb),e($o,ea),e(ea,ub),e(ea,wd),e(wd,gb),e(ea,_b),b(o,wf,k),b(o,Ao,k),e(Ao,Cn),e(Cn,np),w(ta,np,null),e(Ao,bb),e(Ao,sp),e(sp,kb),b(o,$f,k),b(o,Ge,k),w(oa,Ge,null),e(Ge,vb),e(Ge,rp),e(rp,Tb),e(Ge,yb),e(Ge,na),e(na,wb),e(na,$d),e($d,$b),e(na,Ab),e(Ge,Fb),e(Ge,sa),e(sa,xb),e(sa,ra),e(ra,Eb),e(sa,Mb),e(Ge,zb),e(Ge,yt),w(aa,yt,null),e(yt,jb),e(yt,Fo),e(Fo,qb),e(Fo,Ad),e(Ad,Pb),e(Fo,Cb),e(Fo,ap),e(ap,Lb),e(Fo,Ib),e(yt,Ob),w(Ln,yt,null),e(yt,Nb),w(In,yt,null),b(o,Af,k),b(o,xo,k),e(xo,On),e(On,ip),w(ia,ip,null),e(xo,Sb),e(xo,lp),e(lp,Db),b(o,Ff,k),b(o,Xe,k),w(la,Xe,null),e(Xe,Wb),e(Xe,Eo),e(Eo,Ub),e(Eo,dp),e(dp,Bb),e(Eo,Rb),e(Eo,cp),e(cp,Hb),e(Eo,Qb),e(Xe,Vb),e(Xe,da),e(da,Kb),e(da,Fd),e(Fd,Jb),e(da,Gb),e(Xe,Xb),e(Xe,ca),e(ca,Yb),e(ca,pa),e(pa,Zb),e(ca,ek),e(Xe,tk),e(Xe,wt),w(ha,wt,null),e(wt,ok),e(wt,Mo),e(Mo,nk),e(Mo,xd),e(xd,sk),e(Mo,rk),e(Mo,pp),e(pp,ak),e(Mo,ik),e(wt,lk),w(Nn,wt,null),e(wt,dk),w(Sn,wt,null),b(o,xf,k),b(o,zo,k),e(zo,Dn),e(Dn,hp),w(ma,hp,null),e(zo,ck),e(zo,mp),e(mp,pk),b(o,Ef,k),b(o,Ye,k),w(fa,Ye,null),e(Ye,hk),e(Ye,ua),e(ua,mk),e(ua,fp),e(fp,fk),e(ua,uk),e(Ye,gk),e(Ye,ga),e(ga,_k),e(ga,Ed),e(Ed,bk),e(ga,kk),e(Ye,vk),e(Ye,_a),e(_a,Tk),e(_a,ba),e(ba,yk),e(_a,wk),e(Ye,$k),e(Ye,nt),w(ka,nt,null),e(nt,Ak),e(nt,jo),e(jo,Fk),e(jo,Md),e(Md,xk),e(jo,Ek),e(jo,up),e(up,Mk),e(jo,zk),e(nt,jk),w(Wn,nt,null),e(nt,qk),w(Un,nt,null),e(nt,Pk),w(Bn,nt,null),b(o,Mf,k),b(o,qo,k),e(qo,Rn),e(Rn,gp),w(va,gp,null),e(qo,Ck),e(qo,_p),e(_p,Lk),b(o,zf,k),b(o,Ze,k),w(Ta,Ze,null),e(Ze,Ik),e(Ze,bp),e(bp,Ok),e(Ze,Nk),e(Ze,ya),e(ya,Sk),e(ya,zd),e(zd,Dk),e(ya,Wk),e(Ze,Uk),e(Ze,wa),e(wa,Bk),e(wa,$a),e($a,Rk),e(wa,Hk),e(Ze,Qk),e(Ze,Ue),w(Aa,Ue,null),e(Ue,Vk),e(Ue,Po),e(Po,Kk),e(Po,jd),e(jd,Jk),e(Po,Gk),e(Po,kp),e(kp,Xk),e(Po,Yk),e(Ue,Zk),w(Hn,Ue,null),e(Ue,ev),w(Qn,Ue,null),e(Ue,tv),w(Vn,Ue,null),e(Ue,ov),w(Kn,Ue,null),e(Ue,nv),w(Jn,Ue,null),b(o,jf,k),b(o,Co,k),e(Co,Gn),e(Gn,vp),w(Fa,vp,null),e(Co,sv),e(Co,Tp),e(Tp,rv),b(o,qf,k),b(o,et,k),w(xa,et,null),e(et,av),e(et,yp),e(yp,iv),e(et,lv),e(et,Ea),e(Ea,dv),e(Ea,qd),e(qd,cv),e(Ea,pv),e(et,hv),e(et,Ma),e(Ma,mv),e(Ma,za),e(za,fv),e(Ma,uv),e(et,gv),e(et,$t),w(ja,$t,null),e($t,_v),e($t,Lo),e(Lo,bv),e(Lo,Pd),e(Pd,kv),e(Lo,vv),e(Lo,wp),e(wp,Tv),e(Lo,yv),e($t,wv),w(Xn,$t,null),e($t,$v),w(Yn,$t,null),b(o,Pf,k),b(o,Io,k),e(Io,Zn),e(Zn,$p),w(qa,$p,null),e(Io,Av),e(Io,Ap),e(Ap,Fv),b(o,Cf,k),b(o,tt,k),w(Pa,tt,null),e(tt,xv),e(tt,Fp),e(Fp,Ev),e(tt,Mv),e(tt,Ca),e(Ca,zv),e(Ca,Cd),e(Cd,jv),e(Ca,qv),e(tt,Pv),e(tt,La),e(La,Cv),e(La,Ia),e(Ia,Lv),e(La,Iv),e(tt,Ov),e(tt,st),w(Oa,st,null),e(st,Nv),e(st,Oo),e(Oo,Sv),e(Oo,Ld),e(Ld,Dv),e(Oo,Wv),e(Oo,xp),e(xp,Uv),e(Oo,Bv),e(st,Rv),w(es,st,null),e(st,Hv),w(ts,st,null),e(st,Qv),w(os,st,null),b(o,Lf,k),b(o,No,k),e(No,ns),e(ns,Ep),w(Na,Ep,null),e(No,Vv),e(No,Mp),e(Mp,Kv),b(o,If,k),b(o,ot,k),w(Sa,ot,null),e(ot,Jv),e(ot,So),e(So,Gv),e(So,zp),e(zp,Xv),e(So,Yv),e(So,jp),e(jp,Zv),e(So,eT),e(ot,tT),e(ot,Da),e(Da,oT),e(Da,Id),e(Id,nT),e(Da,sT),e(ot,rT),e(ot,Wa),e(Wa,aT),e(Wa,Ua),e(Ua,iT),e(Wa,lT),e(ot,dT),e(ot,rt),w(Ba,rt,null),e(rt,cT),e(rt,Do),e(Do,pT),e(Do,Od),e(Od,hT),e(Do,mT),e(Do,qp),e(qp,fT),e(Do,uT),e(rt,gT),w(ss,rt,null),e(rt,_T),w(rs,rt,null),e(rt,bT),w(as,rt,null),b(o,Of,k),b(o,Wo,k),e(Wo,is),e(is,Pp),w(Ra,Pp,null),e(Wo,kT),e(Wo,Cp),e(Cp,vT),b(o,Nf,k),b(o,Be,k),w(Ha,Be,null),e(Be,TT),e(Be,Lp),e(Lp,yT),e(Be,wT),e(Be,Qa),e(Qa,$T),e(Qa,Nd),e(Nd,AT),e(Qa,FT),e(Be,xT),e(Be,Va),e(Va,ET),e(Va,Ka),e(Ka,MT),e(Va,zT),e(Be,jT),w(ls,Be,null),e(Be,qT),e(Be,At),w(Ja,At,null),e(At,PT),e(At,Uo),e(Uo,CT),e(Uo,Sd),e(Sd,LT),e(Uo,IT),e(Uo,Ip),e(Ip,OT),e(Uo,NT),e(At,ST),w(ds,At,null),e(At,DT),w(cs,At,null),b(o,Sf,k),b(o,Bo,k),e(Bo,ps),e(ps,Op),w(Ga,Op,null),e(Bo,WT),e(Bo,Np),e(Np,UT),b(o,Df,k),b(o,Re,k),w(Xa,Re,null),e(Re,BT),e(Re,Ro),e(Ro,RT),e(Ro,Sp),e(Sp,HT),e(Ro,QT),e(Ro,Dp),e(Dp,VT),e(Ro,KT),e(Re,JT),e(Re,Ya),e(Ya,GT),e(Ya,Dd),e(Dd,XT),e(Ya,YT),e(Re,ZT),e(Re,Za),e(Za,e1),e(Za,ei),e(ei,t1),e(Za,o1),e(Re,n1),w(hs,Re,null),e(Re,s1),e(Re,Ft),w(ti,Ft,null),e(Ft,r1),e(Ft,Ho),e(Ho,a1),e(Ho,Wd),e(Wd,i1),e(Ho,l1),e(Ho,Wp),e(Wp,d1),e(Ho,c1),e(Ft,p1),w(ms,Ft,null),e(Ft,h1),w(fs,Ft,null),b(o,Wf,k),b(o,Qo,k),e(Qo,us),e(us,Up),w(oi,Up,null),e(Qo,m1),e(Qo,Bp),e(Bp,f1),b(o,Uf,k),b(o,He,k),w(ni,He,null),e(He,u1),e(He,si),e(si,g1),e(si,Rp),e(Rp,_1),e(si,b1),e(He,k1),e(He,ri),e(ri,v1),e(ri,Ud),e(Ud,T1),e(ri,y1),e(He,w1),e(He,ai),e(ai,$1),e(ai,ii),e(ii,A1),e(ai,F1),e(He,x1),w(gs,He,null),e(He,E1),e(He,at),w(li,at,null),e(at,M1),e(at,Vo),e(Vo,z1),e(Vo,Bd),e(Bd,j1),e(Vo,q1),e(Vo,Hp),e(Hp,P1),e(Vo,C1),e(at,L1),w(_s,at,null),e(at,I1),w(bs,at,null),e(at,O1),w(ks,at,null),b(o,Bf,k),b(o,Ko,k),e(Ko,vs),e(vs,Qp),w(di,Qp,null),e(Ko,N1),e(Ko,Vp),e(Vp,S1),b(o,Rf,k),b(o,Qe,k),w(ci,Qe,null),e(Qe,D1),e(Qe,Kp),e(Kp,W1),e(Qe,U1),e(Qe,pi),e(pi,B1),e(pi,Rd),e(Rd,R1),e(pi,H1),e(Qe,Q1),e(Qe,hi),e(hi,V1),e(hi,mi),e(mi,K1),e(hi,J1),e(Qe,G1),w(Ts,Qe,null),e(Qe,X1),e(Qe,it),w(fi,it,null),e(it,Y1),e(it,Jo),e(Jo,Z1),e(Jo,Hd),e(Hd,ey),e(Jo,ty),e(Jo,Jp),e(Jp,oy),e(Jo,ny),e(it,sy),w(ys,it,null),e(it,ry),w(ws,it,null),e(it,ay),w($s,it,null),b(o,Hf,k),b(o,Go,k),e(Go,As),e(As,Gp),w(ui,Gp,null),e(Go,iy),e(Go,Xp),e(Xp,ly),b(o,Qf,k),b(o,Ve,k),w(gi,Ve,null),e(Ve,dy),e(Ve,Yp),e(Yp,cy),e(Ve,py),e(Ve,_i),e(_i,hy),e(_i,Qd),e(Qd,my),e(_i,fy),e(Ve,uy),e(Ve,bi),e(bi,gy),e(bi,ki),e(ki,_y),e(bi,by),e(Ve,ky),w(Fs,Ve,null),e(Ve,vy),e(Ve,xt),w(vi,xt,null),e(xt,Ty),e(xt,Xo),e(Xo,yy),e(Xo,Vd),e(Vd,wy),e(Xo,$y),e(Xo,Zp),e(Zp,Ay),e(Xo,Fy),e(xt,xy),w(xs,xt,null),e(xt,Ey),w(Es,xt,null),b(o,Vf,k),b(o,Yo,k),e(Yo,Ms),e(Ms,eh),w(Ti,eh,null),e(Yo,My),e(Yo,th),e(th,zy),b(o,Kf,k),b(o,Ke,k),w(yi,Ke,null),e(Ke,jy),e(Ke,oh),e(oh,qy),e(Ke,Py),e(Ke,wi),e(wi,Cy),e(wi,Kd),e(Kd,Ly),e(wi,Iy),e(Ke,Oy),e(Ke,$i),e($i,Ny),e($i,Ai),e(Ai,Sy),e($i,Dy),e(Ke,Wy),w(zs,Ke,null),e(Ke,Uy),e(Ke,lt),w(Fi,lt,null),e(lt,By),e(lt,Zo),e(Zo,Ry),e(Zo,Jd),e(Jd,Hy),e(Zo,Qy),e(Zo,nh),e(nh,Vy),e(Zo,Ky),e(lt,Jy),w(js,lt,null),e(lt,Gy),w(qs,lt,null),e(lt,Xy),w(Ps,lt,null),b(o,Jf,k),b(o,en,k),e(en,Cs),e(Cs,sh),w(xi,sh,null),e(en,Yy),e(en,rh),e(rh,Zy),b(o,Gf,k),b(o,Je,k),w(Ei,Je,null),e(Je,ew),e(Je,tn),e(tn,tw),e(tn,ah),e(ah,ow),e(tn,nw),e(tn,ih),e(ih,sw),e(tn,rw),e(Je,aw),e(Je,Mi),e(Mi,iw),e(Mi,Gd),e(Gd,lw),e(Mi,dw),e(Je,cw),e(Je,zi),e(zi,pw),e(zi,ji),e(ji,hw),e(zi,mw),e(Je,fw),w(Ls,Je,null),e(Je,uw),e(Je,dt),w(qi,dt,null),e(dt,gw),e(dt,on),e(on,_w),e(on,Xd),e(Xd,bw),e(on,kw),e(on,lh),e(lh,vw),e(on,Tw),e(dt,yw),w(Is,dt,null),e(dt,ww),w(Os,dt,null),e(dt,$w),w(Ns,dt,null),b(o,Xf,k),b(o,nn,k),e(nn,Ss),e(Ss,dh),w(Pi,dh,null),e(nn,Aw),e(nn,ch),e(ch,Fw),b(o,Yf,k),b(o,Le,k),w(Ci,Le,null),e(Le,xw),e(Le,ph),e(ph,Ew),e(Le,Mw),e(Le,Li),e(Li,zw),e(Li,Yd),e(Yd,jw),e(Li,qw),e(Le,Pw),e(Le,Ii),e(Ii,Cw),e(Ii,Oi),e(Oi,Lw),e(Ii,Iw),e(Le,Ow),e(Le,hh),e(hh,Nw),e(Le,Sw),e(Le,Rt),e(Rt,mh),e(mh,Ni),e(Ni,Dw),e(Rt,Ww),e(Rt,fh),e(fh,Si),e(Si,Uw),e(Rt,Bw),e(Rt,uh),e(uh,Di),e(Di,Rw),e(Rt,Hw),e(Rt,gh),e(gh,Wi),e(Wi,Qw),e(Le,Vw),e(Le,Et),w(Ui,Et,null),e(Et,Kw),e(Et,sn),e(sn,Jw),e(sn,_h),e(_h,Gw),e(sn,Xw),e(sn,bh),e(bh,Yw),e(sn,Zw),e(Et,e$),w(Ds,Et,null),e(Et,t$),w(Ws,Et,null),b(o,Zf,k),b(o,rn,k),e(rn,Us),e(Us,kh),w(Bi,kh,null),e(rn,o$),e(rn,vh),e(vh,n$),b(o,eu,k),b(o,Ie,k),w(Ri,Ie,null),e(Ie,s$),e(Ie,an),e(an,r$),e(an,Th),e(Th,a$),e(an,i$),e(an,yh),e(yh,l$),e(an,d$),e(Ie,c$),e(Ie,Hi),e(Hi,p$),e(Hi,Zd),e(Zd,h$),e(Hi,m$),e(Ie,f$),e(Ie,Qi),e(Qi,u$),e(Qi,Vi),e(Vi,g$),e(Qi,_$),e(Ie,b$),e(Ie,wh),e(wh,k$),e(Ie,v$),e(Ie,Ht),e(Ht,$h),e($h,Ki),e(Ki,T$),e(Ht,y$),e(Ht,Ah),e(Ah,Ji),e(Ji,w$),e(Ht,$$),e(Ht,Fh),e(Fh,Gi),e(Gi,A$),e(Ht,F$),e(Ht,xh),e(xh,Xi),e(Xi,x$),e(Ie,E$),e(Ie,Mt),w(Yi,Mt,null),e(Mt,M$),e(Mt,ln),e(ln,z$),e(ln,Eh),e(Eh,j$),e(ln,q$),e(ln,Mh),e(Mh,P$),e(ln,C$),e(Mt,L$),w(Bs,Mt,null),e(Mt,I$),w(Rs,Mt,null),b(o,tu,k),b(o,dn,k),e(dn,Hs),e(Hs,zh),w(Zi,zh,null),e(dn,O$),e(dn,jh),e(jh,N$),b(o,ou,k),b(o,Oe,k),w(el,Oe,null),e(Oe,S$),e(Oe,tl),e(tl,D$),e(tl,qh),e(qh,W$),e(tl,U$),e(Oe,B$),e(Oe,ol),e(ol,R$),e(ol,ec),e(ec,H$),e(ol,Q$),e(Oe,V$),e(Oe,nl),e(nl,K$),e(nl,sl),e(sl,J$),e(nl,G$),e(Oe,X$),e(Oe,Ph),e(Ph,Y$),e(Oe,Z$),e(Oe,Qt),e(Qt,Ch),e(Ch,rl),e(rl,e2),e(Qt,t2),e(Qt,Lh),e(Lh,al),e(al,o2),e(Qt,n2),e(Qt,Ih),e(Ih,il),e(il,s2),e(Qt,r2),e(Qt,Oh),e(Oh,ll),e(ll,a2),e(Oe,i2),e(Oe,zt),w(dl,zt,null),e(zt,l2),e(zt,cn),e(cn,d2),e(cn,Nh),e(Nh,c2),e(cn,p2),e(cn,Sh),e(Sh,h2),e(cn,m2),e(zt,f2),w(Qs,zt,null),e(zt,u2),w(Vs,zt,null),b(o,nu,k),b(o,pn,k),e(pn,Ks),e(Ks,Dh),w(cl,Dh,null),e(pn,g2),e(pn,Wh),e(Wh,_2),b(o,su,k),b(o,Ne,k),w(pl,Ne,null),e(Ne,b2),e(Ne,Uh),e(Uh,k2),e(Ne,v2),e(Ne,hl),e(hl,T2),e(hl,tc),e(tc,y2),e(hl,w2),e(Ne,$2),e(Ne,ml),e(ml,A2),e(ml,fl),e(fl,F2),e(ml,x2),e(Ne,E2),e(Ne,Bh),e(Bh,M2),e(Ne,z2),e(Ne,Vt),e(Vt,Rh),e(Rh,ul),e(ul,j2),e(Vt,q2),e(Vt,Hh),e(Hh,gl),e(gl,P2),e(Vt,C2),e(Vt,Qh),e(Qh,_l),e(_l,L2),e(Vt,I2),e(Vt,Vh),e(Vh,bl),e(bl,O2),e(Ne,N2),e(Ne,jt),w(kl,jt,null),e(jt,S2),e(jt,hn),e(hn,D2),e(hn,Kh),e(Kh,W2),e(hn,U2),e(hn,Jh),e(Jh,B2),e(hn,R2),e(jt,H2),w(Js,jt,null),e(jt,Q2),w(Gs,jt,null),b(o,ru,k),b(o,mn,k),e(mn,Xs),e(Xs,Gh),w(vl,Gh,null),e(mn,V2),e(mn,Xh),e(Xh,K2),b(o,au,k),b(o,Se,k),w(Tl,Se,null),e(Se,J2),e(Se,Yh),e(Yh,G2),e(Se,X2),e(Se,yl),e(yl,Y2),e(yl,oc),e(oc,Z2),e(yl,eA),e(Se,tA),e(Se,wl),e(wl,oA),e(wl,$l),e($l,nA),e(wl,sA),e(Se,rA),e(Se,Zh),e(Zh,aA),e(Se,iA),e(Se,Kt),e(Kt,em),e(em,Al),e(Al,lA),e(Kt,dA),e(Kt,tm),e(tm,Fl),e(Fl,cA),e(Kt,pA),e(Kt,om),e(om,xl),e(xl,hA),e(Kt,mA),e(Kt,nm),e(nm,El),e(El,fA),e(Se,uA),e(Se,qt),w(Ml,qt,null),e(qt,gA),e(qt,fn),e(fn,_A),e(fn,sm),e(sm,bA),e(fn,kA),e(fn,rm),e(rm,vA),e(fn,TA),e(qt,yA),w(Ys,qt,null),e(qt,wA),w(Zs,qt,null),b(o,iu,k),b(o,un,k),e(un,er),e(er,am),w(zl,am,null),e(un,$A),e(un,im),e(im,AA),b(o,lu,k),b(o,De,k),w(jl,De,null),e(De,FA),e(De,lm),e(lm,xA),e(De,EA),e(De,ql),e(ql,MA),e(ql,nc),e(nc,zA),e(ql,jA),e(De,qA),e(De,Pl),e(Pl,PA),e(Pl,Cl),e(Cl,CA),e(Pl,LA),e(De,IA),e(De,dm),e(dm,OA),e(De,NA),e(De,Jt),e(Jt,cm),e(cm,Ll),e(Ll,SA),e(Jt,DA),e(Jt,pm),e(pm,Il),e(Il,WA),e(Jt,UA),e(Jt,hm),e(hm,Ol),e(Ol,BA),e(Jt,RA),e(Jt,mm),e(mm,Nl),e(Nl,HA),e(De,QA),e(De,Pt),w(Sl,Pt,null),e(Pt,VA),e(Pt,gn),e(gn,KA),e(gn,fm),e(fm,JA),e(gn,GA),e(gn,um),e(um,XA),e(gn,YA),e(Pt,ZA),w(tr,Pt,null),e(Pt,eF),w(or,Pt,null),b(o,du,k),b(o,_n,k),e(_n,nr),e(nr,gm),w(Dl,gm,null),e(_n,tF),e(_n,_m),e(_m,oF),b(o,cu,k),b(o,We,k),w(Wl,We,null),e(We,nF),e(We,bn),e(bn,sF),e(bn,bm),e(bm,rF),e(bn,aF),e(bn,km),e(km,iF),e(bn,lF),e(We,dF),e(We,Ul),e(Ul,cF),e(Ul,sc),e(sc,pF),e(Ul,hF),e(We,mF),e(We,Bl),e(Bl,fF),e(Bl,Rl),e(Rl,uF),e(Bl,gF),e(We,_F),e(We,vm),e(vm,bF),e(We,kF),e(We,Gt),e(Gt,Tm),e(Tm,Hl),e(Hl,vF),e(Gt,TF),e(Gt,ym),e(ym,Ql),e(Ql,yF),e(Gt,wF),e(Gt,wm),e(wm,Vl),e(Vl,$F),e(Gt,AF),e(Gt,$m),e($m,Kl),e(Kl,FF),e(We,xF),e(We,Ct),w(Jl,Ct,null),e(Ct,EF),e(Ct,kn),e(kn,MF),e(kn,Am),e(Am,zF),e(kn,jF),e(kn,Fm),e(Fm,qF),e(kn,PF),e(Ct,CF),w(sr,Ct,null),e(Ct,LF),w(rr,Ct,null),pu=!0},p(o,[k]){const Gl={};k&2&&(Gl.$$scope={dirty:k,ctx:o}),$n.$set(Gl);const xm={};k&2&&(xm.$$scope={dirty:k,ctx:o}),Fn.$set(xm);const Em={};k&2&&(Em.$$scope={dirty:k,ctx:o}),xn.$set(Em);const Mm={};k&2&&(Mm.$$scope={dirty:k,ctx:o}),En.$set(Mm);const Xl={};k&2&&(Xl.$$scope={dirty:k,ctx:o}),zn.$set(Xl);const zm={};k&2&&(zm.$$scope={dirty:k,ctx:o}),qn.$set(zm);const jm={};k&2&&(jm.$$scope={dirty:k,ctx:o}),Ln.$set(jm);const qm={};k&2&&(qm.$$scope={dirty:k,ctx:o}),In.$set(qm);const Yl={};k&2&&(Yl.$$scope={dirty:k,ctx:o}),Nn.$set(Yl);const Pm={};k&2&&(Pm.$$scope={dirty:k,ctx:o}),Sn.$set(Pm);const Zl={};k&2&&(Zl.$$scope={dirty:k,ctx:o}),Wn.$set(Zl);const Cm={};k&2&&(Cm.$$scope={dirty:k,ctx:o}),Un.$set(Cm);const Lm={};k&2&&(Lm.$$scope={dirty:k,ctx:o}),Bn.$set(Lm);const Im={};k&2&&(Im.$$scope={dirty:k,ctx:o}),Hn.$set(Im);const Om={};k&2&&(Om.$$scope={dirty:k,ctx:o}),Qn.$set(Om);const Nm={};k&2&&(Nm.$$scope={dirty:k,ctx:o}),Vn.$set(Nm);const Sm={};k&2&&(Sm.$$scope={dirty:k,ctx:o}),Kn.$set(Sm);const ed={};k&2&&(ed.$$scope={dirty:k,ctx:o}),Jn.$set(ed);const Dm={};k&2&&(Dm.$$scope={dirty:k,ctx:o}),Xn.$set(Dm);const Wm={};k&2&&(Wm.$$scope={dirty:k,ctx:o}),Yn.$set(Wm);const Xt={};k&2&&(Xt.$$scope={dirty:k,ctx:o}),es.$set(Xt);const Um={};k&2&&(Um.$$scope={dirty:k,ctx:o}),ts.$set(Um);const Bm={};k&2&&(Bm.$$scope={dirty:k,ctx:o}),os.$set(Bm);const Rm={};k&2&&(Rm.$$scope={dirty:k,ctx:o}),ss.$set(Rm);const td={};k&2&&(td.$$scope={dirty:k,ctx:o}),rs.$set(td);const Hm={};k&2&&(Hm.$$scope={dirty:k,ctx:o}),as.$set(Hm);const Qm={};k&2&&(Qm.$$scope={dirty:k,ctx:o}),ls.$set(Qm);const Vm={};k&2&&(Vm.$$scope={dirty:k,ctx:o}),ds.$set(Vm);const Yt={};k&2&&(Yt.$$scope={dirty:k,ctx:o}),cs.$set(Yt);const Zt={};k&2&&(Zt.$$scope={dirty:k,ctx:o}),hs.$set(Zt);const Km={};k&2&&(Km.$$scope={dirty:k,ctx:o}),ms.$set(Km);const Jm={};k&2&&(Jm.$$scope={dirty:k,ctx:o}),fs.$set(Jm);const Gm={};k&2&&(Gm.$$scope={dirty:k,ctx:o}),gs.$set(Gm);const vn={};k&2&&(vn.$$scope={dirty:k,ctx:o}),_s.$set(vn);const Xm={};k&2&&(Xm.$$scope={dirty:k,ctx:o}),bs.$set(Xm);const Ym={};k&2&&(Ym.$$scope={dirty:k,ctx:o}),ks.$set(Ym);const od={};k&2&&(od.$$scope={dirty:k,ctx:o}),Ts.$set(od);const Zm={};k&2&&(Zm.$$scope={dirty:k,ctx:o}),ys.$set(Zm);const ef={};k&2&&(ef.$$scope={dirty:k,ctx:o}),ws.$set(ef);const tf={};k&2&&(tf.$$scope={dirty:k,ctx:o}),$s.$set(tf);const Ae={};k&2&&(Ae.$$scope={dirty:k,ctx:o}),Fs.$set(Ae);const nd={};k&2&&(nd.$$scope={dirty:k,ctx:o}),xs.$set(nd);const of={};k&2&&(of.$$scope={dirty:k,ctx:o}),Es.$set(of);const sd={};k&2&&(sd.$$scope={dirty:k,ctx:o}),zs.$set(sd);const nf={};k&2&&(nf.$$scope={dirty:k,ctx:o}),js.$set(nf);const sf={};k&2&&(sf.$$scope={dirty:k,ctx:o}),qs.$set(sf);const rd={};k&2&&(rd.$$scope={dirty:k,ctx:o}),Ps.$set(rd);const rf={};k&2&&(rf.$$scope={dirty:k,ctx:o}),Ls.$set(rf);const Tn={};k&2&&(Tn.$$scope={dirty:k,ctx:o}),Is.$set(Tn);const af={};k&2&&(af.$$scope={dirty:k,ctx:o}),Os.$set(af);const ad={};k&2&&(ad.$$scope={dirty:k,ctx:o}),Ns.$set(ad);const rc={};k&2&&(rc.$$scope={dirty:k,ctx:o}),Ds.$set(rc);const lf={};k&2&&(lf.$$scope={dirty:k,ctx:o}),Ws.$set(lf);const ac={};k&2&&(ac.$$scope={dirty:k,ctx:o}),Bs.$set(ac);const df={};k&2&&(df.$$scope={dirty:k,ctx:o}),Rs.$set(df);const id={};k&2&&(id.$$scope={dirty:k,ctx:o}),Qs.$set(id);const ld={};k&2&&(ld.$$scope={dirty:k,ctx:o}),Vs.$set(ld);const cf={};k&2&&(cf.$$scope={dirty:k,ctx:o}),Js.$set(cf);const eo={};k&2&&(eo.$$scope={dirty:k,ctx:o}),Gs.$set(eo);const pf={};k&2&&(pf.$$scope={dirty:k,ctx:o}),Ys.$set(pf);const yn={};k&2&&(yn.$$scope={dirty:k,ctx:o}),Zs.$set(yn);const hf={};k&2&&(hf.$$scope={dirty:k,ctx:o}),tr.$set(hf);const mf={};k&2&&(mf.$$scope={dirty:k,ctx:o}),or.$set(mf);const ff={};k&2&&(ff.$$scope={dirty:k,ctx:o}),sr.$set(ff);const dd={};k&2&&(dd.$$scope={dirty:k,ctx:o}),rr.$set(dd)},i(o){pu||($(l.$$.fragment,o),$(Z.$$.fragment,o),$(Mr.$$.fragment,o),$(zr.$$.fragment,o),$($n.$$.fragment,o),$(qr.$$.fragment,o),$(Pr.$$.fragment,o),$(Fn.$$.fragment,o),$(xn.$$.fragment,o),$(En.$$.fragment,o),$(Nr.$$.fragment,o),$(Dr.$$.fragment,o),$(Ur.$$.fragment,o),$(zn.$$.fragment,o),$(Br.$$.fragment,o),$(Rr.$$.fragment,o),$(Hr.$$.fragment,o),$(Vr.$$.fragment,o),$(Jr.$$.fragment,o),$(qn.$$.fragment,o),$(Gr.$$.fragment,o),$(Xr.$$.fragment,o),$(Zr.$$.fragment,o),$(ta.$$.fragment,o),$(oa.$$.fragment,o),$(aa.$$.fragment,o),$(Ln.$$.fragment,o),$(In.$$.fragment,o),$(ia.$$.fragment,o),$(la.$$.fragment,o),$(ha.$$.fragment,o),$(Nn.$$.fragment,o),$(Sn.$$.fragment,o),$(ma.$$.fragment,o),$(fa.$$.fragment,o),$(ka.$$.fragment,o),$(Wn.$$.fragment,o),$(Un.$$.fragment,o),$(Bn.$$.fragment,o),$(va.$$.fragment,o),$(Ta.$$.fragment,o),$(Aa.$$.fragment,o),$(Hn.$$.fragment,o),$(Qn.$$.fragment,o),$(Vn.$$.fragment,o),$(Kn.$$.fragment,o),$(Jn.$$.fragment,o),$(Fa.$$.fragment,o),$(xa.$$.fragment,o),$(ja.$$.fragment,o),$(Xn.$$.fragment,o),$(Yn.$$.fragment,o),$(qa.$$.fragment,o),$(Pa.$$.fragment,o),$(Oa.$$.fragment,o),$(es.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(Na.$$.fragment,o),$(Sa.$$.fragment,o),$(Ba.$$.fragment,o),$(ss.$$.fragment,o),$(rs.$$.fragment,o),$(as.$$.fragment,o),$(Ra.$$.fragment,o),$(Ha.$$.fragment,o),$(ls.$$.fragment,o),$(Ja.$$.fragment,o),$(ds.$$.fragment,o),$(cs.$$.fragment,o),$(Ga.$$.fragment,o),$(Xa.$$.fragment,o),$(hs.$$.fragment,o),$(ti.$$.fragment,o),$(ms.$$.fragment,o),$(fs.$$.fragment,o),$(oi.$$.fragment,o),$(ni.$$.fragment,o),$(gs.$$.fragment,o),$(li.$$.fragment,o),$(_s.$$.fragment,o),$(bs.$$.fragment,o),$(ks.$$.fragment,o),$(di.$$.fragment,o),$(ci.$$.fragment,o),$(Ts.$$.fragment,o),$(fi.$$.fragment,o),$(ys.$$.fragment,o),$(ws.$$.fragment,o),$($s.$$.fragment,o),$(ui.$$.fragment,o),$(gi.$$.fragment,o),$(Fs.$$.fragment,o),$(vi.$$.fragment,o),$(xs.$$.fragment,o),$(Es.$$.fragment,o),$(Ti.$$.fragment,o),$(yi.$$.fragment,o),$(zs.$$.fragment,o),$(Fi.$$.fragment,o),$(js.$$.fragment,o),$(qs.$$.fragment,o),$(Ps.$$.fragment,o),$(xi.$$.fragment,o),$(Ei.$$.fragment,o),$(Ls.$$.fragment,o),$(qi.$$.fragment,o),$(Is.$$.fragment,o),$(Os.$$.fragment,o),$(Ns.$$.fragment,o),$(Pi.$$.fragment,o),$(Ci.$$.fragment,o),$(Ui.$$.fragment,o),$(Ds.$$.fragment,o),$(Ws.$$.fragment,o),$(Bi.$$.fragment,o),$(Ri.$$.fragment,o),$(Yi.$$.fragment,o),$(Bs.$$.fragment,o),$(Rs.$$.fragment,o),$(Zi.$$.fragment,o),$(el.$$.fragment,o),$(dl.$$.fragment,o),$(Qs.$$.fragment,o),$(Vs.$$.fragment,o),$(cl.$$.fragment,o),$(pl.$$.fragment,o),$(kl.$$.fragment,o),$(Js.$$.fragment,o),$(Gs.$$.fragment,o),$(vl.$$.fragment,o),$(Tl.$$.fragment,o),$(Ml.$$.fragment,o),$(Ys.$$.fragment,o),$(Zs.$$.fragment,o),$(zl.$$.fragment,o),$(jl.$$.fragment,o),$(Sl.$$.fragment,o),$(tr.$$.fragment,o),$(or.$$.fragment,o),$(Dl.$$.fragment,o),$(Wl.$$.fragment,o),$(Jl.$$.fragment,o),$(sr.$$.fragment,o),$(rr.$$.fragment,o),pu=!0)},o(o){A(l.$$.fragment,o),A(Z.$$.fragment,o),A(Mr.$$.fragment,o),A(zr.$$.fragment,o),A($n.$$.fragment,o),A(qr.$$.fragment,o),A(Pr.$$.fragment,o),A(Fn.$$.fragment,o),A(xn.$$.fragment,o),A(En.$$.fragment,o),A(Nr.$$.fragment,o),A(Dr.$$.fragment,o),A(Ur.$$.fragment,o),A(zn.$$.fragment,o),A(Br.$$.fragment,o),A(Rr.$$.fragment,o),A(Hr.$$.fragment,o),A(Vr.$$.fragment,o),A(Jr.$$.fragment,o),A(qn.$$.fragment,o),A(Gr.$$.fragment,o),A(Xr.$$.fragment,o),A(Zr.$$.fragment,o),A(ta.$$.fragment,o),A(oa.$$.fragment,o),A(aa.$$.fragment,o),A(Ln.$$.fragment,o),A(In.$$.fragment,o),A(ia.$$.fragment,o),A(la.$$.fragment,o),A(ha.$$.fragment,o),A(Nn.$$.fragment,o),A(Sn.$$.fragment,o),A(ma.$$.fragment,o),A(fa.$$.fragment,o),A(ka.$$.fragment,o),A(Wn.$$.fragment,o),A(Un.$$.fragment,o),A(Bn.$$.fragment,o),A(va.$$.fragment,o),A(Ta.$$.fragment,o),A(Aa.$$.fragment,o),A(Hn.$$.fragment,o),A(Qn.$$.fragment,o),A(Vn.$$.fragment,o),A(Kn.$$.fragment,o),A(Jn.$$.fragment,o),A(Fa.$$.fragment,o),A(xa.$$.fragment,o),A(ja.$$.fragment,o),A(Xn.$$.fragment,o),A(Yn.$$.fragment,o),A(qa.$$.fragment,o),A(Pa.$$.fragment,o),A(Oa.$$.fragment,o),A(es.$$.fragment,o),A(ts.$$.fragment,o),A(os.$$.fragment,o),A(Na.$$.fragment,o),A(Sa.$$.fragment,o),A(Ba.$$.fragment,o),A(ss.$$.fragment,o),A(rs.$$.fragment,o),A(as.$$.fragment,o),A(Ra.$$.fragment,o),A(Ha.$$.fragment,o),A(ls.$$.fragment,o),A(Ja.$$.fragment,o),A(ds.$$.fragment,o),A(cs.$$.fragment,o),A(Ga.$$.fragment,o),A(Xa.$$.fragment,o),A(hs.$$.fragment,o),A(ti.$$.fragment,o),A(ms.$$.fragment,o),A(fs.$$.fragment,o),A(oi.$$.fragment,o),A(ni.$$.fragment,o),A(gs.$$.fragment,o),A(li.$$.fragment,o),A(_s.$$.fragment,o),A(bs.$$.fragment,o),A(ks.$$.fragment,o),A(di.$$.fragment,o),A(ci.$$.fragment,o),A(Ts.$$.fragment,o),A(fi.$$.fragment,o),A(ys.$$.fragment,o),A(ws.$$.fragment,o),A($s.$$.fragment,o),A(ui.$$.fragment,o),A(gi.$$.fragment,o),A(Fs.$$.fragment,o),A(vi.$$.fragment,o),A(xs.$$.fragment,o),A(Es.$$.fragment,o),A(Ti.$$.fragment,o),A(yi.$$.fragment,o),A(zs.$$.fragment,o),A(Fi.$$.fragment,o),A(js.$$.fragment,o),A(qs.$$.fragment,o),A(Ps.$$.fragment,o),A(xi.$$.fragment,o),A(Ei.$$.fragment,o),A(Ls.$$.fragment,o),A(qi.$$.fragment,o),A(Is.$$.fragment,o),A(Os.$$.fragment,o),A(Ns.$$.fragment,o),A(Pi.$$.fragment,o),A(Ci.$$.fragment,o),A(Ui.$$.fragment,o),A(Ds.$$.fragment,o),A(Ws.$$.fragment,o),A(Bi.$$.fragment,o),A(Ri.$$.fragment,o),A(Yi.$$.fragment,o),A(Bs.$$.fragment,o),A(Rs.$$.fragment,o),A(Zi.$$.fragment,o),A(el.$$.fragment,o),A(dl.$$.fragment,o),A(Qs.$$.fragment,o),A(Vs.$$.fragment,o),A(cl.$$.fragment,o),A(pl.$$.fragment,o),A(kl.$$.fragment,o),A(Js.$$.fragment,o),A(Gs.$$.fragment,o),A(vl.$$.fragment,o),A(Tl.$$.fragment,o),A(Ml.$$.fragment,o),A(Ys.$$.fragment,o),A(Zs.$$.fragment,o),A(zl.$$.fragment,o),A(jl.$$.fragment,o),A(Sl.$$.fragment,o),A(tr.$$.fragment,o),A(or.$$.fragment,o),A(Dl.$$.fragment,o),A(Wl.$$.fragment,o),A(Jl.$$.fragment,o),A(sr.$$.fragment,o),A(rr.$$.fragment,o),pu=!1},d(o){t(d),o&&t(g),o&&t(c),F(l),o&&t(I),o&&t(M),F(Z),o&&t(ce),o&&t(X),o&&t(P),o&&t(se),o&&t(pe),o&&t(q),o&&t(J),o&&t(ae),o&&t(he),o&&t(ie),o&&t(me),o&&t(B),o&&t(xe),o&&t(C),o&&t(fe),o&&t(Te),F(Mr),o&&t(uf),o&&t(bt),F(zr),F($n),o&&t(gf),o&&t(ko),F(qr),o&&t(_f),o&&t(ye),F(Pr),F(Fn),F(xn),F(En),F(Nr),F(Dr),F(Ur),F(zn),F(Br),o&&t(bf),o&&t(To),F(Rr),o&&t(kf),o&&t(kt),F(Hr),F(Vr),F(Jr),F(qn),o&&t(vf),o&&t(yo),F(Gr),o&&t(Tf),o&&t(wo),F(Xr),o&&t(yf),o&&t($o),F(Zr),o&&t(wf),o&&t(Ao),F(ta),o&&t($f),o&&t(Ge),F(oa),F(aa),F(Ln),F(In),o&&t(Af),o&&t(xo),F(ia),o&&t(Ff),o&&t(Xe),F(la),F(ha),F(Nn),F(Sn),o&&t(xf),o&&t(zo),F(ma),o&&t(Ef),o&&t(Ye),F(fa),F(ka),F(Wn),F(Un),F(Bn),o&&t(Mf),o&&t(qo),F(va),o&&t(zf),o&&t(Ze),F(Ta),F(Aa),F(Hn),F(Qn),F(Vn),F(Kn),F(Jn),o&&t(jf),o&&t(Co),F(Fa),o&&t(qf),o&&t(et),F(xa),F(ja),F(Xn),F(Yn),o&&t(Pf),o&&t(Io),F(qa),o&&t(Cf),o&&t(tt),F(Pa),F(Oa),F(es),F(ts),F(os),o&&t(Lf),o&&t(No),F(Na),o&&t(If),o&&t(ot),F(Sa),F(Ba),F(ss),F(rs),F(as),o&&t(Of),o&&t(Wo),F(Ra),o&&t(Nf),o&&t(Be),F(Ha),F(ls),F(Ja),F(ds),F(cs),o&&t(Sf),o&&t(Bo),F(Ga),o&&t(Df),o&&t(Re),F(Xa),F(hs),F(ti),F(ms),F(fs),o&&t(Wf),o&&t(Qo),F(oi),o&&t(Uf),o&&t(He),F(ni),F(gs),F(li),F(_s),F(bs),F(ks),o&&t(Bf),o&&t(Ko),F(di),o&&t(Rf),o&&t(Qe),F(ci),F(Ts),F(fi),F(ys),F(ws),F($s),o&&t(Hf),o&&t(Go),F(ui),o&&t(Qf),o&&t(Ve),F(gi),F(Fs),F(vi),F(xs),F(Es),o&&t(Vf),o&&t(Yo),F(Ti),o&&t(Kf),o&&t(Ke),F(yi),F(zs),F(Fi),F(js),F(qs),F(Ps),o&&t(Jf),o&&t(en),F(xi),o&&t(Gf),o&&t(Je),F(Ei),F(Ls),F(qi),F(Is),F(Os),F(Ns),o&&t(Xf),o&&t(nn),F(Pi),o&&t(Yf),o&&t(Le),F(Ci),F(Ui),F(Ds),F(Ws),o&&t(Zf),o&&t(rn),F(Bi),o&&t(eu),o&&t(Ie),F(Ri),F(Yi),F(Bs),F(Rs),o&&t(tu),o&&t(dn),F(Zi),o&&t(ou),o&&t(Oe),F(el),F(dl),F(Qs),F(Vs),o&&t(nu),o&&t(pn),F(cl),o&&t(su),o&&t(Ne),F(pl),F(kl),F(Js),F(Gs),o&&t(ru),o&&t(mn),F(vl),o&&t(au),o&&t(Se),F(Tl),F(Ml),F(Ys),F(Zs),o&&t(iu),o&&t(un),F(zl),o&&t(lu),o&&t(De),F(jl),F(Sl),F(tr),F(or),o&&t(du),o&&t(_n),F(Dl),o&&t(cu),o&&t(We),F(Wl),F(Jl),F(sr),F(rr)}}}const DM={local:"albert",sections:[{local:"overview",title:"Overview"},{local:"transformers.AlbertConfig",title:"AlbertConfig"},{local:"transformers.AlbertTokenizer",title:"AlbertTokenizer"},{local:"transformers.AlbertTokenizerFast",title:"AlbertTokenizerFast"},{local:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",title:"Albert specific outputs"},{local:"transformers.AlbertModel",title:"AlbertModel"},{local:"transformers.AlbertForPreTraining",title:"AlbertForPreTraining"},{local:"transformers.AlbertForMaskedLM",title:"AlbertForMaskedLM"},{local:"transformers.AlbertForSequenceClassification",title:"AlbertForSequenceClassification"},{local:"transformers.AlbertForMultipleChoice",title:"AlbertForMultipleChoice"},{local:"transformers.AlbertForTokenClassification",title:"AlbertForTokenClassification"},{local:"transformers.AlbertForQuestionAnswering",title:"AlbertForQuestionAnswering"},{local:"transformers.TFAlbertModel",title:"TFAlbertModel"},{local:"transformers.TFAlbertForPreTraining",title:"TFAlbertForPreTraining"},{local:"transformers.TFAlbertForMaskedLM",title:"TFAlbertForMaskedLM"},{local:"transformers.TFAlbertForSequenceClassification",title:"TFAlbertForSequenceClassification"},{local:"transformers.TFAlbertForMultipleChoice",title:"TFAlbertForMultipleChoice"},{local:"transformers.TFAlbertForTokenClassification",title:"TFAlbertForTokenClassification"},{local:"transformers.TFAlbertForQuestionAnswering",title:"TFAlbertForQuestionAnswering"},{local:"transformers.FlaxAlbertModel",title:"FlaxAlbertModel"},{local:"transformers.FlaxAlbertForPreTraining",title:"FlaxAlbertForPreTraining"},{local:"transformers.FlaxAlbertForMaskedLM",title:"FlaxAlbertForMaskedLM"},{local:"transformers.FlaxAlbertForSequenceClassification",title:"FlaxAlbertForSequenceClassification"},{local:"transformers.FlaxAlbertForMultipleChoice",title:"FlaxAlbertForMultipleChoice"},{local:"transformers.FlaxAlbertForTokenClassification",title:"FlaxAlbertForTokenClassification"},{local:"transformers.FlaxAlbertForQuestionAnswering",title:"FlaxAlbertForQuestionAnswering"}],title:"ALBERT"};function WM(x){return A3(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class KM extends T3{constructor(d){super();y3(this,d,WM,SM,w3,{})}}export{KM as default,DM as metadata};
