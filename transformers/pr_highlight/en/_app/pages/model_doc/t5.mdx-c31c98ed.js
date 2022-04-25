import{S as J5,i as X5,s as Q5,e as o,k as d,w as k,t as r,M as e1,c as s,d as t,m as c,a,x as v,h as i,b as h,F as e,g as f,y,q as w,o as $,B as x,v as t1,L as fe}from"../../chunks/vendor-6b77c823.js";import{T as zt}from"../../chunks/Tip-39098574.js";import{D as C}from"../../chunks/Docstring-1088f2fb.js";import{C as B}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ve}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as me}from"../../chunks/ExampleCodeBlock-5212b321.js";function n1(q){let p,b,g,u,T;return{c(){p=o("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=s(l,"P",{});var m=a(p);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var E=a(g);u=i(E,"Module"),E.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){f(l,p,m),e(p,b),e(p,g),e(g,u),e(p,T)},d(l){l&&t(p)}}}function o1(q){let p,b,g,u,T;return u=new B({props:{code:`from transformers import T5Tokenizer, T5Model

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5Model.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1

# forward pass
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5Model.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=o("p"),b=r("Example:"),g=d(),k(u.$$.fragment)},l(l){p=s(l,"P",{});var m=a(p);b=i(m,"Example:"),m.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,m){f(l,p,m),e(p,b),f(l,g,m),y(u,l,m),T=!0},p:fe,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function s1(q){let p,b,g,u,T;return u=new B({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)`,highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)`}}),{c(){p=o("p"),b=r("Example:"),g=d(),k(u.$$.fragment)},l(l){p=s(l,"P",{});var m=a(p);b=i(m,"Example:"),m.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,m){f(l,p,m),e(p,b),f(l,g,m),y(u,l,m),T=!0},p:fe,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function a1(q){let p,b,g,u,T;return u=new B({props:{code:`# On a 4 GPU machine with t5-3b:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)  # Splits the model across several devices
model.deparallelize()  # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()`,highlighted:`<span class="hljs-comment"># On a 4 GPU machine with t5-3b:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)  <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){p=o("p"),b=r("Example:"),g=d(),k(u.$$.fragment)},l(l){p=s(l,"P",{});var m=a(p);b=i(m,"Example:"),m.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,m){f(l,p,m),e(p,b),f(l,g,m),y(u,l,m),T=!0},p:fe,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function r1(q){let p,b,g,u,T;return{c(){p=o("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=s(l,"P",{});var m=a(p);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var E=a(g);u=i(E,"Module"),E.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){f(l,p,m),e(p,b),e(p,g),e(g,u),e(p,T)},d(l){l&&t(p)}}}function i1(q){let p,b,g,u,T;return u=new B({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

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
# studies have shown that owning a dog is good for you.`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;summarize: studies have shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you.</span>`}}),{c(){p=o("p"),b=r("Examples:"),g=d(),k(u.$$.fragment)},l(l){p=s(l,"P",{});var m=a(p);b=i(m,"Examples:"),m.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,m){f(l,p,m),e(p,b),f(l,g,m),y(u,l,m),T=!0},p:fe,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function l1(q){let p,b,g,u,T;return u=new B({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)`,highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)`}}),{c(){p=o("p"),b=r("Example:"),g=d(),k(u.$$.fragment)},l(l){p=s(l,"P",{});var m=a(p);b=i(m,"Example:"),m.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,m){f(l,p,m),e(p,b),f(l,g,m),y(u,l,m),T=!0},p:fe,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function d1(q){let p,b,g,u,T;return u=new B({props:{code:`# On a 4 GPU machine with t5-3b:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)  # Splits the model across several devices
model.deparallelize()  # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()`,highlighted:`<span class="hljs-comment"># On a 4 GPU machine with t5-3b:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)  <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){p=o("p"),b=r("Example:"),g=d(),k(u.$$.fragment)},l(l){p=s(l,"P",{});var m=a(p);b=i(m,"Example:"),m.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,m){f(l,p,m),e(p,b),f(l,g,m),y(u,l,m),T=!0},p:fe,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function c1(q){let p,b,g,u,T;return{c(){p=o("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=s(l,"P",{});var m=a(p);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var E=a(g);u=i(E,"Module"),E.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){f(l,p,m),e(p,b),e(p,g),e(g,u),e(p,T)},d(l){l&&t(p)}}}function p1(q){let p,b,g,u,T;return u=new B({props:{code:`from transformers import T5Tokenizer, T5EncoderModel

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5EncoderModel.from_pretrained("t5-small")
input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
outputs = model(input_ids=input_ids)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5EncoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5EncoderModel.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=o("p"),b=r("Example:"),g=d(),k(u.$$.fragment)},l(l){p=s(l,"P",{});var m=a(p);b=i(m,"Example:"),m.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,m){f(l,p,m),e(p,b),f(l,g,m),y(u,l,m),T=!0},p:fe,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function h1(q){let p,b,g,u,T;return u=new B({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)`,highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)`}}),{c(){p=o("p"),b=r("Example:"),g=d(),k(u.$$.fragment)},l(l){p=s(l,"P",{});var m=a(p);b=i(m,"Example:"),m.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,m){f(l,p,m),e(p,b),f(l,g,m),y(u,l,m),T=!0},p:fe,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function u1(q){let p,b,g,u,T;return u=new B({props:{code:`# On a 4 GPU machine with t5-3b:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)  # Splits the model across several devices
model.deparallelize()  # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()`,highlighted:`<span class="hljs-comment"># On a 4 GPU machine with t5-3b:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)  <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){p=o("p"),b=r("Example:"),g=d(),k(u.$$.fragment)},l(l){p=s(l,"P",{});var m=a(p);b=i(m,"Example:"),m.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,m){f(l,p,m),e(p,b),f(l,g,m),y(u,l,m),T=!0},p:fe,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function m1(q){let p,b,g,u,T,l,m,E,je,oe,j,ee,S,se,Fe,G,Me,ye,U,A,ae,pe,M,N,he,K,we,ue,W,Ce,$e,P,Pe,H,V,_e,O,Ne,ge,I,Oe,R,Le;return{c(){p=o("p"),b=r("TF 2.0 models accepts two formats as inputs:"),g=d(),u=o("ul"),T=o("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),m=d(),E=o("li"),je=r("having all inputs as a list, tuple or dict in the first positional arguments."),oe=d(),j=o("p"),ee=r("This second option is useful when using "),S=o("code"),se=r("tf.keras.Model.fit"),Fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=o("code"),Me=r("model(inputs)"),ye=r("."),U=d(),A=o("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),M=o("ul"),N=o("li"),he=r("a single Tensor with "),K=o("code"),we=r("input_ids"),ue=r(" only and nothing else: "),W=o("code"),Ce=r("model(inputs_ids)"),$e=d(),P=o("li"),Pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=r("model([input_ids, attention_mask])"),_e=r(" or "),O=o("code"),Ne=r("model([input_ids, attention_mask, token_type_ids])"),ge=d(),I=o("li"),Oe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),Le=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){p=s(z,"P",{});var F=a(p);b=i(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=c(z),u=s(z,"UL",{});var te=a(u);T=s(te,"LI",{});var Ue=a(T);l=i(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),m=c(te),E=s(te,"LI",{});var ot=a(E);je=i(ot,"having all inputs as a list, tuple or dict in the first positional arguments."),ot.forEach(t),te.forEach(t),oe=c(z),j=s(z,"P",{});var D=a(j);ee=i(D,"This second option is useful when using "),S=s(D,"CODE",{});var We=a(S);se=i(We,"tf.keras.Model.fit"),We.forEach(t),Fe=i(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=s(D,"CODE",{});var ne=a(G);Me=i(ne,"model(inputs)"),ne.forEach(t),ye=i(D,"."),D.forEach(t),U=c(z),A=s(z,"P",{});var st=a(A);ae=i(st,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),st.forEach(t),pe=c(z),M=s(z,"UL",{});var L=a(M);N=s(L,"LI",{});var Y=a(N);he=i(Y,"a single Tensor with "),K=s(Y,"CODE",{});var at=a(K);we=i(at,"input_ids"),at.forEach(t),ue=i(Y," only and nothing else: "),W=s(Y,"CODE",{});var Ae=a(W);Ce=i(Ae,"model(inputs_ids)"),Ae.forEach(t),Y.forEach(t),$e=c(L),P=s(L,"LI",{});var Z=a(P);Pe=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(Z,"CODE",{});var rt=a(H);V=i(rt,"model([input_ids, attention_mask])"),rt.forEach(t),_e=i(Z," or "),O=s(Z,"CODE",{});var Ie=a(O);Ne=i(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(t),Z.forEach(t),ge=c(L),I=s(L,"LI",{});var De=a(I);Oe=i(De,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=s(De,"CODE",{});var it=a(R);Le=i(it,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),it.forEach(t),De.forEach(t),L.forEach(t)},m(z,F){f(z,p,F),e(p,b),f(z,g,F),f(z,u,F),e(u,T),e(T,l),e(u,m),e(u,E),e(E,je),f(z,oe,F),f(z,j,F),e(j,ee),e(j,S),e(S,se),e(j,Fe),e(j,G),e(G,Me),e(j,ye),f(z,U,F),f(z,A,F),e(A,ae),f(z,pe,F),f(z,M,F),e(M,N),e(N,he),e(N,K),e(K,we),e(N,ue),e(N,W),e(W,Ce),e(M,$e),e(M,P),e(P,Pe),e(P,H),e(H,V),e(P,_e),e(P,O),e(O,Ne),e(M,ge),e(M,I),e(I,Oe),e(I,R),e(R,Le)},d(z){z&&t(p),z&&t(g),z&&t(u),z&&t(oe),z&&t(j),z&&t(U),z&&t(A),z&&t(pe),z&&t(M)}}}function f1(q){let p,b,g,u,T;return{c(){p=o("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=s(l,"P",{});var m=a(p);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var E=a(g);u=i(E,"Module"),E.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){f(l,p,m),e(p,b),e(p,g),e(g,u),e(p,T)},d(l){l&&t(p)}}}function _1(q){let p,b,g,u,T;return u=new B({props:{code:`from transformers import T5Tokenizer, TFT5Model

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = TFT5Model.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="tf"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="tf").input_ids  # Batch size 1

# forward pass
outputs = model(input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, TFT5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFT5Model.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=o("p"),b=r("Examples:"),g=d(),k(u.$$.fragment)},l(l){p=s(l,"P",{});var m=a(p);b=i(m,"Examples:"),m.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,m){f(l,p,m),e(p,b),f(l,g,m),y(u,l,m),T=!0},p:fe,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function g1(q){let p,b,g,u,T,l,m,E,je,oe,j,ee,S,se,Fe,G,Me,ye,U,A,ae,pe,M,N,he,K,we,ue,W,Ce,$e,P,Pe,H,V,_e,O,Ne,ge,I,Oe,R,Le;return{c(){p=o("p"),b=r("TF 2.0 models accepts two formats as inputs:"),g=d(),u=o("ul"),T=o("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),m=d(),E=o("li"),je=r("having all inputs as a list, tuple or dict in the first positional arguments."),oe=d(),j=o("p"),ee=r("This second option is useful when using "),S=o("code"),se=r("tf.keras.Model.fit"),Fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=o("code"),Me=r("model(inputs)"),ye=r("."),U=d(),A=o("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),M=o("ul"),N=o("li"),he=r("a single Tensor with "),K=o("code"),we=r("input_ids"),ue=r(" only and nothing else: "),W=o("code"),Ce=r("model(inputs_ids)"),$e=d(),P=o("li"),Pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=r("model([input_ids, attention_mask])"),_e=r(" or "),O=o("code"),Ne=r("model([input_ids, attention_mask, token_type_ids])"),ge=d(),I=o("li"),Oe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),Le=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){p=s(z,"P",{});var F=a(p);b=i(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=c(z),u=s(z,"UL",{});var te=a(u);T=s(te,"LI",{});var Ue=a(T);l=i(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),m=c(te),E=s(te,"LI",{});var ot=a(E);je=i(ot,"having all inputs as a list, tuple or dict in the first positional arguments."),ot.forEach(t),te.forEach(t),oe=c(z),j=s(z,"P",{});var D=a(j);ee=i(D,"This second option is useful when using "),S=s(D,"CODE",{});var We=a(S);se=i(We,"tf.keras.Model.fit"),We.forEach(t),Fe=i(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=s(D,"CODE",{});var ne=a(G);Me=i(ne,"model(inputs)"),ne.forEach(t),ye=i(D,"."),D.forEach(t),U=c(z),A=s(z,"P",{});var st=a(A);ae=i(st,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),st.forEach(t),pe=c(z),M=s(z,"UL",{});var L=a(M);N=s(L,"LI",{});var Y=a(N);he=i(Y,"a single Tensor with "),K=s(Y,"CODE",{});var at=a(K);we=i(at,"input_ids"),at.forEach(t),ue=i(Y," only and nothing else: "),W=s(Y,"CODE",{});var Ae=a(W);Ce=i(Ae,"model(inputs_ids)"),Ae.forEach(t),Y.forEach(t),$e=c(L),P=s(L,"LI",{});var Z=a(P);Pe=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(Z,"CODE",{});var rt=a(H);V=i(rt,"model([input_ids, attention_mask])"),rt.forEach(t),_e=i(Z," or "),O=s(Z,"CODE",{});var Ie=a(O);Ne=i(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(t),Z.forEach(t),ge=c(L),I=s(L,"LI",{});var De=a(I);Oe=i(De,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=s(De,"CODE",{});var it=a(R);Le=i(it,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),it.forEach(t),De.forEach(t),L.forEach(t)},m(z,F){f(z,p,F),e(p,b),f(z,g,F),f(z,u,F),e(u,T),e(T,l),e(u,m),e(u,E),e(E,je),f(z,oe,F),f(z,j,F),e(j,ee),e(j,S),e(S,se),e(j,Fe),e(j,G),e(G,Me),e(j,ye),f(z,U,F),f(z,A,F),e(A,ae),f(z,pe,F),f(z,M,F),e(M,N),e(N,he),e(N,K),e(K,we),e(N,ue),e(N,W),e(W,Ce),e(M,$e),e(M,P),e(P,Pe),e(P,H),e(H,V),e(P,_e),e(P,O),e(O,Ne),e(M,ge),e(M,I),e(I,Oe),e(I,R),e(R,Le)},d(z){z&&t(p),z&&t(g),z&&t(u),z&&t(oe),z&&t(j),z&&t(U),z&&t(A),z&&t(pe),z&&t(M)}}}function T1(q){let p,b,g,u,T;return{c(){p=o("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=s(l,"P",{});var m=a(p);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var E=a(g);u=i(E,"Module"),E.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){f(l,p,m),e(p,b),e(p,g),e(g,u),e(p,T)},d(l){l&&t(p)}}}function b1(q){let p,b,g,u,T;return u=new B({props:{code:`from transformers import T5Tokenizer, TFT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = TFT5ForConditionalGeneration.from_pretrained("t5-small")

# training
inputs = tokenizer("The <extra_id_0> walks in <extra_id_1> park", return_tensors="tf").input_ids
labels = tokenizer("<extra_id_0> cute dog <extra_id_1> the <extra_id_2>", return_tensors="tf").input_ids
outputs = model(inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits

# inference
inputs = tokenizer(
    "summarize: studies have shown that owning a dog is good for you", return_tensors="tf"
).input_ids  # Batch size 1
outputs = model.generate(inputs)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
# studies have shown that owning a dog is good for you`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, TFT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;summarize: studies have shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you</span>`}}),{c(){p=o("p"),b=r("Examples:"),g=d(),k(u.$$.fragment)},l(l){p=s(l,"P",{});var m=a(p);b=i(m,"Examples:"),m.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,m){f(l,p,m),e(p,b),f(l,g,m),y(u,l,m),T=!0},p:fe,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function k1(q){let p,b,g,u,T,l,m,E,je,oe,j,ee,S,se,Fe,G,Me,ye,U,A,ae,pe,M,N,he,K,we,ue,W,Ce,$e,P,Pe,H,V,_e,O,Ne,ge,I,Oe,R,Le;return{c(){p=o("p"),b=r("TF 2.0 models accepts two formats as inputs:"),g=d(),u=o("ul"),T=o("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),m=d(),E=o("li"),je=r("having all inputs as a list, tuple or dict in the first positional arguments."),oe=d(),j=o("p"),ee=r("This second option is useful when using "),S=o("code"),se=r("tf.keras.Model.fit"),Fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=o("code"),Me=r("model(inputs)"),ye=r("."),U=d(),A=o("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),M=o("ul"),N=o("li"),he=r("a single Tensor with "),K=o("code"),we=r("input_ids"),ue=r(" only and nothing else: "),W=o("code"),Ce=r("model(inputs_ids)"),$e=d(),P=o("li"),Pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=r("model([input_ids, attention_mask])"),_e=r(" or "),O=o("code"),Ne=r("model([input_ids, attention_mask, token_type_ids])"),ge=d(),I=o("li"),Oe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),Le=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){p=s(z,"P",{});var F=a(p);b=i(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=c(z),u=s(z,"UL",{});var te=a(u);T=s(te,"LI",{});var Ue=a(T);l=i(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),m=c(te),E=s(te,"LI",{});var ot=a(E);je=i(ot,"having all inputs as a list, tuple or dict in the first positional arguments."),ot.forEach(t),te.forEach(t),oe=c(z),j=s(z,"P",{});var D=a(j);ee=i(D,"This second option is useful when using "),S=s(D,"CODE",{});var We=a(S);se=i(We,"tf.keras.Model.fit"),We.forEach(t),Fe=i(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=s(D,"CODE",{});var ne=a(G);Me=i(ne,"model(inputs)"),ne.forEach(t),ye=i(D,"."),D.forEach(t),U=c(z),A=s(z,"P",{});var st=a(A);ae=i(st,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),st.forEach(t),pe=c(z),M=s(z,"UL",{});var L=a(M);N=s(L,"LI",{});var Y=a(N);he=i(Y,"a single Tensor with "),K=s(Y,"CODE",{});var at=a(K);we=i(at,"input_ids"),at.forEach(t),ue=i(Y," only and nothing else: "),W=s(Y,"CODE",{});var Ae=a(W);Ce=i(Ae,"model(inputs_ids)"),Ae.forEach(t),Y.forEach(t),$e=c(L),P=s(L,"LI",{});var Z=a(P);Pe=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(Z,"CODE",{});var rt=a(H);V=i(rt,"model([input_ids, attention_mask])"),rt.forEach(t),_e=i(Z," or "),O=s(Z,"CODE",{});var Ie=a(O);Ne=i(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(t),Z.forEach(t),ge=c(L),I=s(L,"LI",{});var De=a(I);Oe=i(De,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=s(De,"CODE",{});var it=a(R);Le=i(it,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),it.forEach(t),De.forEach(t),L.forEach(t)},m(z,F){f(z,p,F),e(p,b),f(z,g,F),f(z,u,F),e(u,T),e(T,l),e(u,m),e(u,E),e(E,je),f(z,oe,F),f(z,j,F),e(j,ee),e(j,S),e(S,se),e(j,Fe),e(j,G),e(G,Me),e(j,ye),f(z,U,F),f(z,A,F),e(A,ae),f(z,pe,F),f(z,M,F),e(M,N),e(N,he),e(N,K),e(K,we),e(N,ue),e(N,W),e(W,Ce),e(M,$e),e(M,P),e(P,Pe),e(P,H),e(H,V),e(P,_e),e(P,O),e(O,Ne),e(M,ge),e(M,I),e(I,Oe),e(I,R),e(R,Le)},d(z){z&&t(p),z&&t(g),z&&t(u),z&&t(oe),z&&t(j),z&&t(U),z&&t(A),z&&t(pe),z&&t(M)}}}function v1(q){let p,b,g,u,T;return{c(){p=o("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=s(l,"P",{});var m=a(p);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var E=a(g);u=i(E,"Module"),E.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){f(l,p,m),e(p,b),e(p,g),e(g,u),e(p,T)},d(l){l&&t(p)}}}function y1(q){let p,b,g,u,T;return u=new B({props:{code:`from transformers import T5Tokenizer, TFT5EncoderModel

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = TFT5EncoderModel.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="tf"
).input_ids  # Batch size 1
outputs = model(input_ids)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, TFT5EncoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFT5EncoderModel.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)`}}),{c(){p=o("p"),b=r("Examples:"),g=d(),k(u.$$.fragment)},l(l){p=s(l,"P",{});var m=a(p);b=i(m,"Examples:"),m.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,m){f(l,p,m),e(p,b),f(l,g,m),y(u,l,m),T=!0},p:fe,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function w1(q){let p,b,g,u,T;return{c(){p=o("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=s(l,"P",{});var m=a(p);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var E=a(g);u=i(E,"Module"),E.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){f(l,p,m),e(p,b),e(p,g),e(g,u),e(p,T)},d(l){l&&t(p)}}}function $1(q){let p,b,g,u,T;return u=new B({props:{code:`from transformers import T5Tokenizer, FlaxT5Model

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5Model.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="np"
).input_ids
decoder_input_ids = tokenizer("Studies show that", return_tensors="np").input_ids

# forward pass
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5Model.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=o("p"),b=r("Example:"),g=d(),k(u.$$.fragment)},l(l){p=s(l,"P",{});var m=a(p);b=i(m,"Example:"),m.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,m){f(l,p,m),e(p,b),f(l,g,m),y(u,l,m),T=!0},p:fe,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function x1(q){let p,b,g,u,T;return u=new B({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=o("p"),b=r("Example:"),g=d(),k(u.$$.fragment)},l(l){p=s(l,"P",{});var m=a(p);b=i(m,"Example:"),m.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,m){f(l,p,m),e(p,b),f(l,g,m),y(u,l,m),T=!0},p:fe,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function z1(q){let p,b,g,u,T;return u=new B({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
import jax.numpy as jnp

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=o("p"),b=r("Example:"),g=d(),k(u.$$.fragment)},l(l){p=s(l,"P",{});var m=a(p);b=i(m,"Example:"),m.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,m){f(l,p,m),e(p,b),f(l,g,m),y(u,l,m),T=!0},p:fe,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function q1(q){let p,b,g,u,T;return{c(){p=o("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=s(l,"P",{});var m=a(p);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var E=a(g);u=i(E,"Module"),E.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){f(l,p,m),e(p,b),e(p,g),e(g,u),e(p,T)},d(l){l&&t(p)}}}function E1(q){let p,b,g,u,T;return u=new B({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

ARTICLE_TO_SUMMARIZE = "summarize: My friends are cool but they eat too many carbs."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], return_tensors="np")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"]).sequences
print(tokenizer.decode(summary_ids[0], skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;summarize: My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){p=o("p"),b=r("Example:"),g=d(),k(u.$$.fragment)},l(l){p=s(l,"P",{});var m=a(p);b=i(m,"Example:"),m.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,m){f(l,p,m),e(p,b),f(l,g,m),y(u,l,m),T=!0},p:fe,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function j1(q){let p,b,g,u,T;return u=new B({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=o("p"),b=r("Example:"),g=d(),k(u.$$.fragment)},l(l){p=s(l,"P",{});var m=a(p);b=i(m,"Example:"),m.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,m){f(l,p,m),e(p,b),f(l,g,m),y(u,l,m),T=!0},p:fe,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function F1(q){let p,b,g,u,T;return u=new B({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
import jax.numpy as jnp

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "summarize: My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;summarize: My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=o("p"),b=r("Example:"),g=d(),k(u.$$.fragment)},l(l){p=s(l,"P",{});var m=a(p);b=i(m,"Example:"),m.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,m){f(l,p,m),e(p,b),f(l,g,m),y(u,l,m),T=!0},p:fe,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function M1(q){let p,b,g,u,T,l,m,E,je,oe,j,ee,S,se,Fe,G,Me,ye,U,A,ae,pe,M,N,he,K,we,ue,W,Ce,$e,P,Pe,H,V,_e,O,Ne,ge,I,Oe,R,Le,z,F,te,Ue,ot,D,We,ne,st,L,Y,at,Ae,Z,rt,Ie,De,it,Gd,Qa,Ap,Ud,Re,ri,ii,Ao,Ip,Dp,li,di,Io,Sp,Gp,ci,pi,Do,Up,Wp,hi,ui,So,Rp,Bp,mi,er,Go,Hp,Vp,Wd,tr,Kp,Rd,qt,fi,fn,_i,Yp,Zp,nr,Jp,Xp,Qp,gi,_n,Ti,eh,th,or,nh,oh,sh,bi,gn,ki,ah,rh,sr,ih,lh,Bd,Tn,dh,Uo,ch,ph,Hd,Et,hh,Wo,uh,mh,Ro,fh,_h,Vd,ar,Kd,It,bn,vi,Bo,gh,yi,Th,Yd,lt,bh,wi,kh,vh,$i,yh,wh,xi,$h,xh,Zd,kn,zh,rr,qh,Eh,Jd,vn,Qe,zi,jh,Fh,Te,Mh,qi,Ch,Ph,Ei,Nh,Oh,ji,Lh,Ah,Fi,Ih,Dh,Mi,Sh,Gh,ir,Uh,Wh,Rh,Ci,Bh,Hh,Ho,Vh,Vo,Kh,Ko,Yh,Zh,Jh,be,Pi,Xh,Qh,Ni,eu,tu,Yo,nu,re,ou,Oi,su,au,Li,ru,iu,Ai,lu,du,Ii,cu,pu,Di,hu,uu,Si,mu,fu,Gi,_u,gu,Tu,Dt,bu,Ui,ku,vu,Wi,yu,wu,$u,ke,xu,Ri,zu,qu,Bi,Eu,ju,Hi,Fu,Mu,Vi,Cu,Pu,Zo,Nu,Ou,Ki,Lu,Au,Iu,Jo,Xd,lr,Du,Qd,jt,Yi,Xo,Su,Zi,Gu,Uu,Wu,Ji,St,Ru,Qo,Bu,Hu,es,Vu,Ku,Yu,Xi,ts,Zu,Qi,Ju,Xu,ec,dr,tc,Gt,yn,el,ns,Qu,tl,em,nc,dt,tm,cr,nm,om,os,sm,am,ss,rm,im,oc,as,sc,Be,lm,nl,dm,cm,ol,pm,hm,pr,um,mm,sl,fm,_m,ac,hr,gm,rc,rs,ic,ur,lc,Ut,wn,al,is,Tm,rl,bm,dc,ct,km,ls,vm,ym,il,wm,$m,ll,xm,zm,cc,Wt,$n,dl,ds,qm,cl,Em,pc,mr,jm,hc,xn,pl,Rt,Fm,cs,Mm,Cm,ps,Pm,Nm,Om,hl,Se,Lm,hs,Am,Im,us,Dm,Sm,ms,Gm,Um,fs,Wm,Rm,_s,Bm,Hm,uc,Bt,zn,ul,gs,Vm,ml,Km,mc,wt,Ts,Ym,$t,Zm,fr,Jm,Xm,_r,Qm,ef,bs,tf,nf,of,Ht,sf,gr,af,rf,Tr,lf,df,fc,Vt,qn,fl,ks,cf,_l,pf,_c,ie,vs,hf,ys,uf,ws,mf,ff,_f,$s,gf,br,Tf,bf,kf,Ft,xs,vf,gl,yf,wf,zs,kr,$f,Tl,xf,zf,vr,qf,bl,Ef,jf,En,qs,Ff,Es,Mf,kl,Cf,Pf,Nf,jn,js,Of,vl,Lf,Af,yr,Fs,gc,Kt,Fn,yl,Ms,If,wl,Df,Tc,Ge,Cs,Sf,Yt,Gf,$l,Uf,Wf,Ps,Rf,Bf,Hf,Ns,Vf,wr,Kf,Yf,Zf,Mt,Os,Jf,xl,Xf,Qf,Ls,$r,e_,zl,t_,n_,xr,o_,ql,s_,a_,Mn,As,r_,El,i_,bc,Zt,Cn,jl,Is,l_,Fl,d_,kc,J,Ds,c_,Ml,p_,h_,Ss,u_,Gs,m_,f_,__,Us,g_,zr,T_,b_,k_,Ws,v_,Rs,y_,w_,$_,pt,Bs,x_,Jt,z_,qr,q_,E_,Cl,j_,F_,M_,Pn,C_,Nn,P_,ht,Hs,N_,Pl,O_,L_,Nl,A_,I_,On,D_,Ct,Vs,S_,Ol,G_,U_,Ln,vc,Xt,An,Ll,Ks,W_,Al,R_,yc,X,Ys,B_,Zs,H_,Il,V_,K_,Y_,Js,Z_,Xs,J_,X_,Q_,Qs,eg,Er,tg,ng,og,ea,sg,ta,ag,rg,ig,ut,na,lg,Qt,dg,jr,cg,pg,Dl,hg,ug,mg,In,fg,Dn,_g,mt,oa,gg,Sl,Tg,bg,Gl,kg,vg,Sn,yg,Pt,sa,wg,Ul,$g,xg,Gn,wc,en,Un,Wl,aa,zg,Rl,qg,$c,Q,ra,Eg,Bl,jg,Fg,ia,Mg,la,Cg,Pg,Ng,da,Og,Fr,Lg,Ag,Ig,ca,Dg,pa,Sg,Gg,Ug,ft,ha,Wg,tn,Rg,Mr,Bg,Hg,Hl,Vg,Kg,Yg,Wn,Zg,Rn,Jg,_t,ua,Xg,Vl,Qg,eT,Kl,tT,nT,Bn,oT,Nt,ma,sT,Yl,aT,rT,Hn,xc,nn,Vn,Zl,fa,iT,Jl,lT,zc,le,_a,dT,Xl,cT,pT,ga,hT,Ta,uT,mT,fT,ba,_T,Cr,gT,TT,bT,ka,kT,va,vT,yT,wT,Kn,$T,gt,ya,xT,on,zT,Pr,qT,ET,Ql,jT,FT,MT,Yn,CT,Zn,qc,sn,Jn,ed,wa,PT,td,NT,Ec,de,$a,OT,xa,LT,nd,AT,IT,DT,za,ST,qa,GT,UT,WT,Ea,RT,Nr,BT,HT,VT,ja,KT,Fa,YT,ZT,JT,Xn,XT,Tt,Ma,QT,an,eb,Or,tb,nb,od,ob,sb,ab,Qn,rb,eo,jc,rn,to,sd,Ca,ib,ad,lb,Fc,ce,Pa,db,rd,cb,pb,Na,hb,Oa,ub,mb,fb,La,_b,Lr,gb,Tb,bb,Aa,kb,Ia,vb,yb,wb,no,$b,bt,Da,xb,ln,zb,Ar,qb,Eb,id,jb,Fb,Mb,oo,Cb,so,Mc,dn,ao,ld,Sa,Pb,dd,Nb,Cc,et,Ga,Ob,kt,Ua,Lb,cn,Ab,cd,Ib,Db,pd,Sb,Gb,Ub,ro,Wb,io,Rb,lo,Wa,Bb,co,Hb,po,Ra,Vb,ho,Pc,pn,uo,hd,Ba,Kb,ud,Yb,Nc,tt,Ha,Zb,vt,Va,Jb,hn,Xb,md,Qb,ek,fd,tk,nk,ok,mo,sk,fo,ak,_o,Ka,rk,go,ik,To,Ya,lk,bo,Oc;return l=new ve({}),se=new ve({}),Bo=new ve({}),Ho=new B({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer("The <extra_id_0> walks in <extra_id_1> park", return_tensors="pt").input_ids
labels = tokenizer("<extra_id_0> cute dog <extra_id_1> the <extra_id_2>", return_tensors="pt").input_ids
# the forward function automatically creates the correct decoder_input_ids
loss = model(input_ids=input_ids, labels=labels).loss`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

input_ids = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
labels = tokenizer(<span class="hljs-string">&quot;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
loss = model(input_ids=input_ids, labels=labels).loss`}}),Yo=new B({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer("translate English to German: The house is wonderful.", return_tensors="pt").input_ids
labels = tokenizer("Das Haus ist wunderbar.", return_tensors="pt").input_ids
# the forward function automatically creates the correct decoder_input_ids
loss = model(input_ids=input_ids, labels=labels).loss`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

input_ids = tokenizer(<span class="hljs-string">&quot;translate English to German: The house is wonderful.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
labels = tokenizer(<span class="hljs-string">&quot;Das Haus ist wunderbar.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
loss = model(input_ids=input_ids, labels=labels).loss`}}),Jo=new B({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration
import torch

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

# the following 2 hyperparameters are task-specific
max_source_length = 512
max_target_length = 128

# Suppose we have the following 2 training examples:
input_sequence_1 = "Welcome to NYC"
output_sequence_1 = "Bienvenue \xE0 NYC"

input_sequence_2 = "HuggingFace is a company"
output_sequence_2 = "HuggingFace est une entreprise"

# encode the inputs
task_prefix = "translate English to French: "
input_sequences = [input_sequence_1, input_sequence_2]
encoding = tokenizer(
    [task_prefix + sequence for sequence in input_sequences],
    padding="longest",
    max_length=max_source_length,
    truncation=True,
    return_tensors="pt",
)
input_ids, attention_mask = encoding.input_ids, encoding.attention_mask

# encode the targets
target_encoding = tokenizer(
    [output_sequence_1, output_sequence_2], padding="longest", max_length=max_target_length, truncation=True
)
labels = target_encoding.input_ids

# replace padding token id's of the labels by -100
labels = torch.tensor(labels)
labels[labels == tokenizer.pad_token_id] = -100

# forward pass
loss = model(input_ids=input_ids, attention_mask=attention_mask, labels=labels).loss`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration
<span class="hljs-keyword">import</span> torch

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-comment"># the following 2 hyperparameters are task-specific</span>
max_source_length = <span class="hljs-number">512</span>
max_target_length = <span class="hljs-number">128</span>

<span class="hljs-comment"># Suppose we have the following 2 training examples:</span>
input_sequence_1 = <span class="hljs-string">&quot;Welcome to NYC&quot;</span>
output_sequence_1 = <span class="hljs-string">&quot;Bienvenue \xE0 NYC&quot;</span>

input_sequence_2 = <span class="hljs-string">&quot;HuggingFace is a company&quot;</span>
output_sequence_2 = <span class="hljs-string">&quot;HuggingFace est une entreprise&quot;</span>

<span class="hljs-comment"># encode the inputs</span>
task_prefix = <span class="hljs-string">&quot;translate English to French: &quot;</span>
input_sequences = [input_sequence_1, input_sequence_2]
encoding = tokenizer(
    [task_prefix + sequence <span class="hljs-keyword">for</span> sequence <span class="hljs-keyword">in</span> input_sequences],
    padding=<span class="hljs-string">&quot;longest&quot;</span>,
    max_length=max_source_length,
    truncation=<span class="hljs-literal">True</span>,
    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
)
input_ids, attention_mask = encoding.input_ids, encoding.attention_mask

<span class="hljs-comment"># encode the targets</span>
target_encoding = tokenizer(
    [output_sequence_1, output_sequence_2], padding=<span class="hljs-string">&quot;longest&quot;</span>, max_length=max_target_length, truncation=<span class="hljs-literal">True</span>
)
labels = target_encoding.input_ids

<span class="hljs-comment"># replace padding token id&#x27;s of the labels by -100</span>
labels = torch.tensor(labels)
labels[labels == tokenizer.pad_token_id] = -<span class="hljs-number">100</span>

<span class="hljs-comment"># forward pass</span>
loss = model(input_ids=input_ids, attention_mask=attention_mask, labels=labels).loss`}}),ns=new ve({}),as=new B({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer("translate English to German: The house is wonderful.", return_tensors="pt").input_ids
outputs = model.generate(input_ids)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
# Das Haus ist wunderbar.`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

input_ids = tokenizer(<span class="hljs-string">&quot;translate English to German: The house is wonderful.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
outputs = model.generate(input_ids)
<span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
<span class="hljs-comment"># Das Haus ist wunderbar.</span>`}}),rs=new B({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

# when generating, we will use the logits of right-most token to predict the next token
# so the padding should be on the left
tokenizer.padding_side = "left"
tokenizer.pad_token = tokenizer.eos_token  # to avoid an error

task_prefix = "translate English to German: "
sentences = ["The house is wonderful.", "I like to work in NYC."]  # use different length sentences to test batching
inputs = tokenizer([task_prefix + sentence for sentence in sentences], return_tensors="pt", padding=True)

output_sequences = model.generate(
    input_ids=inputs["input_ids"],
    attention_mask=inputs["attention_mask"],
    do_sample=False,  # disable sampling to test if batching affects output
)

print(tokenizer.batch_decode(output_sequences, skip_special_tokens=True))

# ['Das Haus ist wunderbar.', 'Ich arbeite gerne in NYC.']`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-comment"># when generating, we will use the logits of right-most token to predict the next token</span>
<span class="hljs-comment"># so the padding should be on the left</span>
tokenizer.padding_side = <span class="hljs-string">&quot;left&quot;</span>
tokenizer.pad_token = tokenizer.eos_token  <span class="hljs-comment"># to avoid an error</span>

task_prefix = <span class="hljs-string">&quot;translate English to German: &quot;</span>
sentences = [<span class="hljs-string">&quot;The house is wonderful.&quot;</span>, <span class="hljs-string">&quot;I like to work in NYC.&quot;</span>]  <span class="hljs-comment"># use different length sentences to test batching</span>
inputs = tokenizer([task_prefix + sentence <span class="hljs-keyword">for</span> sentence <span class="hljs-keyword">in</span> sentences], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)

output_sequences = model.generate(
    input_ids=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>],
    attention_mask=inputs[<span class="hljs-string">&quot;attention_mask&quot;</span>],
    do_sample=<span class="hljs-literal">False</span>,  <span class="hljs-comment"># disable sampling to test if batching affects output</span>
)

<span class="hljs-built_in">print</span>(tokenizer.batch_decode(output_sequences, skip_special_tokens=<span class="hljs-literal">True</span>))

<span class="hljs-comment"># [&#x27;Das Haus ist wunderbar.&#x27;, &#x27;Ich arbeite gerne in NYC.&#x27;]</span>`}}),is=new ve({}),ds=new ve({}),gs=new ve({}),Ts=new C({props:{name:"class transformers.T5Config",anchor:"transformers.T5Config",parameters:[{name:"vocab_size",val:" = 32128"},{name:"d_model",val:" = 512"},{name:"d_kv",val:" = 64"},{name:"d_ff",val:" = 2048"},{name:"num_layers",val:" = 6"},{name:"num_decoder_layers",val:" = None"},{name:"num_heads",val:" = 8"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"relative_attention_max_distance",val:" = 128"},{name:"dropout_rate",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_factor",val:" = 1.0"},{name:"feed_forward_proj",val:" = 'relu'"},{name:"is_encoder_decoder",val:" = True"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32128) &#x2014;
Vocabulary size of the T5 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Model">T5Model</a> or <a href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.TFT5Model">TFT5Model</a>.`,name:"vocab_size"},{anchor:"transformers.T5Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of the encoder layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.T5Config.d_kv",description:`<strong>d_kv</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Size of the key, query, value projections per attention head. <code>d_kv</code> has to be equal to <code>d_model // num_heads</code>.`,name:"d_kv"},{anchor:"transformers.T5Config.d_ff",description:`<strong>d_ff</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Size of the intermediate feed forward layer in each <code>T5Block</code>.`,name:"d_ff"},{anchor:"transformers.T5Config.num_layers",description:`<strong>num_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_layers"},{anchor:"transformers.T5Config.num_decoder_layers",description:`<strong>num_decoder_layers</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Number of hidden layers in the Transformer decoder. Will use the same value as <code>num_layers</code> if not set.`,name:"num_decoder_layers"},{anchor:"transformers.T5Config.num_heads",description:`<strong>num_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_heads"},{anchor:"transformers.T5Config.relative_attention_num_buckets",description:`<strong>relative_attention_num_buckets</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of buckets to use for each attention layer.`,name:"relative_attention_num_buckets"},{anchor:"transformers.T5Config.relative_attention_max_distance",description:`<strong>relative_attention_max_distance</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The maximum distance of the longer sequences for the bucket separation.`,name:"relative_attention_max_distance"},{anchor:"transformers.T5Config.dropout_rate",description:`<strong>dropout_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The ratio for all dropout layers.`,name:"dropout_rate"},{anchor:"transformers.T5Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-6) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.T5Config.initializer_factor",description:`<strong>initializer_factor</strong> (<code>float</code>, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"},{anchor:"transformers.T5Config.feed_forward_proj",description:`<strong>feed_forward_proj</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
Type of feed forward layer to be used. Should be one of <code>&quot;relu&quot;</code> or <code>&quot;gated-gelu&quot;</code>. T5v1.1 uses the
<code>&quot;gated-gelu&quot;</code> feed forward projection. Original T5 uses <code>&quot;relu&quot;</code>.`,name:"feed_forward_proj"},{anchor:"transformers.T5Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/configuration_t5.py#L34"}}),ks=new ve({}),vs=new C({props:{name:"class transformers.T5Tokenizer",anchor:"transformers.T5Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.T5Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.T5Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.T5Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.T5Tokenizer.extra_ids",description:`<strong>extra_ids</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Add a number of extra ids added to the end of the vocabulary for use as sentinels. These tokens are
accessible as &#x201C;<extra<em>id{%d}&gt;&#x201D; where &#x201D;{%d}&#x201D; is a number between 0 and extra_ids-1. Extra tokens are
indexed from the end of the vocabulary up to beginning (&#x201C;<extra_id_0>&#x201D; is the last token in the vocabulary
like in T5 preprocessing see
<a href="https://github.com/google-research/text-to-text-transfer-transformer/blob/9fd7b14a769417be33bc6c850f9598764913c833/t5/data/preprocessors.py#L2117" rel="nofollow">here</a>).</extra_id_0></extra<em>`,name:"extra_ids"},{anchor:"transformers.T5Tokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.T5Tokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.T5Tokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/tokenization_t5.py#L53"}}),xs=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/tokenization_t5.py#L223",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),qs=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.T5Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/tokenization_t5.py#L163",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),js=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/tokenization_t5.py#L201",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Fs=new C({props:{name:"save_vocabulary",anchor:"transformers.T5Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/tokenization_t5.py#L298"}}),Ms=new ve({}),Cs=new C({props:{name:"class transformers.T5TokenizerFast",anchor:"transformers.T5TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.T5TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.T5TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.T5TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.T5TokenizerFast.extra_ids",description:`<strong>extra_ids</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Add a number of extra ids added to the end of the vocabulary for use as sentinels. These tokens are
accessible as &#x201C;<extra<em>id{%d}&gt;&#x201D; where &#x201D;{%d}&#x201D; is a number between 0 and extra_ids-1. Extra tokens are
indexed from the end of the vocabulary up to beginning (&#x201C;<extra_id_0>&#x201D; is the last token in the vocabulary
like in T5 preprocessing see
<a href="https://github.com/google-research/text-to-text-transfer-transformer/blob/9fd7b14a769417be33bc6c850f9598764913c833/t5/data/preprocessors.py#L2117" rel="nofollow">here</a>).</extra_id_0></extra<em>`,name:"extra_ids"},{anchor:"transformers.T5TokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/tokenization_t5_fast.py#L62"}}),Os=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/tokenization_t5_fast.py#L165",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),As=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/tokenization_t5_fast.py#L191",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Is=new ve({}),Ds=new C({props:{name:"class transformers.T5Model",anchor:"transformers.T5Model",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/modeling_t5.py#L1267"}}),Bs=new C({props:{name:"forward",anchor:"transformers.T5Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.T5Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.T5Model.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.T5Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.T5Model.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.T5Model.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.T5Model.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.T5Model.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.T5Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.T5Model.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.T5Model.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.T5Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.T5Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.T5Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/modeling_t5.py#L1343",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pn=new zt({props:{$$slots:{default:[n1]},$$scope:{ctx:q}}}),Nn=new me({props:{anchor:"transformers.T5Model.forward.example",$$slots:{default:[o1]},$$scope:{ctx:q}}}),Hs=new C({props:{name:"parallelize",anchor:"transformers.T5Model.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.T5Model.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the t5 models have the
following number of attention modules:</p>
<ul>
<li>t5-small: 6</li>
<li>t5-base: 12</li>
<li>t5-large: 24</li>
<li>t5-3b: 24</li>
<li>t5-11b: 24</li>
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/modeling_t5.py#L1299"}}),On=new me({props:{anchor:"transformers.T5Model.parallelize.example",$$slots:{default:[s1]},$$scope:{ctx:q}}}),Vs=new C({props:{name:"deparallelize",anchor:"transformers.T5Model.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/modeling_t5.py#L1311"}}),Ln=new me({props:{anchor:"transformers.T5Model.deparallelize.example",$$slots:{default:[a1]},$$scope:{ctx:q}}}),Ks=new ve({}),Ys=new C({props:{name:"class transformers.T5ForConditionalGeneration",anchor:"transformers.T5ForConditionalGeneration",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/modeling_t5.py#L1456"}}),na=new C({props:{name:"forward",anchor:"transformers.T5ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.T5ForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.T5ForConditionalGeneration.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.T5ForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.T5ForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.T5ForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.T5ForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.T5ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to <code>-100</code> are ignored (masked), the loss is only computed for
labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/modeling_t5.py#L1537",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),In=new zt({props:{$$slots:{default:[r1]},$$scope:{ctx:q}}}),Dn=new me({props:{anchor:"transformers.T5ForConditionalGeneration.forward.example",$$slots:{default:[i1]},$$scope:{ctx:q}}}),oa=new C({props:{name:"parallelize",anchor:"transformers.T5ForConditionalGeneration.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the t5 models have the
following number of attention modules:</p>
<ul>
<li>t5-small: 6</li>
<li>t5-base: 12</li>
<li>t5-large: 24</li>
<li>t5-3b: 24</li>
<li>t5-11b: 24</li>
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/modeling_t5.py#L1493"}}),Sn=new me({props:{anchor:"transformers.T5ForConditionalGeneration.parallelize.example",$$slots:{default:[l1]},$$scope:{ctx:q}}}),sa=new C({props:{name:"deparallelize",anchor:"transformers.T5ForConditionalGeneration.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/modeling_t5.py#L1506"}}),Gn=new me({props:{anchor:"transformers.T5ForConditionalGeneration.deparallelize.example",$$slots:{default:[d1]},$$scope:{ctx:q}}}),aa=new ve({}),ra=new C({props:{name:"class transformers.T5EncoderModel",anchor:"transformers.T5EncoderModel",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/modeling_t5.py#L1750"}}),ha=new C({props:{name:"forward",anchor:"transformers.T5EncoderModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.T5EncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5EncoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5EncoderModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.T5EncoderModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.T5EncoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.T5EncoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.T5EncoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/modeling_t5.py#L1808",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wn=new zt({props:{$$slots:{default:[c1]},$$scope:{ctx:q}}}),Rn=new me({props:{anchor:"transformers.T5EncoderModel.forward.example",$$slots:{default:[p1]},$$scope:{ctx:q}}}),ua=new C({props:{name:"parallelize",anchor:"transformers.T5EncoderModel.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.T5EncoderModel.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the t5 models have the
following number of attention modules:</p>
<ul>
<li>t5-small: 6</li>
<li>t5-base: 12</li>
<li>t5-large: 24</li>
<li>t5-3b: 24</li>
<li>t5-11b: 24</li>
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/modeling_t5.py#L1771"}}),Bn=new me({props:{anchor:"transformers.T5EncoderModel.parallelize.example",$$slots:{default:[h1]},$$scope:{ctx:q}}}),ma=new C({props:{name:"deparallelize",anchor:"transformers.T5EncoderModel.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/modeling_t5.py#L1782"}}),Hn=new me({props:{anchor:"transformers.T5EncoderModel.deparallelize.example",$$slots:{default:[u1]},$$scope:{ctx:q}}}),fa=new ve({}),_a=new C({props:{name:"class transformers.TFT5Model",anchor:"transformers.TFT5Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/modeling_tf_t5.py#L1109"}}),Kn=new zt({props:{$$slots:{default:[m1]},$$scope:{ctx:q}}}),ya=new C({props:{name:"call",anchor:"transformers.TFT5Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5Model.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>inputs</code> for pretraining take a look at <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.TFT5Model.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for sequence to sequence training. T5 uses the <code>pad_token_id</code> as the starting token for
<code>decoder_input_ids</code> generation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code>
have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.TFT5Model.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFT5Model.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.
head_mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>
<p>decoder_head_mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_attention_mask"},{anchor:"transformers.TFT5Model.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TFT5Model.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFT5Model.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFT5Model.call.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.TFT5Model.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFT5Model.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFT5Model.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFT5Model.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFT5Model.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/modeling_tf_t5.py#L1135",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Yn=new zt({props:{$$slots:{default:[f1]},$$scope:{ctx:q}}}),Zn=new me({props:{anchor:"transformers.TFT5Model.call.example",$$slots:{default:[_1]},$$scope:{ctx:q}}}),wa=new ve({}),$a=new C({props:{name:"class transformers.TFT5ForConditionalGeneration",anchor:"transformers.TFT5ForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/modeling_tf_t5.py#L1256"}}),Xn=new zt({props:{$$slots:{default:[g1]},$$scope:{ctx:q}}}),Ma=new C({props:{name:"call",anchor:"transformers.TFT5ForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>inputs</code> for pretraining take a look at <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.TFT5ForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for sequence to sequence training. T5 uses the <code>pad_token_id</code> as the starting token for
<code>decoder_input_ids</code> generation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code>
have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.TFT5ForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFT5ForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.
head_mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>
<p>decoder_head_mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_attention_mask"},{anchor:"transformers.TFT5ForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TFT5ForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFT5ForConditionalGeneration.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFT5ForConditionalGeneration.call.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.TFT5ForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFT5ForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFT5ForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFT5ForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFT5ForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFT5ForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/modeling_tf_t5.py#L1311",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qn=new zt({props:{$$slots:{default:[T1]},$$scope:{ctx:q}}}),eo=new me({props:{anchor:"transformers.TFT5ForConditionalGeneration.call.example",$$slots:{default:[b1]},$$scope:{ctx:q}}}),Ca=new ve({}),Pa=new C({props:{name:"class transformers.TFT5EncoderModel",anchor:"transformers.TFT5EncoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/modeling_tf_t5.py#L1599"}}),no=new zt({props:{$$slots:{default:[k1]},$$scope:{ctx:q}}}),Da=new C({props:{name:"call",anchor:"transformers.TFT5EncoderModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5EncoderModel.call.inputs",description:`<strong>inputs</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p>To know more on how to prepare <code>inputs</code> for pre-training take a look at <a href="./t5#training">T5 Training</a>.`,name:"inputs"},{anchor:"transformers.TFT5EncoderModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFT5EncoderModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.
head_mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"inputs_embeds"},{anchor:"transformers.TFT5EncoderModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFT5EncoderModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFT5EncoderModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFT5EncoderModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/modeling_tf_t5.py#L1617",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),oo=new zt({props:{$$slots:{default:[v1]},$$scope:{ctx:q}}}),so=new me({props:{anchor:"transformers.TFT5EncoderModel.call.example",$$slots:{default:[y1]},$$scope:{ctx:q}}}),Sa=new ve({}),Ga=new C({props:{name:"class transformers.FlaxT5Model",anchor:"transformers.FlaxT5Model",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/modeling_flax_t5.py#L1314"}}),Ua=new C({props:{name:"__call__",anchor:"transformers.FlaxT5Model.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5Model.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5Model.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5Model.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5Model.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5Model.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/modeling_flax_t5.py#L946",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new zt({props:{$$slots:{default:[w1]},$$scope:{ctx:q}}}),io=new me({props:{anchor:"transformers.FlaxT5Model.__call__.example",$$slots:{default:[$1]},$$scope:{ctx:q}}}),Wa=new C({props:{name:"encode",anchor:"transformers.FlaxT5Model.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5Model.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5Model.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5Model.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5Model.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/modeling_flax_t5.py#L1031",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),co=new me({props:{anchor:"transformers.FlaxT5Model.encode.example",$$slots:{default:[x1]},$$scope:{ctx:q}}}),Ra=new C({props:{name:"decode",anchor:"transformers.FlaxT5Model.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For training, <code>decoder_input_ids</code> should be provided.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5Model.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5Model.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxT5Model.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5Model.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxT5Model.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5Model.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5Model.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/modeling_flax_t5.py#L1089",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ho=new me({props:{anchor:"transformers.FlaxT5Model.decode.example",$$slots:{default:[z1]},$$scope:{ctx:q}}}),Ba=new ve({}),Ha=new C({props:{name:"class transformers.FlaxT5ForConditionalGeneration",anchor:"transformers.FlaxT5ForConditionalGeneration",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/modeling_flax_t5.py#L1454"}}),Va=new C({props:{name:"__call__",anchor:"transformers.FlaxT5ForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/modeling_flax_t5.py#L946",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mo=new zt({props:{$$slots:{default:[q1]},$$scope:{ctx:q}}}),fo=new me({props:{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.example",$$slots:{default:[E1]},$$scope:{ctx:q}}}),Ka=new C({props:{name:"encode",anchor:"transformers.FlaxT5ForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/modeling_flax_t5.py#L1031",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),go=new me({props:{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.example",$$slots:{default:[j1]},$$scope:{ctx:q}}}),Ya=new C({props:{name:"decode",anchor:"transformers.FlaxT5ForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For training, <code>decoder_input_ids</code> should be provided.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/t5/modeling_flax_t5.py#L1457",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bo=new me({props:{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.example",$$slots:{default:[F1]},$$scope:{ctx:q}}}),{c(){p=o("meta"),b=d(),g=o("h1"),u=o("a"),T=o("span"),k(l.$$.fragment),m=d(),E=o("span"),je=r("T5"),oe=d(),j=o("h2"),ee=o("a"),S=o("span"),k(se.$$.fragment),Fe=d(),G=o("span"),Me=r("Overview"),ye=d(),U=o("p"),A=r("The T5 model was presented in "),ae=o("a"),pe=r("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),M=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),N=d(),he=o("p"),K=r("The abstract from the paper is the following:"),we=d(),ue=o("p"),W=o("em"),Ce=r(`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),$e=d(),P=o("p"),Pe=r("Tips:"),H=d(),V=o("ul"),_e=o("li"),O=o("p"),Ne=r(`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),ge=o("em"),I=r("translate English to German: \u2026"),Oe=r(`,
for summarization: `),R=o("em"),Le=r("summarize: \u2026"),z=r("."),F=d(),te=o("li"),Ue=o("p"),ot=r("T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),D=d(),We=o("li"),ne=o("p"),st=r("See the "),L=o("a"),Y=r("training"),at=r(", "),Ae=o("a"),Z=r("inference"),rt=r(" and "),Ie=o("a"),De=r("scripts"),it=r(" sections below for all details regarding usage."),Gd=d(),Qa=o("p"),Ap=r("T5 comes in different sizes:"),Ud=d(),Re=o("ul"),ri=o("li"),ii=o("p"),Ao=o("a"),Ip=r("t5-small"),Dp=d(),li=o("li"),di=o("p"),Io=o("a"),Sp=r("t5-base"),Gp=d(),ci=o("li"),pi=o("p"),Do=o("a"),Up=r("t5-large"),Wp=d(),hi=o("li"),ui=o("p"),So=o("a"),Rp=r("t5-3b"),Bp=d(),mi=o("li"),er=o("p"),Go=o("a"),Hp=r("t5-11b"),Vp=r("."),Wd=d(),tr=o("p"),Kp=r("Based on the original T5 model, Google has released some follow-up works:"),Rd=d(),qt=o("ul"),fi=o("li"),fn=o("p"),_i=o("strong"),Yp=r("T5v1.1"),Zp=r(`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),nr=o("a"),Jp=r("here"),Xp=r("."),Qp=d(),gi=o("li"),_n=o("p"),Ti=o("strong"),eh=r("mT5"),th=r(`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),or=o("a"),nh=r("here"),oh=r("."),sh=d(),bi=o("li"),gn=o("p"),ki=o("strong"),ah=r("byT5"),rh=r(`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),sr=o("a"),ih=r("here"),lh=r("."),Bd=d(),Tn=o("p"),dh=r("All checkpoints can be found on the "),Uo=o("a"),ch=r("hub"),ph=r("."),Hd=d(),Et=o("p"),hh=r("This model was contributed by "),Wo=o("a"),uh=r("thomwolf"),mh=r(". The original code can be found "),Ro=o("a"),fh=r("here"),_h=r("."),Vd=d(),ar=o("a"),Kd=d(),It=o("h2"),bn=o("a"),vi=o("span"),k(Bo.$$.fragment),gh=d(),yi=o("span"),Th=r("Training"),Yd=d(),lt=o("p"),bh=r(`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),wi=o("code"),kh=r("input_ids"),vh=r(`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),$i=o("code"),yh=r("decoder_input_ids"),wh=r(`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),xi=o("code"),$h=r("labels"),xh=r(`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),Zd=d(),kn=o("p"),zh=r("One can use "),rr=o("a"),qh=r("T5ForConditionalGeneration"),Eh=r(` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),Jd=d(),vn=o("ul"),Qe=o("li"),zi=o("p"),jh=r("Unsupervised denoising training"),Fh=d(),Te=o("p"),Mh=r("In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),qi=o("em"),Ch=r("a.k.a"),Ph=r(` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),Ei=o("em"),Nh=r("real"),Oh=r(` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),ji=o("code"),Lh=r("<extra_id_0>"),Ah=r(`,
`),Fi=o("code"),Ih=r("<extra_id_1>"),Dh=r(", \u2026 up to "),Mi=o("code"),Sh=r("<extra_id_99>"),Gh=r(`. As a default, 100 sentinel tokens are available in
`),ir=o("a"),Uh=r("T5Tokenizer"),Wh=r("."),Rh=d(),Ci=o("p"),Bh=r(`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),Hh=d(),k(Ho.$$.fragment),Vh=d(),Vo=o("p"),Kh=r("If you\u2019re interested in pre-training T5 on a new corpus, check out the "),Ko=o("a"),Yh=r("run_t5_mlm_flax.py"),Zh=r(` script in the Examples
directory.`),Jh=d(),be=o("li"),Pi=o("p"),Xh=r("Supervised training"),Qh=d(),Ni=o("p"),eu=r(`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),tu=d(),k(Yo.$$.fragment),nu=d(),re=o("p"),ou=r("As you can see, only 2 inputs are required for the model in order to compute a loss: "),Oi=o("code"),su=r("input_ids"),au=r(` (which are the
`),Li=o("code"),ru=r("input_ids"),iu=r(" of the encoded input sequence) and "),Ai=o("code"),lu=r("labels"),du=r(" (which are the "),Ii=o("code"),cu=r("input_ids"),pu=r(` of the encoded
target sequence). The model will automatically create the `),Di=o("code"),hu=r("decoder_input_ids"),uu=r(" based on the "),Si=o("code"),mu=r("labels"),fu=r(`, by
shifting them one position to the right and prepending the `),Gi=o("code"),_u=r("config.decoder_start_token_id"),gu=r(`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),Tu=d(),Dt=o("p"),bu=r(`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Ui=o("code"),ku=r("max_source_length"),vu=r(" and "),Wi=o("code"),yu=r("max_target_length"),wu=r(`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),$u=d(),ke=o("p"),xu=r("In addition, we must make sure that padding token id\u2019s of the "),Ri=o("code"),zu=r("labels"),qu=r(` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),Bi=o("code"),Eu=r("ignore_index"),ju=r(`
of the `),Hi=o("code"),Fu=r("CrossEntropyLoss"),Mu=r(". In Flax, one can use the "),Vi=o("code"),Cu=r("decoder_attention_mask"),Pu=r(` to ignore padded tokens from
the loss (see the `),Zo=o("a"),Nu=r("Flax summarization script"),Ou=r(` for details). We also pass
`),Ki=o("code"),Lu=r("attention_mask"),Au=r(` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),Iu=d(),k(Jo.$$.fragment),Xd=d(),lr=o("p"),Du=r("Additional training tips:"),Qd=d(),jt=o("ul"),Yi=o("li"),Xo=o("p"),Su=r("T5 models need a slightly higher learning rate than the default one set in the "),Zi=o("code"),Gu=r("Trainer"),Uu=r(` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),Wu=d(),Ji=o("li"),St=o("p"),Ru=r("According to "),Qo=o("a"),Bu=r("this forum post"),Hu=r(`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),es=o("a"),Vu=r("paper"),Ku=r(` for the task prefixes
used).`),Yu=d(),Xi=o("li"),ts=o("p"),Zu=r(`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),Qi=o("em"),Ju=r("pad_to_multiple_of"),Xu=r(` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),ec=d(),dr=o("a"),tc=d(),Gt=o("h2"),yn=o("a"),el=o("span"),k(ns.$$.fragment),Qu=d(),tl=o("span"),em=r("Inference"),nc=d(),dt=o("p"),tm=r("At inference time, it is recommended to use "),cr=o("a"),nm=r("generate()"),om=r(`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),os=o("a"),sm=r("this blog post"),am=r(` to know all the details about generating text with Transformers.
There\u2019s also `),ss=o("a"),rm=r("this blog post"),im=r(` which explains how
generation works in general in encoder-decoder models.`),oc=d(),k(as.$$.fragment),sc=d(),Be=o("p"),lm=r("Note that T5 uses the "),nl=o("code"),dm=r("pad_token_id"),cm=r(" as the "),ol=o("code"),pm=r("decoder_start_token_id"),hm=r(`, so when doing generation without using
`),pr=o("a"),um=r("generate()"),mm=r(", make sure you start it with the "),sl=o("code"),fm=r("pad_token_id"),_m=r("."),ac=d(),hr=o("p"),gm=r("The example above only shows a single example. You can also do batched inference, like so:"),rc=d(),k(rs.$$.fragment),ic=d(),ur=o("a"),lc=d(),Ut=o("h2"),wn=o("a"),al=o("span"),k(is.$$.fragment),Tm=d(),rl=o("span"),bm=r("Performance"),dc=d(),ct=o("p"),km=r("If you\u2019d like a faster training and inference performance, install "),ls=o("a"),vm=r("apex"),ym=r(" and then the model will automatically use "),il=o("code"),wm=r("apex.normalization.FusedRMSNorm"),$m=r(" instead of "),ll=o("code"),xm=r("T5LayerNorm"),zm=r(". The former uses an optimized fused kernel which is several times faster than the latter."),cc=d(),Wt=o("h2"),$n=o("a"),dl=o("span"),k(ds.$$.fragment),qm=d(),cl=o("span"),Em=r("Example scripts"),pc=d(),mr=o("p"),jm=r("T5 is supported by several example scripts, both for pre-training and fine-tuning."),hc=d(),xn=o("ul"),pl=o("li"),Rt=o("p"),Fm=r("pre-training: the "),cs=o("a"),Mm=r("run_t5_mlm_flax.py"),Cm=r(`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),ps=o("a"),Pm=r("t5_tokenizer_model.py"),Nm=r(`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),Om=d(),hl=o("li"),Se=o("p"),Lm=r("fine-tuning: T5 is supported by the official summarization scripts ("),hs=o("a"),Am=r("PyTorch"),Im=r(", "),us=o("a"),Dm=r("Tensorflow"),Sm=r(", and "),ms=o("a"),Gm=r("Flax"),Um=r(`) and translation scripts
(`),fs=o("a"),Wm=r("PyTorch"),Rm=r(" and "),_s=o("a"),Bm=r("Tensorflow"),Hm=r(`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),uc=d(),Bt=o("h2"),zn=o("a"),ul=o("span"),k(gs.$$.fragment),Vm=d(),ml=o("span"),Km=r("T5Config"),mc=d(),wt=o("div"),k(Ts.$$.fragment),Ym=d(),$t=o("p"),Zm=r("This is the configuration class to store the configuration of a "),fr=o("a"),Jm=r("T5Model"),Xm=r(" or a "),_r=o("a"),Qm=r("TFT5Model"),ef=r(`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),bs=o("a"),tf=r("t5-small"),nf=r(" architecture."),of=d(),Ht=o("p"),sf=r("Configuration objects inherit from "),gr=o("a"),af=r("PretrainedConfig"),rf=r(` and can be used to control the model outputs. Read the
documentation from `),Tr=o("a"),lf=r("PretrainedConfig"),df=r(" for more information."),fc=d(),Vt=o("h2"),qn=o("a"),fl=o("span"),k(ks.$$.fragment),cf=d(),_l=o("span"),pf=r("T5Tokenizer"),_c=d(),ie=o("div"),k(vs.$$.fragment),hf=d(),ys=o("p"),uf=r("Construct a T5 tokenizer. Based on "),ws=o("a"),mf=r("SentencePiece"),ff=r("."),_f=d(),$s=o("p"),gf=r("This tokenizer inherits from "),br=o("a"),Tf=r("PreTrainedTokenizer"),bf=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),kf=d(),Ft=o("div"),k(xs.$$.fragment),vf=d(),gl=o("p"),yf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),wf=d(),zs=o("ul"),kr=o("li"),$f=r("single sequence: "),Tl=o("code"),xf=r("X </s>"),zf=d(),vr=o("li"),qf=r("pair of sequences: "),bl=o("code"),Ef=r("A </s> B </s>"),jf=d(),En=o("div"),k(qs.$$.fragment),Ff=d(),Es=o("p"),Mf=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),kl=o("code"),Cf=r("prepare_for_model"),Pf=r(" method."),Nf=d(),jn=o("div"),k(js.$$.fragment),Of=d(),vl=o("p"),Lf=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),Af=d(),yr=o("div"),k(Fs.$$.fragment),gc=d(),Kt=o("h2"),Fn=o("a"),yl=o("span"),k(Ms.$$.fragment),If=d(),wl=o("span"),Df=r("T5TokenizerFast"),Tc=d(),Ge=o("div"),k(Cs.$$.fragment),Sf=d(),Yt=o("p"),Gf=r("Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),$l=o("em"),Uf=r("tokenizers"),Wf=r(` library). Based on
`),Ps=o("a"),Rf=r("Unigram"),Bf=r("."),Hf=d(),Ns=o("p"),Vf=r("This tokenizer inherits from "),wr=o("a"),Kf=r("PreTrainedTokenizerFast"),Yf=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Zf=d(),Mt=o("div"),k(Os.$$.fragment),Jf=d(),xl=o("p"),Xf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Qf=d(),Ls=o("ul"),$r=o("li"),e_=r("single sequence: "),zl=o("code"),t_=r("X </s>"),n_=d(),xr=o("li"),o_=r("pair of sequences: "),ql=o("code"),s_=r("A </s> B </s>"),a_=d(),Mn=o("div"),k(As.$$.fragment),r_=d(),El=o("p"),i_=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),bc=d(),Zt=o("h2"),Cn=o("a"),jl=o("span"),k(Is.$$.fragment),l_=d(),Fl=o("span"),d_=r("T5Model"),kc=d(),J=o("div"),k(Ds.$$.fragment),c_=d(),Ml=o("p"),p_=r("The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),h_=d(),Ss=o("p"),u_=r("The T5 model was proposed in "),Gs=o("a"),m_=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),f_=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),__=d(),Us=o("p"),g_=r("This model inherits from "),zr=o("a"),T_=r("PreTrainedModel"),b_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),k_=d(),Ws=o("p"),v_=r("This model is also a PyTorch "),Rs=o("a"),y_=r("torch.nn.Module"),w_=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$_=d(),pt=o("div"),k(Bs.$$.fragment),x_=d(),Jt=o("p"),z_=r("The "),qr=o("a"),q_=r("T5Model"),E_=r(" forward method, overrides the "),Cl=o("code"),j_=r("__call__"),F_=r(" special method."),M_=d(),k(Pn.$$.fragment),C_=d(),k(Nn.$$.fragment),P_=d(),ht=o("div"),k(Hs.$$.fragment),N_=d(),Pl=o("p"),O_=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),L_=d(),Nl=o("p"),A_=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),I_=d(),k(On.$$.fragment),D_=d(),Ct=o("div"),k(Vs.$$.fragment),S_=d(),Ol=o("p"),G_=r("Moves the model to cpu from a model parallel state."),U_=d(),k(Ln.$$.fragment),vc=d(),Xt=o("h2"),An=o("a"),Ll=o("span"),k(Ks.$$.fragment),W_=d(),Al=o("span"),R_=r("T5ForConditionalGeneration"),yc=d(),X=o("div"),k(Ys.$$.fragment),B_=d(),Zs=o("p"),H_=r("T5 Model with a "),Il=o("code"),V_=r("language modeling"),K_=r(" head on top."),Y_=d(),Js=o("p"),Z_=r("The T5 model was proposed in "),Xs=o("a"),J_=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),X_=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Q_=d(),Qs=o("p"),eg=r("This model inherits from "),Er=o("a"),tg=r("PreTrainedModel"),ng=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),og=d(),ea=o("p"),sg=r("This model is also a PyTorch "),ta=o("a"),ag=r("torch.nn.Module"),rg=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ig=d(),ut=o("div"),k(na.$$.fragment),lg=d(),Qt=o("p"),dg=r("The "),jr=o("a"),cg=r("T5ForConditionalGeneration"),pg=r(" forward method, overrides the "),Dl=o("code"),hg=r("__call__"),ug=r(" special method."),mg=d(),k(In.$$.fragment),fg=d(),k(Dn.$$.fragment),_g=d(),mt=o("div"),k(oa.$$.fragment),gg=d(),Sl=o("p"),Tg=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),bg=d(),Gl=o("p"),kg=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),vg=d(),k(Sn.$$.fragment),yg=d(),Pt=o("div"),k(sa.$$.fragment),wg=d(),Ul=o("p"),$g=r("Moves the model to cpu from a model parallel state."),xg=d(),k(Gn.$$.fragment),wc=d(),en=o("h2"),Un=o("a"),Wl=o("span"),k(aa.$$.fragment),zg=d(),Rl=o("span"),qg=r("T5EncoderModel"),$c=d(),Q=o("div"),k(ra.$$.fragment),Eg=d(),Bl=o("p"),jg=r("The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),Fg=d(),ia=o("p"),Mg=r("The T5 model was proposed in "),la=o("a"),Cg=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Pg=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Ng=d(),da=o("p"),Og=r("This model inherits from "),Fr=o("a"),Lg=r("PreTrainedModel"),Ag=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ig=d(),ca=o("p"),Dg=r("This model is also a PyTorch "),pa=o("a"),Sg=r("torch.nn.Module"),Gg=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ug=d(),ft=o("div"),k(ha.$$.fragment),Wg=d(),tn=o("p"),Rg=r("The "),Mr=o("a"),Bg=r("T5EncoderModel"),Hg=r(" forward method, overrides the "),Hl=o("code"),Vg=r("__call__"),Kg=r(" special method."),Yg=d(),k(Wn.$$.fragment),Zg=d(),k(Rn.$$.fragment),Jg=d(),_t=o("div"),k(ua.$$.fragment),Xg=d(),Vl=o("p"),Qg=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),eT=d(),Kl=o("p"),tT=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),nT=d(),k(Bn.$$.fragment),oT=d(),Nt=o("div"),k(ma.$$.fragment),sT=d(),Yl=o("p"),aT=r("Moves the model to cpu from a model parallel state."),rT=d(),k(Hn.$$.fragment),xc=d(),nn=o("h2"),Vn=o("a"),Zl=o("span"),k(fa.$$.fragment),iT=d(),Jl=o("span"),lT=r("TFT5Model"),zc=d(),le=o("div"),k(_a.$$.fragment),dT=d(),Xl=o("p"),cT=r("The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),pT=d(),ga=o("p"),hT=r("The T5 model was proposed in "),Ta=o("a"),uT=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),mT=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),fT=d(),ba=o("p"),_T=r("This model inherits from "),Cr=o("a"),gT=r("TFPreTrainedModel"),TT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bT=d(),ka=o("p"),kT=r("This model is also a "),va=o("a"),vT=r("tf.keras.Model"),yT=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wT=d(),k(Kn.$$.fragment),$T=d(),gt=o("div"),k(ya.$$.fragment),xT=d(),on=o("p"),zT=r("The "),Pr=o("a"),qT=r("TFT5Model"),ET=r(" forward method, overrides the "),Ql=o("code"),jT=r("__call__"),FT=r(" special method."),MT=d(),k(Yn.$$.fragment),CT=d(),k(Zn.$$.fragment),qc=d(),sn=o("h2"),Jn=o("a"),ed=o("span"),k(wa.$$.fragment),PT=d(),td=o("span"),NT=r("TFT5ForConditionalGeneration"),Ec=d(),de=o("div"),k($a.$$.fragment),OT=d(),xa=o("p"),LT=r("T5 Model with a "),nd=o("code"),AT=r("language modeling"),IT=r(" head on top."),DT=d(),za=o("p"),ST=r("The T5 model was proposed in "),qa=o("a"),GT=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),UT=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),WT=d(),Ea=o("p"),RT=r("This model inherits from "),Nr=o("a"),BT=r("TFPreTrainedModel"),HT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),VT=d(),ja=o("p"),KT=r("This model is also a "),Fa=o("a"),YT=r("tf.keras.Model"),ZT=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),JT=d(),k(Xn.$$.fragment),XT=d(),Tt=o("div"),k(Ma.$$.fragment),QT=d(),an=o("p"),eb=r("The "),Or=o("a"),tb=r("TFT5ForConditionalGeneration"),nb=r(" forward method, overrides the "),od=o("code"),ob=r("__call__"),sb=r(" special method."),ab=d(),k(Qn.$$.fragment),rb=d(),k(eo.$$.fragment),jc=d(),rn=o("h2"),to=o("a"),sd=o("span"),k(Ca.$$.fragment),ib=d(),ad=o("span"),lb=r("TFT5EncoderModel"),Fc=d(),ce=o("div"),k(Pa.$$.fragment),db=d(),rd=o("p"),cb=r("The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),pb=d(),Na=o("p"),hb=r("The T5 model was proposed in "),Oa=o("a"),ub=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),mb=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),fb=d(),La=o("p"),_b=r("This model inherits from "),Lr=o("a"),gb=r("TFPreTrainedModel"),Tb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bb=d(),Aa=o("p"),kb=r("This model is also a "),Ia=o("a"),vb=r("tf.keras.Model"),yb=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wb=d(),k(no.$$.fragment),$b=d(),bt=o("div"),k(Da.$$.fragment),xb=d(),ln=o("p"),zb=r("The "),Ar=o("a"),qb=r("TFT5EncoderModel"),Eb=r(" forward method, overrides the "),id=o("code"),jb=r("__call__"),Fb=r(" special method."),Mb=d(),k(oo.$$.fragment),Cb=d(),k(so.$$.fragment),Mc=d(),dn=o("h2"),ao=o("a"),ld=o("span"),k(Sa.$$.fragment),Pb=d(),dd=o("span"),Nb=r("FlaxT5Model"),Cc=d(),et=o("div"),k(Ga.$$.fragment),Ob=d(),kt=o("div"),k(Ua.$$.fragment),Lb=d(),cn=o("p"),Ab=r("The "),cd=o("code"),Ib=r("FlaxT5PreTrainedModel"),Db=r(" forward method, overrides the "),pd=o("code"),Sb=r("__call__"),Gb=r(" special method."),Ub=d(),k(ro.$$.fragment),Wb=d(),k(io.$$.fragment),Rb=d(),lo=o("div"),k(Wa.$$.fragment),Bb=d(),k(co.$$.fragment),Hb=d(),po=o("div"),k(Ra.$$.fragment),Vb=d(),k(ho.$$.fragment),Pc=d(),pn=o("h2"),uo=o("a"),hd=o("span"),k(Ba.$$.fragment),Kb=d(),ud=o("span"),Yb=r("FlaxT5ForConditionalGeneration"),Nc=d(),tt=o("div"),k(Ha.$$.fragment),Zb=d(),vt=o("div"),k(Va.$$.fragment),Jb=d(),hn=o("p"),Xb=r("The "),md=o("code"),Qb=r("FlaxT5PreTrainedModel"),ek=r(" forward method, overrides the "),fd=o("code"),tk=r("__call__"),nk=r(" special method."),ok=d(),k(mo.$$.fragment),sk=d(),k(fo.$$.fragment),ak=d(),_o=o("div"),k(Ka.$$.fragment),rk=d(),k(go.$$.fragment),ik=d(),To=o("div"),k(Ya.$$.fragment),lk=d(),k(bo.$$.fragment),this.h()},l(n){const _=e1('[data-svelte="svelte-1phssyn"]',document.head);p=s(_,"META",{name:!0,content:!0}),_.forEach(t),b=c(n),g=s(n,"H1",{class:!0});var Za=a(g);u=s(Za,"A",{id:!0,class:!0,href:!0});var _d=a(u);T=s(_d,"SPAN",{});var gd=a(T);v(l.$$.fragment,gd),gd.forEach(t),_d.forEach(t),m=c(Za),E=s(Za,"SPAN",{});var Td=a(E);je=i(Td,"T5"),Td.forEach(t),Za.forEach(t),oe=c(n),j=s(n,"H2",{class:!0});var Ja=a(j);ee=s(Ja,"A",{id:!0,class:!0,href:!0});var bd=a(ee);S=s(bd,"SPAN",{});var kd=a(S);v(se.$$.fragment,kd),kd.forEach(t),bd.forEach(t),Fe=c(Ja),G=s(Ja,"SPAN",{});var vd=a(G);Me=i(vd,"Overview"),vd.forEach(t),Ja.forEach(t),ye=c(n),U=s(n,"P",{});var Xa=a(U);A=i(Xa,"The T5 model was presented in "),ae=s(Xa,"A",{href:!0,rel:!0});var yd=a(ae);pe=i(yd,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),yd.forEach(t),M=i(Xa,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),Xa.forEach(t),N=c(n),he=s(n,"P",{});var wd=a(he);K=i(wd,"The abstract from the paper is the following:"),wd.forEach(t),we=c(n),ue=s(n,"P",{});var $d=a(ue);W=s($d,"EM",{});var xd=a(W);Ce=i(xd,`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),xd.forEach(t),$d.forEach(t),$e=c(n),P=s(n,"P",{});var zd=a(P);Pe=i(zd,"Tips:"),zd.forEach(t),H=c(n),V=s(n,"UL",{});var un=a(V);_e=s(un,"LI",{});var qd=a(_e);O=s(qd,"P",{});var mn=a(O);Ne=i(mn,`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),ge=s(mn,"EM",{});var Ed=a(ge);I=i(Ed,"translate English to German: \u2026"),Ed.forEach(t),Oe=i(mn,`,
for summarization: `),R=s(mn,"EM",{});var jd=a(R);Le=i(jd,"summarize: \u2026"),jd.forEach(t),z=i(mn,"."),mn.forEach(t),qd.forEach(t),F=c(un),te=s(un,"LI",{});var Fd=a(te);Ue=s(Fd,"P",{});var Md=a(Ue);ot=i(Md,"T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),Md.forEach(t),Fd.forEach(t),D=c(un),We=s(un,"LI",{});var Cd=a(We);ne=s(Cd,"P",{});var xt=a(ne);st=i(xt,"See the "),L=s(xt,"A",{href:!0});var Pd=a(L);Y=i(Pd,"training"),Pd.forEach(t),at=i(xt,", "),Ae=s(xt,"A",{href:!0});var Nd=a(Ae);Z=i(Nd,"inference"),Nd.forEach(t),rt=i(xt," and "),Ie=s(xt,"A",{href:!0});var Od=a(Ie);De=i(Od,"scripts"),Od.forEach(t),it=i(xt," sections below for all details regarding usage."),xt.forEach(t),Cd.forEach(t),un.forEach(t),Gd=c(n),Qa=s(n,"P",{});var Ld=a(Qa);Ap=i(Ld,"T5 comes in different sizes:"),Ld.forEach(t),Ud=c(n),Re=s(n,"UL",{});var nt=a(Re);ri=s(nt,"LI",{});var Ad=a(ri);ii=s(Ad,"P",{});var mk=a(ii);Ao=s(mk,"A",{href:!0,rel:!0});var fk=a(Ao);Ip=i(fk,"t5-small"),fk.forEach(t),mk.forEach(t),Ad.forEach(t),Dp=c(nt),li=s(nt,"LI",{});var _k=a(li);di=s(_k,"P",{});var gk=a(di);Io=s(gk,"A",{href:!0,rel:!0});var Tk=a(Io);Sp=i(Tk,"t5-base"),Tk.forEach(t),gk.forEach(t),_k.forEach(t),Gp=c(nt),ci=s(nt,"LI",{});var bk=a(ci);pi=s(bk,"P",{});var kk=a(pi);Do=s(kk,"A",{href:!0,rel:!0});var vk=a(Do);Up=i(vk,"t5-large"),vk.forEach(t),kk.forEach(t),bk.forEach(t),Wp=c(nt),hi=s(nt,"LI",{});var yk=a(hi);ui=s(yk,"P",{});var wk=a(ui);So=s(wk,"A",{href:!0,rel:!0});var $k=a(So);Rp=i($k,"t5-3b"),$k.forEach(t),wk.forEach(t),yk.forEach(t),Bp=c(nt),mi=s(nt,"LI",{});var xk=a(mi);er=s(xk,"P",{});var dk=a(er);Go=s(dk,"A",{href:!0,rel:!0});var zk=a(Go);Hp=i(zk,"t5-11b"),zk.forEach(t),Vp=i(dk,"."),dk.forEach(t),xk.forEach(t),nt.forEach(t),Wd=c(n),tr=s(n,"P",{});var qk=a(tr);Kp=i(qk,"Based on the original T5 model, Google has released some follow-up works:"),qk.forEach(t),Rd=c(n),qt=s(n,"UL",{});var Ir=a(qt);fi=s(Ir,"LI",{});var Ek=a(fi);fn=s(Ek,"P",{});var Id=a(fn);_i=s(Id,"STRONG",{});var jk=a(_i);Yp=i(jk,"T5v1.1"),jk.forEach(t),Zp=i(Id,`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),nr=s(Id,"A",{href:!0});var Fk=a(nr);Jp=i(Fk,"here"),Fk.forEach(t),Xp=i(Id,"."),Id.forEach(t),Ek.forEach(t),Qp=c(Ir),gi=s(Ir,"LI",{});var Mk=a(gi);_n=s(Mk,"P",{});var Dd=a(_n);Ti=s(Dd,"STRONG",{});var Ck=a(Ti);eh=i(Ck,"mT5"),Ck.forEach(t),th=i(Dd,`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),or=s(Dd,"A",{href:!0});var Pk=a(or);nh=i(Pk,"here"),Pk.forEach(t),oh=i(Dd,"."),Dd.forEach(t),Mk.forEach(t),sh=c(Ir),bi=s(Ir,"LI",{});var Nk=a(bi);gn=s(Nk,"P",{});var Sd=a(gn);ki=s(Sd,"STRONG",{});var Ok=a(ki);ah=i(Ok,"byT5"),Ok.forEach(t),rh=i(Sd,`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),sr=s(Sd,"A",{href:!0});var Lk=a(sr);ih=i(Lk,"here"),Lk.forEach(t),lh=i(Sd,"."),Sd.forEach(t),Nk.forEach(t),Ir.forEach(t),Bd=c(n),Tn=s(n,"P",{});var Lc=a(Tn);dh=i(Lc,"All checkpoints can be found on the "),Uo=s(Lc,"A",{href:!0,rel:!0});var Ak=a(Uo);ch=i(Ak,"hub"),Ak.forEach(t),ph=i(Lc,"."),Lc.forEach(t),Hd=c(n),Et=s(n,"P",{});var Dr=a(Et);hh=i(Dr,"This model was contributed by "),Wo=s(Dr,"A",{href:!0,rel:!0});var Ik=a(Wo);uh=i(Ik,"thomwolf"),Ik.forEach(t),mh=i(Dr,". The original code can be found "),Ro=s(Dr,"A",{href:!0,rel:!0});var Dk=a(Ro);fh=i(Dk,"here"),Dk.forEach(t),_h=i(Dr,"."),Dr.forEach(t),Vd=c(n),ar=s(n,"A",{id:!0}),a(ar).forEach(t),Kd=c(n),It=s(n,"H2",{class:!0});var Ac=a(It);bn=s(Ac,"A",{id:!0,class:!0,href:!0});var Sk=a(bn);vi=s(Sk,"SPAN",{});var Gk=a(vi);v(Bo.$$.fragment,Gk),Gk.forEach(t),Sk.forEach(t),gh=c(Ac),yi=s(Ac,"SPAN",{});var Uk=a(yi);Th=i(Uk,"Training"),Uk.forEach(t),Ac.forEach(t),Yd=c(n),lt=s(n,"P",{});var ko=a(lt);bh=i(ko,`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),wi=s(ko,"CODE",{});var Wk=a(wi);kh=i(Wk,"input_ids"),Wk.forEach(t),vh=i(ko,`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),$i=s(ko,"CODE",{});var Rk=a($i);yh=i(Rk,"decoder_input_ids"),Rk.forEach(t),wh=i(ko,`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),xi=s(ko,"CODE",{});var Bk=a(xi);$h=i(Bk,"labels"),Bk.forEach(t),xh=i(ko,`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),ko.forEach(t),Zd=c(n),kn=s(n,"P",{});var Ic=a(kn);zh=i(Ic,"One can use "),rr=s(Ic,"A",{href:!0});var Hk=a(rr);qh=i(Hk,"T5ForConditionalGeneration"),Hk.forEach(t),Eh=i(Ic,` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),Ic.forEach(t),Jd=c(n),vn=s(n,"UL",{});var Dc=a(vn);Qe=s(Dc,"LI",{});var Ot=a(Qe);zi=s(Ot,"P",{});var Vk=a(zi);jh=i(Vk,"Unsupervised denoising training"),Vk.forEach(t),Fh=c(Ot),Te=s(Ot,"P",{});var He=a(Te);Mh=i(He,"In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),qi=s(He,"EM",{});var Kk=a(qi);Ch=i(Kk,"a.k.a"),Kk.forEach(t),Ph=i(He,` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),Ei=s(He,"EM",{});var Yk=a(Ei);Nh=i(Yk,"real"),Yk.forEach(t),Oh=i(He,` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),ji=s(He,"CODE",{});var Zk=a(ji);Lh=i(Zk,"<extra_id_0>"),Zk.forEach(t),Ah=i(He,`,
`),Fi=s(He,"CODE",{});var Jk=a(Fi);Ih=i(Jk,"<extra_id_1>"),Jk.forEach(t),Dh=i(He,", \u2026 up to "),Mi=s(He,"CODE",{});var Xk=a(Mi);Sh=i(Xk,"<extra_id_99>"),Xk.forEach(t),Gh=i(He,`. As a default, 100 sentinel tokens are available in
`),ir=s(He,"A",{href:!0});var Qk=a(ir);Uh=i(Qk,"T5Tokenizer"),Qk.forEach(t),Wh=i(He,"."),He.forEach(t),Rh=c(Ot),Ci=s(Ot,"P",{});var ev=a(Ci);Bh=i(ev,`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),ev.forEach(t),Hh=c(Ot),v(Ho.$$.fragment,Ot),Vh=c(Ot),Vo=s(Ot,"P",{});var Sc=a(Vo);Kh=i(Sc,"If you\u2019re interested in pre-training T5 on a new corpus, check out the "),Ko=s(Sc,"A",{href:!0,rel:!0});var tv=a(Ko);Yh=i(tv,"run_t5_mlm_flax.py"),tv.forEach(t),Zh=i(Sc,` script in the Examples
directory.`),Sc.forEach(t),Ot.forEach(t),Jh=c(Dc),be=s(Dc,"LI",{});var Ve=a(be);Pi=s(Ve,"P",{});var nv=a(Pi);Xh=i(nv,"Supervised training"),nv.forEach(t),Qh=c(Ve),Ni=s(Ve,"P",{});var ov=a(Ni);eu=i(ov,`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),ov.forEach(t),tu=c(Ve),v(Yo.$$.fragment,Ve),nu=c(Ve),re=s(Ve,"P",{});var xe=a(re);ou=i(xe,"As you can see, only 2 inputs are required for the model in order to compute a loss: "),Oi=s(xe,"CODE",{});var sv=a(Oi);su=i(sv,"input_ids"),sv.forEach(t),au=i(xe,` (which are the
`),Li=s(xe,"CODE",{});var av=a(Li);ru=i(av,"input_ids"),av.forEach(t),iu=i(xe," of the encoded input sequence) and "),Ai=s(xe,"CODE",{});var rv=a(Ai);lu=i(rv,"labels"),rv.forEach(t),du=i(xe," (which are the "),Ii=s(xe,"CODE",{});var iv=a(Ii);cu=i(iv,"input_ids"),iv.forEach(t),pu=i(xe,` of the encoded
target sequence). The model will automatically create the `),Di=s(xe,"CODE",{});var lv=a(Di);hu=i(lv,"decoder_input_ids"),lv.forEach(t),uu=i(xe," based on the "),Si=s(xe,"CODE",{});var dv=a(Si);mu=i(dv,"labels"),dv.forEach(t),fu=i(xe,`, by
shifting them one position to the right and prepending the `),Gi=s(xe,"CODE",{});var cv=a(Gi);_u=i(cv,"config.decoder_start_token_id"),cv.forEach(t),gu=i(xe,`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),xe.forEach(t),Tu=c(Ve),Dt=s(Ve,"P",{});var Sr=a(Dt);bu=i(Sr,`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Ui=s(Sr,"CODE",{});var pv=a(Ui);ku=i(pv,"max_source_length"),pv.forEach(t),vu=i(Sr," and "),Wi=s(Sr,"CODE",{});var hv=a(Wi);yu=i(hv,"max_target_length"),hv.forEach(t),wu=i(Sr,`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),Sr.forEach(t),$u=c(Ve),ke=s(Ve,"P",{});var Ke=a(ke);xu=i(Ke,"In addition, we must make sure that padding token id\u2019s of the "),Ri=s(Ke,"CODE",{});var uv=a(Ri);zu=i(uv,"labels"),uv.forEach(t),qu=i(Ke,` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),Bi=s(Ke,"CODE",{});var mv=a(Bi);Eu=i(mv,"ignore_index"),mv.forEach(t),ju=i(Ke,`
of the `),Hi=s(Ke,"CODE",{});var fv=a(Hi);Fu=i(fv,"CrossEntropyLoss"),fv.forEach(t),Mu=i(Ke,". In Flax, one can use the "),Vi=s(Ke,"CODE",{});var _v=a(Vi);Cu=i(_v,"decoder_attention_mask"),_v.forEach(t),Pu=i(Ke,` to ignore padded tokens from
the loss (see the `),Zo=s(Ke,"A",{href:!0,rel:!0});var gv=a(Zo);Nu=i(gv,"Flax summarization script"),gv.forEach(t),Ou=i(Ke,` for details). We also pass
`),Ki=s(Ke,"CODE",{});var Tv=a(Ki);Lu=i(Tv,"attention_mask"),Tv.forEach(t),Au=i(Ke,` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),Ke.forEach(t),Iu=c(Ve),v(Jo.$$.fragment,Ve),Ve.forEach(t),Dc.forEach(t),Xd=c(n),lr=s(n,"P",{});var bv=a(lr);Du=i(bv,"Additional training tips:"),bv.forEach(t),Qd=c(n),jt=s(n,"UL",{});var Gr=a(jt);Yi=s(Gr,"LI",{});var kv=a(Yi);Xo=s(kv,"P",{});var Gc=a(Xo);Su=i(Gc,"T5 models need a slightly higher learning rate than the default one set in the "),Zi=s(Gc,"CODE",{});var vv=a(Zi);Gu=i(vv,"Trainer"),vv.forEach(t),Uu=i(Gc,` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),Gc.forEach(t),kv.forEach(t),Wu=c(Gr),Ji=s(Gr,"LI",{});var yv=a(Ji);St=s(yv,"P",{});var Ur=a(St);Ru=i(Ur,"According to "),Qo=s(Ur,"A",{href:!0,rel:!0});var wv=a(Qo);Bu=i(wv,"this forum post"),wv.forEach(t),Hu=i(Ur,`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),es=s(Ur,"A",{href:!0,rel:!0});var $v=a(es);Vu=i($v,"paper"),$v.forEach(t),Ku=i(Ur,` for the task prefixes
used).`),Ur.forEach(t),yv.forEach(t),Yu=c(Gr),Xi=s(Gr,"LI",{});var xv=a(Xi);ts=s(xv,"P",{});var Uc=a(ts);Zu=i(Uc,`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),Qi=s(Uc,"EM",{});var zv=a(Qi);Ju=i(zv,"pad_to_multiple_of"),zv.forEach(t),Xu=i(Uc,` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),Uc.forEach(t),xv.forEach(t),Gr.forEach(t),ec=c(n),dr=s(n,"A",{id:!0}),a(dr).forEach(t),tc=c(n),Gt=s(n,"H2",{class:!0});var Wc=a(Gt);yn=s(Wc,"A",{id:!0,class:!0,href:!0});var qv=a(yn);el=s(qv,"SPAN",{});var Ev=a(el);v(ns.$$.fragment,Ev),Ev.forEach(t),qv.forEach(t),Qu=c(Wc),tl=s(Wc,"SPAN",{});var jv=a(tl);em=i(jv,"Inference"),jv.forEach(t),Wc.forEach(t),nc=c(n),dt=s(n,"P",{});var vo=a(dt);tm=i(vo,"At inference time, it is recommended to use "),cr=s(vo,"A",{href:!0});var Fv=a(cr);nm=i(Fv,"generate()"),Fv.forEach(t),om=i(vo,`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),os=s(vo,"A",{href:!0,rel:!0});var Mv=a(os);sm=i(Mv,"this blog post"),Mv.forEach(t),am=i(vo,` to know all the details about generating text with Transformers.
There\u2019s also `),ss=s(vo,"A",{href:!0,rel:!0});var Cv=a(ss);rm=i(Cv,"this blog post"),Cv.forEach(t),im=i(vo,` which explains how
generation works in general in encoder-decoder models.`),vo.forEach(t),oc=c(n),v(as.$$.fragment,n),sc=c(n),Be=s(n,"P",{});var Lt=a(Be);lm=i(Lt,"Note that T5 uses the "),nl=s(Lt,"CODE",{});var Pv=a(nl);dm=i(Pv,"pad_token_id"),Pv.forEach(t),cm=i(Lt," as the "),ol=s(Lt,"CODE",{});var Nv=a(ol);pm=i(Nv,"decoder_start_token_id"),Nv.forEach(t),hm=i(Lt,`, so when doing generation without using
`),pr=s(Lt,"A",{href:!0});var Ov=a(pr);um=i(Ov,"generate()"),Ov.forEach(t),mm=i(Lt,", make sure you start it with the "),sl=s(Lt,"CODE",{});var Lv=a(sl);fm=i(Lv,"pad_token_id"),Lv.forEach(t),_m=i(Lt,"."),Lt.forEach(t),ac=c(n),hr=s(n,"P",{});var Av=a(hr);gm=i(Av,"The example above only shows a single example. You can also do batched inference, like so:"),Av.forEach(t),rc=c(n),v(rs.$$.fragment,n),ic=c(n),ur=s(n,"A",{id:!0}),a(ur).forEach(t),lc=c(n),Ut=s(n,"H2",{class:!0});var Rc=a(Ut);wn=s(Rc,"A",{id:!0,class:!0,href:!0});var Iv=a(wn);al=s(Iv,"SPAN",{});var Dv=a(al);v(is.$$.fragment,Dv),Dv.forEach(t),Iv.forEach(t),Tm=c(Rc),rl=s(Rc,"SPAN",{});var Sv=a(rl);bm=i(Sv,"Performance"),Sv.forEach(t),Rc.forEach(t),dc=c(n),ct=s(n,"P",{});var yo=a(ct);km=i(yo,"If you\u2019d like a faster training and inference performance, install "),ls=s(yo,"A",{href:!0,rel:!0});var Gv=a(ls);vm=i(Gv,"apex"),Gv.forEach(t),ym=i(yo," and then the model will automatically use "),il=s(yo,"CODE",{});var Uv=a(il);wm=i(Uv,"apex.normalization.FusedRMSNorm"),Uv.forEach(t),$m=i(yo," instead of "),ll=s(yo,"CODE",{});var Wv=a(ll);xm=i(Wv,"T5LayerNorm"),Wv.forEach(t),zm=i(yo,". The former uses an optimized fused kernel which is several times faster than the latter."),yo.forEach(t),cc=c(n),Wt=s(n,"H2",{class:!0});var Bc=a(Wt);$n=s(Bc,"A",{id:!0,class:!0,href:!0});var Rv=a($n);dl=s(Rv,"SPAN",{});var Bv=a(dl);v(ds.$$.fragment,Bv),Bv.forEach(t),Rv.forEach(t),qm=c(Bc),cl=s(Bc,"SPAN",{});var Hv=a(cl);Em=i(Hv,"Example scripts"),Hv.forEach(t),Bc.forEach(t),pc=c(n),mr=s(n,"P",{});var Vv=a(mr);jm=i(Vv,"T5 is supported by several example scripts, both for pre-training and fine-tuning."),Vv.forEach(t),hc=c(n),xn=s(n,"UL",{});var Hc=a(xn);pl=s(Hc,"LI",{});var Kv=a(pl);Rt=s(Kv,"P",{});var Wr=a(Rt);Fm=i(Wr,"pre-training: the "),cs=s(Wr,"A",{href:!0,rel:!0});var Yv=a(cs);Mm=i(Yv,"run_t5_mlm_flax.py"),Yv.forEach(t),Cm=i(Wr,`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),ps=s(Wr,"A",{href:!0,rel:!0});var Zv=a(ps);Pm=i(Zv,"t5_tokenizer_model.py"),Zv.forEach(t),Nm=i(Wr,`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),Wr.forEach(t),Kv.forEach(t),Om=c(Hc),hl=s(Hc,"LI",{});var Jv=a(hl);Se=s(Jv,"P",{});var yt=a(Se);Lm=i(yt,"fine-tuning: T5 is supported by the official summarization scripts ("),hs=s(yt,"A",{href:!0,rel:!0});var Xv=a(hs);Am=i(Xv,"PyTorch"),Xv.forEach(t),Im=i(yt,", "),us=s(yt,"A",{href:!0,rel:!0});var Qv=a(us);Dm=i(Qv,"Tensorflow"),Qv.forEach(t),Sm=i(yt,", and "),ms=s(yt,"A",{href:!0,rel:!0});var ey=a(ms);Gm=i(ey,"Flax"),ey.forEach(t),Um=i(yt,`) and translation scripts
(`),fs=s(yt,"A",{href:!0,rel:!0});var ty=a(fs);Wm=i(ty,"PyTorch"),ty.forEach(t),Rm=i(yt," and "),_s=s(yt,"A",{href:!0,rel:!0});var ny=a(_s);Bm=i(ny,"Tensorflow"),ny.forEach(t),Hm=i(yt,`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),yt.forEach(t),Jv.forEach(t),Hc.forEach(t),uc=c(n),Bt=s(n,"H2",{class:!0});var Vc=a(Bt);zn=s(Vc,"A",{id:!0,class:!0,href:!0});var oy=a(zn);ul=s(oy,"SPAN",{});var sy=a(ul);v(gs.$$.fragment,sy),sy.forEach(t),oy.forEach(t),Vm=c(Vc),ml=s(Vc,"SPAN",{});var ay=a(ml);Km=i(ay,"T5Config"),ay.forEach(t),Vc.forEach(t),mc=c(n),wt=s(n,"DIV",{class:!0});var Rr=a(wt);v(Ts.$$.fragment,Rr),Ym=c(Rr),$t=s(Rr,"P",{});var wo=a($t);Zm=i(wo,"This is the configuration class to store the configuration of a "),fr=s(wo,"A",{href:!0});var ry=a(fr);Jm=i(ry,"T5Model"),ry.forEach(t),Xm=i(wo," or a "),_r=s(wo,"A",{href:!0});var iy=a(_r);Qm=i(iy,"TFT5Model"),iy.forEach(t),ef=i(wo,`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),bs=s(wo,"A",{href:!0,rel:!0});var ly=a(bs);tf=i(ly,"t5-small"),ly.forEach(t),nf=i(wo," architecture."),wo.forEach(t),of=c(Rr),Ht=s(Rr,"P",{});var Br=a(Ht);sf=i(Br,"Configuration objects inherit from "),gr=s(Br,"A",{href:!0});var dy=a(gr);af=i(dy,"PretrainedConfig"),dy.forEach(t),rf=i(Br,` and can be used to control the model outputs. Read the
documentation from `),Tr=s(Br,"A",{href:!0});var cy=a(Tr);lf=i(cy,"PretrainedConfig"),cy.forEach(t),df=i(Br," for more information."),Br.forEach(t),Rr.forEach(t),fc=c(n),Vt=s(n,"H2",{class:!0});var Kc=a(Vt);qn=s(Kc,"A",{id:!0,class:!0,href:!0});var py=a(qn);fl=s(py,"SPAN",{});var hy=a(fl);v(ks.$$.fragment,hy),hy.forEach(t),py.forEach(t),cf=c(Kc),_l=s(Kc,"SPAN",{});var uy=a(_l);pf=i(uy,"T5Tokenizer"),uy.forEach(t),Kc.forEach(t),_c=c(n),ie=s(n,"DIV",{class:!0});var Ye=a(ie);v(vs.$$.fragment,Ye),hf=c(Ye),ys=s(Ye,"P",{});var Yc=a(ys);uf=i(Yc,"Construct a T5 tokenizer. Based on "),ws=s(Yc,"A",{href:!0,rel:!0});var my=a(ws);mf=i(my,"SentencePiece"),my.forEach(t),ff=i(Yc,"."),Yc.forEach(t),_f=c(Ye),$s=s(Ye,"P",{});var Zc=a($s);gf=i(Zc,"This tokenizer inherits from "),br=s(Zc,"A",{href:!0});var fy=a(br);Tf=i(fy,"PreTrainedTokenizer"),fy.forEach(t),bf=i(Zc,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Zc.forEach(t),kf=c(Ye),Ft=s(Ye,"DIV",{class:!0});var Hr=a(Ft);v(xs.$$.fragment,Hr),vf=c(Hr),gl=s(Hr,"P",{});var _y=a(gl);yf=i(_y,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),_y.forEach(t),wf=c(Hr),zs=s(Hr,"UL",{});var Jc=a(zs);kr=s(Jc,"LI",{});var ck=a(kr);$f=i(ck,"single sequence: "),Tl=s(ck,"CODE",{});var gy=a(Tl);xf=i(gy,"X </s>"),gy.forEach(t),ck.forEach(t),zf=c(Jc),vr=s(Jc,"LI",{});var pk=a(vr);qf=i(pk,"pair of sequences: "),bl=s(pk,"CODE",{});var Ty=a(bl);Ef=i(Ty,"A </s> B </s>"),Ty.forEach(t),pk.forEach(t),Jc.forEach(t),Hr.forEach(t),jf=c(Ye),En=s(Ye,"DIV",{class:!0});var Xc=a(En);v(qs.$$.fragment,Xc),Ff=c(Xc),Es=s(Xc,"P",{});var Qc=a(Es);Mf=i(Qc,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),kl=s(Qc,"CODE",{});var by=a(kl);Cf=i(by,"prepare_for_model"),by.forEach(t),Pf=i(Qc," method."),Qc.forEach(t),Xc.forEach(t),Nf=c(Ye),jn=s(Ye,"DIV",{class:!0});var ep=a(jn);v(js.$$.fragment,ep),Of=c(ep),vl=s(ep,"P",{});var ky=a(vl);Lf=i(ky,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),ky.forEach(t),ep.forEach(t),Af=c(Ye),yr=s(Ye,"DIV",{class:!0});var vy=a(yr);v(Fs.$$.fragment,vy),vy.forEach(t),Ye.forEach(t),gc=c(n),Kt=s(n,"H2",{class:!0});var tp=a(Kt);Fn=s(tp,"A",{id:!0,class:!0,href:!0});var yy=a(Fn);yl=s(yy,"SPAN",{});var wy=a(yl);v(Ms.$$.fragment,wy),wy.forEach(t),yy.forEach(t),If=c(tp),wl=s(tp,"SPAN",{});var $y=a(wl);Df=i($y,"T5TokenizerFast"),$y.forEach(t),tp.forEach(t),Tc=c(n),Ge=s(n,"DIV",{class:!0});var At=a(Ge);v(Cs.$$.fragment,At),Sf=c(At),Yt=s(At,"P",{});var Vr=a(Yt);Gf=i(Vr,"Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),$l=s(Vr,"EM",{});var xy=a($l);Uf=i(xy,"tokenizers"),xy.forEach(t),Wf=i(Vr,` library). Based on
`),Ps=s(Vr,"A",{href:!0,rel:!0});var zy=a(Ps);Rf=i(zy,"Unigram"),zy.forEach(t),Bf=i(Vr,"."),Vr.forEach(t),Hf=c(At),Ns=s(At,"P",{});var np=a(Ns);Vf=i(np,"This tokenizer inherits from "),wr=s(np,"A",{href:!0});var qy=a(wr);Kf=i(qy,"PreTrainedTokenizerFast"),qy.forEach(t),Yf=i(np,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),np.forEach(t),Zf=c(At),Mt=s(At,"DIV",{class:!0});var Kr=a(Mt);v(Os.$$.fragment,Kr),Jf=c(Kr),xl=s(Kr,"P",{});var Ey=a(xl);Xf=i(Ey,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Ey.forEach(t),Qf=c(Kr),Ls=s(Kr,"UL",{});var op=a(Ls);$r=s(op,"LI",{});var hk=a($r);e_=i(hk,"single sequence: "),zl=s(hk,"CODE",{});var jy=a(zl);t_=i(jy,"X </s>"),jy.forEach(t),hk.forEach(t),n_=c(op),xr=s(op,"LI",{});var uk=a(xr);o_=i(uk,"pair of sequences: "),ql=s(uk,"CODE",{});var Fy=a(ql);s_=i(Fy,"A </s> B </s>"),Fy.forEach(t),uk.forEach(t),op.forEach(t),Kr.forEach(t),a_=c(At),Mn=s(At,"DIV",{class:!0});var sp=a(Mn);v(As.$$.fragment,sp),r_=c(sp),El=s(sp,"P",{});var My=a(El);i_=i(My,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),My.forEach(t),sp.forEach(t),At.forEach(t),bc=c(n),Zt=s(n,"H2",{class:!0});var ap=a(Zt);Cn=s(ap,"A",{id:!0,class:!0,href:!0});var Cy=a(Cn);jl=s(Cy,"SPAN",{});var Py=a(jl);v(Is.$$.fragment,Py),Py.forEach(t),Cy.forEach(t),l_=c(ap),Fl=s(ap,"SPAN",{});var Ny=a(Fl);d_=i(Ny,"T5Model"),Ny.forEach(t),ap.forEach(t),kc=c(n),J=s(n,"DIV",{class:!0});var ze=a(J);v(Ds.$$.fragment,ze),c_=c(ze),Ml=s(ze,"P",{});var Oy=a(Ml);p_=i(Oy,"The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),Oy.forEach(t),h_=c(ze),Ss=s(ze,"P",{});var rp=a(Ss);u_=i(rp,"The T5 model was proposed in "),Gs=s(rp,"A",{href:!0,rel:!0});var Ly=a(Gs);m_=i(Ly,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Ly.forEach(t),f_=i(rp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),rp.forEach(t),__=c(ze),Us=s(ze,"P",{});var ip=a(Us);g_=i(ip,"This model inherits from "),zr=s(ip,"A",{href:!0});var Ay=a(zr);T_=i(Ay,"PreTrainedModel"),Ay.forEach(t),b_=i(ip,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ip.forEach(t),k_=c(ze),Ws=s(ze,"P",{});var lp=a(Ws);v_=i(lp,"This model is also a PyTorch "),Rs=s(lp,"A",{href:!0,rel:!0});var Iy=a(Rs);y_=i(Iy,"torch.nn.Module"),Iy.forEach(t),w_=i(lp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lp.forEach(t),$_=c(ze),pt=s(ze,"DIV",{class:!0});var $o=a(pt);v(Bs.$$.fragment,$o),x_=c($o),Jt=s($o,"P",{});var Yr=a(Jt);z_=i(Yr,"The "),qr=s(Yr,"A",{href:!0});var Dy=a(qr);q_=i(Dy,"T5Model"),Dy.forEach(t),E_=i(Yr," forward method, overrides the "),Cl=s(Yr,"CODE",{});var Sy=a(Cl);j_=i(Sy,"__call__"),Sy.forEach(t),F_=i(Yr," special method."),Yr.forEach(t),M_=c($o),v(Pn.$$.fragment,$o),C_=c($o),v(Nn.$$.fragment,$o),$o.forEach(t),P_=c(ze),ht=s(ze,"DIV",{class:!0});var xo=a(ht);v(Hs.$$.fragment,xo),N_=c(xo),Pl=s(xo,"P",{});var Gy=a(Pl);O_=i(Gy,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),Gy.forEach(t),L_=c(xo),Nl=s(xo,"P",{});var Uy=a(Nl);A_=i(Uy,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Uy.forEach(t),I_=c(xo),v(On.$$.fragment,xo),xo.forEach(t),D_=c(ze),Ct=s(ze,"DIV",{class:!0});var Zr=a(Ct);v(Vs.$$.fragment,Zr),S_=c(Zr),Ol=s(Zr,"P",{});var Wy=a(Ol);G_=i(Wy,"Moves the model to cpu from a model parallel state."),Wy.forEach(t),U_=c(Zr),v(Ln.$$.fragment,Zr),Zr.forEach(t),ze.forEach(t),vc=c(n),Xt=s(n,"H2",{class:!0});var dp=a(Xt);An=s(dp,"A",{id:!0,class:!0,href:!0});var Ry=a(An);Ll=s(Ry,"SPAN",{});var By=a(Ll);v(Ks.$$.fragment,By),By.forEach(t),Ry.forEach(t),W_=c(dp),Al=s(dp,"SPAN",{});var Hy=a(Al);R_=i(Hy,"T5ForConditionalGeneration"),Hy.forEach(t),dp.forEach(t),yc=c(n),X=s(n,"DIV",{class:!0});var qe=a(X);v(Ys.$$.fragment,qe),B_=c(qe),Zs=s(qe,"P",{});var cp=a(Zs);H_=i(cp,"T5 Model with a "),Il=s(cp,"CODE",{});var Vy=a(Il);V_=i(Vy,"language modeling"),Vy.forEach(t),K_=i(cp," head on top."),cp.forEach(t),Y_=c(qe),Js=s(qe,"P",{});var pp=a(Js);Z_=i(pp,"The T5 model was proposed in "),Xs=s(pp,"A",{href:!0,rel:!0});var Ky=a(Xs);J_=i(Ky,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Ky.forEach(t),X_=i(pp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),pp.forEach(t),Q_=c(qe),Qs=s(qe,"P",{});var hp=a(Qs);eg=i(hp,"This model inherits from "),Er=s(hp,"A",{href:!0});var Yy=a(Er);tg=i(Yy,"PreTrainedModel"),Yy.forEach(t),ng=i(hp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hp.forEach(t),og=c(qe),ea=s(qe,"P",{});var up=a(ea);sg=i(up,"This model is also a PyTorch "),ta=s(up,"A",{href:!0,rel:!0});var Zy=a(ta);ag=i(Zy,"torch.nn.Module"),Zy.forEach(t),rg=i(up,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),up.forEach(t),ig=c(qe),ut=s(qe,"DIV",{class:!0});var zo=a(ut);v(na.$$.fragment,zo),lg=c(zo),Qt=s(zo,"P",{});var Jr=a(Qt);dg=i(Jr,"The "),jr=s(Jr,"A",{href:!0});var Jy=a(jr);cg=i(Jy,"T5ForConditionalGeneration"),Jy.forEach(t),pg=i(Jr," forward method, overrides the "),Dl=s(Jr,"CODE",{});var Xy=a(Dl);hg=i(Xy,"__call__"),Xy.forEach(t),ug=i(Jr," special method."),Jr.forEach(t),mg=c(zo),v(In.$$.fragment,zo),fg=c(zo),v(Dn.$$.fragment,zo),zo.forEach(t),_g=c(qe),mt=s(qe,"DIV",{class:!0});var qo=a(mt);v(oa.$$.fragment,qo),gg=c(qo),Sl=s(qo,"P",{});var Qy=a(Sl);Tg=i(Qy,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),Qy.forEach(t),bg=c(qo),Gl=s(qo,"P",{});var e5=a(Gl);kg=i(e5,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),e5.forEach(t),vg=c(qo),v(Sn.$$.fragment,qo),qo.forEach(t),yg=c(qe),Pt=s(qe,"DIV",{class:!0});var Xr=a(Pt);v(sa.$$.fragment,Xr),wg=c(Xr),Ul=s(Xr,"P",{});var t5=a(Ul);$g=i(t5,"Moves the model to cpu from a model parallel state."),t5.forEach(t),xg=c(Xr),v(Gn.$$.fragment,Xr),Xr.forEach(t),qe.forEach(t),wc=c(n),en=s(n,"H2",{class:!0});var mp=a(en);Un=s(mp,"A",{id:!0,class:!0,href:!0});var n5=a(Un);Wl=s(n5,"SPAN",{});var o5=a(Wl);v(aa.$$.fragment,o5),o5.forEach(t),n5.forEach(t),zg=c(mp),Rl=s(mp,"SPAN",{});var s5=a(Rl);qg=i(s5,"T5EncoderModel"),s5.forEach(t),mp.forEach(t),$c=c(n),Q=s(n,"DIV",{class:!0});var Ee=a(Q);v(ra.$$.fragment,Ee),Eg=c(Ee),Bl=s(Ee,"P",{});var a5=a(Bl);jg=i(a5,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),a5.forEach(t),Fg=c(Ee),ia=s(Ee,"P",{});var fp=a(ia);Mg=i(fp,"The T5 model was proposed in "),la=s(fp,"A",{href:!0,rel:!0});var r5=a(la);Cg=i(r5,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),r5.forEach(t),Pg=i(fp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),fp.forEach(t),Ng=c(Ee),da=s(Ee,"P",{});var _p=a(da);Og=i(_p,"This model inherits from "),Fr=s(_p,"A",{href:!0});var i5=a(Fr);Lg=i(i5,"PreTrainedModel"),i5.forEach(t),Ag=i(_p,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_p.forEach(t),Ig=c(Ee),ca=s(Ee,"P",{});var gp=a(ca);Dg=i(gp,"This model is also a PyTorch "),pa=s(gp,"A",{href:!0,rel:!0});var l5=a(pa);Sg=i(l5,"torch.nn.Module"),l5.forEach(t),Gg=i(gp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gp.forEach(t),Ug=c(Ee),ft=s(Ee,"DIV",{class:!0});var Eo=a(ft);v(ha.$$.fragment,Eo),Wg=c(Eo),tn=s(Eo,"P",{});var Qr=a(tn);Rg=i(Qr,"The "),Mr=s(Qr,"A",{href:!0});var d5=a(Mr);Bg=i(d5,"T5EncoderModel"),d5.forEach(t),Hg=i(Qr," forward method, overrides the "),Hl=s(Qr,"CODE",{});var c5=a(Hl);Vg=i(c5,"__call__"),c5.forEach(t),Kg=i(Qr," special method."),Qr.forEach(t),Yg=c(Eo),v(Wn.$$.fragment,Eo),Zg=c(Eo),v(Rn.$$.fragment,Eo),Eo.forEach(t),Jg=c(Ee),_t=s(Ee,"DIV",{class:!0});var jo=a(_t);v(ua.$$.fragment,jo),Xg=c(jo),Vl=s(jo,"P",{});var p5=a(Vl);Qg=i(p5,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),p5.forEach(t),eT=c(jo),Kl=s(jo,"P",{});var h5=a(Kl);tT=i(h5,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),h5.forEach(t),nT=c(jo),v(Bn.$$.fragment,jo),jo.forEach(t),oT=c(Ee),Nt=s(Ee,"DIV",{class:!0});var ei=a(Nt);v(ma.$$.fragment,ei),sT=c(ei),Yl=s(ei,"P",{});var u5=a(Yl);aT=i(u5,"Moves the model to cpu from a model parallel state."),u5.forEach(t),rT=c(ei),v(Hn.$$.fragment,ei),ei.forEach(t),Ee.forEach(t),xc=c(n),nn=s(n,"H2",{class:!0});var Tp=a(nn);Vn=s(Tp,"A",{id:!0,class:!0,href:!0});var m5=a(Vn);Zl=s(m5,"SPAN",{});var f5=a(Zl);v(fa.$$.fragment,f5),f5.forEach(t),m5.forEach(t),iT=c(Tp),Jl=s(Tp,"SPAN",{});var _5=a(Jl);lT=i(_5,"TFT5Model"),_5.forEach(t),Tp.forEach(t),zc=c(n),le=s(n,"DIV",{class:!0});var Ze=a(le);v(_a.$$.fragment,Ze),dT=c(Ze),Xl=s(Ze,"P",{});var g5=a(Xl);cT=i(g5,"The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),g5.forEach(t),pT=c(Ze),ga=s(Ze,"P",{});var bp=a(ga);hT=i(bp,"The T5 model was proposed in "),Ta=s(bp,"A",{href:!0,rel:!0});var T5=a(Ta);uT=i(T5,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),T5.forEach(t),mT=i(bp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),bp.forEach(t),fT=c(Ze),ba=s(Ze,"P",{});var kp=a(ba);_T=i(kp,"This model inherits from "),Cr=s(kp,"A",{href:!0});var b5=a(Cr);gT=i(b5,"TFPreTrainedModel"),b5.forEach(t),TT=i(kp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kp.forEach(t),bT=c(Ze),ka=s(Ze,"P",{});var vp=a(ka);kT=i(vp,"This model is also a "),va=s(vp,"A",{href:!0,rel:!0});var k5=a(va);vT=i(k5,"tf.keras.Model"),k5.forEach(t),yT=i(vp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vp.forEach(t),wT=c(Ze),v(Kn.$$.fragment,Ze),$T=c(Ze),gt=s(Ze,"DIV",{class:!0});var Fo=a(gt);v(ya.$$.fragment,Fo),xT=c(Fo),on=s(Fo,"P",{});var ti=a(on);zT=i(ti,"The "),Pr=s(ti,"A",{href:!0});var v5=a(Pr);qT=i(v5,"TFT5Model"),v5.forEach(t),ET=i(ti," forward method, overrides the "),Ql=s(ti,"CODE",{});var y5=a(Ql);jT=i(y5,"__call__"),y5.forEach(t),FT=i(ti," special method."),ti.forEach(t),MT=c(Fo),v(Yn.$$.fragment,Fo),CT=c(Fo),v(Zn.$$.fragment,Fo),Fo.forEach(t),Ze.forEach(t),qc=c(n),sn=s(n,"H2",{class:!0});var yp=a(sn);Jn=s(yp,"A",{id:!0,class:!0,href:!0});var w5=a(Jn);ed=s(w5,"SPAN",{});var $5=a(ed);v(wa.$$.fragment,$5),$5.forEach(t),w5.forEach(t),PT=c(yp),td=s(yp,"SPAN",{});var x5=a(td);NT=i(x5,"TFT5ForConditionalGeneration"),x5.forEach(t),yp.forEach(t),Ec=c(n),de=s(n,"DIV",{class:!0});var Je=a(de);v($a.$$.fragment,Je),OT=c(Je),xa=s(Je,"P",{});var wp=a(xa);LT=i(wp,"T5 Model with a "),nd=s(wp,"CODE",{});var z5=a(nd);AT=i(z5,"language modeling"),z5.forEach(t),IT=i(wp," head on top."),wp.forEach(t),DT=c(Je),za=s(Je,"P",{});var $p=a(za);ST=i($p,"The T5 model was proposed in "),qa=s($p,"A",{href:!0,rel:!0});var q5=a(qa);GT=i(q5,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),q5.forEach(t),UT=i($p,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),$p.forEach(t),WT=c(Je),Ea=s(Je,"P",{});var xp=a(Ea);RT=i(xp,"This model inherits from "),Nr=s(xp,"A",{href:!0});var E5=a(Nr);BT=i(E5,"TFPreTrainedModel"),E5.forEach(t),HT=i(xp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xp.forEach(t),VT=c(Je),ja=s(Je,"P",{});var zp=a(ja);KT=i(zp,"This model is also a "),Fa=s(zp,"A",{href:!0,rel:!0});var j5=a(Fa);YT=i(j5,"tf.keras.Model"),j5.forEach(t),ZT=i(zp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zp.forEach(t),JT=c(Je),v(Xn.$$.fragment,Je),XT=c(Je),Tt=s(Je,"DIV",{class:!0});var Mo=a(Tt);v(Ma.$$.fragment,Mo),QT=c(Mo),an=s(Mo,"P",{});var ni=a(an);eb=i(ni,"The "),Or=s(ni,"A",{href:!0});var F5=a(Or);tb=i(F5,"TFT5ForConditionalGeneration"),F5.forEach(t),nb=i(ni," forward method, overrides the "),od=s(ni,"CODE",{});var M5=a(od);ob=i(M5,"__call__"),M5.forEach(t),sb=i(ni," special method."),ni.forEach(t),ab=c(Mo),v(Qn.$$.fragment,Mo),rb=c(Mo),v(eo.$$.fragment,Mo),Mo.forEach(t),Je.forEach(t),jc=c(n),rn=s(n,"H2",{class:!0});var qp=a(rn);to=s(qp,"A",{id:!0,class:!0,href:!0});var C5=a(to);sd=s(C5,"SPAN",{});var P5=a(sd);v(Ca.$$.fragment,P5),P5.forEach(t),C5.forEach(t),ib=c(qp),ad=s(qp,"SPAN",{});var N5=a(ad);lb=i(N5,"TFT5EncoderModel"),N5.forEach(t),qp.forEach(t),Fc=c(n),ce=s(n,"DIV",{class:!0});var Xe=a(ce);v(Pa.$$.fragment,Xe),db=c(Xe),rd=s(Xe,"P",{});var O5=a(rd);cb=i(O5,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),O5.forEach(t),pb=c(Xe),Na=s(Xe,"P",{});var Ep=a(Na);hb=i(Ep,"The T5 model was proposed in "),Oa=s(Ep,"A",{href:!0,rel:!0});var L5=a(Oa);ub=i(L5,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),L5.forEach(t),mb=i(Ep,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Ep.forEach(t),fb=c(Xe),La=s(Xe,"P",{});var jp=a(La);_b=i(jp,"This model inherits from "),Lr=s(jp,"A",{href:!0});var A5=a(Lr);gb=i(A5,"TFPreTrainedModel"),A5.forEach(t),Tb=i(jp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jp.forEach(t),bb=c(Xe),Aa=s(Xe,"P",{});var Fp=a(Aa);kb=i(Fp,"This model is also a "),Ia=s(Fp,"A",{href:!0,rel:!0});var I5=a(Ia);vb=i(I5,"tf.keras.Model"),I5.forEach(t),yb=i(Fp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fp.forEach(t),wb=c(Xe),v(no.$$.fragment,Xe),$b=c(Xe),bt=s(Xe,"DIV",{class:!0});var Co=a(bt);v(Da.$$.fragment,Co),xb=c(Co),ln=s(Co,"P",{});var oi=a(ln);zb=i(oi,"The "),Ar=s(oi,"A",{href:!0});var D5=a(Ar);qb=i(D5,"TFT5EncoderModel"),D5.forEach(t),Eb=i(oi," forward method, overrides the "),id=s(oi,"CODE",{});var S5=a(id);jb=i(S5,"__call__"),S5.forEach(t),Fb=i(oi," special method."),oi.forEach(t),Mb=c(Co),v(oo.$$.fragment,Co),Cb=c(Co),v(so.$$.fragment,Co),Co.forEach(t),Xe.forEach(t),Mc=c(n),dn=s(n,"H2",{class:!0});var Mp=a(dn);ao=s(Mp,"A",{id:!0,class:!0,href:!0});var G5=a(ao);ld=s(G5,"SPAN",{});var U5=a(ld);v(Sa.$$.fragment,U5),U5.forEach(t),G5.forEach(t),Pb=c(Mp),dd=s(Mp,"SPAN",{});var W5=a(dd);Nb=i(W5,"FlaxT5Model"),W5.forEach(t),Mp.forEach(t),Cc=c(n),et=s(n,"DIV",{class:!0});var Po=a(et);v(Ga.$$.fragment,Po),Ob=c(Po),kt=s(Po,"DIV",{class:!0});var No=a(kt);v(Ua.$$.fragment,No),Lb=c(No),cn=s(No,"P",{});var si=a(cn);Ab=i(si,"The "),cd=s(si,"CODE",{});var R5=a(cd);Ib=i(R5,"FlaxT5PreTrainedModel"),R5.forEach(t),Db=i(si," forward method, overrides the "),pd=s(si,"CODE",{});var B5=a(pd);Sb=i(B5,"__call__"),B5.forEach(t),Gb=i(si," special method."),si.forEach(t),Ub=c(No),v(ro.$$.fragment,No),Wb=c(No),v(io.$$.fragment,No),No.forEach(t),Rb=c(Po),lo=s(Po,"DIV",{class:!0});var Cp=a(lo);v(Wa.$$.fragment,Cp),Bb=c(Cp),v(co.$$.fragment,Cp),Cp.forEach(t),Hb=c(Po),po=s(Po,"DIV",{class:!0});var Pp=a(po);v(Ra.$$.fragment,Pp),Vb=c(Pp),v(ho.$$.fragment,Pp),Pp.forEach(t),Po.forEach(t),Pc=c(n),pn=s(n,"H2",{class:!0});var Np=a(pn);uo=s(Np,"A",{id:!0,class:!0,href:!0});var H5=a(uo);hd=s(H5,"SPAN",{});var V5=a(hd);v(Ba.$$.fragment,V5),V5.forEach(t),H5.forEach(t),Kb=c(Np),ud=s(Np,"SPAN",{});var K5=a(ud);Yb=i(K5,"FlaxT5ForConditionalGeneration"),K5.forEach(t),Np.forEach(t),Nc=c(n),tt=s(n,"DIV",{class:!0});var Oo=a(tt);v(Ha.$$.fragment,Oo),Zb=c(Oo),vt=s(Oo,"DIV",{class:!0});var Lo=a(vt);v(Va.$$.fragment,Lo),Jb=c(Lo),hn=s(Lo,"P",{});var ai=a(hn);Xb=i(ai,"The "),md=s(ai,"CODE",{});var Y5=a(md);Qb=i(Y5,"FlaxT5PreTrainedModel"),Y5.forEach(t),ek=i(ai," forward method, overrides the "),fd=s(ai,"CODE",{});var Z5=a(fd);tk=i(Z5,"__call__"),Z5.forEach(t),nk=i(ai," special method."),ai.forEach(t),ok=c(Lo),v(mo.$$.fragment,Lo),sk=c(Lo),v(fo.$$.fragment,Lo),Lo.forEach(t),ak=c(Oo),_o=s(Oo,"DIV",{class:!0});var Op=a(_o);v(Ka.$$.fragment,Op),rk=c(Op),v(go.$$.fragment,Op),Op.forEach(t),ik=c(Oo),To=s(Oo,"DIV",{class:!0});var Lp=a(To);v(Ya.$$.fragment,Lp),lk=c(Lp),v(bo.$$.fragment,Lp),Lp.forEach(t),Oo.forEach(t),this.h()},h(){h(p,"name","hf:doc:metadata"),h(p,"content",JSON.stringify(C1)),h(u,"id","t5"),h(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(u,"href","#t5"),h(g,"class","relative group"),h(ee,"id","overview"),h(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ee,"href","#overview"),h(j,"class","relative group"),h(ae,"href","https://arxiv.org/pdf/1910.10683.pdf"),h(ae,"rel","nofollow"),h(L,"href","#training"),h(Ae,"href","#inference"),h(Ie,"href","#scripts"),h(Ao,"href","https://huggingface.co/t5-small"),h(Ao,"rel","nofollow"),h(Io,"href","https://huggingface.co/t5-base"),h(Io,"rel","nofollow"),h(Do,"href","https://huggingface.co/t5-large"),h(Do,"rel","nofollow"),h(So,"href","https://huggingface.co/t5-3b"),h(So,"rel","nofollow"),h(Go,"href","https://huggingface.co/t5-11b"),h(Go,"rel","nofollow"),h(nr,"href","t5v1.1"),h(or,"href","mt5"),h(sr,"href","byt5"),h(Uo,"href","https://huggingface.co/models?search=t5"),h(Uo,"rel","nofollow"),h(Wo,"href","https://huggingface.co/thomwolf"),h(Wo,"rel","nofollow"),h(Ro,"href","https://github.com/google-research/text-to-text-transfer-transformer"),h(Ro,"rel","nofollow"),h(ar,"id","training"),h(bn,"id","training"),h(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(bn,"href","#training"),h(It,"class","relative group"),h(rr,"href","/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5ForConditionalGeneration"),h(ir,"href","/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Tokenizer"),h(Ko,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/language-modeling"),h(Ko,"rel","nofollow"),h(Zo,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/summarization"),h(Zo,"rel","nofollow"),h(Qo,"href","https://discuss.huggingface.co/t/t5-finetuning-tips/684"),h(Qo,"rel","nofollow"),h(es,"href","https://arxiv.org/pdf/1910.10683.pdf"),h(es,"rel","nofollow"),h(dr,"id","inference"),h(yn,"id","inference"),h(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(yn,"href","#inference"),h(Gt,"class","relative group"),h(cr,"href","/docs/transformers/pr_highlight/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),h(os,"href","https://huggingface.co/blog/how-to-generate"),h(os,"rel","nofollow"),h(ss,"href","https://huggingface.co/blog/encoder-decoder#encoder-decoder"),h(ss,"rel","nofollow"),h(pr,"href","/docs/transformers/pr_highlight/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),h(ur,"id","scripts"),h(wn,"id","performance"),h(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(wn,"href","#performance"),h(Ut,"class","relative group"),h(ls,"href","https://github.com/NVIDIA/apex#quick-start"),h(ls,"rel","nofollow"),h($n,"id","example-scripts"),h($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($n,"href","#example-scripts"),h(Wt,"class","relative group"),h(cs,"href","https://github.com/huggingface/transformers/blob/main/examples/flax/language-modeling/run_t5_mlm_flax.py"),h(cs,"rel","nofollow"),h(ps,"href","https://github.com/huggingface/transformers/blob/main/examples/flax/language-modeling/t5_tokenizer_model.py"),h(ps,"rel","nofollow"),h(hs,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization"),h(hs,"rel","nofollow"),h(us,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/summarization"),h(us,"rel","nofollow"),h(ms,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/summarization"),h(ms,"rel","nofollow"),h(fs,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/translation"),h(fs,"rel","nofollow"),h(_s,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/translation"),h(_s,"rel","nofollow"),h(zn,"id","transformers.T5Config"),h(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(zn,"href","#transformers.T5Config"),h(Bt,"class","relative group"),h(fr,"href","/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Model"),h(_r,"href","/docs/transformers/pr_highlight/en/model_doc/t5#transformers.TFT5Model"),h(bs,"href","https://huggingface.co/t5-small"),h(bs,"rel","nofollow"),h(gr,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),h(Tr,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),h(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(qn,"id","transformers.T5Tokenizer"),h(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(qn,"href","#transformers.T5Tokenizer"),h(Vt,"class","relative group"),h(ws,"href","https://github.com/google/sentencepiece"),h(ws,"rel","nofollow"),h(br,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(En,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(jn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(yr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Fn,"id","transformers.T5TokenizerFast"),h(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Fn,"href","#transformers.T5TokenizerFast"),h(Kt,"class","relative group"),h(Ps,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),h(Ps,"rel","nofollow"),h(wr,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Mn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Cn,"id","transformers.T5Model"),h(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Cn,"href","#transformers.T5Model"),h(Zt,"class","relative group"),h(Gs,"href","https://arxiv.org/abs/1910.10683"),h(Gs,"rel","nofollow"),h(zr,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),h(Rs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Rs,"rel","nofollow"),h(qr,"href","/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5Model"),h(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(An,"id","transformers.T5ForConditionalGeneration"),h(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(An,"href","#transformers.T5ForConditionalGeneration"),h(Xt,"class","relative group"),h(Xs,"href","https://arxiv.org/abs/1910.10683"),h(Xs,"rel","nofollow"),h(Er,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),h(ta,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(ta,"rel","nofollow"),h(jr,"href","/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5ForConditionalGeneration"),h(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Un,"id","transformers.T5EncoderModel"),h(Un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Un,"href","#transformers.T5EncoderModel"),h(en,"class","relative group"),h(la,"href","https://arxiv.org/abs/1910.10683"),h(la,"rel","nofollow"),h(Fr,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),h(pa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(pa,"rel","nofollow"),h(Mr,"href","/docs/transformers/pr_highlight/en/model_doc/t5#transformers.T5EncoderModel"),h(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Vn,"id","transformers.TFT5Model"),h(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Vn,"href","#transformers.TFT5Model"),h(nn,"class","relative group"),h(Ta,"href","https://arxiv.org/abs/1910.10683"),h(Ta,"rel","nofollow"),h(Cr,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),h(va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(va,"rel","nofollow"),h(Pr,"href","/docs/transformers/pr_highlight/en/model_doc/t5#transformers.TFT5Model"),h(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Jn,"id","transformers.TFT5ForConditionalGeneration"),h(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Jn,"href","#transformers.TFT5ForConditionalGeneration"),h(sn,"class","relative group"),h(qa,"href","https://arxiv.org/abs/1910.10683"),h(qa,"rel","nofollow"),h(Nr,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),h(Fa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Fa,"rel","nofollow"),h(Or,"href","/docs/transformers/pr_highlight/en/model_doc/t5#transformers.TFT5ForConditionalGeneration"),h(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(to,"id","transformers.TFT5EncoderModel"),h(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(to,"href","#transformers.TFT5EncoderModel"),h(rn,"class","relative group"),h(Oa,"href","https://arxiv.org/abs/1910.10683"),h(Oa,"rel","nofollow"),h(Lr,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),h(Ia,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Ia,"rel","nofollow"),h(Ar,"href","/docs/transformers/pr_highlight/en/model_doc/t5#transformers.TFT5EncoderModel"),h(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ao,"id","transformers.FlaxT5Model"),h(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ao,"href","#transformers.FlaxT5Model"),h(dn,"class","relative group"),h(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(uo,"id","transformers.FlaxT5ForConditionalGeneration"),h(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(uo,"href","#transformers.FlaxT5ForConditionalGeneration"),h(pn,"class","relative group"),h(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,_){e(document.head,p),f(n,b,_),f(n,g,_),e(g,u),e(u,T),y(l,T,null),e(g,m),e(g,E),e(E,je),f(n,oe,_),f(n,j,_),e(j,ee),e(ee,S),y(se,S,null),e(j,Fe),e(j,G),e(G,Me),f(n,ye,_),f(n,U,_),e(U,A),e(U,ae),e(ae,pe),e(U,M),f(n,N,_),f(n,he,_),e(he,K),f(n,we,_),f(n,ue,_),e(ue,W),e(W,Ce),f(n,$e,_),f(n,P,_),e(P,Pe),f(n,H,_),f(n,V,_),e(V,_e),e(_e,O),e(O,Ne),e(O,ge),e(ge,I),e(O,Oe),e(O,R),e(R,Le),e(O,z),e(V,F),e(V,te),e(te,Ue),e(Ue,ot),e(V,D),e(V,We),e(We,ne),e(ne,st),e(ne,L),e(L,Y),e(ne,at),e(ne,Ae),e(Ae,Z),e(ne,rt),e(ne,Ie),e(Ie,De),e(ne,it),f(n,Gd,_),f(n,Qa,_),e(Qa,Ap),f(n,Ud,_),f(n,Re,_),e(Re,ri),e(ri,ii),e(ii,Ao),e(Ao,Ip),e(Re,Dp),e(Re,li),e(li,di),e(di,Io),e(Io,Sp),e(Re,Gp),e(Re,ci),e(ci,pi),e(pi,Do),e(Do,Up),e(Re,Wp),e(Re,hi),e(hi,ui),e(ui,So),e(So,Rp),e(Re,Bp),e(Re,mi),e(mi,er),e(er,Go),e(Go,Hp),e(er,Vp),f(n,Wd,_),f(n,tr,_),e(tr,Kp),f(n,Rd,_),f(n,qt,_),e(qt,fi),e(fi,fn),e(fn,_i),e(_i,Yp),e(fn,Zp),e(fn,nr),e(nr,Jp),e(fn,Xp),e(qt,Qp),e(qt,gi),e(gi,_n),e(_n,Ti),e(Ti,eh),e(_n,th),e(_n,or),e(or,nh),e(_n,oh),e(qt,sh),e(qt,bi),e(bi,gn),e(gn,ki),e(ki,ah),e(gn,rh),e(gn,sr),e(sr,ih),e(gn,lh),f(n,Bd,_),f(n,Tn,_),e(Tn,dh),e(Tn,Uo),e(Uo,ch),e(Tn,ph),f(n,Hd,_),f(n,Et,_),e(Et,hh),e(Et,Wo),e(Wo,uh),e(Et,mh),e(Et,Ro),e(Ro,fh),e(Et,_h),f(n,Vd,_),f(n,ar,_),f(n,Kd,_),f(n,It,_),e(It,bn),e(bn,vi),y(Bo,vi,null),e(It,gh),e(It,yi),e(yi,Th),f(n,Yd,_),f(n,lt,_),e(lt,bh),e(lt,wi),e(wi,kh),e(lt,vh),e(lt,$i),e($i,yh),e(lt,wh),e(lt,xi),e(xi,$h),e(lt,xh),f(n,Zd,_),f(n,kn,_),e(kn,zh),e(kn,rr),e(rr,qh),e(kn,Eh),f(n,Jd,_),f(n,vn,_),e(vn,Qe),e(Qe,zi),e(zi,jh),e(Qe,Fh),e(Qe,Te),e(Te,Mh),e(Te,qi),e(qi,Ch),e(Te,Ph),e(Te,Ei),e(Ei,Nh),e(Te,Oh),e(Te,ji),e(ji,Lh),e(Te,Ah),e(Te,Fi),e(Fi,Ih),e(Te,Dh),e(Te,Mi),e(Mi,Sh),e(Te,Gh),e(Te,ir),e(ir,Uh),e(Te,Wh),e(Qe,Rh),e(Qe,Ci),e(Ci,Bh),e(Qe,Hh),y(Ho,Qe,null),e(Qe,Vh),e(Qe,Vo),e(Vo,Kh),e(Vo,Ko),e(Ko,Yh),e(Vo,Zh),e(vn,Jh),e(vn,be),e(be,Pi),e(Pi,Xh),e(be,Qh),e(be,Ni),e(Ni,eu),e(be,tu),y(Yo,be,null),e(be,nu),e(be,re),e(re,ou),e(re,Oi),e(Oi,su),e(re,au),e(re,Li),e(Li,ru),e(re,iu),e(re,Ai),e(Ai,lu),e(re,du),e(re,Ii),e(Ii,cu),e(re,pu),e(re,Di),e(Di,hu),e(re,uu),e(re,Si),e(Si,mu),e(re,fu),e(re,Gi),e(Gi,_u),e(re,gu),e(be,Tu),e(be,Dt),e(Dt,bu),e(Dt,Ui),e(Ui,ku),e(Dt,vu),e(Dt,Wi),e(Wi,yu),e(Dt,wu),e(be,$u),e(be,ke),e(ke,xu),e(ke,Ri),e(Ri,zu),e(ke,qu),e(ke,Bi),e(Bi,Eu),e(ke,ju),e(ke,Hi),e(Hi,Fu),e(ke,Mu),e(ke,Vi),e(Vi,Cu),e(ke,Pu),e(ke,Zo),e(Zo,Nu),e(ke,Ou),e(ke,Ki),e(Ki,Lu),e(ke,Au),e(be,Iu),y(Jo,be,null),f(n,Xd,_),f(n,lr,_),e(lr,Du),f(n,Qd,_),f(n,jt,_),e(jt,Yi),e(Yi,Xo),e(Xo,Su),e(Xo,Zi),e(Zi,Gu),e(Xo,Uu),e(jt,Wu),e(jt,Ji),e(Ji,St),e(St,Ru),e(St,Qo),e(Qo,Bu),e(St,Hu),e(St,es),e(es,Vu),e(St,Ku),e(jt,Yu),e(jt,Xi),e(Xi,ts),e(ts,Zu),e(ts,Qi),e(Qi,Ju),e(ts,Xu),f(n,ec,_),f(n,dr,_),f(n,tc,_),f(n,Gt,_),e(Gt,yn),e(yn,el),y(ns,el,null),e(Gt,Qu),e(Gt,tl),e(tl,em),f(n,nc,_),f(n,dt,_),e(dt,tm),e(dt,cr),e(cr,nm),e(dt,om),e(dt,os),e(os,sm),e(dt,am),e(dt,ss),e(ss,rm),e(dt,im),f(n,oc,_),y(as,n,_),f(n,sc,_),f(n,Be,_),e(Be,lm),e(Be,nl),e(nl,dm),e(Be,cm),e(Be,ol),e(ol,pm),e(Be,hm),e(Be,pr),e(pr,um),e(Be,mm),e(Be,sl),e(sl,fm),e(Be,_m),f(n,ac,_),f(n,hr,_),e(hr,gm),f(n,rc,_),y(rs,n,_),f(n,ic,_),f(n,ur,_),f(n,lc,_),f(n,Ut,_),e(Ut,wn),e(wn,al),y(is,al,null),e(Ut,Tm),e(Ut,rl),e(rl,bm),f(n,dc,_),f(n,ct,_),e(ct,km),e(ct,ls),e(ls,vm),e(ct,ym),e(ct,il),e(il,wm),e(ct,$m),e(ct,ll),e(ll,xm),e(ct,zm),f(n,cc,_),f(n,Wt,_),e(Wt,$n),e($n,dl),y(ds,dl,null),e(Wt,qm),e(Wt,cl),e(cl,Em),f(n,pc,_),f(n,mr,_),e(mr,jm),f(n,hc,_),f(n,xn,_),e(xn,pl),e(pl,Rt),e(Rt,Fm),e(Rt,cs),e(cs,Mm),e(Rt,Cm),e(Rt,ps),e(ps,Pm),e(Rt,Nm),e(xn,Om),e(xn,hl),e(hl,Se),e(Se,Lm),e(Se,hs),e(hs,Am),e(Se,Im),e(Se,us),e(us,Dm),e(Se,Sm),e(Se,ms),e(ms,Gm),e(Se,Um),e(Se,fs),e(fs,Wm),e(Se,Rm),e(Se,_s),e(_s,Bm),e(Se,Hm),f(n,uc,_),f(n,Bt,_),e(Bt,zn),e(zn,ul),y(gs,ul,null),e(Bt,Vm),e(Bt,ml),e(ml,Km),f(n,mc,_),f(n,wt,_),y(Ts,wt,null),e(wt,Ym),e(wt,$t),e($t,Zm),e($t,fr),e(fr,Jm),e($t,Xm),e($t,_r),e(_r,Qm),e($t,ef),e($t,bs),e(bs,tf),e($t,nf),e(wt,of),e(wt,Ht),e(Ht,sf),e(Ht,gr),e(gr,af),e(Ht,rf),e(Ht,Tr),e(Tr,lf),e(Ht,df),f(n,fc,_),f(n,Vt,_),e(Vt,qn),e(qn,fl),y(ks,fl,null),e(Vt,cf),e(Vt,_l),e(_l,pf),f(n,_c,_),f(n,ie,_),y(vs,ie,null),e(ie,hf),e(ie,ys),e(ys,uf),e(ys,ws),e(ws,mf),e(ys,ff),e(ie,_f),e(ie,$s),e($s,gf),e($s,br),e(br,Tf),e($s,bf),e(ie,kf),e(ie,Ft),y(xs,Ft,null),e(Ft,vf),e(Ft,gl),e(gl,yf),e(Ft,wf),e(Ft,zs),e(zs,kr),e(kr,$f),e(kr,Tl),e(Tl,xf),e(zs,zf),e(zs,vr),e(vr,qf),e(vr,bl),e(bl,Ef),e(ie,jf),e(ie,En),y(qs,En,null),e(En,Ff),e(En,Es),e(Es,Mf),e(Es,kl),e(kl,Cf),e(Es,Pf),e(ie,Nf),e(ie,jn),y(js,jn,null),e(jn,Of),e(jn,vl),e(vl,Lf),e(ie,Af),e(ie,yr),y(Fs,yr,null),f(n,gc,_),f(n,Kt,_),e(Kt,Fn),e(Fn,yl),y(Ms,yl,null),e(Kt,If),e(Kt,wl),e(wl,Df),f(n,Tc,_),f(n,Ge,_),y(Cs,Ge,null),e(Ge,Sf),e(Ge,Yt),e(Yt,Gf),e(Yt,$l),e($l,Uf),e(Yt,Wf),e(Yt,Ps),e(Ps,Rf),e(Yt,Bf),e(Ge,Hf),e(Ge,Ns),e(Ns,Vf),e(Ns,wr),e(wr,Kf),e(Ns,Yf),e(Ge,Zf),e(Ge,Mt),y(Os,Mt,null),e(Mt,Jf),e(Mt,xl),e(xl,Xf),e(Mt,Qf),e(Mt,Ls),e(Ls,$r),e($r,e_),e($r,zl),e(zl,t_),e(Ls,n_),e(Ls,xr),e(xr,o_),e(xr,ql),e(ql,s_),e(Ge,a_),e(Ge,Mn),y(As,Mn,null),e(Mn,r_),e(Mn,El),e(El,i_),f(n,bc,_),f(n,Zt,_),e(Zt,Cn),e(Cn,jl),y(Is,jl,null),e(Zt,l_),e(Zt,Fl),e(Fl,d_),f(n,kc,_),f(n,J,_),y(Ds,J,null),e(J,c_),e(J,Ml),e(Ml,p_),e(J,h_),e(J,Ss),e(Ss,u_),e(Ss,Gs),e(Gs,m_),e(Ss,f_),e(J,__),e(J,Us),e(Us,g_),e(Us,zr),e(zr,T_),e(Us,b_),e(J,k_),e(J,Ws),e(Ws,v_),e(Ws,Rs),e(Rs,y_),e(Ws,w_),e(J,$_),e(J,pt),y(Bs,pt,null),e(pt,x_),e(pt,Jt),e(Jt,z_),e(Jt,qr),e(qr,q_),e(Jt,E_),e(Jt,Cl),e(Cl,j_),e(Jt,F_),e(pt,M_),y(Pn,pt,null),e(pt,C_),y(Nn,pt,null),e(J,P_),e(J,ht),y(Hs,ht,null),e(ht,N_),e(ht,Pl),e(Pl,O_),e(ht,L_),e(ht,Nl),e(Nl,A_),e(ht,I_),y(On,ht,null),e(J,D_),e(J,Ct),y(Vs,Ct,null),e(Ct,S_),e(Ct,Ol),e(Ol,G_),e(Ct,U_),y(Ln,Ct,null),f(n,vc,_),f(n,Xt,_),e(Xt,An),e(An,Ll),y(Ks,Ll,null),e(Xt,W_),e(Xt,Al),e(Al,R_),f(n,yc,_),f(n,X,_),y(Ys,X,null),e(X,B_),e(X,Zs),e(Zs,H_),e(Zs,Il),e(Il,V_),e(Zs,K_),e(X,Y_),e(X,Js),e(Js,Z_),e(Js,Xs),e(Xs,J_),e(Js,X_),e(X,Q_),e(X,Qs),e(Qs,eg),e(Qs,Er),e(Er,tg),e(Qs,ng),e(X,og),e(X,ea),e(ea,sg),e(ea,ta),e(ta,ag),e(ea,rg),e(X,ig),e(X,ut),y(na,ut,null),e(ut,lg),e(ut,Qt),e(Qt,dg),e(Qt,jr),e(jr,cg),e(Qt,pg),e(Qt,Dl),e(Dl,hg),e(Qt,ug),e(ut,mg),y(In,ut,null),e(ut,fg),y(Dn,ut,null),e(X,_g),e(X,mt),y(oa,mt,null),e(mt,gg),e(mt,Sl),e(Sl,Tg),e(mt,bg),e(mt,Gl),e(Gl,kg),e(mt,vg),y(Sn,mt,null),e(X,yg),e(X,Pt),y(sa,Pt,null),e(Pt,wg),e(Pt,Ul),e(Ul,$g),e(Pt,xg),y(Gn,Pt,null),f(n,wc,_),f(n,en,_),e(en,Un),e(Un,Wl),y(aa,Wl,null),e(en,zg),e(en,Rl),e(Rl,qg),f(n,$c,_),f(n,Q,_),y(ra,Q,null),e(Q,Eg),e(Q,Bl),e(Bl,jg),e(Q,Fg),e(Q,ia),e(ia,Mg),e(ia,la),e(la,Cg),e(ia,Pg),e(Q,Ng),e(Q,da),e(da,Og),e(da,Fr),e(Fr,Lg),e(da,Ag),e(Q,Ig),e(Q,ca),e(ca,Dg),e(ca,pa),e(pa,Sg),e(ca,Gg),e(Q,Ug),e(Q,ft),y(ha,ft,null),e(ft,Wg),e(ft,tn),e(tn,Rg),e(tn,Mr),e(Mr,Bg),e(tn,Hg),e(tn,Hl),e(Hl,Vg),e(tn,Kg),e(ft,Yg),y(Wn,ft,null),e(ft,Zg),y(Rn,ft,null),e(Q,Jg),e(Q,_t),y(ua,_t,null),e(_t,Xg),e(_t,Vl),e(Vl,Qg),e(_t,eT),e(_t,Kl),e(Kl,tT),e(_t,nT),y(Bn,_t,null),e(Q,oT),e(Q,Nt),y(ma,Nt,null),e(Nt,sT),e(Nt,Yl),e(Yl,aT),e(Nt,rT),y(Hn,Nt,null),f(n,xc,_),f(n,nn,_),e(nn,Vn),e(Vn,Zl),y(fa,Zl,null),e(nn,iT),e(nn,Jl),e(Jl,lT),f(n,zc,_),f(n,le,_),y(_a,le,null),e(le,dT),e(le,Xl),e(Xl,cT),e(le,pT),e(le,ga),e(ga,hT),e(ga,Ta),e(Ta,uT),e(ga,mT),e(le,fT),e(le,ba),e(ba,_T),e(ba,Cr),e(Cr,gT),e(ba,TT),e(le,bT),e(le,ka),e(ka,kT),e(ka,va),e(va,vT),e(ka,yT),e(le,wT),y(Kn,le,null),e(le,$T),e(le,gt),y(ya,gt,null),e(gt,xT),e(gt,on),e(on,zT),e(on,Pr),e(Pr,qT),e(on,ET),e(on,Ql),e(Ql,jT),e(on,FT),e(gt,MT),y(Yn,gt,null),e(gt,CT),y(Zn,gt,null),f(n,qc,_),f(n,sn,_),e(sn,Jn),e(Jn,ed),y(wa,ed,null),e(sn,PT),e(sn,td),e(td,NT),f(n,Ec,_),f(n,de,_),y($a,de,null),e(de,OT),e(de,xa),e(xa,LT),e(xa,nd),e(nd,AT),e(xa,IT),e(de,DT),e(de,za),e(za,ST),e(za,qa),e(qa,GT),e(za,UT),e(de,WT),e(de,Ea),e(Ea,RT),e(Ea,Nr),e(Nr,BT),e(Ea,HT),e(de,VT),e(de,ja),e(ja,KT),e(ja,Fa),e(Fa,YT),e(ja,ZT),e(de,JT),y(Xn,de,null),e(de,XT),e(de,Tt),y(Ma,Tt,null),e(Tt,QT),e(Tt,an),e(an,eb),e(an,Or),e(Or,tb),e(an,nb),e(an,od),e(od,ob),e(an,sb),e(Tt,ab),y(Qn,Tt,null),e(Tt,rb),y(eo,Tt,null),f(n,jc,_),f(n,rn,_),e(rn,to),e(to,sd),y(Ca,sd,null),e(rn,ib),e(rn,ad),e(ad,lb),f(n,Fc,_),f(n,ce,_),y(Pa,ce,null),e(ce,db),e(ce,rd),e(rd,cb),e(ce,pb),e(ce,Na),e(Na,hb),e(Na,Oa),e(Oa,ub),e(Na,mb),e(ce,fb),e(ce,La),e(La,_b),e(La,Lr),e(Lr,gb),e(La,Tb),e(ce,bb),e(ce,Aa),e(Aa,kb),e(Aa,Ia),e(Ia,vb),e(Aa,yb),e(ce,wb),y(no,ce,null),e(ce,$b),e(ce,bt),y(Da,bt,null),e(bt,xb),e(bt,ln),e(ln,zb),e(ln,Ar),e(Ar,qb),e(ln,Eb),e(ln,id),e(id,jb),e(ln,Fb),e(bt,Mb),y(oo,bt,null),e(bt,Cb),y(so,bt,null),f(n,Mc,_),f(n,dn,_),e(dn,ao),e(ao,ld),y(Sa,ld,null),e(dn,Pb),e(dn,dd),e(dd,Nb),f(n,Cc,_),f(n,et,_),y(Ga,et,null),e(et,Ob),e(et,kt),y(Ua,kt,null),e(kt,Lb),e(kt,cn),e(cn,Ab),e(cn,cd),e(cd,Ib),e(cn,Db),e(cn,pd),e(pd,Sb),e(cn,Gb),e(kt,Ub),y(ro,kt,null),e(kt,Wb),y(io,kt,null),e(et,Rb),e(et,lo),y(Wa,lo,null),e(lo,Bb),y(co,lo,null),e(et,Hb),e(et,po),y(Ra,po,null),e(po,Vb),y(ho,po,null),f(n,Pc,_),f(n,pn,_),e(pn,uo),e(uo,hd),y(Ba,hd,null),e(pn,Kb),e(pn,ud),e(ud,Yb),f(n,Nc,_),f(n,tt,_),y(Ha,tt,null),e(tt,Zb),e(tt,vt),y(Va,vt,null),e(vt,Jb),e(vt,hn),e(hn,Xb),e(hn,md),e(md,Qb),e(hn,ek),e(hn,fd),e(fd,tk),e(hn,nk),e(vt,ok),y(mo,vt,null),e(vt,sk),y(fo,vt,null),e(tt,ak),e(tt,_o),y(Ka,_o,null),e(_o,rk),y(go,_o,null),e(tt,ik),e(tt,To),y(Ya,To,null),e(To,lk),y(bo,To,null),Oc=!0},p(n,[_]){const Za={};_&2&&(Za.$$scope={dirty:_,ctx:n}),Pn.$set(Za);const _d={};_&2&&(_d.$$scope={dirty:_,ctx:n}),Nn.$set(_d);const gd={};_&2&&(gd.$$scope={dirty:_,ctx:n}),On.$set(gd);const Td={};_&2&&(Td.$$scope={dirty:_,ctx:n}),Ln.$set(Td);const Ja={};_&2&&(Ja.$$scope={dirty:_,ctx:n}),In.$set(Ja);const bd={};_&2&&(bd.$$scope={dirty:_,ctx:n}),Dn.$set(bd);const kd={};_&2&&(kd.$$scope={dirty:_,ctx:n}),Sn.$set(kd);const vd={};_&2&&(vd.$$scope={dirty:_,ctx:n}),Gn.$set(vd);const Xa={};_&2&&(Xa.$$scope={dirty:_,ctx:n}),Wn.$set(Xa);const yd={};_&2&&(yd.$$scope={dirty:_,ctx:n}),Rn.$set(yd);const wd={};_&2&&(wd.$$scope={dirty:_,ctx:n}),Bn.$set(wd);const $d={};_&2&&($d.$$scope={dirty:_,ctx:n}),Hn.$set($d);const xd={};_&2&&(xd.$$scope={dirty:_,ctx:n}),Kn.$set(xd);const zd={};_&2&&(zd.$$scope={dirty:_,ctx:n}),Yn.$set(zd);const un={};_&2&&(un.$$scope={dirty:_,ctx:n}),Zn.$set(un);const qd={};_&2&&(qd.$$scope={dirty:_,ctx:n}),Xn.$set(qd);const mn={};_&2&&(mn.$$scope={dirty:_,ctx:n}),Qn.$set(mn);const Ed={};_&2&&(Ed.$$scope={dirty:_,ctx:n}),eo.$set(Ed);const jd={};_&2&&(jd.$$scope={dirty:_,ctx:n}),no.$set(jd);const Fd={};_&2&&(Fd.$$scope={dirty:_,ctx:n}),oo.$set(Fd);const Md={};_&2&&(Md.$$scope={dirty:_,ctx:n}),so.$set(Md);const Cd={};_&2&&(Cd.$$scope={dirty:_,ctx:n}),ro.$set(Cd);const xt={};_&2&&(xt.$$scope={dirty:_,ctx:n}),io.$set(xt);const Pd={};_&2&&(Pd.$$scope={dirty:_,ctx:n}),co.$set(Pd);const Nd={};_&2&&(Nd.$$scope={dirty:_,ctx:n}),ho.$set(Nd);const Od={};_&2&&(Od.$$scope={dirty:_,ctx:n}),mo.$set(Od);const Ld={};_&2&&(Ld.$$scope={dirty:_,ctx:n}),fo.$set(Ld);const nt={};_&2&&(nt.$$scope={dirty:_,ctx:n}),go.$set(nt);const Ad={};_&2&&(Ad.$$scope={dirty:_,ctx:n}),bo.$set(Ad)},i(n){Oc||(w(l.$$.fragment,n),w(se.$$.fragment,n),w(Bo.$$.fragment,n),w(Ho.$$.fragment,n),w(Yo.$$.fragment,n),w(Jo.$$.fragment,n),w(ns.$$.fragment,n),w(as.$$.fragment,n),w(rs.$$.fragment,n),w(is.$$.fragment,n),w(ds.$$.fragment,n),w(gs.$$.fragment,n),w(Ts.$$.fragment,n),w(ks.$$.fragment,n),w(vs.$$.fragment,n),w(xs.$$.fragment,n),w(qs.$$.fragment,n),w(js.$$.fragment,n),w(Fs.$$.fragment,n),w(Ms.$$.fragment,n),w(Cs.$$.fragment,n),w(Os.$$.fragment,n),w(As.$$.fragment,n),w(Is.$$.fragment,n),w(Ds.$$.fragment,n),w(Bs.$$.fragment,n),w(Pn.$$.fragment,n),w(Nn.$$.fragment,n),w(Hs.$$.fragment,n),w(On.$$.fragment,n),w(Vs.$$.fragment,n),w(Ln.$$.fragment,n),w(Ks.$$.fragment,n),w(Ys.$$.fragment,n),w(na.$$.fragment,n),w(In.$$.fragment,n),w(Dn.$$.fragment,n),w(oa.$$.fragment,n),w(Sn.$$.fragment,n),w(sa.$$.fragment,n),w(Gn.$$.fragment,n),w(aa.$$.fragment,n),w(ra.$$.fragment,n),w(ha.$$.fragment,n),w(Wn.$$.fragment,n),w(Rn.$$.fragment,n),w(ua.$$.fragment,n),w(Bn.$$.fragment,n),w(ma.$$.fragment,n),w(Hn.$$.fragment,n),w(fa.$$.fragment,n),w(_a.$$.fragment,n),w(Kn.$$.fragment,n),w(ya.$$.fragment,n),w(Yn.$$.fragment,n),w(Zn.$$.fragment,n),w(wa.$$.fragment,n),w($a.$$.fragment,n),w(Xn.$$.fragment,n),w(Ma.$$.fragment,n),w(Qn.$$.fragment,n),w(eo.$$.fragment,n),w(Ca.$$.fragment,n),w(Pa.$$.fragment,n),w(no.$$.fragment,n),w(Da.$$.fragment,n),w(oo.$$.fragment,n),w(so.$$.fragment,n),w(Sa.$$.fragment,n),w(Ga.$$.fragment,n),w(Ua.$$.fragment,n),w(ro.$$.fragment,n),w(io.$$.fragment,n),w(Wa.$$.fragment,n),w(co.$$.fragment,n),w(Ra.$$.fragment,n),w(ho.$$.fragment,n),w(Ba.$$.fragment,n),w(Ha.$$.fragment,n),w(Va.$$.fragment,n),w(mo.$$.fragment,n),w(fo.$$.fragment,n),w(Ka.$$.fragment,n),w(go.$$.fragment,n),w(Ya.$$.fragment,n),w(bo.$$.fragment,n),Oc=!0)},o(n){$(l.$$.fragment,n),$(se.$$.fragment,n),$(Bo.$$.fragment,n),$(Ho.$$.fragment,n),$(Yo.$$.fragment,n),$(Jo.$$.fragment,n),$(ns.$$.fragment,n),$(as.$$.fragment,n),$(rs.$$.fragment,n),$(is.$$.fragment,n),$(ds.$$.fragment,n),$(gs.$$.fragment,n),$(Ts.$$.fragment,n),$(ks.$$.fragment,n),$(vs.$$.fragment,n),$(xs.$$.fragment,n),$(qs.$$.fragment,n),$(js.$$.fragment,n),$(Fs.$$.fragment,n),$(Ms.$$.fragment,n),$(Cs.$$.fragment,n),$(Os.$$.fragment,n),$(As.$$.fragment,n),$(Is.$$.fragment,n),$(Ds.$$.fragment,n),$(Bs.$$.fragment,n),$(Pn.$$.fragment,n),$(Nn.$$.fragment,n),$(Hs.$$.fragment,n),$(On.$$.fragment,n),$(Vs.$$.fragment,n),$(Ln.$$.fragment,n),$(Ks.$$.fragment,n),$(Ys.$$.fragment,n),$(na.$$.fragment,n),$(In.$$.fragment,n),$(Dn.$$.fragment,n),$(oa.$$.fragment,n),$(Sn.$$.fragment,n),$(sa.$$.fragment,n),$(Gn.$$.fragment,n),$(aa.$$.fragment,n),$(ra.$$.fragment,n),$(ha.$$.fragment,n),$(Wn.$$.fragment,n),$(Rn.$$.fragment,n),$(ua.$$.fragment,n),$(Bn.$$.fragment,n),$(ma.$$.fragment,n),$(Hn.$$.fragment,n),$(fa.$$.fragment,n),$(_a.$$.fragment,n),$(Kn.$$.fragment,n),$(ya.$$.fragment,n),$(Yn.$$.fragment,n),$(Zn.$$.fragment,n),$(wa.$$.fragment,n),$($a.$$.fragment,n),$(Xn.$$.fragment,n),$(Ma.$$.fragment,n),$(Qn.$$.fragment,n),$(eo.$$.fragment,n),$(Ca.$$.fragment,n),$(Pa.$$.fragment,n),$(no.$$.fragment,n),$(Da.$$.fragment,n),$(oo.$$.fragment,n),$(so.$$.fragment,n),$(Sa.$$.fragment,n),$(Ga.$$.fragment,n),$(Ua.$$.fragment,n),$(ro.$$.fragment,n),$(io.$$.fragment,n),$(Wa.$$.fragment,n),$(co.$$.fragment,n),$(Ra.$$.fragment,n),$(ho.$$.fragment,n),$(Ba.$$.fragment,n),$(Ha.$$.fragment,n),$(Va.$$.fragment,n),$(mo.$$.fragment,n),$(fo.$$.fragment,n),$(Ka.$$.fragment,n),$(go.$$.fragment,n),$(Ya.$$.fragment,n),$(bo.$$.fragment,n),Oc=!1},d(n){t(p),n&&t(b),n&&t(g),x(l),n&&t(oe),n&&t(j),x(se),n&&t(ye),n&&t(U),n&&t(N),n&&t(he),n&&t(we),n&&t(ue),n&&t($e),n&&t(P),n&&t(H),n&&t(V),n&&t(Gd),n&&t(Qa),n&&t(Ud),n&&t(Re),n&&t(Wd),n&&t(tr),n&&t(Rd),n&&t(qt),n&&t(Bd),n&&t(Tn),n&&t(Hd),n&&t(Et),n&&t(Vd),n&&t(ar),n&&t(Kd),n&&t(It),x(Bo),n&&t(Yd),n&&t(lt),n&&t(Zd),n&&t(kn),n&&t(Jd),n&&t(vn),x(Ho),x(Yo),x(Jo),n&&t(Xd),n&&t(lr),n&&t(Qd),n&&t(jt),n&&t(ec),n&&t(dr),n&&t(tc),n&&t(Gt),x(ns),n&&t(nc),n&&t(dt),n&&t(oc),x(as,n),n&&t(sc),n&&t(Be),n&&t(ac),n&&t(hr),n&&t(rc),x(rs,n),n&&t(ic),n&&t(ur),n&&t(lc),n&&t(Ut),x(is),n&&t(dc),n&&t(ct),n&&t(cc),n&&t(Wt),x(ds),n&&t(pc),n&&t(mr),n&&t(hc),n&&t(xn),n&&t(uc),n&&t(Bt),x(gs),n&&t(mc),n&&t(wt),x(Ts),n&&t(fc),n&&t(Vt),x(ks),n&&t(_c),n&&t(ie),x(vs),x(xs),x(qs),x(js),x(Fs),n&&t(gc),n&&t(Kt),x(Ms),n&&t(Tc),n&&t(Ge),x(Cs),x(Os),x(As),n&&t(bc),n&&t(Zt),x(Is),n&&t(kc),n&&t(J),x(Ds),x(Bs),x(Pn),x(Nn),x(Hs),x(On),x(Vs),x(Ln),n&&t(vc),n&&t(Xt),x(Ks),n&&t(yc),n&&t(X),x(Ys),x(na),x(In),x(Dn),x(oa),x(Sn),x(sa),x(Gn),n&&t(wc),n&&t(en),x(aa),n&&t($c),n&&t(Q),x(ra),x(ha),x(Wn),x(Rn),x(ua),x(Bn),x(ma),x(Hn),n&&t(xc),n&&t(nn),x(fa),n&&t(zc),n&&t(le),x(_a),x(Kn),x(ya),x(Yn),x(Zn),n&&t(qc),n&&t(sn),x(wa),n&&t(Ec),n&&t(de),x($a),x(Xn),x(Ma),x(Qn),x(eo),n&&t(jc),n&&t(rn),x(Ca),n&&t(Fc),n&&t(ce),x(Pa),x(no),x(Da),x(oo),x(so),n&&t(Mc),n&&t(dn),x(Sa),n&&t(Cc),n&&t(et),x(Ga),x(Ua),x(ro),x(io),x(Wa),x(co),x(Ra),x(ho),n&&t(Pc),n&&t(pn),x(Ba),n&&t(Nc),n&&t(tt),x(Ha),x(Va),x(mo),x(fo),x(Ka),x(go),x(Ya),x(bo)}}}const C1={local:"t5",sections:[{local:"overview",title:"Overview"},{local:"training",title:"Training"},{local:"inference",title:"Inference"},{local:"performance",title:"Performance"},{local:"example-scripts",title:"Example scripts"},{local:"transformers.T5Config",title:"T5Config"},{local:"transformers.T5Tokenizer",title:"T5Tokenizer"},{local:"transformers.T5TokenizerFast",title:"T5TokenizerFast"},{local:"transformers.T5Model",title:"T5Model"},{local:"transformers.T5ForConditionalGeneration",title:"T5ForConditionalGeneration"},{local:"transformers.T5EncoderModel",title:"T5EncoderModel"},{local:"transformers.TFT5Model",title:"TFT5Model"},{local:"transformers.TFT5ForConditionalGeneration",title:"TFT5ForConditionalGeneration"},{local:"transformers.TFT5EncoderModel",title:"TFT5EncoderModel"},{local:"transformers.FlaxT5Model",title:"FlaxT5Model"},{local:"transformers.FlaxT5ForConditionalGeneration",title:"FlaxT5ForConditionalGeneration"}],title:"T5"};function P1(q){return t1(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class S1 extends J5{constructor(p){super();X5(this,p,P1,M1,Q5,{})}}export{S1 as default,C1 as metadata};
