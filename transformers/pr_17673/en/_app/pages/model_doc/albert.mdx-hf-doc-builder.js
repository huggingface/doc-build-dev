import{S as m3,i as f3,s as u3,e as n,k as h,w as T,t as a,M as g3,c as s,d as t,m,a as r,x as y,h as i,b as u,G as e,g as b,y as w,q as $,o as A,B as F,v as _3,L as oe}from"../../chunks/vendor-hf-doc-builder.js";import{T as ye}from"../../chunks/Tip-hf-doc-builder.js";import{D as N}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ne}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ae}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as te}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function b3(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertConfig, AlbertModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),g=a("Examples:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Examples:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function k3(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer

tokenizer = AlbertTokenizer(vocab_file="Your/Sentincepiece/Model/Path", do_lower_case=False)
tokenizer("I love huggingface.")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer(vocab_file=<span class="hljs-string">&quot;Your/Sentincepiece/Model/Path&quot;</span>, do_lower_case=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer(<span class="hljs-string">&quot;I love huggingface.&quot;</span>)
{<span class="hljs-string">&#x27;input_ids&#x27;</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">97</span>, <span class="hljs-number">9</span>, <span class="hljs-number">16</span>, <span class="hljs-number">5</span>, <span class="hljs-number">20</span>, <span class="hljs-number">2</span>], <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>], <span class="hljs-string">&#x27;attention_mask&#x27;</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>]}`}}),{c(){d=n("p"),g=a("You could use your sentincepiece model to build the AlbertTokenizer:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"You could use your sentincepiece model to build the AlbertTokenizer:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function v3(x){let d,g,c,p,_,l,f,E;return f=new ne({props:{code:`tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
tokenizer("I love huggingface.")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer(<span class="hljs-string">&quot;I love huggingface.&quot;</span>)
{<span class="hljs-string">&#x27;input_ids&#x27;</span>: [<span class="hljs-number">2</span>, <span class="hljs-number">31</span>, <span class="hljs-number">339</span>, <span class="hljs-number">20676</span>, <span class="hljs-number">6413</span>, <span class="hljs-number">9</span>, <span class="hljs-number">3</span>], <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>], <span class="hljs-string">&#x27;attention_mask&#x27;</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>]}`}}),{c(){d=n("p"),g=a("You could still use AlbertTokenizer with the "),c=n("a"),p=a("pipeline()"),_=a(":"),l=h(),T(f.$$.fragment),this.h()},l(q){d=s(q,"P",{});var L=r(d);g=i(L,"You could still use AlbertTokenizer with the "),c=s(L,"A",{href:!0});var M=r(c);p=i(M,"pipeline()"),M.forEach(t),_=i(L,":"),L.forEach(t),l=m(q),y(f.$$.fragment,q),this.h()},h(){u(c,"href","/docs/transformers/pr_17673/en/main_classes/pipelines#transformers.pipeline")},m(q,L){b(q,d,L),e(d,g),e(d,c),e(c,p),e(d,_),b(q,l,L),w(f,q,L),E=!0},p:oe,i(q){E||($(f.$$.fragment,q),E=!0)},o(q){A(f.$$.fragment,q),E=!1},d(q){q&&t(d),q&&t(l),F(f,q)}}}function T3(x){let d,g,c,p,_;return p=new ne({props:{code:`tokenizer = AlbertTokenizer(vocab_file="Your/Sentincepiece/Model/Path", do_lower_case=False)
tokenizer.tokenize("[CLS][SEP]")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer(vocab_file=<span class="hljs-string">&quot;Your/Sentincepiece/Model/Path&quot;</span>, do_lower_case=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.tokenize(<span class="hljs-string">&quot;[CLS][SEP]&quot;</span>)
[<span class="hljs-string">&#x27;[&#x27;</span>, <span class="hljs-string">&#x27;CL&#x27;</span>, <span class="hljs-string">&#x27;S&#x27;</span>, <span class="hljs-string">&#x27;][&#x27;</span>, <span class="hljs-string">&#x27;SE&#x27;</span>, <span class="hljs-string">&#x27;P&#x27;</span>, <span class="hljs-string">&#x27;]&#x27;</span>]`}}),{c(){d=n("p"),g=a("For example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"For example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function y3(x){let d,g,c,p,_,l,f,E;return f=new ne({props:{code:`tokenizer.save_pretrained("Your/Save/Path")
tokenizer = AlbertTokenizer.from_pretrained("Your/Save/Path")
tokenizer.tokenize("[CLS][SEP]")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.save_pretrained(<span class="hljs-string">&quot;Your/Save/Path&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;Your/Save/Path&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.tokenize(<span class="hljs-string">&quot;[CLS][SEP]&quot;</span>)
[<span class="hljs-string">&#x27;[CLS]&#x27;</span>, <span class="hljs-string">&#x27;[SEP]&#x27;</span>]`}}),{c(){d=n("p"),g=a("Using "),c=n("code"),p=a("from_pretrained"),_=a(":"),l=h(),T(f.$$.fragment)},l(q){d=s(q,"P",{});var L=r(d);g=i(L,"Using "),c=s(L,"CODE",{});var M=r(c);p=i(M,"from_pretrained"),M.forEach(t),_=i(L,":"),L.forEach(t),l=m(q),y(f.$$.fragment,q)},m(q,L){b(q,d,L),e(d,g),e(d,c),e(c,p),e(d,_),b(q,l,L),w(f,q,L),E=!0},p:oe,i(q){E||($(f.$$.fragment,q),E=!0)},o(q){A(f.$$.fragment,q),E=!1},d(q){q&&t(d),q&&t(l),F(f,q)}}}function w3(x){let d,g,c,p,_,l,f,E,q,L;return f=new te({props:{anchor:"transformers.AlbertTokenizer.example-3",$$slots:{default:[T3]},$$scope:{ctx:x}}}),q=new te({props:{anchor:"transformers.AlbertTokenizer.example-4",$$slots:{default:[y3]},$$scope:{ctx:x}}}),{c(){d=n("p"),g=a(`Due to some internal reasons, unexpected word segmentation may occur when initializing a tokenizer from
scratch. You could try to use `),c=n("code"),p=a("from_pretrained"),_=a("."),l=h(),T(f.$$.fragment),E=h(),T(q.$$.fragment)},l(M){d=s(M,"P",{});var S=r(d);g=i(S,`Due to some internal reasons, unexpected word segmentation may occur when initializing a tokenizer from
scratch. You could try to use `),c=s(S,"CODE",{});var O=r(c);p=i(O,"from_pretrained"),O.forEach(t),_=i(S,"."),S.forEach(t),l=m(M),y(f.$$.fragment,M),E=m(M),y(q.$$.fragment,M)},m(M,S){b(M,d,S),e(d,g),e(d,c),e(c,p),e(d,_),b(M,l,S),w(f,M,S),b(M,E,S),w(q,M,S),L=!0},p(M,S){const O={};S&2&&(O.$$scope={dirty:S,ctx:M}),f.$set(O);const Z={};S&2&&(Z.$$scope={dirty:S,ctx:M}),q.$set(Z)},i(M){L||($(f.$$.fragment,M),$(q.$$.fragment,M),L=!0)},o(M){A(f.$$.fragment,M),A(q.$$.fragment,M),L=!1},d(M){M&&t(d),M&&t(l),F(f,M),M&&t(E),F(q,M)}}}function $3(x){let d,g,c,p,_;return p=new ne({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=n("p"),g=a("sequence pair mask has the following format:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"sequence pair mask has the following format:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function A3(x){let d,g,c,p,_;return p=new ne({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=n("p"),g=a("sequence pair mask has the following format:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"sequence pair mask has the following format:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function F3(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function x3(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, AlbertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function E3(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function M3(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, AlbertForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>sop_logits = outputs.sop_logits`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function z3(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function j3(x){let d,g,c,p,_;return p=new ne({props:{code:`import torch
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
<span class="hljs-string">&#x27;france&#x27;</span>`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function q3(x){let d,g;return d=new ne({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)
outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.81</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function P3(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function C3(x){let d,g,c,p,_;return p=new ne({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=n("p"),g=a("Example of single-label classification:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example of single-label classification:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function L3(x){let d,g;return d=new ne({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = AlbertForSequenceClassification.from_pretrained("textattack/albert-base-v2-imdb", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/albert-base-v2-imdb&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.12</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function I3(x){let d,g,c,p,_;return p=new ne({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=n("p"),g=a("Example of multi-label classification:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example of multi-label classification:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function O3(x){let d,g;return d=new ne({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function N3(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function S3(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, AlbertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function D3(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function W3(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, AlbertForTokenClassification
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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function U3(x){let d,g;return d=new ne({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.66</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function B3(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function R3(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, AlbertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function H3(x){let d,g;return d=new ne({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.36</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Q3(x){let d,g,c,p,_,l,f,E,q,L,M,S,O,Z,ue,Q,ge,ce,X,D,re,ee,j,C,se,V,_e,be,K,ke,pe,P,ve,J,ae,le,G,he,ie,W,me,B,de;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=h(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),E=n("li"),q=a("having all inputs as a list, tuple or dict in the first positional arguments."),L=h(),M=n("p"),S=a("This second option is useful when using "),O=n("code"),Z=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=n("code"),ge=a("model(inputs)"),ce=a("."),X=h(),D=n("p"),re=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=h(),j=n("ul"),C=n("li"),se=a("a single Tensor with "),V=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),K=n("code"),ke=a("model(inputs_ids)"),pe=h(),P=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=n("code"),ae=a("model([input_ids, attention_mask])"),le=a(" or "),G=n("code"),he=a("model([input_ids, attention_mask, token_type_ids])"),ie=h(),W=n("li"),me=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),de=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),c=m(v),p=s(v,"UL",{});var Y=r(p);_=s(Y,"LI",{});var Ee=r(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=m(Y),E=s(Y,"LI",{});var Fe=r(E);q=i(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),Y.forEach(t),L=m(v),M=s(v,"P",{});var I=r(M);S=i(I,"This second option is useful when using "),O=s(I,"CODE",{});var Me=r(O);Z=i(Me,"tf.keras.Model.fit"),Me.forEach(t),ue=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=s(I,"CODE",{});var we=r(Q);ge=i(we,"model(inputs)"),we.forEach(t),ce=i(I,"."),I.forEach(t),X=m(v),D=s(v,"P",{});var ze=r(D);re=i(ze,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ze.forEach(t),ee=m(v),j=s(v,"UL",{});var U=r(j);C=s(U,"LI",{});var R=r(C);se=i(R,"a single Tensor with "),V=s(R,"CODE",{});var je=r(V);_e=i(je,"input_ids"),je.forEach(t),be=i(R," only and nothing else: "),K=s(R,"CODE",{});var qe=r(K);ke=i(qe,"model(inputs_ids)"),qe.forEach(t),R.forEach(t),pe=m(U),P=s(U,"LI",{});var H=r(P);ve=i(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s(H,"CODE",{});var Pe=r(J);ae=i(Pe,"model([input_ids, attention_mask])"),Pe.forEach(t),le=i(H," or "),G=s(H,"CODE",{});var Ce=r(G);he=i(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),H.forEach(t),ie=m(U),W=s(U,"LI",{});var fe=r(W);me=i(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=s(fe,"CODE",{});var Te=r(B);de=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),fe.forEach(t),U.forEach(t)},m(v,z){b(v,d,z),e(d,g),b(v,c,z),b(v,p,z),e(p,_),e(_,l),e(p,f),e(p,E),e(E,q),b(v,L,z),b(v,M,z),e(M,S),e(M,O),e(O,Z),e(M,ue),e(M,Q),e(Q,ge),e(M,ce),b(v,X,z),b(v,D,z),e(D,re),b(v,ee,z),b(v,j,z),e(j,C),e(C,se),e(C,V),e(V,_e),e(C,be),e(C,K),e(K,ke),e(j,pe),e(j,P),e(P,ve),e(P,J),e(J,ae),e(P,le),e(P,G),e(G,he),e(j,ie),e(j,W),e(W,me),e(W,B),e(B,de)},d(v){v&&t(d),v&&t(c),v&&t(p),v&&t(L),v&&t(M),v&&t(X),v&&t(D),v&&t(ee),v&&t(j)}}}function V3(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function K3(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, TFAlbertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function J3(x){let d,g,c,p,_,l,f,E,q,L,M,S,O,Z,ue,Q,ge,ce,X,D,re,ee,j,C,se,V,_e,be,K,ke,pe,P,ve,J,ae,le,G,he,ie,W,me,B,de;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=h(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),E=n("li"),q=a("having all inputs as a list, tuple or dict in the first positional arguments."),L=h(),M=n("p"),S=a("This second option is useful when using "),O=n("code"),Z=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=n("code"),ge=a("model(inputs)"),ce=a("."),X=h(),D=n("p"),re=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=h(),j=n("ul"),C=n("li"),se=a("a single Tensor with "),V=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),K=n("code"),ke=a("model(inputs_ids)"),pe=h(),P=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=n("code"),ae=a("model([input_ids, attention_mask])"),le=a(" or "),G=n("code"),he=a("model([input_ids, attention_mask, token_type_ids])"),ie=h(),W=n("li"),me=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),de=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),c=m(v),p=s(v,"UL",{});var Y=r(p);_=s(Y,"LI",{});var Ee=r(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=m(Y),E=s(Y,"LI",{});var Fe=r(E);q=i(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),Y.forEach(t),L=m(v),M=s(v,"P",{});var I=r(M);S=i(I,"This second option is useful when using "),O=s(I,"CODE",{});var Me=r(O);Z=i(Me,"tf.keras.Model.fit"),Me.forEach(t),ue=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=s(I,"CODE",{});var we=r(Q);ge=i(we,"model(inputs)"),we.forEach(t),ce=i(I,"."),I.forEach(t),X=m(v),D=s(v,"P",{});var ze=r(D);re=i(ze,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ze.forEach(t),ee=m(v),j=s(v,"UL",{});var U=r(j);C=s(U,"LI",{});var R=r(C);se=i(R,"a single Tensor with "),V=s(R,"CODE",{});var je=r(V);_e=i(je,"input_ids"),je.forEach(t),be=i(R," only and nothing else: "),K=s(R,"CODE",{});var qe=r(K);ke=i(qe,"model(inputs_ids)"),qe.forEach(t),R.forEach(t),pe=m(U),P=s(U,"LI",{});var H=r(P);ve=i(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s(H,"CODE",{});var Pe=r(J);ae=i(Pe,"model([input_ids, attention_mask])"),Pe.forEach(t),le=i(H," or "),G=s(H,"CODE",{});var Ce=r(G);he=i(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),H.forEach(t),ie=m(U),W=s(U,"LI",{});var fe=r(W);me=i(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=s(fe,"CODE",{});var Te=r(B);de=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),fe.forEach(t),U.forEach(t)},m(v,z){b(v,d,z),e(d,g),b(v,c,z),b(v,p,z),e(p,_),e(_,l),e(p,f),e(p,E),e(E,q),b(v,L,z),b(v,M,z),e(M,S),e(M,O),e(O,Z),e(M,ue),e(M,Q),e(Q,ge),e(M,ce),b(v,X,z),b(v,D,z),e(D,re),b(v,ee,z),b(v,j,z),e(j,C),e(C,se),e(C,V),e(V,_e),e(C,be),e(C,K),e(K,ke),e(j,pe),e(j,P),e(P,ve),e(P,J),e(J,ae),e(P,le),e(P,G),e(G,he),e(j,ie),e(j,W),e(W,me),e(W,B),e(B,de)},d(v){v&&t(d),v&&t(c),v&&t(p),v&&t(L),v&&t(M),v&&t(X),v&&t(D),v&&t(ee),v&&t(j)}}}function G3(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function X3(x){let d,g,c,p,_;return p=new ne({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>sop_logits = outputs.sop_logits`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Y3(x){let d,g,c,p,_,l,f,E,q,L,M,S,O,Z,ue,Q,ge,ce,X,D,re,ee,j,C,se,V,_e,be,K,ke,pe,P,ve,J,ae,le,G,he,ie,W,me,B,de;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=h(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),E=n("li"),q=a("having all inputs as a list, tuple or dict in the first positional arguments."),L=h(),M=n("p"),S=a("This second option is useful when using "),O=n("code"),Z=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=n("code"),ge=a("model(inputs)"),ce=a("."),X=h(),D=n("p"),re=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=h(),j=n("ul"),C=n("li"),se=a("a single Tensor with "),V=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),K=n("code"),ke=a("model(inputs_ids)"),pe=h(),P=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=n("code"),ae=a("model([input_ids, attention_mask])"),le=a(" or "),G=n("code"),he=a("model([input_ids, attention_mask, token_type_ids])"),ie=h(),W=n("li"),me=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),de=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),c=m(v),p=s(v,"UL",{});var Y=r(p);_=s(Y,"LI",{});var Ee=r(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=m(Y),E=s(Y,"LI",{});var Fe=r(E);q=i(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),Y.forEach(t),L=m(v),M=s(v,"P",{});var I=r(M);S=i(I,"This second option is useful when using "),O=s(I,"CODE",{});var Me=r(O);Z=i(Me,"tf.keras.Model.fit"),Me.forEach(t),ue=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=s(I,"CODE",{});var we=r(Q);ge=i(we,"model(inputs)"),we.forEach(t),ce=i(I,"."),I.forEach(t),X=m(v),D=s(v,"P",{});var ze=r(D);re=i(ze,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ze.forEach(t),ee=m(v),j=s(v,"UL",{});var U=r(j);C=s(U,"LI",{});var R=r(C);se=i(R,"a single Tensor with "),V=s(R,"CODE",{});var je=r(V);_e=i(je,"input_ids"),je.forEach(t),be=i(R," only and nothing else: "),K=s(R,"CODE",{});var qe=r(K);ke=i(qe,"model(inputs_ids)"),qe.forEach(t),R.forEach(t),pe=m(U),P=s(U,"LI",{});var H=r(P);ve=i(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s(H,"CODE",{});var Pe=r(J);ae=i(Pe,"model([input_ids, attention_mask])"),Pe.forEach(t),le=i(H," or "),G=s(H,"CODE",{});var Ce=r(G);he=i(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),H.forEach(t),ie=m(U),W=s(U,"LI",{});var fe=r(W);me=i(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=s(fe,"CODE",{});var Te=r(B);de=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),fe.forEach(t),U.forEach(t)},m(v,z){b(v,d,z),e(d,g),b(v,c,z),b(v,p,z),e(p,_),e(_,l),e(p,f),e(p,E),e(E,q),b(v,L,z),b(v,M,z),e(M,S),e(M,O),e(O,Z),e(M,ue),e(M,Q),e(Q,ge),e(M,ce),b(v,X,z),b(v,D,z),e(D,re),b(v,ee,z),b(v,j,z),e(j,C),e(C,se),e(C,V),e(V,_e),e(C,be),e(C,K),e(K,ke),e(j,pe),e(j,P),e(P,ve),e(P,J),e(J,ae),e(P,le),e(P,G),e(G,he),e(j,ie),e(j,W),e(W,me),e(W,B),e(B,de)},d(v){v&&t(d),v&&t(c),v&&t(p),v&&t(L),v&&t(M),v&&t(X),v&&t(D),v&&t(ee),v&&t(j)}}}function Z3(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function eM(x){let d,g,c,p,_;return p=new ne({props:{code:`import tensorflow as tf
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
<span class="hljs-string">&#x27;france&#x27;</span>`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function tM(x){let d,g;return d=new ne({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)
outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.81</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function oM(x){let d,g,c,p,_,l,f,E,q,L,M,S,O,Z,ue,Q,ge,ce,X,D,re,ee,j,C,se,V,_e,be,K,ke,pe,P,ve,J,ae,le,G,he,ie,W,me,B,de;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=h(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),E=n("li"),q=a("having all inputs as a list, tuple or dict in the first positional arguments."),L=h(),M=n("p"),S=a("This second option is useful when using "),O=n("code"),Z=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=n("code"),ge=a("model(inputs)"),ce=a("."),X=h(),D=n("p"),re=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=h(),j=n("ul"),C=n("li"),se=a("a single Tensor with "),V=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),K=n("code"),ke=a("model(inputs_ids)"),pe=h(),P=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=n("code"),ae=a("model([input_ids, attention_mask])"),le=a(" or "),G=n("code"),he=a("model([input_ids, attention_mask, token_type_ids])"),ie=h(),W=n("li"),me=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),de=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),c=m(v),p=s(v,"UL",{});var Y=r(p);_=s(Y,"LI",{});var Ee=r(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=m(Y),E=s(Y,"LI",{});var Fe=r(E);q=i(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),Y.forEach(t),L=m(v),M=s(v,"P",{});var I=r(M);S=i(I,"This second option is useful when using "),O=s(I,"CODE",{});var Me=r(O);Z=i(Me,"tf.keras.Model.fit"),Me.forEach(t),ue=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=s(I,"CODE",{});var we=r(Q);ge=i(we,"model(inputs)"),we.forEach(t),ce=i(I,"."),I.forEach(t),X=m(v),D=s(v,"P",{});var ze=r(D);re=i(ze,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ze.forEach(t),ee=m(v),j=s(v,"UL",{});var U=r(j);C=s(U,"LI",{});var R=r(C);se=i(R,"a single Tensor with "),V=s(R,"CODE",{});var je=r(V);_e=i(je,"input_ids"),je.forEach(t),be=i(R," only and nothing else: "),K=s(R,"CODE",{});var qe=r(K);ke=i(qe,"model(inputs_ids)"),qe.forEach(t),R.forEach(t),pe=m(U),P=s(U,"LI",{});var H=r(P);ve=i(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s(H,"CODE",{});var Pe=r(J);ae=i(Pe,"model([input_ids, attention_mask])"),Pe.forEach(t),le=i(H," or "),G=s(H,"CODE",{});var Ce=r(G);he=i(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),H.forEach(t),ie=m(U),W=s(U,"LI",{});var fe=r(W);me=i(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=s(fe,"CODE",{});var Te=r(B);de=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),fe.forEach(t),U.forEach(t)},m(v,z){b(v,d,z),e(d,g),b(v,c,z),b(v,p,z),e(p,_),e(_,l),e(p,f),e(p,E),e(E,q),b(v,L,z),b(v,M,z),e(M,S),e(M,O),e(O,Z),e(M,ue),e(M,Q),e(Q,ge),e(M,ce),b(v,X,z),b(v,D,z),e(D,re),b(v,ee,z),b(v,j,z),e(j,C),e(C,se),e(C,V),e(V,_e),e(C,be),e(C,K),e(K,ke),e(j,pe),e(j,P),e(P,ve),e(P,J),e(J,ae),e(P,le),e(P,G),e(G,he),e(j,ie),e(j,W),e(W,me),e(W,B),e(B,de)},d(v){v&&t(d),v&&t(c),v&&t(p),v&&t(L),v&&t(M),v&&t(X),v&&t(D),v&&t(ee),v&&t(j)}}}function nM(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function sM(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, TFAlbertForSequenceClassification
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function rM(x){let d,g;return d=new ne({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFAlbertForSequenceClassification.from_pretrained("vumichien/albert-base-v2-imdb", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/albert-base-v2-imdb&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.12</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function aM(x){let d,g,c,p,_,l,f,E,q,L,M,S,O,Z,ue,Q,ge,ce,X,D,re,ee,j,C,se,V,_e,be,K,ke,pe,P,ve,J,ae,le,G,he,ie,W,me,B,de;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=h(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),E=n("li"),q=a("having all inputs as a list, tuple or dict in the first positional arguments."),L=h(),M=n("p"),S=a("This second option is useful when using "),O=n("code"),Z=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=n("code"),ge=a("model(inputs)"),ce=a("."),X=h(),D=n("p"),re=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=h(),j=n("ul"),C=n("li"),se=a("a single Tensor with "),V=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),K=n("code"),ke=a("model(inputs_ids)"),pe=h(),P=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=n("code"),ae=a("model([input_ids, attention_mask])"),le=a(" or "),G=n("code"),he=a("model([input_ids, attention_mask, token_type_ids])"),ie=h(),W=n("li"),me=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),de=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),c=m(v),p=s(v,"UL",{});var Y=r(p);_=s(Y,"LI",{});var Ee=r(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=m(Y),E=s(Y,"LI",{});var Fe=r(E);q=i(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),Y.forEach(t),L=m(v),M=s(v,"P",{});var I=r(M);S=i(I,"This second option is useful when using "),O=s(I,"CODE",{});var Me=r(O);Z=i(Me,"tf.keras.Model.fit"),Me.forEach(t),ue=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=s(I,"CODE",{});var we=r(Q);ge=i(we,"model(inputs)"),we.forEach(t),ce=i(I,"."),I.forEach(t),X=m(v),D=s(v,"P",{});var ze=r(D);re=i(ze,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ze.forEach(t),ee=m(v),j=s(v,"UL",{});var U=r(j);C=s(U,"LI",{});var R=r(C);se=i(R,"a single Tensor with "),V=s(R,"CODE",{});var je=r(V);_e=i(je,"input_ids"),je.forEach(t),be=i(R," only and nothing else: "),K=s(R,"CODE",{});var qe=r(K);ke=i(qe,"model(inputs_ids)"),qe.forEach(t),R.forEach(t),pe=m(U),P=s(U,"LI",{});var H=r(P);ve=i(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s(H,"CODE",{});var Pe=r(J);ae=i(Pe,"model([input_ids, attention_mask])"),Pe.forEach(t),le=i(H," or "),G=s(H,"CODE",{});var Ce=r(G);he=i(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),H.forEach(t),ie=m(U),W=s(U,"LI",{});var fe=r(W);me=i(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=s(fe,"CODE",{});var Te=r(B);de=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),fe.forEach(t),U.forEach(t)},m(v,z){b(v,d,z),e(d,g),b(v,c,z),b(v,p,z),e(p,_),e(_,l),e(p,f),e(p,E),e(E,q),b(v,L,z),b(v,M,z),e(M,S),e(M,O),e(O,Z),e(M,ue),e(M,Q),e(Q,ge),e(M,ce),b(v,X,z),b(v,D,z),e(D,re),b(v,ee,z),b(v,j,z),e(j,C),e(C,se),e(C,V),e(V,_e),e(C,be),e(C,K),e(K,ke),e(j,pe),e(j,P),e(P,ve),e(P,J),e(J,ae),e(P,le),e(P,G),e(G,he),e(j,ie),e(j,W),e(W,me),e(W,B),e(B,de)},d(v){v&&t(d),v&&t(c),v&&t(p),v&&t(L),v&&t(M),v&&t(X),v&&t(D),v&&t(ee),v&&t(j)}}}function iM(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function lM(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, TFAlbertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function dM(x){let d,g,c,p,_,l,f,E,q,L,M,S,O,Z,ue,Q,ge,ce,X,D,re,ee,j,C,se,V,_e,be,K,ke,pe,P,ve,J,ae,le,G,he,ie,W,me,B,de;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=h(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),E=n("li"),q=a("having all inputs as a list, tuple or dict in the first positional arguments."),L=h(),M=n("p"),S=a("This second option is useful when using "),O=n("code"),Z=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=n("code"),ge=a("model(inputs)"),ce=a("."),X=h(),D=n("p"),re=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=h(),j=n("ul"),C=n("li"),se=a("a single Tensor with "),V=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),K=n("code"),ke=a("model(inputs_ids)"),pe=h(),P=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=n("code"),ae=a("model([input_ids, attention_mask])"),le=a(" or "),G=n("code"),he=a("model([input_ids, attention_mask, token_type_ids])"),ie=h(),W=n("li"),me=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),de=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),c=m(v),p=s(v,"UL",{});var Y=r(p);_=s(Y,"LI",{});var Ee=r(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=m(Y),E=s(Y,"LI",{});var Fe=r(E);q=i(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),Y.forEach(t),L=m(v),M=s(v,"P",{});var I=r(M);S=i(I,"This second option is useful when using "),O=s(I,"CODE",{});var Me=r(O);Z=i(Me,"tf.keras.Model.fit"),Me.forEach(t),ue=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=s(I,"CODE",{});var we=r(Q);ge=i(we,"model(inputs)"),we.forEach(t),ce=i(I,"."),I.forEach(t),X=m(v),D=s(v,"P",{});var ze=r(D);re=i(ze,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ze.forEach(t),ee=m(v),j=s(v,"UL",{});var U=r(j);C=s(U,"LI",{});var R=r(C);se=i(R,"a single Tensor with "),V=s(R,"CODE",{});var je=r(V);_e=i(je,"input_ids"),je.forEach(t),be=i(R," only and nothing else: "),K=s(R,"CODE",{});var qe=r(K);ke=i(qe,"model(inputs_ids)"),qe.forEach(t),R.forEach(t),pe=m(U),P=s(U,"LI",{});var H=r(P);ve=i(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s(H,"CODE",{});var Pe=r(J);ae=i(Pe,"model([input_ids, attention_mask])"),Pe.forEach(t),le=i(H," or "),G=s(H,"CODE",{});var Ce=r(G);he=i(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),H.forEach(t),ie=m(U),W=s(U,"LI",{});var fe=r(W);me=i(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=s(fe,"CODE",{});var Te=r(B);de=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),fe.forEach(t),U.forEach(t)},m(v,z){b(v,d,z),e(d,g),b(v,c,z),b(v,p,z),e(p,_),e(_,l),e(p,f),e(p,E),e(E,q),b(v,L,z),b(v,M,z),e(M,S),e(M,O),e(O,Z),e(M,ue),e(M,Q),e(Q,ge),e(M,ce),b(v,X,z),b(v,D,z),e(D,re),b(v,ee,z),b(v,j,z),e(j,C),e(C,se),e(C,V),e(V,_e),e(C,be),e(C,K),e(K,ke),e(j,pe),e(j,P),e(P,ve),e(P,J),e(J,ae),e(P,le),e(P,G),e(G,he),e(j,ie),e(j,W),e(W,me),e(W,B),e(B,de)},d(v){v&&t(d),v&&t(c),v&&t(p),v&&t(L),v&&t(M),v&&t(X),v&&t(D),v&&t(ee),v&&t(j)}}}function cM(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function pM(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, TFAlbertForTokenClassification
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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function hM(x){let d,g;return d=new ne({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.66</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function mM(x){let d,g,c,p,_,l,f,E,q,L,M,S,O,Z,ue,Q,ge,ce,X,D,re,ee,j,C,se,V,_e,be,K,ke,pe,P,ve,J,ae,le,G,he,ie,W,me,B,de;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=h(),p=n("ul"),_=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),E=n("li"),q=a("having all inputs as a list, tuple or dict in the first positional arguments."),L=h(),M=n("p"),S=a("This second option is useful when using "),O=n("code"),Z=a("tf.keras.Model.fit"),ue=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=n("code"),ge=a("model(inputs)"),ce=a("."),X=h(),D=n("p"),re=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=h(),j=n("ul"),C=n("li"),se=a("a single Tensor with "),V=n("code"),_e=a("input_ids"),be=a(" only and nothing else: "),K=n("code"),ke=a("model(inputs_ids)"),pe=h(),P=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=n("code"),ae=a("model([input_ids, attention_mask])"),le=a(" or "),G=n("code"),he=a("model([input_ids, attention_mask, token_type_ids])"),ie=h(),W=n("li"),me=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=n("code"),de=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var z=r(d);g=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),c=m(v),p=s(v,"UL",{});var Y=r(p);_=s(Y,"LI",{});var Ee=r(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=m(Y),E=s(Y,"LI",{});var Fe=r(E);q=i(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),Y.forEach(t),L=m(v),M=s(v,"P",{});var I=r(M);S=i(I,"This second option is useful when using "),O=s(I,"CODE",{});var Me=r(O);Z=i(Me,"tf.keras.Model.fit"),Me.forEach(t),ue=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),Q=s(I,"CODE",{});var we=r(Q);ge=i(we,"model(inputs)"),we.forEach(t),ce=i(I,"."),I.forEach(t),X=m(v),D=s(v,"P",{});var ze=r(D);re=i(ze,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ze.forEach(t),ee=m(v),j=s(v,"UL",{});var U=r(j);C=s(U,"LI",{});var R=r(C);se=i(R,"a single Tensor with "),V=s(R,"CODE",{});var je=r(V);_e=i(je,"input_ids"),je.forEach(t),be=i(R," only and nothing else: "),K=s(R,"CODE",{});var qe=r(K);ke=i(qe,"model(inputs_ids)"),qe.forEach(t),R.forEach(t),pe=m(U),P=s(U,"LI",{});var H=r(P);ve=i(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=s(H,"CODE",{});var Pe=r(J);ae=i(Pe,"model([input_ids, attention_mask])"),Pe.forEach(t),le=i(H," or "),G=s(H,"CODE",{});var Ce=r(G);he=i(Ce,"model([input_ids, attention_mask, token_type_ids])"),Ce.forEach(t),H.forEach(t),ie=m(U),W=s(U,"LI",{});var fe=r(W);me=i(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=s(fe,"CODE",{});var Te=r(B);de=i(Te,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Te.forEach(t),fe.forEach(t),U.forEach(t)},m(v,z){b(v,d,z),e(d,g),b(v,c,z),b(v,p,z),e(p,_),e(_,l),e(p,f),e(p,E),e(E,q),b(v,L,z),b(v,M,z),e(M,S),e(M,O),e(O,Z),e(M,ue),e(M,Q),e(Q,ge),e(M,ce),b(v,X,z),b(v,D,z),e(D,re),b(v,ee,z),b(v,j,z),e(j,C),e(C,se),e(C,V),e(V,_e),e(C,be),e(C,K),e(K,ke),e(j,pe),e(j,P),e(P,ve),e(P,J),e(J,ae),e(P,le),e(P,G),e(G,he),e(j,ie),e(j,W),e(W,me),e(W,B),e(B,de)},d(v){v&&t(d),v&&t(c),v&&t(p),v&&t(L),v&&t(M),v&&t(X),v&&t(D),v&&t(ee),v&&t(j)}}}function fM(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function uM(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, TFAlbertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function gM(x){let d,g;return d=new ne({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.36</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){A(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function _M(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function bM(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertModel

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertModel.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertModel.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function kM(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function vM(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForPreTraining

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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.sop_logits`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function TM(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function yM(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForMaskedLM

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForMaskedLM.from_pretrained("albert-base-v2")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function wM(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function $M(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForSequenceClassification

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForSequenceClassification.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function AM(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function FM(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function xM(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function EM(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForTokenClassification

tokenizer = AlbertTokenizer.from_pretrained("albert-base-v2")
model = FlaxAlbertForTokenClassification.from_pretrained("albert-base-v2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AlbertTokenizer, FlaxAlbertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AlbertTokenizer.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAlbertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;albert-base-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function MM(x){let d,g,c,p,_;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=r(c);p=i(E,"Module"),E.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,c),e(c,p),e(d,_)},d(l){l&&t(d)}}}function zM(x){let d,g,c,p,_;return p=new ne({props:{code:`from transformers import AlbertTokenizer, FlaxAlbertForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),g=a("Example:"),c=h(),T(p.$$.fragment)},l(l){d=s(l,"P",{});var f=r(d);g=i(f,"Example:"),f.forEach(t),c=m(l),y(p.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,c,f),w(p,l,f),_=!0},p:oe,i(l){_||($(p.$$.fragment,l),_=!0)},o(l){A(p.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function jM(x){let d,g,c,p,_,l,f,E,q,L,M,S,O,Z,ue,Q,ge,ce,X,D,re,ee,j,C,se,V,_e,be,K,ke,pe,P,ve,J,ae,le,G,he,ie,W,me,B,de,v,z,Y,Ee,Fe,I,Me,we,ze,U,R,je,qe,H,Pe,Ce,fe,Te,wn,qc,Mr,Eg,Pc,Mg,mf,bt,zr,zg,Ut,jg,ld,qg,Pg,dd,Cg,Lg,jr,Ig,Og,Ng,bo,Sg,cd,Dg,Wg,pd,Ug,Bg,Rg,$n,ff,ko,An,Cc,qr,Hg,Lc,Qg,uf,$e,Pr,Vg,Cr,Kg,Lr,Jg,Gg,Xg,Ir,Yg,hd,Zg,e_,t_,Ic,o_,n_,Fn,s_,xn,r_,En,a_,to,Or,i_,Oc,l_,d_,Nr,md,c_,Nc,p_,h_,fd,m_,Sc,f_,u_,Mn,Sr,g_,Dr,__,Dc,b_,k_,v_,vt,Wr,T_,Wc,y_,w_,zn,$_,vo,A_,Uc,F_,x_,Bc,E_,M_,z_,ud,Ur,gf,To,jn,Rc,Br,j_,Hc,q_,_f,kt,Rr,P_,Bt,C_,Qc,L_,I_,Hr,O_,N_,gd,S_,D_,W_,oo,Qr,U_,Vc,B_,R_,Vr,_d,H_,Kc,Q_,V_,bd,K_,Jc,J_,G_,Tt,Kr,X_,Gc,Y_,Z_,qn,eb,Xc,tb,bf,yo,Pn,Yc,Jr,ob,Zc,nb,kf,wo,Gr,sb,Xr,rb,kd,ab,ib,vf,$o,Yr,lb,Zr,db,vd,cb,pb,Tf,Ao,Cn,ep,ea,hb,tp,mb,yf,Ge,ta,fb,op,ub,gb,oa,_b,Td,bb,kb,vb,na,Tb,sa,yb,wb,$b,yt,ra,Ab,Fo,Fb,yd,xb,Eb,np,Mb,zb,jb,Ln,qb,In,wf,xo,On,sp,aa,Pb,rp,Cb,$f,Xe,ia,Lb,Eo,Ib,ap,Ob,Nb,ip,Sb,Db,Wb,la,Ub,wd,Bb,Rb,Hb,da,Qb,ca,Vb,Kb,Jb,wt,pa,Gb,Mo,Xb,$d,Yb,Zb,lp,ek,tk,ok,Nn,nk,Sn,Af,zo,Dn,dp,ha,sk,cp,rk,Ff,Ye,ma,ak,fa,ik,pp,lk,dk,ck,ua,pk,Ad,hk,mk,fk,ga,uk,_a,gk,_k,bk,nt,ba,kk,jo,vk,Fd,Tk,yk,hp,wk,$k,Ak,Wn,Fk,Un,xk,Bn,xf,qo,Rn,mp,ka,Ek,fp,Mk,Ef,Ze,va,zk,up,jk,qk,Ta,Pk,xd,Ck,Lk,Ik,ya,Ok,wa,Nk,Sk,Dk,Ue,$a,Wk,Po,Uk,Ed,Bk,Rk,gp,Hk,Qk,Vk,Hn,Kk,Qn,Jk,Vn,Gk,Kn,Xk,Jn,Mf,Co,Gn,_p,Aa,Yk,bp,Zk,zf,et,Fa,ev,kp,tv,ov,xa,nv,Md,sv,rv,av,Ea,iv,Ma,lv,dv,cv,$t,za,pv,Lo,hv,zd,mv,fv,vp,uv,gv,_v,Xn,bv,Yn,jf,Io,Zn,Tp,ja,kv,yp,vv,qf,tt,qa,Tv,wp,yv,wv,Pa,$v,jd,Av,Fv,xv,Ca,Ev,La,Mv,zv,jv,st,Ia,qv,Oo,Pv,qd,Cv,Lv,$p,Iv,Ov,Nv,es,Sv,ts,Dv,os,Pf,No,ns,Ap,Oa,Wv,Fp,Uv,Cf,ot,Na,Bv,So,Rv,xp,Hv,Qv,Ep,Vv,Kv,Jv,Sa,Gv,Pd,Xv,Yv,Zv,Da,eT,Wa,tT,oT,nT,rt,Ua,sT,Do,rT,Cd,aT,iT,Mp,lT,dT,cT,ss,pT,rs,hT,as,Lf,Wo,is,zp,Ba,mT,jp,fT,If,Be,Ra,uT,qp,gT,_T,Ha,bT,Ld,kT,vT,TT,Qa,yT,Va,wT,$T,AT,ls,FT,At,Ka,xT,Uo,ET,Id,MT,zT,Pp,jT,qT,PT,ds,CT,cs,Of,Bo,ps,Cp,Ja,LT,Lp,IT,Nf,Re,Ga,OT,Ro,NT,Ip,ST,DT,Op,WT,UT,BT,Xa,RT,Od,HT,QT,VT,Ya,KT,Za,JT,GT,XT,hs,YT,Ft,ei,ZT,Ho,e1,Nd,t1,o1,Np,n1,s1,r1,ms,a1,fs,Sf,Qo,us,Sp,ti,i1,Dp,l1,Df,He,oi,d1,ni,c1,Wp,p1,h1,m1,si,f1,Sd,u1,g1,_1,ri,b1,ai,k1,v1,T1,gs,y1,at,ii,w1,Vo,$1,Dd,A1,F1,Up,x1,E1,M1,_s,z1,bs,j1,ks,Wf,Ko,vs,Bp,li,q1,Rp,P1,Uf,Qe,di,C1,Hp,L1,I1,ci,O1,Wd,N1,S1,D1,pi,W1,hi,U1,B1,R1,Ts,H1,it,mi,Q1,Jo,V1,Ud,K1,J1,Qp,G1,X1,Y1,ys,Z1,ws,ey,$s,Bf,Go,As,Vp,fi,ty,Kp,oy,Rf,Ve,ui,ny,Jp,sy,ry,gi,ay,Bd,iy,ly,dy,_i,cy,bi,py,hy,my,Fs,fy,xt,ki,uy,Xo,gy,Rd,_y,by,Gp,ky,vy,Ty,xs,yy,Es,Hf,Yo,Ms,Xp,vi,wy,Yp,$y,Qf,Ke,Ti,Ay,Zp,Fy,xy,yi,Ey,Hd,My,zy,jy,wi,qy,$i,Py,Cy,Ly,zs,Iy,lt,Ai,Oy,Zo,Ny,Qd,Sy,Dy,eh,Wy,Uy,By,js,Ry,qs,Hy,Ps,Vf,en,Cs,th,Fi,Qy,oh,Vy,Kf,Je,xi,Ky,tn,Jy,nh,Gy,Xy,sh,Yy,Zy,ew,Ei,tw,Vd,ow,nw,sw,Mi,rw,zi,aw,iw,lw,Ls,dw,dt,ji,cw,on,pw,Kd,hw,mw,rh,fw,uw,gw,Is,_w,Os,bw,Ns,Jf,nn,Ss,ah,qi,kw,ih,vw,Gf,Le,Pi,Tw,lh,yw,ww,Ci,$w,Jd,Aw,Fw,xw,Li,Ew,Ii,Mw,zw,jw,dh,qw,Pw,Rt,ch,Oi,Cw,Lw,ph,Ni,Iw,Ow,hh,Si,Nw,Sw,mh,Di,Dw,Ww,Et,Wi,Uw,sn,Bw,fh,Rw,Hw,uh,Qw,Vw,Kw,Ds,Jw,Ws,Xf,rn,Us,gh,Ui,Gw,_h,Xw,Yf,Ie,Bi,Yw,an,Zw,bh,e$,t$,kh,o$,n$,s$,Ri,r$,Gd,a$,i$,l$,Hi,d$,Qi,c$,p$,h$,vh,m$,f$,Ht,Th,Vi,u$,g$,yh,Ki,_$,b$,wh,Ji,k$,v$,$h,Gi,T$,y$,Mt,Xi,w$,ln,$$,Ah,A$,F$,Fh,x$,E$,M$,Bs,z$,Rs,Zf,dn,Hs,xh,Yi,j$,Eh,q$,eu,Oe,Zi,P$,el,C$,Mh,L$,I$,O$,tl,N$,Xd,S$,D$,W$,ol,U$,nl,B$,R$,H$,zh,Q$,V$,Qt,jh,sl,K$,J$,qh,rl,G$,X$,Ph,al,Y$,Z$,Ch,il,e2,t2,zt,ll,o2,cn,n2,Lh,s2,r2,Ih,a2,i2,l2,Qs,d2,Vs,tu,pn,Ks,Oh,dl,c2,Nh,p2,ou,Ne,cl,h2,Sh,m2,f2,pl,u2,Yd,g2,_2,b2,hl,k2,ml,v2,T2,y2,Dh,w2,$2,Vt,Wh,fl,A2,F2,Uh,ul,x2,E2,Bh,gl,M2,z2,Rh,_l,j2,q2,jt,bl,P2,hn,C2,Hh,L2,I2,Qh,O2,N2,S2,Js,D2,Gs,nu,mn,Xs,Vh,kl,W2,Kh,U2,su,Se,vl,B2,Jh,R2,H2,Tl,Q2,Zd,V2,K2,J2,yl,G2,wl,X2,Y2,Z2,Gh,eA,tA,Kt,Xh,$l,oA,nA,Yh,Al,sA,rA,Zh,Fl,aA,iA,em,xl,lA,dA,qt,El,cA,fn,pA,tm,hA,mA,om,fA,uA,gA,Ys,_A,Zs,ru,un,er,nm,Ml,bA,sm,kA,au,De,zl,vA,rm,TA,yA,jl,wA,ec,$A,AA,FA,ql,xA,Pl,EA,MA,zA,am,jA,qA,Jt,im,Cl,PA,CA,lm,Ll,LA,IA,dm,Il,OA,NA,cm,Ol,SA,DA,Pt,Nl,WA,gn,UA,pm,BA,RA,hm,HA,QA,VA,tr,KA,or,iu,_n,nr,mm,Sl,JA,fm,GA,lu,We,Dl,XA,bn,YA,um,ZA,eF,gm,tF,oF,nF,Wl,sF,tc,rF,aF,iF,Ul,lF,Bl,dF,cF,pF,_m,hF,mF,Gt,bm,Rl,fF,uF,km,Hl,gF,_F,vm,Ql,bF,kF,Tm,Vl,vF,TF,Ct,Kl,yF,kn,wF,ym,$F,AF,wm,FF,xF,EF,sr,MF,rr,du;return l=new Ae({}),Z=new Ae({}),Mr=new Ae({}),zr=new N({props:{name:"class transformers.AlbertConfig",anchor:"transformers.AlbertConfig",parameters:[{name:"vocab_size",val:" = 30000"},{name:"embedding_size",val:" = 128"},{name:"hidden_size",val:" = 4096"},{name:"num_hidden_layers",val:" = 12"},{name:"num_hidden_groups",val:" = 1"},{name:"num_attention_heads",val:" = 64"},{name:"intermediate_size",val:" = 16384"},{name:"inner_group_num",val:" = 1"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout_prob",val:" = 0"},{name:"attention_probs_dropout_prob",val:" = 0"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"classifier_dropout_prob",val:" = 0.1"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 3"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30000) &#x2014;
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
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/configuration_albert.py#L36"}}),$n=new te({props:{anchor:"transformers.AlbertConfig.example",$$slots:{default:[b3]},$$scope:{ctx:x}}}),qr=new Ae({}),Pr=new N({props:{name:"class transformers.AlbertTokenizer",anchor:"transformers.AlbertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/tokenization_albert.py#L59"}}),Fn=new te({props:{anchor:"transformers.AlbertTokenizer.example",$$slots:{default:[k3]},$$scope:{ctx:x}}}),xn=new te({props:{anchor:"transformers.AlbertTokenizer.example-2",$$slots:{default:[v3]},$$scope:{ctx:x}}}),En=new ye({props:{$$slots:{default:[w3]},$$scope:{ctx:x}}}),Or=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/tokenization_albert.py#L295",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Sr=new N({props:{name:"get_special_tokens_mask",anchor:"transformers.AlbertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.AlbertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/tokenization_albert.py#L320",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Wr=new N({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/tokenization_albert.py#L348",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),zn=new te({props:{anchor:"transformers.AlbertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[$3]},$$scope:{ctx:x}}}),Ur=new N({props:{name:"save_vocabulary",anchor:"transformers.AlbertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/tokenization_albert.py#L378"}}),Br=new Ae({}),Rr=new N({props:{name:"class transformers.AlbertTokenizerFast",anchor:"transformers.AlbertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/tokenization_albert_fast.py#L72"}}),Qr=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/tokenization_albert_fast.py#L170",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Kr=new N({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/tokenization_albert_fast.py#L195",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),qn=new te({props:{anchor:"transformers.AlbertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[A3]},$$scope:{ctx:x}}}),Jr=new Ae({}),Gr=new N({props:{name:"class transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"sop_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_albert.py#L535"}}),Yr=new N({props:{name:"class transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput",anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput",parameters:[{name:"loss",val:": Tensor = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"sop_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.sop_logits",description:`<strong>sop_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"sop_logits"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.albert.modeling_tf_albert.TFAlbertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_tf_albert.py#L634"}}),ea=new Ae({}),ta=new N({props:{name:"class transformers.AlbertModel",anchor:"transformers.AlbertModel",parameters:[{name:"config",val:": AlbertConfig"},{name:"add_pooling_layer",val:": bool = True"}],parametersDescription:[{anchor:"transformers.AlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_albert.py#L638"}}),ra=new N({props:{name:"forward",anchor:"transformers.AlbertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": NoneType = None"},{name:"output_hidden_states",val:": NoneType = None"},{name:"return_dict",val:": NoneType = None"}],parametersDescription:[{anchor:"transformers.AlbertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ln=new ye({props:{$$slots:{default:[F3]},$$scope:{ctx:x}}}),In=new te({props:{anchor:"transformers.AlbertModel.forward.example",$$slots:{default:[x3]},$$scope:{ctx:x}}}),aa=new Ae({}),ia=new N({props:{name:"class transformers.AlbertForPreTraining",anchor:"transformers.AlbertForPreTraining",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_albert.py#L768"}}),pa=new N({props:{name:"forward",anchor:"transformers.AlbertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"sentence_order_label",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Nn=new ye({props:{$$slots:{default:[E3]},$$scope:{ctx:x}}}),Sn=new te({props:{anchor:"transformers.AlbertForPreTraining.forward.example",$$slots:{default:[M3]},$$scope:{ctx:x}}}),ha=new Ae({}),ma=new N({props:{name:"class transformers.AlbertForMaskedLM",anchor:"transformers.AlbertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.AlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_albert.py#L914"}}),ba=new N({props:{name:"forward",anchor:"transformers.AlbertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Wn=new ye({props:{$$slots:{default:[z3]},$$scope:{ctx:x}}}),Un=new te({props:{anchor:"transformers.AlbertForMaskedLM.forward.example",$$slots:{default:[j3]},$$scope:{ctx:x}}}),Bn=new te({props:{anchor:"transformers.AlbertForMaskedLM.forward.example-2",$$slots:{default:[q3]},$$scope:{ctx:x}}}),ka=new Ae({}),va=new N({props:{name:"class transformers.AlbertForSequenceClassification",anchor:"transformers.AlbertForSequenceClassification",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_albert.py#L1029"}}),$a=new N({props:{name:"forward",anchor:"transformers.AlbertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Hn=new ye({props:{$$slots:{default:[P3]},$$scope:{ctx:x}}}),Qn=new te({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example",$$slots:{default:[C3]},$$scope:{ctx:x}}}),Vn=new te({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-2",$$slots:{default:[L3]},$$scope:{ctx:x}}}),Kn=new te({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-3",$$slots:{default:[I3]},$$scope:{ctx:x}}}),Jn=new te({props:{anchor:"transformers.AlbertForSequenceClassification.forward.example-4",$$slots:{default:[O3]},$$scope:{ctx:x}}}),Aa=new Ae({}),Fa=new N({props:{name:"class transformers.AlbertForMultipleChoice",anchor:"transformers.AlbertForMultipleChoice",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_albert.py#L1330"}}),za=new N({props:{name:"forward",anchor:"transformers.AlbertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
`}}),Xn=new ye({props:{$$slots:{default:[N3]},$$scope:{ctx:x}}}),Yn=new te({props:{anchor:"transformers.AlbertForMultipleChoice.forward.example",$$slots:{default:[S3]},$$scope:{ctx:x}}}),ja=new Ae({}),qa=new N({props:{name:"class transformers.AlbertForTokenClassification",anchor:"transformers.AlbertForTokenClassification",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_albert.py#L1131"}}),Ia=new N({props:{name:"forward",anchor:"transformers.AlbertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),es=new ye({props:{$$slots:{default:[D3]},$$scope:{ctx:x}}}),ts=new te({props:{anchor:"transformers.AlbertForTokenClassification.forward.example",$$slots:{default:[W3]},$$scope:{ctx:x}}}),os=new te({props:{anchor:"transformers.AlbertForTokenClassification.forward.example-2",$$slots:{default:[U3]},$$scope:{ctx:x}}}),Oa=new Ae({}),Na=new N({props:{name:"class transformers.AlbertForQuestionAnswering",anchor:"transformers.AlbertForQuestionAnswering",parameters:[{name:"config",val:": AlbertConfig"}],parametersDescription:[{anchor:"transformers.AlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_albert.py#L1223"}}),Ua=new N({props:{name:"forward",anchor:"transformers.AlbertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.AlbertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ss=new ye({props:{$$slots:{default:[B3]},$$scope:{ctx:x}}}),rs=new te({props:{anchor:"transformers.AlbertForQuestionAnswering.forward.example",$$slots:{default:[R3]},$$scope:{ctx:x}}}),as=new te({props:{anchor:"transformers.AlbertForQuestionAnswering.forward.example-2",$$slots:{default:[H3]},$$scope:{ctx:x}}}),Ba=new Ae({}),Ra=new N({props:{name:"class transformers.TFAlbertModel",anchor:"transformers.TFAlbertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_tf_albert.py#L761"}}),ls=new ye({props:{$$slots:{default:[Q3]},$$scope:{ctx:x}}}),Ka=new N({props:{name:"call",anchor:"transformers.TFAlbertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ds=new ye({props:{$$slots:{default:[V3]},$$scope:{ctx:x}}}),cs=new te({props:{anchor:"transformers.TFAlbertModel.call.example",$$slots:{default:[K3]},$$scope:{ctx:x}}}),Ja=new Ae({}),Ga=new N({props:{name:"class transformers.TFAlbertForPreTraining",anchor:"transformers.TFAlbertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_tf_albert.py#L822"}}),hs=new ye({props:{$$slots:{default:[J3]},$$scope:{ctx:x}}}),ei=new N({props:{name:"call",anchor:"transformers.TFAlbertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"sentence_order_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ms=new ye({props:{$$slots:{default:[G3]},$$scope:{ctx:x}}}),fs=new te({props:{anchor:"transformers.TFAlbertForPreTraining.call.example",$$slots:{default:[X3]},$$scope:{ctx:x}}}),ti=new Ae({}),oi=new N({props:{name:"class transformers.TFAlbertForMaskedLM",anchor:"transformers.TFAlbertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_tf_albert.py#L941"}}),gs=new ye({props:{$$slots:{default:[Y3]},$$scope:{ctx:x}}}),ii=new N({props:{name:"call",anchor:"transformers.TFAlbertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),_s=new ye({props:{$$slots:{default:[Z3]},$$scope:{ctx:x}}}),bs=new te({props:{anchor:"transformers.TFAlbertForMaskedLM.call.example",$$slots:{default:[eM]},$$scope:{ctx:x}}}),ks=new te({props:{anchor:"transformers.TFAlbertForMaskedLM.call.example-2",$$slots:{default:[tM]},$$scope:{ctx:x}}}),li=new Ae({}),di=new N({props:{name:"class transformers.TFAlbertForSequenceClassification",anchor:"transformers.TFAlbertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_tf_albert.py#L1050"}}),Ts=new ye({props:{$$slots:{default:[oM]},$$scope:{ctx:x}}}),mi=new N({props:{name:"call",anchor:"transformers.TFAlbertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ys=new ye({props:{$$slots:{default:[nM]},$$scope:{ctx:x}}}),ws=new te({props:{anchor:"transformers.TFAlbertForSequenceClassification.call.example",$$slots:{default:[sM]},$$scope:{ctx:x}}}),$s=new te({props:{anchor:"transformers.TFAlbertForSequenceClassification.call.example-2",$$slots:{default:[rM]},$$scope:{ctx:x}}}),fi=new Ae({}),ui=new N({props:{name:"class transformers.TFAlbertForMultipleChoice",anchor:"transformers.TFAlbertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_tf_albert.py#L1341"}}),Fs=new ye({props:{$$slots:{default:[aM]},$$scope:{ctx:x}}}),ki=new N({props:{name:"call",anchor:"transformers.TFAlbertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
`}}),xs=new ye({props:{$$slots:{default:[iM]},$$scope:{ctx:x}}}),Es=new te({props:{anchor:"transformers.TFAlbertForMultipleChoice.call.example",$$slots:{default:[lM]},$$scope:{ctx:x}}}),vi=new Ae({}),Ti=new N({props:{name:"class transformers.TFAlbertForTokenClassification",anchor:"transformers.TFAlbertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_tf_albert.py#L1140"}}),zs=new ye({props:{$$slots:{default:[dM]},$$scope:{ctx:x}}}),Ai=new N({props:{name:"call",anchor:"transformers.TFAlbertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),js=new ye({props:{$$slots:{default:[cM]},$$scope:{ctx:x}}}),qs=new te({props:{anchor:"transformers.TFAlbertForTokenClassification.call.example",$$slots:{default:[pM]},$$scope:{ctx:x}}}),Ps=new te({props:{anchor:"transformers.TFAlbertForTokenClassification.call.example-2",$$slots:{default:[hM]},$$scope:{ctx:x}}}),Fi=new Ae({}),xi=new N({props:{name:"class transformers.TFAlbertForQuestionAnswering",anchor:"transformers.TFAlbertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFAlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_tf_albert.py#L1236"}}),Ls=new ye({props:{$$slots:{default:[mM]},$$scope:{ctx:x}}}),ji=new N({props:{name:"call",anchor:"transformers.TFAlbertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFAlbertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Is=new ye({props:{$$slots:{default:[fM]},$$scope:{ctx:x}}}),Os=new te({props:{anchor:"transformers.TFAlbertForQuestionAnswering.call.example",$$slots:{default:[uM]},$$scope:{ctx:x}}}),Ns=new te({props:{anchor:"transformers.TFAlbertForQuestionAnswering.call.example-2",$$slots:{default:[gM]},$$scope:{ctx:x}}}),qi=new Ae({}),Pi=new N({props:{name:"class transformers.FlaxAlbertModel",anchor:"transformers.FlaxAlbertModel",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_flax_albert.py#L679"}}),Wi=new N({props:{name:"__call__",anchor:"transformers.FlaxAlbertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ds=new ye({props:{$$slots:{default:[_M]},$$scope:{ctx:x}}}),Ws=new te({props:{anchor:"transformers.FlaxAlbertModel.__call__.example",$$slots:{default:[bM]},$$scope:{ctx:x}}}),Ui=new Ae({}),Bi=new N({props:{name:"class transformers.FlaxAlbertForPreTraining",anchor:"transformers.FlaxAlbertForPreTraining",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_flax_albert.py#L750"}}),Xi=new N({props:{name:"__call__",anchor:"transformers.FlaxAlbertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Bs=new ye({props:{$$slots:{default:[kM]},$$scope:{ctx:x}}}),Rs=new te({props:{anchor:"transformers.FlaxAlbertForPreTraining.__call__.example",$$slots:{default:[vM]},$$scope:{ctx:x}}}),Yi=new Ae({}),Zi=new N({props:{name:"class transformers.FlaxAlbertForMaskedLM",anchor:"transformers.FlaxAlbertForMaskedLM",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_flax_albert.py#L833"}}),ll=new N({props:{name:"__call__",anchor:"transformers.FlaxAlbertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Qs=new ye({props:{$$slots:{default:[TM]},$$scope:{ctx:x}}}),Vs=new te({props:{anchor:"transformers.FlaxAlbertForMaskedLM.__call__.example",$$slots:{default:[yM]},$$scope:{ctx:x}}}),dl=new Ae({}),cl=new N({props:{name:"class transformers.FlaxAlbertForSequenceClassification",anchor:"transformers.FlaxAlbertForSequenceClassification",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_flax_albert.py#L903"}}),bl=new N({props:{name:"__call__",anchor:"transformers.FlaxAlbertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Js=new ye({props:{$$slots:{default:[wM]},$$scope:{ctx:x}}}),Gs=new te({props:{anchor:"transformers.FlaxAlbertForSequenceClassification.__call__.example",$$slots:{default:[$M]},$$scope:{ctx:x}}}),kl=new Ae({}),vl=new N({props:{name:"class transformers.FlaxAlbertForMultipleChoice",anchor:"transformers.FlaxAlbertForMultipleChoice",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_flax_albert.py#L977"}}),El=new N({props:{name:"__call__",anchor:"transformers.FlaxAlbertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
`}}),Ys=new ye({props:{$$slots:{default:[AM]},$$scope:{ctx:x}}}),Zs=new te({props:{anchor:"transformers.FlaxAlbertForMultipleChoice.__call__.example",$$slots:{default:[FM]},$$scope:{ctx:x}}}),Ml=new Ae({}),zl=new N({props:{name:"class transformers.FlaxAlbertForTokenClassification",anchor:"transformers.FlaxAlbertForTokenClassification",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_flax_albert.py#L1051"}}),Nl=new N({props:{name:"__call__",anchor:"transformers.FlaxAlbertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),tr=new ye({props:{$$slots:{default:[xM]},$$scope:{ctx:x}}}),or=new te({props:{anchor:"transformers.FlaxAlbertForTokenClassification.__call__.example",$$slots:{default:[EM]},$$scope:{ctx:x}}}),Sl=new Ae({}),Dl=new N({props:{name:"class transformers.FlaxAlbertForQuestionAnswering",anchor:"transformers.FlaxAlbertForQuestionAnswering",parameters:[{name:"config",val:": AlbertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxAlbertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertConfig">AlbertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxAlbertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/vr_17673/src/transformers/models/albert/modeling_flax_albert.py#L1120"}}),Kl=new N({props:{name:"__call__",anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),sr=new ye({props:{$$slots:{default:[MM]},$$scope:{ctx:x}}}),rr=new te({props:{anchor:"transformers.FlaxAlbertForQuestionAnswering.__call__.example",$$slots:{default:[zM]},$$scope:{ctx:x}}}),{c(){d=n("meta"),g=h(),c=n("h1"),p=n("a"),_=n("span"),T(l.$$.fragment),f=h(),E=n("span"),q=a("ALBERT"),L=h(),M=n("h2"),S=n("a"),O=n("span"),T(Z.$$.fragment),ue=h(),Q=n("span"),ge=a("Overview"),ce=h(),X=n("p"),D=a("The ALBERT model was proposed in "),re=n("a"),ee=a("ALBERT: A Lite BERT for Self-supervised Learning of Language Representations"),j=a(` by Zhenzhong Lan, Mingda Chen, Sebastian Goodman, Kevin Gimpel, Piyush Sharma,
Radu Soricut. It presents two parameter-reduction techniques to lower memory consumption and increase the training
speed of BERT:`),C=h(),se=n("ul"),V=n("li"),_e=a("Splitting the embedding matrix into two smaller matrices."),be=h(),K=n("li"),ke=a("Using repeating layers split among groups."),pe=h(),P=n("p"),ve=a("The abstract from the paper is the following:"),J=h(),ae=n("p"),le=n("em"),G=a(`Increasing model size when pretraining natural language representations often results in improved performance on
downstream tasks. However, at some point further model increases become harder due to GPU/TPU memory limitations,
longer training times, and unexpected model degradation. To address these problems, we present two parameter-reduction
techniques to lower memory consumption and increase the training speed of BERT. Comprehensive empirical evidence shows
that our proposed methods lead to models that scale much better compared to the original BERT. We also use a
self-supervised loss that focuses on modeling inter-sentence coherence, and show it consistently helps downstream tasks
with multi-sentence inputs. As a result, our best model establishes new state-of-the-art results on the GLUE, RACE, and
SQuAD benchmarks while having fewer parameters compared to BERT-large.`),he=h(),ie=n("p"),W=a("Tips:"),me=h(),B=n("ul"),de=n("li"),v=a(`ALBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),z=h(),Y=n("li"),Ee=a(`ALBERT uses repeating layers which results in a small memory footprint, however the computational cost remains
similar to a BERT-like architecture with the same number of hidden layers as it has to iterate through the same
number of (repeating) layers.`),Fe=h(),I=n("p"),Me=a("This model was contributed by "),we=n("a"),ze=a("lysandre"),U=a(`. This model jax version was contributed by
`),R=n("a"),je=a("kamalkraj"),qe=a(". The original code can be found "),H=n("a"),Pe=a("here"),Ce=a("."),fe=h(),Te=n("h2"),wn=n("a"),qc=n("span"),T(Mr.$$.fragment),Eg=h(),Pc=n("span"),Mg=a("AlbertConfig"),mf=h(),bt=n("div"),T(zr.$$.fragment),zg=h(),Ut=n("p"),jg=a("This is the configuration class to store the configuration of a "),ld=n("a"),qg=a("AlbertModel"),Pg=a(" or a "),dd=n("a"),Cg=a("TFAlbertModel"),Lg=a(`. It is used
to instantiate an ALBERT model according to the specified arguments, defining the model architecture. Instantiating
a configuration with the defaults will yield a similar configuration to that of the ALBERT
`),jr=n("a"),Ig=a("albert-xxlarge-v2"),Og=a(" architecture."),Ng=h(),bo=n("p"),Sg=a("Configuration objects inherit from "),cd=n("a"),Dg=a("PretrainedConfig"),Wg=a(` and can be used to control the model outputs. Read the
documentation from `),pd=n("a"),Ug=a("PretrainedConfig"),Bg=a(" for more information."),Rg=h(),T($n.$$.fragment),ff=h(),ko=n("h2"),An=n("a"),Cc=n("span"),T(qr.$$.fragment),Hg=h(),Lc=n("span"),Qg=a("AlbertTokenizer"),uf=h(),$e=n("div"),T(Pr.$$.fragment),Vg=h(),Cr=n("p"),Kg=a("Construct an ALBERT tokenizer. Based on "),Lr=n("a"),Jg=a("SentencePiece"),Gg=a("."),Xg=h(),Ir=n("p"),Yg=a("This tokenizer inherits from "),hd=n("a"),Zg=a("PreTrainedTokenizer"),e_=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),t_=h(),Ic=n("p"),o_=a("Example:"),n_=h(),T(Fn.$$.fragment),s_=h(),T(xn.$$.fragment),r_=h(),T(En.$$.fragment),a_=h(),to=n("div"),T(Or.$$.fragment),i_=h(),Oc=n("p"),l_=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),d_=h(),Nr=n("ul"),md=n("li"),c_=a("single sequence: "),Nc=n("code"),p_=a("[CLS] X [SEP]"),h_=h(),fd=n("li"),m_=a("pair of sequences: "),Sc=n("code"),f_=a("[CLS] A [SEP] B [SEP]"),u_=h(),Mn=n("div"),T(Sr.$$.fragment),g_=h(),Dr=n("p"),__=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Dc=n("code"),b_=a("prepare_for_model"),k_=a(" method."),v_=h(),vt=n("div"),T(Wr.$$.fragment),T_=h(),Wc=n("p"),y_=a("Create a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),w_=h(),T(zn.$$.fragment),$_=h(),vo=n("p"),A_=a("If "),Uc=n("code"),F_=a("token_ids_1"),x_=a(" is "),Bc=n("code"),E_=a("None"),M_=a(", this method only returns the first portion of the mask (0s)."),z_=h(),ud=n("div"),T(Ur.$$.fragment),gf=h(),To=n("h2"),jn=n("a"),Rc=n("span"),T(Br.$$.fragment),j_=h(),Hc=n("span"),q_=a("AlbertTokenizerFast"),_f=h(),kt=n("div"),T(Rr.$$.fragment),P_=h(),Bt=n("p"),C_=a("Construct a \u201Cfast\u201D ALBERT tokenizer (backed by HuggingFace\u2019s "),Qc=n("em"),L_=a("tokenizers"),I_=a(` library). Based on
`),Hr=n("a"),O_=a("Unigram"),N_=a(`. This
tokenizer inherits from `),gd=n("a"),S_=a("PreTrainedTokenizerFast"),D_=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),W_=h(),oo=n("div"),T(Qr.$$.fragment),U_=h(),Vc=n("p"),B_=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),R_=h(),Vr=n("ul"),_d=n("li"),H_=a("single sequence: "),Kc=n("code"),Q_=a("[CLS] X [SEP]"),V_=h(),bd=n("li"),K_=a("pair of sequences: "),Jc=n("code"),J_=a("[CLS] A [SEP] B [SEP]"),G_=h(),Tt=n("div"),T(Kr.$$.fragment),X_=h(),Gc=n("p"),Y_=a("Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),Z_=h(),T(qn.$$.fragment),eb=h(),Xc=n("p"),tb=a("if token_ids_1 is None, only returns the first portion of the mask (0s)."),bf=h(),yo=n("h2"),Pn=n("a"),Yc=n("span"),T(Jr.$$.fragment),ob=h(),Zc=n("span"),nb=a("Albert specific outputs"),kf=h(),wo=n("div"),T(Gr.$$.fragment),sb=h(),Xr=n("p"),rb=a("Output type of "),kd=n("a"),ab=a("AlbertForPreTraining"),ib=a("."),vf=h(),$o=n("div"),T(Yr.$$.fragment),lb=h(),Zr=n("p"),db=a("Output type of "),vd=n("a"),cb=a("TFAlbertForPreTraining"),pb=a("."),Tf=h(),Ao=n("h2"),Cn=n("a"),ep=n("span"),T(ea.$$.fragment),hb=h(),tp=n("span"),mb=a("AlbertModel"),yf=h(),Ge=n("div"),T(ta.$$.fragment),fb=h(),op=n("p"),ub=a("The bare ALBERT Model transformer outputting raw hidden-states without any specific head on top."),gb=h(),oa=n("p"),_b=a("This model inherits from "),Td=n("a"),bb=a("PreTrainedModel"),kb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vb=h(),na=n("p"),Tb=a("This model is also a PyTorch "),sa=n("a"),yb=a("torch.nn.Module"),wb=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$b=h(),yt=n("div"),T(ra.$$.fragment),Ab=h(),Fo=n("p"),Fb=a("The "),yd=n("a"),xb=a("AlbertModel"),Eb=a(" forward method, overrides the "),np=n("code"),Mb=a("__call__"),zb=a(" special method."),jb=h(),T(Ln.$$.fragment),qb=h(),T(In.$$.fragment),wf=h(),xo=n("h2"),On=n("a"),sp=n("span"),T(aa.$$.fragment),Pb=h(),rp=n("span"),Cb=a("AlbertForPreTraining"),$f=h(),Xe=n("div"),T(ia.$$.fragment),Lb=h(),Eo=n("p"),Ib=a("Albert Model with two heads on top as done during the pretraining: a "),ap=n("code"),Ob=a("masked language modeling"),Nb=a(` head and a
`),ip=n("code"),Sb=a("sentence order prediction (classification)"),Db=a(" head."),Wb=h(),la=n("p"),Ub=a("This model inherits from "),wd=n("a"),Bb=a("PreTrainedModel"),Rb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hb=h(),da=n("p"),Qb=a("This model is also a PyTorch "),ca=n("a"),Vb=a("torch.nn.Module"),Kb=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jb=h(),wt=n("div"),T(pa.$$.fragment),Gb=h(),Mo=n("p"),Xb=a("The "),$d=n("a"),Yb=a("AlbertForPreTraining"),Zb=a(" forward method, overrides the "),lp=n("code"),ek=a("__call__"),tk=a(" special method."),ok=h(),T(Nn.$$.fragment),nk=h(),T(Sn.$$.fragment),Af=h(),zo=n("h2"),Dn=n("a"),dp=n("span"),T(ha.$$.fragment),sk=h(),cp=n("span"),rk=a("AlbertForMaskedLM"),Ff=h(),Ye=n("div"),T(ma.$$.fragment),ak=h(),fa=n("p"),ik=a("Albert Model with a "),pp=n("code"),lk=a("language modeling"),dk=a(" head on top."),ck=h(),ua=n("p"),pk=a("This model inherits from "),Ad=n("a"),hk=a("PreTrainedModel"),mk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fk=h(),ga=n("p"),uk=a("This model is also a PyTorch "),_a=n("a"),gk=a("torch.nn.Module"),_k=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bk=h(),nt=n("div"),T(ba.$$.fragment),kk=h(),jo=n("p"),vk=a("The "),Fd=n("a"),Tk=a("AlbertForMaskedLM"),yk=a(" forward method, overrides the "),hp=n("code"),wk=a("__call__"),$k=a(" special method."),Ak=h(),T(Wn.$$.fragment),Fk=h(),T(Un.$$.fragment),xk=h(),T(Bn.$$.fragment),xf=h(),qo=n("h2"),Rn=n("a"),mp=n("span"),T(ka.$$.fragment),Ek=h(),fp=n("span"),Mk=a("AlbertForSequenceClassification"),Ef=h(),Ze=n("div"),T(va.$$.fragment),zk=h(),up=n("p"),jk=a(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),qk=h(),Ta=n("p"),Pk=a("This model inherits from "),xd=n("a"),Ck=a("PreTrainedModel"),Lk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ik=h(),ya=n("p"),Ok=a("This model is also a PyTorch "),wa=n("a"),Nk=a("torch.nn.Module"),Sk=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dk=h(),Ue=n("div"),T($a.$$.fragment),Wk=h(),Po=n("p"),Uk=a("The "),Ed=n("a"),Bk=a("AlbertForSequenceClassification"),Rk=a(" forward method, overrides the "),gp=n("code"),Hk=a("__call__"),Qk=a(" special method."),Vk=h(),T(Hn.$$.fragment),Kk=h(),T(Qn.$$.fragment),Jk=h(),T(Vn.$$.fragment),Gk=h(),T(Kn.$$.fragment),Xk=h(),T(Jn.$$.fragment),Mf=h(),Co=n("h2"),Gn=n("a"),_p=n("span"),T(Aa.$$.fragment),Yk=h(),bp=n("span"),Zk=a("AlbertForMultipleChoice"),zf=h(),et=n("div"),T(Fa.$$.fragment),ev=h(),kp=n("p"),tv=a(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ov=h(),xa=n("p"),nv=a("This model inherits from "),Md=n("a"),sv=a("PreTrainedModel"),rv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),av=h(),Ea=n("p"),iv=a("This model is also a PyTorch "),Ma=n("a"),lv=a("torch.nn.Module"),dv=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cv=h(),$t=n("div"),T(za.$$.fragment),pv=h(),Lo=n("p"),hv=a("The "),zd=n("a"),mv=a("AlbertForMultipleChoice"),fv=a(" forward method, overrides the "),vp=n("code"),uv=a("__call__"),gv=a(" special method."),_v=h(),T(Xn.$$.fragment),bv=h(),T(Yn.$$.fragment),jf=h(),Io=n("h2"),Zn=n("a"),Tp=n("span"),T(ja.$$.fragment),kv=h(),yp=n("span"),vv=a("AlbertForTokenClassification"),qf=h(),tt=n("div"),T(qa.$$.fragment),Tv=h(),wp=n("p"),yv=a(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),wv=h(),Pa=n("p"),$v=a("This model inherits from "),jd=n("a"),Av=a("PreTrainedModel"),Fv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xv=h(),Ca=n("p"),Ev=a("This model is also a PyTorch "),La=n("a"),Mv=a("torch.nn.Module"),zv=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jv=h(),st=n("div"),T(Ia.$$.fragment),qv=h(),Oo=n("p"),Pv=a("The "),qd=n("a"),Cv=a("AlbertForTokenClassification"),Lv=a(" forward method, overrides the "),$p=n("code"),Iv=a("__call__"),Ov=a(" special method."),Nv=h(),T(es.$$.fragment),Sv=h(),T(ts.$$.fragment),Dv=h(),T(os.$$.fragment),Pf=h(),No=n("h2"),ns=n("a"),Ap=n("span"),T(Oa.$$.fragment),Wv=h(),Fp=n("span"),Uv=a("AlbertForQuestionAnswering"),Cf=h(),ot=n("div"),T(Na.$$.fragment),Bv=h(),So=n("p"),Rv=a(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),xp=n("code"),Hv=a("span start logits"),Qv=a(" and "),Ep=n("code"),Vv=a("span end logits"),Kv=a(")."),Jv=h(),Sa=n("p"),Gv=a("This model inherits from "),Pd=n("a"),Xv=a("PreTrainedModel"),Yv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zv=h(),Da=n("p"),eT=a("This model is also a PyTorch "),Wa=n("a"),tT=a("torch.nn.Module"),oT=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nT=h(),rt=n("div"),T(Ua.$$.fragment),sT=h(),Do=n("p"),rT=a("The "),Cd=n("a"),aT=a("AlbertForQuestionAnswering"),iT=a(" forward method, overrides the "),Mp=n("code"),lT=a("__call__"),dT=a(" special method."),cT=h(),T(ss.$$.fragment),pT=h(),T(rs.$$.fragment),hT=h(),T(as.$$.fragment),Lf=h(),Wo=n("h2"),is=n("a"),zp=n("span"),T(Ba.$$.fragment),mT=h(),jp=n("span"),fT=a("TFAlbertModel"),If=h(),Be=n("div"),T(Ra.$$.fragment),uT=h(),qp=n("p"),gT=a("The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),_T=h(),Ha=n("p"),bT=a("This model inherits from "),Ld=n("a"),kT=a("TFPreTrainedModel"),vT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),TT=h(),Qa=n("p"),yT=a("This model is also a "),Va=n("a"),wT=a("tf.keras.Model"),$T=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),AT=h(),T(ls.$$.fragment),FT=h(),At=n("div"),T(Ka.$$.fragment),xT=h(),Uo=n("p"),ET=a("The "),Id=n("a"),MT=a("TFAlbertModel"),zT=a(" forward method, overrides the "),Pp=n("code"),jT=a("__call__"),qT=a(" special method."),PT=h(),T(ds.$$.fragment),CT=h(),T(cs.$$.fragment),Of=h(),Bo=n("h2"),ps=n("a"),Cp=n("span"),T(Ja.$$.fragment),LT=h(),Lp=n("span"),IT=a("TFAlbertForPreTraining"),Nf=h(),Re=n("div"),T(Ga.$$.fragment),OT=h(),Ro=n("p"),NT=a("Albert Model with two heads on top for pretraining: a "),Ip=n("code"),ST=a("masked language modeling"),DT=a(" head and a "),Op=n("code"),WT=a("sentence order prediction"),UT=a(" (classification) head."),BT=h(),Xa=n("p"),RT=a("This model inherits from "),Od=n("a"),HT=a("TFPreTrainedModel"),QT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),VT=h(),Ya=n("p"),KT=a("This model is also a "),Za=n("a"),JT=a("tf.keras.Model"),GT=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),XT=h(),T(hs.$$.fragment),YT=h(),Ft=n("div"),T(ei.$$.fragment),ZT=h(),Ho=n("p"),e1=a("The "),Nd=n("a"),t1=a("TFAlbertForPreTraining"),o1=a(" forward method, overrides the "),Np=n("code"),n1=a("__call__"),s1=a(" special method."),r1=h(),T(ms.$$.fragment),a1=h(),T(fs.$$.fragment),Sf=h(),Qo=n("h2"),us=n("a"),Sp=n("span"),T(ti.$$.fragment),i1=h(),Dp=n("span"),l1=a("TFAlbertForMaskedLM"),Df=h(),He=n("div"),T(oi.$$.fragment),d1=h(),ni=n("p"),c1=a("Albert Model with a "),Wp=n("code"),p1=a("language modeling"),h1=a(" head on top."),m1=h(),si=n("p"),f1=a("This model inherits from "),Sd=n("a"),u1=a("TFPreTrainedModel"),g1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_1=h(),ri=n("p"),b1=a("This model is also a "),ai=n("a"),k1=a("tf.keras.Model"),v1=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),T1=h(),T(gs.$$.fragment),y1=h(),at=n("div"),T(ii.$$.fragment),w1=h(),Vo=n("p"),$1=a("The "),Dd=n("a"),A1=a("TFAlbertForMaskedLM"),F1=a(" forward method, overrides the "),Up=n("code"),x1=a("__call__"),E1=a(" special method."),M1=h(),T(_s.$$.fragment),z1=h(),T(bs.$$.fragment),j1=h(),T(ks.$$.fragment),Wf=h(),Ko=n("h2"),vs=n("a"),Bp=n("span"),T(li.$$.fragment),q1=h(),Rp=n("span"),P1=a("TFAlbertForSequenceClassification"),Uf=h(),Qe=n("div"),T(di.$$.fragment),C1=h(),Hp=n("p"),L1=a(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),I1=h(),ci=n("p"),O1=a("This model inherits from "),Wd=n("a"),N1=a("TFPreTrainedModel"),S1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),D1=h(),pi=n("p"),W1=a("This model is also a "),hi=n("a"),U1=a("tf.keras.Model"),B1=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),R1=h(),T(Ts.$$.fragment),H1=h(),it=n("div"),T(mi.$$.fragment),Q1=h(),Jo=n("p"),V1=a("The "),Ud=n("a"),K1=a("TFAlbertForSequenceClassification"),J1=a(" forward method, overrides the "),Qp=n("code"),G1=a("__call__"),X1=a(" special method."),Y1=h(),T(ys.$$.fragment),Z1=h(),T(ws.$$.fragment),ey=h(),T($s.$$.fragment),Bf=h(),Go=n("h2"),As=n("a"),Vp=n("span"),T(fi.$$.fragment),ty=h(),Kp=n("span"),oy=a("TFAlbertForMultipleChoice"),Rf=h(),Ve=n("div"),T(ui.$$.fragment),ny=h(),Jp=n("p"),sy=a(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ry=h(),gi=n("p"),ay=a("This model inherits from "),Bd=n("a"),iy=a("TFPreTrainedModel"),ly=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dy=h(),_i=n("p"),cy=a("This model is also a "),bi=n("a"),py=a("tf.keras.Model"),hy=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),my=h(),T(Fs.$$.fragment),fy=h(),xt=n("div"),T(ki.$$.fragment),uy=h(),Xo=n("p"),gy=a("The "),Rd=n("a"),_y=a("TFAlbertForMultipleChoice"),by=a(" forward method, overrides the "),Gp=n("code"),ky=a("__call__"),vy=a(" special method."),Ty=h(),T(xs.$$.fragment),yy=h(),T(Es.$$.fragment),Hf=h(),Yo=n("h2"),Ms=n("a"),Xp=n("span"),T(vi.$$.fragment),wy=h(),Yp=n("span"),$y=a("TFAlbertForTokenClassification"),Qf=h(),Ke=n("div"),T(Ti.$$.fragment),Ay=h(),Zp=n("p"),Fy=a(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),xy=h(),yi=n("p"),Ey=a("This model inherits from "),Hd=n("a"),My=a("TFPreTrainedModel"),zy=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jy=h(),wi=n("p"),qy=a("This model is also a "),$i=n("a"),Py=a("tf.keras.Model"),Cy=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ly=h(),T(zs.$$.fragment),Iy=h(),lt=n("div"),T(Ai.$$.fragment),Oy=h(),Zo=n("p"),Ny=a("The "),Qd=n("a"),Sy=a("TFAlbertForTokenClassification"),Dy=a(" forward method, overrides the "),eh=n("code"),Wy=a("__call__"),Uy=a(" special method."),By=h(),T(js.$$.fragment),Ry=h(),T(qs.$$.fragment),Hy=h(),T(Ps.$$.fragment),Vf=h(),en=n("h2"),Cs=n("a"),th=n("span"),T(Fi.$$.fragment),Qy=h(),oh=n("span"),Vy=a("TFAlbertForQuestionAnswering"),Kf=h(),Je=n("div"),T(xi.$$.fragment),Ky=h(),tn=n("p"),Jy=a(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),nh=n("code"),Gy=a("span start logits"),Xy=a(" and "),sh=n("code"),Yy=a("span end logits"),Zy=a(")."),ew=h(),Ei=n("p"),tw=a("This model inherits from "),Vd=n("a"),ow=a("TFPreTrainedModel"),nw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sw=h(),Mi=n("p"),rw=a("This model is also a "),zi=n("a"),aw=a("tf.keras.Model"),iw=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lw=h(),T(Ls.$$.fragment),dw=h(),dt=n("div"),T(ji.$$.fragment),cw=h(),on=n("p"),pw=a("The "),Kd=n("a"),hw=a("TFAlbertForQuestionAnswering"),mw=a(" forward method, overrides the "),rh=n("code"),fw=a("__call__"),uw=a(" special method."),gw=h(),T(Is.$$.fragment),_w=h(),T(Os.$$.fragment),bw=h(),T(Ns.$$.fragment),Jf=h(),nn=n("h2"),Ss=n("a"),ah=n("span"),T(qi.$$.fragment),kw=h(),ih=n("span"),vw=a("FlaxAlbertModel"),Gf=h(),Le=n("div"),T(Pi.$$.fragment),Tw=h(),lh=n("p"),yw=a("The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),ww=h(),Ci=n("p"),$w=a("This model inherits from "),Jd=n("a"),Aw=a("FlaxPreTrainedModel"),Fw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xw=h(),Li=n("p"),Ew=a("This model is also a Flax Linen "),Ii=n("a"),Mw=a("flax.linen.Module"),zw=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),jw=h(),dh=n("p"),qw=a("Finally, this model supports inherent JAX features such as:"),Pw=h(),Rt=n("ul"),ch=n("li"),Oi=n("a"),Cw=a("Just-In-Time (JIT) compilation"),Lw=h(),ph=n("li"),Ni=n("a"),Iw=a("Automatic Differentiation"),Ow=h(),hh=n("li"),Si=n("a"),Nw=a("Vectorization"),Sw=h(),mh=n("li"),Di=n("a"),Dw=a("Parallelization"),Ww=h(),Et=n("div"),T(Wi.$$.fragment),Uw=h(),sn=n("p"),Bw=a("The "),fh=n("code"),Rw=a("FlaxAlbertPreTrainedModel"),Hw=a(" forward method, overrides the "),uh=n("code"),Qw=a("__call__"),Vw=a(" special method."),Kw=h(),T(Ds.$$.fragment),Jw=h(),T(Ws.$$.fragment),Xf=h(),rn=n("h2"),Us=n("a"),gh=n("span"),T(Ui.$$.fragment),Gw=h(),_h=n("span"),Xw=a("FlaxAlbertForPreTraining"),Yf=h(),Ie=n("div"),T(Bi.$$.fragment),Yw=h(),an=n("p"),Zw=a("Albert Model with two heads on top as done during the pretraining: a "),bh=n("code"),e$=a("masked language modeling"),t$=a(` head and a
`),kh=n("code"),o$=a("sentence order prediction (classification)"),n$=a(" head."),s$=h(),Ri=n("p"),r$=a("This model inherits from "),Gd=n("a"),a$=a("FlaxPreTrainedModel"),i$=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),l$=h(),Hi=n("p"),d$=a("This model is also a Flax Linen "),Qi=n("a"),c$=a("flax.linen.Module"),p$=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),h$=h(),vh=n("p"),m$=a("Finally, this model supports inherent JAX features such as:"),f$=h(),Ht=n("ul"),Th=n("li"),Vi=n("a"),u$=a("Just-In-Time (JIT) compilation"),g$=h(),yh=n("li"),Ki=n("a"),_$=a("Automatic Differentiation"),b$=h(),wh=n("li"),Ji=n("a"),k$=a("Vectorization"),v$=h(),$h=n("li"),Gi=n("a"),T$=a("Parallelization"),y$=h(),Mt=n("div"),T(Xi.$$.fragment),w$=h(),ln=n("p"),$$=a("The "),Ah=n("code"),A$=a("FlaxAlbertPreTrainedModel"),F$=a(" forward method, overrides the "),Fh=n("code"),x$=a("__call__"),E$=a(" special method."),M$=h(),T(Bs.$$.fragment),z$=h(),T(Rs.$$.fragment),Zf=h(),dn=n("h2"),Hs=n("a"),xh=n("span"),T(Yi.$$.fragment),j$=h(),Eh=n("span"),q$=a("FlaxAlbertForMaskedLM"),eu=h(),Oe=n("div"),T(Zi.$$.fragment),P$=h(),el=n("p"),C$=a("Albert Model with a "),Mh=n("code"),L$=a("language modeling"),I$=a(" head on top."),O$=h(),tl=n("p"),N$=a("This model inherits from "),Xd=n("a"),S$=a("FlaxPreTrainedModel"),D$=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),W$=h(),ol=n("p"),U$=a("This model is also a Flax Linen "),nl=n("a"),B$=a("flax.linen.Module"),R$=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),H$=h(),zh=n("p"),Q$=a("Finally, this model supports inherent JAX features such as:"),V$=h(),Qt=n("ul"),jh=n("li"),sl=n("a"),K$=a("Just-In-Time (JIT) compilation"),J$=h(),qh=n("li"),rl=n("a"),G$=a("Automatic Differentiation"),X$=h(),Ph=n("li"),al=n("a"),Y$=a("Vectorization"),Z$=h(),Ch=n("li"),il=n("a"),e2=a("Parallelization"),t2=h(),zt=n("div"),T(ll.$$.fragment),o2=h(),cn=n("p"),n2=a("The "),Lh=n("code"),s2=a("FlaxAlbertPreTrainedModel"),r2=a(" forward method, overrides the "),Ih=n("code"),a2=a("__call__"),i2=a(" special method."),l2=h(),T(Qs.$$.fragment),d2=h(),T(Vs.$$.fragment),tu=h(),pn=n("h2"),Ks=n("a"),Oh=n("span"),T(dl.$$.fragment),c2=h(),Nh=n("span"),p2=a("FlaxAlbertForSequenceClassification"),ou=h(),Ne=n("div"),T(cl.$$.fragment),h2=h(),Sh=n("p"),m2=a(`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),f2=h(),pl=n("p"),u2=a("This model inherits from "),Yd=n("a"),g2=a("FlaxPreTrainedModel"),_2=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),b2=h(),hl=n("p"),k2=a("This model is also a Flax Linen "),ml=n("a"),v2=a("flax.linen.Module"),T2=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),y2=h(),Dh=n("p"),w2=a("Finally, this model supports inherent JAX features such as:"),$2=h(),Vt=n("ul"),Wh=n("li"),fl=n("a"),A2=a("Just-In-Time (JIT) compilation"),F2=h(),Uh=n("li"),ul=n("a"),x2=a("Automatic Differentiation"),E2=h(),Bh=n("li"),gl=n("a"),M2=a("Vectorization"),z2=h(),Rh=n("li"),_l=n("a"),j2=a("Parallelization"),q2=h(),jt=n("div"),T(bl.$$.fragment),P2=h(),hn=n("p"),C2=a("The "),Hh=n("code"),L2=a("FlaxAlbertPreTrainedModel"),I2=a(" forward method, overrides the "),Qh=n("code"),O2=a("__call__"),N2=a(" special method."),S2=h(),T(Js.$$.fragment),D2=h(),T(Gs.$$.fragment),nu=h(),mn=n("h2"),Xs=n("a"),Vh=n("span"),T(kl.$$.fragment),W2=h(),Kh=n("span"),U2=a("FlaxAlbertForMultipleChoice"),su=h(),Se=n("div"),T(vl.$$.fragment),B2=h(),Jh=n("p"),R2=a(`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),H2=h(),Tl=n("p"),Q2=a("This model inherits from "),Zd=n("a"),V2=a("FlaxPreTrainedModel"),K2=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),J2=h(),yl=n("p"),G2=a("This model is also a Flax Linen "),wl=n("a"),X2=a("flax.linen.Module"),Y2=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Z2=h(),Gh=n("p"),eA=a("Finally, this model supports inherent JAX features such as:"),tA=h(),Kt=n("ul"),Xh=n("li"),$l=n("a"),oA=a("Just-In-Time (JIT) compilation"),nA=h(),Yh=n("li"),Al=n("a"),sA=a("Automatic Differentiation"),rA=h(),Zh=n("li"),Fl=n("a"),aA=a("Vectorization"),iA=h(),em=n("li"),xl=n("a"),lA=a("Parallelization"),dA=h(),qt=n("div"),T(El.$$.fragment),cA=h(),fn=n("p"),pA=a("The "),tm=n("code"),hA=a("FlaxAlbertPreTrainedModel"),mA=a(" forward method, overrides the "),om=n("code"),fA=a("__call__"),uA=a(" special method."),gA=h(),T(Ys.$$.fragment),_A=h(),T(Zs.$$.fragment),ru=h(),un=n("h2"),er=n("a"),nm=n("span"),T(Ml.$$.fragment),bA=h(),sm=n("span"),kA=a("FlaxAlbertForTokenClassification"),au=h(),De=n("div"),T(zl.$$.fragment),vA=h(),rm=n("p"),TA=a(`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),yA=h(),jl=n("p"),wA=a("This model inherits from "),ec=n("a"),$A=a("FlaxPreTrainedModel"),AA=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),FA=h(),ql=n("p"),xA=a("This model is also a Flax Linen "),Pl=n("a"),EA=a("flax.linen.Module"),MA=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),zA=h(),am=n("p"),jA=a("Finally, this model supports inherent JAX features such as:"),qA=h(),Jt=n("ul"),im=n("li"),Cl=n("a"),PA=a("Just-In-Time (JIT) compilation"),CA=h(),lm=n("li"),Ll=n("a"),LA=a("Automatic Differentiation"),IA=h(),dm=n("li"),Il=n("a"),OA=a("Vectorization"),NA=h(),cm=n("li"),Ol=n("a"),SA=a("Parallelization"),DA=h(),Pt=n("div"),T(Nl.$$.fragment),WA=h(),gn=n("p"),UA=a("The "),pm=n("code"),BA=a("FlaxAlbertPreTrainedModel"),RA=a(" forward method, overrides the "),hm=n("code"),HA=a("__call__"),QA=a(" special method."),VA=h(),T(tr.$$.fragment),KA=h(),T(or.$$.fragment),iu=h(),_n=n("h2"),nr=n("a"),mm=n("span"),T(Sl.$$.fragment),JA=h(),fm=n("span"),GA=a("FlaxAlbertForQuestionAnswering"),lu=h(),We=n("div"),T(Dl.$$.fragment),XA=h(),bn=n("p"),YA=a(`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),um=n("code"),ZA=a("span start logits"),eF=a(" and "),gm=n("code"),tF=a("span end logits"),oF=a(")."),nF=h(),Wl=n("p"),sF=a("This model inherits from "),tc=n("a"),rF=a("FlaxPreTrainedModel"),aF=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),iF=h(),Ul=n("p"),lF=a("This model is also a Flax Linen "),Bl=n("a"),dF=a("flax.linen.Module"),cF=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),pF=h(),_m=n("p"),hF=a("Finally, this model supports inherent JAX features such as:"),mF=h(),Gt=n("ul"),bm=n("li"),Rl=n("a"),fF=a("Just-In-Time (JIT) compilation"),uF=h(),km=n("li"),Hl=n("a"),gF=a("Automatic Differentiation"),_F=h(),vm=n("li"),Ql=n("a"),bF=a("Vectorization"),kF=h(),Tm=n("li"),Vl=n("a"),vF=a("Parallelization"),TF=h(),Ct=n("div"),T(Kl.$$.fragment),yF=h(),kn=n("p"),wF=a("The "),ym=n("code"),$F=a("FlaxAlbertPreTrainedModel"),AF=a(" forward method, overrides the "),wm=n("code"),FF=a("__call__"),xF=a(" special method."),EF=h(),T(sr.$$.fragment),MF=h(),T(rr.$$.fragment),this.h()},l(o){const k=g3('[data-svelte="svelte-1phssyn"]',document.head);d=s(k,"META",{name:!0,content:!0}),k.forEach(t),g=m(o),c=s(o,"H1",{class:!0});var Jl=r(c);p=s(Jl,"A",{id:!0,class:!0,href:!0});var $m=r(p);_=s($m,"SPAN",{});var Am=r(_);y(l.$$.fragment,Am),Am.forEach(t),$m.forEach(t),f=m(Jl),E=s(Jl,"SPAN",{});var Fm=r(E);q=i(Fm,"ALBERT"),Fm.forEach(t),Jl.forEach(t),L=m(o),M=s(o,"H2",{class:!0});var Gl=r(M);S=s(Gl,"A",{id:!0,class:!0,href:!0});var xm=r(S);O=s(xm,"SPAN",{});var Em=r(O);y(Z.$$.fragment,Em),Em.forEach(t),xm.forEach(t),ue=m(Gl),Q=s(Gl,"SPAN",{});var Mm=r(Q);ge=i(Mm,"Overview"),Mm.forEach(t),Gl.forEach(t),ce=m(o),X=s(o,"P",{});var Xl=r(X);D=i(Xl,"The ALBERT model was proposed in "),re=s(Xl,"A",{href:!0,rel:!0});var zm=r(re);ee=i(zm,"ALBERT: A Lite BERT for Self-supervised Learning of Language Representations"),zm.forEach(t),j=i(Xl,` by Zhenzhong Lan, Mingda Chen, Sebastian Goodman, Kevin Gimpel, Piyush Sharma,
Radu Soricut. It presents two parameter-reduction techniques to lower memory consumption and increase the training
speed of BERT:`),Xl.forEach(t),C=m(o),se=s(o,"UL",{});var Yl=r(se);V=s(Yl,"LI",{});var jm=r(V);_e=i(jm,"Splitting the embedding matrix into two smaller matrices."),jm.forEach(t),be=m(Yl),K=s(Yl,"LI",{});var qm=r(K);ke=i(qm,"Using repeating layers split among groups."),qm.forEach(t),Yl.forEach(t),pe=m(o),P=s(o,"P",{});var Pm=r(P);ve=i(Pm,"The abstract from the paper is the following:"),Pm.forEach(t),J=m(o),ae=s(o,"P",{});var Cm=r(ae);le=s(Cm,"EM",{});var Lm=r(le);G=i(Lm,`Increasing model size when pretraining natural language representations often results in improved performance on
downstream tasks. However, at some point further model increases become harder due to GPU/TPU memory limitations,
longer training times, and unexpected model degradation. To address these problems, we present two parameter-reduction
techniques to lower memory consumption and increase the training speed of BERT. Comprehensive empirical evidence shows
that our proposed methods lead to models that scale much better compared to the original BERT. We also use a
self-supervised loss that focuses on modeling inter-sentence coherence, and show it consistently helps downstream tasks
with multi-sentence inputs. As a result, our best model establishes new state-of-the-art results on the GLUE, RACE, and
SQuAD benchmarks while having fewer parameters compared to BERT-large.`),Lm.forEach(t),Cm.forEach(t),he=m(o),ie=s(o,"P",{});var Im=r(ie);W=i(Im,"Tips:"),Im.forEach(t),me=m(o),B=s(o,"UL",{});var Zl=r(B);de=s(Zl,"LI",{});var Om=r(de);v=i(Om,`ALBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),Om.forEach(t),z=m(Zl),Y=s(Zl,"LI",{});var Nm=r(Y);Ee=i(Nm,`ALBERT uses repeating layers which results in a small memory footprint, however the computational cost remains
similar to a BERT-like architecture with the same number of hidden layers as it has to iterate through the same
number of (repeating) layers.`),Nm.forEach(t),Zl.forEach(t),Fe=m(o),I=s(o,"P",{});var Xt=r(I);Me=i(Xt,"This model was contributed by "),we=s(Xt,"A",{href:!0,rel:!0});var Sm=r(we);ze=i(Sm,"lysandre"),Sm.forEach(t),U=i(Xt,`. This model jax version was contributed by
`),R=s(Xt,"A",{href:!0,rel:!0});var Dm=r(R);je=i(Dm,"kamalkraj"),Dm.forEach(t),qe=i(Xt,". The original code can be found "),H=s(Xt,"A",{href:!0,rel:!0});var Wm=r(H);Pe=i(Wm,"here"),Wm.forEach(t),Ce=i(Xt,"."),Xt.forEach(t),fe=m(o),Te=s(o,"H2",{class:!0});var ed=r(Te);wn=s(ed,"A",{id:!0,class:!0,href:!0});var Um=r(wn);qc=s(Um,"SPAN",{});var Bm=r(qc);y(Mr.$$.fragment,Bm),Bm.forEach(t),Um.forEach(t),Eg=m(ed),Pc=s(ed,"SPAN",{});var Rm=r(Pc);Mg=i(Rm,"AlbertConfig"),Rm.forEach(t),ed.forEach(t),mf=m(o),bt=s(o,"DIV",{class:!0});var Yt=r(bt);y(zr.$$.fragment,Yt),zg=m(Yt),Ut=s(Yt,"P",{});var Zt=r(Ut);jg=i(Zt,"This is the configuration class to store the configuration of a "),ld=s(Zt,"A",{href:!0});var Hm=r(ld);qg=i(Hm,"AlbertModel"),Hm.forEach(t),Pg=i(Zt," or a "),dd=s(Zt,"A",{href:!0});var Qm=r(dd);Cg=i(Qm,"TFAlbertModel"),Qm.forEach(t),Lg=i(Zt,`. It is used
to instantiate an ALBERT model according to the specified arguments, defining the model architecture. Instantiating
a configuration with the defaults will yield a similar configuration to that of the ALBERT
`),jr=s(Zt,"A",{href:!0,rel:!0});var Vm=r(jr);Ig=i(Vm,"albert-xxlarge-v2"),Vm.forEach(t),Og=i(Zt," architecture."),Zt.forEach(t),Ng=m(Yt),bo=s(Yt,"P",{});var vn=r(bo);Sg=i(vn,"Configuration objects inherit from "),cd=s(vn,"A",{href:!0});var Km=r(cd);Dg=i(Km,"PretrainedConfig"),Km.forEach(t),Wg=i(vn,` and can be used to control the model outputs. Read the
documentation from `),pd=s(vn,"A",{href:!0});var Jm=r(pd);Ug=i(Jm,"PretrainedConfig"),Jm.forEach(t),Bg=i(vn," for more information."),vn.forEach(t),Rg=m(Yt),y($n.$$.fragment,Yt),Yt.forEach(t),ff=m(o),ko=s(o,"H2",{class:!0});var td=r(ko);An=s(td,"A",{id:!0,class:!0,href:!0});var Gm=r(An);Cc=s(Gm,"SPAN",{});var Xm=r(Cc);y(qr.$$.fragment,Xm),Xm.forEach(t),Gm.forEach(t),Hg=m(td),Lc=s(td,"SPAN",{});var Ym=r(Lc);Qg=i(Ym,"AlbertTokenizer"),Ym.forEach(t),td.forEach(t),uf=m(o),$e=s(o,"DIV",{class:!0});var xe=r($e);y(Pr.$$.fragment,xe),Vg=m(xe),Cr=s(xe,"P",{});var od=r(Cr);Kg=i(od,"Construct an ALBERT tokenizer. Based on "),Lr=s(od,"A",{href:!0,rel:!0});var Zm=r(Lr);Jg=i(Zm,"SentencePiece"),Zm.forEach(t),Gg=i(od,"."),od.forEach(t),Xg=m(xe),Ir=s(xe,"P",{});var nd=r(Ir);Yg=i(nd,"This tokenizer inherits from "),hd=s(nd,"A",{href:!0});var ef=r(hd);Zg=i(ef,"PreTrainedTokenizer"),ef.forEach(t),e_=i(nd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),nd.forEach(t),t_=m(xe),Ic=s(xe,"P",{});var tf=r(Ic);o_=i(tf,"Example:"),tf.forEach(t),n_=m(xe),y(Fn.$$.fragment,xe),s_=m(xe),y(xn.$$.fragment,xe),r_=m(xe),y(En.$$.fragment,xe),a_=m(xe),to=s(xe,"DIV",{class:!0});var Tn=r(to);y(Or.$$.fragment,Tn),i_=m(Tn),Oc=s(Tn,"P",{});var of=r(Oc);l_=i(of,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),of.forEach(t),d_=m(Tn),Nr=s(Tn,"UL",{});var sd=r(Nr);md=s(sd,"LI",{});var oc=r(md);c_=i(oc,"single sequence: "),Nc=s(oc,"CODE",{});var nf=r(Nc);p_=i(nf,"[CLS] X [SEP]"),nf.forEach(t),oc.forEach(t),h_=m(sd),fd=s(sd,"LI",{});var nc=r(fd);m_=i(nc,"pair of sequences: "),Sc=s(nc,"CODE",{});var sf=r(Sc);f_=i(sf,"[CLS] A [SEP] B [SEP]"),sf.forEach(t),nc.forEach(t),sd.forEach(t),Tn.forEach(t),u_=m(xe),Mn=s(xe,"DIV",{class:!0});var rd=r(Mn);y(Sr.$$.fragment,rd),g_=m(rd),Dr=s(rd,"P",{});var ad=r(Dr);__=i(ad,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Dc=s(ad,"CODE",{});var rf=r(Dc);b_=i(rf,"prepare_for_model"),rf.forEach(t),k_=i(ad," method."),ad.forEach(t),rd.forEach(t),v_=m(xe),vt=s(xe,"DIV",{class:!0});var eo=r(vt);y(Wr.$$.fragment,eo),T_=m(eo),Wc=s(eo,"P",{});var af=r(Wc);y_=i(af,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),af.forEach(t),w_=m(eo),y(zn.$$.fragment,eo),$_=m(eo),vo=s(eo,"P",{});var yn=r(vo);A_=i(yn,"If "),Uc=s(yn,"CODE",{});var lf=r(Uc);F_=i(lf,"token_ids_1"),lf.forEach(t),x_=i(yn," is "),Bc=s(yn,"CODE",{});var df=r(Bc);E_=i(df,"None"),df.forEach(t),M_=i(yn,", this method only returns the first portion of the mask (0s)."),yn.forEach(t),eo.forEach(t),z_=m(xe),ud=s(xe,"DIV",{class:!0});var cf=r(ud);y(Ur.$$.fragment,cf),cf.forEach(t),xe.forEach(t),gf=m(o),To=s(o,"H2",{class:!0});var id=r(To);jn=s(id,"A",{id:!0,class:!0,href:!0});var pf=r(jn);Rc=s(pf,"SPAN",{});var hf=r(Rc);y(Br.$$.fragment,hf),hf.forEach(t),pf.forEach(t),j_=m(id),Hc=s(id,"SPAN",{});var qF=r(Hc);q_=i(qF,"AlbertTokenizerFast"),qF.forEach(t),id.forEach(t),_f=m(o),kt=s(o,"DIV",{class:!0});var ar=r(kt);y(Rr.$$.fragment,ar),P_=m(ar),Bt=s(ar,"P",{});var ir=r(Bt);C_=i(ir,"Construct a \u201Cfast\u201D ALBERT tokenizer (backed by HuggingFace\u2019s "),Qc=s(ir,"EM",{});var PF=r(Qc);L_=i(PF,"tokenizers"),PF.forEach(t),I_=i(ir,` library). Based on
`),Hr=s(ir,"A",{href:!0,rel:!0});var CF=r(Hr);O_=i(CF,"Unigram"),CF.forEach(t),N_=i(ir,`. This
tokenizer inherits from `),gd=s(ir,"A",{href:!0});var LF=r(gd);S_=i(LF,"PreTrainedTokenizerFast"),LF.forEach(t),D_=i(ir,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),ir.forEach(t),W_=m(ar),oo=s(ar,"DIV",{class:!0});var sc=r(oo);y(Qr.$$.fragment,sc),U_=m(sc),Vc=s(sc,"P",{});var IF=r(Vc);B_=i(IF,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ALBERT sequence has the following format:`),IF.forEach(t),R_=m(sc),Vr=s(sc,"UL",{});var cu=r(Vr);_d=s(cu,"LI",{});var zF=r(_d);H_=i(zF,"single sequence: "),Kc=s(zF,"CODE",{});var OF=r(Kc);Q_=i(OF,"[CLS] X [SEP]"),OF.forEach(t),zF.forEach(t),V_=m(cu),bd=s(cu,"LI",{});var jF=r(bd);K_=i(jF,"pair of sequences: "),Jc=s(jF,"CODE",{});var NF=r(Jc);J_=i(NF,"[CLS] A [SEP] B [SEP]"),NF.forEach(t),jF.forEach(t),cu.forEach(t),sc.forEach(t),G_=m(ar),Tt=s(ar,"DIV",{class:!0});var lr=r(Tt);y(Kr.$$.fragment,lr),X_=m(lr),Gc=s(lr,"P",{});var SF=r(Gc);Y_=i(SF,"Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),SF.forEach(t),Z_=m(lr),y(qn.$$.fragment,lr),eb=m(lr),Xc=s(lr,"P",{});var DF=r(Xc);tb=i(DF,"if token_ids_1 is None, only returns the first portion of the mask (0s)."),DF.forEach(t),lr.forEach(t),ar.forEach(t),bf=m(o),yo=s(o,"H2",{class:!0});var pu=r(yo);Pn=s(pu,"A",{id:!0,class:!0,href:!0});var WF=r(Pn);Yc=s(WF,"SPAN",{});var UF=r(Yc);y(Jr.$$.fragment,UF),UF.forEach(t),WF.forEach(t),ob=m(pu),Zc=s(pu,"SPAN",{});var BF=r(Zc);nb=i(BF,"Albert specific outputs"),BF.forEach(t),pu.forEach(t),kf=m(o),wo=s(o,"DIV",{class:!0});var hu=r(wo);y(Gr.$$.fragment,hu),sb=m(hu),Xr=s(hu,"P",{});var mu=r(Xr);rb=i(mu,"Output type of "),kd=s(mu,"A",{href:!0});var RF=r(kd);ab=i(RF,"AlbertForPreTraining"),RF.forEach(t),ib=i(mu,"."),mu.forEach(t),hu.forEach(t),vf=m(o),$o=s(o,"DIV",{class:!0});var fu=r($o);y(Yr.$$.fragment,fu),lb=m(fu),Zr=s(fu,"P",{});var uu=r(Zr);db=i(uu,"Output type of "),vd=s(uu,"A",{href:!0});var HF=r(vd);cb=i(HF,"TFAlbertForPreTraining"),HF.forEach(t),pb=i(uu,"."),uu.forEach(t),fu.forEach(t),Tf=m(o),Ao=s(o,"H2",{class:!0});var gu=r(Ao);Cn=s(gu,"A",{id:!0,class:!0,href:!0});var QF=r(Cn);ep=s(QF,"SPAN",{});var VF=r(ep);y(ea.$$.fragment,VF),VF.forEach(t),QF.forEach(t),hb=m(gu),tp=s(gu,"SPAN",{});var KF=r(tp);mb=i(KF,"AlbertModel"),KF.forEach(t),gu.forEach(t),yf=m(o),Ge=s(o,"DIV",{class:!0});var no=r(Ge);y(ta.$$.fragment,no),fb=m(no),op=s(no,"P",{});var JF=r(op);ub=i(JF,"The bare ALBERT Model transformer outputting raw hidden-states without any specific head on top."),JF.forEach(t),gb=m(no),oa=s(no,"P",{});var _u=r(oa);_b=i(_u,"This model inherits from "),Td=s(_u,"A",{href:!0});var GF=r(Td);bb=i(GF,"PreTrainedModel"),GF.forEach(t),kb=i(_u,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_u.forEach(t),vb=m(no),na=s(no,"P",{});var bu=r(na);Tb=i(bu,"This model is also a PyTorch "),sa=s(bu,"A",{href:!0,rel:!0});var XF=r(sa);yb=i(XF,"torch.nn.Module"),XF.forEach(t),wb=i(bu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bu.forEach(t),$b=m(no),yt=s(no,"DIV",{class:!0});var dr=r(yt);y(ra.$$.fragment,dr),Ab=m(dr),Fo=s(dr,"P",{});var rc=r(Fo);Fb=i(rc,"The "),yd=s(rc,"A",{href:!0});var YF=r(yd);xb=i(YF,"AlbertModel"),YF.forEach(t),Eb=i(rc," forward method, overrides the "),np=s(rc,"CODE",{});var ZF=r(np);Mb=i(ZF,"__call__"),ZF.forEach(t),zb=i(rc," special method."),rc.forEach(t),jb=m(dr),y(Ln.$$.fragment,dr),qb=m(dr),y(In.$$.fragment,dr),dr.forEach(t),no.forEach(t),wf=m(o),xo=s(o,"H2",{class:!0});var ku=r(xo);On=s(ku,"A",{id:!0,class:!0,href:!0});var e0=r(On);sp=s(e0,"SPAN",{});var t0=r(sp);y(aa.$$.fragment,t0),t0.forEach(t),e0.forEach(t),Pb=m(ku),rp=s(ku,"SPAN",{});var o0=r(rp);Cb=i(o0,"AlbertForPreTraining"),o0.forEach(t),ku.forEach(t),$f=m(o),Xe=s(o,"DIV",{class:!0});var so=r(Xe);y(ia.$$.fragment,so),Lb=m(so),Eo=s(so,"P",{});var ac=r(Eo);Ib=i(ac,"Albert Model with two heads on top as done during the pretraining: a "),ap=s(ac,"CODE",{});var n0=r(ap);Ob=i(n0,"masked language modeling"),n0.forEach(t),Nb=i(ac,` head and a
`),ip=s(ac,"CODE",{});var s0=r(ip);Sb=i(s0,"sentence order prediction (classification)"),s0.forEach(t),Db=i(ac," head."),ac.forEach(t),Wb=m(so),la=s(so,"P",{});var vu=r(la);Ub=i(vu,"This model inherits from "),wd=s(vu,"A",{href:!0});var r0=r(wd);Bb=i(r0,"PreTrainedModel"),r0.forEach(t),Rb=i(vu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vu.forEach(t),Hb=m(so),da=s(so,"P",{});var Tu=r(da);Qb=i(Tu,"This model is also a PyTorch "),ca=s(Tu,"A",{href:!0,rel:!0});var a0=r(ca);Vb=i(a0,"torch.nn.Module"),a0.forEach(t),Kb=i(Tu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tu.forEach(t),Jb=m(so),wt=s(so,"DIV",{class:!0});var cr=r(wt);y(pa.$$.fragment,cr),Gb=m(cr),Mo=s(cr,"P",{});var ic=r(Mo);Xb=i(ic,"The "),$d=s(ic,"A",{href:!0});var i0=r($d);Yb=i(i0,"AlbertForPreTraining"),i0.forEach(t),Zb=i(ic," forward method, overrides the "),lp=s(ic,"CODE",{});var l0=r(lp);ek=i(l0,"__call__"),l0.forEach(t),tk=i(ic," special method."),ic.forEach(t),ok=m(cr),y(Nn.$$.fragment,cr),nk=m(cr),y(Sn.$$.fragment,cr),cr.forEach(t),so.forEach(t),Af=m(o),zo=s(o,"H2",{class:!0});var yu=r(zo);Dn=s(yu,"A",{id:!0,class:!0,href:!0});var d0=r(Dn);dp=s(d0,"SPAN",{});var c0=r(dp);y(ha.$$.fragment,c0),c0.forEach(t),d0.forEach(t),sk=m(yu),cp=s(yu,"SPAN",{});var p0=r(cp);rk=i(p0,"AlbertForMaskedLM"),p0.forEach(t),yu.forEach(t),Ff=m(o),Ye=s(o,"DIV",{class:!0});var ro=r(Ye);y(ma.$$.fragment,ro),ak=m(ro),fa=s(ro,"P",{});var wu=r(fa);ik=i(wu,"Albert Model with a "),pp=s(wu,"CODE",{});var h0=r(pp);lk=i(h0,"language modeling"),h0.forEach(t),dk=i(wu," head on top."),wu.forEach(t),ck=m(ro),ua=s(ro,"P",{});var $u=r(ua);pk=i($u,"This model inherits from "),Ad=s($u,"A",{href:!0});var m0=r(Ad);hk=i(m0,"PreTrainedModel"),m0.forEach(t),mk=i($u,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$u.forEach(t),fk=m(ro),ga=s(ro,"P",{});var Au=r(ga);uk=i(Au,"This model is also a PyTorch "),_a=s(Au,"A",{href:!0,rel:!0});var f0=r(_a);gk=i(f0,"torch.nn.Module"),f0.forEach(t),_k=i(Au,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Au.forEach(t),bk=m(ro),nt=s(ro,"DIV",{class:!0});var ao=r(nt);y(ba.$$.fragment,ao),kk=m(ao),jo=s(ao,"P",{});var lc=r(jo);vk=i(lc,"The "),Fd=s(lc,"A",{href:!0});var u0=r(Fd);Tk=i(u0,"AlbertForMaskedLM"),u0.forEach(t),yk=i(lc," forward method, overrides the "),hp=s(lc,"CODE",{});var g0=r(hp);wk=i(g0,"__call__"),g0.forEach(t),$k=i(lc," special method."),lc.forEach(t),Ak=m(ao),y(Wn.$$.fragment,ao),Fk=m(ao),y(Un.$$.fragment,ao),xk=m(ao),y(Bn.$$.fragment,ao),ao.forEach(t),ro.forEach(t),xf=m(o),qo=s(o,"H2",{class:!0});var Fu=r(qo);Rn=s(Fu,"A",{id:!0,class:!0,href:!0});var _0=r(Rn);mp=s(_0,"SPAN",{});var b0=r(mp);y(ka.$$.fragment,b0),b0.forEach(t),_0.forEach(t),Ek=m(Fu),fp=s(Fu,"SPAN",{});var k0=r(fp);Mk=i(k0,"AlbertForSequenceClassification"),k0.forEach(t),Fu.forEach(t),Ef=m(o),Ze=s(o,"DIV",{class:!0});var io=r(Ze);y(va.$$.fragment,io),zk=m(io),up=s(io,"P",{});var v0=r(up);jk=i(v0,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),v0.forEach(t),qk=m(io),Ta=s(io,"P",{});var xu=r(Ta);Pk=i(xu,"This model inherits from "),xd=s(xu,"A",{href:!0});var T0=r(xd);Ck=i(T0,"PreTrainedModel"),T0.forEach(t),Lk=i(xu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xu.forEach(t),Ik=m(io),ya=s(io,"P",{});var Eu=r(ya);Ok=i(Eu,"This model is also a PyTorch "),wa=s(Eu,"A",{href:!0,rel:!0});var y0=r(wa);Nk=i(y0,"torch.nn.Module"),y0.forEach(t),Sk=i(Eu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Eu.forEach(t),Dk=m(io),Ue=s(io,"DIV",{class:!0});var ct=r(Ue);y($a.$$.fragment,ct),Wk=m(ct),Po=s(ct,"P",{});var dc=r(Po);Uk=i(dc,"The "),Ed=s(dc,"A",{href:!0});var w0=r(Ed);Bk=i(w0,"AlbertForSequenceClassification"),w0.forEach(t),Rk=i(dc," forward method, overrides the "),gp=s(dc,"CODE",{});var $0=r(gp);Hk=i($0,"__call__"),$0.forEach(t),Qk=i(dc," special method."),dc.forEach(t),Vk=m(ct),y(Hn.$$.fragment,ct),Kk=m(ct),y(Qn.$$.fragment,ct),Jk=m(ct),y(Vn.$$.fragment,ct),Gk=m(ct),y(Kn.$$.fragment,ct),Xk=m(ct),y(Jn.$$.fragment,ct),ct.forEach(t),io.forEach(t),Mf=m(o),Co=s(o,"H2",{class:!0});var Mu=r(Co);Gn=s(Mu,"A",{id:!0,class:!0,href:!0});var A0=r(Gn);_p=s(A0,"SPAN",{});var F0=r(_p);y(Aa.$$.fragment,F0),F0.forEach(t),A0.forEach(t),Yk=m(Mu),bp=s(Mu,"SPAN",{});var x0=r(bp);Zk=i(x0,"AlbertForMultipleChoice"),x0.forEach(t),Mu.forEach(t),zf=m(o),et=s(o,"DIV",{class:!0});var lo=r(et);y(Fa.$$.fragment,lo),ev=m(lo),kp=s(lo,"P",{});var E0=r(kp);tv=i(E0,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),E0.forEach(t),ov=m(lo),xa=s(lo,"P",{});var zu=r(xa);nv=i(zu,"This model inherits from "),Md=s(zu,"A",{href:!0});var M0=r(Md);sv=i(M0,"PreTrainedModel"),M0.forEach(t),rv=i(zu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zu.forEach(t),av=m(lo),Ea=s(lo,"P",{});var ju=r(Ea);iv=i(ju,"This model is also a PyTorch "),Ma=s(ju,"A",{href:!0,rel:!0});var z0=r(Ma);lv=i(z0,"torch.nn.Module"),z0.forEach(t),dv=i(ju,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ju.forEach(t),cv=m(lo),$t=s(lo,"DIV",{class:!0});var pr=r($t);y(za.$$.fragment,pr),pv=m(pr),Lo=s(pr,"P",{});var cc=r(Lo);hv=i(cc,"The "),zd=s(cc,"A",{href:!0});var j0=r(zd);mv=i(j0,"AlbertForMultipleChoice"),j0.forEach(t),fv=i(cc," forward method, overrides the "),vp=s(cc,"CODE",{});var q0=r(vp);uv=i(q0,"__call__"),q0.forEach(t),gv=i(cc," special method."),cc.forEach(t),_v=m(pr),y(Xn.$$.fragment,pr),bv=m(pr),y(Yn.$$.fragment,pr),pr.forEach(t),lo.forEach(t),jf=m(o),Io=s(o,"H2",{class:!0});var qu=r(Io);Zn=s(qu,"A",{id:!0,class:!0,href:!0});var P0=r(Zn);Tp=s(P0,"SPAN",{});var C0=r(Tp);y(ja.$$.fragment,C0),C0.forEach(t),P0.forEach(t),kv=m(qu),yp=s(qu,"SPAN",{});var L0=r(yp);vv=i(L0,"AlbertForTokenClassification"),L0.forEach(t),qu.forEach(t),qf=m(o),tt=s(o,"DIV",{class:!0});var co=r(tt);y(qa.$$.fragment,co),Tv=m(co),wp=s(co,"P",{});var I0=r(wp);yv=i(I0,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),I0.forEach(t),wv=m(co),Pa=s(co,"P",{});var Pu=r(Pa);$v=i(Pu,"This model inherits from "),jd=s(Pu,"A",{href:!0});var O0=r(jd);Av=i(O0,"PreTrainedModel"),O0.forEach(t),Fv=i(Pu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pu.forEach(t),xv=m(co),Ca=s(co,"P",{});var Cu=r(Ca);Ev=i(Cu,"This model is also a PyTorch "),La=s(Cu,"A",{href:!0,rel:!0});var N0=r(La);Mv=i(N0,"torch.nn.Module"),N0.forEach(t),zv=i(Cu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cu.forEach(t),jv=m(co),st=s(co,"DIV",{class:!0});var po=r(st);y(Ia.$$.fragment,po),qv=m(po),Oo=s(po,"P",{});var pc=r(Oo);Pv=i(pc,"The "),qd=s(pc,"A",{href:!0});var S0=r(qd);Cv=i(S0,"AlbertForTokenClassification"),S0.forEach(t),Lv=i(pc," forward method, overrides the "),$p=s(pc,"CODE",{});var D0=r($p);Iv=i(D0,"__call__"),D0.forEach(t),Ov=i(pc," special method."),pc.forEach(t),Nv=m(po),y(es.$$.fragment,po),Sv=m(po),y(ts.$$.fragment,po),Dv=m(po),y(os.$$.fragment,po),po.forEach(t),co.forEach(t),Pf=m(o),No=s(o,"H2",{class:!0});var Lu=r(No);ns=s(Lu,"A",{id:!0,class:!0,href:!0});var W0=r(ns);Ap=s(W0,"SPAN",{});var U0=r(Ap);y(Oa.$$.fragment,U0),U0.forEach(t),W0.forEach(t),Wv=m(Lu),Fp=s(Lu,"SPAN",{});var B0=r(Fp);Uv=i(B0,"AlbertForQuestionAnswering"),B0.forEach(t),Lu.forEach(t),Cf=m(o),ot=s(o,"DIV",{class:!0});var ho=r(ot);y(Na.$$.fragment,ho),Bv=m(ho),So=s(ho,"P",{});var hc=r(So);Rv=i(hc,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),xp=s(hc,"CODE",{});var R0=r(xp);Hv=i(R0,"span start logits"),R0.forEach(t),Qv=i(hc," and "),Ep=s(hc,"CODE",{});var H0=r(Ep);Vv=i(H0,"span end logits"),H0.forEach(t),Kv=i(hc,")."),hc.forEach(t),Jv=m(ho),Sa=s(ho,"P",{});var Iu=r(Sa);Gv=i(Iu,"This model inherits from "),Pd=s(Iu,"A",{href:!0});var Q0=r(Pd);Xv=i(Q0,"PreTrainedModel"),Q0.forEach(t),Yv=i(Iu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Iu.forEach(t),Zv=m(ho),Da=s(ho,"P",{});var Ou=r(Da);eT=i(Ou,"This model is also a PyTorch "),Wa=s(Ou,"A",{href:!0,rel:!0});var V0=r(Wa);tT=i(V0,"torch.nn.Module"),V0.forEach(t),oT=i(Ou,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ou.forEach(t),nT=m(ho),rt=s(ho,"DIV",{class:!0});var mo=r(rt);y(Ua.$$.fragment,mo),sT=m(mo),Do=s(mo,"P",{});var mc=r(Do);rT=i(mc,"The "),Cd=s(mc,"A",{href:!0});var K0=r(Cd);aT=i(K0,"AlbertForQuestionAnswering"),K0.forEach(t),iT=i(mc," forward method, overrides the "),Mp=s(mc,"CODE",{});var J0=r(Mp);lT=i(J0,"__call__"),J0.forEach(t),dT=i(mc," special method."),mc.forEach(t),cT=m(mo),y(ss.$$.fragment,mo),pT=m(mo),y(rs.$$.fragment,mo),hT=m(mo),y(as.$$.fragment,mo),mo.forEach(t),ho.forEach(t),Lf=m(o),Wo=s(o,"H2",{class:!0});var Nu=r(Wo);is=s(Nu,"A",{id:!0,class:!0,href:!0});var G0=r(is);zp=s(G0,"SPAN",{});var X0=r(zp);y(Ba.$$.fragment,X0),X0.forEach(t),G0.forEach(t),mT=m(Nu),jp=s(Nu,"SPAN",{});var Y0=r(jp);fT=i(Y0,"TFAlbertModel"),Y0.forEach(t),Nu.forEach(t),If=m(o),Be=s(o,"DIV",{class:!0});var Lt=r(Be);y(Ra.$$.fragment,Lt),uT=m(Lt),qp=s(Lt,"P",{});var Z0=r(qp);gT=i(Z0,"The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),Z0.forEach(t),_T=m(Lt),Ha=s(Lt,"P",{});var Su=r(Ha);bT=i(Su,"This model inherits from "),Ld=s(Su,"A",{href:!0});var ex=r(Ld);kT=i(ex,"TFPreTrainedModel"),ex.forEach(t),vT=i(Su,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Su.forEach(t),TT=m(Lt),Qa=s(Lt,"P",{});var Du=r(Qa);yT=i(Du,"This model is also a "),Va=s(Du,"A",{href:!0,rel:!0});var tx=r(Va);wT=i(tx,"tf.keras.Model"),tx.forEach(t),$T=i(Du,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Du.forEach(t),AT=m(Lt),y(ls.$$.fragment,Lt),FT=m(Lt),At=s(Lt,"DIV",{class:!0});var hr=r(At);y(Ka.$$.fragment,hr),xT=m(hr),Uo=s(hr,"P",{});var fc=r(Uo);ET=i(fc,"The "),Id=s(fc,"A",{href:!0});var ox=r(Id);MT=i(ox,"TFAlbertModel"),ox.forEach(t),zT=i(fc," forward method, overrides the "),Pp=s(fc,"CODE",{});var nx=r(Pp);jT=i(nx,"__call__"),nx.forEach(t),qT=i(fc," special method."),fc.forEach(t),PT=m(hr),y(ds.$$.fragment,hr),CT=m(hr),y(cs.$$.fragment,hr),hr.forEach(t),Lt.forEach(t),Of=m(o),Bo=s(o,"H2",{class:!0});var Wu=r(Bo);ps=s(Wu,"A",{id:!0,class:!0,href:!0});var sx=r(ps);Cp=s(sx,"SPAN",{});var rx=r(Cp);y(Ja.$$.fragment,rx),rx.forEach(t),sx.forEach(t),LT=m(Wu),Lp=s(Wu,"SPAN",{});var ax=r(Lp);IT=i(ax,"TFAlbertForPreTraining"),ax.forEach(t),Wu.forEach(t),Nf=m(o),Re=s(o,"DIV",{class:!0});var It=r(Re);y(Ga.$$.fragment,It),OT=m(It),Ro=s(It,"P",{});var uc=r(Ro);NT=i(uc,"Albert Model with two heads on top for pretraining: a "),Ip=s(uc,"CODE",{});var ix=r(Ip);ST=i(ix,"masked language modeling"),ix.forEach(t),DT=i(uc," head and a "),Op=s(uc,"CODE",{});var lx=r(Op);WT=i(lx,"sentence order prediction"),lx.forEach(t),UT=i(uc," (classification) head."),uc.forEach(t),BT=m(It),Xa=s(It,"P",{});var Uu=r(Xa);RT=i(Uu,"This model inherits from "),Od=s(Uu,"A",{href:!0});var dx=r(Od);HT=i(dx,"TFPreTrainedModel"),dx.forEach(t),QT=i(Uu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uu.forEach(t),VT=m(It),Ya=s(It,"P",{});var Bu=r(Ya);KT=i(Bu,"This model is also a "),Za=s(Bu,"A",{href:!0,rel:!0});var cx=r(Za);JT=i(cx,"tf.keras.Model"),cx.forEach(t),GT=i(Bu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bu.forEach(t),XT=m(It),y(hs.$$.fragment,It),YT=m(It),Ft=s(It,"DIV",{class:!0});var mr=r(Ft);y(ei.$$.fragment,mr),ZT=m(mr),Ho=s(mr,"P",{});var gc=r(Ho);e1=i(gc,"The "),Nd=s(gc,"A",{href:!0});var px=r(Nd);t1=i(px,"TFAlbertForPreTraining"),px.forEach(t),o1=i(gc," forward method, overrides the "),Np=s(gc,"CODE",{});var hx=r(Np);n1=i(hx,"__call__"),hx.forEach(t),s1=i(gc," special method."),gc.forEach(t),r1=m(mr),y(ms.$$.fragment,mr),a1=m(mr),y(fs.$$.fragment,mr),mr.forEach(t),It.forEach(t),Sf=m(o),Qo=s(o,"H2",{class:!0});var Ru=r(Qo);us=s(Ru,"A",{id:!0,class:!0,href:!0});var mx=r(us);Sp=s(mx,"SPAN",{});var fx=r(Sp);y(ti.$$.fragment,fx),fx.forEach(t),mx.forEach(t),i1=m(Ru),Dp=s(Ru,"SPAN",{});var ux=r(Dp);l1=i(ux,"TFAlbertForMaskedLM"),ux.forEach(t),Ru.forEach(t),Df=m(o),He=s(o,"DIV",{class:!0});var Ot=r(He);y(oi.$$.fragment,Ot),d1=m(Ot),ni=s(Ot,"P",{});var Hu=r(ni);c1=i(Hu,"Albert Model with a "),Wp=s(Hu,"CODE",{});var gx=r(Wp);p1=i(gx,"language modeling"),gx.forEach(t),h1=i(Hu," head on top."),Hu.forEach(t),m1=m(Ot),si=s(Ot,"P",{});var Qu=r(si);f1=i(Qu,"This model inherits from "),Sd=s(Qu,"A",{href:!0});var _x=r(Sd);u1=i(_x,"TFPreTrainedModel"),_x.forEach(t),g1=i(Qu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qu.forEach(t),_1=m(Ot),ri=s(Ot,"P",{});var Vu=r(ri);b1=i(Vu,"This model is also a "),ai=s(Vu,"A",{href:!0,rel:!0});var bx=r(ai);k1=i(bx,"tf.keras.Model"),bx.forEach(t),v1=i(Vu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vu.forEach(t),T1=m(Ot),y(gs.$$.fragment,Ot),y1=m(Ot),at=s(Ot,"DIV",{class:!0});var fo=r(at);y(ii.$$.fragment,fo),w1=m(fo),Vo=s(fo,"P",{});var _c=r(Vo);$1=i(_c,"The "),Dd=s(_c,"A",{href:!0});var kx=r(Dd);A1=i(kx,"TFAlbertForMaskedLM"),kx.forEach(t),F1=i(_c," forward method, overrides the "),Up=s(_c,"CODE",{});var vx=r(Up);x1=i(vx,"__call__"),vx.forEach(t),E1=i(_c," special method."),_c.forEach(t),M1=m(fo),y(_s.$$.fragment,fo),z1=m(fo),y(bs.$$.fragment,fo),j1=m(fo),y(ks.$$.fragment,fo),fo.forEach(t),Ot.forEach(t),Wf=m(o),Ko=s(o,"H2",{class:!0});var Ku=r(Ko);vs=s(Ku,"A",{id:!0,class:!0,href:!0});var Tx=r(vs);Bp=s(Tx,"SPAN",{});var yx=r(Bp);y(li.$$.fragment,yx),yx.forEach(t),Tx.forEach(t),q1=m(Ku),Rp=s(Ku,"SPAN",{});var wx=r(Rp);P1=i(wx,"TFAlbertForSequenceClassification"),wx.forEach(t),Ku.forEach(t),Uf=m(o),Qe=s(o,"DIV",{class:!0});var Nt=r(Qe);y(di.$$.fragment,Nt),C1=m(Nt),Hp=s(Nt,"P",{});var $x=r(Hp);L1=i($x,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),$x.forEach(t),I1=m(Nt),ci=s(Nt,"P",{});var Ju=r(ci);O1=i(Ju,"This model inherits from "),Wd=s(Ju,"A",{href:!0});var Ax=r(Wd);N1=i(Ax,"TFPreTrainedModel"),Ax.forEach(t),S1=i(Ju,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ju.forEach(t),D1=m(Nt),pi=s(Nt,"P",{});var Gu=r(pi);W1=i(Gu,"This model is also a "),hi=s(Gu,"A",{href:!0,rel:!0});var Fx=r(hi);U1=i(Fx,"tf.keras.Model"),Fx.forEach(t),B1=i(Gu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gu.forEach(t),R1=m(Nt),y(Ts.$$.fragment,Nt),H1=m(Nt),it=s(Nt,"DIV",{class:!0});var uo=r(it);y(mi.$$.fragment,uo),Q1=m(uo),Jo=s(uo,"P",{});var bc=r(Jo);V1=i(bc,"The "),Ud=s(bc,"A",{href:!0});var xx=r(Ud);K1=i(xx,"TFAlbertForSequenceClassification"),xx.forEach(t),J1=i(bc," forward method, overrides the "),Qp=s(bc,"CODE",{});var Ex=r(Qp);G1=i(Ex,"__call__"),Ex.forEach(t),X1=i(bc," special method."),bc.forEach(t),Y1=m(uo),y(ys.$$.fragment,uo),Z1=m(uo),y(ws.$$.fragment,uo),ey=m(uo),y($s.$$.fragment,uo),uo.forEach(t),Nt.forEach(t),Bf=m(o),Go=s(o,"H2",{class:!0});var Xu=r(Go);As=s(Xu,"A",{id:!0,class:!0,href:!0});var Mx=r(As);Vp=s(Mx,"SPAN",{});var zx=r(Vp);y(fi.$$.fragment,zx),zx.forEach(t),Mx.forEach(t),ty=m(Xu),Kp=s(Xu,"SPAN",{});var jx=r(Kp);oy=i(jx,"TFAlbertForMultipleChoice"),jx.forEach(t),Xu.forEach(t),Rf=m(o),Ve=s(o,"DIV",{class:!0});var St=r(Ve);y(ui.$$.fragment,St),ny=m(St),Jp=s(St,"P",{});var qx=r(Jp);sy=i(qx,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),qx.forEach(t),ry=m(St),gi=s(St,"P",{});var Yu=r(gi);ay=i(Yu,"This model inherits from "),Bd=s(Yu,"A",{href:!0});var Px=r(Bd);iy=i(Px,"TFPreTrainedModel"),Px.forEach(t),ly=i(Yu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yu.forEach(t),dy=m(St),_i=s(St,"P",{});var Zu=r(_i);cy=i(Zu,"This model is also a "),bi=s(Zu,"A",{href:!0,rel:!0});var Cx=r(bi);py=i(Cx,"tf.keras.Model"),Cx.forEach(t),hy=i(Zu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zu.forEach(t),my=m(St),y(Fs.$$.fragment,St),fy=m(St),xt=s(St,"DIV",{class:!0});var fr=r(xt);y(ki.$$.fragment,fr),uy=m(fr),Xo=s(fr,"P",{});var kc=r(Xo);gy=i(kc,"The "),Rd=s(kc,"A",{href:!0});var Lx=r(Rd);_y=i(Lx,"TFAlbertForMultipleChoice"),Lx.forEach(t),by=i(kc," forward method, overrides the "),Gp=s(kc,"CODE",{});var Ix=r(Gp);ky=i(Ix,"__call__"),Ix.forEach(t),vy=i(kc," special method."),kc.forEach(t),Ty=m(fr),y(xs.$$.fragment,fr),yy=m(fr),y(Es.$$.fragment,fr),fr.forEach(t),St.forEach(t),Hf=m(o),Yo=s(o,"H2",{class:!0});var eg=r(Yo);Ms=s(eg,"A",{id:!0,class:!0,href:!0});var Ox=r(Ms);Xp=s(Ox,"SPAN",{});var Nx=r(Xp);y(vi.$$.fragment,Nx),Nx.forEach(t),Ox.forEach(t),wy=m(eg),Yp=s(eg,"SPAN",{});var Sx=r(Yp);$y=i(Sx,"TFAlbertForTokenClassification"),Sx.forEach(t),eg.forEach(t),Qf=m(o),Ke=s(o,"DIV",{class:!0});var Dt=r(Ke);y(Ti.$$.fragment,Dt),Ay=m(Dt),Zp=s(Dt,"P",{});var Dx=r(Zp);Fy=i(Dx,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Dx.forEach(t),xy=m(Dt),yi=s(Dt,"P",{});var tg=r(yi);Ey=i(tg,"This model inherits from "),Hd=s(tg,"A",{href:!0});var Wx=r(Hd);My=i(Wx,"TFPreTrainedModel"),Wx.forEach(t),zy=i(tg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tg.forEach(t),jy=m(Dt),wi=s(Dt,"P",{});var og=r(wi);qy=i(og,"This model is also a "),$i=s(og,"A",{href:!0,rel:!0});var Ux=r($i);Py=i(Ux,"tf.keras.Model"),Ux.forEach(t),Cy=i(og,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),og.forEach(t),Ly=m(Dt),y(zs.$$.fragment,Dt),Iy=m(Dt),lt=s(Dt,"DIV",{class:!0});var go=r(lt);y(Ai.$$.fragment,go),Oy=m(go),Zo=s(go,"P",{});var vc=r(Zo);Ny=i(vc,"The "),Qd=s(vc,"A",{href:!0});var Bx=r(Qd);Sy=i(Bx,"TFAlbertForTokenClassification"),Bx.forEach(t),Dy=i(vc," forward method, overrides the "),eh=s(vc,"CODE",{});var Rx=r(eh);Wy=i(Rx,"__call__"),Rx.forEach(t),Uy=i(vc," special method."),vc.forEach(t),By=m(go),y(js.$$.fragment,go),Ry=m(go),y(qs.$$.fragment,go),Hy=m(go),y(Ps.$$.fragment,go),go.forEach(t),Dt.forEach(t),Vf=m(o),en=s(o,"H2",{class:!0});var ng=r(en);Cs=s(ng,"A",{id:!0,class:!0,href:!0});var Hx=r(Cs);th=s(Hx,"SPAN",{});var Qx=r(th);y(Fi.$$.fragment,Qx),Qx.forEach(t),Hx.forEach(t),Qy=m(ng),oh=s(ng,"SPAN",{});var Vx=r(oh);Vy=i(Vx,"TFAlbertForQuestionAnswering"),Vx.forEach(t),ng.forEach(t),Kf=m(o),Je=s(o,"DIV",{class:!0});var Wt=r(Je);y(xi.$$.fragment,Wt),Ky=m(Wt),tn=s(Wt,"P",{});var Tc=r(tn);Jy=i(Tc,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),nh=s(Tc,"CODE",{});var Kx=r(nh);Gy=i(Kx,"span start logits"),Kx.forEach(t),Xy=i(Tc," and "),sh=s(Tc,"CODE",{});var Jx=r(sh);Yy=i(Jx,"span end logits"),Jx.forEach(t),Zy=i(Tc,")."),Tc.forEach(t),ew=m(Wt),Ei=s(Wt,"P",{});var sg=r(Ei);tw=i(sg,"This model inherits from "),Vd=s(sg,"A",{href:!0});var Gx=r(Vd);ow=i(Gx,"TFPreTrainedModel"),Gx.forEach(t),nw=i(sg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sg.forEach(t),sw=m(Wt),Mi=s(Wt,"P",{});var rg=r(Mi);rw=i(rg,"This model is also a "),zi=s(rg,"A",{href:!0,rel:!0});var Xx=r(zi);aw=i(Xx,"tf.keras.Model"),Xx.forEach(t),iw=i(rg,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rg.forEach(t),lw=m(Wt),y(Ls.$$.fragment,Wt),dw=m(Wt),dt=s(Wt,"DIV",{class:!0});var _o=r(dt);y(ji.$$.fragment,_o),cw=m(_o),on=s(_o,"P",{});var yc=r(on);pw=i(yc,"The "),Kd=s(yc,"A",{href:!0});var Yx=r(Kd);hw=i(Yx,"TFAlbertForQuestionAnswering"),Yx.forEach(t),mw=i(yc," forward method, overrides the "),rh=s(yc,"CODE",{});var Zx=r(rh);fw=i(Zx,"__call__"),Zx.forEach(t),uw=i(yc," special method."),yc.forEach(t),gw=m(_o),y(Is.$$.fragment,_o),_w=m(_o),y(Os.$$.fragment,_o),bw=m(_o),y(Ns.$$.fragment,_o),_o.forEach(t),Wt.forEach(t),Jf=m(o),nn=s(o,"H2",{class:!0});var ag=r(nn);Ss=s(ag,"A",{id:!0,class:!0,href:!0});var e7=r(Ss);ah=s(e7,"SPAN",{});var t7=r(ah);y(qi.$$.fragment,t7),t7.forEach(t),e7.forEach(t),kw=m(ag),ih=s(ag,"SPAN",{});var o7=r(ih);vw=i(o7,"FlaxAlbertModel"),o7.forEach(t),ag.forEach(t),Gf=m(o),Le=s(o,"DIV",{class:!0});var pt=r(Le);y(Pi.$$.fragment,pt),Tw=m(pt),lh=s(pt,"P",{});var n7=r(lh);yw=i(n7,"The bare Albert Model transformer outputting raw hidden-states without any specific head on top."),n7.forEach(t),ww=m(pt),Ci=s(pt,"P",{});var ig=r(Ci);$w=i(ig,"This model inherits from "),Jd=s(ig,"A",{href:!0});var s7=r(Jd);Aw=i(s7,"FlaxPreTrainedModel"),s7.forEach(t),Fw=i(ig,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ig.forEach(t),xw=m(pt),Li=s(pt,"P",{});var lg=r(Li);Ew=i(lg,"This model is also a Flax Linen "),Ii=s(lg,"A",{href:!0,rel:!0});var r7=r(Ii);Mw=i(r7,"flax.linen.Module"),r7.forEach(t),zw=i(lg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),lg.forEach(t),jw=m(pt),dh=s(pt,"P",{});var a7=r(dh);qw=i(a7,"Finally, this model supports inherent JAX features such as:"),a7.forEach(t),Pw=m(pt),Rt=s(pt,"UL",{});var ur=r(Rt);ch=s(ur,"LI",{});var i7=r(ch);Oi=s(i7,"A",{href:!0,rel:!0});var l7=r(Oi);Cw=i(l7,"Just-In-Time (JIT) compilation"),l7.forEach(t),i7.forEach(t),Lw=m(ur),ph=s(ur,"LI",{});var d7=r(ph);Ni=s(d7,"A",{href:!0,rel:!0});var c7=r(Ni);Iw=i(c7,"Automatic Differentiation"),c7.forEach(t),d7.forEach(t),Ow=m(ur),hh=s(ur,"LI",{});var p7=r(hh);Si=s(p7,"A",{href:!0,rel:!0});var h7=r(Si);Nw=i(h7,"Vectorization"),h7.forEach(t),p7.forEach(t),Sw=m(ur),mh=s(ur,"LI",{});var m7=r(mh);Di=s(m7,"A",{href:!0,rel:!0});var f7=r(Di);Dw=i(f7,"Parallelization"),f7.forEach(t),m7.forEach(t),ur.forEach(t),Ww=m(pt),Et=s(pt,"DIV",{class:!0});var gr=r(Et);y(Wi.$$.fragment,gr),Uw=m(gr),sn=s(gr,"P",{});var wc=r(sn);Bw=i(wc,"The "),fh=s(wc,"CODE",{});var u7=r(fh);Rw=i(u7,"FlaxAlbertPreTrainedModel"),u7.forEach(t),Hw=i(wc," forward method, overrides the "),uh=s(wc,"CODE",{});var g7=r(uh);Qw=i(g7,"__call__"),g7.forEach(t),Vw=i(wc," special method."),wc.forEach(t),Kw=m(gr),y(Ds.$$.fragment,gr),Jw=m(gr),y(Ws.$$.fragment,gr),gr.forEach(t),pt.forEach(t),Xf=m(o),rn=s(o,"H2",{class:!0});var dg=r(rn);Us=s(dg,"A",{id:!0,class:!0,href:!0});var _7=r(Us);gh=s(_7,"SPAN",{});var b7=r(gh);y(Ui.$$.fragment,b7),b7.forEach(t),_7.forEach(t),Gw=m(dg),_h=s(dg,"SPAN",{});var k7=r(_h);Xw=i(k7,"FlaxAlbertForPreTraining"),k7.forEach(t),dg.forEach(t),Yf=m(o),Ie=s(o,"DIV",{class:!0});var ht=r(Ie);y(Bi.$$.fragment,ht),Yw=m(ht),an=s(ht,"P",{});var $c=r(an);Zw=i($c,"Albert Model with two heads on top as done during the pretraining: a "),bh=s($c,"CODE",{});var v7=r(bh);e$=i(v7,"masked language modeling"),v7.forEach(t),t$=i($c,` head and a
`),kh=s($c,"CODE",{});var T7=r(kh);o$=i(T7,"sentence order prediction (classification)"),T7.forEach(t),n$=i($c," head."),$c.forEach(t),s$=m(ht),Ri=s(ht,"P",{});var cg=r(Ri);r$=i(cg,"This model inherits from "),Gd=s(cg,"A",{href:!0});var y7=r(Gd);a$=i(y7,"FlaxPreTrainedModel"),y7.forEach(t),i$=i(cg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),cg.forEach(t),l$=m(ht),Hi=s(ht,"P",{});var pg=r(Hi);d$=i(pg,"This model is also a Flax Linen "),Qi=s(pg,"A",{href:!0,rel:!0});var w7=r(Qi);c$=i(w7,"flax.linen.Module"),w7.forEach(t),p$=i(pg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),pg.forEach(t),h$=m(ht),vh=s(ht,"P",{});var $7=r(vh);m$=i($7,"Finally, this model supports inherent JAX features such as:"),$7.forEach(t),f$=m(ht),Ht=s(ht,"UL",{});var _r=r(Ht);Th=s(_r,"LI",{});var A7=r(Th);Vi=s(A7,"A",{href:!0,rel:!0});var F7=r(Vi);u$=i(F7,"Just-In-Time (JIT) compilation"),F7.forEach(t),A7.forEach(t),g$=m(_r),yh=s(_r,"LI",{});var x7=r(yh);Ki=s(x7,"A",{href:!0,rel:!0});var E7=r(Ki);_$=i(E7,"Automatic Differentiation"),E7.forEach(t),x7.forEach(t),b$=m(_r),wh=s(_r,"LI",{});var M7=r(wh);Ji=s(M7,"A",{href:!0,rel:!0});var z7=r(Ji);k$=i(z7,"Vectorization"),z7.forEach(t),M7.forEach(t),v$=m(_r),$h=s(_r,"LI",{});var j7=r($h);Gi=s(j7,"A",{href:!0,rel:!0});var q7=r(Gi);T$=i(q7,"Parallelization"),q7.forEach(t),j7.forEach(t),_r.forEach(t),y$=m(ht),Mt=s(ht,"DIV",{class:!0});var br=r(Mt);y(Xi.$$.fragment,br),w$=m(br),ln=s(br,"P",{});var Ac=r(ln);$$=i(Ac,"The "),Ah=s(Ac,"CODE",{});var P7=r(Ah);A$=i(P7,"FlaxAlbertPreTrainedModel"),P7.forEach(t),F$=i(Ac," forward method, overrides the "),Fh=s(Ac,"CODE",{});var C7=r(Fh);x$=i(C7,"__call__"),C7.forEach(t),E$=i(Ac," special method."),Ac.forEach(t),M$=m(br),y(Bs.$$.fragment,br),z$=m(br),y(Rs.$$.fragment,br),br.forEach(t),ht.forEach(t),Zf=m(o),dn=s(o,"H2",{class:!0});var hg=r(dn);Hs=s(hg,"A",{id:!0,class:!0,href:!0});var L7=r(Hs);xh=s(L7,"SPAN",{});var I7=r(xh);y(Yi.$$.fragment,I7),I7.forEach(t),L7.forEach(t),j$=m(hg),Eh=s(hg,"SPAN",{});var O7=r(Eh);q$=i(O7,"FlaxAlbertForMaskedLM"),O7.forEach(t),hg.forEach(t),eu=m(o),Oe=s(o,"DIV",{class:!0});var mt=r(Oe);y(Zi.$$.fragment,mt),P$=m(mt),el=s(mt,"P",{});var mg=r(el);C$=i(mg,"Albert Model with a "),Mh=s(mg,"CODE",{});var N7=r(Mh);L$=i(N7,"language modeling"),N7.forEach(t),I$=i(mg," head on top."),mg.forEach(t),O$=m(mt),tl=s(mt,"P",{});var fg=r(tl);N$=i(fg,"This model inherits from "),Xd=s(fg,"A",{href:!0});var S7=r(Xd);S$=i(S7,"FlaxPreTrainedModel"),S7.forEach(t),D$=i(fg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fg.forEach(t),W$=m(mt),ol=s(mt,"P",{});var ug=r(ol);U$=i(ug,"This model is also a Flax Linen "),nl=s(ug,"A",{href:!0,rel:!0});var D7=r(nl);B$=i(D7,"flax.linen.Module"),D7.forEach(t),R$=i(ug,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ug.forEach(t),H$=m(mt),zh=s(mt,"P",{});var W7=r(zh);Q$=i(W7,"Finally, this model supports inherent JAX features such as:"),W7.forEach(t),V$=m(mt),Qt=s(mt,"UL",{});var kr=r(Qt);jh=s(kr,"LI",{});var U7=r(jh);sl=s(U7,"A",{href:!0,rel:!0});var B7=r(sl);K$=i(B7,"Just-In-Time (JIT) compilation"),B7.forEach(t),U7.forEach(t),J$=m(kr),qh=s(kr,"LI",{});var R7=r(qh);rl=s(R7,"A",{href:!0,rel:!0});var H7=r(rl);G$=i(H7,"Automatic Differentiation"),H7.forEach(t),R7.forEach(t),X$=m(kr),Ph=s(kr,"LI",{});var Q7=r(Ph);al=s(Q7,"A",{href:!0,rel:!0});var V7=r(al);Y$=i(V7,"Vectorization"),V7.forEach(t),Q7.forEach(t),Z$=m(kr),Ch=s(kr,"LI",{});var K7=r(Ch);il=s(K7,"A",{href:!0,rel:!0});var J7=r(il);e2=i(J7,"Parallelization"),J7.forEach(t),K7.forEach(t),kr.forEach(t),t2=m(mt),zt=s(mt,"DIV",{class:!0});var vr=r(zt);y(ll.$$.fragment,vr),o2=m(vr),cn=s(vr,"P",{});var Fc=r(cn);n2=i(Fc,"The "),Lh=s(Fc,"CODE",{});var G7=r(Lh);s2=i(G7,"FlaxAlbertPreTrainedModel"),G7.forEach(t),r2=i(Fc," forward method, overrides the "),Ih=s(Fc,"CODE",{});var X7=r(Ih);a2=i(X7,"__call__"),X7.forEach(t),i2=i(Fc," special method."),Fc.forEach(t),l2=m(vr),y(Qs.$$.fragment,vr),d2=m(vr),y(Vs.$$.fragment,vr),vr.forEach(t),mt.forEach(t),tu=m(o),pn=s(o,"H2",{class:!0});var gg=r(pn);Ks=s(gg,"A",{id:!0,class:!0,href:!0});var Y7=r(Ks);Oh=s(Y7,"SPAN",{});var Z7=r(Oh);y(dl.$$.fragment,Z7),Z7.forEach(t),Y7.forEach(t),c2=m(gg),Nh=s(gg,"SPAN",{});var eE=r(Nh);p2=i(eE,"FlaxAlbertForSequenceClassification"),eE.forEach(t),gg.forEach(t),ou=m(o),Ne=s(o,"DIV",{class:!0});var ft=r(Ne);y(cl.$$.fragment,ft),h2=m(ft),Sh=s(ft,"P",{});var tE=r(Sh);m2=i(tE,`Albert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),tE.forEach(t),f2=m(ft),pl=s(ft,"P",{});var _g=r(pl);u2=i(_g,"This model inherits from "),Yd=s(_g,"A",{href:!0});var oE=r(Yd);g2=i(oE,"FlaxPreTrainedModel"),oE.forEach(t),_2=i(_g,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),_g.forEach(t),b2=m(ft),hl=s(ft,"P",{});var bg=r(hl);k2=i(bg,"This model is also a Flax Linen "),ml=s(bg,"A",{href:!0,rel:!0});var nE=r(ml);v2=i(nE,"flax.linen.Module"),nE.forEach(t),T2=i(bg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),bg.forEach(t),y2=m(ft),Dh=s(ft,"P",{});var sE=r(Dh);w2=i(sE,"Finally, this model supports inherent JAX features such as:"),sE.forEach(t),$2=m(ft),Vt=s(ft,"UL",{});var Tr=r(Vt);Wh=s(Tr,"LI",{});var rE=r(Wh);fl=s(rE,"A",{href:!0,rel:!0});var aE=r(fl);A2=i(aE,"Just-In-Time (JIT) compilation"),aE.forEach(t),rE.forEach(t),F2=m(Tr),Uh=s(Tr,"LI",{});var iE=r(Uh);ul=s(iE,"A",{href:!0,rel:!0});var lE=r(ul);x2=i(lE,"Automatic Differentiation"),lE.forEach(t),iE.forEach(t),E2=m(Tr),Bh=s(Tr,"LI",{});var dE=r(Bh);gl=s(dE,"A",{href:!0,rel:!0});var cE=r(gl);M2=i(cE,"Vectorization"),cE.forEach(t),dE.forEach(t),z2=m(Tr),Rh=s(Tr,"LI",{});var pE=r(Rh);_l=s(pE,"A",{href:!0,rel:!0});var hE=r(_l);j2=i(hE,"Parallelization"),hE.forEach(t),pE.forEach(t),Tr.forEach(t),q2=m(ft),jt=s(ft,"DIV",{class:!0});var yr=r(jt);y(bl.$$.fragment,yr),P2=m(yr),hn=s(yr,"P",{});var xc=r(hn);C2=i(xc,"The "),Hh=s(xc,"CODE",{});var mE=r(Hh);L2=i(mE,"FlaxAlbertPreTrainedModel"),mE.forEach(t),I2=i(xc," forward method, overrides the "),Qh=s(xc,"CODE",{});var fE=r(Qh);O2=i(fE,"__call__"),fE.forEach(t),N2=i(xc," special method."),xc.forEach(t),S2=m(yr),y(Js.$$.fragment,yr),D2=m(yr),y(Gs.$$.fragment,yr),yr.forEach(t),ft.forEach(t),nu=m(o),mn=s(o,"H2",{class:!0});var kg=r(mn);Xs=s(kg,"A",{id:!0,class:!0,href:!0});var uE=r(Xs);Vh=s(uE,"SPAN",{});var gE=r(Vh);y(kl.$$.fragment,gE),gE.forEach(t),uE.forEach(t),W2=m(kg),Kh=s(kg,"SPAN",{});var _E=r(Kh);U2=i(_E,"FlaxAlbertForMultipleChoice"),_E.forEach(t),kg.forEach(t),su=m(o),Se=s(o,"DIV",{class:!0});var ut=r(Se);y(vl.$$.fragment,ut),B2=m(ut),Jh=s(ut,"P",{});var bE=r(Jh);R2=i(bE,`Albert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),bE.forEach(t),H2=m(ut),Tl=s(ut,"P",{});var vg=r(Tl);Q2=i(vg,"This model inherits from "),Zd=s(vg,"A",{href:!0});var kE=r(Zd);V2=i(kE,"FlaxPreTrainedModel"),kE.forEach(t),K2=i(vg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vg.forEach(t),J2=m(ut),yl=s(ut,"P",{});var Tg=r(yl);G2=i(Tg,"This model is also a Flax Linen "),wl=s(Tg,"A",{href:!0,rel:!0});var vE=r(wl);X2=i(vE,"flax.linen.Module"),vE.forEach(t),Y2=i(Tg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Tg.forEach(t),Z2=m(ut),Gh=s(ut,"P",{});var TE=r(Gh);eA=i(TE,"Finally, this model supports inherent JAX features such as:"),TE.forEach(t),tA=m(ut),Kt=s(ut,"UL",{});var wr=r(Kt);Xh=s(wr,"LI",{});var yE=r(Xh);$l=s(yE,"A",{href:!0,rel:!0});var wE=r($l);oA=i(wE,"Just-In-Time (JIT) compilation"),wE.forEach(t),yE.forEach(t),nA=m(wr),Yh=s(wr,"LI",{});var $E=r(Yh);Al=s($E,"A",{href:!0,rel:!0});var AE=r(Al);sA=i(AE,"Automatic Differentiation"),AE.forEach(t),$E.forEach(t),rA=m(wr),Zh=s(wr,"LI",{});var FE=r(Zh);Fl=s(FE,"A",{href:!0,rel:!0});var xE=r(Fl);aA=i(xE,"Vectorization"),xE.forEach(t),FE.forEach(t),iA=m(wr),em=s(wr,"LI",{});var EE=r(em);xl=s(EE,"A",{href:!0,rel:!0});var ME=r(xl);lA=i(ME,"Parallelization"),ME.forEach(t),EE.forEach(t),wr.forEach(t),dA=m(ut),qt=s(ut,"DIV",{class:!0});var $r=r(qt);y(El.$$.fragment,$r),cA=m($r),fn=s($r,"P",{});var Ec=r(fn);pA=i(Ec,"The "),tm=s(Ec,"CODE",{});var zE=r(tm);hA=i(zE,"FlaxAlbertPreTrainedModel"),zE.forEach(t),mA=i(Ec," forward method, overrides the "),om=s(Ec,"CODE",{});var jE=r(om);fA=i(jE,"__call__"),jE.forEach(t),uA=i(Ec," special method."),Ec.forEach(t),gA=m($r),y(Ys.$$.fragment,$r),_A=m($r),y(Zs.$$.fragment,$r),$r.forEach(t),ut.forEach(t),ru=m(o),un=s(o,"H2",{class:!0});var yg=r(un);er=s(yg,"A",{id:!0,class:!0,href:!0});var qE=r(er);nm=s(qE,"SPAN",{});var PE=r(nm);y(Ml.$$.fragment,PE),PE.forEach(t),qE.forEach(t),bA=m(yg),sm=s(yg,"SPAN",{});var CE=r(sm);kA=i(CE,"FlaxAlbertForTokenClassification"),CE.forEach(t),yg.forEach(t),au=m(o),De=s(o,"DIV",{class:!0});var gt=r(De);y(zl.$$.fragment,gt),vA=m(gt),rm=s(gt,"P",{});var LE=r(rm);TA=i(LE,`Albert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),LE.forEach(t),yA=m(gt),jl=s(gt,"P",{});var wg=r(jl);wA=i(wg,"This model inherits from "),ec=s(wg,"A",{href:!0});var IE=r(ec);$A=i(IE,"FlaxPreTrainedModel"),IE.forEach(t),AA=i(wg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),wg.forEach(t),FA=m(gt),ql=s(gt,"P",{});var $g=r(ql);xA=i($g,"This model is also a Flax Linen "),Pl=s($g,"A",{href:!0,rel:!0});var OE=r(Pl);EA=i(OE,"flax.linen.Module"),OE.forEach(t),MA=i($g,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),$g.forEach(t),zA=m(gt),am=s(gt,"P",{});var NE=r(am);jA=i(NE,"Finally, this model supports inherent JAX features such as:"),NE.forEach(t),qA=m(gt),Jt=s(gt,"UL",{});var Ar=r(Jt);im=s(Ar,"LI",{});var SE=r(im);Cl=s(SE,"A",{href:!0,rel:!0});var DE=r(Cl);PA=i(DE,"Just-In-Time (JIT) compilation"),DE.forEach(t),SE.forEach(t),CA=m(Ar),lm=s(Ar,"LI",{});var WE=r(lm);Ll=s(WE,"A",{href:!0,rel:!0});var UE=r(Ll);LA=i(UE,"Automatic Differentiation"),UE.forEach(t),WE.forEach(t),IA=m(Ar),dm=s(Ar,"LI",{});var BE=r(dm);Il=s(BE,"A",{href:!0,rel:!0});var RE=r(Il);OA=i(RE,"Vectorization"),RE.forEach(t),BE.forEach(t),NA=m(Ar),cm=s(Ar,"LI",{});var HE=r(cm);Ol=s(HE,"A",{href:!0,rel:!0});var QE=r(Ol);SA=i(QE,"Parallelization"),QE.forEach(t),HE.forEach(t),Ar.forEach(t),DA=m(gt),Pt=s(gt,"DIV",{class:!0});var Fr=r(Pt);y(Nl.$$.fragment,Fr),WA=m(Fr),gn=s(Fr,"P",{});var Mc=r(gn);UA=i(Mc,"The "),pm=s(Mc,"CODE",{});var VE=r(pm);BA=i(VE,"FlaxAlbertPreTrainedModel"),VE.forEach(t),RA=i(Mc," forward method, overrides the "),hm=s(Mc,"CODE",{});var KE=r(hm);HA=i(KE,"__call__"),KE.forEach(t),QA=i(Mc," special method."),Mc.forEach(t),VA=m(Fr),y(tr.$$.fragment,Fr),KA=m(Fr),y(or.$$.fragment,Fr),Fr.forEach(t),gt.forEach(t),iu=m(o),_n=s(o,"H2",{class:!0});var Ag=r(_n);nr=s(Ag,"A",{id:!0,class:!0,href:!0});var JE=r(nr);mm=s(JE,"SPAN",{});var GE=r(mm);y(Sl.$$.fragment,GE),GE.forEach(t),JE.forEach(t),JA=m(Ag),fm=s(Ag,"SPAN",{});var XE=r(fm);GA=i(XE,"FlaxAlbertForQuestionAnswering"),XE.forEach(t),Ag.forEach(t),lu=m(o),We=s(o,"DIV",{class:!0});var _t=r(We);y(Dl.$$.fragment,_t),XA=m(_t),bn=s(_t,"P",{});var zc=r(bn);YA=i(zc,`Albert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),um=s(zc,"CODE",{});var YE=r(um);ZA=i(YE,"span start logits"),YE.forEach(t),eF=i(zc," and "),gm=s(zc,"CODE",{});var ZE=r(gm);tF=i(ZE,"span end logits"),ZE.forEach(t),oF=i(zc,")."),zc.forEach(t),nF=m(_t),Wl=s(_t,"P",{});var Fg=r(Wl);sF=i(Fg,"This model inherits from "),tc=s(Fg,"A",{href:!0});var e3=r(tc);rF=i(e3,"FlaxPreTrainedModel"),e3.forEach(t),aF=i(Fg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Fg.forEach(t),iF=m(_t),Ul=s(_t,"P",{});var xg=r(Ul);lF=i(xg,"This model is also a Flax Linen "),Bl=s(xg,"A",{href:!0,rel:!0});var t3=r(Bl);dF=i(t3,"flax.linen.Module"),t3.forEach(t),cF=i(xg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),xg.forEach(t),pF=m(_t),_m=s(_t,"P",{});var o3=r(_m);hF=i(o3,"Finally, this model supports inherent JAX features such as:"),o3.forEach(t),mF=m(_t),Gt=s(_t,"UL",{});var xr=r(Gt);bm=s(xr,"LI",{});var n3=r(bm);Rl=s(n3,"A",{href:!0,rel:!0});var s3=r(Rl);fF=i(s3,"Just-In-Time (JIT) compilation"),s3.forEach(t),n3.forEach(t),uF=m(xr),km=s(xr,"LI",{});var r3=r(km);Hl=s(r3,"A",{href:!0,rel:!0});var a3=r(Hl);gF=i(a3,"Automatic Differentiation"),a3.forEach(t),r3.forEach(t),_F=m(xr),vm=s(xr,"LI",{});var i3=r(vm);Ql=s(i3,"A",{href:!0,rel:!0});var l3=r(Ql);bF=i(l3,"Vectorization"),l3.forEach(t),i3.forEach(t),kF=m(xr),Tm=s(xr,"LI",{});var d3=r(Tm);Vl=s(d3,"A",{href:!0,rel:!0});var c3=r(Vl);vF=i(c3,"Parallelization"),c3.forEach(t),d3.forEach(t),xr.forEach(t),TF=m(_t),Ct=s(_t,"DIV",{class:!0});var Er=r(Ct);y(Kl.$$.fragment,Er),yF=m(Er),kn=s(Er,"P",{});var jc=r(kn);wF=i(jc,"The "),ym=s(jc,"CODE",{});var p3=r(ym);$F=i(p3,"FlaxAlbertPreTrainedModel"),p3.forEach(t),AF=i(jc," forward method, overrides the "),wm=s(jc,"CODE",{});var h3=r(wm);FF=i(h3,"__call__"),h3.forEach(t),xF=i(jc," special method."),jc.forEach(t),EF=m(Er),y(sr.$$.fragment,Er),MF=m(Er),y(rr.$$.fragment,Er),Er.forEach(t),_t.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(qM)),u(p,"id","albert"),u(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(p,"href","#albert"),u(c,"class","relative group"),u(S,"id","overview"),u(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(S,"href","#overview"),u(M,"class","relative group"),u(re,"href","https://arxiv.org/abs/1909.11942"),u(re,"rel","nofollow"),u(we,"href","https://huggingface.co/lysandre"),u(we,"rel","nofollow"),u(R,"href","https://huggingface.co/kamalkraj"),u(R,"rel","nofollow"),u(H,"href","https://github.com/google-research/ALBERT"),u(H,"rel","nofollow"),u(wn,"id","transformers.AlbertConfig"),u(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wn,"href","#transformers.AlbertConfig"),u(Te,"class","relative group"),u(ld,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertModel"),u(dd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.TFAlbertModel"),u(jr,"href","https://huggingface.co/albert-xxlarge-v2"),u(jr,"rel","nofollow"),u(cd,"href","/docs/transformers/pr_17673/en/main_classes/configuration#transformers.PretrainedConfig"),u(pd,"href","/docs/transformers/pr_17673/en/main_classes/configuration#transformers.PretrainedConfig"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(An,"id","transformers.AlbertTokenizer"),u(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(An,"href","#transformers.AlbertTokenizer"),u(ko,"class","relative group"),u(Lr,"href","https://github.com/google/sentencepiece"),u(Lr,"rel","nofollow"),u(hd,"href","/docs/transformers/pr_17673/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Mn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ud,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jn,"id","transformers.AlbertTokenizerFast"),u(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(jn,"href","#transformers.AlbertTokenizerFast"),u(To,"class","relative group"),u(Hr,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),u(Hr,"rel","nofollow"),u(gd,"href","/docs/transformers/pr_17673/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pn,"id","transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"),u(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pn,"href","#transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput"),u(yo,"class","relative group"),u(kd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertForPreTraining"),u(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.TFAlbertForPreTraining"),u($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cn,"id","transformers.AlbertModel"),u(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cn,"href","#transformers.AlbertModel"),u(Ao,"class","relative group"),u(Td,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel"),u(sa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(sa,"rel","nofollow"),u(yd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertModel"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(On,"id","transformers.AlbertForPreTraining"),u(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(On,"href","#transformers.AlbertForPreTraining"),u(xo,"class","relative group"),u(wd,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel"),u(ca,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ca,"rel","nofollow"),u($d,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertForPreTraining"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Dn,"id","transformers.AlbertForMaskedLM"),u(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Dn,"href","#transformers.AlbertForMaskedLM"),u(zo,"class","relative group"),u(Ad,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel"),u(_a,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(_a,"rel","nofollow"),u(Fd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertForMaskedLM"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Rn,"id","transformers.AlbertForSequenceClassification"),u(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Rn,"href","#transformers.AlbertForSequenceClassification"),u(qo,"class","relative group"),u(xd,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel"),u(wa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(wa,"rel","nofollow"),u(Ed,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertForSequenceClassification"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gn,"id","transformers.AlbertForMultipleChoice"),u(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gn,"href","#transformers.AlbertForMultipleChoice"),u(Co,"class","relative group"),u(Md,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel"),u(Ma,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ma,"rel","nofollow"),u(zd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertForMultipleChoice"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Zn,"id","transformers.AlbertForTokenClassification"),u(Zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Zn,"href","#transformers.AlbertForTokenClassification"),u(Io,"class","relative group"),u(jd,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel"),u(La,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(La,"rel","nofollow"),u(qd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertForTokenClassification"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ns,"id","transformers.AlbertForQuestionAnswering"),u(ns,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ns,"href","#transformers.AlbertForQuestionAnswering"),u(No,"class","relative group"),u(Pd,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.PreTrainedModel"),u(Wa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Wa,"rel","nofollow"),u(Cd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.AlbertForQuestionAnswering"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(is,"id","transformers.TFAlbertModel"),u(is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(is,"href","#transformers.TFAlbertModel"),u(Wo,"class","relative group"),u(Ld,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.TFPreTrainedModel"),u(Va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Va,"rel","nofollow"),u(Id,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.TFAlbertModel"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ps,"id","transformers.TFAlbertForPreTraining"),u(ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ps,"href","#transformers.TFAlbertForPreTraining"),u(Bo,"class","relative group"),u(Od,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.TFPreTrainedModel"),u(Za,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Za,"rel","nofollow"),u(Nd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.TFAlbertForPreTraining"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(us,"id","transformers.TFAlbertForMaskedLM"),u(us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(us,"href","#transformers.TFAlbertForMaskedLM"),u(Qo,"class","relative group"),u(Sd,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.TFPreTrainedModel"),u(ai,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ai,"rel","nofollow"),u(Dd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.TFAlbertForMaskedLM"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vs,"id","transformers.TFAlbertForSequenceClassification"),u(vs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(vs,"href","#transformers.TFAlbertForSequenceClassification"),u(Ko,"class","relative group"),u(Wd,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.TFPreTrainedModel"),u(hi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(hi,"rel","nofollow"),u(Ud,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.TFAlbertForSequenceClassification"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(As,"id","transformers.TFAlbertForMultipleChoice"),u(As,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(As,"href","#transformers.TFAlbertForMultipleChoice"),u(Go,"class","relative group"),u(Bd,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.TFPreTrainedModel"),u(bi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(bi,"rel","nofollow"),u(Rd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.TFAlbertForMultipleChoice"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ms,"id","transformers.TFAlbertForTokenClassification"),u(Ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ms,"href","#transformers.TFAlbertForTokenClassification"),u(Yo,"class","relative group"),u(Hd,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.TFPreTrainedModel"),u($i,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u($i,"rel","nofollow"),u(Qd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.TFAlbertForTokenClassification"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cs,"id","transformers.TFAlbertForQuestionAnswering"),u(Cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cs,"href","#transformers.TFAlbertForQuestionAnswering"),u(en,"class","relative group"),u(Vd,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.TFPreTrainedModel"),u(zi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(zi,"rel","nofollow"),u(Kd,"href","/docs/transformers/pr_17673/en/model_doc/albert#transformers.TFAlbertForQuestionAnswering"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ss,"id","transformers.FlaxAlbertModel"),u(Ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ss,"href","#transformers.FlaxAlbertModel"),u(nn,"class","relative group"),u(Jd,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ii,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ii,"rel","nofollow"),u(Oi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Oi,"rel","nofollow"),u(Ni,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ni,"rel","nofollow"),u(Si,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Si,"rel","nofollow"),u(Di,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Di,"rel","nofollow"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Us,"id","transformers.FlaxAlbertForPreTraining"),u(Us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Us,"href","#transformers.FlaxAlbertForPreTraining"),u(rn,"class","relative group"),u(Gd,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Qi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Qi,"rel","nofollow"),u(Vi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Vi,"rel","nofollow"),u(Ki,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ki,"rel","nofollow"),u(Ji,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ji,"rel","nofollow"),u(Gi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Gi,"rel","nofollow"),u(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hs,"id","transformers.FlaxAlbertForMaskedLM"),u(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hs,"href","#transformers.FlaxAlbertForMaskedLM"),u(dn,"class","relative group"),u(Xd,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(nl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(nl,"rel","nofollow"),u(sl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(sl,"rel","nofollow"),u(rl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(rl,"rel","nofollow"),u(al,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(al,"rel","nofollow"),u(il,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(il,"rel","nofollow"),u(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ks,"id","transformers.FlaxAlbertForSequenceClassification"),u(Ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ks,"href","#transformers.FlaxAlbertForSequenceClassification"),u(pn,"class","relative group"),u(Yd,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(ml,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(ml,"rel","nofollow"),u(fl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(fl,"rel","nofollow"),u(ul,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ul,"rel","nofollow"),u(gl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(gl,"rel","nofollow"),u(_l,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(_l,"rel","nofollow"),u(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xs,"id","transformers.FlaxAlbertForMultipleChoice"),u(Xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xs,"href","#transformers.FlaxAlbertForMultipleChoice"),u(mn,"class","relative group"),u(Zd,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(wl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(wl,"rel","nofollow"),u($l,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u($l,"rel","nofollow"),u(Al,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Al,"rel","nofollow"),u(Fl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Fl,"rel","nofollow"),u(xl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(xl,"rel","nofollow"),u(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(er,"id","transformers.FlaxAlbertForTokenClassification"),u(er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(er,"href","#transformers.FlaxAlbertForTokenClassification"),u(un,"class","relative group"),u(ec,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Pl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Pl,"rel","nofollow"),u(Cl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Cl,"rel","nofollow"),u(Ll,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ll,"rel","nofollow"),u(Il,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Il,"rel","nofollow"),u(Ol,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ol,"rel","nofollow"),u(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nr,"id","transformers.FlaxAlbertForQuestionAnswering"),u(nr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(nr,"href","#transformers.FlaxAlbertForQuestionAnswering"),u(_n,"class","relative group"),u(tc,"href","/docs/transformers/pr_17673/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Bl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Bl,"rel","nofollow"),u(Rl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Rl,"rel","nofollow"),u(Hl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Hl,"rel","nofollow"),u(Ql,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ql,"rel","nofollow"),u(Vl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Vl,"rel","nofollow"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),b(o,g,k),b(o,c,k),e(c,p),e(p,_),w(l,_,null),e(c,f),e(c,E),e(E,q),b(o,L,k),b(o,M,k),e(M,S),e(S,O),w(Z,O,null),e(M,ue),e(M,Q),e(Q,ge),b(o,ce,k),b(o,X,k),e(X,D),e(X,re),e(re,ee),e(X,j),b(o,C,k),b(o,se,k),e(se,V),e(V,_e),e(se,be),e(se,K),e(K,ke),b(o,pe,k),b(o,P,k),e(P,ve),b(o,J,k),b(o,ae,k),e(ae,le),e(le,G),b(o,he,k),b(o,ie,k),e(ie,W),b(o,me,k),b(o,B,k),e(B,de),e(de,v),e(B,z),e(B,Y),e(Y,Ee),b(o,Fe,k),b(o,I,k),e(I,Me),e(I,we),e(we,ze),e(I,U),e(I,R),e(R,je),e(I,qe),e(I,H),e(H,Pe),e(I,Ce),b(o,fe,k),b(o,Te,k),e(Te,wn),e(wn,qc),w(Mr,qc,null),e(Te,Eg),e(Te,Pc),e(Pc,Mg),b(o,mf,k),b(o,bt,k),w(zr,bt,null),e(bt,zg),e(bt,Ut),e(Ut,jg),e(Ut,ld),e(ld,qg),e(Ut,Pg),e(Ut,dd),e(dd,Cg),e(Ut,Lg),e(Ut,jr),e(jr,Ig),e(Ut,Og),e(bt,Ng),e(bt,bo),e(bo,Sg),e(bo,cd),e(cd,Dg),e(bo,Wg),e(bo,pd),e(pd,Ug),e(bo,Bg),e(bt,Rg),w($n,bt,null),b(o,ff,k),b(o,ko,k),e(ko,An),e(An,Cc),w(qr,Cc,null),e(ko,Hg),e(ko,Lc),e(Lc,Qg),b(o,uf,k),b(o,$e,k),w(Pr,$e,null),e($e,Vg),e($e,Cr),e(Cr,Kg),e(Cr,Lr),e(Lr,Jg),e(Cr,Gg),e($e,Xg),e($e,Ir),e(Ir,Yg),e(Ir,hd),e(hd,Zg),e(Ir,e_),e($e,t_),e($e,Ic),e(Ic,o_),e($e,n_),w(Fn,$e,null),e($e,s_),w(xn,$e,null),e($e,r_),w(En,$e,null),e($e,a_),e($e,to),w(Or,to,null),e(to,i_),e(to,Oc),e(Oc,l_),e(to,d_),e(to,Nr),e(Nr,md),e(md,c_),e(md,Nc),e(Nc,p_),e(Nr,h_),e(Nr,fd),e(fd,m_),e(fd,Sc),e(Sc,f_),e($e,u_),e($e,Mn),w(Sr,Mn,null),e(Mn,g_),e(Mn,Dr),e(Dr,__),e(Dr,Dc),e(Dc,b_),e(Dr,k_),e($e,v_),e($e,vt),w(Wr,vt,null),e(vt,T_),e(vt,Wc),e(Wc,y_),e(vt,w_),w(zn,vt,null),e(vt,$_),e(vt,vo),e(vo,A_),e(vo,Uc),e(Uc,F_),e(vo,x_),e(vo,Bc),e(Bc,E_),e(vo,M_),e($e,z_),e($e,ud),w(Ur,ud,null),b(o,gf,k),b(o,To,k),e(To,jn),e(jn,Rc),w(Br,Rc,null),e(To,j_),e(To,Hc),e(Hc,q_),b(o,_f,k),b(o,kt,k),w(Rr,kt,null),e(kt,P_),e(kt,Bt),e(Bt,C_),e(Bt,Qc),e(Qc,L_),e(Bt,I_),e(Bt,Hr),e(Hr,O_),e(Bt,N_),e(Bt,gd),e(gd,S_),e(Bt,D_),e(kt,W_),e(kt,oo),w(Qr,oo,null),e(oo,U_),e(oo,Vc),e(Vc,B_),e(oo,R_),e(oo,Vr),e(Vr,_d),e(_d,H_),e(_d,Kc),e(Kc,Q_),e(Vr,V_),e(Vr,bd),e(bd,K_),e(bd,Jc),e(Jc,J_),e(kt,G_),e(kt,Tt),w(Kr,Tt,null),e(Tt,X_),e(Tt,Gc),e(Gc,Y_),e(Tt,Z_),w(qn,Tt,null),e(Tt,eb),e(Tt,Xc),e(Xc,tb),b(o,bf,k),b(o,yo,k),e(yo,Pn),e(Pn,Yc),w(Jr,Yc,null),e(yo,ob),e(yo,Zc),e(Zc,nb),b(o,kf,k),b(o,wo,k),w(Gr,wo,null),e(wo,sb),e(wo,Xr),e(Xr,rb),e(Xr,kd),e(kd,ab),e(Xr,ib),b(o,vf,k),b(o,$o,k),w(Yr,$o,null),e($o,lb),e($o,Zr),e(Zr,db),e(Zr,vd),e(vd,cb),e(Zr,pb),b(o,Tf,k),b(o,Ao,k),e(Ao,Cn),e(Cn,ep),w(ea,ep,null),e(Ao,hb),e(Ao,tp),e(tp,mb),b(o,yf,k),b(o,Ge,k),w(ta,Ge,null),e(Ge,fb),e(Ge,op),e(op,ub),e(Ge,gb),e(Ge,oa),e(oa,_b),e(oa,Td),e(Td,bb),e(oa,kb),e(Ge,vb),e(Ge,na),e(na,Tb),e(na,sa),e(sa,yb),e(na,wb),e(Ge,$b),e(Ge,yt),w(ra,yt,null),e(yt,Ab),e(yt,Fo),e(Fo,Fb),e(Fo,yd),e(yd,xb),e(Fo,Eb),e(Fo,np),e(np,Mb),e(Fo,zb),e(yt,jb),w(Ln,yt,null),e(yt,qb),w(In,yt,null),b(o,wf,k),b(o,xo,k),e(xo,On),e(On,sp),w(aa,sp,null),e(xo,Pb),e(xo,rp),e(rp,Cb),b(o,$f,k),b(o,Xe,k),w(ia,Xe,null),e(Xe,Lb),e(Xe,Eo),e(Eo,Ib),e(Eo,ap),e(ap,Ob),e(Eo,Nb),e(Eo,ip),e(ip,Sb),e(Eo,Db),e(Xe,Wb),e(Xe,la),e(la,Ub),e(la,wd),e(wd,Bb),e(la,Rb),e(Xe,Hb),e(Xe,da),e(da,Qb),e(da,ca),e(ca,Vb),e(da,Kb),e(Xe,Jb),e(Xe,wt),w(pa,wt,null),e(wt,Gb),e(wt,Mo),e(Mo,Xb),e(Mo,$d),e($d,Yb),e(Mo,Zb),e(Mo,lp),e(lp,ek),e(Mo,tk),e(wt,ok),w(Nn,wt,null),e(wt,nk),w(Sn,wt,null),b(o,Af,k),b(o,zo,k),e(zo,Dn),e(Dn,dp),w(ha,dp,null),e(zo,sk),e(zo,cp),e(cp,rk),b(o,Ff,k),b(o,Ye,k),w(ma,Ye,null),e(Ye,ak),e(Ye,fa),e(fa,ik),e(fa,pp),e(pp,lk),e(fa,dk),e(Ye,ck),e(Ye,ua),e(ua,pk),e(ua,Ad),e(Ad,hk),e(ua,mk),e(Ye,fk),e(Ye,ga),e(ga,uk),e(ga,_a),e(_a,gk),e(ga,_k),e(Ye,bk),e(Ye,nt),w(ba,nt,null),e(nt,kk),e(nt,jo),e(jo,vk),e(jo,Fd),e(Fd,Tk),e(jo,yk),e(jo,hp),e(hp,wk),e(jo,$k),e(nt,Ak),w(Wn,nt,null),e(nt,Fk),w(Un,nt,null),e(nt,xk),w(Bn,nt,null),b(o,xf,k),b(o,qo,k),e(qo,Rn),e(Rn,mp),w(ka,mp,null),e(qo,Ek),e(qo,fp),e(fp,Mk),b(o,Ef,k),b(o,Ze,k),w(va,Ze,null),e(Ze,zk),e(Ze,up),e(up,jk),e(Ze,qk),e(Ze,Ta),e(Ta,Pk),e(Ta,xd),e(xd,Ck),e(Ta,Lk),e(Ze,Ik),e(Ze,ya),e(ya,Ok),e(ya,wa),e(wa,Nk),e(ya,Sk),e(Ze,Dk),e(Ze,Ue),w($a,Ue,null),e(Ue,Wk),e(Ue,Po),e(Po,Uk),e(Po,Ed),e(Ed,Bk),e(Po,Rk),e(Po,gp),e(gp,Hk),e(Po,Qk),e(Ue,Vk),w(Hn,Ue,null),e(Ue,Kk),w(Qn,Ue,null),e(Ue,Jk),w(Vn,Ue,null),e(Ue,Gk),w(Kn,Ue,null),e(Ue,Xk),w(Jn,Ue,null),b(o,Mf,k),b(o,Co,k),e(Co,Gn),e(Gn,_p),w(Aa,_p,null),e(Co,Yk),e(Co,bp),e(bp,Zk),b(o,zf,k),b(o,et,k),w(Fa,et,null),e(et,ev),e(et,kp),e(kp,tv),e(et,ov),e(et,xa),e(xa,nv),e(xa,Md),e(Md,sv),e(xa,rv),e(et,av),e(et,Ea),e(Ea,iv),e(Ea,Ma),e(Ma,lv),e(Ea,dv),e(et,cv),e(et,$t),w(za,$t,null),e($t,pv),e($t,Lo),e(Lo,hv),e(Lo,zd),e(zd,mv),e(Lo,fv),e(Lo,vp),e(vp,uv),e(Lo,gv),e($t,_v),w(Xn,$t,null),e($t,bv),w(Yn,$t,null),b(o,jf,k),b(o,Io,k),e(Io,Zn),e(Zn,Tp),w(ja,Tp,null),e(Io,kv),e(Io,yp),e(yp,vv),b(o,qf,k),b(o,tt,k),w(qa,tt,null),e(tt,Tv),e(tt,wp),e(wp,yv),e(tt,wv),e(tt,Pa),e(Pa,$v),e(Pa,jd),e(jd,Av),e(Pa,Fv),e(tt,xv),e(tt,Ca),e(Ca,Ev),e(Ca,La),e(La,Mv),e(Ca,zv),e(tt,jv),e(tt,st),w(Ia,st,null),e(st,qv),e(st,Oo),e(Oo,Pv),e(Oo,qd),e(qd,Cv),e(Oo,Lv),e(Oo,$p),e($p,Iv),e(Oo,Ov),e(st,Nv),w(es,st,null),e(st,Sv),w(ts,st,null),e(st,Dv),w(os,st,null),b(o,Pf,k),b(o,No,k),e(No,ns),e(ns,Ap),w(Oa,Ap,null),e(No,Wv),e(No,Fp),e(Fp,Uv),b(o,Cf,k),b(o,ot,k),w(Na,ot,null),e(ot,Bv),e(ot,So),e(So,Rv),e(So,xp),e(xp,Hv),e(So,Qv),e(So,Ep),e(Ep,Vv),e(So,Kv),e(ot,Jv),e(ot,Sa),e(Sa,Gv),e(Sa,Pd),e(Pd,Xv),e(Sa,Yv),e(ot,Zv),e(ot,Da),e(Da,eT),e(Da,Wa),e(Wa,tT),e(Da,oT),e(ot,nT),e(ot,rt),w(Ua,rt,null),e(rt,sT),e(rt,Do),e(Do,rT),e(Do,Cd),e(Cd,aT),e(Do,iT),e(Do,Mp),e(Mp,lT),e(Do,dT),e(rt,cT),w(ss,rt,null),e(rt,pT),w(rs,rt,null),e(rt,hT),w(as,rt,null),b(o,Lf,k),b(o,Wo,k),e(Wo,is),e(is,zp),w(Ba,zp,null),e(Wo,mT),e(Wo,jp),e(jp,fT),b(o,If,k),b(o,Be,k),w(Ra,Be,null),e(Be,uT),e(Be,qp),e(qp,gT),e(Be,_T),e(Be,Ha),e(Ha,bT),e(Ha,Ld),e(Ld,kT),e(Ha,vT),e(Be,TT),e(Be,Qa),e(Qa,yT),e(Qa,Va),e(Va,wT),e(Qa,$T),e(Be,AT),w(ls,Be,null),e(Be,FT),e(Be,At),w(Ka,At,null),e(At,xT),e(At,Uo),e(Uo,ET),e(Uo,Id),e(Id,MT),e(Uo,zT),e(Uo,Pp),e(Pp,jT),e(Uo,qT),e(At,PT),w(ds,At,null),e(At,CT),w(cs,At,null),b(o,Of,k),b(o,Bo,k),e(Bo,ps),e(ps,Cp),w(Ja,Cp,null),e(Bo,LT),e(Bo,Lp),e(Lp,IT),b(o,Nf,k),b(o,Re,k),w(Ga,Re,null),e(Re,OT),e(Re,Ro),e(Ro,NT),e(Ro,Ip),e(Ip,ST),e(Ro,DT),e(Ro,Op),e(Op,WT),e(Ro,UT),e(Re,BT),e(Re,Xa),e(Xa,RT),e(Xa,Od),e(Od,HT),e(Xa,QT),e(Re,VT),e(Re,Ya),e(Ya,KT),e(Ya,Za),e(Za,JT),e(Ya,GT),e(Re,XT),w(hs,Re,null),e(Re,YT),e(Re,Ft),w(ei,Ft,null),e(Ft,ZT),e(Ft,Ho),e(Ho,e1),e(Ho,Nd),e(Nd,t1),e(Ho,o1),e(Ho,Np),e(Np,n1),e(Ho,s1),e(Ft,r1),w(ms,Ft,null),e(Ft,a1),w(fs,Ft,null),b(o,Sf,k),b(o,Qo,k),e(Qo,us),e(us,Sp),w(ti,Sp,null),e(Qo,i1),e(Qo,Dp),e(Dp,l1),b(o,Df,k),b(o,He,k),w(oi,He,null),e(He,d1),e(He,ni),e(ni,c1),e(ni,Wp),e(Wp,p1),e(ni,h1),e(He,m1),e(He,si),e(si,f1),e(si,Sd),e(Sd,u1),e(si,g1),e(He,_1),e(He,ri),e(ri,b1),e(ri,ai),e(ai,k1),e(ri,v1),e(He,T1),w(gs,He,null),e(He,y1),e(He,at),w(ii,at,null),e(at,w1),e(at,Vo),e(Vo,$1),e(Vo,Dd),e(Dd,A1),e(Vo,F1),e(Vo,Up),e(Up,x1),e(Vo,E1),e(at,M1),w(_s,at,null),e(at,z1),w(bs,at,null),e(at,j1),w(ks,at,null),b(o,Wf,k),b(o,Ko,k),e(Ko,vs),e(vs,Bp),w(li,Bp,null),e(Ko,q1),e(Ko,Rp),e(Rp,P1),b(o,Uf,k),b(o,Qe,k),w(di,Qe,null),e(Qe,C1),e(Qe,Hp),e(Hp,L1),e(Qe,I1),e(Qe,ci),e(ci,O1),e(ci,Wd),e(Wd,N1),e(ci,S1),e(Qe,D1),e(Qe,pi),e(pi,W1),e(pi,hi),e(hi,U1),e(pi,B1),e(Qe,R1),w(Ts,Qe,null),e(Qe,H1),e(Qe,it),w(mi,it,null),e(it,Q1),e(it,Jo),e(Jo,V1),e(Jo,Ud),e(Ud,K1),e(Jo,J1),e(Jo,Qp),e(Qp,G1),e(Jo,X1),e(it,Y1),w(ys,it,null),e(it,Z1),w(ws,it,null),e(it,ey),w($s,it,null),b(o,Bf,k),b(o,Go,k),e(Go,As),e(As,Vp),w(fi,Vp,null),e(Go,ty),e(Go,Kp),e(Kp,oy),b(o,Rf,k),b(o,Ve,k),w(ui,Ve,null),e(Ve,ny),e(Ve,Jp),e(Jp,sy),e(Ve,ry),e(Ve,gi),e(gi,ay),e(gi,Bd),e(Bd,iy),e(gi,ly),e(Ve,dy),e(Ve,_i),e(_i,cy),e(_i,bi),e(bi,py),e(_i,hy),e(Ve,my),w(Fs,Ve,null),e(Ve,fy),e(Ve,xt),w(ki,xt,null),e(xt,uy),e(xt,Xo),e(Xo,gy),e(Xo,Rd),e(Rd,_y),e(Xo,by),e(Xo,Gp),e(Gp,ky),e(Xo,vy),e(xt,Ty),w(xs,xt,null),e(xt,yy),w(Es,xt,null),b(o,Hf,k),b(o,Yo,k),e(Yo,Ms),e(Ms,Xp),w(vi,Xp,null),e(Yo,wy),e(Yo,Yp),e(Yp,$y),b(o,Qf,k),b(o,Ke,k),w(Ti,Ke,null),e(Ke,Ay),e(Ke,Zp),e(Zp,Fy),e(Ke,xy),e(Ke,yi),e(yi,Ey),e(yi,Hd),e(Hd,My),e(yi,zy),e(Ke,jy),e(Ke,wi),e(wi,qy),e(wi,$i),e($i,Py),e(wi,Cy),e(Ke,Ly),w(zs,Ke,null),e(Ke,Iy),e(Ke,lt),w(Ai,lt,null),e(lt,Oy),e(lt,Zo),e(Zo,Ny),e(Zo,Qd),e(Qd,Sy),e(Zo,Dy),e(Zo,eh),e(eh,Wy),e(Zo,Uy),e(lt,By),w(js,lt,null),e(lt,Ry),w(qs,lt,null),e(lt,Hy),w(Ps,lt,null),b(o,Vf,k),b(o,en,k),e(en,Cs),e(Cs,th),w(Fi,th,null),e(en,Qy),e(en,oh),e(oh,Vy),b(o,Kf,k),b(o,Je,k),w(xi,Je,null),e(Je,Ky),e(Je,tn),e(tn,Jy),e(tn,nh),e(nh,Gy),e(tn,Xy),e(tn,sh),e(sh,Yy),e(tn,Zy),e(Je,ew),e(Je,Ei),e(Ei,tw),e(Ei,Vd),e(Vd,ow),e(Ei,nw),e(Je,sw),e(Je,Mi),e(Mi,rw),e(Mi,zi),e(zi,aw),e(Mi,iw),e(Je,lw),w(Ls,Je,null),e(Je,dw),e(Je,dt),w(ji,dt,null),e(dt,cw),e(dt,on),e(on,pw),e(on,Kd),e(Kd,hw),e(on,mw),e(on,rh),e(rh,fw),e(on,uw),e(dt,gw),w(Is,dt,null),e(dt,_w),w(Os,dt,null),e(dt,bw),w(Ns,dt,null),b(o,Jf,k),b(o,nn,k),e(nn,Ss),e(Ss,ah),w(qi,ah,null),e(nn,kw),e(nn,ih),e(ih,vw),b(o,Gf,k),b(o,Le,k),w(Pi,Le,null),e(Le,Tw),e(Le,lh),e(lh,yw),e(Le,ww),e(Le,Ci),e(Ci,$w),e(Ci,Jd),e(Jd,Aw),e(Ci,Fw),e(Le,xw),e(Le,Li),e(Li,Ew),e(Li,Ii),e(Ii,Mw),e(Li,zw),e(Le,jw),e(Le,dh),e(dh,qw),e(Le,Pw),e(Le,Rt),e(Rt,ch),e(ch,Oi),e(Oi,Cw),e(Rt,Lw),e(Rt,ph),e(ph,Ni),e(Ni,Iw),e(Rt,Ow),e(Rt,hh),e(hh,Si),e(Si,Nw),e(Rt,Sw),e(Rt,mh),e(mh,Di),e(Di,Dw),e(Le,Ww),e(Le,Et),w(Wi,Et,null),e(Et,Uw),e(Et,sn),e(sn,Bw),e(sn,fh),e(fh,Rw),e(sn,Hw),e(sn,uh),e(uh,Qw),e(sn,Vw),e(Et,Kw),w(Ds,Et,null),e(Et,Jw),w(Ws,Et,null),b(o,Xf,k),b(o,rn,k),e(rn,Us),e(Us,gh),w(Ui,gh,null),e(rn,Gw),e(rn,_h),e(_h,Xw),b(o,Yf,k),b(o,Ie,k),w(Bi,Ie,null),e(Ie,Yw),e(Ie,an),e(an,Zw),e(an,bh),e(bh,e$),e(an,t$),e(an,kh),e(kh,o$),e(an,n$),e(Ie,s$),e(Ie,Ri),e(Ri,r$),e(Ri,Gd),e(Gd,a$),e(Ri,i$),e(Ie,l$),e(Ie,Hi),e(Hi,d$),e(Hi,Qi),e(Qi,c$),e(Hi,p$),e(Ie,h$),e(Ie,vh),e(vh,m$),e(Ie,f$),e(Ie,Ht),e(Ht,Th),e(Th,Vi),e(Vi,u$),e(Ht,g$),e(Ht,yh),e(yh,Ki),e(Ki,_$),e(Ht,b$),e(Ht,wh),e(wh,Ji),e(Ji,k$),e(Ht,v$),e(Ht,$h),e($h,Gi),e(Gi,T$),e(Ie,y$),e(Ie,Mt),w(Xi,Mt,null),e(Mt,w$),e(Mt,ln),e(ln,$$),e(ln,Ah),e(Ah,A$),e(ln,F$),e(ln,Fh),e(Fh,x$),e(ln,E$),e(Mt,M$),w(Bs,Mt,null),e(Mt,z$),w(Rs,Mt,null),b(o,Zf,k),b(o,dn,k),e(dn,Hs),e(Hs,xh),w(Yi,xh,null),e(dn,j$),e(dn,Eh),e(Eh,q$),b(o,eu,k),b(o,Oe,k),w(Zi,Oe,null),e(Oe,P$),e(Oe,el),e(el,C$),e(el,Mh),e(Mh,L$),e(el,I$),e(Oe,O$),e(Oe,tl),e(tl,N$),e(tl,Xd),e(Xd,S$),e(tl,D$),e(Oe,W$),e(Oe,ol),e(ol,U$),e(ol,nl),e(nl,B$),e(ol,R$),e(Oe,H$),e(Oe,zh),e(zh,Q$),e(Oe,V$),e(Oe,Qt),e(Qt,jh),e(jh,sl),e(sl,K$),e(Qt,J$),e(Qt,qh),e(qh,rl),e(rl,G$),e(Qt,X$),e(Qt,Ph),e(Ph,al),e(al,Y$),e(Qt,Z$),e(Qt,Ch),e(Ch,il),e(il,e2),e(Oe,t2),e(Oe,zt),w(ll,zt,null),e(zt,o2),e(zt,cn),e(cn,n2),e(cn,Lh),e(Lh,s2),e(cn,r2),e(cn,Ih),e(Ih,a2),e(cn,i2),e(zt,l2),w(Qs,zt,null),e(zt,d2),w(Vs,zt,null),b(o,tu,k),b(o,pn,k),e(pn,Ks),e(Ks,Oh),w(dl,Oh,null),e(pn,c2),e(pn,Nh),e(Nh,p2),b(o,ou,k),b(o,Ne,k),w(cl,Ne,null),e(Ne,h2),e(Ne,Sh),e(Sh,m2),e(Ne,f2),e(Ne,pl),e(pl,u2),e(pl,Yd),e(Yd,g2),e(pl,_2),e(Ne,b2),e(Ne,hl),e(hl,k2),e(hl,ml),e(ml,v2),e(hl,T2),e(Ne,y2),e(Ne,Dh),e(Dh,w2),e(Ne,$2),e(Ne,Vt),e(Vt,Wh),e(Wh,fl),e(fl,A2),e(Vt,F2),e(Vt,Uh),e(Uh,ul),e(ul,x2),e(Vt,E2),e(Vt,Bh),e(Bh,gl),e(gl,M2),e(Vt,z2),e(Vt,Rh),e(Rh,_l),e(_l,j2),e(Ne,q2),e(Ne,jt),w(bl,jt,null),e(jt,P2),e(jt,hn),e(hn,C2),e(hn,Hh),e(Hh,L2),e(hn,I2),e(hn,Qh),e(Qh,O2),e(hn,N2),e(jt,S2),w(Js,jt,null),e(jt,D2),w(Gs,jt,null),b(o,nu,k),b(o,mn,k),e(mn,Xs),e(Xs,Vh),w(kl,Vh,null),e(mn,W2),e(mn,Kh),e(Kh,U2),b(o,su,k),b(o,Se,k),w(vl,Se,null),e(Se,B2),e(Se,Jh),e(Jh,R2),e(Se,H2),e(Se,Tl),e(Tl,Q2),e(Tl,Zd),e(Zd,V2),e(Tl,K2),e(Se,J2),e(Se,yl),e(yl,G2),e(yl,wl),e(wl,X2),e(yl,Y2),e(Se,Z2),e(Se,Gh),e(Gh,eA),e(Se,tA),e(Se,Kt),e(Kt,Xh),e(Xh,$l),e($l,oA),e(Kt,nA),e(Kt,Yh),e(Yh,Al),e(Al,sA),e(Kt,rA),e(Kt,Zh),e(Zh,Fl),e(Fl,aA),e(Kt,iA),e(Kt,em),e(em,xl),e(xl,lA),e(Se,dA),e(Se,qt),w(El,qt,null),e(qt,cA),e(qt,fn),e(fn,pA),e(fn,tm),e(tm,hA),e(fn,mA),e(fn,om),e(om,fA),e(fn,uA),e(qt,gA),w(Ys,qt,null),e(qt,_A),w(Zs,qt,null),b(o,ru,k),b(o,un,k),e(un,er),e(er,nm),w(Ml,nm,null),e(un,bA),e(un,sm),e(sm,kA),b(o,au,k),b(o,De,k),w(zl,De,null),e(De,vA),e(De,rm),e(rm,TA),e(De,yA),e(De,jl),e(jl,wA),e(jl,ec),e(ec,$A),e(jl,AA),e(De,FA),e(De,ql),e(ql,xA),e(ql,Pl),e(Pl,EA),e(ql,MA),e(De,zA),e(De,am),e(am,jA),e(De,qA),e(De,Jt),e(Jt,im),e(im,Cl),e(Cl,PA),e(Jt,CA),e(Jt,lm),e(lm,Ll),e(Ll,LA),e(Jt,IA),e(Jt,dm),e(dm,Il),e(Il,OA),e(Jt,NA),e(Jt,cm),e(cm,Ol),e(Ol,SA),e(De,DA),e(De,Pt),w(Nl,Pt,null),e(Pt,WA),e(Pt,gn),e(gn,UA),e(gn,pm),e(pm,BA),e(gn,RA),e(gn,hm),e(hm,HA),e(gn,QA),e(Pt,VA),w(tr,Pt,null),e(Pt,KA),w(or,Pt,null),b(o,iu,k),b(o,_n,k),e(_n,nr),e(nr,mm),w(Sl,mm,null),e(_n,JA),e(_n,fm),e(fm,GA),b(o,lu,k),b(o,We,k),w(Dl,We,null),e(We,XA),e(We,bn),e(bn,YA),e(bn,um),e(um,ZA),e(bn,eF),e(bn,gm),e(gm,tF),e(bn,oF),e(We,nF),e(We,Wl),e(Wl,sF),e(Wl,tc),e(tc,rF),e(Wl,aF),e(We,iF),e(We,Ul),e(Ul,lF),e(Ul,Bl),e(Bl,dF),e(Ul,cF),e(We,pF),e(We,_m),e(_m,hF),e(We,mF),e(We,Gt),e(Gt,bm),e(bm,Rl),e(Rl,fF),e(Gt,uF),e(Gt,km),e(km,Hl),e(Hl,gF),e(Gt,_F),e(Gt,vm),e(vm,Ql),e(Ql,bF),e(Gt,kF),e(Gt,Tm),e(Tm,Vl),e(Vl,vF),e(We,TF),e(We,Ct),w(Kl,Ct,null),e(Ct,yF),e(Ct,kn),e(kn,wF),e(kn,ym),e(ym,$F),e(kn,AF),e(kn,wm),e(wm,FF),e(kn,xF),e(Ct,EF),w(sr,Ct,null),e(Ct,MF),w(rr,Ct,null),du=!0},p(o,[k]){const Jl={};k&2&&(Jl.$$scope={dirty:k,ctx:o}),$n.$set(Jl);const $m={};k&2&&($m.$$scope={dirty:k,ctx:o}),Fn.$set($m);const Am={};k&2&&(Am.$$scope={dirty:k,ctx:o}),xn.$set(Am);const Fm={};k&2&&(Fm.$$scope={dirty:k,ctx:o}),En.$set(Fm);const Gl={};k&2&&(Gl.$$scope={dirty:k,ctx:o}),zn.$set(Gl);const xm={};k&2&&(xm.$$scope={dirty:k,ctx:o}),qn.$set(xm);const Em={};k&2&&(Em.$$scope={dirty:k,ctx:o}),Ln.$set(Em);const Mm={};k&2&&(Mm.$$scope={dirty:k,ctx:o}),In.$set(Mm);const Xl={};k&2&&(Xl.$$scope={dirty:k,ctx:o}),Nn.$set(Xl);const zm={};k&2&&(zm.$$scope={dirty:k,ctx:o}),Sn.$set(zm);const Yl={};k&2&&(Yl.$$scope={dirty:k,ctx:o}),Wn.$set(Yl);const jm={};k&2&&(jm.$$scope={dirty:k,ctx:o}),Un.$set(jm);const qm={};k&2&&(qm.$$scope={dirty:k,ctx:o}),Bn.$set(qm);const Pm={};k&2&&(Pm.$$scope={dirty:k,ctx:o}),Hn.$set(Pm);const Cm={};k&2&&(Cm.$$scope={dirty:k,ctx:o}),Qn.$set(Cm);const Lm={};k&2&&(Lm.$$scope={dirty:k,ctx:o}),Vn.$set(Lm);const Im={};k&2&&(Im.$$scope={dirty:k,ctx:o}),Kn.$set(Im);const Zl={};k&2&&(Zl.$$scope={dirty:k,ctx:o}),Jn.$set(Zl);const Om={};k&2&&(Om.$$scope={dirty:k,ctx:o}),Xn.$set(Om);const Nm={};k&2&&(Nm.$$scope={dirty:k,ctx:o}),Yn.$set(Nm);const Xt={};k&2&&(Xt.$$scope={dirty:k,ctx:o}),es.$set(Xt);const Sm={};k&2&&(Sm.$$scope={dirty:k,ctx:o}),ts.$set(Sm);const Dm={};k&2&&(Dm.$$scope={dirty:k,ctx:o}),os.$set(Dm);const Wm={};k&2&&(Wm.$$scope={dirty:k,ctx:o}),ss.$set(Wm);const ed={};k&2&&(ed.$$scope={dirty:k,ctx:o}),rs.$set(ed);const Um={};k&2&&(Um.$$scope={dirty:k,ctx:o}),as.$set(Um);const Bm={};k&2&&(Bm.$$scope={dirty:k,ctx:o}),ls.$set(Bm);const Rm={};k&2&&(Rm.$$scope={dirty:k,ctx:o}),ds.$set(Rm);const Yt={};k&2&&(Yt.$$scope={dirty:k,ctx:o}),cs.$set(Yt);const Zt={};k&2&&(Zt.$$scope={dirty:k,ctx:o}),hs.$set(Zt);const Hm={};k&2&&(Hm.$$scope={dirty:k,ctx:o}),ms.$set(Hm);const Qm={};k&2&&(Qm.$$scope={dirty:k,ctx:o}),fs.$set(Qm);const Vm={};k&2&&(Vm.$$scope={dirty:k,ctx:o}),gs.$set(Vm);const vn={};k&2&&(vn.$$scope={dirty:k,ctx:o}),_s.$set(vn);const Km={};k&2&&(Km.$$scope={dirty:k,ctx:o}),bs.$set(Km);const Jm={};k&2&&(Jm.$$scope={dirty:k,ctx:o}),ks.$set(Jm);const td={};k&2&&(td.$$scope={dirty:k,ctx:o}),Ts.$set(td);const Gm={};k&2&&(Gm.$$scope={dirty:k,ctx:o}),ys.$set(Gm);const Xm={};k&2&&(Xm.$$scope={dirty:k,ctx:o}),ws.$set(Xm);const Ym={};k&2&&(Ym.$$scope={dirty:k,ctx:o}),$s.$set(Ym);const xe={};k&2&&(xe.$$scope={dirty:k,ctx:o}),Fs.$set(xe);const od={};k&2&&(od.$$scope={dirty:k,ctx:o}),xs.$set(od);const Zm={};k&2&&(Zm.$$scope={dirty:k,ctx:o}),Es.$set(Zm);const nd={};k&2&&(nd.$$scope={dirty:k,ctx:o}),zs.$set(nd);const ef={};k&2&&(ef.$$scope={dirty:k,ctx:o}),js.$set(ef);const tf={};k&2&&(tf.$$scope={dirty:k,ctx:o}),qs.$set(tf);const Tn={};k&2&&(Tn.$$scope={dirty:k,ctx:o}),Ps.$set(Tn);const of={};k&2&&(of.$$scope={dirty:k,ctx:o}),Ls.$set(of);const sd={};k&2&&(sd.$$scope={dirty:k,ctx:o}),Is.$set(sd);const oc={};k&2&&(oc.$$scope={dirty:k,ctx:o}),Os.$set(oc);const nf={};k&2&&(nf.$$scope={dirty:k,ctx:o}),Ns.$set(nf);const nc={};k&2&&(nc.$$scope={dirty:k,ctx:o}),Ds.$set(nc);const sf={};k&2&&(sf.$$scope={dirty:k,ctx:o}),Ws.$set(sf);const rd={};k&2&&(rd.$$scope={dirty:k,ctx:o}),Bs.$set(rd);const ad={};k&2&&(ad.$$scope={dirty:k,ctx:o}),Rs.$set(ad);const rf={};k&2&&(rf.$$scope={dirty:k,ctx:o}),Qs.$set(rf);const eo={};k&2&&(eo.$$scope={dirty:k,ctx:o}),Vs.$set(eo);const af={};k&2&&(af.$$scope={dirty:k,ctx:o}),Js.$set(af);const yn={};k&2&&(yn.$$scope={dirty:k,ctx:o}),Gs.$set(yn);const lf={};k&2&&(lf.$$scope={dirty:k,ctx:o}),Ys.$set(lf);const df={};k&2&&(df.$$scope={dirty:k,ctx:o}),Zs.$set(df);const cf={};k&2&&(cf.$$scope={dirty:k,ctx:o}),tr.$set(cf);const id={};k&2&&(id.$$scope={dirty:k,ctx:o}),or.$set(id);const pf={};k&2&&(pf.$$scope={dirty:k,ctx:o}),sr.$set(pf);const hf={};k&2&&(hf.$$scope={dirty:k,ctx:o}),rr.$set(hf)},i(o){du||($(l.$$.fragment,o),$(Z.$$.fragment,o),$(Mr.$$.fragment,o),$(zr.$$.fragment,o),$($n.$$.fragment,o),$(qr.$$.fragment,o),$(Pr.$$.fragment,o),$(Fn.$$.fragment,o),$(xn.$$.fragment,o),$(En.$$.fragment,o),$(Or.$$.fragment,o),$(Sr.$$.fragment,o),$(Wr.$$.fragment,o),$(zn.$$.fragment,o),$(Ur.$$.fragment,o),$(Br.$$.fragment,o),$(Rr.$$.fragment,o),$(Qr.$$.fragment,o),$(Kr.$$.fragment,o),$(qn.$$.fragment,o),$(Jr.$$.fragment,o),$(Gr.$$.fragment,o),$(Yr.$$.fragment,o),$(ea.$$.fragment,o),$(ta.$$.fragment,o),$(ra.$$.fragment,o),$(Ln.$$.fragment,o),$(In.$$.fragment,o),$(aa.$$.fragment,o),$(ia.$$.fragment,o),$(pa.$$.fragment,o),$(Nn.$$.fragment,o),$(Sn.$$.fragment,o),$(ha.$$.fragment,o),$(ma.$$.fragment,o),$(ba.$$.fragment,o),$(Wn.$$.fragment,o),$(Un.$$.fragment,o),$(Bn.$$.fragment,o),$(ka.$$.fragment,o),$(va.$$.fragment,o),$($a.$$.fragment,o),$(Hn.$$.fragment,o),$(Qn.$$.fragment,o),$(Vn.$$.fragment,o),$(Kn.$$.fragment,o),$(Jn.$$.fragment,o),$(Aa.$$.fragment,o),$(Fa.$$.fragment,o),$(za.$$.fragment,o),$(Xn.$$.fragment,o),$(Yn.$$.fragment,o),$(ja.$$.fragment,o),$(qa.$$.fragment,o),$(Ia.$$.fragment,o),$(es.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(Oa.$$.fragment,o),$(Na.$$.fragment,o),$(Ua.$$.fragment,o),$(ss.$$.fragment,o),$(rs.$$.fragment,o),$(as.$$.fragment,o),$(Ba.$$.fragment,o),$(Ra.$$.fragment,o),$(ls.$$.fragment,o),$(Ka.$$.fragment,o),$(ds.$$.fragment,o),$(cs.$$.fragment,o),$(Ja.$$.fragment,o),$(Ga.$$.fragment,o),$(hs.$$.fragment,o),$(ei.$$.fragment,o),$(ms.$$.fragment,o),$(fs.$$.fragment,o),$(ti.$$.fragment,o),$(oi.$$.fragment,o),$(gs.$$.fragment,o),$(ii.$$.fragment,o),$(_s.$$.fragment,o),$(bs.$$.fragment,o),$(ks.$$.fragment,o),$(li.$$.fragment,o),$(di.$$.fragment,o),$(Ts.$$.fragment,o),$(mi.$$.fragment,o),$(ys.$$.fragment,o),$(ws.$$.fragment,o),$($s.$$.fragment,o),$(fi.$$.fragment,o),$(ui.$$.fragment,o),$(Fs.$$.fragment,o),$(ki.$$.fragment,o),$(xs.$$.fragment,o),$(Es.$$.fragment,o),$(vi.$$.fragment,o),$(Ti.$$.fragment,o),$(zs.$$.fragment,o),$(Ai.$$.fragment,o),$(js.$$.fragment,o),$(qs.$$.fragment,o),$(Ps.$$.fragment,o),$(Fi.$$.fragment,o),$(xi.$$.fragment,o),$(Ls.$$.fragment,o),$(ji.$$.fragment,o),$(Is.$$.fragment,o),$(Os.$$.fragment,o),$(Ns.$$.fragment,o),$(qi.$$.fragment,o),$(Pi.$$.fragment,o),$(Wi.$$.fragment,o),$(Ds.$$.fragment,o),$(Ws.$$.fragment,o),$(Ui.$$.fragment,o),$(Bi.$$.fragment,o),$(Xi.$$.fragment,o),$(Bs.$$.fragment,o),$(Rs.$$.fragment,o),$(Yi.$$.fragment,o),$(Zi.$$.fragment,o),$(ll.$$.fragment,o),$(Qs.$$.fragment,o),$(Vs.$$.fragment,o),$(dl.$$.fragment,o),$(cl.$$.fragment,o),$(bl.$$.fragment,o),$(Js.$$.fragment,o),$(Gs.$$.fragment,o),$(kl.$$.fragment,o),$(vl.$$.fragment,o),$(El.$$.fragment,o),$(Ys.$$.fragment,o),$(Zs.$$.fragment,o),$(Ml.$$.fragment,o),$(zl.$$.fragment,o),$(Nl.$$.fragment,o),$(tr.$$.fragment,o),$(or.$$.fragment,o),$(Sl.$$.fragment,o),$(Dl.$$.fragment,o),$(Kl.$$.fragment,o),$(sr.$$.fragment,o),$(rr.$$.fragment,o),du=!0)},o(o){A(l.$$.fragment,o),A(Z.$$.fragment,o),A(Mr.$$.fragment,o),A(zr.$$.fragment,o),A($n.$$.fragment,o),A(qr.$$.fragment,o),A(Pr.$$.fragment,o),A(Fn.$$.fragment,o),A(xn.$$.fragment,o),A(En.$$.fragment,o),A(Or.$$.fragment,o),A(Sr.$$.fragment,o),A(Wr.$$.fragment,o),A(zn.$$.fragment,o),A(Ur.$$.fragment,o),A(Br.$$.fragment,o),A(Rr.$$.fragment,o),A(Qr.$$.fragment,o),A(Kr.$$.fragment,o),A(qn.$$.fragment,o),A(Jr.$$.fragment,o),A(Gr.$$.fragment,o),A(Yr.$$.fragment,o),A(ea.$$.fragment,o),A(ta.$$.fragment,o),A(ra.$$.fragment,o),A(Ln.$$.fragment,o),A(In.$$.fragment,o),A(aa.$$.fragment,o),A(ia.$$.fragment,o),A(pa.$$.fragment,o),A(Nn.$$.fragment,o),A(Sn.$$.fragment,o),A(ha.$$.fragment,o),A(ma.$$.fragment,o),A(ba.$$.fragment,o),A(Wn.$$.fragment,o),A(Un.$$.fragment,o),A(Bn.$$.fragment,o),A(ka.$$.fragment,o),A(va.$$.fragment,o),A($a.$$.fragment,o),A(Hn.$$.fragment,o),A(Qn.$$.fragment,o),A(Vn.$$.fragment,o),A(Kn.$$.fragment,o),A(Jn.$$.fragment,o),A(Aa.$$.fragment,o),A(Fa.$$.fragment,o),A(za.$$.fragment,o),A(Xn.$$.fragment,o),A(Yn.$$.fragment,o),A(ja.$$.fragment,o),A(qa.$$.fragment,o),A(Ia.$$.fragment,o),A(es.$$.fragment,o),A(ts.$$.fragment,o),A(os.$$.fragment,o),A(Oa.$$.fragment,o),A(Na.$$.fragment,o),A(Ua.$$.fragment,o),A(ss.$$.fragment,o),A(rs.$$.fragment,o),A(as.$$.fragment,o),A(Ba.$$.fragment,o),A(Ra.$$.fragment,o),A(ls.$$.fragment,o),A(Ka.$$.fragment,o),A(ds.$$.fragment,o),A(cs.$$.fragment,o),A(Ja.$$.fragment,o),A(Ga.$$.fragment,o),A(hs.$$.fragment,o),A(ei.$$.fragment,o),A(ms.$$.fragment,o),A(fs.$$.fragment,o),A(ti.$$.fragment,o),A(oi.$$.fragment,o),A(gs.$$.fragment,o),A(ii.$$.fragment,o),A(_s.$$.fragment,o),A(bs.$$.fragment,o),A(ks.$$.fragment,o),A(li.$$.fragment,o),A(di.$$.fragment,o),A(Ts.$$.fragment,o),A(mi.$$.fragment,o),A(ys.$$.fragment,o),A(ws.$$.fragment,o),A($s.$$.fragment,o),A(fi.$$.fragment,o),A(ui.$$.fragment,o),A(Fs.$$.fragment,o),A(ki.$$.fragment,o),A(xs.$$.fragment,o),A(Es.$$.fragment,o),A(vi.$$.fragment,o),A(Ti.$$.fragment,o),A(zs.$$.fragment,o),A(Ai.$$.fragment,o),A(js.$$.fragment,o),A(qs.$$.fragment,o),A(Ps.$$.fragment,o),A(Fi.$$.fragment,o),A(xi.$$.fragment,o),A(Ls.$$.fragment,o),A(ji.$$.fragment,o),A(Is.$$.fragment,o),A(Os.$$.fragment,o),A(Ns.$$.fragment,o),A(qi.$$.fragment,o),A(Pi.$$.fragment,o),A(Wi.$$.fragment,o),A(Ds.$$.fragment,o),A(Ws.$$.fragment,o),A(Ui.$$.fragment,o),A(Bi.$$.fragment,o),A(Xi.$$.fragment,o),A(Bs.$$.fragment,o),A(Rs.$$.fragment,o),A(Yi.$$.fragment,o),A(Zi.$$.fragment,o),A(ll.$$.fragment,o),A(Qs.$$.fragment,o),A(Vs.$$.fragment,o),A(dl.$$.fragment,o),A(cl.$$.fragment,o),A(bl.$$.fragment,o),A(Js.$$.fragment,o),A(Gs.$$.fragment,o),A(kl.$$.fragment,o),A(vl.$$.fragment,o),A(El.$$.fragment,o),A(Ys.$$.fragment,o),A(Zs.$$.fragment,o),A(Ml.$$.fragment,o),A(zl.$$.fragment,o),A(Nl.$$.fragment,o),A(tr.$$.fragment,o),A(or.$$.fragment,o),A(Sl.$$.fragment,o),A(Dl.$$.fragment,o),A(Kl.$$.fragment,o),A(sr.$$.fragment,o),A(rr.$$.fragment,o),du=!1},d(o){t(d),o&&t(g),o&&t(c),F(l),o&&t(L),o&&t(M),F(Z),o&&t(ce),o&&t(X),o&&t(C),o&&t(se),o&&t(pe),o&&t(P),o&&t(J),o&&t(ae),o&&t(he),o&&t(ie),o&&t(me),o&&t(B),o&&t(Fe),o&&t(I),o&&t(fe),o&&t(Te),F(Mr),o&&t(mf),o&&t(bt),F(zr),F($n),o&&t(ff),o&&t(ko),F(qr),o&&t(uf),o&&t($e),F(Pr),F(Fn),F(xn),F(En),F(Or),F(Sr),F(Wr),F(zn),F(Ur),o&&t(gf),o&&t(To),F(Br),o&&t(_f),o&&t(kt),F(Rr),F(Qr),F(Kr),F(qn),o&&t(bf),o&&t(yo),F(Jr),o&&t(kf),o&&t(wo),F(Gr),o&&t(vf),o&&t($o),F(Yr),o&&t(Tf),o&&t(Ao),F(ea),o&&t(yf),o&&t(Ge),F(ta),F(ra),F(Ln),F(In),o&&t(wf),o&&t(xo),F(aa),o&&t($f),o&&t(Xe),F(ia),F(pa),F(Nn),F(Sn),o&&t(Af),o&&t(zo),F(ha),o&&t(Ff),o&&t(Ye),F(ma),F(ba),F(Wn),F(Un),F(Bn),o&&t(xf),o&&t(qo),F(ka),o&&t(Ef),o&&t(Ze),F(va),F($a),F(Hn),F(Qn),F(Vn),F(Kn),F(Jn),o&&t(Mf),o&&t(Co),F(Aa),o&&t(zf),o&&t(et),F(Fa),F(za),F(Xn),F(Yn),o&&t(jf),o&&t(Io),F(ja),o&&t(qf),o&&t(tt),F(qa),F(Ia),F(es),F(ts),F(os),o&&t(Pf),o&&t(No),F(Oa),o&&t(Cf),o&&t(ot),F(Na),F(Ua),F(ss),F(rs),F(as),o&&t(Lf),o&&t(Wo),F(Ba),o&&t(If),o&&t(Be),F(Ra),F(ls),F(Ka),F(ds),F(cs),o&&t(Of),o&&t(Bo),F(Ja),o&&t(Nf),o&&t(Re),F(Ga),F(hs),F(ei),F(ms),F(fs),o&&t(Sf),o&&t(Qo),F(ti),o&&t(Df),o&&t(He),F(oi),F(gs),F(ii),F(_s),F(bs),F(ks),o&&t(Wf),o&&t(Ko),F(li),o&&t(Uf),o&&t(Qe),F(di),F(Ts),F(mi),F(ys),F(ws),F($s),o&&t(Bf),o&&t(Go),F(fi),o&&t(Rf),o&&t(Ve),F(ui),F(Fs),F(ki),F(xs),F(Es),o&&t(Hf),o&&t(Yo),F(vi),o&&t(Qf),o&&t(Ke),F(Ti),F(zs),F(Ai),F(js),F(qs),F(Ps),o&&t(Vf),o&&t(en),F(Fi),o&&t(Kf),o&&t(Je),F(xi),F(Ls),F(ji),F(Is),F(Os),F(Ns),o&&t(Jf),o&&t(nn),F(qi),o&&t(Gf),o&&t(Le),F(Pi),F(Wi),F(Ds),F(Ws),o&&t(Xf),o&&t(rn),F(Ui),o&&t(Yf),o&&t(Ie),F(Bi),F(Xi),F(Bs),F(Rs),o&&t(Zf),o&&t(dn),F(Yi),o&&t(eu),o&&t(Oe),F(Zi),F(ll),F(Qs),F(Vs),o&&t(tu),o&&t(pn),F(dl),o&&t(ou),o&&t(Ne),F(cl),F(bl),F(Js),F(Gs),o&&t(nu),o&&t(mn),F(kl),o&&t(su),o&&t(Se),F(vl),F(El),F(Ys),F(Zs),o&&t(ru),o&&t(un),F(Ml),o&&t(au),o&&t(De),F(zl),F(Nl),F(tr),F(or),o&&t(iu),o&&t(_n),F(Sl),o&&t(lu),o&&t(We),F(Dl),F(Kl),F(sr),F(rr)}}}const qM={local:"albert",sections:[{local:"overview",title:"Overview"},{local:"transformers.AlbertConfig",title:"AlbertConfig"},{local:"transformers.AlbertTokenizer",title:"AlbertTokenizer"},{local:"transformers.AlbertTokenizerFast",title:"AlbertTokenizerFast"},{local:"transformers.models.albert.modeling_albert.AlbertForPreTrainingOutput",title:"Albert specific outputs"},{local:"transformers.AlbertModel",title:"AlbertModel"},{local:"transformers.AlbertForPreTraining",title:"AlbertForPreTraining"},{local:"transformers.AlbertForMaskedLM",title:"AlbertForMaskedLM"},{local:"transformers.AlbertForSequenceClassification",title:"AlbertForSequenceClassification"},{local:"transformers.AlbertForMultipleChoice",title:"AlbertForMultipleChoice"},{local:"transformers.AlbertForTokenClassification",title:"AlbertForTokenClassification"},{local:"transformers.AlbertForQuestionAnswering",title:"AlbertForQuestionAnswering"},{local:"transformers.TFAlbertModel",title:"TFAlbertModel"},{local:"transformers.TFAlbertForPreTraining",title:"TFAlbertForPreTraining"},{local:"transformers.TFAlbertForMaskedLM",title:"TFAlbertForMaskedLM"},{local:"transformers.TFAlbertForSequenceClassification",title:"TFAlbertForSequenceClassification"},{local:"transformers.TFAlbertForMultipleChoice",title:"TFAlbertForMultipleChoice"},{local:"transformers.TFAlbertForTokenClassification",title:"TFAlbertForTokenClassification"},{local:"transformers.TFAlbertForQuestionAnswering",title:"TFAlbertForQuestionAnswering"},{local:"transformers.FlaxAlbertModel",title:"FlaxAlbertModel"},{local:"transformers.FlaxAlbertForPreTraining",title:"FlaxAlbertForPreTraining"},{local:"transformers.FlaxAlbertForMaskedLM",title:"FlaxAlbertForMaskedLM"},{local:"transformers.FlaxAlbertForSequenceClassification",title:"FlaxAlbertForSequenceClassification"},{local:"transformers.FlaxAlbertForMultipleChoice",title:"FlaxAlbertForMultipleChoice"},{local:"transformers.FlaxAlbertForTokenClassification",title:"FlaxAlbertForTokenClassification"},{local:"transformers.FlaxAlbertForQuestionAnswering",title:"FlaxAlbertForQuestionAnswering"}],title:"ALBERT"};function PM(x){return _3(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class DM extends m3{constructor(d){super();f3(this,d,PM,jM,u3,{})}}export{DM as default,qM as metadata};
