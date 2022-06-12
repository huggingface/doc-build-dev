import{S as Qi,i as Xi,s as el,e as r,k as u,w as k,t as a,M as tl,c as d,d as o,m as h,a as i,x as v,h as s,b as g,G as e,g as T,y,q as w,o as $,B as x,v as ol,L as me}from"../../chunks/vendor-hf-doc-builder.js";import{T as Tn}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as X}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Je}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as he}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function nl(L){let l,b,m,p,_;return{c(){l=r("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=d(n,"P",{});var c=i(l);b=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=d(c,"CODE",{});var z=i(m);p=s(z,"Module"),z.forEach(o),_=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){T(n,l,c),e(l,b),e(l,m),e(m,p),e(l,_)},d(n){n&&o(l)}}}function al(L){let l,b,m,p,_;return p=new X({props:{code:`from transformers import T5Tokenizer, LongT5Model

tokenizer = T5Tokenizer.from_pretrained("Stancld/LongT5-Local-Base")
model = LongT5Model.from_pretrained("Stancld/LongT5-Local-Base")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1

# forward pass
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, LongT5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;Stancld/LongT5-Local-Base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongT5Model.from_pretrained(<span class="hljs-string">&quot;Stancld/LongT5-Local-Base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=r("p"),b=a("Example:"),m=u(),k(p.$$.fragment)},l(n){l=d(n,"P",{});var c=i(l);b=s(c,"Example:"),c.forEach(o),m=h(n),v(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,b),T(n,m,c),y(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function sl(L){let l,b,m,p,_;return{c(){l=r("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=d(n,"P",{});var c=i(l);b=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=d(c,"CODE",{});var z=i(m);p=s(z,"Module"),z.forEach(o),_=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){T(n,l,c),e(l,b),e(l,m),e(m,p),e(l,_)},d(n){n&&o(l)}}}function rl(L){let l,b,m,p,_;return p=new X({props:{code:`from transformers import T5Tokenizer, LongT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("Stancld/LongT5-Local-Base")
model = LongT5ForConditionalGeneration.from_pretrained("Stancld/LongT5-Local-Base")

# training
input_ids = tokenizer("The <extra_id_0> walks in <extra_id_1> park", return_tensors="pt").input_ids
labels = tokenizer("<extra_id_0> cute dog <extra_id_1> the <extra_id_2>", return_tensors="pt").input_ids
outputs = model(input_ids=input_ids, labels=labels)
loss = outputs.loss
logits = outputs.logits

# inference
input_ids = tokenizer(
    "summarize: studies have shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
outputs = model.generate(input_ids)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
# studies have shown that owning a dog is good for you.`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, LongT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;Stancld/LongT5-Local-Base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;Stancld/LongT5-Local-Base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;summarize: studies have shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you.</span>`}}),{c(){l=r("p"),b=a("Examples:"),m=u(),k(p.$$.fragment)},l(n){l=d(n,"P",{});var c=i(l);b=s(c,"Examples:"),c.forEach(o),m=h(n),v(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,b),T(n,m,c),y(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function dl(L){let l,b,m,p,_;return{c(){l=r("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=d(n,"P",{});var c=i(l);b=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=d(c,"CODE",{});var z=i(m);p=s(z,"Module"),z.forEach(o),_=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){T(n,l,c),e(l,b),e(l,m),e(m,p),e(l,_)},d(n){n&&o(l)}}}function il(L){let l,b,m,p,_;return p=new X({props:{code:`from transformers import T5Tokenizer, LongT5EncoderModel

tokenizer = T5Tokenizer.from_pretrained("Stancld/LongT5-Local-Base")
model = LongT5EncoderModel.from_pretrained("Stancld/LongT5-Local-Base")
input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
outputs = model(input_ids=input_ids)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, LongT5EncoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;Stancld/LongT5-Local-Base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongT5EncoderModel.from_pretrained(<span class="hljs-string">&quot;Stancld/LongT5-Local-Base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=r("p"),b=a("Example:"),m=u(),k(p.$$.fragment)},l(n){l=d(n,"P",{});var c=i(l);b=s(c,"Example:"),c.forEach(o),m=h(n),v(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,b),T(n,m,c),y(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function ll(L){let l,b,m,p,_;return{c(){l=r("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=d(n,"P",{});var c=i(l);b=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=d(c,"CODE",{});var z=i(m);p=s(z,"Module"),z.forEach(o),_=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){T(n,l,c),e(l,b),e(l,m),e(m,p),e(l,_)},d(n){n&&o(l)}}}function cl(L){let l,b,m,p,_;return p=new X({props:{code:`from transformers import T5Tokenizer, FlaxLongT5Model

tokenizer = T5Tokenizer.from_pretrained("t5-base")
model = FlaxLongT5Model.from_pretrained("Stancld/LongT5-Local-Base")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="np"
).input_ids
decoder_input_ids = tokenizer("Studies show that", return_tensors="np").input_ids

# forward pass
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxLongT5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxLongT5Model.from_pretrained(<span class="hljs-string">&quot;Stancld/LongT5-Local-Base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>
<span class="hljs-meta">... </span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=r("p"),b=a("Example:"),m=u(),k(p.$$.fragment)},l(n){l=d(n,"P",{});var c=i(l);b=s(c,"Example:"),c.forEach(o),m=h(n),v(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,b),T(n,m,c),y(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function pl(L){let l,b,m,p,_;return p=new X({props:{code:`from transformers import T5Tokenizer, FlaxLongT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-base")
model = FlaxLongT5ForConditionalGeneration.from_pretrained("Stancld/LongT5-Local-Base")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxLongT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxLongT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;Stancld/LongT5-Local-Base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=r("p"),b=a("Example:"),m=u(),k(p.$$.fragment)},l(n){l=d(n,"P",{});var c=i(l);b=s(c,"Example:"),c.forEach(o),m=h(n),v(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,b),T(n,m,c),y(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function ul(L){let l,b,m,p,_;return p=new X({props:{code:`from transformers import T5Tokenizer, FlaxLongT5ForConditionalGeneration
import jax.numpy as jnp

tokenizer = T5Tokenizer.from_pretrained("t5-base")
model = FlaxLongT5ForConditionalGeneration.from_pretrained("Stancld/LongT5-Local-Base")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxLongT5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxLongT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;Stancld/LongT5-Local-Base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=r("p"),b=a("Example:"),m=u(),k(p.$$.fragment)},l(n){l=d(n,"P",{});var c=i(l);b=s(c,"Example:"),c.forEach(o),m=h(n),v(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,b),T(n,m,c),y(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function hl(L){let l,b,m,p,_;return{c(){l=r("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=d(n,"P",{});var c=i(l);b=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=d(c,"CODE",{});var z=i(m);p=s(z,"Module"),z.forEach(o),_=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){T(n,l,c),e(l,b),e(l,m),e(m,p),e(l,_)},d(n){n&&o(l)}}}function ml(L){let l,b,m,p,_;return p=new X({props:{code:`from transformers import T5Tokenizer, FlaxLongT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-base")
model = FlaxLongT5ForConditionalGeneration.from_pretrained("Stancld/LongT5-Local-Base")

ARTICLE_TO_SUMMARIZE = "summarize: My friends are cool but they eat too many carbs."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], return_tensors="np")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"]).sequences
print(tokenizer.decode(summary_ids[0], skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxLongT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxLongT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;Stancld/LongT5-Local-Base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;summarize: My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=r("p"),b=a("Example:"),m=u(),k(p.$$.fragment)},l(n){l=d(n,"P",{});var c=i(l);b=s(c,"Example:"),c.forEach(o),m=h(n),v(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,b),T(n,m,c),y(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function gl(L){let l,b,m,p,_;return p=new X({props:{code:`from transformers import T5Tokenizer, FlaxLongT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-base")
model = FlaxLongT5ForConditionalGeneration.from_pretrained("Stancld/LongT5-Local-Base")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxLongT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxLongT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;Stancld/LongT5-Local-Base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=r("p"),b=a("Example:"),m=u(),k(p.$$.fragment)},l(n){l=d(n,"P",{});var c=i(l);b=s(c,"Example:"),c.forEach(o),m=h(n),v(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,b),T(n,m,c),y(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function fl(L){let l,b,m,p,_;return p=new X({props:{code:`from transformers import T5Tokenizer, FlaxLongT5ForConditionalGeneration
import jax.numpy as jnp

tokenizer = T5Tokenizer.from_pretrained("t5-base")
model = FlaxLongT5ForConditionalGeneration.from_pretrained("Stancld/LongT5-Local-Base")

text = "summarize: My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxLongT5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxLongT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;Stancld/LongT5-Local-Base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;summarize: My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=r("p"),b=a("Example:"),m=u(),k(p.$$.fragment)},l(n){l=d(n,"P",{});var c=i(l);b=s(c,"Example:"),c.forEach(o),m=h(n),v(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,b),T(n,m,c),y(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function _l(L){let l,b,m,p,_,n,c,z,la,bn,ee,ge,fo,Ke,ca,_o,pa,kn,fe,ua,Ze,ha,ma,vn,Vt,ga,yn,Yt,To,fa,wn,Rt,_a,$n,E,O,Jt,Ta,ba,Kt,ka,va,bo,ya,wa,ko,$a,xa,vo,La,za,yo,qa,ja,Fa,Qe,Ma,wo,Ca,Ea,Oa,Xe,Sa,$o,Pa,Ga,Na,j,Aa,xo,Ia,Da,Lo,Ba,Wa,zo,Ua,Ha,qo,Va,Ya,jo,Ra,Ja,Fo,Ka,Za,Qa,q,Mo,Xa,es,Co,ts,os,Eo,ns,as,Oo,ss,rs,So,ds,is,Po,ls,cs,Go,ps,us,hs,et,ms,tt,gs,fs,xn,ot,Ln,Q,_s,nt,Ts,bs,at,ks,vs,zn,te,_e,No,st,ys,Ao,ws,qn,K,rt,$s,Z,xs,Zt,Ls,zs,Qt,qs,js,dt,Fs,Ms,Cs,oe,Es,Xt,Os,Ss,eo,Ps,Gs,jn,ne,Te,Io,it,Ns,Do,As,Fn,F,lt,Is,Bo,Ds,Bs,ct,Ws,pt,Us,Hs,Vs,ut,Ys,to,Rs,Js,Ks,ht,Zs,mt,Qs,Xs,er,D,gt,tr,ae,or,oo,nr,ar,Wo,sr,rr,dr,be,ir,ke,Mn,se,ve,Uo,ft,lr,Ho,cr,Cn,M,_t,pr,Tt,ur,Vo,hr,mr,gr,bt,fr,kt,_r,Tr,br,vt,kr,no,vr,yr,wr,yt,$r,wt,xr,Lr,zr,B,$t,qr,re,jr,ao,Fr,Mr,Yo,Cr,Er,Or,ye,Sr,we,En,de,$e,Ro,xt,Pr,Jo,Gr,On,C,Lt,Nr,Ko,Ar,Ir,zt,Dr,qt,Br,Wr,Ur,jt,Hr,so,Vr,Yr,Rr,Ft,Jr,Mt,Kr,Zr,Qr,W,Ct,Xr,ie,ed,ro,td,od,Zo,nd,ad,sd,xe,rd,Le,Sn,le,ze,Qo,Et,dd,Xo,id,Pn,N,Ot,ld,U,St,cd,ce,pd,en,ud,hd,tn,md,gd,fd,qe,_d,je,Td,Fe,Pt,bd,Me,kd,Ce,Gt,vd,Ee,Gn,pe,Oe,on,Nt,yd,nn,wd,Nn,A,At,$d,H,It,xd,ue,Ld,an,zd,qd,sn,jd,Fd,Md,Se,Cd,Pe,Ed,Ge,Dt,Od,Ne,Sd,Ae,Bt,Pd,Ie,An;return n=new Je({}),Ke=new Je({}),ot=new X({props:{code:`import evaluate
from datasets import load_dataset
from transformers import AutoTokenizer, LongT5ForConditionalGeneration

dataset = load_dataset("scientific_papers", "pubmed", split="validation")
model = (
    LongT5ForConditionalGeneration.from_pretrained("Stancld/longt5-tglobal-large-16384-pubmed-3k_steps")
    .to("cuda")
    .half()
)
tokenizer = AutoTokenizer.from_pretrained("Stancld/longt5-tglobal-large-16384-pubmed-3k_steps")


def generate_answers(batch):
    inputs_dict = tokenizer(
        batch["article"], max_length=16384, padding="max_length", truncation=True, return_tensors="pt"
    )
    input_ids = inputs_dict.input_ids.to("cuda")
    attention_mask = inputs_dict.attention_mask.to("cuda")
    output_ids = model.generate(input_ids, attention_mask=attention_mask, max_length=512, num_beams=2)
    batch["predicted_abstract"] = tokenizer.batch_decode(output_ids, skip_special_tokens=True)
    return batch


result = dataset.map(generate_answer, batched=True, batch_size=2)
rouge = evaluate.load("rouge")
rouge.compute(predictions=result["predicted_abstract"], references=result["abstract"])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> evaluate
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, LongT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;scientific_papers&quot;</span>, <span class="hljs-string">&quot;pubmed&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = (
<span class="hljs-meta">... </span>    LongT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;Stancld/longt5-tglobal-large-16384-pubmed-3k_steps&quot;</span>)
<span class="hljs-meta">... </span>    .to(<span class="hljs-string">&quot;cuda&quot;</span>)
<span class="hljs-meta">... </span>    .half()
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Stancld/longt5-tglobal-large-16384-pubmed-3k_steps&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">generate_answers</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    inputs_dict = tokenizer(
<span class="hljs-meta">... </span>        batch[<span class="hljs-string">&quot;article&quot;</span>], max_length=<span class="hljs-number">16384</span>, padding=<span class="hljs-string">&quot;max_length&quot;</span>, truncation=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>    input_ids = inputs_dict.input_ids.to(<span class="hljs-string">&quot;cuda&quot;</span>)
<span class="hljs-meta">... </span>    attention_mask = inputs_dict.attention_mask.to(<span class="hljs-string">&quot;cuda&quot;</span>)
<span class="hljs-meta">... </span>    output_ids = model.generate(input_ids, attention_mask=attention_mask, max_length=<span class="hljs-number">512</span>, num_beams=<span class="hljs-number">2</span>)
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;predicted_abstract&quot;</span>] = tokenizer.batch_decode(output_ids, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>result = dataset.<span class="hljs-built_in">map</span>(generate_answer, batched=<span class="hljs-literal">True</span>, batch_size=<span class="hljs-number">2</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>rouge = evaluate.load(<span class="hljs-string">&quot;rouge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>rouge.compute(predictions=result[<span class="hljs-string">&quot;predicted_abstract&quot;</span>], references=result[<span class="hljs-string">&quot;abstract&quot;</span>])`}}),st=new Je({}),rt=new P({props:{name:"class transformers.LongT5Config",anchor:"transformers.LongT5Config",parameters:[{name:"vocab_size",val:" = 32128"},{name:"d_model",val:" = 512"},{name:"d_kv",val:" = 64"},{name:"d_ff",val:" = 2048"},{name:"num_layers",val:" = 6"},{name:"num_decoder_layers",val:" = None"},{name:"num_heads",val:" = 8"},{name:"local_radius",val:" = 127"},{name:"global_block_size",val:" = 16"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"relative_attention_max_distance",val:" = 128"},{name:"dropout_rate",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_factor",val:" = 1.0"},{name:"feed_forward_proj",val:" = 'relu'"},{name:"is_encoder_decoder",val:" = True"},{name:"encoder_attention_type",val:" = 'local'"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LongT5Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32128) &#x2014;
Vocabulary size of the LongT5 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16792/en/model_doc/longt5#transformers.LongT5Model">LongT5Model</a>.`,name:"vocab_size"},{anchor:"transformers.LongT5Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of the encoder layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.LongT5Config.d_kv",description:`<strong>d_kv</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Size of the key, query, value projections per attention head. <code>d_kv</code> has to be equal to <code>d_model // num_heads</code>.`,name:"d_kv"},{anchor:"transformers.LongT5Config.d_ff",description:`<strong>d_ff</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Size of the intermediate feed forward layer in each <code>LongT5Block</code>.`,name:"d_ff"},{anchor:"transformers.LongT5Config.num_layers",description:`<strong>num_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_layers"},{anchor:"transformers.LongT5Config.num_decoder_layers",description:`<strong>num_decoder_layers</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Number of hidden layers in the Transformer decoder. Will use the same value as <code>num_layers</code> if not set.`,name:"num_decoder_layers"},{anchor:"transformers.LongT5Config.num_heads",description:`<strong>num_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_heads"},{anchor:"transformers.LongT5Config.local_radius",description:`<strong>local_radius</strong> (<code>int</code>, <em>optional</em>, defaults to 127) &#x2014;
Number of tokens to the left/right for each token to locally self-attend in a local attention mechanism.`,name:"local_radius"},{anchor:"transformers.LongT5Config.global_block_size",description:`<strong>global_block_size</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Lenght of blocks an input sequence is divided into for a global token representation. Used only for
<code>encoder_attention_type = &quot;transient-global&quot;</code>.`,name:"global_block_size"},{anchor:"transformers.LongT5Config.relative_attention_num_buckets",description:`<strong>relative_attention_num_buckets</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of buckets to use for each attention layer.`,name:"relative_attention_num_buckets"},{anchor:"transformers.LongT5Config.relative_attention_max_distance",description:`<strong>relative_attention_max_distance</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The maximum distance of the longer sequences for the bucket separation.`,name:"relative_attention_max_distance"},{anchor:"transformers.LongT5Config.dropout_rate",description:`<strong>dropout_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The ratio for all dropout layers.`,name:"dropout_rate"},{anchor:"transformers.LongT5Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-6) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LongT5Config.initializer_factor",description:`<strong>initializer_factor</strong> (<code>float</code>, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"},{anchor:"transformers.LongT5Config.feed_forward_proj",description:`<strong>feed_forward_proj</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
Type of feed forward layer to be used. Should be one of <code>&quot;relu&quot;</code> or <code>&quot;gated-gelu&quot;</code>. LongT5v1.1 uses the
<code>&quot;gated-gelu&quot;</code> feed forward projection. Original LongT5 implementation uses <code>&quot;gated-gelu&quot;</code>.`,name:"feed_forward_proj"},{anchor:"transformers.LongT5Config.encoder_attention_type",description:`<strong>encoder_attention_type</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;local&quot;</code>) &#x2014;
Type of encoder attention to be used. Should be one of <code>&quot;local&quot;</code> or <code>&quot;transient-global&quot;</code>, which are
supported by LongT5 implementation.`,name:"encoder_attention_type"},{anchor:"transformers.LongT5Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/configuration_longt5.py#L33"}}),it=new Je({}),lt=new P({props:{name:"class transformers.LongT5Model",anchor:"transformers.LongT5Model",parameters:[{name:"config",val:": LongT5Config"}],parametersDescription:[{anchor:"transformers.LongT5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16792/en/model_doc/longt5#transformers.LongT5Config">LongT5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16792/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_longt5.py#L1722"}}),gt=new P({props:{name:"forward",anchor:"transformers.LongT5Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongT5Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. LongT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16792/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16792/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16792/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./longt5#training">LONGT5
Training</a>.`,name:"input_ids"},{anchor:"transformers.LongT5Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongT5Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16792/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16792/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16792/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>LONGT5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./longt5#training">LONGT5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.LongT5Model.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.LongT5Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongT5Model.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongT5Model.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LongT5Model.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LongT5Model.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.LongT5Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongT5Model.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LongT5Model.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LongT5Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongT5Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongT5Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16792/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_longt5.py#L1772",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16792/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16792/en/model_doc/longt5#transformers.LongT5Config"
>LongT5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16792/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),be=new Tn({props:{$$slots:{default:[nl]},$$scope:{ctx:L}}}),ke=new he({props:{anchor:"transformers.LongT5Model.forward.example",$$slots:{default:[al]},$$scope:{ctx:L}}}),ft=new Je({}),_t=new P({props:{name:"class transformers.LongT5ForConditionalGeneration",anchor:"transformers.LongT5ForConditionalGeneration",parameters:[{name:"config",val:": LongT5Config"}],parametersDescription:[{anchor:"transformers.LongT5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16792/en/model_doc/longt5#transformers.LongT5Config">LongT5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16792/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_longt5.py#L1873"}}),$t=new P({props:{name:"forward",anchor:"transformers.LongT5ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongT5ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. LongT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16792/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16792/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16792/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./longt5#training">LONGT5
Training</a>.`,name:"input_ids"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16792/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16792/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16792/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>LONGT5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./longt5#training">LONGT5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16792/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to <code>-100</code> are ignored (masked), the loss is only computed for
labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_longt5.py#L1926",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16792/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16792/en/model_doc/longt5#transformers.LongT5Config"
>LongT5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16792/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ye=new Tn({props:{$$slots:{default:[sl]},$$scope:{ctx:L}}}),we=new he({props:{anchor:"transformers.LongT5ForConditionalGeneration.forward.example",$$slots:{default:[rl]},$$scope:{ctx:L}}}),xt=new Je({}),Lt=new P({props:{name:"class transformers.LongT5EncoderModel",anchor:"transformers.LongT5EncoderModel",parameters:[{name:"config",val:": LongT5Config"}],parametersDescription:[{anchor:"transformers.LongT5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16792/en/model_doc/longt5#transformers.LongT5Config">LongT5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16792/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_longt5.py#L2119"}}),Ct=new P({props:{name:"forward",anchor:"transformers.LongT5EncoderModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongT5EncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. LongT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16792/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16792/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16792/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./longt5#training">LONGT5
Training</a>.`,name:"input_ids"},{anchor:"transformers.LongT5EncoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongT5EncoderModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongT5EncoderModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongT5EncoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongT5EncoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongT5EncoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16792/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_longt5.py#L2154",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16792/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16792/en/model_doc/longt5#transformers.LongT5Config"
>LongT5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/pr_16792/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xe=new Tn({props:{$$slots:{default:[dl]},$$scope:{ctx:L}}}),Le=new he({props:{anchor:"transformers.LongT5EncoderModel.forward.example",$$slots:{default:[il]},$$scope:{ctx:L}}}),Et=new Je({}),Ot=new P({props:{name:"class transformers.FlaxLongT5Model",anchor:"transformers.FlaxLongT5Model",parameters:[{name:"config",val:": LongT5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_flax_longt5.py#L2066"}}),St=new P({props:{name:"__call__",anchor:"transformers.FlaxLongT5Model.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxLongT5Model.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. LongT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16792/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16792/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16792/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./longt5#training">LONGT5
Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxLongT5Model.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxLongT5Model.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16792/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16792/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16792/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>LONGT5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./longt5#training">LONGT5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxLongT5Model.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxLongT5Model.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxLongT5Model.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_flax_longt5.py#L1694",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16792/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16792/en/model_doc/longt5#transformers.LongT5Config"
>LongT5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16792/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qe=new Tn({props:{$$slots:{default:[ll]},$$scope:{ctx:L}}}),je=new he({props:{anchor:"transformers.FlaxLongT5Model.__call__.example",$$slots:{default:[cl]},$$scope:{ctx:L}}}),Pt=new P({props:{name:"encode",anchor:"transformers.FlaxLongT5Model.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxLongT5Model.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. LongT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16792/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16792/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16792/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./longt5#training">LONGT5
Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxLongT5Model.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxLongT5Model.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxLongT5Model.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxLongT5Model.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16792/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_flax_longt5.py#L1780",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16792/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.longt5.configuration_longt5.LongT5Config'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16792/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Me=new he({props:{anchor:"transformers.FlaxLongT5Model.encode.example",$$slots:{default:[pl]},$$scope:{ctx:L}}}),Gt=new P({props:{name:"decode",anchor:"transformers.FlaxLongT5Model.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxLongT5Model.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16792/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16792/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16792/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For training, <code>decoder_input_ids</code> should be provided.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxLongT5Model.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxLongT5Model.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxLongT5Model.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxLongT5Model.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxLongT5Model.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxLongT5Model.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxLongT5Model.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16792/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_flax_longt5.py#L1838",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16792/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.longt5.configuration_longt5.LongT5Config'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16792/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ee=new he({props:{anchor:"transformers.FlaxLongT5Model.decode.example",$$slots:{default:[ul]},$$scope:{ctx:L}}}),Nt=new Je({}),At=new P({props:{name:"class transformers.FlaxLongT5ForConditionalGeneration",anchor:"transformers.FlaxLongT5ForConditionalGeneration",parameters:[{name:"config",val:": LongT5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_flax_longt5.py#L2207"}}),It=new P({props:{name:"__call__",anchor:"transformers.FlaxLongT5ForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxLongT5ForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. LongT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16792/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16792/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16792/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./longt5#training">LONGT5
Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16792/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16792/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16792/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>LONGT5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./longt5#training">LONGT5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_flax_longt5.py#L1694",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16792/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16792/en/model_doc/longt5#transformers.LongT5Config"
>LongT5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16792/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Se=new Tn({props:{$$slots:{default:[hl]},$$scope:{ctx:L}}}),Pe=new he({props:{anchor:"transformers.FlaxLongT5ForConditionalGeneration.__call__.example",$$slots:{default:[ml]},$$scope:{ctx:L}}}),Dt=new P({props:{name:"encode",anchor:"transformers.FlaxLongT5ForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxLongT5ForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. LongT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16792/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16792/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16792/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./longt5#training">LONGT5
Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16792/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_flax_longt5.py#L1780",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16792/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.longt5.configuration_longt5.LongT5Config'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16792/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ne=new he({props:{anchor:"transformers.FlaxLongT5ForConditionalGeneration.encode.example",$$slots:{default:[gl]},$$scope:{ctx:L}}}),Bt=new P({props:{name:"decode",anchor:"transformers.FlaxLongT5ForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxLongT5ForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16792/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_16792/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16792/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For training, <code>decoder_input_ids</code> should be provided.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16792/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_flax_longt5.py#L2210",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16792/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.longt5.configuration_longt5.LongT5Config'&gt;</code>) and inputs.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key, value
states of the self-attention and the cross-attention layers if model is used in encoder-decoder setting.
Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16792/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ie=new he({props:{anchor:"transformers.FlaxLongT5ForConditionalGeneration.decode.example",$$slots:{default:[fl]},$$scope:{ctx:L}}}),{c(){l=r("meta"),b=u(),m=r("h1"),p=r("a"),_=r("span"),k(n.$$.fragment),c=u(),z=r("span"),la=a("LongT5"),bn=u(),ee=r("h2"),ge=r("a"),fo=r("span"),k(Ke.$$.fragment),ca=u(),_o=r("span"),pa=a("Overview"),kn=u(),fe=r("p"),ua=a("The LongT5 model was proposed in "),Ze=r("a"),ha=a("LongT5: Efficient Text-To-Text Transformer for Long Sequences"),ma=a(`
by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an
encoder-decoder transformer pre-trained in a text-to-text denoising generative setting. LongT5 model is an extension of
T5 model, and it enables using one of the two different efficient attention mechanisms - (1) Local attention, or (2)
Transient-Global attention.`),vn=u(),Vt=r("p"),ga=a("The abstract from the paper is the following:"),yn=u(),Yt=r("p"),To=r("em"),fa=a(`Recent work has shown that either (1) increasing the input length or (2) increasing model size can improve the
performance of Transformer-based neural models. In this paper, we present a new model, called LongT5, with which we
explore the effects of scaling both the input length and model size at the same time. Specifically, we integrated
attention ideas from long-input transformers (ETC), and adopted pre-training strategies from summarization pre-training
(PEGASUS) into the scalable T5 architecture. The result is a new attention mechanism we call {\\em Transient Global}
(TGlobal), which mimics ETC\u2019s local/global attention mechanism, but without requiring additional side-inputs. We are
able to achieve state-of-the-art results on several summarization tasks and outperform the original T5 models on
question answering tasks.`),wn=u(),Rt=r("p"),_a=a("Tips:"),$n=u(),E=r("ul"),O=r("li"),Jt=r("a"),Ta=a("LongT5ForConditionalGeneration"),ba=a(" is an extension of "),Kt=r("a"),ka=a("T5ForConditionalGeneration"),va=a(` exchanging the traditional
encoder `),bo=r("em"),ya=a("self-attention"),wa=a(" layer with efficient either "),ko=r("em"),$a=a("local"),xa=a(" attention or "),vo=r("em"),La=a("transient-global"),za=a(" ("),yo=r("em"),qa=a("tglobal"),ja=a(") attention."),Fa=u(),Qe=r("li"),Ma=a(`Unlike the T5 model, LongT5 does not use a task prefix. Furthermore, it uses a different pre-training objective
inspired by the pre-training of `),wo=r("code"),Ca=a("[PegasusForConditionalGeneration]"),Ea=a("."),Oa=u(),Xe=r("li"),Sa=a("LongT5 model is designed to work efficiently and very well on long-range "),$o=r("em"),Pa=a("sequence-to-sequence"),Ga=a(` tasks where the
input sequence exceeds commonly used 512 tokens. It is capable of handling input sequences of a length up to 16,384 tokens.`),Na=u(),j=r("li"),Aa=a("For "),xo=r("em"),Ia=a("Local Attention"),Da=a(", the sparse sliding-window local attention operation allows a given token to attend only "),Lo=r("code"),Ba=a("r"),Wa=a(`
tokens to the left and right of it (with `),zo=r("code"),Ua=a("r=127"),Ha=a(" by default). "),qo=r("em"),Va=a("Local Attention"),Ya=a(` does not introduce any new parameters
to the model. The complexity of the mechanism is linear in input sequence length `),jo=r("code"),Ra=a("l"),Ja=a(": "),Fo=r("code"),Ka=a("O(l*r)"),Za=a("."),Qa=u(),q=r("li"),Mo=r("em"),Xa=a("Transient Global Attention"),es=a(" is an extension of the "),Co=r("em"),ts=a("Local Attention"),os=a(`. It, furthermore, allows each input token to
interact with all other tokens in the layer. This is achieved via splitting an input sequence into blocks of a fixed
length `),Eo=r("code"),ns=a("k"),as=a(" (with a default "),Oo=r("code"),ss=a("k=16"),rs=a(`). Then, a global token for such a block is obtained via summing and normalizing the embeddings of every token
in the block. Thanks to this, the attention allows each token to attend to both nearby tokens like in Local attention, and
also every global token like in the case of standard global attention (`),So=r("em"),ds=a("transient"),is=a(` represents the fact the global tokens
are constructed dynamically within each attention operation).  As a consequence, `),Po=r("em"),ls=a("TGlobal"),cs=a(` attention introduces
a few new parameters \u2014 global relative position biases and a layer normalization for global token\u2019s embedding.
The complexity of this mechanism is `),Go=r("code"),ps=a("O(l(r + l/k))"),us=a("."),hs=u(),et=r("li"),ms=a("An example showing how to evaluate a fine-tuned LongT5 model on the "),tt=r("a"),gs=a("pubmed dataset"),fs=a(" is below."),xn=u(),k(ot.$$.fragment),Ln=u(),Q=r("p"),_s=a("This model was contributed by "),nt=r("a"),Ts=a("stancld"),bs=a(`.
The original code can be found `),at=r("a"),ks=a("here"),vs=a("."),zn=u(),te=r("h2"),_e=r("a"),No=r("span"),k(st.$$.fragment),ys=u(),Ao=r("span"),ws=a("LongT5Config"),qn=u(),K=r("div"),k(rt.$$.fragment),$s=u(),Z=r("p"),xs=a("This is the configuration class to store the configuration of a "),Zt=r("a"),Ls=a("LongT5Model"),zs=a(" or a "),Qt=r("a"),qs=a("FlaxLongT5Model"),js=a(`. It is
used to instantiate a LongT5 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the LongT5
`),dt=r("a"),Fs=a("Stancld/LongT5-Local-Base"),Ms=a(" architecture."),Cs=u(),oe=r("p"),Es=a("Configuration objects inherit from "),Xt=r("a"),Os=a("PretrainedConfig"),Ss=a(` and can be used to control the model outputs. Read the
documentation from `),eo=r("a"),Ps=a("PretrainedConfig"),Gs=a(" for more information."),jn=u(),ne=r("h2"),Te=r("a"),Io=r("span"),k(it.$$.fragment),Ns=u(),Do=r("span"),As=a("LongT5Model"),Fn=u(),F=r("div"),k(lt.$$.fragment),Is=u(),Bo=r("p"),Ds=a("The bare LONGT5 Model transformer outputting raw hidden-states without any specific head on top."),Bs=u(),ct=r("p"),Ws=a("The LongT5 model was proposed in "),pt=r("a"),Us=a(`LongT5: Efficient Text-To-Text Transformer for Long
Sequences`),Hs=a(` by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo
Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an encoder-decoder transformer pre-trained in a text-to-text denoising
generative setting. LongT5 model is an extension of T5 model, and it enables using one of the two different
efficient attention mechanisms - (1) Local attention, or (2) Transient-Global attention.`),Vs=u(),ut=r("p"),Ys=a("This model inherits from "),to=r("a"),Rs=a("PreTrainedModel"),Js=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ks=u(),ht=r("p"),Zs=a("This model is also a PyTorch "),mt=r("a"),Qs=a("torch.nn.Module"),Xs=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),er=u(),D=r("div"),k(gt.$$.fragment),tr=u(),ae=r("p"),or=a("The "),oo=r("a"),nr=a("LongT5Model"),ar=a(" forward method, overrides the "),Wo=r("code"),sr=a("__call__"),rr=a(" special method."),dr=u(),k(be.$$.fragment),ir=u(),k(ke.$$.fragment),Mn=u(),se=r("h2"),ve=r("a"),Uo=r("span"),k(ft.$$.fragment),lr=u(),Ho=r("span"),cr=a("LongT5ForConditionalGeneration"),Cn=u(),M=r("div"),k(_t.$$.fragment),pr=u(),Tt=r("p"),ur=a("LONGT5 Model with a "),Vo=r("code"),hr=a("language modeling"),mr=a(" head on top."),gr=u(),bt=r("p"),fr=a("The LongT5 model was proposed in "),kt=r("a"),_r=a(`LongT5: Efficient Text-To-Text Transformer for Long
Sequences`),Tr=a(` by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo
Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an encoder-decoder transformer pre-trained in a text-to-text denoising
generative setting. LongT5 model is an extension of T5 model, and it enables using one of the two different
efficient attention mechanisms - (1) Local attention, or (2) Transient-Global attention.`),br=u(),vt=r("p"),kr=a("This model inherits from "),no=r("a"),vr=a("PreTrainedModel"),yr=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wr=u(),yt=r("p"),$r=a("This model is also a PyTorch "),wt=r("a"),xr=a("torch.nn.Module"),Lr=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zr=u(),B=r("div"),k($t.$$.fragment),qr=u(),re=r("p"),jr=a("The "),ao=r("a"),Fr=a("LongT5ForConditionalGeneration"),Mr=a(" forward method, overrides the "),Yo=r("code"),Cr=a("__call__"),Er=a(" special method."),Or=u(),k(ye.$$.fragment),Sr=u(),k(we.$$.fragment),En=u(),de=r("h2"),$e=r("a"),Ro=r("span"),k(xt.$$.fragment),Pr=u(),Jo=r("span"),Gr=a("LongT5EncoderModel"),On=u(),C=r("div"),k(Lt.$$.fragment),Nr=u(),Ko=r("p"),Ar=a("The bare LONGT5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),Ir=u(),zt=r("p"),Dr=a("The LongT5 model was proposed in "),qt=r("a"),Br=a(`LongT5: Efficient Text-To-Text Transformer for Long
Sequences`),Wr=a(` by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo
Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an encoder-decoder transformer pre-trained in a text-to-text denoising
generative setting. LongT5 model is an extension of T5 model, and it enables using one of the two different
efficient attention mechanisms - (1) Local attention, or (2) Transient-Global attention.`),Ur=u(),jt=r("p"),Hr=a("This model inherits from "),so=r("a"),Vr=a("PreTrainedModel"),Yr=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rr=u(),Ft=r("p"),Jr=a("This model is also a PyTorch "),Mt=r("a"),Kr=a("torch.nn.Module"),Zr=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qr=u(),W=r("div"),k(Ct.$$.fragment),Xr=u(),ie=r("p"),ed=a("The "),ro=r("a"),td=a("LongT5EncoderModel"),od=a(" forward method, overrides the "),Zo=r("code"),nd=a("__call__"),ad=a(" special method."),sd=u(),k(xe.$$.fragment),rd=u(),k(Le.$$.fragment),Sn=u(),le=r("h2"),ze=r("a"),Qo=r("span"),k(Et.$$.fragment),dd=u(),Xo=r("span"),id=a("FlaxLongT5Model"),Pn=u(),N=r("div"),k(Ot.$$.fragment),ld=u(),U=r("div"),k(St.$$.fragment),cd=u(),ce=r("p"),pd=a("The "),en=r("code"),ud=a("FlaxLongT5PreTrainedModel"),hd=a(" forward method, overrides the "),tn=r("code"),md=a("__call__"),gd=a(" special method."),fd=u(),k(qe.$$.fragment),_d=u(),k(je.$$.fragment),Td=u(),Fe=r("div"),k(Pt.$$.fragment),bd=u(),k(Me.$$.fragment),kd=u(),Ce=r("div"),k(Gt.$$.fragment),vd=u(),k(Ee.$$.fragment),Gn=u(),pe=r("h2"),Oe=r("a"),on=r("span"),k(Nt.$$.fragment),yd=u(),nn=r("span"),wd=a("FlaxLongT5ForConditionalGeneration"),Nn=u(),A=r("div"),k(At.$$.fragment),$d=u(),H=r("div"),k(It.$$.fragment),xd=u(),ue=r("p"),Ld=a("The "),an=r("code"),zd=a("FlaxLongT5PreTrainedModel"),qd=a(" forward method, overrides the "),sn=r("code"),jd=a("__call__"),Fd=a(" special method."),Md=u(),k(Se.$$.fragment),Cd=u(),k(Pe.$$.fragment),Ed=u(),Ge=r("div"),k(Dt.$$.fragment),Od=u(),k(Ne.$$.fragment),Sd=u(),Ae=r("div"),k(Bt.$$.fragment),Pd=u(),k(Ie.$$.fragment),this.h()},l(t){const f=tl('[data-svelte="svelte-1phssyn"]',document.head);l=d(f,"META",{name:!0,content:!0}),f.forEach(o),b=h(t),m=d(t,"H1",{class:!0});var Wt=i(m);p=d(Wt,"A",{id:!0,class:!0,href:!0});var rn=i(p);_=d(rn,"SPAN",{});var dn=i(_);v(n.$$.fragment,dn),dn.forEach(o),rn.forEach(o),c=h(Wt),z=d(Wt,"SPAN",{});var ln=i(z);la=s(ln,"LongT5"),ln.forEach(o),Wt.forEach(o),bn=h(t),ee=d(t,"H2",{class:!0});var Ut=i(ee);ge=d(Ut,"A",{id:!0,class:!0,href:!0});var cn=i(ge);fo=d(cn,"SPAN",{});var pn=i(fo);v(Ke.$$.fragment,pn),pn.forEach(o),cn.forEach(o),ca=h(Ut),_o=d(Ut,"SPAN",{});var un=i(_o);pa=s(un,"Overview"),un.forEach(o),Ut.forEach(o),kn=h(t),fe=d(t,"P",{});var Ht=i(fe);ua=s(Ht,"The LongT5 model was proposed in "),Ze=d(Ht,"A",{href:!0,rel:!0});var hn=i(Ze);ha=s(hn,"LongT5: Efficient Text-To-Text Transformer for Long Sequences"),hn.forEach(o),ma=s(Ht,`
by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an
encoder-decoder transformer pre-trained in a text-to-text denoising generative setting. LongT5 model is an extension of
T5 model, and it enables using one of the two different efficient attention mechanisms - (1) Local attention, or (2)
Transient-Global attention.`),Ht.forEach(o),vn=h(t),Vt=d(t,"P",{});var mn=i(Vt);ga=s(mn,"The abstract from the paper is the following:"),mn.forEach(o),yn=h(t),Yt=d(t,"P",{});var gn=i(Yt);To=d(gn,"EM",{});var fn=i(To);fa=s(fn,`Recent work has shown that either (1) increasing the input length or (2) increasing model size can improve the
performance of Transformer-based neural models. In this paper, we present a new model, called LongT5, with which we
explore the effects of scaling both the input length and model size at the same time. Specifically, we integrated
attention ideas from long-input transformers (ETC), and adopted pre-training strategies from summarization pre-training
(PEGASUS) into the scalable T5 architecture. The result is a new attention mechanism we call {\\em Transient Global}
(TGlobal), which mimics ETC\u2019s local/global attention mechanism, but without requiring additional side-inputs. We are
able to achieve state-of-the-art results on several summarization tasks and outperform the original T5 models on
question answering tasks.`),fn.forEach(o),gn.forEach(o),wn=h(t),Rt=d(t,"P",{});var _n=i(Rt);_a=s(_n,"Tips:"),_n.forEach(o),$n=h(t),E=d(t,"UL",{});var V=i(E);O=d(V,"LI",{});var I=i(O);Jt=d(I,"A",{href:!0});var Gd=i(Jt);Ta=s(Gd,"LongT5ForConditionalGeneration"),Gd.forEach(o),ba=s(I," is an extension of "),Kt=d(I,"A",{href:!0});var Nd=i(Kt);ka=s(Nd,"T5ForConditionalGeneration"),Nd.forEach(o),va=s(I,` exchanging the traditional
encoder `),bo=d(I,"EM",{});var Ad=i(bo);ya=s(Ad,"self-attention"),Ad.forEach(o),wa=s(I," layer with efficient either "),ko=d(I,"EM",{});var Id=i(ko);$a=s(Id,"local"),Id.forEach(o),xa=s(I," attention or "),vo=d(I,"EM",{});var Dd=i(vo);La=s(Dd,"transient-global"),Dd.forEach(o),za=s(I," ("),yo=d(I,"EM",{});var Bd=i(yo);qa=s(Bd,"tglobal"),Bd.forEach(o),ja=s(I,") attention."),I.forEach(o),Fa=h(V),Qe=d(V,"LI",{});var In=i(Qe);Ma=s(In,`Unlike the T5 model, LongT5 does not use a task prefix. Furthermore, it uses a different pre-training objective
inspired by the pre-training of `),wo=d(In,"CODE",{});var Wd=i(wo);Ca=s(Wd,"[PegasusForConditionalGeneration]"),Wd.forEach(o),Ea=s(In,"."),In.forEach(o),Oa=h(V),Xe=d(V,"LI",{});var Dn=i(Xe);Sa=s(Dn,"LongT5 model is designed to work efficiently and very well on long-range "),$o=d(Dn,"EM",{});var Ud=i($o);Pa=s(Ud,"sequence-to-sequence"),Ud.forEach(o),Ga=s(Dn,` tasks where the
input sequence exceeds commonly used 512 tokens. It is capable of handling input sequences of a length up to 16,384 tokens.`),Dn.forEach(o),Na=h(V),j=d(V,"LI",{});var G=i(j);Aa=s(G,"For "),xo=d(G,"EM",{});var Hd=i(xo);Ia=s(Hd,"Local Attention"),Hd.forEach(o),Da=s(G,", the sparse sliding-window local attention operation allows a given token to attend only "),Lo=d(G,"CODE",{});var Vd=i(Lo);Ba=s(Vd,"r"),Vd.forEach(o),Wa=s(G,`
tokens to the left and right of it (with `),zo=d(G,"CODE",{});var Yd=i(zo);Ua=s(Yd,"r=127"),Yd.forEach(o),Ha=s(G," by default). "),qo=d(G,"EM",{});var Rd=i(qo);Va=s(Rd,"Local Attention"),Rd.forEach(o),Ya=s(G,` does not introduce any new parameters
to the model. The complexity of the mechanism is linear in input sequence length `),jo=d(G,"CODE",{});var Jd=i(jo);Ra=s(Jd,"l"),Jd.forEach(o),Ja=s(G,": "),Fo=d(G,"CODE",{});var Kd=i(Fo);Ka=s(Kd,"O(l*r)"),Kd.forEach(o),Za=s(G,"."),G.forEach(o),Qa=h(V),q=d(V,"LI",{});var S=i(q);Mo=d(S,"EM",{});var Zd=i(Mo);Xa=s(Zd,"Transient Global Attention"),Zd.forEach(o),es=s(S," is an extension of the "),Co=d(S,"EM",{});var Qd=i(Co);ts=s(Qd,"Local Attention"),Qd.forEach(o),os=s(S,`. It, furthermore, allows each input token to
interact with all other tokens in the layer. This is achieved via splitting an input sequence into blocks of a fixed
length `),Eo=d(S,"CODE",{});var Xd=i(Eo);ns=s(Xd,"k"),Xd.forEach(o),as=s(S," (with a default "),Oo=d(S,"CODE",{});var ei=i(Oo);ss=s(ei,"k=16"),ei.forEach(o),rs=s(S,`). Then, a global token for such a block is obtained via summing and normalizing the embeddings of every token
in the block. Thanks to this, the attention allows each token to attend to both nearby tokens like in Local attention, and
also every global token like in the case of standard global attention (`),So=d(S,"EM",{});var ti=i(So);ds=s(ti,"transient"),ti.forEach(o),is=s(S,` represents the fact the global tokens
are constructed dynamically within each attention operation).  As a consequence, `),Po=d(S,"EM",{});var oi=i(Po);ls=s(oi,"TGlobal"),oi.forEach(o),cs=s(S,` attention introduces
a few new parameters \u2014 global relative position biases and a layer normalization for global token\u2019s embedding.
The complexity of this mechanism is `),Go=d(S,"CODE",{});var ni=i(Go);ps=s(ni,"O(l(r + l/k))"),ni.forEach(o),us=s(S,"."),S.forEach(o),hs=h(V),et=d(V,"LI",{});var Bn=i(et);ms=s(Bn,"An example showing how to evaluate a fine-tuned LongT5 model on the "),tt=d(Bn,"A",{href:!0,rel:!0});var ai=i(tt);gs=s(ai,"pubmed dataset"),ai.forEach(o),fs=s(Bn," is below."),Bn.forEach(o),V.forEach(o),xn=h(t),v(ot.$$.fragment,t),Ln=h(t),Q=d(t,"P",{});var io=i(Q);_s=s(io,"This model was contributed by "),nt=d(io,"A",{href:!0,rel:!0});var si=i(nt);Ts=s(si,"stancld"),si.forEach(o),bs=s(io,`.
The original code can be found `),at=d(io,"A",{href:!0,rel:!0});var ri=i(at);ks=s(ri,"here"),ri.forEach(o),vs=s(io,"."),io.forEach(o),zn=h(t),te=d(t,"H2",{class:!0});var Wn=i(te);_e=d(Wn,"A",{id:!0,class:!0,href:!0});var di=i(_e);No=d(di,"SPAN",{});var ii=i(No);v(st.$$.fragment,ii),ii.forEach(o),di.forEach(o),ys=h(Wn),Ao=d(Wn,"SPAN",{});var li=i(Ao);ws=s(li,"LongT5Config"),li.forEach(o),Wn.forEach(o),qn=h(t),K=d(t,"DIV",{class:!0});var lo=i(K);v(rt.$$.fragment,lo),$s=h(lo),Z=d(lo,"P",{});var De=i(Z);xs=s(De,"This is the configuration class to store the configuration of a "),Zt=d(De,"A",{href:!0});var ci=i(Zt);Ls=s(ci,"LongT5Model"),ci.forEach(o),zs=s(De," or a "),Qt=d(De,"A",{href:!0});var pi=i(Qt);qs=s(pi,"FlaxLongT5Model"),pi.forEach(o),js=s(De,`. It is
used to instantiate a LongT5 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the LongT5
`),dt=d(De,"A",{href:!0,rel:!0});var ui=i(dt);Fs=s(ui,"Stancld/LongT5-Local-Base"),ui.forEach(o),Ms=s(De," architecture."),De.forEach(o),Cs=h(lo),oe=d(lo,"P",{});var co=i(oe);Es=s(co,"Configuration objects inherit from "),Xt=d(co,"A",{href:!0});var hi=i(Xt);Os=s(hi,"PretrainedConfig"),hi.forEach(o),Ss=s(co,` and can be used to control the model outputs. Read the
documentation from `),eo=d(co,"A",{href:!0});var mi=i(eo);Ps=s(mi,"PretrainedConfig"),mi.forEach(o),Gs=s(co," for more information."),co.forEach(o),lo.forEach(o),jn=h(t),ne=d(t,"H2",{class:!0});var Un=i(ne);Te=d(Un,"A",{id:!0,class:!0,href:!0});var gi=i(Te);Io=d(gi,"SPAN",{});var fi=i(Io);v(it.$$.fragment,fi),fi.forEach(o),gi.forEach(o),Ns=h(Un),Do=d(Un,"SPAN",{});var _i=i(Do);As=s(_i,"LongT5Model"),_i.forEach(o),Un.forEach(o),Fn=h(t),F=d(t,"DIV",{class:!0});var Y=i(F);v(lt.$$.fragment,Y),Is=h(Y),Bo=d(Y,"P",{});var Ti=i(Bo);Ds=s(Ti,"The bare LONGT5 Model transformer outputting raw hidden-states without any specific head on top."),Ti.forEach(o),Bs=h(Y),ct=d(Y,"P",{});var Hn=i(ct);Ws=s(Hn,"The LongT5 model was proposed in "),pt=d(Hn,"A",{href:!0,rel:!0});var bi=i(pt);Us=s(bi,`LongT5: Efficient Text-To-Text Transformer for Long
Sequences`),bi.forEach(o),Hs=s(Hn,` by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo
Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an encoder-decoder transformer pre-trained in a text-to-text denoising
generative setting. LongT5 model is an extension of T5 model, and it enables using one of the two different
efficient attention mechanisms - (1) Local attention, or (2) Transient-Global attention.`),Hn.forEach(o),Vs=h(Y),ut=d(Y,"P",{});var Vn=i(ut);Ys=s(Vn,"This model inherits from "),to=d(Vn,"A",{href:!0});var ki=i(to);Rs=s(ki,"PreTrainedModel"),ki.forEach(o),Js=s(Vn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vn.forEach(o),Ks=h(Y),ht=d(Y,"P",{});var Yn=i(ht);Zs=s(Yn,"This model is also a PyTorch "),mt=d(Yn,"A",{href:!0,rel:!0});var vi=i(mt);Qs=s(vi,"torch.nn.Module"),vi.forEach(o),Xs=s(Yn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yn.forEach(o),er=h(Y),D=d(Y,"DIV",{class:!0});var Be=i(D);v(gt.$$.fragment,Be),tr=h(Be),ae=d(Be,"P",{});var po=i(ae);or=s(po,"The "),oo=d(po,"A",{href:!0});var yi=i(oo);nr=s(yi,"LongT5Model"),yi.forEach(o),ar=s(po," forward method, overrides the "),Wo=d(po,"CODE",{});var wi=i(Wo);sr=s(wi,"__call__"),wi.forEach(o),rr=s(po," special method."),po.forEach(o),dr=h(Be),v(be.$$.fragment,Be),ir=h(Be),v(ke.$$.fragment,Be),Be.forEach(o),Y.forEach(o),Mn=h(t),se=d(t,"H2",{class:!0});var Rn=i(se);ve=d(Rn,"A",{id:!0,class:!0,href:!0});var $i=i(ve);Uo=d($i,"SPAN",{});var xi=i(Uo);v(ft.$$.fragment,xi),xi.forEach(o),$i.forEach(o),lr=h(Rn),Ho=d(Rn,"SPAN",{});var Li=i(Ho);cr=s(Li,"LongT5ForConditionalGeneration"),Li.forEach(o),Rn.forEach(o),Cn=h(t),M=d(t,"DIV",{class:!0});var R=i(M);v(_t.$$.fragment,R),pr=h(R),Tt=d(R,"P",{});var Jn=i(Tt);ur=s(Jn,"LONGT5 Model with a "),Vo=d(Jn,"CODE",{});var zi=i(Vo);hr=s(zi,"language modeling"),zi.forEach(o),mr=s(Jn," head on top."),Jn.forEach(o),gr=h(R),bt=d(R,"P",{});var Kn=i(bt);fr=s(Kn,"The LongT5 model was proposed in "),kt=d(Kn,"A",{href:!0,rel:!0});var qi=i(kt);_r=s(qi,`LongT5: Efficient Text-To-Text Transformer for Long
Sequences`),qi.forEach(o),Tr=s(Kn,` by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo
Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an encoder-decoder transformer pre-trained in a text-to-text denoising
generative setting. LongT5 model is an extension of T5 model, and it enables using one of the two different
efficient attention mechanisms - (1) Local attention, or (2) Transient-Global attention.`),Kn.forEach(o),br=h(R),vt=d(R,"P",{});var Zn=i(vt);kr=s(Zn,"This model inherits from "),no=d(Zn,"A",{href:!0});var ji=i(no);vr=s(ji,"PreTrainedModel"),ji.forEach(o),yr=s(Zn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zn.forEach(o),wr=h(R),yt=d(R,"P",{});var Qn=i(yt);$r=s(Qn,"This model is also a PyTorch "),wt=d(Qn,"A",{href:!0,rel:!0});var Fi=i(wt);xr=s(Fi,"torch.nn.Module"),Fi.forEach(o),Lr=s(Qn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qn.forEach(o),zr=h(R),B=d(R,"DIV",{class:!0});var We=i(B);v($t.$$.fragment,We),qr=h(We),re=d(We,"P",{});var uo=i(re);jr=s(uo,"The "),ao=d(uo,"A",{href:!0});var Mi=i(ao);Fr=s(Mi,"LongT5ForConditionalGeneration"),Mi.forEach(o),Mr=s(uo," forward method, overrides the "),Yo=d(uo,"CODE",{});var Ci=i(Yo);Cr=s(Ci,"__call__"),Ci.forEach(o),Er=s(uo," special method."),uo.forEach(o),Or=h(We),v(ye.$$.fragment,We),Sr=h(We),v(we.$$.fragment,We),We.forEach(o),R.forEach(o),En=h(t),de=d(t,"H2",{class:!0});var Xn=i(de);$e=d(Xn,"A",{id:!0,class:!0,href:!0});var Ei=i($e);Ro=d(Ei,"SPAN",{});var Oi=i(Ro);v(xt.$$.fragment,Oi),Oi.forEach(o),Ei.forEach(o),Pr=h(Xn),Jo=d(Xn,"SPAN",{});var Si=i(Jo);Gr=s(Si,"LongT5EncoderModel"),Si.forEach(o),Xn.forEach(o),On=h(t),C=d(t,"DIV",{class:!0});var J=i(C);v(Lt.$$.fragment,J),Nr=h(J),Ko=d(J,"P",{});var Pi=i(Ko);Ar=s(Pi,"The bare LONGT5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),Pi.forEach(o),Ir=h(J),zt=d(J,"P",{});var ea=i(zt);Dr=s(ea,"The LongT5 model was proposed in "),qt=d(ea,"A",{href:!0,rel:!0});var Gi=i(qt);Br=s(Gi,`LongT5: Efficient Text-To-Text Transformer for Long
Sequences`),Gi.forEach(o),Wr=s(ea,` by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo
Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an encoder-decoder transformer pre-trained in a text-to-text denoising
generative setting. LongT5 model is an extension of T5 model, and it enables using one of the two different
efficient attention mechanisms - (1) Local attention, or (2) Transient-Global attention.`),ea.forEach(o),Ur=h(J),jt=d(J,"P",{});var ta=i(jt);Hr=s(ta,"This model inherits from "),so=d(ta,"A",{href:!0});var Ni=i(so);Vr=s(Ni,"PreTrainedModel"),Ni.forEach(o),Yr=s(ta,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ta.forEach(o),Rr=h(J),Ft=d(J,"P",{});var oa=i(Ft);Jr=s(oa,"This model is also a PyTorch "),Mt=d(oa,"A",{href:!0,rel:!0});var Ai=i(Mt);Kr=s(Ai,"torch.nn.Module"),Ai.forEach(o),Zr=s(oa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),oa.forEach(o),Qr=h(J),W=d(J,"DIV",{class:!0});var Ue=i(W);v(Ct.$$.fragment,Ue),Xr=h(Ue),ie=d(Ue,"P",{});var ho=i(ie);ed=s(ho,"The "),ro=d(ho,"A",{href:!0});var Ii=i(ro);td=s(Ii,"LongT5EncoderModel"),Ii.forEach(o),od=s(ho," forward method, overrides the "),Zo=d(ho,"CODE",{});var Di=i(Zo);nd=s(Di,"__call__"),Di.forEach(o),ad=s(ho," special method."),ho.forEach(o),sd=h(Ue),v(xe.$$.fragment,Ue),rd=h(Ue),v(Le.$$.fragment,Ue),Ue.forEach(o),J.forEach(o),Sn=h(t),le=d(t,"H2",{class:!0});var na=i(le);ze=d(na,"A",{id:!0,class:!0,href:!0});var Bi=i(ze);Qo=d(Bi,"SPAN",{});var Wi=i(Qo);v(Et.$$.fragment,Wi),Wi.forEach(o),Bi.forEach(o),dd=h(na),Xo=d(na,"SPAN",{});var Ui=i(Xo);id=s(Ui,"FlaxLongT5Model"),Ui.forEach(o),na.forEach(o),Pn=h(t),N=d(t,"DIV",{class:!0});var He=i(N);v(Ot.$$.fragment,He),ld=h(He),U=d(He,"DIV",{class:!0});var Ve=i(U);v(St.$$.fragment,Ve),cd=h(Ve),ce=d(Ve,"P",{});var mo=i(ce);pd=s(mo,"The "),en=d(mo,"CODE",{});var Hi=i(en);ud=s(Hi,"FlaxLongT5PreTrainedModel"),Hi.forEach(o),hd=s(mo," forward method, overrides the "),tn=d(mo,"CODE",{});var Vi=i(tn);md=s(Vi,"__call__"),Vi.forEach(o),gd=s(mo," special method."),mo.forEach(o),fd=h(Ve),v(qe.$$.fragment,Ve),_d=h(Ve),v(je.$$.fragment,Ve),Ve.forEach(o),Td=h(He),Fe=d(He,"DIV",{class:!0});var aa=i(Fe);v(Pt.$$.fragment,aa),bd=h(aa),v(Me.$$.fragment,aa),aa.forEach(o),kd=h(He),Ce=d(He,"DIV",{class:!0});var sa=i(Ce);v(Gt.$$.fragment,sa),vd=h(sa),v(Ee.$$.fragment,sa),sa.forEach(o),He.forEach(o),Gn=h(t),pe=d(t,"H2",{class:!0});var ra=i(pe);Oe=d(ra,"A",{id:!0,class:!0,href:!0});var Yi=i(Oe);on=d(Yi,"SPAN",{});var Ri=i(on);v(Nt.$$.fragment,Ri),Ri.forEach(o),Yi.forEach(o),yd=h(ra),nn=d(ra,"SPAN",{});var Ji=i(nn);wd=s(Ji,"FlaxLongT5ForConditionalGeneration"),Ji.forEach(o),ra.forEach(o),Nn=h(t),A=d(t,"DIV",{class:!0});var Ye=i(A);v(At.$$.fragment,Ye),$d=h(Ye),H=d(Ye,"DIV",{class:!0});var Re=i(H);v(It.$$.fragment,Re),xd=h(Re),ue=d(Re,"P",{});var go=i(ue);Ld=s(go,"The "),an=d(go,"CODE",{});var Ki=i(an);zd=s(Ki,"FlaxLongT5PreTrainedModel"),Ki.forEach(o),qd=s(go," forward method, overrides the "),sn=d(go,"CODE",{});var Zi=i(sn);jd=s(Zi,"__call__"),Zi.forEach(o),Fd=s(go," special method."),go.forEach(o),Md=h(Re),v(Se.$$.fragment,Re),Cd=h(Re),v(Pe.$$.fragment,Re),Re.forEach(o),Ed=h(Ye),Ge=d(Ye,"DIV",{class:!0});var da=i(Ge);v(Dt.$$.fragment,da),Od=h(da),v(Ne.$$.fragment,da),da.forEach(o),Sd=h(Ye),Ae=d(Ye,"DIV",{class:!0});var ia=i(Ae);v(Bt.$$.fragment,ia),Pd=h(ia),v(Ie.$$.fragment,ia),ia.forEach(o),Ye.forEach(o),this.h()},h(){g(l,"name","hf:doc:metadata"),g(l,"content",JSON.stringify(Tl)),g(p,"id","longt5"),g(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(p,"href","#longt5"),g(m,"class","relative group"),g(ge,"id","overview"),g(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ge,"href","#overview"),g(ee,"class","relative group"),g(Ze,"href","https://arxiv.org/abs/2112.07916"),g(Ze,"rel","nofollow"),g(Jt,"href","/docs/transformers/pr_16792/en/model_doc/longt5#transformers.LongT5ForConditionalGeneration"),g(Kt,"href","/docs/transformers/pr_16792/en/model_doc/t5#transformers.T5ForConditionalGeneration"),g(tt,"href","https://huggingface.co/datasets/scientific_papers"),g(tt,"rel","nofollow"),g(nt,"href","https://huggingface.co/stancld"),g(nt,"rel","nofollow"),g(at,"href","https://github.com/google-research/longt5"),g(at,"rel","nofollow"),g(_e,"id","transformers.LongT5Config"),g(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(_e,"href","#transformers.LongT5Config"),g(te,"class","relative group"),g(Zt,"href","/docs/transformers/pr_16792/en/model_doc/longt5#transformers.LongT5Model"),g(Qt,"href","/docs/transformers/pr_16792/en/model_doc/longt5#transformers.FlaxLongT5Model"),g(dt,"href","https://huggingface.co/Stancld/LongT5-Local-Base"),g(dt,"rel","nofollow"),g(Xt,"href","/docs/transformers/pr_16792/en/main_classes/configuration#transformers.PretrainedConfig"),g(eo,"href","/docs/transformers/pr_16792/en/main_classes/configuration#transformers.PretrainedConfig"),g(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Te,"id","transformers.LongT5Model"),g(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Te,"href","#transformers.LongT5Model"),g(ne,"class","relative group"),g(pt,"href","https://arxiv.org/abs/2112.07916"),g(pt,"rel","nofollow"),g(to,"href","/docs/transformers/pr_16792/en/main_classes/model#transformers.PreTrainedModel"),g(mt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(mt,"rel","nofollow"),g(oo,"href","/docs/transformers/pr_16792/en/model_doc/longt5#transformers.LongT5Model"),g(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ve,"id","transformers.LongT5ForConditionalGeneration"),g(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ve,"href","#transformers.LongT5ForConditionalGeneration"),g(se,"class","relative group"),g(kt,"href","https://arxiv.org/abs/2112.07916"),g(kt,"rel","nofollow"),g(no,"href","/docs/transformers/pr_16792/en/main_classes/model#transformers.PreTrainedModel"),g(wt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(wt,"rel","nofollow"),g(ao,"href","/docs/transformers/pr_16792/en/model_doc/longt5#transformers.LongT5ForConditionalGeneration"),g(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g($e,"id","transformers.LongT5EncoderModel"),g($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g($e,"href","#transformers.LongT5EncoderModel"),g(de,"class","relative group"),g(qt,"href","https://arxiv.org/abs/2112.07916"),g(qt,"rel","nofollow"),g(so,"href","/docs/transformers/pr_16792/en/main_classes/model#transformers.PreTrainedModel"),g(Mt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Mt,"rel","nofollow"),g(ro,"href","/docs/transformers/pr_16792/en/model_doc/longt5#transformers.LongT5EncoderModel"),g(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ze,"id","transformers.FlaxLongT5Model"),g(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ze,"href","#transformers.FlaxLongT5Model"),g(le,"class","relative group"),g(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Oe,"id","transformers.FlaxLongT5ForConditionalGeneration"),g(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Oe,"href","#transformers.FlaxLongT5ForConditionalGeneration"),g(pe,"class","relative group"),g(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,f){e(document.head,l),T(t,b,f),T(t,m,f),e(m,p),e(p,_),y(n,_,null),e(m,c),e(m,z),e(z,la),T(t,bn,f),T(t,ee,f),e(ee,ge),e(ge,fo),y(Ke,fo,null),e(ee,ca),e(ee,_o),e(_o,pa),T(t,kn,f),T(t,fe,f),e(fe,ua),e(fe,Ze),e(Ze,ha),e(fe,ma),T(t,vn,f),T(t,Vt,f),e(Vt,ga),T(t,yn,f),T(t,Yt,f),e(Yt,To),e(To,fa),T(t,wn,f),T(t,Rt,f),e(Rt,_a),T(t,$n,f),T(t,E,f),e(E,O),e(O,Jt),e(Jt,Ta),e(O,ba),e(O,Kt),e(Kt,ka),e(O,va),e(O,bo),e(bo,ya),e(O,wa),e(O,ko),e(ko,$a),e(O,xa),e(O,vo),e(vo,La),e(O,za),e(O,yo),e(yo,qa),e(O,ja),e(E,Fa),e(E,Qe),e(Qe,Ma),e(Qe,wo),e(wo,Ca),e(Qe,Ea),e(E,Oa),e(E,Xe),e(Xe,Sa),e(Xe,$o),e($o,Pa),e(Xe,Ga),e(E,Na),e(E,j),e(j,Aa),e(j,xo),e(xo,Ia),e(j,Da),e(j,Lo),e(Lo,Ba),e(j,Wa),e(j,zo),e(zo,Ua),e(j,Ha),e(j,qo),e(qo,Va),e(j,Ya),e(j,jo),e(jo,Ra),e(j,Ja),e(j,Fo),e(Fo,Ka),e(j,Za),e(E,Qa),e(E,q),e(q,Mo),e(Mo,Xa),e(q,es),e(q,Co),e(Co,ts),e(q,os),e(q,Eo),e(Eo,ns),e(q,as),e(q,Oo),e(Oo,ss),e(q,rs),e(q,So),e(So,ds),e(q,is),e(q,Po),e(Po,ls),e(q,cs),e(q,Go),e(Go,ps),e(q,us),e(E,hs),e(E,et),e(et,ms),e(et,tt),e(tt,gs),e(et,fs),T(t,xn,f),y(ot,t,f),T(t,Ln,f),T(t,Q,f),e(Q,_s),e(Q,nt),e(nt,Ts),e(Q,bs),e(Q,at),e(at,ks),e(Q,vs),T(t,zn,f),T(t,te,f),e(te,_e),e(_e,No),y(st,No,null),e(te,ys),e(te,Ao),e(Ao,ws),T(t,qn,f),T(t,K,f),y(rt,K,null),e(K,$s),e(K,Z),e(Z,xs),e(Z,Zt),e(Zt,Ls),e(Z,zs),e(Z,Qt),e(Qt,qs),e(Z,js),e(Z,dt),e(dt,Fs),e(Z,Ms),e(K,Cs),e(K,oe),e(oe,Es),e(oe,Xt),e(Xt,Os),e(oe,Ss),e(oe,eo),e(eo,Ps),e(oe,Gs),T(t,jn,f),T(t,ne,f),e(ne,Te),e(Te,Io),y(it,Io,null),e(ne,Ns),e(ne,Do),e(Do,As),T(t,Fn,f),T(t,F,f),y(lt,F,null),e(F,Is),e(F,Bo),e(Bo,Ds),e(F,Bs),e(F,ct),e(ct,Ws),e(ct,pt),e(pt,Us),e(ct,Hs),e(F,Vs),e(F,ut),e(ut,Ys),e(ut,to),e(to,Rs),e(ut,Js),e(F,Ks),e(F,ht),e(ht,Zs),e(ht,mt),e(mt,Qs),e(ht,Xs),e(F,er),e(F,D),y(gt,D,null),e(D,tr),e(D,ae),e(ae,or),e(ae,oo),e(oo,nr),e(ae,ar),e(ae,Wo),e(Wo,sr),e(ae,rr),e(D,dr),y(be,D,null),e(D,ir),y(ke,D,null),T(t,Mn,f),T(t,se,f),e(se,ve),e(ve,Uo),y(ft,Uo,null),e(se,lr),e(se,Ho),e(Ho,cr),T(t,Cn,f),T(t,M,f),y(_t,M,null),e(M,pr),e(M,Tt),e(Tt,ur),e(Tt,Vo),e(Vo,hr),e(Tt,mr),e(M,gr),e(M,bt),e(bt,fr),e(bt,kt),e(kt,_r),e(bt,Tr),e(M,br),e(M,vt),e(vt,kr),e(vt,no),e(no,vr),e(vt,yr),e(M,wr),e(M,yt),e(yt,$r),e(yt,wt),e(wt,xr),e(yt,Lr),e(M,zr),e(M,B),y($t,B,null),e(B,qr),e(B,re),e(re,jr),e(re,ao),e(ao,Fr),e(re,Mr),e(re,Yo),e(Yo,Cr),e(re,Er),e(B,Or),y(ye,B,null),e(B,Sr),y(we,B,null),T(t,En,f),T(t,de,f),e(de,$e),e($e,Ro),y(xt,Ro,null),e(de,Pr),e(de,Jo),e(Jo,Gr),T(t,On,f),T(t,C,f),y(Lt,C,null),e(C,Nr),e(C,Ko),e(Ko,Ar),e(C,Ir),e(C,zt),e(zt,Dr),e(zt,qt),e(qt,Br),e(zt,Wr),e(C,Ur),e(C,jt),e(jt,Hr),e(jt,so),e(so,Vr),e(jt,Yr),e(C,Rr),e(C,Ft),e(Ft,Jr),e(Ft,Mt),e(Mt,Kr),e(Ft,Zr),e(C,Qr),e(C,W),y(Ct,W,null),e(W,Xr),e(W,ie),e(ie,ed),e(ie,ro),e(ro,td),e(ie,od),e(ie,Zo),e(Zo,nd),e(ie,ad),e(W,sd),y(xe,W,null),e(W,rd),y(Le,W,null),T(t,Sn,f),T(t,le,f),e(le,ze),e(ze,Qo),y(Et,Qo,null),e(le,dd),e(le,Xo),e(Xo,id),T(t,Pn,f),T(t,N,f),y(Ot,N,null),e(N,ld),e(N,U),y(St,U,null),e(U,cd),e(U,ce),e(ce,pd),e(ce,en),e(en,ud),e(ce,hd),e(ce,tn),e(tn,md),e(ce,gd),e(U,fd),y(qe,U,null),e(U,_d),y(je,U,null),e(N,Td),e(N,Fe),y(Pt,Fe,null),e(Fe,bd),y(Me,Fe,null),e(N,kd),e(N,Ce),y(Gt,Ce,null),e(Ce,vd),y(Ee,Ce,null),T(t,Gn,f),T(t,pe,f),e(pe,Oe),e(Oe,on),y(Nt,on,null),e(pe,yd),e(pe,nn),e(nn,wd),T(t,Nn,f),T(t,A,f),y(At,A,null),e(A,$d),e(A,H),y(It,H,null),e(H,xd),e(H,ue),e(ue,Ld),e(ue,an),e(an,zd),e(ue,qd),e(ue,sn),e(sn,jd),e(ue,Fd),e(H,Md),y(Se,H,null),e(H,Cd),y(Pe,H,null),e(A,Ed),e(A,Ge),y(Dt,Ge,null),e(Ge,Od),y(Ne,Ge,null),e(A,Sd),e(A,Ae),y(Bt,Ae,null),e(Ae,Pd),y(Ie,Ae,null),An=!0},p(t,[f]){const Wt={};f&2&&(Wt.$$scope={dirty:f,ctx:t}),be.$set(Wt);const rn={};f&2&&(rn.$$scope={dirty:f,ctx:t}),ke.$set(rn);const dn={};f&2&&(dn.$$scope={dirty:f,ctx:t}),ye.$set(dn);const ln={};f&2&&(ln.$$scope={dirty:f,ctx:t}),we.$set(ln);const Ut={};f&2&&(Ut.$$scope={dirty:f,ctx:t}),xe.$set(Ut);const cn={};f&2&&(cn.$$scope={dirty:f,ctx:t}),Le.$set(cn);const pn={};f&2&&(pn.$$scope={dirty:f,ctx:t}),qe.$set(pn);const un={};f&2&&(un.$$scope={dirty:f,ctx:t}),je.$set(un);const Ht={};f&2&&(Ht.$$scope={dirty:f,ctx:t}),Me.$set(Ht);const hn={};f&2&&(hn.$$scope={dirty:f,ctx:t}),Ee.$set(hn);const mn={};f&2&&(mn.$$scope={dirty:f,ctx:t}),Se.$set(mn);const gn={};f&2&&(gn.$$scope={dirty:f,ctx:t}),Pe.$set(gn);const fn={};f&2&&(fn.$$scope={dirty:f,ctx:t}),Ne.$set(fn);const _n={};f&2&&(_n.$$scope={dirty:f,ctx:t}),Ie.$set(_n)},i(t){An||(w(n.$$.fragment,t),w(Ke.$$.fragment,t),w(ot.$$.fragment,t),w(st.$$.fragment,t),w(rt.$$.fragment,t),w(it.$$.fragment,t),w(lt.$$.fragment,t),w(gt.$$.fragment,t),w(be.$$.fragment,t),w(ke.$$.fragment,t),w(ft.$$.fragment,t),w(_t.$$.fragment,t),w($t.$$.fragment,t),w(ye.$$.fragment,t),w(we.$$.fragment,t),w(xt.$$.fragment,t),w(Lt.$$.fragment,t),w(Ct.$$.fragment,t),w(xe.$$.fragment,t),w(Le.$$.fragment,t),w(Et.$$.fragment,t),w(Ot.$$.fragment,t),w(St.$$.fragment,t),w(qe.$$.fragment,t),w(je.$$.fragment,t),w(Pt.$$.fragment,t),w(Me.$$.fragment,t),w(Gt.$$.fragment,t),w(Ee.$$.fragment,t),w(Nt.$$.fragment,t),w(At.$$.fragment,t),w(It.$$.fragment,t),w(Se.$$.fragment,t),w(Pe.$$.fragment,t),w(Dt.$$.fragment,t),w(Ne.$$.fragment,t),w(Bt.$$.fragment,t),w(Ie.$$.fragment,t),An=!0)},o(t){$(n.$$.fragment,t),$(Ke.$$.fragment,t),$(ot.$$.fragment,t),$(st.$$.fragment,t),$(rt.$$.fragment,t),$(it.$$.fragment,t),$(lt.$$.fragment,t),$(gt.$$.fragment,t),$(be.$$.fragment,t),$(ke.$$.fragment,t),$(ft.$$.fragment,t),$(_t.$$.fragment,t),$($t.$$.fragment,t),$(ye.$$.fragment,t),$(we.$$.fragment,t),$(xt.$$.fragment,t),$(Lt.$$.fragment,t),$(Ct.$$.fragment,t),$(xe.$$.fragment,t),$(Le.$$.fragment,t),$(Et.$$.fragment,t),$(Ot.$$.fragment,t),$(St.$$.fragment,t),$(qe.$$.fragment,t),$(je.$$.fragment,t),$(Pt.$$.fragment,t),$(Me.$$.fragment,t),$(Gt.$$.fragment,t),$(Ee.$$.fragment,t),$(Nt.$$.fragment,t),$(At.$$.fragment,t),$(It.$$.fragment,t),$(Se.$$.fragment,t),$(Pe.$$.fragment,t),$(Dt.$$.fragment,t),$(Ne.$$.fragment,t),$(Bt.$$.fragment,t),$(Ie.$$.fragment,t),An=!1},d(t){o(l),t&&o(b),t&&o(m),x(n),t&&o(bn),t&&o(ee),x(Ke),t&&o(kn),t&&o(fe),t&&o(vn),t&&o(Vt),t&&o(yn),t&&o(Yt),t&&o(wn),t&&o(Rt),t&&o($n),t&&o(E),t&&o(xn),x(ot,t),t&&o(Ln),t&&o(Q),t&&o(zn),t&&o(te),x(st),t&&o(qn),t&&o(K),x(rt),t&&o(jn),t&&o(ne),x(it),t&&o(Fn),t&&o(F),x(lt),x(gt),x(be),x(ke),t&&o(Mn),t&&o(se),x(ft),t&&o(Cn),t&&o(M),x(_t),x($t),x(ye),x(we),t&&o(En),t&&o(de),x(xt),t&&o(On),t&&o(C),x(Lt),x(Ct),x(xe),x(Le),t&&o(Sn),t&&o(le),x(Et),t&&o(Pn),t&&o(N),x(Ot),x(St),x(qe),x(je),x(Pt),x(Me),x(Gt),x(Ee),t&&o(Gn),t&&o(pe),x(Nt),t&&o(Nn),t&&o(A),x(At),x(It),x(Se),x(Pe),x(Dt),x(Ne),x(Bt),x(Ie)}}}const Tl={local:"longt5",sections:[{local:"overview",title:"Overview"},{local:"transformers.LongT5Config",title:"LongT5Config"},{local:"transformers.LongT5Model",title:"LongT5Model"},{local:"transformers.LongT5ForConditionalGeneration",title:"LongT5ForConditionalGeneration"},{local:"transformers.LongT5EncoderModel",title:"LongT5EncoderModel"},{local:"transformers.FlaxLongT5Model",title:"FlaxLongT5Model"},{local:"transformers.FlaxLongT5ForConditionalGeneration",title:"FlaxLongT5ForConditionalGeneration"}],title:"LongT5"};function bl(L){return ol(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ll extends Qi{constructor(l){super();Xi(this,l,bl,_l,el,{})}}export{Ll as default,Tl as metadata};
