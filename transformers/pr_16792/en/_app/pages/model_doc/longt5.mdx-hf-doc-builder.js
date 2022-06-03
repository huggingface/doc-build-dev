import{S as Kr,i as Zr,s as Qr,e as a,k as m,w as y,t as i,M as Xr,c as s,d as t,m as f,a as r,x as v,h as l,b as h,G as e,g as T,y as k,q as w,o as $,B as x,v as ed,L as se}from"../../chunks/vendor-hf-doc-builder.js";import{T as Gt}from"../../chunks/Tip-hf-doc-builder.js";import{D as M}from"../../chunks/Docstring-hf-doc-builder.js";import{C as re}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as De}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ae}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function od(L){let d,b,u,p,_;return{c(){d=a("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=s(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(c,"CODE",{});var z=r(u);p=l(z,"Module"),z.forEach(t),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){T(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&t(d)}}}function td(L){let d,b,u,p,_;return p=new re({props:{code:`from transformers import T5Tokenizer, LongT5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),b=i("Example:"),u=m(),y(p.$$.fragment)},l(n){d=s(n,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(t),u=f(n),v(p.$$.fragment,n)},m(n,c){T(n,d,c),e(d,b),T(n,u,c),k(p,n,c),_=!0},p:se,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(d),n&&t(u),x(p,n)}}}function nd(L){let d,b,u,p,_;return{c(){d=a("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=s(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(c,"CODE",{});var z=r(u);p=l(z,"Module"),z.forEach(t),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){T(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&t(d)}}}function ad(L){let d,b,u,p,_;return p=new re({props:{code:`from transformers import T5Tokenizer, LongT5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you.</span>`}}),{c(){d=a("p"),b=i("Examples:"),u=m(),y(p.$$.fragment)},l(n){d=s(n,"P",{});var c=r(d);b=l(c,"Examples:"),c.forEach(t),u=f(n),v(p.$$.fragment,n)},m(n,c){T(n,d,c),e(d,b),T(n,u,c),k(p,n,c),_=!0},p:se,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(d),n&&t(u),x(p,n)}}}function sd(L){let d,b,u,p,_;return{c(){d=a("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=s(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(c,"CODE",{});var z=r(u);p=l(z,"Module"),z.forEach(t),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){T(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&t(d)}}}function rd(L){let d,b,u,p,_;return p=new re({props:{code:`from transformers import T5Tokenizer, LongT5EncoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),b=i("Example:"),u=m(),y(p.$$.fragment)},l(n){d=s(n,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(t),u=f(n),v(p.$$.fragment,n)},m(n,c){T(n,d,c),e(d,b),T(n,u,c),k(p,n,c),_=!0},p:se,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(d),n&&t(u),x(p,n)}}}function dd(L){let d,b,u,p,_;return{c(){d=a("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=s(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(c,"CODE",{});var z=r(u);p=l(z,"Module"),z.forEach(t),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){T(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&t(d)}}}function id(L){let d,b,u,p,_;return p=new re({props:{code:`from transformers import T5Tokenizer, FlaxLongT5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),b=i("Example:"),u=m(),y(p.$$.fragment)},l(n){d=s(n,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(t),u=f(n),v(p.$$.fragment,n)},m(n,c){T(n,d,c),e(d,b),T(n,u,c),k(p,n,c),_=!0},p:se,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(d),n&&t(u),x(p,n)}}}function ld(L){let d,b,u,p,_;return p=new re({props:{code:`from transformers import T5Tokenizer, FlaxLongT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-base")
model = FlaxLongT5ForConditionalGeneration.from_pretrained("Stancld/LongT5-Local-Base")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxLongT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxLongT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;Stancld/LongT5-Local-Base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){d=a("p"),b=i("Example:"),u=m(),y(p.$$.fragment)},l(n){d=s(n,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(t),u=f(n),v(p.$$.fragment,n)},m(n,c){T(n,d,c),e(d,b),T(n,u,c),k(p,n,c),_=!0},p:se,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(d),n&&t(u),x(p,n)}}}function cd(L){let d,b,u,p,_;return p=new re({props:{code:`from transformers import T5Tokenizer, FlaxLongT5ForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),b=i("Example:"),u=m(),y(p.$$.fragment)},l(n){d=s(n,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(t),u=f(n),v(p.$$.fragment,n)},m(n,c){T(n,d,c),e(d,b),T(n,u,c),k(p,n,c),_=!0},p:se,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(d),n&&t(u),x(p,n)}}}function pd(L){let d,b,u,p,_;return{c(){d=a("p"),b=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),p=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=s(n,"P",{});var c=r(d);b=l(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(c,"CODE",{});var z=r(u);p=l(z,"Module"),z.forEach(t),_=l(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(t)},m(n,c){T(n,d,c),e(d,b),e(d,u),e(u,p),e(d,_)},d(n){n&&t(d)}}}function ud(L){let d,b,u,p,_;return p=new re({props:{code:`from transformers import T5Tokenizer, FlaxLongT5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){d=a("p"),b=i("Example:"),u=m(),y(p.$$.fragment)},l(n){d=s(n,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(t),u=f(n),v(p.$$.fragment,n)},m(n,c){T(n,d,c),e(d,b),T(n,u,c),k(p,n,c),_=!0},p:se,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(d),n&&t(u),x(p,n)}}}function hd(L){let d,b,u,p,_;return p=new re({props:{code:`from transformers import T5Tokenizer, FlaxLongT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-base")
model = FlaxLongT5ForConditionalGeneration.from_pretrained("Stancld/LongT5-Local-Base")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxLongT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxLongT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;Stancld/LongT5-Local-Base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){d=a("p"),b=i("Example:"),u=m(),y(p.$$.fragment)},l(n){d=s(n,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(t),u=f(n),v(p.$$.fragment,n)},m(n,c){T(n,d,c),e(d,b),T(n,u,c),k(p,n,c),_=!0},p:se,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(d),n&&t(u),x(p,n)}}}function md(L){let d,b,u,p,_;return p=new re({props:{code:`from transformers import T5Tokenizer, FlaxLongT5ForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),b=i("Example:"),u=m(),y(p.$$.fragment)},l(n){d=s(n,"P",{});var c=r(d);b=l(c,"Example:"),c.forEach(t),u=f(n),v(p.$$.fragment,n)},m(n,c){T(n,d,c),e(d,b),T(n,u,c),k(p,n,c),_=!0},p:se,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&t(d),n&&t(u),x(p,n)}}}function fd(L){let d,b,u,p,_,n,c,z,Ln,At,U,de,tt,Be,zn,nt,qn,It,ie,Fn,We,jn,Mn,Dt,Oo,Cn,Bt,So,at,En,Wt,Po,On,Ht,No,Sn,Ut,H,Pn,He,Nn,Gn,Ue,An,In,Vt,V,le,st,Ve,Dn,rt,Bn,Yt,B,Ye,Wn,W,Hn,Go,Un,Vn,Ao,Yn,Rn,Re,Jn,Kn,Zn,Y,Qn,Io,Xn,ea,Do,oa,ta,Rt,R,ce,dt,Je,na,it,aa,Jt,q,Ke,sa,lt,ra,da,Ze,ia,Qe,la,ca,pa,Xe,ua,Bo,ha,ma,fa,eo,ga,oo,_a,Ta,ba,O,to,ya,J,va,Wo,ka,wa,ct,$a,xa,La,pe,za,ue,Kt,K,he,pt,no,qa,ut,Fa,Zt,F,ao,ja,so,Ma,ht,Ca,Ea,Oa,ro,Sa,io,Pa,Na,Ga,lo,Aa,Ho,Ia,Da,Ba,co,Wa,po,Ha,Ua,Va,S,uo,Ya,Z,Ra,Uo,Ja,Ka,mt,Za,Qa,Xa,me,es,fe,Qt,Q,ge,ft,ho,os,gt,ts,Xt,j,mo,ns,_t,as,ss,fo,rs,go,ds,is,ls,_o,cs,Vo,ps,us,hs,To,ms,bo,fs,gs,_s,P,yo,Ts,X,bs,Yo,ys,vs,Tt,ks,ws,$s,_e,xs,Te,en,ee,be,bt,vo,Ls,yt,zs,on,C,ko,qs,N,wo,Fs,oe,js,vt,Ms,Cs,kt,Es,Os,Ss,ye,Ps,ve,Ns,ke,$o,Gs,we,As,$e,xo,Is,xe,tn,te,Le,wt,Lo,Ds,$t,Bs,nn,E,zo,Ws,G,qo,Hs,ne,Us,xt,Vs,Ys,Lt,Rs,Js,Ks,ze,Zs,qe,Qs,Fe,Fo,Xs,je,er,Me,jo,or,Ce,an;return n=new De({}),Be=new De({}),Ve=new De({}),Ye=new M({props:{name:"class transformers.LongT5Config",anchor:"transformers.LongT5Config",parameters:[{name:"vocab_size",val:" = 32128"},{name:"d_model",val:" = 512"},{name:"d_kv",val:" = 64"},{name:"d_ff",val:" = 2048"},{name:"num_layers",val:" = 6"},{name:"num_decoder_layers",val:" = None"},{name:"num_heads",val:" = 8"},{name:"local_radius",val:" = 127"},{name:"global_block_size",val:" = 16"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"relative_attention_max_distance",val:" = 128"},{name:"dropout_rate",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_factor",val:" = 1.0"},{name:"feed_forward_proj",val:" = 'relu'"},{name:"is_encoder_decoder",val:" = True"},{name:"encoder_attention_type",val:" = 'local'"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LongT5Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32128) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/configuration_longt5.py#L33"}}),Je=new De({}),Ke=new M({props:{name:"class transformers.LongT5Model",anchor:"transformers.LongT5Model",parameters:[{name:"config",val:": LongT5Config"}],parametersDescription:[{anchor:"transformers.LongT5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16792/en/model_doc/longt5#transformers.LongT5Config">LongT5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16792/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_longt5.py#L1724"}}),to=new M({props:{name:"forward",anchor:"transformers.LongT5Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongT5Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_16792/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_longt5.py#L1774",returnDescription:`
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
`}}),pe=new Gt({props:{$$slots:{default:[od]},$$scope:{ctx:L}}}),ue=new ae({props:{anchor:"transformers.LongT5Model.forward.example",$$slots:{default:[td]},$$scope:{ctx:L}}}),no=new De({}),ao=new M({props:{name:"class transformers.LongT5ForConditionalGeneration",anchor:"transformers.LongT5ForConditionalGeneration",parameters:[{name:"config",val:": LongT5Config"}],parametersDescription:[{anchor:"transformers.LongT5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16792/en/model_doc/longt5#transformers.LongT5Config">LongT5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16792/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_longt5.py#L1875"}}),uo=new M({props:{name:"forward",anchor:"transformers.LongT5ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongT5ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_longt5.py#L1928",returnDescription:`
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
`}}),me=new Gt({props:{$$slots:{default:[nd]},$$scope:{ctx:L}}}),fe=new ae({props:{anchor:"transformers.LongT5ForConditionalGeneration.forward.example",$$slots:{default:[ad]},$$scope:{ctx:L}}}),ho=new De({}),mo=new M({props:{name:"class transformers.LongT5EncoderModel",anchor:"transformers.LongT5EncoderModel",parameters:[{name:"config",val:": LongT5Config"}],parametersDescription:[{anchor:"transformers.LongT5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16792/en/model_doc/longt5#transformers.LongT5Config">LongT5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16792/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_longt5.py#L2121"}}),yo=new M({props:{name:"forward",anchor:"transformers.LongT5EncoderModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongT5EncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_16792/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_longt5.py#L2156",returnDescription:`
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
`}}),_e=new Gt({props:{$$slots:{default:[sd]},$$scope:{ctx:L}}}),Te=new ae({props:{anchor:"transformers.LongT5EncoderModel.forward.example",$$slots:{default:[rd]},$$scope:{ctx:L}}}),vo=new De({}),ko=new M({props:{name:"class transformers.FlaxLongT5Model",anchor:"transformers.FlaxLongT5Model",parameters:[{name:"config",val:": LongT5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_flax_longt5.py#L2069"}}),wo=new M({props:{name:"__call__",anchor:"transformers.FlaxLongT5Model.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxLongT5Model.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_flax_longt5.py#L1697",returnDescription:`
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
`}}),ye=new Gt({props:{$$slots:{default:[dd]},$$scope:{ctx:L}}}),ve=new ae({props:{anchor:"transformers.FlaxLongT5Model.__call__.example",$$slots:{default:[id]},$$scope:{ctx:L}}}),$o=new M({props:{name:"encode",anchor:"transformers.FlaxLongT5Model.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxLongT5Model.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_16792/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_flax_longt5.py#L1783",returnDescription:`
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
`}}),we=new ae({props:{anchor:"transformers.FlaxLongT5Model.encode.example",$$slots:{default:[ld]},$$scope:{ctx:L}}}),xo=new M({props:{name:"decode",anchor:"transformers.FlaxLongT5Model.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxLongT5Model.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_16792/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_flax_longt5.py#L1841",returnDescription:`
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
`}}),xe=new ae({props:{anchor:"transformers.FlaxLongT5Model.decode.example",$$slots:{default:[cd]},$$scope:{ctx:L}}}),Lo=new De({}),zo=new M({props:{name:"class transformers.FlaxLongT5ForConditionalGeneration",anchor:"transformers.FlaxLongT5ForConditionalGeneration",parameters:[{name:"config",val:": LongT5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_flax_longt5.py#L2210"}}),qo=new M({props:{name:"__call__",anchor:"transformers.FlaxLongT5ForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxLongT5ForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_flax_longt5.py#L1697",returnDescription:`
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
`}}),ze=new Gt({props:{$$slots:{default:[pd]},$$scope:{ctx:L}}}),qe=new ae({props:{anchor:"transformers.FlaxLongT5ForConditionalGeneration.__call__.example",$$slots:{default:[ud]},$$scope:{ctx:L}}}),Fo=new M({props:{name:"encode",anchor:"transformers.FlaxLongT5ForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxLongT5ForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_16792/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_flax_longt5.py#L1783",returnDescription:`
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
`}}),je=new ae({props:{anchor:"transformers.FlaxLongT5ForConditionalGeneration.encode.example",$$slots:{default:[hd]},$$scope:{ctx:L}}}),jo=new M({props:{name:"decode",anchor:"transformers.FlaxLongT5ForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxLongT5ForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_16792/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16792/src/transformers/models/longt5/modeling_flax_longt5.py#L2213",returnDescription:`
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
`}}),Ce=new ae({props:{anchor:"transformers.FlaxLongT5ForConditionalGeneration.decode.example",$$slots:{default:[md]},$$scope:{ctx:L}}}),{c(){d=a("meta"),b=m(),u=a("h1"),p=a("a"),_=a("span"),y(n.$$.fragment),c=m(),z=a("span"),Ln=i("LongT5"),At=m(),U=a("h2"),de=a("a"),tt=a("span"),y(Be.$$.fragment),zn=m(),nt=a("span"),qn=i("Overview"),It=m(),ie=a("p"),Fn=i("The LongT5 model was proposed in "),We=a("a"),jn=i("LongT5: Efficient Text-To-Text Transformer for Long Sequences"),Mn=i(`
by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an
encoder-decoder transformer pre-trained in a text-to-text denoising generative setting. LongT5 model is an extension of
T5 model, and it enables using one of the two different efficient attention mechanisms - (1) Local attention, or (2)
Transient-Global attention.`),Dt=m(),Oo=a("p"),Cn=i("The abstract from the paper is the following:"),Bt=m(),So=a("p"),at=a("em"),En=i(`Recent work has shown that either (1) increasing the input length or (2) increasing model size can improve the
performance of Transformer-based neural models. In this paper, we present a new model, called LongT5, with which we
explore the effects of scaling both the input length and model size at the same time. Specifically, we integrated
attention ideas from long-input transformers (ETC), and adopted pre-training strategies from summarization pre-training
(PEGASUS) into the scalable T5 architecture. The result is a new attention mechanism we call {\\em Transient Global}
(TGlobal), which mimics ETC\u2019s local/global attention mechanism, but without requiring additional side-inputs. We are
able to achieve state-of-the-art results on several summarization tasks and outperform the original T5 models on
question answering tasks.`),Wt=m(),Po=a("p"),On=i("Tips:"),Ht=m(),No=a("p"),Sn=i("<INSERT TIPS ABOUT MODEL HERE>"),Ut=m(),H=a("p"),Pn=i("This model was contributed by "),He=a("a"),Nn=i("stancld"),Gn=i(`.
The original code can be found `),Ue=a("a"),An=i("here"),In=i("."),Vt=m(),V=a("h2"),le=a("a"),st=a("span"),y(Ve.$$.fragment),Dn=m(),rt=a("span"),Bn=i("LongT5Config"),Yt=m(),B=a("div"),y(Ye.$$.fragment),Wn=m(),W=a("p"),Hn=i("This is the configuration class to store the configuration of a "),Go=a("a"),Un=i("LongT5Model"),Vn=i(" or a "),Ao=a("a"),Yn=i("FlaxLongT5Model"),Rn=i(`. It is
used to instantiate a LongT5 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the LongT5
`),Re=a("a"),Jn=i("Stancld/LongT5-Local-Base"),Kn=i(" architecture."),Zn=m(),Y=a("p"),Qn=i("Configuration objects inherit from "),Io=a("a"),Xn=i("PretrainedConfig"),ea=i(` and can be used to control the model outputs. Read the
documentation from `),Do=a("a"),oa=i("PretrainedConfig"),ta=i(" for more information."),Rt=m(),R=a("h2"),ce=a("a"),dt=a("span"),y(Je.$$.fragment),na=m(),it=a("span"),aa=i("LongT5Model"),Jt=m(),q=a("div"),y(Ke.$$.fragment),sa=m(),lt=a("p"),ra=i("The bare LONGT5 Model transformer outputting raw hidden-states without any specific head on top."),da=m(),Ze=a("p"),ia=i("The LongT5 model was proposed in "),Qe=a("a"),la=i(`LongT5: Efficient Text-To-Text Transformer for Long
Sequences`),ca=i(` by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo
Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an encoder-decoder transformer pre-trained in a text-to-text denoising
generative setting. LongT5 model is an extension of T5 model, and it enables using one of the two different
efficient attention mechanisms - (1) Local attention, or (2) Transient-Global attention.`),pa=m(),Xe=a("p"),ua=i("This model inherits from "),Bo=a("a"),ha=i("PreTrainedModel"),ma=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fa=m(),eo=a("p"),ga=i("This model is also a PyTorch "),oo=a("a"),_a=i("torch.nn.Module"),Ta=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ba=m(),O=a("div"),y(to.$$.fragment),ya=m(),J=a("p"),va=i("The "),Wo=a("a"),ka=i("LongT5Model"),wa=i(" forward method, overrides the "),ct=a("code"),$a=i("__call__"),xa=i(" special method."),La=m(),y(pe.$$.fragment),za=m(),y(ue.$$.fragment),Kt=m(),K=a("h2"),he=a("a"),pt=a("span"),y(no.$$.fragment),qa=m(),ut=a("span"),Fa=i("LongT5ForConditionalGeneration"),Zt=m(),F=a("div"),y(ao.$$.fragment),ja=m(),so=a("p"),Ma=i("LONGT5 Model with a "),ht=a("code"),Ca=i("language modeling"),Ea=i(" head on top."),Oa=m(),ro=a("p"),Sa=i("The LongT5 model was proposed in "),io=a("a"),Pa=i(`LongT5: Efficient Text-To-Text Transformer for Long
Sequences`),Na=i(` by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo
Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an encoder-decoder transformer pre-trained in a text-to-text denoising
generative setting. LongT5 model is an extension of T5 model, and it enables using one of the two different
efficient attention mechanisms - (1) Local attention, or (2) Transient-Global attention.`),Ga=m(),lo=a("p"),Aa=i("This model inherits from "),Ho=a("a"),Ia=i("PreTrainedModel"),Da=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ba=m(),co=a("p"),Wa=i("This model is also a PyTorch "),po=a("a"),Ha=i("torch.nn.Module"),Ua=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Va=m(),S=a("div"),y(uo.$$.fragment),Ya=m(),Z=a("p"),Ra=i("The "),Uo=a("a"),Ja=i("LongT5ForConditionalGeneration"),Ka=i(" forward method, overrides the "),mt=a("code"),Za=i("__call__"),Qa=i(" special method."),Xa=m(),y(me.$$.fragment),es=m(),y(fe.$$.fragment),Qt=m(),Q=a("h2"),ge=a("a"),ft=a("span"),y(ho.$$.fragment),os=m(),gt=a("span"),ts=i("LongT5EncoderModel"),Xt=m(),j=a("div"),y(mo.$$.fragment),ns=m(),_t=a("p"),as=i("The bare LONGT5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),ss=m(),fo=a("p"),rs=i("The LongT5 model was proposed in "),go=a("a"),ds=i(`LongT5: Efficient Text-To-Text Transformer for Long
Sequences`),is=i(` by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo
Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an encoder-decoder transformer pre-trained in a text-to-text denoising
generative setting. LongT5 model is an extension of T5 model, and it enables using one of the two different
efficient attention mechanisms - (1) Local attention, or (2) Transient-Global attention.`),ls=m(),_o=a("p"),cs=i("This model inherits from "),Vo=a("a"),ps=i("PreTrainedModel"),us=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hs=m(),To=a("p"),ms=i("This model is also a PyTorch "),bo=a("a"),fs=i("torch.nn.Module"),gs=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_s=m(),P=a("div"),y(yo.$$.fragment),Ts=m(),X=a("p"),bs=i("The "),Yo=a("a"),ys=i("LongT5EncoderModel"),vs=i(" forward method, overrides the "),Tt=a("code"),ks=i("__call__"),ws=i(" special method."),$s=m(),y(_e.$$.fragment),xs=m(),y(Te.$$.fragment),en=m(),ee=a("h2"),be=a("a"),bt=a("span"),y(vo.$$.fragment),Ls=m(),yt=a("span"),zs=i("FlaxLongT5Model"),on=m(),C=a("div"),y(ko.$$.fragment),qs=m(),N=a("div"),y(wo.$$.fragment),Fs=m(),oe=a("p"),js=i("The "),vt=a("code"),Ms=i("FlaxLongT5PreTrainedModel"),Cs=i(" forward method, overrides the "),kt=a("code"),Es=i("__call__"),Os=i(" special method."),Ss=m(),y(ye.$$.fragment),Ps=m(),y(ve.$$.fragment),Ns=m(),ke=a("div"),y($o.$$.fragment),Gs=m(),y(we.$$.fragment),As=m(),$e=a("div"),y(xo.$$.fragment),Is=m(),y(xe.$$.fragment),tn=m(),te=a("h2"),Le=a("a"),wt=a("span"),y(Lo.$$.fragment),Ds=m(),$t=a("span"),Bs=i("FlaxLongT5ForConditionalGeneration"),nn=m(),E=a("div"),y(zo.$$.fragment),Ws=m(),G=a("div"),y(qo.$$.fragment),Hs=m(),ne=a("p"),Us=i("The "),xt=a("code"),Vs=i("FlaxLongT5PreTrainedModel"),Ys=i(" forward method, overrides the "),Lt=a("code"),Rs=i("__call__"),Js=i(" special method."),Ks=m(),y(ze.$$.fragment),Zs=m(),y(qe.$$.fragment),Qs=m(),Fe=a("div"),y(Fo.$$.fragment),Xs=m(),y(je.$$.fragment),er=m(),Me=a("div"),y(jo.$$.fragment),or=m(),y(Ce.$$.fragment),this.h()},l(o){const g=Xr('[data-svelte="svelte-1phssyn"]',document.head);d=s(g,"META",{name:!0,content:!0}),g.forEach(t),b=f(o),u=s(o,"H1",{class:!0});var Mo=r(u);p=s(Mo,"A",{id:!0,class:!0,href:!0});var zt=r(p);_=s(zt,"SPAN",{});var qt=r(_);v(n.$$.fragment,qt),qt.forEach(t),zt.forEach(t),c=f(Mo),z=s(Mo,"SPAN",{});var Ft=r(z);Ln=l(Ft,"LongT5"),Ft.forEach(t),Mo.forEach(t),At=f(o),U=s(o,"H2",{class:!0});var Co=r(U);de=s(Co,"A",{id:!0,class:!0,href:!0});var jt=r(de);tt=s(jt,"SPAN",{});var Mt=r(tt);v(Be.$$.fragment,Mt),Mt.forEach(t),jt.forEach(t),zn=f(Co),nt=s(Co,"SPAN",{});var Ct=r(nt);qn=l(Ct,"Overview"),Ct.forEach(t),Co.forEach(t),It=f(o),ie=s(o,"P",{});var Eo=r(ie);Fn=l(Eo,"The LongT5 model was proposed in "),We=s(Eo,"A",{href:!0,rel:!0});var Et=r(We);jn=l(Et,"LongT5: Efficient Text-To-Text Transformer for Long Sequences"),Et.forEach(t),Mn=l(Eo,`
by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an
encoder-decoder transformer pre-trained in a text-to-text denoising generative setting. LongT5 model is an extension of
T5 model, and it enables using one of the two different efficient attention mechanisms - (1) Local attention, or (2)
Transient-Global attention.`),Eo.forEach(t),Dt=f(o),Oo=s(o,"P",{});var Ot=r(Oo);Cn=l(Ot,"The abstract from the paper is the following:"),Ot.forEach(t),Bt=f(o),So=s(o,"P",{});var St=r(So);at=s(St,"EM",{});var Pt=r(at);En=l(Pt,`Recent work has shown that either (1) increasing the input length or (2) increasing model size can improve the
performance of Transformer-based neural models. In this paper, we present a new model, called LongT5, with which we
explore the effects of scaling both the input length and model size at the same time. Specifically, we integrated
attention ideas from long-input transformers (ETC), and adopted pre-training strategies from summarization pre-training
(PEGASUS) into the scalable T5 architecture. The result is a new attention mechanism we call {\\em Transient Global}
(TGlobal), which mimics ETC\u2019s local/global attention mechanism, but without requiring additional side-inputs. We are
able to achieve state-of-the-art results on several summarization tasks and outperform the original T5 models on
question answering tasks.`),Pt.forEach(t),St.forEach(t),Wt=f(o),Po=s(o,"P",{});var Nt=r(Po);On=l(Nt,"Tips:"),Nt.forEach(t),Ht=f(o),No=s(o,"P",{});var tr=r(No);Sn=l(tr,"<INSERT TIPS ABOUT MODEL HERE>"),tr.forEach(t),Ut=f(o),H=s(o,"P",{});var Ro=r(H);Pn=l(Ro,"This model was contributed by "),He=s(Ro,"A",{href:!0,rel:!0});var nr=r(He);Nn=l(nr,"stancld"),nr.forEach(t),Gn=l(Ro,`.
The original code can be found `),Ue=s(Ro,"A",{href:!0,rel:!0});var ar=r(Ue);An=l(ar,"here"),ar.forEach(t),In=l(Ro,"."),Ro.forEach(t),Vt=f(o),V=s(o,"H2",{class:!0});var sn=r(V);le=s(sn,"A",{id:!0,class:!0,href:!0});var sr=r(le);st=s(sr,"SPAN",{});var rr=r(st);v(Ve.$$.fragment,rr),rr.forEach(t),sr.forEach(t),Dn=f(sn),rt=s(sn,"SPAN",{});var dr=r(rt);Bn=l(dr,"LongT5Config"),dr.forEach(t),sn.forEach(t),Yt=f(o),B=s(o,"DIV",{class:!0});var Jo=r(B);v(Ye.$$.fragment,Jo),Wn=f(Jo),W=s(Jo,"P",{});var Ee=r(W);Hn=l(Ee,"This is the configuration class to store the configuration of a "),Go=s(Ee,"A",{href:!0});var ir=r(Go);Un=l(ir,"LongT5Model"),ir.forEach(t),Vn=l(Ee," or a "),Ao=s(Ee,"A",{href:!0});var lr=r(Ao);Yn=l(lr,"FlaxLongT5Model"),lr.forEach(t),Rn=l(Ee,`. It is
used to instantiate a LongT5 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the LongT5
`),Re=s(Ee,"A",{href:!0,rel:!0});var cr=r(Re);Jn=l(cr,"Stancld/LongT5-Local-Base"),cr.forEach(t),Kn=l(Ee," architecture."),Ee.forEach(t),Zn=f(Jo),Y=s(Jo,"P",{});var Ko=r(Y);Qn=l(Ko,"Configuration objects inherit from "),Io=s(Ko,"A",{href:!0});var pr=r(Io);Xn=l(pr,"PretrainedConfig"),pr.forEach(t),ea=l(Ko,` and can be used to control the model outputs. Read the
documentation from `),Do=s(Ko,"A",{href:!0});var ur=r(Do);oa=l(ur,"PretrainedConfig"),ur.forEach(t),ta=l(Ko," for more information."),Ko.forEach(t),Jo.forEach(t),Rt=f(o),R=s(o,"H2",{class:!0});var rn=r(R);ce=s(rn,"A",{id:!0,class:!0,href:!0});var hr=r(ce);dt=s(hr,"SPAN",{});var mr=r(dt);v(Je.$$.fragment,mr),mr.forEach(t),hr.forEach(t),na=f(rn),it=s(rn,"SPAN",{});var fr=r(it);aa=l(fr,"LongT5Model"),fr.forEach(t),rn.forEach(t),Jt=f(o),q=s(o,"DIV",{class:!0});var A=r(q);v(Ke.$$.fragment,A),sa=f(A),lt=s(A,"P",{});var gr=r(lt);ra=l(gr,"The bare LONGT5 Model transformer outputting raw hidden-states without any specific head on top."),gr.forEach(t),da=f(A),Ze=s(A,"P",{});var dn=r(Ze);ia=l(dn,"The LongT5 model was proposed in "),Qe=s(dn,"A",{href:!0,rel:!0});var _r=r(Qe);la=l(_r,`LongT5: Efficient Text-To-Text Transformer for Long
Sequences`),_r.forEach(t),ca=l(dn,` by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo
Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an encoder-decoder transformer pre-trained in a text-to-text denoising
generative setting. LongT5 model is an extension of T5 model, and it enables using one of the two different
efficient attention mechanisms - (1) Local attention, or (2) Transient-Global attention.`),dn.forEach(t),pa=f(A),Xe=s(A,"P",{});var ln=r(Xe);ua=l(ln,"This model inherits from "),Bo=s(ln,"A",{href:!0});var Tr=r(Bo);ha=l(Tr,"PreTrainedModel"),Tr.forEach(t),ma=l(ln,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ln.forEach(t),fa=f(A),eo=s(A,"P",{});var cn=r(eo);ga=l(cn,"This model is also a PyTorch "),oo=s(cn,"A",{href:!0,rel:!0});var br=r(oo);_a=l(br,"torch.nn.Module"),br.forEach(t),Ta=l(cn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cn.forEach(t),ba=f(A),O=s(A,"DIV",{class:!0});var Oe=r(O);v(to.$$.fragment,Oe),ya=f(Oe),J=s(Oe,"P",{});var Zo=r(J);va=l(Zo,"The "),Wo=s(Zo,"A",{href:!0});var yr=r(Wo);ka=l(yr,"LongT5Model"),yr.forEach(t),wa=l(Zo," forward method, overrides the "),ct=s(Zo,"CODE",{});var vr=r(ct);$a=l(vr,"__call__"),vr.forEach(t),xa=l(Zo," special method."),Zo.forEach(t),La=f(Oe),v(pe.$$.fragment,Oe),za=f(Oe),v(ue.$$.fragment,Oe),Oe.forEach(t),A.forEach(t),Kt=f(o),K=s(o,"H2",{class:!0});var pn=r(K);he=s(pn,"A",{id:!0,class:!0,href:!0});var kr=r(he);pt=s(kr,"SPAN",{});var wr=r(pt);v(no.$$.fragment,wr),wr.forEach(t),kr.forEach(t),qa=f(pn),ut=s(pn,"SPAN",{});var $r=r(ut);Fa=l($r,"LongT5ForConditionalGeneration"),$r.forEach(t),pn.forEach(t),Zt=f(o),F=s(o,"DIV",{class:!0});var I=r(F);v(ao.$$.fragment,I),ja=f(I),so=s(I,"P",{});var un=r(so);Ma=l(un,"LONGT5 Model with a "),ht=s(un,"CODE",{});var xr=r(ht);Ca=l(xr,"language modeling"),xr.forEach(t),Ea=l(un," head on top."),un.forEach(t),Oa=f(I),ro=s(I,"P",{});var hn=r(ro);Sa=l(hn,"The LongT5 model was proposed in "),io=s(hn,"A",{href:!0,rel:!0});var Lr=r(io);Pa=l(Lr,`LongT5: Efficient Text-To-Text Transformer for Long
Sequences`),Lr.forEach(t),Na=l(hn,` by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo
Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an encoder-decoder transformer pre-trained in a text-to-text denoising
generative setting. LongT5 model is an extension of T5 model, and it enables using one of the two different
efficient attention mechanisms - (1) Local attention, or (2) Transient-Global attention.`),hn.forEach(t),Ga=f(I),lo=s(I,"P",{});var mn=r(lo);Aa=l(mn,"This model inherits from "),Ho=s(mn,"A",{href:!0});var zr=r(Ho);Ia=l(zr,"PreTrainedModel"),zr.forEach(t),Da=l(mn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mn.forEach(t),Ba=f(I),co=s(I,"P",{});var fn=r(co);Wa=l(fn,"This model is also a PyTorch "),po=s(fn,"A",{href:!0,rel:!0});var qr=r(po);Ha=l(qr,"torch.nn.Module"),qr.forEach(t),Ua=l(fn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fn.forEach(t),Va=f(I),S=s(I,"DIV",{class:!0});var Se=r(S);v(uo.$$.fragment,Se),Ya=f(Se),Z=s(Se,"P",{});var Qo=r(Z);Ra=l(Qo,"The "),Uo=s(Qo,"A",{href:!0});var Fr=r(Uo);Ja=l(Fr,"LongT5ForConditionalGeneration"),Fr.forEach(t),Ka=l(Qo," forward method, overrides the "),mt=s(Qo,"CODE",{});var jr=r(mt);Za=l(jr,"__call__"),jr.forEach(t),Qa=l(Qo," special method."),Qo.forEach(t),Xa=f(Se),v(me.$$.fragment,Se),es=f(Se),v(fe.$$.fragment,Se),Se.forEach(t),I.forEach(t),Qt=f(o),Q=s(o,"H2",{class:!0});var gn=r(Q);ge=s(gn,"A",{id:!0,class:!0,href:!0});var Mr=r(ge);ft=s(Mr,"SPAN",{});var Cr=r(ft);v(ho.$$.fragment,Cr),Cr.forEach(t),Mr.forEach(t),os=f(gn),gt=s(gn,"SPAN",{});var Er=r(gt);ts=l(Er,"LongT5EncoderModel"),Er.forEach(t),gn.forEach(t),Xt=f(o),j=s(o,"DIV",{class:!0});var D=r(j);v(mo.$$.fragment,D),ns=f(D),_t=s(D,"P",{});var Or=r(_t);as=l(Or,"The bare LONGT5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),Or.forEach(t),ss=f(D),fo=s(D,"P",{});var _n=r(fo);rs=l(_n,"The LongT5 model was proposed in "),go=s(_n,"A",{href:!0,rel:!0});var Sr=r(go);ds=l(Sr,`LongT5: Efficient Text-To-Text Transformer for Long
Sequences`),Sr.forEach(t),is=l(_n,` by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo
Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an encoder-decoder transformer pre-trained in a text-to-text denoising
generative setting. LongT5 model is an extension of T5 model, and it enables using one of the two different
efficient attention mechanisms - (1) Local attention, or (2) Transient-Global attention.`),_n.forEach(t),ls=f(D),_o=s(D,"P",{});var Tn=r(_o);cs=l(Tn,"This model inherits from "),Vo=s(Tn,"A",{href:!0});var Pr=r(Vo);ps=l(Pr,"PreTrainedModel"),Pr.forEach(t),us=l(Tn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tn.forEach(t),hs=f(D),To=s(D,"P",{});var bn=r(To);ms=l(bn,"This model is also a PyTorch "),bo=s(bn,"A",{href:!0,rel:!0});var Nr=r(bo);fs=l(Nr,"torch.nn.Module"),Nr.forEach(t),gs=l(bn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bn.forEach(t),_s=f(D),P=s(D,"DIV",{class:!0});var Pe=r(P);v(yo.$$.fragment,Pe),Ts=f(Pe),X=s(Pe,"P",{});var Xo=r(X);bs=l(Xo,"The "),Yo=s(Xo,"A",{href:!0});var Gr=r(Yo);ys=l(Gr,"LongT5EncoderModel"),Gr.forEach(t),vs=l(Xo," forward method, overrides the "),Tt=s(Xo,"CODE",{});var Ar=r(Tt);ks=l(Ar,"__call__"),Ar.forEach(t),ws=l(Xo," special method."),Xo.forEach(t),$s=f(Pe),v(_e.$$.fragment,Pe),xs=f(Pe),v(Te.$$.fragment,Pe),Pe.forEach(t),D.forEach(t),en=f(o),ee=s(o,"H2",{class:!0});var yn=r(ee);be=s(yn,"A",{id:!0,class:!0,href:!0});var Ir=r(be);bt=s(Ir,"SPAN",{});var Dr=r(bt);v(vo.$$.fragment,Dr),Dr.forEach(t),Ir.forEach(t),Ls=f(yn),yt=s(yn,"SPAN",{});var Br=r(yt);zs=l(Br,"FlaxLongT5Model"),Br.forEach(t),yn.forEach(t),on=f(o),C=s(o,"DIV",{class:!0});var Ne=r(C);v(ko.$$.fragment,Ne),qs=f(Ne),N=s(Ne,"DIV",{class:!0});var Ge=r(N);v(wo.$$.fragment,Ge),Fs=f(Ge),oe=s(Ge,"P",{});var et=r(oe);js=l(et,"The "),vt=s(et,"CODE",{});var Wr=r(vt);Ms=l(Wr,"FlaxLongT5PreTrainedModel"),Wr.forEach(t),Cs=l(et," forward method, overrides the "),kt=s(et,"CODE",{});var Hr=r(kt);Es=l(Hr,"__call__"),Hr.forEach(t),Os=l(et," special method."),et.forEach(t),Ss=f(Ge),v(ye.$$.fragment,Ge),Ps=f(Ge),v(ve.$$.fragment,Ge),Ge.forEach(t),Ns=f(Ne),ke=s(Ne,"DIV",{class:!0});var vn=r(ke);v($o.$$.fragment,vn),Gs=f(vn),v(we.$$.fragment,vn),vn.forEach(t),As=f(Ne),$e=s(Ne,"DIV",{class:!0});var kn=r($e);v(xo.$$.fragment,kn),Is=f(kn),v(xe.$$.fragment,kn),kn.forEach(t),Ne.forEach(t),tn=f(o),te=s(o,"H2",{class:!0});var wn=r(te);Le=s(wn,"A",{id:!0,class:!0,href:!0});var Ur=r(Le);wt=s(Ur,"SPAN",{});var Vr=r(wt);v(Lo.$$.fragment,Vr),Vr.forEach(t),Ur.forEach(t),Ds=f(wn),$t=s(wn,"SPAN",{});var Yr=r($t);Bs=l(Yr,"FlaxLongT5ForConditionalGeneration"),Yr.forEach(t),wn.forEach(t),nn=f(o),E=s(o,"DIV",{class:!0});var Ae=r(E);v(zo.$$.fragment,Ae),Ws=f(Ae),G=s(Ae,"DIV",{class:!0});var Ie=r(G);v(qo.$$.fragment,Ie),Hs=f(Ie),ne=s(Ie,"P",{});var ot=r(ne);Us=l(ot,"The "),xt=s(ot,"CODE",{});var Rr=r(xt);Vs=l(Rr,"FlaxLongT5PreTrainedModel"),Rr.forEach(t),Ys=l(ot," forward method, overrides the "),Lt=s(ot,"CODE",{});var Jr=r(Lt);Rs=l(Jr,"__call__"),Jr.forEach(t),Js=l(ot," special method."),ot.forEach(t),Ks=f(Ie),v(ze.$$.fragment,Ie),Zs=f(Ie),v(qe.$$.fragment,Ie),Ie.forEach(t),Qs=f(Ae),Fe=s(Ae,"DIV",{class:!0});var $n=r(Fe);v(Fo.$$.fragment,$n),Xs=f($n),v(je.$$.fragment,$n),$n.forEach(t),er=f(Ae),Me=s(Ae,"DIV",{class:!0});var xn=r(Me);v(jo.$$.fragment,xn),or=f(xn),v(Ce.$$.fragment,xn),xn.forEach(t),Ae.forEach(t),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(gd)),h(p,"id","longt5"),h(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(p,"href","#longt5"),h(u,"class","relative group"),h(de,"id","overview"),h(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(de,"href","#overview"),h(U,"class","relative group"),h(We,"href","https://arxiv.org/abs/2112.07916"),h(We,"rel","nofollow"),h(He,"href","https://huggingface.co/stancld"),h(He,"rel","nofollow"),h(Ue,"href","https://github.com/google-research/longt5"),h(Ue,"rel","nofollow"),h(le,"id","transformers.LongT5Config"),h(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(le,"href","#transformers.LongT5Config"),h(V,"class","relative group"),h(Go,"href","/docs/transformers/pr_16792/en/model_doc/longt5#transformers.LongT5Model"),h(Ao,"href","/docs/transformers/pr_16792/en/model_doc/longt5#transformers.FlaxLongT5Model"),h(Re,"href","https://huggingface.co/Stancld/LongT5-Local-Base"),h(Re,"rel","nofollow"),h(Io,"href","/docs/transformers/pr_16792/en/main_classes/configuration#transformers.PretrainedConfig"),h(Do,"href","/docs/transformers/pr_16792/en/main_classes/configuration#transformers.PretrainedConfig"),h(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ce,"id","transformers.LongT5Model"),h(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ce,"href","#transformers.LongT5Model"),h(R,"class","relative group"),h(Qe,"href","https://arxiv.org/abs/2112.07916"),h(Qe,"rel","nofollow"),h(Bo,"href","/docs/transformers/pr_16792/en/main_classes/model#transformers.PreTrainedModel"),h(oo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(oo,"rel","nofollow"),h(Wo,"href","/docs/transformers/pr_16792/en/model_doc/longt5#transformers.LongT5Model"),h(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(he,"id","transformers.LongT5ForConditionalGeneration"),h(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(he,"href","#transformers.LongT5ForConditionalGeneration"),h(K,"class","relative group"),h(io,"href","https://arxiv.org/abs/2112.07916"),h(io,"rel","nofollow"),h(Ho,"href","/docs/transformers/pr_16792/en/main_classes/model#transformers.PreTrainedModel"),h(po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(po,"rel","nofollow"),h(Uo,"href","/docs/transformers/pr_16792/en/model_doc/longt5#transformers.LongT5ForConditionalGeneration"),h(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ge,"id","transformers.LongT5EncoderModel"),h(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ge,"href","#transformers.LongT5EncoderModel"),h(Q,"class","relative group"),h(go,"href","https://arxiv.org/abs/2112.07916"),h(go,"rel","nofollow"),h(Vo,"href","/docs/transformers/pr_16792/en/main_classes/model#transformers.PreTrainedModel"),h(bo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(bo,"rel","nofollow"),h(Yo,"href","/docs/transformers/pr_16792/en/model_doc/longt5#transformers.LongT5EncoderModel"),h(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(be,"id","transformers.FlaxLongT5Model"),h(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(be,"href","#transformers.FlaxLongT5Model"),h(ee,"class","relative group"),h(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Le,"id","transformers.FlaxLongT5ForConditionalGeneration"),h(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Le,"href","#transformers.FlaxLongT5ForConditionalGeneration"),h(te,"class","relative group"),h(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,d),T(o,b,g),T(o,u,g),e(u,p),e(p,_),k(n,_,null),e(u,c),e(u,z),e(z,Ln),T(o,At,g),T(o,U,g),e(U,de),e(de,tt),k(Be,tt,null),e(U,zn),e(U,nt),e(nt,qn),T(o,It,g),T(o,ie,g),e(ie,Fn),e(ie,We),e(We,jn),e(ie,Mn),T(o,Dt,g),T(o,Oo,g),e(Oo,Cn),T(o,Bt,g),T(o,So,g),e(So,at),e(at,En),T(o,Wt,g),T(o,Po,g),e(Po,On),T(o,Ht,g),T(o,No,g),e(No,Sn),T(o,Ut,g),T(o,H,g),e(H,Pn),e(H,He),e(He,Nn),e(H,Gn),e(H,Ue),e(Ue,An),e(H,In),T(o,Vt,g),T(o,V,g),e(V,le),e(le,st),k(Ve,st,null),e(V,Dn),e(V,rt),e(rt,Bn),T(o,Yt,g),T(o,B,g),k(Ye,B,null),e(B,Wn),e(B,W),e(W,Hn),e(W,Go),e(Go,Un),e(W,Vn),e(W,Ao),e(Ao,Yn),e(W,Rn),e(W,Re),e(Re,Jn),e(W,Kn),e(B,Zn),e(B,Y),e(Y,Qn),e(Y,Io),e(Io,Xn),e(Y,ea),e(Y,Do),e(Do,oa),e(Y,ta),T(o,Rt,g),T(o,R,g),e(R,ce),e(ce,dt),k(Je,dt,null),e(R,na),e(R,it),e(it,aa),T(o,Jt,g),T(o,q,g),k(Ke,q,null),e(q,sa),e(q,lt),e(lt,ra),e(q,da),e(q,Ze),e(Ze,ia),e(Ze,Qe),e(Qe,la),e(Ze,ca),e(q,pa),e(q,Xe),e(Xe,ua),e(Xe,Bo),e(Bo,ha),e(Xe,ma),e(q,fa),e(q,eo),e(eo,ga),e(eo,oo),e(oo,_a),e(eo,Ta),e(q,ba),e(q,O),k(to,O,null),e(O,ya),e(O,J),e(J,va),e(J,Wo),e(Wo,ka),e(J,wa),e(J,ct),e(ct,$a),e(J,xa),e(O,La),k(pe,O,null),e(O,za),k(ue,O,null),T(o,Kt,g),T(o,K,g),e(K,he),e(he,pt),k(no,pt,null),e(K,qa),e(K,ut),e(ut,Fa),T(o,Zt,g),T(o,F,g),k(ao,F,null),e(F,ja),e(F,so),e(so,Ma),e(so,ht),e(ht,Ca),e(so,Ea),e(F,Oa),e(F,ro),e(ro,Sa),e(ro,io),e(io,Pa),e(ro,Na),e(F,Ga),e(F,lo),e(lo,Aa),e(lo,Ho),e(Ho,Ia),e(lo,Da),e(F,Ba),e(F,co),e(co,Wa),e(co,po),e(po,Ha),e(co,Ua),e(F,Va),e(F,S),k(uo,S,null),e(S,Ya),e(S,Z),e(Z,Ra),e(Z,Uo),e(Uo,Ja),e(Z,Ka),e(Z,mt),e(mt,Za),e(Z,Qa),e(S,Xa),k(me,S,null),e(S,es),k(fe,S,null),T(o,Qt,g),T(o,Q,g),e(Q,ge),e(ge,ft),k(ho,ft,null),e(Q,os),e(Q,gt),e(gt,ts),T(o,Xt,g),T(o,j,g),k(mo,j,null),e(j,ns),e(j,_t),e(_t,as),e(j,ss),e(j,fo),e(fo,rs),e(fo,go),e(go,ds),e(fo,is),e(j,ls),e(j,_o),e(_o,cs),e(_o,Vo),e(Vo,ps),e(_o,us),e(j,hs),e(j,To),e(To,ms),e(To,bo),e(bo,fs),e(To,gs),e(j,_s),e(j,P),k(yo,P,null),e(P,Ts),e(P,X),e(X,bs),e(X,Yo),e(Yo,ys),e(X,vs),e(X,Tt),e(Tt,ks),e(X,ws),e(P,$s),k(_e,P,null),e(P,xs),k(Te,P,null),T(o,en,g),T(o,ee,g),e(ee,be),e(be,bt),k(vo,bt,null),e(ee,Ls),e(ee,yt),e(yt,zs),T(o,on,g),T(o,C,g),k(ko,C,null),e(C,qs),e(C,N),k(wo,N,null),e(N,Fs),e(N,oe),e(oe,js),e(oe,vt),e(vt,Ms),e(oe,Cs),e(oe,kt),e(kt,Es),e(oe,Os),e(N,Ss),k(ye,N,null),e(N,Ps),k(ve,N,null),e(C,Ns),e(C,ke),k($o,ke,null),e(ke,Gs),k(we,ke,null),e(C,As),e(C,$e),k(xo,$e,null),e($e,Is),k(xe,$e,null),T(o,tn,g),T(o,te,g),e(te,Le),e(Le,wt),k(Lo,wt,null),e(te,Ds),e(te,$t),e($t,Bs),T(o,nn,g),T(o,E,g),k(zo,E,null),e(E,Ws),e(E,G),k(qo,G,null),e(G,Hs),e(G,ne),e(ne,Us),e(ne,xt),e(xt,Vs),e(ne,Ys),e(ne,Lt),e(Lt,Rs),e(ne,Js),e(G,Ks),k(ze,G,null),e(G,Zs),k(qe,G,null),e(E,Qs),e(E,Fe),k(Fo,Fe,null),e(Fe,Xs),k(je,Fe,null),e(E,er),e(E,Me),k(jo,Me,null),e(Me,or),k(Ce,Me,null),an=!0},p(o,[g]){const Mo={};g&2&&(Mo.$$scope={dirty:g,ctx:o}),pe.$set(Mo);const zt={};g&2&&(zt.$$scope={dirty:g,ctx:o}),ue.$set(zt);const qt={};g&2&&(qt.$$scope={dirty:g,ctx:o}),me.$set(qt);const Ft={};g&2&&(Ft.$$scope={dirty:g,ctx:o}),fe.$set(Ft);const Co={};g&2&&(Co.$$scope={dirty:g,ctx:o}),_e.$set(Co);const jt={};g&2&&(jt.$$scope={dirty:g,ctx:o}),Te.$set(jt);const Mt={};g&2&&(Mt.$$scope={dirty:g,ctx:o}),ye.$set(Mt);const Ct={};g&2&&(Ct.$$scope={dirty:g,ctx:o}),ve.$set(Ct);const Eo={};g&2&&(Eo.$$scope={dirty:g,ctx:o}),we.$set(Eo);const Et={};g&2&&(Et.$$scope={dirty:g,ctx:o}),xe.$set(Et);const Ot={};g&2&&(Ot.$$scope={dirty:g,ctx:o}),ze.$set(Ot);const St={};g&2&&(St.$$scope={dirty:g,ctx:o}),qe.$set(St);const Pt={};g&2&&(Pt.$$scope={dirty:g,ctx:o}),je.$set(Pt);const Nt={};g&2&&(Nt.$$scope={dirty:g,ctx:o}),Ce.$set(Nt)},i(o){an||(w(n.$$.fragment,o),w(Be.$$.fragment,o),w(Ve.$$.fragment,o),w(Ye.$$.fragment,o),w(Je.$$.fragment,o),w(Ke.$$.fragment,o),w(to.$$.fragment,o),w(pe.$$.fragment,o),w(ue.$$.fragment,o),w(no.$$.fragment,o),w(ao.$$.fragment,o),w(uo.$$.fragment,o),w(me.$$.fragment,o),w(fe.$$.fragment,o),w(ho.$$.fragment,o),w(mo.$$.fragment,o),w(yo.$$.fragment,o),w(_e.$$.fragment,o),w(Te.$$.fragment,o),w(vo.$$.fragment,o),w(ko.$$.fragment,o),w(wo.$$.fragment,o),w(ye.$$.fragment,o),w(ve.$$.fragment,o),w($o.$$.fragment,o),w(we.$$.fragment,o),w(xo.$$.fragment,o),w(xe.$$.fragment,o),w(Lo.$$.fragment,o),w(zo.$$.fragment,o),w(qo.$$.fragment,o),w(ze.$$.fragment,o),w(qe.$$.fragment,o),w(Fo.$$.fragment,o),w(je.$$.fragment,o),w(jo.$$.fragment,o),w(Ce.$$.fragment,o),an=!0)},o(o){$(n.$$.fragment,o),$(Be.$$.fragment,o),$(Ve.$$.fragment,o),$(Ye.$$.fragment,o),$(Je.$$.fragment,o),$(Ke.$$.fragment,o),$(to.$$.fragment,o),$(pe.$$.fragment,o),$(ue.$$.fragment,o),$(no.$$.fragment,o),$(ao.$$.fragment,o),$(uo.$$.fragment,o),$(me.$$.fragment,o),$(fe.$$.fragment,o),$(ho.$$.fragment,o),$(mo.$$.fragment,o),$(yo.$$.fragment,o),$(_e.$$.fragment,o),$(Te.$$.fragment,o),$(vo.$$.fragment,o),$(ko.$$.fragment,o),$(wo.$$.fragment,o),$(ye.$$.fragment,o),$(ve.$$.fragment,o),$($o.$$.fragment,o),$(we.$$.fragment,o),$(xo.$$.fragment,o),$(xe.$$.fragment,o),$(Lo.$$.fragment,o),$(zo.$$.fragment,o),$(qo.$$.fragment,o),$(ze.$$.fragment,o),$(qe.$$.fragment,o),$(Fo.$$.fragment,o),$(je.$$.fragment,o),$(jo.$$.fragment,o),$(Ce.$$.fragment,o),an=!1},d(o){t(d),o&&t(b),o&&t(u),x(n),o&&t(At),o&&t(U),x(Be),o&&t(It),o&&t(ie),o&&t(Dt),o&&t(Oo),o&&t(Bt),o&&t(So),o&&t(Wt),o&&t(Po),o&&t(Ht),o&&t(No),o&&t(Ut),o&&t(H),o&&t(Vt),o&&t(V),x(Ve),o&&t(Yt),o&&t(B),x(Ye),o&&t(Rt),o&&t(R),x(Je),o&&t(Jt),o&&t(q),x(Ke),x(to),x(pe),x(ue),o&&t(Kt),o&&t(K),x(no),o&&t(Zt),o&&t(F),x(ao),x(uo),x(me),x(fe),o&&t(Qt),o&&t(Q),x(ho),o&&t(Xt),o&&t(j),x(mo),x(yo),x(_e),x(Te),o&&t(en),o&&t(ee),x(vo),o&&t(on),o&&t(C),x(ko),x(wo),x(ye),x(ve),x($o),x(we),x(xo),x(xe),o&&t(tn),o&&t(te),x(Lo),o&&t(nn),o&&t(E),x(zo),x(qo),x(ze),x(qe),x(Fo),x(je),x(jo),x(Ce)}}}const gd={local:"longt5",sections:[{local:"overview",title:"Overview"},{local:"transformers.LongT5Config",title:"LongT5Config"},{local:"transformers.LongT5Model",title:"LongT5Model"},{local:"transformers.LongT5ForConditionalGeneration",title:"LongT5ForConditionalGeneration"},{local:"transformers.LongT5EncoderModel",title:"LongT5EncoderModel"},{local:"transformers.FlaxLongT5Model",title:"FlaxLongT5Model"},{local:"transformers.FlaxLongT5ForConditionalGeneration",title:"FlaxLongT5ForConditionalGeneration"}],title:"LongT5"};function _d(L){return ed(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class $d extends Kr{constructor(d){super();Zr(this,d,_d,fd,Qr,{})}}export{$d as default,gd as metadata};
