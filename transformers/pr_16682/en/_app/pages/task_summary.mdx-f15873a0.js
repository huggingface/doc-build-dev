import{S as G_,i as U_,s as Y_,e as l,k as m,w as j,t as o,M as W_,c as i,d as t,m as g,a as p,x as k,h as r,b as d,F as e,g as h,y as w,q as x,o as b,B as y,v as Q_,L as C}from"../chunks/vendor-6b77c823.js";import{T as X_}from"../chunks/Tip-39098574.js";import{I as J}from"../chunks/IconCopyLink-7a11ce68.js";import{C as q}from"../chunks/CodeBlock-3a8b25a8.js";import{D as V_}from"../chunks/DocNotebookDropdown-f2b55cd8.js";import{F as ms,M as S}from"../chunks/Markdown-4489c441.js";function J_($){let n,u,a,f,_;return{c(){n=l("p"),u=o(`All tasks presented here leverage pre-trained checkpoints that were fine-tuned on specific tasks. Loading a
checkpoint that was not fine-tuned on a specific task would load only the base transformer layers and not the
additional head that is used for the task, initializing the weights of that head randomly.`),a=m(),f=l("p"),_=o("This would produce random output.")},l(E){n=i(E,"P",{});var A=p(n);u=r(A,`All tasks presented here leverage pre-trained checkpoints that were fine-tuned on specific tasks. Loading a
checkpoint that was not fine-tuned on a specific task would load only the base transformer layers and not the
additional head that is used for the task, initializing the weights of that head randomly.`),A.forEach(t),a=g(E),f=i(E,"P",{});var z=p(f);_=r(z,"This would produce random output."),z.forEach(t)},m(E,A){h(E,n,A),e(n,u),h(E,a,A),h(E,f,A),e(f,_)},d(E){E&&t(n),E&&t(a),E&&t(f)}}}function K_($){let n,u;return n=new q({props:{code:`from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

tokenizer = AutoTokenizer.from_pretrained("bert-base-cased-finetuned-mrpc")
model = AutoModelForSequenceClassification.from_pretrained("bert-base-cased-finetuned-mrpc")

classes = ["not paraphrase", "is paraphrase"]

sequence_0 = "The company HuggingFace is based in New York City"
sequence_1 = "Apples are especially bad for your health"
sequence_2 = "HuggingFace's headquarters are situated in Manhattan"

# The tokenizer will automatically add any model specific separators (i.e. <CLS> and <SEP>) and tokens to
# the sequence, as well as compute the attention masks.
paraphrase = tokenizer(sequence_0, sequence_2, return_tensors="pt")
not_paraphrase = tokenizer(sequence_0, sequence_1, return_tensors="pt")

paraphrase_classification_logits = model(**paraphrase).logits
not_paraphrase_classification_logits = model(**not_paraphrase).logits

paraphrase_results = torch.softmax(paraphrase_classification_logits, dim=1).tolist()[0]
not_paraphrase_results = torch.softmax(not_paraphrase_classification_logits, dim=1).tolist()[0]

# Should be paraphrase
for i in range(len(classes)):
    print(f"{classes[i]}: {int(round(paraphrase_results[i] * 100))}%")

# Should not be paraphrase
for i in range(len(classes)):
    print(f"{classes[i]}: {int(round(not_paraphrase_results[i] * 100))}%")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased-finetuned-mrpc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-cased-finetuned-mrpc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>classes = [<span class="hljs-string">&quot;not paraphrase&quot;</span>, <span class="hljs-string">&quot;is paraphrase&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_0 = <span class="hljs-string">&quot;The company HuggingFace is based in New York City&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_1 = <span class="hljs-string">&quot;Apples are especially bad for your health&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_2 = <span class="hljs-string">&quot;HuggingFace&#x27;s headquarters are situated in Manhattan&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># The tokenizer will automatically add any model specific separators (i.e. &lt;CLS&gt; and &lt;SEP&gt;) and tokens to</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the sequence, as well as compute the attention masks.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>paraphrase = tokenizer(sequence_0, sequence_2, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>not_paraphrase = tokenizer(sequence_0, sequence_1, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>paraphrase_classification_logits = model(**paraphrase).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>not_paraphrase_classification_logits = model(**not_paraphrase).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>paraphrase_results = torch.softmax(paraphrase_classification_logits, dim=<span class="hljs-number">1</span>).tolist()[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>not_paraphrase_results = torch.softmax(not_paraphrase_classification_logits, dim=<span class="hljs-number">1</span>).tolist()[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Should be paraphrase</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-built_in">len</span>(classes)):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;<span class="hljs-subst">{classes[i]}</span>: <span class="hljs-subst">{<span class="hljs-built_in">int</span>(<span class="hljs-built_in">round</span>(paraphrase_results[i] * <span class="hljs-number">100</span>))}</span>%&quot;</span>)
<span class="hljs-keyword">not</span> paraphrase: <span class="hljs-number">10</span>%
<span class="hljs-keyword">is</span> paraphrase: <span class="hljs-number">90</span>%

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Should not be paraphrase</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-built_in">len</span>(classes)):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;<span class="hljs-subst">{classes[i]}</span>: <span class="hljs-subst">{<span class="hljs-built_in">int</span>(<span class="hljs-built_in">round</span>(not_paraphrase_results[i] * <span class="hljs-number">100</span>))}</span>%&quot;</span>)
<span class="hljs-keyword">not</span> paraphrase: <span class="hljs-number">94</span>%
<span class="hljs-keyword">is</span> paraphrase: <span class="hljs-number">6</span>%`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p:C,i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function Z_($){let n,u;return n=new S({props:{$$slots:{default:[K_]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function sj($){let n,u;return n=new q({props:{code:`from transformers import AutoTokenizer, TFAutoModelForSequenceClassification
import tensorflow as tf

tokenizer = AutoTokenizer.from_pretrained("bert-base-cased-finetuned-mrpc")
model = TFAutoModelForSequenceClassification.from_pretrained("bert-base-cased-finetuned-mrpc")

classes = ["not paraphrase", "is paraphrase"]

sequence_0 = "The company HuggingFace is based in New York City"
sequence_1 = "Apples are especially bad for your health"
sequence_2 = "HuggingFace's headquarters are situated in Manhattan"

# The tokenizer will automatically add any model specific separators (i.e. <CLS> and <SEP>) and tokens to
# the sequence, as well as compute the attention masks.
paraphrase = tokenizer(sequence_0, sequence_2, return_tensors="tf")
not_paraphrase = tokenizer(sequence_0, sequence_1, return_tensors="tf")

paraphrase_classification_logits = model(paraphrase).logits
not_paraphrase_classification_logits = model(not_paraphrase).logits

paraphrase_results = tf.nn.softmax(paraphrase_classification_logits, axis=1).numpy()[0]
not_paraphrase_results = tf.nn.softmax(not_paraphrase_classification_logits, axis=1).numpy()[0]

# Should be paraphrase
for i in range(len(classes)):
    print(f"{classes[i]}: {int(round(paraphrase_results[i] * 100))}%")

# Should not be paraphrase
for i in range(len(classes)):
    print(f"{classes[i]}: {int(round(not_paraphrase_results[i] * 100))}%")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAutoModelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased-finetuned-mrpc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-cased-finetuned-mrpc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>classes = [<span class="hljs-string">&quot;not paraphrase&quot;</span>, <span class="hljs-string">&quot;is paraphrase&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_0 = <span class="hljs-string">&quot;The company HuggingFace is based in New York City&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_1 = <span class="hljs-string">&quot;Apples are especially bad for your health&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_2 = <span class="hljs-string">&quot;HuggingFace&#x27;s headquarters are situated in Manhattan&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># The tokenizer will automatically add any model specific separators (i.e. &lt;CLS&gt; and &lt;SEP&gt;) and tokens to</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the sequence, as well as compute the attention masks.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>paraphrase = tokenizer(sequence_0, sequence_2, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>not_paraphrase = tokenizer(sequence_0, sequence_1, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>paraphrase_classification_logits = model(paraphrase).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>not_paraphrase_classification_logits = model(not_paraphrase).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>paraphrase_results = tf.nn.softmax(paraphrase_classification_logits, axis=<span class="hljs-number">1</span>).numpy()[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>not_paraphrase_results = tf.nn.softmax(not_paraphrase_classification_logits, axis=<span class="hljs-number">1</span>).numpy()[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Should be paraphrase</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-built_in">len</span>(classes)):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;<span class="hljs-subst">{classes[i]}</span>: <span class="hljs-subst">{<span class="hljs-built_in">int</span>(<span class="hljs-built_in">round</span>(paraphrase_results[i] * <span class="hljs-number">100</span>))}</span>%&quot;</span>)
<span class="hljs-keyword">not</span> paraphrase: <span class="hljs-number">10</span>%
<span class="hljs-keyword">is</span> paraphrase: <span class="hljs-number">90</span>%

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Should not be paraphrase</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-built_in">len</span>(classes)):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;<span class="hljs-subst">{classes[i]}</span>: <span class="hljs-subst">{<span class="hljs-built_in">int</span>(<span class="hljs-built_in">round</span>(not_paraphrase_results[i] * <span class="hljs-number">100</span>))}</span>%&quot;</span>)
<span class="hljs-keyword">not</span> paraphrase: <span class="hljs-number">94</span>%
<span class="hljs-keyword">is</span> paraphrase: <span class="hljs-number">6</span>%`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p:C,i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function ej($){let n,u;return n=new S({props:{$$slots:{default:[sj]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function tj($){let n,u;return n=new q({props:{code:`from transformers import AutoTokenizer, AutoModelForQuestionAnswering
import torch

tokenizer = AutoTokenizer.from_pretrained("bert-large-uncased-whole-word-masking-finetuned-squad")
model = AutoModelForQuestionAnswering.from_pretrained("bert-large-uncased-whole-word-masking-finetuned-squad")

text = r"""
\u{1F917} Transformers (formerly known as pytorch-transformers and pytorch-pretrained-bert) provides general-purpose
architectures (BERT, GPT-2, RoBERTa, XLM, DistilBert, XLNet\u2026) for Natural Language Understanding (NLU) and Natural
Language Generation (NLG) with over 32+ pretrained models in 100+ languages and deep interoperability between
TensorFlow 2.0 and PyTorch.
"""

questions = [
    "How many pretrained models are available in \u{1F917} Transformers?",
    "What does \u{1F917} Transformers provide?",
    "\u{1F917} Transformers provides interoperability between which frameworks?",
]

for question in questions:
    inputs = tokenizer(question, text, add_special_tokens=True, return_tensors="pt")
    input_ids = inputs["input_ids"].tolist()[0]

    outputs = model(**inputs)
    answer_start_scores = outputs.start_logits
    answer_end_scores = outputs.end_logits

    # Get the most likely beginning of answer with the argmax of the score
    answer_start = torch.argmax(answer_start_scores)
    # Get the most likely end of answer with the argmax of the score
    answer_end = torch.argmax(answer_end_scores) + 1

    answer = tokenizer.convert_tokens_to_string(
        tokenizer.convert_ids_to_tokens(input_ids[answer_start:answer_end])
    )

    print(f"Question: {question}")
    print(f"Answer: {answer}")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-large-uncased-whole-word-masking-finetuned-squad&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;bert-large-uncased-whole-word-masking-finetuned-squad&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">r&quot;&quot;&quot;
<span class="hljs-meta">... </span>\u{1F917} Transformers (formerly known as pytorch-transformers and pytorch-pretrained-bert) provides general-purpose
<span class="hljs-meta">... </span>architectures (BERT, GPT-2, RoBERTa, XLM, DistilBert, XLNet\u2026) for Natural Language Understanding (NLU) and Natural
<span class="hljs-meta">... </span>Language Generation (NLG) with over 32+ pretrained models in 100+ languages and deep interoperability between
<span class="hljs-meta">... </span>TensorFlow 2.0 and PyTorch.
<span class="hljs-meta">... </span>&quot;&quot;&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>questions = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many pretrained models are available in \u{1F917} Transformers?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What does \u{1F917} Transformers provide?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;\u{1F917} Transformers provides interoperability between which frameworks?&quot;</span>,
<span class="hljs-meta">... </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> question <span class="hljs-keyword">in</span> questions:
<span class="hljs-meta">... </span>    inputs = tokenizer(question, text, add_special_tokens=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">... </span>    input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].tolist()[<span class="hljs-number">0</span>]

<span class="hljs-meta">... </span>    outputs = model(**inputs)
<span class="hljs-meta">... </span>    answer_start_scores = outputs.start_logits
<span class="hljs-meta">... </span>    answer_end_scores = outputs.end_logits

<span class="hljs-meta">... </span>    <span class="hljs-comment"># Get the most likely beginning of answer with the argmax of the score</span>
<span class="hljs-meta">... </span>    answer_start = torch.argmax(answer_start_scores)
<span class="hljs-meta">... </span>    <span class="hljs-comment"># Get the most likely end of answer with the argmax of the score</span>
<span class="hljs-meta">... </span>    answer_end = torch.argmax(answer_end_scores) + <span class="hljs-number">1</span>

<span class="hljs-meta">... </span>    answer = tokenizer.convert_tokens_to_string(
<span class="hljs-meta">... </span>        tokenizer.convert_ids_to_tokens(input_ids[answer_start:answer_end])
<span class="hljs-meta">... </span>    )

<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Question: <span class="hljs-subst">{question}</span>&quot;</span>)
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Answer: <span class="hljs-subst">{answer}</span>&quot;</span>)
Question: How many pretrained models are available <span class="hljs-keyword">in</span> \u{1F917} Transformers?
Answer: over <span class="hljs-number">32</span> +
Question: What does \u{1F917} Transformers provide?
Answer: general - purpose architectures
Question: \u{1F917} Transformers provides interoperability between which frameworks?
Answer: tensorflow <span class="hljs-number">2.</span> <span class="hljs-number">0</span> <span class="hljs-keyword">and</span> pytorch`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p:C,i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function aj($){let n,u;return n=new S({props:{$$slots:{default:[tj]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function nj($){let n,u;return n=new q({props:{code:`from transformers import AutoTokenizer, TFAutoModelForQuestionAnswering
import tensorflow as tf

tokenizer = AutoTokenizer.from_pretrained("bert-large-uncased-whole-word-masking-finetuned-squad")
model = TFAutoModelForQuestionAnswering.from_pretrained("bert-large-uncased-whole-word-masking-finetuned-squad")

text = r"""
\u{1F917} Transformers (formerly known as pytorch-transformers and pytorch-pretrained-bert) provides general-purpose
architectures (BERT, GPT-2, RoBERTa, XLM, DistilBert, XLNet\u2026) for Natural Language Understanding (NLU) and Natural
Language Generation (NLG) with over 32+ pretrained models in 100+ languages and deep interoperability between
TensorFlow 2.0 and PyTorch.
"""

questions = [
    "How many pretrained models are available in \u{1F917} Transformers?",
    "What does \u{1F917} Transformers provide?",
    "\u{1F917} Transformers provides interoperability between which frameworks?",
]

for question in questions:
    inputs = tokenizer(question, text, add_special_tokens=True, return_tensors="tf")
    input_ids = inputs["input_ids"].numpy()[0]

    outputs = model(inputs)
    answer_start_scores = outputs.start_logits
    answer_end_scores = outputs.end_logits

    # Get the most likely beginning of answer with the argmax of the score
    answer_start = tf.argmax(answer_start_scores, axis=1).numpy()[0]
    # Get the most likely end of answer with the argmax of the score
    answer_end = tf.argmax(answer_end_scores, axis=1).numpy()[0] + 1

    answer = tokenizer.convert_tokens_to_string(
        tokenizer.convert_ids_to_tokens(input_ids[answer_start:answer_end])
    )

    print(f"Question: {question}")
    print(f"Answer: {answer}")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAutoModelForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-large-uncased-whole-word-masking-finetuned-squad&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;bert-large-uncased-whole-word-masking-finetuned-squad&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">r&quot;&quot;&quot;
<span class="hljs-meta">... </span>\u{1F917} Transformers (formerly known as pytorch-transformers and pytorch-pretrained-bert) provides general-purpose
<span class="hljs-meta">... </span>architectures (BERT, GPT-2, RoBERTa, XLM, DistilBert, XLNet\u2026) for Natural Language Understanding (NLU) and Natural
<span class="hljs-meta">... </span>Language Generation (NLG) with over 32+ pretrained models in 100+ languages and deep interoperability between
<span class="hljs-meta">... </span>TensorFlow 2.0 and PyTorch.
<span class="hljs-meta">... </span>&quot;&quot;&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>questions = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many pretrained models are available in \u{1F917} Transformers?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What does \u{1F917} Transformers provide?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;\u{1F917} Transformers provides interoperability between which frameworks?&quot;</span>,
<span class="hljs-meta">... </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> question <span class="hljs-keyword">in</span> questions:
<span class="hljs-meta">... </span>    inputs = tokenizer(question, text, add_special_tokens=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">... </span>    input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].numpy()[<span class="hljs-number">0</span>]

<span class="hljs-meta">... </span>    outputs = model(inputs)
<span class="hljs-meta">... </span>    answer_start_scores = outputs.start_logits
<span class="hljs-meta">... </span>    answer_end_scores = outputs.end_logits

<span class="hljs-meta">... </span>    <span class="hljs-comment"># Get the most likely beginning of answer with the argmax of the score</span>
<span class="hljs-meta">... </span>    answer_start = tf.argmax(answer_start_scores, axis=<span class="hljs-number">1</span>).numpy()[<span class="hljs-number">0</span>]
<span class="hljs-meta">... </span>    <span class="hljs-comment"># Get the most likely end of answer with the argmax of the score</span>
<span class="hljs-meta">... </span>    answer_end = tf.argmax(answer_end_scores, axis=<span class="hljs-number">1</span>).numpy()[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>

<span class="hljs-meta">... </span>    answer = tokenizer.convert_tokens_to_string(
<span class="hljs-meta">... </span>        tokenizer.convert_ids_to_tokens(input_ids[answer_start:answer_end])
<span class="hljs-meta">... </span>    )

<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Question: <span class="hljs-subst">{question}</span>&quot;</span>)
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Answer: <span class="hljs-subst">{answer}</span>&quot;</span>)
Question: How many pretrained models are available <span class="hljs-keyword">in</span> \u{1F917} Transformers?
Answer: over <span class="hljs-number">32</span> +
Question: What does \u{1F917} Transformers provide?
Answer: general - purpose architectures
Question: \u{1F917} Transformers provides interoperability between which frameworks?
Answer: tensorflow <span class="hljs-number">2.</span> <span class="hljs-number">0</span> <span class="hljs-keyword">and</span> pytorch`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p:C,i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function oj($){let n,u;return n=new S({props:{$$slots:{default:[nj]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function rj($){let n,u;return n=new q({props:{code:`from transformers import AutoModelForMaskedLM, AutoTokenizer
import torch

tokenizer = AutoTokenizer.from_pretrained("distilbert-base-cased")
model = AutoModelForMaskedLM.from_pretrained("distilbert-base-cased")

sequence = (
    "Distilled models are smaller than the models they mimic. Using them instead of the large "
    f"versions would help {tokenizer.mask_token} our carbon footprint."
)

inputs = tokenizer(sequence, return_tensors="pt")
mask_token_index = torch.where(inputs["input_ids"] == tokenizer.mask_token_id)[1]

token_logits = model(**inputs).logits
mask_token_logits = token_logits[0, mask_token_index, :]

top_5_tokens = torch.topk(mask_token_logits, 5, dim=1).indices[0].tolist()

for token in top_5_tokens:
    print(sequence.replace(tokenizer.mask_token, tokenizer.decode([token])))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForMaskedLM, AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Distilled models are smaller than the models they mimic. Using them instead of the large &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">f&quot;versions would help <span class="hljs-subst">{tokenizer.mask_token}</span> our carbon footprint.&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(sequence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = torch.where(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>] == tokenizer.mask_token_id)[<span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_logits = token_logits[<span class="hljs-number">0</span>, mask_token_index, :]

<span class="hljs-meta">&gt;&gt;&gt; </span>top_5_tokens = torch.topk(mask_token_logits, <span class="hljs-number">5</span>, dim=<span class="hljs-number">1</span>).indices[<span class="hljs-number">0</span>].tolist()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> token <span class="hljs-keyword">in</span> top_5_tokens:
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(sequence.replace(tokenizer.mask_token, tokenizer.decode([token])))
Distilled models are smaller than the models they mimic. Using them instead of the large versions would <span class="hljs-built_in">help</span> reduce our carbon footprint.
Distilled models are smaller than the models they mimic. Using them instead of the large versions would <span class="hljs-built_in">help</span> increase our carbon footprint.
Distilled models are smaller than the models they mimic. Using them instead of the large versions would <span class="hljs-built_in">help</span> decrease our carbon footprint.
Distilled models are smaller than the models they mimic. Using them instead of the large versions would <span class="hljs-built_in">help</span> offset our carbon footprint.
Distilled models are smaller than the models they mimic. Using them instead of the large versions would <span class="hljs-built_in">help</span> improve our carbon footprint.`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p:C,i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function lj($){let n,u;return n=new S({props:{$$slots:{default:[rj]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function ij($){let n,u;return n=new q({props:{code:`from transformers import TFAutoModelForMaskedLM, AutoTokenizer
import tensorflow as tf

tokenizer = AutoTokenizer.from_pretrained("distilbert-base-cased")
model = TFAutoModelForMaskedLM.from_pretrained("distilbert-base-cased")

sequence = (
    "Distilled models are smaller than the models they mimic. Using them instead of the large "
    f"versions would help {tokenizer.mask_token} our carbon footprint."
)

inputs = tokenizer(sequence, return_tensors="tf")
mask_token_index = tf.where(inputs["input_ids"] == tokenizer.mask_token_id)[0, 1]

token_logits = model(**inputs).logits
mask_token_logits = token_logits[0, mask_token_index, :]

top_5_tokens = tf.math.top_k(mask_token_logits, 5).indices.numpy()

for token in top_5_tokens:
    print(sequence.replace(tokenizer.mask_token, tokenizer.decode([token])))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForMaskedLM, AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Distilled models are smaller than the models they mimic. Using them instead of the large &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">f&quot;versions would help <span class="hljs-subst">{tokenizer.mask_token}</span> our carbon footprint.&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(sequence, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>] == tokenizer.mask_token_id)[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_logits = token_logits[<span class="hljs-number">0</span>, mask_token_index, :]

<span class="hljs-meta">&gt;&gt;&gt; </span>top_5_tokens = tf.math.top_k(mask_token_logits, <span class="hljs-number">5</span>).indices.numpy()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> token <span class="hljs-keyword">in</span> top_5_tokens:
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(sequence.replace(tokenizer.mask_token, tokenizer.decode([token])))
Distilled models are smaller than the models they mimic. Using them instead of the large versions would <span class="hljs-built_in">help</span> reduce our carbon footprint.
Distilled models are smaller than the models they mimic. Using them instead of the large versions would <span class="hljs-built_in">help</span> increase our carbon footprint.
Distilled models are smaller than the models they mimic. Using them instead of the large versions would <span class="hljs-built_in">help</span> decrease our carbon footprint.
Distilled models are smaller than the models they mimic. Using them instead of the large versions would <span class="hljs-built_in">help</span> offset our carbon footprint.
Distilled models are smaller than the models they mimic. Using them instead of the large versions would <span class="hljs-built_in">help</span> improve our carbon footprint.`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p:C,i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function pj($){let n,u;return n=new S({props:{$$slots:{default:[ij]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function cj($){let n,u,a,f,_,E,A,z;return A=new q({props:{code:`from transformers import AutoModelForCausalLM, AutoTokenizer, top_k_top_p_filtering
import torch
from torch import nn

tokenizer = AutoTokenizer.from_pretrained("gpt2")
model = AutoModelForCausalLM.from_pretrained("gpt2")

sequence = f"Hugging Face is based in DUMBO, New York City, and"

inputs = tokenizer(sequence, return_tensors="pt")
input_ids = inputs["input_ids"]

# get logits of last hidden state
next_token_logits = model(**inputs).logits[:, -1, :]

# filter
filtered_next_token_logits = top_k_top_p_filtering(next_token_logits, top_k=50, top_p=1.0)

# sample
probs = nn.functional.softmax(filtered_next_token_logits, dim=-1)
next_token = torch.multinomial(probs, num_samples=1)

generated = torch.cat([input_ids, next_token], dim=-1)

resulting_string = tokenizer.decode(generated.tolist()[0])
print(resulting_string)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForCausalLM, AutoTokenizer, top_k_top_p_filtering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> torch <span class="hljs-keyword">import</span> nn

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = <span class="hljs-string">f&quot;Hugging Face is based in DUMBO, New York City, and&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(sequence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># get logits of last hidden state</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = model(**inputs).logits[:, -<span class="hljs-number">1</span>, :]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># filter</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>filtered_next_token_logits = top_k_top_p_filtering(next_token_logits, top_k=<span class="hljs-number">50</span>, top_p=<span class="hljs-number">1.0</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># sample</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = nn.functional.softmax(filtered_next_token_logits, dim=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token = torch.multinomial(probs, num_samples=<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>generated = torch.cat([input_ids, next_token], dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>resulting_string = tokenizer.decode(generated.tolist()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(resulting_string)
Hugging Face <span class="hljs-keyword">is</span> based <span class="hljs-keyword">in</span> DUMBO, New York City, <span class="hljs-keyword">and</span> ...`}}),{c(){n=l("p"),u=o(`Here is an example of using the tokenizer and model and leveraging the
`),a=l("a"),f=o("top_k_top_p_filtering()"),_=o(` method to sample the next token following an input sequence
of tokens.`),E=m(),j(A.$$.fragment),this.h()},l(v){n=i(v,"P",{});var I=p(n);u=r(I,`Here is an example of using the tokenizer and model and leveraging the
`),a=i(I,"A",{href:!0});var F=p(a);f=r(F,"top_k_top_p_filtering()"),F.forEach(t),_=r(I,` method to sample the next token following an input sequence
of tokens.`),I.forEach(t),E=g(v),k(A.$$.fragment,v),this.h()},h(){d(a,"href","/docs/transformers/pr_16682/en/internal/generation_utils#transformers.top_k_top_p_filtering")},m(v,I){h(v,n,I),e(n,u),e(n,a),e(a,f),e(n,_),h(v,E,I),w(A,v,I),z=!0},p:C,i(v){z||(x(A.$$.fragment,v),z=!0)},o(v){b(A.$$.fragment,v),z=!1},d(v){v&&t(n),v&&t(E),y(A,v)}}}function hj($){let n,u;return n=new S({props:{$$slots:{default:[cj]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function uj($){let n,u,a,f,_,E,A,z;return A=new q({props:{code:`from transformers import TFAutoModelForCausalLM, AutoTokenizer, tf_top_k_top_p_filtering
import tensorflow as tf

tokenizer = AutoTokenizer.from_pretrained("gpt2")
model = TFAutoModelForCausalLM.from_pretrained("gpt2")

sequence = f"Hugging Face is based in DUMBO, New York City, and"

inputs = tokenizer(sequence, return_tensors="tf")
input_ids = inputs["input_ids"]

# get logits of last hidden state
next_token_logits = model(**inputs).logits[:, -1, :]

# filter
filtered_next_token_logits = tf_top_k_top_p_filtering(next_token_logits, top_k=50, top_p=1.0)

# sample
next_token = tf.random.categorical(filtered_next_token_logits, dtype=tf.int32, num_samples=1)

generated = tf.concat([input_ids, next_token], axis=1)

resulting_string = tokenizer.decode(generated.numpy().tolist()[0])
print(resulting_string)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForCausalLM, AutoTokenizer, tf_top_k_top_p_filtering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = <span class="hljs-string">f&quot;Hugging Face is based in DUMBO, New York City, and&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(sequence, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># get logits of last hidden state</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = model(**inputs).logits[:, -<span class="hljs-number">1</span>, :]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># filter</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>filtered_next_token_logits = tf_top_k_top_p_filtering(next_token_logits, top_k=<span class="hljs-number">50</span>, top_p=<span class="hljs-number">1.0</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># sample</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token = tf.random.categorical(filtered_next_token_logits, dtype=tf.int32, num_samples=<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>generated = tf.concat([input_ids, next_token], axis=<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>resulting_string = tokenizer.decode(generated.numpy().tolist()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(resulting_string)
Hugging Face <span class="hljs-keyword">is</span> based <span class="hljs-keyword">in</span> DUMBO, New York City, <span class="hljs-keyword">and</span> ...`}}),{c(){n=l("p"),u=o(`Here is an example of using the tokenizer and model and leveraging the
`),a=l("a"),f=o("tf_top_k_top_p_filtering()"),_=o(` method to sample the next token following an input sequence
of tokens.`),E=m(),j(A.$$.fragment),this.h()},l(v){n=i(v,"P",{});var I=p(n);u=r(I,`Here is an example of using the tokenizer and model and leveraging the
`),a=i(I,"A",{href:!0});var F=p(a);f=r(F,"tf_top_k_top_p_filtering()"),F.forEach(t),_=r(I,` method to sample the next token following an input sequence
of tokens.`),I.forEach(t),E=g(v),k(A.$$.fragment,v),this.h()},h(){d(a,"href","/docs/transformers/pr_16682/en/internal/generation_utils#transformers.tf_top_k_top_p_filtering")},m(v,I){h(v,n,I),e(n,u),e(n,a),e(a,f),e(n,_),h(v,E,I),w(A,v,I),z=!0},p:C,i(v){z||(x(A.$$.fragment,v),z=!0)},o(v){b(A.$$.fragment,v),z=!1},d(v){v&&t(n),v&&t(E),y(A,v)}}}function mj($){let n,u;return n=new S({props:{$$slots:{default:[uj]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function gj($){let n,u,a,f,_,E,A,z,v,I,F,Vs,gs,As,Js,K,Is,fs,Ye,Ks,G,ds,zs,Zs,Z,U,We,Ms,se,us,ss;return n=new q({props:{code:`from transformers import pipeline

text_generator = pipeline("text-generation")
print(text_generator("As far as I am concerned, I will", max_length=50, do_sample=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>text_generator = pipeline(<span class="hljs-string">&quot;text-generation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(text_generator(<span class="hljs-string">&quot;As far as I am concerned, I will&quot;</span>, max_length=<span class="hljs-number">50</span>, do_sample=<span class="hljs-literal">False</span>))
[{<span class="hljs-string">&#x27;generated_text&#x27;</span>: <span class="hljs-string">&#x27;As far as I am concerned, I will be the first to admit that I am not a fan of the idea of a
&quot;free market.&quot; I think that the idea of a free market is a bit of a stretch. I think that the idea&#x27;</span>}]`}}),us=new q({props:{code:`from transformers import AutoModelForCausalLM, AutoTokenizer

model = AutoModelForCausalLM.from_pretrained("xlnet-base-cased")
tokenizer = AutoTokenizer.from_pretrained("xlnet-base-cased")

# Padding text helps XLNet with short prompts - proposed by Aman Rusia in https://github.com/rusiaaman/XLNet-gen#methodology
PADDING_TEXT = """In 1991, the remains of Russian Tsar Nicholas II and his family
(except for Alexei and Maria) are discovered.
The voice of Nicholas's young son, Tsarevich Alexei Nikolaevich, narrates the
remainder of the story. 1883 Western Siberia,
a young Grigori Rasputin is asked by his father and a group of men to perform magic.
Rasputin has a vision and denounces one of the men as a horse thief. Although his
father initially slaps him for making such an accusation, Rasputin watches as the
man is chased outside and beaten. Twenty years later, Rasputin sees a vision of
the Virgin Mary, prompting him to become a priest. Rasputin quickly becomes famous,
with people, even a bishop, begging for his blessing. <eod> </s> <eos>"""

prompt = "Today the weather is really nice and I am planning on "
inputs = tokenizer(PADDING_TEXT + prompt, add_special_tokens=False, return_tensors="pt")["input_ids"]

prompt_length = len(tokenizer.decode(inputs[0]))
outputs = model.generate(inputs, max_length=250, do_sample=True, top_p=0.95, top_k=60)
generated = prompt + tokenizer.decode(outputs[0])[prompt_length + 1 :]

print(generated)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForCausalLM, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Padding text helps XLNet with short prompts - proposed by Aman Rusia in https://github.com/rusiaaman/XLNet-gen#methodology</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>PADDING_TEXT = <span class="hljs-string">&quot;&quot;&quot;In 1991, the remains of Russian Tsar Nicholas II and his family
<span class="hljs-meta">... </span>(except for Alexei and Maria) are discovered.
<span class="hljs-meta">... </span>The voice of Nicholas&#x27;s young son, Tsarevich Alexei Nikolaevich, narrates the
<span class="hljs-meta">... </span>remainder of the story. 1883 Western Siberia,
<span class="hljs-meta">... </span>a young Grigori Rasputin is asked by his father and a group of men to perform magic.
<span class="hljs-meta">... </span>Rasputin has a vision and denounces one of the men as a horse thief. Although his
<span class="hljs-meta">... </span>father initially slaps him for making such an accusation, Rasputin watches as the
<span class="hljs-meta">... </span>man is chased outside and beaten. Twenty years later, Rasputin sees a vision of
<span class="hljs-meta">... </span>the Virgin Mary, prompting him to become a priest. Rasputin quickly becomes famous,
<span class="hljs-meta">... </span>with people, even a bishop, begging for his blessing. &lt;eod&gt; &lt;/s&gt; &lt;eos&gt;&quot;&quot;&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;Today the weather is really nice and I am planning on &quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(PADDING_TEXT + prompt, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt_length = <span class="hljs-built_in">len</span>(tokenizer.decode(inputs[<span class="hljs-number">0</span>]))
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(inputs, max_length=<span class="hljs-number">250</span>, do_sample=<span class="hljs-literal">True</span>, top_p=<span class="hljs-number">0.95</span>, top_k=<span class="hljs-number">60</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = prompt + tokenizer.decode(outputs[<span class="hljs-number">0</span>])[prompt_length + <span class="hljs-number">1</span> :]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(generated)
Today the weather <span class="hljs-keyword">is</span> really nice <span class="hljs-keyword">and</span> I am planning ...`}}),{c(){j(n.$$.fragment),u=m(),a=l("p"),f=o("Here, the model generates a random text with a total maximal length of "),_=l("em"),E=o("50"),A=o(" tokens from context "),z=l("em"),v=o(`\u201CAs far as I am
concerned, I will\u201D`),I=o(`. Behind the scenes, the pipeline object calls the method
`),F=l("a"),Vs=o("PreTrainedModel.generate()"),gs=o(` to generate text. The default arguments for this method can be
overridden in the pipeline, as is shown above for the arguments `),As=l("code"),Js=o("max_length"),K=o(" and "),Is=l("code"),fs=o("do_sample"),Ye=o("."),Ks=m(),G=l("p"),ds=o("Below is an example of text generation using "),zs=l("code"),Zs=o("XLNet"),Z=o(" and its tokenizer, which includes calling "),U=l("code"),We=o("generate()"),Ms=o(" directly:"),se=m(),j(us.$$.fragment),this.h()},l(T){k(n.$$.fragment,T),u=g(T),a=i(T,"P",{});var M=p(a);f=r(M,"Here, the model generates a random text with a total maximal length of "),_=i(M,"EM",{});var na=p(_);E=r(na,"50"),na.forEach(t),A=r(M," tokens from context "),z=i(M,"EM",{});var _s=p(z);v=r(_s,`\u201CAs far as I am
concerned, I will\u201D`),_s.forEach(t),I=r(M,`. Behind the scenes, the pipeline object calls the method
`),F=i(M,"A",{href:!0});var oa=p(F);Vs=r(oa,"PreTrainedModel.generate()"),oa.forEach(t),gs=r(M,` to generate text. The default arguments for this method can be
overridden in the pipeline, as is shown above for the arguments `),As=i(M,"CODE",{});var js=p(As);Js=r(js,"max_length"),js.forEach(t),K=r(M," and "),Is=i(M,"CODE",{});var ra=p(Is);fs=r(ra,"do_sample"),ra.forEach(t),Ye=r(M,"."),M.forEach(t),Ks=g(T),G=i(T,"P",{});var ks=p(G);ds=r(ks,"Below is an example of text generation using "),zs=i(ks,"CODE",{});var Qe=p(zs);Zs=r(Qe,"XLNet"),Qe.forEach(t),Z=r(ks," and its tokenizer, which includes calling "),U=i(ks,"CODE",{});var Ls=p(U);We=r(Ls,"generate()"),Ls.forEach(t),Ms=r(ks," directly:"),ks.forEach(t),se=g(T),k(us.$$.fragment,T),this.h()},h(){d(F,"href","/docs/transformers/pr_16682/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate")},m(T,M){w(n,T,M),h(T,u,M),h(T,a,M),e(a,f),e(a,_),e(_,E),e(a,A),e(a,z),e(z,v),e(a,I),e(a,F),e(F,Vs),e(a,gs),e(a,As),e(As,Js),e(a,K),e(a,Is),e(Is,fs),e(a,Ye),h(T,Ks,M),h(T,G,M),e(G,ds),e(G,zs),e(zs,Zs),e(G,Z),e(G,U),e(U,We),e(G,Ms),h(T,se,M),w(us,T,M),ss=!0},p:C,i(T){ss||(x(n.$$.fragment,T),x(us.$$.fragment,T),ss=!0)},o(T){b(n.$$.fragment,T),b(us.$$.fragment,T),ss=!1},d(T){y(n,T),T&&t(u),T&&t(a),T&&t(Ks),T&&t(G),T&&t(se),y(us,T)}}}function fj($){let n,u;return n=new S({props:{$$slots:{default:[gj]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function dj($){let n,u;return n=new q({props:{code:`from transformers import TFAutoModelForCausalLM, AutoTokenizer

model = TFAutoModelForCausalLM.from_pretrained("xlnet-base-cased")
tokenizer = AutoTokenizer.from_pretrained("xlnet-base-cased")

# Padding text helps XLNet with short prompts - proposed by Aman Rusia in https://github.com/rusiaaman/XLNet-gen#methodology
PADDING_TEXT = """In 1991, the remains of Russian Tsar Nicholas II and his family
(except for Alexei and Maria) are discovered.
The voice of Nicholas's young son, Tsarevich Alexei Nikolaevich, narrates the
remainder of the story. 1883 Western Siberia,
a young Grigori Rasputin is asked by his father and a group of men to perform magic.
Rasputin has a vision and denounces one of the men as a horse thief. Although his
father initially slaps him for making such an accusation, Rasputin watches as the
man is chased outside and beaten. Twenty years later, Rasputin sees a vision of
the Virgin Mary, prompting him to become a priest. Rasputin quickly becomes famous,
with people, even a bishop, begging for his blessing. <eod> </s> <eos>"""

prompt = "Today the weather is really nice and I am planning on "
inputs = tokenizer(PADDING_TEXT + prompt, add_special_tokens=False, return_tensors="tf")["input_ids"]

prompt_length = len(tokenizer.decode(inputs[0]))
outputs = model.generate(inputs, max_length=250, do_sample=True, top_p=0.95, top_k=60)
generated = prompt + tokenizer.decode(outputs[0])[prompt_length + 1 :]

print(generated)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForCausalLM, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Padding text helps XLNet with short prompts - proposed by Aman Rusia in https://github.com/rusiaaman/XLNet-gen#methodology</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>PADDING_TEXT = <span class="hljs-string">&quot;&quot;&quot;In 1991, the remains of Russian Tsar Nicholas II and his family
<span class="hljs-meta">... </span>(except for Alexei and Maria) are discovered.
<span class="hljs-meta">... </span>The voice of Nicholas&#x27;s young son, Tsarevich Alexei Nikolaevich, narrates the
<span class="hljs-meta">... </span>remainder of the story. 1883 Western Siberia,
<span class="hljs-meta">... </span>a young Grigori Rasputin is asked by his father and a group of men to perform magic.
<span class="hljs-meta">... </span>Rasputin has a vision and denounces one of the men as a horse thief. Although his
<span class="hljs-meta">... </span>father initially slaps him for making such an accusation, Rasputin watches as the
<span class="hljs-meta">... </span>man is chased outside and beaten. Twenty years later, Rasputin sees a vision of
<span class="hljs-meta">... </span>the Virgin Mary, prompting him to become a priest. Rasputin quickly becomes famous,
<span class="hljs-meta">... </span>with people, even a bishop, begging for his blessing. &lt;eod&gt; &lt;/s&gt; &lt;eos&gt;&quot;&quot;&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;Today the weather is really nice and I am planning on &quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(PADDING_TEXT + prompt, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt_length = <span class="hljs-built_in">len</span>(tokenizer.decode(inputs[<span class="hljs-number">0</span>]))
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(inputs, max_length=<span class="hljs-number">250</span>, do_sample=<span class="hljs-literal">True</span>, top_p=<span class="hljs-number">0.95</span>, top_k=<span class="hljs-number">60</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = prompt + tokenizer.decode(outputs[<span class="hljs-number">0</span>])[prompt_length + <span class="hljs-number">1</span> :]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(generated)
Today the weather <span class="hljs-keyword">is</span> really nice <span class="hljs-keyword">and</span> I am planning ...`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p:C,i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function _j($){let n,u;return n=new S({props:{$$slots:{default:[dj]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function jj($){let n,u;return n=new q({props:{code:`from transformers import AutoModelForTokenClassification, AutoTokenizer
import torch

model = AutoModelForTokenClassification.from_pretrained("dbmdz/bert-large-cased-finetuned-conll03-english")
tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")

sequence = (
    "Hugging Face Inc. is a company based in New York City. Its headquarters are in DUMBO, "
    "therefore very close to the Manhattan Bridge."
)

inputs = tokenizer(sequence, return_tensors="pt")
tokens = inputs.tokens()

outputs = model(**inputs).logits
predictions = torch.argmax(outputs, dim=2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForTokenClassification, AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;dbmdz/bert-large-cased-finetuned-conll03-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Hugging Face Inc. is a company based in New York City. Its headquarters are in DUMBO, &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;therefore very close to the Manhattan Bridge.&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(sequence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokens = inputs.tokens()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predictions = torch.argmax(outputs, dim=<span class="hljs-number">2</span>)`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p:C,i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function kj($){let n,u;return n=new S({props:{$$slots:{default:[jj]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function wj($){let n,u;return n=new q({props:{code:`from transformers import TFAutoModelForTokenClassification, AutoTokenizer
import tensorflow as tf

model = TFAutoModelForTokenClassification.from_pretrained("dbmdz/bert-large-cased-finetuned-conll03-english")
tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")

sequence = (
    "Hugging Face Inc. is a company based in New York City. Its headquarters are in DUMBO, "
    "therefore very close to the Manhattan Bridge."
)

inputs = tokenizer(sequence, return_tensors="tf")
tokens = inputs.tokens()

outputs = model(**inputs)[0]
predictions = tf.argmax(outputs, axis=2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForTokenClassification, AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;dbmdz/bert-large-cased-finetuned-conll03-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Hugging Face Inc. is a company based in New York City. Its headquarters are in DUMBO, &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;therefore very close to the Manhattan Bridge.&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(sequence, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokens = inputs.tokens()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>predictions = tf.argmax(outputs, axis=<span class="hljs-number">2</span>)`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p:C,i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function xj($){let n,u;return n=new S({props:{$$slots:{default:[wj]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function bj($){let n,u;return n=new q({props:{code:`from transformers import AutoModelForSeq2SeqLM, AutoTokenizer

model = AutoModelForSeq2SeqLM.from_pretrained("t5-base")
tokenizer = AutoTokenizer.from_pretrained("t5-base")

# T5 uses a max_length of 512 so we cut the article to 512 tokens.
inputs = tokenizer("summarize: " + ARTICLE, return_tensors="pt", max_length=512, truncation=True)
outputs = model.generate(
    inputs["input_ids"], max_length=150, min_length=40, length_penalty=2.0, num_beams=4, early_stopping=True
)

print(tokenizer.decode(outputs[0]))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSeq2SeqLM, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># T5 uses a max_length of 512 so we cut the article to 512 tokens.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;summarize: &quot;</span> + ARTICLE, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, max_length=<span class="hljs-number">512</span>, truncation=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], max_length=<span class="hljs-number">150</span>, min_length=<span class="hljs-number">40</span>, length_penalty=<span class="hljs-number">2.0</span>, num_beams=<span class="hljs-number">4</span>, early_stopping=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>]))
&lt;pad&gt; prosecutors say the marriages were part of an immigration scam. <span class="hljs-keyword">if</span> convicted, barrientos faces two criminal
counts of <span class="hljs-string">&quot;offering a false instrument for filing in the first degree&quot;</span> she has been married <span class="hljs-number">10</span> times, nine of them
between <span class="hljs-number">1999</span> <span class="hljs-keyword">and</span> <span class="hljs-number">2002.</span>&lt;/s&gt;`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p:C,i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function yj($){let n,u;return n=new S({props:{$$slots:{default:[bj]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function $j($){let n,u;return n=new q({props:{code:`from transformers import TFAutoModelForSeq2SeqLM, AutoTokenizer

model = TFAutoModelForSeq2SeqLM.from_pretrained("t5-base")
tokenizer = AutoTokenizer.from_pretrained("t5-base")

# T5 uses a max_length of 512 so we cut the article to 512 tokens.
inputs = tokenizer("summarize: " + ARTICLE, return_tensors="tf", max_length=512)
outputs = model.generate(
    inputs["input_ids"], max_length=150, min_length=40, length_penalty=2.0, num_beams=4, early_stopping=True
)

print(tokenizer.decode(outputs[0]))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSeq2SeqLM, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># T5 uses a max_length of 512 so we cut the article to 512 tokens.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;summarize: &quot;</span> + ARTICLE, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, max_length=<span class="hljs-number">512</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], max_length=<span class="hljs-number">150</span>, min_length=<span class="hljs-number">40</span>, length_penalty=<span class="hljs-number">2.0</span>, num_beams=<span class="hljs-number">4</span>, early_stopping=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>]))
&lt;pad&gt; prosecutors say the marriages were part of an immigration scam. <span class="hljs-keyword">if</span> convicted, barrientos faces two criminal
counts of <span class="hljs-string">&quot;offering a false instrument for filing in the first degree&quot;</span> she has been married <span class="hljs-number">10</span> times, nine of them
between <span class="hljs-number">1999</span> <span class="hljs-keyword">and</span> <span class="hljs-number">2002.</span>`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p:C,i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function vj($){let n,u;return n=new S({props:{$$slots:{default:[$j]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function qj($){let n,u;return n=new q({props:{code:`from transformers import AutoModelForSeq2SeqLM, AutoTokenizer

model = AutoModelForSeq2SeqLM.from_pretrained("t5-base")
tokenizer = AutoTokenizer.from_pretrained("t5-base")

inputs = tokenizer(
    "translate English to German: Hugging Face is a technology company based in New York and Paris",
    return_tensors="pt",
)
outputs = model.generate(inputs["input_ids"], max_length=40, num_beams=4, early_stopping=True)

print(tokenizer.decode(outputs[0]))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSeq2SeqLM, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;translate English to German: Hugging Face is a technology company based in New York and Paris&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], max_length=<span class="hljs-number">40</span>, num_beams=<span class="hljs-number">4</span>, early_stopping=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>]))
&lt;pad&gt; Hugging Face ist ein Technologieunternehmen mit Sitz <span class="hljs-keyword">in</span> New York und Paris.&lt;/s&gt;`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p:C,i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function Ej($){let n,u;return n=new S({props:{$$slots:{default:[qj]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function Tj($){let n,u;return n=new q({props:{code:`from transformers import TFAutoModelForSeq2SeqLM, AutoTokenizer

model = TFAutoModelForSeq2SeqLM.from_pretrained("t5-base")
tokenizer = AutoTokenizer.from_pretrained("t5-base")

inputs = tokenizer(
    "translate English to German: Hugging Face is a technology company based in New York and Paris",
    return_tensors="tf",
)
outputs = model.generate(inputs["input_ids"], max_length=40, num_beams=4, early_stopping=True)

print(tokenizer.decode(outputs[0]))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSeq2SeqLM, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;translate English to German: Hugging Face is a technology company based in New York and Paris&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;tf&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], max_length=<span class="hljs-number">40</span>, num_beams=<span class="hljs-number">4</span>, early_stopping=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>]))
&lt;pad&gt; Hugging Face ist ein Technologieunternehmen mit Sitz <span class="hljs-keyword">in</span> New York und Paris.`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p:C,i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function Aj($){let n,u;return n=new S({props:{$$slots:{default:[Tj]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function Ij($){let n,u;return n=new q({props:{code:`from transformers import AutoFeatureExtractor, AutoModelForAudioClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = AutoFeatureExtractor.from_pretrained("superb/wav2vec2-base-superb-ks")
model = AutoModelForAudioClassification.from_pretrained("superb/wav2vec2-base-superb-ks")

inputs = feature_extractor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_ids = torch.argmax(logits, dim=-1).item()
predicted_label = model.config.id2label[predicted_class_ids]
predicted_label`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, AutoModelForAudioClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;superb/wav2vec2-base-superb-ks&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForAudioClassification.from_pretrained(<span class="hljs-string">&quot;superb/wav2vec2-base-superb-ks&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p:C,i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function zj($){let n,u;return n=new S({props:{$$slots:{default:[Ij]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function Mj($){let n,u;return n=new q({props:{code:`from transformers import AutoProcessor, AutoModelForCTC
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = AutoProcessor.from_pretrained("facebook/wav2vec2-base-960h")
model = AutoModelForCTC.from_pretrained("facebook/wav2vec2-base-960h")

inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    logits = model(**inputs).logits
predicted_ids = torch.argmax(logits, dim=-1)

transcription = processor.batch_decode(predicted_ids)
transcription[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, AutoModelForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCTC.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p:C,i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function Lj($){let n,u;return n=new S({props:{$$slots:{default:[Mj]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function Pj($){let n,u;return n=new q({props:{code:`from transformers import AutoFeatureExtractor, AutoModelForImageClassification
import torch
from datasets import load_dataset

dataset = load_dataset("huggingface/cats-image")
image = dataset["test"]["image"][0]

feature_extractor = AutoFeatureExtractor.from_pretrained("google/vit-base-patch16-224")
model = AutoModelForImageClassification.from_pretrained("google/vit-base-patch16-224")

inputs = feature_extractor(image, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_label = logits.argmax(-1).item()
print(model.config.id2label[predicted_label])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, AutoModelForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForImageClassification.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
Egyptian cat`}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p:C,i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function Fj($){let n,u;return n=new S({props:{$$slots:{default:[Pj]},$$scope:{ctx:$}}}),{c(){j(n.$$.fragment)},l(a){k(n.$$.fragment,a)},m(a,f){w(n,a,f),u=!0},p(a,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:a}),n.$set(_)},i(a){u||(x(n.$$.fragment,a),u=!0)},o(a){b(n.$$.fragment,a),u=!1},d(a){y(n,a)}}}function Nj($){let n,u,a,f,_,E,A,z,v,I,F,Vs,gs,As,Js,K,Is,fs,Ye,Ks,G,ds,zs,Zs,Z,U,We,Ms,se,us,ss,T,M,na,_s,oa,js,ra,ks,Qe,Ls,zi,ar,ee,Xa,Mi,Li,Va,Pi,nr,la,Fi,or,te,rr,Ps,ae,Ja,Xe,Ni,Ka,Ci,lr,Y,Si,Ve,Di,Oi,Je,Ri,Bi,Ke,Hi,Gi,Ze,Ui,Yi,ir,ia,Wi,pr,pa,Qi,cr,st,hr,ca,Xi,ur,W,Za,Vi,Ji,sn,Ki,Zi,en,sp,ep,tn,tp,ap,an,np,mr,ne,gr,Fs,oe,nn,et,op,on,rp,fr,ws,lp,tt,ip,pp,at,cp,hp,dr,ha,up,_r,nt,jr,ua,mp,kr,ot,wr,ma,gp,xr,D,rn,fp,dp,ln,_p,jp,pn,kp,wp,cn,xp,bp,hn,yp,$p,un,vp,qp,mn,Ep,br,re,yr,Ns,le,gn,rt,Tp,fn,Ap,$r,ga,Ip,vr,ie,zp,lt,Mp,Lp,qr,Cs,pe,dn,it,Pp,_n,Fp,Er,xs,Np,pt,Cp,Sp,ct,Dp,Op,Tr,fa,Rp,Ar,ht,Ir,da,Bp,zr,ut,Mr,_a,Hp,Lr,R,jn,Gp,Up,mt,Yp,kn,Wp,Qp,Xp,wn,Vp,Jp,xn,Kp,Zp,Ss,sc,bn,ec,tc,yn,ac,nc,oc,$n,rc,Pr,ce,Fr,ja,lc,Nr,Ds,he,vn,gt,ic,qn,pc,Cr,ue,cc,ft,hc,uc,Sr,ka,mc,Dr,me,Or,bs,gc,En,fc,dc,Tn,_c,jc,Rr,ge,kc,wa,wc,xc,Br,Os,fe,An,dt,bc,In,yc,Hr,B,$c,zn,vc,qc,Mn,Ec,Tc,Ln,Ac,Ic,Pn,zc,Mc,_t,Lc,Pc,Gr,de,Ur,L,Fc,Fn,Nc,Cc,Nn,Sc,Dc,Cn,Oc,Rc,Sn,Bc,Hc,Dn,Gc,Uc,On,Yc,Wc,Rn,Qc,Xc,Bn,Vc,Jc,Hn,Kc,Zc,Yr,_e,sh,jt,eh,th,Wr,Rs,je,Gn,kt,ah,Un,nh,Qr,ke,oh,wt,rh,lh,Xr,xa,ih,Vr,P,Yn,ph,ch,Wn,hh,uh,Qn,mh,gh,Xn,fh,dh,Vn,_h,jh,Jn,kh,wh,Kn,xh,bh,Zn,yh,$h,so,vh,Jr,ys,qh,xt,Eh,Th,bt,Ah,Ih,Kr,yt,Zr,ba,zh,sl,$t,el,ya,Mh,tl,$a,Lh,al,H,eo,Ph,Fh,to,Nh,Ch,ao,Sh,Dh,no,Oh,Rh,oo,Bh,Hh,ro,Gh,nl,we,ol,va,Uh,rl,$s,Yh,lo,Wh,Qh,io,Xh,Vh,ll,vt,il,Bs,xe,po,qt,Jh,co,Kh,pl,be,Zh,Et,su,eu,cl,ye,tu,Tt,au,nu,hl,qa,ou,ul,At,ml,Q,ru,ho,lu,iu,uo,pu,cu,mo,hu,uu,go,mu,gu,gl,It,fl,Ea,fu,dl,es,Hs,du,fo,_u,ju,_o,ku,wu,xu,jo,bu,yu,ko,$u,vu,zt,qu,wo,Eu,Tu,_l,Ta,Au,jl,$e,kl,Gs,ve,xo,Mt,Iu,bo,zu,wl,qe,Mu,Lt,Lu,Pu,xl,Ee,Fu,Pt,Nu,Cu,bl,Aa,Su,yl,Ft,$l,ts,Du,yo,Ou,Ru,$o,Bu,Hu,vo,Gu,Uu,vl,Ia,Yu,ql,as,Us,Wu,qo,Qu,Xu,Eo,Vu,Ju,Ku,To,Zu,sm,Ao,em,tm,Nt,am,Io,nm,om,El,Te,Tl,za,rm,Al,Ys,Ae,zo,Ct,lm,Mo,im,Il,ns,pm,St,cm,hm,Dt,um,mm,Ma,gm,fm,zl,Ie,dm,La,_m,jm,Ml,Ot,Ll,Pa,km,Pl,os,Lo,wm,xm,Po,bm,ym,Rt,$m,Fo,vm,qm,Em,Bt,Tm,No,Am,Im,Fl,ze,Nl,Ws,Me,Co,Ht,zm,So,Mm,Cl,X,Lm,Gt,Pm,Fm,Ut,Nm,Cm,Yt,Sm,Dm,Fa,Om,Rm,Sl,Le,Bm,Na,Hm,Gm,Dl,Wt,Ol,Ca,Um,Rl,rs,Do,Ym,Wm,Oo,Qm,Xm,Qt,Vm,Ro,Jm,Km,Zm,Bo,sg,Bl,Pe,Hl,Qs,Fe,Ho,Xt,eg,Go,tg,Gl,ls,ag,Vt,ng,og,Jt,rg,lg,Sa,ig,pg,Ul,Ne,cg,Da,hg,ug,Yl,Kt,Wl,Oa,mg,Ql,is,Uo,gg,fg,Yo,dg,_g,Zt,jg,Wo,kg,wg,xg,sa,bg,Qo,yg,$g,Xl,Ce,Vl;return E=new J({}),F=new V_({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Mixed",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/main/transformers_doc/en/task_summary.ipynb"},{label:"PyTorch",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/main/transformers_doc/en/pytorch/task_summary.ipynb"},{label:"TensorFlow",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/main/transformers_doc/en/tensorflow/task_summary.ipynb"},{label:"Mixed",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/main/transformers_doc/en/task_summary.ipynb"},{label:"PyTorch",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/main/transformers_doc/en/pytorch/task_summary.ipynb"},{label:"TensorFlow",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/main/transformers_doc/en/tensorflow/task_summary.ipynb"}]}}),te=new X_({props:{$$slots:{default:[J_]},$$scope:{ctx:$}}}),Xe=new J({}),st=new q({props:{code:`from transformers import pipeline

classifier = pipeline("sentiment-analysis")

result = classifier("I hate you")[0]
print(f"label: {result['label']}, with score: {round(result['score'], 4)}")

result = classifier("I love you")[0]
print(f"label: {result['label']}, with score: {round(result['score'], 4)}")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>classifier = pipeline(<span class="hljs-string">&quot;sentiment-analysis&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>result = classifier(<span class="hljs-string">&quot;I hate you&quot;</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;label: <span class="hljs-subst">{result[<span class="hljs-string">&#x27;label&#x27;</span>]}</span>, with score: <span class="hljs-subst">{<span class="hljs-built_in">round</span>(result[<span class="hljs-string">&#x27;score&#x27;</span>], <span class="hljs-number">4</span>)}</span>&quot;</span>)
label: NEGATIVE, <span class="hljs-keyword">with</span> score: <span class="hljs-number">0.9991</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>result = classifier(<span class="hljs-string">&quot;I love you&quot;</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;label: <span class="hljs-subst">{result[<span class="hljs-string">&#x27;label&#x27;</span>]}</span>, with score: <span class="hljs-subst">{<span class="hljs-built_in">round</span>(result[<span class="hljs-string">&#x27;score&#x27;</span>], <span class="hljs-number">4</span>)}</span>&quot;</span>)
label: POSITIVE, <span class="hljs-keyword">with</span> score: <span class="hljs-number">0.9999</span>`}}),ne=new ms({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ej],pytorch:[Z_]},$$scope:{ctx:$}}}),et=new J({}),nt=new q({props:{code:`from transformers import pipeline

question_answerer = pipeline("question-answering")

context = r"""
Extractive Question Answering is the task of extracting an answer from a text given a question. An example of a
question answering dataset is the SQuAD dataset, which is entirely based on that task. If you would like to fine-tune
a model on a SQuAD task, you may leverage the examples/pytorch/question-answering/run_squad.py script.
"""`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>question_answerer = pipeline(<span class="hljs-string">&quot;question-answering&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>context = <span class="hljs-string">r&quot;&quot;&quot;
<span class="hljs-meta">... </span>Extractive Question Answering is the task of extracting an answer from a text given a question. An example of a
<span class="hljs-meta">... </span>question answering dataset is the SQuAD dataset, which is entirely based on that task. If you would like to fine-tune
<span class="hljs-meta">... </span>a model on a SQuAD task, you may leverage the examples/pytorch/question-answering/run_squad.py script.
<span class="hljs-meta">... </span>&quot;&quot;&quot;</span>`}}),ot=new q({props:{code:`result = question_answerer(question="What is extractive question answering?", context=context)
print(
    f"Answer: '{result['answer']}', score: {round(result['score'], 4)}, start: {result['start']}, end: {result['end']}"
)

result = question_answerer(question="What is a good example of a question answering dataset?", context=context)
print(
    f"Answer: '{result['answer']}', score: {round(result['score'], 4)}, start: {result['start']}, end: {result['end']}"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>result = question_answerer(question=<span class="hljs-string">&quot;What is extractive question answering?&quot;</span>, context=context)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(
<span class="hljs-meta">... </span>    <span class="hljs-string">f&quot;Answer: &#x27;<span class="hljs-subst">{result[<span class="hljs-string">&#x27;answer&#x27;</span>]}</span>&#x27;, score: <span class="hljs-subst">{<span class="hljs-built_in">round</span>(result[<span class="hljs-string">&#x27;score&#x27;</span>], <span class="hljs-number">4</span>)}</span>, start: <span class="hljs-subst">{result[<span class="hljs-string">&#x27;start&#x27;</span>]}</span>, end: <span class="hljs-subst">{result[<span class="hljs-string">&#x27;end&#x27;</span>]}</span>&quot;</span>
<span class="hljs-meta">... </span>)
Answer: <span class="hljs-string">&#x27;the task of extracting an answer from a text given a question&#x27;</span>, score: <span class="hljs-number">0.6177</span>, start: <span class="hljs-number">34</span>, end: <span class="hljs-number">95</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>result = question_answerer(question=<span class="hljs-string">&quot;What is a good example of a question answering dataset?&quot;</span>, context=context)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(
<span class="hljs-meta">... </span>    <span class="hljs-string">f&quot;Answer: &#x27;<span class="hljs-subst">{result[<span class="hljs-string">&#x27;answer&#x27;</span>]}</span>&#x27;, score: <span class="hljs-subst">{<span class="hljs-built_in">round</span>(result[<span class="hljs-string">&#x27;score&#x27;</span>], <span class="hljs-number">4</span>)}</span>, start: <span class="hljs-subst">{result[<span class="hljs-string">&#x27;start&#x27;</span>]}</span>, end: <span class="hljs-subst">{result[<span class="hljs-string">&#x27;end&#x27;</span>]}</span>&quot;</span>
<span class="hljs-meta">... </span>)
Answer: <span class="hljs-string">&#x27;SQuAD dataset&#x27;</span>, score: <span class="hljs-number">0.5152</span>, start: <span class="hljs-number">147</span>, end: <span class="hljs-number">160</span>`}}),re=new ms({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[oj],pytorch:[aj]},$$scope:{ctx:$}}}),rt=new J({}),it=new J({}),ht=new q({props:{code:`from transformers import pipeline

unmasker = pipeline("fill-mask")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>unmasker = pipeline(<span class="hljs-string">&quot;fill-mask&quot;</span>)`}}),ut=new q({props:{code:`from pprint import pprint

pprint(
    unmasker(
        f"HuggingFace is creating a {unmasker.tokenizer.mask_token} that the community uses to solve NLP tasks."
    )
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> pprint <span class="hljs-keyword">import</span> pprint

<span class="hljs-meta">&gt;&gt;&gt; </span>pprint(
<span class="hljs-meta">... </span>    unmasker(
<span class="hljs-meta">... </span>        <span class="hljs-string">f&quot;HuggingFace is creating a <span class="hljs-subst">{unmasker.tokenizer.mask_token}</span> that the community uses to solve NLP tasks.&quot;</span>
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>)
[{<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.1793</span>,
  <span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;HuggingFace is creating a tool that the community uses to solve &#x27;</span>
              <span class="hljs-string">&#x27;NLP tasks.&#x27;</span>,
  <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">3944</span>,
  <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27; tool&#x27;</span>},
 {<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.1135</span>,
  <span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;HuggingFace is creating a framework that the community uses to &#x27;</span>
              <span class="hljs-string">&#x27;solve NLP tasks.&#x27;</span>,
  <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">7208</span>,
  <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27; framework&#x27;</span>},
 {<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.0524</span>,
  <span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;HuggingFace is creating a library that the community uses to &#x27;</span>
              <span class="hljs-string">&#x27;solve NLP tasks.&#x27;</span>,
  <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">5560</span>,
  <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27; library&#x27;</span>},
 {<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.0349</span>,
  <span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;HuggingFace is creating a database that the community uses to &#x27;</span>
              <span class="hljs-string">&#x27;solve NLP tasks.&#x27;</span>,
  <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">8503</span>,
  <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27; database&#x27;</span>},
 {<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.0286</span>,
  <span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;HuggingFace is creating a prototype that the community uses to &#x27;</span>
              <span class="hljs-string">&#x27;solve NLP tasks.&#x27;</span>,
  <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">17715</span>,
  <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27; prototype&#x27;</span>}]`}}),ce=new ms({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[pj],pytorch:[lj]},$$scope:{ctx:$}}}),gt=new J({}),me=new ms({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[mj],pytorch:[hj]},$$scope:{ctx:$}}}),dt=new J({}),de=new ms({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[_j],pytorch:[fj]},$$scope:{ctx:$}}}),kt=new J({}),yt=new q({props:{code:`from transformers import pipeline

ner_pipe = pipeline("ner")

sequence = """Hugging Face Inc. is a company based in New York City. Its headquarters are in DUMBO,
therefore very close to the Manhattan Bridge which is visible from the window."""`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>ner_pipe = pipeline(<span class="hljs-string">&quot;ner&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = <span class="hljs-string">&quot;&quot;&quot;Hugging Face Inc. is a company based in New York City. Its headquarters are in DUMBO,
<span class="hljs-meta">... </span>therefore very close to the Manhattan Bridge which is visible from the window.&quot;&quot;&quot;</span>`}}),$t=new q({props:{code:`for entity in ner_pipe(sequence):
    print(entity)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> entity <span class="hljs-keyword">in</span> ner_pipe(sequence):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(entity)
{<span class="hljs-string">&#x27;entity&#x27;</span>: <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9996</span>, <span class="hljs-string">&#x27;index&#x27;</span>: <span class="hljs-number">1</span>, <span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;Hu&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">0</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">2</span>}
{<span class="hljs-string">&#x27;entity&#x27;</span>: <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9910</span>, <span class="hljs-string">&#x27;index&#x27;</span>: <span class="hljs-number">2</span>, <span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;##gging&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">2</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">7</span>}
{<span class="hljs-string">&#x27;entity&#x27;</span>: <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9982</span>, <span class="hljs-string">&#x27;index&#x27;</span>: <span class="hljs-number">3</span>, <span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;Face&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">8</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">12</span>}
{<span class="hljs-string">&#x27;entity&#x27;</span>: <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9995</span>, <span class="hljs-string">&#x27;index&#x27;</span>: <span class="hljs-number">4</span>, <span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;Inc&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">13</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">16</span>}
{<span class="hljs-string">&#x27;entity&#x27;</span>: <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9994</span>, <span class="hljs-string">&#x27;index&#x27;</span>: <span class="hljs-number">11</span>, <span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;New&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">40</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">43</span>}
{<span class="hljs-string">&#x27;entity&#x27;</span>: <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9993</span>, <span class="hljs-string">&#x27;index&#x27;</span>: <span class="hljs-number">12</span>, <span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;York&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">44</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">48</span>}
{<span class="hljs-string">&#x27;entity&#x27;</span>: <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9994</span>, <span class="hljs-string">&#x27;index&#x27;</span>: <span class="hljs-number">13</span>, <span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;City&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">49</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">53</span>}
{<span class="hljs-string">&#x27;entity&#x27;</span>: <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9863</span>, <span class="hljs-string">&#x27;index&#x27;</span>: <span class="hljs-number">19</span>, <span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;D&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">79</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">80</span>}
{<span class="hljs-string">&#x27;entity&#x27;</span>: <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9514</span>, <span class="hljs-string">&#x27;index&#x27;</span>: <span class="hljs-number">20</span>, <span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;##UM&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">80</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">82</span>}
{<span class="hljs-string">&#x27;entity&#x27;</span>: <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9337</span>, <span class="hljs-string">&#x27;index&#x27;</span>: <span class="hljs-number">21</span>, <span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;##BO&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">82</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">84</span>}
{<span class="hljs-string">&#x27;entity&#x27;</span>: <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9762</span>, <span class="hljs-string">&#x27;index&#x27;</span>: <span class="hljs-number">28</span>, <span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;Manhattan&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">114</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">123</span>}
{<span class="hljs-string">&#x27;entity&#x27;</span>: <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9915</span>, <span class="hljs-string">&#x27;index&#x27;</span>: <span class="hljs-number">29</span>, <span class="hljs-string">&#x27;word&#x27;</span>: <span class="hljs-string">&#x27;Bridge&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">124</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">130</span>}`}}),we=new ms({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[xj],pytorch:[kj]},$$scope:{ctx:$}}}),vt=new q({props:{code:`for token, prediction in zip(tokens, predictions[0].numpy()):
    print((token, model.config.id2label[prediction]))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> token, prediction <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(tokens, predictions[<span class="hljs-number">0</span>].numpy()):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>((token, model.config.id2label[prediction]))
(<span class="hljs-string">&#x27;[CLS]&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;Hu&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>)
(<span class="hljs-string">&#x27;##gging&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>)
(<span class="hljs-string">&#x27;Face&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>)
(<span class="hljs-string">&#x27;Inc&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>)
(<span class="hljs-string">&#x27;.&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;is&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;a&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;company&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;based&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;in&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;New&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>)
(<span class="hljs-string">&#x27;York&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>)
(<span class="hljs-string">&#x27;City&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>)
(<span class="hljs-string">&#x27;.&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;Its&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;headquarters&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;are&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;in&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;D&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>)
(<span class="hljs-string">&#x27;##UM&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>)
(<span class="hljs-string">&#x27;##BO&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>)
(<span class="hljs-string">&#x27;,&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;therefore&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;very&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;close&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;to&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;the&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;Manhattan&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>)
(<span class="hljs-string">&#x27;Bridge&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>)
(<span class="hljs-string">&#x27;.&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)
(<span class="hljs-string">&#x27;[SEP]&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>)`}}),qt=new J({}),At=new q({props:{code:`from transformers import pipeline

summarizer = pipeline("summarization")

ARTICLE = """ New York (CNN)When Liana Barrientos was 23 years old, she got married in Westchester County, New York.
A year later, she got married again in Westchester County, but to a different man and without divorcing her first husband.
Only 18 days after that marriage, she got hitched yet again. Then, Barrientos declared "I do" five more times, sometimes only within two weeks of each other.
In 2010, she married once more, this time in the Bronx. In an application for a marriage license, she stated it was her "first and only" marriage.
Barrientos, now 39, is facing two criminal counts of "offering a false instrument for filing in the first degree," referring to her false statements on the
2010 marriage license application, according to court documents.
Prosecutors said the marriages were part of an immigration scam.
On Friday, she pleaded not guilty at State Supreme Court in the Bronx, according to her attorney, Christopher Wright, who declined to comment further.
After leaving court, Barrientos was arrested and charged with theft of service and criminal trespass for allegedly sneaking into the New York subway through an emergency exit, said Detective
Annette Markowski, a police spokeswoman. In total, Barrientos has been married 10 times, with nine of her marriages occurring between 1999 and 2002.
All occurred either in Westchester County, Long Island, New Jersey or the Bronx. She is believed to still be married to four men, and at one time, she was married to eight men at once, prosecutors say.
Prosecutors said the immigration scam involved some of her husbands, who filed for permanent residence status shortly after the marriages.
Any divorces happened only after such filings were approved. It was unclear whether any of the men will be prosecuted.
The case was referred to the Bronx District Attorney\\'s Office by Immigration and Customs Enforcement and the Department of Homeland Security\\'s
Investigation Division. Seven of the men are from so-called "red-flagged" countries, including Egypt, Turkey, Georgia, Pakistan and Mali.
Her eighth husband, Rashid Rajput, was deported in 2006 to his native Pakistan after an investigation by the Joint Terrorism Task Force.
If convicted, Barrientos faces up to four years in prison.  Her next court appearance is scheduled for May 18.
"""`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>summarizer = pipeline(<span class="hljs-string">&quot;summarization&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE = <span class="hljs-string">&quot;&quot;&quot; New York (CNN)When Liana Barrientos was 23 years old, she got married in Westchester County, New York.
<span class="hljs-meta">... </span>A year later, she got married again in Westchester County, but to a different man and without divorcing her first husband.
<span class="hljs-meta">... </span>Only 18 days after that marriage, she got hitched yet again. Then, Barrientos declared &quot;I do&quot; five more times, sometimes only within two weeks of each other.
<span class="hljs-meta">... </span>In 2010, she married once more, this time in the Bronx. In an application for a marriage license, she stated it was her &quot;first and only&quot; marriage.
<span class="hljs-meta">... </span>Barrientos, now 39, is facing two criminal counts of &quot;offering a false instrument for filing in the first degree,&quot; referring to her false statements on the
<span class="hljs-meta">... </span>2010 marriage license application, according to court documents.
<span class="hljs-meta">... </span>Prosecutors said the marriages were part of an immigration scam.
<span class="hljs-meta">... </span>On Friday, she pleaded not guilty at State Supreme Court in the Bronx, according to her attorney, Christopher Wright, who declined to comment further.
<span class="hljs-meta">... </span>After leaving court, Barrientos was arrested and charged with theft of service and criminal trespass for allegedly sneaking into the New York subway through an emergency exit, said Detective
<span class="hljs-meta">... </span>Annette Markowski, a police spokeswoman. In total, Barrientos has been married 10 times, with nine of her marriages occurring between 1999 and 2002.
<span class="hljs-meta">... </span>All occurred either in Westchester County, Long Island, New Jersey or the Bronx. She is believed to still be married to four men, and at one time, she was married to eight men at once, prosecutors say.
<span class="hljs-meta">... </span>Prosecutors said the immigration scam involved some of her husbands, who filed for permanent residence status shortly after the marriages.
<span class="hljs-meta">... </span>Any divorces happened only after such filings were approved. It was unclear whether any of the men will be prosecuted.
<span class="hljs-meta">... </span>The case was referred to the Bronx District Attorney\\&#x27;s Office by Immigration and Customs Enforcement and the Department of Homeland Security\\&#x27;s
<span class="hljs-meta">... </span>Investigation Division. Seven of the men are from so-called &quot;red-flagged&quot; countries, including Egypt, Turkey, Georgia, Pakistan and Mali.
<span class="hljs-meta">... </span>Her eighth husband, Rashid Rajput, was deported in 2006 to his native Pakistan after an investigation by the Joint Terrorism Task Force.
<span class="hljs-meta">... </span>If convicted, Barrientos faces up to four years in prison.  Her next court appearance is scheduled for May 18.
<span class="hljs-meta">... </span>&quot;&quot;&quot;</span>`}}),It=new q({props:{code:"print(summarizer(ARTICLE, max_length=130, min_length=30, do_sample=False))",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(summarizer(ARTICLE, max_length=<span class="hljs-number">130</span>, min_length=<span class="hljs-number">30</span>, do_sample=<span class="hljs-literal">False</span>))
[{<span class="hljs-string">&#x27;summary_text&#x27;</span>: <span class="hljs-string">&#x27; Liana Barrientos, 39, is charged with two counts of &quot;offering a false instrument for filing in
the first degree&quot; In total, she has been married 10 times, with nine of her marriages occurring between 1999 and
2002 . At one time, she was married to eight men at once, prosecutors say .&#x27;</span>}]`}}),$e=new ms({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[vj],pytorch:[yj]},$$scope:{ctx:$}}}),Mt=new J({}),Ft=new q({props:{code:`from transformers import pipeline

translator = pipeline("translation_en_to_de")
print(translator("Hugging Face is a technology company based in New York and Paris", max_length=40))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>translator = pipeline(<span class="hljs-string">&quot;translation_en_to_de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(translator(<span class="hljs-string">&quot;Hugging Face is a technology company based in New York and Paris&quot;</span>, max_length=<span class="hljs-number">40</span>))
[{<span class="hljs-string">&#x27;translation_text&#x27;</span>: <span class="hljs-string">&#x27;Hugging Face ist ein Technologieunternehmen mit Sitz in New York und Paris.&#x27;</span>}]`}}),Te=new ms({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Aj],pytorch:[Ej]},$$scope:{ctx:$}}}),Ct=new J({}),Ot=new q({props:{code:`from transformers import pipeline

audio_classifier = pipeline(
    task="audio-classification", model="ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition"
)
audio_classifier("jfk_moon_speech.wav")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>audio_classifier = pipeline(
<span class="hljs-meta">... </span>    task=<span class="hljs-string">&quot;audio-classification&quot;</span>, model=<span class="hljs-string">&quot;ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>audio_classifier(<span class="hljs-string">&quot;jfk_moon_speech.wav&quot;</span>)
[{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;calm&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.13856211304664612</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;disgust&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.13148026168346405</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;happy&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.12635163962841034</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;angry&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.12439591437578201</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;fearful&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.12404385954141617</span>}]`}}),ze=new ms({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{pytorch:[zj]},$$scope:{ctx:$}}}),Ht=new J({}),Wt=new q({props:{code:`from transformers import pipeline

speech_recognizer = pipeline(task="automatic-speech-recognition", model="facebook/wav2vec2-base-960h")
speech_recognizer("jfk_moon_speech.wav")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>speech_recognizer = pipeline(task=<span class="hljs-string">&quot;automatic-speech-recognition&quot;</span>, model=<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>speech_recognizer(<span class="hljs-string">&quot;jfk_moon_speech.wav&quot;</span>)
{<span class="hljs-string">&#x27;text&#x27;</span>: <span class="hljs-string">&quot;PRESENTETE MISTER VICE PRESIDENT GOVERNOR CONGRESSMEN THOMAS SAN O TE WILAN CONGRESSMAN MILLA MISTER WEBB MSTBELL SCIENIS DISTINGUISHED GUESS AT LADIES AND GENTLEMAN I APPRECIATE TO YOUR PRESIDENT HAVING MADE ME AN HONORARY VISITING PROFESSOR AND I WILL ASSURE YOU THAT MY FIRST LECTURE WILL BE A VERY BRIEF I AM DELIGHTED TO BE HERE AND I&#x27;M PARTICULARLY DELIGHTED TO BE HERE ON THIS OCCASION WE MEED AT A COLLEGE NOTED FOR KNOWLEGE IN A CITY NOTED FOR PROGRESS IN A STATE NOTED FOR STRAINTH AN WE STAND IN NEED OF ALL THREE&quot;</span>}`}}),Pe=new ms({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{pytorch:[Lj]},$$scope:{ctx:$}}}),Xt=new J({}),Kt=new q({props:{code:`from transformers import pipeline

vision_classifier = pipeline(task="image-classification")
vision_classifier(
    images="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/pipeline-cat-chonk.jpeg"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>vision_classifier = pipeline(task=<span class="hljs-string">&quot;image-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>vision_classifier(
<span class="hljs-meta">... </span>    images=<span class="hljs-string">&quot;https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/pipeline-cat-chonk.jpeg&quot;</span>
<span class="hljs-meta">... </span>)
[{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;lynx, catamount&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.4403027892112732</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;cougar, puma, catamount, mountain lion, painter, panther, Felis concolor&#x27;</span>,
  <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.03433405980467796</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;snow leopard, ounce, Panthera uncia&#x27;</span>,
  <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.032148055732250214</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;Egyptian cat&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.02353910356760025</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;tiger cat&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.023034192621707916</span>}]`}}),Ce=new ms({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{pytorch:[Fj]},$$scope:{ctx:$}}}),{c(){n=l("meta"),u=m(),a=l("h1"),f=l("a"),_=l("span"),j(E.$$.fragment),A=m(),z=l("span"),v=o("Summary of the tasks"),I=m(),j(F.$$.fragment),Vs=m(),gs=l("p"),As=o(`This page shows the most frequent use-cases when using the library. The models available allow for many different
configurations and a great versatility in use-cases. The most simple ones are presented here, showcasing usage for
tasks such as question answering, sequence classification, named entity recognition and others.`),Js=m(),K=l("p"),Is=o(`These examples leverage auto-models, which are classes that will instantiate a model according to a given checkpoint,
automatically selecting the correct model architecture. Please check the `),fs=l("a"),Ye=o("AutoModel"),Ks=o(` documentation
for more information. Feel free to modify the code to be more specific and adapt it to your specific use-case.`),G=m(),ds=l("p"),zs=o(`In order for a model to perform well on a task, it must be loaded from a checkpoint corresponding to that task. These
checkpoints are usually pre-trained on a large corpus of data and fine-tuned on a specific task. This means the
following:`),Zs=m(),Z=l("ul"),U=l("li"),We=o(`Not all models were fine-tuned on all tasks. If you want to fine-tune a model on a specific task, you can leverage
one of the `),Ms=l("em"),se=o("run_$TASK.py"),us=o(" scripts in the "),ss=l("a"),T=o("examples"),M=o(" directory."),na=m(),_s=l("li"),oa=o(`Fine-tuned models were fine-tuned on a specific dataset. This dataset may or may not overlap with your use-case and
domain. As mentioned previously, you may leverage the `),js=l("a"),ra=o("examples"),ks=o(` scripts to fine-tune your model, or you may
create your own training script.`),Qe=m(),Ls=l("p"),zi=o("In order to do an inference on a task, several mechanisms are made available by the library:"),ar=m(),ee=l("ul"),Xa=l("li"),Mi=o("Pipelines: very easy-to-use abstractions, which require as little as two lines of code."),Li=m(),Va=l("li"),Pi=o(`Direct model use: Less abstractions, but more flexibility and power via a direct access to a tokenizer
(PyTorch/TensorFlow) and full inference capacity.`),nr=m(),la=l("p"),Fi=o("Both approaches are showcased here."),or=m(),j(te.$$.fragment),rr=m(),Ps=l("h2"),ae=l("a"),Ja=l("span"),j(Xe.$$.fragment),Ni=m(),Ka=l("span"),Ci=o("Sequence Classification"),lr=m(),Y=l("p"),Si=o(`Sequence classification is the task of classifying sequences according to a given number of classes. An example of
sequence classification is the GLUE dataset, which is entirely based on that task. If you would like to fine-tune a
model on a GLUE sequence classification task, you may leverage the `),Ve=l("a"),Di=o("run_glue.py"),Oi=o(", "),Je=l("a"),Ri=o("run_tf_glue.py"),Bi=o(", "),Ke=l("a"),Hi=o("run_tf_text_classification.py"),Gi=o(" or "),Ze=l("a"),Ui=o("run_xnli.py"),Yi=o(" scripts."),ir=m(),ia=l("p"),Wi=o(`Here is an example of using pipelines to do sentiment analysis: identifying if a sequence is positive or negative. It
leverages a fine-tuned model on sst2, which is a GLUE task.`),pr=m(),pa=l("p"),Qi=o("This returns a label (\u201CPOSITIVE\u201D or \u201CNEGATIVE\u201D) alongside a score, as follows:"),cr=m(),j(st.$$.fragment),hr=m(),ca=l("p"),Xi=o(`Here is an example of doing a sequence classification using a model to determine if two sequences are paraphrases of
each other. The process is the following:`),ur=m(),W=l("ol"),Za=l("li"),Vi=o(`Instantiate a tokenizer and a model from the checkpoint name. The model is identified as a BERT model and loads it
with the weights stored in the checkpoint.`),Ji=m(),sn=l("li"),Ki=o(`Build a sequence from the two sentences, with the correct model-specific separators, token type ids and attention
masks (which will be created automatically by the tokenizer).`),Zi=m(),en=l("li"),sp=o(`Pass this sequence through the model so that it is classified in one of the two available classes: 0 (not a
paraphrase) and 1 (is a paraphrase).`),ep=m(),tn=l("li"),tp=o("Compute the softmax of the result to get probabilities over the classes."),ap=m(),an=l("li"),np=o("Print the results."),mr=m(),j(ne.$$.fragment),gr=m(),Fs=l("h2"),oe=l("a"),nn=l("span"),j(et.$$.fragment),op=m(),on=l("span"),rp=o("Extractive Question Answering"),fr=m(),ws=l("p"),lp=o(`Extractive Question Answering is the task of extracting an answer from a text given a question. An example of a
question answering dataset is the SQuAD dataset, which is entirely based on that task. If you would like to fine-tune a
model on a SQuAD task, you may leverage the `),tt=l("a"),ip=o("run_qa.py"),pp=o(` and
`),at=l("a"),cp=o("run_tf_squad.py"),hp=o(`
scripts.`),dr=m(),ha=l("p"),up=o(`Here is an example of using pipelines to do question answering: extracting an answer from a text given a question. It
leverages a fine-tuned model on SQuAD.`),_r=m(),j(nt.$$.fragment),jr=m(),ua=l("p"),mp=o(`This returns an answer extracted from the text, a confidence score, alongside \u201Cstart\u201D and \u201Cend\u201D values, which are the
positions of the extracted answer in the text.`),kr=m(),j(ot.$$.fragment),wr=m(),ma=l("p"),gp=o("Here is an example of question answering using a model and a tokenizer. The process is the following:"),xr=m(),D=l("ol"),rn=l("li"),fp=o(`Instantiate a tokenizer and a model from the checkpoint name. The model is identified as a BERT model and loads it
with the weights stored in the checkpoint.`),dp=m(),ln=l("li"),_p=o("Define a text and a few questions."),jp=m(),pn=l("li"),kp=o(`Iterate over the questions and build a sequence from the text and the current question, with the correct
model-specific separators, token type ids and attention masks.`),wp=m(),cn=l("li"),xp=o(`Pass this sequence through the model. This outputs a range of scores across the entire sequence tokens (question and
text), for both the start and end positions.`),bp=m(),hn=l("li"),yp=o("Compute the softmax of the result to get probabilities over the tokens."),$p=m(),un=l("li"),vp=o("Fetch the tokens from the identified start and stop values, convert those tokens to a string."),qp=m(),mn=l("li"),Ep=o("Print the results."),br=m(),j(re.$$.fragment),yr=m(),Ns=l("h2"),le=l("a"),gn=l("span"),j(rt.$$.fragment),Tp=m(),fn=l("span"),Ap=o("Language Modeling"),$r=m(),ga=l("p"),Ip=o(`Language modeling is the task of fitting a model to a corpus, which can be domain specific. All popular
transformer-based models are trained using a variant of language modeling, e.g. BERT with masked language modeling,
GPT-2 with causal language modeling.`),vr=m(),ie=l("p"),zp=o(`Language modeling can be useful outside of pretraining as well, for example to shift the model distribution to be
domain-specific: using a language model trained over a very large corpus, and then fine-tuning it to a news dataset or
on scientific papers e.g. `),lt=l("a"),Mp=o("LysandreJik/arxiv-nlp"),Lp=o("."),qr=m(),Cs=l("h3"),pe=l("a"),dn=l("span"),j(it.$$.fragment),Pp=m(),_n=l("span"),Fp=o("Masked Language Modeling"),Er=m(),xs=l("p"),Np=o(`Masked language modeling is the task of masking tokens in a sequence with a masking token, and prompting the model to
fill that mask with an appropriate token. This allows the model to attend to both the right context (tokens on the
right of the mask) and the left context (tokens on the left of the mask). Such a training creates a strong basis for
downstream tasks requiring bi-directional context, such as SQuAD (question answering, see `),pt=l("a"),Cp=o("Lewis, Lui, Goyal et al."),Sp=o(`, part 4.2). If you would like to fine-tune a model on a masked language modeling
task, you may leverage the `),ct=l("a"),Dp=o("run_mlm.py"),Op=o(" script."),Tr=m(),fa=l("p"),Rp=o("Here is an example of using pipelines to replace a mask from a sequence:"),Ar=m(),j(ht.$$.fragment),Ir=m(),da=l("p"),Bp=o("This outputs the sequences with the mask filled, the confidence score, and the token id in the tokenizer vocabulary:"),zr=m(),j(ut.$$.fragment),Mr=m(),_a=l("p"),Hp=o("Here is an example of doing masked language modeling using a model and a tokenizer. The process is the following:"),Lr=m(),R=l("ol"),jn=l("li"),Gp=o(`Instantiate a tokenizer and a model from the checkpoint name. The model is identified as a DistilBERT model and
loads it with the weights stored in the checkpoint.`),Up=m(),mt=l("li"),Yp=o("Define a sequence with a masked token, placing the "),kn=l("code"),Wp=o("tokenizer.mask_token"),Qp=o(" instead of a word."),Xp=m(),wn=l("li"),Vp=o("Encode that sequence into a list of IDs and find the position of the masked token in that list."),Jp=m(),xn=l("li"),Kp=o(`Retrieve the predictions at the index of the mask token: this tensor has the same size as the vocabulary, and the
values are the scores attributed to each token. The model gives higher score to tokens it deems probable in that
context.`),Zp=m(),Ss=l("li"),sc=o("Retrieve the top 5 tokens using the PyTorch "),bn=l("code"),ec=o("topk"),tc=o(" or TensorFlow "),yn=l("code"),ac=o("top_k"),nc=o(" methods."),oc=m(),$n=l("li"),rc=o("Replace the mask token by the tokens and print the results"),Pr=m(),j(ce.$$.fragment),Fr=m(),ja=l("p"),lc=o("This prints five sequences, with the top 5 tokens predicted by the model."),Nr=m(),Ds=l("h3"),he=l("a"),vn=l("span"),j(gt.$$.fragment),ic=m(),qn=l("span"),pc=o("Causal Language Modeling"),Cr=m(),ue=l("p"),cc=o(`Causal language modeling is the task of predicting the token following a sequence of tokens. In this situation, the
model only attends to the left context (tokens on the left of the mask). Such a training is particularly interesting
for generation tasks. If you would like to fine-tune a model on a causal language modeling task, you may leverage the
`),ft=l("a"),hc=o("run_clm.py"),uc=o(" script."),Sr=m(),ka=l("p"),mc=o(`Usually, the next token is predicted by sampling from the logits of the last hidden state the model produces from the
input sequence.`),Dr=m(),j(me.$$.fragment),Or=m(),bs=l("p"),gc=o("This outputs a (hopefully) coherent next token following the original sequence, which in our case is the word "),En=l("em"),fc=o("is"),dc=o(` or
`),Tn=l("em"),_c=o("features"),jc=o("."),Rr=m(),ge=l("p"),kc=o("In the next section, we show how "),wa=l("a"),wc=o("generation_utils.GenerationMixin.generate()"),xc=o(` can be used to
generate multiple tokens up to a specified length instead of one token at a time.`),Br=m(),Os=l("h3"),fe=l("a"),An=l("span"),j(dt.$$.fragment),bc=m(),In=l("span"),yc=o("Text Generation"),Hr=m(),B=l("p"),$c=o("In text generation ("),zn=l("em"),vc=o("a.k.a"),qc=m(),Mn=l("em"),Ec=o("open-ended text generation"),Tc=o(`) the goal is to create a coherent portion of text that is a
continuation from the given context. The following example shows how `),Ln=l("em"),Ac=o("GPT-2"),Ic=o(` can be used in pipelines to generate text.
As a default all models apply `),Pn=l("em"),zc=o("Top-K"),Mc=o(` sampling when used in pipelines, as configured in their respective configurations
(see `),_t=l("a"),Lc=o("gpt-2 config"),Pc=o(" for example)."),Gr=m(),j(de.$$.fragment),Ur=m(),L=l("p"),Fc=o("Text generation is currently possible with "),Fn=l("em"),Nc=o("GPT-2"),Cc=o(", "),Nn=l("em"),Sc=o("OpenAi-GPT"),Dc=o(", "),Cn=l("em"),Oc=o("CTRL"),Rc=o(", "),Sn=l("em"),Bc=o("XLNet"),Hc=o(", "),Dn=l("em"),Gc=o("Transfo-XL"),Uc=o(" and "),On=l("em"),Yc=o("Reformer"),Wc=o(` in
PyTorch and for most models in Tensorflow as well. As can be seen in the example above `),Rn=l("em"),Qc=o("XLNet"),Xc=o(" and "),Bn=l("em"),Vc=o("Transfo-XL"),Jc=o(` often
need to be padded to work well. GPT-2 is usually a good choice for `),Hn=l("em"),Kc=o("open-ended text generation"),Zc=o(` because it was trained
on millions of webpages with a causal language modeling objective.`),Yr=m(),_e=l("p"),sh=o(`For more information on how to apply different decoding strategies for text generation, please also refer to our text
generation blog post `),jt=l("a"),eh=o("here"),th=o("."),Wr=m(),Rs=l("h2"),je=l("a"),Gn=l("span"),j(kt.$$.fragment),ah=m(),Un=l("span"),nh=o("Named Entity Recognition"),Qr=m(),ke=l("p"),oh=o(`Named Entity Recognition (NER) is the task of classifying tokens according to a class, for example, identifying a token
as a person, an organisation or a location. An example of a named entity recognition dataset is the CoNLL-2003 dataset,
which is entirely based on that task. If you would like to fine-tune a model on an NER task, you may leverage the
`),wt=l("a"),rh=o("run_ner.py"),lh=o(" script."),Xr=m(),xa=l("p"),ih=o(`Here is an example of using pipelines to do named entity recognition, specifically, trying to identify tokens as
belonging to one of 9 classes:`),Vr=m(),P=l("ul"),Yn=l("li"),ph=o("O, Outside of a named entity"),ch=m(),Wn=l("li"),hh=o("B-MIS, Beginning of a miscellaneous entity right after another miscellaneous entity"),uh=m(),Qn=l("li"),mh=o("I-MIS, Miscellaneous entity"),gh=m(),Xn=l("li"),fh=o("B-PER, Beginning of a person\u2019s name right after another person\u2019s name"),dh=m(),Vn=l("li"),_h=o("I-PER, Person\u2019s name"),jh=m(),Jn=l("li"),kh=o("B-ORG, Beginning of an organisation right after another organisation"),wh=m(),Kn=l("li"),xh=o("I-ORG, Organisation"),bh=m(),Zn=l("li"),yh=o("B-LOC, Beginning of a location right after another location"),$h=m(),so=l("li"),vh=o("I-LOC, Location"),Jr=m(),ys=l("p"),qh=o("It leverages a fine-tuned model on CoNLL-2003, fine-tuned by "),xt=l("a"),Eh=o("@stefan-it"),Th=o(" from "),bt=l("a"),Ah=o("dbmdz"),Ih=o("."),Kr=m(),j(yt.$$.fragment),Zr=m(),ba=l("p"),zh=o(`This outputs a list of all words that have been identified as one of the entities from the 9 classes defined above.
Here are the expected results:`),sl=m(),j($t.$$.fragment),el=m(),ya=l("p"),Mh=o(`Note how the tokens of the sequence \u201CHugging Face\u201D have been identified as an organisation, and \u201CNew York City\u201D,
\u201CDUMBO\u201D and \u201CManhattan Bridge\u201D have been identified as locations.`),tl=m(),$a=l("p"),Lh=o("Here is an example of doing named entity recognition, using a model and a tokenizer. The process is the following:"),al=m(),H=l("ol"),eo=l("li"),Ph=o(`Instantiate a tokenizer and a model from the checkpoint name. The model is identified as a BERT model and loads it
with the weights stored in the checkpoint.`),Fh=m(),to=l("li"),Nh=o("Define a sequence with known entities, such as \u201CHugging Face\u201D as an organisation and \u201CNew York City\u201D as a location."),Ch=m(),ao=l("li"),Sh=o(`Split words into tokens so that they can be mapped to predictions. We use a small hack by, first, completely
encoding and decoding the sequence, so that we\u2019re left with a string that contains the special tokens.`),Dh=m(),no=l("li"),Oh=o("Encode that sequence into IDs (special tokens are added automatically)."),Rh=m(),oo=l("li"),Bh=o(`Retrieve the predictions by passing the input to the model and getting the first output. This results in a
distribution over the 9 possible classes for each token. We take the argmax to retrieve the most likely class for
each token.`),Hh=m(),ro=l("li"),Gh=o("Zip together each token with its prediction and print it."),nl=m(),j(we.$$.fragment),ol=m(),va=l("p"),Uh=o(`This outputs a list of each token mapped to its corresponding prediction. Differently from the pipeline, here every
token has a prediction as we didn\u2019t remove the \u201C0\u201Dth class, which means that no particular entity was found on that
token.`),rl=m(),$s=l("p"),Yh=o("In the above example, "),lo=l("code"),Wh=o("predictions"),Qh=o(` is an integer that corresponds to the predicted class. We can use the
`),io=l("code"),Xh=o("model.config.id2label"),Vh=o(` property in order to recover the class name corresponding to the class number, which is
illustrated below:`),ll=m(),j(vt.$$.fragment),il=m(),Bs=l("h2"),xe=l("a"),po=l("span"),j(qt.$$.fragment),Jh=m(),co=l("span"),Kh=o("Summarization"),pl=m(),be=l("p"),Zh=o(`Summarization is the task of summarizing a document or an article into a shorter text. If you would like to fine-tune a
model on a summarization task, you may leverage the `),Et=l("a"),su=o("run_summarization.py"),eu=o(`
script.`),cl=m(),ye=l("p"),tu=o(`An example of a summarization dataset is the CNN / Daily Mail dataset, which consists of long news articles and was
created for the task of summarization. If you would like to fine-tune a model on a summarization task, various
approaches are described in this `),Tt=l("a"),au=o("document"),nu=o("."),hl=m(),qa=l("p"),ou=o(`Here is an example of using the pipelines to do summarization. It leverages a Bart model that was fine-tuned on the CNN
/ Daily Mail data set.`),ul=m(),j(At.$$.fragment),ml=m(),Q=l("p"),ru=o("Because the summarization pipeline depends on the "),ho=l("code"),lu=o("PreTrainedModel.generate()"),iu=o(` method, we can override the default
arguments of `),uo=l("code"),pu=o("PreTrainedModel.generate()"),cu=o(" directly in the pipeline for "),mo=l("code"),hu=o("max_length"),uu=o(" and "),go=l("code"),mu=o("min_length"),gu=o(` as shown
below. This outputs the following summary:`),gl=m(),j(It.$$.fragment),fl=m(),Ea=l("p"),fu=o("Here is an example of doing summarization using a model and a tokenizer. The process is the following:"),dl=m(),es=l("ol"),Hs=l("li"),du=o(`Instantiate a tokenizer and a model from the checkpoint name. Summarization is usually done using an encoder-decoder
model, such as `),fo=l("code"),_u=o("Bart"),ju=o(" or "),_o=l("code"),ku=o("T5"),wu=o("."),xu=m(),jo=l("li"),bu=o("Define the article that should be summarized."),yu=m(),ko=l("li"),$u=o("Add the T5 specific prefix \u201Csummarize: \u201C."),vu=m(),zt=l("li"),qu=o("Use the "),wo=l("code"),Eu=o("PreTrainedModel.generate()"),Tu=o(" method to generate the summary."),_l=m(),Ta=l("p"),Au=o(`In this example we use Google\u2019s T5 model. Even though it was pre-trained only on a multi-task mixed dataset (including
CNN / Daily Mail), it yields very good results.`),jl=m(),j($e.$$.fragment),kl=m(),Gs=l("h2"),ve=l("a"),xo=l("span"),j(Mt.$$.fragment),Iu=m(),bo=l("span"),zu=o("Translation"),wl=m(),qe=l("p"),Mu=o(`Translation is the task of translating a text from one language to another. If you would like to fine-tune a model on a
translation task, you may leverage the `),Lt=l("a"),Lu=o("run_translation.py"),Pu=o(" script."),xl=m(),Ee=l("p"),Fu=o(`An example of a translation dataset is the WMT English to German dataset, which has sentences in English as the input
data and the corresponding sentences in German as the target data. If you would like to fine-tune a model on a
translation task, various approaches are described in this `),Pt=l("a"),Nu=o("document"),Cu=o("."),bl=m(),Aa=l("p"),Su=o(`Here is an example of using the pipelines to do translation. It leverages a T5 model that was only pre-trained on a
multi-task mixture dataset (including WMT), yet, yielding impressive translation results.`),yl=m(),j(Ft.$$.fragment),$l=m(),ts=l("p"),Du=o("Because the translation pipeline depends on the "),yo=l("code"),Ou=o("PreTrainedModel.generate()"),Ru=o(` method, we can override the default
arguments of `),$o=l("code"),Bu=o("PreTrainedModel.generate()"),Hu=o(" directly in the pipeline as is shown for "),vo=l("code"),Gu=o("max_length"),Uu=o(" above."),vl=m(),Ia=l("p"),Yu=o("Here is an example of doing translation using a model and a tokenizer. The process is the following:"),ql=m(),as=l("ol"),Us=l("li"),Wu=o(`Instantiate a tokenizer and a model from the checkpoint name. Summarization is usually done using an encoder-decoder
model, such as `),qo=l("code"),Qu=o("Bart"),Xu=o(" or "),Eo=l("code"),Vu=o("T5"),Ju=o("."),Ku=m(),To=l("li"),Zu=o("Define the article that should be summarized."),sm=m(),Ao=l("li"),em=o("Add the T5 specific prefix \u201Ctranslate English to German: \u201D"),tm=m(),Nt=l("li"),am=o("Use the "),Io=l("code"),nm=o("PreTrainedModel.generate()"),om=o(" method to perform the translation."),El=m(),j(Te.$$.fragment),Tl=m(),za=l("p"),rm=o("We get the same translation as with the pipeline example."),Al=m(),Ys=l("h2"),Ae=l("a"),zo=l("span"),j(Ct.$$.fragment),lm=m(),Mo=l("span"),im=o("Audio classification"),Il=m(),ns=l("p"),pm=o("Audio classification assigns a class to an audio signal. The Keyword Spotting dataset from the "),St=l("a"),cm=o("SUPERB"),hm=o(" benchmark is an example dataset that can be used for audio classification fine-tuning. This dataset contains ten classes of keywords for classification. If you\u2019d like to fine-tune a model for audio classification, take a look at the "),Dt=l("a"),um=o("run_audio_classification.py"),mm=o(" script or this "),Ma=l("a"),gm=o("how-to guide"),fm=o("."),zl=m(),Ie=l("p"),dm=o("The following examples demonstrate how to use a "),La=l("a"),_m=o("pipeline()"),jm=o(" and a model and tokenizer for audio classification inference:"),Ml=m(),j(Ot.$$.fragment),Ll=m(),Pa=l("p"),km=o("The general process for using a model and feature extractor for audio classification is:"),Pl=m(),os=l("ol"),Lo=l("li"),wm=o("Instantiate a feature extractor and a model from the checkpoint name."),xm=m(),Po=l("li"),bm=o("Process the audio signal to be classified with a feature extractor."),ym=m(),Rt=l("li"),$m=o("Pass the input through the model and take the "),Fo=l("code"),vm=o("argmax"),qm=o(" to retrieve the most likely class."),Em=m(),Bt=l("li"),Tm=o("Convert the class id to a class name with "),No=l("code"),Am=o("id2label"),Im=o(" to return an interpretable result."),Fl=m(),j(ze.$$.fragment),Nl=m(),Ws=l("h2"),Me=l("a"),Co=l("span"),j(Ht.$$.fragment),zm=m(),So=l("span"),Mm=o("Automatic speech recognition"),Cl=m(),X=l("p"),Lm=o("Automatic speech recognition transcribes an audio signal to text. The "),Gt=l("a"),Pm=o("Common Voice"),Fm=o(" dataset is an example dataset that can be used for automatic speech recognition fine-tuning. It contains an audio file of a speaker and the corresponding sentence. If you\u2019d like to fine-tune a model for automatic speech recognition, take a look at the "),Ut=l("a"),Nm=o("run_speech_recognition_ctc.py"),Cm=o(" or "),Yt=l("a"),Sm=o("run_speech_recognition_seq2seq.py"),Dm=o(" scripts or this "),Fa=l("a"),Om=o("how-to guide"),Rm=o("."),Sl=m(),Le=l("p"),Bm=o("The following examples demonstrate how to use a "),Na=l("a"),Hm=o("pipeline()"),Gm=o(" and a model and tokenizer for automatic speech recognition inference:"),Dl=m(),j(Wt.$$.fragment),Ol=m(),Ca=l("p"),Um=o("The general process for using a model and processor for automatic speech recognition is:"),Rl=m(),rs=l("ol"),Do=l("li"),Ym=o("Instantiate a processor (which regroups a feature extractor for input processing and a tokenizer for decoding) and a model from the checkpoint name."),Wm=m(),Oo=l("li"),Qm=o("Process the audio signal and text with a processor."),Xm=m(),Qt=l("li"),Vm=o("Pass the input through the model and take the "),Ro=l("code"),Jm=o("argmax"),Km=o(" to retrieve the predicted text."),Zm=m(),Bo=l("li"),sg=o("Decode the text with a tokenizer to obtain the transcription."),Bl=m(),j(Pe.$$.fragment),Hl=m(),Qs=l("h2"),Fe=l("a"),Ho=l("span"),j(Xt.$$.fragment),eg=m(),Go=l("span"),tg=o("Image classification"),Gl=m(),ls=l("p"),ag=o("Like text and audio classification, image classification assigns a class to an image. The "),Vt=l("a"),ng=o("CIFAR-100"),og=o(" dataset is an example dataset that can be used for image classification fine-tuning. It contains an image and the corresponding class. If you\u2019d like to fine-tune a model for image classification, take a look at the "),Jt=l("a"),rg=o("run_image_classification.py"),lg=o(" script or this "),Sa=l("a"),ig=o("how-to guide"),pg=o("."),Ul=m(),Ne=l("p"),cg=o("The following examples demonstrate how to use a "),Da=l("a"),hg=o("pipeline()"),ug=o(" and a model and tokenizer for image classification inference:"),Yl=m(),j(Kt.$$.fragment),Wl=m(),Oa=l("p"),mg=o("The general process for using a model and feature extractor for image classification is:"),Ql=m(),is=l("ol"),Uo=l("li"),gg=o("Instantiate a feature extractor and a model from the checkpoint name."),fg=m(),Yo=l("li"),dg=o("Process the image to be classified with a feature extractor."),_g=m(),Zt=l("li"),jg=o("Pass the input through the model and take the "),Wo=l("code"),kg=o("argmax"),wg=o(" to retrieve the predicted class."),xg=m(),sa=l("li"),bg=o("Convert the class id to a class name with "),Qo=l("code"),yg=o("id2label"),$g=o(" to return an interpretable result."),Xl=m(),j(Ce.$$.fragment),this.h()},l(s){const c=W_('[data-svelte="svelte-1phssyn"]',document.head);n=i(c,"META",{name:!0,content:!0}),c.forEach(t),u=g(s),a=i(s,"H1",{class:!0});var ea=p(a);f=i(ea,"A",{id:!0,class:!0,href:!0});var Xo=p(f);_=i(Xo,"SPAN",{});var Vo=p(_);k(E.$$.fragment,Vo),Vo.forEach(t),Xo.forEach(t),A=g(ea),z=i(ea,"SPAN",{});var Jo=p(z);v=r(Jo,"Summary of the tasks"),Jo.forEach(t),ea.forEach(t),I=g(s),k(F.$$.fragment,s),Vs=g(s),gs=i(s,"P",{});var Ko=p(gs);As=r(Ko,`This page shows the most frequent use-cases when using the library. The models available allow for many different
configurations and a great versatility in use-cases. The most simple ones are presented here, showcasing usage for
tasks such as question answering, sequence classification, named entity recognition and others.`),Ko.forEach(t),Js=g(s),K=i(s,"P",{});var ta=p(K);Is=r(ta,`These examples leverage auto-models, which are classes that will instantiate a model according to a given checkpoint,
automatically selecting the correct model architecture. Please check the `),fs=i(ta,"A",{href:!0});var Zo=p(fs);Ye=r(Zo,"AutoModel"),Zo.forEach(t),Ks=r(ta,` documentation
for more information. Feel free to modify the code to be more specific and adapt it to your specific use-case.`),ta.forEach(t),G=g(s),ds=i(s,"P",{});var sr=p(ds);zs=r(sr,`In order for a model to perform well on a task, it must be loaded from a checkpoint corresponding to that task. These
checkpoints are usually pre-trained on a large corpus of data and fine-tuned on a specific task. This means the
following:`),sr.forEach(t),Zs=g(s),Z=i(s,"UL",{});var aa=p(Z);U=i(aa,"LI",{});var Xs=p(U);We=r(Xs,`Not all models were fine-tuned on all tasks. If you want to fine-tune a model on a specific task, you can leverage
one of the `),Ms=i(Xs,"EM",{});var er=p(Ms);se=r(er,"run_$TASK.py"),er.forEach(t),us=r(Xs," scripts in the "),ss=i(Xs,"A",{href:!0,rel:!0});var tr=p(ss);T=r(tr,"examples"),tr.forEach(t),M=r(Xs," directory."),Xs.forEach(t),na=g(aa),_s=i(aa,"LI",{});var Jl=p(_s);oa=r(Jl,`Fine-tuned models were fine-tuned on a specific dataset. This dataset may or may not overlap with your use-case and
domain. As mentioned previously, you may leverage the `),js=i(Jl,"A",{href:!0,rel:!0});var vg=p(js);ra=r(vg,"examples"),vg.forEach(t),ks=r(Jl,` scripts to fine-tune your model, or you may
create your own training script.`),Jl.forEach(t),aa.forEach(t),Qe=g(s),Ls=i(s,"P",{});var qg=p(Ls);zi=r(qg,"In order to do an inference on a task, several mechanisms are made available by the library:"),qg.forEach(t),ar=g(s),ee=i(s,"UL",{});var Kl=p(ee);Xa=i(Kl,"LI",{});var Eg=p(Xa);Mi=r(Eg,"Pipelines: very easy-to-use abstractions, which require as little as two lines of code."),Eg.forEach(t),Li=g(Kl),Va=i(Kl,"LI",{});var Tg=p(Va);Pi=r(Tg,`Direct model use: Less abstractions, but more flexibility and power via a direct access to a tokenizer
(PyTorch/TensorFlow) and full inference capacity.`),Tg.forEach(t),Kl.forEach(t),nr=g(s),la=i(s,"P",{});var Ag=p(la);Fi=r(Ag,"Both approaches are showcased here."),Ag.forEach(t),or=g(s),k(te.$$.fragment,s),rr=g(s),Ps=i(s,"H2",{class:!0});var Zl=p(Ps);ae=i(Zl,"A",{id:!0,class:!0,href:!0});var Ig=p(ae);Ja=i(Ig,"SPAN",{});var zg=p(Ja);k(Xe.$$.fragment,zg),zg.forEach(t),Ig.forEach(t),Ni=g(Zl),Ka=i(Zl,"SPAN",{});var Mg=p(Ka);Ci=r(Mg,"Sequence Classification"),Mg.forEach(t),Zl.forEach(t),lr=g(s),Y=i(s,"P",{});var vs=p(Y);Si=r(vs,`Sequence classification is the task of classifying sequences according to a given number of classes. An example of
sequence classification is the GLUE dataset, which is entirely based on that task. If you would like to fine-tune a
model on a GLUE sequence classification task, you may leverage the `),Ve=i(vs,"A",{href:!0,rel:!0});var Lg=p(Ve);Di=r(Lg,"run_glue.py"),Lg.forEach(t),Oi=r(vs,", "),Je=i(vs,"A",{href:!0,rel:!0});var Pg=p(Je);Ri=r(Pg,"run_tf_glue.py"),Pg.forEach(t),Bi=r(vs,", "),Ke=i(vs,"A",{href:!0,rel:!0});var Fg=p(Ke);Hi=r(Fg,"run_tf_text_classification.py"),Fg.forEach(t),Gi=r(vs," or "),Ze=i(vs,"A",{href:!0,rel:!0});var Ng=p(Ze);Ui=r(Ng,"run_xnli.py"),Ng.forEach(t),Yi=r(vs," scripts."),vs.forEach(t),ir=g(s),ia=i(s,"P",{});var Cg=p(ia);Wi=r(Cg,`Here is an example of using pipelines to do sentiment analysis: identifying if a sequence is positive or negative. It
leverages a fine-tuned model on sst2, which is a GLUE task.`),Cg.forEach(t),pr=g(s),pa=i(s,"P",{});var Sg=p(pa);Qi=r(Sg,"This returns a label (\u201CPOSITIVE\u201D or \u201CNEGATIVE\u201D) alongside a score, as follows:"),Sg.forEach(t),cr=g(s),k(st.$$.fragment,s),hr=g(s),ca=i(s,"P",{});var Dg=p(ca);Xi=r(Dg,`Here is an example of doing a sequence classification using a model to determine if two sequences are paraphrases of
each other. The process is the following:`),Dg.forEach(t),ur=g(s),W=i(s,"OL",{});var qs=p(W);Za=i(qs,"LI",{});var Og=p(Za);Vi=r(Og,`Instantiate a tokenizer and a model from the checkpoint name. The model is identified as a BERT model and loads it
with the weights stored in the checkpoint.`),Og.forEach(t),Ji=g(qs),sn=i(qs,"LI",{});var Rg=p(sn);Ki=r(Rg,`Build a sequence from the two sentences, with the correct model-specific separators, token type ids and attention
masks (which will be created automatically by the tokenizer).`),Rg.forEach(t),Zi=g(qs),en=i(qs,"LI",{});var Bg=p(en);sp=r(Bg,`Pass this sequence through the model so that it is classified in one of the two available classes: 0 (not a
paraphrase) and 1 (is a paraphrase).`),Bg.forEach(t),ep=g(qs),tn=i(qs,"LI",{});var Hg=p(tn);tp=r(Hg,"Compute the softmax of the result to get probabilities over the classes."),Hg.forEach(t),ap=g(qs),an=i(qs,"LI",{});var Gg=p(an);np=r(Gg,"Print the results."),Gg.forEach(t),qs.forEach(t),mr=g(s),k(ne.$$.fragment,s),gr=g(s),Fs=i(s,"H2",{class:!0});var si=p(Fs);oe=i(si,"A",{id:!0,class:!0,href:!0});var Ug=p(oe);nn=i(Ug,"SPAN",{});var Yg=p(nn);k(et.$$.fragment,Yg),Yg.forEach(t),Ug.forEach(t),op=g(si),on=i(si,"SPAN",{});var Wg=p(on);rp=r(Wg,"Extractive Question Answering"),Wg.forEach(t),si.forEach(t),fr=g(s),ws=i(s,"P",{});var Ra=p(ws);lp=r(Ra,`Extractive Question Answering is the task of extracting an answer from a text given a question. An example of a
question answering dataset is the SQuAD dataset, which is entirely based on that task. If you would like to fine-tune a
model on a SQuAD task, you may leverage the `),tt=i(Ra,"A",{href:!0,rel:!0});var Qg=p(tt);ip=r(Qg,"run_qa.py"),Qg.forEach(t),pp=r(Ra,` and
`),at=i(Ra,"A",{href:!0,rel:!0});var Xg=p(at);cp=r(Xg,"run_tf_squad.py"),Xg.forEach(t),hp=r(Ra,`
scripts.`),Ra.forEach(t),dr=g(s),ha=i(s,"P",{});var Vg=p(ha);up=r(Vg,`Here is an example of using pipelines to do question answering: extracting an answer from a text given a question. It
leverages a fine-tuned model on SQuAD.`),Vg.forEach(t),_r=g(s),k(nt.$$.fragment,s),jr=g(s),ua=i(s,"P",{});var Jg=p(ua);mp=r(Jg,`This returns an answer extracted from the text, a confidence score, alongside \u201Cstart\u201D and \u201Cend\u201D values, which are the
positions of the extracted answer in the text.`),Jg.forEach(t),kr=g(s),k(ot.$$.fragment,s),wr=g(s),ma=i(s,"P",{});var Kg=p(ma);gp=r(Kg,"Here is an example of question answering using a model and a tokenizer. The process is the following:"),Kg.forEach(t),xr=g(s),D=i(s,"OL",{});var V=p(D);rn=i(V,"LI",{});var Zg=p(rn);fp=r(Zg,`Instantiate a tokenizer and a model from the checkpoint name. The model is identified as a BERT model and loads it
with the weights stored in the checkpoint.`),Zg.forEach(t),dp=g(V),ln=i(V,"LI",{});var sf=p(ln);_p=r(sf,"Define a text and a few questions."),sf.forEach(t),jp=g(V),pn=i(V,"LI",{});var ef=p(pn);kp=r(ef,`Iterate over the questions and build a sequence from the text and the current question, with the correct
model-specific separators, token type ids and attention masks.`),ef.forEach(t),wp=g(V),cn=i(V,"LI",{});var tf=p(cn);xp=r(tf,`Pass this sequence through the model. This outputs a range of scores across the entire sequence tokens (question and
text), for both the start and end positions.`),tf.forEach(t),bp=g(V),hn=i(V,"LI",{});var af=p(hn);yp=r(af,"Compute the softmax of the result to get probabilities over the tokens."),af.forEach(t),$p=g(V),un=i(V,"LI",{});var nf=p(un);vp=r(nf,"Fetch the tokens from the identified start and stop values, convert those tokens to a string."),nf.forEach(t),qp=g(V),mn=i(V,"LI",{});var of=p(mn);Ep=r(of,"Print the results."),of.forEach(t),V.forEach(t),br=g(s),k(re.$$.fragment,s),yr=g(s),Ns=i(s,"H2",{class:!0});var ei=p(Ns);le=i(ei,"A",{id:!0,class:!0,href:!0});var rf=p(le);gn=i(rf,"SPAN",{});var lf=p(gn);k(rt.$$.fragment,lf),lf.forEach(t),rf.forEach(t),Tp=g(ei),fn=i(ei,"SPAN",{});var pf=p(fn);Ap=r(pf,"Language Modeling"),pf.forEach(t),ei.forEach(t),$r=g(s),ga=i(s,"P",{});var cf=p(ga);Ip=r(cf,`Language modeling is the task of fitting a model to a corpus, which can be domain specific. All popular
transformer-based models are trained using a variant of language modeling, e.g. BERT with masked language modeling,
GPT-2 with causal language modeling.`),cf.forEach(t),vr=g(s),ie=i(s,"P",{});var ti=p(ie);zp=r(ti,`Language modeling can be useful outside of pretraining as well, for example to shift the model distribution to be
domain-specific: using a language model trained over a very large corpus, and then fine-tuning it to a news dataset or
on scientific papers e.g. `),lt=i(ti,"A",{href:!0,rel:!0});var hf=p(lt);Mp=r(hf,"LysandreJik/arxiv-nlp"),hf.forEach(t),Lp=r(ti,"."),ti.forEach(t),qr=g(s),Cs=i(s,"H3",{class:!0});var ai=p(Cs);pe=i(ai,"A",{id:!0,class:!0,href:!0});var uf=p(pe);dn=i(uf,"SPAN",{});var mf=p(dn);k(it.$$.fragment,mf),mf.forEach(t),uf.forEach(t),Pp=g(ai),_n=i(ai,"SPAN",{});var gf=p(_n);Fp=r(gf,"Masked Language Modeling"),gf.forEach(t),ai.forEach(t),Er=g(s),xs=i(s,"P",{});var Ba=p(xs);Np=r(Ba,`Masked language modeling is the task of masking tokens in a sequence with a masking token, and prompting the model to
fill that mask with an appropriate token. This allows the model to attend to both the right context (tokens on the
right of the mask) and the left context (tokens on the left of the mask). Such a training creates a strong basis for
downstream tasks requiring bi-directional context, such as SQuAD (question answering, see `),pt=i(Ba,"A",{href:!0,rel:!0});var ff=p(pt);Cp=r(ff,"Lewis, Lui, Goyal et al."),ff.forEach(t),Sp=r(Ba,`, part 4.2). If you would like to fine-tune a model on a masked language modeling
task, you may leverage the `),ct=i(Ba,"A",{href:!0,rel:!0});var df=p(ct);Dp=r(df,"run_mlm.py"),df.forEach(t),Op=r(Ba," script."),Ba.forEach(t),Tr=g(s),fa=i(s,"P",{});var _f=p(fa);Rp=r(_f,"Here is an example of using pipelines to replace a mask from a sequence:"),_f.forEach(t),Ar=g(s),k(ht.$$.fragment,s),Ir=g(s),da=i(s,"P",{});var jf=p(da);Bp=r(jf,"This outputs the sequences with the mask filled, the confidence score, and the token id in the tokenizer vocabulary:"),jf.forEach(t),zr=g(s),k(ut.$$.fragment,s),Mr=g(s),_a=i(s,"P",{});var kf=p(_a);Hp=r(kf,"Here is an example of doing masked language modeling using a model and a tokenizer. The process is the following:"),kf.forEach(t),Lr=g(s),R=i(s,"OL",{});var ps=p(R);jn=i(ps,"LI",{});var wf=p(jn);Gp=r(wf,`Instantiate a tokenizer and a model from the checkpoint name. The model is identified as a DistilBERT model and
loads it with the weights stored in the checkpoint.`),wf.forEach(t),Up=g(ps),mt=i(ps,"LI",{});var ni=p(mt);Yp=r(ni,"Define a sequence with a masked token, placing the "),kn=i(ni,"CODE",{});var xf=p(kn);Wp=r(xf,"tokenizer.mask_token"),xf.forEach(t),Qp=r(ni," instead of a word."),ni.forEach(t),Xp=g(ps),wn=i(ps,"LI",{});var bf=p(wn);Vp=r(bf,"Encode that sequence into a list of IDs and find the position of the masked token in that list."),bf.forEach(t),Jp=g(ps),xn=i(ps,"LI",{});var yf=p(xn);Kp=r(yf,`Retrieve the predictions at the index of the mask token: this tensor has the same size as the vocabulary, and the
values are the scores attributed to each token. The model gives higher score to tokens it deems probable in that
context.`),yf.forEach(t),Zp=g(ps),Ss=i(ps,"LI",{});var Ha=p(Ss);sc=r(Ha,"Retrieve the top 5 tokens using the PyTorch "),bn=i(Ha,"CODE",{});var $f=p(bn);ec=r($f,"topk"),$f.forEach(t),tc=r(Ha," or TensorFlow "),yn=i(Ha,"CODE",{});var vf=p(yn);ac=r(vf,"top_k"),vf.forEach(t),nc=r(Ha," methods."),Ha.forEach(t),oc=g(ps),$n=i(ps,"LI",{});var qf=p($n);rc=r(qf,"Replace the mask token by the tokens and print the results"),qf.forEach(t),ps.forEach(t),Pr=g(s),k(ce.$$.fragment,s),Fr=g(s),ja=i(s,"P",{});var Ef=p(ja);lc=r(Ef,"This prints five sequences, with the top 5 tokens predicted by the model."),Ef.forEach(t),Nr=g(s),Ds=i(s,"H3",{class:!0});var oi=p(Ds);he=i(oi,"A",{id:!0,class:!0,href:!0});var Tf=p(he);vn=i(Tf,"SPAN",{});var Af=p(vn);k(gt.$$.fragment,Af),Af.forEach(t),Tf.forEach(t),ic=g(oi),qn=i(oi,"SPAN",{});var If=p(qn);pc=r(If,"Causal Language Modeling"),If.forEach(t),oi.forEach(t),Cr=g(s),ue=i(s,"P",{});var ri=p(ue);cc=r(ri,`Causal language modeling is the task of predicting the token following a sequence of tokens. In this situation, the
model only attends to the left context (tokens on the left of the mask). Such a training is particularly interesting
for generation tasks. If you would like to fine-tune a model on a causal language modeling task, you may leverage the
`),ft=i(ri,"A",{href:!0,rel:!0});var zf=p(ft);hc=r(zf,"run_clm.py"),zf.forEach(t),uc=r(ri," script."),ri.forEach(t),Sr=g(s),ka=i(s,"P",{});var Mf=p(ka);mc=r(Mf,`Usually, the next token is predicted by sampling from the logits of the last hidden state the model produces from the
input sequence.`),Mf.forEach(t),Dr=g(s),k(me.$$.fragment,s),Or=g(s),bs=i(s,"P",{});var Ga=p(bs);gc=r(Ga,"This outputs a (hopefully) coherent next token following the original sequence, which in our case is the word "),En=i(Ga,"EM",{});var Lf=p(En);fc=r(Lf,"is"),Lf.forEach(t),dc=r(Ga,` or
`),Tn=i(Ga,"EM",{});var Pf=p(Tn);_c=r(Pf,"features"),Pf.forEach(t),jc=r(Ga,"."),Ga.forEach(t),Rr=g(s),ge=i(s,"P",{});var li=p(ge);kc=r(li,"In the next section, we show how "),wa=i(li,"A",{href:!0});var Ff=p(wa);wc=r(Ff,"generation_utils.GenerationMixin.generate()"),Ff.forEach(t),xc=r(li,` can be used to
generate multiple tokens up to a specified length instead of one token at a time.`),li.forEach(t),Br=g(s),Os=i(s,"H3",{class:!0});var ii=p(Os);fe=i(ii,"A",{id:!0,class:!0,href:!0});var Nf=p(fe);An=i(Nf,"SPAN",{});var Cf=p(An);k(dt.$$.fragment,Cf),Cf.forEach(t),Nf.forEach(t),bc=g(ii),In=i(ii,"SPAN",{});var Sf=p(In);yc=r(Sf,"Text Generation"),Sf.forEach(t),ii.forEach(t),Hr=g(s),B=i(s,"P",{});var cs=p(B);$c=r(cs,"In text generation ("),zn=i(cs,"EM",{});var Df=p(zn);vc=r(Df,"a.k.a"),Df.forEach(t),qc=g(cs),Mn=i(cs,"EM",{});var Of=p(Mn);Ec=r(Of,"open-ended text generation"),Of.forEach(t),Tc=r(cs,`) the goal is to create a coherent portion of text that is a
continuation from the given context. The following example shows how `),Ln=i(cs,"EM",{});var Rf=p(Ln);Ac=r(Rf,"GPT-2"),Rf.forEach(t),Ic=r(cs,` can be used in pipelines to generate text.
As a default all models apply `),Pn=i(cs,"EM",{});var Bf=p(Pn);zc=r(Bf,"Top-K"),Bf.forEach(t),Mc=r(cs,` sampling when used in pipelines, as configured in their respective configurations
(see `),_t=i(cs,"A",{href:!0,rel:!0});var Hf=p(_t);Lc=r(Hf,"gpt-2 config"),Hf.forEach(t),Pc=r(cs," for example)."),cs.forEach(t),Gr=g(s),k(de.$$.fragment,s),Ur=g(s),L=i(s,"P",{});var N=p(L);Fc=r(N,"Text generation is currently possible with "),Fn=i(N,"EM",{});var Gf=p(Fn);Nc=r(Gf,"GPT-2"),Gf.forEach(t),Cc=r(N,", "),Nn=i(N,"EM",{});var Uf=p(Nn);Sc=r(Uf,"OpenAi-GPT"),Uf.forEach(t),Dc=r(N,", "),Cn=i(N,"EM",{});var Yf=p(Cn);Oc=r(Yf,"CTRL"),Yf.forEach(t),Rc=r(N,", "),Sn=i(N,"EM",{});var Wf=p(Sn);Bc=r(Wf,"XLNet"),Wf.forEach(t),Hc=r(N,", "),Dn=i(N,"EM",{});var Qf=p(Dn);Gc=r(Qf,"Transfo-XL"),Qf.forEach(t),Uc=r(N," and "),On=i(N,"EM",{});var Xf=p(On);Yc=r(Xf,"Reformer"),Xf.forEach(t),Wc=r(N,` in
PyTorch and for most models in Tensorflow as well. As can be seen in the example above `),Rn=i(N,"EM",{});var Vf=p(Rn);Qc=r(Vf,"XLNet"),Vf.forEach(t),Xc=r(N," and "),Bn=i(N,"EM",{});var Jf=p(Bn);Vc=r(Jf,"Transfo-XL"),Jf.forEach(t),Jc=r(N,` often
need to be padded to work well. GPT-2 is usually a good choice for `),Hn=i(N,"EM",{});var Kf=p(Hn);Kc=r(Kf,"open-ended text generation"),Kf.forEach(t),Zc=r(N,` because it was trained
on millions of webpages with a causal language modeling objective.`),N.forEach(t),Yr=g(s),_e=i(s,"P",{});var pi=p(_e);sh=r(pi,`For more information on how to apply different decoding strategies for text generation, please also refer to our text
generation blog post `),jt=i(pi,"A",{href:!0,rel:!0});var Zf=p(jt);eh=r(Zf,"here"),Zf.forEach(t),th=r(pi,"."),pi.forEach(t),Wr=g(s),Rs=i(s,"H2",{class:!0});var ci=p(Rs);je=i(ci,"A",{id:!0,class:!0,href:!0});var sd=p(je);Gn=i(sd,"SPAN",{});var ed=p(Gn);k(kt.$$.fragment,ed),ed.forEach(t),sd.forEach(t),ah=g(ci),Un=i(ci,"SPAN",{});var td=p(Un);nh=r(td,"Named Entity Recognition"),td.forEach(t),ci.forEach(t),Qr=g(s),ke=i(s,"P",{});var hi=p(ke);oh=r(hi,`Named Entity Recognition (NER) is the task of classifying tokens according to a class, for example, identifying a token
as a person, an organisation or a location. An example of a named entity recognition dataset is the CoNLL-2003 dataset,
which is entirely based on that task. If you would like to fine-tune a model on an NER task, you may leverage the
`),wt=i(hi,"A",{href:!0,rel:!0});var ad=p(wt);rh=r(ad,"run_ner.py"),ad.forEach(t),lh=r(hi," script."),hi.forEach(t),Xr=g(s),xa=i(s,"P",{});var nd=p(xa);ih=r(nd,`Here is an example of using pipelines to do named entity recognition, specifically, trying to identify tokens as
belonging to one of 9 classes:`),nd.forEach(t),Vr=g(s),P=i(s,"UL",{});var O=p(P);Yn=i(O,"LI",{});var od=p(Yn);ph=r(od,"O, Outside of a named entity"),od.forEach(t),ch=g(O),Wn=i(O,"LI",{});var rd=p(Wn);hh=r(rd,"B-MIS, Beginning of a miscellaneous entity right after another miscellaneous entity"),rd.forEach(t),uh=g(O),Qn=i(O,"LI",{});var ld=p(Qn);mh=r(ld,"I-MIS, Miscellaneous entity"),ld.forEach(t),gh=g(O),Xn=i(O,"LI",{});var id=p(Xn);fh=r(id,"B-PER, Beginning of a person\u2019s name right after another person\u2019s name"),id.forEach(t),dh=g(O),Vn=i(O,"LI",{});var pd=p(Vn);_h=r(pd,"I-PER, Person\u2019s name"),pd.forEach(t),jh=g(O),Jn=i(O,"LI",{});var cd=p(Jn);kh=r(cd,"B-ORG, Beginning of an organisation right after another organisation"),cd.forEach(t),wh=g(O),Kn=i(O,"LI",{});var hd=p(Kn);xh=r(hd,"I-ORG, Organisation"),hd.forEach(t),bh=g(O),Zn=i(O,"LI",{});var ud=p(Zn);yh=r(ud,"B-LOC, Beginning of a location right after another location"),ud.forEach(t),$h=g(O),so=i(O,"LI",{});var md=p(so);vh=r(md,"I-LOC, Location"),md.forEach(t),O.forEach(t),Jr=g(s),ys=i(s,"P",{});var Ua=p(ys);qh=r(Ua,"It leverages a fine-tuned model on CoNLL-2003, fine-tuned by "),xt=i(Ua,"A",{href:!0,rel:!0});var gd=p(xt);Eh=r(gd,"@stefan-it"),gd.forEach(t),Th=r(Ua," from "),bt=i(Ua,"A",{href:!0,rel:!0});var fd=p(bt);Ah=r(fd,"dbmdz"),fd.forEach(t),Ih=r(Ua,"."),Ua.forEach(t),Kr=g(s),k(yt.$$.fragment,s),Zr=g(s),ba=i(s,"P",{});var dd=p(ba);zh=r(dd,`This outputs a list of all words that have been identified as one of the entities from the 9 classes defined above.
Here are the expected results:`),dd.forEach(t),sl=g(s),k($t.$$.fragment,s),el=g(s),ya=i(s,"P",{});var _d=p(ya);Mh=r(_d,`Note how the tokens of the sequence \u201CHugging Face\u201D have been identified as an organisation, and \u201CNew York City\u201D,
\u201CDUMBO\u201D and \u201CManhattan Bridge\u201D have been identified as locations.`),_d.forEach(t),tl=g(s),$a=i(s,"P",{});var jd=p($a);Lh=r(jd,"Here is an example of doing named entity recognition, using a model and a tokenizer. The process is the following:"),jd.forEach(t),al=g(s),H=i(s,"OL",{});var hs=p(H);eo=i(hs,"LI",{});var kd=p(eo);Ph=r(kd,`Instantiate a tokenizer and a model from the checkpoint name. The model is identified as a BERT model and loads it
with the weights stored in the checkpoint.`),kd.forEach(t),Fh=g(hs),to=i(hs,"LI",{});var wd=p(to);Nh=r(wd,"Define a sequence with known entities, such as \u201CHugging Face\u201D as an organisation and \u201CNew York City\u201D as a location."),wd.forEach(t),Ch=g(hs),ao=i(hs,"LI",{});var xd=p(ao);Sh=r(xd,`Split words into tokens so that they can be mapped to predictions. We use a small hack by, first, completely
encoding and decoding the sequence, so that we\u2019re left with a string that contains the special tokens.`),xd.forEach(t),Dh=g(hs),no=i(hs,"LI",{});var bd=p(no);Oh=r(bd,"Encode that sequence into IDs (special tokens are added automatically)."),bd.forEach(t),Rh=g(hs),oo=i(hs,"LI",{});var yd=p(oo);Bh=r(yd,`Retrieve the predictions by passing the input to the model and getting the first output. This results in a
distribution over the 9 possible classes for each token. We take the argmax to retrieve the most likely class for
each token.`),yd.forEach(t),Hh=g(hs),ro=i(hs,"LI",{});var $d=p(ro);Gh=r($d,"Zip together each token with its prediction and print it."),$d.forEach(t),hs.forEach(t),nl=g(s),k(we.$$.fragment,s),ol=g(s),va=i(s,"P",{});var vd=p(va);Uh=r(vd,`This outputs a list of each token mapped to its corresponding prediction. Differently from the pipeline, here every
token has a prediction as we didn\u2019t remove the \u201C0\u201Dth class, which means that no particular entity was found on that
token.`),vd.forEach(t),rl=g(s),$s=i(s,"P",{});var Ya=p($s);Yh=r(Ya,"In the above example, "),lo=i(Ya,"CODE",{});var qd=p(lo);Wh=r(qd,"predictions"),qd.forEach(t),Qh=r(Ya,` is an integer that corresponds to the predicted class. We can use the
`),io=i(Ya,"CODE",{});var Ed=p(io);Xh=r(Ed,"model.config.id2label"),Ed.forEach(t),Vh=r(Ya,` property in order to recover the class name corresponding to the class number, which is
illustrated below:`),Ya.forEach(t),ll=g(s),k(vt.$$.fragment,s),il=g(s),Bs=i(s,"H2",{class:!0});var ui=p(Bs);xe=i(ui,"A",{id:!0,class:!0,href:!0});var Td=p(xe);po=i(Td,"SPAN",{});var Ad=p(po);k(qt.$$.fragment,Ad),Ad.forEach(t),Td.forEach(t),Jh=g(ui),co=i(ui,"SPAN",{});var Id=p(co);Kh=r(Id,"Summarization"),Id.forEach(t),ui.forEach(t),pl=g(s),be=i(s,"P",{});var mi=p(be);Zh=r(mi,`Summarization is the task of summarizing a document or an article into a shorter text. If you would like to fine-tune a
model on a summarization task, you may leverage the `),Et=i(mi,"A",{href:!0,rel:!0});var zd=p(Et);su=r(zd,"run_summarization.py"),zd.forEach(t),eu=r(mi,`
script.`),mi.forEach(t),cl=g(s),ye=i(s,"P",{});var gi=p(ye);tu=r(gi,`An example of a summarization dataset is the CNN / Daily Mail dataset, which consists of long news articles and was
created for the task of summarization. If you would like to fine-tune a model on a summarization task, various
approaches are described in this `),Tt=i(gi,"A",{href:!0,rel:!0});var Md=p(Tt);au=r(Md,"document"),Md.forEach(t),nu=r(gi,"."),gi.forEach(t),hl=g(s),qa=i(s,"P",{});var Ld=p(qa);ou=r(Ld,`Here is an example of using the pipelines to do summarization. It leverages a Bart model that was fine-tuned on the CNN
/ Daily Mail data set.`),Ld.forEach(t),ul=g(s),k(At.$$.fragment,s),ml=g(s),Q=i(s,"P",{});var Es=p(Q);ru=r(Es,"Because the summarization pipeline depends on the "),ho=i(Es,"CODE",{});var Pd=p(ho);lu=r(Pd,"PreTrainedModel.generate()"),Pd.forEach(t),iu=r(Es,` method, we can override the default
arguments of `),uo=i(Es,"CODE",{});var Fd=p(uo);pu=r(Fd,"PreTrainedModel.generate()"),Fd.forEach(t),cu=r(Es," directly in the pipeline for "),mo=i(Es,"CODE",{});var Nd=p(mo);hu=r(Nd,"max_length"),Nd.forEach(t),uu=r(Es," and "),go=i(Es,"CODE",{});var Cd=p(go);mu=r(Cd,"min_length"),Cd.forEach(t),gu=r(Es,` as shown
below. This outputs the following summary:`),Es.forEach(t),gl=g(s),k(It.$$.fragment,s),fl=g(s),Ea=i(s,"P",{});var Sd=p(Ea);fu=r(Sd,"Here is an example of doing summarization using a model and a tokenizer. The process is the following:"),Sd.forEach(t),dl=g(s),es=i(s,"OL",{});var Se=p(es);Hs=i(Se,"LI",{});var Wa=p(Hs);du=r(Wa,`Instantiate a tokenizer and a model from the checkpoint name. Summarization is usually done using an encoder-decoder
model, such as `),fo=i(Wa,"CODE",{});var Dd=p(fo);_u=r(Dd,"Bart"),Dd.forEach(t),ju=r(Wa," or "),_o=i(Wa,"CODE",{});var Od=p(_o);ku=r(Od,"T5"),Od.forEach(t),wu=r(Wa,"."),Wa.forEach(t),xu=g(Se),jo=i(Se,"LI",{});var Rd=p(jo);bu=r(Rd,"Define the article that should be summarized."),Rd.forEach(t),yu=g(Se),ko=i(Se,"LI",{});var Bd=p(ko);$u=r(Bd,"Add the T5 specific prefix \u201Csummarize: \u201C."),Bd.forEach(t),vu=g(Se),zt=i(Se,"LI",{});var fi=p(zt);qu=r(fi,"Use the "),wo=i(fi,"CODE",{});var Hd=p(wo);Eu=r(Hd,"PreTrainedModel.generate()"),Hd.forEach(t),Tu=r(fi," method to generate the summary."),fi.forEach(t),Se.forEach(t),_l=g(s),Ta=i(s,"P",{});var Gd=p(Ta);Au=r(Gd,`In this example we use Google\u2019s T5 model. Even though it was pre-trained only on a multi-task mixed dataset (including
CNN / Daily Mail), it yields very good results.`),Gd.forEach(t),jl=g(s),k($e.$$.fragment,s),kl=g(s),Gs=i(s,"H2",{class:!0});var di=p(Gs);ve=i(di,"A",{id:!0,class:!0,href:!0});var Ud=p(ve);xo=i(Ud,"SPAN",{});var Yd=p(xo);k(Mt.$$.fragment,Yd),Yd.forEach(t),Ud.forEach(t),Iu=g(di),bo=i(di,"SPAN",{});var Wd=p(bo);zu=r(Wd,"Translation"),Wd.forEach(t),di.forEach(t),wl=g(s),qe=i(s,"P",{});var _i=p(qe);Mu=r(_i,`Translation is the task of translating a text from one language to another. If you would like to fine-tune a model on a
translation task, you may leverage the `),Lt=i(_i,"A",{href:!0,rel:!0});var Qd=p(Lt);Lu=r(Qd,"run_translation.py"),Qd.forEach(t),Pu=r(_i," script."),_i.forEach(t),xl=g(s),Ee=i(s,"P",{});var ji=p(Ee);Fu=r(ji,`An example of a translation dataset is the WMT English to German dataset, which has sentences in English as the input
data and the corresponding sentences in German as the target data. If you would like to fine-tune a model on a
translation task, various approaches are described in this `),Pt=i(ji,"A",{href:!0,rel:!0});var Xd=p(Pt);Nu=r(Xd,"document"),Xd.forEach(t),Cu=r(ji,"."),ji.forEach(t),bl=g(s),Aa=i(s,"P",{});var Vd=p(Aa);Su=r(Vd,`Here is an example of using the pipelines to do translation. It leverages a T5 model that was only pre-trained on a
multi-task mixture dataset (including WMT), yet, yielding impressive translation results.`),Vd.forEach(t),yl=g(s),k(Ft.$$.fragment,s),$l=g(s),ts=i(s,"P",{});var De=p(ts);Du=r(De,"Because the translation pipeline depends on the "),yo=i(De,"CODE",{});var Jd=p(yo);Ou=r(Jd,"PreTrainedModel.generate()"),Jd.forEach(t),Ru=r(De,` method, we can override the default
arguments of `),$o=i(De,"CODE",{});var Kd=p($o);Bu=r(Kd,"PreTrainedModel.generate()"),Kd.forEach(t),Hu=r(De," directly in the pipeline as is shown for "),vo=i(De,"CODE",{});var Zd=p(vo);Gu=r(Zd,"max_length"),Zd.forEach(t),Uu=r(De," above."),De.forEach(t),vl=g(s),Ia=i(s,"P",{});var s_=p(Ia);Yu=r(s_,"Here is an example of doing translation using a model and a tokenizer. The process is the following:"),s_.forEach(t),ql=g(s),as=i(s,"OL",{});var Oe=p(as);Us=i(Oe,"LI",{});var Qa=p(Us);Wu=r(Qa,`Instantiate a tokenizer and a model from the checkpoint name. Summarization is usually done using an encoder-decoder
model, such as `),qo=i(Qa,"CODE",{});var e_=p(qo);Qu=r(e_,"Bart"),e_.forEach(t),Xu=r(Qa," or "),Eo=i(Qa,"CODE",{});var t_=p(Eo);Vu=r(t_,"T5"),t_.forEach(t),Ju=r(Qa,"."),Qa.forEach(t),Ku=g(Oe),To=i(Oe,"LI",{});var a_=p(To);Zu=r(a_,"Define the article that should be summarized."),a_.forEach(t),sm=g(Oe),Ao=i(Oe,"LI",{});var n_=p(Ao);em=r(n_,"Add the T5 specific prefix \u201Ctranslate English to German: \u201D"),n_.forEach(t),tm=g(Oe),Nt=i(Oe,"LI",{});var ki=p(Nt);am=r(ki,"Use the "),Io=i(ki,"CODE",{});var o_=p(Io);nm=r(o_,"PreTrainedModel.generate()"),o_.forEach(t),om=r(ki," method to perform the translation."),ki.forEach(t),Oe.forEach(t),El=g(s),k(Te.$$.fragment,s),Tl=g(s),za=i(s,"P",{});var r_=p(za);rm=r(r_,"We get the same translation as with the pipeline example."),r_.forEach(t),Al=g(s),Ys=i(s,"H2",{class:!0});var wi=p(Ys);Ae=i(wi,"A",{id:!0,class:!0,href:!0});var l_=p(Ae);zo=i(l_,"SPAN",{});var i_=p(zo);k(Ct.$$.fragment,i_),i_.forEach(t),l_.forEach(t),lm=g(wi),Mo=i(wi,"SPAN",{});var p_=p(Mo);im=r(p_,"Audio classification"),p_.forEach(t),wi.forEach(t),Il=g(s),ns=i(s,"P",{});var Re=p(ns);pm=r(Re,"Audio classification assigns a class to an audio signal. The Keyword Spotting dataset from the "),St=i(Re,"A",{href:!0,rel:!0});var c_=p(St);cm=r(c_,"SUPERB"),c_.forEach(t),hm=r(Re," benchmark is an example dataset that can be used for audio classification fine-tuning. This dataset contains ten classes of keywords for classification. If you\u2019d like to fine-tune a model for audio classification, take a look at the "),Dt=i(Re,"A",{href:!0,rel:!0});var h_=p(Dt);um=r(h_,"run_audio_classification.py"),h_.forEach(t),mm=r(Re," script or this "),Ma=i(Re,"A",{href:!0});var u_=p(Ma);gm=r(u_,"how-to guide"),u_.forEach(t),fm=r(Re,"."),Re.forEach(t),zl=g(s),Ie=i(s,"P",{});var xi=p(Ie);dm=r(xi,"The following examples demonstrate how to use a "),La=i(xi,"A",{href:!0});var m_=p(La);_m=r(m_,"pipeline()"),m_.forEach(t),jm=r(xi," and a model and tokenizer for audio classification inference:"),xi.forEach(t),Ml=g(s),k(Ot.$$.fragment,s),Ll=g(s),Pa=i(s,"P",{});var g_=p(Pa);km=r(g_,"The general process for using a model and feature extractor for audio classification is:"),g_.forEach(t),Pl=g(s),os=i(s,"OL",{});var Be=p(os);Lo=i(Be,"LI",{});var f_=p(Lo);wm=r(f_,"Instantiate a feature extractor and a model from the checkpoint name."),f_.forEach(t),xm=g(Be),Po=i(Be,"LI",{});var d_=p(Po);bm=r(d_,"Process the audio signal to be classified with a feature extractor."),d_.forEach(t),ym=g(Be),Rt=i(Be,"LI",{});var bi=p(Rt);$m=r(bi,"Pass the input through the model and take the "),Fo=i(bi,"CODE",{});var __=p(Fo);vm=r(__,"argmax"),__.forEach(t),qm=r(bi," to retrieve the most likely class."),bi.forEach(t),Em=g(Be),Bt=i(Be,"LI",{});var yi=p(Bt);Tm=r(yi,"Convert the class id to a class name with "),No=i(yi,"CODE",{});var j_=p(No);Am=r(j_,"id2label"),j_.forEach(t),Im=r(yi," to return an interpretable result."),yi.forEach(t),Be.forEach(t),Fl=g(s),k(ze.$$.fragment,s),Nl=g(s),Ws=i(s,"H2",{class:!0});var $i=p(Ws);Me=i($i,"A",{id:!0,class:!0,href:!0});var k_=p(Me);Co=i(k_,"SPAN",{});var w_=p(Co);k(Ht.$$.fragment,w_),w_.forEach(t),k_.forEach(t),zm=g($i),So=i($i,"SPAN",{});var x_=p(So);Mm=r(x_,"Automatic speech recognition"),x_.forEach(t),$i.forEach(t),Cl=g(s),X=i(s,"P",{});var Ts=p(X);Lm=r(Ts,"Automatic speech recognition transcribes an audio signal to text. The "),Gt=i(Ts,"A",{href:!0,rel:!0});var b_=p(Gt);Pm=r(b_,"Common Voice"),b_.forEach(t),Fm=r(Ts," dataset is an example dataset that can be used for automatic speech recognition fine-tuning. It contains an audio file of a speaker and the corresponding sentence. If you\u2019d like to fine-tune a model for automatic speech recognition, take a look at the "),Ut=i(Ts,"A",{href:!0,rel:!0});var y_=p(Ut);Nm=r(y_,"run_speech_recognition_ctc.py"),y_.forEach(t),Cm=r(Ts," or "),Yt=i(Ts,"A",{href:!0,rel:!0});var $_=p(Yt);Sm=r($_,"run_speech_recognition_seq2seq.py"),$_.forEach(t),Dm=r(Ts," scripts or this "),Fa=i(Ts,"A",{href:!0});var v_=p(Fa);Om=r(v_,"how-to guide"),v_.forEach(t),Rm=r(Ts,"."),Ts.forEach(t),Sl=g(s),Le=i(s,"P",{});var vi=p(Le);Bm=r(vi,"The following examples demonstrate how to use a "),Na=i(vi,"A",{href:!0});var q_=p(Na);Hm=r(q_,"pipeline()"),q_.forEach(t),Gm=r(vi," and a model and tokenizer for automatic speech recognition inference:"),vi.forEach(t),Dl=g(s),k(Wt.$$.fragment,s),Ol=g(s),Ca=i(s,"P",{});var E_=p(Ca);Um=r(E_,"The general process for using a model and processor for automatic speech recognition is:"),E_.forEach(t),Rl=g(s),rs=i(s,"OL",{});var He=p(rs);Do=i(He,"LI",{});var T_=p(Do);Ym=r(T_,"Instantiate a processor (which regroups a feature extractor for input processing and a tokenizer for decoding) and a model from the checkpoint name."),T_.forEach(t),Wm=g(He),Oo=i(He,"LI",{});var A_=p(Oo);Qm=r(A_,"Process the audio signal and text with a processor."),A_.forEach(t),Xm=g(He),Qt=i(He,"LI",{});var qi=p(Qt);Vm=r(qi,"Pass the input through the model and take the "),Ro=i(qi,"CODE",{});var I_=p(Ro);Jm=r(I_,"argmax"),I_.forEach(t),Km=r(qi," to retrieve the predicted text."),qi.forEach(t),Zm=g(He),Bo=i(He,"LI",{});var z_=p(Bo);sg=r(z_,"Decode the text with a tokenizer to obtain the transcription."),z_.forEach(t),He.forEach(t),Bl=g(s),k(Pe.$$.fragment,s),Hl=g(s),Qs=i(s,"H2",{class:!0});var Ei=p(Qs);Fe=i(Ei,"A",{id:!0,class:!0,href:!0});var M_=p(Fe);Ho=i(M_,"SPAN",{});var L_=p(Ho);k(Xt.$$.fragment,L_),L_.forEach(t),M_.forEach(t),eg=g(Ei),Go=i(Ei,"SPAN",{});var P_=p(Go);tg=r(P_,"Image classification"),P_.forEach(t),Ei.forEach(t),Gl=g(s),ls=i(s,"P",{});var Ge=p(ls);ag=r(Ge,"Like text and audio classification, image classification assigns a class to an image. The "),Vt=i(Ge,"A",{href:!0,rel:!0});var F_=p(Vt);ng=r(F_,"CIFAR-100"),F_.forEach(t),og=r(Ge," dataset is an example dataset that can be used for image classification fine-tuning. It contains an image and the corresponding class. If you\u2019d like to fine-tune a model for image classification, take a look at the "),Jt=i(Ge,"A",{href:!0,rel:!0});var N_=p(Jt);rg=r(N_,"run_image_classification.py"),N_.forEach(t),lg=r(Ge," script or this "),Sa=i(Ge,"A",{href:!0});var C_=p(Sa);ig=r(C_,"how-to guide"),C_.forEach(t),pg=r(Ge,"."),Ge.forEach(t),Ul=g(s),Ne=i(s,"P",{});var Ti=p(Ne);cg=r(Ti,"The following examples demonstrate how to use a "),Da=i(Ti,"A",{href:!0});var S_=p(Da);hg=r(S_,"pipeline()"),S_.forEach(t),ug=r(Ti," and a model and tokenizer for image classification inference:"),Ti.forEach(t),Yl=g(s),k(Kt.$$.fragment,s),Wl=g(s),Oa=i(s,"P",{});var D_=p(Oa);mg=r(D_,"The general process for using a model and feature extractor for image classification is:"),D_.forEach(t),Ql=g(s),is=i(s,"OL",{});var Ue=p(is);Uo=i(Ue,"LI",{});var O_=p(Uo);gg=r(O_,"Instantiate a feature extractor and a model from the checkpoint name."),O_.forEach(t),fg=g(Ue),Yo=i(Ue,"LI",{});var R_=p(Yo);dg=r(R_,"Process the image to be classified with a feature extractor."),R_.forEach(t),_g=g(Ue),Zt=i(Ue,"LI",{});var Ai=p(Zt);jg=r(Ai,"Pass the input through the model and take the "),Wo=i(Ai,"CODE",{});var B_=p(Wo);kg=r(B_,"argmax"),B_.forEach(t),wg=r(Ai," to retrieve the predicted class."),Ai.forEach(t),xg=g(Ue),sa=i(Ue,"LI",{});var Ii=p(sa);bg=r(Ii,"Convert the class id to a class name with "),Qo=i(Ii,"CODE",{});var H_=p(Qo);yg=r(H_,"id2label"),H_.forEach(t),$g=r(Ii," to return an interpretable result."),Ii.forEach(t),Ue.forEach(t),Xl=g(s),k(Ce.$$.fragment,s),this.h()},h(){d(n,"name","hf:doc:metadata"),d(n,"content",JSON.stringify(Cj)),d(f,"id","summary-of-the-tasks"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#summary-of-the-tasks"),d(a,"class","relative group"),d(fs,"href","/docs/transformers/pr_16682/en/model_doc/auto#transformers.AutoModel"),d(ss,"href","https://github.com/huggingface/transformers/tree/main/examples"),d(ss,"rel","nofollow"),d(js,"href","https://github.com/huggingface/transformers/tree/main/examples"),d(js,"rel","nofollow"),d(ae,"id","sequence-classification"),d(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ae,"href","#sequence-classification"),d(Ps,"class","relative group"),d(Ve,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/text-classification/run_glue.py"),d(Ve,"rel","nofollow"),d(Je,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/text-classification/run_tf_glue.py"),d(Je,"rel","nofollow"),d(Ke,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/text-classification/run_tf_text_classification.py"),d(Ke,"rel","nofollow"),d(Ze,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/text-classification/run_xnli.py"),d(Ze,"rel","nofollow"),d(oe,"id","extractive-question-answering"),d(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(oe,"href","#extractive-question-answering"),d(Fs,"class","relative group"),d(tt,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/question-answering/run_qa.py"),d(tt,"rel","nofollow"),d(at,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/question-answering/run_tf_squad.py"),d(at,"rel","nofollow"),d(le,"id","language-modeling"),d(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(le,"href","#language-modeling"),d(Ns,"class","relative group"),d(lt,"href","https://huggingface.co/lysandre/arxiv-nlp"),d(lt,"rel","nofollow"),d(pe,"id","masked-language-modeling"),d(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(pe,"href","#masked-language-modeling"),d(Cs,"class","relative group"),d(pt,"href","https://arxiv.org/abs/1910.13461"),d(pt,"rel","nofollow"),d(ct,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/language-modeling/run_mlm.py"),d(ct,"rel","nofollow"),d(he,"id","causal-language-modeling"),d(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(he,"href","#causal-language-modeling"),d(Ds,"class","relative group"),d(ft,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/language-modeling/run_clm.py"),d(ft,"rel","nofollow"),d(wa,"href","/docs/transformers/pr_16682/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),d(fe,"id","text-generation"),d(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(fe,"href","#text-generation"),d(Os,"class","relative group"),d(_t,"href","https://huggingface.co/gpt2/blob/main/config.json"),d(_t,"rel","nofollow"),d(jt,"href","https://huggingface.co/blog/how-to-generate"),d(jt,"rel","nofollow"),d(je,"id","named-entity-recognition"),d(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(je,"href","#named-entity-recognition"),d(Rs,"class","relative group"),d(wt,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/token-classification/run_ner.py"),d(wt,"rel","nofollow"),d(xt,"href","https://github.com/stefan-it"),d(xt,"rel","nofollow"),d(bt,"href","https://github.com/dbmdz"),d(bt,"rel","nofollow"),d(xe,"id","summarization"),d(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(xe,"href","#summarization"),d(Bs,"class","relative group"),d(Et,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization/run_summarization.py"),d(Et,"rel","nofollow"),d(Tt,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization/README.md"),d(Tt,"rel","nofollow"),d(ve,"id","translation"),d(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ve,"href","#translation"),d(Gs,"class","relative group"),d(Lt,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/translation/run_translation.py"),d(Lt,"rel","nofollow"),d(Pt,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/translation/README.md"),d(Pt,"rel","nofollow"),d(Ae,"id","audio-classification"),d(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ae,"href","#audio-classification"),d(Ys,"class","relative group"),d(St,"href","https://huggingface.co/datasets/superb"),d(St,"rel","nofollow"),d(Dt,"href","https://github.com/huggingface/transformers/blob/main/examples/pytorch/audio-classification/run_audio_classification.py"),d(Dt,"rel","nofollow"),d(Ma,"href","./tasks/audio_classification"),d(La,"href","/docs/transformers/pr_16682/en/main_classes/pipelines#transformers.pipeline"),d(Me,"id","automatic-speech-recognition"),d(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Me,"href","#automatic-speech-recognition"),d(Ws,"class","relative group"),d(Gt,"href","https://huggingface.co/datasets/common_voice"),d(Gt,"rel","nofollow"),d(Ut,"href","https://github.com/huggingface/transformers/blob/main/examples/pytorch/speech-recognition/run_speech_recognition_ctc.py"),d(Ut,"rel","nofollow"),d(Yt,"href","https://github.com/huggingface/transformers/blob/main/examples/pytorch/speech-recognition/run_speech_recognition_seq2seq.py"),d(Yt,"rel","nofollow"),d(Fa,"href","./tasks/asr"),d(Na,"href","/docs/transformers/pr_16682/en/main_classes/pipelines#transformers.pipeline"),d(Fe,"id","image-classification"),d(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Fe,"href","#image-classification"),d(Qs,"class","relative group"),d(Vt,"href","https://huggingface.co/datasets/cifar100"),d(Vt,"rel","nofollow"),d(Jt,"href","https://github.com/huggingface/transformers/blob/main/examples/pytorch/image-classification/run_image_classification.py"),d(Jt,"rel","nofollow"),d(Sa,"href","./tasks/image_classification"),d(Da,"href","/docs/transformers/pr_16682/en/main_classes/pipelines#transformers.pipeline")},m(s,c){e(document.head,n),h(s,u,c),h(s,a,c),e(a,f),e(f,_),w(E,_,null),e(a,A),e(a,z),e(z,v),h(s,I,c),w(F,s,c),h(s,Vs,c),h(s,gs,c),e(gs,As),h(s,Js,c),h(s,K,c),e(K,Is),e(K,fs),e(fs,Ye),e(K,Ks),h(s,G,c),h(s,ds,c),e(ds,zs),h(s,Zs,c),h(s,Z,c),e(Z,U),e(U,We),e(U,Ms),e(Ms,se),e(U,us),e(U,ss),e(ss,T),e(U,M),e(Z,na),e(Z,_s),e(_s,oa),e(_s,js),e(js,ra),e(_s,ks),h(s,Qe,c),h(s,Ls,c),e(Ls,zi),h(s,ar,c),h(s,ee,c),e(ee,Xa),e(Xa,Mi),e(ee,Li),e(ee,Va),e(Va,Pi),h(s,nr,c),h(s,la,c),e(la,Fi),h(s,or,c),w(te,s,c),h(s,rr,c),h(s,Ps,c),e(Ps,ae),e(ae,Ja),w(Xe,Ja,null),e(Ps,Ni),e(Ps,Ka),e(Ka,Ci),h(s,lr,c),h(s,Y,c),e(Y,Si),e(Y,Ve),e(Ve,Di),e(Y,Oi),e(Y,Je),e(Je,Ri),e(Y,Bi),e(Y,Ke),e(Ke,Hi),e(Y,Gi),e(Y,Ze),e(Ze,Ui),e(Y,Yi),h(s,ir,c),h(s,ia,c),e(ia,Wi),h(s,pr,c),h(s,pa,c),e(pa,Qi),h(s,cr,c),w(st,s,c),h(s,hr,c),h(s,ca,c),e(ca,Xi),h(s,ur,c),h(s,W,c),e(W,Za),e(Za,Vi),e(W,Ji),e(W,sn),e(sn,Ki),e(W,Zi),e(W,en),e(en,sp),e(W,ep),e(W,tn),e(tn,tp),e(W,ap),e(W,an),e(an,np),h(s,mr,c),w(ne,s,c),h(s,gr,c),h(s,Fs,c),e(Fs,oe),e(oe,nn),w(et,nn,null),e(Fs,op),e(Fs,on),e(on,rp),h(s,fr,c),h(s,ws,c),e(ws,lp),e(ws,tt),e(tt,ip),e(ws,pp),e(ws,at),e(at,cp),e(ws,hp),h(s,dr,c),h(s,ha,c),e(ha,up),h(s,_r,c),w(nt,s,c),h(s,jr,c),h(s,ua,c),e(ua,mp),h(s,kr,c),w(ot,s,c),h(s,wr,c),h(s,ma,c),e(ma,gp),h(s,xr,c),h(s,D,c),e(D,rn),e(rn,fp),e(D,dp),e(D,ln),e(ln,_p),e(D,jp),e(D,pn),e(pn,kp),e(D,wp),e(D,cn),e(cn,xp),e(D,bp),e(D,hn),e(hn,yp),e(D,$p),e(D,un),e(un,vp),e(D,qp),e(D,mn),e(mn,Ep),h(s,br,c),w(re,s,c),h(s,yr,c),h(s,Ns,c),e(Ns,le),e(le,gn),w(rt,gn,null),e(Ns,Tp),e(Ns,fn),e(fn,Ap),h(s,$r,c),h(s,ga,c),e(ga,Ip),h(s,vr,c),h(s,ie,c),e(ie,zp),e(ie,lt),e(lt,Mp),e(ie,Lp),h(s,qr,c),h(s,Cs,c),e(Cs,pe),e(pe,dn),w(it,dn,null),e(Cs,Pp),e(Cs,_n),e(_n,Fp),h(s,Er,c),h(s,xs,c),e(xs,Np),e(xs,pt),e(pt,Cp),e(xs,Sp),e(xs,ct),e(ct,Dp),e(xs,Op),h(s,Tr,c),h(s,fa,c),e(fa,Rp),h(s,Ar,c),w(ht,s,c),h(s,Ir,c),h(s,da,c),e(da,Bp),h(s,zr,c),w(ut,s,c),h(s,Mr,c),h(s,_a,c),e(_a,Hp),h(s,Lr,c),h(s,R,c),e(R,jn),e(jn,Gp),e(R,Up),e(R,mt),e(mt,Yp),e(mt,kn),e(kn,Wp),e(mt,Qp),e(R,Xp),e(R,wn),e(wn,Vp),e(R,Jp),e(R,xn),e(xn,Kp),e(R,Zp),e(R,Ss),e(Ss,sc),e(Ss,bn),e(bn,ec),e(Ss,tc),e(Ss,yn),e(yn,ac),e(Ss,nc),e(R,oc),e(R,$n),e($n,rc),h(s,Pr,c),w(ce,s,c),h(s,Fr,c),h(s,ja,c),e(ja,lc),h(s,Nr,c),h(s,Ds,c),e(Ds,he),e(he,vn),w(gt,vn,null),e(Ds,ic),e(Ds,qn),e(qn,pc),h(s,Cr,c),h(s,ue,c),e(ue,cc),e(ue,ft),e(ft,hc),e(ue,uc),h(s,Sr,c),h(s,ka,c),e(ka,mc),h(s,Dr,c),w(me,s,c),h(s,Or,c),h(s,bs,c),e(bs,gc),e(bs,En),e(En,fc),e(bs,dc),e(bs,Tn),e(Tn,_c),e(bs,jc),h(s,Rr,c),h(s,ge,c),e(ge,kc),e(ge,wa),e(wa,wc),e(ge,xc),h(s,Br,c),h(s,Os,c),e(Os,fe),e(fe,An),w(dt,An,null),e(Os,bc),e(Os,In),e(In,yc),h(s,Hr,c),h(s,B,c),e(B,$c),e(B,zn),e(zn,vc),e(B,qc),e(B,Mn),e(Mn,Ec),e(B,Tc),e(B,Ln),e(Ln,Ac),e(B,Ic),e(B,Pn),e(Pn,zc),e(B,Mc),e(B,_t),e(_t,Lc),e(B,Pc),h(s,Gr,c),w(de,s,c),h(s,Ur,c),h(s,L,c),e(L,Fc),e(L,Fn),e(Fn,Nc),e(L,Cc),e(L,Nn),e(Nn,Sc),e(L,Dc),e(L,Cn),e(Cn,Oc),e(L,Rc),e(L,Sn),e(Sn,Bc),e(L,Hc),e(L,Dn),e(Dn,Gc),e(L,Uc),e(L,On),e(On,Yc),e(L,Wc),e(L,Rn),e(Rn,Qc),e(L,Xc),e(L,Bn),e(Bn,Vc),e(L,Jc),e(L,Hn),e(Hn,Kc),e(L,Zc),h(s,Yr,c),h(s,_e,c),e(_e,sh),e(_e,jt),e(jt,eh),e(_e,th),h(s,Wr,c),h(s,Rs,c),e(Rs,je),e(je,Gn),w(kt,Gn,null),e(Rs,ah),e(Rs,Un),e(Un,nh),h(s,Qr,c),h(s,ke,c),e(ke,oh),e(ke,wt),e(wt,rh),e(ke,lh),h(s,Xr,c),h(s,xa,c),e(xa,ih),h(s,Vr,c),h(s,P,c),e(P,Yn),e(Yn,ph),e(P,ch),e(P,Wn),e(Wn,hh),e(P,uh),e(P,Qn),e(Qn,mh),e(P,gh),e(P,Xn),e(Xn,fh),e(P,dh),e(P,Vn),e(Vn,_h),e(P,jh),e(P,Jn),e(Jn,kh),e(P,wh),e(P,Kn),e(Kn,xh),e(P,bh),e(P,Zn),e(Zn,yh),e(P,$h),e(P,so),e(so,vh),h(s,Jr,c),h(s,ys,c),e(ys,qh),e(ys,xt),e(xt,Eh),e(ys,Th),e(ys,bt),e(bt,Ah),e(ys,Ih),h(s,Kr,c),w(yt,s,c),h(s,Zr,c),h(s,ba,c),e(ba,zh),h(s,sl,c),w($t,s,c),h(s,el,c),h(s,ya,c),e(ya,Mh),h(s,tl,c),h(s,$a,c),e($a,Lh),h(s,al,c),h(s,H,c),e(H,eo),e(eo,Ph),e(H,Fh),e(H,to),e(to,Nh),e(H,Ch),e(H,ao),e(ao,Sh),e(H,Dh),e(H,no),e(no,Oh),e(H,Rh),e(H,oo),e(oo,Bh),e(H,Hh),e(H,ro),e(ro,Gh),h(s,nl,c),w(we,s,c),h(s,ol,c),h(s,va,c),e(va,Uh),h(s,rl,c),h(s,$s,c),e($s,Yh),e($s,lo),e(lo,Wh),e($s,Qh),e($s,io),e(io,Xh),e($s,Vh),h(s,ll,c),w(vt,s,c),h(s,il,c),h(s,Bs,c),e(Bs,xe),e(xe,po),w(qt,po,null),e(Bs,Jh),e(Bs,co),e(co,Kh),h(s,pl,c),h(s,be,c),e(be,Zh),e(be,Et),e(Et,su),e(be,eu),h(s,cl,c),h(s,ye,c),e(ye,tu),e(ye,Tt),e(Tt,au),e(ye,nu),h(s,hl,c),h(s,qa,c),e(qa,ou),h(s,ul,c),w(At,s,c),h(s,ml,c),h(s,Q,c),e(Q,ru),e(Q,ho),e(ho,lu),e(Q,iu),e(Q,uo),e(uo,pu),e(Q,cu),e(Q,mo),e(mo,hu),e(Q,uu),e(Q,go),e(go,mu),e(Q,gu),h(s,gl,c),w(It,s,c),h(s,fl,c),h(s,Ea,c),e(Ea,fu),h(s,dl,c),h(s,es,c),e(es,Hs),e(Hs,du),e(Hs,fo),e(fo,_u),e(Hs,ju),e(Hs,_o),e(_o,ku),e(Hs,wu),e(es,xu),e(es,jo),e(jo,bu),e(es,yu),e(es,ko),e(ko,$u),e(es,vu),e(es,zt),e(zt,qu),e(zt,wo),e(wo,Eu),e(zt,Tu),h(s,_l,c),h(s,Ta,c),e(Ta,Au),h(s,jl,c),w($e,s,c),h(s,kl,c),h(s,Gs,c),e(Gs,ve),e(ve,xo),w(Mt,xo,null),e(Gs,Iu),e(Gs,bo),e(bo,zu),h(s,wl,c),h(s,qe,c),e(qe,Mu),e(qe,Lt),e(Lt,Lu),e(qe,Pu),h(s,xl,c),h(s,Ee,c),e(Ee,Fu),e(Ee,Pt),e(Pt,Nu),e(Ee,Cu),h(s,bl,c),h(s,Aa,c),e(Aa,Su),h(s,yl,c),w(Ft,s,c),h(s,$l,c),h(s,ts,c),e(ts,Du),e(ts,yo),e(yo,Ou),e(ts,Ru),e(ts,$o),e($o,Bu),e(ts,Hu),e(ts,vo),e(vo,Gu),e(ts,Uu),h(s,vl,c),h(s,Ia,c),e(Ia,Yu),h(s,ql,c),h(s,as,c),e(as,Us),e(Us,Wu),e(Us,qo),e(qo,Qu),e(Us,Xu),e(Us,Eo),e(Eo,Vu),e(Us,Ju),e(as,Ku),e(as,To),e(To,Zu),e(as,sm),e(as,Ao),e(Ao,em),e(as,tm),e(as,Nt),e(Nt,am),e(Nt,Io),e(Io,nm),e(Nt,om),h(s,El,c),w(Te,s,c),h(s,Tl,c),h(s,za,c),e(za,rm),h(s,Al,c),h(s,Ys,c),e(Ys,Ae),e(Ae,zo),w(Ct,zo,null),e(Ys,lm),e(Ys,Mo),e(Mo,im),h(s,Il,c),h(s,ns,c),e(ns,pm),e(ns,St),e(St,cm),e(ns,hm),e(ns,Dt),e(Dt,um),e(ns,mm),e(ns,Ma),e(Ma,gm),e(ns,fm),h(s,zl,c),h(s,Ie,c),e(Ie,dm),e(Ie,La),e(La,_m),e(Ie,jm),h(s,Ml,c),w(Ot,s,c),h(s,Ll,c),h(s,Pa,c),e(Pa,km),h(s,Pl,c),h(s,os,c),e(os,Lo),e(Lo,wm),e(os,xm),e(os,Po),e(Po,bm),e(os,ym),e(os,Rt),e(Rt,$m),e(Rt,Fo),e(Fo,vm),e(Rt,qm),e(os,Em),e(os,Bt),e(Bt,Tm),e(Bt,No),e(No,Am),e(Bt,Im),h(s,Fl,c),w(ze,s,c),h(s,Nl,c),h(s,Ws,c),e(Ws,Me),e(Me,Co),w(Ht,Co,null),e(Ws,zm),e(Ws,So),e(So,Mm),h(s,Cl,c),h(s,X,c),e(X,Lm),e(X,Gt),e(Gt,Pm),e(X,Fm),e(X,Ut),e(Ut,Nm),e(X,Cm),e(X,Yt),e(Yt,Sm),e(X,Dm),e(X,Fa),e(Fa,Om),e(X,Rm),h(s,Sl,c),h(s,Le,c),e(Le,Bm),e(Le,Na),e(Na,Hm),e(Le,Gm),h(s,Dl,c),w(Wt,s,c),h(s,Ol,c),h(s,Ca,c),e(Ca,Um),h(s,Rl,c),h(s,rs,c),e(rs,Do),e(Do,Ym),e(rs,Wm),e(rs,Oo),e(Oo,Qm),e(rs,Xm),e(rs,Qt),e(Qt,Vm),e(Qt,Ro),e(Ro,Jm),e(Qt,Km),e(rs,Zm),e(rs,Bo),e(Bo,sg),h(s,Bl,c),w(Pe,s,c),h(s,Hl,c),h(s,Qs,c),e(Qs,Fe),e(Fe,Ho),w(Xt,Ho,null),e(Qs,eg),e(Qs,Go),e(Go,tg),h(s,Gl,c),h(s,ls,c),e(ls,ag),e(ls,Vt),e(Vt,ng),e(ls,og),e(ls,Jt),e(Jt,rg),e(ls,lg),e(ls,Sa),e(Sa,ig),e(ls,pg),h(s,Ul,c),h(s,Ne,c),e(Ne,cg),e(Ne,Da),e(Da,hg),e(Ne,ug),h(s,Yl,c),w(Kt,s,c),h(s,Wl,c),h(s,Oa,c),e(Oa,mg),h(s,Ql,c),h(s,is,c),e(is,Uo),e(Uo,gg),e(is,fg),e(is,Yo),e(Yo,dg),e(is,_g),e(is,Zt),e(Zt,jg),e(Zt,Wo),e(Wo,kg),e(Zt,wg),e(is,xg),e(is,sa),e(sa,bg),e(sa,Qo),e(Qo,yg),e(sa,$g),h(s,Xl,c),w(Ce,s,c),Vl=!0},p(s,[c]){const ea={};c&2&&(ea.$$scope={dirty:c,ctx:s}),te.$set(ea);const Xo={};c&2&&(Xo.$$scope={dirty:c,ctx:s}),ne.$set(Xo);const Vo={};c&2&&(Vo.$$scope={dirty:c,ctx:s}),re.$set(Vo);const Jo={};c&2&&(Jo.$$scope={dirty:c,ctx:s}),ce.$set(Jo);const Ko={};c&2&&(Ko.$$scope={dirty:c,ctx:s}),me.$set(Ko);const ta={};c&2&&(ta.$$scope={dirty:c,ctx:s}),de.$set(ta);const Zo={};c&2&&(Zo.$$scope={dirty:c,ctx:s}),we.$set(Zo);const sr={};c&2&&(sr.$$scope={dirty:c,ctx:s}),$e.$set(sr);const aa={};c&2&&(aa.$$scope={dirty:c,ctx:s}),Te.$set(aa);const Xs={};c&2&&(Xs.$$scope={dirty:c,ctx:s}),ze.$set(Xs);const er={};c&2&&(er.$$scope={dirty:c,ctx:s}),Pe.$set(er);const tr={};c&2&&(tr.$$scope={dirty:c,ctx:s}),Ce.$set(tr)},i(s){Vl||(x(E.$$.fragment,s),x(F.$$.fragment,s),x(te.$$.fragment,s),x(Xe.$$.fragment,s),x(st.$$.fragment,s),x(ne.$$.fragment,s),x(et.$$.fragment,s),x(nt.$$.fragment,s),x(ot.$$.fragment,s),x(re.$$.fragment,s),x(rt.$$.fragment,s),x(it.$$.fragment,s),x(ht.$$.fragment,s),x(ut.$$.fragment,s),x(ce.$$.fragment,s),x(gt.$$.fragment,s),x(me.$$.fragment,s),x(dt.$$.fragment,s),x(de.$$.fragment,s),x(kt.$$.fragment,s),x(yt.$$.fragment,s),x($t.$$.fragment,s),x(we.$$.fragment,s),x(vt.$$.fragment,s),x(qt.$$.fragment,s),x(At.$$.fragment,s),x(It.$$.fragment,s),x($e.$$.fragment,s),x(Mt.$$.fragment,s),x(Ft.$$.fragment,s),x(Te.$$.fragment,s),x(Ct.$$.fragment,s),x(Ot.$$.fragment,s),x(ze.$$.fragment,s),x(Ht.$$.fragment,s),x(Wt.$$.fragment,s),x(Pe.$$.fragment,s),x(Xt.$$.fragment,s),x(Kt.$$.fragment,s),x(Ce.$$.fragment,s),Vl=!0)},o(s){b(E.$$.fragment,s),b(F.$$.fragment,s),b(te.$$.fragment,s),b(Xe.$$.fragment,s),b(st.$$.fragment,s),b(ne.$$.fragment,s),b(et.$$.fragment,s),b(nt.$$.fragment,s),b(ot.$$.fragment,s),b(re.$$.fragment,s),b(rt.$$.fragment,s),b(it.$$.fragment,s),b(ht.$$.fragment,s),b(ut.$$.fragment,s),b(ce.$$.fragment,s),b(gt.$$.fragment,s),b(me.$$.fragment,s),b(dt.$$.fragment,s),b(de.$$.fragment,s),b(kt.$$.fragment,s),b(yt.$$.fragment,s),b($t.$$.fragment,s),b(we.$$.fragment,s),b(vt.$$.fragment,s),b(qt.$$.fragment,s),b(At.$$.fragment,s),b(It.$$.fragment,s),b($e.$$.fragment,s),b(Mt.$$.fragment,s),b(Ft.$$.fragment,s),b(Te.$$.fragment,s),b(Ct.$$.fragment,s),b(Ot.$$.fragment,s),b(ze.$$.fragment,s),b(Ht.$$.fragment,s),b(Wt.$$.fragment,s),b(Pe.$$.fragment,s),b(Xt.$$.fragment,s),b(Kt.$$.fragment,s),b(Ce.$$.fragment,s),Vl=!1},d(s){t(n),s&&t(u),s&&t(a),y(E),s&&t(I),y(F,s),s&&t(Vs),s&&t(gs),s&&t(Js),s&&t(K),s&&t(G),s&&t(ds),s&&t(Zs),s&&t(Z),s&&t(Qe),s&&t(Ls),s&&t(ar),s&&t(ee),s&&t(nr),s&&t(la),s&&t(or),y(te,s),s&&t(rr),s&&t(Ps),y(Xe),s&&t(lr),s&&t(Y),s&&t(ir),s&&t(ia),s&&t(pr),s&&t(pa),s&&t(cr),y(st,s),s&&t(hr),s&&t(ca),s&&t(ur),s&&t(W),s&&t(mr),y(ne,s),s&&t(gr),s&&t(Fs),y(et),s&&t(fr),s&&t(ws),s&&t(dr),s&&t(ha),s&&t(_r),y(nt,s),s&&t(jr),s&&t(ua),s&&t(kr),y(ot,s),s&&t(wr),s&&t(ma),s&&t(xr),s&&t(D),s&&t(br),y(re,s),s&&t(yr),s&&t(Ns),y(rt),s&&t($r),s&&t(ga),s&&t(vr),s&&t(ie),s&&t(qr),s&&t(Cs),y(it),s&&t(Er),s&&t(xs),s&&t(Tr),s&&t(fa),s&&t(Ar),y(ht,s),s&&t(Ir),s&&t(da),s&&t(zr),y(ut,s),s&&t(Mr),s&&t(_a),s&&t(Lr),s&&t(R),s&&t(Pr),y(ce,s),s&&t(Fr),s&&t(ja),s&&t(Nr),s&&t(Ds),y(gt),s&&t(Cr),s&&t(ue),s&&t(Sr),s&&t(ka),s&&t(Dr),y(me,s),s&&t(Or),s&&t(bs),s&&t(Rr),s&&t(ge),s&&t(Br),s&&t(Os),y(dt),s&&t(Hr),s&&t(B),s&&t(Gr),y(de,s),s&&t(Ur),s&&t(L),s&&t(Yr),s&&t(_e),s&&t(Wr),s&&t(Rs),y(kt),s&&t(Qr),s&&t(ke),s&&t(Xr),s&&t(xa),s&&t(Vr),s&&t(P),s&&t(Jr),s&&t(ys),s&&t(Kr),y(yt,s),s&&t(Zr),s&&t(ba),s&&t(sl),y($t,s),s&&t(el),s&&t(ya),s&&t(tl),s&&t($a),s&&t(al),s&&t(H),s&&t(nl),y(we,s),s&&t(ol),s&&t(va),s&&t(rl),s&&t($s),s&&t(ll),y(vt,s),s&&t(il),s&&t(Bs),y(qt),s&&t(pl),s&&t(be),s&&t(cl),s&&t(ye),s&&t(hl),s&&t(qa),s&&t(ul),y(At,s),s&&t(ml),s&&t(Q),s&&t(gl),y(It,s),s&&t(fl),s&&t(Ea),s&&t(dl),s&&t(es),s&&t(_l),s&&t(Ta),s&&t(jl),y($e,s),s&&t(kl),s&&t(Gs),y(Mt),s&&t(wl),s&&t(qe),s&&t(xl),s&&t(Ee),s&&t(bl),s&&t(Aa),s&&t(yl),y(Ft,s),s&&t($l),s&&t(ts),s&&t(vl),s&&t(Ia),s&&t(ql),s&&t(as),s&&t(El),y(Te,s),s&&t(Tl),s&&t(za),s&&t(Al),s&&t(Ys),y(Ct),s&&t(Il),s&&t(ns),s&&t(zl),s&&t(Ie),s&&t(Ml),y(Ot,s),s&&t(Ll),s&&t(Pa),s&&t(Pl),s&&t(os),s&&t(Fl),y(ze,s),s&&t(Nl),s&&t(Ws),y(Ht),s&&t(Cl),s&&t(X),s&&t(Sl),s&&t(Le),s&&t(Dl),y(Wt,s),s&&t(Ol),s&&t(Ca),s&&t(Rl),s&&t(rs),s&&t(Bl),y(Pe,s),s&&t(Hl),s&&t(Qs),y(Xt),s&&t(Gl),s&&t(ls),s&&t(Ul),s&&t(Ne),s&&t(Yl),y(Kt,s),s&&t(Wl),s&&t(Oa),s&&t(Ql),s&&t(is),s&&t(Xl),y(Ce,s)}}}const Cj={local:"summary-of-the-tasks",sections:[{local:"sequence-classification",title:"Sequence Classification"},{local:"extractive-question-answering",title:"Extractive Question Answering"},{local:"language-modeling",sections:[{local:"masked-language-modeling",title:"Masked Language Modeling"},{local:"causal-language-modeling",title:"Causal Language Modeling"},{local:"text-generation",title:"Text Generation"}],title:"Language Modeling"},{local:"named-entity-recognition",title:"Named Entity Recognition"},{local:"summarization",title:"Summarization"},{local:"translation",title:"Translation"},{local:"audio-classification",title:"Audio classification"},{local:"automatic-speech-recognition",title:"Automatic speech recognition"},{local:"image-classification",title:"Image classification"}],title:"Summary of the tasks"};function Sj($){return Q_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Uj extends G_{constructor(n){super();U_(this,n,Sj,Nj,Y_,{})}}export{Uj as default,Cj as metadata};
