import{S as pf,i as uf,s as mf,e as n,k as c,w as T,t as r,M as ff,c as s,d as t,m as h,a,x as k,h as d,b as p,F as e,g,y as w,q as y,o as E,B as q,v as _f,L as je}from"../../chunks/vendor-6b77c823.js";import{T as Mo}from"../../chunks/Tip-39098574.js";import{D as x}from"../../chunks/Docstring-1088f2fb.js";import{C as Ie}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as fe}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Ne}from"../../chunks/ExampleCodeBlock-5212b321.js";function gf($){let l,b,u,m,v;return m=new Ie({props:{code:"",highlighted:""}}),{c(){l=n("p"),b=r("Example:"),u=c(),T(m.$$.fragment)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Example:"),f.forEach(t),u=h(i),k(m.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,u,f),w(m,i,f),v=!0},p:je,i(i){v||(y(m.$$.fragment,i),v=!0)},o(i){E(m.$$.fragment,i),v=!1},d(i){i&&t(l),i&&t(u),q(m,i)}}}function bf($){let l,b,u,m,v;return{c(){l=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var D=a(u);m=d(D,"Module"),D.forEach(t),v=d(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){g(i,l,f),e(l,b),e(l,u),e(u,m),e(l,v)},d(i){i&&t(l)}}}function vf($){let l,b,u,m,v;return m=new Ie({props:{code:`from transformers import LEDTokenizer, LEDModel
import torch

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = LEDModel.from_pretrained("allenai/led-base-16384")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDModel.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=n("p"),b=r("Example:"),u=c(),T(m.$$.fragment)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Example:"),f.forEach(t),u=h(i),k(m.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,u,f),w(m,i,f),v=!0},p:je,i(i){v||(y(m.$$.fragment,i),v=!0)},o(i){E(m.$$.fragment,i),v=!1},d(i){i&&t(l),i&&t(u),q(m,i)}}}function Tf($){let l,b,u,m,v;return{c(){l=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var D=a(u);m=d(D,"Module"),D.forEach(t),v=d(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){g(i,l,f),e(l,b),e(l,u),e(u,m),e(l,v)},d(i){i&&t(l)}}}function kf($){let l,b,u,m,v;return m=new Ie({props:{code:`from transformers import LEDTokenizer, LEDForConditionalGeneration

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
TXT = "My friends are <mask> but they eat too many carbs."

model = LEDForConditionalGeneration.from_pretrained("allenai/led-base-16384")
input_ids = tokenizer([TXT], return_tensors="pt")["input_ids"]

prediction = model.generate(input_ids)[0]
print(tokenizer.decode(prediction, skip_special_tokens=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction = model.generate(input_ids)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(prediction, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),{c(){l=n("p"),b=r("Conditional generation example:"),u=c(),T(m.$$.fragment)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Conditional generation example:"),f.forEach(t),u=h(i),k(m.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,u,f),w(m,i,f),v=!0},p:je,i(i){v||(y(m.$$.fragment,i),v=!0)},o(i){E(m.$$.fragment,i),v=!1},d(i){i&&t(l),i&&t(u),q(m,i)}}}function wf($){let l,b,u,m,v;return m=new Ie({props:{code:`import torch
from transformers import LEDTokenizer, LEDForConditionalGeneration

model = LEDForConditionalGeneration.from_pretrained("allenai/led-large-16384-arxiv")
tokenizer = LEDTokenizer.from_pretrained("allenai/led-large-16384-arxiv")

ARTICLE_TO_SUMMARIZE = '''Transformers (Vaswani et al., 2017) have achieved state-of-the-art
    results in a wide range of natural language tasks including generative language modeling
    (Dai et al., 2019; Radford et al., 2019) and discriminative ... language understanding (Devlin et al., 2019).
    This success is partly due to the self-attention component which enables the network to capture contextual
    information from the entire sequence. While powerful, the memory and computational requirements of
    self-attention grow quadratically with sequence length, making it infeasible (or very expensive) to
    process long sequences. To address this limitation, we present Longformer, a modified Transformer
    architecture with a self-attention operation that scales linearly with the sequence length, making it
    versatile for processing long documents (Fig 1). This is an advantage for natural language tasks such as
    long document classification, question answering (QA), and coreference resolution, where existing approaches
    partition or shorten the long context into smaller sequences that fall within the typical 512 token limit
    of BERT-style pretrained models. Such partitioning could potentially result in loss of important
    cross-partition information, and to mitigate this problem, existing methods often rely on complex
    architectures to address such interactions. On the other hand, our proposed Longformer is able to build
    contextual representations of the entire context using multiple layers of attention, reducing the need for
    task-specific architectures.'''
inputs = tokenizer.encode(ARTICLE_TO_SUMMARIZE, return_tensors="pt")

# Global attention on the first token (cf. Beltagy et al. 2020)
global_attention_mask = torch.zeros_like(inputs)
global_attention_mask[:, 0] = 1

# Generate Summary
summary_ids = model.generate(inputs, global_attention_mask=global_attention_mask, num_beams=3, max_length=32)
print(tokenizer.decode(summary_ids[0], skip_special_tokens=True, clean_up_tokenization_spaces=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;allenai/led-large-16384-arxiv&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-large-16384-arxiv&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&#x27;&#x27;&#x27;Transformers (Vaswani et al., 2017) have achieved state-of-the-art
<span class="hljs-meta">... </span>    results in a wide range of natural language tasks including generative language modeling
<span class="hljs-meta">... </span>    (Dai et al., 2019; Radford et al., 2019) and discriminative ... language understanding (Devlin et al., 2019).
<span class="hljs-meta">... </span>    This success is partly due to the self-attention component which enables the network to capture contextual
<span class="hljs-meta">... </span>    information from the entire sequence. While powerful, the memory and computational requirements of
<span class="hljs-meta">... </span>    self-attention grow quadratically with sequence length, making it infeasible (or very expensive) to
<span class="hljs-meta">... </span>    process long sequences. To address this limitation, we present Longformer, a modified Transformer
<span class="hljs-meta">... </span>    architecture with a self-attention operation that scales linearly with the sequence length, making it
<span class="hljs-meta">... </span>    versatile for processing long documents (Fig 1). This is an advantage for natural language tasks such as
<span class="hljs-meta">... </span>    long document classification, question answering (QA), and coreference resolution, where existing approaches
<span class="hljs-meta">... </span>    partition or shorten the long context into smaller sequences that fall within the typical 512 token limit
<span class="hljs-meta">... </span>    of BERT-style pretrained models. Such partitioning could potentially result in loss of important
<span class="hljs-meta">... </span>    cross-partition information, and to mitigate this problem, existing methods often rely on complex
<span class="hljs-meta">... </span>    architectures to address such interactions. On the other hand, our proposed Longformer is able to build
<span class="hljs-meta">... </span>    contextual representations of the entire context using multiple layers of attention, reducing the need for
<span class="hljs-meta">... </span>    task-specific architectures.&#x27;&#x27;&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer.encode(ARTICLE_TO_SUMMARIZE, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Global attention on the first token (cf. Beltagy et al. 2020)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask = torch.zeros_like(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask[:, <span class="hljs-number">0</span>] = <span class="hljs-number">1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs, global_attention_mask=global_attention_mask, num_beams=<span class="hljs-number">3</span>, max_length=<span class="hljs-number">32</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">True</span>))`}}),{c(){l=n("p"),b=r("Summarization example:"),u=c(),T(m.$$.fragment)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Summarization example:"),f.forEach(t),u=h(i),k(m.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,u,f),w(m,i,f),v=!0},p:je,i(i){v||(y(m.$$.fragment,i),v=!0)},o(i){E(m.$$.fragment,i),v=!1},d(i){i&&t(l),i&&t(u),q(m,i)}}}function yf($){let l,b,u,m,v;return{c(){l=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var D=a(u);m=d(D,"Module"),D.forEach(t),v=d(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){g(i,l,f),e(l,b),e(l,u),e(u,m),e(l,v)},d(i){i&&t(l)}}}function Ef($){let l,b,u,m,v;return m=new Ie({props:{code:`import torch
from transformers import LEDTokenizer, LEDForSequenceClassification

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = LEDForSequenceClassification.from_pretrained("allenai/led-base-16384")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){l=n("p"),b=r("Example of single-label classification:"),u=c(),T(m.$$.fragment)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Example of single-label classification:"),f.forEach(t),u=h(i),k(m.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,u,f),w(m,i,f),v=!0},p:je,i(i){v||(y(m.$$.fragment,i),v=!0)},o(i){E(m.$$.fragment,i),v=!1},d(i){i&&t(l),i&&t(u),q(m,i)}}}function qf($){let l,b;return l=new Ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = LEDForSequenceClassification.from_pretrained("allenai/led-base-16384", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(u){k(l.$$.fragment,u)},m(u,m){w(l,u,m),b=!0},p:je,i(u){b||(y(l.$$.fragment,u),b=!0)},o(u){E(l.$$.fragment,u),b=!1},d(u){q(l,u)}}}function Lf($){let l,b,u,m,v;return m=new Ie({props:{code:`import torch
from transformers import LEDTokenizer, LEDForSequenceClassification

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = LEDForSequenceClassification.from_pretrained("allenai/led-base-16384", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){l=n("p"),b=r("Example of multi-label classification:"),u=c(),T(m.$$.fragment)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Example of multi-label classification:"),f.forEach(t),u=h(i),k(m.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,u,f),w(m,i,f),v=!0},p:je,i(i){v||(y(m.$$.fragment,i),v=!0)},o(i){E(m.$$.fragment,i),v=!1},d(i){i&&t(l),i&&t(u),q(m,i)}}}function $f($){let l,b;return l=new Ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = LEDForSequenceClassification.from_pretrained(
    "allenai/led-base-16384", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(l.$$.fragment)},l(u){k(l.$$.fragment,u)},m(u,m){w(l,u,m),b=!0},p:je,i(u){b||(y(l.$$.fragment,u),b=!0)},o(u){E(l.$$.fragment,u),b=!1},d(u){q(l,u)}}}function Df($){let l,b,u,m,v;return{c(){l=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var D=a(u);m=d(D,"Module"),D.forEach(t),v=d(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){g(i,l,f),e(l,b),e(l,u),e(u,m),e(l,v)},d(i){i&&t(l)}}}function Ff($){let l,b,u,m,v;return m=new Ie({props:{code:`from transformers import LEDTokenizer, LEDForQuestionAnswering
import torch

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = LEDForQuestionAnswering.from_pretrained("allenai/led-base-16384")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){l=n("p"),b=r("Example:"),u=c(),T(m.$$.fragment)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Example:"),f.forEach(t),u=h(i),k(m.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,u,f),w(m,i,f),v=!0},p:je,i(i){v||(y(m.$$.fragment,i),v=!0)},o(i){E(m.$$.fragment,i),v=!1},d(i){i&&t(l),i&&t(u),q(m,i)}}}function zf($){let l,b;return l=new Ie({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(u){k(l.$$.fragment,u)},m(u,m){w(l,u,m),b=!0},p:je,i(u){b||(y(l.$$.fragment,u),b=!0)},o(u){E(l.$$.fragment,u),b=!1},d(u){q(l,u)}}}function xf($){let l,b,u,m,v,i,f,D,Be,_e,F,Z,W,oe,Ge,U,Qe,Fe,B,V,ne,ye,C,A,ge,se,ze,be,R,He,xe,O,We,Y,M,S,G,Ue,Ve,j,Re,ae,Ee;return{c(){l=n("p"),b=r("TF 2.0 models accepts two formats as inputs:"),u=c(),m=n("ul"),v=n("li"),i=r("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),D=n("li"),Be=r("having all inputs as a list, tuple or dict in the first positional arguments."),_e=c(),F=n("p"),Z=r("This second option is useful when using "),W=n("code"),oe=r("tf.keras.Model.fit"),Ge=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=n("code"),Qe=r("model(inputs)"),Fe=r("."),B=c(),V=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye=c(),C=n("ul"),A=n("li"),ge=r("a single Tensor with "),se=n("code"),ze=r("input_ids"),be=r(" only and nothing else: "),R=n("code"),He=r("model(input_ids)"),xe=c(),O=n("li"),We=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=n("code"),M=r("model([input_ids, attention_mask])"),S=r(" or "),G=n("code"),Ue=r("model([input_ids, attention_mask, token_type_ids])"),Ve=c(),j=n("li"),Re=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ae=n("code"),Ee=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(L){l=s(L,"P",{});var z=a(l);b=d(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),u=h(L),m=s(L,"UL",{});var re=a(m);v=s(re,"LI",{});var at=a(v);i=d(at,"having all inputs as keyword arguments (like PyTorch models), or"),at.forEach(t),f=h(re),D=s(re,"LI",{});var rt=a(D);Be=d(rt,"having all inputs as a list, tuple or dict in the first positional arguments."),rt.forEach(t),re.forEach(t),_e=h(L),F=s(L,"P",{});var I=a(F);Z=d(I,"This second option is useful when using "),W=s(I,"CODE",{});var dt=a(W);oe=d(dt,"tf.keras.Model.fit"),dt.forEach(t),Ge=d(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=s(I,"CODE",{});var it=a(U);Qe=d(it,"model(inputs)"),it.forEach(t),Fe=d(I,"."),I.forEach(t),B=h(L),V=s(L,"P",{});var Me=a(V);ne=d(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(t),ye=h(L),C=s(L,"UL",{});var K=a(C);A=s(K,"LI",{});var de=a(A);ge=d(de,"a single Tensor with "),se=s(de,"CODE",{});var Se=a(se);ze=d(Se,"input_ids"),Se.forEach(t),be=d(de," only and nothing else: "),R=s(de,"CODE",{});var lt=a(R);He=d(lt,"model(input_ids)"),lt.forEach(t),de.forEach(t),xe=h(K),O=s(K,"LI",{});var ie=a(O);We=d(ie,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=s(ie,"CODE",{});var ct=a(Y);M=d(ct,"model([input_ids, attention_mask])"),ct.forEach(t),S=d(ie," or "),G=s(ie,"CODE",{});var le=a(G);Ue=d(le,"model([input_ids, attention_mask, token_type_ids])"),le.forEach(t),ie.forEach(t),Ve=h(K),j=s(K,"LI",{});var Ke=a(j);Re=d(Ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ae=s(Ke,"CODE",{});var Xe=a(ae);Ee=d(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ke.forEach(t),K.forEach(t)},m(L,z){g(L,l,z),e(l,b),g(L,u,z),g(L,m,z),e(m,v),e(v,i),e(m,f),e(m,D),e(D,Be),g(L,_e,z),g(L,F,z),e(F,Z),e(F,W),e(W,oe),e(F,Ge),e(F,U),e(U,Qe),e(F,Fe),g(L,B,z),g(L,V,z),e(V,ne),g(L,ye,z),g(L,C,z),e(C,A),e(A,ge),e(A,se),e(se,ze),e(A,be),e(A,R),e(R,He),e(C,xe),e(C,O),e(O,We),e(O,Y),e(Y,M),e(O,S),e(O,G),e(G,Ue),e(C,Ve),e(C,j),e(j,Re),e(j,ae),e(ae,Ee)},d(L){L&&t(l),L&&t(u),L&&t(m),L&&t(_e),L&&t(F),L&&t(B),L&&t(V),L&&t(ye),L&&t(C)}}}function Mf($){let l,b,u,m,v;return{c(){l=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var D=a(u);m=d(D,"Module"),D.forEach(t),v=d(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){g(i,l,f),e(l,b),e(l,u),e(u,m),e(l,v)},d(i){i&&t(l)}}}function Sf($){let l,b,u,m,v;return m=new Ie({props:{code:`from transformers import LEDTokenizer, TFLEDModel
import tensorflow as tf

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = TFLEDModel.from_pretrained("allenai/led-base-16384")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, TFLEDModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLEDModel.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=n("p"),b=r("Example:"),u=c(),T(m.$$.fragment)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Example:"),f.forEach(t),u=h(i),k(m.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,u,f),w(m,i,f),v=!0},p:je,i(i){v||(y(m.$$.fragment,i),v=!0)},o(i){E(m.$$.fragment,i),v=!1},d(i){i&&t(l),i&&t(u),q(m,i)}}}function Cf($){let l,b,u,m,v,i,f,D,Be,_e,F,Z,W,oe,Ge,U,Qe,Fe,B,V,ne,ye,C,A,ge,se,ze,be,R,He,xe,O,We,Y,M,S,G,Ue,Ve,j,Re,ae,Ee;return{c(){l=n("p"),b=r("TF 2.0 models accepts two formats as inputs:"),u=c(),m=n("ul"),v=n("li"),i=r("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),D=n("li"),Be=r("having all inputs as a list, tuple or dict in the first positional arguments."),_e=c(),F=n("p"),Z=r("This second option is useful when using "),W=n("code"),oe=r("tf.keras.Model.fit"),Ge=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=n("code"),Qe=r("model(inputs)"),Fe=r("."),B=c(),V=n("p"),ne=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye=c(),C=n("ul"),A=n("li"),ge=r("a single Tensor with "),se=n("code"),ze=r("input_ids"),be=r(" only and nothing else: "),R=n("code"),He=r("model(input_ids)"),xe=c(),O=n("li"),We=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=n("code"),M=r("model([input_ids, attention_mask])"),S=r(" or "),G=n("code"),Ue=r("model([input_ids, attention_mask, token_type_ids])"),Ve=c(),j=n("li"),Re=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ae=n("code"),Ee=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(L){l=s(L,"P",{});var z=a(l);b=d(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),u=h(L),m=s(L,"UL",{});var re=a(m);v=s(re,"LI",{});var at=a(v);i=d(at,"having all inputs as keyword arguments (like PyTorch models), or"),at.forEach(t),f=h(re),D=s(re,"LI",{});var rt=a(D);Be=d(rt,"having all inputs as a list, tuple or dict in the first positional arguments."),rt.forEach(t),re.forEach(t),_e=h(L),F=s(L,"P",{});var I=a(F);Z=d(I,"This second option is useful when using "),W=s(I,"CODE",{});var dt=a(W);oe=d(dt,"tf.keras.Model.fit"),dt.forEach(t),Ge=d(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=s(I,"CODE",{});var it=a(U);Qe=d(it,"model(inputs)"),it.forEach(t),Fe=d(I,"."),I.forEach(t),B=h(L),V=s(L,"P",{});var Me=a(V);ne=d(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Me.forEach(t),ye=h(L),C=s(L,"UL",{});var K=a(C);A=s(K,"LI",{});var de=a(A);ge=d(de,"a single Tensor with "),se=s(de,"CODE",{});var Se=a(se);ze=d(Se,"input_ids"),Se.forEach(t),be=d(de," only and nothing else: "),R=s(de,"CODE",{});var lt=a(R);He=d(lt,"model(input_ids)"),lt.forEach(t),de.forEach(t),xe=h(K),O=s(K,"LI",{});var ie=a(O);We=d(ie,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=s(ie,"CODE",{});var ct=a(Y);M=d(ct,"model([input_ids, attention_mask])"),ct.forEach(t),S=d(ie," or "),G=s(ie,"CODE",{});var le=a(G);Ue=d(le,"model([input_ids, attention_mask, token_type_ids])"),le.forEach(t),ie.forEach(t),Ve=h(K),j=s(K,"LI",{});var Ke=a(j);Re=d(Ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ae=s(Ke,"CODE",{});var Xe=a(ae);Ee=d(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ke.forEach(t),K.forEach(t)},m(L,z){g(L,l,z),e(l,b),g(L,u,z),g(L,m,z),e(m,v),e(v,i),e(m,f),e(m,D),e(D,Be),g(L,_e,z),g(L,F,z),e(F,Z),e(F,W),e(W,oe),e(F,Ge),e(F,U),e(U,Qe),e(F,Fe),g(L,B,z),g(L,V,z),e(V,ne),g(L,ye,z),g(L,C,z),e(C,A),e(A,ge),e(A,se),e(se,ze),e(A,be),e(A,R),e(R,He),e(C,xe),e(C,O),e(O,We),e(O,Y),e(Y,M),e(O,S),e(O,G),e(G,Ue),e(C,Ve),e(C,j),e(j,Re),e(j,ae),e(ae,Ee)},d(L){L&&t(l),L&&t(u),L&&t(m),L&&t(_e),L&&t(F),L&&t(B),L&&t(V),L&&t(ye),L&&t(C)}}}function Of($){let l,b,u,m,v;return{c(){l=n("p"),b=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=n("code"),m=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s(f,"CODE",{});var D=a(u);m=d(D,"Module"),D.forEach(t),v=d(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(i,f){g(i,l,f),e(l,b),e(l,u),e(u,m),e(l,v)},d(i){i&&t(l)}}}function Af($){let l,b,u,m,v;return m=new Ie({props:{code:`from transformers import LEDTokenizer, TFLEDForConditionalGeneration
import tensorflow as tf

mname = "allenai/led-base-16384"
tokenizer = LEDTokenizer.from_pretrained(mname)
TXT = "My friends are <mask> but they eat too many carbs."
model = TFLEDForConditionalGeneration.from_pretrained(mname)
batch = tokenizer([TXT], return_tensors="tf")
logits = model(inputs=batch.input_ids).logits
probs = tf.nn.softmax(logits[0])
# probs[5] is associated with the mask token`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, TFLEDForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLEDForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(inputs=batch.input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){l=n("p"),b=r("Examples:"),u=c(),T(m.$$.fragment)},l(i){l=s(i,"P",{});var f=a(l);b=d(f,"Examples:"),f.forEach(t),u=h(i),k(m.$$.fragment,i)},m(i,f){g(i,l,f),e(l,b),g(i,u,f),w(m,i,f),v=!0},p:je,i(i){v||(y(m.$$.fragment,i),v=!0)},o(i){E(m.$$.fragment,i),v=!1},d(i){i&&t(l),i&&t(u),q(m,i)}}}function Pf($){let l,b,u,m,v,i,f,D,Be,_e,F,Z,W,oe,Ge,U,Qe,Fe,B,V,ne,ye,C,A,ge,se,ze,be,R,He,xe,O,We,Y,M,S,G,Ue,Ve,j,Re,ae,Ee,L,z,re,at,rt,I,dt,it,Me,K,de,Se,lt,ie,ct,le,Ke,Xe,Bd,Gd,As,Qd,Hd,Wd,qe,Ud,Ps,Vd,Rd,Ns,Kd,Xd,Yn,Jd,Zd,js,Yd,ei,ti,X,oi,Is,ni,si,Bs,ai,ri,es,di,ii,Gs,li,ci,Qs,hi,pi,Hs,ui,mi,fi,ce,_i,Ws,gi,bi,Us,vi,Ti,Vs,ki,wi,Rs,yi,Ei,Ks,qi,Li,$i,So,Di,Co,Fi,zi,xi,Oo,Mi,Ao,Si,Ci,wr,Nt,Oi,Po,Ai,Pi,yr,ht,jt,Xs,No,Ni,Js,ji,Er,P,jo,Ii,pt,Bi,ts,Gi,Qi,Io,Hi,Wi,Ui,ut,Vi,os,Ri,Ki,ns,Xi,Ji,Zi,It,Yi,Zs,Ys,ea,ta,el,tl,oa,na,sa,Bt,Gt,aa,Bo,ol,ra,nl,sl,da,ia,Go,Qt,Ht,la,Qo,al,ca,rl,dl,ha,il,ll,pa,ua,ma,Wt,Ut,fa,Ho,cl,_a,hl,qr,mt,Vt,ga,Wo,pl,ba,ul,Lr,N,Uo,ml,va,fl,_l,Rt,ss,gl,bl,as,vl,Tl,kl,Vo,wl,rs,yl,El,ql,Je,Ro,Ll,Ta,$l,Dl,Ko,ds,Fl,ka,zl,xl,is,Ml,wa,Sl,Cl,Kt,Xo,Ol,Jo,Al,ya,Pl,Nl,jl,Xt,Zo,Il,Ea,Bl,Gl,ls,Yo,$r,ft,Jt,qa,en,Ql,La,Hl,Dr,Le,tn,Wl,on,Ul,$a,Vl,Rl,Kl,Zt,cs,Xl,Jl,hs,Zl,Yl,ec,nn,tc,ps,oc,nc,Fr,_t,Yt,Da,sn,sc,Fa,ac,zr,gt,an,rc,za,dc,xr,bt,rn,ic,xa,lc,Mr,vt,dn,cc,Ma,hc,Sr,Tt,ln,pc,Sa,uc,Cr,kt,cn,mc,Ca,fc,Or,wt,hn,_c,Oa,gc,Ar,yt,pn,bc,Aa,vc,Pr,Et,un,Tc,Pa,kc,Nr,qt,eo,Na,mn,wc,ja,yc,jr,$e,fn,Ec,_n,qc,us,Lc,$c,Dc,gn,Fc,bn,zc,xc,Mc,Ce,vn,Sc,Lt,Cc,ms,Oc,Ac,Ia,Pc,Nc,jc,to,Ic,oo,Ir,$t,no,Ba,Tn,Bc,Ga,Gc,Br,De,kn,Qc,wn,Hc,fs,Wc,Uc,Vc,yn,Rc,En,Kc,Xc,Jc,ve,qn,Zc,Dt,Yc,_s,eh,th,Qa,oh,nh,sh,so,ah,ao,rh,ro,Gr,Ft,io,Ha,Ln,dh,Wa,ih,Qr,he,$n,lh,Ua,ch,hh,Dn,ph,gs,uh,mh,fh,Fn,_h,zn,gh,bh,vh,Q,xn,Th,zt,kh,bs,wh,yh,Va,Eh,qh,Lh,lo,$h,co,Dh,ho,Fh,po,zh,uo,Hr,xt,mo,Ra,Mn,xh,Ka,Mh,Wr,pe,Sn,Sh,Mt,Ch,Xa,Oh,Ah,Ja,Ph,Nh,jh,Cn,Ih,vs,Bh,Gh,Qh,On,Hh,An,Wh,Uh,Vh,Te,Pn,Rh,St,Kh,Ts,Xh,Jh,Za,Zh,Yh,ep,fo,tp,_o,op,go,Ur,Ct,bo,Ya,Nn,np,er,sp,Vr,ue,jn,ap,In,rp,ks,dp,ip,lp,Bn,cp,Gn,hp,pp,up,vo,mp,Oe,Qn,fp,Ot,_p,ws,gp,bp,tr,vp,Tp,kp,To,wp,ko,Rr,At,wo,or,Hn,yp,nr,Ep,Kr,me,Wn,qp,Un,Lp,ys,$p,Dp,Fp,Vn,zp,Rn,xp,Mp,Sp,yo,Cp,Ae,Kn,Op,Pt,Ap,Es,Pp,Np,sr,jp,Ip,Bp,Eo,Gp,qo,Xr;return i=new fe({}),oe=new fe({}),No=new fe({}),jo=new x({props:{name:"class transformers.LEDConfig",anchor:"transformers.LEDConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_encoder_position_embeddings",val:" = 16384"},{name:"max_decoder_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LEDConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the LED model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDModel">LEDModel</a> or <a href="/docs/transformers/pr_17112/en/model_doc/led#transformers.TFLEDModel">TFLEDModel</a>.`,name:"vocab_size"},{anchor:"transformers.LEDConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.LEDConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.LEDConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.LEDConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.LEDConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.LEDConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.LEDConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.LEDConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.LEDConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.LEDConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.LEDConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.LEDConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.LEDConfig.max_encoder_position_embeddings",description:`<strong>max_encoder_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 16384) &#x2014;
The maximum sequence length that the encoder might ever be used with.`,name:"max_encoder_position_embeddings"},{anchor:"transformers.LEDConfig.max_decoder_position_embeddings",description:`<strong>max_decoder_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 16384) &#x2014;
The maximum sequence length that the decoder might ever be used with.`,name:"max_decoder_position_embeddings"},{anchor:"transformers.LEDConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.LEDConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/led/configuration_led.py#L31"}}),It=new Ne({props:{anchor:"transformers.LEDConfig.example",$$slots:{default:[gf]},$$scope:{ctx:$}}}),Bo=new fe({}),Qo=new fe({}),Ho=new fe({}),Wo=new fe({}),Uo=new x({props:{name:"class transformers.LEDTokenizer",anchor:"transformers.LEDTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/led/tokenization_led.py#L43"}}),Ro=new x({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/bart/tokenization_bart.py#L338",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Xo=new x({props:{name:"get_special_tokens_mask",anchor:"transformers.LEDTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/bart/tokenization_bart.py#L363",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Zo=new x({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/bart/tokenization_bart.py#L390",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Yo=new x({props:{name:"save_vocabulary",anchor:"transformers.LEDTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/bart/tokenization_bart.py#L309"}}),en=new fe({}),tn=new x({props:{name:"class transformers.LEDTokenizerFast",anchor:"transformers.LEDTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/led/tokenization_led_fast.py#L44"}}),sn=new fe({}),an=new x({props:{name:"class transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/led/modeling_led.py#L1125"}}),rn=new x({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/led/modeling_led.py#L1168"}}),dn=new x({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/led/modeling_led.py#L1236"}}),ln=new x({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/led/modeling_led.py#L1303"}}),cn=new x({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.start_logits",description:`<strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.end_logits",description:`<strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/led/modeling_led.py#L1370"}}),hn=new x({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/led/modeling_tf_led.py#L1330"}}),pn=new x({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/led/modeling_tf_led.py#L1373"}}),un=new x({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/led/modeling_tf_led.py#L1441"}}),mn=new fe({}),fn=new x({props:{name:"class transformers.LEDModel",anchor:"transformers.LEDModel",parameters:[{name:"config",val:": LEDConfig"}],parametersDescription:[{anchor:"transformers.LEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_17112/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/led/modeling_led.py#L2159"}}),vn=new x({props:{name:"forward",anchor:"transformers.LEDModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/pr_17112/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17112/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/pr_17112/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17112/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and modify
to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the
default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDModel.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer
paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LEDModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LEDModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LEDModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LEDModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.LEDModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LEDModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17112/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/led/modeling_led.py#L2186",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17112/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17112/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new Mo({props:{$$slots:{default:[bf]},$$scope:{ctx:$}}}),oo=new Ne({props:{anchor:"transformers.LEDModel.forward.example",$$slots:{default:[vf]},$$scope:{ctx:$}}}),Tn=new fe({}),kn=new x({props:{name:"class transformers.LEDForConditionalGeneration",anchor:"transformers.LEDForConditionalGeneration",parameters:[{name:"config",val:": LEDConfig"}],parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_17112/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/led/modeling_led.py#L2282"}}),qn=new x({props:{name:"forward",anchor:"transformers.LEDForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/pr_17112/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17112/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/pr_17112/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17112/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and modify
to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the
default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer
paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.LEDForConditionalGeneration.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17112/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/led/modeling_led.py#L2326",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17112/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17112/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),so=new Mo({props:{$$slots:{default:[Tf]},$$scope:{ctx:$}}}),ao=new Ne({props:{anchor:"transformers.LEDForConditionalGeneration.forward.example",$$slots:{default:[kf]},$$scope:{ctx:$}}}),ro=new Ne({props:{anchor:"transformers.LEDForConditionalGeneration.forward.example-2",$$slots:{default:[wf]},$$scope:{ctx:$}}}),Ln=new fe({}),$n=new x({props:{name:"class transformers.LEDForSequenceClassification",anchor:"transformers.LEDForSequenceClassification",parameters:[{name:"config",val:": LEDConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_17112/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/led/modeling_led.py#L2475"}}),xn=new x({props:{name:"forward",anchor:"transformers.LEDForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/pr_17112/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17112/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/pr_17112/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17112/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and modify
to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the
default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer
paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.LEDForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17112/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/led/modeling_led.py#L2488",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17112/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17112/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),lo=new Mo({props:{$$slots:{default:[yf]},$$scope:{ctx:$}}}),co=new Ne({props:{anchor:"transformers.LEDForSequenceClassification.forward.example",$$slots:{default:[Ef]},$$scope:{ctx:$}}}),ho=new Ne({props:{anchor:"transformers.LEDForSequenceClassification.forward.example-2",$$slots:{default:[qf]},$$scope:{ctx:$}}}),po=new Ne({props:{anchor:"transformers.LEDForSequenceClassification.forward.example-3",$$slots:{default:[Lf]},$$scope:{ctx:$}}}),uo=new Ne({props:{anchor:"transformers.LEDForSequenceClassification.forward.example-4",$$slots:{default:[$f]},$$scope:{ctx:$}}}),Mn=new fe({}),Sn=new x({props:{name:"class transformers.LEDForQuestionAnswering",anchor:"transformers.LEDForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_17112/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/led/modeling_led.py#L2603"}}),Pn=new x({props:{name:"forward",anchor:"transformers.LEDForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/pr_17112/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17112/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/pr_17112/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17112/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and modify
to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the
default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer
paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.LEDForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17112/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LEDForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/led/modeling_led.py#L2615",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17112/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17112/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fo=new Mo({props:{$$slots:{default:[Df]},$$scope:{ctx:$}}}),_o=new Ne({props:{anchor:"transformers.LEDForQuestionAnswering.forward.example",$$slots:{default:[Ff]},$$scope:{ctx:$}}}),go=new Ne({props:{anchor:"transformers.LEDForQuestionAnswering.forward.example-2",$$slots:{default:[zf]},$$scope:{ctx:$}}}),Nn=new fe({}),jn=new x({props:{name:"class transformers.TFLEDModel",anchor:"transformers.TFLEDModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17112/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/led/modeling_tf_led.py#L2191"}}),vo=new Mo({props:{$$slots:{default:[xf]},$$scope:{ctx:$}}}),Qn=new x({props:{name:"call",anchor:"transformers.TFLEDModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput, NoneType] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17112/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17112/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17112/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/pr_17112/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17112/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFLEDModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFLEDModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLEDModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFLEDModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFLEDModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFLEDModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFLEDModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLEDModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLEDModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17112/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLEDModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/led/modeling_tf_led.py#L2203",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17112/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
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
<li>
<p><strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17112/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),To=new Mo({props:{$$slots:{default:[Mf]},$$scope:{ctx:$}}}),ko=new Ne({props:{anchor:"transformers.TFLEDModel.call.example",$$slots:{default:[Sf]},$$scope:{ctx:$}}}),Hn=new fe({}),Wn=new x({props:{name:"class transformers.TFLEDForConditionalGeneration",anchor:"transformers.TFLEDForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17112/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/led/modeling_tf_led.py#L2279"}}),yo=new Mo({props:{$$slots:{default:[Cf]},$$scope:{ctx:$}}}),Kn=new x({props:{name:"call",anchor:"transformers.TFLEDForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17112/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_17112/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17112/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/pr_17112/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17112/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFLEDForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFLEDForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFLEDForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLEDForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLEDForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17112/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLEDForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_17112/src/transformers/models/led/modeling_tf_led.py#L2312",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17112/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
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
<li>
<p><strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17112/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Eo=new Mo({props:{$$slots:{default:[Of]},$$scope:{ctx:$}}}),qo=new Ne({props:{anchor:"transformers.TFLEDForConditionalGeneration.call.example",$$slots:{default:[Af]},$$scope:{ctx:$}}}),{c(){l=n("meta"),b=c(),u=n("h1"),m=n("a"),v=n("span"),T(i.$$.fragment),f=c(),D=n("span"),Be=r("LED"),_e=c(),F=n("h2"),Z=n("a"),W=n("span"),T(oe.$$.fragment),Ge=c(),U=n("span"),Qe=r("Overview"),Fe=c(),B=n("p"),V=r("The LED model was proposed in "),ne=n("a"),ye=r("Longformer: The Long-Document Transformer"),C=r(` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),A=c(),ge=n("p"),se=r("The abstract from the paper is the following:"),ze=c(),be=n("p"),R=n("em"),He=r(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),xe=c(),O=n("p"),We=r("Tips:"),Y=c(),M=n("ul"),S=n("li"),G=n("a"),Ue=r("LEDForConditionalGeneration"),Ve=r(` is an extension of
`),j=n("a"),Re=r("BartForConditionalGeneration"),ae=r(" exchanging the traditional "),Ee=n("em"),L=r("self-attention"),z=r(` layer with
`),re=n("em"),at=r("Longformer"),rt=r("\u2019s "),I=n("em"),dt=r("chunked self-attention"),it=r(" layer. "),Me=n("a"),K=r("LEDTokenizer"),de=r(` is an alias of
`),Se=n("a"),lt=r("BartTokenizer"),ie=r("."),ct=c(),le=n("li"),Ke=r("LED works very well on long-range "),Xe=n("em"),Bd=r("sequence-to-sequence"),Gd=r(" tasks where the "),As=n("code"),Qd=r("input_ids"),Hd=r(` largely exceed a length of
1024 tokens.`),Wd=c(),qe=n("li"),Ud=r("LED pads the "),Ps=n("code"),Vd=r("input_ids"),Rd=r(" to be a multiple of "),Ns=n("code"),Kd=r("config.attention_window"),Xd=r(` if required. Therefore a small speed-up is
gained, when `),Yn=n("a"),Jd=r("LEDTokenizer"),Zd=r(" is used with the "),js=n("code"),Yd=r("pad_to_multiple_of"),ei=r(" argument."),ti=c(),X=n("li"),oi=r("LED makes use of "),Is=n("em"),ni=r("global attention"),si=r(" by means of the "),Bs=n("code"),ai=r("global_attention_mask"),ri=r(` (see
`),es=n("a"),di=r("LongformerModel"),ii=r("). For summarization, it is advised to put "),Gs=n("em"),li=r("global attention"),ci=r(` only on the first
`),Qs=n("code"),hi=r("<s>"),pi=r(" token. For question answering, it is advised to put "),Hs=n("em"),ui=r("global attention"),mi=r(" on all tokens of the question."),fi=c(),ce=n("li"),_i=r("To fine-tune LED on all 16384, "),Ws=n("em"),gi=r("gradient checkpointing"),bi=r(` can be enabled in case training leads to out-of-memory (OOM)
errors. This can be done by either executing `),Us=n("code"),vi=r("model.gradient_checkpointing_enable()"),Ti=r(` or using the
`),Vs=n("code"),ki=r("gradient_checkpointing=True"),wi=r(" flag in "),Rs=n("code"),yi=r(".from_pretrained(...)"),Ei=r(" when loading the model. Moreover, the "),Ks=n("code"),qi=r("use_cache=False"),Li=r(`
flag can be used to disable the caching mechanism to save memory.`),$i=c(),So=n("li"),Di=r("A notebook showing how to evaluate LED, can be accessed "),Co=n("a"),Fi=r("here"),zi=r("."),xi=c(),Oo=n("li"),Mi=r("A notebook showing how to fine-tune LED, can be accessed "),Ao=n("a"),Si=r("here"),Ci=r("."),wr=c(),Nt=n("p"),Oi=r("This model was contributed by "),Po=n("a"),Ai=r("patrickvonplaten"),Pi=r("."),yr=c(),ht=n("h2"),jt=n("a"),Xs=n("span"),T(No.$$.fragment),Ni=c(),Js=n("span"),ji=r("LEDConfig"),Er=c(),P=n("div"),T(jo.$$.fragment),Ii=c(),pt=n("p"),Bi=r("This is the configuration class to store the configuration of a "),ts=n("a"),Gi=r("LEDModel"),Qi=r(`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),Io=n("a"),Hi=r("allenai/led-base-16384"),Wi=r(" architecture."),Ui=c(),ut=n("p"),Vi=r("Configuration objects inherit from "),os=n("a"),Ri=r("PretrainedConfig"),Ki=r(` and can be used to control the model outputs. Read the
documentation from `),ns=n("a"),Xi=r("PretrainedConfig"),Ji=r(" for more information."),Zi=c(),T(It.$$.fragment),Yi=c(),Zs=n("blockquote"),Ys=n("blockquote"),ea=n("blockquote"),ta=n("p"),el=r("from transformers import LEDModel, LEDConfig"),tl=c(),oa=n("blockquote"),na=n("blockquote"),sa=n("blockquote"),Bt=n("h1"),Gt=n("a"),aa=n("span"),T(Bo.$$.fragment),ol=c(),ra=n("span"),nl=r("Initializing a LED allenai/led-base-16384 style configuration >>> configuration = LEDConfig()"),sl=c(),da=n("blockquote"),ia=n("blockquote"),Go=n("blockquote"),Qt=n("h1"),Ht=n("a"),la=n("span"),T(Qo.$$.fragment),al=c(),ca=n("span"),rl=r("Initializing a model from the allenai/led-base-16384 style configuration >>> model ="),dl=c(),ha=n("p"),il=r("LEDModel(configuration)"),ll=c(),pa=n("blockquote"),ua=n("blockquote"),ma=n("blockquote"),Wt=n("h1"),Ut=n("a"),fa=n("span"),T(Ho.$$.fragment),cl=c(),_a=n("span"),hl=r("Accessing the model configuration >>> configuration = model.config"),qr=c(),mt=n("h2"),Vt=n("a"),ga=n("span"),T(Wo.$$.fragment),pl=c(),ba=n("span"),ul=r("LEDTokenizer"),Lr=c(),N=n("div"),T(Uo.$$.fragment),ml=c(),va=n("p"),fl=r("Construct a LED tokenizer."),_l=c(),Rt=n("p"),ss=n("a"),gl=r("LEDTokenizer"),bl=r(" is identical to "),as=n("a"),vl=r("BartTokenizer"),Tl=r(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),kl=c(),Vo=n("p"),wl=r("Refer to superclass "),rs=n("a"),yl=r("BartTokenizer"),El=r(" for usage examples and documentation concerning parameters."),ql=c(),Je=n("div"),T(Ro.$$.fragment),Ll=c(),Ta=n("p"),$l=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),Dl=c(),Ko=n("ul"),ds=n("li"),Fl=r("single sequence: "),ka=n("code"),zl=r("<s> X </s>"),xl=c(),is=n("li"),Ml=r("pair of sequences: "),wa=n("code"),Sl=r("<s> A </s></s> B </s>"),Cl=c(),Kt=n("div"),T(Xo.$$.fragment),Ol=c(),Jo=n("p"),Al=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ya=n("code"),Pl=r("prepare_for_model"),Nl=r(" method."),jl=c(),Xt=n("div"),T(Zo.$$.fragment),Il=c(),Ea=n("p"),Bl=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Gl=c(),ls=n("div"),T(Yo.$$.fragment),$r=c(),ft=n("h2"),Jt=n("a"),qa=n("span"),T(en.$$.fragment),Ql=c(),La=n("span"),Hl=r("LEDTokenizerFast"),Dr=c(),Le=n("div"),T(tn.$$.fragment),Wl=c(),on=n("p"),Ul=r("Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),$a=n("em"),Vl=r("tokenizers"),Rl=r(" library)."),Kl=c(),Zt=n("p"),cs=n("a"),Xl=r("LEDTokenizerFast"),Jl=r(" is identical to "),hs=n("a"),Zl=r("BartTokenizerFast"),Yl=r(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),ec=c(),nn=n("p"),tc=r("Refer to superclass "),ps=n("a"),oc=r("BartTokenizerFast"),nc=r(" for usage examples and documentation concerning parameters."),Fr=c(),_t=n("h2"),Yt=n("a"),Da=n("span"),T(sn.$$.fragment),sc=c(),Fa=n("span"),ac=r("LED specific outputs"),zr=c(),gt=n("div"),T(an.$$.fragment),rc=c(),za=n("p"),dc=r("Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),xr=c(),bt=n("div"),T(rn.$$.fragment),ic=c(),xa=n("p"),lc=r(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Mr=c(),vt=n("div"),T(dn.$$.fragment),cc=c(),Ma=n("p"),hc=r("Base class for sequence-to-sequence language models outputs."),Sr=c(),Tt=n("div"),T(ln.$$.fragment),pc=c(),Sa=n("p"),uc=r("Base class for outputs of sequence-to-sequence sentence classification models."),Cr=c(),kt=n("div"),T(cn.$$.fragment),mc=c(),Ca=n("p"),fc=r("Base class for outputs of sequence-to-sequence question answering models."),Or=c(),wt=n("div"),T(hn.$$.fragment),_c=c(),Oa=n("p"),gc=r("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Ar=c(),yt=n("div"),T(pn.$$.fragment),bc=c(),Aa=n("p"),vc=r(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Pr=c(),Et=n("div"),T(un.$$.fragment),Tc=c(),Pa=n("p"),kc=r("Base class for sequence-to-sequence language models outputs."),Nr=c(),qt=n("h2"),eo=n("a"),Na=n("span"),T(mn.$$.fragment),wc=c(),ja=n("span"),yc=r("LEDModel"),jr=c(),$e=n("div"),T(fn.$$.fragment),Ec=c(),_n=n("p"),qc=r(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),us=n("a"),Lc=r("PreTrainedModel"),$c=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dc=c(),gn=n("p"),Fc=r("This model is also a PyTorch "),bn=n("a"),zc=r("torch.nn.Module"),xc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mc=c(),Ce=n("div"),T(vn.$$.fragment),Sc=c(),Lt=n("p"),Cc=r("The "),ms=n("a"),Oc=r("LEDModel"),Ac=r(" forward method, overrides the "),Ia=n("code"),Pc=r("__call__"),Nc=r(" special method."),jc=c(),T(to.$$.fragment),Ic=c(),T(oo.$$.fragment),Ir=c(),$t=n("h2"),no=n("a"),Ba=n("span"),T(Tn.$$.fragment),Bc=c(),Ga=n("span"),Gc=r("LEDForConditionalGeneration"),Br=c(),De=n("div"),T(kn.$$.fragment),Qc=c(),wn=n("p"),Hc=r(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),fs=n("a"),Wc=r("PreTrainedModel"),Uc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vc=c(),yn=n("p"),Rc=r("This model is also a PyTorch "),En=n("a"),Kc=r("torch.nn.Module"),Xc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jc=c(),ve=n("div"),T(qn.$$.fragment),Zc=c(),Dt=n("p"),Yc=r("The "),_s=n("a"),eh=r("LEDForConditionalGeneration"),th=r(" forward method, overrides the "),Qa=n("code"),oh=r("__call__"),nh=r(" special method."),sh=c(),T(so.$$.fragment),ah=c(),T(ao.$$.fragment),rh=c(),T(ro.$$.fragment),Gr=c(),Ft=n("h2"),io=n("a"),Ha=n("span"),T(Ln.$$.fragment),dh=c(),Wa=n("span"),ih=r("LEDForSequenceClassification"),Qr=c(),he=n("div"),T($n.$$.fragment),lh=c(),Ua=n("p"),ch=r(`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),hh=c(),Dn=n("p"),ph=r("This model inherits from "),gs=n("a"),uh=r("PreTrainedModel"),mh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fh=c(),Fn=n("p"),_h=r("This model is also a PyTorch "),zn=n("a"),gh=r("torch.nn.Module"),bh=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vh=c(),Q=n("div"),T(xn.$$.fragment),Th=c(),zt=n("p"),kh=r("The "),bs=n("a"),wh=r("LEDForSequenceClassification"),yh=r(" forward method, overrides the "),Va=n("code"),Eh=r("__call__"),qh=r(" special method."),Lh=c(),T(lo.$$.fragment),$h=c(),T(co.$$.fragment),Dh=c(),T(ho.$$.fragment),Fh=c(),T(po.$$.fragment),zh=c(),T(uo.$$.fragment),Hr=c(),xt=n("h2"),mo=n("a"),Ra=n("span"),T(Mn.$$.fragment),xh=c(),Ka=n("span"),Mh=r("LEDForQuestionAnswering"),Wr=c(),pe=n("div"),T(Sn.$$.fragment),Sh=c(),Mt=n("p"),Ch=r(`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Xa=n("code"),Oh=r("span start logits"),Ah=r(" and "),Ja=n("code"),Ph=r("span end logits"),Nh=r(")."),jh=c(),Cn=n("p"),Ih=r("This model inherits from "),vs=n("a"),Bh=r("PreTrainedModel"),Gh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qh=c(),On=n("p"),Hh=r("This model is also a PyTorch "),An=n("a"),Wh=r("torch.nn.Module"),Uh=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vh=c(),Te=n("div"),T(Pn.$$.fragment),Rh=c(),St=n("p"),Kh=r("The "),Ts=n("a"),Xh=r("LEDForQuestionAnswering"),Jh=r(" forward method, overrides the "),Za=n("code"),Zh=r("__call__"),Yh=r(" special method."),ep=c(),T(fo.$$.fragment),tp=c(),T(_o.$$.fragment),op=c(),T(go.$$.fragment),Ur=c(),Ct=n("h2"),bo=n("a"),Ya=n("span"),T(Nn.$$.fragment),np=c(),er=n("span"),sp=r("TFLEDModel"),Vr=c(),ue=n("div"),T(jn.$$.fragment),ap=c(),In=n("p"),rp=r(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ks=n("a"),dp=r("TFPreTrainedModel"),ip=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lp=c(),Bn=n("p"),cp=r("This model is also a "),Gn=n("a"),hp=r("tf.keras.Model"),pp=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),up=c(),T(vo.$$.fragment),mp=c(),Oe=n("div"),T(Qn.$$.fragment),fp=c(),Ot=n("p"),_p=r("The "),ws=n("a"),gp=r("TFLEDModel"),bp=r(" forward method, overrides the "),tr=n("code"),vp=r("__call__"),Tp=r(" special method."),kp=c(),T(To.$$.fragment),wp=c(),T(ko.$$.fragment),Rr=c(),At=n("h2"),wo=n("a"),or=n("span"),T(Hn.$$.fragment),yp=c(),nr=n("span"),Ep=r("TFLEDForConditionalGeneration"),Kr=c(),me=n("div"),T(Wn.$$.fragment),qp=c(),Un=n("p"),Lp=r(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),ys=n("a"),$p=r("TFPreTrainedModel"),Dp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fp=c(),Vn=n("p"),zp=r("This model is also a "),Rn=n("a"),xp=r("tf.keras.Model"),Mp=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sp=c(),T(yo.$$.fragment),Cp=c(),Ae=n("div"),T(Kn.$$.fragment),Op=c(),Pt=n("p"),Ap=r("The "),Es=n("a"),Pp=r("TFLEDForConditionalGeneration"),Np=r(" forward method, overrides the "),sr=n("code"),jp=r("__call__"),Ip=r(" special method."),Bp=c(),T(Eo.$$.fragment),Gp=c(),T(qo.$$.fragment),this.h()},l(o){const _=ff('[data-svelte="svelte-1phssyn"]',document.head);l=s(_,"META",{name:!0,content:!0}),_.forEach(t),b=h(o),u=s(o,"H1",{class:!0});var Xn=a(u);m=s(Xn,"A",{id:!0,class:!0,href:!0});var ar=a(m);v=s(ar,"SPAN",{});var rr=a(v);k(i.$$.fragment,rr),rr.forEach(t),ar.forEach(t),f=h(Xn),D=s(Xn,"SPAN",{});var dr=a(D);Be=d(dr,"LED"),dr.forEach(t),Xn.forEach(t),_e=h(o),F=s(o,"H2",{class:!0});var Jn=a(F);Z=s(Jn,"A",{id:!0,class:!0,href:!0});var ir=a(Z);W=s(ir,"SPAN",{});var lr=a(W);k(oe.$$.fragment,lr),lr.forEach(t),ir.forEach(t),Ge=h(Jn),U=s(Jn,"SPAN",{});var cr=a(U);Qe=d(cr,"Overview"),cr.forEach(t),Jn.forEach(t),Fe=h(o),B=s(o,"P",{});var Zn=a(B);V=d(Zn,"The LED model was proposed in "),ne=s(Zn,"A",{href:!0,rel:!0});var hr=a(ne);ye=d(hr,"Longformer: The Long-Document Transformer"),hr.forEach(t),C=d(Zn,` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),Zn.forEach(t),A=h(o),ge=s(o,"P",{});var pr=a(ge);se=d(pr,"The abstract from the paper is the following:"),pr.forEach(t),ze=h(o),be=s(o,"P",{});var ur=a(be);R=s(ur,"EM",{});var mr=a(R);He=d(mr,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),mr.forEach(t),ur.forEach(t),xe=h(o),O=s(o,"P",{});var fr=a(O);We=d(fr,"Tips:"),fr.forEach(t),Y=h(o),M=s(o,"UL",{});var J=a(M);S=s(J,"LI",{});var H=a(S);G=s(H,"A",{href:!0});var _r=a(G);Ue=d(_r,"LEDForConditionalGeneration"),_r.forEach(t),Ve=d(H,` is an extension of
`),j=s(H,"A",{href:!0});var gr=a(j);Re=d(gr,"BartForConditionalGeneration"),gr.forEach(t),ae=d(H," exchanging the traditional "),Ee=s(H,"EM",{});var br=a(Ee);L=d(br,"self-attention"),br.forEach(t),z=d(H,` layer with
`),re=s(H,"EM",{});var vr=a(re);at=d(vr,"Longformer"),vr.forEach(t),rt=d(H,"\u2019s "),I=s(H,"EM",{});var Wp=a(I);dt=d(Wp,"chunked self-attention"),Wp.forEach(t),it=d(H," layer. "),Me=s(H,"A",{href:!0});var Up=a(Me);K=d(Up,"LEDTokenizer"),Up.forEach(t),de=d(H,` is an alias of
`),Se=s(H,"A",{href:!0});var Vp=a(Se);lt=d(Vp,"BartTokenizer"),Vp.forEach(t),ie=d(H,"."),H.forEach(t),ct=h(J),le=s(J,"LI",{});var qs=a(le);Ke=d(qs,"LED works very well on long-range "),Xe=s(qs,"EM",{});var Rp=a(Xe);Bd=d(Rp,"sequence-to-sequence"),Rp.forEach(t),Gd=d(qs," tasks where the "),As=s(qs,"CODE",{});var Kp=a(As);Qd=d(Kp,"input_ids"),Kp.forEach(t),Hd=d(qs,` largely exceed a length of
1024 tokens.`),qs.forEach(t),Wd=h(J),qe=s(J,"LI",{});var Ze=a(qe);Ud=d(Ze,"LED pads the "),Ps=s(Ze,"CODE",{});var Xp=a(Ps);Vd=d(Xp,"input_ids"),Xp.forEach(t),Rd=d(Ze," to be a multiple of "),Ns=s(Ze,"CODE",{});var Jp=a(Ns);Kd=d(Jp,"config.attention_window"),Jp.forEach(t),Xd=d(Ze,` if required. Therefore a small speed-up is
gained, when `),Yn=s(Ze,"A",{href:!0});var Zp=a(Yn);Jd=d(Zp,"LEDTokenizer"),Zp.forEach(t),Zd=d(Ze," is used with the "),js=s(Ze,"CODE",{});var Yp=a(js);Yd=d(Yp,"pad_to_multiple_of"),Yp.forEach(t),ei=d(Ze," argument."),Ze.forEach(t),ti=h(J),X=s(J,"LI",{});var ke=a(X);oi=d(ke,"LED makes use of "),Is=s(ke,"EM",{});var eu=a(Is);ni=d(eu,"global attention"),eu.forEach(t),si=d(ke," by means of the "),Bs=s(ke,"CODE",{});var tu=a(Bs);ai=d(tu,"global_attention_mask"),tu.forEach(t),ri=d(ke,` (see
`),es=s(ke,"A",{href:!0});var ou=a(es);di=d(ou,"LongformerModel"),ou.forEach(t),ii=d(ke,"). For summarization, it is advised to put "),Gs=s(ke,"EM",{});var nu=a(Gs);li=d(nu,"global attention"),nu.forEach(t),ci=d(ke,` only on the first
`),Qs=s(ke,"CODE",{});var su=a(Qs);hi=d(su,"<s>"),su.forEach(t),pi=d(ke," token. For question answering, it is advised to put "),Hs=s(ke,"EM",{});var au=a(Hs);ui=d(au,"global attention"),au.forEach(t),mi=d(ke," on all tokens of the question."),ke.forEach(t),fi=h(J),ce=s(J,"LI",{});var Pe=a(ce);_i=d(Pe,"To fine-tune LED on all 16384, "),Ws=s(Pe,"EM",{});var ru=a(Ws);gi=d(ru,"gradient checkpointing"),ru.forEach(t),bi=d(Pe,` can be enabled in case training leads to out-of-memory (OOM)
errors. This can be done by either executing `),Us=s(Pe,"CODE",{});var du=a(Us);vi=d(du,"model.gradient_checkpointing_enable()"),du.forEach(t),Ti=d(Pe,` or using the
`),Vs=s(Pe,"CODE",{});var iu=a(Vs);ki=d(iu,"gradient_checkpointing=True"),iu.forEach(t),wi=d(Pe," flag in "),Rs=s(Pe,"CODE",{});var lu=a(Rs);yi=d(lu,".from_pretrained(...)"),lu.forEach(t),Ei=d(Pe," when loading the model. Moreover, the "),Ks=s(Pe,"CODE",{});var cu=a(Ks);qi=d(cu,"use_cache=False"),cu.forEach(t),Li=d(Pe,`
flag can be used to disable the caching mechanism to save memory.`),Pe.forEach(t),$i=h(J),So=s(J,"LI",{});var Jr=a(So);Di=d(Jr,"A notebook showing how to evaluate LED, can be accessed "),Co=s(Jr,"A",{href:!0,rel:!0});var hu=a(Co);Fi=d(hu,"here"),hu.forEach(t),zi=d(Jr,"."),Jr.forEach(t),xi=h(J),Oo=s(J,"LI",{});var Zr=a(Oo);Mi=d(Zr,"A notebook showing how to fine-tune LED, can be accessed "),Ao=s(Zr,"A",{href:!0,rel:!0});var pu=a(Ao);Si=d(pu,"here"),pu.forEach(t),Ci=d(Zr,"."),Zr.forEach(t),J.forEach(t),wr=h(o),Nt=s(o,"P",{});var Yr=a(Nt);Oi=d(Yr,"This model was contributed by "),Po=s(Yr,"A",{href:!0,rel:!0});var uu=a(Po);Ai=d(uu,"patrickvonplaten"),uu.forEach(t),Pi=d(Yr,"."),Yr.forEach(t),yr=h(o),ht=s(o,"H2",{class:!0});var ed=a(ht);jt=s(ed,"A",{id:!0,class:!0,href:!0});var mu=a(jt);Xs=s(mu,"SPAN",{});var fu=a(Xs);k(No.$$.fragment,fu),fu.forEach(t),mu.forEach(t),Ni=h(ed),Js=s(ed,"SPAN",{});var _u=a(Js);ji=d(_u,"LEDConfig"),_u.forEach(t),ed.forEach(t),Er=h(o),P=s(o,"DIV",{class:!0});var ee=a(P);k(jo.$$.fragment,ee),Ii=h(ee),pt=s(ee,"P",{});var Ls=a(pt);Bi=d(Ls,"This is the configuration class to store the configuration of a "),ts=s(Ls,"A",{href:!0});var gu=a(ts);Gi=d(gu,"LEDModel"),gu.forEach(t),Qi=d(Ls,`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),Io=s(Ls,"A",{href:!0,rel:!0});var bu=a(Io);Hi=d(bu,"allenai/led-base-16384"),bu.forEach(t),Wi=d(Ls," architecture."),Ls.forEach(t),Ui=h(ee),ut=s(ee,"P",{});var $s=a(ut);Vi=d($s,"Configuration objects inherit from "),os=s($s,"A",{href:!0});var vu=a(os);Ri=d(vu,"PretrainedConfig"),vu.forEach(t),Ki=d($s,` and can be used to control the model outputs. Read the
documentation from `),ns=s($s,"A",{href:!0});var Tu=a(ns);Xi=d(Tu,"PretrainedConfig"),Tu.forEach(t),Ji=d($s," for more information."),$s.forEach(t),Zi=h(ee),k(It.$$.fragment,ee),Yi=h(ee),Zs=s(ee,"BLOCKQUOTE",{});var ku=a(Zs);Ys=s(ku,"BLOCKQUOTE",{});var wu=a(Ys);ea=s(wu,"BLOCKQUOTE",{});var yu=a(ea);ta=s(yu,"P",{});var Eu=a(ta);el=d(Eu,"from transformers import LEDModel, LEDConfig"),Eu.forEach(t),yu.forEach(t),wu.forEach(t),ku.forEach(t),tl=h(ee),oa=s(ee,"BLOCKQUOTE",{});var qu=a(oa);na=s(qu,"BLOCKQUOTE",{});var Lu=a(na);sa=s(Lu,"BLOCKQUOTE",{});var $u=a(sa);Bt=s($u,"H1",{class:!0});var td=a(Bt);Gt=s(td,"A",{id:!0,class:!0,href:!0});var Du=a(Gt);aa=s(Du,"SPAN",{});var Fu=a(aa);k(Bo.$$.fragment,Fu),Fu.forEach(t),Du.forEach(t),ol=h(td),ra=s(td,"SPAN",{});var zu=a(ra);nl=d(zu,"Initializing a LED allenai/led-base-16384 style configuration >>> configuration = LEDConfig()"),zu.forEach(t),td.forEach(t),$u.forEach(t),Lu.forEach(t),qu.forEach(t),sl=h(ee),da=s(ee,"BLOCKQUOTE",{});var xu=a(da);ia=s(xu,"BLOCKQUOTE",{});var Mu=a(ia);Go=s(Mu,"BLOCKQUOTE",{});var od=a(Go);Qt=s(od,"H1",{class:!0});var nd=a(Qt);Ht=s(nd,"A",{id:!0,class:!0,href:!0});var Su=a(Ht);la=s(Su,"SPAN",{});var Cu=a(la);k(Qo.$$.fragment,Cu),Cu.forEach(t),Su.forEach(t),al=h(nd),ca=s(nd,"SPAN",{});var Ou=a(ca);rl=d(Ou,"Initializing a model from the allenai/led-base-16384 style configuration >>> model ="),Ou.forEach(t),nd.forEach(t),dl=h(od),ha=s(od,"P",{});var Au=a(ha);il=d(Au,"LEDModel(configuration)"),Au.forEach(t),od.forEach(t),Mu.forEach(t),xu.forEach(t),ll=h(ee),pa=s(ee,"BLOCKQUOTE",{});var Pu=a(pa);ua=s(Pu,"BLOCKQUOTE",{});var Nu=a(ua);ma=s(Nu,"BLOCKQUOTE",{});var ju=a(ma);Wt=s(ju,"H1",{class:!0});var sd=a(Wt);Ut=s(sd,"A",{id:!0,class:!0,href:!0});var Iu=a(Ut);fa=s(Iu,"SPAN",{});var Bu=a(fa);k(Ho.$$.fragment,Bu),Bu.forEach(t),Iu.forEach(t),cl=h(sd),_a=s(sd,"SPAN",{});var Gu=a(_a);hl=d(Gu,"Accessing the model configuration >>> configuration = model.config"),Gu.forEach(t),sd.forEach(t),ju.forEach(t),Nu.forEach(t),Pu.forEach(t),ee.forEach(t),qr=h(o),mt=s(o,"H2",{class:!0});var ad=a(mt);Vt=s(ad,"A",{id:!0,class:!0,href:!0});var Qu=a(Vt);ga=s(Qu,"SPAN",{});var Hu=a(ga);k(Wo.$$.fragment,Hu),Hu.forEach(t),Qu.forEach(t),pl=h(ad),ba=s(ad,"SPAN",{});var Wu=a(ba);ul=d(Wu,"LEDTokenizer"),Wu.forEach(t),ad.forEach(t),Lr=h(o),N=s(o,"DIV",{class:!0});var te=a(N);k(Uo.$$.fragment,te),ml=h(te),va=s(te,"P",{});var Uu=a(va);fl=d(Uu,"Construct a LED tokenizer."),Uu.forEach(t),_l=h(te),Rt=s(te,"P",{});var Tr=a(Rt);ss=s(Tr,"A",{href:!0});var Vu=a(ss);gl=d(Vu,"LEDTokenizer"),Vu.forEach(t),bl=d(Tr," is identical to "),as=s(Tr,"A",{href:!0});var Ru=a(as);vl=d(Ru,"BartTokenizer"),Ru.forEach(t),Tl=d(Tr,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),Tr.forEach(t),kl=h(te),Vo=s(te,"P",{});var rd=a(Vo);wl=d(rd,"Refer to superclass "),rs=s(rd,"A",{href:!0});var Ku=a(rs);yl=d(Ku,"BartTokenizer"),Ku.forEach(t),El=d(rd," for usage examples and documentation concerning parameters."),rd.forEach(t),ql=h(te),Je=s(te,"DIV",{class:!0});var Ds=a(Je);k(Ro.$$.fragment,Ds),Ll=h(Ds),Ta=s(Ds,"P",{});var Xu=a(Ta);$l=d(Xu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),Xu.forEach(t),Dl=h(Ds),Ko=s(Ds,"UL",{});var dd=a(Ko);ds=s(dd,"LI",{});var Qp=a(ds);Fl=d(Qp,"single sequence: "),ka=s(Qp,"CODE",{});var Ju=a(ka);zl=d(Ju,"<s> X </s>"),Ju.forEach(t),Qp.forEach(t),xl=h(dd),is=s(dd,"LI",{});var Hp=a(is);Ml=d(Hp,"pair of sequences: "),wa=s(Hp,"CODE",{});var Zu=a(wa);Sl=d(Zu,"<s> A </s></s> B </s>"),Zu.forEach(t),Hp.forEach(t),dd.forEach(t),Ds.forEach(t),Cl=h(te),Kt=s(te,"DIV",{class:!0});var id=a(Kt);k(Xo.$$.fragment,id),Ol=h(id),Jo=s(id,"P",{});var ld=a(Jo);Al=d(ld,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ya=s(ld,"CODE",{});var Yu=a(ya);Pl=d(Yu,"prepare_for_model"),Yu.forEach(t),Nl=d(ld," method."),ld.forEach(t),id.forEach(t),jl=h(te),Xt=s(te,"DIV",{class:!0});var cd=a(Xt);k(Zo.$$.fragment,cd),Il=h(cd),Ea=s(cd,"P",{});var em=a(Ea);Bl=d(em,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),em.forEach(t),cd.forEach(t),Gl=h(te),ls=s(te,"DIV",{class:!0});var tm=a(ls);k(Yo.$$.fragment,tm),tm.forEach(t),te.forEach(t),$r=h(o),ft=s(o,"H2",{class:!0});var hd=a(ft);Jt=s(hd,"A",{id:!0,class:!0,href:!0});var om=a(Jt);qa=s(om,"SPAN",{});var nm=a(qa);k(en.$$.fragment,nm),nm.forEach(t),om.forEach(t),Ql=h(hd),La=s(hd,"SPAN",{});var sm=a(La);Hl=d(sm,"LEDTokenizerFast"),sm.forEach(t),hd.forEach(t),Dr=h(o),Le=s(o,"DIV",{class:!0});var Lo=a(Le);k(tn.$$.fragment,Lo),Wl=h(Lo),on=s(Lo,"P",{});var pd=a(on);Ul=d(pd,"Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),$a=s(pd,"EM",{});var am=a($a);Vl=d(am,"tokenizers"),am.forEach(t),Rl=d(pd," library)."),pd.forEach(t),Kl=h(Lo),Zt=s(Lo,"P",{});var kr=a(Zt);cs=s(kr,"A",{href:!0});var rm=a(cs);Xl=d(rm,"LEDTokenizerFast"),rm.forEach(t),Jl=d(kr," is identical to "),hs=s(kr,"A",{href:!0});var dm=a(hs);Zl=d(dm,"BartTokenizerFast"),dm.forEach(t),Yl=d(kr,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),kr.forEach(t),ec=h(Lo),nn=s(Lo,"P",{});var ud=a(nn);tc=d(ud,"Refer to superclass "),ps=s(ud,"A",{href:!0});var im=a(ps);oc=d(im,"BartTokenizerFast"),im.forEach(t),nc=d(ud," for usage examples and documentation concerning parameters."),ud.forEach(t),Lo.forEach(t),Fr=h(o),_t=s(o,"H2",{class:!0});var md=a(_t);Yt=s(md,"A",{id:!0,class:!0,href:!0});var lm=a(Yt);Da=s(lm,"SPAN",{});var cm=a(Da);k(sn.$$.fragment,cm),cm.forEach(t),lm.forEach(t),sc=h(md),Fa=s(md,"SPAN",{});var hm=a(Fa);ac=d(hm,"LED specific outputs"),hm.forEach(t),md.forEach(t),zr=h(o),gt=s(o,"DIV",{class:!0});var fd=a(gt);k(an.$$.fragment,fd),rc=h(fd),za=s(fd,"P",{});var pm=a(za);dc=d(pm,"Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),pm.forEach(t),fd.forEach(t),xr=h(o),bt=s(o,"DIV",{class:!0});var _d=a(bt);k(rn.$$.fragment,_d),ic=h(_d),xa=s(_d,"P",{});var um=a(xa);lc=d(um,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),um.forEach(t),_d.forEach(t),Mr=h(o),vt=s(o,"DIV",{class:!0});var gd=a(vt);k(dn.$$.fragment,gd),cc=h(gd),Ma=s(gd,"P",{});var mm=a(Ma);hc=d(mm,"Base class for sequence-to-sequence language models outputs."),mm.forEach(t),gd.forEach(t),Sr=h(o),Tt=s(o,"DIV",{class:!0});var bd=a(Tt);k(ln.$$.fragment,bd),pc=h(bd),Sa=s(bd,"P",{});var fm=a(Sa);uc=d(fm,"Base class for outputs of sequence-to-sequence sentence classification models."),fm.forEach(t),bd.forEach(t),Cr=h(o),kt=s(o,"DIV",{class:!0});var vd=a(kt);k(cn.$$.fragment,vd),mc=h(vd),Ca=s(vd,"P",{});var _m=a(Ca);fc=d(_m,"Base class for outputs of sequence-to-sequence question answering models."),_m.forEach(t),vd.forEach(t),Or=h(o),wt=s(o,"DIV",{class:!0});var Td=a(wt);k(hn.$$.fragment,Td),_c=h(Td),Oa=s(Td,"P",{});var gm=a(Oa);gc=d(gm,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),gm.forEach(t),Td.forEach(t),Ar=h(o),yt=s(o,"DIV",{class:!0});var kd=a(yt);k(pn.$$.fragment,kd),bc=h(kd),Aa=s(kd,"P",{});var bm=a(Aa);vc=d(bm,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),bm.forEach(t),kd.forEach(t),Pr=h(o),Et=s(o,"DIV",{class:!0});var wd=a(Et);k(un.$$.fragment,wd),Tc=h(wd),Pa=s(wd,"P",{});var vm=a(Pa);kc=d(vm,"Base class for sequence-to-sequence language models outputs."),vm.forEach(t),wd.forEach(t),Nr=h(o),qt=s(o,"H2",{class:!0});var yd=a(qt);eo=s(yd,"A",{id:!0,class:!0,href:!0});var Tm=a(eo);Na=s(Tm,"SPAN",{});var km=a(Na);k(mn.$$.fragment,km),km.forEach(t),Tm.forEach(t),wc=h(yd),ja=s(yd,"SPAN",{});var wm=a(ja);yc=d(wm,"LEDModel"),wm.forEach(t),yd.forEach(t),jr=h(o),$e=s(o,"DIV",{class:!0});var $o=a($e);k(fn.$$.fragment,$o),Ec=h($o),_n=s($o,"P",{});var Ed=a(_n);qc=d(Ed,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),us=s(Ed,"A",{href:!0});var ym=a(us);Lc=d(ym,"PreTrainedModel"),ym.forEach(t),$c=d(Ed,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ed.forEach(t),Dc=h($o),gn=s($o,"P",{});var qd=a(gn);Fc=d(qd,"This model is also a PyTorch "),bn=s(qd,"A",{href:!0,rel:!0});var Em=a(bn);zc=d(Em,"torch.nn.Module"),Em.forEach(t),xc=d(qd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qd.forEach(t),Mc=h($o),Ce=s($o,"DIV",{class:!0});var Do=a(Ce);k(vn.$$.fragment,Do),Sc=h(Do),Lt=s(Do,"P",{});var Fs=a(Lt);Cc=d(Fs,"The "),ms=s(Fs,"A",{href:!0});var qm=a(ms);Oc=d(qm,"LEDModel"),qm.forEach(t),Ac=d(Fs," forward method, overrides the "),Ia=s(Fs,"CODE",{});var Lm=a(Ia);Pc=d(Lm,"__call__"),Lm.forEach(t),Nc=d(Fs," special method."),Fs.forEach(t),jc=h(Do),k(to.$$.fragment,Do),Ic=h(Do),k(oo.$$.fragment,Do),Do.forEach(t),$o.forEach(t),Ir=h(o),$t=s(o,"H2",{class:!0});var Ld=a($t);no=s(Ld,"A",{id:!0,class:!0,href:!0});var $m=a(no);Ba=s($m,"SPAN",{});var Dm=a(Ba);k(Tn.$$.fragment,Dm),Dm.forEach(t),$m.forEach(t),Bc=h(Ld),Ga=s(Ld,"SPAN",{});var Fm=a(Ga);Gc=d(Fm,"LEDForConditionalGeneration"),Fm.forEach(t),Ld.forEach(t),Br=h(o),De=s(o,"DIV",{class:!0});var Fo=a(De);k(kn.$$.fragment,Fo),Qc=h(Fo),wn=s(Fo,"P",{});var $d=a(wn);Hc=d($d,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),fs=s($d,"A",{href:!0});var zm=a(fs);Wc=d(zm,"PreTrainedModel"),zm.forEach(t),Uc=d($d,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$d.forEach(t),Vc=h(Fo),yn=s(Fo,"P",{});var Dd=a(yn);Rc=d(Dd,"This model is also a PyTorch "),En=s(Dd,"A",{href:!0,rel:!0});var xm=a(En);Kc=d(xm,"torch.nn.Module"),xm.forEach(t),Xc=d(Dd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dd.forEach(t),Jc=h(Fo),ve=s(Fo,"DIV",{class:!0});var Ye=a(ve);k(qn.$$.fragment,Ye),Zc=h(Ye),Dt=s(Ye,"P",{});var zs=a(Dt);Yc=d(zs,"The "),_s=s(zs,"A",{href:!0});var Mm=a(_s);eh=d(Mm,"LEDForConditionalGeneration"),Mm.forEach(t),th=d(zs," forward method, overrides the "),Qa=s(zs,"CODE",{});var Sm=a(Qa);oh=d(Sm,"__call__"),Sm.forEach(t),nh=d(zs," special method."),zs.forEach(t),sh=h(Ye),k(so.$$.fragment,Ye),ah=h(Ye),k(ao.$$.fragment,Ye),rh=h(Ye),k(ro.$$.fragment,Ye),Ye.forEach(t),Fo.forEach(t),Gr=h(o),Ft=s(o,"H2",{class:!0});var Fd=a(Ft);io=s(Fd,"A",{id:!0,class:!0,href:!0});var Cm=a(io);Ha=s(Cm,"SPAN",{});var Om=a(Ha);k(Ln.$$.fragment,Om),Om.forEach(t),Cm.forEach(t),dh=h(Fd),Wa=s(Fd,"SPAN",{});var Am=a(Wa);ih=d(Am,"LEDForSequenceClassification"),Am.forEach(t),Fd.forEach(t),Qr=h(o),he=s(o,"DIV",{class:!0});var et=a(he);k($n.$$.fragment,et),lh=h(et),Ua=s(et,"P",{});var Pm=a(Ua);ch=d(Pm,`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Pm.forEach(t),hh=h(et),Dn=s(et,"P",{});var zd=a(Dn);ph=d(zd,"This model inherits from "),gs=s(zd,"A",{href:!0});var Nm=a(gs);uh=d(Nm,"PreTrainedModel"),Nm.forEach(t),mh=d(zd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zd.forEach(t),fh=h(et),Fn=s(et,"P",{});var xd=a(Fn);_h=d(xd,"This model is also a PyTorch "),zn=s(xd,"A",{href:!0,rel:!0});var jm=a(zn);gh=d(jm,"torch.nn.Module"),jm.forEach(t),bh=d(xd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xd.forEach(t),vh=h(et),Q=s(et,"DIV",{class:!0});var we=a(Q);k(xn.$$.fragment,we),Th=h(we),zt=s(we,"P",{});var xs=a(zt);kh=d(xs,"The "),bs=s(xs,"A",{href:!0});var Im=a(bs);wh=d(Im,"LEDForSequenceClassification"),Im.forEach(t),yh=d(xs," forward method, overrides the "),Va=s(xs,"CODE",{});var Bm=a(Va);Eh=d(Bm,"__call__"),Bm.forEach(t),qh=d(xs," special method."),xs.forEach(t),Lh=h(we),k(lo.$$.fragment,we),$h=h(we),k(co.$$.fragment,we),Dh=h(we),k(ho.$$.fragment,we),Fh=h(we),k(po.$$.fragment,we),zh=h(we),k(uo.$$.fragment,we),we.forEach(t),et.forEach(t),Hr=h(o),xt=s(o,"H2",{class:!0});var Md=a(xt);mo=s(Md,"A",{id:!0,class:!0,href:!0});var Gm=a(mo);Ra=s(Gm,"SPAN",{});var Qm=a(Ra);k(Mn.$$.fragment,Qm),Qm.forEach(t),Gm.forEach(t),xh=h(Md),Ka=s(Md,"SPAN",{});var Hm=a(Ka);Mh=d(Hm,"LEDForQuestionAnswering"),Hm.forEach(t),Md.forEach(t),Wr=h(o),pe=s(o,"DIV",{class:!0});var tt=a(pe);k(Sn.$$.fragment,tt),Sh=h(tt),Mt=s(tt,"P",{});var Ms=a(Mt);Ch=d(Ms,`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Xa=s(Ms,"CODE",{});var Wm=a(Xa);Oh=d(Wm,"span start logits"),Wm.forEach(t),Ah=d(Ms," and "),Ja=s(Ms,"CODE",{});var Um=a(Ja);Ph=d(Um,"span end logits"),Um.forEach(t),Nh=d(Ms,")."),Ms.forEach(t),jh=h(tt),Cn=s(tt,"P",{});var Sd=a(Cn);Ih=d(Sd,"This model inherits from "),vs=s(Sd,"A",{href:!0});var Vm=a(vs);Bh=d(Vm,"PreTrainedModel"),Vm.forEach(t),Gh=d(Sd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sd.forEach(t),Qh=h(tt),On=s(tt,"P",{});var Cd=a(On);Hh=d(Cd,"This model is also a PyTorch "),An=s(Cd,"A",{href:!0,rel:!0});var Rm=a(An);Wh=d(Rm,"torch.nn.Module"),Rm.forEach(t),Uh=d(Cd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cd.forEach(t),Vh=h(tt),Te=s(tt,"DIV",{class:!0});var ot=a(Te);k(Pn.$$.fragment,ot),Rh=h(ot),St=s(ot,"P",{});var Ss=a(St);Kh=d(Ss,"The "),Ts=s(Ss,"A",{href:!0});var Km=a(Ts);Xh=d(Km,"LEDForQuestionAnswering"),Km.forEach(t),Jh=d(Ss," forward method, overrides the "),Za=s(Ss,"CODE",{});var Xm=a(Za);Zh=d(Xm,"__call__"),Xm.forEach(t),Yh=d(Ss," special method."),Ss.forEach(t),ep=h(ot),k(fo.$$.fragment,ot),tp=h(ot),k(_o.$$.fragment,ot),op=h(ot),k(go.$$.fragment,ot),ot.forEach(t),tt.forEach(t),Ur=h(o),Ct=s(o,"H2",{class:!0});var Od=a(Ct);bo=s(Od,"A",{id:!0,class:!0,href:!0});var Jm=a(bo);Ya=s(Jm,"SPAN",{});var Zm=a(Ya);k(Nn.$$.fragment,Zm),Zm.forEach(t),Jm.forEach(t),np=h(Od),er=s(Od,"SPAN",{});var Ym=a(er);sp=d(Ym,"TFLEDModel"),Ym.forEach(t),Od.forEach(t),Vr=h(o),ue=s(o,"DIV",{class:!0});var nt=a(ue);k(jn.$$.fragment,nt),ap=h(nt),In=s(nt,"P",{});var Ad=a(In);rp=d(Ad,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ks=s(Ad,"A",{href:!0});var ef=a(ks);dp=d(ef,"TFPreTrainedModel"),ef.forEach(t),ip=d(Ad,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ad.forEach(t),lp=h(nt),Bn=s(nt,"P",{});var Pd=a(Bn);cp=d(Pd,"This model is also a "),Gn=s(Pd,"A",{href:!0,rel:!0});var tf=a(Gn);hp=d(tf,"tf.keras.Model"),tf.forEach(t),pp=d(Pd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pd.forEach(t),up=h(nt),k(vo.$$.fragment,nt),mp=h(nt),Oe=s(nt,"DIV",{class:!0});var zo=a(Oe);k(Qn.$$.fragment,zo),fp=h(zo),Ot=s(zo,"P",{});var Cs=a(Ot);_p=d(Cs,"The "),ws=s(Cs,"A",{href:!0});var of=a(ws);gp=d(of,"TFLEDModel"),of.forEach(t),bp=d(Cs," forward method, overrides the "),tr=s(Cs,"CODE",{});var nf=a(tr);vp=d(nf,"__call__"),nf.forEach(t),Tp=d(Cs," special method."),Cs.forEach(t),kp=h(zo),k(To.$$.fragment,zo),wp=h(zo),k(ko.$$.fragment,zo),zo.forEach(t),nt.forEach(t),Rr=h(o),At=s(o,"H2",{class:!0});var Nd=a(At);wo=s(Nd,"A",{id:!0,class:!0,href:!0});var sf=a(wo);or=s(sf,"SPAN",{});var af=a(or);k(Hn.$$.fragment,af),af.forEach(t),sf.forEach(t),yp=h(Nd),nr=s(Nd,"SPAN",{});var rf=a(nr);Ep=d(rf,"TFLEDForConditionalGeneration"),rf.forEach(t),Nd.forEach(t),Kr=h(o),me=s(o,"DIV",{class:!0});var st=a(me);k(Wn.$$.fragment,st),qp=h(st),Un=s(st,"P",{});var jd=a(Un);Lp=d(jd,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),ys=s(jd,"A",{href:!0});var df=a(ys);$p=d(df,"TFPreTrainedModel"),df.forEach(t),Dp=d(jd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jd.forEach(t),Fp=h(st),Vn=s(st,"P",{});var Id=a(Vn);zp=d(Id,"This model is also a "),Rn=s(Id,"A",{href:!0,rel:!0});var lf=a(Rn);xp=d(lf,"tf.keras.Model"),lf.forEach(t),Mp=d(Id,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Id.forEach(t),Sp=h(st),k(yo.$$.fragment,st),Cp=h(st),Ae=s(st,"DIV",{class:!0});var xo=a(Ae);k(Kn.$$.fragment,xo),Op=h(xo),Pt=s(xo,"P",{});var Os=a(Pt);Ap=d(Os,"The "),Es=s(Os,"A",{href:!0});var cf=a(Es);Pp=d(cf,"TFLEDForConditionalGeneration"),cf.forEach(t),Np=d(Os," forward method, overrides the "),sr=s(Os,"CODE",{});var hf=a(sr);jp=d(hf,"__call__"),hf.forEach(t),Ip=d(Os," special method."),Os.forEach(t),Bp=h(xo),k(Eo.$$.fragment,xo),Gp=h(xo),k(qo.$$.fragment,xo),xo.forEach(t),st.forEach(t),this.h()},h(){p(l,"name","hf:doc:metadata"),p(l,"content",JSON.stringify(Nf)),p(m,"id","led"),p(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(m,"href","#led"),p(u,"class","relative group"),p(Z,"id","overview"),p(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Z,"href","#overview"),p(F,"class","relative group"),p(ne,"href","https://arxiv.org/abs/2004.05150"),p(ne,"rel","nofollow"),p(G,"href","/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDForConditionalGeneration"),p(j,"href","/docs/transformers/pr_17112/en/model_doc/bart#transformers.BartForConditionalGeneration"),p(Me,"href","/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDTokenizer"),p(Se,"href","/docs/transformers/pr_17112/en/model_doc/bart#transformers.BartTokenizer"),p(Yn,"href","/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDTokenizer"),p(es,"href","/docs/transformers/pr_17112/en/model_doc/longformer#transformers.LongformerModel"),p(Co,"href","https://colab.research.google.com/drive/12INTTR6n64TzS4RrXZxMSXfrOd9Xzamo?usp=sharing"),p(Co,"rel","nofollow"),p(Ao,"href","https://colab.research.google.com/drive/12LjJazBl7Gam0XBPy_y0CTOJZeZ34c2v?usp=sharing"),p(Ao,"rel","nofollow"),p(Po,"href","https://huggingface.co/patrickvonplaten"),p(Po,"rel","nofollow"),p(jt,"id","transformers.LEDConfig"),p(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(jt,"href","#transformers.LEDConfig"),p(ht,"class","relative group"),p(ts,"href","/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDModel"),p(Io,"href","https://huggingface.co/allenai/led-base-16384"),p(Io,"rel","nofollow"),p(os,"href","/docs/transformers/pr_17112/en/main_classes/configuration#transformers.PretrainedConfig"),p(ns,"href","/docs/transformers/pr_17112/en/main_classes/configuration#transformers.PretrainedConfig"),p(Gt,"id","initializing-a-led-allenai/led-base-16384-style-configuration->>>-configuration-=-ledconfig()"),p(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Gt,"href","#initializing-a-led-allenai/led-base-16384-style-configuration->>>-configuration-=-ledconfig()"),p(Bt,"class","relative group"),p(Ht,"id","initializing-a-model-from-the-allenai/led-base-16384-style-configuration->>>-model-="),p(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ht,"href","#initializing-a-model-from-the-allenai/led-base-16384-style-configuration->>>-model-="),p(Qt,"class","relative group"),p(Ut,"id","accessing-the-model-configuration->>>-configuration-=-model.config"),p(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ut,"href","#accessing-the-model-configuration->>>-configuration-=-model.config"),p(Wt,"class","relative group"),p(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Vt,"id","transformers.LEDTokenizer"),p(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Vt,"href","#transformers.LEDTokenizer"),p(mt,"class","relative group"),p(ss,"href","/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDTokenizer"),p(as,"href","/docs/transformers/pr_17112/en/model_doc/bart#transformers.BartTokenizer"),p(rs,"href","/docs/transformers/pr_17112/en/model_doc/bart#transformers.BartTokenizer"),p(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ls,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Jt,"id","transformers.LEDTokenizerFast"),p(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Jt,"href","#transformers.LEDTokenizerFast"),p(ft,"class","relative group"),p(cs,"href","/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDTokenizerFast"),p(hs,"href","/docs/transformers/pr_17112/en/model_doc/bart#transformers.BartTokenizerFast"),p(ps,"href","/docs/transformers/pr_17112/en/model_doc/bart#transformers.BartTokenizerFast"),p(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Yt,"id","transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),p(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Yt,"href","#transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),p(_t,"class","relative group"),p(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(eo,"id","transformers.LEDModel"),p(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(eo,"href","#transformers.LEDModel"),p(qt,"class","relative group"),p(us,"href","/docs/transformers/pr_17112/en/main_classes/model#transformers.PreTrainedModel"),p(bn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(bn,"rel","nofollow"),p(ms,"href","/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDModel"),p(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(no,"id","transformers.LEDForConditionalGeneration"),p(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(no,"href","#transformers.LEDForConditionalGeneration"),p($t,"class","relative group"),p(fs,"href","/docs/transformers/pr_17112/en/main_classes/model#transformers.PreTrainedModel"),p(En,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(En,"rel","nofollow"),p(_s,"href","/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDForConditionalGeneration"),p(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(io,"id","transformers.LEDForSequenceClassification"),p(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(io,"href","#transformers.LEDForSequenceClassification"),p(Ft,"class","relative group"),p(gs,"href","/docs/transformers/pr_17112/en/main_classes/model#transformers.PreTrainedModel"),p(zn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(zn,"rel","nofollow"),p(bs,"href","/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDForSequenceClassification"),p(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(mo,"id","transformers.LEDForQuestionAnswering"),p(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(mo,"href","#transformers.LEDForQuestionAnswering"),p(xt,"class","relative group"),p(vs,"href","/docs/transformers/pr_17112/en/main_classes/model#transformers.PreTrainedModel"),p(An,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(An,"rel","nofollow"),p(Ts,"href","/docs/transformers/pr_17112/en/model_doc/led#transformers.LEDForQuestionAnswering"),p(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(bo,"id","transformers.TFLEDModel"),p(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(bo,"href","#transformers.TFLEDModel"),p(Ct,"class","relative group"),p(ks,"href","/docs/transformers/pr_17112/en/main_classes/model#transformers.TFPreTrainedModel"),p(Gn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Gn,"rel","nofollow"),p(ws,"href","/docs/transformers/pr_17112/en/model_doc/led#transformers.TFLEDModel"),p(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(wo,"id","transformers.TFLEDForConditionalGeneration"),p(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(wo,"href","#transformers.TFLEDForConditionalGeneration"),p(At,"class","relative group"),p(ys,"href","/docs/transformers/pr_17112/en/main_classes/model#transformers.TFPreTrainedModel"),p(Rn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Rn,"rel","nofollow"),p(Es,"href","/docs/transformers/pr_17112/en/model_doc/led#transformers.TFLEDForConditionalGeneration"),p(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,l),g(o,b,_),g(o,u,_),e(u,m),e(m,v),w(i,v,null),e(u,f),e(u,D),e(D,Be),g(o,_e,_),g(o,F,_),e(F,Z),e(Z,W),w(oe,W,null),e(F,Ge),e(F,U),e(U,Qe),g(o,Fe,_),g(o,B,_),e(B,V),e(B,ne),e(ne,ye),e(B,C),g(o,A,_),g(o,ge,_),e(ge,se),g(o,ze,_),g(o,be,_),e(be,R),e(R,He),g(o,xe,_),g(o,O,_),e(O,We),g(o,Y,_),g(o,M,_),e(M,S),e(S,G),e(G,Ue),e(S,Ve),e(S,j),e(j,Re),e(S,ae),e(S,Ee),e(Ee,L),e(S,z),e(S,re),e(re,at),e(S,rt),e(S,I),e(I,dt),e(S,it),e(S,Me),e(Me,K),e(S,de),e(S,Se),e(Se,lt),e(S,ie),e(M,ct),e(M,le),e(le,Ke),e(le,Xe),e(Xe,Bd),e(le,Gd),e(le,As),e(As,Qd),e(le,Hd),e(M,Wd),e(M,qe),e(qe,Ud),e(qe,Ps),e(Ps,Vd),e(qe,Rd),e(qe,Ns),e(Ns,Kd),e(qe,Xd),e(qe,Yn),e(Yn,Jd),e(qe,Zd),e(qe,js),e(js,Yd),e(qe,ei),e(M,ti),e(M,X),e(X,oi),e(X,Is),e(Is,ni),e(X,si),e(X,Bs),e(Bs,ai),e(X,ri),e(X,es),e(es,di),e(X,ii),e(X,Gs),e(Gs,li),e(X,ci),e(X,Qs),e(Qs,hi),e(X,pi),e(X,Hs),e(Hs,ui),e(X,mi),e(M,fi),e(M,ce),e(ce,_i),e(ce,Ws),e(Ws,gi),e(ce,bi),e(ce,Us),e(Us,vi),e(ce,Ti),e(ce,Vs),e(Vs,ki),e(ce,wi),e(ce,Rs),e(Rs,yi),e(ce,Ei),e(ce,Ks),e(Ks,qi),e(ce,Li),e(M,$i),e(M,So),e(So,Di),e(So,Co),e(Co,Fi),e(So,zi),e(M,xi),e(M,Oo),e(Oo,Mi),e(Oo,Ao),e(Ao,Si),e(Oo,Ci),g(o,wr,_),g(o,Nt,_),e(Nt,Oi),e(Nt,Po),e(Po,Ai),e(Nt,Pi),g(o,yr,_),g(o,ht,_),e(ht,jt),e(jt,Xs),w(No,Xs,null),e(ht,Ni),e(ht,Js),e(Js,ji),g(o,Er,_),g(o,P,_),w(jo,P,null),e(P,Ii),e(P,pt),e(pt,Bi),e(pt,ts),e(ts,Gi),e(pt,Qi),e(pt,Io),e(Io,Hi),e(pt,Wi),e(P,Ui),e(P,ut),e(ut,Vi),e(ut,os),e(os,Ri),e(ut,Ki),e(ut,ns),e(ns,Xi),e(ut,Ji),e(P,Zi),w(It,P,null),e(P,Yi),e(P,Zs),e(Zs,Ys),e(Ys,ea),e(ea,ta),e(ta,el),e(P,tl),e(P,oa),e(oa,na),e(na,sa),e(sa,Bt),e(Bt,Gt),e(Gt,aa),w(Bo,aa,null),e(Bt,ol),e(Bt,ra),e(ra,nl),e(P,sl),e(P,da),e(da,ia),e(ia,Go),e(Go,Qt),e(Qt,Ht),e(Ht,la),w(Qo,la,null),e(Qt,al),e(Qt,ca),e(ca,rl),e(Go,dl),e(Go,ha),e(ha,il),e(P,ll),e(P,pa),e(pa,ua),e(ua,ma),e(ma,Wt),e(Wt,Ut),e(Ut,fa),w(Ho,fa,null),e(Wt,cl),e(Wt,_a),e(_a,hl),g(o,qr,_),g(o,mt,_),e(mt,Vt),e(Vt,ga),w(Wo,ga,null),e(mt,pl),e(mt,ba),e(ba,ul),g(o,Lr,_),g(o,N,_),w(Uo,N,null),e(N,ml),e(N,va),e(va,fl),e(N,_l),e(N,Rt),e(Rt,ss),e(ss,gl),e(Rt,bl),e(Rt,as),e(as,vl),e(Rt,Tl),e(N,kl),e(N,Vo),e(Vo,wl),e(Vo,rs),e(rs,yl),e(Vo,El),e(N,ql),e(N,Je),w(Ro,Je,null),e(Je,Ll),e(Je,Ta),e(Ta,$l),e(Je,Dl),e(Je,Ko),e(Ko,ds),e(ds,Fl),e(ds,ka),e(ka,zl),e(Ko,xl),e(Ko,is),e(is,Ml),e(is,wa),e(wa,Sl),e(N,Cl),e(N,Kt),w(Xo,Kt,null),e(Kt,Ol),e(Kt,Jo),e(Jo,Al),e(Jo,ya),e(ya,Pl),e(Jo,Nl),e(N,jl),e(N,Xt),w(Zo,Xt,null),e(Xt,Il),e(Xt,Ea),e(Ea,Bl),e(N,Gl),e(N,ls),w(Yo,ls,null),g(o,$r,_),g(o,ft,_),e(ft,Jt),e(Jt,qa),w(en,qa,null),e(ft,Ql),e(ft,La),e(La,Hl),g(o,Dr,_),g(o,Le,_),w(tn,Le,null),e(Le,Wl),e(Le,on),e(on,Ul),e(on,$a),e($a,Vl),e(on,Rl),e(Le,Kl),e(Le,Zt),e(Zt,cs),e(cs,Xl),e(Zt,Jl),e(Zt,hs),e(hs,Zl),e(Zt,Yl),e(Le,ec),e(Le,nn),e(nn,tc),e(nn,ps),e(ps,oc),e(nn,nc),g(o,Fr,_),g(o,_t,_),e(_t,Yt),e(Yt,Da),w(sn,Da,null),e(_t,sc),e(_t,Fa),e(Fa,ac),g(o,zr,_),g(o,gt,_),w(an,gt,null),e(gt,rc),e(gt,za),e(za,dc),g(o,xr,_),g(o,bt,_),w(rn,bt,null),e(bt,ic),e(bt,xa),e(xa,lc),g(o,Mr,_),g(o,vt,_),w(dn,vt,null),e(vt,cc),e(vt,Ma),e(Ma,hc),g(o,Sr,_),g(o,Tt,_),w(ln,Tt,null),e(Tt,pc),e(Tt,Sa),e(Sa,uc),g(o,Cr,_),g(o,kt,_),w(cn,kt,null),e(kt,mc),e(kt,Ca),e(Ca,fc),g(o,Or,_),g(o,wt,_),w(hn,wt,null),e(wt,_c),e(wt,Oa),e(Oa,gc),g(o,Ar,_),g(o,yt,_),w(pn,yt,null),e(yt,bc),e(yt,Aa),e(Aa,vc),g(o,Pr,_),g(o,Et,_),w(un,Et,null),e(Et,Tc),e(Et,Pa),e(Pa,kc),g(o,Nr,_),g(o,qt,_),e(qt,eo),e(eo,Na),w(mn,Na,null),e(qt,wc),e(qt,ja),e(ja,yc),g(o,jr,_),g(o,$e,_),w(fn,$e,null),e($e,Ec),e($e,_n),e(_n,qc),e(_n,us),e(us,Lc),e(_n,$c),e($e,Dc),e($e,gn),e(gn,Fc),e(gn,bn),e(bn,zc),e(gn,xc),e($e,Mc),e($e,Ce),w(vn,Ce,null),e(Ce,Sc),e(Ce,Lt),e(Lt,Cc),e(Lt,ms),e(ms,Oc),e(Lt,Ac),e(Lt,Ia),e(Ia,Pc),e(Lt,Nc),e(Ce,jc),w(to,Ce,null),e(Ce,Ic),w(oo,Ce,null),g(o,Ir,_),g(o,$t,_),e($t,no),e(no,Ba),w(Tn,Ba,null),e($t,Bc),e($t,Ga),e(Ga,Gc),g(o,Br,_),g(o,De,_),w(kn,De,null),e(De,Qc),e(De,wn),e(wn,Hc),e(wn,fs),e(fs,Wc),e(wn,Uc),e(De,Vc),e(De,yn),e(yn,Rc),e(yn,En),e(En,Kc),e(yn,Xc),e(De,Jc),e(De,ve),w(qn,ve,null),e(ve,Zc),e(ve,Dt),e(Dt,Yc),e(Dt,_s),e(_s,eh),e(Dt,th),e(Dt,Qa),e(Qa,oh),e(Dt,nh),e(ve,sh),w(so,ve,null),e(ve,ah),w(ao,ve,null),e(ve,rh),w(ro,ve,null),g(o,Gr,_),g(o,Ft,_),e(Ft,io),e(io,Ha),w(Ln,Ha,null),e(Ft,dh),e(Ft,Wa),e(Wa,ih),g(o,Qr,_),g(o,he,_),w($n,he,null),e(he,lh),e(he,Ua),e(Ua,ch),e(he,hh),e(he,Dn),e(Dn,ph),e(Dn,gs),e(gs,uh),e(Dn,mh),e(he,fh),e(he,Fn),e(Fn,_h),e(Fn,zn),e(zn,gh),e(Fn,bh),e(he,vh),e(he,Q),w(xn,Q,null),e(Q,Th),e(Q,zt),e(zt,kh),e(zt,bs),e(bs,wh),e(zt,yh),e(zt,Va),e(Va,Eh),e(zt,qh),e(Q,Lh),w(lo,Q,null),e(Q,$h),w(co,Q,null),e(Q,Dh),w(ho,Q,null),e(Q,Fh),w(po,Q,null),e(Q,zh),w(uo,Q,null),g(o,Hr,_),g(o,xt,_),e(xt,mo),e(mo,Ra),w(Mn,Ra,null),e(xt,xh),e(xt,Ka),e(Ka,Mh),g(o,Wr,_),g(o,pe,_),w(Sn,pe,null),e(pe,Sh),e(pe,Mt),e(Mt,Ch),e(Mt,Xa),e(Xa,Oh),e(Mt,Ah),e(Mt,Ja),e(Ja,Ph),e(Mt,Nh),e(pe,jh),e(pe,Cn),e(Cn,Ih),e(Cn,vs),e(vs,Bh),e(Cn,Gh),e(pe,Qh),e(pe,On),e(On,Hh),e(On,An),e(An,Wh),e(On,Uh),e(pe,Vh),e(pe,Te),w(Pn,Te,null),e(Te,Rh),e(Te,St),e(St,Kh),e(St,Ts),e(Ts,Xh),e(St,Jh),e(St,Za),e(Za,Zh),e(St,Yh),e(Te,ep),w(fo,Te,null),e(Te,tp),w(_o,Te,null),e(Te,op),w(go,Te,null),g(o,Ur,_),g(o,Ct,_),e(Ct,bo),e(bo,Ya),w(Nn,Ya,null),e(Ct,np),e(Ct,er),e(er,sp),g(o,Vr,_),g(o,ue,_),w(jn,ue,null),e(ue,ap),e(ue,In),e(In,rp),e(In,ks),e(ks,dp),e(In,ip),e(ue,lp),e(ue,Bn),e(Bn,cp),e(Bn,Gn),e(Gn,hp),e(Bn,pp),e(ue,up),w(vo,ue,null),e(ue,mp),e(ue,Oe),w(Qn,Oe,null),e(Oe,fp),e(Oe,Ot),e(Ot,_p),e(Ot,ws),e(ws,gp),e(Ot,bp),e(Ot,tr),e(tr,vp),e(Ot,Tp),e(Oe,kp),w(To,Oe,null),e(Oe,wp),w(ko,Oe,null),g(o,Rr,_),g(o,At,_),e(At,wo),e(wo,or),w(Hn,or,null),e(At,yp),e(At,nr),e(nr,Ep),g(o,Kr,_),g(o,me,_),w(Wn,me,null),e(me,qp),e(me,Un),e(Un,Lp),e(Un,ys),e(ys,$p),e(Un,Dp),e(me,Fp),e(me,Vn),e(Vn,zp),e(Vn,Rn),e(Rn,xp),e(Vn,Mp),e(me,Sp),w(yo,me,null),e(me,Cp),e(me,Ae),w(Kn,Ae,null),e(Ae,Op),e(Ae,Pt),e(Pt,Ap),e(Pt,Es),e(Es,Pp),e(Pt,Np),e(Pt,sr),e(sr,jp),e(Pt,Ip),e(Ae,Bp),w(Eo,Ae,null),e(Ae,Gp),w(qo,Ae,null),Xr=!0},p(o,[_]){const Xn={};_&2&&(Xn.$$scope={dirty:_,ctx:o}),It.$set(Xn);const ar={};_&2&&(ar.$$scope={dirty:_,ctx:o}),to.$set(ar);const rr={};_&2&&(rr.$$scope={dirty:_,ctx:o}),oo.$set(rr);const dr={};_&2&&(dr.$$scope={dirty:_,ctx:o}),so.$set(dr);const Jn={};_&2&&(Jn.$$scope={dirty:_,ctx:o}),ao.$set(Jn);const ir={};_&2&&(ir.$$scope={dirty:_,ctx:o}),ro.$set(ir);const lr={};_&2&&(lr.$$scope={dirty:_,ctx:o}),lo.$set(lr);const cr={};_&2&&(cr.$$scope={dirty:_,ctx:o}),co.$set(cr);const Zn={};_&2&&(Zn.$$scope={dirty:_,ctx:o}),ho.$set(Zn);const hr={};_&2&&(hr.$$scope={dirty:_,ctx:o}),po.$set(hr);const pr={};_&2&&(pr.$$scope={dirty:_,ctx:o}),uo.$set(pr);const ur={};_&2&&(ur.$$scope={dirty:_,ctx:o}),fo.$set(ur);const mr={};_&2&&(mr.$$scope={dirty:_,ctx:o}),_o.$set(mr);const fr={};_&2&&(fr.$$scope={dirty:_,ctx:o}),go.$set(fr);const J={};_&2&&(J.$$scope={dirty:_,ctx:o}),vo.$set(J);const H={};_&2&&(H.$$scope={dirty:_,ctx:o}),To.$set(H);const _r={};_&2&&(_r.$$scope={dirty:_,ctx:o}),ko.$set(_r);const gr={};_&2&&(gr.$$scope={dirty:_,ctx:o}),yo.$set(gr);const br={};_&2&&(br.$$scope={dirty:_,ctx:o}),Eo.$set(br);const vr={};_&2&&(vr.$$scope={dirty:_,ctx:o}),qo.$set(vr)},i(o){Xr||(y(i.$$.fragment,o),y(oe.$$.fragment,o),y(No.$$.fragment,o),y(jo.$$.fragment,o),y(It.$$.fragment,o),y(Bo.$$.fragment,o),y(Qo.$$.fragment,o),y(Ho.$$.fragment,o),y(Wo.$$.fragment,o),y(Uo.$$.fragment,o),y(Ro.$$.fragment,o),y(Xo.$$.fragment,o),y(Zo.$$.fragment,o),y(Yo.$$.fragment,o),y(en.$$.fragment,o),y(tn.$$.fragment,o),y(sn.$$.fragment,o),y(an.$$.fragment,o),y(rn.$$.fragment,o),y(dn.$$.fragment,o),y(ln.$$.fragment,o),y(cn.$$.fragment,o),y(hn.$$.fragment,o),y(pn.$$.fragment,o),y(un.$$.fragment,o),y(mn.$$.fragment,o),y(fn.$$.fragment,o),y(vn.$$.fragment,o),y(to.$$.fragment,o),y(oo.$$.fragment,o),y(Tn.$$.fragment,o),y(kn.$$.fragment,o),y(qn.$$.fragment,o),y(so.$$.fragment,o),y(ao.$$.fragment,o),y(ro.$$.fragment,o),y(Ln.$$.fragment,o),y($n.$$.fragment,o),y(xn.$$.fragment,o),y(lo.$$.fragment,o),y(co.$$.fragment,o),y(ho.$$.fragment,o),y(po.$$.fragment,o),y(uo.$$.fragment,o),y(Mn.$$.fragment,o),y(Sn.$$.fragment,o),y(Pn.$$.fragment,o),y(fo.$$.fragment,o),y(_o.$$.fragment,o),y(go.$$.fragment,o),y(Nn.$$.fragment,o),y(jn.$$.fragment,o),y(vo.$$.fragment,o),y(Qn.$$.fragment,o),y(To.$$.fragment,o),y(ko.$$.fragment,o),y(Hn.$$.fragment,o),y(Wn.$$.fragment,o),y(yo.$$.fragment,o),y(Kn.$$.fragment,o),y(Eo.$$.fragment,o),y(qo.$$.fragment,o),Xr=!0)},o(o){E(i.$$.fragment,o),E(oe.$$.fragment,o),E(No.$$.fragment,o),E(jo.$$.fragment,o),E(It.$$.fragment,o),E(Bo.$$.fragment,o),E(Qo.$$.fragment,o),E(Ho.$$.fragment,o),E(Wo.$$.fragment,o),E(Uo.$$.fragment,o),E(Ro.$$.fragment,o),E(Xo.$$.fragment,o),E(Zo.$$.fragment,o),E(Yo.$$.fragment,o),E(en.$$.fragment,o),E(tn.$$.fragment,o),E(sn.$$.fragment,o),E(an.$$.fragment,o),E(rn.$$.fragment,o),E(dn.$$.fragment,o),E(ln.$$.fragment,o),E(cn.$$.fragment,o),E(hn.$$.fragment,o),E(pn.$$.fragment,o),E(un.$$.fragment,o),E(mn.$$.fragment,o),E(fn.$$.fragment,o),E(vn.$$.fragment,o),E(to.$$.fragment,o),E(oo.$$.fragment,o),E(Tn.$$.fragment,o),E(kn.$$.fragment,o),E(qn.$$.fragment,o),E(so.$$.fragment,o),E(ao.$$.fragment,o),E(ro.$$.fragment,o),E(Ln.$$.fragment,o),E($n.$$.fragment,o),E(xn.$$.fragment,o),E(lo.$$.fragment,o),E(co.$$.fragment,o),E(ho.$$.fragment,o),E(po.$$.fragment,o),E(uo.$$.fragment,o),E(Mn.$$.fragment,o),E(Sn.$$.fragment,o),E(Pn.$$.fragment,o),E(fo.$$.fragment,o),E(_o.$$.fragment,o),E(go.$$.fragment,o),E(Nn.$$.fragment,o),E(jn.$$.fragment,o),E(vo.$$.fragment,o),E(Qn.$$.fragment,o),E(To.$$.fragment,o),E(ko.$$.fragment,o),E(Hn.$$.fragment,o),E(Wn.$$.fragment,o),E(yo.$$.fragment,o),E(Kn.$$.fragment,o),E(Eo.$$.fragment,o),E(qo.$$.fragment,o),Xr=!1},d(o){t(l),o&&t(b),o&&t(u),q(i),o&&t(_e),o&&t(F),q(oe),o&&t(Fe),o&&t(B),o&&t(A),o&&t(ge),o&&t(ze),o&&t(be),o&&t(xe),o&&t(O),o&&t(Y),o&&t(M),o&&t(wr),o&&t(Nt),o&&t(yr),o&&t(ht),q(No),o&&t(Er),o&&t(P),q(jo),q(It),q(Bo),q(Qo),q(Ho),o&&t(qr),o&&t(mt),q(Wo),o&&t(Lr),o&&t(N),q(Uo),q(Ro),q(Xo),q(Zo),q(Yo),o&&t($r),o&&t(ft),q(en),o&&t(Dr),o&&t(Le),q(tn),o&&t(Fr),o&&t(_t),q(sn),o&&t(zr),o&&t(gt),q(an),o&&t(xr),o&&t(bt),q(rn),o&&t(Mr),o&&t(vt),q(dn),o&&t(Sr),o&&t(Tt),q(ln),o&&t(Cr),o&&t(kt),q(cn),o&&t(Or),o&&t(wt),q(hn),o&&t(Ar),o&&t(yt),q(pn),o&&t(Pr),o&&t(Et),q(un),o&&t(Nr),o&&t(qt),q(mn),o&&t(jr),o&&t($e),q(fn),q(vn),q(to),q(oo),o&&t(Ir),o&&t($t),q(Tn),o&&t(Br),o&&t(De),q(kn),q(qn),q(so),q(ao),q(ro),o&&t(Gr),o&&t(Ft),q(Ln),o&&t(Qr),o&&t(he),q($n),q(xn),q(lo),q(co),q(ho),q(po),q(uo),o&&t(Hr),o&&t(xt),q(Mn),o&&t(Wr),o&&t(pe),q(Sn),q(Pn),q(fo),q(_o),q(go),o&&t(Ur),o&&t(Ct),q(Nn),o&&t(Vr),o&&t(ue),q(jn),q(vo),q(Qn),q(To),q(ko),o&&t(Rr),o&&t(At),q(Hn),o&&t(Kr),o&&t(me),q(Wn),q(yo),q(Kn),q(Eo),q(qo)}}}const Nf={local:"led",sections:[{local:"overview",title:"Overview"},{local:"transformers.LEDConfig",title:"LEDConfig"},{local:"transformers.LEDTokenizer",title:"LEDTokenizer"},{local:"transformers.LEDTokenizerFast",title:"LEDTokenizerFast"},{local:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",title:"LED specific outputs"},{local:"transformers.LEDModel",title:"LEDModel"},{local:"transformers.LEDForConditionalGeneration",title:"LEDForConditionalGeneration"},{local:"transformers.LEDForSequenceClassification",title:"LEDForSequenceClassification"},{local:"transformers.LEDForQuestionAnswering",title:"LEDForQuestionAnswering"},{local:"transformers.TFLEDModel",title:"TFLEDModel"},{local:"transformers.TFLEDForConditionalGeneration",title:"TFLEDForConditionalGeneration"}],title:"LED"};function jf($){return _f(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Uf extends pf{constructor(l){super();uf(this,l,jf,Pf,mf,{})}}export{Uf as default,Nf as metadata};
