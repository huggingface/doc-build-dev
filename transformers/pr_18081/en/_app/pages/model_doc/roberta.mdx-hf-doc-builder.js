import{S as L8,i as A8,s as O8,e as n,k as p,w as T,t as r,M as N8,c as s,d as t,m as h,a,x as y,h as i,b as f,G as e,g as k,y as w,q as $,o as F,B as x,v as I8,L as Z}from"../../chunks/vendor-hf-doc-builder.js";import{T as me}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ee}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as $e}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Y}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function D8(R){let d,g,c,u,_;return u=new ee({props:{code:`from transformers import RobertaConfig, RobertaModel

# Initializing a RoBERTa configuration
configuration = RobertaConfig()

# Initializing a model from the configuration
model = RobertaModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaConfig, RobertaModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a RoBERTa configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = RobertaConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),g=r("Examples:"),c=p(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Examples:"),m.forEach(t),c=h(l),y(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,g),k(l,c,m),w(u,l,m),_=!0},p:Z,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function S8(R){let d,g,c,u,_;return u=new ee({props:{code:`from transformers import RobertaTokenizer
tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 328, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){d=n("p"),g=r("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c=p(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),m.forEach(t),c=h(l),y(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,g),k(l,c,m),w(u,l,m),_=!0},p:Z,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function W8(R){let d,g,c,u,_;return{c(){d=n("p"),g=r("When used with "),c=n("code"),u=r("is_split_into_words=True"),_=r(", this tokenizer will add a space before each word (even the first one).")},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"When used with "),c=s(m,"CODE",{});var M=a(c);u=i(M,"is_split_into_words=True"),M.forEach(t),_=i(m,", this tokenizer will add a space before each word (even the first one)."),m.forEach(t)},m(l,m){k(l,d,m),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function B8(R){let d,g,c,u,_;return u=new ee({props:{code:`from transformers import RobertaTokenizerFast
tokenizer = RobertaTokenizerFast.from_pretrained("roberta-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = RobertaTokenizerFast.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 328, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){d=n("p"),g=r("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c=p(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),m.forEach(t),c=h(l),y(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,g),k(l,c,m),w(u,l,m),_=!0},p:Z,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function U8(R){let d,g,c,u,_,l,m,M;return{c(){d=n("p"),g=r("When used with "),c=n("code"),u=r("is_split_into_words=True"),_=r(", this tokenizer needs to be instantiated with "),l=n("code"),m=r("add_prefix_space=True"),M=r(".")},l(te){d=s(te,"P",{});var I=a(d);g=i(I,"When used with "),c=s(I,"CODE",{});var z=a(c);u=i(z,"is_split_into_words=True"),z.forEach(t),_=i(I,", this tokenizer needs to be instantiated with "),l=s(I,"CODE",{});var X=a(l);m=i(X,"add_prefix_space=True"),X.forEach(t),M=i(I,"."),I.forEach(t)},m(te,I){k(te,d,I),e(d,g),e(d,c),e(c,u),e(d,_),e(d,l),e(l,m),e(d,M)},d(te){te&&t(d)}}}function H8(R){let d,g,c,u,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var M=a(c);u=i(M,"Module"),M.forEach(t),_=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function Q8(R){let d,g,c,u,_;return u=new ee({props:{code:`from transformers import RobertaTokenizer, RobertaModel
import torch

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = RobertaModel.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, RobertaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaModel.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Example:"),m.forEach(t),c=h(l),y(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,g),k(l,c,m),w(u,l,m),_=!0},p:Z,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function J8(R){let d,g,c,u,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var M=a(c);u=i(M,"Module"),M.forEach(t),_=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function V8(R){let d,g,c,u,_;return u=new ee({props:{code:`from transformers import RobertaTokenizer, RobertaForCausalLM, RobertaConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Example:"),m.forEach(t),c=h(l),y(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,g),k(l,c,m),w(u,l,m),_=!0},p:Z,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function K8(R){let d,g,c,u,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var M=a(c);u=i(M,"Module"),M.forEach(t),_=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function G8(R){let d,g,c,u,_;return u=new ee({props:{code:`from transformers import RobertaTokenizer, RobertaForMaskedLM
import torch

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = RobertaForMaskedLM.from_pretrained("roberta-base")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, RobertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Example:"),m.forEach(t),c=h(l),y(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,g),k(l,c,m),w(u,l,m),_=!0},p:Z,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function X8(R){let d,g;return d=new ee({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:Z,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function Y8(R){let d,g,c,u,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var M=a(c);u=i(M,"Module"),M.forEach(t),_=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function Z8(R){let d,g,c,u,_;return u=new ee({props:{code:`import torch
from transformers import RobertaTokenizer, RobertaForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")
model = RobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, RobertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=n("p"),g=r("Example of single-label classification:"),c=p(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Example of single-label classification:"),m.forEach(t),c=h(l),y(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,g),k(l,c,m),w(u,l,m),_=!0},p:Z,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function eE(R){let d,g;return d=new ee({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = RobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:Z,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function tE(R){let d,g,c,u,_;return u=new ee({props:{code:`import torch
from transformers import RobertaTokenizer, RobertaForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")
model = RobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, RobertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=n("p"),g=r("Example of multi-label classification:"),c=p(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Example of multi-label classification:"),m.forEach(t),c=h(l),y(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,g),k(l,c,m),w(u,l,m),_=!0},p:Z,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function oE(R){let d,g;return d=new ee({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = RobertaForSequenceClassification.from_pretrained(
    "cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:Z,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function nE(R){let d,g,c,u,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var M=a(c);u=i(M,"Module"),M.forEach(t),_=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function sE(R){let d,g,c,u,_;return u=new ee({props:{code:`from transformers import RobertaTokenizer, RobertaForMultipleChoice
import torch

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = RobertaForMultipleChoice.from_pretrained("roberta-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, RobertaForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Example:"),m.forEach(t),c=h(l),y(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,g),k(l,c,m),w(u,l,m),_=!0},p:Z,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function aE(R){let d,g,c,u,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var M=a(c);u=i(M,"Module"),M.forEach(t),_=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function rE(R){let d,g,c,u,_;return u=new ee({props:{code:`from transformers import RobertaTokenizer, RobertaForTokenClassification
import torch

tokenizer = RobertaTokenizer.from_pretrained("Jean-Baptiste/roberta-large-ner-english")
model = RobertaForTokenClassification.from_pretrained("Jean-Baptiste/roberta-large-ner-english")

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
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, RobertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;Jean-Baptiste/roberta-large-ner-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;Jean-Baptiste/roberta-large-ner-english&quot;</span>)

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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Example:"),m.forEach(t),c=h(l),y(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,g),k(l,c,m),w(u,l,m),_=!0},p:Z,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function iE(R){let d,g;return d=new ee({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:Z,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function lE(R){let d,g,c,u,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var M=a(c);u=i(M,"Module"),M.forEach(t),_=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function dE(R){let d,g,c,u,_;return u=new ee({props:{code:`from transformers import RobertaTokenizer, RobertaForQuestionAnswering
import torch

tokenizer = RobertaTokenizer.from_pretrained("deepset/roberta-base-squad2")
model = RobertaForQuestionAnswering.from_pretrained("deepset/roberta-base-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, RobertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Example:"),m.forEach(t),c=h(l),y(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,g),k(l,c,m),w(u,l,m),_=!0},p:Z,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function cE(R){let d,g;return d=new ee({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.86</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:Z,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function pE(R){let d,g,c,u,_,l,m,M,te,I,z,X,D,se,be,S,ke,fe,K,A,ae,oe,q,j,ie,U,ge,le,H,_e,de,C,ve,W,ce,Te,B,G,re,O,pe,Q,ye;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=p(),u=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),m=p(),M=n("li"),te=r("having all inputs as a list, tuple or dict in the first positional arguments."),I=p(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),se=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ke=r("model(inputs)"),fe=r("."),K=p(),A=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=p(),q=n("ul"),j=n("li"),ie=r("a single Tensor with "),U=n("code"),ge=r("input_ids"),le=r(" only and nothing else: "),H=n("code"),_e=r("model(inputs_ids)"),de=p(),C=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),ce=r("model([input_ids, attention_mask])"),Te=r(" or "),B=n("code"),G=r("model([input_ids, attention_mask, token_type_ids])"),re=p(),O=n("li"),pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var E=a(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(v),u=s(v,"UL",{});var ne=a(u);_=s(ne,"LI",{});var Ee=a(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),m=h(ne),M=s(ne,"LI",{});var ue=a(M);te=i(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),ne.forEach(t),I=h(v),z=s(v,"P",{});var N=a(z);X=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var Re=a(D);se=i(Re,"tf.keras.Model.fit"),Re.forEach(t),be=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var ze=a(S);ke=i(ze,"model(inputs)"),ze.forEach(t),fe=i(N,"."),N.forEach(t),K=h(v),A=s(v,"P",{});var qe=a(A);ae=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),oe=h(v),q=s(v,"UL",{});var L=a(q);j=s(L,"LI",{});var J=a(j);ie=i(J,"a single Tensor with "),U=s(J,"CODE",{});var Ce=a(U);ge=i(Ce,"input_ids"),Ce.forEach(t),le=i(J," only and nothing else: "),H=s(J,"CODE",{});var Me=a(H);_e=i(Me,"model(inputs_ids)"),Me.forEach(t),J.forEach(t),de=h(L),C=s(L,"LI",{});var V=a(C);ve=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(V,"CODE",{});var je=a(W);ce=i(je,"model([input_ids, attention_mask])"),je.forEach(t),Te=i(V," or "),B=s(V,"CODE",{});var Pe=a(B);G=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),V.forEach(t),re=h(L),O=s(L,"LI",{});var he=a(O);pe=i(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(he,"CODE",{});var xe=a(Q);ye=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),he.forEach(t),L.forEach(t)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,u,E),e(u,_),e(_,l),e(u,m),e(u,M),e(M,te),k(v,I,E),k(v,z,E),e(z,X),e(z,D),e(D,se),e(z,be),e(z,S),e(S,ke),e(z,fe),k(v,K,E),k(v,A,E),e(A,ae),k(v,oe,E),k(v,q,E),e(q,j),e(j,ie),e(j,U),e(U,ge),e(j,le),e(j,H),e(H,_e),e(q,de),e(q,C),e(C,ve),e(C,W),e(W,ce),e(C,Te),e(C,B),e(B,G),e(q,re),e(q,O),e(O,pe),e(O,Q),e(Q,ye)},d(v){v&&t(d),v&&t(c),v&&t(u),v&&t(I),v&&t(z),v&&t(K),v&&t(A),v&&t(oe),v&&t(q)}}}function hE(R){let d,g,c,u,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var M=a(c);u=i(M,"Module"),M.forEach(t),_=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function uE(R){let d,g,c,u,_;return u=new ee({props:{code:`from transformers import RobertaTokenizer, TFRobertaModel
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = TFRobertaModel.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaModel.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Example:"),m.forEach(t),c=h(l),y(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,g),k(l,c,m),w(u,l,m),_=!0},p:Z,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function mE(R){let d,g,c,u,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var M=a(c);u=i(M,"Module"),M.forEach(t),_=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function fE(R){let d,g,c,u,_;return u=new ee({props:{code:`from transformers import RobertaTokenizer, TFRobertaForCausalLM
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = TFRobertaForCausalLM.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForCausalLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Example:"),m.forEach(t),c=h(l),y(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,g),k(l,c,m),w(u,l,m),_=!0},p:Z,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function gE(R){let d,g,c,u,_,l,m,M,te,I,z,X,D,se,be,S,ke,fe,K,A,ae,oe,q,j,ie,U,ge,le,H,_e,de,C,ve,W,ce,Te,B,G,re,O,pe,Q,ye;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=p(),u=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),m=p(),M=n("li"),te=r("having all inputs as a list, tuple or dict in the first positional arguments."),I=p(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),se=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ke=r("model(inputs)"),fe=r("."),K=p(),A=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=p(),q=n("ul"),j=n("li"),ie=r("a single Tensor with "),U=n("code"),ge=r("input_ids"),le=r(" only and nothing else: "),H=n("code"),_e=r("model(inputs_ids)"),de=p(),C=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),ce=r("model([input_ids, attention_mask])"),Te=r(" or "),B=n("code"),G=r("model([input_ids, attention_mask, token_type_ids])"),re=p(),O=n("li"),pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var E=a(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(v),u=s(v,"UL",{});var ne=a(u);_=s(ne,"LI",{});var Ee=a(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),m=h(ne),M=s(ne,"LI",{});var ue=a(M);te=i(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),ne.forEach(t),I=h(v),z=s(v,"P",{});var N=a(z);X=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var Re=a(D);se=i(Re,"tf.keras.Model.fit"),Re.forEach(t),be=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var ze=a(S);ke=i(ze,"model(inputs)"),ze.forEach(t),fe=i(N,"."),N.forEach(t),K=h(v),A=s(v,"P",{});var qe=a(A);ae=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),oe=h(v),q=s(v,"UL",{});var L=a(q);j=s(L,"LI",{});var J=a(j);ie=i(J,"a single Tensor with "),U=s(J,"CODE",{});var Ce=a(U);ge=i(Ce,"input_ids"),Ce.forEach(t),le=i(J," only and nothing else: "),H=s(J,"CODE",{});var Me=a(H);_e=i(Me,"model(inputs_ids)"),Me.forEach(t),J.forEach(t),de=h(L),C=s(L,"LI",{});var V=a(C);ve=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(V,"CODE",{});var je=a(W);ce=i(je,"model([input_ids, attention_mask])"),je.forEach(t),Te=i(V," or "),B=s(V,"CODE",{});var Pe=a(B);G=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),V.forEach(t),re=h(L),O=s(L,"LI",{});var he=a(O);pe=i(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(he,"CODE",{});var xe=a(Q);ye=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),he.forEach(t),L.forEach(t)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,u,E),e(u,_),e(_,l),e(u,m),e(u,M),e(M,te),k(v,I,E),k(v,z,E),e(z,X),e(z,D),e(D,se),e(z,be),e(z,S),e(S,ke),e(z,fe),k(v,K,E),k(v,A,E),e(A,ae),k(v,oe,E),k(v,q,E),e(q,j),e(j,ie),e(j,U),e(U,ge),e(j,le),e(j,H),e(H,_e),e(q,de),e(q,C),e(C,ve),e(C,W),e(W,ce),e(C,Te),e(C,B),e(B,G),e(q,re),e(q,O),e(O,pe),e(O,Q),e(Q,ye)},d(v){v&&t(d),v&&t(c),v&&t(u),v&&t(I),v&&t(z),v&&t(K),v&&t(A),v&&t(oe),v&&t(q)}}}function _E(R){let d,g,c,u,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var M=a(c);u=i(M,"Module"),M.forEach(t),_=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function bE(R){let d,g,c,u,_;return u=new ee({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMaskedLM
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = TFRobertaForMaskedLM.from_pretrained("roberta-base")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Example:"),m.forEach(t),c=h(l),y(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,g),k(l,c,m),w(u,l,m),_=!0},p:Z,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function kE(R){let d,g;return d=new ee({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:Z,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function vE(R){let d,g,c,u,_,l,m,M,te,I,z,X,D,se,be,S,ke,fe,K,A,ae,oe,q,j,ie,U,ge,le,H,_e,de,C,ve,W,ce,Te,B,G,re,O,pe,Q,ye;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=p(),u=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),m=p(),M=n("li"),te=r("having all inputs as a list, tuple or dict in the first positional arguments."),I=p(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),se=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ke=r("model(inputs)"),fe=r("."),K=p(),A=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=p(),q=n("ul"),j=n("li"),ie=r("a single Tensor with "),U=n("code"),ge=r("input_ids"),le=r(" only and nothing else: "),H=n("code"),_e=r("model(inputs_ids)"),de=p(),C=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),ce=r("model([input_ids, attention_mask])"),Te=r(" or "),B=n("code"),G=r("model([input_ids, attention_mask, token_type_ids])"),re=p(),O=n("li"),pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var E=a(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(v),u=s(v,"UL",{});var ne=a(u);_=s(ne,"LI",{});var Ee=a(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),m=h(ne),M=s(ne,"LI",{});var ue=a(M);te=i(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),ne.forEach(t),I=h(v),z=s(v,"P",{});var N=a(z);X=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var Re=a(D);se=i(Re,"tf.keras.Model.fit"),Re.forEach(t),be=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var ze=a(S);ke=i(ze,"model(inputs)"),ze.forEach(t),fe=i(N,"."),N.forEach(t),K=h(v),A=s(v,"P",{});var qe=a(A);ae=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),oe=h(v),q=s(v,"UL",{});var L=a(q);j=s(L,"LI",{});var J=a(j);ie=i(J,"a single Tensor with "),U=s(J,"CODE",{});var Ce=a(U);ge=i(Ce,"input_ids"),Ce.forEach(t),le=i(J," only and nothing else: "),H=s(J,"CODE",{});var Me=a(H);_e=i(Me,"model(inputs_ids)"),Me.forEach(t),J.forEach(t),de=h(L),C=s(L,"LI",{});var V=a(C);ve=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(V,"CODE",{});var je=a(W);ce=i(je,"model([input_ids, attention_mask])"),je.forEach(t),Te=i(V," or "),B=s(V,"CODE",{});var Pe=a(B);G=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),V.forEach(t),re=h(L),O=s(L,"LI",{});var he=a(O);pe=i(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(he,"CODE",{});var xe=a(Q);ye=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),he.forEach(t),L.forEach(t)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,u,E),e(u,_),e(_,l),e(u,m),e(u,M),e(M,te),k(v,I,E),k(v,z,E),e(z,X),e(z,D),e(D,se),e(z,be),e(z,S),e(S,ke),e(z,fe),k(v,K,E),k(v,A,E),e(A,ae),k(v,oe,E),k(v,q,E),e(q,j),e(j,ie),e(j,U),e(U,ge),e(j,le),e(j,H),e(H,_e),e(q,de),e(q,C),e(C,ve),e(C,W),e(W,ce),e(C,Te),e(C,B),e(B,G),e(q,re),e(q,O),e(O,pe),e(O,Q),e(Q,ye)},d(v){v&&t(d),v&&t(c),v&&t(u),v&&t(I),v&&t(z),v&&t(K),v&&t(A),v&&t(oe),v&&t(q)}}}function TE(R){let d,g,c,u,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var M=a(c);u=i(M,"Module"),M.forEach(t),_=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function yE(R){let d,g,c,u,_;return u=new ee({props:{code:`from transformers import RobertaTokenizer, TFRobertaForSequenceClassification
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")
model = TFRobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Example:"),m.forEach(t),c=h(l),y(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,g),k(l,c,m),w(u,l,m),_=!0},p:Z,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function wE(R){let d,g;return d=new ee({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFRobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:Z,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function $E(R){let d,g,c,u,_,l,m,M,te,I,z,X,D,se,be,S,ke,fe,K,A,ae,oe,q,j,ie,U,ge,le,H,_e,de,C,ve,W,ce,Te,B,G,re,O,pe,Q,ye;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=p(),u=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),m=p(),M=n("li"),te=r("having all inputs as a list, tuple or dict in the first positional arguments."),I=p(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),se=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ke=r("model(inputs)"),fe=r("."),K=p(),A=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=p(),q=n("ul"),j=n("li"),ie=r("a single Tensor with "),U=n("code"),ge=r("input_ids"),le=r(" only and nothing else: "),H=n("code"),_e=r("model(inputs_ids)"),de=p(),C=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),ce=r("model([input_ids, attention_mask])"),Te=r(" or "),B=n("code"),G=r("model([input_ids, attention_mask, token_type_ids])"),re=p(),O=n("li"),pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var E=a(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(v),u=s(v,"UL",{});var ne=a(u);_=s(ne,"LI",{});var Ee=a(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),m=h(ne),M=s(ne,"LI",{});var ue=a(M);te=i(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),ne.forEach(t),I=h(v),z=s(v,"P",{});var N=a(z);X=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var Re=a(D);se=i(Re,"tf.keras.Model.fit"),Re.forEach(t),be=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var ze=a(S);ke=i(ze,"model(inputs)"),ze.forEach(t),fe=i(N,"."),N.forEach(t),K=h(v),A=s(v,"P",{});var qe=a(A);ae=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),oe=h(v),q=s(v,"UL",{});var L=a(q);j=s(L,"LI",{});var J=a(j);ie=i(J,"a single Tensor with "),U=s(J,"CODE",{});var Ce=a(U);ge=i(Ce,"input_ids"),Ce.forEach(t),le=i(J," only and nothing else: "),H=s(J,"CODE",{});var Me=a(H);_e=i(Me,"model(inputs_ids)"),Me.forEach(t),J.forEach(t),de=h(L),C=s(L,"LI",{});var V=a(C);ve=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(V,"CODE",{});var je=a(W);ce=i(je,"model([input_ids, attention_mask])"),je.forEach(t),Te=i(V," or "),B=s(V,"CODE",{});var Pe=a(B);G=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),V.forEach(t),re=h(L),O=s(L,"LI",{});var he=a(O);pe=i(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(he,"CODE",{});var xe=a(Q);ye=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),he.forEach(t),L.forEach(t)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,u,E),e(u,_),e(_,l),e(u,m),e(u,M),e(M,te),k(v,I,E),k(v,z,E),e(z,X),e(z,D),e(D,se),e(z,be),e(z,S),e(S,ke),e(z,fe),k(v,K,E),k(v,A,E),e(A,ae),k(v,oe,E),k(v,q,E),e(q,j),e(j,ie),e(j,U),e(U,ge),e(j,le),e(j,H),e(H,_e),e(q,de),e(q,C),e(C,ve),e(C,W),e(W,ce),e(C,Te),e(C,B),e(B,G),e(q,re),e(q,O),e(O,pe),e(O,Q),e(Q,ye)},d(v){v&&t(d),v&&t(c),v&&t(u),v&&t(I),v&&t(z),v&&t(K),v&&t(A),v&&t(oe),v&&t(q)}}}function FE(R){let d,g,c,u,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var M=a(c);u=i(M,"Module"),M.forEach(t),_=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function xE(R){let d,g,c,u,_;return u=new ee({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMultipleChoice
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = TFRobertaForMultipleChoice.from_pretrained("roberta-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Example:"),m.forEach(t),c=h(l),y(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,g),k(l,c,m),w(u,l,m),_=!0},p:Z,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function RE(R){let d,g,c,u,_,l,m,M,te,I,z,X,D,se,be,S,ke,fe,K,A,ae,oe,q,j,ie,U,ge,le,H,_e,de,C,ve,W,ce,Te,B,G,re,O,pe,Q,ye;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=p(),u=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),m=p(),M=n("li"),te=r("having all inputs as a list, tuple or dict in the first positional arguments."),I=p(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),se=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ke=r("model(inputs)"),fe=r("."),K=p(),A=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=p(),q=n("ul"),j=n("li"),ie=r("a single Tensor with "),U=n("code"),ge=r("input_ids"),le=r(" only and nothing else: "),H=n("code"),_e=r("model(inputs_ids)"),de=p(),C=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),ce=r("model([input_ids, attention_mask])"),Te=r(" or "),B=n("code"),G=r("model([input_ids, attention_mask, token_type_ids])"),re=p(),O=n("li"),pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var E=a(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(v),u=s(v,"UL",{});var ne=a(u);_=s(ne,"LI",{});var Ee=a(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),m=h(ne),M=s(ne,"LI",{});var ue=a(M);te=i(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),ne.forEach(t),I=h(v),z=s(v,"P",{});var N=a(z);X=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var Re=a(D);se=i(Re,"tf.keras.Model.fit"),Re.forEach(t),be=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var ze=a(S);ke=i(ze,"model(inputs)"),ze.forEach(t),fe=i(N,"."),N.forEach(t),K=h(v),A=s(v,"P",{});var qe=a(A);ae=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),oe=h(v),q=s(v,"UL",{});var L=a(q);j=s(L,"LI",{});var J=a(j);ie=i(J,"a single Tensor with "),U=s(J,"CODE",{});var Ce=a(U);ge=i(Ce,"input_ids"),Ce.forEach(t),le=i(J," only and nothing else: "),H=s(J,"CODE",{});var Me=a(H);_e=i(Me,"model(inputs_ids)"),Me.forEach(t),J.forEach(t),de=h(L),C=s(L,"LI",{});var V=a(C);ve=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(V,"CODE",{});var je=a(W);ce=i(je,"model([input_ids, attention_mask])"),je.forEach(t),Te=i(V," or "),B=s(V,"CODE",{});var Pe=a(B);G=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),V.forEach(t),re=h(L),O=s(L,"LI",{});var he=a(O);pe=i(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(he,"CODE",{});var xe=a(Q);ye=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),he.forEach(t),L.forEach(t)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,u,E),e(u,_),e(_,l),e(u,m),e(u,M),e(M,te),k(v,I,E),k(v,z,E),e(z,X),e(z,D),e(D,se),e(z,be),e(z,S),e(S,ke),e(z,fe),k(v,K,E),k(v,A,E),e(A,ae),k(v,oe,E),k(v,q,E),e(q,j),e(j,ie),e(j,U),e(U,ge),e(j,le),e(j,H),e(H,_e),e(q,de),e(q,C),e(C,ve),e(C,W),e(W,ce),e(C,Te),e(C,B),e(B,G),e(q,re),e(q,O),e(O,pe),e(O,Q),e(Q,ye)},d(v){v&&t(d),v&&t(c),v&&t(u),v&&t(I),v&&t(z),v&&t(K),v&&t(A),v&&t(oe),v&&t(q)}}}function ME(R){let d,g,c,u,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var M=a(c);u=i(M,"Module"),M.forEach(t),_=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function EE(R){let d,g,c,u,_;return u=new ee({props:{code:`from transformers import RobertaTokenizer, TFRobertaForTokenClassification
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("ydshieh/roberta-large-ner-english")
model = TFRobertaForTokenClassification.from_pretrained("ydshieh/roberta-large-ner-english")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-large-ner-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-large-ner-english&quot;</span>)

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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Example:"),m.forEach(t),c=h(l),y(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,g),k(l,c,m),w(u,l,m),_=!0},p:Z,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function zE(R){let d,g;return d=new ee({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:Z,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function qE(R){let d,g,c,u,_,l,m,M,te,I,z,X,D,se,be,S,ke,fe,K,A,ae,oe,q,j,ie,U,ge,le,H,_e,de,C,ve,W,ce,Te,B,G,re,O,pe,Q,ye;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=p(),u=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),m=p(),M=n("li"),te=r("having all inputs as a list, tuple or dict in the first positional arguments."),I=p(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),se=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ke=r("model(inputs)"),fe=r("."),K=p(),A=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=p(),q=n("ul"),j=n("li"),ie=r("a single Tensor with "),U=n("code"),ge=r("input_ids"),le=r(" only and nothing else: "),H=n("code"),_e=r("model(inputs_ids)"),de=p(),C=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),ce=r("model([input_ids, attention_mask])"),Te=r(" or "),B=n("code"),G=r("model([input_ids, attention_mask, token_type_ids])"),re=p(),O=n("li"),pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var E=a(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(v),u=s(v,"UL",{});var ne=a(u);_=s(ne,"LI",{});var Ee=a(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),m=h(ne),M=s(ne,"LI",{});var ue=a(M);te=i(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),ne.forEach(t),I=h(v),z=s(v,"P",{});var N=a(z);X=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var Re=a(D);se=i(Re,"tf.keras.Model.fit"),Re.forEach(t),be=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var ze=a(S);ke=i(ze,"model(inputs)"),ze.forEach(t),fe=i(N,"."),N.forEach(t),K=h(v),A=s(v,"P",{});var qe=a(A);ae=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),oe=h(v),q=s(v,"UL",{});var L=a(q);j=s(L,"LI",{});var J=a(j);ie=i(J,"a single Tensor with "),U=s(J,"CODE",{});var Ce=a(U);ge=i(Ce,"input_ids"),Ce.forEach(t),le=i(J," only and nothing else: "),H=s(J,"CODE",{});var Me=a(H);_e=i(Me,"model(inputs_ids)"),Me.forEach(t),J.forEach(t),de=h(L),C=s(L,"LI",{});var V=a(C);ve=i(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(V,"CODE",{});var je=a(W);ce=i(je,"model([input_ids, attention_mask])"),je.forEach(t),Te=i(V," or "),B=s(V,"CODE",{});var Pe=a(B);G=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),V.forEach(t),re=h(L),O=s(L,"LI",{});var he=a(O);pe=i(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(he,"CODE",{});var xe=a(Q);ye=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),he.forEach(t),L.forEach(t)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,u,E),e(u,_),e(_,l),e(u,m),e(u,M),e(M,te),k(v,I,E),k(v,z,E),e(z,X),e(z,D),e(D,se),e(z,be),e(z,S),e(S,ke),e(z,fe),k(v,K,E),k(v,A,E),e(A,ae),k(v,oe,E),k(v,q,E),e(q,j),e(j,ie),e(j,U),e(U,ge),e(j,le),e(j,H),e(H,_e),e(q,de),e(q,C),e(C,ve),e(C,W),e(W,ce),e(C,Te),e(C,B),e(B,G),e(q,re),e(q,O),e(O,pe),e(O,Q),e(Q,ye)},d(v){v&&t(d),v&&t(c),v&&t(u),v&&t(I),v&&t(z),v&&t(K),v&&t(A),v&&t(oe),v&&t(q)}}}function CE(R){let d,g,c,u,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var M=a(c);u=i(M,"Module"),M.forEach(t),_=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function jE(R){let d,g,c,u,_;return u=new ee({props:{code:`from transformers import RobertaTokenizer, TFRobertaForQuestionAnswering
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("ydshieh/roberta-base-squad2")
model = TFRobertaForQuestionAnswering.from_pretrained("ydshieh/roberta-base-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Example:"),m.forEach(t),c=h(l),y(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,g),k(l,c,m),w(u,l,m),_=!0},p:Z,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function PE(R){let d,g;return d=new ee({props:{code:`# target is "nice puppet"
target_start_index = tf.constant([14])
target_end_index = tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.86</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:Z,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function LE(R){let d,g,c,u,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var M=a(c);u=i(M,"Module"),M.forEach(t),_=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function AE(R){let d,g,c,u,_;return u=new ee({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaModel

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaModel.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaModel.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Example:"),m.forEach(t),c=h(l),y(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,g),k(l,c,m),w(u,l,m),_=!0},p:Z,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function OE(R){let d,g,c,u,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var M=a(c);u=i(M,"Module"),M.forEach(t),_=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function NE(R){let d,g,c,u,_;return u=new ee({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForCausalLM

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForCausalLM.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

# retrieve logts for next token
next_token_logits = outputs.logits[:, -1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForCausalLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Example:"),m.forEach(t),c=h(l),y(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,g),k(l,c,m),w(u,l,m),_=!0},p:Z,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function IE(R){let d,g,c,u,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var M=a(c);u=i(M,"Module"),M.forEach(t),_=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function DE(R){let d,g,c,u,_;return u=new ee({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMaskedLM

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForMaskedLM.from_pretrained("roberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Example:"),m.forEach(t),c=h(l),y(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,g),k(l,c,m),w(u,l,m),_=!0},p:Z,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function SE(R){let d,g,c,u,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var M=a(c);u=i(M,"Module"),M.forEach(t),_=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function WE(R){let d,g,c,u,_;return u=new ee({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForSequenceClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Example:"),m.forEach(t),c=h(l),y(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,g),k(l,c,m),w(u,l,m),_=!0},p:Z,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function BE(R){let d,g,c,u,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var M=a(c);u=i(M,"Module"),M.forEach(t),_=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function UE(R){let d,g,c,u,_;return u=new ee({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMultipleChoice

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForMultipleChoice.from_pretrained("roberta-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Example:"),m.forEach(t),c=h(l),y(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,g),k(l,c,m),w(u,l,m),_=!0},p:Z,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function HE(R){let d,g,c,u,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var M=a(c);u=i(M,"Module"),M.forEach(t),_=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function QE(R){let d,g,c,u,_;return u=new ee({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForTokenClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForTokenClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Example:"),m.forEach(t),c=h(l),y(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,g),k(l,c,m),w(u,l,m),_=!0},p:Z,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function JE(R){let d,g,c,u,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),u=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(m,"CODE",{});var M=a(c);u=i(M,"Module"),M.forEach(t),_=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function VE(R){let d,g,c,u,_;return u=new ee({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForQuestionAnswering

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForQuestionAnswering.from_pretrained("roberta-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(u.$$.fragment)},l(l){d=s(l,"P",{});var m=a(d);g=i(m,"Example:"),m.forEach(t),c=h(l),y(u.$$.fragment,l)},m(l,m){k(l,d,m),e(d,g),k(l,c,m),w(u,l,m),_=!0},p:Z,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function KE(R){let d,g,c,u,_,l,m,M,te,I,z,X,D,se,be,S,ke,fe,K,A,ae,oe,q,j,ie,U,ge,le,H,_e,de,C,ve,W,ce,Te,B,G,re,O,pe,Q,ye,v,E,ne,Ee,ue,N,Re,ze,qe,L,J,Ce,Me,V,je,Pe,he,xe,ag,rg,Uu,eo,ig,va,lg,dg,Ta,cg,pg,Hu,go,bn,hc,ya,hg,uc,ug,Qu,et,wa,mg,Bt,fg,Jl,gg,_g,Vl,bg,kg,$a,vg,Tg,yg,_o,wg,Kl,$g,Fg,Gl,xg,Rg,Mg,bo,Eg,Xl,zg,qg,Yl,Cg,jg,Pg,kn,Ju,ko,vn,mc,Fa,Lg,fc,Ag,Vu,we,xa,Og,gc,Ng,Ig,_c,Dg,Sg,Tn,Wg,Ra,Bg,bc,Ug,Hg,Qg,yn,Jg,Ma,Vg,Zl,Kg,Gg,Xg,to,Ea,Yg,kc,Zg,e_,za,ed,t_,vc,o_,n_,td,s_,Tc,a_,r_,wn,qa,i_,Ca,l_,yc,d_,c_,p_,$n,ja,h_,wc,u_,m_,od,Pa,Ku,vo,Fn,$c,La,f_,Fc,g_,Gu,Le,Aa,__,Oa,b_,xc,k_,v_,T_,Rc,y_,w_,xn,$_,Na,F_,Mc,x_,R_,M_,Rn,E_,Ia,z_,nd,q_,C_,j_,sd,Da,Xu,To,Mn,Ec,Sa,P_,zc,L_,Yu,Ae,Wa,A_,qc,O_,N_,Ba,I_,ad,D_,S_,W_,Ua,B_,Ha,U_,H_,Q_,Qa,J_,Cc,V_,K_,G_,He,X_,jc,Y_,Z_,Pc,eb,tb,Lc,ob,nb,Ac,sb,ab,Oc,rb,ib,Nc,lb,db,cb,En,pb,Ic,hb,ub,Ja,mb,fb,$t,Va,gb,yo,_b,rd,bb,kb,Dc,vb,Tb,yb,zn,wb,qn,Zu,wo,Cn,Sc,Ka,$b,Wc,Fb,em,tt,Ga,xb,Xa,Rb,Bc,Mb,Eb,zb,Ya,qb,id,Cb,jb,Pb,Za,Lb,er,Ab,Ob,Nb,Ft,tr,Ib,$o,Db,ld,Sb,Wb,Uc,Bb,Ub,Hb,jn,Qb,Pn,tm,Fo,Ln,Hc,or,Jb,Qc,Vb,om,ot,nr,Kb,sr,Gb,Jc,Xb,Yb,Zb,ar,ek,dd,tk,ok,nk,rr,sk,ir,ak,rk,ik,it,lr,lk,xo,dk,cd,ck,pk,Vc,hk,uk,mk,An,fk,On,gk,Nn,nm,Ro,In,Kc,dr,_k,Gc,bk,sm,nt,cr,kk,Xc,vk,Tk,pr,yk,pd,wk,$k,Fk,hr,xk,ur,Rk,Mk,Ek,Ue,mr,zk,Mo,qk,hd,Ck,jk,Yc,Pk,Lk,Ak,Dn,Ok,Sn,Nk,Wn,Ik,Bn,Dk,Un,am,Eo,Hn,Zc,fr,Sk,ep,Wk,rm,st,gr,Bk,tp,Uk,Hk,_r,Qk,ud,Jk,Vk,Kk,br,Gk,kr,Xk,Yk,Zk,xt,vr,e1,zo,t1,md,o1,n1,op,s1,a1,r1,Qn,i1,Jn,im,qo,Vn,np,Tr,l1,sp,d1,lm,at,yr,c1,ap,p1,h1,wr,u1,fd,m1,f1,g1,$r,_1,Fr,b1,k1,v1,lt,xr,T1,Co,y1,gd,w1,$1,rp,F1,x1,R1,Kn,M1,Gn,E1,Xn,dm,jo,Yn,ip,Rr,z1,lp,q1,cm,rt,Mr,C1,Po,j1,dp,P1,L1,cp,A1,O1,N1,Er,I1,_d,D1,S1,W1,zr,B1,qr,U1,H1,Q1,dt,Cr,J1,Lo,V1,bd,K1,G1,pp,X1,Y1,Z1,Zn,ev,es,tv,ts,pm,Ao,os,hp,jr,ov,up,nv,hm,Qe,Pr,sv,mp,av,rv,Lr,iv,kd,lv,dv,cv,Ar,pv,Or,hv,uv,mv,ns,fv,Rt,Nr,gv,Oo,_v,vd,bv,kv,fp,vv,Tv,yv,ss,wv,as,um,No,rs,gp,Ir,$v,_p,Fv,mm,Io,Dr,xv,Mt,Sr,Rv,Do,Mv,Td,Ev,zv,bp,qv,Cv,jv,is,Pv,ls,fm,So,ds,kp,Wr,Lv,vp,Av,gm,Je,Br,Ov,Ur,Nv,Tp,Iv,Dv,Sv,Hr,Wv,yd,Bv,Uv,Hv,Qr,Qv,Jr,Jv,Vv,Kv,cs,Gv,ct,Vr,Xv,Wo,Yv,wd,Zv,eT,yp,tT,oT,nT,ps,sT,hs,aT,us,_m,Bo,ms,wp,Kr,rT,$p,iT,bm,Ve,Gr,lT,Fp,dT,cT,Xr,pT,$d,hT,uT,mT,Yr,fT,Zr,gT,_T,bT,fs,kT,pt,ei,vT,Uo,TT,Fd,yT,wT,xp,$T,FT,xT,gs,RT,_s,MT,bs,km,Ho,ks,Rp,ti,ET,Mp,zT,vm,Ke,oi,qT,Ep,CT,jT,ni,PT,xd,LT,AT,OT,si,NT,ai,IT,DT,ST,vs,WT,Et,ri,BT,Qo,UT,Rd,HT,QT,zp,JT,VT,KT,Ts,GT,ys,Tm,Jo,ws,qp,ii,XT,Cp,YT,ym,Ge,li,ZT,jp,ey,ty,di,oy,Md,ny,sy,ay,ci,ry,pi,iy,ly,dy,$s,cy,ht,hi,py,Vo,hy,Ed,uy,my,Pp,fy,gy,_y,Fs,by,xs,ky,Rs,wm,Ko,Ms,Lp,ui,vy,Ap,Ty,$m,Xe,mi,yy,Go,wy,Op,$y,Fy,Np,xy,Ry,My,fi,Ey,zd,zy,qy,Cy,gi,jy,_i,Py,Ly,Ay,Es,Oy,ut,bi,Ny,Xo,Iy,qd,Dy,Sy,Ip,Wy,By,Uy,zs,Hy,qs,Qy,Cs,Fm,Yo,js,Dp,ki,Jy,Sp,Vy,xm,Oe,vi,Ky,Wp,Gy,Xy,Ti,Yy,Cd,Zy,ew,tw,yi,ow,wi,nw,sw,aw,Bp,rw,iw,Ut,Up,$i,lw,dw,Hp,Fi,cw,pw,Qp,xi,hw,uw,Jp,Ri,mw,fw,zt,Mi,gw,Zo,_w,Vp,bw,kw,Kp,vw,Tw,yw,Ps,ww,Ls,Rm,en,As,Gp,Ei,$w,Xp,Fw,Mm,Ne,zi,xw,Yp,Rw,Mw,qi,Ew,jd,zw,qw,Cw,Ci,jw,ji,Pw,Lw,Aw,Zp,Ow,Nw,Ht,eh,Pi,Iw,Dw,th,Li,Sw,Ww,oh,Ai,Bw,Uw,nh,Oi,Hw,Qw,qt,Ni,Jw,tn,Vw,sh,Kw,Gw,ah,Xw,Yw,Zw,Os,e$,Ns,Em,on,Is,rh,Ii,t$,ih,o$,zm,Ie,Di,n$,Si,s$,lh,a$,r$,i$,Wi,l$,Pd,d$,c$,p$,Bi,h$,Ui,u$,m$,f$,dh,g$,_$,Qt,ch,Hi,b$,k$,ph,Qi,v$,T$,hh,Ji,y$,w$,uh,Vi,$$,F$,Ct,Ki,x$,nn,R$,mh,M$,E$,fh,z$,q$,C$,Ds,j$,Ss,qm,sn,Ws,gh,Gi,P$,_h,L$,Cm,De,Xi,A$,bh,O$,N$,Yi,I$,Ld,D$,S$,W$,Zi,B$,el,U$,H$,Q$,kh,J$,V$,Jt,vh,tl,K$,G$,Th,ol,X$,Y$,yh,nl,Z$,e0,wh,sl,t0,o0,jt,al,n0,an,s0,$h,a0,r0,Fh,i0,l0,d0,Bs,c0,Us,jm,rn,Hs,xh,rl,p0,Rh,h0,Pm,Se,il,u0,Mh,m0,f0,ll,g0,Ad,_0,b0,k0,dl,v0,cl,T0,y0,w0,Eh,$0,F0,Vt,zh,pl,x0,R0,qh,hl,M0,E0,Ch,ul,z0,q0,jh,ml,C0,j0,Pt,fl,P0,ln,L0,Ph,A0,O0,Lh,N0,I0,D0,Qs,S0,Js,Lm,dn,Vs,Ah,gl,W0,Oh,B0,Am,We,_l,U0,Nh,H0,Q0,bl,J0,Od,V0,K0,G0,kl,X0,vl,Y0,Z0,e2,Ih,t2,o2,Kt,Dh,Tl,n2,s2,Sh,yl,a2,r2,Wh,wl,i2,l2,Bh,$l,d2,c2,Lt,Fl,p2,cn,h2,Uh,u2,m2,Hh,f2,g2,_2,Ks,b2,Gs,Om,pn,Xs,Qh,xl,k2,Jh,v2,Nm,Be,Rl,T2,hn,y2,Vh,w2,$2,Kh,F2,x2,R2,Ml,M2,Nd,E2,z2,q2,El,C2,zl,j2,P2,L2,Gh,A2,O2,Gt,Xh,ql,N2,I2,Yh,Cl,D2,S2,Zh,jl,W2,B2,eu,Pl,U2,H2,At,Ll,Q2,un,J2,tu,V2,K2,ou,G2,X2,Y2,Ys,Z2,Zs,Im;return l=new $e({}),se=new $e({}),ya=new $e({}),wa=new P({props:{name:"class transformers.RobertaConfig",anchor:"transformers.RobertaConfig",parameters:[{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/configuration_roberta.py#L37"}}),kn=new Y({props:{anchor:"transformers.RobertaConfig.example",$$slots:{default:[D8]},$$scope:{ctx:R}}}),Fa=new $e({}),xa=new P({props:{name:"class transformers.RobertaTokenizer",anchor:"transformers.RobertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.RobertaTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.RobertaTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.RobertaTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.RobertaTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.RobertaTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.RobertaTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.RobertaTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.RobertaTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.RobertaTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.RobertaTokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (RoBERTa tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/tokenization_roberta.py#L107"}}),Tn=new Y({props:{anchor:"transformers.RobertaTokenizer.example",$$slots:{default:[S8]},$$scope:{ctx:R}}}),yn=new me({props:{$$slots:{default:[W8]},$$scope:{ctx:R}}}),Ea=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/tokenization_roberta.py#L344",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),qa=new P({props:{name:"get_special_tokens_mask",anchor:"transformers.RobertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/tokenization_roberta.py#L369",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ja=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/tokenization_roberta.py#L396",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Pa=new P({props:{name:"save_vocabulary",anchor:"transformers.RobertaTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/tokenization_roberta.py#L315"}}),La=new $e({}),Aa=new P({props:{name:"class transformers.RobertaTokenizerFast",anchor:"transformers.RobertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RobertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.RobertaTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.RobertaTokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.RobertaTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.RobertaTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.RobertaTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.RobertaTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.RobertaTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.RobertaTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.RobertaTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.RobertaTokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (RoBERTa tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.RobertaTokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/tokenization_roberta_fast.py#L76"}}),xn=new Y({props:{anchor:"transformers.RobertaTokenizerFast.example",$$slots:{default:[B8]},$$scope:{ctx:R}}}),Rn=new me({props:{$$slots:{default:[U8]},$$scope:{ctx:R}}}),Da=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RobertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/tokenization_roberta_fast.py#L279"}}),Sa=new $e({}),Wa=new P({props:{name:"class transformers.RobertaModel",anchor:"transformers.RobertaModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.RobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18081/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_roberta.py#L693"}}),Va=new P({props:{name:"forward",anchor:"transformers.RobertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RobertaModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RobertaModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RobertaModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RobertaModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RobertaModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RobertaModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18081/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.RobertaModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.RobertaModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.RobertaModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_roberta.py#L738",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zn=new me({props:{$$slots:{default:[H8]},$$scope:{ctx:R}}}),qn=new Y({props:{anchor:"transformers.RobertaModel.forward.example",$$slots:{default:[Q8]},$$scope:{ctx:R}}}),Ka=new $e({}),Ga=new P({props:{name:"class transformers.RobertaForCausalLM",anchor:"transformers.RobertaForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18081/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_roberta.py#L879"}}),tr=new P({props:{name:"forward",anchor:"transformers.RobertaForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RobertaForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RobertaForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RobertaForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RobertaForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RobertaForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RobertaForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18081/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.RobertaForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.RobertaForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.RobertaForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.RobertaForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_roberta.py#L905",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),jn=new me({props:{$$slots:{default:[J8]},$$scope:{ctx:R}}}),Pn=new Y({props:{anchor:"transformers.RobertaForCausalLM.forward.example",$$slots:{default:[V8]},$$scope:{ctx:R}}}),or=new $e({}),nr=new P({props:{name:"class transformers.RobertaForMaskedLM",anchor:"transformers.RobertaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18081/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_roberta.py#L1031"}}),lr=new P({props:{name:"forward",anchor:"transformers.RobertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RobertaForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RobertaForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RobertaForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RobertaForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RobertaForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RobertaForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18081/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.RobertaForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_roberta.py#L1060",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),An=new me({props:{$$slots:{default:[K8]},$$scope:{ctx:R}}}),On=new Y({props:{anchor:"transformers.RobertaForMaskedLM.forward.example",$$slots:{default:[G8]},$$scope:{ctx:R}}}),Nn=new Y({props:{anchor:"transformers.RobertaForMaskedLM.forward.example-2",$$slots:{default:[X8]},$$scope:{ctx:R}}}),dr=new $e({}),cr=new P({props:{name:"class transformers.RobertaForSequenceClassification",anchor:"transformers.RobertaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18081/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_roberta.py#L1162"}}),mr=new P({props:{name:"forward",anchor:"transformers.RobertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RobertaForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RobertaForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RobertaForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RobertaForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RobertaForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RobertaForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18081/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_roberta.py#L1176",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Dn=new me({props:{$$slots:{default:[Y8]},$$scope:{ctx:R}}}),Sn=new Y({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example",$$slots:{default:[Z8]},$$scope:{ctx:R}}}),Wn=new Y({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-2",$$slots:{default:[eE]},$$scope:{ctx:R}}}),Bn=new Y({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-3",$$slots:{default:[tE]},$$scope:{ctx:R}}}),Un=new Y({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-4",$$slots:{default:[oE]},$$scope:{ctx:R}}}),fr=new $e({}),gr=new P({props:{name:"class transformers.RobertaForMultipleChoice",anchor:"transformers.RobertaForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18081/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_roberta.py#L1262"}}),vr=new P({props:{name:"forward",anchor:"transformers.RobertaForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RobertaForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RobertaForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RobertaForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RobertaForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RobertaForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RobertaForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18081/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_roberta.py#L1275",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qn=new me({props:{$$slots:{default:[nE]},$$scope:{ctx:R}}}),Jn=new Y({props:{anchor:"transformers.RobertaForMultipleChoice.forward.example",$$slots:{default:[sE]},$$scope:{ctx:R}}}),Tr=new $e({}),yr=new P({props:{name:"class transformers.RobertaForTokenClassification",anchor:"transformers.RobertaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18081/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_roberta.py#L1355"}}),xr=new P({props:{name:"forward",anchor:"transformers.RobertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RobertaForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RobertaForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RobertaForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RobertaForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RobertaForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RobertaForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18081/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_roberta.py#L1373",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Kn=new me({props:{$$slots:{default:[aE]},$$scope:{ctx:R}}}),Gn=new Y({props:{anchor:"transformers.RobertaForTokenClassification.forward.example",$$slots:{default:[rE]},$$scope:{ctx:R}}}),Xn=new Y({props:{anchor:"transformers.RobertaForTokenClassification.forward.example-2",$$slots:{default:[iE]},$$scope:{ctx:R}}}),Rr=new $e({}),Mr=new P({props:{name:"class transformers.RobertaForQuestionAnswering",anchor:"transformers.RobertaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18081/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_roberta.py#L1464"}}),Cr=new P({props:{name:"forward",anchor:"transformers.RobertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RobertaForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RobertaForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RobertaForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RobertaForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RobertaForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RobertaForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18081/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.RobertaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_roberta.py#L1478",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zn=new me({props:{$$slots:{default:[lE]},$$scope:{ctx:R}}}),es=new Y({props:{anchor:"transformers.RobertaForQuestionAnswering.forward.example",$$slots:{default:[dE]},$$scope:{ctx:R}}}),ts=new Y({props:{anchor:"transformers.RobertaForQuestionAnswering.forward.example-2",$$slots:{default:[cE]},$$scope:{ctx:R}}}),jr=new $e({}),Pr=new P({props:{name:"class transformers.TFRobertaModel",anchor:"transformers.TFRobertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18081/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_tf_roberta.py#L909"}}),ns=new me({props:{$$slots:{default:[pE]},$$scope:{ctx:R}}}),Nr=new P({props:{name:"call",anchor:"transformers.TFRobertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRobertaModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRobertaModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRobertaModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRobertaModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRobertaModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRobertaModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRobertaModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRobertaModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18081/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFRobertaModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFRobertaModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFRobertaModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_tf_roberta.py#L914",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ss=new me({props:{$$slots:{default:[hE]},$$scope:{ctx:R}}}),as=new Y({props:{anchor:"transformers.TFRobertaModel.call.example",$$slots:{default:[uE]},$$scope:{ctx:R}}}),Ir=new $e({}),Dr=new P({props:{name:"class transformers.TFRobertaForCausalLM",anchor:"transformers.TFRobertaForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_tf_roberta.py#L1138"}}),Sr=new P({props:{name:"call",anchor:"transformers.TFRobertaForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRobertaForCausalLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRobertaForCausalLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRobertaForCausalLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRobertaForCausalLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRobertaForCausalLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRobertaForCausalLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRobertaForCausalLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRobertaForCausalLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18081/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForCausalLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForCausalLM.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFRobertaForCausalLM.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFRobertaForCausalLM.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFRobertaForCausalLM.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFRobertaForCausalLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_tf_roberta.py#L1171",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),is=new me({props:{$$slots:{default:[mE]},$$scope:{ctx:R}}}),ls=new Y({props:{anchor:"transformers.TFRobertaForCausalLM.call.example",$$slots:{default:[fE]},$$scope:{ctx:R}}}),Wr=new $e({}),Br=new P({props:{name:"class transformers.TFRobertaForMaskedLM",anchor:"transformers.TFRobertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18081/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_tf_roberta.py#L1053"}}),cs=new me({props:{$$slots:{default:[gE]},$$scope:{ctx:R}}}),Vr=new P({props:{name:"call",anchor:"transformers.TFRobertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRobertaForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRobertaForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRobertaForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRobertaForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRobertaForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRobertaForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRobertaForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRobertaForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18081/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_tf_roberta.py#L1070",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ps=new me({props:{$$slots:{default:[_E]},$$scope:{ctx:R}}}),hs=new Y({props:{anchor:"transformers.TFRobertaForMaskedLM.call.example",$$slots:{default:[bE]},$$scope:{ctx:R}}}),us=new Y({props:{anchor:"transformers.TFRobertaForMaskedLM.call.example-2",$$slots:{default:[kE]},$$scope:{ctx:R}}}),Kr=new $e({}),Gr=new P({props:{name:"class transformers.TFRobertaForSequenceClassification",anchor:"transformers.TFRobertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18081/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_tf_roberta.py#L1318"}}),fs=new me({props:{$$slots:{default:[vE]},$$scope:{ctx:R}}}),ei=new P({props:{name:"call",anchor:"transformers.TFRobertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRobertaForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRobertaForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRobertaForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRobertaForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRobertaForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRobertaForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRobertaForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRobertaForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18081/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_tf_roberta.py#L1329",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gs=new me({props:{$$slots:{default:[TE]},$$scope:{ctx:R}}}),_s=new Y({props:{anchor:"transformers.TFRobertaForSequenceClassification.call.example",$$slots:{default:[yE]},$$scope:{ctx:R}}}),bs=new Y({props:{anchor:"transformers.TFRobertaForSequenceClassification.call.example-2",$$slots:{default:[wE]},$$scope:{ctx:R}}}),ti=new $e({}),oi=new P({props:{name:"class transformers.TFRobertaForMultipleChoice",anchor:"transformers.TFRobertaForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18081/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_tf_roberta.py#L1402"}}),vs=new me({props:{$$slots:{default:[$E]},$$scope:{ctx:R}}}),ri=new P({props:{name:"call",anchor:"transformers.TFRobertaForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRobertaForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRobertaForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRobertaForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRobertaForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRobertaForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRobertaForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRobertaForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRobertaForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18081/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_tf_roberta.py#L1426",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ts=new me({props:{$$slots:{default:[FE]},$$scope:{ctx:R}}}),ys=new Y({props:{anchor:"transformers.TFRobertaForMultipleChoice.call.example",$$slots:{default:[xE]},$$scope:{ctx:R}}}),ii=new $e({}),li=new P({props:{name:"class transformers.TFRobertaForTokenClassification",anchor:"transformers.TFRobertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18081/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_tf_roberta.py#L1523"}}),$s=new me({props:{$$slots:{default:[RE]},$$scope:{ctx:R}}}),hi=new P({props:{name:"call",anchor:"transformers.TFRobertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRobertaForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRobertaForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRobertaForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRobertaForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRobertaForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRobertaForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRobertaForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRobertaForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18081/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_tf_roberta.py#L1541",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Fs=new me({props:{$$slots:{default:[ME]},$$scope:{ctx:R}}}),xs=new Y({props:{anchor:"transformers.TFRobertaForTokenClassification.call.example",$$slots:{default:[EE]},$$scope:{ctx:R}}}),Rs=new Y({props:{anchor:"transformers.TFRobertaForTokenClassification.call.example-2",$$slots:{default:[zE]},$$scope:{ctx:R}}}),ui=new $e({}),mi=new P({props:{name:"class transformers.TFRobertaForQuestionAnswering",anchor:"transformers.TFRobertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18081/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_tf_roberta.py#L1614"}}),Es=new me({props:{$$slots:{default:[qE]},$$scope:{ctx:R}}}),bi=new P({props:{name:"call",anchor:"transformers.TFRobertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18081/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_tf_roberta.py#L1627",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),zs=new me({props:{$$slots:{default:[CE]},$$scope:{ctx:R}}}),qs=new Y({props:{anchor:"transformers.TFRobertaForQuestionAnswering.call.example",$$slots:{default:[jE]},$$scope:{ctx:R}}}),Cs=new Y({props:{anchor:"transformers.TFRobertaForQuestionAnswering.call.example-2",$$slots:{default:[PE]},$$scope:{ctx:R}}}),ki=new $e({}),vi=new P({props:{name:"class transformers.FlaxRobertaModel",anchor:"transformers.FlaxRobertaModel",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18081/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_flax_roberta.py#L989"}}),Mi=new P({props:{name:"__call__",anchor:"transformers.FlaxRobertaModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18081/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRobertaModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRobertaModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRobertaModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRobertaModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRobertaModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18081/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ps=new me({props:{$$slots:{default:[LE]},$$scope:{ctx:R}}}),Ls=new Y({props:{anchor:"transformers.FlaxRobertaModel.__call__.example",$$slots:{default:[AE]},$$scope:{ctx:R}}}),Ei=new $e({}),zi=new P({props:{name:"class transformers.FlaxRobertaForCausalLM",anchor:"transformers.FlaxRobertaForCausalLM",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18081/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_flax_roberta.py#L1458"}}),Ni=new P({props:{name:"__call__",anchor:"transformers.FlaxRobertaForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18081/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRobertaForCausalLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRobertaForCausalLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRobertaForCausalLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRobertaForCausalLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRobertaForCausalLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18081/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Os=new me({props:{$$slots:{default:[OE]},$$scope:{ctx:R}}}),Ns=new Y({props:{anchor:"transformers.FlaxRobertaForCausalLM.__call__.example",$$slots:{default:[NE]},$$scope:{ctx:R}}}),Ii=new $e({}),Di=new P({props:{name:"class transformers.FlaxRobertaForMaskedLM",anchor:"transformers.FlaxRobertaForMaskedLM",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18081/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_flax_roberta.py#L1057"}}),Ki=new P({props:{name:"__call__",anchor:"transformers.FlaxRobertaForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18081/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18081/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ds=new me({props:{$$slots:{default:[IE]},$$scope:{ctx:R}}}),Ss=new Y({props:{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.example",$$slots:{default:[DE]},$$scope:{ctx:R}}}),Gi=new $e({}),Xi=new P({props:{name:"class transformers.FlaxRobertaForSequenceClassification",anchor:"transformers.FlaxRobertaForSequenceClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18081/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_flax_roberta.py#L1130"}}),al=new P({props:{name:"__call__",anchor:"transformers.FlaxRobertaForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18081/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18081/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bs=new me({props:{$$slots:{default:[SE]},$$scope:{ctx:R}}}),Us=new Y({props:{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.example",$$slots:{default:[WE]},$$scope:{ctx:R}}}),rl=new $e({}),il=new P({props:{name:"class transformers.FlaxRobertaForMultipleChoice",anchor:"transformers.FlaxRobertaForMultipleChoice",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18081/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_flax_roberta.py#L1212"}}),fl=new P({props:{name:"__call__",anchor:"transformers.FlaxRobertaForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18081/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18081/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qs=new me({props:{$$slots:{default:[BE]},$$scope:{ctx:R}}}),Js=new Y({props:{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.example",$$slots:{default:[UE]},$$scope:{ctx:R}}}),gl=new $e({}),_l=new P({props:{name:"class transformers.FlaxRobertaForTokenClassification",anchor:"transformers.FlaxRobertaForTokenClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18081/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_flax_roberta.py#L1295"}}),Fl=new P({props:{name:"__call__",anchor:"transformers.FlaxRobertaForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18081/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18081/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ks=new me({props:{$$slots:{default:[HE]},$$scope:{ctx:R}}}),Gs=new Y({props:{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.example",$$slots:{default:[QE]},$$scope:{ctx:R}}}),xl=new $e({}),Rl=new P({props:{name:"class transformers.FlaxRobertaForQuestionAnswering",anchor:"transformers.FlaxRobertaForQuestionAnswering",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18081/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_flax_roberta.py#L1373"}}),Ll=new P({props:{name:"__call__",anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18081/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18081/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18081/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18081/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_18081/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ys=new me({props:{$$slots:{default:[JE]},$$scope:{ctx:R}}}),Zs=new Y({props:{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.example",$$slots:{default:[VE]},$$scope:{ctx:R}}}),{c(){d=n("meta"),g=p(),c=n("h1"),u=n("a"),_=n("span"),T(l.$$.fragment),m=p(),M=n("span"),te=r("RoBERTa"),I=p(),z=n("h2"),X=n("a"),D=n("span"),T(se.$$.fragment),be=p(),S=n("span"),ke=r("Overview"),fe=p(),K=n("p"),A=r("The RoBERTa model was proposed in "),ae=n("a"),oe=r("RoBERTa: A Robustly Optimized BERT Pretraining Approach"),q=r(` by Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer
Levy, Mike Lewis, Luke Zettlemoyer, Veselin Stoyanov. It is based on Google\u2019s BERT model released in 2018.`),j=p(),ie=n("p"),U=r(`It builds on BERT and modifies key hyperparameters, removing the next-sentence pretraining objective and training with
much larger mini-batches and learning rates.`),ge=p(),le=n("p"),H=r("The abstract from the paper is the following:"),_e=p(),de=n("p"),C=n("em"),ve=r(`Language model pretraining has led to significant performance gains but careful comparison between different
approaches is challenging. Training is computationally expensive, often done on private datasets of different sizes,
and, as we will show, hyperparameter choices have significant impact on the final results. We present a replication
study of BERT pretraining (Devlin et al., 2019) that carefully measures the impact of many key hyperparameters and
training data size. We find that BERT was significantly undertrained, and can match or exceed the performance of every
model published after it. Our best model achieves state-of-the-art results on GLUE, RACE and SQuAD. These results
highlight the importance of previously overlooked design choices, and raise questions about the source of recently
reported improvements. We release our models and code.`),W=p(),ce=n("p"),Te=r("Tips:"),B=p(),G=n("ul"),re=n("li"),O=r("This implementation is the same as "),pe=n("a"),Q=r("BertModel"),ye=r(` with a tiny embeddings tweak as well as a setup
for Roberta pretrained models.`),v=p(),E=n("li"),ne=r(`RoBERTa has the same architecture as BERT, but uses a byte-level BPE as a tokenizer (same as GPT-2) and uses a
different pretraining scheme.`),Ee=p(),ue=n("li"),N=r("RoBERTa doesn\u2019t have "),Re=n("code"),ze=r("token_type_ids"),qe=r(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),L=n("code"),J=r("tokenizer.sep_token"),Ce=r(" (or "),Me=n("code"),V=r("</s>"),je=r(")"),Pe=p(),he=n("li"),xe=n("a"),ag=r("CamemBERT"),rg=r(" is a wrapper around RoBERTa. Refer to this page for usage examples."),Uu=p(),eo=n("p"),ig=r("This model was contributed by "),va=n("a"),lg=r("julien-c"),dg=r(". The original code can be found "),Ta=n("a"),cg=r("here"),pg=r("."),Hu=p(),go=n("h2"),bn=n("a"),hc=n("span"),T(ya.$$.fragment),hg=p(),uc=n("span"),ug=r("RobertaConfig"),Qu=p(),et=n("div"),T(wa.$$.fragment),mg=p(),Bt=n("p"),fg=r("This is the configuration class to store the configuration of a "),Jl=n("a"),gg=r("RobertaModel"),_g=r(" or a "),Vl=n("a"),bg=r("TFRobertaModel"),kg=r(`. It is
used to instantiate a RoBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),$a=n("a"),vg=r("roberta-base"),Tg=r(" architecture."),yg=p(),_o=n("p"),wg=r("Configuration objects inherit from "),Kl=n("a"),$g=r("PretrainedConfig"),Fg=r(` and can be used to control the model outputs. Read the
documentation from `),Gl=n("a"),xg=r("PretrainedConfig"),Rg=r(" for more information."),Mg=p(),bo=n("p"),Eg=r("The "),Xl=n("a"),zg=r("RobertaConfig"),qg=r(" class directly inherits "),Yl=n("a"),Cg=r("BertConfig"),jg=r(`. It reuses the same defaults. Please check the parent
class for more information.`),Pg=p(),T(kn.$$.fragment),Ju=p(),ko=n("h2"),vn=n("a"),mc=n("span"),T(Fa.$$.fragment),Lg=p(),fc=n("span"),Ag=r("RobertaTokenizer"),Vu=p(),we=n("div"),T(xa.$$.fragment),Og=p(),gc=n("p"),Ng=r("Constructs a RoBERTa tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),Ig=p(),_c=n("p"),Dg=r("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Sg=p(),T(Tn.$$.fragment),Wg=p(),Ra=n("p"),Bg=r("You can get around that behavior by passing "),bc=n("code"),Ug=r("add_prefix_space=True"),Hg=r(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Qg=p(),T(yn.$$.fragment),Jg=p(),Ma=n("p"),Vg=r("This tokenizer inherits from "),Zl=n("a"),Kg=r("PreTrainedTokenizer"),Gg=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Xg=p(),to=n("div"),T(Ea.$$.fragment),Yg=p(),kc=n("p"),Zg=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),e_=p(),za=n("ul"),ed=n("li"),t_=r("single sequence: "),vc=n("code"),o_=r("<s> X </s>"),n_=p(),td=n("li"),s_=r("pair of sequences: "),Tc=n("code"),a_=r("<s> A </s></s> B </s>"),r_=p(),wn=n("div"),T(qa.$$.fragment),i_=p(),Ca=n("p"),l_=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),yc=n("code"),d_=r("prepare_for_model"),c_=r(" method."),p_=p(),$n=n("div"),T(ja.$$.fragment),h_=p(),wc=n("p"),u_=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),m_=p(),od=n("div"),T(Pa.$$.fragment),Ku=p(),vo=n("h2"),Fn=n("a"),$c=n("span"),T(La.$$.fragment),f_=p(),Fc=n("span"),g_=r("RobertaTokenizerFast"),Gu=p(),Le=n("div"),T(Aa.$$.fragment),__=p(),Oa=n("p"),b_=r("Construct a \u201Cfast\u201D RoBERTa tokenizer (backed by HuggingFace\u2019s "),xc=n("em"),k_=r("tokenizers"),v_=r(` library), derived from the GPT-2
tokenizer, using byte-level Byte-Pair-Encoding.`),T_=p(),Rc=n("p"),y_=r("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),w_=p(),T(xn.$$.fragment),$_=p(),Na=n("p"),F_=r("You can get around that behavior by passing "),Mc=n("code"),x_=r("add_prefix_space=True"),R_=r(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),M_=p(),T(Rn.$$.fragment),E_=p(),Ia=n("p"),z_=r("This tokenizer inherits from "),nd=n("a"),q_=r("PreTrainedTokenizerFast"),C_=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),j_=p(),sd=n("div"),T(Da.$$.fragment),Xu=p(),To=n("h2"),Mn=n("a"),Ec=n("span"),T(Sa.$$.fragment),P_=p(),zc=n("span"),L_=r("RobertaModel"),Yu=p(),Ae=n("div"),T(Wa.$$.fragment),A_=p(),qc=n("p"),O_=r("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),N_=p(),Ba=n("p"),I_=r("This model inherits from "),ad=n("a"),D_=r("PreTrainedModel"),S_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),W_=p(),Ua=n("p"),B_=r("This model is also a PyTorch "),Ha=n("a"),U_=r("torch.nn.Module"),H_=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Q_=p(),Qa=n("p"),J_=r(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Cc=n("em"),V_=r(`Attention is
all you need`),K_=r(`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),G_=p(),He=n("p"),X_=r("To behave as an decoder the model needs to be initialized with the "),jc=n("code"),Y_=r("is_decoder"),Z_=r(` argument of the configuration set
to `),Pc=n("code"),eb=r("True"),tb=r(". To be used in a Seq2Seq model, the model needs to initialized with both "),Lc=n("code"),ob=r("is_decoder"),nb=r(` argument and
`),Ac=n("code"),sb=r("add_cross_attention"),ab=r(" set to "),Oc=n("code"),rb=r("True"),ib=r("; an "),Nc=n("code"),lb=r("encoder_hidden_states"),db=r(" is then expected as an input to the forward pass."),cb=p(),En=n("p"),pb=r(".. _"),Ic=n("em"),hb=r("Attention is all you need"),ub=r(": "),Ja=n("a"),mb=r("https://arxiv.org/abs/1706.03762"),fb=p(),$t=n("div"),T(Va.$$.fragment),gb=p(),yo=n("p"),_b=r("The "),rd=n("a"),bb=r("RobertaModel"),kb=r(" forward method, overrides the "),Dc=n("code"),vb=r("__call__"),Tb=r(" special method."),yb=p(),T(zn.$$.fragment),wb=p(),T(qn.$$.fragment),Zu=p(),wo=n("h2"),Cn=n("a"),Sc=n("span"),T(Ka.$$.fragment),$b=p(),Wc=n("span"),Fb=r("RobertaForCausalLM"),em=p(),tt=n("div"),T(Ga.$$.fragment),xb=p(),Xa=n("p"),Rb=r("RoBERTa Model with a "),Bc=n("code"),Mb=r("language modeling"),Eb=r(" head on top for CLM fine-tuning."),zb=p(),Ya=n("p"),qb=r("This model inherits from "),id=n("a"),Cb=r("PreTrainedModel"),jb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pb=p(),Za=n("p"),Lb=r("This model is also a PyTorch "),er=n("a"),Ab=r("torch.nn.Module"),Ob=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nb=p(),Ft=n("div"),T(tr.$$.fragment),Ib=p(),$o=n("p"),Db=r("The "),ld=n("a"),Sb=r("RobertaForCausalLM"),Wb=r(" forward method, overrides the "),Uc=n("code"),Bb=r("__call__"),Ub=r(" special method."),Hb=p(),T(jn.$$.fragment),Qb=p(),T(Pn.$$.fragment),tm=p(),Fo=n("h2"),Ln=n("a"),Hc=n("span"),T(or.$$.fragment),Jb=p(),Qc=n("span"),Vb=r("RobertaForMaskedLM"),om=p(),ot=n("div"),T(nr.$$.fragment),Kb=p(),sr=n("p"),Gb=r("RoBERTa Model with a "),Jc=n("code"),Xb=r("language modeling"),Yb=r(" head on top."),Zb=p(),ar=n("p"),ek=r("This model inherits from "),dd=n("a"),tk=r("PreTrainedModel"),ok=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nk=p(),rr=n("p"),sk=r("This model is also a PyTorch "),ir=n("a"),ak=r("torch.nn.Module"),rk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ik=p(),it=n("div"),T(lr.$$.fragment),lk=p(),xo=n("p"),dk=r("The "),cd=n("a"),ck=r("RobertaForMaskedLM"),pk=r(" forward method, overrides the "),Vc=n("code"),hk=r("__call__"),uk=r(" special method."),mk=p(),T(An.$$.fragment),fk=p(),T(On.$$.fragment),gk=p(),T(Nn.$$.fragment),nm=p(),Ro=n("h2"),In=n("a"),Kc=n("span"),T(dr.$$.fragment),_k=p(),Gc=n("span"),bk=r("RobertaForSequenceClassification"),sm=p(),nt=n("div"),T(cr.$$.fragment),kk=p(),Xc=n("p"),vk=r(`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Tk=p(),pr=n("p"),yk=r("This model inherits from "),pd=n("a"),wk=r("PreTrainedModel"),$k=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fk=p(),hr=n("p"),xk=r("This model is also a PyTorch "),ur=n("a"),Rk=r("torch.nn.Module"),Mk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ek=p(),Ue=n("div"),T(mr.$$.fragment),zk=p(),Mo=n("p"),qk=r("The "),hd=n("a"),Ck=r("RobertaForSequenceClassification"),jk=r(" forward method, overrides the "),Yc=n("code"),Pk=r("__call__"),Lk=r(" special method."),Ak=p(),T(Dn.$$.fragment),Ok=p(),T(Sn.$$.fragment),Nk=p(),T(Wn.$$.fragment),Ik=p(),T(Bn.$$.fragment),Dk=p(),T(Un.$$.fragment),am=p(),Eo=n("h2"),Hn=n("a"),Zc=n("span"),T(fr.$$.fragment),Sk=p(),ep=n("span"),Wk=r("RobertaForMultipleChoice"),rm=p(),st=n("div"),T(gr.$$.fragment),Bk=p(),tp=n("p"),Uk=r(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Hk=p(),_r=n("p"),Qk=r("This model inherits from "),ud=n("a"),Jk=r("PreTrainedModel"),Vk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kk=p(),br=n("p"),Gk=r("This model is also a PyTorch "),kr=n("a"),Xk=r("torch.nn.Module"),Yk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zk=p(),xt=n("div"),T(vr.$$.fragment),e1=p(),zo=n("p"),t1=r("The "),md=n("a"),o1=r("RobertaForMultipleChoice"),n1=r(" forward method, overrides the "),op=n("code"),s1=r("__call__"),a1=r(" special method."),r1=p(),T(Qn.$$.fragment),i1=p(),T(Jn.$$.fragment),im=p(),qo=n("h2"),Vn=n("a"),np=n("span"),T(Tr.$$.fragment),l1=p(),sp=n("span"),d1=r("RobertaForTokenClassification"),lm=p(),at=n("div"),T(yr.$$.fragment),c1=p(),ap=n("p"),p1=r(`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),h1=p(),wr=n("p"),u1=r("This model inherits from "),fd=n("a"),m1=r("PreTrainedModel"),f1=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),g1=p(),$r=n("p"),_1=r("This model is also a PyTorch "),Fr=n("a"),b1=r("torch.nn.Module"),k1=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),v1=p(),lt=n("div"),T(xr.$$.fragment),T1=p(),Co=n("p"),y1=r("The "),gd=n("a"),w1=r("RobertaForTokenClassification"),$1=r(" forward method, overrides the "),rp=n("code"),F1=r("__call__"),x1=r(" special method."),R1=p(),T(Kn.$$.fragment),M1=p(),T(Gn.$$.fragment),E1=p(),T(Xn.$$.fragment),dm=p(),jo=n("h2"),Yn=n("a"),ip=n("span"),T(Rr.$$.fragment),z1=p(),lp=n("span"),q1=r("RobertaForQuestionAnswering"),cm=p(),rt=n("div"),T(Mr.$$.fragment),C1=p(),Po=n("p"),j1=r(`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),dp=n("code"),P1=r("span start logits"),L1=r(" and "),cp=n("code"),A1=r("span end logits"),O1=r(")."),N1=p(),Er=n("p"),I1=r("This model inherits from "),_d=n("a"),D1=r("PreTrainedModel"),S1=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),W1=p(),zr=n("p"),B1=r("This model is also a PyTorch "),qr=n("a"),U1=r("torch.nn.Module"),H1=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Q1=p(),dt=n("div"),T(Cr.$$.fragment),J1=p(),Lo=n("p"),V1=r("The "),bd=n("a"),K1=r("RobertaForQuestionAnswering"),G1=r(" forward method, overrides the "),pp=n("code"),X1=r("__call__"),Y1=r(" special method."),Z1=p(),T(Zn.$$.fragment),ev=p(),T(es.$$.fragment),tv=p(),T(ts.$$.fragment),pm=p(),Ao=n("h2"),os=n("a"),hp=n("span"),T(jr.$$.fragment),ov=p(),up=n("span"),nv=r("TFRobertaModel"),hm=p(),Qe=n("div"),T(Pr.$$.fragment),sv=p(),mp=n("p"),av=r("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),rv=p(),Lr=n("p"),iv=r("This model inherits from "),kd=n("a"),lv=r("TFPreTrainedModel"),dv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cv=p(),Ar=n("p"),pv=r("This model is also a "),Or=n("a"),hv=r("tf.keras.Model"),uv=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mv=p(),T(ns.$$.fragment),fv=p(),Rt=n("div"),T(Nr.$$.fragment),gv=p(),Oo=n("p"),_v=r("The "),vd=n("a"),bv=r("TFRobertaModel"),kv=r(" forward method, overrides the "),fp=n("code"),vv=r("__call__"),Tv=r(" special method."),yv=p(),T(ss.$$.fragment),wv=p(),T(as.$$.fragment),um=p(),No=n("h2"),rs=n("a"),gp=n("span"),T(Ir.$$.fragment),$v=p(),_p=n("span"),Fv=r("TFRobertaForCausalLM"),mm=p(),Io=n("div"),T(Dr.$$.fragment),xv=p(),Mt=n("div"),T(Sr.$$.fragment),Rv=p(),Do=n("p"),Mv=r("The "),Td=n("a"),Ev=r("TFRobertaForCausalLM"),zv=r(" forward method, overrides the "),bp=n("code"),qv=r("__call__"),Cv=r(" special method."),jv=p(),T(is.$$.fragment),Pv=p(),T(ls.$$.fragment),fm=p(),So=n("h2"),ds=n("a"),kp=n("span"),T(Wr.$$.fragment),Lv=p(),vp=n("span"),Av=r("TFRobertaForMaskedLM"),gm=p(),Je=n("div"),T(Br.$$.fragment),Ov=p(),Ur=n("p"),Nv=r("RoBERTa Model with a "),Tp=n("code"),Iv=r("language modeling"),Dv=r(" head on top."),Sv=p(),Hr=n("p"),Wv=r("This model inherits from "),yd=n("a"),Bv=r("TFPreTrainedModel"),Uv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hv=p(),Qr=n("p"),Qv=r("This model is also a "),Jr=n("a"),Jv=r("tf.keras.Model"),Vv=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kv=p(),T(cs.$$.fragment),Gv=p(),ct=n("div"),T(Vr.$$.fragment),Xv=p(),Wo=n("p"),Yv=r("The "),wd=n("a"),Zv=r("TFRobertaForMaskedLM"),eT=r(" forward method, overrides the "),yp=n("code"),tT=r("__call__"),oT=r(" special method."),nT=p(),T(ps.$$.fragment),sT=p(),T(hs.$$.fragment),aT=p(),T(us.$$.fragment),_m=p(),Bo=n("h2"),ms=n("a"),wp=n("span"),T(Kr.$$.fragment),rT=p(),$p=n("span"),iT=r("TFRobertaForSequenceClassification"),bm=p(),Ve=n("div"),T(Gr.$$.fragment),lT=p(),Fp=n("p"),dT=r(`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),cT=p(),Xr=n("p"),pT=r("This model inherits from "),$d=n("a"),hT=r("TFPreTrainedModel"),uT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mT=p(),Yr=n("p"),fT=r("This model is also a "),Zr=n("a"),gT=r("tf.keras.Model"),_T=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bT=p(),T(fs.$$.fragment),kT=p(),pt=n("div"),T(ei.$$.fragment),vT=p(),Uo=n("p"),TT=r("The "),Fd=n("a"),yT=r("TFRobertaForSequenceClassification"),wT=r(" forward method, overrides the "),xp=n("code"),$T=r("__call__"),FT=r(" special method."),xT=p(),T(gs.$$.fragment),RT=p(),T(_s.$$.fragment),MT=p(),T(bs.$$.fragment),km=p(),Ho=n("h2"),ks=n("a"),Rp=n("span"),T(ti.$$.fragment),ET=p(),Mp=n("span"),zT=r("TFRobertaForMultipleChoice"),vm=p(),Ke=n("div"),T(oi.$$.fragment),qT=p(),Ep=n("p"),CT=r(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),jT=p(),ni=n("p"),PT=r("This model inherits from "),xd=n("a"),LT=r("TFPreTrainedModel"),AT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),OT=p(),si=n("p"),NT=r("This model is also a "),ai=n("a"),IT=r("tf.keras.Model"),DT=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ST=p(),T(vs.$$.fragment),WT=p(),Et=n("div"),T(ri.$$.fragment),BT=p(),Qo=n("p"),UT=r("The "),Rd=n("a"),HT=r("TFRobertaForMultipleChoice"),QT=r(" forward method, overrides the "),zp=n("code"),JT=r("__call__"),VT=r(" special method."),KT=p(),T(Ts.$$.fragment),GT=p(),T(ys.$$.fragment),Tm=p(),Jo=n("h2"),ws=n("a"),qp=n("span"),T(ii.$$.fragment),XT=p(),Cp=n("span"),YT=r("TFRobertaForTokenClassification"),ym=p(),Ge=n("div"),T(li.$$.fragment),ZT=p(),jp=n("p"),ey=r(`RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ty=p(),di=n("p"),oy=r("This model inherits from "),Md=n("a"),ny=r("TFPreTrainedModel"),sy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ay=p(),ci=n("p"),ry=r("This model is also a "),pi=n("a"),iy=r("tf.keras.Model"),ly=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dy=p(),T($s.$$.fragment),cy=p(),ht=n("div"),T(hi.$$.fragment),py=p(),Vo=n("p"),hy=r("The "),Ed=n("a"),uy=r("TFRobertaForTokenClassification"),my=r(" forward method, overrides the "),Pp=n("code"),fy=r("__call__"),gy=r(" special method."),_y=p(),T(Fs.$$.fragment),by=p(),T(xs.$$.fragment),ky=p(),T(Rs.$$.fragment),wm=p(),Ko=n("h2"),Ms=n("a"),Lp=n("span"),T(ui.$$.fragment),vy=p(),Ap=n("span"),Ty=r("TFRobertaForQuestionAnswering"),$m=p(),Xe=n("div"),T(mi.$$.fragment),yy=p(),Go=n("p"),wy=r(`RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Op=n("code"),$y=r("span start logits"),Fy=r(" and "),Np=n("code"),xy=r("span end logits"),Ry=r(")."),My=p(),fi=n("p"),Ey=r("This model inherits from "),zd=n("a"),zy=r("TFPreTrainedModel"),qy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cy=p(),gi=n("p"),jy=r("This model is also a "),_i=n("a"),Py=r("tf.keras.Model"),Ly=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ay=p(),T(Es.$$.fragment),Oy=p(),ut=n("div"),T(bi.$$.fragment),Ny=p(),Xo=n("p"),Iy=r("The "),qd=n("a"),Dy=r("TFRobertaForQuestionAnswering"),Sy=r(" forward method, overrides the "),Ip=n("code"),Wy=r("__call__"),By=r(" special method."),Uy=p(),T(zs.$$.fragment),Hy=p(),T(qs.$$.fragment),Qy=p(),T(Cs.$$.fragment),Fm=p(),Yo=n("h2"),js=n("a"),Dp=n("span"),T(ki.$$.fragment),Jy=p(),Sp=n("span"),Vy=r("FlaxRobertaModel"),xm=p(),Oe=n("div"),T(vi.$$.fragment),Ky=p(),Wp=n("p"),Gy=r("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),Xy=p(),Ti=n("p"),Yy=r("This model inherits from "),Cd=n("a"),Zy=r("FlaxPreTrainedModel"),ew=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),tw=p(),yi=n("p"),ow=r("This model is also a Flax Linen "),wi=n("a"),nw=r("flax.linen.Module"),sw=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),aw=p(),Bp=n("p"),rw=r("Finally, this model supports inherent JAX features such as:"),iw=p(),Ut=n("ul"),Up=n("li"),$i=n("a"),lw=r("Just-In-Time (JIT) compilation"),dw=p(),Hp=n("li"),Fi=n("a"),cw=r("Automatic Differentiation"),pw=p(),Qp=n("li"),xi=n("a"),hw=r("Vectorization"),uw=p(),Jp=n("li"),Ri=n("a"),mw=r("Parallelization"),fw=p(),zt=n("div"),T(Mi.$$.fragment),gw=p(),Zo=n("p"),_w=r("The "),Vp=n("code"),bw=r("FlaxRobertaPreTrainedModel"),kw=r(" forward method, overrides the "),Kp=n("code"),vw=r("__call__"),Tw=r(" special method."),yw=p(),T(Ps.$$.fragment),ww=p(),T(Ls.$$.fragment),Rm=p(),en=n("h2"),As=n("a"),Gp=n("span"),T(Ei.$$.fragment),$w=p(),Xp=n("span"),Fw=r("FlaxRobertaForCausalLM"),Mm=p(),Ne=n("div"),T(zi.$$.fragment),xw=p(),Yp=n("p"),Rw=r(`Roberta Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),Mw=p(),qi=n("p"),Ew=r("This model inherits from "),jd=n("a"),zw=r("FlaxPreTrainedModel"),qw=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Cw=p(),Ci=n("p"),jw=r("This model is also a Flax Linen "),ji=n("a"),Pw=r("flax.linen.Module"),Lw=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Aw=p(),Zp=n("p"),Ow=r("Finally, this model supports inherent JAX features such as:"),Nw=p(),Ht=n("ul"),eh=n("li"),Pi=n("a"),Iw=r("Just-In-Time (JIT) compilation"),Dw=p(),th=n("li"),Li=n("a"),Sw=r("Automatic Differentiation"),Ww=p(),oh=n("li"),Ai=n("a"),Bw=r("Vectorization"),Uw=p(),nh=n("li"),Oi=n("a"),Hw=r("Parallelization"),Qw=p(),qt=n("div"),T(Ni.$$.fragment),Jw=p(),tn=n("p"),Vw=r("The "),sh=n("code"),Kw=r("FlaxRobertaPreTrainedModel"),Gw=r(" forward method, overrides the "),ah=n("code"),Xw=r("__call__"),Yw=r(" special method."),Zw=p(),T(Os.$$.fragment),e$=p(),T(Ns.$$.fragment),Em=p(),on=n("h2"),Is=n("a"),rh=n("span"),T(Ii.$$.fragment),t$=p(),ih=n("span"),o$=r("FlaxRobertaForMaskedLM"),zm=p(),Ie=n("div"),T(Di.$$.fragment),n$=p(),Si=n("p"),s$=r("RoBERTa Model with a "),lh=n("code"),a$=r("language modeling"),r$=r(" head on top."),i$=p(),Wi=n("p"),l$=r("This model inherits from "),Pd=n("a"),d$=r("FlaxPreTrainedModel"),c$=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),p$=p(),Bi=n("p"),h$=r("This model is also a Flax Linen "),Ui=n("a"),u$=r("flax.linen.Module"),m$=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),f$=p(),dh=n("p"),g$=r("Finally, this model supports inherent JAX features such as:"),_$=p(),Qt=n("ul"),ch=n("li"),Hi=n("a"),b$=r("Just-In-Time (JIT) compilation"),k$=p(),ph=n("li"),Qi=n("a"),v$=r("Automatic Differentiation"),T$=p(),hh=n("li"),Ji=n("a"),y$=r("Vectorization"),w$=p(),uh=n("li"),Vi=n("a"),$$=r("Parallelization"),F$=p(),Ct=n("div"),T(Ki.$$.fragment),x$=p(),nn=n("p"),R$=r("The "),mh=n("code"),M$=r("FlaxRobertaPreTrainedModel"),E$=r(" forward method, overrides the "),fh=n("code"),z$=r("__call__"),q$=r(" special method."),C$=p(),T(Ds.$$.fragment),j$=p(),T(Ss.$$.fragment),qm=p(),sn=n("h2"),Ws=n("a"),gh=n("span"),T(Gi.$$.fragment),P$=p(),_h=n("span"),L$=r("FlaxRobertaForSequenceClassification"),Cm=p(),De=n("div"),T(Xi.$$.fragment),A$=p(),bh=n("p"),O$=r(`Roberta Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),N$=p(),Yi=n("p"),I$=r("This model inherits from "),Ld=n("a"),D$=r("FlaxPreTrainedModel"),S$=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),W$=p(),Zi=n("p"),B$=r("This model is also a Flax Linen "),el=n("a"),U$=r("flax.linen.Module"),H$=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Q$=p(),kh=n("p"),J$=r("Finally, this model supports inherent JAX features such as:"),V$=p(),Jt=n("ul"),vh=n("li"),tl=n("a"),K$=r("Just-In-Time (JIT) compilation"),G$=p(),Th=n("li"),ol=n("a"),X$=r("Automatic Differentiation"),Y$=p(),yh=n("li"),nl=n("a"),Z$=r("Vectorization"),e0=p(),wh=n("li"),sl=n("a"),t0=r("Parallelization"),o0=p(),jt=n("div"),T(al.$$.fragment),n0=p(),an=n("p"),s0=r("The "),$h=n("code"),a0=r("FlaxRobertaPreTrainedModel"),r0=r(" forward method, overrides the "),Fh=n("code"),i0=r("__call__"),l0=r(" special method."),d0=p(),T(Bs.$$.fragment),c0=p(),T(Us.$$.fragment),jm=p(),rn=n("h2"),Hs=n("a"),xh=n("span"),T(rl.$$.fragment),p0=p(),Rh=n("span"),h0=r("FlaxRobertaForMultipleChoice"),Pm=p(),Se=n("div"),T(il.$$.fragment),u0=p(),Mh=n("p"),m0=r(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),f0=p(),ll=n("p"),g0=r("This model inherits from "),Ad=n("a"),_0=r("FlaxPreTrainedModel"),b0=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),k0=p(),dl=n("p"),v0=r("This model is also a Flax Linen "),cl=n("a"),T0=r("flax.linen.Module"),y0=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),w0=p(),Eh=n("p"),$0=r("Finally, this model supports inherent JAX features such as:"),F0=p(),Vt=n("ul"),zh=n("li"),pl=n("a"),x0=r("Just-In-Time (JIT) compilation"),R0=p(),qh=n("li"),hl=n("a"),M0=r("Automatic Differentiation"),E0=p(),Ch=n("li"),ul=n("a"),z0=r("Vectorization"),q0=p(),jh=n("li"),ml=n("a"),C0=r("Parallelization"),j0=p(),Pt=n("div"),T(fl.$$.fragment),P0=p(),ln=n("p"),L0=r("The "),Ph=n("code"),A0=r("FlaxRobertaPreTrainedModel"),O0=r(" forward method, overrides the "),Lh=n("code"),N0=r("__call__"),I0=r(" special method."),D0=p(),T(Qs.$$.fragment),S0=p(),T(Js.$$.fragment),Lm=p(),dn=n("h2"),Vs=n("a"),Ah=n("span"),T(gl.$$.fragment),W0=p(),Oh=n("span"),B0=r("FlaxRobertaForTokenClassification"),Am=p(),We=n("div"),T(_l.$$.fragment),U0=p(),Nh=n("p"),H0=r(`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Q0=p(),bl=n("p"),J0=r("This model inherits from "),Od=n("a"),V0=r("FlaxPreTrainedModel"),K0=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),G0=p(),kl=n("p"),X0=r("This model is also a Flax Linen "),vl=n("a"),Y0=r("flax.linen.Module"),Z0=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),e2=p(),Ih=n("p"),t2=r("Finally, this model supports inherent JAX features such as:"),o2=p(),Kt=n("ul"),Dh=n("li"),Tl=n("a"),n2=r("Just-In-Time (JIT) compilation"),s2=p(),Sh=n("li"),yl=n("a"),a2=r("Automatic Differentiation"),r2=p(),Wh=n("li"),wl=n("a"),i2=r("Vectorization"),l2=p(),Bh=n("li"),$l=n("a"),d2=r("Parallelization"),c2=p(),Lt=n("div"),T(Fl.$$.fragment),p2=p(),cn=n("p"),h2=r("The "),Uh=n("code"),u2=r("FlaxRobertaPreTrainedModel"),m2=r(" forward method, overrides the "),Hh=n("code"),f2=r("__call__"),g2=r(" special method."),_2=p(),T(Ks.$$.fragment),b2=p(),T(Gs.$$.fragment),Om=p(),pn=n("h2"),Xs=n("a"),Qh=n("span"),T(xl.$$.fragment),k2=p(),Jh=n("span"),v2=r("FlaxRobertaForQuestionAnswering"),Nm=p(),Be=n("div"),T(Rl.$$.fragment),T2=p(),hn=n("p"),y2=r(`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Vh=n("code"),w2=r("span start logits"),$2=r(" and "),Kh=n("code"),F2=r("span end logits"),x2=r(")."),R2=p(),Ml=n("p"),M2=r("This model inherits from "),Nd=n("a"),E2=r("FlaxPreTrainedModel"),z2=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),q2=p(),El=n("p"),C2=r("This model is also a Flax Linen "),zl=n("a"),j2=r("flax.linen.Module"),P2=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),L2=p(),Gh=n("p"),A2=r("Finally, this model supports inherent JAX features such as:"),O2=p(),Gt=n("ul"),Xh=n("li"),ql=n("a"),N2=r("Just-In-Time (JIT) compilation"),I2=p(),Yh=n("li"),Cl=n("a"),D2=r("Automatic Differentiation"),S2=p(),Zh=n("li"),jl=n("a"),W2=r("Vectorization"),B2=p(),eu=n("li"),Pl=n("a"),U2=r("Parallelization"),H2=p(),At=n("div"),T(Ll.$$.fragment),Q2=p(),un=n("p"),J2=r("The "),tu=n("code"),V2=r("FlaxRobertaPreTrainedModel"),K2=r(" forward method, overrides the "),ou=n("code"),G2=r("__call__"),X2=r(" special method."),Y2=p(),T(Ys.$$.fragment),Z2=p(),T(Zs.$$.fragment),this.h()},l(o){const b=N8('[data-svelte="svelte-1phssyn"]',document.head);d=s(b,"META",{name:!0,content:!0}),b.forEach(t),g=h(o),c=s(o,"H1",{class:!0});var Al=a(c);u=s(Al,"A",{id:!0,class:!0,href:!0});var nu=a(u);_=s(nu,"SPAN",{});var su=a(_);y(l.$$.fragment,su),su.forEach(t),nu.forEach(t),m=h(Al),M=s(Al,"SPAN",{});var au=a(M);te=i(au,"RoBERTa"),au.forEach(t),Al.forEach(t),I=h(o),z=s(o,"H2",{class:!0});var Ol=a(z);X=s(Ol,"A",{id:!0,class:!0,href:!0});var ru=a(X);D=s(ru,"SPAN",{});var iu=a(D);y(se.$$.fragment,iu),iu.forEach(t),ru.forEach(t),be=h(Ol),S=s(Ol,"SPAN",{});var lu=a(S);ke=i(lu,"Overview"),lu.forEach(t),Ol.forEach(t),fe=h(o),K=s(o,"P",{});var Nl=a(K);A=i(Nl,"The RoBERTa model was proposed in "),ae=s(Nl,"A",{href:!0,rel:!0});var du=a(ae);oe=i(du,"RoBERTa: A Robustly Optimized BERT Pretraining Approach"),du.forEach(t),q=i(Nl,` by Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer
Levy, Mike Lewis, Luke Zettlemoyer, Veselin Stoyanov. It is based on Google\u2019s BERT model released in 2018.`),Nl.forEach(t),j=h(o),ie=s(o,"P",{});var cu=a(ie);U=i(cu,`It builds on BERT and modifies key hyperparameters, removing the next-sentence pretraining objective and training with
much larger mini-batches and learning rates.`),cu.forEach(t),ge=h(o),le=s(o,"P",{});var pu=a(le);H=i(pu,"The abstract from the paper is the following:"),pu.forEach(t),_e=h(o),de=s(o,"P",{});var hu=a(de);C=s(hu,"EM",{});var uu=a(C);ve=i(uu,`Language model pretraining has led to significant performance gains but careful comparison between different
approaches is challenging. Training is computationally expensive, often done on private datasets of different sizes,
and, as we will show, hyperparameter choices have significant impact on the final results. We present a replication
study of BERT pretraining (Devlin et al., 2019) that carefully measures the impact of many key hyperparameters and
training data size. We find that BERT was significantly undertrained, and can match or exceed the performance of every
model published after it. Our best model achieves state-of-the-art results on GLUE, RACE and SQuAD. These results
highlight the importance of previously overlooked design choices, and raise questions about the source of recently
reported improvements. We release our models and code.`),uu.forEach(t),hu.forEach(t),W=h(o),ce=s(o,"P",{});var mu=a(ce);Te=i(mu,"Tips:"),mu.forEach(t),B=h(o),G=s(o,"UL",{});var Xt=a(G);re=s(Xt,"LI",{});var Il=a(re);O=i(Il,"This implementation is the same as "),pe=s(Il,"A",{href:!0});var fu=a(pe);Q=i(fu,"BertModel"),fu.forEach(t),ye=i(Il,` with a tiny embeddings tweak as well as a setup
for Roberta pretrained models.`),Il.forEach(t),v=h(Xt),E=s(Xt,"LI",{});var gu=a(E);ne=i(gu,`RoBERTa has the same architecture as BERT, but uses a byte-level BPE as a tokenizer (same as GPT-2) and uses a
different pretraining scheme.`),gu.forEach(t),Ee=h(Xt),ue=s(Xt,"LI",{});var Yt=a(ue);N=i(Yt,"RoBERTa doesn\u2019t have "),Re=s(Yt,"CODE",{});var _u=a(Re);ze=i(_u,"token_type_ids"),_u.forEach(t),qe=i(Yt,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),L=s(Yt,"CODE",{});var bu=a(L);J=i(bu,"tokenizer.sep_token"),bu.forEach(t),Ce=i(Yt," (or "),Me=s(Yt,"CODE",{});var ku=a(Me);V=i(ku,"</s>"),ku.forEach(t),je=i(Yt,")"),Yt.forEach(t),Pe=h(Xt),he=s(Xt,"LI",{});var Id=a(he);xe=s(Id,"A",{href:!0});var vu=a(xe);ag=i(vu,"CamemBERT"),vu.forEach(t),rg=i(Id," is a wrapper around RoBERTa. Refer to this page for usage examples."),Id.forEach(t),Xt.forEach(t),Uu=h(o),eo=s(o,"P",{});var mn=a(eo);ig=i(mn,"This model was contributed by "),va=s(mn,"A",{href:!0,rel:!0});var Tu=a(va);lg=i(Tu,"julien-c"),Tu.forEach(t),dg=i(mn,". The original code can be found "),Ta=s(mn,"A",{href:!0,rel:!0});var yu=a(Ta);cg=i(yu,"here"),yu.forEach(t),pg=i(mn,"."),mn.forEach(t),Hu=h(o),go=s(o,"H2",{class:!0});var Dl=a(go);bn=s(Dl,"A",{id:!0,class:!0,href:!0});var wu=a(bn);hc=s(wu,"SPAN",{});var $u=a(hc);y(ya.$$.fragment,$u),$u.forEach(t),wu.forEach(t),hg=h(Dl),uc=s(Dl,"SPAN",{});var Fu=a(uc);ug=i(Fu,"RobertaConfig"),Fu.forEach(t),Dl.forEach(t),Qu=h(o),et=s(o,"DIV",{class:!0});var wt=a(et);y(wa.$$.fragment,wt),mg=h(wt),Bt=s(wt,"P",{});var Zt=a(Bt);fg=i(Zt,"This is the configuration class to store the configuration of a "),Jl=s(Zt,"A",{href:!0});var xu=a(Jl);gg=i(xu,"RobertaModel"),xu.forEach(t),_g=i(Zt," or a "),Vl=s(Zt,"A",{href:!0});var Ru=a(Vl);bg=i(Ru,"TFRobertaModel"),Ru.forEach(t),kg=i(Zt,`. It is
used to instantiate a RoBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),$a=s(Zt,"A",{href:!0,rel:!0});var Mu=a($a);vg=i(Mu,"roberta-base"),Mu.forEach(t),Tg=i(Zt," architecture."),Zt.forEach(t),yg=h(wt),_o=s(wt,"P",{});var fn=a(_o);wg=i(fn,"Configuration objects inherit from "),Kl=s(fn,"A",{href:!0});var Eu=a(Kl);$g=i(Eu,"PretrainedConfig"),Eu.forEach(t),Fg=i(fn,` and can be used to control the model outputs. Read the
documentation from `),Gl=s(fn,"A",{href:!0});var zu=a(Gl);xg=i(zu,"PretrainedConfig"),zu.forEach(t),Rg=i(fn," for more information."),fn.forEach(t),Mg=h(wt),bo=s(wt,"P",{});var gn=a(bo);Eg=i(gn,"The "),Xl=s(gn,"A",{href:!0});var qu=a(Xl);zg=i(qu,"RobertaConfig"),qu.forEach(t),qg=i(gn," class directly inherits "),Yl=s(gn,"A",{href:!0});var Cu=a(Yl);Cg=i(Cu,"BertConfig"),Cu.forEach(t),jg=i(gn,`. It reuses the same defaults. Please check the parent
class for more information.`),gn.forEach(t),Pg=h(wt),y(kn.$$.fragment,wt),wt.forEach(t),Ju=h(o),ko=s(o,"H2",{class:!0});var Sl=a(ko);vn=s(Sl,"A",{id:!0,class:!0,href:!0});var ju=a(vn);mc=s(ju,"SPAN",{});var Pu=a(mc);y(Fa.$$.fragment,Pu),Pu.forEach(t),ju.forEach(t),Lg=h(Sl),fc=s(Sl,"SPAN",{});var Lu=a(fc);Ag=i(Lu,"RobertaTokenizer"),Lu.forEach(t),Sl.forEach(t),Vu=h(o),we=s(o,"DIV",{class:!0});var Fe=a(we);y(xa.$$.fragment,Fe),Og=h(Fe),gc=s(Fe,"P",{});var Au=a(gc);Ng=i(Au,"Constructs a RoBERTa tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),Au.forEach(t),Ig=h(Fe),_c=s(Fe,"P",{});var Ou=a(_c);Dg=i(Ou,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Ou.forEach(t),Sg=h(Fe),y(Tn.$$.fragment,Fe),Wg=h(Fe),Ra=s(Fe,"P",{});var Wl=a(Ra);Bg=i(Wl,"You can get around that behavior by passing "),bc=s(Wl,"CODE",{});var Nu=a(bc);Ug=i(Nu,"add_prefix_space=True"),Nu.forEach(t),Hg=i(Wl,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Wl.forEach(t),Qg=h(Fe),y(yn.$$.fragment,Fe),Jg=h(Fe),Ma=s(Fe,"P",{});var Bl=a(Ma);Vg=i(Bl,"This tokenizer inherits from "),Zl=s(Bl,"A",{href:!0});var Iu=a(Zl);Kg=i(Iu,"PreTrainedTokenizer"),Iu.forEach(t),Gg=i(Bl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Bl.forEach(t),Xg=h(Fe),to=s(Fe,"DIV",{class:!0});var _n=a(to);y(Ea.$$.fragment,_n),Yg=h(_n),kc=s(_n,"P",{});var Du=a(kc);Zg=i(Du,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),Du.forEach(t),e_=h(_n),za=s(_n,"UL",{});var Ul=a(za);ed=s(Ul,"LI",{});var Dd=a(ed);t_=i(Dd,"single sequence: "),vc=s(Dd,"CODE",{});var Su=a(vc);o_=i(Su,"<s> X </s>"),Su.forEach(t),Dd.forEach(t),n_=h(Ul),td=s(Ul,"LI",{});var Sd=a(td);s_=i(Sd,"pair of sequences: "),Tc=s(Sd,"CODE",{});var Wu=a(Tc);a_=i(Wu,"<s> A </s></s> B </s>"),Wu.forEach(t),Sd.forEach(t),Ul.forEach(t),_n.forEach(t),r_=h(Fe),wn=s(Fe,"DIV",{class:!0});var Hl=a(wn);y(qa.$$.fragment,Hl),i_=h(Hl),Ca=s(Hl,"P",{});var Ql=a(Ca);l_=i(Ql,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),yc=s(Ql,"CODE",{});var eF=a(yc);d_=i(eF,"prepare_for_model"),eF.forEach(t),c_=i(Ql," method."),Ql.forEach(t),Hl.forEach(t),p_=h(Fe),$n=s(Fe,"DIV",{class:!0});var Dm=a($n);y(ja.$$.fragment,Dm),h_=h(Dm),wc=s(Dm,"P",{});var tF=a(wc);u_=i(tF,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),tF.forEach(t),Dm.forEach(t),m_=h(Fe),od=s(Fe,"DIV",{class:!0});var oF=a(od);y(Pa.$$.fragment,oF),oF.forEach(t),Fe.forEach(t),Ku=h(o),vo=s(o,"H2",{class:!0});var Sm=a(vo);Fn=s(Sm,"A",{id:!0,class:!0,href:!0});var nF=a(Fn);$c=s(nF,"SPAN",{});var sF=a($c);y(La.$$.fragment,sF),sF.forEach(t),nF.forEach(t),f_=h(Sm),Fc=s(Sm,"SPAN",{});var aF=a(Fc);g_=i(aF,"RobertaTokenizerFast"),aF.forEach(t),Sm.forEach(t),Gu=h(o),Le=s(o,"DIV",{class:!0});var Ye=a(Le);y(Aa.$$.fragment,Ye),__=h(Ye),Oa=s(Ye,"P",{});var Wm=a(Oa);b_=i(Wm,"Construct a \u201Cfast\u201D RoBERTa tokenizer (backed by HuggingFace\u2019s "),xc=s(Wm,"EM",{});var rF=a(xc);k_=i(rF,"tokenizers"),rF.forEach(t),v_=i(Wm,` library), derived from the GPT-2
tokenizer, using byte-level Byte-Pair-Encoding.`),Wm.forEach(t),T_=h(Ye),Rc=s(Ye,"P",{});var iF=a(Rc);y_=i(iF,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),iF.forEach(t),w_=h(Ye),y(xn.$$.fragment,Ye),$_=h(Ye),Na=s(Ye,"P",{});var Bm=a(Na);F_=i(Bm,"You can get around that behavior by passing "),Mc=s(Bm,"CODE",{});var lF=a(Mc);x_=i(lF,"add_prefix_space=True"),lF.forEach(t),R_=i(Bm,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Bm.forEach(t),M_=h(Ye),y(Rn.$$.fragment,Ye),E_=h(Ye),Ia=s(Ye,"P",{});var Um=a(Ia);z_=i(Um,"This tokenizer inherits from "),nd=s(Um,"A",{href:!0});var dF=a(nd);q_=i(dF,"PreTrainedTokenizerFast"),dF.forEach(t),C_=i(Um,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Um.forEach(t),j_=h(Ye),sd=s(Ye,"DIV",{class:!0});var cF=a(sd);y(Da.$$.fragment,cF),cF.forEach(t),Ye.forEach(t),Xu=h(o),To=s(o,"H2",{class:!0});var Hm=a(To);Mn=s(Hm,"A",{id:!0,class:!0,href:!0});var pF=a(Mn);Ec=s(pF,"SPAN",{});var hF=a(Ec);y(Sa.$$.fragment,hF),hF.forEach(t),pF.forEach(t),P_=h(Hm),zc=s(Hm,"SPAN",{});var uF=a(zc);L_=i(uF,"RobertaModel"),uF.forEach(t),Hm.forEach(t),Yu=h(o),Ae=s(o,"DIV",{class:!0});var Ze=a(Ae);y(Wa.$$.fragment,Ze),A_=h(Ze),qc=s(Ze,"P",{});var mF=a(qc);O_=i(mF,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),mF.forEach(t),N_=h(Ze),Ba=s(Ze,"P",{});var Qm=a(Ba);I_=i(Qm,"This model inherits from "),ad=s(Qm,"A",{href:!0});var fF=a(ad);D_=i(fF,"PreTrainedModel"),fF.forEach(t),S_=i(Qm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qm.forEach(t),W_=h(Ze),Ua=s(Ze,"P",{});var Jm=a(Ua);B_=i(Jm,"This model is also a PyTorch "),Ha=s(Jm,"A",{href:!0,rel:!0});var gF=a(Ha);U_=i(gF,"torch.nn.Module"),gF.forEach(t),H_=i(Jm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jm.forEach(t),Q_=h(Ze),Qa=s(Ze,"P",{});var Vm=a(Qa);J_=i(Vm,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Cc=s(Vm,"EM",{});var _F=a(Cc);V_=i(_F,`Attention is
all you need`),_F.forEach(t),K_=i(Vm,`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),Vm.forEach(t),G_=h(Ze),He=s(Ze,"P",{});var mt=a(He);X_=i(mt,"To behave as an decoder the model needs to be initialized with the "),jc=s(mt,"CODE",{});var bF=a(jc);Y_=i(bF,"is_decoder"),bF.forEach(t),Z_=i(mt,` argument of the configuration set
to `),Pc=s(mt,"CODE",{});var kF=a(Pc);eb=i(kF,"True"),kF.forEach(t),tb=i(mt,". To be used in a Seq2Seq model, the model needs to initialized with both "),Lc=s(mt,"CODE",{});var vF=a(Lc);ob=i(vF,"is_decoder"),vF.forEach(t),nb=i(mt,` argument and
`),Ac=s(mt,"CODE",{});var TF=a(Ac);sb=i(TF,"add_cross_attention"),TF.forEach(t),ab=i(mt," set to "),Oc=s(mt,"CODE",{});var yF=a(Oc);rb=i(yF,"True"),yF.forEach(t),ib=i(mt,"; an "),Nc=s(mt,"CODE",{});var wF=a(Nc);lb=i(wF,"encoder_hidden_states"),wF.forEach(t),db=i(mt," is then expected as an input to the forward pass."),mt.forEach(t),cb=h(Ze),En=s(Ze,"P",{});var Bu=a(En);pb=i(Bu,".. _"),Ic=s(Bu,"EM",{});var $F=a(Ic);hb=i($F,"Attention is all you need"),$F.forEach(t),ub=i(Bu,": "),Ja=s(Bu,"A",{href:!0,rel:!0});var FF=a(Ja);mb=i(FF,"https://arxiv.org/abs/1706.03762"),FF.forEach(t),Bu.forEach(t),fb=h(Ze),$t=s(Ze,"DIV",{class:!0});var ea=a($t);y(Va.$$.fragment,ea),gb=h(ea),yo=s(ea,"P",{});var Wd=a(yo);_b=i(Wd,"The "),rd=s(Wd,"A",{href:!0});var xF=a(rd);bb=i(xF,"RobertaModel"),xF.forEach(t),kb=i(Wd," forward method, overrides the "),Dc=s(Wd,"CODE",{});var RF=a(Dc);vb=i(RF,"__call__"),RF.forEach(t),Tb=i(Wd," special method."),Wd.forEach(t),yb=h(ea),y(zn.$$.fragment,ea),wb=h(ea),y(qn.$$.fragment,ea),ea.forEach(t),Ze.forEach(t),Zu=h(o),wo=s(o,"H2",{class:!0});var Km=a(wo);Cn=s(Km,"A",{id:!0,class:!0,href:!0});var MF=a(Cn);Sc=s(MF,"SPAN",{});var EF=a(Sc);y(Ka.$$.fragment,EF),EF.forEach(t),MF.forEach(t),$b=h(Km),Wc=s(Km,"SPAN",{});var zF=a(Wc);Fb=i(zF,"RobertaForCausalLM"),zF.forEach(t),Km.forEach(t),em=h(o),tt=s(o,"DIV",{class:!0});var oo=a(tt);y(Ga.$$.fragment,oo),xb=h(oo),Xa=s(oo,"P",{});var Gm=a(Xa);Rb=i(Gm,"RoBERTa Model with a "),Bc=s(Gm,"CODE",{});var qF=a(Bc);Mb=i(qF,"language modeling"),qF.forEach(t),Eb=i(Gm," head on top for CLM fine-tuning."),Gm.forEach(t),zb=h(oo),Ya=s(oo,"P",{});var Xm=a(Ya);qb=i(Xm,"This model inherits from "),id=s(Xm,"A",{href:!0});var CF=a(id);Cb=i(CF,"PreTrainedModel"),CF.forEach(t),jb=i(Xm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xm.forEach(t),Pb=h(oo),Za=s(oo,"P",{});var Ym=a(Za);Lb=i(Ym,"This model is also a PyTorch "),er=s(Ym,"A",{href:!0,rel:!0});var jF=a(er);Ab=i(jF,"torch.nn.Module"),jF.forEach(t),Ob=i(Ym,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ym.forEach(t),Nb=h(oo),Ft=s(oo,"DIV",{class:!0});var ta=a(Ft);y(tr.$$.fragment,ta),Ib=h(ta),$o=s(ta,"P",{});var Bd=a($o);Db=i(Bd,"The "),ld=s(Bd,"A",{href:!0});var PF=a(ld);Sb=i(PF,"RobertaForCausalLM"),PF.forEach(t),Wb=i(Bd," forward method, overrides the "),Uc=s(Bd,"CODE",{});var LF=a(Uc);Bb=i(LF,"__call__"),LF.forEach(t),Ub=i(Bd," special method."),Bd.forEach(t),Hb=h(ta),y(jn.$$.fragment,ta),Qb=h(ta),y(Pn.$$.fragment,ta),ta.forEach(t),oo.forEach(t),tm=h(o),Fo=s(o,"H2",{class:!0});var Zm=a(Fo);Ln=s(Zm,"A",{id:!0,class:!0,href:!0});var AF=a(Ln);Hc=s(AF,"SPAN",{});var OF=a(Hc);y(or.$$.fragment,OF),OF.forEach(t),AF.forEach(t),Jb=h(Zm),Qc=s(Zm,"SPAN",{});var NF=a(Qc);Vb=i(NF,"RobertaForMaskedLM"),NF.forEach(t),Zm.forEach(t),om=h(o),ot=s(o,"DIV",{class:!0});var no=a(ot);y(nr.$$.fragment,no),Kb=h(no),sr=s(no,"P",{});var ef=a(sr);Gb=i(ef,"RoBERTa Model with a "),Jc=s(ef,"CODE",{});var IF=a(Jc);Xb=i(IF,"language modeling"),IF.forEach(t),Yb=i(ef," head on top."),ef.forEach(t),Zb=h(no),ar=s(no,"P",{});var tf=a(ar);ek=i(tf,"This model inherits from "),dd=s(tf,"A",{href:!0});var DF=a(dd);tk=i(DF,"PreTrainedModel"),DF.forEach(t),ok=i(tf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tf.forEach(t),nk=h(no),rr=s(no,"P",{});var of=a(rr);sk=i(of,"This model is also a PyTorch "),ir=s(of,"A",{href:!0,rel:!0});var SF=a(ir);ak=i(SF,"torch.nn.Module"),SF.forEach(t),rk=i(of,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),of.forEach(t),ik=h(no),it=s(no,"DIV",{class:!0});var so=a(it);y(lr.$$.fragment,so),lk=h(so),xo=s(so,"P",{});var Ud=a(xo);dk=i(Ud,"The "),cd=s(Ud,"A",{href:!0});var WF=a(cd);ck=i(WF,"RobertaForMaskedLM"),WF.forEach(t),pk=i(Ud," forward method, overrides the "),Vc=s(Ud,"CODE",{});var BF=a(Vc);hk=i(BF,"__call__"),BF.forEach(t),uk=i(Ud," special method."),Ud.forEach(t),mk=h(so),y(An.$$.fragment,so),fk=h(so),y(On.$$.fragment,so),gk=h(so),y(Nn.$$.fragment,so),so.forEach(t),no.forEach(t),nm=h(o),Ro=s(o,"H2",{class:!0});var nf=a(Ro);In=s(nf,"A",{id:!0,class:!0,href:!0});var UF=a(In);Kc=s(UF,"SPAN",{});var HF=a(Kc);y(dr.$$.fragment,HF),HF.forEach(t),UF.forEach(t),_k=h(nf),Gc=s(nf,"SPAN",{});var QF=a(Gc);bk=i(QF,"RobertaForSequenceClassification"),QF.forEach(t),nf.forEach(t),sm=h(o),nt=s(o,"DIV",{class:!0});var ao=a(nt);y(cr.$$.fragment,ao),kk=h(ao),Xc=s(ao,"P",{});var JF=a(Xc);vk=i(JF,`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),JF.forEach(t),Tk=h(ao),pr=s(ao,"P",{});var sf=a(pr);yk=i(sf,"This model inherits from "),pd=s(sf,"A",{href:!0});var VF=a(pd);wk=i(VF,"PreTrainedModel"),VF.forEach(t),$k=i(sf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sf.forEach(t),Fk=h(ao),hr=s(ao,"P",{});var af=a(hr);xk=i(af,"This model is also a PyTorch "),ur=s(af,"A",{href:!0,rel:!0});var KF=a(ur);Rk=i(KF,"torch.nn.Module"),KF.forEach(t),Mk=i(af,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),af.forEach(t),Ek=h(ao),Ue=s(ao,"DIV",{class:!0});var ft=a(Ue);y(mr.$$.fragment,ft),zk=h(ft),Mo=s(ft,"P",{});var Hd=a(Mo);qk=i(Hd,"The "),hd=s(Hd,"A",{href:!0});var GF=a(hd);Ck=i(GF,"RobertaForSequenceClassification"),GF.forEach(t),jk=i(Hd," forward method, overrides the "),Yc=s(Hd,"CODE",{});var XF=a(Yc);Pk=i(XF,"__call__"),XF.forEach(t),Lk=i(Hd," special method."),Hd.forEach(t),Ak=h(ft),y(Dn.$$.fragment,ft),Ok=h(ft),y(Sn.$$.fragment,ft),Nk=h(ft),y(Wn.$$.fragment,ft),Ik=h(ft),y(Bn.$$.fragment,ft),Dk=h(ft),y(Un.$$.fragment,ft),ft.forEach(t),ao.forEach(t),am=h(o),Eo=s(o,"H2",{class:!0});var rf=a(Eo);Hn=s(rf,"A",{id:!0,class:!0,href:!0});var YF=a(Hn);Zc=s(YF,"SPAN",{});var ZF=a(Zc);y(fr.$$.fragment,ZF),ZF.forEach(t),YF.forEach(t),Sk=h(rf),ep=s(rf,"SPAN",{});var ex=a(ep);Wk=i(ex,"RobertaForMultipleChoice"),ex.forEach(t),rf.forEach(t),rm=h(o),st=s(o,"DIV",{class:!0});var ro=a(st);y(gr.$$.fragment,ro),Bk=h(ro),tp=s(ro,"P",{});var tx=a(tp);Uk=i(tx,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),tx.forEach(t),Hk=h(ro),_r=s(ro,"P",{});var lf=a(_r);Qk=i(lf,"This model inherits from "),ud=s(lf,"A",{href:!0});var ox=a(ud);Jk=i(ox,"PreTrainedModel"),ox.forEach(t),Vk=i(lf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lf.forEach(t),Kk=h(ro),br=s(ro,"P",{});var df=a(br);Gk=i(df,"This model is also a PyTorch "),kr=s(df,"A",{href:!0,rel:!0});var nx=a(kr);Xk=i(nx,"torch.nn.Module"),nx.forEach(t),Yk=i(df,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),df.forEach(t),Zk=h(ro),xt=s(ro,"DIV",{class:!0});var oa=a(xt);y(vr.$$.fragment,oa),e1=h(oa),zo=s(oa,"P",{});var Qd=a(zo);t1=i(Qd,"The "),md=s(Qd,"A",{href:!0});var sx=a(md);o1=i(sx,"RobertaForMultipleChoice"),sx.forEach(t),n1=i(Qd," forward method, overrides the "),op=s(Qd,"CODE",{});var ax=a(op);s1=i(ax,"__call__"),ax.forEach(t),a1=i(Qd," special method."),Qd.forEach(t),r1=h(oa),y(Qn.$$.fragment,oa),i1=h(oa),y(Jn.$$.fragment,oa),oa.forEach(t),ro.forEach(t),im=h(o),qo=s(o,"H2",{class:!0});var cf=a(qo);Vn=s(cf,"A",{id:!0,class:!0,href:!0});var rx=a(Vn);np=s(rx,"SPAN",{});var ix=a(np);y(Tr.$$.fragment,ix),ix.forEach(t),rx.forEach(t),l1=h(cf),sp=s(cf,"SPAN",{});var lx=a(sp);d1=i(lx,"RobertaForTokenClassification"),lx.forEach(t),cf.forEach(t),lm=h(o),at=s(o,"DIV",{class:!0});var io=a(at);y(yr.$$.fragment,io),c1=h(io),ap=s(io,"P",{});var dx=a(ap);p1=i(dx,`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),dx.forEach(t),h1=h(io),wr=s(io,"P",{});var pf=a(wr);u1=i(pf,"This model inherits from "),fd=s(pf,"A",{href:!0});var cx=a(fd);m1=i(cx,"PreTrainedModel"),cx.forEach(t),f1=i(pf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pf.forEach(t),g1=h(io),$r=s(io,"P",{});var hf=a($r);_1=i(hf,"This model is also a PyTorch "),Fr=s(hf,"A",{href:!0,rel:!0});var px=a(Fr);b1=i(px,"torch.nn.Module"),px.forEach(t),k1=i(hf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hf.forEach(t),v1=h(io),lt=s(io,"DIV",{class:!0});var lo=a(lt);y(xr.$$.fragment,lo),T1=h(lo),Co=s(lo,"P",{});var Jd=a(Co);y1=i(Jd,"The "),gd=s(Jd,"A",{href:!0});var hx=a(gd);w1=i(hx,"RobertaForTokenClassification"),hx.forEach(t),$1=i(Jd," forward method, overrides the "),rp=s(Jd,"CODE",{});var ux=a(rp);F1=i(ux,"__call__"),ux.forEach(t),x1=i(Jd," special method."),Jd.forEach(t),R1=h(lo),y(Kn.$$.fragment,lo),M1=h(lo),y(Gn.$$.fragment,lo),E1=h(lo),y(Xn.$$.fragment,lo),lo.forEach(t),io.forEach(t),dm=h(o),jo=s(o,"H2",{class:!0});var uf=a(jo);Yn=s(uf,"A",{id:!0,class:!0,href:!0});var mx=a(Yn);ip=s(mx,"SPAN",{});var fx=a(ip);y(Rr.$$.fragment,fx),fx.forEach(t),mx.forEach(t),z1=h(uf),lp=s(uf,"SPAN",{});var gx=a(lp);q1=i(gx,"RobertaForQuestionAnswering"),gx.forEach(t),uf.forEach(t),cm=h(o),rt=s(o,"DIV",{class:!0});var co=a(rt);y(Mr.$$.fragment,co),C1=h(co),Po=s(co,"P",{});var Vd=a(Po);j1=i(Vd,`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),dp=s(Vd,"CODE",{});var _x=a(dp);P1=i(_x,"span start logits"),_x.forEach(t),L1=i(Vd," and "),cp=s(Vd,"CODE",{});var bx=a(cp);A1=i(bx,"span end logits"),bx.forEach(t),O1=i(Vd,")."),Vd.forEach(t),N1=h(co),Er=s(co,"P",{});var mf=a(Er);I1=i(mf,"This model inherits from "),_d=s(mf,"A",{href:!0});var kx=a(_d);D1=i(kx,"PreTrainedModel"),kx.forEach(t),S1=i(mf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mf.forEach(t),W1=h(co),zr=s(co,"P",{});var ff=a(zr);B1=i(ff,"This model is also a PyTorch "),qr=s(ff,"A",{href:!0,rel:!0});var vx=a(qr);U1=i(vx,"torch.nn.Module"),vx.forEach(t),H1=i(ff,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ff.forEach(t),Q1=h(co),dt=s(co,"DIV",{class:!0});var po=a(dt);y(Cr.$$.fragment,po),J1=h(po),Lo=s(po,"P",{});var Kd=a(Lo);V1=i(Kd,"The "),bd=s(Kd,"A",{href:!0});var Tx=a(bd);K1=i(Tx,"RobertaForQuestionAnswering"),Tx.forEach(t),G1=i(Kd," forward method, overrides the "),pp=s(Kd,"CODE",{});var yx=a(pp);X1=i(yx,"__call__"),yx.forEach(t),Y1=i(Kd," special method."),Kd.forEach(t),Z1=h(po),y(Zn.$$.fragment,po),ev=h(po),y(es.$$.fragment,po),tv=h(po),y(ts.$$.fragment,po),po.forEach(t),co.forEach(t),pm=h(o),Ao=s(o,"H2",{class:!0});var gf=a(Ao);os=s(gf,"A",{id:!0,class:!0,href:!0});var wx=a(os);hp=s(wx,"SPAN",{});var $x=a(hp);y(jr.$$.fragment,$x),$x.forEach(t),wx.forEach(t),ov=h(gf),up=s(gf,"SPAN",{});var Fx=a(up);nv=i(Fx,"TFRobertaModel"),Fx.forEach(t),gf.forEach(t),hm=h(o),Qe=s(o,"DIV",{class:!0});var Ot=a(Qe);y(Pr.$$.fragment,Ot),sv=h(Ot),mp=s(Ot,"P",{});var xx=a(mp);av=i(xx,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),xx.forEach(t),rv=h(Ot),Lr=s(Ot,"P",{});var _f=a(Lr);iv=i(_f,"This model inherits from "),kd=s(_f,"A",{href:!0});var Rx=a(kd);lv=i(Rx,"TFPreTrainedModel"),Rx.forEach(t),dv=i(_f,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_f.forEach(t),cv=h(Ot),Ar=s(Ot,"P",{});var bf=a(Ar);pv=i(bf,"This model is also a "),Or=s(bf,"A",{href:!0,rel:!0});var Mx=a(Or);hv=i(Mx,"tf.keras.Model"),Mx.forEach(t),uv=i(bf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bf.forEach(t),mv=h(Ot),y(ns.$$.fragment,Ot),fv=h(Ot),Rt=s(Ot,"DIV",{class:!0});var na=a(Rt);y(Nr.$$.fragment,na),gv=h(na),Oo=s(na,"P",{});var Gd=a(Oo);_v=i(Gd,"The "),vd=s(Gd,"A",{href:!0});var Ex=a(vd);bv=i(Ex,"TFRobertaModel"),Ex.forEach(t),kv=i(Gd," forward method, overrides the "),fp=s(Gd,"CODE",{});var zx=a(fp);vv=i(zx,"__call__"),zx.forEach(t),Tv=i(Gd," special method."),Gd.forEach(t),yv=h(na),y(ss.$$.fragment,na),wv=h(na),y(as.$$.fragment,na),na.forEach(t),Ot.forEach(t),um=h(o),No=s(o,"H2",{class:!0});var kf=a(No);rs=s(kf,"A",{id:!0,class:!0,href:!0});var qx=a(rs);gp=s(qx,"SPAN",{});var Cx=a(gp);y(Ir.$$.fragment,Cx),Cx.forEach(t),qx.forEach(t),$v=h(kf),_p=s(kf,"SPAN",{});var jx=a(_p);Fv=i(jx,"TFRobertaForCausalLM"),jx.forEach(t),kf.forEach(t),mm=h(o),Io=s(o,"DIV",{class:!0});var vf=a(Io);y(Dr.$$.fragment,vf),xv=h(vf),Mt=s(vf,"DIV",{class:!0});var sa=a(Mt);y(Sr.$$.fragment,sa),Rv=h(sa),Do=s(sa,"P",{});var Xd=a(Do);Mv=i(Xd,"The "),Td=s(Xd,"A",{href:!0});var Px=a(Td);Ev=i(Px,"TFRobertaForCausalLM"),Px.forEach(t),zv=i(Xd," forward method, overrides the "),bp=s(Xd,"CODE",{});var Lx=a(bp);qv=i(Lx,"__call__"),Lx.forEach(t),Cv=i(Xd," special method."),Xd.forEach(t),jv=h(sa),y(is.$$.fragment,sa),Pv=h(sa),y(ls.$$.fragment,sa),sa.forEach(t),vf.forEach(t),fm=h(o),So=s(o,"H2",{class:!0});var Tf=a(So);ds=s(Tf,"A",{id:!0,class:!0,href:!0});var Ax=a(ds);kp=s(Ax,"SPAN",{});var Ox=a(kp);y(Wr.$$.fragment,Ox),Ox.forEach(t),Ax.forEach(t),Lv=h(Tf),vp=s(Tf,"SPAN",{});var Nx=a(vp);Av=i(Nx,"TFRobertaForMaskedLM"),Nx.forEach(t),Tf.forEach(t),gm=h(o),Je=s(o,"DIV",{class:!0});var Nt=a(Je);y(Br.$$.fragment,Nt),Ov=h(Nt),Ur=s(Nt,"P",{});var yf=a(Ur);Nv=i(yf,"RoBERTa Model with a "),Tp=s(yf,"CODE",{});var Ix=a(Tp);Iv=i(Ix,"language modeling"),Ix.forEach(t),Dv=i(yf," head on top."),yf.forEach(t),Sv=h(Nt),Hr=s(Nt,"P",{});var wf=a(Hr);Wv=i(wf,"This model inherits from "),yd=s(wf,"A",{href:!0});var Dx=a(yd);Bv=i(Dx,"TFPreTrainedModel"),Dx.forEach(t),Uv=i(wf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wf.forEach(t),Hv=h(Nt),Qr=s(Nt,"P",{});var $f=a(Qr);Qv=i($f,"This model is also a "),Jr=s($f,"A",{href:!0,rel:!0});var Sx=a(Jr);Jv=i(Sx,"tf.keras.Model"),Sx.forEach(t),Vv=i($f,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$f.forEach(t),Kv=h(Nt),y(cs.$$.fragment,Nt),Gv=h(Nt),ct=s(Nt,"DIV",{class:!0});var ho=a(ct);y(Vr.$$.fragment,ho),Xv=h(ho),Wo=s(ho,"P",{});var Yd=a(Wo);Yv=i(Yd,"The "),wd=s(Yd,"A",{href:!0});var Wx=a(wd);Zv=i(Wx,"TFRobertaForMaskedLM"),Wx.forEach(t),eT=i(Yd," forward method, overrides the "),yp=s(Yd,"CODE",{});var Bx=a(yp);tT=i(Bx,"__call__"),Bx.forEach(t),oT=i(Yd," special method."),Yd.forEach(t),nT=h(ho),y(ps.$$.fragment,ho),sT=h(ho),y(hs.$$.fragment,ho),aT=h(ho),y(us.$$.fragment,ho),ho.forEach(t),Nt.forEach(t),_m=h(o),Bo=s(o,"H2",{class:!0});var Ff=a(Bo);ms=s(Ff,"A",{id:!0,class:!0,href:!0});var Ux=a(ms);wp=s(Ux,"SPAN",{});var Hx=a(wp);y(Kr.$$.fragment,Hx),Hx.forEach(t),Ux.forEach(t),rT=h(Ff),$p=s(Ff,"SPAN",{});var Qx=a($p);iT=i(Qx,"TFRobertaForSequenceClassification"),Qx.forEach(t),Ff.forEach(t),bm=h(o),Ve=s(o,"DIV",{class:!0});var It=a(Ve);y(Gr.$$.fragment,It),lT=h(It),Fp=s(It,"P",{});var Jx=a(Fp);dT=i(Jx,`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Jx.forEach(t),cT=h(It),Xr=s(It,"P",{});var xf=a(Xr);pT=i(xf,"This model inherits from "),$d=s(xf,"A",{href:!0});var Vx=a($d);hT=i(Vx,"TFPreTrainedModel"),Vx.forEach(t),uT=i(xf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xf.forEach(t),mT=h(It),Yr=s(It,"P",{});var Rf=a(Yr);fT=i(Rf,"This model is also a "),Zr=s(Rf,"A",{href:!0,rel:!0});var Kx=a(Zr);gT=i(Kx,"tf.keras.Model"),Kx.forEach(t),_T=i(Rf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rf.forEach(t),bT=h(It),y(fs.$$.fragment,It),kT=h(It),pt=s(It,"DIV",{class:!0});var uo=a(pt);y(ei.$$.fragment,uo),vT=h(uo),Uo=s(uo,"P",{});var Zd=a(Uo);TT=i(Zd,"The "),Fd=s(Zd,"A",{href:!0});var Gx=a(Fd);yT=i(Gx,"TFRobertaForSequenceClassification"),Gx.forEach(t),wT=i(Zd," forward method, overrides the "),xp=s(Zd,"CODE",{});var Xx=a(xp);$T=i(Xx,"__call__"),Xx.forEach(t),FT=i(Zd," special method."),Zd.forEach(t),xT=h(uo),y(gs.$$.fragment,uo),RT=h(uo),y(_s.$$.fragment,uo),MT=h(uo),y(bs.$$.fragment,uo),uo.forEach(t),It.forEach(t),km=h(o),Ho=s(o,"H2",{class:!0});var Mf=a(Ho);ks=s(Mf,"A",{id:!0,class:!0,href:!0});var Yx=a(ks);Rp=s(Yx,"SPAN",{});var Zx=a(Rp);y(ti.$$.fragment,Zx),Zx.forEach(t),Yx.forEach(t),ET=h(Mf),Mp=s(Mf,"SPAN",{});var eR=a(Mp);zT=i(eR,"TFRobertaForMultipleChoice"),eR.forEach(t),Mf.forEach(t),vm=h(o),Ke=s(o,"DIV",{class:!0});var Dt=a(Ke);y(oi.$$.fragment,Dt),qT=h(Dt),Ep=s(Dt,"P",{});var tR=a(Ep);CT=i(tR,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),tR.forEach(t),jT=h(Dt),ni=s(Dt,"P",{});var Ef=a(ni);PT=i(Ef,"This model inherits from "),xd=s(Ef,"A",{href:!0});var oR=a(xd);LT=i(oR,"TFPreTrainedModel"),oR.forEach(t),AT=i(Ef,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ef.forEach(t),OT=h(Dt),si=s(Dt,"P",{});var zf=a(si);NT=i(zf,"This model is also a "),ai=s(zf,"A",{href:!0,rel:!0});var nR=a(ai);IT=i(nR,"tf.keras.Model"),nR.forEach(t),DT=i(zf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zf.forEach(t),ST=h(Dt),y(vs.$$.fragment,Dt),WT=h(Dt),Et=s(Dt,"DIV",{class:!0});var aa=a(Et);y(ri.$$.fragment,aa),BT=h(aa),Qo=s(aa,"P",{});var ec=a(Qo);UT=i(ec,"The "),Rd=s(ec,"A",{href:!0});var sR=a(Rd);HT=i(sR,"TFRobertaForMultipleChoice"),sR.forEach(t),QT=i(ec," forward method, overrides the "),zp=s(ec,"CODE",{});var aR=a(zp);JT=i(aR,"__call__"),aR.forEach(t),VT=i(ec," special method."),ec.forEach(t),KT=h(aa),y(Ts.$$.fragment,aa),GT=h(aa),y(ys.$$.fragment,aa),aa.forEach(t),Dt.forEach(t),Tm=h(o),Jo=s(o,"H2",{class:!0});var qf=a(Jo);ws=s(qf,"A",{id:!0,class:!0,href:!0});var rR=a(ws);qp=s(rR,"SPAN",{});var iR=a(qp);y(ii.$$.fragment,iR),iR.forEach(t),rR.forEach(t),XT=h(qf),Cp=s(qf,"SPAN",{});var lR=a(Cp);YT=i(lR,"TFRobertaForTokenClassification"),lR.forEach(t),qf.forEach(t),ym=h(o),Ge=s(o,"DIV",{class:!0});var St=a(Ge);y(li.$$.fragment,St),ZT=h(St),jp=s(St,"P",{});var dR=a(jp);ey=i(dR,`RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),dR.forEach(t),ty=h(St),di=s(St,"P",{});var Cf=a(di);oy=i(Cf,"This model inherits from "),Md=s(Cf,"A",{href:!0});var cR=a(Md);ny=i(cR,"TFPreTrainedModel"),cR.forEach(t),sy=i(Cf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cf.forEach(t),ay=h(St),ci=s(St,"P",{});var jf=a(ci);ry=i(jf,"This model is also a "),pi=s(jf,"A",{href:!0,rel:!0});var pR=a(pi);iy=i(pR,"tf.keras.Model"),pR.forEach(t),ly=i(jf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jf.forEach(t),dy=h(St),y($s.$$.fragment,St),cy=h(St),ht=s(St,"DIV",{class:!0});var mo=a(ht);y(hi.$$.fragment,mo),py=h(mo),Vo=s(mo,"P",{});var tc=a(Vo);hy=i(tc,"The "),Ed=s(tc,"A",{href:!0});var hR=a(Ed);uy=i(hR,"TFRobertaForTokenClassification"),hR.forEach(t),my=i(tc," forward method, overrides the "),Pp=s(tc,"CODE",{});var uR=a(Pp);fy=i(uR,"__call__"),uR.forEach(t),gy=i(tc," special method."),tc.forEach(t),_y=h(mo),y(Fs.$$.fragment,mo),by=h(mo),y(xs.$$.fragment,mo),ky=h(mo),y(Rs.$$.fragment,mo),mo.forEach(t),St.forEach(t),wm=h(o),Ko=s(o,"H2",{class:!0});var Pf=a(Ko);Ms=s(Pf,"A",{id:!0,class:!0,href:!0});var mR=a(Ms);Lp=s(mR,"SPAN",{});var fR=a(Lp);y(ui.$$.fragment,fR),fR.forEach(t),mR.forEach(t),vy=h(Pf),Ap=s(Pf,"SPAN",{});var gR=a(Ap);Ty=i(gR,"TFRobertaForQuestionAnswering"),gR.forEach(t),Pf.forEach(t),$m=h(o),Xe=s(o,"DIV",{class:!0});var Wt=a(Xe);y(mi.$$.fragment,Wt),yy=h(Wt),Go=s(Wt,"P",{});var oc=a(Go);wy=i(oc,`RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Op=s(oc,"CODE",{});var _R=a(Op);$y=i(_R,"span start logits"),_R.forEach(t),Fy=i(oc," and "),Np=s(oc,"CODE",{});var bR=a(Np);xy=i(bR,"span end logits"),bR.forEach(t),Ry=i(oc,")."),oc.forEach(t),My=h(Wt),fi=s(Wt,"P",{});var Lf=a(fi);Ey=i(Lf,"This model inherits from "),zd=s(Lf,"A",{href:!0});var kR=a(zd);zy=i(kR,"TFPreTrainedModel"),kR.forEach(t),qy=i(Lf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lf.forEach(t),Cy=h(Wt),gi=s(Wt,"P",{});var Af=a(gi);jy=i(Af,"This model is also a "),_i=s(Af,"A",{href:!0,rel:!0});var vR=a(_i);Py=i(vR,"tf.keras.Model"),vR.forEach(t),Ly=i(Af,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Af.forEach(t),Ay=h(Wt),y(Es.$$.fragment,Wt),Oy=h(Wt),ut=s(Wt,"DIV",{class:!0});var fo=a(ut);y(bi.$$.fragment,fo),Ny=h(fo),Xo=s(fo,"P",{});var nc=a(Xo);Iy=i(nc,"The "),qd=s(nc,"A",{href:!0});var TR=a(qd);Dy=i(TR,"TFRobertaForQuestionAnswering"),TR.forEach(t),Sy=i(nc," forward method, overrides the "),Ip=s(nc,"CODE",{});var yR=a(Ip);Wy=i(yR,"__call__"),yR.forEach(t),By=i(nc," special method."),nc.forEach(t),Uy=h(fo),y(zs.$$.fragment,fo),Hy=h(fo),y(qs.$$.fragment,fo),Qy=h(fo),y(Cs.$$.fragment,fo),fo.forEach(t),Wt.forEach(t),Fm=h(o),Yo=s(o,"H2",{class:!0});var Of=a(Yo);js=s(Of,"A",{id:!0,class:!0,href:!0});var wR=a(js);Dp=s(wR,"SPAN",{});var $R=a(Dp);y(ki.$$.fragment,$R),$R.forEach(t),wR.forEach(t),Jy=h(Of),Sp=s(Of,"SPAN",{});var FR=a(Sp);Vy=i(FR,"FlaxRobertaModel"),FR.forEach(t),Of.forEach(t),xm=h(o),Oe=s(o,"DIV",{class:!0});var gt=a(Oe);y(vi.$$.fragment,gt),Ky=h(gt),Wp=s(gt,"P",{});var xR=a(Wp);Gy=i(xR,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),xR.forEach(t),Xy=h(gt),Ti=s(gt,"P",{});var Nf=a(Ti);Yy=i(Nf,"This model inherits from "),Cd=s(Nf,"A",{href:!0});var RR=a(Cd);Zy=i(RR,"FlaxPreTrainedModel"),RR.forEach(t),ew=i(Nf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Nf.forEach(t),tw=h(gt),yi=s(gt,"P",{});var If=a(yi);ow=i(If,"This model is also a Flax Linen "),wi=s(If,"A",{href:!0,rel:!0});var MR=a(wi);nw=i(MR,"flax.linen.Module"),MR.forEach(t),sw=i(If,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),If.forEach(t),aw=h(gt),Bp=s(gt,"P",{});var ER=a(Bp);rw=i(ER,"Finally, this model supports inherent JAX features such as:"),ER.forEach(t),iw=h(gt),Ut=s(gt,"UL",{});var ra=a(Ut);Up=s(ra,"LI",{});var zR=a(Up);$i=s(zR,"A",{href:!0,rel:!0});var qR=a($i);lw=i(qR,"Just-In-Time (JIT) compilation"),qR.forEach(t),zR.forEach(t),dw=h(ra),Hp=s(ra,"LI",{});var CR=a(Hp);Fi=s(CR,"A",{href:!0,rel:!0});var jR=a(Fi);cw=i(jR,"Automatic Differentiation"),jR.forEach(t),CR.forEach(t),pw=h(ra),Qp=s(ra,"LI",{});var PR=a(Qp);xi=s(PR,"A",{href:!0,rel:!0});var LR=a(xi);hw=i(LR,"Vectorization"),LR.forEach(t),PR.forEach(t),uw=h(ra),Jp=s(ra,"LI",{});var AR=a(Jp);Ri=s(AR,"A",{href:!0,rel:!0});var OR=a(Ri);mw=i(OR,"Parallelization"),OR.forEach(t),AR.forEach(t),ra.forEach(t),fw=h(gt),zt=s(gt,"DIV",{class:!0});var ia=a(zt);y(Mi.$$.fragment,ia),gw=h(ia),Zo=s(ia,"P",{});var sc=a(Zo);_w=i(sc,"The "),Vp=s(sc,"CODE",{});var NR=a(Vp);bw=i(NR,"FlaxRobertaPreTrainedModel"),NR.forEach(t),kw=i(sc," forward method, overrides the "),Kp=s(sc,"CODE",{});var IR=a(Kp);vw=i(IR,"__call__"),IR.forEach(t),Tw=i(sc," special method."),sc.forEach(t),yw=h(ia),y(Ps.$$.fragment,ia),ww=h(ia),y(Ls.$$.fragment,ia),ia.forEach(t),gt.forEach(t),Rm=h(o),en=s(o,"H2",{class:!0});var Df=a(en);As=s(Df,"A",{id:!0,class:!0,href:!0});var DR=a(As);Gp=s(DR,"SPAN",{});var SR=a(Gp);y(Ei.$$.fragment,SR),SR.forEach(t),DR.forEach(t),$w=h(Df),Xp=s(Df,"SPAN",{});var WR=a(Xp);Fw=i(WR,"FlaxRobertaForCausalLM"),WR.forEach(t),Df.forEach(t),Mm=h(o),Ne=s(o,"DIV",{class:!0});var _t=a(Ne);y(zi.$$.fragment,_t),xw=h(_t),Yp=s(_t,"P",{});var BR=a(Yp);Rw=i(BR,`Roberta Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),BR.forEach(t),Mw=h(_t),qi=s(_t,"P",{});var Sf=a(qi);Ew=i(Sf,"This model inherits from "),jd=s(Sf,"A",{href:!0});var UR=a(jd);zw=i(UR,"FlaxPreTrainedModel"),UR.forEach(t),qw=i(Sf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Sf.forEach(t),Cw=h(_t),Ci=s(_t,"P",{});var Wf=a(Ci);jw=i(Wf,"This model is also a Flax Linen "),ji=s(Wf,"A",{href:!0,rel:!0});var HR=a(ji);Pw=i(HR,"flax.linen.Module"),HR.forEach(t),Lw=i(Wf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Wf.forEach(t),Aw=h(_t),Zp=s(_t,"P",{});var QR=a(Zp);Ow=i(QR,"Finally, this model supports inherent JAX features such as:"),QR.forEach(t),Nw=h(_t),Ht=s(_t,"UL",{});var la=a(Ht);eh=s(la,"LI",{});var JR=a(eh);Pi=s(JR,"A",{href:!0,rel:!0});var VR=a(Pi);Iw=i(VR,"Just-In-Time (JIT) compilation"),VR.forEach(t),JR.forEach(t),Dw=h(la),th=s(la,"LI",{});var KR=a(th);Li=s(KR,"A",{href:!0,rel:!0});var GR=a(Li);Sw=i(GR,"Automatic Differentiation"),GR.forEach(t),KR.forEach(t),Ww=h(la),oh=s(la,"LI",{});var XR=a(oh);Ai=s(XR,"A",{href:!0,rel:!0});var YR=a(Ai);Bw=i(YR,"Vectorization"),YR.forEach(t),XR.forEach(t),Uw=h(la),nh=s(la,"LI",{});var ZR=a(nh);Oi=s(ZR,"A",{href:!0,rel:!0});var eM=a(Oi);Hw=i(eM,"Parallelization"),eM.forEach(t),ZR.forEach(t),la.forEach(t),Qw=h(_t),qt=s(_t,"DIV",{class:!0});var da=a(qt);y(Ni.$$.fragment,da),Jw=h(da),tn=s(da,"P",{});var ac=a(tn);Vw=i(ac,"The "),sh=s(ac,"CODE",{});var tM=a(sh);Kw=i(tM,"FlaxRobertaPreTrainedModel"),tM.forEach(t),Gw=i(ac," forward method, overrides the "),ah=s(ac,"CODE",{});var oM=a(ah);Xw=i(oM,"__call__"),oM.forEach(t),Yw=i(ac," special method."),ac.forEach(t),Zw=h(da),y(Os.$$.fragment,da),e$=h(da),y(Ns.$$.fragment,da),da.forEach(t),_t.forEach(t),Em=h(o),on=s(o,"H2",{class:!0});var Bf=a(on);Is=s(Bf,"A",{id:!0,class:!0,href:!0});var nM=a(Is);rh=s(nM,"SPAN",{});var sM=a(rh);y(Ii.$$.fragment,sM),sM.forEach(t),nM.forEach(t),t$=h(Bf),ih=s(Bf,"SPAN",{});var aM=a(ih);o$=i(aM,"FlaxRobertaForMaskedLM"),aM.forEach(t),Bf.forEach(t),zm=h(o),Ie=s(o,"DIV",{class:!0});var bt=a(Ie);y(Di.$$.fragment,bt),n$=h(bt),Si=s(bt,"P",{});var Uf=a(Si);s$=i(Uf,"RoBERTa Model with a "),lh=s(Uf,"CODE",{});var rM=a(lh);a$=i(rM,"language modeling"),rM.forEach(t),r$=i(Uf," head on top."),Uf.forEach(t),i$=h(bt),Wi=s(bt,"P",{});var Hf=a(Wi);l$=i(Hf,"This model inherits from "),Pd=s(Hf,"A",{href:!0});var iM=a(Pd);d$=i(iM,"FlaxPreTrainedModel"),iM.forEach(t),c$=i(Hf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Hf.forEach(t),p$=h(bt),Bi=s(bt,"P",{});var Qf=a(Bi);h$=i(Qf,"This model is also a Flax Linen "),Ui=s(Qf,"A",{href:!0,rel:!0});var lM=a(Ui);u$=i(lM,"flax.linen.Module"),lM.forEach(t),m$=i(Qf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Qf.forEach(t),f$=h(bt),dh=s(bt,"P",{});var dM=a(dh);g$=i(dM,"Finally, this model supports inherent JAX features such as:"),dM.forEach(t),_$=h(bt),Qt=s(bt,"UL",{});var ca=a(Qt);ch=s(ca,"LI",{});var cM=a(ch);Hi=s(cM,"A",{href:!0,rel:!0});var pM=a(Hi);b$=i(pM,"Just-In-Time (JIT) compilation"),pM.forEach(t),cM.forEach(t),k$=h(ca),ph=s(ca,"LI",{});var hM=a(ph);Qi=s(hM,"A",{href:!0,rel:!0});var uM=a(Qi);v$=i(uM,"Automatic Differentiation"),uM.forEach(t),hM.forEach(t),T$=h(ca),hh=s(ca,"LI",{});var mM=a(hh);Ji=s(mM,"A",{href:!0,rel:!0});var fM=a(Ji);y$=i(fM,"Vectorization"),fM.forEach(t),mM.forEach(t),w$=h(ca),uh=s(ca,"LI",{});var gM=a(uh);Vi=s(gM,"A",{href:!0,rel:!0});var _M=a(Vi);$$=i(_M,"Parallelization"),_M.forEach(t),gM.forEach(t),ca.forEach(t),F$=h(bt),Ct=s(bt,"DIV",{class:!0});var pa=a(Ct);y(Ki.$$.fragment,pa),x$=h(pa),nn=s(pa,"P",{});var rc=a(nn);R$=i(rc,"The "),mh=s(rc,"CODE",{});var bM=a(mh);M$=i(bM,"FlaxRobertaPreTrainedModel"),bM.forEach(t),E$=i(rc," forward method, overrides the "),fh=s(rc,"CODE",{});var kM=a(fh);z$=i(kM,"__call__"),kM.forEach(t),q$=i(rc," special method."),rc.forEach(t),C$=h(pa),y(Ds.$$.fragment,pa),j$=h(pa),y(Ss.$$.fragment,pa),pa.forEach(t),bt.forEach(t),qm=h(o),sn=s(o,"H2",{class:!0});var Jf=a(sn);Ws=s(Jf,"A",{id:!0,class:!0,href:!0});var vM=a(Ws);gh=s(vM,"SPAN",{});var TM=a(gh);y(Gi.$$.fragment,TM),TM.forEach(t),vM.forEach(t),P$=h(Jf),_h=s(Jf,"SPAN",{});var yM=a(_h);L$=i(yM,"FlaxRobertaForSequenceClassification"),yM.forEach(t),Jf.forEach(t),Cm=h(o),De=s(o,"DIV",{class:!0});var kt=a(De);y(Xi.$$.fragment,kt),A$=h(kt),bh=s(kt,"P",{});var wM=a(bh);O$=i(wM,`Roberta Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),wM.forEach(t),N$=h(kt),Yi=s(kt,"P",{});var Vf=a(Yi);I$=i(Vf,"This model inherits from "),Ld=s(Vf,"A",{href:!0});var $M=a(Ld);D$=i($M,"FlaxPreTrainedModel"),$M.forEach(t),S$=i(Vf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Vf.forEach(t),W$=h(kt),Zi=s(kt,"P",{});var Kf=a(Zi);B$=i(Kf,"This model is also a Flax Linen "),el=s(Kf,"A",{href:!0,rel:!0});var FM=a(el);U$=i(FM,"flax.linen.Module"),FM.forEach(t),H$=i(Kf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Kf.forEach(t),Q$=h(kt),kh=s(kt,"P",{});var xM=a(kh);J$=i(xM,"Finally, this model supports inherent JAX features such as:"),xM.forEach(t),V$=h(kt),Jt=s(kt,"UL",{});var ha=a(Jt);vh=s(ha,"LI",{});var RM=a(vh);tl=s(RM,"A",{href:!0,rel:!0});var MM=a(tl);K$=i(MM,"Just-In-Time (JIT) compilation"),MM.forEach(t),RM.forEach(t),G$=h(ha),Th=s(ha,"LI",{});var EM=a(Th);ol=s(EM,"A",{href:!0,rel:!0});var zM=a(ol);X$=i(zM,"Automatic Differentiation"),zM.forEach(t),EM.forEach(t),Y$=h(ha),yh=s(ha,"LI",{});var qM=a(yh);nl=s(qM,"A",{href:!0,rel:!0});var CM=a(nl);Z$=i(CM,"Vectorization"),CM.forEach(t),qM.forEach(t),e0=h(ha),wh=s(ha,"LI",{});var jM=a(wh);sl=s(jM,"A",{href:!0,rel:!0});var PM=a(sl);t0=i(PM,"Parallelization"),PM.forEach(t),jM.forEach(t),ha.forEach(t),o0=h(kt),jt=s(kt,"DIV",{class:!0});var ua=a(jt);y(al.$$.fragment,ua),n0=h(ua),an=s(ua,"P",{});var ic=a(an);s0=i(ic,"The "),$h=s(ic,"CODE",{});var LM=a($h);a0=i(LM,"FlaxRobertaPreTrainedModel"),LM.forEach(t),r0=i(ic," forward method, overrides the "),Fh=s(ic,"CODE",{});var AM=a(Fh);i0=i(AM,"__call__"),AM.forEach(t),l0=i(ic," special method."),ic.forEach(t),d0=h(ua),y(Bs.$$.fragment,ua),c0=h(ua),y(Us.$$.fragment,ua),ua.forEach(t),kt.forEach(t),jm=h(o),rn=s(o,"H2",{class:!0});var Gf=a(rn);Hs=s(Gf,"A",{id:!0,class:!0,href:!0});var OM=a(Hs);xh=s(OM,"SPAN",{});var NM=a(xh);y(rl.$$.fragment,NM),NM.forEach(t),OM.forEach(t),p0=h(Gf),Rh=s(Gf,"SPAN",{});var IM=a(Rh);h0=i(IM,"FlaxRobertaForMultipleChoice"),IM.forEach(t),Gf.forEach(t),Pm=h(o),Se=s(o,"DIV",{class:!0});var vt=a(Se);y(il.$$.fragment,vt),u0=h(vt),Mh=s(vt,"P",{});var DM=a(Mh);m0=i(DM,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),DM.forEach(t),f0=h(vt),ll=s(vt,"P",{});var Xf=a(ll);g0=i(Xf,"This model inherits from "),Ad=s(Xf,"A",{href:!0});var SM=a(Ad);_0=i(SM,"FlaxPreTrainedModel"),SM.forEach(t),b0=i(Xf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Xf.forEach(t),k0=h(vt),dl=s(vt,"P",{});var Yf=a(dl);v0=i(Yf,"This model is also a Flax Linen "),cl=s(Yf,"A",{href:!0,rel:!0});var WM=a(cl);T0=i(WM,"flax.linen.Module"),WM.forEach(t),y0=i(Yf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Yf.forEach(t),w0=h(vt),Eh=s(vt,"P",{});var BM=a(Eh);$0=i(BM,"Finally, this model supports inherent JAX features such as:"),BM.forEach(t),F0=h(vt),Vt=s(vt,"UL",{});var ma=a(Vt);zh=s(ma,"LI",{});var UM=a(zh);pl=s(UM,"A",{href:!0,rel:!0});var HM=a(pl);x0=i(HM,"Just-In-Time (JIT) compilation"),HM.forEach(t),UM.forEach(t),R0=h(ma),qh=s(ma,"LI",{});var QM=a(qh);hl=s(QM,"A",{href:!0,rel:!0});var JM=a(hl);M0=i(JM,"Automatic Differentiation"),JM.forEach(t),QM.forEach(t),E0=h(ma),Ch=s(ma,"LI",{});var VM=a(Ch);ul=s(VM,"A",{href:!0,rel:!0});var KM=a(ul);z0=i(KM,"Vectorization"),KM.forEach(t),VM.forEach(t),q0=h(ma),jh=s(ma,"LI",{});var GM=a(jh);ml=s(GM,"A",{href:!0,rel:!0});var XM=a(ml);C0=i(XM,"Parallelization"),XM.forEach(t),GM.forEach(t),ma.forEach(t),j0=h(vt),Pt=s(vt,"DIV",{class:!0});var fa=a(Pt);y(fl.$$.fragment,fa),P0=h(fa),ln=s(fa,"P",{});var lc=a(ln);L0=i(lc,"The "),Ph=s(lc,"CODE",{});var YM=a(Ph);A0=i(YM,"FlaxRobertaPreTrainedModel"),YM.forEach(t),O0=i(lc," forward method, overrides the "),Lh=s(lc,"CODE",{});var ZM=a(Lh);N0=i(ZM,"__call__"),ZM.forEach(t),I0=i(lc," special method."),lc.forEach(t),D0=h(fa),y(Qs.$$.fragment,fa),S0=h(fa),y(Js.$$.fragment,fa),fa.forEach(t),vt.forEach(t),Lm=h(o),dn=s(o,"H2",{class:!0});var Zf=a(dn);Vs=s(Zf,"A",{id:!0,class:!0,href:!0});var e8=a(Vs);Ah=s(e8,"SPAN",{});var t8=a(Ah);y(gl.$$.fragment,t8),t8.forEach(t),e8.forEach(t),W0=h(Zf),Oh=s(Zf,"SPAN",{});var o8=a(Oh);B0=i(o8,"FlaxRobertaForTokenClassification"),o8.forEach(t),Zf.forEach(t),Am=h(o),We=s(o,"DIV",{class:!0});var Tt=a(We);y(_l.$$.fragment,Tt),U0=h(Tt),Nh=s(Tt,"P",{});var n8=a(Nh);H0=i(n8,`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),n8.forEach(t),Q0=h(Tt),bl=s(Tt,"P",{});var eg=a(bl);J0=i(eg,"This model inherits from "),Od=s(eg,"A",{href:!0});var s8=a(Od);V0=i(s8,"FlaxPreTrainedModel"),s8.forEach(t),K0=i(eg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),eg.forEach(t),G0=h(Tt),kl=s(Tt,"P",{});var tg=a(kl);X0=i(tg,"This model is also a Flax Linen "),vl=s(tg,"A",{href:!0,rel:!0});var a8=a(vl);Y0=i(a8,"flax.linen.Module"),a8.forEach(t),Z0=i(tg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),tg.forEach(t),e2=h(Tt),Ih=s(Tt,"P",{});var r8=a(Ih);t2=i(r8,"Finally, this model supports inherent JAX features such as:"),r8.forEach(t),o2=h(Tt),Kt=s(Tt,"UL",{});var ga=a(Kt);Dh=s(ga,"LI",{});var i8=a(Dh);Tl=s(i8,"A",{href:!0,rel:!0});var l8=a(Tl);n2=i(l8,"Just-In-Time (JIT) compilation"),l8.forEach(t),i8.forEach(t),s2=h(ga),Sh=s(ga,"LI",{});var d8=a(Sh);yl=s(d8,"A",{href:!0,rel:!0});var c8=a(yl);a2=i(c8,"Automatic Differentiation"),c8.forEach(t),d8.forEach(t),r2=h(ga),Wh=s(ga,"LI",{});var p8=a(Wh);wl=s(p8,"A",{href:!0,rel:!0});var h8=a(wl);i2=i(h8,"Vectorization"),h8.forEach(t),p8.forEach(t),l2=h(ga),Bh=s(ga,"LI",{});var u8=a(Bh);$l=s(u8,"A",{href:!0,rel:!0});var m8=a($l);d2=i(m8,"Parallelization"),m8.forEach(t),u8.forEach(t),ga.forEach(t),c2=h(Tt),Lt=s(Tt,"DIV",{class:!0});var _a=a(Lt);y(Fl.$$.fragment,_a),p2=h(_a),cn=s(_a,"P",{});var dc=a(cn);h2=i(dc,"The "),Uh=s(dc,"CODE",{});var f8=a(Uh);u2=i(f8,"FlaxRobertaPreTrainedModel"),f8.forEach(t),m2=i(dc," forward method, overrides the "),Hh=s(dc,"CODE",{});var g8=a(Hh);f2=i(g8,"__call__"),g8.forEach(t),g2=i(dc," special method."),dc.forEach(t),_2=h(_a),y(Ks.$$.fragment,_a),b2=h(_a),y(Gs.$$.fragment,_a),_a.forEach(t),Tt.forEach(t),Om=h(o),pn=s(o,"H2",{class:!0});var og=a(pn);Xs=s(og,"A",{id:!0,class:!0,href:!0});var _8=a(Xs);Qh=s(_8,"SPAN",{});var b8=a(Qh);y(xl.$$.fragment,b8),b8.forEach(t),_8.forEach(t),k2=h(og),Jh=s(og,"SPAN",{});var k8=a(Jh);v2=i(k8,"FlaxRobertaForQuestionAnswering"),k8.forEach(t),og.forEach(t),Nm=h(o),Be=s(o,"DIV",{class:!0});var yt=a(Be);y(Rl.$$.fragment,yt),T2=h(yt),hn=s(yt,"P",{});var cc=a(hn);y2=i(cc,`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Vh=s(cc,"CODE",{});var v8=a(Vh);w2=i(v8,"span start logits"),v8.forEach(t),$2=i(cc," and "),Kh=s(cc,"CODE",{});var T8=a(Kh);F2=i(T8,"span end logits"),T8.forEach(t),x2=i(cc,")."),cc.forEach(t),R2=h(yt),Ml=s(yt,"P",{});var ng=a(Ml);M2=i(ng,"This model inherits from "),Nd=s(ng,"A",{href:!0});var y8=a(Nd);E2=i(y8,"FlaxPreTrainedModel"),y8.forEach(t),z2=i(ng,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ng.forEach(t),q2=h(yt),El=s(yt,"P",{});var sg=a(El);C2=i(sg,"This model is also a Flax Linen "),zl=s(sg,"A",{href:!0,rel:!0});var w8=a(zl);j2=i(w8,"flax.linen.Module"),w8.forEach(t),P2=i(sg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),sg.forEach(t),L2=h(yt),Gh=s(yt,"P",{});var $8=a(Gh);A2=i($8,"Finally, this model supports inherent JAX features such as:"),$8.forEach(t),O2=h(yt),Gt=s(yt,"UL",{});var ba=a(Gt);Xh=s(ba,"LI",{});var F8=a(Xh);ql=s(F8,"A",{href:!0,rel:!0});var x8=a(ql);N2=i(x8,"Just-In-Time (JIT) compilation"),x8.forEach(t),F8.forEach(t),I2=h(ba),Yh=s(ba,"LI",{});var R8=a(Yh);Cl=s(R8,"A",{href:!0,rel:!0});var M8=a(Cl);D2=i(M8,"Automatic Differentiation"),M8.forEach(t),R8.forEach(t),S2=h(ba),Zh=s(ba,"LI",{});var E8=a(Zh);jl=s(E8,"A",{href:!0,rel:!0});var z8=a(jl);W2=i(z8,"Vectorization"),z8.forEach(t),E8.forEach(t),B2=h(ba),eu=s(ba,"LI",{});var q8=a(eu);Pl=s(q8,"A",{href:!0,rel:!0});var C8=a(Pl);U2=i(C8,"Parallelization"),C8.forEach(t),q8.forEach(t),ba.forEach(t),H2=h(yt),At=s(yt,"DIV",{class:!0});var ka=a(At);y(Ll.$$.fragment,ka),Q2=h(ka),un=s(ka,"P",{});var pc=a(un);J2=i(pc,"The "),tu=s(pc,"CODE",{});var j8=a(tu);V2=i(j8,"FlaxRobertaPreTrainedModel"),j8.forEach(t),K2=i(pc," forward method, overrides the "),ou=s(pc,"CODE",{});var P8=a(ou);G2=i(P8,"__call__"),P8.forEach(t),X2=i(pc," special method."),pc.forEach(t),Y2=h(ka),y(Ys.$$.fragment,ka),Z2=h(ka),y(Zs.$$.fragment,ka),ka.forEach(t),yt.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(GE)),f(u,"id","roberta"),f(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(u,"href","#roberta"),f(c,"class","relative group"),f(X,"id","overview"),f(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(X,"href","#overview"),f(z,"class","relative group"),f(ae,"href","https://arxiv.org/abs/1907.11692"),f(ae,"rel","nofollow"),f(pe,"href","/docs/transformers/pr_18081/en/model_doc/bert#transformers.BertModel"),f(xe,"href","camembert"),f(va,"href","https://huggingface.co/julien-c"),f(va,"rel","nofollow"),f(Ta,"href","https://github.com/pytorch/fairseq/tree/master/examples/roberta"),f(Ta,"rel","nofollow"),f(bn,"id","transformers.RobertaConfig"),f(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(bn,"href","#transformers.RobertaConfig"),f(go,"class","relative group"),f(Jl,"href","/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaModel"),f(Vl,"href","/docs/transformers/pr_18081/en/model_doc/roberta#transformers.TFRobertaModel"),f($a,"href","https://huggingface.co/roberta-base"),f($a,"rel","nofollow"),f(Kl,"href","/docs/transformers/pr_18081/en/main_classes/configuration#transformers.PretrainedConfig"),f(Gl,"href","/docs/transformers/pr_18081/en/main_classes/configuration#transformers.PretrainedConfig"),f(Xl,"href","/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaConfig"),f(Yl,"href","/docs/transformers/pr_18081/en/model_doc/bert#transformers.BertConfig"),f(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(vn,"id","transformers.RobertaTokenizer"),f(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(vn,"href","#transformers.RobertaTokenizer"),f(ko,"class","relative group"),f(Zl,"href","/docs/transformers/pr_18081/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(wn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(od,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fn,"id","transformers.RobertaTokenizerFast"),f(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Fn,"href","#transformers.RobertaTokenizerFast"),f(vo,"class","relative group"),f(nd,"href","/docs/transformers/pr_18081/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(sd,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Mn,"id","transformers.RobertaModel"),f(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Mn,"href","#transformers.RobertaModel"),f(To,"class","relative group"),f(ad,"href","/docs/transformers/pr_18081/en/main_classes/model#transformers.PreTrainedModel"),f(Ha,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ha,"rel","nofollow"),f(Ja,"href","https://arxiv.org/abs/1706.03762"),f(Ja,"rel","nofollow"),f(rd,"href","/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaModel"),f($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Cn,"id","transformers.RobertaForCausalLM"),f(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Cn,"href","#transformers.RobertaForCausalLM"),f(wo,"class","relative group"),f(id,"href","/docs/transformers/pr_18081/en/main_classes/model#transformers.PreTrainedModel"),f(er,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(er,"rel","nofollow"),f(ld,"href","/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaForCausalLM"),f(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ln,"id","transformers.RobertaForMaskedLM"),f(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ln,"href","#transformers.RobertaForMaskedLM"),f(Fo,"class","relative group"),f(dd,"href","/docs/transformers/pr_18081/en/main_classes/model#transformers.PreTrainedModel"),f(ir,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ir,"rel","nofollow"),f(cd,"href","/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaForMaskedLM"),f(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(In,"id","transformers.RobertaForSequenceClassification"),f(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(In,"href","#transformers.RobertaForSequenceClassification"),f(Ro,"class","relative group"),f(pd,"href","/docs/transformers/pr_18081/en/main_classes/model#transformers.PreTrainedModel"),f(ur,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ur,"rel","nofollow"),f(hd,"href","/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaForSequenceClassification"),f(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Hn,"id","transformers.RobertaForMultipleChoice"),f(Hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Hn,"href","#transformers.RobertaForMultipleChoice"),f(Eo,"class","relative group"),f(ud,"href","/docs/transformers/pr_18081/en/main_classes/model#transformers.PreTrainedModel"),f(kr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(kr,"rel","nofollow"),f(md,"href","/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaForMultipleChoice"),f(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Vn,"id","transformers.RobertaForTokenClassification"),f(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Vn,"href","#transformers.RobertaForTokenClassification"),f(qo,"class","relative group"),f(fd,"href","/docs/transformers/pr_18081/en/main_classes/model#transformers.PreTrainedModel"),f(Fr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Fr,"rel","nofollow"),f(gd,"href","/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaForTokenClassification"),f(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Yn,"id","transformers.RobertaForQuestionAnswering"),f(Yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Yn,"href","#transformers.RobertaForQuestionAnswering"),f(jo,"class","relative group"),f(_d,"href","/docs/transformers/pr_18081/en/main_classes/model#transformers.PreTrainedModel"),f(qr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(qr,"rel","nofollow"),f(bd,"href","/docs/transformers/pr_18081/en/model_doc/roberta#transformers.RobertaForQuestionAnswering"),f(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(os,"id","transformers.TFRobertaModel"),f(os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(os,"href","#transformers.TFRobertaModel"),f(Ao,"class","relative group"),f(kd,"href","/docs/transformers/pr_18081/en/main_classes/model#transformers.TFPreTrainedModel"),f(Or,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Or,"rel","nofollow"),f(vd,"href","/docs/transformers/pr_18081/en/model_doc/roberta#transformers.TFRobertaModel"),f(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rs,"id","transformers.TFRobertaForCausalLM"),f(rs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(rs,"href","#transformers.TFRobertaForCausalLM"),f(No,"class","relative group"),f(Td,"href","/docs/transformers/pr_18081/en/model_doc/roberta#transformers.TFRobertaForCausalLM"),f(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ds,"id","transformers.TFRobertaForMaskedLM"),f(ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ds,"href","#transformers.TFRobertaForMaskedLM"),f(So,"class","relative group"),f(yd,"href","/docs/transformers/pr_18081/en/main_classes/model#transformers.TFPreTrainedModel"),f(Jr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Jr,"rel","nofollow"),f(wd,"href","/docs/transformers/pr_18081/en/model_doc/roberta#transformers.TFRobertaForMaskedLM"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ms,"id","transformers.TFRobertaForSequenceClassification"),f(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ms,"href","#transformers.TFRobertaForSequenceClassification"),f(Bo,"class","relative group"),f($d,"href","/docs/transformers/pr_18081/en/main_classes/model#transformers.TFPreTrainedModel"),f(Zr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Zr,"rel","nofollow"),f(Fd,"href","/docs/transformers/pr_18081/en/model_doc/roberta#transformers.TFRobertaForSequenceClassification"),f(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ks,"id","transformers.TFRobertaForMultipleChoice"),f(ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ks,"href","#transformers.TFRobertaForMultipleChoice"),f(Ho,"class","relative group"),f(xd,"href","/docs/transformers/pr_18081/en/main_classes/model#transformers.TFPreTrainedModel"),f(ai,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ai,"rel","nofollow"),f(Rd,"href","/docs/transformers/pr_18081/en/model_doc/roberta#transformers.TFRobertaForMultipleChoice"),f(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ws,"id","transformers.TFRobertaForTokenClassification"),f(ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ws,"href","#transformers.TFRobertaForTokenClassification"),f(Jo,"class","relative group"),f(Md,"href","/docs/transformers/pr_18081/en/main_classes/model#transformers.TFPreTrainedModel"),f(pi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(pi,"rel","nofollow"),f(Ed,"href","/docs/transformers/pr_18081/en/model_doc/roberta#transformers.TFRobertaForTokenClassification"),f(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ms,"id","transformers.TFRobertaForQuestionAnswering"),f(Ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ms,"href","#transformers.TFRobertaForQuestionAnswering"),f(Ko,"class","relative group"),f(zd,"href","/docs/transformers/pr_18081/en/main_classes/model#transformers.TFPreTrainedModel"),f(_i,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(_i,"rel","nofollow"),f(qd,"href","/docs/transformers/pr_18081/en/model_doc/roberta#transformers.TFRobertaForQuestionAnswering"),f(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(js,"id","transformers.FlaxRobertaModel"),f(js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(js,"href","#transformers.FlaxRobertaModel"),f(Yo,"class","relative group"),f(Cd,"href","/docs/transformers/pr_18081/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(wi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(wi,"rel","nofollow"),f($i,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f($i,"rel","nofollow"),f(Fi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Fi,"rel","nofollow"),f(xi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(xi,"rel","nofollow"),f(Ri,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Ri,"rel","nofollow"),f(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(As,"id","transformers.FlaxRobertaForCausalLM"),f(As,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(As,"href","#transformers.FlaxRobertaForCausalLM"),f(en,"class","relative group"),f(jd,"href","/docs/transformers/pr_18081/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(ji,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(ji,"rel","nofollow"),f(Pi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Pi,"rel","nofollow"),f(Li,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Li,"rel","nofollow"),f(Ai,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ai,"rel","nofollow"),f(Oi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Oi,"rel","nofollow"),f(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Is,"id","transformers.FlaxRobertaForMaskedLM"),f(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Is,"href","#transformers.FlaxRobertaForMaskedLM"),f(on,"class","relative group"),f(Pd,"href","/docs/transformers/pr_18081/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Ui,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Ui,"rel","nofollow"),f(Hi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Hi,"rel","nofollow"),f(Qi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Qi,"rel","nofollow"),f(Ji,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ji,"rel","nofollow"),f(Vi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Vi,"rel","nofollow"),f(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ws,"id","transformers.FlaxRobertaForSequenceClassification"),f(Ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ws,"href","#transformers.FlaxRobertaForSequenceClassification"),f(sn,"class","relative group"),f(Ld,"href","/docs/transformers/pr_18081/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(el,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(el,"rel","nofollow"),f(tl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(tl,"rel","nofollow"),f(ol,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(ol,"rel","nofollow"),f(nl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(nl,"rel","nofollow"),f(sl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(sl,"rel","nofollow"),f(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Hs,"id","transformers.FlaxRobertaForMultipleChoice"),f(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Hs,"href","#transformers.FlaxRobertaForMultipleChoice"),f(rn,"class","relative group"),f(Ad,"href","/docs/transformers/pr_18081/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(cl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(cl,"rel","nofollow"),f(pl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(pl,"rel","nofollow"),f(hl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(hl,"rel","nofollow"),f(ul,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(ul,"rel","nofollow"),f(ml,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(ml,"rel","nofollow"),f(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Vs,"id","transformers.FlaxRobertaForTokenClassification"),f(Vs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Vs,"href","#transformers.FlaxRobertaForTokenClassification"),f(dn,"class","relative group"),f(Od,"href","/docs/transformers/pr_18081/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(vl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(vl,"rel","nofollow"),f(Tl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Tl,"rel","nofollow"),f(yl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(yl,"rel","nofollow"),f(wl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(wl,"rel","nofollow"),f($l,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f($l,"rel","nofollow"),f(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Xs,"id","transformers.FlaxRobertaForQuestionAnswering"),f(Xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Xs,"href","#transformers.FlaxRobertaForQuestionAnswering"),f(pn,"class","relative group"),f(Nd,"href","/docs/transformers/pr_18081/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(zl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(zl,"rel","nofollow"),f(ql,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(ql,"rel","nofollow"),f(Cl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Cl,"rel","nofollow"),f(jl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(jl,"rel","nofollow"),f(Pl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Pl,"rel","nofollow"),f(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,d),k(o,g,b),k(o,c,b),e(c,u),e(u,_),w(l,_,null),e(c,m),e(c,M),e(M,te),k(o,I,b),k(o,z,b),e(z,X),e(X,D),w(se,D,null),e(z,be),e(z,S),e(S,ke),k(o,fe,b),k(o,K,b),e(K,A),e(K,ae),e(ae,oe),e(K,q),k(o,j,b),k(o,ie,b),e(ie,U),k(o,ge,b),k(o,le,b),e(le,H),k(o,_e,b),k(o,de,b),e(de,C),e(C,ve),k(o,W,b),k(o,ce,b),e(ce,Te),k(o,B,b),k(o,G,b),e(G,re),e(re,O),e(re,pe),e(pe,Q),e(re,ye),e(G,v),e(G,E),e(E,ne),e(G,Ee),e(G,ue),e(ue,N),e(ue,Re),e(Re,ze),e(ue,qe),e(ue,L),e(L,J),e(ue,Ce),e(ue,Me),e(Me,V),e(ue,je),e(G,Pe),e(G,he),e(he,xe),e(xe,ag),e(he,rg),k(o,Uu,b),k(o,eo,b),e(eo,ig),e(eo,va),e(va,lg),e(eo,dg),e(eo,Ta),e(Ta,cg),e(eo,pg),k(o,Hu,b),k(o,go,b),e(go,bn),e(bn,hc),w(ya,hc,null),e(go,hg),e(go,uc),e(uc,ug),k(o,Qu,b),k(o,et,b),w(wa,et,null),e(et,mg),e(et,Bt),e(Bt,fg),e(Bt,Jl),e(Jl,gg),e(Bt,_g),e(Bt,Vl),e(Vl,bg),e(Bt,kg),e(Bt,$a),e($a,vg),e(Bt,Tg),e(et,yg),e(et,_o),e(_o,wg),e(_o,Kl),e(Kl,$g),e(_o,Fg),e(_o,Gl),e(Gl,xg),e(_o,Rg),e(et,Mg),e(et,bo),e(bo,Eg),e(bo,Xl),e(Xl,zg),e(bo,qg),e(bo,Yl),e(Yl,Cg),e(bo,jg),e(et,Pg),w(kn,et,null),k(o,Ju,b),k(o,ko,b),e(ko,vn),e(vn,mc),w(Fa,mc,null),e(ko,Lg),e(ko,fc),e(fc,Ag),k(o,Vu,b),k(o,we,b),w(xa,we,null),e(we,Og),e(we,gc),e(gc,Ng),e(we,Ig),e(we,_c),e(_c,Dg),e(we,Sg),w(Tn,we,null),e(we,Wg),e(we,Ra),e(Ra,Bg),e(Ra,bc),e(bc,Ug),e(Ra,Hg),e(we,Qg),w(yn,we,null),e(we,Jg),e(we,Ma),e(Ma,Vg),e(Ma,Zl),e(Zl,Kg),e(Ma,Gg),e(we,Xg),e(we,to),w(Ea,to,null),e(to,Yg),e(to,kc),e(kc,Zg),e(to,e_),e(to,za),e(za,ed),e(ed,t_),e(ed,vc),e(vc,o_),e(za,n_),e(za,td),e(td,s_),e(td,Tc),e(Tc,a_),e(we,r_),e(we,wn),w(qa,wn,null),e(wn,i_),e(wn,Ca),e(Ca,l_),e(Ca,yc),e(yc,d_),e(Ca,c_),e(we,p_),e(we,$n),w(ja,$n,null),e($n,h_),e($n,wc),e(wc,u_),e(we,m_),e(we,od),w(Pa,od,null),k(o,Ku,b),k(o,vo,b),e(vo,Fn),e(Fn,$c),w(La,$c,null),e(vo,f_),e(vo,Fc),e(Fc,g_),k(o,Gu,b),k(o,Le,b),w(Aa,Le,null),e(Le,__),e(Le,Oa),e(Oa,b_),e(Oa,xc),e(xc,k_),e(Oa,v_),e(Le,T_),e(Le,Rc),e(Rc,y_),e(Le,w_),w(xn,Le,null),e(Le,$_),e(Le,Na),e(Na,F_),e(Na,Mc),e(Mc,x_),e(Na,R_),e(Le,M_),w(Rn,Le,null),e(Le,E_),e(Le,Ia),e(Ia,z_),e(Ia,nd),e(nd,q_),e(Ia,C_),e(Le,j_),e(Le,sd),w(Da,sd,null),k(o,Xu,b),k(o,To,b),e(To,Mn),e(Mn,Ec),w(Sa,Ec,null),e(To,P_),e(To,zc),e(zc,L_),k(o,Yu,b),k(o,Ae,b),w(Wa,Ae,null),e(Ae,A_),e(Ae,qc),e(qc,O_),e(Ae,N_),e(Ae,Ba),e(Ba,I_),e(Ba,ad),e(ad,D_),e(Ba,S_),e(Ae,W_),e(Ae,Ua),e(Ua,B_),e(Ua,Ha),e(Ha,U_),e(Ua,H_),e(Ae,Q_),e(Ae,Qa),e(Qa,J_),e(Qa,Cc),e(Cc,V_),e(Qa,K_),e(Ae,G_),e(Ae,He),e(He,X_),e(He,jc),e(jc,Y_),e(He,Z_),e(He,Pc),e(Pc,eb),e(He,tb),e(He,Lc),e(Lc,ob),e(He,nb),e(He,Ac),e(Ac,sb),e(He,ab),e(He,Oc),e(Oc,rb),e(He,ib),e(He,Nc),e(Nc,lb),e(He,db),e(Ae,cb),e(Ae,En),e(En,pb),e(En,Ic),e(Ic,hb),e(En,ub),e(En,Ja),e(Ja,mb),e(Ae,fb),e(Ae,$t),w(Va,$t,null),e($t,gb),e($t,yo),e(yo,_b),e(yo,rd),e(rd,bb),e(yo,kb),e(yo,Dc),e(Dc,vb),e(yo,Tb),e($t,yb),w(zn,$t,null),e($t,wb),w(qn,$t,null),k(o,Zu,b),k(o,wo,b),e(wo,Cn),e(Cn,Sc),w(Ka,Sc,null),e(wo,$b),e(wo,Wc),e(Wc,Fb),k(o,em,b),k(o,tt,b),w(Ga,tt,null),e(tt,xb),e(tt,Xa),e(Xa,Rb),e(Xa,Bc),e(Bc,Mb),e(Xa,Eb),e(tt,zb),e(tt,Ya),e(Ya,qb),e(Ya,id),e(id,Cb),e(Ya,jb),e(tt,Pb),e(tt,Za),e(Za,Lb),e(Za,er),e(er,Ab),e(Za,Ob),e(tt,Nb),e(tt,Ft),w(tr,Ft,null),e(Ft,Ib),e(Ft,$o),e($o,Db),e($o,ld),e(ld,Sb),e($o,Wb),e($o,Uc),e(Uc,Bb),e($o,Ub),e(Ft,Hb),w(jn,Ft,null),e(Ft,Qb),w(Pn,Ft,null),k(o,tm,b),k(o,Fo,b),e(Fo,Ln),e(Ln,Hc),w(or,Hc,null),e(Fo,Jb),e(Fo,Qc),e(Qc,Vb),k(o,om,b),k(o,ot,b),w(nr,ot,null),e(ot,Kb),e(ot,sr),e(sr,Gb),e(sr,Jc),e(Jc,Xb),e(sr,Yb),e(ot,Zb),e(ot,ar),e(ar,ek),e(ar,dd),e(dd,tk),e(ar,ok),e(ot,nk),e(ot,rr),e(rr,sk),e(rr,ir),e(ir,ak),e(rr,rk),e(ot,ik),e(ot,it),w(lr,it,null),e(it,lk),e(it,xo),e(xo,dk),e(xo,cd),e(cd,ck),e(xo,pk),e(xo,Vc),e(Vc,hk),e(xo,uk),e(it,mk),w(An,it,null),e(it,fk),w(On,it,null),e(it,gk),w(Nn,it,null),k(o,nm,b),k(o,Ro,b),e(Ro,In),e(In,Kc),w(dr,Kc,null),e(Ro,_k),e(Ro,Gc),e(Gc,bk),k(o,sm,b),k(o,nt,b),w(cr,nt,null),e(nt,kk),e(nt,Xc),e(Xc,vk),e(nt,Tk),e(nt,pr),e(pr,yk),e(pr,pd),e(pd,wk),e(pr,$k),e(nt,Fk),e(nt,hr),e(hr,xk),e(hr,ur),e(ur,Rk),e(hr,Mk),e(nt,Ek),e(nt,Ue),w(mr,Ue,null),e(Ue,zk),e(Ue,Mo),e(Mo,qk),e(Mo,hd),e(hd,Ck),e(Mo,jk),e(Mo,Yc),e(Yc,Pk),e(Mo,Lk),e(Ue,Ak),w(Dn,Ue,null),e(Ue,Ok),w(Sn,Ue,null),e(Ue,Nk),w(Wn,Ue,null),e(Ue,Ik),w(Bn,Ue,null),e(Ue,Dk),w(Un,Ue,null),k(o,am,b),k(o,Eo,b),e(Eo,Hn),e(Hn,Zc),w(fr,Zc,null),e(Eo,Sk),e(Eo,ep),e(ep,Wk),k(o,rm,b),k(o,st,b),w(gr,st,null),e(st,Bk),e(st,tp),e(tp,Uk),e(st,Hk),e(st,_r),e(_r,Qk),e(_r,ud),e(ud,Jk),e(_r,Vk),e(st,Kk),e(st,br),e(br,Gk),e(br,kr),e(kr,Xk),e(br,Yk),e(st,Zk),e(st,xt),w(vr,xt,null),e(xt,e1),e(xt,zo),e(zo,t1),e(zo,md),e(md,o1),e(zo,n1),e(zo,op),e(op,s1),e(zo,a1),e(xt,r1),w(Qn,xt,null),e(xt,i1),w(Jn,xt,null),k(o,im,b),k(o,qo,b),e(qo,Vn),e(Vn,np),w(Tr,np,null),e(qo,l1),e(qo,sp),e(sp,d1),k(o,lm,b),k(o,at,b),w(yr,at,null),e(at,c1),e(at,ap),e(ap,p1),e(at,h1),e(at,wr),e(wr,u1),e(wr,fd),e(fd,m1),e(wr,f1),e(at,g1),e(at,$r),e($r,_1),e($r,Fr),e(Fr,b1),e($r,k1),e(at,v1),e(at,lt),w(xr,lt,null),e(lt,T1),e(lt,Co),e(Co,y1),e(Co,gd),e(gd,w1),e(Co,$1),e(Co,rp),e(rp,F1),e(Co,x1),e(lt,R1),w(Kn,lt,null),e(lt,M1),w(Gn,lt,null),e(lt,E1),w(Xn,lt,null),k(o,dm,b),k(o,jo,b),e(jo,Yn),e(Yn,ip),w(Rr,ip,null),e(jo,z1),e(jo,lp),e(lp,q1),k(o,cm,b),k(o,rt,b),w(Mr,rt,null),e(rt,C1),e(rt,Po),e(Po,j1),e(Po,dp),e(dp,P1),e(Po,L1),e(Po,cp),e(cp,A1),e(Po,O1),e(rt,N1),e(rt,Er),e(Er,I1),e(Er,_d),e(_d,D1),e(Er,S1),e(rt,W1),e(rt,zr),e(zr,B1),e(zr,qr),e(qr,U1),e(zr,H1),e(rt,Q1),e(rt,dt),w(Cr,dt,null),e(dt,J1),e(dt,Lo),e(Lo,V1),e(Lo,bd),e(bd,K1),e(Lo,G1),e(Lo,pp),e(pp,X1),e(Lo,Y1),e(dt,Z1),w(Zn,dt,null),e(dt,ev),w(es,dt,null),e(dt,tv),w(ts,dt,null),k(o,pm,b),k(o,Ao,b),e(Ao,os),e(os,hp),w(jr,hp,null),e(Ao,ov),e(Ao,up),e(up,nv),k(o,hm,b),k(o,Qe,b),w(Pr,Qe,null),e(Qe,sv),e(Qe,mp),e(mp,av),e(Qe,rv),e(Qe,Lr),e(Lr,iv),e(Lr,kd),e(kd,lv),e(Lr,dv),e(Qe,cv),e(Qe,Ar),e(Ar,pv),e(Ar,Or),e(Or,hv),e(Ar,uv),e(Qe,mv),w(ns,Qe,null),e(Qe,fv),e(Qe,Rt),w(Nr,Rt,null),e(Rt,gv),e(Rt,Oo),e(Oo,_v),e(Oo,vd),e(vd,bv),e(Oo,kv),e(Oo,fp),e(fp,vv),e(Oo,Tv),e(Rt,yv),w(ss,Rt,null),e(Rt,wv),w(as,Rt,null),k(o,um,b),k(o,No,b),e(No,rs),e(rs,gp),w(Ir,gp,null),e(No,$v),e(No,_p),e(_p,Fv),k(o,mm,b),k(o,Io,b),w(Dr,Io,null),e(Io,xv),e(Io,Mt),w(Sr,Mt,null),e(Mt,Rv),e(Mt,Do),e(Do,Mv),e(Do,Td),e(Td,Ev),e(Do,zv),e(Do,bp),e(bp,qv),e(Do,Cv),e(Mt,jv),w(is,Mt,null),e(Mt,Pv),w(ls,Mt,null),k(o,fm,b),k(o,So,b),e(So,ds),e(ds,kp),w(Wr,kp,null),e(So,Lv),e(So,vp),e(vp,Av),k(o,gm,b),k(o,Je,b),w(Br,Je,null),e(Je,Ov),e(Je,Ur),e(Ur,Nv),e(Ur,Tp),e(Tp,Iv),e(Ur,Dv),e(Je,Sv),e(Je,Hr),e(Hr,Wv),e(Hr,yd),e(yd,Bv),e(Hr,Uv),e(Je,Hv),e(Je,Qr),e(Qr,Qv),e(Qr,Jr),e(Jr,Jv),e(Qr,Vv),e(Je,Kv),w(cs,Je,null),e(Je,Gv),e(Je,ct),w(Vr,ct,null),e(ct,Xv),e(ct,Wo),e(Wo,Yv),e(Wo,wd),e(wd,Zv),e(Wo,eT),e(Wo,yp),e(yp,tT),e(Wo,oT),e(ct,nT),w(ps,ct,null),e(ct,sT),w(hs,ct,null),e(ct,aT),w(us,ct,null),k(o,_m,b),k(o,Bo,b),e(Bo,ms),e(ms,wp),w(Kr,wp,null),e(Bo,rT),e(Bo,$p),e($p,iT),k(o,bm,b),k(o,Ve,b),w(Gr,Ve,null),e(Ve,lT),e(Ve,Fp),e(Fp,dT),e(Ve,cT),e(Ve,Xr),e(Xr,pT),e(Xr,$d),e($d,hT),e(Xr,uT),e(Ve,mT),e(Ve,Yr),e(Yr,fT),e(Yr,Zr),e(Zr,gT),e(Yr,_T),e(Ve,bT),w(fs,Ve,null),e(Ve,kT),e(Ve,pt),w(ei,pt,null),e(pt,vT),e(pt,Uo),e(Uo,TT),e(Uo,Fd),e(Fd,yT),e(Uo,wT),e(Uo,xp),e(xp,$T),e(Uo,FT),e(pt,xT),w(gs,pt,null),e(pt,RT),w(_s,pt,null),e(pt,MT),w(bs,pt,null),k(o,km,b),k(o,Ho,b),e(Ho,ks),e(ks,Rp),w(ti,Rp,null),e(Ho,ET),e(Ho,Mp),e(Mp,zT),k(o,vm,b),k(o,Ke,b),w(oi,Ke,null),e(Ke,qT),e(Ke,Ep),e(Ep,CT),e(Ke,jT),e(Ke,ni),e(ni,PT),e(ni,xd),e(xd,LT),e(ni,AT),e(Ke,OT),e(Ke,si),e(si,NT),e(si,ai),e(ai,IT),e(si,DT),e(Ke,ST),w(vs,Ke,null),e(Ke,WT),e(Ke,Et),w(ri,Et,null),e(Et,BT),e(Et,Qo),e(Qo,UT),e(Qo,Rd),e(Rd,HT),e(Qo,QT),e(Qo,zp),e(zp,JT),e(Qo,VT),e(Et,KT),w(Ts,Et,null),e(Et,GT),w(ys,Et,null),k(o,Tm,b),k(o,Jo,b),e(Jo,ws),e(ws,qp),w(ii,qp,null),e(Jo,XT),e(Jo,Cp),e(Cp,YT),k(o,ym,b),k(o,Ge,b),w(li,Ge,null),e(Ge,ZT),e(Ge,jp),e(jp,ey),e(Ge,ty),e(Ge,di),e(di,oy),e(di,Md),e(Md,ny),e(di,sy),e(Ge,ay),e(Ge,ci),e(ci,ry),e(ci,pi),e(pi,iy),e(ci,ly),e(Ge,dy),w($s,Ge,null),e(Ge,cy),e(Ge,ht),w(hi,ht,null),e(ht,py),e(ht,Vo),e(Vo,hy),e(Vo,Ed),e(Ed,uy),e(Vo,my),e(Vo,Pp),e(Pp,fy),e(Vo,gy),e(ht,_y),w(Fs,ht,null),e(ht,by),w(xs,ht,null),e(ht,ky),w(Rs,ht,null),k(o,wm,b),k(o,Ko,b),e(Ko,Ms),e(Ms,Lp),w(ui,Lp,null),e(Ko,vy),e(Ko,Ap),e(Ap,Ty),k(o,$m,b),k(o,Xe,b),w(mi,Xe,null),e(Xe,yy),e(Xe,Go),e(Go,wy),e(Go,Op),e(Op,$y),e(Go,Fy),e(Go,Np),e(Np,xy),e(Go,Ry),e(Xe,My),e(Xe,fi),e(fi,Ey),e(fi,zd),e(zd,zy),e(fi,qy),e(Xe,Cy),e(Xe,gi),e(gi,jy),e(gi,_i),e(_i,Py),e(gi,Ly),e(Xe,Ay),w(Es,Xe,null),e(Xe,Oy),e(Xe,ut),w(bi,ut,null),e(ut,Ny),e(ut,Xo),e(Xo,Iy),e(Xo,qd),e(qd,Dy),e(Xo,Sy),e(Xo,Ip),e(Ip,Wy),e(Xo,By),e(ut,Uy),w(zs,ut,null),e(ut,Hy),w(qs,ut,null),e(ut,Qy),w(Cs,ut,null),k(o,Fm,b),k(o,Yo,b),e(Yo,js),e(js,Dp),w(ki,Dp,null),e(Yo,Jy),e(Yo,Sp),e(Sp,Vy),k(o,xm,b),k(o,Oe,b),w(vi,Oe,null),e(Oe,Ky),e(Oe,Wp),e(Wp,Gy),e(Oe,Xy),e(Oe,Ti),e(Ti,Yy),e(Ti,Cd),e(Cd,Zy),e(Ti,ew),e(Oe,tw),e(Oe,yi),e(yi,ow),e(yi,wi),e(wi,nw),e(yi,sw),e(Oe,aw),e(Oe,Bp),e(Bp,rw),e(Oe,iw),e(Oe,Ut),e(Ut,Up),e(Up,$i),e($i,lw),e(Ut,dw),e(Ut,Hp),e(Hp,Fi),e(Fi,cw),e(Ut,pw),e(Ut,Qp),e(Qp,xi),e(xi,hw),e(Ut,uw),e(Ut,Jp),e(Jp,Ri),e(Ri,mw),e(Oe,fw),e(Oe,zt),w(Mi,zt,null),e(zt,gw),e(zt,Zo),e(Zo,_w),e(Zo,Vp),e(Vp,bw),e(Zo,kw),e(Zo,Kp),e(Kp,vw),e(Zo,Tw),e(zt,yw),w(Ps,zt,null),e(zt,ww),w(Ls,zt,null),k(o,Rm,b),k(o,en,b),e(en,As),e(As,Gp),w(Ei,Gp,null),e(en,$w),e(en,Xp),e(Xp,Fw),k(o,Mm,b),k(o,Ne,b),w(zi,Ne,null),e(Ne,xw),e(Ne,Yp),e(Yp,Rw),e(Ne,Mw),e(Ne,qi),e(qi,Ew),e(qi,jd),e(jd,zw),e(qi,qw),e(Ne,Cw),e(Ne,Ci),e(Ci,jw),e(Ci,ji),e(ji,Pw),e(Ci,Lw),e(Ne,Aw),e(Ne,Zp),e(Zp,Ow),e(Ne,Nw),e(Ne,Ht),e(Ht,eh),e(eh,Pi),e(Pi,Iw),e(Ht,Dw),e(Ht,th),e(th,Li),e(Li,Sw),e(Ht,Ww),e(Ht,oh),e(oh,Ai),e(Ai,Bw),e(Ht,Uw),e(Ht,nh),e(nh,Oi),e(Oi,Hw),e(Ne,Qw),e(Ne,qt),w(Ni,qt,null),e(qt,Jw),e(qt,tn),e(tn,Vw),e(tn,sh),e(sh,Kw),e(tn,Gw),e(tn,ah),e(ah,Xw),e(tn,Yw),e(qt,Zw),w(Os,qt,null),e(qt,e$),w(Ns,qt,null),k(o,Em,b),k(o,on,b),e(on,Is),e(Is,rh),w(Ii,rh,null),e(on,t$),e(on,ih),e(ih,o$),k(o,zm,b),k(o,Ie,b),w(Di,Ie,null),e(Ie,n$),e(Ie,Si),e(Si,s$),e(Si,lh),e(lh,a$),e(Si,r$),e(Ie,i$),e(Ie,Wi),e(Wi,l$),e(Wi,Pd),e(Pd,d$),e(Wi,c$),e(Ie,p$),e(Ie,Bi),e(Bi,h$),e(Bi,Ui),e(Ui,u$),e(Bi,m$),e(Ie,f$),e(Ie,dh),e(dh,g$),e(Ie,_$),e(Ie,Qt),e(Qt,ch),e(ch,Hi),e(Hi,b$),e(Qt,k$),e(Qt,ph),e(ph,Qi),e(Qi,v$),e(Qt,T$),e(Qt,hh),e(hh,Ji),e(Ji,y$),e(Qt,w$),e(Qt,uh),e(uh,Vi),e(Vi,$$),e(Ie,F$),e(Ie,Ct),w(Ki,Ct,null),e(Ct,x$),e(Ct,nn),e(nn,R$),e(nn,mh),e(mh,M$),e(nn,E$),e(nn,fh),e(fh,z$),e(nn,q$),e(Ct,C$),w(Ds,Ct,null),e(Ct,j$),w(Ss,Ct,null),k(o,qm,b),k(o,sn,b),e(sn,Ws),e(Ws,gh),w(Gi,gh,null),e(sn,P$),e(sn,_h),e(_h,L$),k(o,Cm,b),k(o,De,b),w(Xi,De,null),e(De,A$),e(De,bh),e(bh,O$),e(De,N$),e(De,Yi),e(Yi,I$),e(Yi,Ld),e(Ld,D$),e(Yi,S$),e(De,W$),e(De,Zi),e(Zi,B$),e(Zi,el),e(el,U$),e(Zi,H$),e(De,Q$),e(De,kh),e(kh,J$),e(De,V$),e(De,Jt),e(Jt,vh),e(vh,tl),e(tl,K$),e(Jt,G$),e(Jt,Th),e(Th,ol),e(ol,X$),e(Jt,Y$),e(Jt,yh),e(yh,nl),e(nl,Z$),e(Jt,e0),e(Jt,wh),e(wh,sl),e(sl,t0),e(De,o0),e(De,jt),w(al,jt,null),e(jt,n0),e(jt,an),e(an,s0),e(an,$h),e($h,a0),e(an,r0),e(an,Fh),e(Fh,i0),e(an,l0),e(jt,d0),w(Bs,jt,null),e(jt,c0),w(Us,jt,null),k(o,jm,b),k(o,rn,b),e(rn,Hs),e(Hs,xh),w(rl,xh,null),e(rn,p0),e(rn,Rh),e(Rh,h0),k(o,Pm,b),k(o,Se,b),w(il,Se,null),e(Se,u0),e(Se,Mh),e(Mh,m0),e(Se,f0),e(Se,ll),e(ll,g0),e(ll,Ad),e(Ad,_0),e(ll,b0),e(Se,k0),e(Se,dl),e(dl,v0),e(dl,cl),e(cl,T0),e(dl,y0),e(Se,w0),e(Se,Eh),e(Eh,$0),e(Se,F0),e(Se,Vt),e(Vt,zh),e(zh,pl),e(pl,x0),e(Vt,R0),e(Vt,qh),e(qh,hl),e(hl,M0),e(Vt,E0),e(Vt,Ch),e(Ch,ul),e(ul,z0),e(Vt,q0),e(Vt,jh),e(jh,ml),e(ml,C0),e(Se,j0),e(Se,Pt),w(fl,Pt,null),e(Pt,P0),e(Pt,ln),e(ln,L0),e(ln,Ph),e(Ph,A0),e(ln,O0),e(ln,Lh),e(Lh,N0),e(ln,I0),e(Pt,D0),w(Qs,Pt,null),e(Pt,S0),w(Js,Pt,null),k(o,Lm,b),k(o,dn,b),e(dn,Vs),e(Vs,Ah),w(gl,Ah,null),e(dn,W0),e(dn,Oh),e(Oh,B0),k(o,Am,b),k(o,We,b),w(_l,We,null),e(We,U0),e(We,Nh),e(Nh,H0),e(We,Q0),e(We,bl),e(bl,J0),e(bl,Od),e(Od,V0),e(bl,K0),e(We,G0),e(We,kl),e(kl,X0),e(kl,vl),e(vl,Y0),e(kl,Z0),e(We,e2),e(We,Ih),e(Ih,t2),e(We,o2),e(We,Kt),e(Kt,Dh),e(Dh,Tl),e(Tl,n2),e(Kt,s2),e(Kt,Sh),e(Sh,yl),e(yl,a2),e(Kt,r2),e(Kt,Wh),e(Wh,wl),e(wl,i2),e(Kt,l2),e(Kt,Bh),e(Bh,$l),e($l,d2),e(We,c2),e(We,Lt),w(Fl,Lt,null),e(Lt,p2),e(Lt,cn),e(cn,h2),e(cn,Uh),e(Uh,u2),e(cn,m2),e(cn,Hh),e(Hh,f2),e(cn,g2),e(Lt,_2),w(Ks,Lt,null),e(Lt,b2),w(Gs,Lt,null),k(o,Om,b),k(o,pn,b),e(pn,Xs),e(Xs,Qh),w(xl,Qh,null),e(pn,k2),e(pn,Jh),e(Jh,v2),k(o,Nm,b),k(o,Be,b),w(Rl,Be,null),e(Be,T2),e(Be,hn),e(hn,y2),e(hn,Vh),e(Vh,w2),e(hn,$2),e(hn,Kh),e(Kh,F2),e(hn,x2),e(Be,R2),e(Be,Ml),e(Ml,M2),e(Ml,Nd),e(Nd,E2),e(Ml,z2),e(Be,q2),e(Be,El),e(El,C2),e(El,zl),e(zl,j2),e(El,P2),e(Be,L2),e(Be,Gh),e(Gh,A2),e(Be,O2),e(Be,Gt),e(Gt,Xh),e(Xh,ql),e(ql,N2),e(Gt,I2),e(Gt,Yh),e(Yh,Cl),e(Cl,D2),e(Gt,S2),e(Gt,Zh),e(Zh,jl),e(jl,W2),e(Gt,B2),e(Gt,eu),e(eu,Pl),e(Pl,U2),e(Be,H2),e(Be,At),w(Ll,At,null),e(At,Q2),e(At,un),e(un,J2),e(un,tu),e(tu,V2),e(un,K2),e(un,ou),e(ou,G2),e(un,X2),e(At,Y2),w(Ys,At,null),e(At,Z2),w(Zs,At,null),Im=!0},p(o,[b]){const Al={};b&2&&(Al.$$scope={dirty:b,ctx:o}),kn.$set(Al);const nu={};b&2&&(nu.$$scope={dirty:b,ctx:o}),Tn.$set(nu);const su={};b&2&&(su.$$scope={dirty:b,ctx:o}),yn.$set(su);const au={};b&2&&(au.$$scope={dirty:b,ctx:o}),xn.$set(au);const Ol={};b&2&&(Ol.$$scope={dirty:b,ctx:o}),Rn.$set(Ol);const ru={};b&2&&(ru.$$scope={dirty:b,ctx:o}),zn.$set(ru);const iu={};b&2&&(iu.$$scope={dirty:b,ctx:o}),qn.$set(iu);const lu={};b&2&&(lu.$$scope={dirty:b,ctx:o}),jn.$set(lu);const Nl={};b&2&&(Nl.$$scope={dirty:b,ctx:o}),Pn.$set(Nl);const du={};b&2&&(du.$$scope={dirty:b,ctx:o}),An.$set(du);const cu={};b&2&&(cu.$$scope={dirty:b,ctx:o}),On.$set(cu);const pu={};b&2&&(pu.$$scope={dirty:b,ctx:o}),Nn.$set(pu);const hu={};b&2&&(hu.$$scope={dirty:b,ctx:o}),Dn.$set(hu);const uu={};b&2&&(uu.$$scope={dirty:b,ctx:o}),Sn.$set(uu);const mu={};b&2&&(mu.$$scope={dirty:b,ctx:o}),Wn.$set(mu);const Xt={};b&2&&(Xt.$$scope={dirty:b,ctx:o}),Bn.$set(Xt);const Il={};b&2&&(Il.$$scope={dirty:b,ctx:o}),Un.$set(Il);const fu={};b&2&&(fu.$$scope={dirty:b,ctx:o}),Qn.$set(fu);const gu={};b&2&&(gu.$$scope={dirty:b,ctx:o}),Jn.$set(gu);const Yt={};b&2&&(Yt.$$scope={dirty:b,ctx:o}),Kn.$set(Yt);const _u={};b&2&&(_u.$$scope={dirty:b,ctx:o}),Gn.$set(_u);const bu={};b&2&&(bu.$$scope={dirty:b,ctx:o}),Xn.$set(bu);const ku={};b&2&&(ku.$$scope={dirty:b,ctx:o}),Zn.$set(ku);const Id={};b&2&&(Id.$$scope={dirty:b,ctx:o}),es.$set(Id);const vu={};b&2&&(vu.$$scope={dirty:b,ctx:o}),ts.$set(vu);const mn={};b&2&&(mn.$$scope={dirty:b,ctx:o}),ns.$set(mn);const Tu={};b&2&&(Tu.$$scope={dirty:b,ctx:o}),ss.$set(Tu);const yu={};b&2&&(yu.$$scope={dirty:b,ctx:o}),as.$set(yu);const Dl={};b&2&&(Dl.$$scope={dirty:b,ctx:o}),is.$set(Dl);const wu={};b&2&&(wu.$$scope={dirty:b,ctx:o}),ls.$set(wu);const $u={};b&2&&($u.$$scope={dirty:b,ctx:o}),cs.$set($u);const Fu={};b&2&&(Fu.$$scope={dirty:b,ctx:o}),ps.$set(Fu);const wt={};b&2&&(wt.$$scope={dirty:b,ctx:o}),hs.$set(wt);const Zt={};b&2&&(Zt.$$scope={dirty:b,ctx:o}),us.$set(Zt);const xu={};b&2&&(xu.$$scope={dirty:b,ctx:o}),fs.$set(xu);const Ru={};b&2&&(Ru.$$scope={dirty:b,ctx:o}),gs.$set(Ru);const Mu={};b&2&&(Mu.$$scope={dirty:b,ctx:o}),_s.$set(Mu);const fn={};b&2&&(fn.$$scope={dirty:b,ctx:o}),bs.$set(fn);const Eu={};b&2&&(Eu.$$scope={dirty:b,ctx:o}),vs.$set(Eu);const zu={};b&2&&(zu.$$scope={dirty:b,ctx:o}),Ts.$set(zu);const gn={};b&2&&(gn.$$scope={dirty:b,ctx:o}),ys.$set(gn);const qu={};b&2&&(qu.$$scope={dirty:b,ctx:o}),$s.$set(qu);const Cu={};b&2&&(Cu.$$scope={dirty:b,ctx:o}),Fs.$set(Cu);const Sl={};b&2&&(Sl.$$scope={dirty:b,ctx:o}),xs.$set(Sl);const ju={};b&2&&(ju.$$scope={dirty:b,ctx:o}),Rs.$set(ju);const Pu={};b&2&&(Pu.$$scope={dirty:b,ctx:o}),Es.$set(Pu);const Lu={};b&2&&(Lu.$$scope={dirty:b,ctx:o}),zs.$set(Lu);const Fe={};b&2&&(Fe.$$scope={dirty:b,ctx:o}),qs.$set(Fe);const Au={};b&2&&(Au.$$scope={dirty:b,ctx:o}),Cs.$set(Au);const Ou={};b&2&&(Ou.$$scope={dirty:b,ctx:o}),Ps.$set(Ou);const Wl={};b&2&&(Wl.$$scope={dirty:b,ctx:o}),Ls.$set(Wl);const Nu={};b&2&&(Nu.$$scope={dirty:b,ctx:o}),Os.$set(Nu);const Bl={};b&2&&(Bl.$$scope={dirty:b,ctx:o}),Ns.$set(Bl);const Iu={};b&2&&(Iu.$$scope={dirty:b,ctx:o}),Ds.$set(Iu);const _n={};b&2&&(_n.$$scope={dirty:b,ctx:o}),Ss.$set(_n);const Du={};b&2&&(Du.$$scope={dirty:b,ctx:o}),Bs.$set(Du);const Ul={};b&2&&(Ul.$$scope={dirty:b,ctx:o}),Us.$set(Ul);const Dd={};b&2&&(Dd.$$scope={dirty:b,ctx:o}),Qs.$set(Dd);const Su={};b&2&&(Su.$$scope={dirty:b,ctx:o}),Js.$set(Su);const Sd={};b&2&&(Sd.$$scope={dirty:b,ctx:o}),Ks.$set(Sd);const Wu={};b&2&&(Wu.$$scope={dirty:b,ctx:o}),Gs.$set(Wu);const Hl={};b&2&&(Hl.$$scope={dirty:b,ctx:o}),Ys.$set(Hl);const Ql={};b&2&&(Ql.$$scope={dirty:b,ctx:o}),Zs.$set(Ql)},i(o){Im||($(l.$$.fragment,o),$(se.$$.fragment,o),$(ya.$$.fragment,o),$(wa.$$.fragment,o),$(kn.$$.fragment,o),$(Fa.$$.fragment,o),$(xa.$$.fragment,o),$(Tn.$$.fragment,o),$(yn.$$.fragment,o),$(Ea.$$.fragment,o),$(qa.$$.fragment,o),$(ja.$$.fragment,o),$(Pa.$$.fragment,o),$(La.$$.fragment,o),$(Aa.$$.fragment,o),$(xn.$$.fragment,o),$(Rn.$$.fragment,o),$(Da.$$.fragment,o),$(Sa.$$.fragment,o),$(Wa.$$.fragment,o),$(Va.$$.fragment,o),$(zn.$$.fragment,o),$(qn.$$.fragment,o),$(Ka.$$.fragment,o),$(Ga.$$.fragment,o),$(tr.$$.fragment,o),$(jn.$$.fragment,o),$(Pn.$$.fragment,o),$(or.$$.fragment,o),$(nr.$$.fragment,o),$(lr.$$.fragment,o),$(An.$$.fragment,o),$(On.$$.fragment,o),$(Nn.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(mr.$$.fragment,o),$(Dn.$$.fragment,o),$(Sn.$$.fragment,o),$(Wn.$$.fragment,o),$(Bn.$$.fragment,o),$(Un.$$.fragment,o),$(fr.$$.fragment,o),$(gr.$$.fragment,o),$(vr.$$.fragment,o),$(Qn.$$.fragment,o),$(Jn.$$.fragment,o),$(Tr.$$.fragment,o),$(yr.$$.fragment,o),$(xr.$$.fragment,o),$(Kn.$$.fragment,o),$(Gn.$$.fragment,o),$(Xn.$$.fragment,o),$(Rr.$$.fragment,o),$(Mr.$$.fragment,o),$(Cr.$$.fragment,o),$(Zn.$$.fragment,o),$(es.$$.fragment,o),$(ts.$$.fragment,o),$(jr.$$.fragment,o),$(Pr.$$.fragment,o),$(ns.$$.fragment,o),$(Nr.$$.fragment,o),$(ss.$$.fragment,o),$(as.$$.fragment,o),$(Ir.$$.fragment,o),$(Dr.$$.fragment,o),$(Sr.$$.fragment,o),$(is.$$.fragment,o),$(ls.$$.fragment,o),$(Wr.$$.fragment,o),$(Br.$$.fragment,o),$(cs.$$.fragment,o),$(Vr.$$.fragment,o),$(ps.$$.fragment,o),$(hs.$$.fragment,o),$(us.$$.fragment,o),$(Kr.$$.fragment,o),$(Gr.$$.fragment,o),$(fs.$$.fragment,o),$(ei.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$(bs.$$.fragment,o),$(ti.$$.fragment,o),$(oi.$$.fragment,o),$(vs.$$.fragment,o),$(ri.$$.fragment,o),$(Ts.$$.fragment,o),$(ys.$$.fragment,o),$(ii.$$.fragment,o),$(li.$$.fragment,o),$($s.$$.fragment,o),$(hi.$$.fragment,o),$(Fs.$$.fragment,o),$(xs.$$.fragment,o),$(Rs.$$.fragment,o),$(ui.$$.fragment,o),$(mi.$$.fragment,o),$(Es.$$.fragment,o),$(bi.$$.fragment,o),$(zs.$$.fragment,o),$(qs.$$.fragment,o),$(Cs.$$.fragment,o),$(ki.$$.fragment,o),$(vi.$$.fragment,o),$(Mi.$$.fragment,o),$(Ps.$$.fragment,o),$(Ls.$$.fragment,o),$(Ei.$$.fragment,o),$(zi.$$.fragment,o),$(Ni.$$.fragment,o),$(Os.$$.fragment,o),$(Ns.$$.fragment,o),$(Ii.$$.fragment,o),$(Di.$$.fragment,o),$(Ki.$$.fragment,o),$(Ds.$$.fragment,o),$(Ss.$$.fragment,o),$(Gi.$$.fragment,o),$(Xi.$$.fragment,o),$(al.$$.fragment,o),$(Bs.$$.fragment,o),$(Us.$$.fragment,o),$(rl.$$.fragment,o),$(il.$$.fragment,o),$(fl.$$.fragment,o),$(Qs.$$.fragment,o),$(Js.$$.fragment,o),$(gl.$$.fragment,o),$(_l.$$.fragment,o),$(Fl.$$.fragment,o),$(Ks.$$.fragment,o),$(Gs.$$.fragment,o),$(xl.$$.fragment,o),$(Rl.$$.fragment,o),$(Ll.$$.fragment,o),$(Ys.$$.fragment,o),$(Zs.$$.fragment,o),Im=!0)},o(o){F(l.$$.fragment,o),F(se.$$.fragment,o),F(ya.$$.fragment,o),F(wa.$$.fragment,o),F(kn.$$.fragment,o),F(Fa.$$.fragment,o),F(xa.$$.fragment,o),F(Tn.$$.fragment,o),F(yn.$$.fragment,o),F(Ea.$$.fragment,o),F(qa.$$.fragment,o),F(ja.$$.fragment,o),F(Pa.$$.fragment,o),F(La.$$.fragment,o),F(Aa.$$.fragment,o),F(xn.$$.fragment,o),F(Rn.$$.fragment,o),F(Da.$$.fragment,o),F(Sa.$$.fragment,o),F(Wa.$$.fragment,o),F(Va.$$.fragment,o),F(zn.$$.fragment,o),F(qn.$$.fragment,o),F(Ka.$$.fragment,o),F(Ga.$$.fragment,o),F(tr.$$.fragment,o),F(jn.$$.fragment,o),F(Pn.$$.fragment,o),F(or.$$.fragment,o),F(nr.$$.fragment,o),F(lr.$$.fragment,o),F(An.$$.fragment,o),F(On.$$.fragment,o),F(Nn.$$.fragment,o),F(dr.$$.fragment,o),F(cr.$$.fragment,o),F(mr.$$.fragment,o),F(Dn.$$.fragment,o),F(Sn.$$.fragment,o),F(Wn.$$.fragment,o),F(Bn.$$.fragment,o),F(Un.$$.fragment,o),F(fr.$$.fragment,o),F(gr.$$.fragment,o),F(vr.$$.fragment,o),F(Qn.$$.fragment,o),F(Jn.$$.fragment,o),F(Tr.$$.fragment,o),F(yr.$$.fragment,o),F(xr.$$.fragment,o),F(Kn.$$.fragment,o),F(Gn.$$.fragment,o),F(Xn.$$.fragment,o),F(Rr.$$.fragment,o),F(Mr.$$.fragment,o),F(Cr.$$.fragment,o),F(Zn.$$.fragment,o),F(es.$$.fragment,o),F(ts.$$.fragment,o),F(jr.$$.fragment,o),F(Pr.$$.fragment,o),F(ns.$$.fragment,o),F(Nr.$$.fragment,o),F(ss.$$.fragment,o),F(as.$$.fragment,o),F(Ir.$$.fragment,o),F(Dr.$$.fragment,o),F(Sr.$$.fragment,o),F(is.$$.fragment,o),F(ls.$$.fragment,o),F(Wr.$$.fragment,o),F(Br.$$.fragment,o),F(cs.$$.fragment,o),F(Vr.$$.fragment,o),F(ps.$$.fragment,o),F(hs.$$.fragment,o),F(us.$$.fragment,o),F(Kr.$$.fragment,o),F(Gr.$$.fragment,o),F(fs.$$.fragment,o),F(ei.$$.fragment,o),F(gs.$$.fragment,o),F(_s.$$.fragment,o),F(bs.$$.fragment,o),F(ti.$$.fragment,o),F(oi.$$.fragment,o),F(vs.$$.fragment,o),F(ri.$$.fragment,o),F(Ts.$$.fragment,o),F(ys.$$.fragment,o),F(ii.$$.fragment,o),F(li.$$.fragment,o),F($s.$$.fragment,o),F(hi.$$.fragment,o),F(Fs.$$.fragment,o),F(xs.$$.fragment,o),F(Rs.$$.fragment,o),F(ui.$$.fragment,o),F(mi.$$.fragment,o),F(Es.$$.fragment,o),F(bi.$$.fragment,o),F(zs.$$.fragment,o),F(qs.$$.fragment,o),F(Cs.$$.fragment,o),F(ki.$$.fragment,o),F(vi.$$.fragment,o),F(Mi.$$.fragment,o),F(Ps.$$.fragment,o),F(Ls.$$.fragment,o),F(Ei.$$.fragment,o),F(zi.$$.fragment,o),F(Ni.$$.fragment,o),F(Os.$$.fragment,o),F(Ns.$$.fragment,o),F(Ii.$$.fragment,o),F(Di.$$.fragment,o),F(Ki.$$.fragment,o),F(Ds.$$.fragment,o),F(Ss.$$.fragment,o),F(Gi.$$.fragment,o),F(Xi.$$.fragment,o),F(al.$$.fragment,o),F(Bs.$$.fragment,o),F(Us.$$.fragment,o),F(rl.$$.fragment,o),F(il.$$.fragment,o),F(fl.$$.fragment,o),F(Qs.$$.fragment,o),F(Js.$$.fragment,o),F(gl.$$.fragment,o),F(_l.$$.fragment,o),F(Fl.$$.fragment,o),F(Ks.$$.fragment,o),F(Gs.$$.fragment,o),F(xl.$$.fragment,o),F(Rl.$$.fragment,o),F(Ll.$$.fragment,o),F(Ys.$$.fragment,o),F(Zs.$$.fragment,o),Im=!1},d(o){t(d),o&&t(g),o&&t(c),x(l),o&&t(I),o&&t(z),x(se),o&&t(fe),o&&t(K),o&&t(j),o&&t(ie),o&&t(ge),o&&t(le),o&&t(_e),o&&t(de),o&&t(W),o&&t(ce),o&&t(B),o&&t(G),o&&t(Uu),o&&t(eo),o&&t(Hu),o&&t(go),x(ya),o&&t(Qu),o&&t(et),x(wa),x(kn),o&&t(Ju),o&&t(ko),x(Fa),o&&t(Vu),o&&t(we),x(xa),x(Tn),x(yn),x(Ea),x(qa),x(ja),x(Pa),o&&t(Ku),o&&t(vo),x(La),o&&t(Gu),o&&t(Le),x(Aa),x(xn),x(Rn),x(Da),o&&t(Xu),o&&t(To),x(Sa),o&&t(Yu),o&&t(Ae),x(Wa),x(Va),x(zn),x(qn),o&&t(Zu),o&&t(wo),x(Ka),o&&t(em),o&&t(tt),x(Ga),x(tr),x(jn),x(Pn),o&&t(tm),o&&t(Fo),x(or),o&&t(om),o&&t(ot),x(nr),x(lr),x(An),x(On),x(Nn),o&&t(nm),o&&t(Ro),x(dr),o&&t(sm),o&&t(nt),x(cr),x(mr),x(Dn),x(Sn),x(Wn),x(Bn),x(Un),o&&t(am),o&&t(Eo),x(fr),o&&t(rm),o&&t(st),x(gr),x(vr),x(Qn),x(Jn),o&&t(im),o&&t(qo),x(Tr),o&&t(lm),o&&t(at),x(yr),x(xr),x(Kn),x(Gn),x(Xn),o&&t(dm),o&&t(jo),x(Rr),o&&t(cm),o&&t(rt),x(Mr),x(Cr),x(Zn),x(es),x(ts),o&&t(pm),o&&t(Ao),x(jr),o&&t(hm),o&&t(Qe),x(Pr),x(ns),x(Nr),x(ss),x(as),o&&t(um),o&&t(No),x(Ir),o&&t(mm),o&&t(Io),x(Dr),x(Sr),x(is),x(ls),o&&t(fm),o&&t(So),x(Wr),o&&t(gm),o&&t(Je),x(Br),x(cs),x(Vr),x(ps),x(hs),x(us),o&&t(_m),o&&t(Bo),x(Kr),o&&t(bm),o&&t(Ve),x(Gr),x(fs),x(ei),x(gs),x(_s),x(bs),o&&t(km),o&&t(Ho),x(ti),o&&t(vm),o&&t(Ke),x(oi),x(vs),x(ri),x(Ts),x(ys),o&&t(Tm),o&&t(Jo),x(ii),o&&t(ym),o&&t(Ge),x(li),x($s),x(hi),x(Fs),x(xs),x(Rs),o&&t(wm),o&&t(Ko),x(ui),o&&t($m),o&&t(Xe),x(mi),x(Es),x(bi),x(zs),x(qs),x(Cs),o&&t(Fm),o&&t(Yo),x(ki),o&&t(xm),o&&t(Oe),x(vi),x(Mi),x(Ps),x(Ls),o&&t(Rm),o&&t(en),x(Ei),o&&t(Mm),o&&t(Ne),x(zi),x(Ni),x(Os),x(Ns),o&&t(Em),o&&t(on),x(Ii),o&&t(zm),o&&t(Ie),x(Di),x(Ki),x(Ds),x(Ss),o&&t(qm),o&&t(sn),x(Gi),o&&t(Cm),o&&t(De),x(Xi),x(al),x(Bs),x(Us),o&&t(jm),o&&t(rn),x(rl),o&&t(Pm),o&&t(Se),x(il),x(fl),x(Qs),x(Js),o&&t(Lm),o&&t(dn),x(gl),o&&t(Am),o&&t(We),x(_l),x(Fl),x(Ks),x(Gs),o&&t(Om),o&&t(pn),x(xl),o&&t(Nm),o&&t(Be),x(Rl),x(Ll),x(Ys),x(Zs)}}}const GE={local:"roberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.RobertaConfig",title:"RobertaConfig"},{local:"transformers.RobertaTokenizer",title:"RobertaTokenizer"},{local:"transformers.RobertaTokenizerFast",title:"RobertaTokenizerFast"},{local:"transformers.RobertaModel",title:"RobertaModel"},{local:"transformers.RobertaForCausalLM",title:"RobertaForCausalLM"},{local:"transformers.RobertaForMaskedLM",title:"RobertaForMaskedLM"},{local:"transformers.RobertaForSequenceClassification",title:"RobertaForSequenceClassification"},{local:"transformers.RobertaForMultipleChoice",title:"RobertaForMultipleChoice"},{local:"transformers.RobertaForTokenClassification",title:"RobertaForTokenClassification"},{local:"transformers.RobertaForQuestionAnswering",title:"RobertaForQuestionAnswering"},{local:"transformers.TFRobertaModel",title:"TFRobertaModel"},{local:"transformers.TFRobertaForCausalLM",title:"TFRobertaForCausalLM"},{local:"transformers.TFRobertaForMaskedLM",title:"TFRobertaForMaskedLM"},{local:"transformers.TFRobertaForSequenceClassification",title:"TFRobertaForSequenceClassification"},{local:"transformers.TFRobertaForMultipleChoice",title:"TFRobertaForMultipleChoice"},{local:"transformers.TFRobertaForTokenClassification",title:"TFRobertaForTokenClassification"},{local:"transformers.TFRobertaForQuestionAnswering",title:"TFRobertaForQuestionAnswering"},{local:"transformers.FlaxRobertaModel",title:"FlaxRobertaModel"},{local:"transformers.FlaxRobertaForCausalLM",title:"FlaxRobertaForCausalLM"},{local:"transformers.FlaxRobertaForMaskedLM",title:"FlaxRobertaForMaskedLM"},{local:"transformers.FlaxRobertaForSequenceClassification",title:"FlaxRobertaForSequenceClassification"},{local:"transformers.FlaxRobertaForMultipleChoice",title:"FlaxRobertaForMultipleChoice"},{local:"transformers.FlaxRobertaForTokenClassification",title:"FlaxRobertaForTokenClassification"},{local:"transformers.FlaxRobertaForQuestionAnswering",title:"FlaxRobertaForQuestionAnswering"}],title:"RoBERTa"};function XE(R){return I8(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class sz extends L8{constructor(d){super();A8(this,d,XE,KE,O8,{})}}export{sz as default,GE as metadata};
