import{S as Tb,i as bb,s as vb,e as n,k as h,w as y,t as a,M as yb,c as s,d as t,m as u,a as i,x as k,h as r,b as f,F as e,g as T,y as w,q as $,o as P,B as M,v as kb,L as ae}from"../../chunks/vendor-6b77c823.js";import{T as Se}from"../../chunks/Tip-39098574.js";import{D as N}from"../../chunks/Docstring-1088f2fb.js";import{C as re}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ze}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as se}from"../../chunks/ExampleCodeBlock-5212b321.js";function wb(G){let d,g,c,p,b;return p=new re({props:{code:`from transformers import GPT2Model, GPT2Config

# Initializing a GPT2 configuration
configuration = GPT2Config()

# Initializing a model from the configuration
model = GPT2Model(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Model, GPT2Config

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GPT2 configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GPT2Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),g=a("Example:"),c=h(),y(p.$$.fragment)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Example:"),m.forEach(t),c=u(l),k(p.$$.fragment,l)},m(l,m){T(l,d,m),e(d,g),T(l,c,m),w(p,l,m),b=!0},p:ae,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){P(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function $b(G){let d,g;return d=new re({props:{code:`from transformers import GPT2Tokenizer
tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){y(d.$$.fragment)},l(c){k(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:ae,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){P(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function Pb(G){let d,g,c,p,b;return{c(){d=n("p"),g=a("When used with "),c=n("code"),p=a("is_split_into_words=True"),b=a(", this tokenizer will add a space before each word (even the first one).")},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"When used with "),c=s(m,"CODE",{});var F=i(c);p=r(F,"is_split_into_words=True"),F.forEach(t),b=r(m,", this tokenizer will add a space before each word (even the first one)."),m.forEach(t)},m(l,m){T(l,d,m),e(d,g),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function Mb(G){let d,g;return d=new re({props:{code:`from transformers import GPT2TokenizerFast
tokenizer = GPT2TokenizerFast.from_pretrained("gpt2")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2TokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = GPT2TokenizerFast.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){y(d.$$.fragment)},l(c){k(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:ae,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){P(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function Gb(G){let d,g,c,p,b,l,m,F;return{c(){d=n("p"),g=a("When used with "),c=n("code"),p=a("is_split_into_words=True"),b=a(", this tokenizer needs to be instantiated with "),l=n("code"),m=a("add_prefix_space=True"),F=a(".")},l(Q){d=s(Q,"P",{});var C=i(d);g=r(C,"When used with "),c=s(C,"CODE",{});var j=i(c);p=r(j,"is_split_into_words=True"),j.forEach(t),b=r(C,", this tokenizer needs to be instantiated with "),l=s(C,"CODE",{});var B=i(l);m=r(B,"add_prefix_space=True"),B.forEach(t),F=r(C,"."),C.forEach(t)},m(Q,C){T(Q,d,C),e(d,g),e(d,c),e(c,p),e(d,b),e(d,l),e(l,m),e(d,F)},d(Q){Q&&t(d)}}}function xb(G){let d,g,c,p,b;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var F=i(c);p=r(F,"Module"),F.forEach(t),b=r(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){T(l,d,m),e(d,g),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function Fb(G){let d,g,c,p,b;return p=new re({props:{code:`from transformers import GPT2Tokenizer, GPT2Model
import torch

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = GPT2Model.from_pretrained("gpt2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPT2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2Model.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),c=h(),y(p.$$.fragment)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Example:"),m.forEach(t),c=u(l),k(p.$$.fragment,l)},m(l,m){T(l,d,m),e(d,g),T(l,c,m),w(p,l,m),b=!0},p:ae,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){P(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function jb(G){let d,g,c,p,b;return p=new re({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using gpt2-xl, which has a total of 48 attention modules:
model = GPT2LMHeadModel.from_pretrained("gpt2-xl")
device_map = {
    0: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    1: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
    2: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
    3: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
}
model.parallelize(device_map)`,highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using gpt2-xl, which has a total of 48 attention modules:</span>
model = GPT2LMHeadModel.from_pretrained(<span class="hljs-string">&quot;gpt2-xl&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>, <span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">22</span>, <span class="hljs-number">23</span>, <span class="hljs-number">24</span>, <span class="hljs-number">25</span>, <span class="hljs-number">26</span>, <span class="hljs-number">27</span>, <span class="hljs-number">28</span>, <span class="hljs-number">29</span>, <span class="hljs-number">30</span>, <span class="hljs-number">31</span>, <span class="hljs-number">32</span>, <span class="hljs-number">33</span>, <span class="hljs-number">34</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">35</span>, <span class="hljs-number">36</span>, <span class="hljs-number">37</span>, <span class="hljs-number">38</span>, <span class="hljs-number">39</span>, <span class="hljs-number">40</span>, <span class="hljs-number">41</span>, <span class="hljs-number">42</span>, <span class="hljs-number">43</span>, <span class="hljs-number">44</span>, <span class="hljs-number">45</span>, <span class="hljs-number">46</span>, <span class="hljs-number">47</span>],
}
model.parallelize(device_map)`}}),{c(){d=n("p"),g=a("Example:"),c=h(),y(p.$$.fragment)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Example:"),m.forEach(t),c=u(l),k(p.$$.fragment,l)},m(l,m){T(l,d,m),e(d,g),T(l,c,m),w(p,l,m),b=!0},p:ae,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){P(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function zb(G){let d,g,c,p,b;return p=new re({props:{code:`# On a 4 GPU machine with gpt2-large:
model = GPT2LMHeadModel.from_pretrained("gpt2-large")
device_map = {
    0: [0, 1, 2, 3, 4, 5, 6, 7],
    1: [8, 9, 10, 11, 12, 13, 14, 15],
    2: [16, 17, 18, 19, 20, 21, 22, 23],
    3: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
}
model.parallelize(device_map)  # Splits the model across several devices
model.deparallelize()  # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()`,highlighted:`<span class="hljs-comment"># On a 4 GPU machine with gpt2-large:</span>
model = GPT2LMHeadModel.from_pretrained(<span class="hljs-string">&quot;gpt2-large&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">8</span>, <span class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">16</span>, <span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">24</span>, <span class="hljs-number">25</span>, <span class="hljs-number">26</span>, <span class="hljs-number">27</span>, <span class="hljs-number">28</span>, <span class="hljs-number">29</span>, <span class="hljs-number">30</span>, <span class="hljs-number">31</span>, <span class="hljs-number">32</span>, <span class="hljs-number">33</span>, <span class="hljs-number">34</span>, <span class="hljs-number">35</span>],
}
model.parallelize(device_map)  <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){d=n("p"),g=a("Example:"),c=h(),y(p.$$.fragment)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Example:"),m.forEach(t),c=u(l),k(p.$$.fragment,l)},m(l,m){T(l,d,m),e(d,g),T(l,c,m),w(p,l,m),b=!0},p:ae,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){P(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Eb(G){let d,g,c,p,b;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var F=i(c);p=r(F,"Module"),F.forEach(t),b=r(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){T(l,d,m),e(d,g),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function qb(G){let d,g,c,p,b;return p=new re({props:{code:`import torch
from transformers import GPT2Tokenizer, GPT2LMHeadModel

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = GPT2LMHeadModel.from_pretrained("gpt2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPT2LMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2LMHeadModel.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=h(),y(p.$$.fragment)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Example:"),m.forEach(t),c=u(l),k(p.$$.fragment,l)},m(l,m){T(l,d,m),e(d,g),T(l,c,m),w(p,l,m),b=!0},p:ae,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){P(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Cb(G){let d,g,c,p,b;return p=new re({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using gpt2-xl, which has a total of 48 attention modules:
model = GPT2LMHeadModel.from_pretrained("gpt2-xl")
device_map = {
    0: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    1: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
    2: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
    3: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
}
model.parallelize(device_map)`,highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using gpt2-xl, which has a total of 48 attention modules:</span>
model = GPT2LMHeadModel.from_pretrained(<span class="hljs-string">&quot;gpt2-xl&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>, <span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">22</span>, <span class="hljs-number">23</span>, <span class="hljs-number">24</span>, <span class="hljs-number">25</span>, <span class="hljs-number">26</span>, <span class="hljs-number">27</span>, <span class="hljs-number">28</span>, <span class="hljs-number">29</span>, <span class="hljs-number">30</span>, <span class="hljs-number">31</span>, <span class="hljs-number">32</span>, <span class="hljs-number">33</span>, <span class="hljs-number">34</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">35</span>, <span class="hljs-number">36</span>, <span class="hljs-number">37</span>, <span class="hljs-number">38</span>, <span class="hljs-number">39</span>, <span class="hljs-number">40</span>, <span class="hljs-number">41</span>, <span class="hljs-number">42</span>, <span class="hljs-number">43</span>, <span class="hljs-number">44</span>, <span class="hljs-number">45</span>, <span class="hljs-number">46</span>, <span class="hljs-number">47</span>],
}
model.parallelize(device_map)`}}),{c(){d=n("p"),g=a("Example:"),c=h(),y(p.$$.fragment)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Example:"),m.forEach(t),c=u(l),k(p.$$.fragment,l)},m(l,m){T(l,d,m),e(d,g),T(l,c,m),w(p,l,m),b=!0},p:ae,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){P(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Db(G){let d,g,c,p,b;return p=new re({props:{code:`# On a 4 GPU machine with gpt2-large:
model = GPT2LMHeadModel.from_pretrained("gpt2-large")
device_map = {
    0: [0, 1, 2, 3, 4, 5, 6, 7],
    1: [8, 9, 10, 11, 12, 13, 14, 15],
    2: [16, 17, 18, 19, 20, 21, 22, 23],
    3: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
}
model.parallelize(device_map)  # Splits the model across several devices
model.deparallelize()  # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()`,highlighted:`<span class="hljs-comment"># On a 4 GPU machine with gpt2-large:</span>
model = GPT2LMHeadModel.from_pretrained(<span class="hljs-string">&quot;gpt2-large&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">8</span>, <span class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">16</span>, <span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">24</span>, <span class="hljs-number">25</span>, <span class="hljs-number">26</span>, <span class="hljs-number">27</span>, <span class="hljs-number">28</span>, <span class="hljs-number">29</span>, <span class="hljs-number">30</span>, <span class="hljs-number">31</span>, <span class="hljs-number">32</span>, <span class="hljs-number">33</span>, <span class="hljs-number">34</span>, <span class="hljs-number">35</span>],
}
model.parallelize(device_map)  <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){d=n("p"),g=a("Example:"),c=h(),y(p.$$.fragment)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Example:"),m.forEach(t),c=u(l),k(p.$$.fragment,l)},m(l,m){T(l,d,m),e(d,g),T(l,c,m),w(p,l,m),b=!0},p:ae,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){P(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Nb(G){let d,g,c,p,b;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var F=i(c);p=r(F,"Module"),F.forEach(t),b=r(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){T(l,d,m),e(d,g),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function Hb(G){let d,g,c,p,b;return p=new re({props:{code:`import torch
from transformers import GPT2Tokenizer, GPT2DoubleHeadsModel

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = GPT2DoubleHeadsModel.from_pretrained("gpt2")

# Add a [CLS] to the vocabulary (we should train it also!)
num_added_tokens = tokenizer.add_special_tokens({"cls_token": "[CLS]"})

embedding_layer = model.resize_token_embeddings(
    len(tokenizer)
)  # Update the model embeddings with the new vocabulary size

choices = ["Hello, my dog is cute [CLS]", "Hello, my cat is cute [CLS]"]
encoded_choices = [tokenizer.encode(s) for s in choices]
cls_token_location = [tokens.index(tokenizer.cls_token_id) for tokens in encoded_choices]

input_ids = torch.tensor(encoded_choices).unsqueeze(0)  # Batch size: 1, number of choices: 2
mc_token_ids = torch.tensor([cls_token_location])  # Batch size: 1

outputs = model(input_ids, mc_token_ids=mc_token_ids)
lm_logits = outputs.logits
mc_logits = outputs.mc_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPT2DoubleHeadsModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2DoubleHeadsModel.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Add a [CLS] to the vocabulary (we should train it also!)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_added_tokens = tokenizer.add_special_tokens({<span class="hljs-string">&quot;cls_token&quot;</span>: <span class="hljs-string">&quot;[CLS]&quot;</span>})

<span class="hljs-meta">&gt;&gt;&gt; </span>embedding_layer = model.resize_token_embeddings(
<span class="hljs-meta">... </span>    <span class="hljs-built_in">len</span>(tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Update the model embeddings with the new vocabulary size</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>choices = [<span class="hljs-string">&quot;Hello, my dog is cute [CLS]&quot;</span>, <span class="hljs-string">&quot;Hello, my cat is cute [CLS]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_choices = [tokenizer.encode(s) <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> choices]
<span class="hljs-meta">&gt;&gt;&gt; </span>cls_token_location = [tokens.index(tokenizer.cls_token_id) <span class="hljs-keyword">for</span> tokens <span class="hljs-keyword">in</span> encoded_choices]

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(encoded_choices).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size: 1, number of choices: 2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_token_ids = torch.tensor([cls_token_location])  <span class="hljs-comment"># Batch size: 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, mc_token_ids=mc_token_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_logits = outputs.mc_logits`}}),{c(){d=n("p"),g=a("Example:"),c=h(),y(p.$$.fragment)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Example:"),m.forEach(t),c=u(l),k(p.$$.fragment,l)},m(l,m){T(l,d,m),e(d,g),T(l,c,m),w(p,l,m),b=!0},p:ae,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){P(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Lb(G){let d,g,c,p,b;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var F=i(c);p=r(F,"Module"),F.forEach(t),b=r(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){T(l,d,m),e(d,g),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function Sb(G){let d,g,c,p,b;return p=new re({props:{code:`import torch
from transformers import GPT2Tokenizer, GPT2ForSequenceClassification

tokenizer = GPT2Tokenizer.from_pretrained("microsoft/DialogRPT-updown")
model = GPT2ForSequenceClassification.from_pretrained("microsoft/DialogRPT-updown")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPT2ForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=n("p"),g=a("Example of single-label classification:"),c=h(),y(p.$$.fragment)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Example of single-label classification:"),m.forEach(t),c=u(l),k(p.$$.fragment,l)},m(l,m){T(l,d,m),e(d,g),T(l,c,m),w(p,l,m),b=!0},p:ae,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){P(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Ib(G){let d,g;return d=new re({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = GPT2ForSequenceClassification.from_pretrained("microsoft/DialogRPT-updown", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){k(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:ae,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){P(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function Ab(G){let d,g,c,p,b;return p=new re({props:{code:`import torch
from transformers import GPT2Tokenizer, GPT2ForSequenceClassification

tokenizer = GPT2Tokenizer.from_pretrained("microsoft/DialogRPT-updown")
model = GPT2ForSequenceClassification.from_pretrained("microsoft/DialogRPT-updown", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPT2ForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=n("p"),g=a("Example of multi-label classification:"),c=h(),y(p.$$.fragment)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Example of multi-label classification:"),m.forEach(t),c=u(l),k(p.$$.fragment,l)},m(l,m){T(l,d,m),e(d,g),T(l,c,m),w(p,l,m),b=!0},p:ae,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){P(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Ob(G){let d,g;return d=new re({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = GPT2ForSequenceClassification.from_pretrained("microsoft/DialogRPT-updown", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(c){k(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:ae,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){P(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function Wb(G){let d,g,c,p,b;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var F=i(c);p=r(F,"Module"),F.forEach(t),b=r(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){T(l,d,m),e(d,g),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function Ub(G){let d,g,c,p,b;return p=new re({props:{code:`from transformers import GPT2Tokenizer, GPT2ForTokenClassification
import torch

tokenizer = GPT2Tokenizer.from_pretrained("microsoft/DialogRPT-updown")
model = GPT2ForTokenClassification.from_pretrained("microsoft/DialogRPT-updown")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPT2ForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2ForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>)

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
`}}),{c(){d=n("p"),g=a("Example:"),c=h(),y(p.$$.fragment)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Example:"),m.forEach(t),c=u(l),k(p.$$.fragment,l)},m(l,m){T(l,d,m),e(d,g),T(l,c,m),w(p,l,m),b=!0},p:ae,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){P(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Rb(G){let d,g;return d=new re({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){k(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:ae,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){P(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function Bb(G){let d,g,c,p,b,l,m,F,Q,C,j,B,I,Z,_e,A,Te,me,W,H,ee,te,z,q,ie,V,fe,le,O,be,ge,E,ve,U,R,de,K,ye,oe,L,ce,J,ke;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=h(),p=n("ul"),b=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),F=n("li"),Q=a("having all inputs as a list, tuple or dict in the first positional arguments."),C=h(),j=n("p"),B=a("This second option is useful when using "),I=n("code"),Z=a("tf.keras.Model.fit"),_e=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=n("code"),Te=a("model(inputs)"),me=a("."),W=h(),H=n("p"),ee=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=h(),z=n("ul"),q=n("li"),ie=a("a single Tensor with "),V=n("code"),fe=a("input_ids"),le=a(" only and nothing else: "),O=n("code"),be=a("model(inputs_ids)"),ge=h(),E=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),R=a("model([input_ids, attention_mask])"),de=a(" or "),K=n("code"),ye=a("model([input_ids, attention_mask, token_type_ids])"),oe=h(),L=n("li"),ce=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=n("code"),ke=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var x=i(d);g=r(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),c=u(v),p=s(v,"UL",{});var ne=i(p);b=s(ne,"LI",{});var Ee=i(b);l=r(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),m=u(ne),F=s(ne,"LI",{});var Oe=i(F);Q=r(Oe,"having all inputs as a list, tuple or dict in the first positional arguments."),Oe.forEach(t),ne.forEach(t),C=u(v),j=s(v,"P",{});var S=i(j);B=r(S,"This second option is useful when using "),I=s(S,"CODE",{});var qe=i(I);Z=r(qe,"tf.keras.Model.fit"),qe.forEach(t),_e=r(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=s(S,"CODE",{});var We=i(A);Te=r(We,"model(inputs)"),We.forEach(t),me=r(S,"."),S.forEach(t),W=u(v),H=s(v,"P",{});var Ue=i(H);ee=r(Ue,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ue.forEach(t),te=u(v),z=s(v,"UL",{});var D=i(z);q=s(D,"LI",{});var X=i(q);ie=r(X,"a single Tensor with "),V=s(X,"CODE",{});var Re=i(V);fe=r(Re,"input_ids"),Re.forEach(t),le=r(X," only and nothing else: "),O=s(X,"CODE",{});var Ce=i(O);be=r(Ce,"model(inputs_ids)"),Ce.forEach(t),X.forEach(t),ge=u(D),E=s(D,"LI",{});var Y=i(E);ve=r(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(Y,"CODE",{});var Be=i(U);R=r(Be,"model([input_ids, attention_mask])"),Be.forEach(t),de=r(Y," or "),K=s(Y,"CODE",{});var De=i(K);ye=r(De,"model([input_ids, attention_mask, token_type_ids])"),De.forEach(t),Y.forEach(t),oe=u(D),L=s(D,"LI",{});var we=i(L);ce=r(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s(we,"CODE",{});var Ve=i(J);ke=r(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),we.forEach(t),D.forEach(t)},m(v,x){T(v,d,x),e(d,g),T(v,c,x),T(v,p,x),e(p,b),e(b,l),e(p,m),e(p,F),e(F,Q),T(v,C,x),T(v,j,x),e(j,B),e(j,I),e(I,Z),e(j,_e),e(j,A),e(A,Te),e(j,me),T(v,W,x),T(v,H,x),e(H,ee),T(v,te,x),T(v,z,x),e(z,q),e(q,ie),e(q,V),e(V,fe),e(q,le),e(q,O),e(O,be),e(z,ge),e(z,E),e(E,ve),e(E,U),e(U,R),e(E,de),e(E,K),e(K,ye),e(z,oe),e(z,L),e(L,ce),e(L,J),e(J,ke)},d(v){v&&t(d),v&&t(c),v&&t(p),v&&t(C),v&&t(j),v&&t(W),v&&t(H),v&&t(te),v&&t(z)}}}function Vb(G){let d,g,c,p,b;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var F=i(c);p=r(F,"Module"),F.forEach(t),b=r(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){T(l,d,m),e(d,g),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function Kb(G){let d,g,c,p,b;return p=new re({props:{code:`from transformers import GPT2Tokenizer, TFGPT2Model
import tensorflow as tf

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = TFGPT2Model.from_pretrained("gpt2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, TFGPT2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPT2Model.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),c=h(),y(p.$$.fragment)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Example:"),m.forEach(t),c=u(l),k(p.$$.fragment,l)},m(l,m){T(l,d,m),e(d,g),T(l,c,m),w(p,l,m),b=!0},p:ae,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){P(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Jb(G){let d,g,c,p,b,l,m,F,Q,C,j,B,I,Z,_e,A,Te,me,W,H,ee,te,z,q,ie,V,fe,le,O,be,ge,E,ve,U,R,de,K,ye,oe,L,ce,J,ke;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=h(),p=n("ul"),b=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),F=n("li"),Q=a("having all inputs as a list, tuple or dict in the first positional arguments."),C=h(),j=n("p"),B=a("This second option is useful when using "),I=n("code"),Z=a("tf.keras.Model.fit"),_e=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=n("code"),Te=a("model(inputs)"),me=a("."),W=h(),H=n("p"),ee=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=h(),z=n("ul"),q=n("li"),ie=a("a single Tensor with "),V=n("code"),fe=a("input_ids"),le=a(" only and nothing else: "),O=n("code"),be=a("model(inputs_ids)"),ge=h(),E=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),R=a("model([input_ids, attention_mask])"),de=a(" or "),K=n("code"),ye=a("model([input_ids, attention_mask, token_type_ids])"),oe=h(),L=n("li"),ce=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=n("code"),ke=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var x=i(d);g=r(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),c=u(v),p=s(v,"UL",{});var ne=i(p);b=s(ne,"LI",{});var Ee=i(b);l=r(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),m=u(ne),F=s(ne,"LI",{});var Oe=i(F);Q=r(Oe,"having all inputs as a list, tuple or dict in the first positional arguments."),Oe.forEach(t),ne.forEach(t),C=u(v),j=s(v,"P",{});var S=i(j);B=r(S,"This second option is useful when using "),I=s(S,"CODE",{});var qe=i(I);Z=r(qe,"tf.keras.Model.fit"),qe.forEach(t),_e=r(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=s(S,"CODE",{});var We=i(A);Te=r(We,"model(inputs)"),We.forEach(t),me=r(S,"."),S.forEach(t),W=u(v),H=s(v,"P",{});var Ue=i(H);ee=r(Ue,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ue.forEach(t),te=u(v),z=s(v,"UL",{});var D=i(z);q=s(D,"LI",{});var X=i(q);ie=r(X,"a single Tensor with "),V=s(X,"CODE",{});var Re=i(V);fe=r(Re,"input_ids"),Re.forEach(t),le=r(X," only and nothing else: "),O=s(X,"CODE",{});var Ce=i(O);be=r(Ce,"model(inputs_ids)"),Ce.forEach(t),X.forEach(t),ge=u(D),E=s(D,"LI",{});var Y=i(E);ve=r(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(Y,"CODE",{});var Be=i(U);R=r(Be,"model([input_ids, attention_mask])"),Be.forEach(t),de=r(Y," or "),K=s(Y,"CODE",{});var De=i(K);ye=r(De,"model([input_ids, attention_mask, token_type_ids])"),De.forEach(t),Y.forEach(t),oe=u(D),L=s(D,"LI",{});var we=i(L);ce=r(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s(we,"CODE",{});var Ve=i(J);ke=r(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),we.forEach(t),D.forEach(t)},m(v,x){T(v,d,x),e(d,g),T(v,c,x),T(v,p,x),e(p,b),e(b,l),e(p,m),e(p,F),e(F,Q),T(v,C,x),T(v,j,x),e(j,B),e(j,I),e(I,Z),e(j,_e),e(j,A),e(A,Te),e(j,me),T(v,W,x),T(v,H,x),e(H,ee),T(v,te,x),T(v,z,x),e(z,q),e(q,ie),e(q,V),e(V,fe),e(q,le),e(q,O),e(O,be),e(z,ge),e(z,E),e(E,ve),e(E,U),e(U,R),e(E,de),e(E,K),e(K,ye),e(z,oe),e(z,L),e(L,ce),e(L,J),e(J,ke)},d(v){v&&t(d),v&&t(c),v&&t(p),v&&t(C),v&&t(j),v&&t(W),v&&t(H),v&&t(te),v&&t(z)}}}function Xb(G){let d,g,c,p,b;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var F=i(c);p=r(F,"Module"),F.forEach(t),b=r(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){T(l,d,m),e(d,g),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function Yb(G){let d,g,c,p,b;return p=new re({props:{code:`from transformers import GPT2Tokenizer, TFGPT2LMHeadModel
import tensorflow as tf

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = TFGPT2LMHeadModel.from_pretrained("gpt2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, TFGPT2LMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPT2LMHeadModel.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=a("Example:"),c=h(),y(p.$$.fragment)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Example:"),m.forEach(t),c=u(l),k(p.$$.fragment,l)},m(l,m){T(l,d,m),e(d,g),T(l,c,m),w(p,l,m),b=!0},p:ae,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){P(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function Qb(G){let d,g,c,p,b,l,m,F,Q,C,j,B,I,Z,_e,A,Te,me,W,H,ee,te,z,q,ie,V,fe,le,O,be,ge,E,ve,U,R,de,K,ye,oe,L,ce,J,ke;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=h(),p=n("ul"),b=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),F=n("li"),Q=a("having all inputs as a list, tuple or dict in the first positional arguments."),C=h(),j=n("p"),B=a("This second option is useful when using "),I=n("code"),Z=a("tf.keras.Model.fit"),_e=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=n("code"),Te=a("model(inputs)"),me=a("."),W=h(),H=n("p"),ee=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=h(),z=n("ul"),q=n("li"),ie=a("a single Tensor with "),V=n("code"),fe=a("input_ids"),le=a(" only and nothing else: "),O=n("code"),be=a("model(inputs_ids)"),ge=h(),E=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),R=a("model([input_ids, attention_mask])"),de=a(" or "),K=n("code"),ye=a("model([input_ids, attention_mask, token_type_ids])"),oe=h(),L=n("li"),ce=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=n("code"),ke=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var x=i(d);g=r(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),c=u(v),p=s(v,"UL",{});var ne=i(p);b=s(ne,"LI",{});var Ee=i(b);l=r(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),m=u(ne),F=s(ne,"LI",{});var Oe=i(F);Q=r(Oe,"having all inputs as a list, tuple or dict in the first positional arguments."),Oe.forEach(t),ne.forEach(t),C=u(v),j=s(v,"P",{});var S=i(j);B=r(S,"This second option is useful when using "),I=s(S,"CODE",{});var qe=i(I);Z=r(qe,"tf.keras.Model.fit"),qe.forEach(t),_e=r(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=s(S,"CODE",{});var We=i(A);Te=r(We,"model(inputs)"),We.forEach(t),me=r(S,"."),S.forEach(t),W=u(v),H=s(v,"P",{});var Ue=i(H);ee=r(Ue,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ue.forEach(t),te=u(v),z=s(v,"UL",{});var D=i(z);q=s(D,"LI",{});var X=i(q);ie=r(X,"a single Tensor with "),V=s(X,"CODE",{});var Re=i(V);fe=r(Re,"input_ids"),Re.forEach(t),le=r(X," only and nothing else: "),O=s(X,"CODE",{});var Ce=i(O);be=r(Ce,"model(inputs_ids)"),Ce.forEach(t),X.forEach(t),ge=u(D),E=s(D,"LI",{});var Y=i(E);ve=r(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(Y,"CODE",{});var Be=i(U);R=r(Be,"model([input_ids, attention_mask])"),Be.forEach(t),de=r(Y," or "),K=s(Y,"CODE",{});var De=i(K);ye=r(De,"model([input_ids, attention_mask, token_type_ids])"),De.forEach(t),Y.forEach(t),oe=u(D),L=s(D,"LI",{});var we=i(L);ce=r(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s(we,"CODE",{});var Ve=i(J);ke=r(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),we.forEach(t),D.forEach(t)},m(v,x){T(v,d,x),e(d,g),T(v,c,x),T(v,p,x),e(p,b),e(b,l),e(p,m),e(p,F),e(F,Q),T(v,C,x),T(v,j,x),e(j,B),e(j,I),e(I,Z),e(j,_e),e(j,A),e(A,Te),e(j,me),T(v,W,x),T(v,H,x),e(H,ee),T(v,te,x),T(v,z,x),e(z,q),e(q,ie),e(q,V),e(V,fe),e(q,le),e(q,O),e(O,be),e(z,ge),e(z,E),e(E,ve),e(E,U),e(U,R),e(E,de),e(E,K),e(K,ye),e(z,oe),e(z,L),e(L,ce),e(L,J),e(J,ke)},d(v){v&&t(d),v&&t(c),v&&t(p),v&&t(C),v&&t(j),v&&t(W),v&&t(H),v&&t(te),v&&t(z)}}}function Zb(G){let d,g,c,p,b;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var F=i(c);p=r(F,"Module"),F.forEach(t),b=r(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){T(l,d,m),e(d,g),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function ev(G){let d,g,c,p,b;return p=new re({props:{code:`import tensorflow as tf
from transformers import GPT2Tokenizer, TFGPT2DoubleHeadsModel

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = TFGPT2DoubleHeadsModel.from_pretrained("gpt2")

# Add a [CLS] to the vocabulary (we should train it also!)
num_added_tokens = tokenizer.add_special_tokens({"cls_token": "[CLS]"})

embedding_layer = model.resize_token_embeddings(
    len(tokenizer)
)  # Update the model embeddings with the new vocabulary size

choices = ["Hello, my dog is cute [CLS]", "Hello, my cat is cute [CLS]"]
encoded_choices = [tokenizer.encode(s) for s in choices]
cls_token_location = [tokens.index(tokenizer.cls_token_id) for tokens in encoded_choices]

input_ids = tf.constant(encoded_choices)[None, :]  # Batch size: 1, number of choices: 2
mc_token_ids = tf.constant([cls_token_location])  # Batch size: 1

outputs = model(input_ids, mc_token_ids=mc_token_ids)
lm_prediction_scores, mc_prediction_scores = outputs[:2]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, TFGPT2DoubleHeadsModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPT2DoubleHeadsModel.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Add a [CLS] to the vocabulary (we should train it also!)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_added_tokens = tokenizer.add_special_tokens({<span class="hljs-string">&quot;cls_token&quot;</span>: <span class="hljs-string">&quot;[CLS]&quot;</span>})

<span class="hljs-meta">&gt;&gt;&gt; </span>embedding_layer = model.resize_token_embeddings(
<span class="hljs-meta">... </span>    <span class="hljs-built_in">len</span>(tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Update the model embeddings with the new vocabulary size</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>choices = [<span class="hljs-string">&quot;Hello, my dog is cute [CLS]&quot;</span>, <span class="hljs-string">&quot;Hello, my cat is cute [CLS]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_choices = [tokenizer.encode(s) <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> choices]
<span class="hljs-meta">&gt;&gt;&gt; </span>cls_token_location = [tokens.index(tokenizer.cls_token_id) <span class="hljs-keyword">for</span> tokens <span class="hljs-keyword">in</span> encoded_choices]

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tf.constant(encoded_choices)[<span class="hljs-literal">None</span>, :]  <span class="hljs-comment"># Batch size: 1, number of choices: 2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_token_ids = tf.constant([cls_token_location])  <span class="hljs-comment"># Batch size: 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, mc_token_ids=mc_token_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_prediction_scores, mc_prediction_scores = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=n("p"),g=a("Examples:"),c=h(),y(p.$$.fragment)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Examples:"),m.forEach(t),c=u(l),k(p.$$.fragment,l)},m(l,m){T(l,d,m),e(d,g),T(l,c,m),w(p,l,m),b=!0},p:ae,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){P(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function tv(G){let d,g,c,p,b,l,m,F,Q,C,j,B,I,Z,_e,A,Te,me,W,H,ee,te,z,q,ie,V,fe,le,O,be,ge,E,ve,U,R,de,K,ye,oe,L,ce,J,ke;return{c(){d=n("p"),g=a("TF 2.0 models accepts two formats as inputs:"),c=h(),p=n("ul"),b=n("li"),l=a("having all inputs as keyword arguments (like PyTorch models), or"),m=h(),F=n("li"),Q=a("having all inputs as a list, tuple or dict in the first positional arguments."),C=h(),j=n("p"),B=a("This second option is useful when using "),I=n("code"),Z=a("tf.keras.Model.fit"),_e=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=n("code"),Te=a("model(inputs)"),me=a("."),W=h(),H=n("p"),ee=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=h(),z=n("ul"),q=n("li"),ie=a("a single Tensor with "),V=n("code"),fe=a("input_ids"),le=a(" only and nothing else: "),O=n("code"),be=a("model(inputs_ids)"),ge=h(),E=n("li"),ve=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=n("code"),R=a("model([input_ids, attention_mask])"),de=a(" or "),K=n("code"),ye=a("model([input_ids, attention_mask, token_type_ids])"),oe=h(),L=n("li"),ce=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=n("code"),ke=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var x=i(d);g=r(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),c=u(v),p=s(v,"UL",{});var ne=i(p);b=s(ne,"LI",{});var Ee=i(b);l=r(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),m=u(ne),F=s(ne,"LI",{});var Oe=i(F);Q=r(Oe,"having all inputs as a list, tuple or dict in the first positional arguments."),Oe.forEach(t),ne.forEach(t),C=u(v),j=s(v,"P",{});var S=i(j);B=r(S,"This second option is useful when using "),I=s(S,"CODE",{});var qe=i(I);Z=r(qe,"tf.keras.Model.fit"),qe.forEach(t),_e=r(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=s(S,"CODE",{});var We=i(A);Te=r(We,"model(inputs)"),We.forEach(t),me=r(S,"."),S.forEach(t),W=u(v),H=s(v,"P",{});var Ue=i(H);ee=r(Ue,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ue.forEach(t),te=u(v),z=s(v,"UL",{});var D=i(z);q=s(D,"LI",{});var X=i(q);ie=r(X,"a single Tensor with "),V=s(X,"CODE",{});var Re=i(V);fe=r(Re,"input_ids"),Re.forEach(t),le=r(X," only and nothing else: "),O=s(X,"CODE",{});var Ce=i(O);be=r(Ce,"model(inputs_ids)"),Ce.forEach(t),X.forEach(t),ge=u(D),E=s(D,"LI",{});var Y=i(E);ve=r(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=s(Y,"CODE",{});var Be=i(U);R=r(Be,"model([input_ids, attention_mask])"),Be.forEach(t),de=r(Y," or "),K=s(Y,"CODE",{});var De=i(K);ye=r(De,"model([input_ids, attention_mask, token_type_ids])"),De.forEach(t),Y.forEach(t),oe=u(D),L=s(D,"LI",{});var we=i(L);ce=r(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s(we,"CODE",{});var Ve=i(J);ke=r(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),we.forEach(t),D.forEach(t)},m(v,x){T(v,d,x),e(d,g),T(v,c,x),T(v,p,x),e(p,b),e(b,l),e(p,m),e(p,F),e(F,Q),T(v,C,x),T(v,j,x),e(j,B),e(j,I),e(I,Z),e(j,_e),e(j,A),e(A,Te),e(j,me),T(v,W,x),T(v,H,x),e(H,ee),T(v,te,x),T(v,z,x),e(z,q),e(q,ie),e(q,V),e(V,fe),e(q,le),e(q,O),e(O,be),e(z,ge),e(z,E),e(E,ve),e(E,U),e(U,R),e(E,de),e(E,K),e(K,ye),e(z,oe),e(z,L),e(L,ce),e(L,J),e(J,ke)},d(v){v&&t(d),v&&t(c),v&&t(p),v&&t(C),v&&t(j),v&&t(W),v&&t(H),v&&t(te),v&&t(z)}}}function ov(G){let d,g,c,p,b;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var F=i(c);p=r(F,"Module"),F.forEach(t),b=r(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){T(l,d,m),e(d,g),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function nv(G){let d,g,c,p,b;return p=new re({props:{code:`from transformers import GPT2Tokenizer, TFGPT2ForSequenceClassification
import tensorflow as tf

tokenizer = GPT2Tokenizer.from_pretrained("microsoft/DialogRPT-updown")
model = TFGPT2ForSequenceClassification.from_pretrained("microsoft/DialogRPT-updown")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, TFGPT2ForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPT2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=n("p"),g=a("Example:"),c=h(),y(p.$$.fragment)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Example:"),m.forEach(t),c=u(l),k(p.$$.fragment,l)},m(l,m){T(l,d,m),e(d,g),T(l,c,m),w(p,l,m),b=!0},p:ae,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){P(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function sv(G){let d,g;return d=new re({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFGPT2ForSequenceClassification.from_pretrained("microsoft/DialogRPT-updown", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPT2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){k(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:ae,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){P(d.$$.fragment,c),g=!1},d(c){M(d,c)}}}function av(G){let d,g,c,p,b;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var F=i(c);p=r(F,"Module"),F.forEach(t),b=r(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){T(l,d,m),e(d,g),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function rv(G){let d,g,c,p,b;return p=new re({props:{code:`from transformers import GPT2Tokenizer, FlaxGPT2Model

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = FlaxGPT2Model.from_pretrained("gpt2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, FlaxGPT2Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPT2Model.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=a("Example:"),c=h(),y(p.$$.fragment)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Example:"),m.forEach(t),c=u(l),k(p.$$.fragment,l)},m(l,m){T(l,d,m),e(d,g),T(l,c,m),w(p,l,m),b=!0},p:ae,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){P(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function iv(G){let d,g,c,p,b;return{c(){d=n("p"),g=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var F=i(c);p=r(F,"Module"),F.forEach(t),b=r(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){T(l,d,m),e(d,g),e(d,c),e(c,p),e(d,b)},d(l){l&&t(d)}}}function lv(G){let d,g,c,p,b;return p=new re({props:{code:`from transformers import GPT2Tokenizer, FlaxGPT2LMHeadModel

tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = FlaxGPT2LMHeadModel.from_pretrained("gpt2")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

# retrieve logts for next token
next_token_logits = outputs.logits[:, -1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, FlaxGPT2LMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPT2LMHeadModel.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=n("p"),g=a("Example:"),c=h(),y(p.$$.fragment)},l(l){d=s(l,"P",{});var m=i(d);g=r(m,"Example:"),m.forEach(t),c=u(l),k(p.$$.fragment,l)},m(l,m){T(l,d,m),e(d,g),T(l,c,m),w(p,l,m),b=!0},p:ae,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){P(p.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),M(p,l)}}}function dv(G){let d,g,c,p,b,l,m,F,Q,C,j,B,I,Z,_e,A,Te,me,W,H,ee,te,z,q,ie,V,fe,le,O,be,ge,E,ve,U,R,de,K,ye,oe,L,ce,J,ke,v,x,ne,Ee,Oe,S,qe,We,Ue,D,X,Re,Ce,Y,Be,De,we,Ve,za,hc,uc,$r,mc,fc,Ea,gc,_c,Tc,yt,bc,Pr,vc,yc,Mr,kc,wc,Cn,$c,Pc,Sl,Nt,Dn,Mc,Gc,Gr,xc,Fc,Il,Gt,jc,Nn,zc,Ec,Hn,qc,Cc,Al,Ht,go,xr,Ln,Dc,Fr,Nc,Ol,at,Sn,Hc,kt,Lc,qa,Sc,Ic,Ca,Ac,Oc,In,Wc,Uc,Rc,Lt,Bc,Da,Vc,Kc,Na,Jc,Xc,Yc,_o,Wl,St,To,jr,An,Qc,zr,Zc,Ul,pe,On,ep,Er,tp,op,qr,np,sp,bo,ap,Wn,rp,Cr,ip,lp,dp,vo,cp,Un,pp,Ha,hp,up,mp,La,Rn,Rl,It,yo,Dr,Bn,fp,Nr,gp,Bl,$e,Vn,_p,Kn,Tp,Hr,bp,vp,yp,Lr,kp,wp,ko,$p,Jn,Pp,Sr,Mp,Gp,xp,wo,Fp,Xn,jp,Sa,zp,Ep,Vl,At,$o,Ir,Yn,qp,Ar,Cp,Kl,Ot,Qn,Dp,Or,Np,Jl,Wt,Zn,Hp,Wr,Lp,Xl,Ut,Po,Ur,es,Sp,Rr,Ip,Yl,Pe,ts,Ap,Br,Op,Wp,os,Up,Ia,Rp,Bp,Vp,ns,Kp,ss,Jp,Xp,Yp,lt,as,Qp,Rt,Zp,Aa,eh,th,Vr,oh,nh,sh,Mo,ah,Go,rh,dt,rs,ih,Kr,lh,dh,Jr,ch,ph,xo,hh,xt,is,uh,Xr,mh,fh,Fo,Ql,Bt,jo,Yr,ls,gh,Qr,_h,Zl,Me,ds,Th,Zr,bh,vh,cs,yh,Oa,kh,wh,$h,ps,Ph,hs,Mh,Gh,xh,ct,us,Fh,Vt,jh,Wa,zh,Eh,ei,qh,Ch,Dh,zo,Nh,Eo,Hh,pt,ms,Lh,ti,Sh,Ih,oi,Ah,Oh,qo,Wh,Ft,fs,Uh,ni,Rh,Bh,Co,ed,Kt,Do,si,gs,Vh,ai,Kh,td,Ke,_s,Jh,ri,Xh,Yh,Ts,Qh,Ua,Zh,eu,tu,bs,ou,vs,nu,su,au,ht,ys,ru,Jt,iu,Ra,lu,du,ii,cu,pu,hu,No,uu,Ho,od,Xt,Lo,li,ks,mu,di,fu,nd,Ge,ws,gu,ci,_u,Tu,Ba,Va,bu,vu,yu,rt,ku,pi,wu,$u,hi,Pu,Mu,ui,Gu,xu,mi,Fu,ju,zu,$s,Eu,Ka,qu,Cu,Du,Ps,Nu,Ms,Hu,Lu,Su,je,Gs,Iu,Yt,Au,Ja,Ou,Wu,fi,Uu,Ru,Bu,So,Vu,Io,Ku,Ao,Ju,Oo,Xu,Wo,sd,Qt,Uo,gi,xs,Yu,_i,Qu,ad,Je,Fs,Zu,Ti,em,tm,js,om,Xa,nm,sm,am,zs,rm,Es,im,lm,dm,Xe,qs,cm,Zt,pm,Ya,hm,um,bi,mm,fm,gm,Ro,_m,Bo,Tm,Vo,rd,eo,Ko,vi,Cs,bm,yi,vm,id,Ne,Ds,ym,ki,km,wm,Ns,$m,Qa,Pm,Mm,Gm,Hs,xm,Ls,Fm,jm,zm,Jo,Em,ut,Ss,qm,to,Cm,Za,Dm,Nm,wi,Hm,Lm,Sm,Xo,Im,Yo,ld,oo,Qo,$i,Is,Am,Pi,Om,dd,He,As,Wm,Mi,Um,Rm,Os,Bm,er,Vm,Km,Jm,Ws,Xm,Us,Ym,Qm,Zm,Zo,ef,mt,Rs,tf,no,of,tr,nf,sf,Gi,af,rf,lf,en,df,tn,cd,so,on,xi,Bs,cf,Fi,pf,pd,Le,Vs,hf,ji,uf,mf,Ks,ff,or,gf,_f,Tf,Js,bf,Xs,vf,yf,kf,nn,wf,ft,Ys,$f,ao,Pf,nr,Mf,Gf,zi,xf,Ff,jf,sn,zf,an,hd,ro,rn,Ei,Qs,Ef,qi,qf,ud,he,Zs,Cf,Ci,Df,Nf,sr,ar,Hf,Lf,Sf,it,If,Di,Af,Of,Ni,Wf,Uf,Hi,Rf,Bf,Li,Vf,Kf,Jf,ea,Xf,rr,Yf,Qf,Zf,ta,eg,oa,tg,og,ng,ln,sg,Ye,na,ag,io,rg,ir,ig,lg,Si,dg,cg,pg,dn,hg,cn,ug,pn,md,lo,hn,Ii,sa,mg,Ai,fg,fd,co,aa,gg,Oi,_g,gd,po,un,Wi,ra,Tg,Ui,bg,_d,xe,ia,vg,Ri,yg,kg,la,wg,lr,$g,Pg,Mg,da,Gg,ca,xg,Fg,jg,Bi,zg,Eg,wt,Vi,pa,qg,Cg,Ki,ha,Dg,Ng,Ji,ua,Hg,Lg,Xi,ma,Sg,Ig,gt,fa,Ag,ho,Og,Yi,Wg,Ug,Qi,Rg,Bg,Vg,mn,Kg,fn,Td,uo,gn,Zi,ga,Jg,el,Xg,bd,Fe,_a,Yg,tl,Qg,Zg,Ta,e_,dr,t_,o_,n_,ba,s_,va,a_,r_,i_,ol,l_,d_,$t,nl,ya,c_,p_,sl,ka,h_,u_,al,wa,m_,f_,rl,$a,g_,__,_t,Pa,T_,mo,b_,il,v_,y_,ll,k_,w_,$_,_n,P_,Tn,vd;return l=new ze({}),Z=new ze({}),Ln=new ze({}),Sn=new N({props:{name:"class transformers.GPT2Config",anchor:"transformers.GPT2Config",parameters:[{name:"vocab_size",val:" = 50257"},{name:"n_positions",val:" = 1024"},{name:"n_embd",val:" = 768"},{name:"n_layer",val:" = 12"},{name:"n_head",val:" = 12"},{name:"n_inner",val:" = None"},{name:"activation_function",val:" = 'gelu_new'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"scale_attn_weights",val:" = True"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"scale_attn_by_inverse_layer_idx",val:" = False"},{name:"reorder_and_upcast_attn",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
Vocabulary size of the GPT-2 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Model">GPT2Model</a> or <a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.TFGPT2Model">TFGPT2Model</a>.`,name:"vocab_size"},{anchor:"transformers.GPT2Config.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"n_positions"},{anchor:"transformers.GPT2Config.n_embd",description:`<strong>n_embd</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"n_embd"},{anchor:"transformers.GPT2Config.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.GPT2Config.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.GPT2Config.n_inner",description:`<strong>n_inner</strong> (<code>int</code>, <em>optional</em>, defaults to None) &#x2014;
Dimensionality of the inner feed-forward layers. <code>None</code> will set it to 4 times n_embd`,name:"n_inner"},{anchor:"transformers.GPT2Config.activation_function",description:`<strong>activation_function</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
Activation function, to be selected in the list <code>[&quot;relu&quot;, &quot;silu&quot;, &quot;gelu&quot;, &quot;tanh&quot;, &quot;gelu_new&quot;]</code>.`,name:"activation_function"},{anchor:"transformers.GPT2Config.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"resid_pdrop"},{anchor:"transformers.GPT2Config.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.GPT2Config.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.GPT2Config.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers.`,name:"layer_norm_epsilon"},{anchor:"transformers.GPT2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GPT2Config.summary_type",description:`<strong>summary_type</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;cls_index&quot;</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.GPT2Config.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.GPT2Config.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary. Used in for the multiple choice head in
<a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a>.</p>
<p>Pass <code>&quot;tanh&quot;</code> for a tanh activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.GPT2Config.summary_proj_to_labels",description:`<strong>summary_proj_to_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>Whether the projection outputs should have <code>config.num_labels</code> or <code>config.hidden_size</code> classes.`,name:"summary_proj_to_labels"},{anchor:"transformers.GPT2Config.summary_first_dropout",description:`<strong>summary_first_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_first_dropout"},{anchor:"transformers.GPT2Config.scale_attn_weights",description:`<strong>scale_attn_weights</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale attention weights by dividing by sqrt(hidden_size)..`,name:"scale_attn_weights"},{anchor:"transformers.GPT2Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.GPT2Config.scale_attn_by_inverse_layer_idx",description:`<strong>scale_attn_by_inverse_layer_idx</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to additionally scale attention weights by <code>1 / layer_idx + 1</code>.`,name:"scale_attn_by_inverse_layer_idx"},{anchor:"transformers.GPT2Config.reorder_and_upcast_attn",description:`<strong>reorder_and_upcast_attn</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to scale keys (K) prior to computing attention (dot-product) and upcast attention
dot-product/softmax to float() when training with mixed precision.`,name:"reorder_and_upcast_attn"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/configuration_gpt2.py#L38"}}),_o=new se({props:{anchor:"transformers.GPT2Config.example",$$slots:{default:[wb]},$$scope:{ctx:G}}}),An=new ze({}),On=new N({props:{name:"class transformers.GPT2Tokenizer",anchor:"transformers.GPT2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.GPT2Tokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.GPT2Tokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.GPT2Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.GPT2Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.GPT2Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.GPT2Tokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (GPT2 tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/tokenization_gpt2.py#L104"}}),bo=new se({props:{anchor:"transformers.GPT2Tokenizer.example",$$slots:{default:[$b]},$$scope:{ctx:G}}}),vo=new Se({props:{$$slots:{default:[Pb]},$$scope:{ctx:G}}}),Rn=new N({props:{name:"save_vocabulary",anchor:"transformers.GPT2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/tokenization_gpt2.py#L269"}}),Bn=new ze({}),Vn=new N({props:{name:"class transformers.GPT2TokenizerFast",anchor:"transformers.GPT2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.GPT2TokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.GPT2TokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.GPT2TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.GPT2TokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.GPT2TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.GPT2TokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (GPT2 tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.GPT2TokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the post-processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/tokenization_gpt2_fast.py#L70"}}),ko=new se({props:{anchor:"transformers.GPT2TokenizerFast.example",$$slots:{default:[Mb]},$$scope:{ctx:G}}}),wo=new Se({props:{$$slots:{default:[Gb]},$$scope:{ctx:G}}}),Yn=new ze({}),Qn=new N({props:{name:"class transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput",anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mc_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mc_logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput.mc_loss",description:`<strong>mc_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>mc_labels</code> is provided) &#x2014;
Multiple choice classification loss.`,name:"mc_loss"},{anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of length <code>config.n_layers</code>, containing tuples of tensors of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>GPT2Attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_gpt2.py#L492"}}),Zn=new N({props:{name:"class transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput",anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"mc_logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_tf_gpt2.py#L591"}}),es=new ze({}),ts=new N({props:{name:"class transformers.GPT2Model",anchor:"transformers.GPT2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_gpt2.py#L668"}}),as=new N({props:{name:"forward",anchor:"transformers.GPT2Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPT2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPT2Model.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPT2Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPT2Model.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPT2Model.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPT2Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPT2Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.GPT2Model.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.GPT2Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPT2Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPT2Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_gpt2.py#L737",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mo=new Se({props:{$$slots:{default:[xb]},$$scope:{ctx:G}}}),Go=new se({props:{anchor:"transformers.GPT2Model.forward.example",$$slots:{default:[Fb]},$$scope:{ctx:G}}}),rs=new N({props:{name:"parallelize",anchor:"transformers.GPT2Model.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.GPT2Model.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the gpt2 models have the
following number of attention modules:</p>
<ul>
<li>gpt2: 12</li>
<li>gpt2-medium: 24</li>
<li>gpt2-large: 36</li>
<li>gpt2-xl: 48</li>
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_gpt2.py#L691"}}),xo=new se({props:{anchor:"transformers.GPT2Model.parallelize.example",$$slots:{default:[jb]},$$scope:{ctx:G}}}),is=new N({props:{name:"deparallelize",anchor:"transformers.GPT2Model.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_gpt2.py#L711"}}),Fo=new se({props:{anchor:"transformers.GPT2Model.deparallelize.example",$$slots:{default:[zb]},$$scope:{ctx:G}}}),ls=new ze({}),ds=new N({props:{name:"class transformers.GPT2LMHeadModel",anchor:"transformers.GPT2LMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2LMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_gpt2.py#L946"}}),us=new N({props:{name:"forward",anchor:"transformers.GPT2LMHeadModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPT2LMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPT2LMHeadModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPT2LMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPT2LMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPT2LMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPT2LMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPT2LMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.GPT2LMHeadModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.GPT2LMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPT2LMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPT2LMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2LMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_gpt2.py#L1015",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zo=new Se({props:{$$slots:{default:[Eb]},$$scope:{ctx:G}}}),Eo=new se({props:{anchor:"transformers.GPT2LMHeadModel.forward.example",$$slots:{default:[qb]},$$scope:{ctx:G}}}),ms=new N({props:{name:"parallelize",anchor:"transformers.GPT2LMHeadModel.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.GPT2LMHeadModel.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the gpt2 models have the
following number of attention modules:</p>
<ul>
<li>gpt2: 12</li>
<li>gpt2-medium: 24</li>
<li>gpt2-large: 36</li>
<li>gpt2-xl: 48</li>
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_gpt2.py#L961"}}),qo=new se({props:{anchor:"transformers.GPT2LMHeadModel.parallelize.example",$$slots:{default:[Cb]},$$scope:{ctx:G}}}),fs=new N({props:{name:"deparallelize",anchor:"transformers.GPT2LMHeadModel.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_gpt2.py#L973"}}),Co=new se({props:{anchor:"transformers.GPT2LMHeadModel.deparallelize.example",$$slots:{default:[Db]},$$scope:{ctx:G}}}),gs=new ze({}),_s=new N({props:{name:"class transformers.GPT2DoubleHeadsModel",anchor:"transformers.GPT2DoubleHeadsModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2DoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_gpt2.py#L1115"}}),ys=new N({props:{name:"forward",anchor:"transformers.GPT2DoubleHeadsModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"mc_token_ids",val:" = None"},{name:"labels",val:" = None"},{name:"mc_labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2DoubleHeadsModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1[</code>.`,name:"mc_token_ids"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code> All labels set to
<code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>`,name:"labels"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.mc_labels",description:`<strong>mc_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <em>num_choices</em> is the size of the second dimension of the input tensors. (see <em>input_ids</em> above)`,name:"mc_labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_gpt2.py#L1189",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>mc_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>mc_labels</code> is provided) \u2014 Multiple choice classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>mc_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of length <code>config.n_layers</code>, containing tuples of tensors of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>GPT2Attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),No=new Se({props:{$$slots:{default:[Nb]},$$scope:{ctx:G}}}),Ho=new se({props:{anchor:"transformers.GPT2DoubleHeadsModel.forward.example",$$slots:{default:[Hb]},$$scope:{ctx:G}}}),ks=new ze({}),ws=new N({props:{name:"class transformers.GPT2ForSequenceClassification",anchor:"transformers.GPT2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_gpt2.py#L1331"}}),Gs=new N({props:{name:"forward",anchor:"transformers.GPT2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPT2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPT2ForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPT2ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPT2ForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPT2ForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPT2ForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPT2ForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.GPT2ForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.GPT2ForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPT2ForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPT2ForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_gpt2.py#L1347",returnDescription:`
<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
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
<p><code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),So=new Se({props:{$$slots:{default:[Lb]},$$scope:{ctx:G}}}),Io=new se({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example",$$slots:{default:[Sb]},$$scope:{ctx:G}}}),Ao=new se({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example-2",$$slots:{default:[Ib]},$$scope:{ctx:G}}}),Oo=new se({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example-3",$$slots:{default:[Ab]},$$scope:{ctx:G}}}),Wo=new se({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example-4",$$slots:{default:[Ob]},$$scope:{ctx:G}}}),xs=new ze({}),Fs=new N({props:{name:"class transformers.GPT2ForTokenClassification",anchor:"transformers.GPT2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_gpt2.py#L1457"}}),qs=new N({props:{name:"forward",anchor:"transformers.GPT2ForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPT2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPT2ForTokenClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPT2ForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPT2ForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPT2ForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPT2ForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPT2ForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.GPT2ForTokenClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.GPT2ForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPT2ForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPT2ForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_gpt2.py#L1479",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ro=new Se({props:{$$slots:{default:[Wb]},$$scope:{ctx:G}}}),Bo=new se({props:{anchor:"transformers.GPT2ForTokenClassification.forward.example",$$slots:{default:[Ub]},$$scope:{ctx:G}}}),Vo=new se({props:{anchor:"transformers.GPT2ForTokenClassification.forward.example-2",$$slots:{default:[Rb]},$$scope:{ctx:G}}}),Cs=new ze({}),Ds=new N({props:{name:"class transformers.TFGPT2Model",anchor:"transformers.TFGPT2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_tf_gpt2.py#L730"}}),Jo=new Se({props:{$$slots:{default:[Bb]},$$scope:{ctx:G}}}),Ss=new N({props:{name:"call",anchor:"transformers.TFGPT2Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2Model.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPT2Model.call.past",description:`<strong>past</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past"},{anchor:"transformers.TFGPT2Model.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPT2Model.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPT2Model.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPT2Model.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPT2Model.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPT2Model.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPT2Model.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPT2Model.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPT2Model.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPT2Model.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFGPT2Model.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFGPT2Model.call.past",description:`<strong>past</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that don&#x2019;t have
their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past"},{anchor:"transformers.TFGPT2Model.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_tf_gpt2.py#L735",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Xo=new Se({props:{$$slots:{default:[Vb]},$$scope:{ctx:G}}}),Yo=new se({props:{anchor:"transformers.TFGPT2Model.call.example",$$slots:{default:[Kb]},$$scope:{ctx:G}}}),Is=new ze({}),As=new N({props:{name:"class transformers.TFGPT2LMHeadModel",anchor:"transformers.TFGPT2LMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2LMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_tf_gpt2.py#L846"}}),Zo=new Se({props:{$$slots:{default:[Jb]},$$scope:{ctx:G}}}),Rs=new N({props:{name:"call",anchor:"transformers.TFGPT2LMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2LMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPT2LMHeadModel.call.past",description:`<strong>past</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past"},{anchor:"transformers.TFGPT2LMHeadModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPT2LMHeadModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPT2LMHeadModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPT2LMHeadModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPT2LMHeadModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPT2LMHeadModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPT2LMHeadModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPT2LMHeadModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPT2LMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPT2LMHeadModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFGPT2LMHeadModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFGPT2LMHeadModel.call.past",description:`<strong>past</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that don&#x2019;t have
their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past"},{anchor:"transformers.TFGPT2LMHeadModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFGPT2LMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_tf_gpt2.py#L941",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),en=new Se({props:{$$slots:{default:[Xb]},$$scope:{ctx:G}}}),tn=new se({props:{anchor:"transformers.TFGPT2LMHeadModel.call.example",$$slots:{default:[Yb]},$$scope:{ctx:G}}}),Bs=new ze({}),Vs=new N({props:{name:"class transformers.TFGPT2DoubleHeadsModel",anchor:"transformers.TFGPT2DoubleHeadsModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2DoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_tf_gpt2.py#L1075"}}),nn=new Se({props:{$$slots:{default:[Qb]},$$scope:{ctx:G}}}),Ys=new N({props:{name:"call",anchor:"transformers.TFGPT2DoubleHeadsModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"mc_token_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2DoubleHeadsModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.past",description:`<strong>past</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1[</code>.`,name:"mc_token_ids"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_tf_gpt2.py#L1084",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>mc_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
  href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),sn=new Se({props:{$$slots:{default:[Zb]},$$scope:{ctx:G}}}),an=new se({props:{anchor:"transformers.TFGPT2DoubleHeadsModel.call.example",$$slots:{default:[ev]},$$scope:{ctx:G}}}),Qs=new ze({}),Zs=new N({props:{name:"class transformers.TFGPT2ForSequenceClassification",anchor:"transformers.TFGPT2ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_tf_gpt2.py#L1247"}}),ln=new Se({props:{$$slots:{default:[tv]},$$scope:{ctx:G}}}),na=new N({props:{name:"call",anchor:"transformers.TFGPT2ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.past",description:`<strong>past</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_tf_gpt2.py#L1259",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
  href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),dn=new Se({props:{$$slots:{default:[ov]},$$scope:{ctx:G}}}),cn=new se({props:{anchor:"transformers.TFGPT2ForSequenceClassification.call.example",$$slots:{default:[nv]},$$scope:{ctx:G}}}),pn=new se({props:{anchor:"transformers.TFGPT2ForSequenceClassification.call.example-2",$$slots:{default:[sv]},$$scope:{ctx:G}}}),sa=new ze({}),aa=new N({props:{name:"class transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast",anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/modeling_tf_outputs.py#L758"}}),ra=new ze({}),ia=new N({props:{name:"class transformers.FlaxGPT2Model",anchor:"transformers.FlaxGPT2Model",parameters:[{name:"config",val:": GPT2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPT2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPT2Model.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_flax_gpt2.py#L653"}}),fa=new N({props:{name:"__call__",anchor:"transformers.FlaxGPT2Model.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxGPT2Model.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxGPT2Model.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxGPT2Model.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxGPT2Model.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxGPT2Model.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxGPT2Model.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxGPT2Model.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_flax_gpt2.py#L446",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
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
`}}),mn=new Se({props:{$$slots:{default:[av]},$$scope:{ctx:G}}}),fn=new se({props:{anchor:"transformers.FlaxGPT2Model.__call__.example",$$slots:{default:[rv]},$$scope:{ctx:G}}}),ga=new ze({}),_a=new N({props:{name:"class transformers.FlaxGPT2LMHeadModel",anchor:"transformers.FlaxGPT2LMHeadModel",parameters:[{name:"config",val:": GPT2Config"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPT2LMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPT2LMHeadModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_flax_gpt2.py#L731"}}),Pa=new N({props:{name:"__call__",anchor:"transformers.FlaxGPT2LMHeadModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Tokenizer">GPT2Tokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/gpt2/modeling_flax_gpt2.py#L446",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
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
`}}),_n=new Se({props:{$$slots:{default:[iv]},$$scope:{ctx:G}}}),Tn=new se({props:{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.example",$$slots:{default:[lv]},$$scope:{ctx:G}}}),{c(){d=n("meta"),g=h(),c=n("h1"),p=n("a"),b=n("span"),y(l.$$.fragment),m=h(),F=n("span"),Q=a("OpenAI GPT2"),C=h(),j=n("h2"),B=n("a"),I=n("span"),y(Z.$$.fragment),_e=h(),A=n("span"),Te=a("Overview"),me=h(),W=n("p"),H=a("OpenAI GPT-2 model was proposed in "),ee=n("a"),te=a("Language Models are Unsupervised Multitask Learners"),z=a(` by Alec
Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei and Ilya Sutskever. It\u2019s a causal (unidirectional)
transformer pretrained using language modeling on a very large corpus of ~40 GB of text data.`),q=h(),ie=n("p"),V=a("The abstract from the paper is the following:"),fe=h(),le=n("p"),O=n("em"),be=a(`GPT-2 is a large transformer-based language model with 1.5 billion parameters, trained on a dataset[1] of 8 million
web pages. GPT-2 is trained with a simple objective: predict the next word, given all of the previous words within some
text. The diversity of the dataset causes this simple goal to contain naturally occurring demonstrations of many tasks
across diverse domains. GPT-2 is a direct scale-up of GPT, with more than 10X the parameters and trained on more than
10X the amount of data.`),ge=h(),E=n("p"),ve=a("Tips:"),U=h(),R=n("ul"),de=n("li"),K=a(`GPT-2 is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),ye=h(),oe=n("li"),L=a(`GPT-2 was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),ce=n("em"),J=a("run_generation.py"),ke=a(" example script."),v=h(),x=n("li"),ne=a("The model can take the "),Ee=n("em"),Oe=a("past_key_values"),S=a(" (for PyTorch) or "),qe=n("em"),We=a("past"),Ue=a(` (for TF) as input, which is the previously computed
key/value attention pairs. Using this (`),D=n("em"),X=a("past_key_values"),Re=a(" or "),Ce=n("em"),Y=a("past"),Be=a(`) value prevents the model from re-computing
pre-computed values in the context of text generation. For PyTorch, see `),De=n("em"),we=a("past_key_values"),Ve=a(` argument of the
`),za=n("a"),hc=a("GPT2Model.forward()"),uc=a(" method, or for TF the "),$r=n("em"),mc=a("past"),fc=a(` argument of the
`),Ea=n("a"),gc=a("TFGPT2Model.call()"),_c=a(" method for more information on its usage."),Tc=h(),yt=n("li"),bc=a("Enabling the "),Pr=n("em"),vc=a("scale_attn_by_inverse_layer_idx"),yc=a(" and "),Mr=n("em"),kc=a("reorder_and_upcast_attn"),wc=a(` flags will apply the training stability
improvements from `),Cn=n("a"),$c=a("Mistral"),Pc=a(" (for PyTorch only)."),Sl=h(),Nt=n("p"),Dn=n("a"),Mc=a("Write With Transformer"),Gc=a(` is a webapp created and hosted by
Hugging Face showcasing the generative capabilities of several models. GPT-2 is one of them and is available in five
different sizes: small, medium, large, xl and a distilled version of the small checkpoint: `),Gr=n("em"),xc=a("distilgpt-2"),Fc=a("."),Il=h(),Gt=n("p"),jc=a("This model was contributed by "),Nn=n("a"),zc=a("thomwolf"),Ec=a(". The original code can be found "),Hn=n("a"),qc=a("here"),Cc=a("."),Al=h(),Ht=n("h2"),go=n("a"),xr=n("span"),y(Ln.$$.fragment),Dc=h(),Fr=n("span"),Nc=a("GPT2Config"),Ol=h(),at=n("div"),y(Sn.$$.fragment),Hc=h(),kt=n("p"),Lc=a("This is the configuration class to store the configuration of a "),qa=n("a"),Sc=a("GPT2Model"),Ic=a(" or a "),Ca=n("a"),Ac=a("TFGPT2Model"),Oc=a(`. It is used to
instantiate a GPT-2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GPT-2
`),In=n("a"),Wc=a("small"),Uc=a(" architecture."),Rc=h(),Lt=n("p"),Bc=a("Configuration objects inherit from "),Da=n("a"),Vc=a("PretrainedConfig"),Kc=a(` and can be used to control the model outputs. Read the
documentation from `),Na=n("a"),Jc=a("PretrainedConfig"),Xc=a(" for more information."),Yc=h(),y(_o.$$.fragment),Wl=h(),St=n("h2"),To=n("a"),jr=n("span"),y(An.$$.fragment),Qc=h(),zr=n("span"),Zc=a("GPT2Tokenizer"),Ul=h(),pe=n("div"),y(On.$$.fragment),ep=h(),Er=n("p"),tp=a("Construct a GPT-2 tokenizer. Based on byte-level Byte-Pair-Encoding."),op=h(),qr=n("p"),np=a(`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),sp=h(),y(bo.$$.fragment),ap=h(),Wn=n("p"),rp=a("You can get around that behavior by passing "),Cr=n("code"),ip=a("add_prefix_space=True"),lp=a(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),dp=h(),y(vo.$$.fragment),cp=h(),Un=n("p"),pp=a("This tokenizer inherits from "),Ha=n("a"),hp=a("PreTrainedTokenizer"),up=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),mp=h(),La=n("div"),y(Rn.$$.fragment),Rl=h(),It=n("h2"),yo=n("a"),Dr=n("span"),y(Bn.$$.fragment),fp=h(),Nr=n("span"),gp=a("GPT2TokenizerFast"),Bl=h(),$e=n("div"),y(Vn.$$.fragment),_p=h(),Kn=n("p"),Tp=a("Construct a \u201Cfast\u201D GPT-2 tokenizer (backed by HuggingFace\u2019s "),Hr=n("em"),bp=a("tokenizers"),vp=a(` library). Based on byte-level
Byte-Pair-Encoding.`),yp=h(),Lr=n("p"),kp=a(`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),wp=h(),y(ko.$$.fragment),$p=h(),Jn=n("p"),Pp=a("You can get around that behavior by passing "),Sr=n("code"),Mp=a("add_prefix_space=True"),Gp=a(` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),xp=h(),y(wo.$$.fragment),Fp=h(),Xn=n("p"),jp=a("This tokenizer inherits from "),Sa=n("a"),zp=a("PreTrainedTokenizerFast"),Ep=a(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Vl=h(),At=n("h2"),$o=n("a"),Ir=n("span"),y(Yn.$$.fragment),qp=h(),Ar=n("span"),Cp=a("GPT2 specific outputs"),Kl=h(),Ot=n("div"),y(Qn.$$.fragment),Dp=h(),Or=n("p"),Np=a("Base class for outputs of models predicting if two sentences are consecutive or not."),Jl=h(),Wt=n("div"),y(Zn.$$.fragment),Hp=h(),Wr=n("p"),Lp=a("Base class for outputs of models predicting if two sentences are consecutive or not."),Xl=h(),Ut=n("h2"),Po=n("a"),Ur=n("span"),y(es.$$.fragment),Sp=h(),Rr=n("span"),Ip=a("GPT2Model"),Yl=h(),Pe=n("div"),y(ts.$$.fragment),Ap=h(),Br=n("p"),Op=a("The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),Wp=h(),os=n("p"),Up=a("This model inherits from "),Ia=n("a"),Rp=a("PreTrainedModel"),Bp=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vp=h(),ns=n("p"),Kp=a("This model is also a PyTorch "),ss=n("a"),Jp=a("torch.nn.Module"),Xp=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yp=h(),lt=n("div"),y(as.$$.fragment),Qp=h(),Rt=n("p"),Zp=a("The "),Aa=n("a"),eh=a("GPT2Model"),th=a(" forward method, overrides the "),Vr=n("code"),oh=a("__call__"),nh=a(" special method."),sh=h(),y(Mo.$$.fragment),ah=h(),y(Go.$$.fragment),rh=h(),dt=n("div"),y(rs.$$.fragment),ih=h(),Kr=n("p"),lh=a("This is an experimental feature and is a subject to change at a moment\u2019s notice."),dh=h(),Jr=n("p"),ch=a(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),ph=h(),y(xo.$$.fragment),hh=h(),xt=n("div"),y(is.$$.fragment),uh=h(),Xr=n("p"),mh=a("Moves the model to cpu from a model parallel state."),fh=h(),y(Fo.$$.fragment),Ql=h(),Bt=n("h2"),jo=n("a"),Yr=n("span"),y(ls.$$.fragment),gh=h(),Qr=n("span"),_h=a("GPT2LMHeadModel"),Zl=h(),Me=n("div"),y(ds.$$.fragment),Th=h(),Zr=n("p"),bh=a(`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),vh=h(),cs=n("p"),yh=a("This model inherits from "),Oa=n("a"),kh=a("PreTrainedModel"),wh=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$h=h(),ps=n("p"),Ph=a("This model is also a PyTorch "),hs=n("a"),Mh=a("torch.nn.Module"),Gh=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xh=h(),ct=n("div"),y(us.$$.fragment),Fh=h(),Vt=n("p"),jh=a("The "),Wa=n("a"),zh=a("GPT2LMHeadModel"),Eh=a(" forward method, overrides the "),ei=n("code"),qh=a("__call__"),Ch=a(" special method."),Dh=h(),y(zo.$$.fragment),Nh=h(),y(Eo.$$.fragment),Hh=h(),pt=n("div"),y(ms.$$.fragment),Lh=h(),ti=n("p"),Sh=a("This is an experimental feature and is a subject to change at a moment\u2019s notice."),Ih=h(),oi=n("p"),Ah=a(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Oh=h(),y(qo.$$.fragment),Wh=h(),Ft=n("div"),y(fs.$$.fragment),Uh=h(),ni=n("p"),Rh=a("Moves the model to cpu from a model parallel state."),Bh=h(),y(Co.$$.fragment),ed=h(),Kt=n("h2"),Do=n("a"),si=n("span"),y(gs.$$.fragment),Vh=h(),ai=n("span"),Kh=a("GPT2DoubleHeadsModel"),td=h(),Ke=n("div"),y(_s.$$.fragment),Jh=h(),ri=n("p"),Xh=a(`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Yh=h(),Ts=n("p"),Qh=a("This model inherits from "),Ua=n("a"),Zh=a("PreTrainedModel"),eu=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tu=h(),bs=n("p"),ou=a("This model is also a PyTorch "),vs=n("a"),nu=a("torch.nn.Module"),su=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),au=h(),ht=n("div"),y(ys.$$.fragment),ru=h(),Jt=n("p"),iu=a("The "),Ra=n("a"),lu=a("GPT2DoubleHeadsModel"),du=a(" forward method, overrides the "),ii=n("code"),cu=a("__call__"),pu=a(" special method."),hu=h(),y(No.$$.fragment),uu=h(),y(Ho.$$.fragment),od=h(),Xt=n("h2"),Lo=n("a"),li=n("span"),y(ks.$$.fragment),mu=h(),di=n("span"),fu=a("GPT2ForSequenceClassification"),nd=h(),Ge=n("div"),y(ws.$$.fragment),gu=h(),ci=n("p"),_u=a("The GPT2 Model transformer with a sequence classification head on top (linear layer)."),Tu=h(),Ba=n("p"),Va=n("a"),bu=a("GPT2ForSequenceClassification"),vu=a(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),yu=h(),rt=n("p"),ku=a(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),pi=n("code"),wu=a("pad_token_id"),$u=a(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),hi=n("code"),Pu=a("pad_token_id"),Mu=a(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),ui=n("code"),Gu=a("inputs_embeds"),xu=a(" are passed instead of "),mi=n("code"),Fu=a("input_ids"),ju=a(`, it does the same (take the last value in
each row of the batch).`),zu=h(),$s=n("p"),Eu=a("This model inherits from "),Ka=n("a"),qu=a("PreTrainedModel"),Cu=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Du=h(),Ps=n("p"),Nu=a("This model is also a PyTorch "),Ms=n("a"),Hu=a("torch.nn.Module"),Lu=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Su=h(),je=n("div"),y(Gs.$$.fragment),Iu=h(),Yt=n("p"),Au=a("The "),Ja=n("a"),Ou=a("GPT2ForSequenceClassification"),Wu=a(" forward method, overrides the "),fi=n("code"),Uu=a("__call__"),Ru=a(" special method."),Bu=h(),y(So.$$.fragment),Vu=h(),y(Io.$$.fragment),Ku=h(),y(Ao.$$.fragment),Ju=h(),y(Oo.$$.fragment),Xu=h(),y(Wo.$$.fragment),sd=h(),Qt=n("h2"),Uo=n("a"),gi=n("span"),y(xs.$$.fragment),Yu=h(),_i=n("span"),Qu=a("GPT2ForTokenClassification"),ad=h(),Je=n("div"),y(Fs.$$.fragment),Zu=h(),Ti=n("p"),em=a(`GPT2 Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),tm=h(),js=n("p"),om=a("This model inherits from "),Xa=n("a"),nm=a("PreTrainedModel"),sm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),am=h(),zs=n("p"),rm=a("This model is also a PyTorch "),Es=n("a"),im=a("torch.nn.Module"),lm=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dm=h(),Xe=n("div"),y(qs.$$.fragment),cm=h(),Zt=n("p"),pm=a("The "),Ya=n("a"),hm=a("GPT2ForTokenClassification"),um=a(" forward method, overrides the "),bi=n("code"),mm=a("__call__"),fm=a(" special method."),gm=h(),y(Ro.$$.fragment),_m=h(),y(Bo.$$.fragment),Tm=h(),y(Vo.$$.fragment),rd=h(),eo=n("h2"),Ko=n("a"),vi=n("span"),y(Cs.$$.fragment),bm=h(),yi=n("span"),vm=a("TFGPT2Model"),id=h(),Ne=n("div"),y(Ds.$$.fragment),ym=h(),ki=n("p"),km=a("The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),wm=h(),Ns=n("p"),$m=a("This model inherits from "),Qa=n("a"),Pm=a("TFPreTrainedModel"),Mm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gm=h(),Hs=n("p"),xm=a("This model is also a "),Ls=n("a"),Fm=a("tf.keras.Model"),jm=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zm=h(),y(Jo.$$.fragment),Em=h(),ut=n("div"),y(Ss.$$.fragment),qm=h(),to=n("p"),Cm=a("The "),Za=n("a"),Dm=a("TFGPT2Model"),Nm=a(" forward method, overrides the "),wi=n("code"),Hm=a("__call__"),Lm=a(" special method."),Sm=h(),y(Xo.$$.fragment),Im=h(),y(Yo.$$.fragment),ld=h(),oo=n("h2"),Qo=n("a"),$i=n("span"),y(Is.$$.fragment),Am=h(),Pi=n("span"),Om=a("TFGPT2LMHeadModel"),dd=h(),He=n("div"),y(As.$$.fragment),Wm=h(),Mi=n("p"),Um=a(`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Rm=h(),Os=n("p"),Bm=a("This model inherits from "),er=n("a"),Vm=a("TFPreTrainedModel"),Km=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jm=h(),Ws=n("p"),Xm=a("This model is also a "),Us=n("a"),Ym=a("tf.keras.Model"),Qm=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zm=h(),y(Zo.$$.fragment),ef=h(),mt=n("div"),y(Rs.$$.fragment),tf=h(),no=n("p"),of=a("The "),tr=n("a"),nf=a("TFGPT2LMHeadModel"),sf=a(" forward method, overrides the "),Gi=n("code"),af=a("__call__"),rf=a(" special method."),lf=h(),y(en.$$.fragment),df=h(),y(tn.$$.fragment),cd=h(),so=n("h2"),on=n("a"),xi=n("span"),y(Bs.$$.fragment),cf=h(),Fi=n("span"),pf=a("TFGPT2DoubleHeadsModel"),pd=h(),Le=n("div"),y(Vs.$$.fragment),hf=h(),ji=n("p"),uf=a(`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),mf=h(),Ks=n("p"),ff=a("This model inherits from "),or=n("a"),gf=a("TFPreTrainedModel"),_f=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tf=h(),Js=n("p"),bf=a("This model is also a "),Xs=n("a"),vf=a("tf.keras.Model"),yf=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kf=h(),y(nn.$$.fragment),wf=h(),ft=n("div"),y(Ys.$$.fragment),$f=h(),ao=n("p"),Pf=a("The "),nr=n("a"),Mf=a("TFGPT2DoubleHeadsModel"),Gf=a(" forward method, overrides the "),zi=n("code"),xf=a("__call__"),Ff=a(" special method."),jf=h(),y(sn.$$.fragment),zf=h(),y(an.$$.fragment),hd=h(),ro=n("h2"),rn=n("a"),Ei=n("span"),y(Qs.$$.fragment),Ef=h(),qi=n("span"),qf=a("TFGPT2ForSequenceClassification"),ud=h(),he=n("div"),y(Zs.$$.fragment),Cf=h(),Ci=n("p"),Df=a("The GPT2 Model transformer with a sequence classification head on top (linear layer)."),Nf=h(),sr=n("p"),ar=n("a"),Hf=a("TFGPT2ForSequenceClassification"),Lf=a(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),Sf=h(),it=n("p"),If=a(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Di=n("code"),Af=a("pad_token_id"),Of=a(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ni=n("code"),Wf=a("pad_token_id"),Uf=a(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Hi=n("code"),Rf=a("inputs_embeds"),Bf=a(" are passed instead of "),Li=n("code"),Vf=a("input_ids"),Kf=a(`, it does the same (take the last value in
each row of the batch).`),Jf=h(),ea=n("p"),Xf=a("This model inherits from "),rr=n("a"),Yf=a("TFPreTrainedModel"),Qf=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zf=h(),ta=n("p"),eg=a("This model is also a "),oa=n("a"),tg=a("tf.keras.Model"),og=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ng=h(),y(ln.$$.fragment),sg=h(),Ye=n("div"),y(na.$$.fragment),ag=h(),io=n("p"),rg=a("The "),ir=n("a"),ig=a("TFGPT2ForSequenceClassification"),lg=a(" forward method, overrides the "),Si=n("code"),dg=a("__call__"),cg=a(" special method."),pg=h(),y(dn.$$.fragment),hg=h(),y(cn.$$.fragment),ug=h(),y(pn.$$.fragment),md=h(),lo=n("h2"),hn=n("a"),Ii=n("span"),y(sa.$$.fragment),mg=h(),Ai=n("span"),fg=a("TFSequenceClassifierOutputWithPast"),fd=h(),co=n("div"),y(aa.$$.fragment),gg=h(),Oi=n("p"),_g=a("Base class for outputs of sentence classification models."),gd=h(),po=n("h2"),un=n("a"),Wi=n("span"),y(ra.$$.fragment),Tg=h(),Ui=n("span"),bg=a("FlaxGPT2Model"),_d=h(),xe=n("div"),y(ia.$$.fragment),vg=h(),Ri=n("p"),yg=a("The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),kg=h(),la=n("p"),wg=a("This model inherits from "),lr=n("a"),$g=a("FlaxPreTrainedModel"),Pg=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mg=h(),da=n("p"),Gg=a(`This model is also a Flax Linen
`),ca=n("a"),xg=a("flax.nn.Module"),Fg=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),jg=h(),Bi=n("p"),zg=a("Finally, this model supports inherent JAX features such as:"),Eg=h(),wt=n("ul"),Vi=n("li"),pa=n("a"),qg=a("Just-In-Time (JIT) compilation"),Cg=h(),Ki=n("li"),ha=n("a"),Dg=a("Automatic Differentiation"),Ng=h(),Ji=n("li"),ua=n("a"),Hg=a("Vectorization"),Lg=h(),Xi=n("li"),ma=n("a"),Sg=a("Parallelization"),Ig=h(),gt=n("div"),y(fa.$$.fragment),Ag=h(),ho=n("p"),Og=a("The "),Yi=n("code"),Wg=a("FlaxGPT2PreTrainedModel"),Ug=a(" forward method, overrides the "),Qi=n("code"),Rg=a("__call__"),Bg=a(" special method."),Vg=h(),y(mn.$$.fragment),Kg=h(),y(fn.$$.fragment),Td=h(),uo=n("h2"),gn=n("a"),Zi=n("span"),y(ga.$$.fragment),Jg=h(),el=n("span"),Xg=a("FlaxGPT2LMHeadModel"),bd=h(),Fe=n("div"),y(_a.$$.fragment),Yg=h(),tl=n("p"),Qg=a(`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Zg=h(),Ta=n("p"),e_=a("This model inherits from "),dr=n("a"),t_=a("FlaxPreTrainedModel"),o_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),n_=h(),ba=n("p"),s_=a(`This model is also a Flax Linen
`),va=n("a"),a_=a("flax.nn.Module"),r_=a(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),i_=h(),ol=n("p"),l_=a("Finally, this model supports inherent JAX features such as:"),d_=h(),$t=n("ul"),nl=n("li"),ya=n("a"),c_=a("Just-In-Time (JIT) compilation"),p_=h(),sl=n("li"),ka=n("a"),h_=a("Automatic Differentiation"),u_=h(),al=n("li"),wa=n("a"),m_=a("Vectorization"),f_=h(),rl=n("li"),$a=n("a"),g_=a("Parallelization"),__=h(),_t=n("div"),y(Pa.$$.fragment),T_=h(),mo=n("p"),b_=a("The "),il=n("code"),v_=a("FlaxGPT2PreTrainedModel"),y_=a(" forward method, overrides the "),ll=n("code"),k_=a("__call__"),w_=a(" special method."),$_=h(),y(_n.$$.fragment),P_=h(),y(Tn.$$.fragment),this.h()},l(o){const _=yb('[data-svelte="svelte-1phssyn"]',document.head);d=s(_,"META",{name:!0,content:!0}),_.forEach(t),g=u(o),c=s(o,"H1",{class:!0});var Ma=i(c);p=s(Ma,"A",{id:!0,class:!0,href:!0});var dl=i(p);b=s(dl,"SPAN",{});var cl=i(b);k(l.$$.fragment,cl),cl.forEach(t),dl.forEach(t),m=u(Ma),F=s(Ma,"SPAN",{});var pl=i(F);Q=r(pl,"OpenAI GPT2"),pl.forEach(t),Ma.forEach(t),C=u(o),j=s(o,"H2",{class:!0});var Ga=i(j);B=s(Ga,"A",{id:!0,class:!0,href:!0});var hl=i(B);I=s(hl,"SPAN",{});var ul=i(I);k(Z.$$.fragment,ul),ul.forEach(t),hl.forEach(t),_e=u(Ga),A=s(Ga,"SPAN",{});var ml=i(A);Te=r(ml,"Overview"),ml.forEach(t),Ga.forEach(t),me=u(o),W=s(o,"P",{});var xa=i(W);H=r(xa,"OpenAI GPT-2 model was proposed in "),ee=s(xa,"A",{href:!0,rel:!0});var fl=i(ee);te=r(fl,"Language Models are Unsupervised Multitask Learners"),fl.forEach(t),z=r(xa,` by Alec
Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei and Ilya Sutskever. It\u2019s a causal (unidirectional)
transformer pretrained using language modeling on a very large corpus of ~40 GB of text data.`),xa.forEach(t),q=u(o),ie=s(o,"P",{});var gl=i(ie);V=r(gl,"The abstract from the paper is the following:"),gl.forEach(t),fe=u(o),le=s(o,"P",{});var _l=i(le);O=s(_l,"EM",{});var Tl=i(O);be=r(Tl,`GPT-2 is a large transformer-based language model with 1.5 billion parameters, trained on a dataset[1] of 8 million
web pages. GPT-2 is trained with a simple objective: predict the next word, given all of the previous words within some
text. The diversity of the dataset causes this simple goal to contain naturally occurring demonstrations of many tasks
across diverse domains. GPT-2 is a direct scale-up of GPT, with more than 10X the parameters and trained on more than
10X the amount of data.`),Tl.forEach(t),_l.forEach(t),ge=u(o),E=s(o,"P",{});var bl=i(E);ve=r(bl,"Tips:"),bl.forEach(t),U=u(o),R=s(o,"UL",{});var Pt=i(R);de=s(Pt,"LI",{});var vl=i(de);K=r(vl,`GPT-2 is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),vl.forEach(t),ye=u(Pt),oe=s(Pt,"LI",{});var Fa=i(oe);L=r(Fa,`GPT-2 was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),ce=s(Fa,"EM",{});var yl=i(ce);J=r(yl,"run_generation.py"),yl.forEach(t),ke=r(Fa," example script."),Fa.forEach(t),v=u(Pt),x=s(Pt,"LI",{});var ue=i(x);ne=r(ue,"The model can take the "),Ee=s(ue,"EM",{});var kl=i(Ee);Oe=r(kl,"past_key_values"),kl.forEach(t),S=r(ue," (for PyTorch) or "),qe=s(ue,"EM",{});var wl=i(qe);We=r(wl,"past"),wl.forEach(t),Ue=r(ue,` (for TF) as input, which is the previously computed
key/value attention pairs. Using this (`),D=s(ue,"EM",{});var $l=i(D);X=r($l,"past_key_values"),$l.forEach(t),Re=r(ue," or "),Ce=s(ue,"EM",{});var Pl=i(Ce);Y=r(Pl,"past"),Pl.forEach(t),Be=r(ue,`) value prevents the model from re-computing
pre-computed values in the context of text generation. For PyTorch, see `),De=s(ue,"EM",{});var Ml=i(De);we=r(Ml,"past_key_values"),Ml.forEach(t),Ve=r(ue,` argument of the
`),za=s(ue,"A",{href:!0});var Gl=i(za);hc=r(Gl,"GPT2Model.forward()"),Gl.forEach(t),uc=r(ue," method, or for TF the "),$r=s(ue,"EM",{});var xl=i($r);mc=r(xl,"past"),xl.forEach(t),fc=r(ue,` argument of the
`),Ea=s(ue,"A",{href:!0});var Fl=i(Ea);gc=r(Fl,"TFGPT2Model.call()"),Fl.forEach(t),_c=r(ue," method for more information on its usage."),ue.forEach(t),Tc=u(Pt),yt=s(Pt,"LI",{});var Mt=i(yt);bc=r(Mt,"Enabling the "),Pr=s(Mt,"EM",{});var jl=i(Pr);vc=r(jl,"scale_attn_by_inverse_layer_idx"),jl.forEach(t),yc=r(Mt," and "),Mr=s(Mt,"EM",{});var zl=i(Mr);kc=r(zl,"reorder_and_upcast_attn"),zl.forEach(t),wc=r(Mt,` flags will apply the training stability
improvements from `),Cn=s(Mt,"A",{href:!0,rel:!0});var El=i(Cn);$c=r(El,"Mistral"),El.forEach(t),Pc=r(Mt," (for PyTorch only)."),Mt.forEach(t),Pt.forEach(t),Sl=u(o),Nt=s(o,"P",{});var bn=i(Nt);Dn=s(bn,"A",{href:!0,rel:!0});var ql=i(Dn);Mc=r(ql,"Write With Transformer"),ql.forEach(t),Gc=r(bn,` is a webapp created and hosted by
Hugging Face showcasing the generative capabilities of several models. GPT-2 is one of them and is available in five
different sizes: small, medium, large, xl and a distilled version of the small checkpoint: `),Gr=s(bn,"EM",{});var Cl=i(Gr);xc=r(Cl,"distilgpt-2"),Cl.forEach(t),Fc=r(bn,"."),bn.forEach(t),Il=u(o),Gt=s(o,"P",{});var fo=i(Gt);jc=r(fo,"This model was contributed by "),Nn=s(fo,"A",{href:!0,rel:!0});var Dl=i(Nn);zc=r(Dl,"thomwolf"),Dl.forEach(t),Ec=r(fo,". The original code can be found "),Hn=s(fo,"A",{href:!0,rel:!0});var Nl=i(Hn);qc=r(Nl,"here"),Nl.forEach(t),Cc=r(fo,"."),fo.forEach(t),Al=u(o),Ht=s(o,"H2",{class:!0});var ja=i(Ht);go=s(ja,"A",{id:!0,class:!0,href:!0});var Hl=i(go);xr=s(Hl,"SPAN",{});var Ll=i(xr);k(Ln.$$.fragment,Ll),Ll.forEach(t),Hl.forEach(t),Dc=u(ja),Fr=s(ja,"SPAN",{});var x_=i(Fr);Nc=r(x_,"GPT2Config"),x_.forEach(t),ja.forEach(t),Ol=u(o),at=s(o,"DIV",{class:!0});var vn=i(at);k(Sn.$$.fragment,vn),Hc=u(vn),kt=s(vn,"P",{});var yn=i(kt);Lc=r(yn,"This is the configuration class to store the configuration of a "),qa=s(yn,"A",{href:!0});var F_=i(qa);Sc=r(F_,"GPT2Model"),F_.forEach(t),Ic=r(yn," or a "),Ca=s(yn,"A",{href:!0});var j_=i(Ca);Ac=r(j_,"TFGPT2Model"),j_.forEach(t),Oc=r(yn,`. It is used to
instantiate a GPT-2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GPT-2
`),In=s(yn,"A",{href:!0,rel:!0});var z_=i(In);Wc=r(z_,"small"),z_.forEach(t),Uc=r(yn," architecture."),yn.forEach(t),Rc=u(vn),Lt=s(vn,"P",{});var cr=i(Lt);Bc=r(cr,"Configuration objects inherit from "),Da=s(cr,"A",{href:!0});var E_=i(Da);Vc=r(E_,"PretrainedConfig"),E_.forEach(t),Kc=r(cr,` and can be used to control the model outputs. Read the
documentation from `),Na=s(cr,"A",{href:!0});var q_=i(Na);Jc=r(q_,"PretrainedConfig"),q_.forEach(t),Xc=r(cr," for more information."),cr.forEach(t),Yc=u(vn),k(_o.$$.fragment,vn),vn.forEach(t),Wl=u(o),St=s(o,"H2",{class:!0});var yd=i(St);To=s(yd,"A",{id:!0,class:!0,href:!0});var C_=i(To);jr=s(C_,"SPAN",{});var D_=i(jr);k(An.$$.fragment,D_),D_.forEach(t),C_.forEach(t),Qc=u(yd),zr=s(yd,"SPAN",{});var N_=i(zr);Zc=r(N_,"GPT2Tokenizer"),N_.forEach(t),yd.forEach(t),Ul=u(o),pe=s(o,"DIV",{class:!0});var Ie=i(pe);k(On.$$.fragment,Ie),ep=u(Ie),Er=s(Ie,"P",{});var H_=i(Er);tp=r(H_,"Construct a GPT-2 tokenizer. Based on byte-level Byte-Pair-Encoding."),H_.forEach(t),op=u(Ie),qr=s(Ie,"P",{});var L_=i(qr);np=r(L_,`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),L_.forEach(t),sp=u(Ie),k(bo.$$.fragment,Ie),ap=u(Ie),Wn=s(Ie,"P",{});var kd=i(Wn);rp=r(kd,"You can get around that behavior by passing "),Cr=s(kd,"CODE",{});var S_=i(Cr);ip=r(S_,"add_prefix_space=True"),S_.forEach(t),lp=r(kd,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),kd.forEach(t),dp=u(Ie),k(vo.$$.fragment,Ie),cp=u(Ie),Un=s(Ie,"P",{});var wd=i(Un);pp=r(wd,"This tokenizer inherits from "),Ha=s(wd,"A",{href:!0});var I_=i(Ha);hp=r(I_,"PreTrainedTokenizer"),I_.forEach(t),up=r(wd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),wd.forEach(t),mp=u(Ie),La=s(Ie,"DIV",{class:!0});var A_=i(La);k(Rn.$$.fragment,A_),A_.forEach(t),Ie.forEach(t),Rl=u(o),It=s(o,"H2",{class:!0});var $d=i(It);yo=s($d,"A",{id:!0,class:!0,href:!0});var O_=i(yo);Dr=s(O_,"SPAN",{});var W_=i(Dr);k(Bn.$$.fragment,W_),W_.forEach(t),O_.forEach(t),fp=u($d),Nr=s($d,"SPAN",{});var U_=i(Nr);gp=r(U_,"GPT2TokenizerFast"),U_.forEach(t),$d.forEach(t),Bl=u(o),$e=s(o,"DIV",{class:!0});var Qe=i($e);k(Vn.$$.fragment,Qe),_p=u(Qe),Kn=s(Qe,"P",{});var Pd=i(Kn);Tp=r(Pd,"Construct a \u201Cfast\u201D GPT-2 tokenizer (backed by HuggingFace\u2019s "),Hr=s(Pd,"EM",{});var R_=i(Hr);bp=r(R_,"tokenizers"),R_.forEach(t),vp=r(Pd,` library). Based on byte-level
Byte-Pair-Encoding.`),Pd.forEach(t),yp=u(Qe),Lr=s(Qe,"P",{});var B_=i(Lr);kp=r(B_,`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),B_.forEach(t),wp=u(Qe),k(ko.$$.fragment,Qe),$p=u(Qe),Jn=s(Qe,"P",{});var Md=i(Jn);Pp=r(Md,"You can get around that behavior by passing "),Sr=s(Md,"CODE",{});var V_=i(Sr);Mp=r(V_,"add_prefix_space=True"),V_.forEach(t),Gp=r(Md,` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),Md.forEach(t),xp=u(Qe),k(wo.$$.fragment,Qe),Fp=u(Qe),Xn=s(Qe,"P",{});var Gd=i(Xn);jp=r(Gd,"This tokenizer inherits from "),Sa=s(Gd,"A",{href:!0});var K_=i(Sa);zp=r(K_,"PreTrainedTokenizerFast"),K_.forEach(t),Ep=r(Gd,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Gd.forEach(t),Qe.forEach(t),Vl=u(o),At=s(o,"H2",{class:!0});var xd=i(At);$o=s(xd,"A",{id:!0,class:!0,href:!0});var J_=i($o);Ir=s(J_,"SPAN",{});var X_=i(Ir);k(Yn.$$.fragment,X_),X_.forEach(t),J_.forEach(t),qp=u(xd),Ar=s(xd,"SPAN",{});var Y_=i(Ar);Cp=r(Y_,"GPT2 specific outputs"),Y_.forEach(t),xd.forEach(t),Kl=u(o),Ot=s(o,"DIV",{class:!0});var Fd=i(Ot);k(Qn.$$.fragment,Fd),Dp=u(Fd),Or=s(Fd,"P",{});var Q_=i(Or);Np=r(Q_,"Base class for outputs of models predicting if two sentences are consecutive or not."),Q_.forEach(t),Fd.forEach(t),Jl=u(o),Wt=s(o,"DIV",{class:!0});var jd=i(Wt);k(Zn.$$.fragment,jd),Hp=u(jd),Wr=s(jd,"P",{});var Z_=i(Wr);Lp=r(Z_,"Base class for outputs of models predicting if two sentences are consecutive or not."),Z_.forEach(t),jd.forEach(t),Xl=u(o),Ut=s(o,"H2",{class:!0});var zd=i(Ut);Po=s(zd,"A",{id:!0,class:!0,href:!0});var eT=i(Po);Ur=s(eT,"SPAN",{});var tT=i(Ur);k(es.$$.fragment,tT),tT.forEach(t),eT.forEach(t),Sp=u(zd),Rr=s(zd,"SPAN",{});var oT=i(Rr);Ip=r(oT,"GPT2Model"),oT.forEach(t),zd.forEach(t),Yl=u(o),Pe=s(o,"DIV",{class:!0});var Ze=i(Pe);k(ts.$$.fragment,Ze),Ap=u(Ze),Br=s(Ze,"P",{});var nT=i(Br);Op=r(nT,"The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),nT.forEach(t),Wp=u(Ze),os=s(Ze,"P",{});var Ed=i(os);Up=r(Ed,"This model inherits from "),Ia=s(Ed,"A",{href:!0});var sT=i(Ia);Rp=r(sT,"PreTrainedModel"),sT.forEach(t),Bp=r(Ed,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ed.forEach(t),Vp=u(Ze),ns=s(Ze,"P",{});var qd=i(ns);Kp=r(qd,"This model is also a PyTorch "),ss=s(qd,"A",{href:!0,rel:!0});var aT=i(ss);Jp=r(aT,"torch.nn.Module"),aT.forEach(t),Xp=r(qd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qd.forEach(t),Yp=u(Ze),lt=s(Ze,"DIV",{class:!0});var kn=i(lt);k(as.$$.fragment,kn),Qp=u(kn),Rt=s(kn,"P",{});var pr=i(Rt);Zp=r(pr,"The "),Aa=s(pr,"A",{href:!0});var rT=i(Aa);eh=r(rT,"GPT2Model"),rT.forEach(t),th=r(pr," forward method, overrides the "),Vr=s(pr,"CODE",{});var iT=i(Vr);oh=r(iT,"__call__"),iT.forEach(t),nh=r(pr," special method."),pr.forEach(t),sh=u(kn),k(Mo.$$.fragment,kn),ah=u(kn),k(Go.$$.fragment,kn),kn.forEach(t),rh=u(Ze),dt=s(Ze,"DIV",{class:!0});var wn=i(dt);k(rs.$$.fragment,wn),ih=u(wn),Kr=s(wn,"P",{});var lT=i(Kr);lh=r(lT,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),lT.forEach(t),dh=u(wn),Jr=s(wn,"P",{});var dT=i(Jr);ch=r(dT,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),dT.forEach(t),ph=u(wn),k(xo.$$.fragment,wn),wn.forEach(t),hh=u(Ze),xt=s(Ze,"DIV",{class:!0});var hr=i(xt);k(is.$$.fragment,hr),uh=u(hr),Xr=s(hr,"P",{});var cT=i(Xr);mh=r(cT,"Moves the model to cpu from a model parallel state."),cT.forEach(t),fh=u(hr),k(Fo.$$.fragment,hr),hr.forEach(t),Ze.forEach(t),Ql=u(o),Bt=s(o,"H2",{class:!0});var Cd=i(Bt);jo=s(Cd,"A",{id:!0,class:!0,href:!0});var pT=i(jo);Yr=s(pT,"SPAN",{});var hT=i(Yr);k(ls.$$.fragment,hT),hT.forEach(t),pT.forEach(t),gh=u(Cd),Qr=s(Cd,"SPAN",{});var uT=i(Qr);_h=r(uT,"GPT2LMHeadModel"),uT.forEach(t),Cd.forEach(t),Zl=u(o),Me=s(o,"DIV",{class:!0});var et=i(Me);k(ds.$$.fragment,et),Th=u(et),Zr=s(et,"P",{});var mT=i(Zr);bh=r(mT,`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),mT.forEach(t),vh=u(et),cs=s(et,"P",{});var Dd=i(cs);yh=r(Dd,"This model inherits from "),Oa=s(Dd,"A",{href:!0});var fT=i(Oa);kh=r(fT,"PreTrainedModel"),fT.forEach(t),wh=r(Dd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dd.forEach(t),$h=u(et),ps=s(et,"P",{});var Nd=i(ps);Ph=r(Nd,"This model is also a PyTorch "),hs=s(Nd,"A",{href:!0,rel:!0});var gT=i(hs);Mh=r(gT,"torch.nn.Module"),gT.forEach(t),Gh=r(Nd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nd.forEach(t),xh=u(et),ct=s(et,"DIV",{class:!0});var $n=i(ct);k(us.$$.fragment,$n),Fh=u($n),Vt=s($n,"P",{});var ur=i(Vt);jh=r(ur,"The "),Wa=s(ur,"A",{href:!0});var _T=i(Wa);zh=r(_T,"GPT2LMHeadModel"),_T.forEach(t),Eh=r(ur," forward method, overrides the "),ei=s(ur,"CODE",{});var TT=i(ei);qh=r(TT,"__call__"),TT.forEach(t),Ch=r(ur," special method."),ur.forEach(t),Dh=u($n),k(zo.$$.fragment,$n),Nh=u($n),k(Eo.$$.fragment,$n),$n.forEach(t),Hh=u(et),pt=s(et,"DIV",{class:!0});var Pn=i(pt);k(ms.$$.fragment,Pn),Lh=u(Pn),ti=s(Pn,"P",{});var bT=i(ti);Sh=r(bT,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),bT.forEach(t),Ih=u(Pn),oi=s(Pn,"P",{});var vT=i(oi);Ah=r(vT,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),vT.forEach(t),Oh=u(Pn),k(qo.$$.fragment,Pn),Pn.forEach(t),Wh=u(et),Ft=s(et,"DIV",{class:!0});var mr=i(Ft);k(fs.$$.fragment,mr),Uh=u(mr),ni=s(mr,"P",{});var yT=i(ni);Rh=r(yT,"Moves the model to cpu from a model parallel state."),yT.forEach(t),Bh=u(mr),k(Co.$$.fragment,mr),mr.forEach(t),et.forEach(t),ed=u(o),Kt=s(o,"H2",{class:!0});var Hd=i(Kt);Do=s(Hd,"A",{id:!0,class:!0,href:!0});var kT=i(Do);si=s(kT,"SPAN",{});var wT=i(si);k(gs.$$.fragment,wT),wT.forEach(t),kT.forEach(t),Vh=u(Hd),ai=s(Hd,"SPAN",{});var $T=i(ai);Kh=r($T,"GPT2DoubleHeadsModel"),$T.forEach(t),Hd.forEach(t),td=u(o),Ke=s(o,"DIV",{class:!0});var jt=i(Ke);k(_s.$$.fragment,jt),Jh=u(jt),ri=s(jt,"P",{});var PT=i(ri);Xh=r(PT,`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),PT.forEach(t),Yh=u(jt),Ts=s(jt,"P",{});var Ld=i(Ts);Qh=r(Ld,"This model inherits from "),Ua=s(Ld,"A",{href:!0});var MT=i(Ua);Zh=r(MT,"PreTrainedModel"),MT.forEach(t),eu=r(Ld,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ld.forEach(t),tu=u(jt),bs=s(jt,"P",{});var Sd=i(bs);ou=r(Sd,"This model is also a PyTorch "),vs=s(Sd,"A",{href:!0,rel:!0});var GT=i(vs);nu=r(GT,"torch.nn.Module"),GT.forEach(t),su=r(Sd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sd.forEach(t),au=u(jt),ht=s(jt,"DIV",{class:!0});var Mn=i(ht);k(ys.$$.fragment,Mn),ru=u(Mn),Jt=s(Mn,"P",{});var fr=i(Jt);iu=r(fr,"The "),Ra=s(fr,"A",{href:!0});var xT=i(Ra);lu=r(xT,"GPT2DoubleHeadsModel"),xT.forEach(t),du=r(fr," forward method, overrides the "),ii=s(fr,"CODE",{});var FT=i(ii);cu=r(FT,"__call__"),FT.forEach(t),pu=r(fr," special method."),fr.forEach(t),hu=u(Mn),k(No.$$.fragment,Mn),uu=u(Mn),k(Ho.$$.fragment,Mn),Mn.forEach(t),jt.forEach(t),od=u(o),Xt=s(o,"H2",{class:!0});var Id=i(Xt);Lo=s(Id,"A",{id:!0,class:!0,href:!0});var jT=i(Lo);li=s(jT,"SPAN",{});var zT=i(li);k(ks.$$.fragment,zT),zT.forEach(t),jT.forEach(t),mu=u(Id),di=s(Id,"SPAN",{});var ET=i(di);fu=r(ET,"GPT2ForSequenceClassification"),ET.forEach(t),Id.forEach(t),nd=u(o),Ge=s(o,"DIV",{class:!0});var tt=i(Ge);k(ws.$$.fragment,tt),gu=u(tt),ci=s(tt,"P",{});var qT=i(ci);_u=r(qT,"The GPT2 Model transformer with a sequence classification head on top (linear layer)."),qT.forEach(t),Tu=u(tt),Ba=s(tt,"P",{});var M_=i(Ba);Va=s(M_,"A",{href:!0});var CT=i(Va);bu=r(CT,"GPT2ForSequenceClassification"),CT.forEach(t),vu=r(M_,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),M_.forEach(t),yu=u(tt),rt=s(tt,"P",{});var zt=i(rt);ku=r(zt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),pi=s(zt,"CODE",{});var DT=i(pi);wu=r(DT,"pad_token_id"),DT.forEach(t),$u=r(zt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),hi=s(zt,"CODE",{});var NT=i(hi);Pu=r(NT,"pad_token_id"),NT.forEach(t),Mu=r(zt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),ui=s(zt,"CODE",{});var HT=i(ui);Gu=r(HT,"inputs_embeds"),HT.forEach(t),xu=r(zt," are passed instead of "),mi=s(zt,"CODE",{});var LT=i(mi);Fu=r(LT,"input_ids"),LT.forEach(t),ju=r(zt,`, it does the same (take the last value in
each row of the batch).`),zt.forEach(t),zu=u(tt),$s=s(tt,"P",{});var Ad=i($s);Eu=r(Ad,"This model inherits from "),Ka=s(Ad,"A",{href:!0});var ST=i(Ka);qu=r(ST,"PreTrainedModel"),ST.forEach(t),Cu=r(Ad,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ad.forEach(t),Du=u(tt),Ps=s(tt,"P",{});var Od=i(Ps);Nu=r(Od,"This model is also a PyTorch "),Ms=s(Od,"A",{href:!0,rel:!0});var IT=i(Ms);Hu=r(IT,"torch.nn.Module"),IT.forEach(t),Lu=r(Od,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Od.forEach(t),Su=u(tt),je=s(tt,"DIV",{class:!0});var ot=i(je);k(Gs.$$.fragment,ot),Iu=u(ot),Yt=s(ot,"P",{});var gr=i(Yt);Au=r(gr,"The "),Ja=s(gr,"A",{href:!0});var AT=i(Ja);Ou=r(AT,"GPT2ForSequenceClassification"),AT.forEach(t),Wu=r(gr," forward method, overrides the "),fi=s(gr,"CODE",{});var OT=i(fi);Uu=r(OT,"__call__"),OT.forEach(t),Ru=r(gr," special method."),gr.forEach(t),Bu=u(ot),k(So.$$.fragment,ot),Vu=u(ot),k(Io.$$.fragment,ot),Ku=u(ot),k(Ao.$$.fragment,ot),Ju=u(ot),k(Oo.$$.fragment,ot),Xu=u(ot),k(Wo.$$.fragment,ot),ot.forEach(t),tt.forEach(t),sd=u(o),Qt=s(o,"H2",{class:!0});var Wd=i(Qt);Uo=s(Wd,"A",{id:!0,class:!0,href:!0});var WT=i(Uo);gi=s(WT,"SPAN",{});var UT=i(gi);k(xs.$$.fragment,UT),UT.forEach(t),WT.forEach(t),Yu=u(Wd),_i=s(Wd,"SPAN",{});var RT=i(_i);Qu=r(RT,"GPT2ForTokenClassification"),RT.forEach(t),Wd.forEach(t),ad=u(o),Je=s(o,"DIV",{class:!0});var Et=i(Je);k(Fs.$$.fragment,Et),Zu=u(Et),Ti=s(Et,"P",{});var BT=i(Ti);em=r(BT,`GPT2 Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),BT.forEach(t),tm=u(Et),js=s(Et,"P",{});var Ud=i(js);om=r(Ud,"This model inherits from "),Xa=s(Ud,"A",{href:!0});var VT=i(Xa);nm=r(VT,"PreTrainedModel"),VT.forEach(t),sm=r(Ud,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ud.forEach(t),am=u(Et),zs=s(Et,"P",{});var Rd=i(zs);rm=r(Rd,"This model is also a PyTorch "),Es=s(Rd,"A",{href:!0,rel:!0});var KT=i(Es);im=r(KT,"torch.nn.Module"),KT.forEach(t),lm=r(Rd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rd.forEach(t),dm=u(Et),Xe=s(Et,"DIV",{class:!0});var qt=i(Xe);k(qs.$$.fragment,qt),cm=u(qt),Zt=s(qt,"P",{});var _r=i(Zt);pm=r(_r,"The "),Ya=s(_r,"A",{href:!0});var JT=i(Ya);hm=r(JT,"GPT2ForTokenClassification"),JT.forEach(t),um=r(_r," forward method, overrides the "),bi=s(_r,"CODE",{});var XT=i(bi);mm=r(XT,"__call__"),XT.forEach(t),fm=r(_r," special method."),_r.forEach(t),gm=u(qt),k(Ro.$$.fragment,qt),_m=u(qt),k(Bo.$$.fragment,qt),Tm=u(qt),k(Vo.$$.fragment,qt),qt.forEach(t),Et.forEach(t),rd=u(o),eo=s(o,"H2",{class:!0});var Bd=i(eo);Ko=s(Bd,"A",{id:!0,class:!0,href:!0});var YT=i(Ko);vi=s(YT,"SPAN",{});var QT=i(vi);k(Cs.$$.fragment,QT),QT.forEach(t),YT.forEach(t),bm=u(Bd),yi=s(Bd,"SPAN",{});var ZT=i(yi);vm=r(ZT,"TFGPT2Model"),ZT.forEach(t),Bd.forEach(t),id=u(o),Ne=s(o,"DIV",{class:!0});var Tt=i(Ne);k(Ds.$$.fragment,Tt),ym=u(Tt),ki=s(Tt,"P",{});var e2=i(ki);km=r(e2,"The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),e2.forEach(t),wm=u(Tt),Ns=s(Tt,"P",{});var Vd=i(Ns);$m=r(Vd,"This model inherits from "),Qa=s(Vd,"A",{href:!0});var t2=i(Qa);Pm=r(t2,"TFPreTrainedModel"),t2.forEach(t),Mm=r(Vd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vd.forEach(t),Gm=u(Tt),Hs=s(Tt,"P",{});var Kd=i(Hs);xm=r(Kd,"This model is also a "),Ls=s(Kd,"A",{href:!0,rel:!0});var o2=i(Ls);Fm=r(o2,"tf.keras.Model"),o2.forEach(t),jm=r(Kd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kd.forEach(t),zm=u(Tt),k(Jo.$$.fragment,Tt),Em=u(Tt),ut=s(Tt,"DIV",{class:!0});var Gn=i(ut);k(Ss.$$.fragment,Gn),qm=u(Gn),to=s(Gn,"P",{});var Tr=i(to);Cm=r(Tr,"The "),Za=s(Tr,"A",{href:!0});var n2=i(Za);Dm=r(n2,"TFGPT2Model"),n2.forEach(t),Nm=r(Tr," forward method, overrides the "),wi=s(Tr,"CODE",{});var s2=i(wi);Hm=r(s2,"__call__"),s2.forEach(t),Lm=r(Tr," special method."),Tr.forEach(t),Sm=u(Gn),k(Xo.$$.fragment,Gn),Im=u(Gn),k(Yo.$$.fragment,Gn),Gn.forEach(t),Tt.forEach(t),ld=u(o),oo=s(o,"H2",{class:!0});var Jd=i(oo);Qo=s(Jd,"A",{id:!0,class:!0,href:!0});var a2=i(Qo);$i=s(a2,"SPAN",{});var r2=i($i);k(Is.$$.fragment,r2),r2.forEach(t),a2.forEach(t),Am=u(Jd),Pi=s(Jd,"SPAN",{});var i2=i(Pi);Om=r(i2,"TFGPT2LMHeadModel"),i2.forEach(t),Jd.forEach(t),dd=u(o),He=s(o,"DIV",{class:!0});var bt=i(He);k(As.$$.fragment,bt),Wm=u(bt),Mi=s(bt,"P",{});var l2=i(Mi);Um=r(l2,`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),l2.forEach(t),Rm=u(bt),Os=s(bt,"P",{});var Xd=i(Os);Bm=r(Xd,"This model inherits from "),er=s(Xd,"A",{href:!0});var d2=i(er);Vm=r(d2,"TFPreTrainedModel"),d2.forEach(t),Km=r(Xd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xd.forEach(t),Jm=u(bt),Ws=s(bt,"P",{});var Yd=i(Ws);Xm=r(Yd,"This model is also a "),Us=s(Yd,"A",{href:!0,rel:!0});var c2=i(Us);Ym=r(c2,"tf.keras.Model"),c2.forEach(t),Qm=r(Yd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yd.forEach(t),Zm=u(bt),k(Zo.$$.fragment,bt),ef=u(bt),mt=s(bt,"DIV",{class:!0});var xn=i(mt);k(Rs.$$.fragment,xn),tf=u(xn),no=s(xn,"P",{});var br=i(no);of=r(br,"The "),tr=s(br,"A",{href:!0});var p2=i(tr);nf=r(p2,"TFGPT2LMHeadModel"),p2.forEach(t),sf=r(br," forward method, overrides the "),Gi=s(br,"CODE",{});var h2=i(Gi);af=r(h2,"__call__"),h2.forEach(t),rf=r(br," special method."),br.forEach(t),lf=u(xn),k(en.$$.fragment,xn),df=u(xn),k(tn.$$.fragment,xn),xn.forEach(t),bt.forEach(t),cd=u(o),so=s(o,"H2",{class:!0});var Qd=i(so);on=s(Qd,"A",{id:!0,class:!0,href:!0});var u2=i(on);xi=s(u2,"SPAN",{});var m2=i(xi);k(Bs.$$.fragment,m2),m2.forEach(t),u2.forEach(t),cf=u(Qd),Fi=s(Qd,"SPAN",{});var f2=i(Fi);pf=r(f2,"TFGPT2DoubleHeadsModel"),f2.forEach(t),Qd.forEach(t),pd=u(o),Le=s(o,"DIV",{class:!0});var vt=i(Le);k(Vs.$$.fragment,vt),hf=u(vt),ji=s(vt,"P",{});var g2=i(ji);uf=r(g2,`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),g2.forEach(t),mf=u(vt),Ks=s(vt,"P",{});var Zd=i(Ks);ff=r(Zd,"This model inherits from "),or=s(Zd,"A",{href:!0});var _2=i(or);gf=r(_2,"TFPreTrainedModel"),_2.forEach(t),_f=r(Zd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zd.forEach(t),Tf=u(vt),Js=s(vt,"P",{});var ec=i(Js);bf=r(ec,"This model is also a "),Xs=s(ec,"A",{href:!0,rel:!0});var T2=i(Xs);vf=r(T2,"tf.keras.Model"),T2.forEach(t),yf=r(ec,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ec.forEach(t),kf=u(vt),k(nn.$$.fragment,vt),wf=u(vt),ft=s(vt,"DIV",{class:!0});var Fn=i(ft);k(Ys.$$.fragment,Fn),$f=u(Fn),ao=s(Fn,"P",{});var vr=i(ao);Pf=r(vr,"The "),nr=s(vr,"A",{href:!0});var b2=i(nr);Mf=r(b2,"TFGPT2DoubleHeadsModel"),b2.forEach(t),Gf=r(vr," forward method, overrides the "),zi=s(vr,"CODE",{});var v2=i(zi);xf=r(v2,"__call__"),v2.forEach(t),Ff=r(vr," special method."),vr.forEach(t),jf=u(Fn),k(sn.$$.fragment,Fn),zf=u(Fn),k(an.$$.fragment,Fn),Fn.forEach(t),vt.forEach(t),hd=u(o),ro=s(o,"H2",{class:!0});var tc=i(ro);rn=s(tc,"A",{id:!0,class:!0,href:!0});var y2=i(rn);Ei=s(y2,"SPAN",{});var k2=i(Ei);k(Qs.$$.fragment,k2),k2.forEach(t),y2.forEach(t),Ef=u(tc),qi=s(tc,"SPAN",{});var w2=i(qi);qf=r(w2,"TFGPT2ForSequenceClassification"),w2.forEach(t),tc.forEach(t),ud=u(o),he=s(o,"DIV",{class:!0});var Ae=i(he);k(Zs.$$.fragment,Ae),Cf=u(Ae),Ci=s(Ae,"P",{});var $2=i(Ci);Df=r($2,"The GPT2 Model transformer with a sequence classification head on top (linear layer)."),$2.forEach(t),Nf=u(Ae),sr=s(Ae,"P",{});var G_=i(sr);ar=s(G_,"A",{href:!0});var P2=i(ar);Hf=r(P2,"TFGPT2ForSequenceClassification"),P2.forEach(t),Lf=r(G_,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`),G_.forEach(t),Sf=u(Ae),it=s(Ae,"P",{});var Ct=i(it);If=r(Ct,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Di=s(Ct,"CODE",{});var M2=i(Di);Af=r(M2,"pad_token_id"),M2.forEach(t),Of=r(Ct,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ni=s(Ct,"CODE",{});var G2=i(Ni);Wf=r(G2,"pad_token_id"),G2.forEach(t),Uf=r(Ct,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Hi=s(Ct,"CODE",{});var x2=i(Hi);Rf=r(x2,"inputs_embeds"),x2.forEach(t),Bf=r(Ct," are passed instead of "),Li=s(Ct,"CODE",{});var F2=i(Li);Vf=r(F2,"input_ids"),F2.forEach(t),Kf=r(Ct,`, it does the same (take the last value in
each row of the batch).`),Ct.forEach(t),Jf=u(Ae),ea=s(Ae,"P",{});var oc=i(ea);Xf=r(oc,"This model inherits from "),rr=s(oc,"A",{href:!0});var j2=i(rr);Yf=r(j2,"TFPreTrainedModel"),j2.forEach(t),Qf=r(oc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oc.forEach(t),Zf=u(Ae),ta=s(Ae,"P",{});var nc=i(ta);eg=r(nc,"This model is also a "),oa=s(nc,"A",{href:!0,rel:!0});var z2=i(oa);tg=r(z2,"tf.keras.Model"),z2.forEach(t),og=r(nc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nc.forEach(t),ng=u(Ae),k(ln.$$.fragment,Ae),sg=u(Ae),Ye=s(Ae,"DIV",{class:!0});var Dt=i(Ye);k(na.$$.fragment,Dt),ag=u(Dt),io=s(Dt,"P",{});var yr=i(io);rg=r(yr,"The "),ir=s(yr,"A",{href:!0});var E2=i(ir);ig=r(E2,"TFGPT2ForSequenceClassification"),E2.forEach(t),lg=r(yr," forward method, overrides the "),Si=s(yr,"CODE",{});var q2=i(Si);dg=r(q2,"__call__"),q2.forEach(t),cg=r(yr," special method."),yr.forEach(t),pg=u(Dt),k(dn.$$.fragment,Dt),hg=u(Dt),k(cn.$$.fragment,Dt),ug=u(Dt),k(pn.$$.fragment,Dt),Dt.forEach(t),Ae.forEach(t),md=u(o),lo=s(o,"H2",{class:!0});var sc=i(lo);hn=s(sc,"A",{id:!0,class:!0,href:!0});var C2=i(hn);Ii=s(C2,"SPAN",{});var D2=i(Ii);k(sa.$$.fragment,D2),D2.forEach(t),C2.forEach(t),mg=u(sc),Ai=s(sc,"SPAN",{});var N2=i(Ai);fg=r(N2,"TFSequenceClassifierOutputWithPast"),N2.forEach(t),sc.forEach(t),fd=u(o),co=s(o,"DIV",{class:!0});var ac=i(co);k(aa.$$.fragment,ac),gg=u(ac),Oi=s(ac,"P",{});var H2=i(Oi);_g=r(H2,"Base class for outputs of sentence classification models."),H2.forEach(t),ac.forEach(t),gd=u(o),po=s(o,"H2",{class:!0});var rc=i(po);un=s(rc,"A",{id:!0,class:!0,href:!0});var L2=i(un);Wi=s(L2,"SPAN",{});var S2=i(Wi);k(ra.$$.fragment,S2),S2.forEach(t),L2.forEach(t),Tg=u(rc),Ui=s(rc,"SPAN",{});var I2=i(Ui);bg=r(I2,"FlaxGPT2Model"),I2.forEach(t),rc.forEach(t),_d=u(o),xe=s(o,"DIV",{class:!0});var nt=i(xe);k(ia.$$.fragment,nt),vg=u(nt),Ri=s(nt,"P",{});var A2=i(Ri);yg=r(A2,"The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top."),A2.forEach(t),kg=u(nt),la=s(nt,"P",{});var ic=i(la);wg=r(ic,"This model inherits from "),lr=s(ic,"A",{href:!0});var O2=i(lr);$g=r(O2,"FlaxPreTrainedModel"),O2.forEach(t),Pg=r(ic,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ic.forEach(t),Mg=u(nt),da=s(nt,"P",{});var lc=i(da);Gg=r(lc,`This model is also a Flax Linen
`),ca=s(lc,"A",{href:!0,rel:!0});var W2=i(ca);xg=r(W2,"flax.nn.Module"),W2.forEach(t),Fg=r(lc,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),lc.forEach(t),jg=u(nt),Bi=s(nt,"P",{});var U2=i(Bi);zg=r(U2,"Finally, this model supports inherent JAX features such as:"),U2.forEach(t),Eg=u(nt),wt=s(nt,"UL",{});var jn=i(wt);Vi=s(jn,"LI",{});var R2=i(Vi);pa=s(R2,"A",{href:!0,rel:!0});var B2=i(pa);qg=r(B2,"Just-In-Time (JIT) compilation"),B2.forEach(t),R2.forEach(t),Cg=u(jn),Ki=s(jn,"LI",{});var V2=i(Ki);ha=s(V2,"A",{href:!0,rel:!0});var K2=i(ha);Dg=r(K2,"Automatic Differentiation"),K2.forEach(t),V2.forEach(t),Ng=u(jn),Ji=s(jn,"LI",{});var J2=i(Ji);ua=s(J2,"A",{href:!0,rel:!0});var X2=i(ua);Hg=r(X2,"Vectorization"),X2.forEach(t),J2.forEach(t),Lg=u(jn),Xi=s(jn,"LI",{});var Y2=i(Xi);ma=s(Y2,"A",{href:!0,rel:!0});var Q2=i(ma);Sg=r(Q2,"Parallelization"),Q2.forEach(t),Y2.forEach(t),jn.forEach(t),Ig=u(nt),gt=s(nt,"DIV",{class:!0});var zn=i(gt);k(fa.$$.fragment,zn),Ag=u(zn),ho=s(zn,"P",{});var kr=i(ho);Og=r(kr,"The "),Yi=s(kr,"CODE",{});var Z2=i(Yi);Wg=r(Z2,"FlaxGPT2PreTrainedModel"),Z2.forEach(t),Ug=r(kr," forward method, overrides the "),Qi=s(kr,"CODE",{});var eb=i(Qi);Rg=r(eb,"__call__"),eb.forEach(t),Bg=r(kr," special method."),kr.forEach(t),Vg=u(zn),k(mn.$$.fragment,zn),Kg=u(zn),k(fn.$$.fragment,zn),zn.forEach(t),nt.forEach(t),Td=u(o),uo=s(o,"H2",{class:!0});var dc=i(uo);gn=s(dc,"A",{id:!0,class:!0,href:!0});var tb=i(gn);Zi=s(tb,"SPAN",{});var ob=i(Zi);k(ga.$$.fragment,ob),ob.forEach(t),tb.forEach(t),Jg=u(dc),el=s(dc,"SPAN",{});var nb=i(el);Xg=r(nb,"FlaxGPT2LMHeadModel"),nb.forEach(t),dc.forEach(t),bd=u(o),Fe=s(o,"DIV",{class:!0});var st=i(Fe);k(_a.$$.fragment,st),Yg=u(st),tl=s(st,"P",{});var sb=i(tl);Qg=r(sb,`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),sb.forEach(t),Zg=u(st),Ta=s(st,"P",{});var cc=i(Ta);e_=r(cc,"This model inherits from "),dr=s(cc,"A",{href:!0});var ab=i(dr);t_=r(ab,"FlaxPreTrainedModel"),ab.forEach(t),o_=r(cc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cc.forEach(t),n_=u(st),ba=s(st,"P",{});var pc=i(ba);s_=r(pc,`This model is also a Flax Linen
`),va=s(pc,"A",{href:!0,rel:!0});var rb=i(va);a_=r(rb,"flax.nn.Module"),rb.forEach(t),r_=r(pc,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),pc.forEach(t),i_=u(st),ol=s(st,"P",{});var ib=i(ol);l_=r(ib,"Finally, this model supports inherent JAX features such as:"),ib.forEach(t),d_=u(st),$t=s(st,"UL",{});var En=i($t);nl=s(En,"LI",{});var lb=i(nl);ya=s(lb,"A",{href:!0,rel:!0});var db=i(ya);c_=r(db,"Just-In-Time (JIT) compilation"),db.forEach(t),lb.forEach(t),p_=u(En),sl=s(En,"LI",{});var cb=i(sl);ka=s(cb,"A",{href:!0,rel:!0});var pb=i(ka);h_=r(pb,"Automatic Differentiation"),pb.forEach(t),cb.forEach(t),u_=u(En),al=s(En,"LI",{});var hb=i(al);wa=s(hb,"A",{href:!0,rel:!0});var ub=i(wa);m_=r(ub,"Vectorization"),ub.forEach(t),hb.forEach(t),f_=u(En),rl=s(En,"LI",{});var mb=i(rl);$a=s(mb,"A",{href:!0,rel:!0});var fb=i($a);g_=r(fb,"Parallelization"),fb.forEach(t),mb.forEach(t),En.forEach(t),__=u(st),_t=s(st,"DIV",{class:!0});var qn=i(_t);k(Pa.$$.fragment,qn),T_=u(qn),mo=s(qn,"P",{});var wr=i(mo);b_=r(wr,"The "),il=s(wr,"CODE",{});var gb=i(il);v_=r(gb,"FlaxGPT2PreTrainedModel"),gb.forEach(t),y_=r(wr," forward method, overrides the "),ll=s(wr,"CODE",{});var _b=i(ll);k_=r(_b,"__call__"),_b.forEach(t),w_=r(wr," special method."),wr.forEach(t),$_=u(qn),k(_n.$$.fragment,qn),P_=u(qn),k(Tn.$$.fragment,qn),qn.forEach(t),st.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(cv)),f(p,"id","openai-gpt2"),f(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(p,"href","#openai-gpt2"),f(c,"class","relative group"),f(B,"id","overview"),f(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(B,"href","#overview"),f(j,"class","relative group"),f(ee,"href","https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf"),f(ee,"rel","nofollow"),f(za,"href","/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Model.forward"),f(Ea,"href","/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.TFGPT2Model.call"),f(Cn,"href","https://github.com/stanford-crfm/mistral/"),f(Cn,"rel","nofollow"),f(Dn,"href","https://transformer.huggingface.co/doc/gpt2-large"),f(Dn,"rel","nofollow"),f(Nn,"href","https://huggingface.co/thomwolf"),f(Nn,"rel","nofollow"),f(Hn,"href","https://openai.com/blog/better-language-models/"),f(Hn,"rel","nofollow"),f(go,"id","transformers.GPT2Config"),f(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(go,"href","#transformers.GPT2Config"),f(Ht,"class","relative group"),f(qa,"href","/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Model"),f(Ca,"href","/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.TFGPT2Model"),f(In,"href","https://huggingface.co/gpt2"),f(In,"rel","nofollow"),f(Da,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),f(Na,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),f(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(To,"id","transformers.GPT2Tokenizer"),f(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(To,"href","#transformers.GPT2Tokenizer"),f(St,"class","relative group"),f(Ha,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(La,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(yo,"id","transformers.GPT2TokenizerFast"),f(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(yo,"href","#transformers.GPT2TokenizerFast"),f(It,"class","relative group"),f(Sa,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($o,"id","transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"),f($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f($o,"href","#transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"),f(At,"class","relative group"),f(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Po,"id","transformers.GPT2Model"),f(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Po,"href","#transformers.GPT2Model"),f(Ut,"class","relative group"),f(Ia,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),f(ss,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ss,"rel","nofollow"),f(Aa,"href","/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2Model"),f(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(jo,"id","transformers.GPT2LMHeadModel"),f(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(jo,"href","#transformers.GPT2LMHeadModel"),f(Bt,"class","relative group"),f(Oa,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),f(hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(hs,"rel","nofollow"),f(Wa,"href","/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2LMHeadModel"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Do,"id","transformers.GPT2DoubleHeadsModel"),f(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Do,"href","#transformers.GPT2DoubleHeadsModel"),f(Kt,"class","relative group"),f(Ua,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),f(vs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(vs,"rel","nofollow"),f(Ra,"href","/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel"),f(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Lo,"id","transformers.GPT2ForSequenceClassification"),f(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Lo,"href","#transformers.GPT2ForSequenceClassification"),f(Xt,"class","relative group"),f(Va,"href","/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2ForSequenceClassification"),f(Ka,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),f(Ms,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ms,"rel","nofollow"),f(Ja,"href","/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2ForSequenceClassification"),f(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Uo,"id","transformers.GPT2ForTokenClassification"),f(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Uo,"href","#transformers.GPT2ForTokenClassification"),f(Qt,"class","relative group"),f(Xa,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),f(Es,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Es,"rel","nofollow"),f(Ya,"href","/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.GPT2ForTokenClassification"),f(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ko,"id","transformers.TFGPT2Model"),f(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ko,"href","#transformers.TFGPT2Model"),f(eo,"class","relative group"),f(Qa,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),f(Ls,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Ls,"rel","nofollow"),f(Za,"href","/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.TFGPT2Model"),f(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qo,"id","transformers.TFGPT2LMHeadModel"),f(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Qo,"href","#transformers.TFGPT2LMHeadModel"),f(oo,"class","relative group"),f(er,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),f(Us,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Us,"rel","nofollow"),f(tr,"href","/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.TFGPT2LMHeadModel"),f(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(on,"id","transformers.TFGPT2DoubleHeadsModel"),f(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(on,"href","#transformers.TFGPT2DoubleHeadsModel"),f(so,"class","relative group"),f(or,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),f(Xs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Xs,"rel","nofollow"),f(nr,"href","/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel"),f(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rn,"id","transformers.TFGPT2ForSequenceClassification"),f(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(rn,"href","#transformers.TFGPT2ForSequenceClassification"),f(ro,"class","relative group"),f(ar,"href","/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.TFGPT2ForSequenceClassification"),f(rr,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),f(oa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(oa,"rel","nofollow"),f(ir,"href","/docs/transformers/pr_highlight/en/model_doc/gpt2#transformers.TFGPT2ForSequenceClassification"),f(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(hn,"id","transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"),f(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(hn,"href","#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"),f(lo,"class","relative group"),f(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(un,"id","transformers.FlaxGPT2Model"),f(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(un,"href","#transformers.FlaxGPT2Model"),f(po,"class","relative group"),f(lr,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(ca,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(ca,"rel","nofollow"),f(pa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(pa,"rel","nofollow"),f(ha,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ha,"rel","nofollow"),f(ua,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(ua,"rel","nofollow"),f(ma,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(ma,"rel","nofollow"),f(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(gn,"id","transformers.FlaxGPT2LMHeadModel"),f(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(gn,"href","#transformers.FlaxGPT2LMHeadModel"),f(uo,"class","relative group"),f(dr,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(va,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(va,"rel","nofollow"),f(ya,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(ya,"rel","nofollow"),f(ka,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ka,"rel","nofollow"),f(wa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(wa,"rel","nofollow"),f($a,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f($a,"rel","nofollow"),f(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,d),T(o,g,_),T(o,c,_),e(c,p),e(p,b),w(l,b,null),e(c,m),e(c,F),e(F,Q),T(o,C,_),T(o,j,_),e(j,B),e(B,I),w(Z,I,null),e(j,_e),e(j,A),e(A,Te),T(o,me,_),T(o,W,_),e(W,H),e(W,ee),e(ee,te),e(W,z),T(o,q,_),T(o,ie,_),e(ie,V),T(o,fe,_),T(o,le,_),e(le,O),e(O,be),T(o,ge,_),T(o,E,_),e(E,ve),T(o,U,_),T(o,R,_),e(R,de),e(de,K),e(R,ye),e(R,oe),e(oe,L),e(oe,ce),e(ce,J),e(oe,ke),e(R,v),e(R,x),e(x,ne),e(x,Ee),e(Ee,Oe),e(x,S),e(x,qe),e(qe,We),e(x,Ue),e(x,D),e(D,X),e(x,Re),e(x,Ce),e(Ce,Y),e(x,Be),e(x,De),e(De,we),e(x,Ve),e(x,za),e(za,hc),e(x,uc),e(x,$r),e($r,mc),e(x,fc),e(x,Ea),e(Ea,gc),e(x,_c),e(R,Tc),e(R,yt),e(yt,bc),e(yt,Pr),e(Pr,vc),e(yt,yc),e(yt,Mr),e(Mr,kc),e(yt,wc),e(yt,Cn),e(Cn,$c),e(yt,Pc),T(o,Sl,_),T(o,Nt,_),e(Nt,Dn),e(Dn,Mc),e(Nt,Gc),e(Nt,Gr),e(Gr,xc),e(Nt,Fc),T(o,Il,_),T(o,Gt,_),e(Gt,jc),e(Gt,Nn),e(Nn,zc),e(Gt,Ec),e(Gt,Hn),e(Hn,qc),e(Gt,Cc),T(o,Al,_),T(o,Ht,_),e(Ht,go),e(go,xr),w(Ln,xr,null),e(Ht,Dc),e(Ht,Fr),e(Fr,Nc),T(o,Ol,_),T(o,at,_),w(Sn,at,null),e(at,Hc),e(at,kt),e(kt,Lc),e(kt,qa),e(qa,Sc),e(kt,Ic),e(kt,Ca),e(Ca,Ac),e(kt,Oc),e(kt,In),e(In,Wc),e(kt,Uc),e(at,Rc),e(at,Lt),e(Lt,Bc),e(Lt,Da),e(Da,Vc),e(Lt,Kc),e(Lt,Na),e(Na,Jc),e(Lt,Xc),e(at,Yc),w(_o,at,null),T(o,Wl,_),T(o,St,_),e(St,To),e(To,jr),w(An,jr,null),e(St,Qc),e(St,zr),e(zr,Zc),T(o,Ul,_),T(o,pe,_),w(On,pe,null),e(pe,ep),e(pe,Er),e(Er,tp),e(pe,op),e(pe,qr),e(qr,np),e(pe,sp),w(bo,pe,null),e(pe,ap),e(pe,Wn),e(Wn,rp),e(Wn,Cr),e(Cr,ip),e(Wn,lp),e(pe,dp),w(vo,pe,null),e(pe,cp),e(pe,Un),e(Un,pp),e(Un,Ha),e(Ha,hp),e(Un,up),e(pe,mp),e(pe,La),w(Rn,La,null),T(o,Rl,_),T(o,It,_),e(It,yo),e(yo,Dr),w(Bn,Dr,null),e(It,fp),e(It,Nr),e(Nr,gp),T(o,Bl,_),T(o,$e,_),w(Vn,$e,null),e($e,_p),e($e,Kn),e(Kn,Tp),e(Kn,Hr),e(Hr,bp),e(Kn,vp),e($e,yp),e($e,Lr),e(Lr,kp),e($e,wp),w(ko,$e,null),e($e,$p),e($e,Jn),e(Jn,Pp),e(Jn,Sr),e(Sr,Mp),e(Jn,Gp),e($e,xp),w(wo,$e,null),e($e,Fp),e($e,Xn),e(Xn,jp),e(Xn,Sa),e(Sa,zp),e(Xn,Ep),T(o,Vl,_),T(o,At,_),e(At,$o),e($o,Ir),w(Yn,Ir,null),e(At,qp),e(At,Ar),e(Ar,Cp),T(o,Kl,_),T(o,Ot,_),w(Qn,Ot,null),e(Ot,Dp),e(Ot,Or),e(Or,Np),T(o,Jl,_),T(o,Wt,_),w(Zn,Wt,null),e(Wt,Hp),e(Wt,Wr),e(Wr,Lp),T(o,Xl,_),T(o,Ut,_),e(Ut,Po),e(Po,Ur),w(es,Ur,null),e(Ut,Sp),e(Ut,Rr),e(Rr,Ip),T(o,Yl,_),T(o,Pe,_),w(ts,Pe,null),e(Pe,Ap),e(Pe,Br),e(Br,Op),e(Pe,Wp),e(Pe,os),e(os,Up),e(os,Ia),e(Ia,Rp),e(os,Bp),e(Pe,Vp),e(Pe,ns),e(ns,Kp),e(ns,ss),e(ss,Jp),e(ns,Xp),e(Pe,Yp),e(Pe,lt),w(as,lt,null),e(lt,Qp),e(lt,Rt),e(Rt,Zp),e(Rt,Aa),e(Aa,eh),e(Rt,th),e(Rt,Vr),e(Vr,oh),e(Rt,nh),e(lt,sh),w(Mo,lt,null),e(lt,ah),w(Go,lt,null),e(Pe,rh),e(Pe,dt),w(rs,dt,null),e(dt,ih),e(dt,Kr),e(Kr,lh),e(dt,dh),e(dt,Jr),e(Jr,ch),e(dt,ph),w(xo,dt,null),e(Pe,hh),e(Pe,xt),w(is,xt,null),e(xt,uh),e(xt,Xr),e(Xr,mh),e(xt,fh),w(Fo,xt,null),T(o,Ql,_),T(o,Bt,_),e(Bt,jo),e(jo,Yr),w(ls,Yr,null),e(Bt,gh),e(Bt,Qr),e(Qr,_h),T(o,Zl,_),T(o,Me,_),w(ds,Me,null),e(Me,Th),e(Me,Zr),e(Zr,bh),e(Me,vh),e(Me,cs),e(cs,yh),e(cs,Oa),e(Oa,kh),e(cs,wh),e(Me,$h),e(Me,ps),e(ps,Ph),e(ps,hs),e(hs,Mh),e(ps,Gh),e(Me,xh),e(Me,ct),w(us,ct,null),e(ct,Fh),e(ct,Vt),e(Vt,jh),e(Vt,Wa),e(Wa,zh),e(Vt,Eh),e(Vt,ei),e(ei,qh),e(Vt,Ch),e(ct,Dh),w(zo,ct,null),e(ct,Nh),w(Eo,ct,null),e(Me,Hh),e(Me,pt),w(ms,pt,null),e(pt,Lh),e(pt,ti),e(ti,Sh),e(pt,Ih),e(pt,oi),e(oi,Ah),e(pt,Oh),w(qo,pt,null),e(Me,Wh),e(Me,Ft),w(fs,Ft,null),e(Ft,Uh),e(Ft,ni),e(ni,Rh),e(Ft,Bh),w(Co,Ft,null),T(o,ed,_),T(o,Kt,_),e(Kt,Do),e(Do,si),w(gs,si,null),e(Kt,Vh),e(Kt,ai),e(ai,Kh),T(o,td,_),T(o,Ke,_),w(_s,Ke,null),e(Ke,Jh),e(Ke,ri),e(ri,Xh),e(Ke,Yh),e(Ke,Ts),e(Ts,Qh),e(Ts,Ua),e(Ua,Zh),e(Ts,eu),e(Ke,tu),e(Ke,bs),e(bs,ou),e(bs,vs),e(vs,nu),e(bs,su),e(Ke,au),e(Ke,ht),w(ys,ht,null),e(ht,ru),e(ht,Jt),e(Jt,iu),e(Jt,Ra),e(Ra,lu),e(Jt,du),e(Jt,ii),e(ii,cu),e(Jt,pu),e(ht,hu),w(No,ht,null),e(ht,uu),w(Ho,ht,null),T(o,od,_),T(o,Xt,_),e(Xt,Lo),e(Lo,li),w(ks,li,null),e(Xt,mu),e(Xt,di),e(di,fu),T(o,nd,_),T(o,Ge,_),w(ws,Ge,null),e(Ge,gu),e(Ge,ci),e(ci,_u),e(Ge,Tu),e(Ge,Ba),e(Ba,Va),e(Va,bu),e(Ba,vu),e(Ge,yu),e(Ge,rt),e(rt,ku),e(rt,pi),e(pi,wu),e(rt,$u),e(rt,hi),e(hi,Pu),e(rt,Mu),e(rt,ui),e(ui,Gu),e(rt,xu),e(rt,mi),e(mi,Fu),e(rt,ju),e(Ge,zu),e(Ge,$s),e($s,Eu),e($s,Ka),e(Ka,qu),e($s,Cu),e(Ge,Du),e(Ge,Ps),e(Ps,Nu),e(Ps,Ms),e(Ms,Hu),e(Ps,Lu),e(Ge,Su),e(Ge,je),w(Gs,je,null),e(je,Iu),e(je,Yt),e(Yt,Au),e(Yt,Ja),e(Ja,Ou),e(Yt,Wu),e(Yt,fi),e(fi,Uu),e(Yt,Ru),e(je,Bu),w(So,je,null),e(je,Vu),w(Io,je,null),e(je,Ku),w(Ao,je,null),e(je,Ju),w(Oo,je,null),e(je,Xu),w(Wo,je,null),T(o,sd,_),T(o,Qt,_),e(Qt,Uo),e(Uo,gi),w(xs,gi,null),e(Qt,Yu),e(Qt,_i),e(_i,Qu),T(o,ad,_),T(o,Je,_),w(Fs,Je,null),e(Je,Zu),e(Je,Ti),e(Ti,em),e(Je,tm),e(Je,js),e(js,om),e(js,Xa),e(Xa,nm),e(js,sm),e(Je,am),e(Je,zs),e(zs,rm),e(zs,Es),e(Es,im),e(zs,lm),e(Je,dm),e(Je,Xe),w(qs,Xe,null),e(Xe,cm),e(Xe,Zt),e(Zt,pm),e(Zt,Ya),e(Ya,hm),e(Zt,um),e(Zt,bi),e(bi,mm),e(Zt,fm),e(Xe,gm),w(Ro,Xe,null),e(Xe,_m),w(Bo,Xe,null),e(Xe,Tm),w(Vo,Xe,null),T(o,rd,_),T(o,eo,_),e(eo,Ko),e(Ko,vi),w(Cs,vi,null),e(eo,bm),e(eo,yi),e(yi,vm),T(o,id,_),T(o,Ne,_),w(Ds,Ne,null),e(Ne,ym),e(Ne,ki),e(ki,km),e(Ne,wm),e(Ne,Ns),e(Ns,$m),e(Ns,Qa),e(Qa,Pm),e(Ns,Mm),e(Ne,Gm),e(Ne,Hs),e(Hs,xm),e(Hs,Ls),e(Ls,Fm),e(Hs,jm),e(Ne,zm),w(Jo,Ne,null),e(Ne,Em),e(Ne,ut),w(Ss,ut,null),e(ut,qm),e(ut,to),e(to,Cm),e(to,Za),e(Za,Dm),e(to,Nm),e(to,wi),e(wi,Hm),e(to,Lm),e(ut,Sm),w(Xo,ut,null),e(ut,Im),w(Yo,ut,null),T(o,ld,_),T(o,oo,_),e(oo,Qo),e(Qo,$i),w(Is,$i,null),e(oo,Am),e(oo,Pi),e(Pi,Om),T(o,dd,_),T(o,He,_),w(As,He,null),e(He,Wm),e(He,Mi),e(Mi,Um),e(He,Rm),e(He,Os),e(Os,Bm),e(Os,er),e(er,Vm),e(Os,Km),e(He,Jm),e(He,Ws),e(Ws,Xm),e(Ws,Us),e(Us,Ym),e(Ws,Qm),e(He,Zm),w(Zo,He,null),e(He,ef),e(He,mt),w(Rs,mt,null),e(mt,tf),e(mt,no),e(no,of),e(no,tr),e(tr,nf),e(no,sf),e(no,Gi),e(Gi,af),e(no,rf),e(mt,lf),w(en,mt,null),e(mt,df),w(tn,mt,null),T(o,cd,_),T(o,so,_),e(so,on),e(on,xi),w(Bs,xi,null),e(so,cf),e(so,Fi),e(Fi,pf),T(o,pd,_),T(o,Le,_),w(Vs,Le,null),e(Le,hf),e(Le,ji),e(ji,uf),e(Le,mf),e(Le,Ks),e(Ks,ff),e(Ks,or),e(or,gf),e(Ks,_f),e(Le,Tf),e(Le,Js),e(Js,bf),e(Js,Xs),e(Xs,vf),e(Js,yf),e(Le,kf),w(nn,Le,null),e(Le,wf),e(Le,ft),w(Ys,ft,null),e(ft,$f),e(ft,ao),e(ao,Pf),e(ao,nr),e(nr,Mf),e(ao,Gf),e(ao,zi),e(zi,xf),e(ao,Ff),e(ft,jf),w(sn,ft,null),e(ft,zf),w(an,ft,null),T(o,hd,_),T(o,ro,_),e(ro,rn),e(rn,Ei),w(Qs,Ei,null),e(ro,Ef),e(ro,qi),e(qi,qf),T(o,ud,_),T(o,he,_),w(Zs,he,null),e(he,Cf),e(he,Ci),e(Ci,Df),e(he,Nf),e(he,sr),e(sr,ar),e(ar,Hf),e(sr,Lf),e(he,Sf),e(he,it),e(it,If),e(it,Di),e(Di,Af),e(it,Of),e(it,Ni),e(Ni,Wf),e(it,Uf),e(it,Hi),e(Hi,Rf),e(it,Bf),e(it,Li),e(Li,Vf),e(it,Kf),e(he,Jf),e(he,ea),e(ea,Xf),e(ea,rr),e(rr,Yf),e(ea,Qf),e(he,Zf),e(he,ta),e(ta,eg),e(ta,oa),e(oa,tg),e(ta,og),e(he,ng),w(ln,he,null),e(he,sg),e(he,Ye),w(na,Ye,null),e(Ye,ag),e(Ye,io),e(io,rg),e(io,ir),e(ir,ig),e(io,lg),e(io,Si),e(Si,dg),e(io,cg),e(Ye,pg),w(dn,Ye,null),e(Ye,hg),w(cn,Ye,null),e(Ye,ug),w(pn,Ye,null),T(o,md,_),T(o,lo,_),e(lo,hn),e(hn,Ii),w(sa,Ii,null),e(lo,mg),e(lo,Ai),e(Ai,fg),T(o,fd,_),T(o,co,_),w(aa,co,null),e(co,gg),e(co,Oi),e(Oi,_g),T(o,gd,_),T(o,po,_),e(po,un),e(un,Wi),w(ra,Wi,null),e(po,Tg),e(po,Ui),e(Ui,bg),T(o,_d,_),T(o,xe,_),w(ia,xe,null),e(xe,vg),e(xe,Ri),e(Ri,yg),e(xe,kg),e(xe,la),e(la,wg),e(la,lr),e(lr,$g),e(la,Pg),e(xe,Mg),e(xe,da),e(da,Gg),e(da,ca),e(ca,xg),e(da,Fg),e(xe,jg),e(xe,Bi),e(Bi,zg),e(xe,Eg),e(xe,wt),e(wt,Vi),e(Vi,pa),e(pa,qg),e(wt,Cg),e(wt,Ki),e(Ki,ha),e(ha,Dg),e(wt,Ng),e(wt,Ji),e(Ji,ua),e(ua,Hg),e(wt,Lg),e(wt,Xi),e(Xi,ma),e(ma,Sg),e(xe,Ig),e(xe,gt),w(fa,gt,null),e(gt,Ag),e(gt,ho),e(ho,Og),e(ho,Yi),e(Yi,Wg),e(ho,Ug),e(ho,Qi),e(Qi,Rg),e(ho,Bg),e(gt,Vg),w(mn,gt,null),e(gt,Kg),w(fn,gt,null),T(o,Td,_),T(o,uo,_),e(uo,gn),e(gn,Zi),w(ga,Zi,null),e(uo,Jg),e(uo,el),e(el,Xg),T(o,bd,_),T(o,Fe,_),w(_a,Fe,null),e(Fe,Yg),e(Fe,tl),e(tl,Qg),e(Fe,Zg),e(Fe,Ta),e(Ta,e_),e(Ta,dr),e(dr,t_),e(Ta,o_),e(Fe,n_),e(Fe,ba),e(ba,s_),e(ba,va),e(va,a_),e(ba,r_),e(Fe,i_),e(Fe,ol),e(ol,l_),e(Fe,d_),e(Fe,$t),e($t,nl),e(nl,ya),e(ya,c_),e($t,p_),e($t,sl),e(sl,ka),e(ka,h_),e($t,u_),e($t,al),e(al,wa),e(wa,m_),e($t,f_),e($t,rl),e(rl,$a),e($a,g_),e(Fe,__),e(Fe,_t),w(Pa,_t,null),e(_t,T_),e(_t,mo),e(mo,b_),e(mo,il),e(il,v_),e(mo,y_),e(mo,ll),e(ll,k_),e(mo,w_),e(_t,$_),w(_n,_t,null),e(_t,P_),w(Tn,_t,null),vd=!0},p(o,[_]){const Ma={};_&2&&(Ma.$$scope={dirty:_,ctx:o}),_o.$set(Ma);const dl={};_&2&&(dl.$$scope={dirty:_,ctx:o}),bo.$set(dl);const cl={};_&2&&(cl.$$scope={dirty:_,ctx:o}),vo.$set(cl);const pl={};_&2&&(pl.$$scope={dirty:_,ctx:o}),ko.$set(pl);const Ga={};_&2&&(Ga.$$scope={dirty:_,ctx:o}),wo.$set(Ga);const hl={};_&2&&(hl.$$scope={dirty:_,ctx:o}),Mo.$set(hl);const ul={};_&2&&(ul.$$scope={dirty:_,ctx:o}),Go.$set(ul);const ml={};_&2&&(ml.$$scope={dirty:_,ctx:o}),xo.$set(ml);const xa={};_&2&&(xa.$$scope={dirty:_,ctx:o}),Fo.$set(xa);const fl={};_&2&&(fl.$$scope={dirty:_,ctx:o}),zo.$set(fl);const gl={};_&2&&(gl.$$scope={dirty:_,ctx:o}),Eo.$set(gl);const _l={};_&2&&(_l.$$scope={dirty:_,ctx:o}),qo.$set(_l);const Tl={};_&2&&(Tl.$$scope={dirty:_,ctx:o}),Co.$set(Tl);const bl={};_&2&&(bl.$$scope={dirty:_,ctx:o}),No.$set(bl);const Pt={};_&2&&(Pt.$$scope={dirty:_,ctx:o}),Ho.$set(Pt);const vl={};_&2&&(vl.$$scope={dirty:_,ctx:o}),So.$set(vl);const Fa={};_&2&&(Fa.$$scope={dirty:_,ctx:o}),Io.$set(Fa);const yl={};_&2&&(yl.$$scope={dirty:_,ctx:o}),Ao.$set(yl);const ue={};_&2&&(ue.$$scope={dirty:_,ctx:o}),Oo.$set(ue);const kl={};_&2&&(kl.$$scope={dirty:_,ctx:o}),Wo.$set(kl);const wl={};_&2&&(wl.$$scope={dirty:_,ctx:o}),Ro.$set(wl);const $l={};_&2&&($l.$$scope={dirty:_,ctx:o}),Bo.$set($l);const Pl={};_&2&&(Pl.$$scope={dirty:_,ctx:o}),Vo.$set(Pl);const Ml={};_&2&&(Ml.$$scope={dirty:_,ctx:o}),Jo.$set(Ml);const Gl={};_&2&&(Gl.$$scope={dirty:_,ctx:o}),Xo.$set(Gl);const xl={};_&2&&(xl.$$scope={dirty:_,ctx:o}),Yo.$set(xl);const Fl={};_&2&&(Fl.$$scope={dirty:_,ctx:o}),Zo.$set(Fl);const Mt={};_&2&&(Mt.$$scope={dirty:_,ctx:o}),en.$set(Mt);const jl={};_&2&&(jl.$$scope={dirty:_,ctx:o}),tn.$set(jl);const zl={};_&2&&(zl.$$scope={dirty:_,ctx:o}),nn.$set(zl);const El={};_&2&&(El.$$scope={dirty:_,ctx:o}),sn.$set(El);const bn={};_&2&&(bn.$$scope={dirty:_,ctx:o}),an.$set(bn);const ql={};_&2&&(ql.$$scope={dirty:_,ctx:o}),ln.$set(ql);const Cl={};_&2&&(Cl.$$scope={dirty:_,ctx:o}),dn.$set(Cl);const fo={};_&2&&(fo.$$scope={dirty:_,ctx:o}),cn.$set(fo);const Dl={};_&2&&(Dl.$$scope={dirty:_,ctx:o}),pn.$set(Dl);const Nl={};_&2&&(Nl.$$scope={dirty:_,ctx:o}),mn.$set(Nl);const ja={};_&2&&(ja.$$scope={dirty:_,ctx:o}),fn.$set(ja);const Hl={};_&2&&(Hl.$$scope={dirty:_,ctx:o}),_n.$set(Hl);const Ll={};_&2&&(Ll.$$scope={dirty:_,ctx:o}),Tn.$set(Ll)},i(o){vd||($(l.$$.fragment,o),$(Z.$$.fragment,o),$(Ln.$$.fragment,o),$(Sn.$$.fragment,o),$(_o.$$.fragment,o),$(An.$$.fragment,o),$(On.$$.fragment,o),$(bo.$$.fragment,o),$(vo.$$.fragment,o),$(Rn.$$.fragment,o),$(Bn.$$.fragment,o),$(Vn.$$.fragment,o),$(ko.$$.fragment,o),$(wo.$$.fragment,o),$(Yn.$$.fragment,o),$(Qn.$$.fragment,o),$(Zn.$$.fragment,o),$(es.$$.fragment,o),$(ts.$$.fragment,o),$(as.$$.fragment,o),$(Mo.$$.fragment,o),$(Go.$$.fragment,o),$(rs.$$.fragment,o),$(xo.$$.fragment,o),$(is.$$.fragment,o),$(Fo.$$.fragment,o),$(ls.$$.fragment,o),$(ds.$$.fragment,o),$(us.$$.fragment,o),$(zo.$$.fragment,o),$(Eo.$$.fragment,o),$(ms.$$.fragment,o),$(qo.$$.fragment,o),$(fs.$$.fragment,o),$(Co.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$(ys.$$.fragment,o),$(No.$$.fragment,o),$(Ho.$$.fragment,o),$(ks.$$.fragment,o),$(ws.$$.fragment,o),$(Gs.$$.fragment,o),$(So.$$.fragment,o),$(Io.$$.fragment,o),$(Ao.$$.fragment,o),$(Oo.$$.fragment,o),$(Wo.$$.fragment,o),$(xs.$$.fragment,o),$(Fs.$$.fragment,o),$(qs.$$.fragment,o),$(Ro.$$.fragment,o),$(Bo.$$.fragment,o),$(Vo.$$.fragment,o),$(Cs.$$.fragment,o),$(Ds.$$.fragment,o),$(Jo.$$.fragment,o),$(Ss.$$.fragment,o),$(Xo.$$.fragment,o),$(Yo.$$.fragment,o),$(Is.$$.fragment,o),$(As.$$.fragment,o),$(Zo.$$.fragment,o),$(Rs.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(Bs.$$.fragment,o),$(Vs.$$.fragment,o),$(nn.$$.fragment,o),$(Ys.$$.fragment,o),$(sn.$$.fragment,o),$(an.$$.fragment,o),$(Qs.$$.fragment,o),$(Zs.$$.fragment,o),$(ln.$$.fragment,o),$(na.$$.fragment,o),$(dn.$$.fragment,o),$(cn.$$.fragment,o),$(pn.$$.fragment,o),$(sa.$$.fragment,o),$(aa.$$.fragment,o),$(ra.$$.fragment,o),$(ia.$$.fragment,o),$(fa.$$.fragment,o),$(mn.$$.fragment,o),$(fn.$$.fragment,o),$(ga.$$.fragment,o),$(_a.$$.fragment,o),$(Pa.$$.fragment,o),$(_n.$$.fragment,o),$(Tn.$$.fragment,o),vd=!0)},o(o){P(l.$$.fragment,o),P(Z.$$.fragment,o),P(Ln.$$.fragment,o),P(Sn.$$.fragment,o),P(_o.$$.fragment,o),P(An.$$.fragment,o),P(On.$$.fragment,o),P(bo.$$.fragment,o),P(vo.$$.fragment,o),P(Rn.$$.fragment,o),P(Bn.$$.fragment,o),P(Vn.$$.fragment,o),P(ko.$$.fragment,o),P(wo.$$.fragment,o),P(Yn.$$.fragment,o),P(Qn.$$.fragment,o),P(Zn.$$.fragment,o),P(es.$$.fragment,o),P(ts.$$.fragment,o),P(as.$$.fragment,o),P(Mo.$$.fragment,o),P(Go.$$.fragment,o),P(rs.$$.fragment,o),P(xo.$$.fragment,o),P(is.$$.fragment,o),P(Fo.$$.fragment,o),P(ls.$$.fragment,o),P(ds.$$.fragment,o),P(us.$$.fragment,o),P(zo.$$.fragment,o),P(Eo.$$.fragment,o),P(ms.$$.fragment,o),P(qo.$$.fragment,o),P(fs.$$.fragment,o),P(Co.$$.fragment,o),P(gs.$$.fragment,o),P(_s.$$.fragment,o),P(ys.$$.fragment,o),P(No.$$.fragment,o),P(Ho.$$.fragment,o),P(ks.$$.fragment,o),P(ws.$$.fragment,o),P(Gs.$$.fragment,o),P(So.$$.fragment,o),P(Io.$$.fragment,o),P(Ao.$$.fragment,o),P(Oo.$$.fragment,o),P(Wo.$$.fragment,o),P(xs.$$.fragment,o),P(Fs.$$.fragment,o),P(qs.$$.fragment,o),P(Ro.$$.fragment,o),P(Bo.$$.fragment,o),P(Vo.$$.fragment,o),P(Cs.$$.fragment,o),P(Ds.$$.fragment,o),P(Jo.$$.fragment,o),P(Ss.$$.fragment,o),P(Xo.$$.fragment,o),P(Yo.$$.fragment,o),P(Is.$$.fragment,o),P(As.$$.fragment,o),P(Zo.$$.fragment,o),P(Rs.$$.fragment,o),P(en.$$.fragment,o),P(tn.$$.fragment,o),P(Bs.$$.fragment,o),P(Vs.$$.fragment,o),P(nn.$$.fragment,o),P(Ys.$$.fragment,o),P(sn.$$.fragment,o),P(an.$$.fragment,o),P(Qs.$$.fragment,o),P(Zs.$$.fragment,o),P(ln.$$.fragment,o),P(na.$$.fragment,o),P(dn.$$.fragment,o),P(cn.$$.fragment,o),P(pn.$$.fragment,o),P(sa.$$.fragment,o),P(aa.$$.fragment,o),P(ra.$$.fragment,o),P(ia.$$.fragment,o),P(fa.$$.fragment,o),P(mn.$$.fragment,o),P(fn.$$.fragment,o),P(ga.$$.fragment,o),P(_a.$$.fragment,o),P(Pa.$$.fragment,o),P(_n.$$.fragment,o),P(Tn.$$.fragment,o),vd=!1},d(o){t(d),o&&t(g),o&&t(c),M(l),o&&t(C),o&&t(j),M(Z),o&&t(me),o&&t(W),o&&t(q),o&&t(ie),o&&t(fe),o&&t(le),o&&t(ge),o&&t(E),o&&t(U),o&&t(R),o&&t(Sl),o&&t(Nt),o&&t(Il),o&&t(Gt),o&&t(Al),o&&t(Ht),M(Ln),o&&t(Ol),o&&t(at),M(Sn),M(_o),o&&t(Wl),o&&t(St),M(An),o&&t(Ul),o&&t(pe),M(On),M(bo),M(vo),M(Rn),o&&t(Rl),o&&t(It),M(Bn),o&&t(Bl),o&&t($e),M(Vn),M(ko),M(wo),o&&t(Vl),o&&t(At),M(Yn),o&&t(Kl),o&&t(Ot),M(Qn),o&&t(Jl),o&&t(Wt),M(Zn),o&&t(Xl),o&&t(Ut),M(es),o&&t(Yl),o&&t(Pe),M(ts),M(as),M(Mo),M(Go),M(rs),M(xo),M(is),M(Fo),o&&t(Ql),o&&t(Bt),M(ls),o&&t(Zl),o&&t(Me),M(ds),M(us),M(zo),M(Eo),M(ms),M(qo),M(fs),M(Co),o&&t(ed),o&&t(Kt),M(gs),o&&t(td),o&&t(Ke),M(_s),M(ys),M(No),M(Ho),o&&t(od),o&&t(Xt),M(ks),o&&t(nd),o&&t(Ge),M(ws),M(Gs),M(So),M(Io),M(Ao),M(Oo),M(Wo),o&&t(sd),o&&t(Qt),M(xs),o&&t(ad),o&&t(Je),M(Fs),M(qs),M(Ro),M(Bo),M(Vo),o&&t(rd),o&&t(eo),M(Cs),o&&t(id),o&&t(Ne),M(Ds),M(Jo),M(Ss),M(Xo),M(Yo),o&&t(ld),o&&t(oo),M(Is),o&&t(dd),o&&t(He),M(As),M(Zo),M(Rs),M(en),M(tn),o&&t(cd),o&&t(so),M(Bs),o&&t(pd),o&&t(Le),M(Vs),M(nn),M(Ys),M(sn),M(an),o&&t(hd),o&&t(ro),M(Qs),o&&t(ud),o&&t(he),M(Zs),M(ln),M(na),M(dn),M(cn),M(pn),o&&t(md),o&&t(lo),M(sa),o&&t(fd),o&&t(co),M(aa),o&&t(gd),o&&t(po),M(ra),o&&t(_d),o&&t(xe),M(ia),M(fa),M(mn),M(fn),o&&t(Td),o&&t(uo),M(ga),o&&t(bd),o&&t(Fe),M(_a),M(Pa),M(_n),M(Tn)}}}const cv={local:"openai-gpt2",sections:[{local:"overview",title:"Overview"},{local:"transformers.GPT2Config",title:"GPT2Config"},{local:"transformers.GPT2Tokenizer",title:"GPT2Tokenizer"},{local:"transformers.GPT2TokenizerFast",title:"GPT2TokenizerFast"},{local:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput",title:"GPT2 specific outputs"},{local:"transformers.GPT2Model",title:"GPT2Model"},{local:"transformers.GPT2LMHeadModel",title:"GPT2LMHeadModel"},{local:"transformers.GPT2DoubleHeadsModel",title:"GPT2DoubleHeadsModel"},{local:"transformers.GPT2ForSequenceClassification",title:"GPT2ForSequenceClassification"},{local:"transformers.GPT2ForTokenClassification",title:"GPT2ForTokenClassification"},{local:"transformers.TFGPT2Model",title:"TFGPT2Model"},{local:"transformers.TFGPT2LMHeadModel",title:"TFGPT2LMHeadModel"},{local:"transformers.TFGPT2DoubleHeadsModel",title:"TFGPT2DoubleHeadsModel"},{local:"transformers.TFGPT2ForSequenceClassification",title:"TFGPT2ForSequenceClassification"},{local:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast",title:"TFSequenceClassifierOutputWithPast"},{local:"transformers.FlaxGPT2Model",title:"FlaxGPT2Model"},{local:"transformers.FlaxGPT2LMHeadModel",title:"FlaxGPT2LMHeadModel"}],title:"OpenAI GPT2"};function pv(G){return kb(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Tv extends Tb{constructor(d){super();bb(this,d,pv,dv,vb,{})}}export{Tv as default,cv as metadata};
