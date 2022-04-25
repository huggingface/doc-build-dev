import{S as zd,i as xd,s as Fd,e as s,k as h,w,t as i,M as Cd,c as n,d as t,m as g,a,x as k,h as d,b as p,F as e,g as b,y,q as B,o as T,B as $,v as Ed,L as V}from"../../chunks/vendor-6b77c823.js";import{T as an}from"../../chunks/Tip-39098574.js";import{D as Q}from"../../chunks/Docstring-1088f2fb.js";import{C as J}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as G}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as K}from"../../chunks/ExampleCodeBlock-5212b321.js";function Md(P){let l,_,c,u,v;return u=new J({props:{code:"",highlighted:""}}),{c(){l=s("p"),_=i("Example:"),c=h(),w(u.$$.fragment)},l(r){l=n(r,"P",{});var m=a(l);_=d(m,"Example:"),m.forEach(t),c=g(r),k(u.$$.fragment,r)},m(r,m){b(r,l,m),e(l,_),b(r,c,m),y(u,r,m),v=!0},p:V,i(r){v||(B(u.$$.fragment,r),v=!0)},o(r){T(u.$$.fragment,r),v=!1},d(r){r&&t(l),r&&t(c),$(u,r)}}}function jd(P){let l,_,c,u,v;return{c(){l=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=n(r,"P",{});var m=a(l);_=d(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(m,"CODE",{});var F=a(c);u=d(F,"Module"),F.forEach(t),v=d(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(r,m){b(r,l,m),e(l,_),e(l,c),e(c,u),e(l,v)},d(r){r&&t(l)}}}function Sd(P){let l,_,c,u,v;return u=new J({props:{code:`from transformers import PegasusTokenizer, BigBirdPegasusModel
import torch

tokenizer = PegasusTokenizer.from_pretrained("google/bigbird-pegasus-large-arxiv")
model = BigBirdPegasusModel.from_pretrained("google/bigbird-pegasus-large-arxiv")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, BigBirdPegasusModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-pegasus-large-arxiv&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdPegasusModel.from_pretrained(<span class="hljs-string">&quot;google/bigbird-pegasus-large-arxiv&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=s("p"),_=i("Example:"),c=h(),w(u.$$.fragment)},l(r){l=n(r,"P",{});var m=a(l);_=d(m,"Example:"),m.forEach(t),c=g(r),k(u.$$.fragment,r)},m(r,m){b(r,l,m),e(l,_),b(r,c,m),y(u,r,m),v=!0},p:V,i(r){v||(B(u.$$.fragment,r),v=!0)},o(r){T(u.$$.fragment,r),v=!1},d(r){r&&t(l),r&&t(c),$(u,r)}}}function Od(P){let l,_,c,u,v;return{c(){l=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=n(r,"P",{});var m=a(l);_=d(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(m,"CODE",{});var F=a(c);u=d(F,"Module"),F.forEach(t),v=d(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(r,m){b(r,l,m),e(l,_),e(l,c),e(c,u),e(l,v)},d(r){r&&t(l)}}}function Ad(P){let l,_,c,u,v;return u=new J({props:{code:`from transformers import PegasusTokenizer, BigBirdPegasusForConditionalGeneration

model = BigBirdPegasusForConditionalGeneration.from_pretrained("google/bigbird-pegasus-large-arxiv")
tokenizer = PegasusTokenizer.from_pretrained("google/bigbird-pegasus-large-arxiv")

ARTICLE_TO_SUMMARIZE = (
    "The dominant sequence transduction models are based on complex recurrent or convolutional neural "
    "networks in an encoder-decoder configuration. The best performing models also connect the encoder "
    "and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, "
    "based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. "
    "Experiments on two machine translation tasks show these models to be superior in quality "
    "while being more parallelizable and requiring significantly less time to train."
)
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=4096, return_tensors="pt", truncation=True)

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=15)
tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, BigBirdPegasusForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdPegasusForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/bigbird-pegasus-large-arxiv&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-pegasus-large-arxiv&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;The dominant sequence transduction models are based on complex recurrent or convolutional neural &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;networks in an encoder-decoder configuration. The best performing models also connect the encoder &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Experiments on two machine translation tasks show these models to be superior in quality &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;while being more parallelizable and requiring significantly less time to train.&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">4096</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, truncation=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">15</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;dominant sequence models are based on recurrent or convolutional neural networks .&#x27;</span>`}}),{c(){l=s("p"),_=i("Summarization example:"),c=h(),w(u.$$.fragment)},l(r){l=n(r,"P",{});var m=a(l);_=d(m,"Summarization example:"),m.forEach(t),c=g(r),k(u.$$.fragment,r)},m(r,m){b(r,l,m),e(l,_),b(r,c,m),y(u,r,m),v=!0},p:V,i(r){v||(B(u.$$.fragment,r),v=!0)},o(r){T(u.$$.fragment,r),v=!1},d(r){r&&t(l),r&&t(c),$(u,r)}}}function Ld(P){let l,_,c,u,v;return{c(){l=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=n(r,"P",{});var m=a(l);_=d(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(m,"CODE",{});var F=a(c);u=d(F,"Module"),F.forEach(t),v=d(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(r,m){b(r,l,m),e(l,_),e(l,c),e(c,u),e(l,v)},d(r){r&&t(l)}}}function Nd(P){let l,_,c,u,v;return u=new J({props:{code:`import torch
from transformers import PegasusTokenizer, BigBirdPegasusForSequenceClassification

tokenizer = PegasusTokenizer.from_pretrained("google/bigbird-pegasus-large-arxiv")
model = BigBirdPegasusForSequenceClassification.from_pretrained("google/bigbird-pegasus-large-arxiv")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, BigBirdPegasusForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-pegasus-large-arxiv&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdPegasusForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-pegasus-large-arxiv&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]`}}),{c(){l=s("p"),_=i("Example of single-label classification:"),c=h(),w(u.$$.fragment)},l(r){l=n(r,"P",{});var m=a(l);_=d(m,"Example of single-label classification:"),m.forEach(t),c=g(r),k(u.$$.fragment,r)},m(r,m){b(r,l,m),e(l,_),b(r,c,m),y(u,r,m),v=!0},p:V,i(r){v||(B(u.$$.fragment,r),v=!0)},o(r){T(u.$$.fragment,r),v=!1},d(r){r&&t(l),r&&t(c),$(u,r)}}}function Id(P){let l,_;return l=new J({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = BigBirdPegasusForSequenceClassification.from_pretrained("google/bigbird-pegasus-large-arxiv", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdPegasusForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-pegasus-large-arxiv&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(l.$$.fragment)},l(c){k(l.$$.fragment,c)},m(c,u){y(l,c,u),_=!0},p:V,i(c){_||(B(l.$$.fragment,c),_=!0)},o(c){T(l.$$.fragment,c),_=!1},d(c){$(l,c)}}}function Dd(P){let l,_,c,u,v;return u=new J({props:{code:`import torch
from transformers import PegasusTokenizer, BigBirdPegasusForSequenceClassification

tokenizer = PegasusTokenizer.from_pretrained("google/bigbird-pegasus-large-arxiv")
model = BigBirdPegasusForSequenceClassification.from_pretrained("google/bigbird-pegasus-large-arxiv", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, BigBirdPegasusForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-pegasus-large-arxiv&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdPegasusForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-pegasus-large-arxiv&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]`}}),{c(){l=s("p"),_=i("Example of multi-label classification:"),c=h(),w(u.$$.fragment)},l(r){l=n(r,"P",{});var m=a(l);_=d(m,"Example of multi-label classification:"),m.forEach(t),c=g(r),k(u.$$.fragment,r)},m(r,m){b(r,l,m),e(l,_),b(r,c,m),y(u,r,m),v=!0},p:V,i(r){v||(B(u.$$.fragment,r),v=!0)},o(r){T(u.$$.fragment,r),v=!1},d(r){r&&t(l),r&&t(c),$(u,r)}}}function Qd(P){let l,_;return l=new J({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = BigBirdPegasusForSequenceClassification.from_pretrained("google/bigbird-pegasus-large-arxiv", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdPegasusForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-pegasus-large-arxiv&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){w(l.$$.fragment)},l(c){k(l.$$.fragment,c)},m(c,u){y(l,c,u),_=!0},p:V,i(c){_||(B(l.$$.fragment,c),_=!0)},o(c){T(l.$$.fragment,c),_=!1},d(c){$(l,c)}}}function Gd(P){let l,_,c,u,v;return{c(){l=s("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),u=i("Module"),v=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(r){l=n(r,"P",{});var m=a(l);_=d(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(m,"CODE",{});var F=a(c);u=d(F,"Module"),F.forEach(t),v=d(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(r,m){b(r,l,m),e(l,_),e(l,c),e(c,u),e(l,v)},d(r){r&&t(l)}}}function Wd(P){let l,_,c,u,v;return u=new J({props:{code:`from transformers import PegasusTokenizer, BigBirdPegasusForQuestionAnswering
import torch

tokenizer = PegasusTokenizer.from_pretrained("google/bigbird-pegasus-large-arxiv")
model = BigBirdPegasusForQuestionAnswering.from_pretrained("google/bigbird-pegasus-large-arxiv")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, BigBirdPegasusForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-pegasus-large-arxiv&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdPegasusForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/bigbird-pegasus-large-arxiv&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
[<span class="hljs-number">1</span>, <span class="hljs-number">12</span>]`}}),{c(){l=s("p"),_=i("Example:"),c=h(),w(u.$$.fragment)},l(r){l=n(r,"P",{});var m=a(l);_=d(m,"Example:"),m.forEach(t),c=g(r),k(u.$$.fragment,r)},m(r,m){b(r,l,m),e(l,_),b(r,c,m),y(u,r,m),v=!0},p:V,i(r){v||(B(u.$$.fragment,r),v=!0)},o(r){T(u.$$.fragment,r),v=!1},d(r){r&&t(l),r&&t(c),$(u,r)}}}function Ud(P){let l,_;return l=new J({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">2.56</span>`}}),{c(){w(l.$$.fragment)},l(c){k(l.$$.fragment,c)},m(c,u){y(l,c,u),_=!0},p:V,i(c){_||(B(l.$$.fragment,c),_=!0)},o(c){T(l.$$.fragment,c),_=!1},d(c){$(l,c)}}}function Hd(P){let l,_,c,u,v;return u=new J({props:{code:`from transformers import PegasusTokenizer, BigBirdPegasusForCausalLM

tokenizer = PegasusTokenizer.from_pretrained("google/bigbird-pegasus-large-arxiv")
model = BigBirdPegasusForCausalLM.from_pretrained(
    "google/bigbird-pegasus-large-arxiv", add_cross_attention=False
)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PegasusTokenizer, BigBirdPegasusForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = PegasusTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-pegasus-large-arxiv&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdPegasusForCausalLM.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/bigbird-pegasus-large-arxiv&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=s("p"),_=i("Example:"),c=h(),w(u.$$.fragment)},l(r){l=n(r,"P",{});var m=a(l);_=d(m,"Example:"),m.forEach(t),c=g(r),k(u.$$.fragment,r)},m(r,m){b(r,l,m),e(l,_),b(r,c,m),y(u,r,m),v=!0},p:V,i(r){v||(B(u.$$.fragment,r),v=!0)},o(r){T(u.$$.fragment,r),v=!1},d(r){r&&t(l),r&&t(c),$(u,r)}}}function Rd(P){let l,_,c,u,v,r,m,F,rn,hs,Z,pe,it,He,dn,dt,ln,gs,he,cn,Re,un,pn,ms,Io,hn,fs,Do,lt,gn,_s,Qo,mn,bs,z,Ke,fn,Ve,_n,bn,vn,A,wn,ct,kn,yn,ut,Bn,Tn,pt,$n,Pn,ht,qn,zn,xn,gt,Fn,Cn,mt,En,Mn,Je,jn,ft,Sn,On,An,Ze,Ln,_t,Nn,In,Dn,Ye,Qn,Xe,Gn,Wn,vs,ge,Un,eo,Hn,Rn,ws,Y,me,bt,oo,Kn,vt,Vn,ks,q,to,Jn,X,Zn,Go,Yn,Xn,so,ea,oa,ta,ee,sa,Wo,na,aa,Uo,ra,ia,da,fe,la,wt,kt,yt,Bt,ca,ua,Tt,$t,no,_e,be,Pt,ao,pa,qt,ha,ga,zt,ma,fa,xt,Ft,ro,ve,we,Ct,io,_a,Et,ba,va,Mt,wa,ka,jt,St,Ot,ke,ye,At,lo,ya,Lt,Ba,ys,oe,Be,Nt,co,Ta,It,$a,Bs,L,uo,Pa,po,qa,Ho,za,xa,Fa,ho,Ca,go,Ea,Ma,ja,I,mo,Sa,te,Oa,Ro,Aa,La,Dt,Na,Ia,Da,Te,Qa,$e,Ts,se,Pe,Qt,fo,Ga,Gt,Wa,$s,N,_o,Ua,bo,Ha,Ko,Ra,Ka,Va,vo,Ja,wo,Za,Ya,Xa,D,ko,er,ne,or,Vo,tr,sr,Wt,nr,ar,rr,qe,ir,ze,Ps,ae,xe,Ut,yo,dr,Ht,lr,qs,E,Bo,cr,Rt,ur,pr,To,hr,Jo,gr,mr,fr,$o,_r,Po,br,vr,wr,x,qo,kr,re,yr,Zo,Br,Tr,Kt,$r,Pr,qr,Fe,zr,Ce,xr,Ee,Fr,Me,Cr,je,zs,ie,Se,Vt,zo,Er,Jt,Mr,xs,M,xo,jr,de,Sr,Zt,Or,Ar,Yt,Lr,Nr,Ir,Fo,Dr,Yo,Qr,Gr,Wr,Co,Ur,Eo,Hr,Rr,Kr,j,Mo,Vr,le,Jr,Xo,Zr,Yr,Xt,Xr,ei,oi,Oe,ti,Ae,si,Le,Fs,ce,Ne,es,jo,ni,os,ai,Cs,ue,So,ri,Ie,Oo,ii,De,Es;return r=new G({}),He=new G({}),oo=new G({}),to=new Q({props:{name:"class transformers.BigBirdPegasusConfig",anchor:"transformers.BigBirdPegasusConfig",parameters:[{name:"vocab_size",val:" = 96103"},{name:"max_position_embeddings",val:" = 4096"},{name:"encoder_layers",val:" = 16"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 16"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu_new'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 1"},{name:"attention_type",val:" = 'block_sparse'"},{name:"block_size",val:" = 64"},{name:"num_random_blocks",val:" = 3"},{name:"use_bias",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdPegasusConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 96103) &#x2014;
Vocabulary size of the BigBirdPegasus model. Defines the number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16919/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusModel">BigBirdPegasusModel</a>.`,name:"vocab_size"},{anchor:"transformers.BigBirdPegasusConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimension of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.BigBirdPegasusConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.BigBirdPegasusConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.BigBirdPegasusConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.BigBirdPegasusConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.BigBirdPegasusConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.BigBirdPegasusConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.BigBirdPegasusConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu_new&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.BigBirdPegasusConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.BigBirdPegasusConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.BigBirdPegasusConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.BigBirdPegasusConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.BigBirdPegasusConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 1024 or 2048 or 4096).`,name:"max_position_embeddings"},{anchor:"transformers.BigBirdPegasusConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.BigBirdPegasusConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.BigBirdPegasusConfig.attention_type",description:`<strong>attention_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;block_sparse&quot;</code>) &#x2014;
Whether to use block sparse attention (with n complexity) as introduced in paper or original attention
layer (with n^2 complexity) in encoder. Possible values are <code>&quot;original_full&quot;</code> and <code>&quot;block_sparse&quot;</code>.`,name:"attention_type"},{anchor:"transformers.BigBirdPegasusConfig.use_bias",description:`<strong>use_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use bias in query, key, value.`,name:"use_bias"},{anchor:"transformers.BigBirdPegasusConfig.block_size",description:`<strong>block_size</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Size of each block. Useful only when <code>attention_type == &quot;block_sparse&quot;</code>.`,name:"block_size"},{anchor:"transformers.BigBirdPegasusConfig.num_random_blocks",description:`<strong>num_random_blocks</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Each query is going to attend these many number of random blocks. Useful only when <code>attention_type == &quot;block_sparse&quot;</code>.`,name:"num_random_blocks"},{anchor:"transformers.BigBirdPegasusConfig.scale_embeddings",description:`<strong>scale_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to rescale embeddings with (hidden_size ** 0.5).`,name:"scale_embeddings"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bigbird_pegasus/configuration_bigbird_pegasus.py#L31"}}),fe=new K({props:{anchor:"transformers.BigBirdPegasusConfig.example",$$slots:{default:[Md]},$$scope:{ctx:P}}}),ao=new G({}),io=new G({}),lo=new G({}),co=new G({}),uo=new Q({props:{name:"class transformers.BigBirdPegasusModel",anchor:"transformers.BigBirdPegasusModel",parameters:[{name:"config",val:": BigBirdPegasusConfig"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusConfig">BigBirdPegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2333"}}),mo=new Q({props:{name:"forward",anchor:"transformers.BigBirdPegasusModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdPegasusModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdPegasusModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for translation and summarization training. By default, the model will create this tensor by
shifting the <code>input_ids</code> to the right, following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BigBirdPegasusModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read
<code>modeling_bigbird_pegasus._prepare_decoder_inputs</code> and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BigBirdPegasusModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BigBirdPegasusModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BigBirdPegasusModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BigBirdPegasusModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BigBirdPegasusModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BigBirdPegasusModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdPegasusModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdPegasusModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2360",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusConfig"
>BigBirdPegasusConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Te=new an({props:{$$slots:{default:[jd]},$$scope:{ctx:P}}}),$e=new K({props:{anchor:"transformers.BigBirdPegasusModel.forward.example",$$slots:{default:[Sd]},$$scope:{ctx:P}}}),fo=new G({}),_o=new Q({props:{name:"class transformers.BigBirdPegasusForConditionalGeneration",anchor:"transformers.BigBirdPegasusForConditionalGeneration",parameters:[{name:"config",val:": BigBirdPegasusConfig"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusConfig">BigBirdPegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2462"}}),ko=new Q({props:{name:"forward",anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for translation and summarization training. By default, the model will create this tensor by
shifting the <code>input_ids</code> to the right, following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read
<code>modeling_bigbird_pegasus._prepare_decoder_inputs</code> and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2501",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusConfig"
>BigBirdPegasusConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qe=new an({props:{$$slots:{default:[Od]},$$scope:{ctx:P}}}),ze=new K({props:{anchor:"transformers.BigBirdPegasusForConditionalGeneration.forward.example",$$slots:{default:[Ad]},$$scope:{ctx:P}}}),yo=new G({}),Bo=new Q({props:{name:"class transformers.BigBirdPegasusForSequenceClassification",anchor:"transformers.BigBirdPegasusForSequenceClassification",parameters:[{name:"config",val:": BigBirdPegasusConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusConfig">BigBirdPegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2632"}}),qo=new Q({props:{name:"forward",anchor:"transformers.BigBirdPegasusForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for translation and summarization training. By default, the model will create this tensor by
shifting the <code>input_ids</code> to the right, following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read
<code>modeling_bigbird_pegasus._prepare_decoder_inputs</code> and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2645",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusConfig"
>BigBirdPegasusConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fe=new an({props:{$$slots:{default:[Ld]},$$scope:{ctx:P}}}),Ce=new K({props:{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.example",$$slots:{default:[Nd]},$$scope:{ctx:P}}}),Ee=new K({props:{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.example-2",$$slots:{default:[Id]},$$scope:{ctx:P}}}),Me=new K({props:{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.example-3",$$slots:{default:[Dd]},$$scope:{ctx:P}}}),je=new K({props:{anchor:"transformers.BigBirdPegasusForSequenceClassification.forward.example-4",$$slots:{default:[Qd]},$$scope:{ctx:P}}}),zo=new G({}),xo=new Q({props:{name:"class transformers.BigBirdPegasusForQuestionAnswering",anchor:"transformers.BigBirdPegasusForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusConfig">BigBirdPegasusConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2759"}}),Mo=new Q({props:{name:"forward",anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Tensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for translation and summarization training. By default, the model will create this tensor by
shifting the <code>input_ids</code> to the right, following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read
<code>modeling_bigbird_pegasus._prepare_decoder_inputs</code> and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. inputs_embeds (<code>torch.FloatTensor</code> of shape
<code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing <code>input_ids</code> you
can choose to directly pass an embedded representation. This is useful if you want more control over how to
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2771",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusConfig"
>BigBirdPegasusConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oe=new an({props:{$$slots:{default:[Gd]},$$scope:{ctx:P}}}),Ae=new K({props:{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.example",$$slots:{default:[Wd]},$$scope:{ctx:P}}}),Le=new K({props:{anchor:"transformers.BigBirdPegasusForQuestionAnswering.forward.example-2",$$slots:{default:[Ud]},$$scope:{ctx:P}}}),jo=new G({}),So=new Q({props:{name:"class transformers.BigBirdPegasusForCausalLM",anchor:"transformers.BigBirdPegasusForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2890"}}),Oo=new Q({props:{name:"forward",anchor:"transformers.BigBirdPegasusForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.BigBirdPegasusForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/pegasus#transformers.PegasusTokenizer">PegasusTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdPegasusForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdPegasusForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BigBirdPegasusForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.BigBirdPegasusForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdPegasusForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BigBirdPegasusForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BigBirdPegasusForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.BigBirdPegasusForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.BigBirdPegasusForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdPegasusForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdPegasusForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py#L2921",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusConfig"
>BigBirdPegasusConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),De=new K({props:{anchor:"transformers.BigBirdPegasusForCausalLM.forward.example",$$slots:{default:[Hd]},$$scope:{ctx:P}}}),{c(){l=s("meta"),_=h(),c=s("h1"),u=s("a"),v=s("span"),w(r.$$.fragment),m=h(),F=s("span"),rn=i("BigBirdPegasus"),hs=h(),Z=s("h2"),pe=s("a"),it=s("span"),w(He.$$.fragment),dn=h(),dt=s("span"),ln=i("Overview"),gs=h(),he=s("p"),cn=i("The BigBird model was proposed in "),Re=s("a"),un=i("Big Bird: Transformers for Longer Sequences"),pn=i(` by
Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon,
Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others. BigBird, is a sparse-attention
based transformer which extends Transformer based models, such as BERT to much longer sequences. In addition to sparse
attention, BigBird also applies global attention as well as random attention to the input sequence. Theoretically, it
has been shown that applying sparse, global, and random attention approximates full attention, while being
computationally much more efficient for longer sequences. As a consequence of the capability to handle longer context,
BigBird has shown improved performance on various long document NLP tasks, such as question answering and
summarization, compared to BERT or RoBERTa.`),ms=h(),Io=s("p"),hn=i("The abstract from the paper is the following:"),fs=h(),Do=s("p"),lt=s("em"),gn=i(`Transformers-based models, such as BERT, have been one of the most successful deep learning models for NLP.
Unfortunately, one of their core limitations is the quadratic dependency (mainly in terms of memory) on the sequence
length due to their full attention mechanism. To remedy this, we propose, BigBird, a sparse attention mechanism that
reduces this quadratic dependency to linear. We show that BigBird is a universal approximator of sequence functions and
is Turing complete, thereby preserving these properties of the quadratic, full attention model. Along the way, our
theoretical analysis reveals some of the benefits of having O(1) global tokens (such as CLS), that attend to the entire
sequence as part of the sparse attention mechanism. The proposed sparse attention can handle sequences of length up to
8x of what was previously possible using similar hardware. As a consequence of the capability to handle longer context,
BigBird drastically improves performance on various NLP tasks such as question answering and summarization. We also
propose novel applications to genomics data.`),_s=h(),Qo=s("p"),mn=i("Tips:"),bs=h(),z=s("ul"),Ke=s("li"),fn=i("For an in-detail explanation on how BigBird\u2019s attention works, see "),Ve=s("a"),_n=i("this blog post"),bn=i("."),vn=h(),A=s("li"),wn=i("BigBird comes with 2 implementations: "),ct=s("strong"),kn=i("original_full"),yn=i(" & "),ut=s("strong"),Bn=i("block_sparse"),Tn=i(`. For the sequence length < 1024, using
`),pt=s("strong"),$n=i("original_full"),Pn=i(" is advised as there is no benefit in using "),ht=s("strong"),qn=i("block_sparse"),zn=i(" attention."),xn=h(),gt=s("li"),Fn=i("The code currently uses window size of 3 blocks and 2 global blocks."),Cn=h(),mt=s("li"),En=i("Sequence length must be divisible by block size."),Mn=h(),Je=s("li"),jn=i("Current implementation supports only "),ft=s("strong"),Sn=i("ITC"),On=i("."),An=h(),Ze=s("li"),Ln=i("Current implementation doesn\u2019t support "),_t=s("strong"),Nn=i("num_random_blocks = 0"),In=i("."),Dn=h(),Ye=s("li"),Qn=i("BigBirdPegasus uses the "),Xe=s("a"),Gn=i("PegasusTokenizer"),Wn=i("."),vs=h(),ge=s("p"),Un=i("The original code can be found "),eo=s("a"),Hn=i("here"),Rn=i("."),ws=h(),Y=s("h2"),me=s("a"),bt=s("span"),w(oo.$$.fragment),Kn=h(),vt=s("span"),Vn=i("BigBirdPegasusConfig"),ks=h(),q=s("div"),w(to.$$.fragment),Jn=h(),X=s("p"),Zn=i("This is the configuration class to store the configuration of a "),Go=s("a"),Yn=i("BigBirdPegasusModel"),Xn=i(`. It is used to instantiate
an BigBirdPegasus model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BigBirdPegasus
`),so=s("a"),ea=i("google/bigbird-pegasus-large-arxiv"),oa=i(" architecture."),ta=h(),ee=s("p"),sa=i("Configuration objects inherit from "),Wo=s("a"),na=i("PretrainedConfig"),aa=i(` and can be used to control the model outputs. Read the
documentation from `),Uo=s("a"),ra=i("PretrainedConfig"),ia=i(" for more information."),da=h(),w(fe.$$.fragment),la=h(),wt=s("blockquote"),kt=s("blockquote"),yt=s("blockquote"),Bt=s("p"),ca=i("from transformers import BigBirdPegasusModel, BigBirdPegasusConfig"),ua=h(),Tt=s("blockquote"),$t=s("blockquote"),no=s("blockquote"),_e=s("h1"),be=s("a"),Pt=s("span"),w(ao.$$.fragment),pa=h(),qt=s("span"),ha=i("Initializing a BigBirdPegasus bigbird-pegasus-base style configuration >>> configuration ="),ga=h(),zt=s("p"),ma=i("BigBirdPegasusConfig()"),fa=h(),xt=s("blockquote"),Ft=s("blockquote"),ro=s("blockquote"),ve=s("h1"),we=s("a"),Ct=s("span"),w(io.$$.fragment),_a=h(),Et=s("span"),ba=i("Initializing a model from the bigbird-pegasus-base style configuration >>> model ="),va=h(),Mt=s("p"),wa=i("BigBirdPegasusModel(configuration)"),ka=h(),jt=s("blockquote"),St=s("blockquote"),Ot=s("blockquote"),ke=s("h1"),ye=s("a"),At=s("span"),w(lo.$$.fragment),ya=h(),Lt=s("span"),Ba=i("Accessing the model configuration >>> configuration = model.config"),ys=h(),oe=s("h2"),Be=s("a"),Nt=s("span"),w(co.$$.fragment),Ta=h(),It=s("span"),$a=i("BigBirdPegasusModel"),Bs=h(),L=s("div"),w(uo.$$.fragment),Pa=h(),po=s("p"),qa=i(`The bare BigBirdPegasus Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ho=s("a"),za=i("PreTrainedModel"),xa=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Fa=h(),ho=s("p"),Ca=i("This model is also a PyTorch "),go=s("a"),Ea=i("torch.nn.Module"),Ma=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ja=h(),I=s("div"),w(mo.$$.fragment),Sa=h(),te=s("p"),Oa=i("The "),Ro=s("a"),Aa=i("BigBirdPegasusModel"),La=i(" forward method, overrides the "),Dt=s("code"),Na=i("__call__"),Ia=i(" special method."),Da=h(),w(Te.$$.fragment),Qa=h(),w($e.$$.fragment),Ts=h(),se=s("h2"),Pe=s("a"),Qt=s("span"),w(fo.$$.fragment),Ga=h(),Gt=s("span"),Wa=i("BigBirdPegasusForConditionalGeneration"),$s=h(),N=s("div"),w(_o.$$.fragment),Ua=h(),bo=s("p"),Ha=i(`The BigBirdPegasus Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ko=s("a"),Ra=i("PreTrainedModel"),Ka=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Va=h(),vo=s("p"),Ja=i("This model is also a PyTorch "),wo=s("a"),Za=i("torch.nn.Module"),Ya=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xa=h(),D=s("div"),w(ko.$$.fragment),er=h(),ne=s("p"),or=i("The "),Vo=s("a"),tr=i("BigBirdPegasusForConditionalGeneration"),sr=i(" forward method, overrides the "),Wt=s("code"),nr=i("__call__"),ar=i(" special method."),rr=h(),w(qe.$$.fragment),ir=h(),w(ze.$$.fragment),Ps=h(),ae=s("h2"),xe=s("a"),Ut=s("span"),w(yo.$$.fragment),dr=h(),Ht=s("span"),lr=i("BigBirdPegasusForSequenceClassification"),qs=h(),E=s("div"),w(Bo.$$.fragment),cr=h(),Rt=s("p"),ur=i(`BigBirdPegasus model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),pr=h(),To=s("p"),hr=i("This model inherits from "),Jo=s("a"),gr=i("PreTrainedModel"),mr=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),fr=h(),$o=s("p"),_r=i("This model is also a PyTorch "),Po=s("a"),br=i("torch.nn.Module"),vr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wr=h(),x=s("div"),w(qo.$$.fragment),kr=h(),re=s("p"),yr=i("The "),Zo=s("a"),Br=i("BigBirdPegasusForSequenceClassification"),Tr=i(" forward method, overrides the "),Kt=s("code"),$r=i("__call__"),Pr=i(" special method."),qr=h(),w(Fe.$$.fragment),zr=h(),w(Ce.$$.fragment),xr=h(),w(Ee.$$.fragment),Fr=h(),w(Me.$$.fragment),Cr=h(),w(je.$$.fragment),zs=h(),ie=s("h2"),Se=s("a"),Vt=s("span"),w(zo.$$.fragment),Er=h(),Jt=s("span"),Mr=i("BigBirdPegasusForQuestionAnswering"),xs=h(),M=s("div"),w(xo.$$.fragment),jr=h(),de=s("p"),Sr=i(`BigBirdPegasus Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),Zt=s("code"),Or=i("span start logits"),Ar=i(" and "),Yt=s("code"),Lr=i("span end logits"),Nr=i(")."),Ir=h(),Fo=s("p"),Dr=i("This model inherits from "),Yo=s("a"),Qr=i("PreTrainedModel"),Gr=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Wr=h(),Co=s("p"),Ur=i("This model is also a PyTorch "),Eo=s("a"),Hr=i("torch.nn.Module"),Rr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kr=h(),j=s("div"),w(Mo.$$.fragment),Vr=h(),le=s("p"),Jr=i("The "),Xo=s("a"),Zr=i("BigBirdPegasusForQuestionAnswering"),Yr=i(" forward method, overrides the "),Xt=s("code"),Xr=i("__call__"),ei=i(" special method."),oi=h(),w(Oe.$$.fragment),ti=h(),w(Ae.$$.fragment),si=h(),w(Le.$$.fragment),Fs=h(),ce=s("h2"),Ne=s("a"),es=s("span"),w(jo.$$.fragment),ni=h(),os=s("span"),ai=i("BigBirdPegasusForCausalLM"),Cs=h(),ue=s("div"),w(So.$$.fragment),ri=h(),Ie=s("div"),w(Oo.$$.fragment),ii=h(),w(De.$$.fragment),this.h()},l(o){const f=Cd('[data-svelte="svelte-1phssyn"]',document.head);l=n(f,"META",{name:!0,content:!0}),f.forEach(t),_=g(o),c=n(o,"H1",{class:!0});var Ao=a(c);u=n(Ao,"A",{id:!0,class:!0,href:!0});var ts=a(u);v=n(ts,"SPAN",{});var ss=a(v);k(r.$$.fragment,ss),ss.forEach(t),ts.forEach(t),m=g(Ao),F=n(Ao,"SPAN",{});var ns=a(F);rn=d(ns,"BigBirdPegasus"),ns.forEach(t),Ao.forEach(t),hs=g(o),Z=n(o,"H2",{class:!0});var Lo=a(Z);pe=n(Lo,"A",{id:!0,class:!0,href:!0});var as=a(pe);it=n(as,"SPAN",{});var rs=a(it);k(He.$$.fragment,rs),rs.forEach(t),as.forEach(t),dn=g(Lo),dt=n(Lo,"SPAN",{});var is=a(dt);ln=d(is,"Overview"),is.forEach(t),Lo.forEach(t),gs=g(o),he=n(o,"P",{});var No=a(he);cn=d(No,"The BigBird model was proposed in "),Re=n(No,"A",{href:!0,rel:!0});var ds=a(Re);un=d(ds,"Big Bird: Transformers for Longer Sequences"),ds.forEach(t),pn=d(No,` by
Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon,
Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others. BigBird, is a sparse-attention
based transformer which extends Transformer based models, such as BERT to much longer sequences. In addition to sparse
attention, BigBird also applies global attention as well as random attention to the input sequence. Theoretically, it
has been shown that applying sparse, global, and random attention approximates full attention, while being
computationally much more efficient for longer sequences. As a consequence of the capability to handle longer context,
BigBird has shown improved performance on various long document NLP tasks, such as question answering and
summarization, compared to BERT or RoBERTa.`),No.forEach(t),ms=g(o),Io=n(o,"P",{});var ls=a(Io);hn=d(ls,"The abstract from the paper is the following:"),ls.forEach(t),fs=g(o),Do=n(o,"P",{});var cs=a(Do);lt=n(cs,"EM",{});var us=a(lt);gn=d(us,`Transformers-based models, such as BERT, have been one of the most successful deep learning models for NLP.
Unfortunately, one of their core limitations is the quadratic dependency (mainly in terms of memory) on the sequence
length due to their full attention mechanism. To remedy this, we propose, BigBird, a sparse attention mechanism that
reduces this quadratic dependency to linear. We show that BigBird is a universal approximator of sequence functions and
is Turing complete, thereby preserving these properties of the quadratic, full attention model. Along the way, our
theoretical analysis reveals some of the benefits of having O(1) global tokens (such as CLS), that attend to the entire
sequence as part of the sparse attention mechanism. The proposed sparse attention can handle sequences of length up to
8x of what was previously possible using similar hardware. As a consequence of the capability to handle longer context,
BigBird drastically improves performance on various NLP tasks such as question answering and summarization. We also
propose novel applications to genomics data.`),us.forEach(t),cs.forEach(t),_s=g(o),Qo=n(o,"P",{});var ps=a(Qo);mn=d(ps,"Tips:"),ps.forEach(t),bs=g(o),z=n(o,"UL",{});var S=a(z);Ke=n(S,"LI",{});var Ms=a(Ke);fn=d(Ms,"For an in-detail explanation on how BigBird\u2019s attention works, see "),Ve=n(Ms,"A",{href:!0,rel:!0});var di=a(Ve);_n=d(di,"this blog post"),di.forEach(t),bn=d(Ms,"."),Ms.forEach(t),vn=g(S),A=n(S,"LI",{});var W=a(A);wn=d(W,"BigBird comes with 2 implementations: "),ct=n(W,"STRONG",{});var li=a(ct);kn=d(li,"original_full"),li.forEach(t),yn=d(W," & "),ut=n(W,"STRONG",{});var ci=a(ut);Bn=d(ci,"block_sparse"),ci.forEach(t),Tn=d(W,`. For the sequence length < 1024, using
`),pt=n(W,"STRONG",{});var ui=a(pt);$n=d(ui,"original_full"),ui.forEach(t),Pn=d(W," is advised as there is no benefit in using "),ht=n(W,"STRONG",{});var pi=a(ht);qn=d(pi,"block_sparse"),pi.forEach(t),zn=d(W," attention."),W.forEach(t),xn=g(S),gt=n(S,"LI",{});var hi=a(gt);Fn=d(hi,"The code currently uses window size of 3 blocks and 2 global blocks."),hi.forEach(t),Cn=g(S),mt=n(S,"LI",{});var gi=a(mt);En=d(gi,"Sequence length must be divisible by block size."),gi.forEach(t),Mn=g(S),Je=n(S,"LI",{});var js=a(Je);jn=d(js,"Current implementation supports only "),ft=n(js,"STRONG",{});var mi=a(ft);Sn=d(mi,"ITC"),mi.forEach(t),On=d(js,"."),js.forEach(t),An=g(S),Ze=n(S,"LI",{});var Ss=a(Ze);Ln=d(Ss,"Current implementation doesn\u2019t support "),_t=n(Ss,"STRONG",{});var fi=a(_t);Nn=d(fi,"num_random_blocks = 0"),fi.forEach(t),In=d(Ss,"."),Ss.forEach(t),Dn=g(S),Ye=n(S,"LI",{});var Os=a(Ye);Qn=d(Os,"BigBirdPegasus uses the "),Xe=n(Os,"A",{href:!0,rel:!0});var _i=a(Xe);Gn=d(_i,"PegasusTokenizer"),_i.forEach(t),Wn=d(Os,"."),Os.forEach(t),S.forEach(t),vs=g(o),ge=n(o,"P",{});var As=a(ge);Un=d(As,"The original code can be found "),eo=n(As,"A",{href:!0,rel:!0});var bi=a(eo);Hn=d(bi,"here"),bi.forEach(t),Rn=d(As,"."),As.forEach(t),ws=g(o),Y=n(o,"H2",{class:!0});var Ls=a(Y);me=n(Ls,"A",{id:!0,class:!0,href:!0});var vi=a(me);bt=n(vi,"SPAN",{});var wi=a(bt);k(oo.$$.fragment,wi),wi.forEach(t),vi.forEach(t),Kn=g(Ls),vt=n(Ls,"SPAN",{});var ki=a(vt);Vn=d(ki,"BigBirdPegasusConfig"),ki.forEach(t),Ls.forEach(t),ks=g(o),q=n(o,"DIV",{class:!0});var C=a(q);k(to.$$.fragment,C),Jn=g(C),X=n(C,"P",{});var et=a(X);Zn=d(et,"This is the configuration class to store the configuration of a "),Go=n(et,"A",{href:!0});var yi=a(Go);Yn=d(yi,"BigBirdPegasusModel"),yi.forEach(t),Xn=d(et,`. It is used to instantiate
an BigBirdPegasus model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BigBirdPegasus
`),so=n(et,"A",{href:!0,rel:!0});var Bi=a(so);ea=d(Bi,"google/bigbird-pegasus-large-arxiv"),Bi.forEach(t),oa=d(et," architecture."),et.forEach(t),ta=g(C),ee=n(C,"P",{});var ot=a(ee);sa=d(ot,"Configuration objects inherit from "),Wo=n(ot,"A",{href:!0});var Ti=a(Wo);na=d(Ti,"PretrainedConfig"),Ti.forEach(t),aa=d(ot,` and can be used to control the model outputs. Read the
documentation from `),Uo=n(ot,"A",{href:!0});var $i=a(Uo);ra=d($i,"PretrainedConfig"),$i.forEach(t),ia=d(ot," for more information."),ot.forEach(t),da=g(C),k(fe.$$.fragment,C),la=g(C),wt=n(C,"BLOCKQUOTE",{});var Pi=a(wt);kt=n(Pi,"BLOCKQUOTE",{});var qi=a(kt);yt=n(qi,"BLOCKQUOTE",{});var zi=a(yt);Bt=n(zi,"P",{});var xi=a(Bt);ca=d(xi,"from transformers import BigBirdPegasusModel, BigBirdPegasusConfig"),xi.forEach(t),zi.forEach(t),qi.forEach(t),Pi.forEach(t),ua=g(C),Tt=n(C,"BLOCKQUOTE",{});var Fi=a(Tt);$t=n(Fi,"BLOCKQUOTE",{});var Ci=a($t);no=n(Ci,"BLOCKQUOTE",{});var Ns=a(no);_e=n(Ns,"H1",{class:!0});var Is=a(_e);be=n(Is,"A",{id:!0,class:!0,href:!0});var Ei=a(be);Pt=n(Ei,"SPAN",{});var Mi=a(Pt);k(ao.$$.fragment,Mi),Mi.forEach(t),Ei.forEach(t),pa=g(Is),qt=n(Is,"SPAN",{});var ji=a(qt);ha=d(ji,"Initializing a BigBirdPegasus bigbird-pegasus-base style configuration >>> configuration ="),ji.forEach(t),Is.forEach(t),ga=g(Ns),zt=n(Ns,"P",{});var Si=a(zt);ma=d(Si,"BigBirdPegasusConfig()"),Si.forEach(t),Ns.forEach(t),Ci.forEach(t),Fi.forEach(t),fa=g(C),xt=n(C,"BLOCKQUOTE",{});var Oi=a(xt);Ft=n(Oi,"BLOCKQUOTE",{});var Ai=a(Ft);ro=n(Ai,"BLOCKQUOTE",{});var Ds=a(ro);ve=n(Ds,"H1",{class:!0});var Qs=a(ve);we=n(Qs,"A",{id:!0,class:!0,href:!0});var Li=a(we);Ct=n(Li,"SPAN",{});var Ni=a(Ct);k(io.$$.fragment,Ni),Ni.forEach(t),Li.forEach(t),_a=g(Qs),Et=n(Qs,"SPAN",{});var Ii=a(Et);ba=d(Ii,"Initializing a model from the bigbird-pegasus-base style configuration >>> model ="),Ii.forEach(t),Qs.forEach(t),va=g(Ds),Mt=n(Ds,"P",{});var Di=a(Mt);wa=d(Di,"BigBirdPegasusModel(configuration)"),Di.forEach(t),Ds.forEach(t),Ai.forEach(t),Oi.forEach(t),ka=g(C),jt=n(C,"BLOCKQUOTE",{});var Qi=a(jt);St=n(Qi,"BLOCKQUOTE",{});var Gi=a(St);Ot=n(Gi,"BLOCKQUOTE",{});var Wi=a(Ot);ke=n(Wi,"H1",{class:!0});var Gs=a(ke);ye=n(Gs,"A",{id:!0,class:!0,href:!0});var Ui=a(ye);At=n(Ui,"SPAN",{});var Hi=a(At);k(lo.$$.fragment,Hi),Hi.forEach(t),Ui.forEach(t),ya=g(Gs),Lt=n(Gs,"SPAN",{});var Ri=a(Lt);Ba=d(Ri,"Accessing the model configuration >>> configuration = model.config"),Ri.forEach(t),Gs.forEach(t),Wi.forEach(t),Gi.forEach(t),Qi.forEach(t),C.forEach(t),ys=g(o),oe=n(o,"H2",{class:!0});var Ws=a(oe);Be=n(Ws,"A",{id:!0,class:!0,href:!0});var Ki=a(Be);Nt=n(Ki,"SPAN",{});var Vi=a(Nt);k(co.$$.fragment,Vi),Vi.forEach(t),Ki.forEach(t),Ta=g(Ws),It=n(Ws,"SPAN",{});var Ji=a(It);$a=d(Ji,"BigBirdPegasusModel"),Ji.forEach(t),Ws.forEach(t),Bs=g(o),L=n(o,"DIV",{class:!0});var Qe=a(L);k(uo.$$.fragment,Qe),Pa=g(Qe),po=n(Qe,"P",{});var Us=a(po);qa=d(Us,`The bare BigBirdPegasus Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ho=n(Us,"A",{href:!0});var Zi=a(Ho);za=d(Zi,"PreTrainedModel"),Zi.forEach(t),xa=d(Us,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Us.forEach(t),Fa=g(Qe),ho=n(Qe,"P",{});var Hs=a(ho);Ca=d(Hs,"This model is also a PyTorch "),go=n(Hs,"A",{href:!0,rel:!0});var Yi=a(go);Ea=d(Yi,"torch.nn.Module"),Yi.forEach(t),Ma=d(Hs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hs.forEach(t),ja=g(Qe),I=n(Qe,"DIV",{class:!0});var Ge=a(I);k(mo.$$.fragment,Ge),Sa=g(Ge),te=n(Ge,"P",{});var tt=a(te);Oa=d(tt,"The "),Ro=n(tt,"A",{href:!0});var Xi=a(Ro);Aa=d(Xi,"BigBirdPegasusModel"),Xi.forEach(t),La=d(tt," forward method, overrides the "),Dt=n(tt,"CODE",{});var ed=a(Dt);Na=d(ed,"__call__"),ed.forEach(t),Ia=d(tt," special method."),tt.forEach(t),Da=g(Ge),k(Te.$$.fragment,Ge),Qa=g(Ge),k($e.$$.fragment,Ge),Ge.forEach(t),Qe.forEach(t),Ts=g(o),se=n(o,"H2",{class:!0});var Rs=a(se);Pe=n(Rs,"A",{id:!0,class:!0,href:!0});var od=a(Pe);Qt=n(od,"SPAN",{});var td=a(Qt);k(fo.$$.fragment,td),td.forEach(t),od.forEach(t),Ga=g(Rs),Gt=n(Rs,"SPAN",{});var sd=a(Gt);Wa=d(sd,"BigBirdPegasusForConditionalGeneration"),sd.forEach(t),Rs.forEach(t),$s=g(o),N=n(o,"DIV",{class:!0});var We=a(N);k(_o.$$.fragment,We),Ua=g(We),bo=n(We,"P",{});var Ks=a(bo);Ha=d(Ks,`The BigBirdPegasus Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ko=n(Ks,"A",{href:!0});var nd=a(Ko);Ra=d(nd,"PreTrainedModel"),nd.forEach(t),Ka=d(Ks,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Ks.forEach(t),Va=g(We),vo=n(We,"P",{});var Vs=a(vo);Ja=d(Vs,"This model is also a PyTorch "),wo=n(Vs,"A",{href:!0,rel:!0});var ad=a(wo);Za=d(ad,"torch.nn.Module"),ad.forEach(t),Ya=d(Vs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vs.forEach(t),Xa=g(We),D=n(We,"DIV",{class:!0});var Ue=a(D);k(ko.$$.fragment,Ue),er=g(Ue),ne=n(Ue,"P",{});var st=a(ne);or=d(st,"The "),Vo=n(st,"A",{href:!0});var rd=a(Vo);tr=d(rd,"BigBirdPegasusForConditionalGeneration"),rd.forEach(t),sr=d(st," forward method, overrides the "),Wt=n(st,"CODE",{});var id=a(Wt);nr=d(id,"__call__"),id.forEach(t),ar=d(st," special method."),st.forEach(t),rr=g(Ue),k(qe.$$.fragment,Ue),ir=g(Ue),k(ze.$$.fragment,Ue),Ue.forEach(t),We.forEach(t),Ps=g(o),ae=n(o,"H2",{class:!0});var Js=a(ae);xe=n(Js,"A",{id:!0,class:!0,href:!0});var dd=a(xe);Ut=n(dd,"SPAN",{});var ld=a(Ut);k(yo.$$.fragment,ld),ld.forEach(t),dd.forEach(t),dr=g(Js),Ht=n(Js,"SPAN",{});var cd=a(Ht);lr=d(cd,"BigBirdPegasusForSequenceClassification"),cd.forEach(t),Js.forEach(t),qs=g(o),E=n(o,"DIV",{class:!0});var U=a(E);k(Bo.$$.fragment,U),cr=g(U),Rt=n(U,"P",{});var ud=a(Rt);ur=d(ud,`BigBirdPegasus model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),ud.forEach(t),pr=g(U),To=n(U,"P",{});var Zs=a(To);hr=d(Zs,"This model inherits from "),Jo=n(Zs,"A",{href:!0});var pd=a(Jo);gr=d(pd,"PreTrainedModel"),pd.forEach(t),mr=d(Zs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),Zs.forEach(t),fr=g(U),$o=n(U,"P",{});var Ys=a($o);_r=d(Ys,"This model is also a PyTorch "),Po=n(Ys,"A",{href:!0,rel:!0});var hd=a(Po);br=d(hd,"torch.nn.Module"),hd.forEach(t),vr=d(Ys,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ys.forEach(t),wr=g(U),x=n(U,"DIV",{class:!0});var O=a(x);k(qo.$$.fragment,O),kr=g(O),re=n(O,"P",{});var nt=a(re);yr=d(nt,"The "),Zo=n(nt,"A",{href:!0});var gd=a(Zo);Br=d(gd,"BigBirdPegasusForSequenceClassification"),gd.forEach(t),Tr=d(nt," forward method, overrides the "),Kt=n(nt,"CODE",{});var md=a(Kt);$r=d(md,"__call__"),md.forEach(t),Pr=d(nt," special method."),nt.forEach(t),qr=g(O),k(Fe.$$.fragment,O),zr=g(O),k(Ce.$$.fragment,O),xr=g(O),k(Ee.$$.fragment,O),Fr=g(O),k(Me.$$.fragment,O),Cr=g(O),k(je.$$.fragment,O),O.forEach(t),U.forEach(t),zs=g(o),ie=n(o,"H2",{class:!0});var Xs=a(ie);Se=n(Xs,"A",{id:!0,class:!0,href:!0});var fd=a(Se);Vt=n(fd,"SPAN",{});var _d=a(Vt);k(zo.$$.fragment,_d),_d.forEach(t),fd.forEach(t),Er=g(Xs),Jt=n(Xs,"SPAN",{});var bd=a(Jt);Mr=d(bd,"BigBirdPegasusForQuestionAnswering"),bd.forEach(t),Xs.forEach(t),xs=g(o),M=n(o,"DIV",{class:!0});var H=a(M);k(xo.$$.fragment,H),jr=g(H),de=n(H,"P",{});var at=a(de);Sr=d(at,`BigBirdPegasus Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),Zt=n(at,"CODE",{});var vd=a(Zt);Or=d(vd,"span start logits"),vd.forEach(t),Ar=d(at," and "),Yt=n(at,"CODE",{});var wd=a(Yt);Lr=d(wd,"span end logits"),wd.forEach(t),Nr=d(at,")."),at.forEach(t),Ir=g(H),Fo=n(H,"P",{});var en=a(Fo);Dr=d(en,"This model inherits from "),Yo=n(en,"A",{href:!0});var kd=a(Yo);Qr=d(kd,"PreTrainedModel"),kd.forEach(t),Gr=d(en,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`),en.forEach(t),Wr=g(H),Co=n(H,"P",{});var on=a(Co);Ur=d(on,"This model is also a PyTorch "),Eo=n(on,"A",{href:!0,rel:!0});var yd=a(Eo);Hr=d(yd,"torch.nn.Module"),yd.forEach(t),Rr=d(on,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),on.forEach(t),Kr=g(H),j=n(H,"DIV",{class:!0});var R=a(j);k(Mo.$$.fragment,R),Vr=g(R),le=n(R,"P",{});var rt=a(le);Jr=d(rt,"The "),Xo=n(rt,"A",{href:!0});var Bd=a(Xo);Zr=d(Bd,"BigBirdPegasusForQuestionAnswering"),Bd.forEach(t),Yr=d(rt," forward method, overrides the "),Xt=n(rt,"CODE",{});var Td=a(Xt);Xr=d(Td,"__call__"),Td.forEach(t),ei=d(rt," special method."),rt.forEach(t),oi=g(R),k(Oe.$$.fragment,R),ti=g(R),k(Ae.$$.fragment,R),si=g(R),k(Le.$$.fragment,R),R.forEach(t),H.forEach(t),Fs=g(o),ce=n(o,"H2",{class:!0});var tn=a(ce);Ne=n(tn,"A",{id:!0,class:!0,href:!0});var $d=a(Ne);es=n($d,"SPAN",{});var Pd=a(es);k(jo.$$.fragment,Pd),Pd.forEach(t),$d.forEach(t),ni=g(tn),os=n(tn,"SPAN",{});var qd=a(os);ai=d(qd,"BigBirdPegasusForCausalLM"),qd.forEach(t),tn.forEach(t),Cs=g(o),ue=n(o,"DIV",{class:!0});var sn=a(ue);k(So.$$.fragment,sn),ri=g(sn),Ie=n(sn,"DIV",{class:!0});var nn=a(Ie);k(Oo.$$.fragment,nn),ii=g(nn),k(De.$$.fragment,nn),nn.forEach(t),sn.forEach(t),this.h()},h(){p(l,"name","hf:doc:metadata"),p(l,"content",JSON.stringify(Kd)),p(u,"id","bigbirdpegasus"),p(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(u,"href","#bigbirdpegasus"),p(c,"class","relative group"),p(pe,"id","overview"),p(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(pe,"href","#overview"),p(Z,"class","relative group"),p(Re,"href","https://arxiv.org/abs/2007.14062"),p(Re,"rel","nofollow"),p(Ve,"href","https://huggingface.co/blog/big-bird"),p(Ve,"rel","nofollow"),p(Xe,"href","https://github.com/huggingface/transformers/blob/main/src/transformers/models/pegasus/tokenization_pegasus.py"),p(Xe,"rel","nofollow"),p(eo,"href","https://github.com/google-research/bigbird"),p(eo,"rel","nofollow"),p(me,"id","transformers.BigBirdPegasusConfig"),p(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(me,"href","#transformers.BigBirdPegasusConfig"),p(Y,"class","relative group"),p(Go,"href","/docs/transformers/pr_16919/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusModel"),p(so,"href","https://huggingface.co/google/bigbird-pegasus-large-arxiv"),p(so,"rel","nofollow"),p(Wo,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),p(Uo,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),p(be,"id","initializing-a-bigbirdpegasus-bigbird-pegasus-base-style-configuration->>>-configuration-="),p(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(be,"href","#initializing-a-bigbirdpegasus-bigbird-pegasus-base-style-configuration->>>-configuration-="),p(_e,"class","relative group"),p(we,"id","initializing-a-model-from-the-bigbird-pegasus-base-style-configuration->>>-model-="),p(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(we,"href","#initializing-a-model-from-the-bigbird-pegasus-base-style-configuration->>>-model-="),p(ve,"class","relative group"),p(ye,"id","accessing-the-model-configuration->>>-configuration-=-model.config"),p(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ye,"href","#accessing-the-model-configuration->>>-configuration-=-model.config"),p(ke,"class","relative group"),p(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Be,"id","transformers.BigBirdPegasusModel"),p(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Be,"href","#transformers.BigBirdPegasusModel"),p(oe,"class","relative group"),p(Ho,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),p(go,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(go,"rel","nofollow"),p(Ro,"href","/docs/transformers/pr_16919/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusModel"),p(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Pe,"id","transformers.BigBirdPegasusForConditionalGeneration"),p(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Pe,"href","#transformers.BigBirdPegasusForConditionalGeneration"),p(se,"class","relative group"),p(Ko,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),p(wo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(wo,"rel","nofollow"),p(Vo,"href","/docs/transformers/pr_16919/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusForConditionalGeneration"),p(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(xe,"id","transformers.BigBirdPegasusForSequenceClassification"),p(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(xe,"href","#transformers.BigBirdPegasusForSequenceClassification"),p(ae,"class","relative group"),p(Jo,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),p(Po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Po,"rel","nofollow"),p(Zo,"href","/docs/transformers/pr_16919/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusForSequenceClassification"),p(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Se,"id","transformers.BigBirdPegasusForQuestionAnswering"),p(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Se,"href","#transformers.BigBirdPegasusForQuestionAnswering"),p(ie,"class","relative group"),p(Yo,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),p(Eo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Eo,"rel","nofollow"),p(Xo,"href","/docs/transformers/pr_16919/en/model_doc/bigbird_pegasus#transformers.BigBirdPegasusForQuestionAnswering"),p(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ne,"id","transformers.BigBirdPegasusForCausalLM"),p(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ne,"href","#transformers.BigBirdPegasusForCausalLM"),p(ce,"class","relative group"),p(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,f){e(document.head,l),b(o,_,f),b(o,c,f),e(c,u),e(u,v),y(r,v,null),e(c,m),e(c,F),e(F,rn),b(o,hs,f),b(o,Z,f),e(Z,pe),e(pe,it),y(He,it,null),e(Z,dn),e(Z,dt),e(dt,ln),b(o,gs,f),b(o,he,f),e(he,cn),e(he,Re),e(Re,un),e(he,pn),b(o,ms,f),b(o,Io,f),e(Io,hn),b(o,fs,f),b(o,Do,f),e(Do,lt),e(lt,gn),b(o,_s,f),b(o,Qo,f),e(Qo,mn),b(o,bs,f),b(o,z,f),e(z,Ke),e(Ke,fn),e(Ke,Ve),e(Ve,_n),e(Ke,bn),e(z,vn),e(z,A),e(A,wn),e(A,ct),e(ct,kn),e(A,yn),e(A,ut),e(ut,Bn),e(A,Tn),e(A,pt),e(pt,$n),e(A,Pn),e(A,ht),e(ht,qn),e(A,zn),e(z,xn),e(z,gt),e(gt,Fn),e(z,Cn),e(z,mt),e(mt,En),e(z,Mn),e(z,Je),e(Je,jn),e(Je,ft),e(ft,Sn),e(Je,On),e(z,An),e(z,Ze),e(Ze,Ln),e(Ze,_t),e(_t,Nn),e(Ze,In),e(z,Dn),e(z,Ye),e(Ye,Qn),e(Ye,Xe),e(Xe,Gn),e(Ye,Wn),b(o,vs,f),b(o,ge,f),e(ge,Un),e(ge,eo),e(eo,Hn),e(ge,Rn),b(o,ws,f),b(o,Y,f),e(Y,me),e(me,bt),y(oo,bt,null),e(Y,Kn),e(Y,vt),e(vt,Vn),b(o,ks,f),b(o,q,f),y(to,q,null),e(q,Jn),e(q,X),e(X,Zn),e(X,Go),e(Go,Yn),e(X,Xn),e(X,so),e(so,ea),e(X,oa),e(q,ta),e(q,ee),e(ee,sa),e(ee,Wo),e(Wo,na),e(ee,aa),e(ee,Uo),e(Uo,ra),e(ee,ia),e(q,da),y(fe,q,null),e(q,la),e(q,wt),e(wt,kt),e(kt,yt),e(yt,Bt),e(Bt,ca),e(q,ua),e(q,Tt),e(Tt,$t),e($t,no),e(no,_e),e(_e,be),e(be,Pt),y(ao,Pt,null),e(_e,pa),e(_e,qt),e(qt,ha),e(no,ga),e(no,zt),e(zt,ma),e(q,fa),e(q,xt),e(xt,Ft),e(Ft,ro),e(ro,ve),e(ve,we),e(we,Ct),y(io,Ct,null),e(ve,_a),e(ve,Et),e(Et,ba),e(ro,va),e(ro,Mt),e(Mt,wa),e(q,ka),e(q,jt),e(jt,St),e(St,Ot),e(Ot,ke),e(ke,ye),e(ye,At),y(lo,At,null),e(ke,ya),e(ke,Lt),e(Lt,Ba),b(o,ys,f),b(o,oe,f),e(oe,Be),e(Be,Nt),y(co,Nt,null),e(oe,Ta),e(oe,It),e(It,$a),b(o,Bs,f),b(o,L,f),y(uo,L,null),e(L,Pa),e(L,po),e(po,qa),e(po,Ho),e(Ho,za),e(po,xa),e(L,Fa),e(L,ho),e(ho,Ca),e(ho,go),e(go,Ea),e(ho,Ma),e(L,ja),e(L,I),y(mo,I,null),e(I,Sa),e(I,te),e(te,Oa),e(te,Ro),e(Ro,Aa),e(te,La),e(te,Dt),e(Dt,Na),e(te,Ia),e(I,Da),y(Te,I,null),e(I,Qa),y($e,I,null),b(o,Ts,f),b(o,se,f),e(se,Pe),e(Pe,Qt),y(fo,Qt,null),e(se,Ga),e(se,Gt),e(Gt,Wa),b(o,$s,f),b(o,N,f),y(_o,N,null),e(N,Ua),e(N,bo),e(bo,Ha),e(bo,Ko),e(Ko,Ra),e(bo,Ka),e(N,Va),e(N,vo),e(vo,Ja),e(vo,wo),e(wo,Za),e(vo,Ya),e(N,Xa),e(N,D),y(ko,D,null),e(D,er),e(D,ne),e(ne,or),e(ne,Vo),e(Vo,tr),e(ne,sr),e(ne,Wt),e(Wt,nr),e(ne,ar),e(D,rr),y(qe,D,null),e(D,ir),y(ze,D,null),b(o,Ps,f),b(o,ae,f),e(ae,xe),e(xe,Ut),y(yo,Ut,null),e(ae,dr),e(ae,Ht),e(Ht,lr),b(o,qs,f),b(o,E,f),y(Bo,E,null),e(E,cr),e(E,Rt),e(Rt,ur),e(E,pr),e(E,To),e(To,hr),e(To,Jo),e(Jo,gr),e(To,mr),e(E,fr),e(E,$o),e($o,_r),e($o,Po),e(Po,br),e($o,vr),e(E,wr),e(E,x),y(qo,x,null),e(x,kr),e(x,re),e(re,yr),e(re,Zo),e(Zo,Br),e(re,Tr),e(re,Kt),e(Kt,$r),e(re,Pr),e(x,qr),y(Fe,x,null),e(x,zr),y(Ce,x,null),e(x,xr),y(Ee,x,null),e(x,Fr),y(Me,x,null),e(x,Cr),y(je,x,null),b(o,zs,f),b(o,ie,f),e(ie,Se),e(Se,Vt),y(zo,Vt,null),e(ie,Er),e(ie,Jt),e(Jt,Mr),b(o,xs,f),b(o,M,f),y(xo,M,null),e(M,jr),e(M,de),e(de,Sr),e(de,Zt),e(Zt,Or),e(de,Ar),e(de,Yt),e(Yt,Lr),e(de,Nr),e(M,Ir),e(M,Fo),e(Fo,Dr),e(Fo,Yo),e(Yo,Qr),e(Fo,Gr),e(M,Wr),e(M,Co),e(Co,Ur),e(Co,Eo),e(Eo,Hr),e(Co,Rr),e(M,Kr),e(M,j),y(Mo,j,null),e(j,Vr),e(j,le),e(le,Jr),e(le,Xo),e(Xo,Zr),e(le,Yr),e(le,Xt),e(Xt,Xr),e(le,ei),e(j,oi),y(Oe,j,null),e(j,ti),y(Ae,j,null),e(j,si),y(Le,j,null),b(o,Fs,f),b(o,ce,f),e(ce,Ne),e(Ne,es),y(jo,es,null),e(ce,ni),e(ce,os),e(os,ai),b(o,Cs,f),b(o,ue,f),y(So,ue,null),e(ue,ri),e(ue,Ie),y(Oo,Ie,null),e(Ie,ii),y(De,Ie,null),Es=!0},p(o,[f]){const Ao={};f&2&&(Ao.$$scope={dirty:f,ctx:o}),fe.$set(Ao);const ts={};f&2&&(ts.$$scope={dirty:f,ctx:o}),Te.$set(ts);const ss={};f&2&&(ss.$$scope={dirty:f,ctx:o}),$e.$set(ss);const ns={};f&2&&(ns.$$scope={dirty:f,ctx:o}),qe.$set(ns);const Lo={};f&2&&(Lo.$$scope={dirty:f,ctx:o}),ze.$set(Lo);const as={};f&2&&(as.$$scope={dirty:f,ctx:o}),Fe.$set(as);const rs={};f&2&&(rs.$$scope={dirty:f,ctx:o}),Ce.$set(rs);const is={};f&2&&(is.$$scope={dirty:f,ctx:o}),Ee.$set(is);const No={};f&2&&(No.$$scope={dirty:f,ctx:o}),Me.$set(No);const ds={};f&2&&(ds.$$scope={dirty:f,ctx:o}),je.$set(ds);const ls={};f&2&&(ls.$$scope={dirty:f,ctx:o}),Oe.$set(ls);const cs={};f&2&&(cs.$$scope={dirty:f,ctx:o}),Ae.$set(cs);const us={};f&2&&(us.$$scope={dirty:f,ctx:o}),Le.$set(us);const ps={};f&2&&(ps.$$scope={dirty:f,ctx:o}),De.$set(ps)},i(o){Es||(B(r.$$.fragment,o),B(He.$$.fragment,o),B(oo.$$.fragment,o),B(to.$$.fragment,o),B(fe.$$.fragment,o),B(ao.$$.fragment,o),B(io.$$.fragment,o),B(lo.$$.fragment,o),B(co.$$.fragment,o),B(uo.$$.fragment,o),B(mo.$$.fragment,o),B(Te.$$.fragment,o),B($e.$$.fragment,o),B(fo.$$.fragment,o),B(_o.$$.fragment,o),B(ko.$$.fragment,o),B(qe.$$.fragment,o),B(ze.$$.fragment,o),B(yo.$$.fragment,o),B(Bo.$$.fragment,o),B(qo.$$.fragment,o),B(Fe.$$.fragment,o),B(Ce.$$.fragment,o),B(Ee.$$.fragment,o),B(Me.$$.fragment,o),B(je.$$.fragment,o),B(zo.$$.fragment,o),B(xo.$$.fragment,o),B(Mo.$$.fragment,o),B(Oe.$$.fragment,o),B(Ae.$$.fragment,o),B(Le.$$.fragment,o),B(jo.$$.fragment,o),B(So.$$.fragment,o),B(Oo.$$.fragment,o),B(De.$$.fragment,o),Es=!0)},o(o){T(r.$$.fragment,o),T(He.$$.fragment,o),T(oo.$$.fragment,o),T(to.$$.fragment,o),T(fe.$$.fragment,o),T(ao.$$.fragment,o),T(io.$$.fragment,o),T(lo.$$.fragment,o),T(co.$$.fragment,o),T(uo.$$.fragment,o),T(mo.$$.fragment,o),T(Te.$$.fragment,o),T($e.$$.fragment,o),T(fo.$$.fragment,o),T(_o.$$.fragment,o),T(ko.$$.fragment,o),T(qe.$$.fragment,o),T(ze.$$.fragment,o),T(yo.$$.fragment,o),T(Bo.$$.fragment,o),T(qo.$$.fragment,o),T(Fe.$$.fragment,o),T(Ce.$$.fragment,o),T(Ee.$$.fragment,o),T(Me.$$.fragment,o),T(je.$$.fragment,o),T(zo.$$.fragment,o),T(xo.$$.fragment,o),T(Mo.$$.fragment,o),T(Oe.$$.fragment,o),T(Ae.$$.fragment,o),T(Le.$$.fragment,o),T(jo.$$.fragment,o),T(So.$$.fragment,o),T(Oo.$$.fragment,o),T(De.$$.fragment,o),Es=!1},d(o){t(l),o&&t(_),o&&t(c),$(r),o&&t(hs),o&&t(Z),$(He),o&&t(gs),o&&t(he),o&&t(ms),o&&t(Io),o&&t(fs),o&&t(Do),o&&t(_s),o&&t(Qo),o&&t(bs),o&&t(z),o&&t(vs),o&&t(ge),o&&t(ws),o&&t(Y),$(oo),o&&t(ks),o&&t(q),$(to),$(fe),$(ao),$(io),$(lo),o&&t(ys),o&&t(oe),$(co),o&&t(Bs),o&&t(L),$(uo),$(mo),$(Te),$($e),o&&t(Ts),o&&t(se),$(fo),o&&t($s),o&&t(N),$(_o),$(ko),$(qe),$(ze),o&&t(Ps),o&&t(ae),$(yo),o&&t(qs),o&&t(E),$(Bo),$(qo),$(Fe),$(Ce),$(Ee),$(Me),$(je),o&&t(zs),o&&t(ie),$(zo),o&&t(xs),o&&t(M),$(xo),$(Mo),$(Oe),$(Ae),$(Le),o&&t(Fs),o&&t(ce),$(jo),o&&t(Cs),o&&t(ue),$(So),$(Oo),$(De)}}}const Kd={local:"bigbirdpegasus",sections:[{local:"overview",title:"Overview"},{local:"transformers.BigBirdPegasusConfig",title:"BigBirdPegasusConfig"},{local:"transformers.BigBirdPegasusModel",title:"BigBirdPegasusModel"},{local:"transformers.BigBirdPegasusForConditionalGeneration",title:"BigBirdPegasusForConditionalGeneration"},{local:"transformers.BigBirdPegasusForSequenceClassification",title:"BigBirdPegasusForSequenceClassification"},{local:"transformers.BigBirdPegasusForQuestionAnswering",title:"BigBirdPegasusForQuestionAnswering"},{local:"transformers.BigBirdPegasusForCausalLM",title:"BigBirdPegasusForCausalLM"}],title:"BigBirdPegasus"};function Vd(P){return Ed(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class tl extends zd{constructor(l){super();xd(this,l,Vd,Rd,Fd,{})}}export{tl as default,Kd as metadata};
