import{S as lu,i as du,s as cu,e as a,k as c,w as L,t as n,M as pu,c as r,d as t,m as p,a as i,x as w,h as s,b as h,F as e,g as f,y as T,q as v,o as M,B as $,v as hu,L as Et}from"../../chunks/vendor-6b77c823.js";import{T as Qe}from"../../chunks/Tip-39098574.js";import{D as _e}from"../../chunks/Docstring-1088f2fb.js";import{C as tt}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as De}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as zt}from"../../chunks/ExampleCodeBlock-5212b321.js";function uu(E){let d,k,_,u,b;return u=new tt({props:{code:`from transformers import LayoutLMModel, LayoutLMConfig

# Initializing a LayoutLM configuration
configuration = LayoutLMConfig()

# Initializing a model from the configuration
model = LayoutLMModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMModel, LayoutLMConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a LayoutLM configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LayoutLMConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(u.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(t),_=p(l),w(u.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),T(u,l,m),b=!0},p:Et,i(l){b||(v(u.$$.fragment,l),b=!0)},o(l){M(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(_),$(u,l)}}}function mu(E){let d,k,_,u,b;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var j=i(_);u=s(j,"Module"),j.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){f(l,d,m),e(d,k),e(d,_),e(_,u),e(d,b)},d(l){l&&t(d)}}}function fu(E){let d,k,_,u,b;return u=new tt({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMModel
import torch

tokenizer = LayoutLMTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
model = LayoutLMModel.from_pretrained("microsoft/layoutlm-base-uncased")

words = ["Hello", "world"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(" ".join(words), return_tensors="pt")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = torch.tensor([token_boxes])

outputs = model(
    input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids
)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, LayoutLMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMModel.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&quot; &quot;</span>.join(words), return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = torch.tensor([token_boxes])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(u.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(t),_=p(l),w(u.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),T(u,l,m),b=!0},p:Et,i(l){b||(v(u.$$.fragment,l),b=!0)},o(l){M(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(_),$(u,l)}}}function gu(E){let d,k,_,u,b;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var j=i(_);u=s(j,"Module"),j.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){f(l,d,m),e(d,k),e(d,_),e(_,u),e(d,b)},d(l){l&&t(d)}}}function _u(E){let d,k,_,u,b;return u=new tt({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMForMaskedLM
import torch

tokenizer = LayoutLMTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
model = LayoutLMForMaskedLM.from_pretrained("microsoft/layoutlm-base-uncased")

words = ["Hello", "[MASK]"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(" ".join(words), return_tensors="pt")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = torch.tensor([token_boxes])

labels = tokenizer("Hello world", return_tensors="pt")["input_ids"]

outputs = model(
    input_ids=input_ids,
    bbox=bbox,
    attention_mask=attention_mask,
    token_type_ids=token_type_ids,
    labels=labels,
)

loss = outputs.loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, LayoutLMForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;[MASK]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&quot; &quot;</span>.join(words), return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = torch.tensor([token_boxes])

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids=input_ids,
<span class="hljs-meta">... </span>    bbox=bbox,
<span class="hljs-meta">... </span>    attention_mask=attention_mask,
<span class="hljs-meta">... </span>    token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>    labels=labels,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(u.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(t),_=p(l),w(u.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),T(u,l,m),b=!0},p:Et,i(l){b||(v(u.$$.fragment,l),b=!0)},o(l){M(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(_),$(u,l)}}}function yu(E){let d,k,_,u,b;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var j=i(_);u=s(j,"Module"),j.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){f(l,d,m),e(d,k),e(d,_),e(_,u),e(d,b)},d(l){l&&t(d)}}}function bu(E){let d,k,_,u,b;return u=new tt({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMForSequenceClassification
import torch

tokenizer = LayoutLMTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
model = LayoutLMForSequenceClassification.from_pretrained("microsoft/layoutlm-base-uncased")

words = ["Hello", "world"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(" ".join(words), return_tensors="pt")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = torch.tensor([token_boxes])
sequence_label = torch.tensor([1])

outputs = model(
    input_ids=input_ids,
    bbox=bbox,
    attention_mask=attention_mask,
    token_type_ids=token_type_ids,
    labels=sequence_label,
)

loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, LayoutLMForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&quot; &quot;</span>.join(words), return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = torch.tensor([token_boxes])
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_label = torch.tensor([<span class="hljs-number">1</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids=input_ids,
<span class="hljs-meta">... </span>    bbox=bbox,
<span class="hljs-meta">... </span>    attention_mask=attention_mask,
<span class="hljs-meta">... </span>    token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>    labels=sequence_label,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(u.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(t),_=p(l),w(u.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),T(u,l,m),b=!0},p:Et,i(l){b||(v(u.$$.fragment,l),b=!0)},o(l){M(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(_),$(u,l)}}}function ku(E){let d,k,_,u,b;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var j=i(_);u=s(j,"Module"),j.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){f(l,d,m),e(d,k),e(d,_),e(_,u),e(d,b)},d(l){l&&t(d)}}}function Lu(E){let d,k,_,u,b;return u=new tt({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMForTokenClassification
import torch

tokenizer = LayoutLMTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
model = LayoutLMForTokenClassification.from_pretrained("microsoft/layoutlm-base-uncased")

words = ["Hello", "world"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(" ".join(words), return_tensors="pt")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = torch.tensor([token_boxes])
token_labels = torch.tensor([1, 1, 0, 0]).unsqueeze(0)  # batch size of 1

outputs = model(
    input_ids=input_ids,
    bbox=bbox,
    attention_mask=attention_mask,
    token_type_ids=token_type_ids,
    labels=token_labels,
)

loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, LayoutLMForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&quot; &quot;</span>.join(words), return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = torch.tensor([token_boxes])
<span class="hljs-meta">&gt;&gt;&gt; </span>token_labels = torch.tensor([<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># batch size of 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids=input_ids,
<span class="hljs-meta">... </span>    bbox=bbox,
<span class="hljs-meta">... </span>    attention_mask=attention_mask,
<span class="hljs-meta">... </span>    token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>    labels=token_labels,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(u.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(t),_=p(l),w(u.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),T(u,l,m),b=!0},p:Et,i(l){b||(v(u.$$.fragment,l),b=!0)},o(l){M(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(_),$(u,l)}}}function wu(E){let d,k,_,u,b,l,m,j,re,Y,z,ae,O,Z,ne,A,ie,se,J,D,G,Q,F,q,le,H,V,ee,B,te,de,C,ce,U,pe,oe,R,he,ue,N,me,W,fe;return{c(){d=a("p"),k=n("TF 2.0 models accepts two formats as inputs:"),_=c(),u=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),j=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=c(),z=a("p"),ae=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=a("code"),ie=n("model(inputs)"),se=n("."),J=c(),D=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Q=c(),F=a("ul"),q=a("li"),le=n("a single Tensor with "),H=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),B=a("code"),te=n("model(inputs_ids)"),de=c(),C=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a("code"),pe=n("model([input_ids, attention_mask])"),oe=n(" or "),R=a("code"),he=n("model([input_ids, attention_mask, token_type_ids])"),ue=c(),N=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=r(g,"P",{});var x=i(d);k=s(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),_=p(g),u=r(g,"UL",{});var X=i(u);b=r(X,"LI",{});var je=i(b);l=s(je,"having all inputs as keyword arguments (like PyTorch models), or"),je.forEach(t),m=p(X),j=r(X,"LI",{});var Me=i(j);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),X.forEach(t),Y=p(g),z=r(g,"P",{});var S=i(z);ae=s(S,"This second option is useful when using "),O=r(S,"CODE",{});var be=i(O);Z=s(be,"tf.keras.Model.fit"),be.forEach(t),ne=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=r(S,"CODE",{});var Fe=i(A);ie=s(Fe,"model(inputs)"),Fe.forEach(t),se=s(S,"."),S.forEach(t),J=p(g),D=r(g,"P",{});var $e=i(D);G=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Q=p(g),F=r(g,"UL",{});var I=i(F);q=r(I,"LI",{});var K=i(q);le=s(K,"a single Tensor with "),H=r(K,"CODE",{});var xe=i(H);V=s(xe,"input_ids"),xe.forEach(t),ee=s(K," only and nothing else: "),B=r(K,"CODE",{});var ye=i(B);te=s(ye,"model(inputs_ids)"),ye.forEach(t),K.forEach(t),de=p(I),C=r(I,"LI",{});var P=i(C);ce=s(P,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(P,"CODE",{});var ze=i(U);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),oe=s(P," or "),R=r(P,"CODE",{});var ke=i(R);he=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),P.forEach(t),ue=p(I),N=r(I,"LI",{});var ge=i(N);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ge,"CODE",{});var Ee=i(W);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),ge.forEach(t),I.forEach(t)},m(g,x){f(g,d,x),e(d,k),f(g,_,x),f(g,u,x),e(u,b),e(b,l),e(u,m),e(u,j),e(j,re),f(g,Y,x),f(g,z,x),e(z,ae),e(z,O),e(O,Z),e(z,ne),e(z,A),e(A,ie),e(z,se),f(g,J,x),f(g,D,x),e(D,G),f(g,Q,x),f(g,F,x),e(F,q),e(q,le),e(q,H),e(H,V),e(q,ee),e(q,B),e(B,te),e(F,de),e(F,C),e(C,ce),e(C,U),e(U,pe),e(C,oe),e(C,R),e(R,he),e(F,ue),e(F,N),e(N,me),e(N,W),e(W,fe)},d(g){g&&t(d),g&&t(_),g&&t(u),g&&t(Y),g&&t(z),g&&t(J),g&&t(D),g&&t(Q),g&&t(F)}}}function Tu(E){let d,k,_,u,b;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var j=i(_);u=s(j,"Module"),j.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){f(l,d,m),e(d,k),e(d,_),e(_,u),e(d,b)},d(l){l&&t(d)}}}function vu(E){let d,k,_,u,b;return u=new tt({props:{code:`from transformers import LayoutLMTokenizer, TFLayoutLMModel
import tensorflow as tf

tokenizer = LayoutLMTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
model = TFLayoutLMModel.from_pretrained("microsoft/layoutlm-base-uncased")

words = ["Hello", "world"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(" ".join(words), return_tensors="tf")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = tf.convert_to_tensor([token_boxes])

outputs = model(
    input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids
)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, TFLayoutLMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLayoutLMModel.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&quot; &quot;</span>.join(words), return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = tf.convert_to_tensor([token_boxes])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(u.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(t),_=p(l),w(u.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),T(u,l,m),b=!0},p:Et,i(l){b||(v(u.$$.fragment,l),b=!0)},o(l){M(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(_),$(u,l)}}}function Mu(E){let d,k,_,u,b,l,m,j,re,Y,z,ae,O,Z,ne,A,ie,se,J,D,G,Q,F,q,le,H,V,ee,B,te,de,C,ce,U,pe,oe,R,he,ue,N,me,W,fe;return{c(){d=a("p"),k=n("TF 2.0 models accepts two formats as inputs:"),_=c(),u=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),j=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=c(),z=a("p"),ae=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=a("code"),ie=n("model(inputs)"),se=n("."),J=c(),D=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Q=c(),F=a("ul"),q=a("li"),le=n("a single Tensor with "),H=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),B=a("code"),te=n("model(inputs_ids)"),de=c(),C=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a("code"),pe=n("model([input_ids, attention_mask])"),oe=n(" or "),R=a("code"),he=n("model([input_ids, attention_mask, token_type_ids])"),ue=c(),N=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=r(g,"P",{});var x=i(d);k=s(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),_=p(g),u=r(g,"UL",{});var X=i(u);b=r(X,"LI",{});var je=i(b);l=s(je,"having all inputs as keyword arguments (like PyTorch models), or"),je.forEach(t),m=p(X),j=r(X,"LI",{});var Me=i(j);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),X.forEach(t),Y=p(g),z=r(g,"P",{});var S=i(z);ae=s(S,"This second option is useful when using "),O=r(S,"CODE",{});var be=i(O);Z=s(be,"tf.keras.Model.fit"),be.forEach(t),ne=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=r(S,"CODE",{});var Fe=i(A);ie=s(Fe,"model(inputs)"),Fe.forEach(t),se=s(S,"."),S.forEach(t),J=p(g),D=r(g,"P",{});var $e=i(D);G=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Q=p(g),F=r(g,"UL",{});var I=i(F);q=r(I,"LI",{});var K=i(q);le=s(K,"a single Tensor with "),H=r(K,"CODE",{});var xe=i(H);V=s(xe,"input_ids"),xe.forEach(t),ee=s(K," only and nothing else: "),B=r(K,"CODE",{});var ye=i(B);te=s(ye,"model(inputs_ids)"),ye.forEach(t),K.forEach(t),de=p(I),C=r(I,"LI",{});var P=i(C);ce=s(P,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(P,"CODE",{});var ze=i(U);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),oe=s(P," or "),R=r(P,"CODE",{});var ke=i(R);he=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),P.forEach(t),ue=p(I),N=r(I,"LI",{});var ge=i(N);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ge,"CODE",{});var Ee=i(W);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),ge.forEach(t),I.forEach(t)},m(g,x){f(g,d,x),e(d,k),f(g,_,x),f(g,u,x),e(u,b),e(b,l),e(u,m),e(u,j),e(j,re),f(g,Y,x),f(g,z,x),e(z,ae),e(z,O),e(O,Z),e(z,ne),e(z,A),e(A,ie),e(z,se),f(g,J,x),f(g,D,x),e(D,G),f(g,Q,x),f(g,F,x),e(F,q),e(q,le),e(q,H),e(H,V),e(q,ee),e(q,B),e(B,te),e(F,de),e(F,C),e(C,ce),e(C,U),e(U,pe),e(C,oe),e(C,R),e(R,he),e(F,ue),e(F,N),e(N,me),e(N,W),e(W,fe)},d(g){g&&t(d),g&&t(_),g&&t(u),g&&t(Y),g&&t(z),g&&t(J),g&&t(D),g&&t(Q),g&&t(F)}}}function $u(E){let d,k,_,u,b;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var j=i(_);u=s(j,"Module"),j.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){f(l,d,m),e(d,k),e(d,_),e(_,u),e(d,b)},d(l){l&&t(d)}}}function xu(E){let d,k,_,u,b;return u=new tt({props:{code:`from transformers import LayoutLMTokenizer, TFLayoutLMForMaskedLM
import tensorflow as tf

tokenizer = LayoutLMTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
model = TFLayoutLMForMaskedLM.from_pretrained("microsoft/layoutlm-base-uncased")

words = ["Hello", "[MASK]"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(" ".join(words), return_tensors="tf")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = tf.convert_to_tensor([token_boxes])

labels = tokenizer("Hello world", return_tensors="tf")["input_ids"]

outputs = model(
    input_ids=input_ids,
    bbox=bbox,
    attention_mask=attention_mask,
    token_type_ids=token_type_ids,
    labels=labels,
)

loss = outputs.loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, TFLayoutLMForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLayoutLMForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;[MASK]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&quot; &quot;</span>.join(words), return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = tf.convert_to_tensor([token_boxes])

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids=input_ids,
<span class="hljs-meta">... </span>    bbox=bbox,
<span class="hljs-meta">... </span>    attention_mask=attention_mask,
<span class="hljs-meta">... </span>    token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>    labels=labels,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(u.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(t),_=p(l),w(u.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),T(u,l,m),b=!0},p:Et,i(l){b||(v(u.$$.fragment,l),b=!0)},o(l){M(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(_),$(u,l)}}}function ju(E){let d,k,_,u,b,l,m,j,re,Y,z,ae,O,Z,ne,A,ie,se,J,D,G,Q,F,q,le,H,V,ee,B,te,de,C,ce,U,pe,oe,R,he,ue,N,me,W,fe;return{c(){d=a("p"),k=n("TF 2.0 models accepts two formats as inputs:"),_=c(),u=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),j=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=c(),z=a("p"),ae=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=a("code"),ie=n("model(inputs)"),se=n("."),J=c(),D=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Q=c(),F=a("ul"),q=a("li"),le=n("a single Tensor with "),H=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),B=a("code"),te=n("model(inputs_ids)"),de=c(),C=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a("code"),pe=n("model([input_ids, attention_mask])"),oe=n(" or "),R=a("code"),he=n("model([input_ids, attention_mask, token_type_ids])"),ue=c(),N=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=r(g,"P",{});var x=i(d);k=s(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),_=p(g),u=r(g,"UL",{});var X=i(u);b=r(X,"LI",{});var je=i(b);l=s(je,"having all inputs as keyword arguments (like PyTorch models), or"),je.forEach(t),m=p(X),j=r(X,"LI",{});var Me=i(j);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),X.forEach(t),Y=p(g),z=r(g,"P",{});var S=i(z);ae=s(S,"This second option is useful when using "),O=r(S,"CODE",{});var be=i(O);Z=s(be,"tf.keras.Model.fit"),be.forEach(t),ne=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=r(S,"CODE",{});var Fe=i(A);ie=s(Fe,"model(inputs)"),Fe.forEach(t),se=s(S,"."),S.forEach(t),J=p(g),D=r(g,"P",{});var $e=i(D);G=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Q=p(g),F=r(g,"UL",{});var I=i(F);q=r(I,"LI",{});var K=i(q);le=s(K,"a single Tensor with "),H=r(K,"CODE",{});var xe=i(H);V=s(xe,"input_ids"),xe.forEach(t),ee=s(K," only and nothing else: "),B=r(K,"CODE",{});var ye=i(B);te=s(ye,"model(inputs_ids)"),ye.forEach(t),K.forEach(t),de=p(I),C=r(I,"LI",{});var P=i(C);ce=s(P,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(P,"CODE",{});var ze=i(U);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),oe=s(P," or "),R=r(P,"CODE",{});var ke=i(R);he=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),P.forEach(t),ue=p(I),N=r(I,"LI",{});var ge=i(N);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ge,"CODE",{});var Ee=i(W);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),ge.forEach(t),I.forEach(t)},m(g,x){f(g,d,x),e(d,k),f(g,_,x),f(g,u,x),e(u,b),e(b,l),e(u,m),e(u,j),e(j,re),f(g,Y,x),f(g,z,x),e(z,ae),e(z,O),e(O,Z),e(z,ne),e(z,A),e(A,ie),e(z,se),f(g,J,x),f(g,D,x),e(D,G),f(g,Q,x),f(g,F,x),e(F,q),e(q,le),e(q,H),e(H,V),e(q,ee),e(q,B),e(B,te),e(F,de),e(F,C),e(C,ce),e(C,U),e(U,pe),e(C,oe),e(C,R),e(R,he),e(F,ue),e(F,N),e(N,me),e(N,W),e(W,fe)},d(g){g&&t(d),g&&t(_),g&&t(u),g&&t(Y),g&&t(z),g&&t(J),g&&t(D),g&&t(Q),g&&t(F)}}}function Fu(E){let d,k,_,u,b;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var j=i(_);u=s(j,"Module"),j.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){f(l,d,m),e(d,k),e(d,_),e(_,u),e(d,b)},d(l){l&&t(d)}}}function zu(E){let d,k,_,u,b;return u=new tt({props:{code:`from transformers import LayoutLMTokenizer, TFLayoutLMForSequenceClassification
import tensorflow as tf

tokenizer = LayoutLMTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
model = TFLayoutLMForSequenceClassification.from_pretrained("microsoft/layoutlm-base-uncased")

words = ["Hello", "world"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(" ".join(words), return_tensors="tf")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = tf.convert_to_tensor([token_boxes])
sequence_label = tf.convert_to_tensor([1])

outputs = model(
    input_ids=input_ids,
    bbox=bbox,
    attention_mask=attention_mask,
    token_type_ids=token_type_ids,
    labels=sequence_label,
)

loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, TFLayoutLMForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLayoutLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&quot; &quot;</span>.join(words), return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = tf.convert_to_tensor([token_boxes])
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_label = tf.convert_to_tensor([<span class="hljs-number">1</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids=input_ids,
<span class="hljs-meta">... </span>    bbox=bbox,
<span class="hljs-meta">... </span>    attention_mask=attention_mask,
<span class="hljs-meta">... </span>    token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>    labels=sequence_label,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(u.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(t),_=p(l),w(u.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),T(u,l,m),b=!0},p:Et,i(l){b||(v(u.$$.fragment,l),b=!0)},o(l){M(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(_),$(u,l)}}}function Eu(E){let d,k,_,u,b,l,m,j,re,Y,z,ae,O,Z,ne,A,ie,se,J,D,G,Q,F,q,le,H,V,ee,B,te,de,C,ce,U,pe,oe,R,he,ue,N,me,W,fe;return{c(){d=a("p"),k=n("TF 2.0 models accepts two formats as inputs:"),_=c(),u=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),j=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=c(),z=a("p"),ae=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=a("code"),ie=n("model(inputs)"),se=n("."),J=c(),D=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Q=c(),F=a("ul"),q=a("li"),le=n("a single Tensor with "),H=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),B=a("code"),te=n("model(inputs_ids)"),de=c(),C=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a("code"),pe=n("model([input_ids, attention_mask])"),oe=n(" or "),R=a("code"),he=n("model([input_ids, attention_mask, token_type_ids])"),ue=c(),N=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=r(g,"P",{});var x=i(d);k=s(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),_=p(g),u=r(g,"UL",{});var X=i(u);b=r(X,"LI",{});var je=i(b);l=s(je,"having all inputs as keyword arguments (like PyTorch models), or"),je.forEach(t),m=p(X),j=r(X,"LI",{});var Me=i(j);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),X.forEach(t),Y=p(g),z=r(g,"P",{});var S=i(z);ae=s(S,"This second option is useful when using "),O=r(S,"CODE",{});var be=i(O);Z=s(be,"tf.keras.Model.fit"),be.forEach(t),ne=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=r(S,"CODE",{});var Fe=i(A);ie=s(Fe,"model(inputs)"),Fe.forEach(t),se=s(S,"."),S.forEach(t),J=p(g),D=r(g,"P",{});var $e=i(D);G=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Q=p(g),F=r(g,"UL",{});var I=i(F);q=r(I,"LI",{});var K=i(q);le=s(K,"a single Tensor with "),H=r(K,"CODE",{});var xe=i(H);V=s(xe,"input_ids"),xe.forEach(t),ee=s(K," only and nothing else: "),B=r(K,"CODE",{});var ye=i(B);te=s(ye,"model(inputs_ids)"),ye.forEach(t),K.forEach(t),de=p(I),C=r(I,"LI",{});var P=i(C);ce=s(P,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(P,"CODE",{});var ze=i(U);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),oe=s(P," or "),R=r(P,"CODE",{});var ke=i(R);he=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),P.forEach(t),ue=p(I),N=r(I,"LI",{});var ge=i(N);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ge,"CODE",{});var Ee=i(W);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),ge.forEach(t),I.forEach(t)},m(g,x){f(g,d,x),e(d,k),f(g,_,x),f(g,u,x),e(u,b),e(b,l),e(u,m),e(u,j),e(j,re),f(g,Y,x),f(g,z,x),e(z,ae),e(z,O),e(O,Z),e(z,ne),e(z,A),e(A,ie),e(z,se),f(g,J,x),f(g,D,x),e(D,G),f(g,Q,x),f(g,F,x),e(F,q),e(q,le),e(q,H),e(H,V),e(q,ee),e(q,B),e(B,te),e(F,de),e(F,C),e(C,ce),e(C,U),e(U,pe),e(C,oe),e(C,R),e(R,he),e(F,ue),e(F,N),e(N,me),e(N,W),e(W,fe)},d(g){g&&t(d),g&&t(_),g&&t(u),g&&t(Y),g&&t(z),g&&t(J),g&&t(D),g&&t(Q),g&&t(F)}}}function qu(E){let d,k,_,u,b;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var j=i(_);u=s(j,"Module"),j.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){f(l,d,m),e(d,k),e(d,_),e(_,u),e(d,b)},d(l){l&&t(d)}}}function Cu(E){let d,k,_,u,b;return u=new tt({props:{code:`import tensorflow as tf
from transformers import LayoutLMTokenizer, TFLayoutLMForTokenClassification

tokenizer = LayoutLMTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
model = TFLayoutLMForTokenClassification.from_pretrained("microsoft/layoutlm-base-uncased")

words = ["Hello", "world"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(" ".join(words), return_tensors="tf")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = tf.convert_to_tensor([token_boxes])
token_labels = tf.convert_to_tensor([1, 1, 0, 0])

outputs = model(
    input_ids=input_ids,
    bbox=bbox,
    attention_mask=attention_mask,
    token_type_ids=token_type_ids,
    labels=token_labels,
)

loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, TFLayoutLMForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLayoutLMForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&quot; &quot;</span>.join(words), return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = tf.convert_to_tensor([token_boxes])
<span class="hljs-meta">&gt;&gt;&gt; </span>token_labels = tf.convert_to_tensor([<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids=input_ids,
<span class="hljs-meta">... </span>    bbox=bbox,
<span class="hljs-meta">... </span>    attention_mask=attention_mask,
<span class="hljs-meta">... </span>    token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>    labels=token_labels,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(u.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(t),_=p(l),w(u.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),T(u,l,m),b=!0},p:Et,i(l){b||(v(u.$$.fragment,l),b=!0)},o(l){M(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(_),$(u,l)}}}function Pu(E){let d,k,_,u,b,l,m,j,re,Y,z,ae,O,Z,ne,A,ie,se,J,D,G,Q,F,q,le,H,V,ee,B,te,de,C,ce,U,pe,oe,R,he,ue,N,me,W,fe,g,x,X,je,Me,S,be,Fe,$e,I,K,xe,ye,P,ze,ke,ge,Ee,Qn,Hr,Br,Is,Rr,Kr,xo,Vr,Xr,jo,Yr,Zr,Da,Fo,Aa,ot,Gr,Os,Jr,Qr,Ds,ei,ti,Ua,zo,Wa,es,et,oi,ts,ni,si,Eo,ai,ri,qo,ii,li,Ha,nt,di,Co,ci,pi,Po,hi,ui,Ba,rt,qt,As,No,mi,Us,fi,Ra,Pe,So,gi,it,_i,os,yi,bi,Io,ki,Li,wi,lt,Ti,ns,vi,Mi,ss,$i,xi,ji,Ct,Ka,dt,Pt,Ws,Oo,Fi,Hs,zi,Va,Ne,Do,Ei,Bs,qi,Ci,Nt,as,Pi,Ni,rs,Si,Ii,Oi,Ao,Di,is,Ai,Ui,Xa,ct,St,Rs,Uo,Wi,Ks,Hi,Ya,Se,Wo,Bi,Vs,Ri,Ki,It,ls,Vi,Xi,ds,Yi,Zi,Gi,Ho,Ji,cs,Qi,el,Za,pt,Ot,Xs,Bo,tl,Ys,ol,Ga,Ie,Ro,nl,Ko,sl,Vo,al,rl,il,Xo,ll,Yo,dl,cl,pl,Ae,Zo,hl,ht,ul,ps,ml,fl,Zs,gl,_l,yl,Dt,bl,At,Ja,ut,Ut,Gs,Go,kl,Js,Ll,Qa,Oe,Jo,wl,mt,Tl,Qs,vl,Ml,Qo,$l,xl,jl,en,Fl,tn,zl,El,ql,Ue,on,Cl,ft,Pl,hs,Nl,Sl,ea,Il,Ol,Dl,Wt,Al,Ht,er,gt,Bt,ta,nn,Ul,oa,Wl,tr,qe,sn,Hl,an,Bl,rn,Rl,Kl,Vl,ln,Xl,dn,Yl,Zl,Gl,cn,Jl,pn,Ql,ed,td,We,hn,od,_t,nd,us,sd,ad,na,rd,id,ld,Rt,dd,Kt,or,yt,Vt,sa,un,cd,aa,pd,nr,Ce,mn,hd,bt,ud,fn,md,fd,gn,gd,_d,yd,_n,bd,yn,kd,Ld,wd,bn,Td,kn,vd,Md,$d,He,Ln,xd,kt,jd,ms,Fd,zd,ra,Ed,qd,Cd,Xt,Pd,Yt,sr,Lt,Zt,ia,wn,Nd,la,Sd,ar,Le,Tn,Id,da,Od,Dd,vn,Ad,fs,Ud,Wd,Hd,Mn,Bd,$n,Rd,Kd,Vd,Gt,Xd,Be,xn,Yd,wt,Zd,gs,Gd,Jd,ca,Qd,ec,tc,Jt,oc,Qt,rr,Tt,eo,pa,jn,nc,ha,sc,ir,we,Fn,ac,zn,rc,ua,ic,lc,dc,En,cc,_s,pc,hc,uc,qn,mc,Cn,fc,gc,_c,to,yc,Re,Pn,bc,vt,kc,ys,Lc,wc,ma,Tc,vc,Mc,oo,$c,no,lr,Mt,so,fa,Nn,xc,ga,jc,dr,Te,Sn,Fc,_a,zc,Ec,In,qc,bs,Cc,Pc,Nc,On,Sc,Dn,Ic,Oc,Dc,ao,Ac,Ke,An,Uc,$t,Wc,ks,Hc,Bc,ya,Rc,Kc,Vc,ro,Xc,io,cr,xt,lo,ba,Un,Yc,ka,Zc,pr,ve,Wn,Gc,La,Jc,Qc,Hn,ep,Ls,tp,op,np,Bn,sp,Rn,ap,rp,ip,co,lp,Ve,Kn,dp,jt,cp,ws,pp,hp,wa,up,mp,fp,po,gp,ho,hr;return l=new De({}),A=new De({}),Fo=new tt({props:{code:`def normalize_bbox(bbox, width, height):
    return [
        int(1000 * (bbox[0] / width)),
        int(1000 * (bbox[1] / height)),
        int(1000 * (bbox[2] / width)),
        int(1000 * (bbox[3] / height)),
    ]`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">normalize_bbox</span>(<span class="hljs-params">bbox, width, height</span>):
    <span class="hljs-keyword">return</span> [
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">0</span>] / width)),
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">1</span>] / height)),
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">2</span>] / width)),
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">3</span>] / height)),
    ]`}}),zo=new tt({props:{code:`from PIL import Image

image = Image.open("name_of_your_document - can be a png file, pdf, etc.")

width, height = image.size`,highlighted:`<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>)

width, height = image.size`}}),No=new De({}),So=new _e({props:{name:"class transformers.LayoutLMConfig",anchor:"transformers.LayoutLMConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the LayoutLM model. Defines the different tokens that can be represented by the
<em>inputs_ids</em> passed to the forward method of <a href="/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMModel">LayoutLMModel</a>.`,name:"vocab_size"},{anchor:"transformers.LayoutLMConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.LayoutLMConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.LayoutLMConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.LayoutLMConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.LayoutLMConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.LayoutLMConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.LayoutLMConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.LayoutLMConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.LayoutLMConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed into <a href="/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMModel">LayoutLMModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.LayoutLMConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.LayoutLMConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LayoutLMConfig.max_2d_position_embeddings",description:`<strong>max_2d_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum value that the 2D position embedding might ever used. Typically set this to something large
just in case (e.g., 1024).`,name:"max_2d_position_embeddings"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlm/configuration_layoutlm.py#L35"}}),Ct=new zt({props:{anchor:"transformers.LayoutLMConfig.example",$$slots:{default:[uu]},$$scope:{ctx:E}}}),Oo=new De({}),Do=new _e({props:{name:"class transformers.LayoutLMTokenizer",anchor:"transformers.LayoutLMTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlm/tokenization_layoutlm.py#L46"}}),Uo=new De({}),Wo=new _e({props:{name:"class transformers.LayoutLMTokenizerFast",anchor:"transformers.LayoutLMTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlm/tokenization_layoutlm_fast.py#L51"}}),Bo=new De({}),Ro=new _e({props:{name:"class transformers.LayoutLMModel",anchor:"transformers.LayoutLMModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlm/modeling_layoutlm.py#L706"}}),Zo=new _e({props:{name:"forward",anchor:"transformers.LayoutLMModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMModel.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner. See <a href="#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LayoutLMModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>: <code>1</code> for
tokens that are NOT MASKED, <code>0</code> for MASKED tokens.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>: <code>0</code> corresponds to a <em>sentence A</em> token, <code>1</code> corresponds to a <em>sentence B</em> token</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: <code>1</code>
indicates the head is <strong>not masked</strong>, <code>0</code> indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.LayoutLMModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the attentions tensors of all attention layers are returned. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the hidden states of all layers are returned. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlm/modeling_layoutlm.py#L732",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Dt=new Qe({props:{$$slots:{default:[mu]},$$scope:{ctx:E}}}),At=new zt({props:{anchor:"transformers.LayoutLMModel.forward.example",$$slots:{default:[fu]},$$scope:{ctx:E}}}),Go=new De({}),Jo=new _e({props:{name:"class transformers.LayoutLMForMaskedLM",anchor:"transformers.LayoutLMForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlm/modeling_layoutlm.py#L854"}}),on=new _e({props:{name:"forward",anchor:"transformers.LayoutLMForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMForMaskedLM.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner. See <a href="#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LayoutLMForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>: <code>1</code> for
tokens that are NOT MASKED, <code>0</code> for MASKED tokens.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>: <code>0</code> corresponds to a <em>sentence A</em> token, <code>1</code> corresponds to a <em>sentence B</em> token</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: <code>1</code>
indicates the head is <strong>not masked</strong>, <code>0</code> indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.LayoutLMForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the attentions tensors of all attention layers are returned. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the hidden states of all layers are returned. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlm/modeling_layoutlm.py#L873",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wt=new Qe({props:{$$slots:{default:[gu]},$$scope:{ctx:E}}}),Ht=new zt({props:{anchor:"transformers.LayoutLMForMaskedLM.forward.example",$$slots:{default:[_u]},$$scope:{ctx:E}}}),nn=new De({}),sn=new _e({props:{name:"class transformers.LayoutLMForSequenceClassification",anchor:"transformers.LayoutLMForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlm/modeling_layoutlm.py#L983"}}),hn=new _e({props:{name:"forward",anchor:"transformers.LayoutLMForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner. See <a href="#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>: <code>1</code> for
tokens that are NOT MASKED, <code>0</code> for MASKED tokens.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>: <code>0</code> corresponds to a <em>sentence A</em> token, <code>1</code> corresponds to a <em>sentence B</em> token</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: <code>1</code>
indicates the head is <strong>not masked</strong>, <code>0</code> indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the attentions tensors of all attention layers are returned. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the hidden states of all layers are returned. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlm/modeling_layoutlm.py#L997",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rt=new Qe({props:{$$slots:{default:[yu]},$$scope:{ctx:E}}}),Kt=new zt({props:{anchor:"transformers.LayoutLMForSequenceClassification.forward.example",$$slots:{default:[bu]},$$scope:{ctx:E}}}),un=new De({}),mn=new _e({props:{name:"class transformers.LayoutLMForTokenClassification",anchor:"transformers.LayoutLMForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlm/modeling_layoutlm.py#L1120"}}),Ln=new _e({props:{name:"forward",anchor:"transformers.LayoutLMForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMForTokenClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner. See <a href="#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LayoutLMForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>: <code>1</code> for
tokens that are NOT MASKED, <code>0</code> for MASKED tokens.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>: <code>0</code> corresponds to a <em>sentence A</em> token, <code>1</code> corresponds to a <em>sentence B</em> token</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: <code>1</code>
indicates the head is <strong>not masked</strong>, <code>0</code> indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.LayoutLMForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the attentions tensors of all attention layers are returned. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the hidden states of all layers are returned. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlm/modeling_layoutlm.py#L1134",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
`}}),Xt=new Qe({props:{$$slots:{default:[ku]},$$scope:{ctx:E}}}),Yt=new zt({props:{anchor:"transformers.LayoutLMForTokenClassification.forward.example",$$slots:{default:[Lu]},$$scope:{ctx:E}}}),wn=new De({}),Tn=new _e({props:{name:"class transformers.TFLayoutLMModel",anchor:"transformers.TFLayoutLMModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L905"}}),Gt=new Qe({props:{$$slots:{default:[wu]},$$scope:{ctx:E}}}),xn=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLayoutLMModel.call.bbox",description:`<strong>bbox</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding Boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings- 1]</code>.`,name:"bbox"},{anchor:"transformers.TFLayoutLMModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLayoutLMModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLayoutLMModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLayoutLMModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLayoutLMModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLayoutLMModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFLayoutLMModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFLayoutLMModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L911",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Jt=new Qe({props:{$$slots:{default:[Tu]},$$scope:{ctx:E}}}),Qt=new zt({props:{anchor:"transformers.TFLayoutLMModel.call.example",$$slots:{default:[vu]},$$scope:{ctx:E}}}),jn=new De({}),Fn=new _e({props:{name:"class transformers.TFLayoutLMForMaskedLM",anchor:"transformers.TFLayoutLMForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1006"}}),to=new Qe({props:{$$slots:{default:[Mu]},$$scope:{ctx:E}}}),Pn=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.bbox",description:`<strong>bbox</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding Boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings- 1]</code>.`,name:"bbox"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1034",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),oo=new Qe({props:{$$slots:{default:[$u]},$$scope:{ctx:E}}}),no=new zt({props:{anchor:"transformers.TFLayoutLMForMaskedLM.call.example",$$slots:{default:[xu]},$$scope:{ctx:E}}}),Nn=new De({}),Sn=new _e({props:{name:"class transformers.TFLayoutLMForSequenceClassification",anchor:"transformers.TFLayoutLMForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1140"}}),ao=new Qe({props:{$$slots:{default:[ju]},$$scope:{ctx:E}}}),An=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.bbox",description:`<strong>bbox</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding Boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings- 1]</code>.`,name:"bbox"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1158",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ro=new Qe({props:{$$slots:{default:[Fu]},$$scope:{ctx:E}}}),io=new zt({props:{anchor:"transformers.TFLayoutLMForSequenceClassification.call.example",$$slots:{default:[zu]},$$scope:{ctx:E}}}),Un=new De({}),Wn=new _e({props:{name:"class transformers.TFLayoutLMForTokenClassification",anchor:"transformers.TFLayoutLMForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1265"}}),co=new Qe({props:{$$slots:{default:[Eu]},$$scope:{ctx:E}}}),Kn=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.bbox",description:`<strong>bbox</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding Boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings- 1]</code>.`,name:"bbox"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1289",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),po=new Qe({props:{$$slots:{default:[qu]},$$scope:{ctx:E}}}),ho=new zt({props:{anchor:"transformers.TFLayoutLMForTokenClassification.call.example",$$slots:{default:[Cu]},$$scope:{ctx:E}}}),{c(){d=a("meta"),k=c(),_=a("h1"),u=a("a"),b=a("span"),L(l.$$.fragment),m=c(),j=a("span"),re=n("LayoutLM"),Y=c(),z=a("a"),ae=c(),O=a("h2"),Z=a("a"),ne=a("span"),L(A.$$.fragment),ie=c(),se=a("span"),J=n("Overview"),D=c(),G=a("p"),Q=n("The LayoutLM model was proposed in the paper "),F=a("a"),q=n(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),le=n(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei, and
Ming Zhou. It\u2019s a simple but effective pretraining method of text and layout for document image understanding and
information extraction tasks, such as form understanding and receipt understanding. It obtains state-of-the-art results
on several downstream tasks:`),H=c(),V=a("ul"),ee=a("li"),B=n("form understanding: the "),te=a("a"),de=n("FUNSD"),C=n(` dataset (a collection of 199 annotated
forms comprising more than 30,000 words).`),ce=c(),U=a("li"),pe=n("receipt understanding: the "),oe=a("a"),R=n("SROIE"),he=n(` dataset (a collection of 626 receipts for
training and 347 receipts for testing).`),ue=c(),N=a("li"),me=n("document image classification: the "),W=a("a"),fe=n("RVL-CDIP"),g=n(` dataset (a collection of
400,000 images belonging to one of 16 classes).`),x=c(),X=a("p"),je=n("The abstract from the paper is the following:"),Me=c(),S=a("p"),be=a("em"),Fe=n(`Pre-training techniques have been verified successfully in a variety of NLP tasks in recent years. Despite the
widespread use of pretraining models for NLP applications, they almost exclusively focus on text-level manipulation,
while neglecting layout and style information that is vital for document image understanding. In this paper, we propose
the LayoutLM to jointly model interactions between text and layout information across scanned document images, which is
beneficial for a great number of real-world document image understanding tasks such as information extraction from
scanned documents. Furthermore, we also leverage image features to incorporate words\u2019 visual information into LayoutLM.
To the best of our knowledge, this is the first time that text and layout are jointly learned in a single framework for
document-level pretraining. It achieves new state-of-the-art results in several downstream tasks, including form
understanding (from 70.72 to 79.27), receipt understanding (from 94.02 to 95.24) and document image classification
(from 93.07 to 94.42).`),$e=c(),I=a("p"),K=n("Tips:"),xe=c(),ye=a("ul"),P=a("li"),ze=n("In addition to "),ke=a("em"),ge=n("input_ids"),Ee=n(", "),Qn=a("a"),Hr=n("forward()"),Br=n(" also expects the input "),Is=a("code"),Rr=n("bbox"),Kr=n(`, which are
the bounding boxes (i.e. 2D-positions) of the input tokens. These can be obtained using an external OCR engine such
as Google\u2019s `),xo=a("a"),Vr=n("Tesseract"),Xr=n(" (there\u2019s a "),jo=a("a"),Yr=n("Python wrapper"),Zr=n(` available). Each bounding box should be in (x0, y0, x1, y1) format, where
(x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1) represents the
position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on a 0-1000
scale. To normalize, you can use the following function:`),Da=c(),L(Fo.$$.fragment),Aa=c(),ot=a("p"),Gr=n("Here, "),Os=a("code"),Jr=n("width"),Qr=n(" and "),Ds=a("code"),ei=n("height"),ti=n(` correspond to the width and height of the original document in which the token
occurs. Those can be obtained using the Python Image Library (PIL) library for example, as follows:`),Ua=c(),L(zo.$$.fragment),Wa=c(),es=a("ul"),et=a("li"),oi=n("For a demo which shows how to fine-tune "),ts=a("a"),ni=n("LayoutLMForTokenClassification"),si=n(" on the "),Eo=a("a"),ai=n("FUNSD dataset"),ri=n(" (a collection of annotated forms), see "),qo=a("a"),ii=n("this notebook"),li=n(`.
It includes an inference part, which shows how to use Google\u2019s Tesseract on a new document.`),Ha=c(),nt=a("p"),di=n("This model was contributed by "),Co=a("a"),ci=n("liminghao1630"),pi=n(`. The original code can be found
`),Po=a("a"),hi=n("here"),ui=n("."),Ba=c(),rt=a("h2"),qt=a("a"),As=a("span"),L(No.$$.fragment),mi=c(),Us=a("span"),fi=n("LayoutLMConfig"),Ra=c(),Pe=a("div"),L(So.$$.fragment),gi=c(),it=a("p"),_i=n("This is the configuration class to store the configuration of a "),os=a("a"),yi=n("LayoutLMModel"),bi=n(`. It is used to instantiate a
LayoutLM model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the LayoutLM
`),Io=a("a"),ki=n("layoutlm-base-uncased"),Li=n(" architecture."),wi=c(),lt=a("p"),Ti=n("Configuration objects inherit from "),ns=a("a"),vi=n("BertConfig"),Mi=n(` and can be used to control the model outputs. Read the
documentation from `),ss=a("a"),$i=n("BertConfig"),xi=n(" for more information."),ji=c(),L(Ct.$$.fragment),Ka=c(),dt=a("h2"),Pt=a("a"),Ws=a("span"),L(Oo.$$.fragment),Fi=c(),Hs=a("span"),zi=n("LayoutLMTokenizer"),Va=c(),Ne=a("div"),L(Do.$$.fragment),Ei=c(),Bs=a("p"),qi=n("Constructs a LayoutLM tokenizer."),Ci=c(),Nt=a("p"),as=a("a"),Pi=n("LayoutLMTokenizer"),Ni=n(" is identical to "),rs=a("a"),Si=n("BertTokenizer"),Ii=n(` and runs end-to-end tokenization: punctuation splitting +
wordpiece.`),Oi=c(),Ao=a("p"),Di=n("Refer to superclass "),is=a("a"),Ai=n("BertTokenizer"),Ui=n(" for usage examples and documentation concerning parameters."),Xa=c(),ct=a("h2"),St=a("a"),Rs=a("span"),L(Uo.$$.fragment),Wi=c(),Ks=a("span"),Hi=n("LayoutLMTokenizerFast"),Ya=c(),Se=a("div"),L(Wo.$$.fragment),Bi=c(),Vs=a("p"),Ri=n("Constructs a \u201CFast\u201D LayoutLMTokenizer."),Ki=c(),It=a("p"),ls=a("a"),Vi=n("LayoutLMTokenizerFast"),Xi=n(" is identical to "),ds=a("a"),Yi=n("BertTokenizerFast"),Zi=n(` and runs end-to-end tokenization: punctuation
splitting + wordpiece.`),Gi=c(),Ho=a("p"),Ji=n("Refer to superclass "),cs=a("a"),Qi=n("BertTokenizerFast"),el=n(" for usage examples and documentation concerning parameters."),Za=c(),pt=a("h2"),Ot=a("a"),Xs=a("span"),L(Bo.$$.fragment),tl=c(),Ys=a("span"),ol=n("LayoutLMModel"),Ga=c(),Ie=a("div"),L(Ro.$$.fragment),nl=c(),Ko=a("p"),sl=n(`The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top.
The LayoutLM model was proposed in `),Vo=a("a"),al=n(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),rl=n(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),il=c(),Xo=a("p"),ll=n("This model is a PyTorch "),Yo=a("a"),dl=n("torch.nn.Module"),cl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pl=c(),Ae=a("div"),L(Zo.$$.fragment),hl=c(),ht=a("p"),ul=n("The "),ps=a("a"),ml=n("LayoutLMModel"),fl=n(" forward method, overrides the "),Zs=a("code"),gl=n("__call__"),_l=n(" special method."),yl=c(),L(Dt.$$.fragment),bl=c(),L(At.$$.fragment),Ja=c(),ut=a("h2"),Ut=a("a"),Gs=a("span"),L(Go.$$.fragment),kl=c(),Js=a("span"),Ll=n("LayoutLMForMaskedLM"),Qa=c(),Oe=a("div"),L(Jo.$$.fragment),wl=c(),mt=a("p"),Tl=n("LayoutLM Model with a "),Qs=a("code"),vl=n("language modeling"),Ml=n(` head on top.
The LayoutLM model was proposed in `),Qo=a("a"),$l=n(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),xl=n(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),jl=c(),en=a("p"),Fl=n("This model is a PyTorch "),tn=a("a"),zl=n("torch.nn.Module"),El=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ql=c(),Ue=a("div"),L(on.$$.fragment),Cl=c(),ft=a("p"),Pl=n("The "),hs=a("a"),Nl=n("LayoutLMForMaskedLM"),Sl=n(" forward method, overrides the "),ea=a("code"),Il=n("__call__"),Ol=n(" special method."),Dl=c(),L(Wt.$$.fragment),Al=c(),L(Ht.$$.fragment),er=c(),gt=a("h2"),Bt=a("a"),ta=a("span"),L(nn.$$.fragment),Ul=c(),oa=a("span"),Wl=n("LayoutLMForSequenceClassification"),tr=c(),qe=a("div"),L(sn.$$.fragment),Hl=c(),an=a("p"),Bl=n(`LayoutLM Model with a sequence classification head on top (a linear layer on top of the pooled output) e.g. for
document image classification tasks such as the `),rn=a("a"),Rl=n("RVL-CDIP"),Kl=n(" dataset."),Vl=c(),ln=a("p"),Xl=n("The LayoutLM model was proposed in "),dn=a("a"),Yl=n(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Zl=n(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),Gl=c(),cn=a("p"),Jl=n("This model is a PyTorch "),pn=a("a"),Ql=n("torch.nn.Module"),ed=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),td=c(),We=a("div"),L(hn.$$.fragment),od=c(),_t=a("p"),nd=n("The "),us=a("a"),sd=n("LayoutLMForSequenceClassification"),ad=n(" forward method, overrides the "),na=a("code"),rd=n("__call__"),id=n(" special method."),ld=c(),L(Rt.$$.fragment),dd=c(),L(Kt.$$.fragment),or=c(),yt=a("h2"),Vt=a("a"),sa=a("span"),L(un.$$.fragment),cd=c(),aa=a("span"),pd=n("LayoutLMForTokenClassification"),nr=c(),Ce=a("div"),L(mn.$$.fragment),hd=c(),bt=a("p"),ud=n(`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
sequence labeling (information extraction) tasks such as the `),fn=a("a"),md=n("FUNSD"),fd=n(`
dataset and the `),gn=a("a"),gd=n("SROIE"),_d=n(" dataset."),yd=c(),_n=a("p"),bd=n("The LayoutLM model was proposed in "),yn=a("a"),kd=n(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Ld=n(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),wd=c(),bn=a("p"),Td=n("This model is a PyTorch "),kn=a("a"),vd=n("torch.nn.Module"),Md=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),$d=c(),He=a("div"),L(Ln.$$.fragment),xd=c(),kt=a("p"),jd=n("The "),ms=a("a"),Fd=n("LayoutLMForTokenClassification"),zd=n(" forward method, overrides the "),ra=a("code"),Ed=n("__call__"),qd=n(" special method."),Cd=c(),L(Xt.$$.fragment),Pd=c(),L(Yt.$$.fragment),sr=c(),Lt=a("h2"),Zt=a("a"),ia=a("span"),L(wn.$$.fragment),Nd=c(),la=a("span"),Sd=n("TFLayoutLMModel"),ar=c(),Le=a("div"),L(Tn.$$.fragment),Id=c(),da=a("p"),Od=n("The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top."),Dd=c(),vn=a("p"),Ad=n("This model inherits from "),fs=a("a"),Ud=n("TFPreTrainedModel"),Wd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hd=c(),Mn=a("p"),Bd=n("This model is also a "),$n=a("a"),Rd=n("tf.keras.Model"),Kd=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vd=c(),L(Gt.$$.fragment),Xd=c(),Be=a("div"),L(xn.$$.fragment),Yd=c(),wt=a("p"),Zd=n("The "),gs=a("a"),Gd=n("TFLayoutLMModel"),Jd=n(" forward method, overrides the "),ca=a("code"),Qd=n("__call__"),ec=n(" special method."),tc=c(),L(Jt.$$.fragment),oc=c(),L(Qt.$$.fragment),rr=c(),Tt=a("h2"),eo=a("a"),pa=a("span"),L(jn.$$.fragment),nc=c(),ha=a("span"),sc=n("TFLayoutLMForMaskedLM"),ir=c(),we=a("div"),L(Fn.$$.fragment),ac=c(),zn=a("p"),rc=n("LayoutLM Model with a "),ua=a("code"),ic=n("language modeling"),lc=n(" head on top."),dc=c(),En=a("p"),cc=n("This model inherits from "),_s=a("a"),pc=n("TFPreTrainedModel"),hc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uc=c(),qn=a("p"),mc=n("This model is also a "),Cn=a("a"),fc=n("tf.keras.Model"),gc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_c=c(),L(to.$$.fragment),yc=c(),Re=a("div"),L(Pn.$$.fragment),bc=c(),vt=a("p"),kc=n("The "),ys=a("a"),Lc=n("TFLayoutLMForMaskedLM"),wc=n(" forward method, overrides the "),ma=a("code"),Tc=n("__call__"),vc=n(" special method."),Mc=c(),L(oo.$$.fragment),$c=c(),L(no.$$.fragment),lr=c(),Mt=a("h2"),so=a("a"),fa=a("span"),L(Nn.$$.fragment),xc=c(),ga=a("span"),jc=n("TFLayoutLMForSequenceClassification"),dr=c(),Te=a("div"),L(Sn.$$.fragment),Fc=c(),_a=a("p"),zc=n(`LayoutLM Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ec=c(),In=a("p"),qc=n("This model inherits from "),bs=a("a"),Cc=n("TFPreTrainedModel"),Pc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nc=c(),On=a("p"),Sc=n("This model is also a "),Dn=a("a"),Ic=n("tf.keras.Model"),Oc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dc=c(),L(ao.$$.fragment),Ac=c(),Ke=a("div"),L(An.$$.fragment),Uc=c(),$t=a("p"),Wc=n("The "),ks=a("a"),Hc=n("TFLayoutLMForSequenceClassification"),Bc=n(" forward method, overrides the "),ya=a("code"),Rc=n("__call__"),Kc=n(" special method."),Vc=c(),L(ro.$$.fragment),Xc=c(),L(io.$$.fragment),cr=c(),xt=a("h2"),lo=a("a"),ba=a("span"),L(Un.$$.fragment),Yc=c(),ka=a("span"),Zc=n("TFLayoutLMForTokenClassification"),pr=c(),ve=a("div"),L(Wn.$$.fragment),Gc=c(),La=a("p"),Jc=n(`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Qc=c(),Hn=a("p"),ep=n("This model inherits from "),Ls=a("a"),tp=n("TFPreTrainedModel"),op=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),np=c(),Bn=a("p"),sp=n("This model is also a "),Rn=a("a"),ap=n("tf.keras.Model"),rp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ip=c(),L(co.$$.fragment),lp=c(),Ve=a("div"),L(Kn.$$.fragment),dp=c(),jt=a("p"),cp=n("The "),ws=a("a"),pp=n("TFLayoutLMForTokenClassification"),hp=n(" forward method, overrides the "),wa=a("code"),up=n("__call__"),mp=n(" special method."),fp=c(),L(po.$$.fragment),gp=c(),L(ho.$$.fragment),this.h()},l(o){const y=pu('[data-svelte="svelte-1phssyn"]',document.head);d=r(y,"META",{name:!0,content:!0}),y.forEach(t),k=p(o),_=r(o,"H1",{class:!0});var Vn=i(_);u=r(Vn,"A",{id:!0,class:!0,href:!0});var Ta=i(u);b=r(Ta,"SPAN",{});var va=i(b);w(l.$$.fragment,va),va.forEach(t),Ta.forEach(t),m=p(Vn),j=r(Vn,"SPAN",{});var Ma=i(j);re=s(Ma,"LayoutLM"),Ma.forEach(t),Vn.forEach(t),Y=p(o),z=r(o,"A",{id:!0}),i(z).forEach(t),ae=p(o),O=r(o,"H2",{class:!0});var Xn=i(O);Z=r(Xn,"A",{id:!0,class:!0,href:!0});var $a=i(Z);ne=r($a,"SPAN",{});var xa=i(ne);w(A.$$.fragment,xa),xa.forEach(t),$a.forEach(t),ie=p(Xn),se=r(Xn,"SPAN",{});var ja=i(se);J=s(ja,"Overview"),ja.forEach(t),Xn.forEach(t),D=p(o),G=r(o,"P",{});var Yn=i(G);Q=s(Yn,"The LayoutLM model was proposed in the paper "),F=r(Yn,"A",{href:!0,rel:!0});var Fa=i(F);q=s(Fa,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Fa.forEach(t),le=s(Yn,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei, and
Ming Zhou. It\u2019s a simple but effective pretraining method of text and layout for document image understanding and
information extraction tasks, such as form understanding and receipt understanding. It obtains state-of-the-art results
on several downstream tasks:`),Yn.forEach(t),H=p(o),V=r(o,"UL",{});var Ft=i(V);ee=r(Ft,"LI",{});var Zn=i(ee);B=s(Zn,"form understanding: the "),te=r(Zn,"A",{href:!0,rel:!0});var za=i(te);de=s(za,"FUNSD"),za.forEach(t),C=s(Zn,` dataset (a collection of 199 annotated
forms comprising more than 30,000 words).`),Zn.forEach(t),ce=p(Ft),U=r(Ft,"LI",{});var Gn=i(U);pe=s(Gn,"receipt understanding: the "),oe=r(Gn,"A",{href:!0,rel:!0});var Ea=i(oe);R=s(Ea,"SROIE"),Ea.forEach(t),he=s(Gn,` dataset (a collection of 626 receipts for
training and 347 receipts for testing).`),Gn.forEach(t),ue=p(Ft),N=r(Ft,"LI",{});var Jn=i(N);me=s(Jn,"document image classification: the "),W=r(Jn,"A",{href:!0,rel:!0});var qa=i(W);fe=s(qa,"RVL-CDIP"),qa.forEach(t),g=s(Jn,` dataset (a collection of
400,000 images belonging to one of 16 classes).`),Jn.forEach(t),Ft.forEach(t),x=p(o),X=r(o,"P",{});var Ca=i(X);je=s(Ca,"The abstract from the paper is the following:"),Ca.forEach(t),Me=p(o),S=r(o,"P",{});var Pa=i(S);be=r(Pa,"EM",{});var Na=i(be);Fe=s(Na,`Pre-training techniques have been verified successfully in a variety of NLP tasks in recent years. Despite the
widespread use of pretraining models for NLP applications, they almost exclusively focus on text-level manipulation,
while neglecting layout and style information that is vital for document image understanding. In this paper, we propose
the LayoutLM to jointly model interactions between text and layout information across scanned document images, which is
beneficial for a great number of real-world document image understanding tasks such as information extraction from
scanned documents. Furthermore, we also leverage image features to incorporate words\u2019 visual information into LayoutLM.
To the best of our knowledge, this is the first time that text and layout are jointly learned in a single framework for
document-level pretraining. It achieves new state-of-the-art results in several downstream tasks, including form
understanding (from 70.72 to 79.27), receipt understanding (from 94.02 to 95.24) and document image classification
(from 93.07 to 94.42).`),Na.forEach(t),Pa.forEach(t),$e=p(o),I=r(o,"P",{});var Sa=i(I);K=s(Sa,"Tips:"),Sa.forEach(t),xe=p(o),ye=r(o,"UL",{});var _p=i(ye);P=r(_p,"LI",{});var Xe=i(P);ze=s(Xe,"In addition to "),ke=r(Xe,"EM",{});var yp=i(ke);ge=s(yp,"input_ids"),yp.forEach(t),Ee=s(Xe,", "),Qn=r(Xe,"A",{href:!0});var bp=i(Qn);Hr=s(bp,"forward()"),bp.forEach(t),Br=s(Xe," also expects the input "),Is=r(Xe,"CODE",{});var kp=i(Is);Rr=s(kp,"bbox"),kp.forEach(t),Kr=s(Xe,`, which are
the bounding boxes (i.e. 2D-positions) of the input tokens. These can be obtained using an external OCR engine such
as Google\u2019s `),xo=r(Xe,"A",{href:!0,rel:!0});var Lp=i(xo);Vr=s(Lp,"Tesseract"),Lp.forEach(t),Xr=s(Xe," (there\u2019s a "),jo=r(Xe,"A",{href:!0,rel:!0});var wp=i(jo);Yr=s(wp,"Python wrapper"),wp.forEach(t),Zr=s(Xe,` available). Each bounding box should be in (x0, y0, x1, y1) format, where
(x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1) represents the
position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on a 0-1000
scale. To normalize, you can use the following function:`),Xe.forEach(t),_p.forEach(t),Da=p(o),w(Fo.$$.fragment,o),Aa=p(o),ot=r(o,"P",{});var Ts=i(ot);Gr=s(Ts,"Here, "),Os=r(Ts,"CODE",{});var Tp=i(Os);Jr=s(Tp,"width"),Tp.forEach(t),Qr=s(Ts," and "),Ds=r(Ts,"CODE",{});var vp=i(Ds);ei=s(vp,"height"),vp.forEach(t),ti=s(Ts,` correspond to the width and height of the original document in which the token
occurs. Those can be obtained using the Python Image Library (PIL) library for example, as follows:`),Ts.forEach(t),Ua=p(o),w(zo.$$.fragment,o),Wa=p(o),es=r(o,"UL",{});var Mp=i(es);et=r(Mp,"LI",{});var uo=i(et);oi=s(uo,"For a demo which shows how to fine-tune "),ts=r(uo,"A",{href:!0});var $p=i(ts);ni=s($p,"LayoutLMForTokenClassification"),$p.forEach(t),si=s(uo," on the "),Eo=r(uo,"A",{href:!0,rel:!0});var xp=i(Eo);ai=s(xp,"FUNSD dataset"),xp.forEach(t),ri=s(uo," (a collection of annotated forms), see "),qo=r(uo,"A",{href:!0,rel:!0});var jp=i(qo);ii=s(jp,"this notebook"),jp.forEach(t),li=s(uo,`.
It includes an inference part, which shows how to use Google\u2019s Tesseract on a new document.`),uo.forEach(t),Mp.forEach(t),Ha=p(o),nt=r(o,"P",{});var vs=i(nt);di=s(vs,"This model was contributed by "),Co=r(vs,"A",{href:!0,rel:!0});var Fp=i(Co);ci=s(Fp,"liminghao1630"),Fp.forEach(t),pi=s(vs,`. The original code can be found
`),Po=r(vs,"A",{href:!0,rel:!0});var zp=i(Po);hi=s(zp,"here"),zp.forEach(t),ui=s(vs,"."),vs.forEach(t),Ba=p(o),rt=r(o,"H2",{class:!0});var ur=i(rt);qt=r(ur,"A",{id:!0,class:!0,href:!0});var Ep=i(qt);As=r(Ep,"SPAN",{});var qp=i(As);w(No.$$.fragment,qp),qp.forEach(t),Ep.forEach(t),mi=p(ur),Us=r(ur,"SPAN",{});var Cp=i(Us);fi=s(Cp,"LayoutLMConfig"),Cp.forEach(t),ur.forEach(t),Ra=p(o),Pe=r(o,"DIV",{class:!0});var mo=i(Pe);w(So.$$.fragment,mo),gi=p(mo),it=r(mo,"P",{});var Ms=i(it);_i=s(Ms,"This is the configuration class to store the configuration of a "),os=r(Ms,"A",{href:!0});var Pp=i(os);yi=s(Pp,"LayoutLMModel"),Pp.forEach(t),bi=s(Ms,`. It is used to instantiate a
LayoutLM model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the LayoutLM
`),Io=r(Ms,"A",{href:!0,rel:!0});var Np=i(Io);ki=s(Np,"layoutlm-base-uncased"),Np.forEach(t),Li=s(Ms," architecture."),Ms.forEach(t),wi=p(mo),lt=r(mo,"P",{});var $s=i(lt);Ti=s($s,"Configuration objects inherit from "),ns=r($s,"A",{href:!0});var Sp=i(ns);vi=s(Sp,"BertConfig"),Sp.forEach(t),Mi=s($s,` and can be used to control the model outputs. Read the
documentation from `),ss=r($s,"A",{href:!0});var Ip=i(ss);$i=s(Ip,"BertConfig"),Ip.forEach(t),xi=s($s," for more information."),$s.forEach(t),ji=p(mo),w(Ct.$$.fragment,mo),mo.forEach(t),Ka=p(o),dt=r(o,"H2",{class:!0});var mr=i(dt);Pt=r(mr,"A",{id:!0,class:!0,href:!0});var Op=i(Pt);Ws=r(Op,"SPAN",{});var Dp=i(Ws);w(Oo.$$.fragment,Dp),Dp.forEach(t),Op.forEach(t),Fi=p(mr),Hs=r(mr,"SPAN",{});var Ap=i(Hs);zi=s(Ap,"LayoutLMTokenizer"),Ap.forEach(t),mr.forEach(t),Va=p(o),Ne=r(o,"DIV",{class:!0});var fo=i(Ne);w(Do.$$.fragment,fo),Ei=p(fo),Bs=r(fo,"P",{});var Up=i(Bs);qi=s(Up,"Constructs a LayoutLM tokenizer."),Up.forEach(t),Ci=p(fo),Nt=r(fo,"P",{});var Ia=i(Nt);as=r(Ia,"A",{href:!0});var Wp=i(as);Pi=s(Wp,"LayoutLMTokenizer"),Wp.forEach(t),Ni=s(Ia," is identical to "),rs=r(Ia,"A",{href:!0});var Hp=i(rs);Si=s(Hp,"BertTokenizer"),Hp.forEach(t),Ii=s(Ia,` and runs end-to-end tokenization: punctuation splitting +
wordpiece.`),Ia.forEach(t),Oi=p(fo),Ao=r(fo,"P",{});var fr=i(Ao);Di=s(fr,"Refer to superclass "),is=r(fr,"A",{href:!0});var Bp=i(is);Ai=s(Bp,"BertTokenizer"),Bp.forEach(t),Ui=s(fr," for usage examples and documentation concerning parameters."),fr.forEach(t),fo.forEach(t),Xa=p(o),ct=r(o,"H2",{class:!0});var gr=i(ct);St=r(gr,"A",{id:!0,class:!0,href:!0});var Rp=i(St);Rs=r(Rp,"SPAN",{});var Kp=i(Rs);w(Uo.$$.fragment,Kp),Kp.forEach(t),Rp.forEach(t),Wi=p(gr),Ks=r(gr,"SPAN",{});var Vp=i(Ks);Hi=s(Vp,"LayoutLMTokenizerFast"),Vp.forEach(t),gr.forEach(t),Ya=p(o),Se=r(o,"DIV",{class:!0});var go=i(Se);w(Wo.$$.fragment,go),Bi=p(go),Vs=r(go,"P",{});var Xp=i(Vs);Ri=s(Xp,"Constructs a \u201CFast\u201D LayoutLMTokenizer."),Xp.forEach(t),Ki=p(go),It=r(go,"P",{});var Oa=i(It);ls=r(Oa,"A",{href:!0});var Yp=i(ls);Vi=s(Yp,"LayoutLMTokenizerFast"),Yp.forEach(t),Xi=s(Oa," is identical to "),ds=r(Oa,"A",{href:!0});var Zp=i(ds);Yi=s(Zp,"BertTokenizerFast"),Zp.forEach(t),Zi=s(Oa,` and runs end-to-end tokenization: punctuation
splitting + wordpiece.`),Oa.forEach(t),Gi=p(go),Ho=r(go,"P",{});var _r=i(Ho);Ji=s(_r,"Refer to superclass "),cs=r(_r,"A",{href:!0});var Gp=i(cs);Qi=s(Gp,"BertTokenizerFast"),Gp.forEach(t),el=s(_r," for usage examples and documentation concerning parameters."),_r.forEach(t),go.forEach(t),Za=p(o),pt=r(o,"H2",{class:!0});var yr=i(pt);Ot=r(yr,"A",{id:!0,class:!0,href:!0});var Jp=i(Ot);Xs=r(Jp,"SPAN",{});var Qp=i(Xs);w(Bo.$$.fragment,Qp),Qp.forEach(t),Jp.forEach(t),tl=p(yr),Ys=r(yr,"SPAN",{});var eh=i(Ys);ol=s(eh,"LayoutLMModel"),eh.forEach(t),yr.forEach(t),Ga=p(o),Ie=r(o,"DIV",{class:!0});var _o=i(Ie);w(Ro.$$.fragment,_o),nl=p(_o),Ko=r(_o,"P",{});var br=i(Ko);sl=s(br,`The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top.
The LayoutLM model was proposed in `),Vo=r(br,"A",{href:!0,rel:!0});var th=i(Vo);al=s(th,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),th.forEach(t),rl=s(br,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),br.forEach(t),il=p(_o),Xo=r(_o,"P",{});var kr=i(Xo);ll=s(kr,"This model is a PyTorch "),Yo=r(kr,"A",{href:!0,rel:!0});var oh=i(Yo);dl=s(oh,"torch.nn.Module"),oh.forEach(t),cl=s(kr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),kr.forEach(t),pl=p(_o),Ae=r(_o,"DIV",{class:!0});var yo=i(Ae);w(Zo.$$.fragment,yo),hl=p(yo),ht=r(yo,"P",{});var xs=i(ht);ul=s(xs,"The "),ps=r(xs,"A",{href:!0});var nh=i(ps);ml=s(nh,"LayoutLMModel"),nh.forEach(t),fl=s(xs," forward method, overrides the "),Zs=r(xs,"CODE",{});var sh=i(Zs);gl=s(sh,"__call__"),sh.forEach(t),_l=s(xs," special method."),xs.forEach(t),yl=p(yo),w(Dt.$$.fragment,yo),bl=p(yo),w(At.$$.fragment,yo),yo.forEach(t),_o.forEach(t),Ja=p(o),ut=r(o,"H2",{class:!0});var Lr=i(ut);Ut=r(Lr,"A",{id:!0,class:!0,href:!0});var ah=i(Ut);Gs=r(ah,"SPAN",{});var rh=i(Gs);w(Go.$$.fragment,rh),rh.forEach(t),ah.forEach(t),kl=p(Lr),Js=r(Lr,"SPAN",{});var ih=i(Js);Ll=s(ih,"LayoutLMForMaskedLM"),ih.forEach(t),Lr.forEach(t),Qa=p(o),Oe=r(o,"DIV",{class:!0});var bo=i(Oe);w(Jo.$$.fragment,bo),wl=p(bo),mt=r(bo,"P",{});var js=i(mt);Tl=s(js,"LayoutLM Model with a "),Qs=r(js,"CODE",{});var lh=i(Qs);vl=s(lh,"language modeling"),lh.forEach(t),Ml=s(js,` head on top.
The LayoutLM model was proposed in `),Qo=r(js,"A",{href:!0,rel:!0});var dh=i(Qo);$l=s(dh,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),dh.forEach(t),xl=s(js,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),js.forEach(t),jl=p(bo),en=r(bo,"P",{});var wr=i(en);Fl=s(wr,"This model is a PyTorch "),tn=r(wr,"A",{href:!0,rel:!0});var ch=i(tn);zl=s(ch,"torch.nn.Module"),ch.forEach(t),El=s(wr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wr.forEach(t),ql=p(bo),Ue=r(bo,"DIV",{class:!0});var ko=i(Ue);w(on.$$.fragment,ko),Cl=p(ko),ft=r(ko,"P",{});var Fs=i(ft);Pl=s(Fs,"The "),hs=r(Fs,"A",{href:!0});var ph=i(hs);Nl=s(ph,"LayoutLMForMaskedLM"),ph.forEach(t),Sl=s(Fs," forward method, overrides the "),ea=r(Fs,"CODE",{});var hh=i(ea);Il=s(hh,"__call__"),hh.forEach(t),Ol=s(Fs," special method."),Fs.forEach(t),Dl=p(ko),w(Wt.$$.fragment,ko),Al=p(ko),w(Ht.$$.fragment,ko),ko.forEach(t),bo.forEach(t),er=p(o),gt=r(o,"H2",{class:!0});var Tr=i(gt);Bt=r(Tr,"A",{id:!0,class:!0,href:!0});var uh=i(Bt);ta=r(uh,"SPAN",{});var mh=i(ta);w(nn.$$.fragment,mh),mh.forEach(t),uh.forEach(t),Ul=p(Tr),oa=r(Tr,"SPAN",{});var fh=i(oa);Wl=s(fh,"LayoutLMForSequenceClassification"),fh.forEach(t),Tr.forEach(t),tr=p(o),qe=r(o,"DIV",{class:!0});var st=i(qe);w(sn.$$.fragment,st),Hl=p(st),an=r(st,"P",{});var vr=i(an);Bl=s(vr,`LayoutLM Model with a sequence classification head on top (a linear layer on top of the pooled output) e.g. for
document image classification tasks such as the `),rn=r(vr,"A",{href:!0,rel:!0});var gh=i(rn);Rl=s(gh,"RVL-CDIP"),gh.forEach(t),Kl=s(vr," dataset."),vr.forEach(t),Vl=p(st),ln=r(st,"P",{});var Mr=i(ln);Xl=s(Mr,"The LayoutLM model was proposed in "),dn=r(Mr,"A",{href:!0,rel:!0});var _h=i(dn);Yl=s(_h,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),_h.forEach(t),Zl=s(Mr,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),Mr.forEach(t),Gl=p(st),cn=r(st,"P",{});var $r=i(cn);Jl=s($r,"This model is a PyTorch "),pn=r($r,"A",{href:!0,rel:!0});var yh=i(pn);Ql=s(yh,"torch.nn.Module"),yh.forEach(t),ed=s($r,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),$r.forEach(t),td=p(st),We=r(st,"DIV",{class:!0});var Lo=i(We);w(hn.$$.fragment,Lo),od=p(Lo),_t=r(Lo,"P",{});var zs=i(_t);nd=s(zs,"The "),us=r(zs,"A",{href:!0});var bh=i(us);sd=s(bh,"LayoutLMForSequenceClassification"),bh.forEach(t),ad=s(zs," forward method, overrides the "),na=r(zs,"CODE",{});var kh=i(na);rd=s(kh,"__call__"),kh.forEach(t),id=s(zs," special method."),zs.forEach(t),ld=p(Lo),w(Rt.$$.fragment,Lo),dd=p(Lo),w(Kt.$$.fragment,Lo),Lo.forEach(t),st.forEach(t),or=p(o),yt=r(o,"H2",{class:!0});var xr=i(yt);Vt=r(xr,"A",{id:!0,class:!0,href:!0});var Lh=i(Vt);sa=r(Lh,"SPAN",{});var wh=i(sa);w(un.$$.fragment,wh),wh.forEach(t),Lh.forEach(t),cd=p(xr),aa=r(xr,"SPAN",{});var Th=i(aa);pd=s(Th,"LayoutLMForTokenClassification"),Th.forEach(t),xr.forEach(t),nr=p(o),Ce=r(o,"DIV",{class:!0});var at=i(Ce);w(mn.$$.fragment,at),hd=p(at),bt=r(at,"P",{});var Es=i(bt);ud=s(Es,`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
sequence labeling (information extraction) tasks such as the `),fn=r(Es,"A",{href:!0,rel:!0});var vh=i(fn);md=s(vh,"FUNSD"),vh.forEach(t),fd=s(Es,`
dataset and the `),gn=r(Es,"A",{href:!0,rel:!0});var Mh=i(gn);gd=s(Mh,"SROIE"),Mh.forEach(t),_d=s(Es," dataset."),Es.forEach(t),yd=p(at),_n=r(at,"P",{});var jr=i(_n);bd=s(jr,"The LayoutLM model was proposed in "),yn=r(jr,"A",{href:!0,rel:!0});var $h=i(yn);kd=s($h,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),$h.forEach(t),Ld=s(jr,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),jr.forEach(t),wd=p(at),bn=r(at,"P",{});var Fr=i(bn);Td=s(Fr,"This model is a PyTorch "),kn=r(Fr,"A",{href:!0,rel:!0});var xh=i(kn);vd=s(xh,"torch.nn.Module"),xh.forEach(t),Md=s(Fr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Fr.forEach(t),$d=p(at),He=r(at,"DIV",{class:!0});var wo=i(He);w(Ln.$$.fragment,wo),xd=p(wo),kt=r(wo,"P",{});var qs=i(kt);jd=s(qs,"The "),ms=r(qs,"A",{href:!0});var jh=i(ms);Fd=s(jh,"LayoutLMForTokenClassification"),jh.forEach(t),zd=s(qs," forward method, overrides the "),ra=r(qs,"CODE",{});var Fh=i(ra);Ed=s(Fh,"__call__"),Fh.forEach(t),qd=s(qs," special method."),qs.forEach(t),Cd=p(wo),w(Xt.$$.fragment,wo),Pd=p(wo),w(Yt.$$.fragment,wo),wo.forEach(t),at.forEach(t),sr=p(o),Lt=r(o,"H2",{class:!0});var zr=i(Lt);Zt=r(zr,"A",{id:!0,class:!0,href:!0});var zh=i(Zt);ia=r(zh,"SPAN",{});var Eh=i(ia);w(wn.$$.fragment,Eh),Eh.forEach(t),zh.forEach(t),Nd=p(zr),la=r(zr,"SPAN",{});var qh=i(la);Sd=s(qh,"TFLayoutLMModel"),qh.forEach(t),zr.forEach(t),ar=p(o),Le=r(o,"DIV",{class:!0});var Ye=i(Le);w(Tn.$$.fragment,Ye),Id=p(Ye),da=r(Ye,"P",{});var Ch=i(da);Od=s(Ch,"The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top."),Ch.forEach(t),Dd=p(Ye),vn=r(Ye,"P",{});var Er=i(vn);Ad=s(Er,"This model inherits from "),fs=r(Er,"A",{href:!0});var Ph=i(fs);Ud=s(Ph,"TFPreTrainedModel"),Ph.forEach(t),Wd=s(Er,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Er.forEach(t),Hd=p(Ye),Mn=r(Ye,"P",{});var qr=i(Mn);Bd=s(qr,"This model is also a "),$n=r(qr,"A",{href:!0,rel:!0});var Nh=i($n);Rd=s(Nh,"tf.keras.Model"),Nh.forEach(t),Kd=s(qr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qr.forEach(t),Vd=p(Ye),w(Gt.$$.fragment,Ye),Xd=p(Ye),Be=r(Ye,"DIV",{class:!0});var To=i(Be);w(xn.$$.fragment,To),Yd=p(To),wt=r(To,"P",{});var Cs=i(wt);Zd=s(Cs,"The "),gs=r(Cs,"A",{href:!0});var Sh=i(gs);Gd=s(Sh,"TFLayoutLMModel"),Sh.forEach(t),Jd=s(Cs," forward method, overrides the "),ca=r(Cs,"CODE",{});var Ih=i(ca);Qd=s(Ih,"__call__"),Ih.forEach(t),ec=s(Cs," special method."),Cs.forEach(t),tc=p(To),w(Jt.$$.fragment,To),oc=p(To),w(Qt.$$.fragment,To),To.forEach(t),Ye.forEach(t),rr=p(o),Tt=r(o,"H2",{class:!0});var Cr=i(Tt);eo=r(Cr,"A",{id:!0,class:!0,href:!0});var Oh=i(eo);pa=r(Oh,"SPAN",{});var Dh=i(pa);w(jn.$$.fragment,Dh),Dh.forEach(t),Oh.forEach(t),nc=p(Cr),ha=r(Cr,"SPAN",{});var Ah=i(ha);sc=s(Ah,"TFLayoutLMForMaskedLM"),Ah.forEach(t),Cr.forEach(t),ir=p(o),we=r(o,"DIV",{class:!0});var Ze=i(we);w(Fn.$$.fragment,Ze),ac=p(Ze),zn=r(Ze,"P",{});var Pr=i(zn);rc=s(Pr,"LayoutLM Model with a "),ua=r(Pr,"CODE",{});var Uh=i(ua);ic=s(Uh,"language modeling"),Uh.forEach(t),lc=s(Pr," head on top."),Pr.forEach(t),dc=p(Ze),En=r(Ze,"P",{});var Nr=i(En);cc=s(Nr,"This model inherits from "),_s=r(Nr,"A",{href:!0});var Wh=i(_s);pc=s(Wh,"TFPreTrainedModel"),Wh.forEach(t),hc=s(Nr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nr.forEach(t),uc=p(Ze),qn=r(Ze,"P",{});var Sr=i(qn);mc=s(Sr,"This model is also a "),Cn=r(Sr,"A",{href:!0,rel:!0});var Hh=i(Cn);fc=s(Hh,"tf.keras.Model"),Hh.forEach(t),gc=s(Sr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sr.forEach(t),_c=p(Ze),w(to.$$.fragment,Ze),yc=p(Ze),Re=r(Ze,"DIV",{class:!0});var vo=i(Re);w(Pn.$$.fragment,vo),bc=p(vo),vt=r(vo,"P",{});var Ps=i(vt);kc=s(Ps,"The "),ys=r(Ps,"A",{href:!0});var Bh=i(ys);Lc=s(Bh,"TFLayoutLMForMaskedLM"),Bh.forEach(t),wc=s(Ps," forward method, overrides the "),ma=r(Ps,"CODE",{});var Rh=i(ma);Tc=s(Rh,"__call__"),Rh.forEach(t),vc=s(Ps," special method."),Ps.forEach(t),Mc=p(vo),w(oo.$$.fragment,vo),$c=p(vo),w(no.$$.fragment,vo),vo.forEach(t),Ze.forEach(t),lr=p(o),Mt=r(o,"H2",{class:!0});var Ir=i(Mt);so=r(Ir,"A",{id:!0,class:!0,href:!0});var Kh=i(so);fa=r(Kh,"SPAN",{});var Vh=i(fa);w(Nn.$$.fragment,Vh),Vh.forEach(t),Kh.forEach(t),xc=p(Ir),ga=r(Ir,"SPAN",{});var Xh=i(ga);jc=s(Xh,"TFLayoutLMForSequenceClassification"),Xh.forEach(t),Ir.forEach(t),dr=p(o),Te=r(o,"DIV",{class:!0});var Ge=i(Te);w(Sn.$$.fragment,Ge),Fc=p(Ge),_a=r(Ge,"P",{});var Yh=i(_a);zc=s(Yh,`LayoutLM Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Yh.forEach(t),Ec=p(Ge),In=r(Ge,"P",{});var Or=i(In);qc=s(Or,"This model inherits from "),bs=r(Or,"A",{href:!0});var Zh=i(bs);Cc=s(Zh,"TFPreTrainedModel"),Zh.forEach(t),Pc=s(Or,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Or.forEach(t),Nc=p(Ge),On=r(Ge,"P",{});var Dr=i(On);Sc=s(Dr,"This model is also a "),Dn=r(Dr,"A",{href:!0,rel:!0});var Gh=i(Dn);Ic=s(Gh,"tf.keras.Model"),Gh.forEach(t),Oc=s(Dr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dr.forEach(t),Dc=p(Ge),w(ao.$$.fragment,Ge),Ac=p(Ge),Ke=r(Ge,"DIV",{class:!0});var Mo=i(Ke);w(An.$$.fragment,Mo),Uc=p(Mo),$t=r(Mo,"P",{});var Ns=i($t);Wc=s(Ns,"The "),ks=r(Ns,"A",{href:!0});var Jh=i(ks);Hc=s(Jh,"TFLayoutLMForSequenceClassification"),Jh.forEach(t),Bc=s(Ns," forward method, overrides the "),ya=r(Ns,"CODE",{});var Qh=i(ya);Rc=s(Qh,"__call__"),Qh.forEach(t),Kc=s(Ns," special method."),Ns.forEach(t),Vc=p(Mo),w(ro.$$.fragment,Mo),Xc=p(Mo),w(io.$$.fragment,Mo),Mo.forEach(t),Ge.forEach(t),cr=p(o),xt=r(o,"H2",{class:!0});var Ar=i(xt);lo=r(Ar,"A",{id:!0,class:!0,href:!0});var eu=i(lo);ba=r(eu,"SPAN",{});var tu=i(ba);w(Un.$$.fragment,tu),tu.forEach(t),eu.forEach(t),Yc=p(Ar),ka=r(Ar,"SPAN",{});var ou=i(ka);Zc=s(ou,"TFLayoutLMForTokenClassification"),ou.forEach(t),Ar.forEach(t),pr=p(o),ve=r(o,"DIV",{class:!0});var Je=i(ve);w(Wn.$$.fragment,Je),Gc=p(Je),La=r(Je,"P",{});var nu=i(La);Jc=s(nu,`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),nu.forEach(t),Qc=p(Je),Hn=r(Je,"P",{});var Ur=i(Hn);ep=s(Ur,"This model inherits from "),Ls=r(Ur,"A",{href:!0});var su=i(Ls);tp=s(su,"TFPreTrainedModel"),su.forEach(t),op=s(Ur,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ur.forEach(t),np=p(Je),Bn=r(Je,"P",{});var Wr=i(Bn);sp=s(Wr,"This model is also a "),Rn=r(Wr,"A",{href:!0,rel:!0});var au=i(Rn);ap=s(au,"tf.keras.Model"),au.forEach(t),rp=s(Wr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wr.forEach(t),ip=p(Je),w(co.$$.fragment,Je),lp=p(Je),Ve=r(Je,"DIV",{class:!0});var $o=i(Ve);w(Kn.$$.fragment,$o),dp=p($o),jt=r($o,"P",{});var Ss=i(jt);cp=s(Ss,"The "),ws=r(Ss,"A",{href:!0});var ru=i(ws);pp=s(ru,"TFLayoutLMForTokenClassification"),ru.forEach(t),hp=s(Ss," forward method, overrides the "),wa=r(Ss,"CODE",{});var iu=i(wa);up=s(iu,"__call__"),iu.forEach(t),mp=s(Ss," special method."),Ss.forEach(t),fp=p($o),w(po.$$.fragment,$o),gp=p($o),w(ho.$$.fragment,$o),$o.forEach(t),Je.forEach(t),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(Nu)),h(u,"id","layoutlm"),h(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(u,"href","#layoutlm"),h(_,"class","relative group"),h(z,"id","Overview"),h(Z,"id","overview"),h(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Z,"href","#overview"),h(O,"class","relative group"),h(F,"href","https://arxiv.org/abs/1912.13318"),h(F,"rel","nofollow"),h(te,"href","https://guillaumejaume.github.io/FUNSD/"),h(te,"rel","nofollow"),h(oe,"href","https://rrc.cvc.uab.es/?ch=13"),h(oe,"rel","nofollow"),h(W,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),h(W,"rel","nofollow"),h(Qn,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMModel.forward"),h(xo,"href","https://github.com/tesseract-ocr/tesseract"),h(xo,"rel","nofollow"),h(jo,"href","https://pypi.org/project/pytesseract/"),h(jo,"rel","nofollow"),h(ts,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMForTokenClassification"),h(Eo,"href","https://guillaumejaume.github.io/FUNSD/"),h(Eo,"rel","nofollow"),h(qo,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/LayoutLM/Fine_tuning_LayoutLMForTokenClassification_on_FUNSD.ipynb"),h(qo,"rel","nofollow"),h(Co,"href","https://huggingface.co/liminghao1630"),h(Co,"rel","nofollow"),h(Po,"href","https://github.com/microsoft/unilm/tree/master/layoutlm"),h(Po,"rel","nofollow"),h(qt,"id","transformers.LayoutLMConfig"),h(qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(qt,"href","#transformers.LayoutLMConfig"),h(rt,"class","relative group"),h(os,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMModel"),h(Io,"href","https://huggingface.co/microsoft/layoutlm-base-uncased"),h(Io,"rel","nofollow"),h(ns,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"),h(ss,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"),h(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Pt,"id","transformers.LayoutLMTokenizer"),h(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Pt,"href","#transformers.LayoutLMTokenizer"),h(dt,"class","relative group"),h(as,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMTokenizer"),h(rs,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer"),h(is,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer"),h(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(St,"id","transformers.LayoutLMTokenizerFast"),h(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(St,"href","#transformers.LayoutLMTokenizerFast"),h(ct,"class","relative group"),h(ls,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMTokenizerFast"),h(ds,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizerFast"),h(cs,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizerFast"),h(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ot,"id","transformers.LayoutLMModel"),h(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ot,"href","#transformers.LayoutLMModel"),h(pt,"class","relative group"),h(Vo,"href","https://arxiv.org/abs/1912.13318"),h(Vo,"rel","nofollow"),h(Yo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Yo,"rel","nofollow"),h(ps,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMModel"),h(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ut,"id","transformers.LayoutLMForMaskedLM"),h(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ut,"href","#transformers.LayoutLMForMaskedLM"),h(ut,"class","relative group"),h(Qo,"href","https://arxiv.org/abs/1912.13318"),h(Qo,"rel","nofollow"),h(tn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(tn,"rel","nofollow"),h(hs,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMForMaskedLM"),h(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Bt,"id","transformers.LayoutLMForSequenceClassification"),h(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Bt,"href","#transformers.LayoutLMForSequenceClassification"),h(gt,"class","relative group"),h(rn,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),h(rn,"rel","nofollow"),h(dn,"href","https://arxiv.org/abs/1912.13318"),h(dn,"rel","nofollow"),h(pn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(pn,"rel","nofollow"),h(us,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMForSequenceClassification"),h(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Vt,"id","transformers.LayoutLMForTokenClassification"),h(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Vt,"href","#transformers.LayoutLMForTokenClassification"),h(yt,"class","relative group"),h(fn,"href","https://guillaumejaume.github.io/FUNSD/"),h(fn,"rel","nofollow"),h(gn,"href","https://rrc.cvc.uab.es/?ch=13"),h(gn,"rel","nofollow"),h(yn,"href","https://arxiv.org/abs/1912.13318"),h(yn,"rel","nofollow"),h(kn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(kn,"rel","nofollow"),h(ms,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.LayoutLMForTokenClassification"),h(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Zt,"id","transformers.TFLayoutLMModel"),h(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Zt,"href","#transformers.TFLayoutLMModel"),h(Lt,"class","relative group"),h(fs,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),h($n,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h($n,"rel","nofollow"),h(gs,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.TFLayoutLMModel"),h(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(eo,"id","transformers.TFLayoutLMForMaskedLM"),h(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(eo,"href","#transformers.TFLayoutLMForMaskedLM"),h(Tt,"class","relative group"),h(_s,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),h(Cn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Cn,"rel","nofollow"),h(ys,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.TFLayoutLMForMaskedLM"),h(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(so,"id","transformers.TFLayoutLMForSequenceClassification"),h(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(so,"href","#transformers.TFLayoutLMForSequenceClassification"),h(Mt,"class","relative group"),h(bs,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),h(Dn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Dn,"rel","nofollow"),h(ks,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.TFLayoutLMForSequenceClassification"),h(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(lo,"id","transformers.TFLayoutLMForTokenClassification"),h(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(lo,"href","#transformers.TFLayoutLMForTokenClassification"),h(xt,"class","relative group"),h(Ls,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),h(Rn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Rn,"rel","nofollow"),h(ws,"href","/docs/transformers/pr_highlight/en/model_doc/layoutlm#transformers.TFLayoutLMForTokenClassification"),h(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,y){e(document.head,d),f(o,k,y),f(o,_,y),e(_,u),e(u,b),T(l,b,null),e(_,m),e(_,j),e(j,re),f(o,Y,y),f(o,z,y),f(o,ae,y),f(o,O,y),e(O,Z),e(Z,ne),T(A,ne,null),e(O,ie),e(O,se),e(se,J),f(o,D,y),f(o,G,y),e(G,Q),e(G,F),e(F,q),e(G,le),f(o,H,y),f(o,V,y),e(V,ee),e(ee,B),e(ee,te),e(te,de),e(ee,C),e(V,ce),e(V,U),e(U,pe),e(U,oe),e(oe,R),e(U,he),e(V,ue),e(V,N),e(N,me),e(N,W),e(W,fe),e(N,g),f(o,x,y),f(o,X,y),e(X,je),f(o,Me,y),f(o,S,y),e(S,be),e(be,Fe),f(o,$e,y),f(o,I,y),e(I,K),f(o,xe,y),f(o,ye,y),e(ye,P),e(P,ze),e(P,ke),e(ke,ge),e(P,Ee),e(P,Qn),e(Qn,Hr),e(P,Br),e(P,Is),e(Is,Rr),e(P,Kr),e(P,xo),e(xo,Vr),e(P,Xr),e(P,jo),e(jo,Yr),e(P,Zr),f(o,Da,y),T(Fo,o,y),f(o,Aa,y),f(o,ot,y),e(ot,Gr),e(ot,Os),e(Os,Jr),e(ot,Qr),e(ot,Ds),e(Ds,ei),e(ot,ti),f(o,Ua,y),T(zo,o,y),f(o,Wa,y),f(o,es,y),e(es,et),e(et,oi),e(et,ts),e(ts,ni),e(et,si),e(et,Eo),e(Eo,ai),e(et,ri),e(et,qo),e(qo,ii),e(et,li),f(o,Ha,y),f(o,nt,y),e(nt,di),e(nt,Co),e(Co,ci),e(nt,pi),e(nt,Po),e(Po,hi),e(nt,ui),f(o,Ba,y),f(o,rt,y),e(rt,qt),e(qt,As),T(No,As,null),e(rt,mi),e(rt,Us),e(Us,fi),f(o,Ra,y),f(o,Pe,y),T(So,Pe,null),e(Pe,gi),e(Pe,it),e(it,_i),e(it,os),e(os,yi),e(it,bi),e(it,Io),e(Io,ki),e(it,Li),e(Pe,wi),e(Pe,lt),e(lt,Ti),e(lt,ns),e(ns,vi),e(lt,Mi),e(lt,ss),e(ss,$i),e(lt,xi),e(Pe,ji),T(Ct,Pe,null),f(o,Ka,y),f(o,dt,y),e(dt,Pt),e(Pt,Ws),T(Oo,Ws,null),e(dt,Fi),e(dt,Hs),e(Hs,zi),f(o,Va,y),f(o,Ne,y),T(Do,Ne,null),e(Ne,Ei),e(Ne,Bs),e(Bs,qi),e(Ne,Ci),e(Ne,Nt),e(Nt,as),e(as,Pi),e(Nt,Ni),e(Nt,rs),e(rs,Si),e(Nt,Ii),e(Ne,Oi),e(Ne,Ao),e(Ao,Di),e(Ao,is),e(is,Ai),e(Ao,Ui),f(o,Xa,y),f(o,ct,y),e(ct,St),e(St,Rs),T(Uo,Rs,null),e(ct,Wi),e(ct,Ks),e(Ks,Hi),f(o,Ya,y),f(o,Se,y),T(Wo,Se,null),e(Se,Bi),e(Se,Vs),e(Vs,Ri),e(Se,Ki),e(Se,It),e(It,ls),e(ls,Vi),e(It,Xi),e(It,ds),e(ds,Yi),e(It,Zi),e(Se,Gi),e(Se,Ho),e(Ho,Ji),e(Ho,cs),e(cs,Qi),e(Ho,el),f(o,Za,y),f(o,pt,y),e(pt,Ot),e(Ot,Xs),T(Bo,Xs,null),e(pt,tl),e(pt,Ys),e(Ys,ol),f(o,Ga,y),f(o,Ie,y),T(Ro,Ie,null),e(Ie,nl),e(Ie,Ko),e(Ko,sl),e(Ko,Vo),e(Vo,al),e(Ko,rl),e(Ie,il),e(Ie,Xo),e(Xo,ll),e(Xo,Yo),e(Yo,dl),e(Xo,cl),e(Ie,pl),e(Ie,Ae),T(Zo,Ae,null),e(Ae,hl),e(Ae,ht),e(ht,ul),e(ht,ps),e(ps,ml),e(ht,fl),e(ht,Zs),e(Zs,gl),e(ht,_l),e(Ae,yl),T(Dt,Ae,null),e(Ae,bl),T(At,Ae,null),f(o,Ja,y),f(o,ut,y),e(ut,Ut),e(Ut,Gs),T(Go,Gs,null),e(ut,kl),e(ut,Js),e(Js,Ll),f(o,Qa,y),f(o,Oe,y),T(Jo,Oe,null),e(Oe,wl),e(Oe,mt),e(mt,Tl),e(mt,Qs),e(Qs,vl),e(mt,Ml),e(mt,Qo),e(Qo,$l),e(mt,xl),e(Oe,jl),e(Oe,en),e(en,Fl),e(en,tn),e(tn,zl),e(en,El),e(Oe,ql),e(Oe,Ue),T(on,Ue,null),e(Ue,Cl),e(Ue,ft),e(ft,Pl),e(ft,hs),e(hs,Nl),e(ft,Sl),e(ft,ea),e(ea,Il),e(ft,Ol),e(Ue,Dl),T(Wt,Ue,null),e(Ue,Al),T(Ht,Ue,null),f(o,er,y),f(o,gt,y),e(gt,Bt),e(Bt,ta),T(nn,ta,null),e(gt,Ul),e(gt,oa),e(oa,Wl),f(o,tr,y),f(o,qe,y),T(sn,qe,null),e(qe,Hl),e(qe,an),e(an,Bl),e(an,rn),e(rn,Rl),e(an,Kl),e(qe,Vl),e(qe,ln),e(ln,Xl),e(ln,dn),e(dn,Yl),e(ln,Zl),e(qe,Gl),e(qe,cn),e(cn,Jl),e(cn,pn),e(pn,Ql),e(cn,ed),e(qe,td),e(qe,We),T(hn,We,null),e(We,od),e(We,_t),e(_t,nd),e(_t,us),e(us,sd),e(_t,ad),e(_t,na),e(na,rd),e(_t,id),e(We,ld),T(Rt,We,null),e(We,dd),T(Kt,We,null),f(o,or,y),f(o,yt,y),e(yt,Vt),e(Vt,sa),T(un,sa,null),e(yt,cd),e(yt,aa),e(aa,pd),f(o,nr,y),f(o,Ce,y),T(mn,Ce,null),e(Ce,hd),e(Ce,bt),e(bt,ud),e(bt,fn),e(fn,md),e(bt,fd),e(bt,gn),e(gn,gd),e(bt,_d),e(Ce,yd),e(Ce,_n),e(_n,bd),e(_n,yn),e(yn,kd),e(_n,Ld),e(Ce,wd),e(Ce,bn),e(bn,Td),e(bn,kn),e(kn,vd),e(bn,Md),e(Ce,$d),e(Ce,He),T(Ln,He,null),e(He,xd),e(He,kt),e(kt,jd),e(kt,ms),e(ms,Fd),e(kt,zd),e(kt,ra),e(ra,Ed),e(kt,qd),e(He,Cd),T(Xt,He,null),e(He,Pd),T(Yt,He,null),f(o,sr,y),f(o,Lt,y),e(Lt,Zt),e(Zt,ia),T(wn,ia,null),e(Lt,Nd),e(Lt,la),e(la,Sd),f(o,ar,y),f(o,Le,y),T(Tn,Le,null),e(Le,Id),e(Le,da),e(da,Od),e(Le,Dd),e(Le,vn),e(vn,Ad),e(vn,fs),e(fs,Ud),e(vn,Wd),e(Le,Hd),e(Le,Mn),e(Mn,Bd),e(Mn,$n),e($n,Rd),e(Mn,Kd),e(Le,Vd),T(Gt,Le,null),e(Le,Xd),e(Le,Be),T(xn,Be,null),e(Be,Yd),e(Be,wt),e(wt,Zd),e(wt,gs),e(gs,Gd),e(wt,Jd),e(wt,ca),e(ca,Qd),e(wt,ec),e(Be,tc),T(Jt,Be,null),e(Be,oc),T(Qt,Be,null),f(o,rr,y),f(o,Tt,y),e(Tt,eo),e(eo,pa),T(jn,pa,null),e(Tt,nc),e(Tt,ha),e(ha,sc),f(o,ir,y),f(o,we,y),T(Fn,we,null),e(we,ac),e(we,zn),e(zn,rc),e(zn,ua),e(ua,ic),e(zn,lc),e(we,dc),e(we,En),e(En,cc),e(En,_s),e(_s,pc),e(En,hc),e(we,uc),e(we,qn),e(qn,mc),e(qn,Cn),e(Cn,fc),e(qn,gc),e(we,_c),T(to,we,null),e(we,yc),e(we,Re),T(Pn,Re,null),e(Re,bc),e(Re,vt),e(vt,kc),e(vt,ys),e(ys,Lc),e(vt,wc),e(vt,ma),e(ma,Tc),e(vt,vc),e(Re,Mc),T(oo,Re,null),e(Re,$c),T(no,Re,null),f(o,lr,y),f(o,Mt,y),e(Mt,so),e(so,fa),T(Nn,fa,null),e(Mt,xc),e(Mt,ga),e(ga,jc),f(o,dr,y),f(o,Te,y),T(Sn,Te,null),e(Te,Fc),e(Te,_a),e(_a,zc),e(Te,Ec),e(Te,In),e(In,qc),e(In,bs),e(bs,Cc),e(In,Pc),e(Te,Nc),e(Te,On),e(On,Sc),e(On,Dn),e(Dn,Ic),e(On,Oc),e(Te,Dc),T(ao,Te,null),e(Te,Ac),e(Te,Ke),T(An,Ke,null),e(Ke,Uc),e(Ke,$t),e($t,Wc),e($t,ks),e(ks,Hc),e($t,Bc),e($t,ya),e(ya,Rc),e($t,Kc),e(Ke,Vc),T(ro,Ke,null),e(Ke,Xc),T(io,Ke,null),f(o,cr,y),f(o,xt,y),e(xt,lo),e(lo,ba),T(Un,ba,null),e(xt,Yc),e(xt,ka),e(ka,Zc),f(o,pr,y),f(o,ve,y),T(Wn,ve,null),e(ve,Gc),e(ve,La),e(La,Jc),e(ve,Qc),e(ve,Hn),e(Hn,ep),e(Hn,Ls),e(Ls,tp),e(Hn,op),e(ve,np),e(ve,Bn),e(Bn,sp),e(Bn,Rn),e(Rn,ap),e(Bn,rp),e(ve,ip),T(co,ve,null),e(ve,lp),e(ve,Ve),T(Kn,Ve,null),e(Ve,dp),e(Ve,jt),e(jt,cp),e(jt,ws),e(ws,pp),e(jt,hp),e(jt,wa),e(wa,up),e(jt,mp),e(Ve,fp),T(po,Ve,null),e(Ve,gp),T(ho,Ve,null),hr=!0},p(o,[y]){const Vn={};y&2&&(Vn.$$scope={dirty:y,ctx:o}),Ct.$set(Vn);const Ta={};y&2&&(Ta.$$scope={dirty:y,ctx:o}),Dt.$set(Ta);const va={};y&2&&(va.$$scope={dirty:y,ctx:o}),At.$set(va);const Ma={};y&2&&(Ma.$$scope={dirty:y,ctx:o}),Wt.$set(Ma);const Xn={};y&2&&(Xn.$$scope={dirty:y,ctx:o}),Ht.$set(Xn);const $a={};y&2&&($a.$$scope={dirty:y,ctx:o}),Rt.$set($a);const xa={};y&2&&(xa.$$scope={dirty:y,ctx:o}),Kt.$set(xa);const ja={};y&2&&(ja.$$scope={dirty:y,ctx:o}),Xt.$set(ja);const Yn={};y&2&&(Yn.$$scope={dirty:y,ctx:o}),Yt.$set(Yn);const Fa={};y&2&&(Fa.$$scope={dirty:y,ctx:o}),Gt.$set(Fa);const Ft={};y&2&&(Ft.$$scope={dirty:y,ctx:o}),Jt.$set(Ft);const Zn={};y&2&&(Zn.$$scope={dirty:y,ctx:o}),Qt.$set(Zn);const za={};y&2&&(za.$$scope={dirty:y,ctx:o}),to.$set(za);const Gn={};y&2&&(Gn.$$scope={dirty:y,ctx:o}),oo.$set(Gn);const Ea={};y&2&&(Ea.$$scope={dirty:y,ctx:o}),no.$set(Ea);const Jn={};y&2&&(Jn.$$scope={dirty:y,ctx:o}),ao.$set(Jn);const qa={};y&2&&(qa.$$scope={dirty:y,ctx:o}),ro.$set(qa);const Ca={};y&2&&(Ca.$$scope={dirty:y,ctx:o}),io.$set(Ca);const Pa={};y&2&&(Pa.$$scope={dirty:y,ctx:o}),co.$set(Pa);const Na={};y&2&&(Na.$$scope={dirty:y,ctx:o}),po.$set(Na);const Sa={};y&2&&(Sa.$$scope={dirty:y,ctx:o}),ho.$set(Sa)},i(o){hr||(v(l.$$.fragment,o),v(A.$$.fragment,o),v(Fo.$$.fragment,o),v(zo.$$.fragment,o),v(No.$$.fragment,o),v(So.$$.fragment,o),v(Ct.$$.fragment,o),v(Oo.$$.fragment,o),v(Do.$$.fragment,o),v(Uo.$$.fragment,o),v(Wo.$$.fragment,o),v(Bo.$$.fragment,o),v(Ro.$$.fragment,o),v(Zo.$$.fragment,o),v(Dt.$$.fragment,o),v(At.$$.fragment,o),v(Go.$$.fragment,o),v(Jo.$$.fragment,o),v(on.$$.fragment,o),v(Wt.$$.fragment,o),v(Ht.$$.fragment,o),v(nn.$$.fragment,o),v(sn.$$.fragment,o),v(hn.$$.fragment,o),v(Rt.$$.fragment,o),v(Kt.$$.fragment,o),v(un.$$.fragment,o),v(mn.$$.fragment,o),v(Ln.$$.fragment,o),v(Xt.$$.fragment,o),v(Yt.$$.fragment,o),v(wn.$$.fragment,o),v(Tn.$$.fragment,o),v(Gt.$$.fragment,o),v(xn.$$.fragment,o),v(Jt.$$.fragment,o),v(Qt.$$.fragment,o),v(jn.$$.fragment,o),v(Fn.$$.fragment,o),v(to.$$.fragment,o),v(Pn.$$.fragment,o),v(oo.$$.fragment,o),v(no.$$.fragment,o),v(Nn.$$.fragment,o),v(Sn.$$.fragment,o),v(ao.$$.fragment,o),v(An.$$.fragment,o),v(ro.$$.fragment,o),v(io.$$.fragment,o),v(Un.$$.fragment,o),v(Wn.$$.fragment,o),v(co.$$.fragment,o),v(Kn.$$.fragment,o),v(po.$$.fragment,o),v(ho.$$.fragment,o),hr=!0)},o(o){M(l.$$.fragment,o),M(A.$$.fragment,o),M(Fo.$$.fragment,o),M(zo.$$.fragment,o),M(No.$$.fragment,o),M(So.$$.fragment,o),M(Ct.$$.fragment,o),M(Oo.$$.fragment,o),M(Do.$$.fragment,o),M(Uo.$$.fragment,o),M(Wo.$$.fragment,o),M(Bo.$$.fragment,o),M(Ro.$$.fragment,o),M(Zo.$$.fragment,o),M(Dt.$$.fragment,o),M(At.$$.fragment,o),M(Go.$$.fragment,o),M(Jo.$$.fragment,o),M(on.$$.fragment,o),M(Wt.$$.fragment,o),M(Ht.$$.fragment,o),M(nn.$$.fragment,o),M(sn.$$.fragment,o),M(hn.$$.fragment,o),M(Rt.$$.fragment,o),M(Kt.$$.fragment,o),M(un.$$.fragment,o),M(mn.$$.fragment,o),M(Ln.$$.fragment,o),M(Xt.$$.fragment,o),M(Yt.$$.fragment,o),M(wn.$$.fragment,o),M(Tn.$$.fragment,o),M(Gt.$$.fragment,o),M(xn.$$.fragment,o),M(Jt.$$.fragment,o),M(Qt.$$.fragment,o),M(jn.$$.fragment,o),M(Fn.$$.fragment,o),M(to.$$.fragment,o),M(Pn.$$.fragment,o),M(oo.$$.fragment,o),M(no.$$.fragment,o),M(Nn.$$.fragment,o),M(Sn.$$.fragment,o),M(ao.$$.fragment,o),M(An.$$.fragment,o),M(ro.$$.fragment,o),M(io.$$.fragment,o),M(Un.$$.fragment,o),M(Wn.$$.fragment,o),M(co.$$.fragment,o),M(Kn.$$.fragment,o),M(po.$$.fragment,o),M(ho.$$.fragment,o),hr=!1},d(o){t(d),o&&t(k),o&&t(_),$(l),o&&t(Y),o&&t(z),o&&t(ae),o&&t(O),$(A),o&&t(D),o&&t(G),o&&t(H),o&&t(V),o&&t(x),o&&t(X),o&&t(Me),o&&t(S),o&&t($e),o&&t(I),o&&t(xe),o&&t(ye),o&&t(Da),$(Fo,o),o&&t(Aa),o&&t(ot),o&&t(Ua),$(zo,o),o&&t(Wa),o&&t(es),o&&t(Ha),o&&t(nt),o&&t(Ba),o&&t(rt),$(No),o&&t(Ra),o&&t(Pe),$(So),$(Ct),o&&t(Ka),o&&t(dt),$(Oo),o&&t(Va),o&&t(Ne),$(Do),o&&t(Xa),o&&t(ct),$(Uo),o&&t(Ya),o&&t(Se),$(Wo),o&&t(Za),o&&t(pt),$(Bo),o&&t(Ga),o&&t(Ie),$(Ro),$(Zo),$(Dt),$(At),o&&t(Ja),o&&t(ut),$(Go),o&&t(Qa),o&&t(Oe),$(Jo),$(on),$(Wt),$(Ht),o&&t(er),o&&t(gt),$(nn),o&&t(tr),o&&t(qe),$(sn),$(hn),$(Rt),$(Kt),o&&t(or),o&&t(yt),$(un),o&&t(nr),o&&t(Ce),$(mn),$(Ln),$(Xt),$(Yt),o&&t(sr),o&&t(Lt),$(wn),o&&t(ar),o&&t(Le),$(Tn),$(Gt),$(xn),$(Jt),$(Qt),o&&t(rr),o&&t(Tt),$(jn),o&&t(ir),o&&t(we),$(Fn),$(to),$(Pn),$(oo),$(no),o&&t(lr),o&&t(Mt),$(Nn),o&&t(dr),o&&t(Te),$(Sn),$(ao),$(An),$(ro),$(io),o&&t(cr),o&&t(xt),$(Un),o&&t(pr),o&&t(ve),$(Wn),$(co),$(Kn),$(po),$(ho)}}}const Nu={local:"layoutlm",sections:[{local:"overview",title:"Overview"},{local:"transformers.LayoutLMConfig",title:"LayoutLMConfig"},{local:"transformers.LayoutLMTokenizer",title:"LayoutLMTokenizer"},{local:"transformers.LayoutLMTokenizerFast",title:"LayoutLMTokenizerFast"},{local:"transformers.LayoutLMModel",title:"LayoutLMModel"},{local:"transformers.LayoutLMForMaskedLM",title:"LayoutLMForMaskedLM"},{local:"transformers.LayoutLMForSequenceClassification",title:"LayoutLMForSequenceClassification"},{local:"transformers.LayoutLMForTokenClassification",title:"LayoutLMForTokenClassification"},{local:"transformers.TFLayoutLMModel",title:"TFLayoutLMModel"},{local:"transformers.TFLayoutLMForMaskedLM",title:"TFLayoutLMForMaskedLM"},{local:"transformers.TFLayoutLMForSequenceClassification",title:"TFLayoutLMForSequenceClassification"},{local:"transformers.TFLayoutLMForTokenClassification",title:"TFLayoutLMForTokenClassification"}],title:"LayoutLM"};function Su(E){return hu(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Hu extends lu{constructor(d){super();du(this,d,Su,Pu,cu,{})}}export{Hu as default,Nu as metadata};
