import{S as hT,i as fT,s as gT,e as r,k as c,w as v,t as n,Y as Oo,M as uT,c as a,d as t,m as p,a as i,x as T,h as s,Z as Po,b as _,G as e,g as f,y,q as $,o as L,B as x,v as _T,L as je}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ae}from"../../chunks/Tip-hf-doc-builder.js";import{D as W}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Le}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Oe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ce}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function wT(M){let l,k,m,h,b;return h=new Le({props:{code:`from transformers import LongformerConfig, LongformerModel

# Initializing a Longformer configuration
configuration = LongformerConfig()

# Initializing a model from the configuration
model = LongformerModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerConfig, LongformerModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Longformer configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LongformerConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=r("p"),k=n("Example:"),m=c(),v(h.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(t),m=p(d),T(h.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,m,u),y(h,d,u),b=!0},p:je,i(d){b||($(h.$$.fragment,d),b=!0)},o(d){L(h.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(m),x(h,d)}}}function kT(M){let l,k,m,h,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,m),e(m,h),e(l,b)},d(d){d&&t(l)}}}function bT(M){let l,k,m,h,b;return h=new Le({props:{code:`import torch
from transformers import LongformerModel, LongformerTokenizer

model = LongformerModel.from_pretrained("allenai/longformer-base-4096")
tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")

SAMPLE_TEXT = " ".join(["Hello world! "] * 1000)  # long input document
input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(0)  # batch of size 1

attention_mask = torch.ones(
    input_ids.shape, dtype=torch.long, device=input_ids.device
)  # initialize to local attention
global_attention_mask = torch.zeros(
    input_ids.shape, dtype=torch.long, device=input_ids.device
)  # initialize to global attention to be deactivated for all tokens
global_attention_mask[
    :,
    [
        1,
        4,
        21,
    ],
] = 1  # Set global attention to random tokens for the sake of this example
# Usually, set global attention based on the task. For example,
# classification: the <s> token
# QA: question tokens
# LM: potentially on the beginning of sentences and paragraphs
outputs = model(input_ids, attention_mask=attention_mask, global_attention_mask=global_attention_mask)
sequence_output = outputs.last_hidden_state
pooled_output = outputs.pooler_output`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerModel, LongformerTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerModel.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>SAMPLE_TEXT = <span class="hljs-string">&quot; &quot;</span>.join([<span class="hljs-string">&quot;Hello world! &quot;</span>] * <span class="hljs-number">1000</span>)  <span class="hljs-comment"># long input document</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># batch of size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = torch.ones(
<span class="hljs-meta">... </span>    input_ids.shape, dtype=torch.long, device=input_ids.device
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># initialize to local attention</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask = torch.zeros(
<span class="hljs-meta">... </span>    input_ids.shape, dtype=torch.long, device=input_ids.device
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># initialize to global attention to be deactivated for all tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask[
<span class="hljs-meta">... </span>    :,
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        <span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>        <span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>        <span class="hljs-number">21</span>,
<span class="hljs-meta">... </span>    ],
<span class="hljs-meta">... </span>] = <span class="hljs-number">1</span>  <span class="hljs-comment"># Set global attention to random tokens for the sake of this example</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Usually, set global attention based on the task. For example,</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># classification: the &lt;s&gt; token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># QA: question tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># LM: potentially on the beginning of sentences and paragraphs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, attention_mask=attention_mask, global_attention_mask=global_attention_mask)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_output = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output`}}),{c(){l=r("p"),k=n("Examples:"),m=c(),v(h.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Examples:"),u.forEach(t),m=p(d),T(h.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,m,u),y(h,d,u),b=!0},p:je,i(d){b||($(h.$$.fragment,d),b=!0)},o(d){L(h.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(m),x(h,d)}}}function vT(M){let l,k,m,h,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,m),e(m,h),e(l,b)},d(d){d&&t(l)}}}function TT(M){let l,k,m,h,b;return h=new Le({props:{code:`from transformers import LongformerTokenizer, LongformerForMaskedLM

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForMaskedLM.from_pretrained("allenai/longformer-base-4096")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)`}}),{c(){l=r("p"),k=n("Mask filling example:"),m=c(),v(h.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Mask filling example:"),u.forEach(t),m=p(d),T(h.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,m,u),y(h,d,u),b=!0},p:je,i(d){b||($(h.$$.fragment,d),b=!0)},o(d){L(h.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(m),x(h,d)}}}function yT(M){let l,k;return l=new Le({props:{code:`TXT = (
    "My friends are <mask> but they eat too many carbs."
    + " That's why I decide not to eat with them." * 300
)
input_ids = tokenizer([TXT], return_tensors="pt")["input_ids"]
logits = model(input_ids).logits

masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>
<span class="hljs-meta">... </span>    + <span class="hljs-string">&quot; That&#x27;s why I decide not to eat with them.&quot;</span> * <span class="hljs-number">300</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()
[<span class="hljs-string">&#x27;healthy&#x27;</span>, <span class="hljs-string">&#x27;skinny&#x27;</span>, <span class="hljs-string">&#x27;thin&#x27;</span>, <span class="hljs-string">&#x27;good&#x27;</span>, <span class="hljs-string">&#x27;vegetarian&#x27;</span>]`}}),{c(){v(l.$$.fragment)},l(m){T(l.$$.fragment,m)},m(m,h){y(l,m,h),k=!0},p:je,i(m){k||($(l.$$.fragment,m),k=!0)},o(m){L(l.$$.fragment,m),k=!1},d(m){x(l,m)}}}function $T(M){let l,k,m,h,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,m),e(m,h),e(l,b)},d(d){d&&t(l)}}}function LT(M){let l,k,m,h,b;return h=new Le({props:{code:`import torch
from transformers import LongformerTokenizer, LongformerForSequenceClassification

tokenizer = LongformerTokenizer.from_pretrained("jpelhaw/longformer-base-plagiarism-detection")
model = LongformerForSequenceClassification.from_pretrained("jpelhaw/longformer-base-plagiarism-detection")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;jpelhaw/longformer-base-plagiarism-detection&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;jpelhaw/longformer-base-plagiarism-detection&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;ORIGINAL&#x27;</span>`}}),{c(){l=r("p"),k=n("Example of single-label classification:"),m=c(),v(h.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example of single-label classification:"),u.forEach(t),m=p(d),T(h.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,m,u),y(h,d,u),b=!0},p:je,i(d){b||($(h.$$.fragment,d),b=!0)},o(d){L(h.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(m),x(h,d)}}}function xT(M){let l,k;return l=new Le({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = LongformerForSequenceClassification.from_pretrained("jpelhaw/longformer-base-plagiarism-detection", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;jpelhaw/longformer-base-plagiarism-detection&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">5.44</span>`}}),{c(){v(l.$$.fragment)},l(m){T(l.$$.fragment,m)},m(m,h){y(l,m,h),k=!0},p:je,i(m){k||($(l.$$.fragment,m),k=!0)},o(m){L(l.$$.fragment,m),k=!1},d(m){x(l,m)}}}function FT(M){let l,k,m,h,b;return h=new Le({props:{code:`import torch
from transformers import LongformerTokenizer, LongformerForSequenceClassification

tokenizer = LongformerTokenizer.from_pretrained("jpelhaw/longformer-base-plagiarism-detection")
model = LongformerForSequenceClassification.from_pretrained("jpelhaw/longformer-base-plagiarism-detection", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;jpelhaw/longformer-base-plagiarism-detection&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;jpelhaw/longformer-base-plagiarism-detection&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;ORIGINAL&#x27;</span>`}}),{c(){l=r("p"),k=n("Example of multi-label classification:"),m=c(),v(h.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example of multi-label classification:"),u.forEach(t),m=p(d),T(h.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,m,u),y(h,d,u),b=!0},p:je,i(d){b||($(h.$$.fragment,d),b=!0)},o(d){L(h.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(m),x(h,d)}}}function MT(M){let l,k;return l=new Le({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = LongformerForSequenceClassification.from_pretrained(
    "jpelhaw/longformer-base-plagiarism-detection", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;jpelhaw/longformer-base-plagiarism-detection&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(l.$$.fragment)},l(m){T(l.$$.fragment,m)},m(m,h){y(l,m,h),k=!0},p:je,i(m){k||($(l.$$.fragment,m),k=!0)},o(m){L(l.$$.fragment,m),k=!1},d(m){x(l,m)}}}function ET(M){let l,k,m,h,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,m),e(m,h),e(l,b)},d(d){d&&t(l)}}}function zT(M){let l,k,m,h,b;return h=new Le({props:{code:`from transformers import LongformerTokenizer, LongformerForMultipleChoice
import torch

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForMultipleChoice.from_pretrained("allenai/longformer-base-4096")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=r("p"),k=n("Example:"),m=c(),v(h.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(t),m=p(d),T(h.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,m,u),y(h,d,u),b=!0},p:je,i(d){b||($(h.$$.fragment,d),b=!0)},o(d){L(h.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(m),x(h,d)}}}function qT(M){let l,k,m,h,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,m),e(m,h),e(l,b)},d(d){d&&t(l)}}}function CT(M){let l,k,m,h,b;return h=new Le({props:{code:`from transformers import LongformerTokenizer, LongformerForTokenClassification
import torch

tokenizer = LongformerTokenizer.from_pretrained("brad1141/Longformer-finetuned-norm")
model = LongformerForTokenClassification.from_pretrained("brad1141/Longformer-finetuned-norm")

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
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;brad1141/Longformer-finetuned-norm&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;brad1141/Longformer-finetuned-norm&quot;</span>)

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
[<span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>, <span class="hljs-string">&#x27;Evidence&#x27;</span>]`}}),{c(){l=r("p"),k=n("Example:"),m=c(),v(h.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(t),m=p(d),T(h.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,m,u),y(h,d,u),b=!0},p:je,i(d){b||($(h.$$.fragment,d),b=!0)},o(d){L(h.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(m),x(h,d)}}}function jT(M){let l,k;return l=new Le({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.63</span>`}}),{c(){v(l.$$.fragment)},l(m){T(l.$$.fragment,m)},m(m,h){y(l,m,h),k=!0},p:je,i(m){k||($(l.$$.fragment,m),k=!0)},o(m){L(l.$$.fragment,m),k=!1},d(m){x(l,m)}}}function OT(M){let l,k,m,h,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,m),e(m,h),e(l,b)},d(d){d&&t(l)}}}function PT(M){let l,k,m,h,b;return h=new Le({props:{code:`from transformers import LongformerTokenizer, LongformerForQuestionAnswering
import torch

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")
model = LongformerForQuestionAnswering.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
encoding = tokenizer(question, text, return_tensors="pt")
input_ids = encoding["input_ids"]

# default is local attention everywhere
# the forward method will automatically set global attention on question tokens
attention_mask = encoding["attention_mask"]

outputs = model(input_ids, attention_mask=attention_mask)
start_logits = outputs.start_logits
end_logits = outputs.end_logits
all_tokens = tokenizer.convert_ids_to_tokens(input_ids[0].tolist())

answer_tokens = all_tokens[torch.argmax(start_logits) : torch.argmax(end_logits) + 1]
answer = tokenizer.decode(
    tokenizer.convert_tokens_to_ids(answer_tokens)
)  # remove space prepending space token`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># default is local attention everywhere</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the forward method will automatically set global attention on question tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, attention_mask=attention_mask)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_ids[<span class="hljs-number">0</span>].tolist())

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_tokens = all_tokens[torch.argmax(start_logits) : torch.argmax(end_logits) + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = tokenizer.decode(
<span class="hljs-meta">... </span>    tokenizer.convert_tokens_to_ids(answer_tokens)
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># remove space prepending space token</span>`}}),{c(){l=r("p"),k=n("Examples:"),m=c(),v(h.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Examples:"),u.forEach(t),m=p(d),T(h.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,m,u),y(h,d,u),b=!0},p:je,i(d){b||($(h.$$.fragment,d),b=!0)},o(d){L(h.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(m),x(h,d)}}}function NT(M){let l,k,m,h,b,d,u,E,me,J,z,Z,S,ee,he,D,fe,le,G,P,te,X,q,j,ne,U,de,se,B,ge,ce,C,ue,Q,re,K,H,ae,_e,N,ie,R,we;return{c(){l=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),b=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),z=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),he=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),B=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){l=a(w,"P",{});var F=i(l);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=p(w),h=a(w,"UL",{});var Y=i(h);b=a(Y,"LI",{});var Te=i(b);d=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=p(Y),E=a(Y,"LI",{});var pe=i(E);me=s(pe,"having all inputs as a list, tuple or dict in the first positional arguments."),pe.forEach(t),Y.forEach(t),J=p(w),z=a(w,"P",{});var A=i(z);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(t),he=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var xe=i(D);fe=s(xe,"model(inputs)"),xe.forEach(t),le=s(A,"."),A.forEach(t),G=p(w),P=a(w,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=p(w),q=a(w,"UL",{});var O=i(q);j=a(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),U=a(V,"CODE",{});var Me=i(U);de=s(Me,"input_ids"),Me.forEach(t),se=s(V," only and nothing else: "),B=a(V,"CODE",{});var ye=i(B);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=p(O),C=a(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a(I,"CODE",{});var ke=i(Q);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),I.forEach(t),_e=p(O),N=a(O,"LI",{});var oe=i(N);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(oe,"CODE",{});var Ee=i(R);we=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),O.forEach(t)},m(w,F){f(w,l,F),e(l,k),f(w,m,F),f(w,h,F),e(h,b),e(b,d),e(h,u),e(h,E),e(E,me),f(w,J,F),f(w,z,F),e(z,Z),e(z,S),e(S,ee),e(z,he),e(z,D),e(D,fe),e(z,le),f(w,G,F),f(w,P,F),e(P,te),f(w,X,F),f(w,q,F),e(q,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,B),e(B,ge),e(q,ce),e(q,C),e(C,ue),e(C,Q),e(Q,re),e(C,K),e(C,H),e(H,ae),e(q,_e),e(q,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&t(l),w&&t(m),w&&t(h),w&&t(J),w&&t(z),w&&t(G),w&&t(P),w&&t(X),w&&t(q)}}}function AT(M){let l,k,m,h,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,m),e(m,h),e(l,b)},d(d){d&&t(l)}}}function IT(M){let l,k,m,h,b,d,u,E,me,J,z,Z,S,ee,he,D,fe,le,G,P,te,X,q,j,ne,U,de,se,B,ge,ce,C,ue,Q,re,K,H,ae,_e,N,ie,R,we;return{c(){l=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),b=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),z=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),he=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),B=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){l=a(w,"P",{});var F=i(l);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=p(w),h=a(w,"UL",{});var Y=i(h);b=a(Y,"LI",{});var Te=i(b);d=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=p(Y),E=a(Y,"LI",{});var pe=i(E);me=s(pe,"having all inputs as a list, tuple or dict in the first positional arguments."),pe.forEach(t),Y.forEach(t),J=p(w),z=a(w,"P",{});var A=i(z);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(t),he=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var xe=i(D);fe=s(xe,"model(inputs)"),xe.forEach(t),le=s(A,"."),A.forEach(t),G=p(w),P=a(w,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=p(w),q=a(w,"UL",{});var O=i(q);j=a(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),U=a(V,"CODE",{});var Me=i(U);de=s(Me,"input_ids"),Me.forEach(t),se=s(V," only and nothing else: "),B=a(V,"CODE",{});var ye=i(B);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=p(O),C=a(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a(I,"CODE",{});var ke=i(Q);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),I.forEach(t),_e=p(O),N=a(O,"LI",{});var oe=i(N);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(oe,"CODE",{});var Ee=i(R);we=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),O.forEach(t)},m(w,F){f(w,l,F),e(l,k),f(w,m,F),f(w,h,F),e(h,b),e(b,d),e(h,u),e(h,E),e(E,me),f(w,J,F),f(w,z,F),e(z,Z),e(z,S),e(S,ee),e(z,he),e(z,D),e(D,fe),e(z,le),f(w,G,F),f(w,P,F),e(P,te),f(w,X,F),f(w,q,F),e(q,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,B),e(B,ge),e(q,ce),e(q,C),e(C,ue),e(C,Q),e(Q,re),e(C,K),e(C,H),e(H,ae),e(q,_e),e(q,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&t(l),w&&t(m),w&&t(h),w&&t(J),w&&t(z),w&&t(G),w&&t(P),w&&t(X),w&&t(q)}}}function ST(M){let l,k,m,h,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,m),e(m,h),e(l,b)},d(d){d&&t(l)}}}function DT(M){let l,k,m,h,b;return h=new Le({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMaskedLM
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForMaskedLM.from_pretrained("allenai/longformer-base-4096")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){l=r("p"),k=n("Example:"),m=c(),v(h.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(t),m=p(d),T(h.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,m,u),y(h,d,u),b=!0},p:je,i(d){b||($(h.$$.fragment,d),b=!0)},o(d){L(h.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(m),x(h,d)}}}function BT(M){let l,k;return l=new Le({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.44</span>`}}),{c(){v(l.$$.fragment)},l(m){T(l.$$.fragment,m)},m(m,h){y(l,m,h),k=!0},p:je,i(m){k||($(l.$$.fragment,m),k=!0)},o(m){L(l.$$.fragment,m),k=!1},d(m){x(l,m)}}}function WT(M){let l,k,m,h,b,d,u,E,me,J,z,Z,S,ee,he,D,fe,le,G,P,te,X,q,j,ne,U,de,se,B,ge,ce,C,ue,Q,re,K,H,ae,_e,N,ie,R,we;return{c(){l=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),b=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),z=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),he=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),B=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){l=a(w,"P",{});var F=i(l);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=p(w),h=a(w,"UL",{});var Y=i(h);b=a(Y,"LI",{});var Te=i(b);d=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=p(Y),E=a(Y,"LI",{});var pe=i(E);me=s(pe,"having all inputs as a list, tuple or dict in the first positional arguments."),pe.forEach(t),Y.forEach(t),J=p(w),z=a(w,"P",{});var A=i(z);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(t),he=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var xe=i(D);fe=s(xe,"model(inputs)"),xe.forEach(t),le=s(A,"."),A.forEach(t),G=p(w),P=a(w,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=p(w),q=a(w,"UL",{});var O=i(q);j=a(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),U=a(V,"CODE",{});var Me=i(U);de=s(Me,"input_ids"),Me.forEach(t),se=s(V," only and nothing else: "),B=a(V,"CODE",{});var ye=i(B);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=p(O),C=a(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a(I,"CODE",{});var ke=i(Q);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),I.forEach(t),_e=p(O),N=a(O,"LI",{});var oe=i(N);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(oe,"CODE",{});var Ee=i(R);we=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),O.forEach(t)},m(w,F){f(w,l,F),e(l,k),f(w,m,F),f(w,h,F),e(h,b),e(b,d),e(h,u),e(h,E),e(E,me),f(w,J,F),f(w,z,F),e(z,Z),e(z,S),e(S,ee),e(z,he),e(z,D),e(D,fe),e(z,le),f(w,G,F),f(w,P,F),e(P,te),f(w,X,F),f(w,q,F),e(q,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,B),e(B,ge),e(q,ce),e(q,C),e(C,ue),e(C,Q),e(Q,re),e(C,K),e(C,H),e(H,ae),e(q,_e),e(q,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&t(l),w&&t(m),w&&t(h),w&&t(J),w&&t(z),w&&t(G),w&&t(P),w&&t(X),w&&t(q)}}}function QT(M){let l,k,m,h,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,m),e(m,h),e(l,b)},d(d){d&&t(l)}}}function UT(M){let l,k,m,h,b;return h=new Le({props:{code:`from transformers import LongformerTokenizer, TFLongformerForQuestionAnswering
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")
model = TFLongformerForQuestionAnswering.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){l=r("p"),k=n("Example:"),m=c(),v(h.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(t),m=p(d),T(h.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,m,u),y(h,d,u),b=!0},p:je,i(d){b||($(h.$$.fragment,d),b=!0)},o(d){L(h.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(m),x(h,d)}}}function HT(M){let l,k;return l=new Le({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.96</span>`}}),{c(){v(l.$$.fragment)},l(m){T(l.$$.fragment,m)},m(m,h){y(l,m,h),k=!0},p:je,i(m){k||($(l.$$.fragment,m),k=!0)},o(m){L(l.$$.fragment,m),k=!1},d(m){x(l,m)}}}function RT(M){let l,k,m,h,b,d,u,E,me,J,z,Z,S,ee,he,D,fe,le,G,P,te,X,q,j,ne,U,de,se,B,ge,ce,C,ue,Q,re,K,H,ae,_e,N,ie,R,we;return{c(){l=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),b=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),z=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),he=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),B=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){l=a(w,"P",{});var F=i(l);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=p(w),h=a(w,"UL",{});var Y=i(h);b=a(Y,"LI",{});var Te=i(b);d=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=p(Y),E=a(Y,"LI",{});var pe=i(E);me=s(pe,"having all inputs as a list, tuple or dict in the first positional arguments."),pe.forEach(t),Y.forEach(t),J=p(w),z=a(w,"P",{});var A=i(z);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(t),he=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var xe=i(D);fe=s(xe,"model(inputs)"),xe.forEach(t),le=s(A,"."),A.forEach(t),G=p(w),P=a(w,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=p(w),q=a(w,"UL",{});var O=i(q);j=a(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),U=a(V,"CODE",{});var Me=i(U);de=s(Me,"input_ids"),Me.forEach(t),se=s(V," only and nothing else: "),B=a(V,"CODE",{});var ye=i(B);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=p(O),C=a(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a(I,"CODE",{});var ke=i(Q);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),I.forEach(t),_e=p(O),N=a(O,"LI",{});var oe=i(N);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(oe,"CODE",{});var Ee=i(R);we=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),O.forEach(t)},m(w,F){f(w,l,F),e(l,k),f(w,m,F),f(w,h,F),e(h,b),e(b,d),e(h,u),e(h,E),e(E,me),f(w,J,F),f(w,z,F),e(z,Z),e(z,S),e(S,ee),e(z,he),e(z,D),e(D,fe),e(z,le),f(w,G,F),f(w,P,F),e(P,te),f(w,X,F),f(w,q,F),e(q,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,B),e(B,ge),e(q,ce),e(q,C),e(C,ue),e(C,Q),e(Q,re),e(C,K),e(C,H),e(H,ae),e(q,_e),e(q,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&t(l),w&&t(m),w&&t(h),w&&t(J),w&&t(z),w&&t(G),w&&t(P),w&&t(X),w&&t(q)}}}function VT(M){let l,k,m,h,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,m),e(m,h),e(l,b)},d(d){d&&t(l)}}}function GT(M){let l,k,m,h,b;return h=new Le({props:{code:`from transformers import LongformerTokenizer, TFLongformerForSequenceClassification
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("hf-internal-testing/tiny-random-longformer")
model = TFLongformerForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-longformer")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-longformer&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-longformer&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){l=r("p"),k=n("Example:"),m=c(),v(h.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(t),m=p(d),T(h.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,m,u),y(h,d,u),b=!0},p:je,i(d){b||($(h.$$.fragment,d),b=!0)},o(d){L(h.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(m),x(h,d)}}}function KT(M){let l,k;return l=new Le({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFLongformerForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-longformer", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-longformer&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){v(l.$$.fragment)},l(m){T(l.$$.fragment,m)},m(m,h){y(l,m,h),k=!0},p:je,i(m){k||($(l.$$.fragment,m),k=!0)},o(m){L(l.$$.fragment,m),k=!1},d(m){x(l,m)}}}function JT(M){let l,k,m,h,b,d,u,E,me,J,z,Z,S,ee,he,D,fe,le,G,P,te,X,q,j,ne,U,de,se,B,ge,ce,C,ue,Q,re,K,H,ae,_e,N,ie,R,we;return{c(){l=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),b=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),z=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),he=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),B=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){l=a(w,"P",{});var F=i(l);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=p(w),h=a(w,"UL",{});var Y=i(h);b=a(Y,"LI",{});var Te=i(b);d=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=p(Y),E=a(Y,"LI",{});var pe=i(E);me=s(pe,"having all inputs as a list, tuple or dict in the first positional arguments."),pe.forEach(t),Y.forEach(t),J=p(w),z=a(w,"P",{});var A=i(z);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(t),he=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var xe=i(D);fe=s(xe,"model(inputs)"),xe.forEach(t),le=s(A,"."),A.forEach(t),G=p(w),P=a(w,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=p(w),q=a(w,"UL",{});var O=i(q);j=a(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),U=a(V,"CODE",{});var Me=i(U);de=s(Me,"input_ids"),Me.forEach(t),se=s(V," only and nothing else: "),B=a(V,"CODE",{});var ye=i(B);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=p(O),C=a(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a(I,"CODE",{});var ke=i(Q);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),I.forEach(t),_e=p(O),N=a(O,"LI",{});var oe=i(N);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(oe,"CODE",{});var Ee=i(R);we=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),O.forEach(t)},m(w,F){f(w,l,F),e(l,k),f(w,m,F),f(w,h,F),e(h,b),e(b,d),e(h,u),e(h,E),e(E,me),f(w,J,F),f(w,z,F),e(z,Z),e(z,S),e(S,ee),e(z,he),e(z,D),e(D,fe),e(z,le),f(w,G,F),f(w,P,F),e(P,te),f(w,X,F),f(w,q,F),e(q,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,B),e(B,ge),e(q,ce),e(q,C),e(C,ue),e(C,Q),e(Q,re),e(C,K),e(C,H),e(H,ae),e(q,_e),e(q,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&t(l),w&&t(m),w&&t(h),w&&t(J),w&&t(z),w&&t(G),w&&t(P),w&&t(X),w&&t(q)}}}function XT(M){let l,k,m,h,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,m),e(m,h),e(l,b)},d(d){d&&t(l)}}}function YT(M){let l,k,m,h,b;return h=new Le({props:{code:`from transformers import LongformerTokenizer, TFLongformerForTokenClassification
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("hf-internal-testing/tiny-random-longformer")
model = TFLongformerForTokenClassification.from_pretrained("hf-internal-testing/tiny-random-longformer")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-longformer&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-longformer&quot;</span>)

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
[<span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>, <span class="hljs-string">&#x27;LABEL_1&#x27;</span>]`}}),{c(){l=r("p"),k=n("Example:"),m=c(),v(h.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(t),m=p(d),T(h.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,m,u),y(h,d,u),b=!0},p:je,i(d){b||($(h.$$.fragment,d),b=!0)},o(d){L(h.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(m),x(h,d)}}}function ZT(M){let l,k;return l=new Le({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.59</span>`}}),{c(){v(l.$$.fragment)},l(m){T(l.$$.fragment,m)},m(m,h){y(l,m,h),k=!0},p:je,i(m){k||($(l.$$.fragment,m),k=!0)},o(m){L(l.$$.fragment,m),k=!1},d(m){x(l,m)}}}function ey(M){let l,k,m,h,b,d,u,E,me,J,z,Z,S,ee,he,D,fe,le,G,P,te,X,q,j,ne,U,de,se,B,ge,ce,C,ue,Q,re,K,H,ae,_e,N,ie,R,we;return{c(){l=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),m=c(),h=r("ul"),b=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),z=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),he=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),q=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),B=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){l=a(w,"P",{});var F=i(l);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=p(w),h=a(w,"UL",{});var Y=i(h);b=a(Y,"LI",{});var Te=i(b);d=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=p(Y),E=a(Y,"LI",{});var pe=i(E);me=s(pe,"having all inputs as a list, tuple or dict in the first positional arguments."),pe.forEach(t),Y.forEach(t),J=p(w),z=a(w,"P",{});var A=i(z);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(t),he=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var xe=i(D);fe=s(xe,"model(inputs)"),xe.forEach(t),le=s(A,"."),A.forEach(t),G=p(w),P=a(w,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=p(w),q=a(w,"UL",{});var O=i(q);j=a(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),U=a(V,"CODE",{});var Me=i(U);de=s(Me,"input_ids"),Me.forEach(t),se=s(V," only and nothing else: "),B=a(V,"CODE",{});var ye=i(B);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=p(O),C=a(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a(I,"CODE",{});var ke=i(Q);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),I.forEach(t),_e=p(O),N=a(O,"LI",{});var oe=i(N);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(oe,"CODE",{});var Ee=i(R);we=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),oe.forEach(t),O.forEach(t)},m(w,F){f(w,l,F),e(l,k),f(w,m,F),f(w,h,F),e(h,b),e(b,d),e(h,u),e(h,E),e(E,me),f(w,J,F),f(w,z,F),e(z,Z),e(z,S),e(S,ee),e(z,he),e(z,D),e(D,fe),e(z,le),f(w,G,F),f(w,P,F),e(P,te),f(w,X,F),f(w,q,F),e(q,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,B),e(B,ge),e(q,ce),e(q,C),e(C,ue),e(C,Q),e(Q,re),e(C,K),e(C,H),e(H,ae),e(q,_e),e(q,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&t(l),w&&t(m),w&&t(h),w&&t(J),w&&t(z),w&&t(G),w&&t(P),w&&t(X),w&&t(q)}}}function ty(M){let l,k,m,h,b;return{c(){l=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(u,"CODE",{});var E=i(m);h=s(E,"Module"),E.forEach(t),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){f(d,l,u),e(l,k),e(l,m),e(m,h),e(l,b)},d(d){d&&t(l)}}}function oy(M){let l,k,m,h,b;return h=new Le({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMultipleChoice
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForMultipleChoice.from_pretrained("allenai/longformer-base-4096")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=r("p"),k=n("Example:"),m=c(),v(h.$$.fragment)},l(d){l=a(d,"P",{});var u=i(l);k=s(u,"Example:"),u.forEach(t),m=p(d),T(h.$$.fragment,d)},m(d,u){f(d,l,u),e(l,k),f(d,m,u),y(h,d,u),b=!0},p:je,i(d){b||($(h.$$.fragment,d),b=!0)},o(d){L(h.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(m),x(h,d)}}}function ny(M){let l,k,m,h,b,d,u,E,me,J,z,Z,S,ee,he,D,fe,le,G,P,te,X,q,j,ne,U,de,se,B,ge,ce,C,ue,Q,re,K,H,ae,_e,N,ie,R,we,w,F,Y,Te,pe,A,be,xe,Fe,O,V,Me,ye,I,ke,ve,oe,Ee,ti,Wp,fd,$e,Qp,gd,sT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',ud,_d,rT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',wd,kd,aT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',bd,oi,Up,Hp,ni,Rp,Vp,si,Gp,Kp,vd,iT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Td,ri,Jp,Xp,yd,wt,Yp,$d,lT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Ld,ai,Zp,em,xd,kt,tm,ii,om,nm,li,sm,rm,Fd,No,di,am,im,ci,lm,Md,Ao,dm,Kr,cm,pm,Ed,Xe,mm,zd,dT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><msub><mi>n</mi><mi>s</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times n_s)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>',qd,Cd,cT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><mi>w</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times w)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mclose">)</span></span></span></span>',jd,Od,pT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>n</mi><mi>s</mi></msub></mrow><annotation encoding="application/x-tex">n_s</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>',Pd,Nd,mT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Ad,Id,Io,hm,Gn,fm,gm,Sd,jt,So,pi,Kn,um,mi,_m,Dd,Ot,Jr,wm,km,Xr,bm,vm,Bd,Jn,Wd,Pt,Do,hi,Xn,Tm,fi,ym,Qd,He,Yn,$m,Nt,Lm,Yr,xm,Fm,Zr,Mm,Em,zm,At,qm,ea,Cm,jm,Zn,Om,Pm,Nm,It,Am,ta,Im,Sm,oa,Dm,Bm,Wm,Bo,Ud,St,Wo,gi,es,Qm,ui,Um,Hd,gt,ts,Hm,_i,Rm,Vm,Qo,na,Gm,Km,sa,Jm,Xm,Rd,Dt,Uo,wi,os,Ym,ki,Zm,Vd,ut,ns,eh,ss,th,bi,oh,nh,sh,Ho,ra,rh,ah,aa,ih,lh,Gd,Bt,Ro,vi,rs,dh,Ti,ch,Kd,Wt,as,ph,yi,mh,Jd,Qt,is,hh,$i,fh,Xd,Ut,ls,gh,Li,uh,Yd,Ht,ds,_h,xi,wh,Zd,Rt,cs,kh,Fi,bh,ec,Vt,ps,vh,Mi,Th,tc,Gt,ms,yh,Ei,$h,oc,Kt,hs,Lh,zi,xh,nc,Jt,fs,Fh,qi,Mh,sc,Xt,gs,Eh,Ci,zh,rc,Yt,us,qh,ji,Ch,ac,Zt,_s,jh,Oi,Oh,ic,eo,ws,Ph,Pi,Nh,lc,to,ks,Ah,Ni,Ih,dc,oo,Vo,Ai,bs,Sh,Ii,Dh,cc,Pe,vs,Bh,Si,Wh,Qh,Ts,Uh,ia,Hh,Rh,Vh,ys,Gh,$s,Kh,Jh,Xh,no,Yh,la,Zh,ef,Ls,tf,of,nf,xs,sf,Di,rf,af,lf,rt,Fs,df,so,cf,da,pf,mf,Bi,hf,ff,gf,Go,uf,Ko,pc,ro,Jo,Wi,Ms,_f,Qi,wf,mc,Re,Es,kf,zs,bf,Ui,vf,Tf,yf,qs,$f,ca,Lf,xf,Ff,Cs,Mf,js,Ef,zf,qf,Qe,Os,Cf,ao,jf,pa,Of,Pf,Hi,Nf,Af,If,Xo,Sf,Yo,Df,Ri,Bf,Wf,Zo,hc,io,en,Vi,Ps,Qf,Gi,Uf,fc,Ve,Ns,Hf,Ki,Rf,Vf,As,Gf,ma,Kf,Jf,Xf,Is,Yf,Ss,Zf,eg,tg,Ne,Ds,og,lo,ng,ha,sg,rg,Ji,ag,ig,lg,tn,dg,on,cg,nn,pg,sn,mg,rn,gc,co,an,Xi,Bs,hg,Yi,fg,uc,Ge,Ws,gg,Zi,ug,_g,Qs,wg,fa,kg,bg,vg,Us,Tg,Hs,yg,$g,Lg,at,Rs,xg,po,Fg,ga,Mg,Eg,el,zg,qg,Cg,ln,jg,dn,_c,mo,cn,tl,Vs,Og,ol,Pg,wc,Ke,Gs,Ng,nl,Ag,Ig,Ks,Sg,ua,Dg,Bg,Wg,Js,Qg,Xs,Ug,Hg,Rg,Ye,Ys,Vg,ho,Gg,_a,Kg,Jg,sl,Xg,Yg,Zg,pn,eu,mn,tu,hn,kc,fo,fn,rl,Zs,ou,al,nu,bc,Je,er,su,go,ru,il,au,iu,ll,lu,du,cu,tr,pu,wa,mu,hu,fu,or,gu,nr,uu,_u,wu,it,sr,ku,uo,bu,ka,vu,Tu,dl,yu,$u,Lu,gn,xu,un,vc,_o,_n,cl,rr,Fu,pl,Mu,Tc,ze,ar,Eu,ml,zu,qu,ir,Cu,ba,ju,Ou,Pu,lr,Nu,dr,Au,Iu,Su,wn,Du,wo,Bu,va,Wu,Qu,cr,Uu,Hu,Ru,pr,Vu,hl,Gu,Ku,Ju,bt,mr,Xu,ko,Yu,Ta,Zu,e_,fl,t_,o_,n_,kn,yc,bo,bn,gl,hr,s_,ul,r_,$c,Ie,fr,a_,gr,i_,_l,l_,d_,c_,ur,p_,ya,m_,h_,f_,_r,g_,wr,u_,__,w_,vn,k_,Ze,kr,b_,vo,v_,$a,T_,y_,wl,$_,L_,x_,Tn,F_,yn,M_,$n,Lc,To,Ln,kl,br,E_,bl,z_,xc,Se,vr,q_,yo,C_,vl,j_,O_,Tl,P_,N_,A_,Tr,I_,La,S_,D_,B_,yr,W_,$r,Q_,U_,H_,xn,R_,et,Lr,V_,$o,G_,xa,K_,J_,yl,X_,Y_,Z_,Fn,ew,Mn,tw,En,Fc,Lo,zn,$l,xr,ow,Ll,nw,Mc,De,Fr,sw,xl,rw,aw,Mr,iw,Fa,lw,dw,cw,Er,pw,zr,mw,hw,fw,qn,gw,tt,qr,uw,xo,_w,Ma,ww,kw,Fl,bw,vw,Tw,Cn,yw,jn,$w,On,Ec,Fo,Pn,Ml,Cr,Lw,El,xw,zc,Be,jr,Fw,zl,Mw,Ew,Or,zw,Ea,qw,Cw,jw,Pr,Ow,Nr,Pw,Nw,Aw,Nn,Iw,ot,Ar,Sw,Mo,Dw,za,Bw,Ww,ql,Qw,Uw,Hw,An,Rw,In,Vw,Sn,qc,Eo,Dn,Cl,Ir,Gw,jl,Kw,Cc,We,Sr,Jw,Ol,Xw,Yw,Dr,Zw,qa,ek,tk,ok,Br,nk,Wr,sk,rk,ak,Bn,ik,lt,Qr,lk,zo,dk,Ca,ck,pk,Pl,mk,hk,fk,Wn,gk,Qn,jc;return d=new Oe({}),ee=new Oe({}),oe=new Oe({}),Kn=new Oe({}),Jn=new Le({props:{code:`input_ids = tokenizer.encode("This is a sentence from [MASK] training data", return_tensors="pt")
mlm_labels = tokenizer.encode("This is a sentence from the training data", return_tensors="pt")

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[0]`,highlighted:`input_ids = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from [MASK] training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
mlm_labels = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from the training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[<span class="hljs-number">0</span>]`}}),Xn=new Oe({}),Yn=new W({props:{name:"class transformers.LongformerConfig",anchor:"transformers.LongformerConfig",parameters:[{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"sep_token_id",val:": int = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LongformerConfig.attention_window",description:`<strong>attention_window</strong> (<code>int</code> or <code>List[int]</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of an attention window around each token. If an <code>int</code>, use the same size for all layers. To specify a
different window size for each layer, use a <code>List[int]</code> where <code>len(attention_window) == num_hidden_layers</code>.`,name:"attention_window"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/configuration_longformer.py#L39"}}),Bo=new Ce({props:{anchor:"transformers.LongformerConfig.example",$$slots:{default:[wT]},$$scope:{ctx:M}}}),es=new Oe({}),ts=new W({props:{name:"class transformers.LongformerTokenizer",anchor:"transformers.LongformerTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/tokenization_longformer.py#L67"}}),os=new Oe({}),ns=new W({props:{name:"class transformers.LongformerTokenizerFast",anchor:"transformers.LongformerTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/tokenization_longformer_fast.py#L85"}}),rs=new Oe({}),as=new W({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_longformer.py#L57"}}),is=new W({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"pooler_output",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.`,name:"pooler_output"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_longformer.py#L100"}}),ls=new W({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Masked language modeling (MLM) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_longformer.py#L148"}}),ds=new W({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.start_logits",description:`<strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.end_logits",description:`<strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_longformer.py#L194"}}),cs=new W({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_longformer.py#L243"}}),ps=new W({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
<em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_longformer.py#L289"}}),ms=new W({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) &#x2014;
Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_longformer.py#L337"}}),hs=new W({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_tf_longformer.py#L68"}}),fs=new W({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"pooler_output",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.`,name:"pooler_output"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_tf_longformer.py#L111"}}),gs=new W({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Masked language modeling (MLM) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_tf_longformer.py#L159"}}),us=new W({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"start_logits",val:": Tensor = None"},{name:"end_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.start_logits",description:`<strong>start_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.end_logits",description:`<strong>end_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_tf_longformer.py#L205"}}),_s=new W({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_tf_longformer.py#L254"}}),ws=new W({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
<em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_tf_longformer.py#L300"}}),ks=new W({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) &#x2014;
Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_tf_longformer.py#L348"}}),bs=new Oe({}),vs=new W({props:{name:"class transformers.LongformerModel",anchor:"transformers.LongformerModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.LongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18064/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_longformer.py#L1498"}}),Fs=new W({props:{name:"forward",anchor:"transformers.LongformerModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_18064/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18064/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerModel.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18064/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_longformer.py#L1609",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling"
>transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling"
>transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Go=new Ae({props:{$$slots:{default:[kT]},$$scope:{ctx:M}}}),Ko=new Ce({props:{anchor:"transformers.LongformerModel.forward.example",$$slots:{default:[bT]},$$scope:{ctx:M}}}),Ms=new Oe({}),Es=new W({props:{name:"class transformers.LongformerForMaskedLM",anchor:"transformers.LongformerForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18064/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_longformer.py#L1733"}}),Os=new W({props:{name:"forward",anchor:"transformers.LongformerForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_18064/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18064/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18064/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.LongformerForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_longformer.py#L1752",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput"
>transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput"
>transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xo=new Ae({props:{$$slots:{default:[vT]},$$scope:{ctx:M}}}),Yo=new Ce({props:{anchor:"transformers.LongformerForMaskedLM.forward.example",$$slots:{default:[TT]},$$scope:{ctx:M}}}),Zo=new Ce({props:{anchor:"transformers.LongformerForMaskedLM.forward.example-2",$$slots:{default:[yT]},$$scope:{ctx:M}}}),Ps=new Oe({}),Ns=new W({props:{name:"class transformers.LongformerForSequenceClassification",anchor:"transformers.LongformerForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18064/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_longformer.py#L1846"}}),Ds=new W({props:{name:"forward",anchor:"transformers.LongformerForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_18064/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18064/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18064/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_longformer.py#L1861",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tn=new Ae({props:{$$slots:{default:[$T]},$$scope:{ctx:M}}}),on=new Ce({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example",$$slots:{default:[LT]},$$scope:{ctx:M}}}),nn=new Ce({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-2",$$slots:{default:[xT]},$$scope:{ctx:M}}}),sn=new Ce({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-3",$$slots:{default:[FT]},$$scope:{ctx:M}}}),rn=new Ce({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-4",$$slots:{default:[MT]},$$scope:{ctx:M}}}),Bs=new Oe({}),Ws=new W({props:{name:"class transformers.LongformerForMultipleChoice",anchor:"transformers.LongformerForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18064/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_longformer.py#L2205"}}),Rs=new W({props:{name:"forward",anchor:"transformers.LongformerForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_18064/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18064/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18064/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_longformer.py#L2216",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ln=new Ae({props:{$$slots:{default:[ET]},$$scope:{ctx:M}}}),dn=new Ce({props:{anchor:"transformers.LongformerForMultipleChoice.forward.example",$$slots:{default:[zT]},$$scope:{ctx:M}}}),Vs=new Oe({}),Gs=new W({props:{name:"class transformers.LongformerForTokenClassification",anchor:"transformers.LongformerForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18064/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_longformer.py#L2115"}}),Ys=new W({props:{name:"forward",anchor:"transformers.LongformerForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_18064/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18064/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18064/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_longformer.py#L2130",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pn=new Ae({props:{$$slots:{default:[qT]},$$scope:{ctx:M}}}),mn=new Ce({props:{anchor:"transformers.LongformerForTokenClassification.forward.example",$$slots:{default:[CT]},$$scope:{ctx:M}}}),hn=new Ce({props:{anchor:"transformers.LongformerForTokenClassification.forward.example-2",$$slots:{default:[jT]},$$scope:{ctx:M}}}),Zs=new Oe({}),er=new W({props:{name:"class transformers.LongformerForQuestionAnswering",anchor:"transformers.LongformerForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18064/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_longformer.py#L1975"}}),sr=new W({props:{name:"forward",anchor:"transformers.LongformerForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_18064/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_18064/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18064/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LongformerForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_longformer.py#L1989",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),gn=new Ae({props:{$$slots:{default:[OT]},$$scope:{ctx:M}}}),un=new Ce({props:{anchor:"transformers.LongformerForQuestionAnswering.forward.example",$$slots:{default:[PT]},$$scope:{ctx:M}}}),rr=new Oe({}),ar=new W({props:{name:"class transformers.TFLongformerModel",anchor:"transformers.TFLongformerModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18064/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_tf_longformer.py#L2011"}}),wn=new Ae({props:{$$slots:{default:[NT]},$$scope:{ctx:M}}}),mr=new W({props:{name:"call",anchor:"transformers.TFLongformerModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_18064/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_18064/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerModel.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18064/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_tf_longformer.py#L2033"}}),kn=new Ae({props:{$$slots:{default:[AT]},$$scope:{ctx:M}}}),hr=new Oe({}),fr=new W({props:{name:"class transformers.TFLongformerForMaskedLM",anchor:"transformers.TFLongformerForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18064/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_tf_longformer.py#L2084"}}),vn=new Ae({props:{$$slots:{default:[IT]},$$scope:{ctx:M}}}),kr=new W({props:{name:"call",anchor:"transformers.TFLongformerForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_18064/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_18064/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18064/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_tf_longformer.py#L2101",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Tn=new Ae({props:{$$slots:{default:[ST]},$$scope:{ctx:M}}}),yn=new Ce({props:{anchor:"transformers.TFLongformerForMaskedLM.call.example",$$slots:{default:[DT]},$$scope:{ctx:M}}}),$n=new Ce({props:{anchor:"transformers.TFLongformerForMaskedLM.call.example-2",$$slots:{default:[BT]},$$scope:{ctx:M}}}),br=new Oe({}),vr=new W({props:{name:"class transformers.TFLongformerForQuestionAnswering",anchor:"transformers.TFLongformerForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18064/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_tf_longformer.py#L2181"}}),xn=new Ae({props:{$$slots:{default:[WT]},$$scope:{ctx:M}}}),Lr=new W({props:{name:"call",anchor:"transformers.TFLongformerForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_18064/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_18064/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18064/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_tf_longformer.py#L2196",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Fn=new Ae({props:{$$slots:{default:[QT]},$$scope:{ctx:M}}}),Mn=new Ce({props:{anchor:"transformers.TFLongformerForQuestionAnswering.call.example",$$slots:{default:[UT]},$$scope:{ctx:M}}}),En=new Ce({props:{anchor:"transformers.TFLongformerForQuestionAnswering.call.example-2",$$slots:{default:[HT]},$$scope:{ctx:M}}}),xr=new Oe({}),Fr=new W({props:{name:"class transformers.TFLongformerForSequenceClassification",anchor:"transformers.TFLongformerForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18064/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_tf_longformer.py#L2335"}}),qn=new Ae({props:{$$slots:{default:[RT]},$$scope:{ctx:M}}}),qr=new W({props:{name:"call",anchor:"transformers.TFLongformerForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_18064/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_18064/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18064/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_tf_longformer.py#L2347",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Cn=new Ae({props:{$$slots:{default:[VT]},$$scope:{ctx:M}}}),jn=new Ce({props:{anchor:"transformers.TFLongformerForSequenceClassification.call.example",$$slots:{default:[GT]},$$scope:{ctx:M}}}),On=new Ce({props:{anchor:"transformers.TFLongformerForSequenceClassification.call.example-2",$$slots:{default:[KT]},$$scope:{ctx:M}}}),Cr=new Oe({}),jr=new W({props:{name:"class transformers.TFLongformerForTokenClassification",anchor:"transformers.TFLongformerForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18064/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_tf_longformer.py#L2572"}}),Nn=new Ae({props:{$$slots:{default:[JT]},$$scope:{ctx:M}}}),Ar=new W({props:{name:"call",anchor:"transformers.TFLongformerForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_18064/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_18064/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18064/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_tf_longformer.py#L2587",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),An=new Ae({props:{$$slots:{default:[XT]},$$scope:{ctx:M}}}),In=new Ce({props:{anchor:"transformers.TFLongformerForTokenClassification.call.example",$$slots:{default:[YT]},$$scope:{ctx:M}}}),Sn=new Ce({props:{anchor:"transformers.TFLongformerForTokenClassification.call.example-2",$$slots:{default:[ZT]},$$scope:{ctx:M}}}),Ir=new Oe({}),Sr=new W({props:{name:"class transformers.TFLongformerForMultipleChoice",anchor:"transformers.TFLongformerForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_18064/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_tf_longformer.py#L2436"}}),Bn=new Ae({props:{$$slots:{default:[ey]},$$scope:{ctx:M}}}),Qr=new W({props:{name:"call",anchor:"transformers.TFLongformerForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_18064/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_18064/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_18064/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_18064/src/transformers/models/longformer/modeling_tf_longformer.py#L2456",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_18064/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Wn=new Ae({props:{$$slots:{default:[ty]},$$scope:{ctx:M}}}),Qn=new Ce({props:{anchor:"transformers.TFLongformerForMultipleChoice.call.example",$$slots:{default:[oy]},$$scope:{ctx:M}}}),{c(){l=r("meta"),k=c(),m=r("h1"),h=r("a"),b=r("span"),v(d.$$.fragment),u=c(),E=r("span"),me=n("Longformer"),J=c(),z=r("h2"),Z=r("a"),S=r("span"),v(ee.$$.fragment),he=c(),D=r("span"),fe=n("Overview"),le=c(),G=r("p"),P=n("The Longformer model was presented in "),te=r("a"),X=n("Longformer: The Long-Document Transformer"),q=n(" by Iz Beltagy, Matthew E. Peters, Arman Cohan."),j=c(),ne=r("p"),U=n("The abstract from the paper is the following:"),de=c(),se=r("p"),B=r("em"),ge=n(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),ce=c(),C=r("p"),ue=n("Tips:"),Q=c(),re=r("ul"),K=r("li"),H=n("Since the Longformer is based on RoBERTa, it doesn\u2019t have "),ae=r("code"),_e=n("token_type_ids"),N=n(`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),ie=r("code"),R=n("tokenizer.sep_token"),we=n(` (or
`),w=r("code"),F=n("</s>"),Y=n(")."),Te=c(),pe=r("p"),A=n("This model was contributed by "),be=r("a"),xe=n("beltagy"),Fe=n(". The Authors\u2019 code can be found "),O=r("a"),V=n("here"),Me=n("."),ye=c(),I=r("h2"),ke=r("a"),ve=r("span"),v(oe.$$.fragment),Ee=c(),ti=r("span"),Wp=n("Longformer Self Attention"),fd=c(),$e=r("p"),Qp=n(`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),gd=new Oo,ud=n(` previous tokens and
`),_d=new Oo,wd=n(" succeding tokens with "),kd=new Oo,bd=n(` being the window length as defined in
`),oi=r("code"),Up=n("config.attention_window"),Hp=n(". Note that "),ni=r("code"),Rp=n("config.attention_window"),Vp=n(" can be of type "),si=r("code"),Gp=n("List"),Kp=n(` to define a
different `),vd=new Oo,Td=n(` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),ri=r("code"),Jp=n("BertSelfAttention"),Xp=n("."),yd=c(),wt=r("p"),Yp=n(`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),$d=new Oo,Ld=n(`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),ai=r("em"),Zp=n("symmetric"),em=n("."),xd=c(),kt=r("p"),tm=n(`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),ii=r("code"),om=n("global_attention_mask"),nm=n(` at run-time appropriately. All Longformer models employ the following logic for
`),li=r("code"),sm=n("global_attention_mask"),rm=n(":"),Fd=c(),No=r("ul"),di=r("li"),am=n("0: the token attends \u201Clocally\u201D,"),im=c(),ci=r("li"),lm=n("1: the token attends \u201Cglobally\u201D."),Md=c(),Ao=r("p"),dm=n("For more information please also refer to "),Kr=r("a"),cm=n("forward()"),pm=n(" method."),Ed=c(),Xe=r("p"),mm=n(`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),zd=new Oo,qd=n(` to
`),Cd=new Oo,jd=n(", with "),Od=new Oo,Pd=n(" being the sequence length and "),Nd=new Oo,Ad=n(` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),Id=c(),Io=r("p"),hm=n("For more information, please refer to the official "),Gn=r("a"),fm=n("paper"),gm=n("."),Sd=c(),jt=r("h2"),So=r("a"),pi=r("span"),v(Kn.$$.fragment),um=c(),mi=r("span"),_m=n("Training"),Dd=c(),Ot=r("p"),Jr=r("a"),wm=n("LongformerForMaskedLM"),km=n(" is trained the exact same way "),Xr=r("a"),bm=n("RobertaForMaskedLM"),vm=n(` is
trained and should be used as follows:`),Bd=c(),v(Jn.$$.fragment),Wd=c(),Pt=r("h2"),Do=r("a"),hi=r("span"),v(Xn.$$.fragment),Tm=c(),fi=r("span"),ym=n("LongformerConfig"),Qd=c(),He=r("div"),v(Yn.$$.fragment),$m=c(),Nt=r("p"),Lm=n("This is the configuration class to store the configuration of a "),Yr=r("a"),xm=n("LongformerModel"),Fm=n(" or a "),Zr=r("a"),Mm=n("TFLongformerModel"),Em=n(`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),zm=c(),At=r("p"),qm=n("This is the configuration class to store the configuration of a "),ea=r("a"),Cm=n("LongformerModel"),jm=n(`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LongFormer
`),Zn=r("a"),Om=n("allenai/longformer-base-4096"),Pm=n(` architecture with a sequence
length 4,096.`),Nm=c(),It=r("p"),Am=n("The "),ta=r("a"),Im=n("LongformerConfig"),Sm=n(" class directly inherits "),oa=r("a"),Dm=n("RobertaConfig"),Bm=n(`. It reuses the same defaults. Please check the
parent class for more information.`),Wm=c(),v(Bo.$$.fragment),Ud=c(),St=r("h2"),Wo=r("a"),gi=r("span"),v(es.$$.fragment),Qm=c(),ui=r("span"),Um=n("LongformerTokenizer"),Hd=c(),gt=r("div"),v(ts.$$.fragment),Hm=c(),_i=r("p"),Rm=n("Construct a Longformer tokenizer."),Vm=c(),Qo=r("p"),na=r("a"),Gm=n("LongformerTokenizer"),Km=n(" is identical to "),sa=r("a"),Jm=n("RobertaTokenizer"),Xm=n(`. Refer to the superclass for usage examples and
documentation concerning parameters.`),Rd=c(),Dt=r("h2"),Uo=r("a"),wi=r("span"),v(os.$$.fragment),Ym=c(),ki=r("span"),Zm=n("LongformerTokenizerFast"),Vd=c(),ut=r("div"),v(ns.$$.fragment),eh=c(),ss=r("p"),th=n("Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),bi=r("em"),oh=n("tokenizers"),nh=n(" library)."),sh=c(),Ho=r("p"),ra=r("a"),rh=n("LongformerTokenizerFast"),ah=n(" is identical to "),aa=r("a"),ih=n("RobertaTokenizerFast"),lh=n(`. Refer to the superclass for usage examples
and documentation concerning parameters.`),Gd=c(),Bt=r("h2"),Ro=r("a"),vi=r("span"),v(rs.$$.fragment),dh=c(),Ti=r("span"),ch=n("Longformer specific outputs"),Kd=c(),Wt=r("div"),v(as.$$.fragment),ph=c(),yi=r("p"),mh=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Jd=c(),Qt=r("div"),v(is.$$.fragment),hh=c(),$i=r("p"),fh=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Xd=c(),Ut=r("div"),v(ls.$$.fragment),gh=c(),Li=r("p"),uh=n("Base class for masked language models outputs."),Yd=c(),Ht=r("div"),v(ds.$$.fragment),_h=c(),xi=r("p"),wh=n("Base class for outputs of question answering Longformer models."),Zd=c(),Rt=r("div"),v(cs.$$.fragment),kh=c(),Fi=r("p"),bh=n("Base class for outputs of sentence classification models."),ec=c(),Vt=r("div"),v(ps.$$.fragment),vh=c(),Mi=r("p"),Th=n("Base class for outputs of multiple choice Longformer models."),tc=c(),Gt=r("div"),v(ms.$$.fragment),yh=c(),Ei=r("p"),$h=n("Base class for outputs of token classification models."),oc=c(),Kt=r("div"),v(hs.$$.fragment),Lh=c(),zi=r("p"),xh=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),nc=c(),Jt=r("div"),v(fs.$$.fragment),Fh=c(),qi=r("p"),Mh=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),sc=c(),Xt=r("div"),v(gs.$$.fragment),Eh=c(),Ci=r("p"),zh=n("Base class for masked language models outputs."),rc=c(),Yt=r("div"),v(us.$$.fragment),qh=c(),ji=r("p"),Ch=n("Base class for outputs of question answering Longformer models."),ac=c(),Zt=r("div"),v(_s.$$.fragment),jh=c(),Oi=r("p"),Oh=n("Base class for outputs of sentence classification models."),ic=c(),eo=r("div"),v(ws.$$.fragment),Ph=c(),Pi=r("p"),Nh=n("Base class for outputs of multiple choice models."),lc=c(),to=r("div"),v(ks.$$.fragment),Ah=c(),Ni=r("p"),Ih=n("Base class for outputs of token classification models."),dc=c(),oo=r("h2"),Vo=r("a"),Ai=r("span"),v(bs.$$.fragment),Sh=c(),Ii=r("span"),Dh=n("LongformerModel"),cc=c(),Pe=r("div"),v(vs.$$.fragment),Bh=c(),Si=r("p"),Wh=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),Qh=c(),Ts=r("p"),Uh=n("This model inherits from "),ia=r("a"),Hh=n("PreTrainedModel"),Rh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vh=c(),ys=r("p"),Gh=n("This model is also a PyTorch "),$s=r("a"),Kh=n("torch.nn.Module"),Jh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xh=c(),no=r("p"),Yh=n("This class copied code from "),la=r("a"),Zh=n("RobertaModel"),ef=n(` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),Ls=r("a"),tf=n(`Longformer:
the Long-Document Transformer`),of=n(` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),nf=c(),xs=r("p"),sf=n("The self-attention module "),Di=r("code"),rf=n("LongformerSelfAttention"),af=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),lf=c(),rt=r("div"),v(Fs.$$.fragment),df=c(),so=r("p"),cf=n("The "),da=r("a"),pf=n("LongformerModel"),mf=n(" forward method, overrides the "),Bi=r("code"),hf=n("__call__"),ff=n(" special method."),gf=c(),v(Go.$$.fragment),uf=c(),v(Ko.$$.fragment),pc=c(),ro=r("h2"),Jo=r("a"),Wi=r("span"),v(Ms.$$.fragment),_f=c(),Qi=r("span"),wf=n("LongformerForMaskedLM"),mc=c(),Re=r("div"),v(Es.$$.fragment),kf=c(),zs=r("p"),bf=n("Longformer Model with a "),Ui=r("code"),vf=n("language modeling"),Tf=n(" head on top."),yf=c(),qs=r("p"),$f=n("This model inherits from "),ca=r("a"),Lf=n("PreTrainedModel"),xf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ff=c(),Cs=r("p"),Mf=n("This model is also a PyTorch "),js=r("a"),Ef=n("torch.nn.Module"),zf=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qf=c(),Qe=r("div"),v(Os.$$.fragment),Cf=c(),ao=r("p"),jf=n("The "),pa=r("a"),Of=n("LongformerForMaskedLM"),Pf=n(" forward method, overrides the "),Hi=r("code"),Nf=n("__call__"),Af=n(" special method."),If=c(),v(Xo.$$.fragment),Sf=c(),v(Yo.$$.fragment),Df=c(),Ri=r("p"),Bf=n("Let\u2019s try a very long input."),Wf=c(),v(Zo.$$.fragment),hc=c(),io=r("h2"),en=r("a"),Vi=r("span"),v(Ps.$$.fragment),Qf=c(),Gi=r("span"),Uf=n("LongformerForSequenceClassification"),fc=c(),Ve=r("div"),v(Ns.$$.fragment),Hf=c(),Ki=r("p"),Rf=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Vf=c(),As=r("p"),Gf=n("This model inherits from "),ma=r("a"),Kf=n("PreTrainedModel"),Jf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xf=c(),Is=r("p"),Yf=n("This model is also a PyTorch "),Ss=r("a"),Zf=n("torch.nn.Module"),eg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tg=c(),Ne=r("div"),v(Ds.$$.fragment),og=c(),lo=r("p"),ng=n("The "),ha=r("a"),sg=n("LongformerForSequenceClassification"),rg=n(" forward method, overrides the "),Ji=r("code"),ag=n("__call__"),ig=n(" special method."),lg=c(),v(tn.$$.fragment),dg=c(),v(on.$$.fragment),cg=c(),v(nn.$$.fragment),pg=c(),v(sn.$$.fragment),mg=c(),v(rn.$$.fragment),gc=c(),co=r("h2"),an=r("a"),Xi=r("span"),v(Bs.$$.fragment),hg=c(),Yi=r("span"),fg=n("LongformerForMultipleChoice"),uc=c(),Ge=r("div"),v(Ws.$$.fragment),gg=c(),Zi=r("p"),ug=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),_g=c(),Qs=r("p"),wg=n("This model inherits from "),fa=r("a"),kg=n("PreTrainedModel"),bg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vg=c(),Us=r("p"),Tg=n("This model is also a PyTorch "),Hs=r("a"),yg=n("torch.nn.Module"),$g=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lg=c(),at=r("div"),v(Rs.$$.fragment),xg=c(),po=r("p"),Fg=n("The "),ga=r("a"),Mg=n("LongformerForMultipleChoice"),Eg=n(" forward method, overrides the "),el=r("code"),zg=n("__call__"),qg=n(" special method."),Cg=c(),v(ln.$$.fragment),jg=c(),v(dn.$$.fragment),_c=c(),mo=r("h2"),cn=r("a"),tl=r("span"),v(Vs.$$.fragment),Og=c(),ol=r("span"),Pg=n("LongformerForTokenClassification"),wc=c(),Ke=r("div"),v(Gs.$$.fragment),Ng=c(),nl=r("p"),Ag=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Ig=c(),Ks=r("p"),Sg=n("This model inherits from "),ua=r("a"),Dg=n("PreTrainedModel"),Bg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wg=c(),Js=r("p"),Qg=n("This model is also a PyTorch "),Xs=r("a"),Ug=n("torch.nn.Module"),Hg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rg=c(),Ye=r("div"),v(Ys.$$.fragment),Vg=c(),ho=r("p"),Gg=n("The "),_a=r("a"),Kg=n("LongformerForTokenClassification"),Jg=n(" forward method, overrides the "),sl=r("code"),Xg=n("__call__"),Yg=n(" special method."),Zg=c(),v(pn.$$.fragment),eu=c(),v(mn.$$.fragment),tu=c(),v(hn.$$.fragment),kc=c(),fo=r("h2"),fn=r("a"),rl=r("span"),v(Zs.$$.fragment),ou=c(),al=r("span"),nu=n("LongformerForQuestionAnswering"),bc=c(),Je=r("div"),v(er.$$.fragment),su=c(),go=r("p"),ru=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),il=r("code"),au=n("span start logits"),iu=n(" and "),ll=r("code"),lu=n("span end logits"),du=n(")."),cu=c(),tr=r("p"),pu=n("This model inherits from "),wa=r("a"),mu=n("PreTrainedModel"),hu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fu=c(),or=r("p"),gu=n("This model is also a PyTorch "),nr=r("a"),uu=n("torch.nn.Module"),_u=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wu=c(),it=r("div"),v(sr.$$.fragment),ku=c(),uo=r("p"),bu=n("The "),ka=r("a"),vu=n("LongformerForQuestionAnswering"),Tu=n(" forward method, overrides the "),dl=r("code"),yu=n("__call__"),$u=n(" special method."),Lu=c(),v(gn.$$.fragment),xu=c(),v(un.$$.fragment),vc=c(),_o=r("h2"),_n=r("a"),cl=r("span"),v(rr.$$.fragment),Fu=c(),pl=r("span"),Mu=n("TFLongformerModel"),Tc=c(),ze=r("div"),v(ar.$$.fragment),Eu=c(),ml=r("p"),zu=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),qu=c(),ir=r("p"),Cu=n("This model inherits from "),ba=r("a"),ju=n("TFPreTrainedModel"),Ou=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pu=c(),lr=r("p"),Nu=n("This model is also a "),dr=r("a"),Au=n("tf.keras.Model"),Iu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Su=c(),v(wn.$$.fragment),Du=c(),wo=r("p"),Bu=n("This class copies code from "),va=r("a"),Wu=n("TFRobertaModel"),Qu=n(` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),cr=r("a"),Uu=n("Longformer: the Long-Document Transformer"),Hu=n(` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Ru=c(),pr=r("p"),Vu=n("The self-attention module "),hl=r("code"),Gu=n("TFLongformerSelfAttention"),Ku=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Ju=c(),bt=r("div"),v(mr.$$.fragment),Xu=c(),ko=r("p"),Yu=n("The "),Ta=r("a"),Zu=n("TFLongformerModel"),e_=n(" forward method, overrides the "),fl=r("code"),t_=n("__call__"),o_=n(" special method."),n_=c(),v(kn.$$.fragment),yc=c(),bo=r("h2"),bn=r("a"),gl=r("span"),v(hr.$$.fragment),s_=c(),ul=r("span"),r_=n("TFLongformerForMaskedLM"),$c=c(),Ie=r("div"),v(fr.$$.fragment),a_=c(),gr=r("p"),i_=n("Longformer Model with a "),_l=r("code"),l_=n("language modeling"),d_=n(" head on top."),c_=c(),ur=r("p"),p_=n("This model inherits from "),ya=r("a"),m_=n("TFPreTrainedModel"),h_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),f_=c(),_r=r("p"),g_=n("This model is also a "),wr=r("a"),u_=n("tf.keras.Model"),__=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),w_=c(),v(vn.$$.fragment),k_=c(),Ze=r("div"),v(kr.$$.fragment),b_=c(),vo=r("p"),v_=n("The "),$a=r("a"),T_=n("TFLongformerForMaskedLM"),y_=n(" forward method, overrides the "),wl=r("code"),$_=n("__call__"),L_=n(" special method."),x_=c(),v(Tn.$$.fragment),F_=c(),v(yn.$$.fragment),M_=c(),v($n.$$.fragment),Lc=c(),To=r("h2"),Ln=r("a"),kl=r("span"),v(br.$$.fragment),E_=c(),bl=r("span"),z_=n("TFLongformerForQuestionAnswering"),xc=c(),Se=r("div"),v(vr.$$.fragment),q_=c(),yo=r("p"),C_=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),vl=r("code"),j_=n("span start logits"),O_=n(" and "),Tl=r("code"),P_=n("span end logits"),N_=n(")."),A_=c(),Tr=r("p"),I_=n("This model inherits from "),La=r("a"),S_=n("TFPreTrainedModel"),D_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),B_=c(),yr=r("p"),W_=n("This model is also a "),$r=r("a"),Q_=n("tf.keras.Model"),U_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),H_=c(),v(xn.$$.fragment),R_=c(),et=r("div"),v(Lr.$$.fragment),V_=c(),$o=r("p"),G_=n("The "),xa=r("a"),K_=n("TFLongformerForQuestionAnswering"),J_=n(" forward method, overrides the "),yl=r("code"),X_=n("__call__"),Y_=n(" special method."),Z_=c(),v(Fn.$$.fragment),ew=c(),v(Mn.$$.fragment),tw=c(),v(En.$$.fragment),Fc=c(),Lo=r("h2"),zn=r("a"),$l=r("span"),v(xr.$$.fragment),ow=c(),Ll=r("span"),nw=n("TFLongformerForSequenceClassification"),Mc=c(),De=r("div"),v(Fr.$$.fragment),sw=c(),xl=r("p"),rw=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),aw=c(),Mr=r("p"),iw=n("This model inherits from "),Fa=r("a"),lw=n("TFPreTrainedModel"),dw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cw=c(),Er=r("p"),pw=n("This model is also a "),zr=r("a"),mw=n("tf.keras.Model"),hw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fw=c(),v(qn.$$.fragment),gw=c(),tt=r("div"),v(qr.$$.fragment),uw=c(),xo=r("p"),_w=n("The "),Ma=r("a"),ww=n("TFLongformerForSequenceClassification"),kw=n(" forward method, overrides the "),Fl=r("code"),bw=n("__call__"),vw=n(" special method."),Tw=c(),v(Cn.$$.fragment),yw=c(),v(jn.$$.fragment),$w=c(),v(On.$$.fragment),Ec=c(),Fo=r("h2"),Pn=r("a"),Ml=r("span"),v(Cr.$$.fragment),Lw=c(),El=r("span"),xw=n("TFLongformerForTokenClassification"),zc=c(),Be=r("div"),v(jr.$$.fragment),Fw=c(),zl=r("p"),Mw=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Ew=c(),Or=r("p"),zw=n("This model inherits from "),Ea=r("a"),qw=n("TFPreTrainedModel"),Cw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jw=c(),Pr=r("p"),Ow=n("This model is also a "),Nr=r("a"),Pw=n("tf.keras.Model"),Nw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Aw=c(),v(Nn.$$.fragment),Iw=c(),ot=r("div"),v(Ar.$$.fragment),Sw=c(),Mo=r("p"),Dw=n("The "),za=r("a"),Bw=n("TFLongformerForTokenClassification"),Ww=n(" forward method, overrides the "),ql=r("code"),Qw=n("__call__"),Uw=n(" special method."),Hw=c(),v(An.$$.fragment),Rw=c(),v(In.$$.fragment),Vw=c(),v(Sn.$$.fragment),qc=c(),Eo=r("h2"),Dn=r("a"),Cl=r("span"),v(Ir.$$.fragment),Gw=c(),jl=r("span"),Kw=n("TFLongformerForMultipleChoice"),Cc=c(),We=r("div"),v(Sr.$$.fragment),Jw=c(),Ol=r("p"),Xw=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Yw=c(),Dr=r("p"),Zw=n("This model inherits from "),qa=r("a"),ek=n("TFPreTrainedModel"),tk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ok=c(),Br=r("p"),nk=n("This model is also a "),Wr=r("a"),sk=n("tf.keras.Model"),rk=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ak=c(),v(Bn.$$.fragment),ik=c(),lt=r("div"),v(Qr.$$.fragment),lk=c(),zo=r("p"),dk=n("The "),Ca=r("a"),ck=n("TFLongformerForMultipleChoice"),pk=n(" forward method, overrides the "),Pl=r("code"),mk=n("__call__"),hk=n(" special method."),fk=c(),v(Wn.$$.fragment),gk=c(),v(Qn.$$.fragment),this.h()},l(o){const g=uT('[data-svelte="svelte-1phssyn"]',document.head);l=a(g,"META",{name:!0,content:!0}),g.forEach(t),k=p(o),m=a(o,"H1",{class:!0});var Ur=i(m);h=a(Ur,"A",{id:!0,class:!0,href:!0});var Nl=i(h);b=a(Nl,"SPAN",{});var Al=i(b);T(d.$$.fragment,Al),Al.forEach(t),Nl.forEach(t),u=p(Ur),E=a(Ur,"SPAN",{});var Il=i(E);me=s(Il,"Longformer"),Il.forEach(t),Ur.forEach(t),J=p(o),z=a(o,"H2",{class:!0});var Hr=i(z);Z=a(Hr,"A",{id:!0,class:!0,href:!0});var Sl=i(Z);S=a(Sl,"SPAN",{});var Dl=i(S);T(ee.$$.fragment,Dl),Dl.forEach(t),Sl.forEach(t),he=p(Hr),D=a(Hr,"SPAN",{});var Bl=i(D);fe=s(Bl,"Overview"),Bl.forEach(t),Hr.forEach(t),le=p(o),G=a(o,"P",{});var Rr=i(G);P=s(Rr,"The Longformer model was presented in "),te=a(Rr,"A",{href:!0,rel:!0});var Wl=i(te);X=s(Wl,"Longformer: The Long-Document Transformer"),Wl.forEach(t),q=s(Rr," by Iz Beltagy, Matthew E. Peters, Arman Cohan."),Rr.forEach(t),j=p(o),ne=a(o,"P",{});var Ql=i(ne);U=s(Ql,"The abstract from the paper is the following:"),Ql.forEach(t),de=p(o),se=a(o,"P",{});var Ul=i(se);B=a(Ul,"EM",{});var Hl=i(B);ge=s(Hl,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),Hl.forEach(t),Ul.forEach(t),ce=p(o),C=a(o,"P",{});var Rl=i(C);ue=s(Rl,"Tips:"),Rl.forEach(t),Q=p(o),re=a(o,"UL",{});var Vl=i(re);K=a(Vl,"LI",{});var _t=i(K);H=s(_t,"Since the Longformer is based on RoBERTa, it doesn\u2019t have "),ae=a(_t,"CODE",{});var Gl=i(ae);_e=s(Gl,"token_type_ids"),Gl.forEach(t),N=s(_t,`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),ie=a(_t,"CODE",{});var Kl=i(ie);R=s(Kl,"tokenizer.sep_token"),Kl.forEach(t),we=s(_t,` (or
`),w=a(_t,"CODE",{});var Jl=i(w);F=s(Jl,"</s>"),Jl.forEach(t),Y=s(_t,")."),_t.forEach(t),Vl.forEach(t),Te=p(o),pe=a(o,"P",{});var qo=i(pe);A=s(qo,"This model was contributed by "),be=a(qo,"A",{href:!0,rel:!0});var Xl=i(be);xe=s(Xl,"beltagy"),Xl.forEach(t),Fe=s(qo,". The Authors\u2019 code can be found "),O=a(qo,"A",{href:!0,rel:!0});var Yl=i(O);V=s(Yl,"here"),Yl.forEach(t),Me=s(qo,"."),qo.forEach(t),ye=p(o),I=a(o,"H2",{class:!0});var Vr=i(I);ke=a(Vr,"A",{id:!0,class:!0,href:!0});var Zl=i(ke);ve=a(Zl,"SPAN",{});var ed=i(ve);T(oe.$$.fragment,ed),ed.forEach(t),Zl.forEach(t),Ee=p(Vr),ti=a(Vr,"SPAN",{});var td=i(ti);Wp=s(td,"Longformer Self Attention"),td.forEach(t),Vr.forEach(t),fd=p(o),$e=a(o,"P",{});var qe=i($e);Qp=s(qe,`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),gd=Po(qe),ud=s(qe,` previous tokens and
`),_d=Po(qe),wd=s(qe," succeding tokens with "),kd=Po(qe),bd=s(qe,` being the window length as defined in
`),oi=a(qe,"CODE",{});var od=i(oi);Up=s(od,"config.attention_window"),od.forEach(t),Hp=s(qe,". Note that "),ni=a(qe,"CODE",{});var nd=i(ni);Rp=s(nd,"config.attention_window"),nd.forEach(t),Vp=s(qe," can be of type "),si=a(qe,"CODE",{});var sd=i(si);Gp=s(sd,"List"),sd.forEach(t),Kp=s(qe,` to define a
different `),vd=Po(qe),Td=s(qe,` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),ri=a(qe,"CODE",{});var rd=i(ri);Jp=s(rd,"BertSelfAttention"),rd.forEach(t),Xp=s(qe,"."),qe.forEach(t),yd=p(o),wt=a(o,"P",{});var Co=i(wt);Yp=s(Co,`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),$d=Po(Co),Ld=s(Co,`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),ai=a(Co,"EM",{});var ad=i(ai);Zp=s(ad,"symmetric"),ad.forEach(t),em=s(Co,"."),Co.forEach(t),xd=p(o),kt=a(o,"P",{});var jo=i(kt);tm=s(jo,`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),ii=a(jo,"CODE",{});var id=i(ii);om=s(id,"global_attention_mask"),id.forEach(t),nm=s(jo,` at run-time appropriately. All Longformer models employ the following logic for
`),li=a(jo,"CODE",{});var ld=i(li);sm=s(ld,"global_attention_mask"),ld.forEach(t),rm=s(jo,":"),jo.forEach(t),Fd=p(o),No=a(o,"UL",{});var Gr=i(No);di=a(Gr,"LI",{});var dd=i(di);am=s(dd,"0: the token attends \u201Clocally\u201D,"),dd.forEach(t),im=p(Gr),ci=a(Gr,"LI",{});var cd=i(ci);lm=s(cd,"1: the token attends \u201Cglobally\u201D."),cd.forEach(t),Gr.forEach(t),Md=p(o),Ao=a(o,"P",{});var Oc=i(Ao);dm=s(Oc,"For more information please also refer to "),Kr=a(Oc,"A",{href:!0});var uk=i(Kr);cm=s(uk,"forward()"),uk.forEach(t),pm=s(Oc," method."),Oc.forEach(t),Ed=p(o),Xe=a(o,"P",{});var vt=i(Xe);mm=s(vt,`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),zd=Po(vt),qd=s(vt,` to
`),Cd=Po(vt),jd=s(vt,", with "),Od=Po(vt),Pd=s(vt," being the sequence length and "),Nd=Po(vt),Ad=s(vt,` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),vt.forEach(t),Id=p(o),Io=a(o,"P",{});var Pc=i(Io);hm=s(Pc,"For more information, please refer to the official "),Gn=a(Pc,"A",{href:!0,rel:!0});var _k=i(Gn);fm=s(_k,"paper"),_k.forEach(t),gm=s(Pc,"."),Pc.forEach(t),Sd=p(o),jt=a(o,"H2",{class:!0});var Nc=i(jt);So=a(Nc,"A",{id:!0,class:!0,href:!0});var wk=i(So);pi=a(wk,"SPAN",{});var kk=i(pi);T(Kn.$$.fragment,kk),kk.forEach(t),wk.forEach(t),um=p(Nc),mi=a(Nc,"SPAN",{});var bk=i(mi);_m=s(bk,"Training"),bk.forEach(t),Nc.forEach(t),Dd=p(o),Ot=a(o,"P",{});var pd=i(Ot);Jr=a(pd,"A",{href:!0});var vk=i(Jr);wm=s(vk,"LongformerForMaskedLM"),vk.forEach(t),km=s(pd," is trained the exact same way "),Xr=a(pd,"A",{href:!0});var Tk=i(Xr);bm=s(Tk,"RobertaForMaskedLM"),Tk.forEach(t),vm=s(pd,` is
trained and should be used as follows:`),pd.forEach(t),Bd=p(o),T(Jn.$$.fragment,o),Wd=p(o),Pt=a(o,"H2",{class:!0});var Ac=i(Pt);Do=a(Ac,"A",{id:!0,class:!0,href:!0});var yk=i(Do);hi=a(yk,"SPAN",{});var $k=i(hi);T(Xn.$$.fragment,$k),$k.forEach(t),yk.forEach(t),Tm=p(Ac),fi=a(Ac,"SPAN",{});var Lk=i(fi);ym=s(Lk,"LongformerConfig"),Lk.forEach(t),Ac.forEach(t),Qd=p(o),He=a(o,"DIV",{class:!0});var Tt=i(He);T(Yn.$$.fragment,Tt),$m=p(Tt),Nt=a(Tt,"P",{});var ja=i(Nt);Lm=s(ja,"This is the configuration class to store the configuration of a "),Yr=a(ja,"A",{href:!0});var xk=i(Yr);xm=s(xk,"LongformerModel"),xk.forEach(t),Fm=s(ja," or a "),Zr=a(ja,"A",{href:!0});var Fk=i(Zr);Mm=s(Fk,"TFLongformerModel"),Fk.forEach(t),Em=s(ja,`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),ja.forEach(t),zm=p(Tt),At=a(Tt,"P",{});var Oa=i(At);qm=s(Oa,"This is the configuration class to store the configuration of a "),ea=a(Oa,"A",{href:!0});var Mk=i(ea);Cm=s(Mk,"LongformerModel"),Mk.forEach(t),jm=s(Oa,`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LongFormer
`),Zn=a(Oa,"A",{href:!0,rel:!0});var Ek=i(Zn);Om=s(Ek,"allenai/longformer-base-4096"),Ek.forEach(t),Pm=s(Oa,` architecture with a sequence
length 4,096.`),Oa.forEach(t),Nm=p(Tt),It=a(Tt,"P",{});var Pa=i(It);Am=s(Pa,"The "),ta=a(Pa,"A",{href:!0});var zk=i(ta);Im=s(zk,"LongformerConfig"),zk.forEach(t),Sm=s(Pa," class directly inherits "),oa=a(Pa,"A",{href:!0});var qk=i(oa);Dm=s(qk,"RobertaConfig"),qk.forEach(t),Bm=s(Pa,`. It reuses the same defaults. Please check the
parent class for more information.`),Pa.forEach(t),Wm=p(Tt),T(Bo.$$.fragment,Tt),Tt.forEach(t),Ud=p(o),St=a(o,"H2",{class:!0});var Ic=i(St);Wo=a(Ic,"A",{id:!0,class:!0,href:!0});var Ck=i(Wo);gi=a(Ck,"SPAN",{});var jk=i(gi);T(es.$$.fragment,jk),jk.forEach(t),Ck.forEach(t),Qm=p(Ic),ui=a(Ic,"SPAN",{});var Ok=i(ui);Um=s(Ok,"LongformerTokenizer"),Ok.forEach(t),Ic.forEach(t),Hd=p(o),gt=a(o,"DIV",{class:!0});var Na=i(gt);T(ts.$$.fragment,Na),Hm=p(Na),_i=a(Na,"P",{});var Pk=i(_i);Rm=s(Pk,"Construct a Longformer tokenizer."),Pk.forEach(t),Vm=p(Na),Qo=a(Na,"P",{});var md=i(Qo);na=a(md,"A",{href:!0});var Nk=i(na);Gm=s(Nk,"LongformerTokenizer"),Nk.forEach(t),Km=s(md," is identical to "),sa=a(md,"A",{href:!0});var Ak=i(sa);Jm=s(Ak,"RobertaTokenizer"),Ak.forEach(t),Xm=s(md,`. Refer to the superclass for usage examples and
documentation concerning parameters.`),md.forEach(t),Na.forEach(t),Rd=p(o),Dt=a(o,"H2",{class:!0});var Sc=i(Dt);Uo=a(Sc,"A",{id:!0,class:!0,href:!0});var Ik=i(Uo);wi=a(Ik,"SPAN",{});var Sk=i(wi);T(os.$$.fragment,Sk),Sk.forEach(t),Ik.forEach(t),Ym=p(Sc),ki=a(Sc,"SPAN",{});var Dk=i(ki);Zm=s(Dk,"LongformerTokenizerFast"),Dk.forEach(t),Sc.forEach(t),Vd=p(o),ut=a(o,"DIV",{class:!0});var Aa=i(ut);T(ns.$$.fragment,Aa),eh=p(Aa),ss=a(Aa,"P",{});var Dc=i(ss);th=s(Dc,"Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),bi=a(Dc,"EM",{});var Bk=i(bi);oh=s(Bk,"tokenizers"),Bk.forEach(t),nh=s(Dc," library)."),Dc.forEach(t),sh=p(Aa),Ho=a(Aa,"P",{});var hd=i(Ho);ra=a(hd,"A",{href:!0});var Wk=i(ra);rh=s(Wk,"LongformerTokenizerFast"),Wk.forEach(t),ah=s(hd," is identical to "),aa=a(hd,"A",{href:!0});var Qk=i(aa);ih=s(Qk,"RobertaTokenizerFast"),Qk.forEach(t),lh=s(hd,`. Refer to the superclass for usage examples
and documentation concerning parameters.`),hd.forEach(t),Aa.forEach(t),Gd=p(o),Bt=a(o,"H2",{class:!0});var Bc=i(Bt);Ro=a(Bc,"A",{id:!0,class:!0,href:!0});var Uk=i(Ro);vi=a(Uk,"SPAN",{});var Hk=i(vi);T(rs.$$.fragment,Hk),Hk.forEach(t),Uk.forEach(t),dh=p(Bc),Ti=a(Bc,"SPAN",{});var Rk=i(Ti);ch=s(Rk,"Longformer specific outputs"),Rk.forEach(t),Bc.forEach(t),Kd=p(o),Wt=a(o,"DIV",{class:!0});var Wc=i(Wt);T(as.$$.fragment,Wc),ph=p(Wc),yi=a(Wc,"P",{});var Vk=i(yi);mh=s(Vk,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Vk.forEach(t),Wc.forEach(t),Jd=p(o),Qt=a(o,"DIV",{class:!0});var Qc=i(Qt);T(is.$$.fragment,Qc),hh=p(Qc),$i=a(Qc,"P",{});var Gk=i($i);fh=s(Gk,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Gk.forEach(t),Qc.forEach(t),Xd=p(o),Ut=a(o,"DIV",{class:!0});var Uc=i(Ut);T(ls.$$.fragment,Uc),gh=p(Uc),Li=a(Uc,"P",{});var Kk=i(Li);uh=s(Kk,"Base class for masked language models outputs."),Kk.forEach(t),Uc.forEach(t),Yd=p(o),Ht=a(o,"DIV",{class:!0});var Hc=i(Ht);T(ds.$$.fragment,Hc),_h=p(Hc),xi=a(Hc,"P",{});var Jk=i(xi);wh=s(Jk,"Base class for outputs of question answering Longformer models."),Jk.forEach(t),Hc.forEach(t),Zd=p(o),Rt=a(o,"DIV",{class:!0});var Rc=i(Rt);T(cs.$$.fragment,Rc),kh=p(Rc),Fi=a(Rc,"P",{});var Xk=i(Fi);bh=s(Xk,"Base class for outputs of sentence classification models."),Xk.forEach(t),Rc.forEach(t),ec=p(o),Vt=a(o,"DIV",{class:!0});var Vc=i(Vt);T(ps.$$.fragment,Vc),vh=p(Vc),Mi=a(Vc,"P",{});var Yk=i(Mi);Th=s(Yk,"Base class for outputs of multiple choice Longformer models."),Yk.forEach(t),Vc.forEach(t),tc=p(o),Gt=a(o,"DIV",{class:!0});var Gc=i(Gt);T(ms.$$.fragment,Gc),yh=p(Gc),Ei=a(Gc,"P",{});var Zk=i(Ei);$h=s(Zk,"Base class for outputs of token classification models."),Zk.forEach(t),Gc.forEach(t),oc=p(o),Kt=a(o,"DIV",{class:!0});var Kc=i(Kt);T(hs.$$.fragment,Kc),Lh=p(Kc),zi=a(Kc,"P",{});var eb=i(zi);xh=s(eb,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),eb.forEach(t),Kc.forEach(t),nc=p(o),Jt=a(o,"DIV",{class:!0});var Jc=i(Jt);T(fs.$$.fragment,Jc),Fh=p(Jc),qi=a(Jc,"P",{});var tb=i(qi);Mh=s(tb,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),tb.forEach(t),Jc.forEach(t),sc=p(o),Xt=a(o,"DIV",{class:!0});var Xc=i(Xt);T(gs.$$.fragment,Xc),Eh=p(Xc),Ci=a(Xc,"P",{});var ob=i(Ci);zh=s(ob,"Base class for masked language models outputs."),ob.forEach(t),Xc.forEach(t),rc=p(o),Yt=a(o,"DIV",{class:!0});var Yc=i(Yt);T(us.$$.fragment,Yc),qh=p(Yc),ji=a(Yc,"P",{});var nb=i(ji);Ch=s(nb,"Base class for outputs of question answering Longformer models."),nb.forEach(t),Yc.forEach(t),ac=p(o),Zt=a(o,"DIV",{class:!0});var Zc=i(Zt);T(_s.$$.fragment,Zc),jh=p(Zc),Oi=a(Zc,"P",{});var sb=i(Oi);Oh=s(sb,"Base class for outputs of sentence classification models."),sb.forEach(t),Zc.forEach(t),ic=p(o),eo=a(o,"DIV",{class:!0});var ep=i(eo);T(ws.$$.fragment,ep),Ph=p(ep),Pi=a(ep,"P",{});var rb=i(Pi);Nh=s(rb,"Base class for outputs of multiple choice models."),rb.forEach(t),ep.forEach(t),lc=p(o),to=a(o,"DIV",{class:!0});var tp=i(to);T(ks.$$.fragment,tp),Ah=p(tp),Ni=a(tp,"P",{});var ab=i(Ni);Ih=s(ab,"Base class for outputs of token classification models."),ab.forEach(t),tp.forEach(t),dc=p(o),oo=a(o,"H2",{class:!0});var op=i(oo);Vo=a(op,"A",{id:!0,class:!0,href:!0});var ib=i(Vo);Ai=a(ib,"SPAN",{});var lb=i(Ai);T(bs.$$.fragment,lb),lb.forEach(t),ib.forEach(t),Sh=p(op),Ii=a(op,"SPAN",{});var db=i(Ii);Dh=s(db,"LongformerModel"),db.forEach(t),op.forEach(t),cc=p(o),Pe=a(o,"DIV",{class:!0});var nt=i(Pe);T(vs.$$.fragment,nt),Bh=p(nt),Si=a(nt,"P",{});var cb=i(Si);Wh=s(cb,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),cb.forEach(t),Qh=p(nt),Ts=a(nt,"P",{});var np=i(Ts);Uh=s(np,"This model inherits from "),ia=a(np,"A",{href:!0});var pb=i(ia);Hh=s(pb,"PreTrainedModel"),pb.forEach(t),Rh=s(np,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),np.forEach(t),Vh=p(nt),ys=a(nt,"P",{});var sp=i(ys);Gh=s(sp,"This model is also a PyTorch "),$s=a(sp,"A",{href:!0,rel:!0});var mb=i($s);Kh=s(mb,"torch.nn.Module"),mb.forEach(t),Jh=s(sp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sp.forEach(t),Xh=p(nt),no=a(nt,"P",{});var Ia=i(no);Yh=s(Ia,"This class copied code from "),la=a(Ia,"A",{href:!0});var hb=i(la);Zh=s(hb,"RobertaModel"),hb.forEach(t),ef=s(Ia,` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),Ls=a(Ia,"A",{href:!0,rel:!0});var fb=i(Ls);tf=s(fb,`Longformer:
the Long-Document Transformer`),fb.forEach(t),of=s(Ia,` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),Ia.forEach(t),nf=p(nt),xs=a(nt,"P",{});var rp=i(xs);sf=s(rp,"The self-attention module "),Di=a(rp,"CODE",{});var gb=i(Di);rf=s(gb,"LongformerSelfAttention"),gb.forEach(t),af=s(rp,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),rp.forEach(t),lf=p(nt),rt=a(nt,"DIV",{class:!0});var Un=i(rt);T(Fs.$$.fragment,Un),df=p(Un),so=a(Un,"P",{});var Sa=i(so);cf=s(Sa,"The "),da=a(Sa,"A",{href:!0});var ub=i(da);pf=s(ub,"LongformerModel"),ub.forEach(t),mf=s(Sa," forward method, overrides the "),Bi=a(Sa,"CODE",{});var _b=i(Bi);hf=s(_b,"__call__"),_b.forEach(t),ff=s(Sa," special method."),Sa.forEach(t),gf=p(Un),T(Go.$$.fragment,Un),uf=p(Un),T(Ko.$$.fragment,Un),Un.forEach(t),nt.forEach(t),pc=p(o),ro=a(o,"H2",{class:!0});var ap=i(ro);Jo=a(ap,"A",{id:!0,class:!0,href:!0});var wb=i(Jo);Wi=a(wb,"SPAN",{});var kb=i(Wi);T(Ms.$$.fragment,kb),kb.forEach(t),wb.forEach(t),_f=p(ap),Qi=a(ap,"SPAN",{});var bb=i(Qi);wf=s(bb,"LongformerForMaskedLM"),bb.forEach(t),ap.forEach(t),mc=p(o),Re=a(o,"DIV",{class:!0});var yt=i(Re);T(Es.$$.fragment,yt),kf=p(yt),zs=a(yt,"P",{});var ip=i(zs);bf=s(ip,"Longformer Model with a "),Ui=a(ip,"CODE",{});var vb=i(Ui);vf=s(vb,"language modeling"),vb.forEach(t),Tf=s(ip," head on top."),ip.forEach(t),yf=p(yt),qs=a(yt,"P",{});var lp=i(qs);$f=s(lp,"This model inherits from "),ca=a(lp,"A",{href:!0});var Tb=i(ca);Lf=s(Tb,"PreTrainedModel"),Tb.forEach(t),xf=s(lp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lp.forEach(t),Ff=p(yt),Cs=a(yt,"P",{});var dp=i(Cs);Mf=s(dp,"This model is also a PyTorch "),js=a(dp,"A",{href:!0,rel:!0});var yb=i(js);Ef=s(yb,"torch.nn.Module"),yb.forEach(t),zf=s(dp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dp.forEach(t),qf=p(yt),Qe=a(yt,"DIV",{class:!0});var dt=i(Qe);T(Os.$$.fragment,dt),Cf=p(dt),ao=a(dt,"P",{});var Da=i(ao);jf=s(Da,"The "),pa=a(Da,"A",{href:!0});var $b=i(pa);Of=s($b,"LongformerForMaskedLM"),$b.forEach(t),Pf=s(Da," forward method, overrides the "),Hi=a(Da,"CODE",{});var Lb=i(Hi);Nf=s(Lb,"__call__"),Lb.forEach(t),Af=s(Da," special method."),Da.forEach(t),If=p(dt),T(Xo.$$.fragment,dt),Sf=p(dt),T(Yo.$$.fragment,dt),Df=p(dt),Ri=a(dt,"P",{});var xb=i(Ri);Bf=s(xb,"Let\u2019s try a very long input."),xb.forEach(t),Wf=p(dt),T(Zo.$$.fragment,dt),dt.forEach(t),yt.forEach(t),hc=p(o),io=a(o,"H2",{class:!0});var cp=i(io);en=a(cp,"A",{id:!0,class:!0,href:!0});var Fb=i(en);Vi=a(Fb,"SPAN",{});var Mb=i(Vi);T(Ps.$$.fragment,Mb),Mb.forEach(t),Fb.forEach(t),Qf=p(cp),Gi=a(cp,"SPAN",{});var Eb=i(Gi);Uf=s(Eb,"LongformerForSequenceClassification"),Eb.forEach(t),cp.forEach(t),fc=p(o),Ve=a(o,"DIV",{class:!0});var $t=i(Ve);T(Ns.$$.fragment,$t),Hf=p($t),Ki=a($t,"P",{});var zb=i(Ki);Rf=s(zb,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),zb.forEach(t),Vf=p($t),As=a($t,"P",{});var pp=i(As);Gf=s(pp,"This model inherits from "),ma=a(pp,"A",{href:!0});var qb=i(ma);Kf=s(qb,"PreTrainedModel"),qb.forEach(t),Jf=s(pp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pp.forEach(t),Xf=p($t),Is=a($t,"P",{});var mp=i(Is);Yf=s(mp,"This model is also a PyTorch "),Ss=a(mp,"A",{href:!0,rel:!0});var Cb=i(Ss);Zf=s(Cb,"torch.nn.Module"),Cb.forEach(t),eg=s(mp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mp.forEach(t),tg=p($t),Ne=a($t,"DIV",{class:!0});var st=i(Ne);T(Ds.$$.fragment,st),og=p(st),lo=a(st,"P",{});var Ba=i(lo);ng=s(Ba,"The "),ha=a(Ba,"A",{href:!0});var jb=i(ha);sg=s(jb,"LongformerForSequenceClassification"),jb.forEach(t),rg=s(Ba," forward method, overrides the "),Ji=a(Ba,"CODE",{});var Ob=i(Ji);ag=s(Ob,"__call__"),Ob.forEach(t),ig=s(Ba," special method."),Ba.forEach(t),lg=p(st),T(tn.$$.fragment,st),dg=p(st),T(on.$$.fragment,st),cg=p(st),T(nn.$$.fragment,st),pg=p(st),T(sn.$$.fragment,st),mg=p(st),T(rn.$$.fragment,st),st.forEach(t),$t.forEach(t),gc=p(o),co=a(o,"H2",{class:!0});var hp=i(co);an=a(hp,"A",{id:!0,class:!0,href:!0});var Pb=i(an);Xi=a(Pb,"SPAN",{});var Nb=i(Xi);T(Bs.$$.fragment,Nb),Nb.forEach(t),Pb.forEach(t),hg=p(hp),Yi=a(hp,"SPAN",{});var Ab=i(Yi);fg=s(Ab,"LongformerForMultipleChoice"),Ab.forEach(t),hp.forEach(t),uc=p(o),Ge=a(o,"DIV",{class:!0});var Lt=i(Ge);T(Ws.$$.fragment,Lt),gg=p(Lt),Zi=a(Lt,"P",{});var Ib=i(Zi);ug=s(Ib,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Ib.forEach(t),_g=p(Lt),Qs=a(Lt,"P",{});var fp=i(Qs);wg=s(fp,"This model inherits from "),fa=a(fp,"A",{href:!0});var Sb=i(fa);kg=s(Sb,"PreTrainedModel"),Sb.forEach(t),bg=s(fp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fp.forEach(t),vg=p(Lt),Us=a(Lt,"P",{});var gp=i(Us);Tg=s(gp,"This model is also a PyTorch "),Hs=a(gp,"A",{href:!0,rel:!0});var Db=i(Hs);yg=s(Db,"torch.nn.Module"),Db.forEach(t),$g=s(gp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gp.forEach(t),Lg=p(Lt),at=a(Lt,"DIV",{class:!0});var Hn=i(at);T(Rs.$$.fragment,Hn),xg=p(Hn),po=a(Hn,"P",{});var Wa=i(po);Fg=s(Wa,"The "),ga=a(Wa,"A",{href:!0});var Bb=i(ga);Mg=s(Bb,"LongformerForMultipleChoice"),Bb.forEach(t),Eg=s(Wa," forward method, overrides the "),el=a(Wa,"CODE",{});var Wb=i(el);zg=s(Wb,"__call__"),Wb.forEach(t),qg=s(Wa," special method."),Wa.forEach(t),Cg=p(Hn),T(ln.$$.fragment,Hn),jg=p(Hn),T(dn.$$.fragment,Hn),Hn.forEach(t),Lt.forEach(t),_c=p(o),mo=a(o,"H2",{class:!0});var up=i(mo);cn=a(up,"A",{id:!0,class:!0,href:!0});var Qb=i(cn);tl=a(Qb,"SPAN",{});var Ub=i(tl);T(Vs.$$.fragment,Ub),Ub.forEach(t),Qb.forEach(t),Og=p(up),ol=a(up,"SPAN",{});var Hb=i(ol);Pg=s(Hb,"LongformerForTokenClassification"),Hb.forEach(t),up.forEach(t),wc=p(o),Ke=a(o,"DIV",{class:!0});var xt=i(Ke);T(Gs.$$.fragment,xt),Ng=p(xt),nl=a(xt,"P",{});var Rb=i(nl);Ag=s(Rb,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Rb.forEach(t),Ig=p(xt),Ks=a(xt,"P",{});var _p=i(Ks);Sg=s(_p,"This model inherits from "),ua=a(_p,"A",{href:!0});var Vb=i(ua);Dg=s(Vb,"PreTrainedModel"),Vb.forEach(t),Bg=s(_p,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_p.forEach(t),Wg=p(xt),Js=a(xt,"P",{});var wp=i(Js);Qg=s(wp,"This model is also a PyTorch "),Xs=a(wp,"A",{href:!0,rel:!0});var Gb=i(Xs);Ug=s(Gb,"torch.nn.Module"),Gb.forEach(t),Hg=s(wp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wp.forEach(t),Rg=p(xt),Ye=a(xt,"DIV",{class:!0});var Ft=i(Ye);T(Ys.$$.fragment,Ft),Vg=p(Ft),ho=a(Ft,"P",{});var Qa=i(ho);Gg=s(Qa,"The "),_a=a(Qa,"A",{href:!0});var Kb=i(_a);Kg=s(Kb,"LongformerForTokenClassification"),Kb.forEach(t),Jg=s(Qa," forward method, overrides the "),sl=a(Qa,"CODE",{});var Jb=i(sl);Xg=s(Jb,"__call__"),Jb.forEach(t),Yg=s(Qa," special method."),Qa.forEach(t),Zg=p(Ft),T(pn.$$.fragment,Ft),eu=p(Ft),T(mn.$$.fragment,Ft),tu=p(Ft),T(hn.$$.fragment,Ft),Ft.forEach(t),xt.forEach(t),kc=p(o),fo=a(o,"H2",{class:!0});var kp=i(fo);fn=a(kp,"A",{id:!0,class:!0,href:!0});var Xb=i(fn);rl=a(Xb,"SPAN",{});var Yb=i(rl);T(Zs.$$.fragment,Yb),Yb.forEach(t),Xb.forEach(t),ou=p(kp),al=a(kp,"SPAN",{});var Zb=i(al);nu=s(Zb,"LongformerForQuestionAnswering"),Zb.forEach(t),kp.forEach(t),bc=p(o),Je=a(o,"DIV",{class:!0});var Mt=i(Je);T(er.$$.fragment,Mt),su=p(Mt),go=a(Mt,"P",{});var Ua=i(go);ru=s(Ua,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),il=a(Ua,"CODE",{});var ev=i(il);au=s(ev,"span start logits"),ev.forEach(t),iu=s(Ua," and "),ll=a(Ua,"CODE",{});var tv=i(ll);lu=s(tv,"span end logits"),tv.forEach(t),du=s(Ua,")."),Ua.forEach(t),cu=p(Mt),tr=a(Mt,"P",{});var bp=i(tr);pu=s(bp,"This model inherits from "),wa=a(bp,"A",{href:!0});var ov=i(wa);mu=s(ov,"PreTrainedModel"),ov.forEach(t),hu=s(bp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bp.forEach(t),fu=p(Mt),or=a(Mt,"P",{});var vp=i(or);gu=s(vp,"This model is also a PyTorch "),nr=a(vp,"A",{href:!0,rel:!0});var nv=i(nr);uu=s(nv,"torch.nn.Module"),nv.forEach(t),_u=s(vp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vp.forEach(t),wu=p(Mt),it=a(Mt,"DIV",{class:!0});var Rn=i(it);T(sr.$$.fragment,Rn),ku=p(Rn),uo=a(Rn,"P",{});var Ha=i(uo);bu=s(Ha,"The "),ka=a(Ha,"A",{href:!0});var sv=i(ka);vu=s(sv,"LongformerForQuestionAnswering"),sv.forEach(t),Tu=s(Ha," forward method, overrides the "),dl=a(Ha,"CODE",{});var rv=i(dl);yu=s(rv,"__call__"),rv.forEach(t),$u=s(Ha," special method."),Ha.forEach(t),Lu=p(Rn),T(gn.$$.fragment,Rn),xu=p(Rn),T(un.$$.fragment,Rn),Rn.forEach(t),Mt.forEach(t),vc=p(o),_o=a(o,"H2",{class:!0});var Tp=i(_o);_n=a(Tp,"A",{id:!0,class:!0,href:!0});var av=i(_n);cl=a(av,"SPAN",{});var iv=i(cl);T(rr.$$.fragment,iv),iv.forEach(t),av.forEach(t),Fu=p(Tp),pl=a(Tp,"SPAN",{});var lv=i(pl);Mu=s(lv,"TFLongformerModel"),lv.forEach(t),Tp.forEach(t),Tc=p(o),ze=a(o,"DIV",{class:!0});var Ue=i(ze);T(ar.$$.fragment,Ue),Eu=p(Ue),ml=a(Ue,"P",{});var dv=i(ml);zu=s(dv,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),dv.forEach(t),qu=p(Ue),ir=a(Ue,"P",{});var yp=i(ir);Cu=s(yp,"This model inherits from "),ba=a(yp,"A",{href:!0});var cv=i(ba);ju=s(cv,"TFPreTrainedModel"),cv.forEach(t),Ou=s(yp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yp.forEach(t),Pu=p(Ue),lr=a(Ue,"P",{});var $p=i(lr);Nu=s($p,"This model is also a "),dr=a($p,"A",{href:!0,rel:!0});var pv=i(dr);Au=s(pv,"tf.keras.Model"),pv.forEach(t),Iu=s($p,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$p.forEach(t),Su=p(Ue),T(wn.$$.fragment,Ue),Du=p(Ue),wo=a(Ue,"P",{});var Ra=i(wo);Bu=s(Ra,"This class copies code from "),va=a(Ra,"A",{href:!0});var mv=i(va);Wu=s(mv,"TFRobertaModel"),mv.forEach(t),Qu=s(Ra,` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),cr=a(Ra,"A",{href:!0,rel:!0});var hv=i(cr);Uu=s(hv,"Longformer: the Long-Document Transformer"),hv.forEach(t),Hu=s(Ra,` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Ra.forEach(t),Ru=p(Ue),pr=a(Ue,"P",{});var Lp=i(pr);Vu=s(Lp,"The self-attention module "),hl=a(Lp,"CODE",{});var fv=i(hl);Gu=s(fv,"TFLongformerSelfAttention"),fv.forEach(t),Ku=s(Lp,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Lp.forEach(t),Ju=p(Ue),bt=a(Ue,"DIV",{class:!0});var Va=i(bt);T(mr.$$.fragment,Va),Xu=p(Va),ko=a(Va,"P",{});var Ga=i(ko);Yu=s(Ga,"The "),Ta=a(Ga,"A",{href:!0});var gv=i(Ta);Zu=s(gv,"TFLongformerModel"),gv.forEach(t),e_=s(Ga," forward method, overrides the "),fl=a(Ga,"CODE",{});var uv=i(fl);t_=s(uv,"__call__"),uv.forEach(t),o_=s(Ga," special method."),Ga.forEach(t),n_=p(Va),T(kn.$$.fragment,Va),Va.forEach(t),Ue.forEach(t),yc=p(o),bo=a(o,"H2",{class:!0});var xp=i(bo);bn=a(xp,"A",{id:!0,class:!0,href:!0});var _v=i(bn);gl=a(_v,"SPAN",{});var wv=i(gl);T(hr.$$.fragment,wv),wv.forEach(t),_v.forEach(t),s_=p(xp),ul=a(xp,"SPAN",{});var kv=i(ul);r_=s(kv,"TFLongformerForMaskedLM"),kv.forEach(t),xp.forEach(t),$c=p(o),Ie=a(o,"DIV",{class:!0});var ct=i(Ie);T(fr.$$.fragment,ct),a_=p(ct),gr=a(ct,"P",{});var Fp=i(gr);i_=s(Fp,"Longformer Model with a "),_l=a(Fp,"CODE",{});var bv=i(_l);l_=s(bv,"language modeling"),bv.forEach(t),d_=s(Fp," head on top."),Fp.forEach(t),c_=p(ct),ur=a(ct,"P",{});var Mp=i(ur);p_=s(Mp,"This model inherits from "),ya=a(Mp,"A",{href:!0});var vv=i(ya);m_=s(vv,"TFPreTrainedModel"),vv.forEach(t),h_=s(Mp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mp.forEach(t),f_=p(ct),_r=a(ct,"P",{});var Ep=i(_r);g_=s(Ep,"This model is also a "),wr=a(Ep,"A",{href:!0,rel:!0});var Tv=i(wr);u_=s(Tv,"tf.keras.Model"),Tv.forEach(t),__=s(Ep,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ep.forEach(t),w_=p(ct),T(vn.$$.fragment,ct),k_=p(ct),Ze=a(ct,"DIV",{class:!0});var Et=i(Ze);T(kr.$$.fragment,Et),b_=p(Et),vo=a(Et,"P",{});var Ka=i(vo);v_=s(Ka,"The "),$a=a(Ka,"A",{href:!0});var yv=i($a);T_=s(yv,"TFLongformerForMaskedLM"),yv.forEach(t),y_=s(Ka," forward method, overrides the "),wl=a(Ka,"CODE",{});var $v=i(wl);$_=s($v,"__call__"),$v.forEach(t),L_=s(Ka," special method."),Ka.forEach(t),x_=p(Et),T(Tn.$$.fragment,Et),F_=p(Et),T(yn.$$.fragment,Et),M_=p(Et),T($n.$$.fragment,Et),Et.forEach(t),ct.forEach(t),Lc=p(o),To=a(o,"H2",{class:!0});var zp=i(To);Ln=a(zp,"A",{id:!0,class:!0,href:!0});var Lv=i(Ln);kl=a(Lv,"SPAN",{});var xv=i(kl);T(br.$$.fragment,xv),xv.forEach(t),Lv.forEach(t),E_=p(zp),bl=a(zp,"SPAN",{});var Fv=i(bl);z_=s(Fv,"TFLongformerForQuestionAnswering"),Fv.forEach(t),zp.forEach(t),xc=p(o),Se=a(o,"DIV",{class:!0});var pt=i(Se);T(vr.$$.fragment,pt),q_=p(pt),yo=a(pt,"P",{});var Ja=i(yo);C_=s(Ja,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),vl=a(Ja,"CODE",{});var Mv=i(vl);j_=s(Mv,"span start logits"),Mv.forEach(t),O_=s(Ja," and "),Tl=a(Ja,"CODE",{});var Ev=i(Tl);P_=s(Ev,"span end logits"),Ev.forEach(t),N_=s(Ja,")."),Ja.forEach(t),A_=p(pt),Tr=a(pt,"P",{});var qp=i(Tr);I_=s(qp,"This model inherits from "),La=a(qp,"A",{href:!0});var zv=i(La);S_=s(zv,"TFPreTrainedModel"),zv.forEach(t),D_=s(qp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qp.forEach(t),B_=p(pt),yr=a(pt,"P",{});var Cp=i(yr);W_=s(Cp,"This model is also a "),$r=a(Cp,"A",{href:!0,rel:!0});var qv=i($r);Q_=s(qv,"tf.keras.Model"),qv.forEach(t),U_=s(Cp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cp.forEach(t),H_=p(pt),T(xn.$$.fragment,pt),R_=p(pt),et=a(pt,"DIV",{class:!0});var zt=i(et);T(Lr.$$.fragment,zt),V_=p(zt),$o=a(zt,"P",{});var Xa=i($o);G_=s(Xa,"The "),xa=a(Xa,"A",{href:!0});var Cv=i(xa);K_=s(Cv,"TFLongformerForQuestionAnswering"),Cv.forEach(t),J_=s(Xa," forward method, overrides the "),yl=a(Xa,"CODE",{});var jv=i(yl);X_=s(jv,"__call__"),jv.forEach(t),Y_=s(Xa," special method."),Xa.forEach(t),Z_=p(zt),T(Fn.$$.fragment,zt),ew=p(zt),T(Mn.$$.fragment,zt),tw=p(zt),T(En.$$.fragment,zt),zt.forEach(t),pt.forEach(t),Fc=p(o),Lo=a(o,"H2",{class:!0});var jp=i(Lo);zn=a(jp,"A",{id:!0,class:!0,href:!0});var Ov=i(zn);$l=a(Ov,"SPAN",{});var Pv=i($l);T(xr.$$.fragment,Pv),Pv.forEach(t),Ov.forEach(t),ow=p(jp),Ll=a(jp,"SPAN",{});var Nv=i(Ll);nw=s(Nv,"TFLongformerForSequenceClassification"),Nv.forEach(t),jp.forEach(t),Mc=p(o),De=a(o,"DIV",{class:!0});var mt=i(De);T(Fr.$$.fragment,mt),sw=p(mt),xl=a(mt,"P",{});var Av=i(xl);rw=s(Av,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Av.forEach(t),aw=p(mt),Mr=a(mt,"P",{});var Op=i(Mr);iw=s(Op,"This model inherits from "),Fa=a(Op,"A",{href:!0});var Iv=i(Fa);lw=s(Iv,"TFPreTrainedModel"),Iv.forEach(t),dw=s(Op,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Op.forEach(t),cw=p(mt),Er=a(mt,"P",{});var Pp=i(Er);pw=s(Pp,"This model is also a "),zr=a(Pp,"A",{href:!0,rel:!0});var Sv=i(zr);mw=s(Sv,"tf.keras.Model"),Sv.forEach(t),hw=s(Pp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pp.forEach(t),fw=p(mt),T(qn.$$.fragment,mt),gw=p(mt),tt=a(mt,"DIV",{class:!0});var qt=i(tt);T(qr.$$.fragment,qt),uw=p(qt),xo=a(qt,"P",{});var Ya=i(xo);_w=s(Ya,"The "),Ma=a(Ya,"A",{href:!0});var Dv=i(Ma);ww=s(Dv,"TFLongformerForSequenceClassification"),Dv.forEach(t),kw=s(Ya," forward method, overrides the "),Fl=a(Ya,"CODE",{});var Bv=i(Fl);bw=s(Bv,"__call__"),Bv.forEach(t),vw=s(Ya," special method."),Ya.forEach(t),Tw=p(qt),T(Cn.$$.fragment,qt),yw=p(qt),T(jn.$$.fragment,qt),$w=p(qt),T(On.$$.fragment,qt),qt.forEach(t),mt.forEach(t),Ec=p(o),Fo=a(o,"H2",{class:!0});var Np=i(Fo);Pn=a(Np,"A",{id:!0,class:!0,href:!0});var Wv=i(Pn);Ml=a(Wv,"SPAN",{});var Qv=i(Ml);T(Cr.$$.fragment,Qv),Qv.forEach(t),Wv.forEach(t),Lw=p(Np),El=a(Np,"SPAN",{});var Uv=i(El);xw=s(Uv,"TFLongformerForTokenClassification"),Uv.forEach(t),Np.forEach(t),zc=p(o),Be=a(o,"DIV",{class:!0});var ht=i(Be);T(jr.$$.fragment,ht),Fw=p(ht),zl=a(ht,"P",{});var Hv=i(zl);Mw=s(Hv,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Hv.forEach(t),Ew=p(ht),Or=a(ht,"P",{});var Ap=i(Or);zw=s(Ap,"This model inherits from "),Ea=a(Ap,"A",{href:!0});var Rv=i(Ea);qw=s(Rv,"TFPreTrainedModel"),Rv.forEach(t),Cw=s(Ap,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ap.forEach(t),jw=p(ht),Pr=a(ht,"P",{});var Ip=i(Pr);Ow=s(Ip,"This model is also a "),Nr=a(Ip,"A",{href:!0,rel:!0});var Vv=i(Nr);Pw=s(Vv,"tf.keras.Model"),Vv.forEach(t),Nw=s(Ip,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ip.forEach(t),Aw=p(ht),T(Nn.$$.fragment,ht),Iw=p(ht),ot=a(ht,"DIV",{class:!0});var Ct=i(ot);T(Ar.$$.fragment,Ct),Sw=p(Ct),Mo=a(Ct,"P",{});var Za=i(Mo);Dw=s(Za,"The "),za=a(Za,"A",{href:!0});var Gv=i(za);Bw=s(Gv,"TFLongformerForTokenClassification"),Gv.forEach(t),Ww=s(Za," forward method, overrides the "),ql=a(Za,"CODE",{});var Kv=i(ql);Qw=s(Kv,"__call__"),Kv.forEach(t),Uw=s(Za," special method."),Za.forEach(t),Hw=p(Ct),T(An.$$.fragment,Ct),Rw=p(Ct),T(In.$$.fragment,Ct),Vw=p(Ct),T(Sn.$$.fragment,Ct),Ct.forEach(t),ht.forEach(t),qc=p(o),Eo=a(o,"H2",{class:!0});var Sp=i(Eo);Dn=a(Sp,"A",{id:!0,class:!0,href:!0});var Jv=i(Dn);Cl=a(Jv,"SPAN",{});var Xv=i(Cl);T(Ir.$$.fragment,Xv),Xv.forEach(t),Jv.forEach(t),Gw=p(Sp),jl=a(Sp,"SPAN",{});var Yv=i(jl);Kw=s(Yv,"TFLongformerForMultipleChoice"),Yv.forEach(t),Sp.forEach(t),Cc=p(o),We=a(o,"DIV",{class:!0});var ft=i(We);T(Sr.$$.fragment,ft),Jw=p(ft),Ol=a(ft,"P",{});var Zv=i(Ol);Xw=s(Zv,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Zv.forEach(t),Yw=p(ft),Dr=a(ft,"P",{});var Dp=i(Dr);Zw=s(Dp,"This model inherits from "),qa=a(Dp,"A",{href:!0});var eT=i(qa);ek=s(eT,"TFPreTrainedModel"),eT.forEach(t),tk=s(Dp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dp.forEach(t),ok=p(ft),Br=a(ft,"P",{});var Bp=i(Br);nk=s(Bp,"This model is also a "),Wr=a(Bp,"A",{href:!0,rel:!0});var tT=i(Wr);sk=s(tT,"tf.keras.Model"),tT.forEach(t),rk=s(Bp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bp.forEach(t),ak=p(ft),T(Bn.$$.fragment,ft),ik=p(ft),lt=a(ft,"DIV",{class:!0});var Vn=i(lt);T(Qr.$$.fragment,Vn),lk=p(Vn),zo=a(Vn,"P",{});var ei=i(zo);dk=s(ei,"The "),Ca=a(ei,"A",{href:!0});var oT=i(Ca);ck=s(oT,"TFLongformerForMultipleChoice"),oT.forEach(t),pk=s(ei," forward method, overrides the "),Pl=a(ei,"CODE",{});var nT=i(Pl);mk=s(nT,"__call__"),nT.forEach(t),hk=s(ei," special method."),ei.forEach(t),fk=p(Vn),T(Wn.$$.fragment,Vn),gk=p(Vn),T(Qn.$$.fragment,Vn),Vn.forEach(t),ft.forEach(t),this.h()},h(){_(l,"name","hf:doc:metadata"),_(l,"content",JSON.stringify(sy)),_(h,"id","longformer"),_(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(h,"href","#longformer"),_(m,"class","relative group"),_(Z,"id","overview"),_(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Z,"href","#overview"),_(z,"class","relative group"),_(te,"href","https://arxiv.org/pdf/2004.05150.pdf"),_(te,"rel","nofollow"),_(be,"href","https://huggingface.co/beltagy"),_(be,"rel","nofollow"),_(O,"href","https://github.com/allenai/longformer"),_(O,"rel","nofollow"),_(ke,"id","longformer-self-attention"),_(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(ke,"href","#longformer-self-attention"),_(I,"class","relative group"),gd.a=ud,_d.a=wd,kd.a=bd,vd.a=Td,$d.a=Ld,_(Kr,"href","/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerModel.forward"),zd.a=qd,Cd.a=jd,Od.a=Pd,Nd.a=Ad,_(Gn,"href","https://arxiv.org/pdf/2004.05150.pdf"),_(Gn,"rel","nofollow"),_(So,"id","training"),_(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(So,"href","#training"),_(jt,"class","relative group"),_(Jr,"href","/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerForMaskedLM"),_(Xr,"href","/docs/transformers/pr_18064/en/model_doc/roberta#transformers.RobertaForMaskedLM"),_(Do,"id","transformers.LongformerConfig"),_(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Do,"href","#transformers.LongformerConfig"),_(Pt,"class","relative group"),_(Yr,"href","/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerModel"),_(Zr,"href","/docs/transformers/pr_18064/en/model_doc/longformer#transformers.TFLongformerModel"),_(ea,"href","/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerModel"),_(Zn,"href","https://huggingface.co/allenai/longformer-base-4096"),_(Zn,"rel","nofollow"),_(ta,"href","/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerConfig"),_(oa,"href","/docs/transformers/pr_18064/en/model_doc/roberta#transformers.RobertaConfig"),_(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Wo,"id","transformers.LongformerTokenizer"),_(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Wo,"href","#transformers.LongformerTokenizer"),_(St,"class","relative group"),_(na,"href","/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerTokenizer"),_(sa,"href","/docs/transformers/pr_18064/en/model_doc/roberta#transformers.RobertaTokenizer"),_(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Uo,"id","transformers.LongformerTokenizerFast"),_(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Uo,"href","#transformers.LongformerTokenizerFast"),_(Dt,"class","relative group"),_(ra,"href","/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerTokenizerFast"),_(aa,"href","/docs/transformers/pr_18064/en/model_doc/roberta#transformers.RobertaTokenizerFast"),_(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ro,"id","transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),_(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Ro,"href","#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),_(Bt,"class","relative group"),_(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Vo,"id","transformers.LongformerModel"),_(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Vo,"href","#transformers.LongformerModel"),_(oo,"class","relative group"),_(ia,"href","/docs/transformers/pr_18064/en/main_classes/model#transformers.PreTrainedModel"),_($s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_($s,"rel","nofollow"),_(la,"href","/docs/transformers/pr_18064/en/model_doc/roberta#transformers.RobertaModel"),_(Ls,"href","https://arxiv.org/abs/2004.05150"),_(Ls,"rel","nofollow"),_(da,"href","/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerModel"),_(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Jo,"id","transformers.LongformerForMaskedLM"),_(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Jo,"href","#transformers.LongformerForMaskedLM"),_(ro,"class","relative group"),_(ca,"href","/docs/transformers/pr_18064/en/main_classes/model#transformers.PreTrainedModel"),_(js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(js,"rel","nofollow"),_(pa,"href","/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerForMaskedLM"),_(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(en,"id","transformers.LongformerForSequenceClassification"),_(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(en,"href","#transformers.LongformerForSequenceClassification"),_(io,"class","relative group"),_(ma,"href","/docs/transformers/pr_18064/en/main_classes/model#transformers.PreTrainedModel"),_(Ss,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Ss,"rel","nofollow"),_(ha,"href","/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerForSequenceClassification"),_(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(an,"id","transformers.LongformerForMultipleChoice"),_(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(an,"href","#transformers.LongformerForMultipleChoice"),_(co,"class","relative group"),_(fa,"href","/docs/transformers/pr_18064/en/main_classes/model#transformers.PreTrainedModel"),_(Hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Hs,"rel","nofollow"),_(ga,"href","/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerForMultipleChoice"),_(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(cn,"id","transformers.LongformerForTokenClassification"),_(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(cn,"href","#transformers.LongformerForTokenClassification"),_(mo,"class","relative group"),_(ua,"href","/docs/transformers/pr_18064/en/main_classes/model#transformers.PreTrainedModel"),_(Xs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Xs,"rel","nofollow"),_(_a,"href","/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerForTokenClassification"),_(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(fn,"id","transformers.LongformerForQuestionAnswering"),_(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(fn,"href","#transformers.LongformerForQuestionAnswering"),_(fo,"class","relative group"),_(wa,"href","/docs/transformers/pr_18064/en/main_classes/model#transformers.PreTrainedModel"),_(nr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(nr,"rel","nofollow"),_(ka,"href","/docs/transformers/pr_18064/en/model_doc/longformer#transformers.LongformerForQuestionAnswering"),_(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(_n,"id","transformers.TFLongformerModel"),_(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(_n,"href","#transformers.TFLongformerModel"),_(_o,"class","relative group"),_(ba,"href","/docs/transformers/pr_18064/en/main_classes/model#transformers.TFPreTrainedModel"),_(dr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(dr,"rel","nofollow"),_(va,"href","/docs/transformers/pr_18064/en/model_doc/roberta#transformers.TFRobertaModel"),_(cr,"href","https://arxiv.org/abs/2004.05150"),_(cr,"rel","nofollow"),_(Ta,"href","/docs/transformers/pr_18064/en/model_doc/longformer#transformers.TFLongformerModel"),_(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(bn,"id","transformers.TFLongformerForMaskedLM"),_(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(bn,"href","#transformers.TFLongformerForMaskedLM"),_(bo,"class","relative group"),_(ya,"href","/docs/transformers/pr_18064/en/main_classes/model#transformers.TFPreTrainedModel"),_(wr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(wr,"rel","nofollow"),_($a,"href","/docs/transformers/pr_18064/en/model_doc/longformer#transformers.TFLongformerForMaskedLM"),_(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ln,"id","transformers.TFLongformerForQuestionAnswering"),_(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Ln,"href","#transformers.TFLongformerForQuestionAnswering"),_(To,"class","relative group"),_(La,"href","/docs/transformers/pr_18064/en/main_classes/model#transformers.TFPreTrainedModel"),_($r,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_($r,"rel","nofollow"),_(xa,"href","/docs/transformers/pr_18064/en/model_doc/longformer#transformers.TFLongformerForQuestionAnswering"),_(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(zn,"id","transformers.TFLongformerForSequenceClassification"),_(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(zn,"href","#transformers.TFLongformerForSequenceClassification"),_(Lo,"class","relative group"),_(Fa,"href","/docs/transformers/pr_18064/en/main_classes/model#transformers.TFPreTrainedModel"),_(zr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(zr,"rel","nofollow"),_(Ma,"href","/docs/transformers/pr_18064/en/model_doc/longformer#transformers.TFLongformerForSequenceClassification"),_(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Pn,"id","transformers.TFLongformerForTokenClassification"),_(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Pn,"href","#transformers.TFLongformerForTokenClassification"),_(Fo,"class","relative group"),_(Ea,"href","/docs/transformers/pr_18064/en/main_classes/model#transformers.TFPreTrainedModel"),_(Nr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Nr,"rel","nofollow"),_(za,"href","/docs/transformers/pr_18064/en/model_doc/longformer#transformers.TFLongformerForTokenClassification"),_(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Dn,"id","transformers.TFLongformerForMultipleChoice"),_(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Dn,"href","#transformers.TFLongformerForMultipleChoice"),_(Eo,"class","relative group"),_(qa,"href","/docs/transformers/pr_18064/en/main_classes/model#transformers.TFPreTrainedModel"),_(Wr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Wr,"rel","nofollow"),_(Ca,"href","/docs/transformers/pr_18064/en/model_doc/longformer#transformers.TFLongformerForMultipleChoice"),_(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,l),f(o,k,g),f(o,m,g),e(m,h),e(h,b),y(d,b,null),e(m,u),e(m,E),e(E,me),f(o,J,g),f(o,z,g),e(z,Z),e(Z,S),y(ee,S,null),e(z,he),e(z,D),e(D,fe),f(o,le,g),f(o,G,g),e(G,P),e(G,te),e(te,X),e(G,q),f(o,j,g),f(o,ne,g),e(ne,U),f(o,de,g),f(o,se,g),e(se,B),e(B,ge),f(o,ce,g),f(o,C,g),e(C,ue),f(o,Q,g),f(o,re,g),e(re,K),e(K,H),e(K,ae),e(ae,_e),e(K,N),e(K,ie),e(ie,R),e(K,we),e(K,w),e(w,F),e(K,Y),f(o,Te,g),f(o,pe,g),e(pe,A),e(pe,be),e(be,xe),e(pe,Fe),e(pe,O),e(O,V),e(pe,Me),f(o,ye,g),f(o,I,g),e(I,ke),e(ke,ve),y(oe,ve,null),e(I,Ee),e(I,ti),e(ti,Wp),f(o,fd,g),f(o,$e,g),e($e,Qp),gd.m(sT,$e),e($e,ud),_d.m(rT,$e),e($e,wd),kd.m(aT,$e),e($e,bd),e($e,oi),e(oi,Up),e($e,Hp),e($e,ni),e(ni,Rp),e($e,Vp),e($e,si),e(si,Gp),e($e,Kp),vd.m(iT,$e),e($e,Td),e($e,ri),e(ri,Jp),e($e,Xp),f(o,yd,g),f(o,wt,g),e(wt,Yp),$d.m(lT,wt),e(wt,Ld),e(wt,ai),e(ai,Zp),e(wt,em),f(o,xd,g),f(o,kt,g),e(kt,tm),e(kt,ii),e(ii,om),e(kt,nm),e(kt,li),e(li,sm),e(kt,rm),f(o,Fd,g),f(o,No,g),e(No,di),e(di,am),e(No,im),e(No,ci),e(ci,lm),f(o,Md,g),f(o,Ao,g),e(Ao,dm),e(Ao,Kr),e(Kr,cm),e(Ao,pm),f(o,Ed,g),f(o,Xe,g),e(Xe,mm),zd.m(dT,Xe),e(Xe,qd),Cd.m(cT,Xe),e(Xe,jd),Od.m(pT,Xe),e(Xe,Pd),Nd.m(mT,Xe),e(Xe,Ad),f(o,Id,g),f(o,Io,g),e(Io,hm),e(Io,Gn),e(Gn,fm),e(Io,gm),f(o,Sd,g),f(o,jt,g),e(jt,So),e(So,pi),y(Kn,pi,null),e(jt,um),e(jt,mi),e(mi,_m),f(o,Dd,g),f(o,Ot,g),e(Ot,Jr),e(Jr,wm),e(Ot,km),e(Ot,Xr),e(Xr,bm),e(Ot,vm),f(o,Bd,g),y(Jn,o,g),f(o,Wd,g),f(o,Pt,g),e(Pt,Do),e(Do,hi),y(Xn,hi,null),e(Pt,Tm),e(Pt,fi),e(fi,ym),f(o,Qd,g),f(o,He,g),y(Yn,He,null),e(He,$m),e(He,Nt),e(Nt,Lm),e(Nt,Yr),e(Yr,xm),e(Nt,Fm),e(Nt,Zr),e(Zr,Mm),e(Nt,Em),e(He,zm),e(He,At),e(At,qm),e(At,ea),e(ea,Cm),e(At,jm),e(At,Zn),e(Zn,Om),e(At,Pm),e(He,Nm),e(He,It),e(It,Am),e(It,ta),e(ta,Im),e(It,Sm),e(It,oa),e(oa,Dm),e(It,Bm),e(He,Wm),y(Bo,He,null),f(o,Ud,g),f(o,St,g),e(St,Wo),e(Wo,gi),y(es,gi,null),e(St,Qm),e(St,ui),e(ui,Um),f(o,Hd,g),f(o,gt,g),y(ts,gt,null),e(gt,Hm),e(gt,_i),e(_i,Rm),e(gt,Vm),e(gt,Qo),e(Qo,na),e(na,Gm),e(Qo,Km),e(Qo,sa),e(sa,Jm),e(Qo,Xm),f(o,Rd,g),f(o,Dt,g),e(Dt,Uo),e(Uo,wi),y(os,wi,null),e(Dt,Ym),e(Dt,ki),e(ki,Zm),f(o,Vd,g),f(o,ut,g),y(ns,ut,null),e(ut,eh),e(ut,ss),e(ss,th),e(ss,bi),e(bi,oh),e(ss,nh),e(ut,sh),e(ut,Ho),e(Ho,ra),e(ra,rh),e(Ho,ah),e(Ho,aa),e(aa,ih),e(Ho,lh),f(o,Gd,g),f(o,Bt,g),e(Bt,Ro),e(Ro,vi),y(rs,vi,null),e(Bt,dh),e(Bt,Ti),e(Ti,ch),f(o,Kd,g),f(o,Wt,g),y(as,Wt,null),e(Wt,ph),e(Wt,yi),e(yi,mh),f(o,Jd,g),f(o,Qt,g),y(is,Qt,null),e(Qt,hh),e(Qt,$i),e($i,fh),f(o,Xd,g),f(o,Ut,g),y(ls,Ut,null),e(Ut,gh),e(Ut,Li),e(Li,uh),f(o,Yd,g),f(o,Ht,g),y(ds,Ht,null),e(Ht,_h),e(Ht,xi),e(xi,wh),f(o,Zd,g),f(o,Rt,g),y(cs,Rt,null),e(Rt,kh),e(Rt,Fi),e(Fi,bh),f(o,ec,g),f(o,Vt,g),y(ps,Vt,null),e(Vt,vh),e(Vt,Mi),e(Mi,Th),f(o,tc,g),f(o,Gt,g),y(ms,Gt,null),e(Gt,yh),e(Gt,Ei),e(Ei,$h),f(o,oc,g),f(o,Kt,g),y(hs,Kt,null),e(Kt,Lh),e(Kt,zi),e(zi,xh),f(o,nc,g),f(o,Jt,g),y(fs,Jt,null),e(Jt,Fh),e(Jt,qi),e(qi,Mh),f(o,sc,g),f(o,Xt,g),y(gs,Xt,null),e(Xt,Eh),e(Xt,Ci),e(Ci,zh),f(o,rc,g),f(o,Yt,g),y(us,Yt,null),e(Yt,qh),e(Yt,ji),e(ji,Ch),f(o,ac,g),f(o,Zt,g),y(_s,Zt,null),e(Zt,jh),e(Zt,Oi),e(Oi,Oh),f(o,ic,g),f(o,eo,g),y(ws,eo,null),e(eo,Ph),e(eo,Pi),e(Pi,Nh),f(o,lc,g),f(o,to,g),y(ks,to,null),e(to,Ah),e(to,Ni),e(Ni,Ih),f(o,dc,g),f(o,oo,g),e(oo,Vo),e(Vo,Ai),y(bs,Ai,null),e(oo,Sh),e(oo,Ii),e(Ii,Dh),f(o,cc,g),f(o,Pe,g),y(vs,Pe,null),e(Pe,Bh),e(Pe,Si),e(Si,Wh),e(Pe,Qh),e(Pe,Ts),e(Ts,Uh),e(Ts,ia),e(ia,Hh),e(Ts,Rh),e(Pe,Vh),e(Pe,ys),e(ys,Gh),e(ys,$s),e($s,Kh),e(ys,Jh),e(Pe,Xh),e(Pe,no),e(no,Yh),e(no,la),e(la,Zh),e(no,ef),e(no,Ls),e(Ls,tf),e(no,of),e(Pe,nf),e(Pe,xs),e(xs,sf),e(xs,Di),e(Di,rf),e(xs,af),e(Pe,lf),e(Pe,rt),y(Fs,rt,null),e(rt,df),e(rt,so),e(so,cf),e(so,da),e(da,pf),e(so,mf),e(so,Bi),e(Bi,hf),e(so,ff),e(rt,gf),y(Go,rt,null),e(rt,uf),y(Ko,rt,null),f(o,pc,g),f(o,ro,g),e(ro,Jo),e(Jo,Wi),y(Ms,Wi,null),e(ro,_f),e(ro,Qi),e(Qi,wf),f(o,mc,g),f(o,Re,g),y(Es,Re,null),e(Re,kf),e(Re,zs),e(zs,bf),e(zs,Ui),e(Ui,vf),e(zs,Tf),e(Re,yf),e(Re,qs),e(qs,$f),e(qs,ca),e(ca,Lf),e(qs,xf),e(Re,Ff),e(Re,Cs),e(Cs,Mf),e(Cs,js),e(js,Ef),e(Cs,zf),e(Re,qf),e(Re,Qe),y(Os,Qe,null),e(Qe,Cf),e(Qe,ao),e(ao,jf),e(ao,pa),e(pa,Of),e(ao,Pf),e(ao,Hi),e(Hi,Nf),e(ao,Af),e(Qe,If),y(Xo,Qe,null),e(Qe,Sf),y(Yo,Qe,null),e(Qe,Df),e(Qe,Ri),e(Ri,Bf),e(Qe,Wf),y(Zo,Qe,null),f(o,hc,g),f(o,io,g),e(io,en),e(en,Vi),y(Ps,Vi,null),e(io,Qf),e(io,Gi),e(Gi,Uf),f(o,fc,g),f(o,Ve,g),y(Ns,Ve,null),e(Ve,Hf),e(Ve,Ki),e(Ki,Rf),e(Ve,Vf),e(Ve,As),e(As,Gf),e(As,ma),e(ma,Kf),e(As,Jf),e(Ve,Xf),e(Ve,Is),e(Is,Yf),e(Is,Ss),e(Ss,Zf),e(Is,eg),e(Ve,tg),e(Ve,Ne),y(Ds,Ne,null),e(Ne,og),e(Ne,lo),e(lo,ng),e(lo,ha),e(ha,sg),e(lo,rg),e(lo,Ji),e(Ji,ag),e(lo,ig),e(Ne,lg),y(tn,Ne,null),e(Ne,dg),y(on,Ne,null),e(Ne,cg),y(nn,Ne,null),e(Ne,pg),y(sn,Ne,null),e(Ne,mg),y(rn,Ne,null),f(o,gc,g),f(o,co,g),e(co,an),e(an,Xi),y(Bs,Xi,null),e(co,hg),e(co,Yi),e(Yi,fg),f(o,uc,g),f(o,Ge,g),y(Ws,Ge,null),e(Ge,gg),e(Ge,Zi),e(Zi,ug),e(Ge,_g),e(Ge,Qs),e(Qs,wg),e(Qs,fa),e(fa,kg),e(Qs,bg),e(Ge,vg),e(Ge,Us),e(Us,Tg),e(Us,Hs),e(Hs,yg),e(Us,$g),e(Ge,Lg),e(Ge,at),y(Rs,at,null),e(at,xg),e(at,po),e(po,Fg),e(po,ga),e(ga,Mg),e(po,Eg),e(po,el),e(el,zg),e(po,qg),e(at,Cg),y(ln,at,null),e(at,jg),y(dn,at,null),f(o,_c,g),f(o,mo,g),e(mo,cn),e(cn,tl),y(Vs,tl,null),e(mo,Og),e(mo,ol),e(ol,Pg),f(o,wc,g),f(o,Ke,g),y(Gs,Ke,null),e(Ke,Ng),e(Ke,nl),e(nl,Ag),e(Ke,Ig),e(Ke,Ks),e(Ks,Sg),e(Ks,ua),e(ua,Dg),e(Ks,Bg),e(Ke,Wg),e(Ke,Js),e(Js,Qg),e(Js,Xs),e(Xs,Ug),e(Js,Hg),e(Ke,Rg),e(Ke,Ye),y(Ys,Ye,null),e(Ye,Vg),e(Ye,ho),e(ho,Gg),e(ho,_a),e(_a,Kg),e(ho,Jg),e(ho,sl),e(sl,Xg),e(ho,Yg),e(Ye,Zg),y(pn,Ye,null),e(Ye,eu),y(mn,Ye,null),e(Ye,tu),y(hn,Ye,null),f(o,kc,g),f(o,fo,g),e(fo,fn),e(fn,rl),y(Zs,rl,null),e(fo,ou),e(fo,al),e(al,nu),f(o,bc,g),f(o,Je,g),y(er,Je,null),e(Je,su),e(Je,go),e(go,ru),e(go,il),e(il,au),e(go,iu),e(go,ll),e(ll,lu),e(go,du),e(Je,cu),e(Je,tr),e(tr,pu),e(tr,wa),e(wa,mu),e(tr,hu),e(Je,fu),e(Je,or),e(or,gu),e(or,nr),e(nr,uu),e(or,_u),e(Je,wu),e(Je,it),y(sr,it,null),e(it,ku),e(it,uo),e(uo,bu),e(uo,ka),e(ka,vu),e(uo,Tu),e(uo,dl),e(dl,yu),e(uo,$u),e(it,Lu),y(gn,it,null),e(it,xu),y(un,it,null),f(o,vc,g),f(o,_o,g),e(_o,_n),e(_n,cl),y(rr,cl,null),e(_o,Fu),e(_o,pl),e(pl,Mu),f(o,Tc,g),f(o,ze,g),y(ar,ze,null),e(ze,Eu),e(ze,ml),e(ml,zu),e(ze,qu),e(ze,ir),e(ir,Cu),e(ir,ba),e(ba,ju),e(ir,Ou),e(ze,Pu),e(ze,lr),e(lr,Nu),e(lr,dr),e(dr,Au),e(lr,Iu),e(ze,Su),y(wn,ze,null),e(ze,Du),e(ze,wo),e(wo,Bu),e(wo,va),e(va,Wu),e(wo,Qu),e(wo,cr),e(cr,Uu),e(wo,Hu),e(ze,Ru),e(ze,pr),e(pr,Vu),e(pr,hl),e(hl,Gu),e(pr,Ku),e(ze,Ju),e(ze,bt),y(mr,bt,null),e(bt,Xu),e(bt,ko),e(ko,Yu),e(ko,Ta),e(Ta,Zu),e(ko,e_),e(ko,fl),e(fl,t_),e(ko,o_),e(bt,n_),y(kn,bt,null),f(o,yc,g),f(o,bo,g),e(bo,bn),e(bn,gl),y(hr,gl,null),e(bo,s_),e(bo,ul),e(ul,r_),f(o,$c,g),f(o,Ie,g),y(fr,Ie,null),e(Ie,a_),e(Ie,gr),e(gr,i_),e(gr,_l),e(_l,l_),e(gr,d_),e(Ie,c_),e(Ie,ur),e(ur,p_),e(ur,ya),e(ya,m_),e(ur,h_),e(Ie,f_),e(Ie,_r),e(_r,g_),e(_r,wr),e(wr,u_),e(_r,__),e(Ie,w_),y(vn,Ie,null),e(Ie,k_),e(Ie,Ze),y(kr,Ze,null),e(Ze,b_),e(Ze,vo),e(vo,v_),e(vo,$a),e($a,T_),e(vo,y_),e(vo,wl),e(wl,$_),e(vo,L_),e(Ze,x_),y(Tn,Ze,null),e(Ze,F_),y(yn,Ze,null),e(Ze,M_),y($n,Ze,null),f(o,Lc,g),f(o,To,g),e(To,Ln),e(Ln,kl),y(br,kl,null),e(To,E_),e(To,bl),e(bl,z_),f(o,xc,g),f(o,Se,g),y(vr,Se,null),e(Se,q_),e(Se,yo),e(yo,C_),e(yo,vl),e(vl,j_),e(yo,O_),e(yo,Tl),e(Tl,P_),e(yo,N_),e(Se,A_),e(Se,Tr),e(Tr,I_),e(Tr,La),e(La,S_),e(Tr,D_),e(Se,B_),e(Se,yr),e(yr,W_),e(yr,$r),e($r,Q_),e(yr,U_),e(Se,H_),y(xn,Se,null),e(Se,R_),e(Se,et),y(Lr,et,null),e(et,V_),e(et,$o),e($o,G_),e($o,xa),e(xa,K_),e($o,J_),e($o,yl),e(yl,X_),e($o,Y_),e(et,Z_),y(Fn,et,null),e(et,ew),y(Mn,et,null),e(et,tw),y(En,et,null),f(o,Fc,g),f(o,Lo,g),e(Lo,zn),e(zn,$l),y(xr,$l,null),e(Lo,ow),e(Lo,Ll),e(Ll,nw),f(o,Mc,g),f(o,De,g),y(Fr,De,null),e(De,sw),e(De,xl),e(xl,rw),e(De,aw),e(De,Mr),e(Mr,iw),e(Mr,Fa),e(Fa,lw),e(Mr,dw),e(De,cw),e(De,Er),e(Er,pw),e(Er,zr),e(zr,mw),e(Er,hw),e(De,fw),y(qn,De,null),e(De,gw),e(De,tt),y(qr,tt,null),e(tt,uw),e(tt,xo),e(xo,_w),e(xo,Ma),e(Ma,ww),e(xo,kw),e(xo,Fl),e(Fl,bw),e(xo,vw),e(tt,Tw),y(Cn,tt,null),e(tt,yw),y(jn,tt,null),e(tt,$w),y(On,tt,null),f(o,Ec,g),f(o,Fo,g),e(Fo,Pn),e(Pn,Ml),y(Cr,Ml,null),e(Fo,Lw),e(Fo,El),e(El,xw),f(o,zc,g),f(o,Be,g),y(jr,Be,null),e(Be,Fw),e(Be,zl),e(zl,Mw),e(Be,Ew),e(Be,Or),e(Or,zw),e(Or,Ea),e(Ea,qw),e(Or,Cw),e(Be,jw),e(Be,Pr),e(Pr,Ow),e(Pr,Nr),e(Nr,Pw),e(Pr,Nw),e(Be,Aw),y(Nn,Be,null),e(Be,Iw),e(Be,ot),y(Ar,ot,null),e(ot,Sw),e(ot,Mo),e(Mo,Dw),e(Mo,za),e(za,Bw),e(Mo,Ww),e(Mo,ql),e(ql,Qw),e(Mo,Uw),e(ot,Hw),y(An,ot,null),e(ot,Rw),y(In,ot,null),e(ot,Vw),y(Sn,ot,null),f(o,qc,g),f(o,Eo,g),e(Eo,Dn),e(Dn,Cl),y(Ir,Cl,null),e(Eo,Gw),e(Eo,jl),e(jl,Kw),f(o,Cc,g),f(o,We,g),y(Sr,We,null),e(We,Jw),e(We,Ol),e(Ol,Xw),e(We,Yw),e(We,Dr),e(Dr,Zw),e(Dr,qa),e(qa,ek),e(Dr,tk),e(We,ok),e(We,Br),e(Br,nk),e(Br,Wr),e(Wr,sk),e(Br,rk),e(We,ak),y(Bn,We,null),e(We,ik),e(We,lt),y(Qr,lt,null),e(lt,lk),e(lt,zo),e(zo,dk),e(zo,Ca),e(Ca,ck),e(zo,pk),e(zo,Pl),e(Pl,mk),e(zo,hk),e(lt,fk),y(Wn,lt,null),e(lt,gk),y(Qn,lt,null),jc=!0},p(o,[g]){const Ur={};g&2&&(Ur.$$scope={dirty:g,ctx:o}),Bo.$set(Ur);const Nl={};g&2&&(Nl.$$scope={dirty:g,ctx:o}),Go.$set(Nl);const Al={};g&2&&(Al.$$scope={dirty:g,ctx:o}),Ko.$set(Al);const Il={};g&2&&(Il.$$scope={dirty:g,ctx:o}),Xo.$set(Il);const Hr={};g&2&&(Hr.$$scope={dirty:g,ctx:o}),Yo.$set(Hr);const Sl={};g&2&&(Sl.$$scope={dirty:g,ctx:o}),Zo.$set(Sl);const Dl={};g&2&&(Dl.$$scope={dirty:g,ctx:o}),tn.$set(Dl);const Bl={};g&2&&(Bl.$$scope={dirty:g,ctx:o}),on.$set(Bl);const Rr={};g&2&&(Rr.$$scope={dirty:g,ctx:o}),nn.$set(Rr);const Wl={};g&2&&(Wl.$$scope={dirty:g,ctx:o}),sn.$set(Wl);const Ql={};g&2&&(Ql.$$scope={dirty:g,ctx:o}),rn.$set(Ql);const Ul={};g&2&&(Ul.$$scope={dirty:g,ctx:o}),ln.$set(Ul);const Hl={};g&2&&(Hl.$$scope={dirty:g,ctx:o}),dn.$set(Hl);const Rl={};g&2&&(Rl.$$scope={dirty:g,ctx:o}),pn.$set(Rl);const Vl={};g&2&&(Vl.$$scope={dirty:g,ctx:o}),mn.$set(Vl);const _t={};g&2&&(_t.$$scope={dirty:g,ctx:o}),hn.$set(_t);const Gl={};g&2&&(Gl.$$scope={dirty:g,ctx:o}),gn.$set(Gl);const Kl={};g&2&&(Kl.$$scope={dirty:g,ctx:o}),un.$set(Kl);const Jl={};g&2&&(Jl.$$scope={dirty:g,ctx:o}),wn.$set(Jl);const qo={};g&2&&(qo.$$scope={dirty:g,ctx:o}),kn.$set(qo);const Xl={};g&2&&(Xl.$$scope={dirty:g,ctx:o}),vn.$set(Xl);const Yl={};g&2&&(Yl.$$scope={dirty:g,ctx:o}),Tn.$set(Yl);const Vr={};g&2&&(Vr.$$scope={dirty:g,ctx:o}),yn.$set(Vr);const Zl={};g&2&&(Zl.$$scope={dirty:g,ctx:o}),$n.$set(Zl);const ed={};g&2&&(ed.$$scope={dirty:g,ctx:o}),xn.$set(ed);const td={};g&2&&(td.$$scope={dirty:g,ctx:o}),Fn.$set(td);const qe={};g&2&&(qe.$$scope={dirty:g,ctx:o}),Mn.$set(qe);const od={};g&2&&(od.$$scope={dirty:g,ctx:o}),En.$set(od);const nd={};g&2&&(nd.$$scope={dirty:g,ctx:o}),qn.$set(nd);const sd={};g&2&&(sd.$$scope={dirty:g,ctx:o}),Cn.$set(sd);const rd={};g&2&&(rd.$$scope={dirty:g,ctx:o}),jn.$set(rd);const Co={};g&2&&(Co.$$scope={dirty:g,ctx:o}),On.$set(Co);const ad={};g&2&&(ad.$$scope={dirty:g,ctx:o}),Nn.$set(ad);const jo={};g&2&&(jo.$$scope={dirty:g,ctx:o}),An.$set(jo);const id={};g&2&&(id.$$scope={dirty:g,ctx:o}),In.$set(id);const ld={};g&2&&(ld.$$scope={dirty:g,ctx:o}),Sn.$set(ld);const Gr={};g&2&&(Gr.$$scope={dirty:g,ctx:o}),Bn.$set(Gr);const dd={};g&2&&(dd.$$scope={dirty:g,ctx:o}),Wn.$set(dd);const cd={};g&2&&(cd.$$scope={dirty:g,ctx:o}),Qn.$set(cd)},i(o){jc||($(d.$$.fragment,o),$(ee.$$.fragment,o),$(oe.$$.fragment,o),$(Kn.$$.fragment,o),$(Jn.$$.fragment,o),$(Xn.$$.fragment,o),$(Yn.$$.fragment,o),$(Bo.$$.fragment,o),$(es.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(rs.$$.fragment,o),$(as.$$.fragment,o),$(is.$$.fragment,o),$(ls.$$.fragment,o),$(ds.$$.fragment,o),$(cs.$$.fragment,o),$(ps.$$.fragment,o),$(ms.$$.fragment,o),$(hs.$$.fragment,o),$(fs.$$.fragment,o),$(gs.$$.fragment,o),$(us.$$.fragment,o),$(_s.$$.fragment,o),$(ws.$$.fragment,o),$(ks.$$.fragment,o),$(bs.$$.fragment,o),$(vs.$$.fragment,o),$(Fs.$$.fragment,o),$(Go.$$.fragment,o),$(Ko.$$.fragment,o),$(Ms.$$.fragment,o),$(Es.$$.fragment,o),$(Os.$$.fragment,o),$(Xo.$$.fragment,o),$(Yo.$$.fragment,o),$(Zo.$$.fragment,o),$(Ps.$$.fragment,o),$(Ns.$$.fragment,o),$(Ds.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(nn.$$.fragment,o),$(sn.$$.fragment,o),$(rn.$$.fragment,o),$(Bs.$$.fragment,o),$(Ws.$$.fragment,o),$(Rs.$$.fragment,o),$(ln.$$.fragment,o),$(dn.$$.fragment,o),$(Vs.$$.fragment,o),$(Gs.$$.fragment,o),$(Ys.$$.fragment,o),$(pn.$$.fragment,o),$(mn.$$.fragment,o),$(hn.$$.fragment,o),$(Zs.$$.fragment,o),$(er.$$.fragment,o),$(sr.$$.fragment,o),$(gn.$$.fragment,o),$(un.$$.fragment,o),$(rr.$$.fragment,o),$(ar.$$.fragment,o),$(wn.$$.fragment,o),$(mr.$$.fragment,o),$(kn.$$.fragment,o),$(hr.$$.fragment,o),$(fr.$$.fragment,o),$(vn.$$.fragment,o),$(kr.$$.fragment,o),$(Tn.$$.fragment,o),$(yn.$$.fragment,o),$($n.$$.fragment,o),$(br.$$.fragment,o),$(vr.$$.fragment,o),$(xn.$$.fragment,o),$(Lr.$$.fragment,o),$(Fn.$$.fragment,o),$(Mn.$$.fragment,o),$(En.$$.fragment,o),$(xr.$$.fragment,o),$(Fr.$$.fragment,o),$(qn.$$.fragment,o),$(qr.$$.fragment,o),$(Cn.$$.fragment,o),$(jn.$$.fragment,o),$(On.$$.fragment,o),$(Cr.$$.fragment,o),$(jr.$$.fragment,o),$(Nn.$$.fragment,o),$(Ar.$$.fragment,o),$(An.$$.fragment,o),$(In.$$.fragment,o),$(Sn.$$.fragment,o),$(Ir.$$.fragment,o),$(Sr.$$.fragment,o),$(Bn.$$.fragment,o),$(Qr.$$.fragment,o),$(Wn.$$.fragment,o),$(Qn.$$.fragment,o),jc=!0)},o(o){L(d.$$.fragment,o),L(ee.$$.fragment,o),L(oe.$$.fragment,o),L(Kn.$$.fragment,o),L(Jn.$$.fragment,o),L(Xn.$$.fragment,o),L(Yn.$$.fragment,o),L(Bo.$$.fragment,o),L(es.$$.fragment,o),L(ts.$$.fragment,o),L(os.$$.fragment,o),L(ns.$$.fragment,o),L(rs.$$.fragment,o),L(as.$$.fragment,o),L(is.$$.fragment,o),L(ls.$$.fragment,o),L(ds.$$.fragment,o),L(cs.$$.fragment,o),L(ps.$$.fragment,o),L(ms.$$.fragment,o),L(hs.$$.fragment,o),L(fs.$$.fragment,o),L(gs.$$.fragment,o),L(us.$$.fragment,o),L(_s.$$.fragment,o),L(ws.$$.fragment,o),L(ks.$$.fragment,o),L(bs.$$.fragment,o),L(vs.$$.fragment,o),L(Fs.$$.fragment,o),L(Go.$$.fragment,o),L(Ko.$$.fragment,o),L(Ms.$$.fragment,o),L(Es.$$.fragment,o),L(Os.$$.fragment,o),L(Xo.$$.fragment,o),L(Yo.$$.fragment,o),L(Zo.$$.fragment,o),L(Ps.$$.fragment,o),L(Ns.$$.fragment,o),L(Ds.$$.fragment,o),L(tn.$$.fragment,o),L(on.$$.fragment,o),L(nn.$$.fragment,o),L(sn.$$.fragment,o),L(rn.$$.fragment,o),L(Bs.$$.fragment,o),L(Ws.$$.fragment,o),L(Rs.$$.fragment,o),L(ln.$$.fragment,o),L(dn.$$.fragment,o),L(Vs.$$.fragment,o),L(Gs.$$.fragment,o),L(Ys.$$.fragment,o),L(pn.$$.fragment,o),L(mn.$$.fragment,o),L(hn.$$.fragment,o),L(Zs.$$.fragment,o),L(er.$$.fragment,o),L(sr.$$.fragment,o),L(gn.$$.fragment,o),L(un.$$.fragment,o),L(rr.$$.fragment,o),L(ar.$$.fragment,o),L(wn.$$.fragment,o),L(mr.$$.fragment,o),L(kn.$$.fragment,o),L(hr.$$.fragment,o),L(fr.$$.fragment,o),L(vn.$$.fragment,o),L(kr.$$.fragment,o),L(Tn.$$.fragment,o),L(yn.$$.fragment,o),L($n.$$.fragment,o),L(br.$$.fragment,o),L(vr.$$.fragment,o),L(xn.$$.fragment,o),L(Lr.$$.fragment,o),L(Fn.$$.fragment,o),L(Mn.$$.fragment,o),L(En.$$.fragment,o),L(xr.$$.fragment,o),L(Fr.$$.fragment,o),L(qn.$$.fragment,o),L(qr.$$.fragment,o),L(Cn.$$.fragment,o),L(jn.$$.fragment,o),L(On.$$.fragment,o),L(Cr.$$.fragment,o),L(jr.$$.fragment,o),L(Nn.$$.fragment,o),L(Ar.$$.fragment,o),L(An.$$.fragment,o),L(In.$$.fragment,o),L(Sn.$$.fragment,o),L(Ir.$$.fragment,o),L(Sr.$$.fragment,o),L(Bn.$$.fragment,o),L(Qr.$$.fragment,o),L(Wn.$$.fragment,o),L(Qn.$$.fragment,o),jc=!1},d(o){t(l),o&&t(k),o&&t(m),x(d),o&&t(J),o&&t(z),x(ee),o&&t(le),o&&t(G),o&&t(j),o&&t(ne),o&&t(de),o&&t(se),o&&t(ce),o&&t(C),o&&t(Q),o&&t(re),o&&t(Te),o&&t(pe),o&&t(ye),o&&t(I),x(oe),o&&t(fd),o&&t($e),o&&t(yd),o&&t(wt),o&&t(xd),o&&t(kt),o&&t(Fd),o&&t(No),o&&t(Md),o&&t(Ao),o&&t(Ed),o&&t(Xe),o&&t(Id),o&&t(Io),o&&t(Sd),o&&t(jt),x(Kn),o&&t(Dd),o&&t(Ot),o&&t(Bd),x(Jn,o),o&&t(Wd),o&&t(Pt),x(Xn),o&&t(Qd),o&&t(He),x(Yn),x(Bo),o&&t(Ud),o&&t(St),x(es),o&&t(Hd),o&&t(gt),x(ts),o&&t(Rd),o&&t(Dt),x(os),o&&t(Vd),o&&t(ut),x(ns),o&&t(Gd),o&&t(Bt),x(rs),o&&t(Kd),o&&t(Wt),x(as),o&&t(Jd),o&&t(Qt),x(is),o&&t(Xd),o&&t(Ut),x(ls),o&&t(Yd),o&&t(Ht),x(ds),o&&t(Zd),o&&t(Rt),x(cs),o&&t(ec),o&&t(Vt),x(ps),o&&t(tc),o&&t(Gt),x(ms),o&&t(oc),o&&t(Kt),x(hs),o&&t(nc),o&&t(Jt),x(fs),o&&t(sc),o&&t(Xt),x(gs),o&&t(rc),o&&t(Yt),x(us),o&&t(ac),o&&t(Zt),x(_s),o&&t(ic),o&&t(eo),x(ws),o&&t(lc),o&&t(to),x(ks),o&&t(dc),o&&t(oo),x(bs),o&&t(cc),o&&t(Pe),x(vs),x(Fs),x(Go),x(Ko),o&&t(pc),o&&t(ro),x(Ms),o&&t(mc),o&&t(Re),x(Es),x(Os),x(Xo),x(Yo),x(Zo),o&&t(hc),o&&t(io),x(Ps),o&&t(fc),o&&t(Ve),x(Ns),x(Ds),x(tn),x(on),x(nn),x(sn),x(rn),o&&t(gc),o&&t(co),x(Bs),o&&t(uc),o&&t(Ge),x(Ws),x(Rs),x(ln),x(dn),o&&t(_c),o&&t(mo),x(Vs),o&&t(wc),o&&t(Ke),x(Gs),x(Ys),x(pn),x(mn),x(hn),o&&t(kc),o&&t(fo),x(Zs),o&&t(bc),o&&t(Je),x(er),x(sr),x(gn),x(un),o&&t(vc),o&&t(_o),x(rr),o&&t(Tc),o&&t(ze),x(ar),x(wn),x(mr),x(kn),o&&t(yc),o&&t(bo),x(hr),o&&t($c),o&&t(Ie),x(fr),x(vn),x(kr),x(Tn),x(yn),x($n),o&&t(Lc),o&&t(To),x(br),o&&t(xc),o&&t(Se),x(vr),x(xn),x(Lr),x(Fn),x(Mn),x(En),o&&t(Fc),o&&t(Lo),x(xr),o&&t(Mc),o&&t(De),x(Fr),x(qn),x(qr),x(Cn),x(jn),x(On),o&&t(Ec),o&&t(Fo),x(Cr),o&&t(zc),o&&t(Be),x(jr),x(Nn),x(Ar),x(An),x(In),x(Sn),o&&t(qc),o&&t(Eo),x(Ir),o&&t(Cc),o&&t(We),x(Sr),x(Bn),x(Qr),x(Wn),x(Qn)}}}const sy={local:"longformer",sections:[{local:"overview",title:"Overview"},{local:"longformer-self-attention",title:"Longformer Self Attention"},{local:"training",title:"Training"},{local:"transformers.LongformerConfig",title:"LongformerConfig"},{local:"transformers.LongformerTokenizer",title:"LongformerTokenizer"},{local:"transformers.LongformerTokenizerFast",title:"LongformerTokenizerFast"},{local:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",title:"Longformer specific outputs"},{local:"transformers.LongformerModel",title:"LongformerModel"},{local:"transformers.LongformerForMaskedLM",title:"LongformerForMaskedLM"},{local:"transformers.LongformerForSequenceClassification",title:"LongformerForSequenceClassification"},{local:"transformers.LongformerForMultipleChoice",title:"LongformerForMultipleChoice"},{local:"transformers.LongformerForTokenClassification",title:"LongformerForTokenClassification"},{local:"transformers.LongformerForQuestionAnswering",title:"LongformerForQuestionAnswering"},{local:"transformers.TFLongformerModel",title:"TFLongformerModel"},{local:"transformers.TFLongformerForMaskedLM",title:"TFLongformerForMaskedLM"},{local:"transformers.TFLongformerForQuestionAnswering",title:"TFLongformerForQuestionAnswering"},{local:"transformers.TFLongformerForSequenceClassification",title:"TFLongformerForSequenceClassification"},{local:"transformers.TFLongformerForTokenClassification",title:"TFLongformerForTokenClassification"},{local:"transformers.TFLongformerForMultipleChoice",title:"TFLongformerForMultipleChoice"}],title:"Longformer"};function ry(M){return _T(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class my extends hT{constructor(l){super();fT(this,l,ry,ny,gT,{})}}export{my as default,sy as metadata};
