import{S as O$,i as I$,s as N$,e as a,k as p,w as y,t as i,M as D$,c as s,d as t,m as u,a as r,x as v,h as d,b as f,F as e,g as b,y as T,q as w,o as M,B as $,v as L$,L as P}from"../../chunks/vendor-6b77c823.js";import{T as at}from"../../chunks/Tip-39098574.js";import{D as F}from"../../chunks/Docstring-1088f2fb.js";import{C as B}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as U}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as C}from"../../chunks/ExampleCodeBlock-5212b321.js";function G$(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartModel, MBartConfig

# Initializing a MBART facebook/mbart-large-cc25 style configuration
configuration = MBartConfig()

# Initializing a model from the facebook/mbart-large-cc25 style configuration
model = MBartModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartModel, MBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a MBART facebook/mbart-large-cc25 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MBartConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/mbart-large-cc25 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function W$(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO")
example_english_phrase = " UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
inputs = tokenizer(example_english_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")
inputs["labels"] = labels["input_ids"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),{c(){l=a("p"),k=i("Examples:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Examples:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function R$(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizerFast

tokenizer = MBartTokenizerFast.from_pretrained(
    "facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO"
)
example_english_phrase = " UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
inputs = tokenizer(example_english_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")
inputs["labels"] = labels["input_ids"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizerFast.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),{c(){l=a("p"),k=i("Examples:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Examples:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function U$(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBart50Tokenizer

tokenizer = MBart50Tokenizer.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids
# model(**model_inputs, labels=labels) should work`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBart50Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBart50Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),{c(){l=a("p"),k=i("Examples:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Examples:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function X$(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBart50TokenizerFast

tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids
# model(**model_inputs, labels=labels) should work`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBart50TokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),{c(){l=a("p"),k=i("Examples:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Examples:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Q$(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function H$(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartModel
import torch

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function V$(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function J$(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-en-ro")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro")

example_english_phrase = "42 is the answer"
inputs = tokenizer(example_english_phrase, return_tensors="pt")

# Translate
generated_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5)
tokenizer.batch_decode(generated_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot;42 is the answer&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Translate</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;42 este r\u0103spuns&#x27;</span>`}}),{c(){l=a("p"),k=i("Translation example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Translation example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function K$(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

# de_DE is the language symbol id <LID> for German
TXT = "</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE"

input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors="pt")["input_ids"]
logits = model(input_ids).logits

masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()
[<span class="hljs-string">&#x27;nett&#x27;</span>, <span class="hljs-string">&#x27;sehr&#x27;</span>, <span class="hljs-string">&#x27;ganz&#x27;</span>, <span class="hljs-string">&#x27;nicht&#x27;</span>, <span class="hljs-string">&#x27;so&#x27;</span>]`}}),{c(){l=a("p"),k=i("Mask filling example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Mask filling example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Z$(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function Y$(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartForQuestionAnswering
import torch

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForQuestionAnswering.from_pretrained("facebook/mbart-large-cc25")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
[<span class="hljs-number">1</span>, <span class="hljs-number">16</span>]`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function ex(x){let l,k;return l=new B({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">3.04</span>`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,c){T(l,m,c),k=!0},p:P,i(m){k||(w(l.$$.fragment,m),k=!0)},o(m){M(l.$$.fragment,m),k=!1},d(m){$(l,m)}}}function tx(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function ox(x){let l,k,m,c,g;return c=new B({props:{code:`import torch
from transformers import MBartTokenizer, MBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]`}}),{c(){l=a("p"),k=i("Example of single-label classification:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example of single-label classification:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function nx(x){let l,k;return l=new B({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,c){T(l,m,c),k=!0},p:P,i(m){k||(w(l.$$.fragment,m),k=!0)},o(m){M(l.$$.fragment,m),k=!1},d(m){$(l,m)}}}function ax(x){let l,k,m,c,g;return c=new B({props:{code:`import torch
from transformers import MBartTokenizer, MBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]`}}),{c(){l=a("p"),k=i("Example of multi-label classification:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example of multi-label classification:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function sx(x){let l,k;return l=new B({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,c){T(l,m,c),k=!0},p:P,i(m){k||(w(l.$$.fragment,m),k=!0)},o(m){M(l.$$.fragment,m),k=!1},d(m){$(l,m)}}}function rx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartForCausalLM

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForCausalLM.from_pretrained("facebook/mbart-large-cc25", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function ix(x){let l,k,m,c,g,n,h,q,st,ze,E,Ie,he,rt,me,fe,it,Xe,Q,L,Ne,ne,S,A,dt,le,ce,lt,H,ct,pt,G,Fe,_e,Qe,ae,ge,be,ut,se,ke,ye,He;return{c(){l=a("p"),k=i("TF 2.0 models accepts two formats as inputs:"),m=p(),c=a("ul"),g=a("li"),n=i("having all inputs as keyword arguments (like PyTorch models), or"),h=p(),q=a("li"),st=i("having all inputs as a list, tuple or dict in the first positional arguments."),ze=p(),E=a("p"),Ie=i("This second option is useful when using "),he=a("code"),rt=i("tf.keras.Model.fit"),me=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),fe=a("code"),it=i("model(inputs)"),Xe=i("."),Q=p(),L=a("p"),Ne=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ne=p(),S=a("ul"),A=a("li"),dt=i("a single Tensor with "),le=a("code"),ce=i("input_ids"),lt=i(" only and nothing else: "),H=a("code"),ct=i("model(input_ids)"),pt=p(),G=a("li"),Fe=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),_e=a("code"),Qe=i("model([input_ids, attention_mask])"),ae=i(" or "),ge=a("code"),be=i("model([input_ids, attention_mask, token_type_ids])"),ut=p(),se=a("li"),ke=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=a("code"),He=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){l=s(z,"P",{});var j=r(l);k=d(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),m=u(z),c=s(z,"UL",{});var ve=r(c);g=s(ve,"LI",{});var De=r(g);n=d(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(t),h=u(ve),q=s(ve,"LI",{});var Et=r(q);st=d(Et,"having all inputs as a list, tuple or dict in the first positional arguments."),Et.forEach(t),ve.forEach(t),ze=u(z),E=s(z,"P",{});var V=r(E);Ie=d(V,"This second option is useful when using "),he=s(V,"CODE",{});var Ct=r(he);rt=d(Ct,"tf.keras.Model.fit"),Ct.forEach(t),me=d(V,` method which currently requires having all the
tensors in the first argument of the model call function: `),fe=s(V,"CODE",{});var bt=r(fe);it=d(bt,"model(inputs)"),bt.forEach(t),Xe=d(V,"."),V.forEach(t),Q=u(z),L=s(z,"P",{});var X=r(L);Ne=d(X,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X.forEach(t),ne=u(z),S=s(z,"UL",{});var re=r(S);A=s(re,"LI",{});var ie=r(A);dt=d(ie,"a single Tensor with "),le=s(ie,"CODE",{});var Pt=r(le);ce=d(Pt,"input_ids"),Pt.forEach(t),lt=d(ie," only and nothing else: "),H=s(ie,"CODE",{});var St=r(H);ct=d(St,"model(input_ids)"),St.forEach(t),ie.forEach(t),pt=u(re),G=s(re,"LI",{});var de=r(G);Fe=d(de,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),_e=s(de,"CODE",{});var At=r(_e);Qe=d(At,"model([input_ids, attention_mask])"),At.forEach(t),ae=d(de," or "),ge=s(de,"CODE",{});var Ot=r(ge);be=d(Ot,"model([input_ids, attention_mask, token_type_ids])"),Ot.forEach(t),de.forEach(t),ut=u(re),se=s(re,"LI",{});var Le=r(se);ke=d(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=s(Le,"CODE",{});var It=r(ye);He=d(It,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),It.forEach(t),Le.forEach(t),re.forEach(t)},m(z,j){b(z,l,j),e(l,k),b(z,m,j),b(z,c,j),e(c,g),e(g,n),e(c,h),e(c,q),e(q,st),b(z,ze,j),b(z,E,j),e(E,Ie),e(E,he),e(he,rt),e(E,me),e(E,fe),e(fe,it),e(E,Xe),b(z,Q,j),b(z,L,j),e(L,Ne),b(z,ne,j),b(z,S,j),e(S,A),e(A,dt),e(A,le),e(le,ce),e(A,lt),e(A,H),e(H,ct),e(S,pt),e(S,G),e(G,Fe),e(G,_e),e(_e,Qe),e(G,ae),e(G,ge),e(ge,be),e(S,ut),e(S,se),e(se,ke),e(se,ye),e(ye,He)},d(z){z&&t(l),z&&t(m),z&&t(c),z&&t(ze),z&&t(E),z&&t(Q),z&&t(L),z&&t(ne),z&&t(S)}}}function dx(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function lx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, TFMBartModel
import tensorflow as tf

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = TFMBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function cx(x){let l,k,m,c,g,n,h,q,st,ze,E,Ie,he,rt,me,fe,it,Xe,Q,L,Ne,ne,S,A,dt,le,ce,lt,H,ct,pt,G,Fe,_e,Qe,ae,ge,be,ut,se,ke,ye,He;return{c(){l=a("p"),k=i("TF 2.0 models accepts two formats as inputs:"),m=p(),c=a("ul"),g=a("li"),n=i("having all inputs as keyword arguments (like PyTorch models), or"),h=p(),q=a("li"),st=i("having all inputs as a list, tuple or dict in the first positional arguments."),ze=p(),E=a("p"),Ie=i("This second option is useful when using "),he=a("code"),rt=i("tf.keras.Model.fit"),me=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),fe=a("code"),it=i("model(inputs)"),Xe=i("."),Q=p(),L=a("p"),Ne=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ne=p(),S=a("ul"),A=a("li"),dt=i("a single Tensor with "),le=a("code"),ce=i("input_ids"),lt=i(" only and nothing else: "),H=a("code"),ct=i("model(input_ids)"),pt=p(),G=a("li"),Fe=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),_e=a("code"),Qe=i("model([input_ids, attention_mask])"),ae=i(" or "),ge=a("code"),be=i("model([input_ids, attention_mask, token_type_ids])"),ut=p(),se=a("li"),ke=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=a("code"),He=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){l=s(z,"P",{});var j=r(l);k=d(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),m=u(z),c=s(z,"UL",{});var ve=r(c);g=s(ve,"LI",{});var De=r(g);n=d(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(t),h=u(ve),q=s(ve,"LI",{});var Et=r(q);st=d(Et,"having all inputs as a list, tuple or dict in the first positional arguments."),Et.forEach(t),ve.forEach(t),ze=u(z),E=s(z,"P",{});var V=r(E);Ie=d(V,"This second option is useful when using "),he=s(V,"CODE",{});var Ct=r(he);rt=d(Ct,"tf.keras.Model.fit"),Ct.forEach(t),me=d(V,` method which currently requires having all the
tensors in the first argument of the model call function: `),fe=s(V,"CODE",{});var bt=r(fe);it=d(bt,"model(inputs)"),bt.forEach(t),Xe=d(V,"."),V.forEach(t),Q=u(z),L=s(z,"P",{});var X=r(L);Ne=d(X,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X.forEach(t),ne=u(z),S=s(z,"UL",{});var re=r(S);A=s(re,"LI",{});var ie=r(A);dt=d(ie,"a single Tensor with "),le=s(ie,"CODE",{});var Pt=r(le);ce=d(Pt,"input_ids"),Pt.forEach(t),lt=d(ie," only and nothing else: "),H=s(ie,"CODE",{});var St=r(H);ct=d(St,"model(input_ids)"),St.forEach(t),ie.forEach(t),pt=u(re),G=s(re,"LI",{});var de=r(G);Fe=d(de,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),_e=s(de,"CODE",{});var At=r(_e);Qe=d(At,"model([input_ids, attention_mask])"),At.forEach(t),ae=d(de," or "),ge=s(de,"CODE",{});var Ot=r(ge);be=d(Ot,"model([input_ids, attention_mask, token_type_ids])"),Ot.forEach(t),de.forEach(t),ut=u(re),se=s(re,"LI",{});var Le=r(se);ke=d(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=s(Le,"CODE",{});var It=r(ye);He=d(It,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),It.forEach(t),Le.forEach(t),re.forEach(t)},m(z,j){b(z,l,j),e(l,k),b(z,m,j),b(z,c,j),e(c,g),e(g,n),e(c,h),e(c,q),e(q,st),b(z,ze,j),b(z,E,j),e(E,Ie),e(E,he),e(he,rt),e(E,me),e(E,fe),e(fe,it),e(E,Xe),b(z,Q,j),b(z,L,j),e(L,Ne),b(z,ne,j),b(z,S,j),e(S,A),e(A,dt),e(A,le),e(le,ce),e(A,lt),e(A,H),e(H,ct),e(S,pt),e(S,G),e(G,Fe),e(G,_e),e(_e,Qe),e(G,ae),e(G,ge),e(ge,be),e(S,ut),e(S,se),e(se,ke),e(se,ye),e(ye,He)},d(z){z&&t(l),z&&t(m),z&&t(c),z&&t(ze),z&&t(E),z&&t(Q),z&&t(L),z&&t(ne),z&&t(S)}}}function px(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function ux(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

model = TFMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

ARTICLE_TO_SUMMARIZE = "Meine Freunde sind cool, aber sie essen zu viel Kuchen."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="tf")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5)
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;Meine Freunde sind cool, aber sie essen zu viel Kuchen.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=a("p"),k=i("Summarization example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Summarization example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function hx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

# de_DE is the language symbol id <LID> for German
TXT = "</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE"
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors="tf")["input_ids"]

logits = model(input_ids).logits
probs = tf.nn.softmax(logits[0])
# probs[5] is associated with the mask token`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){l=a("p"),k=i("Mask filling example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Mask filling example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function mx(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function fx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartModel

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function _x(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function gx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function bx(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function kx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

ARTICLE_TO_SUMMARIZE = "Meine Freunde sind cool, aber sie essen zu viel Kuchen."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="np")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5).sequences
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;Meine Freunde sind cool, aber sie essen zu viel Kuchen.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=a("p"),k=i("Summarization example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Summarization example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function yx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

# de_DE is the language symbol id <LID> for German
TXT = "</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE"
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors="np")["input_ids"]

logits = model(input_ids).logits
masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero()[0].item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero()[<span class="hljs-number">0</span>].item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),{c(){l=a("p"),k=i("Mask filling example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Mask filling example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function vx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Tx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function wx(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function Mx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function $x(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function xx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function zx(x){let l,k,m,c,g;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),g=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(n,h){b(n,l,h),e(l,k),e(l,m),e(m,c),e(l,g)},d(n){n&&t(l)}}}function Fx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForQuestionAnswering

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartForQuestionAnswering.from_pretrained("facebook/mbart-large-cc25")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function qx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Bx(x){let l,k,m,c,g;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var h=r(l);k=d(h,"Example:"),h.forEach(t),m=u(n),v(c.$$.fragment,n)},m(n,h){b(n,l,h),e(l,k),b(n,m,h),T(c,n,h),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){M(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function jx(x){let l,k,m,c,g,n,h,q,st,ze,E,Ie,he,rt,me,fe,it,Xe,Q,L,Ne,ne,S,A,dt,le,ce,lt,H,ct,pt,G,Fe,_e,Qe,ae,ge,be,ut,se,ke,ye,He,z,j,ve,De,Et,V,Ct,bt,X,re,ie,Pt,St,de,At,Ot,Le,It,Eh,id,Ch,Ph,cp,kt,Sh,ga,dd,Ah,Oh,Ih,ci,Nh,Dh,pp,pi,ld,Lh,up,ba,hp,ui,ka,cd,Gh,Wh,Nt,Rh,pd,Uh,Xh,ud,Qh,Hh,mp,ya,fp,Dt,$o,hd,va,Vh,md,Jh,_p,yt,Kh,Ta,Zh,Yh,fd,em,tm,gp,hi,om,bp,mi,_d,nm,kp,Lt,xo,gd,wa,am,bd,sm,yp,Ve,rm,kd,im,dm,yd,lm,cm,vd,pm,um,vp,zo,hm,fi,mm,fm,Tp,_i,Td,_m,wp,Ma,Mp,gi,$a,wd,gm,bm,Te,km,Md,ym,vm,$d,Tm,wm,xd,Mm,$m,zd,xm,zm,Fd,Fm,qm,$p,xa,xp,Gt,Fo,qd,za,Bm,Bd,jm,zp,Ge,Fa,Em,Wt,Cm,bi,Pm,Sm,qa,Am,Om,Im,Rt,Nm,ki,Dm,Lm,yi,Gm,Wm,Rm,qo,Fp,Ut,Bo,jd,Ba,Um,Ed,Xm,qp,J,ja,Qm,Cd,Hm,Vm,ht,Jm,vi,Km,Zm,Ti,Ym,ef,Ea,tf,of,nf,Ca,af,Pd,sf,rf,df,jo,lf,Eo,Pa,cf,Sd,pf,uf,Je,Sa,hf,Aa,mf,Ad,ff,_f,gf,Oa,Ia,Od,bf,kf,Id,yf,vf,Na,Nd,Tf,wf,Dd,Mf,$f,Ld,xf,Bp,Xt,Co,Gd,Da,zf,Wd,Ff,jp,O,La,qf,Qt,Bf,Rd,jf,Ef,Ga,Cf,Pf,Sf,vt,wi,Af,Of,Mi,If,Nf,$i,Df,Lf,Gf,Wa,Wf,Ud,Rf,Uf,Xf,Po,Qf,qe,Ra,Hf,Xd,Vf,Jf,Ua,Kf,Qd,Zf,Yf,e_,Xa,Qa,Hd,t_,o_,Vd,n_,a_,Ha,Jd,s_,r_,Kd,i_,d_,Zd,l_,c_,So,Va,p_,Yd,u_,h_,Ao,Ja,m_,el,f_,__,Oo,Ka,g_,tl,b_,Ep,Ht,Io,ol,Za,k_,nl,y_,Cp,I,Ya,v_,es,T_,ts,w_,M_,$_,os,x_,xi,z_,F_,q_,No,B_,Ke,ns,j_,as,E_,al,C_,P_,S_,ss,rs,sl,A_,O_,rl,I_,N_,is,il,D_,L_,dl,G_,W_,ll,R_,U_,Do,ds,X_,cl,Q_,H_,Lo,ls,V_,cs,J_,pl,K_,Z_,Y_,Go,ps,eg,ul,tg,og,Wo,us,ng,hl,ag,Pp,Vt,Ro,ml,hs,sg,fl,rg,Sp,K,ms,ig,Jt,dg,_l,lg,cg,fs,pg,ug,hg,_s,mg,zi,fg,_g,gg,Uo,bg,Be,gs,kg,gl,yg,vg,bs,Tg,bl,wg,Mg,$g,ks,ys,kl,xg,zg,yl,Fg,qg,vs,vl,Bg,jg,Tl,Eg,Cg,wl,Pg,Sg,Xo,Ts,Ag,Ml,Og,Ig,Qo,ws,Ng,$l,Dg,Ap,Kt,Ho,xl,Ms,Lg,zl,Gg,Op,We,$s,Wg,xs,Rg,Fi,Ug,Xg,Qg,zs,Hg,Fs,Vg,Jg,Kg,Ze,qs,Zg,Zt,Yg,qi,eb,tb,Fl,ob,nb,ab,Vo,sb,Jo,Ip,Yt,Ko,ql,Bs,rb,Bl,ib,Np,Re,js,db,Es,lb,Bi,cb,pb,ub,Cs,hb,Ps,mb,fb,_b,je,Ss,gb,eo,bb,ji,kb,yb,jl,vb,Tb,wb,Zo,Mb,Yo,$b,en,Dp,to,tn,El,As,xb,Cl,zb,Lp,we,Os,Fb,oo,qb,Pl,Bb,jb,Sl,Eb,Cb,Pb,Is,Sb,Ei,Ab,Ob,Ib,Ns,Nb,Ds,Db,Lb,Gb,Ee,Ls,Wb,no,Rb,Ci,Ub,Xb,Al,Qb,Hb,Vb,on,Jb,nn,Kb,an,Gp,ao,sn,Ol,Gs,Zb,Il,Yb,Wp,Me,Ws,ek,Nl,tk,ok,Rs,nk,Pi,ak,sk,rk,Us,ik,Xs,dk,lk,ck,Z,Qs,pk,so,uk,Si,hk,mk,Dl,fk,_k,gk,rn,bk,dn,kk,ln,yk,cn,vk,pn,Rp,ro,un,Ll,Hs,Tk,Gl,wk,Up,io,Vs,Mk,hn,Js,$k,mn,Xp,lo,fn,Wl,Ks,xk,Rl,zk,Qp,$e,Zs,Fk,Ys,qk,Ai,Bk,jk,Ek,er,Ck,tr,Pk,Sk,Ak,_n,Ok,Ye,or,Ik,co,Nk,Oi,Dk,Lk,Ul,Gk,Wk,Rk,gn,Uk,bn,Hp,po,kn,Xl,nr,Xk,Ql,Qk,Vp,xe,ar,Hk,sr,Vk,Ii,Jk,Kk,Zk,rr,Yk,ir,ey,ty,oy,yn,ny,Ce,dr,ay,uo,sy,Ni,ry,iy,Hl,dy,ly,cy,vn,py,Tn,uy,wn,Jp,ho,Mn,Vl,lr,hy,Jl,my,Kp,W,cr,fy,pr,_y,Di,gy,by,ky,ur,yy,hr,vy,Ty,wy,Kl,My,$y,mt,Zl,mr,xy,zy,Yl,fr,Fy,qy,ec,_r,By,jy,tc,gr,Ey,Cy,et,br,Py,mo,Sy,oc,Ay,Oy,nc,Iy,Ny,Dy,$n,Ly,xn,Gy,zn,kr,Wy,Fn,Ry,qn,yr,Uy,Bn,Zp,fo,jn,ac,vr,Xy,sc,Qy,Yp,R,Tr,Hy,wr,Vy,Li,Jy,Ky,Zy,Mr,Yy,$r,ev,tv,ov,rc,nv,av,ft,ic,xr,sv,rv,dc,zr,iv,dv,lc,Fr,lv,cv,cc,qr,pv,uv,Pe,Br,hv,_o,mv,pc,fv,_v,uc,gv,bv,kv,En,yv,Cn,vv,Pn,Tv,Sn,jr,wv,An,Mv,On,Er,$v,In,eu,go,Nn,hc,Cr,xv,mc,zv,tu,N,Pr,Fv,fc,qv,Bv,Sr,jv,Gi,Ev,Cv,Pv,Ar,Sv,Or,Av,Ov,Iv,_c,Nv,Dv,_t,gc,Ir,Lv,Gv,bc,Nr,Wv,Rv,kc,Dr,Uv,Xv,yc,Lr,Qv,Hv,tt,Gr,Vv,bo,Jv,vc,Kv,Zv,Tc,Yv,e1,t1,Dn,o1,Ln,n1,Gn,Wr,a1,Wn,s1,Rn,Rr,r1,Un,ou,ko,Xn,wc,Ur,i1,Mc,d1,nu,D,Xr,l1,yo,c1,$c,p1,u1,xc,h1,m1,f1,Qr,_1,Wi,g1,b1,k1,Hr,y1,Vr,v1,T1,w1,zc,M1,$1,gt,Fc,Jr,x1,z1,qc,Kr,F1,q1,Bc,Zr,B1,j1,jc,Yr,E1,C1,ot,ei,P1,vo,S1,Ec,A1,O1,Cc,I1,N1,D1,Qn,L1,Hn,G1,Vn,ti,W1,Jn,R1,Kn,oi,U1,Zn,au;return n=new U({}),ne=new U({}),De=new U({}),ba=new B({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO")
example_english_phrase = "UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"

inputs = tokenizer(example_english_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-en-ro")
# forward pass
model(**inputs, labels=batch["labels"])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot;UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**inputs, labels=batch[<span class="hljs-string">&quot;labels&quot;</span>])`}}),ya=new B({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX")
article = "UN Chief Says There Is No Military Solution in Syria"
inputs = tokenizer(article, return_tensors="pt")
translated_tokens = model.generate(**inputs, decoder_start_token_id=tokenizer.lang_code_to_id["ro_RO"])
tokenizer.batch_decode(translated_tokens, skip_special_tokens=True)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>article = <span class="hljs-string">&quot;UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(article, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>translated_tokens = model.generate(**inputs, decoder_start_token_id=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;ro_RO&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(translated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>`}}),va=new U({}),wa=new U({}),Ma=new B({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-50")
tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")

src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"

model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids

model(**model_inputs, labels=labels)  # forward pass`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBart50TokenizerFast

model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>)
tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)

src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>

model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

model(**model_inputs, labels=labels)  <span class="hljs-comment"># forward pass</span>`}}),xa=new B({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

article_hi = "\u0938\u0902\u092F\u0941\u0915\u094D\u0924 \u0930\u093E\u0937\u094D\u091F\u094D\u0930 \u0915\u0947 \u092A\u094D\u0930\u092E\u0941\u0916 \u0915\u093E \u0915\u0939\u0928\u093E \u0939\u0948 \u0915\u093F \u0938\u0940\u0930\u093F\u092F\u093E \u092E\u0947\u0902 \u0915\u094B\u0908 \u0938\u0948\u0928\u094D\u092F \u0938\u092E\u093E\u0927\u093E\u0928 \u0928\u0939\u0940\u0902 \u0939\u0948"
article_ar = "\u0627\u0644\u0623\u0645\u064A\u0646 \u0627\u0644\u0639\u0627\u0645 \u0644\u0644\u0623\u0645\u0645 \u0627\u0644\u0645\u062A\u062D\u062F\u0629 \u064A\u0642\u0648\u0644 \u0625\u0646\u0647 \u0644\u0627 \u064A\u0648\u062C\u062F \u062D\u0644 \u0639\u0633\u0643\u0631\u064A \u0641\u064A \u0633\u0648\u0631\u064A\u0627."

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-50-many-to-many-mmt")
tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50-many-to-many-mmt")

# translate Hindi to French
tokenizer.src_lang = "hi_IN"
encoded_hi = tokenizer(article_hi, return_tensors="pt")
generated_tokens = model.generate(**encoded_hi, forced_bos_token_id=tokenizer.lang_code_to_id["fr_XX"])
tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)
# => "Le chef de l 'ONU affirme qu 'il n 'y a pas de solution militaire en Syria."

# translate Arabic to English
tokenizer.src_lang = "ar_AR"
encoded_ar = tokenizer(article_ar, return_tensors="pt")
generated_tokens = model.generate(**encoded_ar, forced_bos_token_id=tokenizer.lang_code_to_id["en_XX"])
tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)
# => "The Secretary-General of the United Nations says there is no military solution in Syria."`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBart50TokenizerFast

article_hi = <span class="hljs-string">&quot;\u0938\u0902\u092F\u0941\u0915\u094D\u0924 \u0930\u093E\u0937\u094D\u091F\u094D\u0930 \u0915\u0947 \u092A\u094D\u0930\u092E\u0941\u0916 \u0915\u093E \u0915\u0939\u0928\u093E \u0939\u0948 \u0915\u093F \u0938\u0940\u0930\u093F\u092F\u093E \u092E\u0947\u0902 \u0915\u094B\u0908 \u0938\u0948\u0928\u094D\u092F \u0938\u092E\u093E\u0927\u093E\u0928 \u0928\u0939\u0940\u0902 \u0939\u0948&quot;</span>
article_ar = <span class="hljs-string">&quot;\u0627\u0644\u0623\u0645\u064A\u0646 \u0627\u0644\u0639\u0627\u0645 \u0644\u0644\u0623\u0645\u0645 \u0627\u0644\u0645\u062A\u062D\u062F\u0629 \u064A\u0642\u0648\u0644 \u0625\u0646\u0647 \u0644\u0627 \u064A\u0648\u062C\u062F \u062D\u0644 \u0639\u0633\u0643\u0631\u064A \u0641\u064A \u0633\u0648\u0631\u064A\u0627.&quot;</span>

model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50-many-to-many-mmt&quot;</span>)
tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50-many-to-many-mmt&quot;</span>)

<span class="hljs-comment"># translate Hindi to French</span>
tokenizer.src_lang = <span class="hljs-string">&quot;hi_IN&quot;</span>
encoded_hi = tokenizer(article_hi, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
generated_tokens = model.generate(**encoded_hi, forced_bos_token_id=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;fr_XX&quot;</span>])
tokenizer.batch_decode(generated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-comment"># =&gt; &quot;Le chef de l &#x27;ONU affirme qu &#x27;il n &#x27;y a pas de solution militaire en Syria.&quot;</span>

<span class="hljs-comment"># translate Arabic to English</span>
tokenizer.src_lang = <span class="hljs-string">&quot;ar_AR&quot;</span>
encoded_ar = tokenizer(article_ar, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
generated_tokens = model.generate(**encoded_ar, forced_bos_token_id=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;en_XX&quot;</span>])
tokenizer.batch_decode(generated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-comment"># =&gt; &quot;The Secretary-General of the United Nations says there is no military solution in Syria.&quot;</span>`}}),za=new U({}),Fa=new F({props:{name:"class transformers.MBartConfig",anchor:"transformers.MBartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the MBART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartModel">MBartModel</a> or <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.TFMBartModel">TFMBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.MBartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.MBartConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.MBartConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.MBartConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.MBartConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.MBartConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.MBartConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.MBartConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.MBartConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.MBartConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.MBartConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.MBartConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.MBartConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.MBartConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.MBartConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.MBartConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.MBartConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/configuration_mbart.py#L34"}}),qo=new C({props:{anchor:"transformers.MBartConfig.example",$$slots:{default:[G$]},$$scope:{ctx:x}}}),Ba=new U({}),ja=new F({props:{name:"class transformers.MBartTokenizer",anchor:"transformers.MBartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/tokenization_mbart.py#L50"}}),jo=new C({props:{anchor:"transformers.MBartTokenizer.example",$$slots:{default:[W$]},$$scope:{ctx:x}}}),Pa=new F({props:{name:"as_target_tokenizer",anchor:"transformers.MBartTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/tokenization_mbart.py#L339"}}),Sa=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/tokenization_mbart.py#L218",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Da=new U({}),La=new F({props:{name:"class transformers.MBartTokenizerFast",anchor:"transformers.MBartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/tokenization_mbart_fast.py#L60"}}),Po=new C({props:{anchor:"transformers.MBartTokenizerFast.example",$$slots:{default:[R$]},$$scope:{ctx:x}}}),Ra=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/tokenization_mbart_fast.py#L162",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Va=new F({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/tokenization_mbart_fast.py#L191",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ja=new F({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/tokenization_mbart_fast.py#L250"}}),Ka=new F({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/tokenization_mbart_fast.py#L265"}}),Za=new U({}),Ya=new F({props:{name:"class transformers.MBart50Tokenizer",anchor:"transformers.MBart50Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBart50Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.MBart50Tokenizer.src_lang",description:`<strong>src_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the source language.`,name:"src_lang"},{anchor:"transformers.MBart50Tokenizer.tgt_lang",description:`<strong>tgt_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"tgt_lang"},{anchor:"transformers.MBart50Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.MBart50Tokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MBart50Tokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MBart50Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MBart50Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MBart50Tokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.MBart50Tokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart50/tokenization_mbart50.py#L48"}}),No=new C({props:{anchor:"transformers.MBart50Tokenizer.example",$$slots:{default:[U$]},$$scope:{ctx:x}}}),ns=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart50/tokenization_mbart50.py#L287",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ds=new F({props:{name:"convert_tokens_to_string",anchor:"transformers.MBart50Tokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:": typing.List[str]"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart50/tokenization_mbart50.py#L236"}}),ls=new F({props:{name:"get_special_tokens_mask",anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart50/tokenization_mbart50.py#L257",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ps=new F({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart50/tokenization_mbart50.py#L348"}}),us=new F({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart50/tokenization_mbart50.py#L354"}}),hs=new U({}),ms=new F({props:{name:"class transformers.MBart50TokenizerFast",anchor:"transformers.MBart50TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.MBart50TokenizerFast.src_lang",description:`<strong>src_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the source language.`,name:"src_lang"},{anchor:"transformers.MBart50TokenizerFast.tgt_lang",description:`<strong>tgt_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"tgt_lang"},{anchor:"transformers.MBart50TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.MBart50TokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MBart50TokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MBart50TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MBart50TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MBart50TokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L56"}}),Uo=new C({props:{anchor:"transformers.MBart50TokenizerFast.example",$$slots:{default:[X$]},$$scope:{ctx:x}}}),gs=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L169",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ts=new F({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L220"}}),ws=new F({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L235"}}),Ms=new U({}),$s=new F({props:{name:"class transformers.MBartModel",anchor:"transformers.MBartModel",parameters:[{name:"config",val:": MBartConfig"}],parametersDescription:[{anchor:"transformers.MBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_mbart.py#L1134"}}),qs=new F({props:{name:"forward",anchor:"transformers.MBartModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MBartModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_mbart.py#L1161",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
`}}),Vo=new at({props:{$$slots:{default:[Q$]},$$scope:{ctx:x}}}),Jo=new C({props:{anchor:"transformers.MBartModel.forward.example",$$slots:{default:[H$]},$$scope:{ctx:x}}}),Bs=new U({}),js=new F({props:{name:"class transformers.MBartForConditionalGeneration",anchor:"transformers.MBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"}],parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_mbart.py#L1251"}}),Ss=new F({props:{name:"forward",anchor:"transformers.MBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_mbart.py#L1295",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
`}}),Zo=new at({props:{$$slots:{default:[V$]},$$scope:{ctx:x}}}),Yo=new C({props:{anchor:"transformers.MBartForConditionalGeneration.forward.example",$$slots:{default:[J$]},$$scope:{ctx:x}}}),en=new C({props:{anchor:"transformers.MBartForConditionalGeneration.forward.example-2",$$slots:{default:[K$]},$$scope:{ctx:x}}}),As=new U({}),Os=new F({props:{name:"class transformers.MBartForQuestionAnswering",anchor:"transformers.MBartForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_mbart.py#L1551"}}),Ls=new F({props:{name:"forward",anchor:"transformers.MBartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Tensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MBartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_mbart.py#L1563",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
`}}),on=new at({props:{$$slots:{default:[Z$]},$$scope:{ctx:x}}}),nn=new C({props:{anchor:"transformers.MBartForQuestionAnswering.forward.example",$$slots:{default:[Y$]},$$scope:{ctx:x}}}),an=new C({props:{anchor:"transformers.MBartForQuestionAnswering.forward.example-2",$$slots:{default:[ex]},$$scope:{ctx:x}}}),Gs=new U({}),Ws=new F({props:{name:"class transformers.MBartForSequenceClassification",anchor:"transformers.MBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_mbart.py#L1424"}}),Qs=new F({props:{name:"forward",anchor:"transformers.MBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_mbart.py#L1437",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
`}}),rn=new at({props:{$$slots:{default:[tx]},$$scope:{ctx:x}}}),dn=new C({props:{anchor:"transformers.MBartForSequenceClassification.forward.example",$$slots:{default:[ox]},$$scope:{ctx:x}}}),ln=new C({props:{anchor:"transformers.MBartForSequenceClassification.forward.example-2",$$slots:{default:[nx]},$$scope:{ctx:x}}}),cn=new C({props:{anchor:"transformers.MBartForSequenceClassification.forward.example-3",$$slots:{default:[ax]},$$scope:{ctx:x}}}),pn=new C({props:{anchor:"transformers.MBartForSequenceClassification.forward.example-4",$$slots:{default:[sx]},$$scope:{ctx:x}}}),Hs=new U({}),Vs=new F({props:{name:"class transformers.MBartForCausalLM",anchor:"transformers.MBartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_mbart.py#L1684"}}),Js=new F({props:{name:"forward",anchor:"transformers.MBartForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.MBartForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.MBartForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MBartForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.MBartForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.MBartForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_mbart.py#L1715",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
`}}),mn=new C({props:{anchor:"transformers.MBartForCausalLM.forward.example",$$slots:{default:[rx]},$$scope:{ctx:x}}}),Ks=new U({}),Zs=new F({props:{name:"class transformers.TFMBartModel",anchor:"transformers.TFMBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_tf_mbart.py#L1147"}}),_n=new at({props:{$$slots:{default:[ix]},$$scope:{ctx:x}}}),or=new F({props:{name:"call",anchor:"transformers.TFMBartModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[tensorflow.python.framework.ops.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFMBartModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFMBartModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMBartModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFMBartModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFMBartModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFMBartModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFMBartModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFMBartModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMBartModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMBartModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_tf_mbart.py#L1159",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gn=new at({props:{$$slots:{default:[dx]},$$scope:{ctx:x}}}),bn=new C({props:{anchor:"transformers.TFMBartModel.call.example",$$slots:{default:[lx]},$$scope:{ctx:x}}}),nr=new U({}),ar=new F({props:{name:"class transformers.TFMBartForConditionalGeneration",anchor:"transformers.TFMBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_tf_mbart.py#L1234"}}),yn=new at({props:{$$slots:{default:[cx]},$$scope:{ctx:x}}}),dr=new F({props:{name:"call",anchor:"transformers.TFMBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": [typing.Tuple[typing.Tuple[tensorflow.python.framework.ops.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFMBartForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFMBartForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFMBartForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMBartForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMBartForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_tf_mbart.py#L1267",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vn=new at({props:{$$slots:{default:[px]},$$scope:{ctx:x}}}),Tn=new C({props:{anchor:"transformers.TFMBartForConditionalGeneration.call.example",$$slots:{default:[ux]},$$scope:{ctx:x}}}),wn=new C({props:{anchor:"transformers.TFMBartForConditionalGeneration.call.example-2",$$slots:{default:[hx]},$$scope:{ctx:x}}}),lr=new U({}),cr=new F({props:{name:"class transformers.FlaxMBartModel",anchor:"transformers.FlaxMBartModel",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_flax_mbart.py#L1265"}}),br=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_flax_mbart.py#L1202",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$n=new at({props:{$$slots:{default:[mx]},$$scope:{ctx:x}}}),xn=new C({props:{anchor:"transformers.FlaxMBartModel.__call__.example",$$slots:{default:[fx]},$$scope:{ctx:x}}}),kr=new F({props:{name:"encode",anchor:"transformers.FlaxMBartModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_flax_mbart.py#L1026",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fn=new C({props:{anchor:"transformers.FlaxMBartModel.encode.example",$$slots:{default:[_x]},$$scope:{ctx:x}}}),yr=new F({props:{name:"decode",anchor:"transformers.FlaxMBartModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_flax_mbart.py#L1089",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bn=new C({props:{anchor:"transformers.FlaxMBartModel.decode.example",$$slots:{default:[gx]},$$scope:{ctx:x}}}),vr=new U({}),Tr=new F({props:{name:"class transformers.FlaxMBartForConditionalGeneration",anchor:"transformers.FlaxMBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_flax_mbart.py#L1352"}}),Br=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_flax_mbart.py#L1202",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),En=new at({props:{$$slots:{default:[bx]},$$scope:{ctx:x}}}),Cn=new C({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.example",$$slots:{default:[kx]},$$scope:{ctx:x}}}),Pn=new C({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.example-2",$$slots:{default:[yx]},$$scope:{ctx:x}}}),jr=new F({props:{name:"encode",anchor:"transformers.FlaxMBartForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_flax_mbart.py#L1026",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),An=new C({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.example",$$slots:{default:[vx]},$$scope:{ctx:x}}}),Er=new F({props:{name:"decode",anchor:"transformers.FlaxMBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_flax_mbart.py#L1356",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),In=new C({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.example",$$slots:{default:[Tx]},$$scope:{ctx:x}}}),Cr=new U({}),Pr=new F({props:{name:"class transformers.FlaxMBartForSequenceClassification",anchor:"transformers.FlaxMBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_flax_mbart.py#L1665"}}),Gr=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartForSequenceClassification.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_flax_mbart.py#L1202",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Dn=new at({props:{$$slots:{default:[wx]},$$scope:{ctx:x}}}),Ln=new C({props:{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.example",$$slots:{default:[Mx]},$$scope:{ctx:x}}}),Wr=new F({props:{name:"encode",anchor:"transformers.FlaxMBartForSequenceClassification.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForSequenceClassification.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForSequenceClassification.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_flax_mbart.py#L1026",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wn=new C({props:{anchor:"transformers.FlaxMBartForSequenceClassification.encode.example",$$slots:{default:[$x]},$$scope:{ctx:x}}}),Rr=new F({props:{name:"decode",anchor:"transformers.FlaxMBartForSequenceClassification.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForSequenceClassification.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_flax_mbart.py#L1089",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Un=new C({props:{anchor:"transformers.FlaxMBartForSequenceClassification.decode.example",$$slots:{default:[xx]},$$scope:{ctx:x}}}),Ur=new U({}),Xr=new F({props:{name:"class transformers.FlaxMBartForQuestionAnswering",anchor:"transformers.FlaxMBartForQuestionAnswering",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_flax_mbart.py#L1753"}}),ei=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_flax_mbart.py#L1202",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qn=new at({props:{$$slots:{default:[zx]},$$scope:{ctx:x}}}),Hn=new C({props:{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.example",$$slots:{default:[Fx]},$$scope:{ctx:x}}}),ti=new F({props:{name:"encode",anchor:"transformers.FlaxMBartForQuestionAnswering.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_flax_mbart.py#L1026",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jn=new C({props:{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.example",$$slots:{default:[qx]},$$scope:{ctx:x}}}),oi=new F({props:{name:"decode",anchor:"transformers.FlaxMBartForQuestionAnswering.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16919/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16919/src/transformers/models/mbart/modeling_flax_mbart.py#L1089",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16919/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zn=new C({props:{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.example",$$slots:{default:[Bx]},$$scope:{ctx:x}}}),{c(){l=a("meta"),k=p(),m=a("h1"),c=a("a"),g=a("span"),y(n.$$.fragment),h=p(),q=a("span"),st=i("MBart and MBart-50"),ze=p(),E=a("p"),Ie=a("strong"),he=i("DISCLAIMER:"),rt=i(" If you see something strange, file a "),me=a("a"),fe=i("Github Issue"),it=i(` and assign
@patrickvonplaten`),Xe=p(),Q=a("h2"),L=a("a"),Ne=a("span"),y(ne.$$.fragment),S=p(),A=a("span"),dt=i("Overview of MBart"),le=p(),ce=a("p"),lt=i("The MBart model was presented in "),H=a("a"),ct=i("Multilingual Denoising Pre-training for Neural Machine Translation"),pt=i(` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),G=p(),Fe=a("p"),_e=i(`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),Qe=p(),ae=a("p"),ge=i("This model was contributed by "),be=a("a"),ut=i("valhalla"),se=i(". The Authors\u2019 code can be found "),ke=a("a"),ye=i("here"),He=p(),z=a("h3"),j=a("a"),ve=a("span"),y(De.$$.fragment),Et=p(),V=a("span"),Ct=i("Training of MBart"),bt=p(),X=a("p"),re=i(`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),ie=a("code"),Pt=i("X [eos, src_lang_code]"),St=i(" where "),de=a("code"),At=i("X"),Ot=i(` is the source text. The
target text format is `),Le=a("code"),It=i("[tgt_lang_code] X [eos]"),Eh=i(". "),id=a("code"),Ch=i("bos"),Ph=i(" is never used."),cp=p(),kt=a("p"),Sh=i("The regular "),ga=a("a"),dd=a("strong"),Ah=i("call"),Oh=i("()"),Ih=i(` will encode source text format, and it should be wrapped
inside the context manager `),ci=a("a"),Nh=i("as_target_tokenizer()"),Dh=i(" to encode target text format."),pp=p(),pi=a("ul"),ld=a("li"),Lh=i("Supervised training"),up=p(),y(ba.$$.fragment),hp=p(),ui=a("ul"),ka=a("li"),cd=a("p"),Gh=i("Generation"),Wh=p(),Nt=a("p"),Rh=i("While generating the target text set the "),pd=a("code"),Uh=i("decoder_start_token_id"),Xh=i(` to the target language id. The following
example shows how to translate English to Romanian using the `),ud=a("em"),Qh=i("facebook/mbart-large-en-ro"),Hh=i(" model."),mp=p(),y(ya.$$.fragment),fp=p(),Dt=a("h2"),$o=a("a"),hd=a("span"),y(va.$$.fragment),Vh=p(),md=a("span"),Jh=i("Overview of MBart-50"),_p=p(),yt=a("p"),Kh=i("MBart-50 was introduced in the "),Ta=a("a"),Zh=i("Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),Yh=i(` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),fd=a("em"),em=i("mbart-large-cc25"),tm=i(` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),gp=p(),hi=a("p"),om=i("According to the abstract"),bp=p(),mi=a("p"),_d=a("em"),nm=i(`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),kp=p(),Lt=a("h3"),xo=a("a"),gd=a("span"),y(wa.$$.fragment),am=p(),bd=a("span"),sm=i("Training of MBart-50"),yp=p(),Ve=a("p"),rm=i(`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),kd=a("code"),im=i("[lang_code] X [eos]"),dm=i(", where "),yd=a("code"),lm=i("lang_code"),cm=i(` is source
language id for source text and target language id for target text, with `),vd=a("code"),pm=i("X"),um=i(` being the source or target text
respectively.`),vp=p(),zo=a("p"),hm=i("MBart-50 has its own tokenizer "),fi=a("a"),mm=i("MBart50Tokenizer"),fm=i("."),Tp=p(),_i=a("ul"),Td=a("li"),_m=i("Supervised training"),wp=p(),y(Ma.$$.fragment),Mp=p(),gi=a("ul"),$a=a("li"),wd=a("p"),gm=i("Generation"),bm=p(),Te=a("p"),km=i("To generate using the mBART-50 multilingual translation models, "),Md=a("code"),ym=i("eos_token_id"),vm=i(` is used as the
`),$d=a("code"),Tm=i("decoder_start_token_id"),wm=i(` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),xd=a("em"),Mm=i("forced_bos_token_id"),$m=i(" parameter to the "),zd=a("em"),xm=i("generate"),zm=i(` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),Fd=a("em"),Fm=i("facebook/mbart-50-large-many-to-many"),qm=i(" checkpoint."),$p=p(),y(xa.$$.fragment),xp=p(),Gt=a("h2"),Fo=a("a"),qd=a("span"),y(za.$$.fragment),Bm=p(),Bd=a("span"),jm=i("MBartConfig"),zp=p(),Ge=a("div"),y(Fa.$$.fragment),Em=p(),Wt=a("p"),Cm=i("This is the configuration class to store the configuration of a "),bi=a("a"),Pm=i("MBartModel"),Sm=i(`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),qa=a("a"),Am=i("facebook/mbart-large-cc25"),Om=i(" architecture."),Im=p(),Rt=a("p"),Nm=i("Configuration objects inherit from "),ki=a("a"),Dm=i("PretrainedConfig"),Lm=i(` and can be used to control the model outputs. Read the
documentation from `),yi=a("a"),Gm=i("PretrainedConfig"),Wm=i(" for more information."),Rm=p(),y(qo.$$.fragment),Fp=p(),Ut=a("h2"),Bo=a("a"),jd=a("span"),y(Ba.$$.fragment),Um=p(),Ed=a("span"),Xm=i("MBartTokenizer"),qp=p(),J=a("div"),y(ja.$$.fragment),Qm=p(),Cd=a("p"),Hm=i("Construct an MBART tokenizer."),Vm=p(),ht=a("p"),Jm=i("Adapted from "),vi=a("a"),Km=i("RobertaTokenizer"),Zm=i(" and "),Ti=a("a"),Ym=i("XLNetTokenizer"),ef=i(`. Based on
`),Ea=a("a"),tf=i("SentencePiece"),of=i("."),nf=p(),Ca=a("p"),af=i("The tokenization method is "),Pd=a("code"),sf=i("<tokens> <eos> <language code>"),rf=i(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),df=p(),y(jo.$$.fragment),lf=p(),Eo=a("div"),y(Pa.$$.fragment),cf=p(),Sd=a("p"),pf=i(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),uf=p(),Je=a("div"),y(Sa.$$.fragment),hf=p(),Aa=a("p"),mf=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Ad=a("code"),ff=i("X"),_f=i(" represents the sequence:"),gf=p(),Oa=a("ul"),Ia=a("li"),Od=a("code"),bf=i("input_ids"),kf=i(" (for encoder) "),Id=a("code"),yf=i("X [eos, src_lang_code]"),vf=p(),Na=a("li"),Nd=a("code"),Tf=i("decoder_input_ids"),wf=i(": (for decoder) "),Dd=a("code"),Mf=i("X [eos, tgt_lang_code]"),$f=p(),Ld=a("p"),xf=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Bp=p(),Xt=a("h2"),Co=a("a"),Gd=a("span"),y(Da.$$.fragment),zf=p(),Wd=a("span"),Ff=i("MBartTokenizerFast"),jp=p(),O=a("div"),y(La.$$.fragment),qf=p(),Qt=a("p"),Bf=i("Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Rd=a("em"),jf=i("tokenizers"),Ef=i(` library). Based on
`),Ga=a("a"),Cf=i("BPE"),Pf=i("."),Sf=p(),vt=a("p"),wi=a("a"),Af=i("MBartTokenizerFast"),Of=i(" is a subclass of "),Mi=a("a"),If=i("XLMRobertaTokenizerFast"),Nf=i(`. Refer to superclass
`),$i=a("a"),Df=i("XLMRobertaTokenizerFast"),Lf=i(` for usage examples and documentation concerning the initialization parameters and other
methods.`),Gf=p(),Wa=a("p"),Wf=i("The tokenization method is "),Ud=a("code"),Rf=i("<tokens> <eos> <language code>"),Uf=i(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Xf=p(),y(Po.$$.fragment),Qf=p(),qe=a("div"),y(Ra.$$.fragment),Hf=p(),Xd=a("p"),Vf=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),Jf=p(),Ua=a("p"),Kf=i("An MBART sequence has the following format, where "),Qd=a("code"),Zf=i("X"),Yf=i(" represents the sequence:"),e_=p(),Xa=a("ul"),Qa=a("li"),Hd=a("code"),t_=i("input_ids"),o_=i(" (for encoder) "),Vd=a("code"),n_=i("X [eos, src_lang_code]"),a_=p(),Ha=a("li"),Jd=a("code"),s_=i("decoder_input_ids"),r_=i(": (for decoder) "),Kd=a("code"),i_=i("X [eos, tgt_lang_code]"),d_=p(),Zd=a("p"),l_=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),c_=p(),So=a("div"),y(Va.$$.fragment),p_=p(),Yd=a("p"),u_=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),h_=p(),Ao=a("div"),y(Ja.$$.fragment),m_=p(),el=a("p"),f_=i("Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),__=p(),Oo=a("div"),y(Ka.$$.fragment),g_=p(),tl=a("p"),b_=i("Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),Ep=p(),Ht=a("h2"),Io=a("a"),ol=a("span"),y(Za.$$.fragment),k_=p(),nl=a("span"),y_=i("MBart50Tokenizer"),Cp=p(),I=a("div"),y(Ya.$$.fragment),v_=p(),es=a("p"),T_=i("Construct a MBart50 tokenizer. Based on "),ts=a("a"),w_=i("SentencePiece"),M_=i("."),$_=p(),os=a("p"),x_=i("This tokenizer inherits from "),xi=a("a"),z_=i("PreTrainedTokenizer"),F_=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),q_=p(),y(No.$$.fragment),B_=p(),Ke=a("div"),y(ns.$$.fragment),j_=p(),as=a("p"),E_=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),al=a("code"),C_=i("X"),P_=i(" represents the sequence:"),S_=p(),ss=a("ul"),rs=a("li"),sl=a("code"),A_=i("input_ids"),O_=i(" (for encoder) "),rl=a("code"),I_=i("[src_lang_code] X [eos]"),N_=p(),is=a("li"),il=a("code"),D_=i("labels"),L_=i(": (for decoder) "),dl=a("code"),G_=i("[tgt_lang_code] X [eos]"),W_=p(),ll=a("p"),R_=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),U_=p(),Do=a("div"),y(ds.$$.fragment),X_=p(),cl=a("p"),Q_=i("Converts a sequence of tokens (strings for sub-words) in a single string."),H_=p(),Lo=a("div"),y(ls.$$.fragment),V_=p(),cs=a("p"),J_=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),pl=a("code"),K_=i("prepare_for_model"),Z_=i(" method."),Y_=p(),Go=a("div"),y(ps.$$.fragment),eg=p(),ul=a("p"),tg=i("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),og=p(),Wo=a("div"),y(us.$$.fragment),ng=p(),hl=a("p"),ag=i("Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),Pp=p(),Vt=a("h2"),Ro=a("a"),ml=a("span"),y(hs.$$.fragment),sg=p(),fl=a("span"),rg=i("MBart50TokenizerFast"),Sp=p(),K=a("div"),y(ms.$$.fragment),ig=p(),Jt=a("p"),dg=i("Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),_l=a("em"),lg=i("tokenizers"),cg=i(` library). Based on
`),fs=a("a"),pg=i("BPE"),ug=i("."),hg=p(),_s=a("p"),mg=i("This tokenizer inherits from "),zi=a("a"),fg=i("PreTrainedTokenizerFast"),_g=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),gg=p(),y(Uo.$$.fragment),bg=p(),Be=a("div"),y(gs.$$.fragment),kg=p(),gl=a("p"),yg=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),vg=p(),bs=a("p"),Tg=i("An MBART-50 sequence has the following format, where "),bl=a("code"),wg=i("X"),Mg=i(" represents the sequence:"),$g=p(),ks=a("ul"),ys=a("li"),kl=a("code"),xg=i("input_ids"),zg=i(" (for encoder) "),yl=a("code"),Fg=i("[src_lang_code] X [eos]"),qg=p(),vs=a("li"),vl=a("code"),Bg=i("labels"),jg=i(": (for decoder) "),Tl=a("code"),Eg=i("[tgt_lang_code] X [eos]"),Cg=p(),wl=a("p"),Pg=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Sg=p(),Xo=a("div"),y(Ts.$$.fragment),Ag=p(),Ml=a("p"),Og=i("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),Ig=p(),Qo=a("div"),y(ws.$$.fragment),Ng=p(),$l=a("p"),Dg=i("Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),Ap=p(),Kt=a("h2"),Ho=a("a"),xl=a("span"),y(Ms.$$.fragment),Lg=p(),zl=a("span"),Gg=i("MBartModel"),Op=p(),We=a("div"),y($s.$$.fragment),Wg=p(),xs=a("p"),Rg=i(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Fi=a("a"),Ug=i("PreTrainedModel"),Xg=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qg=p(),zs=a("p"),Hg=i("This model is also a PyTorch "),Fs=a("a"),Vg=i("torch.nn.Module"),Jg=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kg=p(),Ze=a("div"),y(qs.$$.fragment),Zg=p(),Zt=a("p"),Yg=i("The "),qi=a("a"),eb=i("MBartModel"),tb=i(" forward method, overrides the "),Fl=a("code"),ob=i("__call__"),nb=i(" special method."),ab=p(),y(Vo.$$.fragment),sb=p(),y(Jo.$$.fragment),Ip=p(),Yt=a("h2"),Ko=a("a"),ql=a("span"),y(Bs.$$.fragment),rb=p(),Bl=a("span"),ib=i("MBartForConditionalGeneration"),Np=p(),Re=a("div"),y(js.$$.fragment),db=p(),Es=a("p"),lb=i(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Bi=a("a"),cb=i("PreTrainedModel"),pb=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ub=p(),Cs=a("p"),hb=i("This model is also a PyTorch "),Ps=a("a"),mb=i("torch.nn.Module"),fb=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_b=p(),je=a("div"),y(Ss.$$.fragment),gb=p(),eo=a("p"),bb=i("The "),ji=a("a"),kb=i("MBartForConditionalGeneration"),yb=i(" forward method, overrides the "),jl=a("code"),vb=i("__call__"),Tb=i(" special method."),wb=p(),y(Zo.$$.fragment),Mb=p(),y(Yo.$$.fragment),$b=p(),y(en.$$.fragment),Dp=p(),to=a("h2"),tn=a("a"),El=a("span"),y(As.$$.fragment),xb=p(),Cl=a("span"),zb=i("MBartForQuestionAnswering"),Lp=p(),we=a("div"),y(Os.$$.fragment),Fb=p(),oo=a("p"),qb=i(`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Pl=a("code"),Bb=i("span start logits"),jb=i(" and "),Sl=a("code"),Eb=i("span end logits"),Cb=i(")."),Pb=p(),Is=a("p"),Sb=i("This model inherits from "),Ei=a("a"),Ab=i("PreTrainedModel"),Ob=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ib=p(),Ns=a("p"),Nb=i("This model is also a PyTorch "),Ds=a("a"),Db=i("torch.nn.Module"),Lb=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gb=p(),Ee=a("div"),y(Ls.$$.fragment),Wb=p(),no=a("p"),Rb=i("The "),Ci=a("a"),Ub=i("MBartForQuestionAnswering"),Xb=i(" forward method, overrides the "),Al=a("code"),Qb=i("__call__"),Hb=i(" special method."),Vb=p(),y(on.$$.fragment),Jb=p(),y(nn.$$.fragment),Kb=p(),y(an.$$.fragment),Gp=p(),ao=a("h2"),sn=a("a"),Ol=a("span"),y(Gs.$$.fragment),Zb=p(),Il=a("span"),Yb=i("MBartForSequenceClassification"),Wp=p(),Me=a("div"),y(Ws.$$.fragment),ek=p(),Nl=a("p"),tk=i(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),ok=p(),Rs=a("p"),nk=i("This model inherits from "),Pi=a("a"),ak=i("PreTrainedModel"),sk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rk=p(),Us=a("p"),ik=i("This model is also a PyTorch "),Xs=a("a"),dk=i("torch.nn.Module"),lk=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ck=p(),Z=a("div"),y(Qs.$$.fragment),pk=p(),so=a("p"),uk=i("The "),Si=a("a"),hk=i("MBartForSequenceClassification"),mk=i(" forward method, overrides the "),Dl=a("code"),fk=i("__call__"),_k=i(" special method."),gk=p(),y(rn.$$.fragment),bk=p(),y(dn.$$.fragment),kk=p(),y(ln.$$.fragment),yk=p(),y(cn.$$.fragment),vk=p(),y(pn.$$.fragment),Rp=p(),ro=a("h2"),un=a("a"),Ll=a("span"),y(Hs.$$.fragment),Tk=p(),Gl=a("span"),wk=i("MBartForCausalLM"),Up=p(),io=a("div"),y(Vs.$$.fragment),Mk=p(),hn=a("div"),y(Js.$$.fragment),$k=p(),y(mn.$$.fragment),Xp=p(),lo=a("h2"),fn=a("a"),Wl=a("span"),y(Ks.$$.fragment),xk=p(),Rl=a("span"),zk=i("TFMBartModel"),Qp=p(),$e=a("div"),y(Zs.$$.fragment),Fk=p(),Ys=a("p"),qk=i(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ai=a("a"),Bk=i("TFPreTrainedModel"),jk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ek=p(),er=a("p"),Ck=i("This model is also a "),tr=a("a"),Pk=i("tf.keras.Model"),Sk=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ak=p(),y(_n.$$.fragment),Ok=p(),Ye=a("div"),y(or.$$.fragment),Ik=p(),co=a("p"),Nk=i("The "),Oi=a("a"),Dk=i("TFMBartModel"),Lk=i(" forward method, overrides the "),Ul=a("code"),Gk=i("__call__"),Wk=i(" special method."),Rk=p(),y(gn.$$.fragment),Uk=p(),y(bn.$$.fragment),Hp=p(),po=a("h2"),kn=a("a"),Xl=a("span"),y(nr.$$.fragment),Xk=p(),Ql=a("span"),Qk=i("TFMBartForConditionalGeneration"),Vp=p(),xe=a("div"),y(ar.$$.fragment),Hk=p(),sr=a("p"),Vk=i(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ii=a("a"),Jk=i("TFPreTrainedModel"),Kk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zk=p(),rr=a("p"),Yk=i("This model is also a "),ir=a("a"),ey=i("tf.keras.Model"),ty=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),oy=p(),y(yn.$$.fragment),ny=p(),Ce=a("div"),y(dr.$$.fragment),ay=p(),uo=a("p"),sy=i("The "),Ni=a("a"),ry=i("TFMBartForConditionalGeneration"),iy=i(" forward method, overrides the "),Hl=a("code"),dy=i("__call__"),ly=i(" special method."),cy=p(),y(vn.$$.fragment),py=p(),y(Tn.$$.fragment),uy=p(),y(wn.$$.fragment),Jp=p(),ho=a("h2"),Mn=a("a"),Vl=a("span"),y(lr.$$.fragment),hy=p(),Jl=a("span"),my=i("FlaxMBartModel"),Kp=p(),W=a("div"),y(cr.$$.fragment),fy=p(),pr=a("p"),_y=i(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Di=a("a"),gy=i("FlaxPreTrainedModel"),by=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ky=p(),ur=a("p"),yy=i(`This model is also a Flax Linen
`),hr=a("a"),vy=i("flax.nn.Module"),Ty=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),wy=p(),Kl=a("p"),My=i("Finally, this model supports inherent JAX features such as:"),$y=p(),mt=a("ul"),Zl=a("li"),mr=a("a"),xy=i("Just-In-Time (JIT) compilation"),zy=p(),Yl=a("li"),fr=a("a"),Fy=i("Automatic Differentiation"),qy=p(),ec=a("li"),_r=a("a"),By=i("Vectorization"),jy=p(),tc=a("li"),gr=a("a"),Ey=i("Parallelization"),Cy=p(),et=a("div"),y(br.$$.fragment),Py=p(),mo=a("p"),Sy=i("The "),oc=a("code"),Ay=i("FlaxMBartPreTrainedModel"),Oy=i(" forward method, overrides the "),nc=a("code"),Iy=i("__call__"),Ny=i(" special method."),Dy=p(),y($n.$$.fragment),Ly=p(),y(xn.$$.fragment),Gy=p(),zn=a("div"),y(kr.$$.fragment),Wy=p(),y(Fn.$$.fragment),Ry=p(),qn=a("div"),y(yr.$$.fragment),Uy=p(),y(Bn.$$.fragment),Zp=p(),fo=a("h2"),jn=a("a"),ac=a("span"),y(vr.$$.fragment),Xy=p(),sc=a("span"),Qy=i("FlaxMBartForConditionalGeneration"),Yp=p(),R=a("div"),y(Tr.$$.fragment),Hy=p(),wr=a("p"),Vy=i(`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),Li=a("a"),Jy=i("FlaxPreTrainedModel"),Ky=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zy=p(),Mr=a("p"),Yy=i(`This model is also a Flax Linen
`),$r=a("a"),ev=i("flax.nn.Module"),tv=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ov=p(),rc=a("p"),nv=i("Finally, this model supports inherent JAX features such as:"),av=p(),ft=a("ul"),ic=a("li"),xr=a("a"),sv=i("Just-In-Time (JIT) compilation"),rv=p(),dc=a("li"),zr=a("a"),iv=i("Automatic Differentiation"),dv=p(),lc=a("li"),Fr=a("a"),lv=i("Vectorization"),cv=p(),cc=a("li"),qr=a("a"),pv=i("Parallelization"),uv=p(),Pe=a("div"),y(Br.$$.fragment),hv=p(),_o=a("p"),mv=i("The "),pc=a("code"),fv=i("FlaxMBartPreTrainedModel"),_v=i(" forward method, overrides the "),uc=a("code"),gv=i("__call__"),bv=i(" special method."),kv=p(),y(En.$$.fragment),yv=p(),y(Cn.$$.fragment),vv=p(),y(Pn.$$.fragment),Tv=p(),Sn=a("div"),y(jr.$$.fragment),wv=p(),y(An.$$.fragment),Mv=p(),On=a("div"),y(Er.$$.fragment),$v=p(),y(In.$$.fragment),eu=p(),go=a("h2"),Nn=a("a"),hc=a("span"),y(Cr.$$.fragment),xv=p(),mc=a("span"),zv=i("FlaxMBartForSequenceClassification"),tu=p(),N=a("div"),y(Pr.$$.fragment),Fv=p(),fc=a("p"),qv=i(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Bv=p(),Sr=a("p"),jv=i("This model inherits from "),Gi=a("a"),Ev=i("FlaxPreTrainedModel"),Cv=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pv=p(),Ar=a("p"),Sv=i(`This model is also a Flax Linen
`),Or=a("a"),Av=i("flax.nn.Module"),Ov=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Iv=p(),_c=a("p"),Nv=i("Finally, this model supports inherent JAX features such as:"),Dv=p(),_t=a("ul"),gc=a("li"),Ir=a("a"),Lv=i("Just-In-Time (JIT) compilation"),Gv=p(),bc=a("li"),Nr=a("a"),Wv=i("Automatic Differentiation"),Rv=p(),kc=a("li"),Dr=a("a"),Uv=i("Vectorization"),Xv=p(),yc=a("li"),Lr=a("a"),Qv=i("Parallelization"),Hv=p(),tt=a("div"),y(Gr.$$.fragment),Vv=p(),bo=a("p"),Jv=i("The "),vc=a("code"),Kv=i("FlaxMBartPreTrainedModel"),Zv=i(" forward method, overrides the "),Tc=a("code"),Yv=i("__call__"),e1=i(" special method."),t1=p(),y(Dn.$$.fragment),o1=p(),y(Ln.$$.fragment),n1=p(),Gn=a("div"),y(Wr.$$.fragment),a1=p(),y(Wn.$$.fragment),s1=p(),Rn=a("div"),y(Rr.$$.fragment),r1=p(),y(Un.$$.fragment),ou=p(),ko=a("h2"),Xn=a("a"),wc=a("span"),y(Ur.$$.fragment),i1=p(),Mc=a("span"),d1=i("FlaxMBartForQuestionAnswering"),nu=p(),D=a("div"),y(Xr.$$.fragment),l1=p(),yo=a("p"),c1=i(`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),$c=a("code"),p1=i("span start logits"),u1=i(" and "),xc=a("code"),h1=i("span end logits"),m1=i(")."),f1=p(),Qr=a("p"),_1=i("This model inherits from "),Wi=a("a"),g1=i("FlaxPreTrainedModel"),b1=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),k1=p(),Hr=a("p"),y1=i(`This model is also a Flax Linen
`),Vr=a("a"),v1=i("flax.nn.Module"),T1=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),w1=p(),zc=a("p"),M1=i("Finally, this model supports inherent JAX features such as:"),$1=p(),gt=a("ul"),Fc=a("li"),Jr=a("a"),x1=i("Just-In-Time (JIT) compilation"),z1=p(),qc=a("li"),Kr=a("a"),F1=i("Automatic Differentiation"),q1=p(),Bc=a("li"),Zr=a("a"),B1=i("Vectorization"),j1=p(),jc=a("li"),Yr=a("a"),E1=i("Parallelization"),C1=p(),ot=a("div"),y(ei.$$.fragment),P1=p(),vo=a("p"),S1=i("The "),Ec=a("code"),A1=i("FlaxMBartPreTrainedModel"),O1=i(" forward method, overrides the "),Cc=a("code"),I1=i("__call__"),N1=i(" special method."),D1=p(),y(Qn.$$.fragment),L1=p(),y(Hn.$$.fragment),G1=p(),Vn=a("div"),y(ti.$$.fragment),W1=p(),y(Jn.$$.fragment),R1=p(),Kn=a("div"),y(oi.$$.fragment),U1=p(),y(Zn.$$.fragment),this.h()},l(o){const _=D$('[data-svelte="svelte-1phssyn"]',document.head);l=s(_,"META",{name:!0,content:!0}),_.forEach(t),k=u(o),m=s(o,"H1",{class:!0});var ni=r(m);c=s(ni,"A",{id:!0,class:!0,href:!0});var Pc=r(c);g=s(Pc,"SPAN",{});var Sc=r(g);v(n.$$.fragment,Sc),Sc.forEach(t),Pc.forEach(t),h=u(ni),q=s(ni,"SPAN",{});var Ac=r(q);st=d(Ac,"MBart and MBart-50"),Ac.forEach(t),ni.forEach(t),ze=u(o),E=s(o,"P",{});var Yn=r(E);Ie=s(Yn,"STRONG",{});var Oc=r(Ie);he=d(Oc,"DISCLAIMER:"),Oc.forEach(t),rt=d(Yn," If you see something strange, file a "),me=s(Yn,"A",{href:!0,rel:!0});var Ic=r(me);fe=d(Ic,"Github Issue"),Ic.forEach(t),it=d(Yn,` and assign
@patrickvonplaten`),Yn.forEach(t),Xe=u(o),Q=s(o,"H2",{class:!0});var ai=r(Q);L=s(ai,"A",{id:!0,class:!0,href:!0});var Nc=r(L);Ne=s(Nc,"SPAN",{});var Dc=r(Ne);v(ne.$$.fragment,Dc),Dc.forEach(t),Nc.forEach(t),S=u(ai),A=s(ai,"SPAN",{});var Lc=r(A);dt=d(Lc,"Overview of MBart"),Lc.forEach(t),ai.forEach(t),le=u(o),ce=s(o,"P",{});var si=r(ce);lt=d(si,"The MBart model was presented in "),H=s(si,"A",{href:!0,rel:!0});var Gc=r(H);ct=d(Gc,"Multilingual Denoising Pre-training for Neural Machine Translation"),Gc.forEach(t),pt=d(si,` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),si.forEach(t),G=u(o),Fe=s(o,"P",{});var Wc=r(Fe);_e=d(Wc,`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),Wc.forEach(t),Qe=u(o),ae=s(o,"P",{});var ea=r(ae);ge=d(ea,"This model was contributed by "),be=s(ea,"A",{href:!0,rel:!0});var Rc=r(be);ut=d(Rc,"valhalla"),Rc.forEach(t),se=d(ea,". The Authors\u2019 code can be found "),ke=s(ea,"A",{href:!0,rel:!0});var Uc=r(ke);ye=d(Uc,"here"),Uc.forEach(t),ea.forEach(t),He=u(o),z=s(o,"H3",{class:!0});var ri=r(z);j=s(ri,"A",{id:!0,class:!0,href:!0});var Xc=r(j);ve=s(Xc,"SPAN",{});var Qc=r(ve);v(De.$$.fragment,Qc),Qc.forEach(t),Xc.forEach(t),Et=u(ri),V=s(ri,"SPAN",{});var Hc=r(V);Ct=d(Hc,"Training of MBart"),Hc.forEach(t),ri.forEach(t),bt=u(o),X=s(o,"P",{});var Ue=r(X);re=d(Ue,`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),ie=s(Ue,"CODE",{});var Vc=r(ie);Pt=d(Vc,"X [eos, src_lang_code]"),Vc.forEach(t),St=d(Ue," where "),de=s(Ue,"CODE",{});var Jc=r(de);At=d(Jc,"X"),Jc.forEach(t),Ot=d(Ue,` is the source text. The
target text format is `),Le=s(Ue,"CODE",{});var Kc=r(Le);It=d(Kc,"[tgt_lang_code] X [eos]"),Kc.forEach(t),Eh=d(Ue,". "),id=s(Ue,"CODE",{});var Zc=r(id);Ch=d(Zc,"bos"),Zc.forEach(t),Ph=d(Ue," is never used."),Ue.forEach(t),cp=u(o),kt=s(o,"P",{});var To=r(kt);Sh=d(To,"The regular "),ga=s(To,"A",{href:!0});var Ri=r(ga);dd=s(Ri,"STRONG",{});var Yc=r(dd);Ah=d(Yc,"call"),Yc.forEach(t),Oh=d(Ri,"()"),Ri.forEach(t),Ih=d(To,` will encode source text format, and it should be wrapped
inside the context manager `),ci=s(To,"A",{href:!0});var ep=r(ci);Nh=d(ep,"as_target_tokenizer()"),ep.forEach(t),Dh=d(To," to encode target text format."),To.forEach(t),pp=u(o),pi=s(o,"UL",{});var tp=r(pi);ld=s(tp,"LI",{});var op=r(ld);Lh=d(op,"Supervised training"),op.forEach(t),tp.forEach(t),up=u(o),v(ba.$$.fragment,o),hp=u(o),ui=s(o,"UL",{});var np=r(ui);ka=s(np,"LI",{});var ii=r(ka);cd=s(ii,"P",{});var ap=r(cd);Gh=d(ap,"Generation"),ap.forEach(t),Wh=u(ii),Nt=s(ii,"P",{});var wo=r(Nt);Rh=d(wo,"While generating the target text set the "),pd=s(wo,"CODE",{});var sp=r(pd);Uh=d(sp,"decoder_start_token_id"),sp.forEach(t),Xh=d(wo,` to the target language id. The following
example shows how to translate English to Romanian using the `),ud=s(wo,"EM",{});var rp=r(ud);Qh=d(rp,"facebook/mbart-large-en-ro"),rp.forEach(t),Hh=d(wo," model."),wo.forEach(t),ii.forEach(t),np.forEach(t),mp=u(o),v(ya.$$.fragment,o),fp=u(o),Dt=s(o,"H2",{class:!0});var di=r(Dt);$o=s(di,"A",{id:!0,class:!0,href:!0});var ip=r($o);hd=s(ip,"SPAN",{});var dp=r(hd);v(va.$$.fragment,dp),dp.forEach(t),ip.forEach(t),Vh=u(di),md=s(di,"SPAN",{});var lp=r(md);Jh=d(lp,"Overview of MBart-50"),lp.forEach(t),di.forEach(t),_p=u(o),yt=s(o,"P",{});var Mo=r(yt);Kh=d(Mo,"MBart-50 was introduced in the "),Ta=s(Mo,"A",{href:!0,rel:!0});var X1=r(Ta);Zh=d(X1,"Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),X1.forEach(t),Yh=d(Mo,` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),fd=s(Mo,"EM",{});var Q1=r(fd);em=d(Q1,"mbart-large-cc25"),Q1.forEach(t),tm=d(Mo,` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),Mo.forEach(t),gp=u(o),hi=s(o,"P",{});var H1=r(hi);om=d(H1,"According to the abstract"),H1.forEach(t),bp=u(o),mi=s(o,"P",{});var V1=r(mi);_d=s(V1,"EM",{});var J1=r(_d);nm=d(J1,`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),J1.forEach(t),V1.forEach(t),kp=u(o),Lt=s(o,"H3",{class:!0});var su=r(Lt);xo=s(su,"A",{id:!0,class:!0,href:!0});var K1=r(xo);gd=s(K1,"SPAN",{});var Z1=r(gd);v(wa.$$.fragment,Z1),Z1.forEach(t),K1.forEach(t),am=u(su),bd=s(su,"SPAN",{});var Y1=r(bd);sm=d(Y1,"Training of MBart-50"),Y1.forEach(t),su.forEach(t),yp=u(o),Ve=s(o,"P",{});var ta=r(Ve);rm=d(ta,`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),kd=s(ta,"CODE",{});var eT=r(kd);im=d(eT,"[lang_code] X [eos]"),eT.forEach(t),dm=d(ta,", where "),yd=s(ta,"CODE",{});var tT=r(yd);lm=d(tT,"lang_code"),tT.forEach(t),cm=d(ta,` is source
language id for source text and target language id for target text, with `),vd=s(ta,"CODE",{});var oT=r(vd);pm=d(oT,"X"),oT.forEach(t),um=d(ta,` being the source or target text
respectively.`),ta.forEach(t),vp=u(o),zo=s(o,"P",{});var ru=r(zo);hm=d(ru,"MBart-50 has its own tokenizer "),fi=s(ru,"A",{href:!0});var nT=r(fi);mm=d(nT,"MBart50Tokenizer"),nT.forEach(t),fm=d(ru,"."),ru.forEach(t),Tp=u(o),_i=s(o,"UL",{});var aT=r(_i);Td=s(aT,"LI",{});var sT=r(Td);_m=d(sT,"Supervised training"),sT.forEach(t),aT.forEach(t),wp=u(o),v(Ma.$$.fragment,o),Mp=u(o),gi=s(o,"UL",{});var rT=r(gi);$a=s(rT,"LI",{});var iu=r($a);wd=s(iu,"P",{});var iT=r(wd);gm=d(iT,"Generation"),iT.forEach(t),bm=u(iu),Te=s(iu,"P",{});var nt=r(Te);km=d(nt,"To generate using the mBART-50 multilingual translation models, "),Md=s(nt,"CODE",{});var dT=r(Md);ym=d(dT,"eos_token_id"),dT.forEach(t),vm=d(nt,` is used as the
`),$d=s(nt,"CODE",{});var lT=r($d);Tm=d(lT,"decoder_start_token_id"),lT.forEach(t),wm=d(nt,` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),xd=s(nt,"EM",{});var cT=r(xd);Mm=d(cT,"forced_bos_token_id"),cT.forEach(t),$m=d(nt," parameter to the "),zd=s(nt,"EM",{});var pT=r(zd);xm=d(pT,"generate"),pT.forEach(t),zm=d(nt,` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),Fd=s(nt,"EM",{});var uT=r(Fd);Fm=d(uT,"facebook/mbart-50-large-many-to-many"),uT.forEach(t),qm=d(nt," checkpoint."),nt.forEach(t),iu.forEach(t),rT.forEach(t),$p=u(o),v(xa.$$.fragment,o),xp=u(o),Gt=s(o,"H2",{class:!0});var du=r(Gt);Fo=s(du,"A",{id:!0,class:!0,href:!0});var hT=r(Fo);qd=s(hT,"SPAN",{});var mT=r(qd);v(za.$$.fragment,mT),mT.forEach(t),hT.forEach(t),Bm=u(du),Bd=s(du,"SPAN",{});var fT=r(Bd);jm=d(fT,"MBartConfig"),fT.forEach(t),du.forEach(t),zp=u(o),Ge=s(o,"DIV",{class:!0});var oa=r(Ge);v(Fa.$$.fragment,oa),Em=u(oa),Wt=s(oa,"P",{});var Ui=r(Wt);Cm=d(Ui,"This is the configuration class to store the configuration of a "),bi=s(Ui,"A",{href:!0});var _T=r(bi);Pm=d(_T,"MBartModel"),_T.forEach(t),Sm=d(Ui,`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),qa=s(Ui,"A",{href:!0,rel:!0});var gT=r(qa);Am=d(gT,"facebook/mbart-large-cc25"),gT.forEach(t),Om=d(Ui," architecture."),Ui.forEach(t),Im=u(oa),Rt=s(oa,"P",{});var Xi=r(Rt);Nm=d(Xi,"Configuration objects inherit from "),ki=s(Xi,"A",{href:!0});var bT=r(ki);Dm=d(bT,"PretrainedConfig"),bT.forEach(t),Lm=d(Xi,` and can be used to control the model outputs. Read the
documentation from `),yi=s(Xi,"A",{href:!0});var kT=r(yi);Gm=d(kT,"PretrainedConfig"),kT.forEach(t),Wm=d(Xi," for more information."),Xi.forEach(t),Rm=u(oa),v(qo.$$.fragment,oa),oa.forEach(t),Fp=u(o),Ut=s(o,"H2",{class:!0});var lu=r(Ut);Bo=s(lu,"A",{id:!0,class:!0,href:!0});var yT=r(Bo);jd=s(yT,"SPAN",{});var vT=r(jd);v(Ba.$$.fragment,vT),vT.forEach(t),yT.forEach(t),Um=u(lu),Ed=s(lu,"SPAN",{});var TT=r(Ed);Xm=d(TT,"MBartTokenizer"),TT.forEach(t),lu.forEach(t),qp=u(o),J=s(o,"DIV",{class:!0});var Se=r(J);v(ja.$$.fragment,Se),Qm=u(Se),Cd=s(Se,"P",{});var wT=r(Cd);Hm=d(wT,"Construct an MBART tokenizer."),wT.forEach(t),Vm=u(Se),ht=s(Se,"P",{});var na=r(ht);Jm=d(na,"Adapted from "),vi=s(na,"A",{href:!0});var MT=r(vi);Km=d(MT,"RobertaTokenizer"),MT.forEach(t),Zm=d(na," and "),Ti=s(na,"A",{href:!0});var $T=r(Ti);Ym=d($T,"XLNetTokenizer"),$T.forEach(t),ef=d(na,`. Based on
`),Ea=s(na,"A",{href:!0,rel:!0});var xT=r(Ea);tf=d(xT,"SentencePiece"),xT.forEach(t),of=d(na,"."),na.forEach(t),nf=u(Se),Ca=s(Se,"P",{});var cu=r(Ca);af=d(cu,"The tokenization method is "),Pd=s(cu,"CODE",{});var zT=r(Pd);sf=d(zT,"<tokens> <eos> <language code>"),zT.forEach(t),rf=d(cu," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),cu.forEach(t),df=u(Se),v(jo.$$.fragment,Se),lf=u(Se),Eo=s(Se,"DIV",{class:!0});var pu=r(Eo);v(Pa.$$.fragment,pu),cf=u(pu),Sd=s(pu,"P",{});var FT=r(Sd);pf=d(FT,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),FT.forEach(t),pu.forEach(t),uf=u(Se),Je=s(Se,"DIV",{class:!0});var aa=r(Je);v(Sa.$$.fragment,aa),hf=u(aa),Aa=s(aa,"P",{});var uu=r(Aa);mf=d(uu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Ad=s(uu,"CODE",{});var qT=r(Ad);ff=d(qT,"X"),qT.forEach(t),_f=d(uu," represents the sequence:"),uu.forEach(t),gf=u(aa),Oa=s(aa,"UL",{});var hu=r(Oa);Ia=s(hu,"LI",{});var mu=r(Ia);Od=s(mu,"CODE",{});var BT=r(Od);bf=d(BT,"input_ids"),BT.forEach(t),kf=d(mu," (for encoder) "),Id=s(mu,"CODE",{});var jT=r(Id);yf=d(jT,"X [eos, src_lang_code]"),jT.forEach(t),mu.forEach(t),vf=u(hu),Na=s(hu,"LI",{});var fu=r(Na);Nd=s(fu,"CODE",{});var ET=r(Nd);Tf=d(ET,"decoder_input_ids"),ET.forEach(t),wf=d(fu,": (for decoder) "),Dd=s(fu,"CODE",{});var CT=r(Dd);Mf=d(CT,"X [eos, tgt_lang_code]"),CT.forEach(t),fu.forEach(t),hu.forEach(t),$f=u(aa),Ld=s(aa,"P",{});var PT=r(Ld);xf=d(PT,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),PT.forEach(t),aa.forEach(t),Se.forEach(t),Bp=u(o),Xt=s(o,"H2",{class:!0});var _u=r(Xt);Co=s(_u,"A",{id:!0,class:!0,href:!0});var ST=r(Co);Gd=s(ST,"SPAN",{});var AT=r(Gd);v(Da.$$.fragment,AT),AT.forEach(t),ST.forEach(t),zf=u(_u),Wd=s(_u,"SPAN",{});var OT=r(Wd);Ff=d(OT,"MBartTokenizerFast"),OT.forEach(t),_u.forEach(t),jp=u(o),O=s(o,"DIV",{class:!0});var Y=r(O);v(La.$$.fragment,Y),qf=u(Y),Qt=s(Y,"P",{});var Qi=r(Qt);Bf=d(Qi,"Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Rd=s(Qi,"EM",{});var IT=r(Rd);jf=d(IT,"tokenizers"),IT.forEach(t),Ef=d(Qi,` library). Based on
`),Ga=s(Qi,"A",{href:!0,rel:!0});var NT=r(Ga);Cf=d(NT,"BPE"),NT.forEach(t),Pf=d(Qi,"."),Qi.forEach(t),Sf=u(Y),vt=s(Y,"P",{});var li=r(vt);wi=s(li,"A",{href:!0});var DT=r(wi);Af=d(DT,"MBartTokenizerFast"),DT.forEach(t),Of=d(li," is a subclass of "),Mi=s(li,"A",{href:!0});var LT=r(Mi);If=d(LT,"XLMRobertaTokenizerFast"),LT.forEach(t),Nf=d(li,`. Refer to superclass
`),$i=s(li,"A",{href:!0});var GT=r($i);Df=d(GT,"XLMRobertaTokenizerFast"),GT.forEach(t),Lf=d(li,` for usage examples and documentation concerning the initialization parameters and other
methods.`),li.forEach(t),Gf=u(Y),Wa=s(Y,"P",{});var gu=r(Wa);Wf=d(gu,"The tokenization method is "),Ud=s(gu,"CODE",{});var WT=r(Ud);Rf=d(WT,"<tokens> <eos> <language code>"),WT.forEach(t),Uf=d(gu," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),gu.forEach(t),Xf=u(Y),v(Po.$$.fragment,Y),Qf=u(Y),qe=s(Y,"DIV",{class:!0});var Tt=r(qe);v(Ra.$$.fragment,Tt),Hf=u(Tt),Xd=s(Tt,"P",{});var RT=r(Xd);Vf=d(RT,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),RT.forEach(t),Jf=u(Tt),Ua=s(Tt,"P",{});var bu=r(Ua);Kf=d(bu,"An MBART sequence has the following format, where "),Qd=s(bu,"CODE",{});var UT=r(Qd);Zf=d(UT,"X"),UT.forEach(t),Yf=d(bu," represents the sequence:"),bu.forEach(t),e_=u(Tt),Xa=s(Tt,"UL",{});var ku=r(Xa);Qa=s(ku,"LI",{});var yu=r(Qa);Hd=s(yu,"CODE",{});var XT=r(Hd);t_=d(XT,"input_ids"),XT.forEach(t),o_=d(yu," (for encoder) "),Vd=s(yu,"CODE",{});var QT=r(Vd);n_=d(QT,"X [eos, src_lang_code]"),QT.forEach(t),yu.forEach(t),a_=u(ku),Ha=s(ku,"LI",{});var vu=r(Ha);Jd=s(vu,"CODE",{});var HT=r(Jd);s_=d(HT,"decoder_input_ids"),HT.forEach(t),r_=d(vu,": (for decoder) "),Kd=s(vu,"CODE",{});var VT=r(Kd);i_=d(VT,"X [eos, tgt_lang_code]"),VT.forEach(t),vu.forEach(t),ku.forEach(t),d_=u(Tt),Zd=s(Tt,"P",{});var JT=r(Zd);l_=d(JT,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),JT.forEach(t),Tt.forEach(t),c_=u(Y),So=s(Y,"DIV",{class:!0});var Tu=r(So);v(Va.$$.fragment,Tu),p_=u(Tu),Yd=s(Tu,"P",{});var KT=r(Yd);u_=d(KT,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),KT.forEach(t),Tu.forEach(t),h_=u(Y),Ao=s(Y,"DIV",{class:!0});var wu=r(Ao);v(Ja.$$.fragment,wu),m_=u(wu),el=s(wu,"P",{});var ZT=r(el);f_=d(ZT,"Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),ZT.forEach(t),wu.forEach(t),__=u(Y),Oo=s(Y,"DIV",{class:!0});var Mu=r(Oo);v(Ka.$$.fragment,Mu),g_=u(Mu),tl=s(Mu,"P",{});var YT=r(tl);b_=d(YT,"Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),YT.forEach(t),Mu.forEach(t),Y.forEach(t),Ep=u(o),Ht=s(o,"H2",{class:!0});var $u=r(Ht);Io=s($u,"A",{id:!0,class:!0,href:!0});var ew=r(Io);ol=s(ew,"SPAN",{});var tw=r(ol);v(Za.$$.fragment,tw),tw.forEach(t),ew.forEach(t),k_=u($u),nl=s($u,"SPAN",{});var ow=r(nl);y_=d(ow,"MBart50Tokenizer"),ow.forEach(t),$u.forEach(t),Cp=u(o),I=s(o,"DIV",{class:!0});var ee=r(I);v(Ya.$$.fragment,ee),v_=u(ee),es=s(ee,"P",{});var xu=r(es);T_=d(xu,"Construct a MBart50 tokenizer. Based on "),ts=s(xu,"A",{href:!0,rel:!0});var nw=r(ts);w_=d(nw,"SentencePiece"),nw.forEach(t),M_=d(xu,"."),xu.forEach(t),$_=u(ee),os=s(ee,"P",{});var zu=r(os);x_=d(zu,"This tokenizer inherits from "),xi=s(zu,"A",{href:!0});var aw=r(xi);z_=d(aw,"PreTrainedTokenizer"),aw.forEach(t),F_=d(zu,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),zu.forEach(t),q_=u(ee),v(No.$$.fragment,ee),B_=u(ee),Ke=s(ee,"DIV",{class:!0});var sa=r(Ke);v(ns.$$.fragment,sa),j_=u(sa),as=s(sa,"P",{});var Fu=r(as);E_=d(Fu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),al=s(Fu,"CODE",{});var sw=r(al);C_=d(sw,"X"),sw.forEach(t),P_=d(Fu," represents the sequence:"),Fu.forEach(t),S_=u(sa),ss=s(sa,"UL",{});var qu=r(ss);rs=s(qu,"LI",{});var Bu=r(rs);sl=s(Bu,"CODE",{});var rw=r(sl);A_=d(rw,"input_ids"),rw.forEach(t),O_=d(Bu," (for encoder) "),rl=s(Bu,"CODE",{});var iw=r(rl);I_=d(iw,"[src_lang_code] X [eos]"),iw.forEach(t),Bu.forEach(t),N_=u(qu),is=s(qu,"LI",{});var ju=r(is);il=s(ju,"CODE",{});var dw=r(il);D_=d(dw,"labels"),dw.forEach(t),L_=d(ju,": (for decoder) "),dl=s(ju,"CODE",{});var lw=r(dl);G_=d(lw,"[tgt_lang_code] X [eos]"),lw.forEach(t),ju.forEach(t),qu.forEach(t),W_=u(sa),ll=s(sa,"P",{});var cw=r(ll);R_=d(cw,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),cw.forEach(t),sa.forEach(t),U_=u(ee),Do=s(ee,"DIV",{class:!0});var Eu=r(Do);v(ds.$$.fragment,Eu),X_=u(Eu),cl=s(Eu,"P",{});var pw=r(cl);Q_=d(pw,"Converts a sequence of tokens (strings for sub-words) in a single string."),pw.forEach(t),Eu.forEach(t),H_=u(ee),Lo=s(ee,"DIV",{class:!0});var Cu=r(Lo);v(ls.$$.fragment,Cu),V_=u(Cu),cs=s(Cu,"P",{});var Pu=r(cs);J_=d(Pu,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),pl=s(Pu,"CODE",{});var uw=r(pl);K_=d(uw,"prepare_for_model"),uw.forEach(t),Z_=d(Pu," method."),Pu.forEach(t),Cu.forEach(t),Y_=u(ee),Go=s(ee,"DIV",{class:!0});var Su=r(Go);v(ps.$$.fragment,Su),eg=u(Su),ul=s(Su,"P",{});var hw=r(ul);tg=d(hw,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),hw.forEach(t),Su.forEach(t),og=u(ee),Wo=s(ee,"DIV",{class:!0});var Au=r(Wo);v(us.$$.fragment,Au),ng=u(Au),hl=s(Au,"P",{});var mw=r(hl);ag=d(mw,"Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),mw.forEach(t),Au.forEach(t),ee.forEach(t),Pp=u(o),Vt=s(o,"H2",{class:!0});var Ou=r(Vt);Ro=s(Ou,"A",{id:!0,class:!0,href:!0});var fw=r(Ro);ml=s(fw,"SPAN",{});var _w=r(ml);v(hs.$$.fragment,_w),_w.forEach(t),fw.forEach(t),sg=u(Ou),fl=s(Ou,"SPAN",{});var gw=r(fl);rg=d(gw,"MBart50TokenizerFast"),gw.forEach(t),Ou.forEach(t),Sp=u(o),K=s(o,"DIV",{class:!0});var Ae=r(K);v(ms.$$.fragment,Ae),ig=u(Ae),Jt=s(Ae,"P",{});var Hi=r(Jt);dg=d(Hi,"Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),_l=s(Hi,"EM",{});var bw=r(_l);lg=d(bw,"tokenizers"),bw.forEach(t),cg=d(Hi,` library). Based on
`),fs=s(Hi,"A",{href:!0,rel:!0});var kw=r(fs);pg=d(kw,"BPE"),kw.forEach(t),ug=d(Hi,"."),Hi.forEach(t),hg=u(Ae),_s=s(Ae,"P",{});var Iu=r(_s);mg=d(Iu,"This tokenizer inherits from "),zi=s(Iu,"A",{href:!0});var yw=r(zi);fg=d(yw,"PreTrainedTokenizerFast"),yw.forEach(t),_g=d(Iu,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Iu.forEach(t),gg=u(Ae),v(Uo.$$.fragment,Ae),bg=u(Ae),Be=s(Ae,"DIV",{class:!0});var wt=r(Be);v(gs.$$.fragment,wt),kg=u(wt),gl=s(wt,"P",{});var vw=r(gl);yg=d(vw,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),vw.forEach(t),vg=u(wt),bs=s(wt,"P",{});var Nu=r(bs);Tg=d(Nu,"An MBART-50 sequence has the following format, where "),bl=s(Nu,"CODE",{});var Tw=r(bl);wg=d(Tw,"X"),Tw.forEach(t),Mg=d(Nu," represents the sequence:"),Nu.forEach(t),$g=u(wt),ks=s(wt,"UL",{});var Du=r(ks);ys=s(Du,"LI",{});var Lu=r(ys);kl=s(Lu,"CODE",{});var ww=r(kl);xg=d(ww,"input_ids"),ww.forEach(t),zg=d(Lu," (for encoder) "),yl=s(Lu,"CODE",{});var Mw=r(yl);Fg=d(Mw,"[src_lang_code] X [eos]"),Mw.forEach(t),Lu.forEach(t),qg=u(Du),vs=s(Du,"LI",{});var Gu=r(vs);vl=s(Gu,"CODE",{});var $w=r(vl);Bg=d($w,"labels"),$w.forEach(t),jg=d(Gu,": (for decoder) "),Tl=s(Gu,"CODE",{});var xw=r(Tl);Eg=d(xw,"[tgt_lang_code] X [eos]"),xw.forEach(t),Gu.forEach(t),Du.forEach(t),Cg=u(wt),wl=s(wt,"P",{});var zw=r(wl);Pg=d(zw,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),zw.forEach(t),wt.forEach(t),Sg=u(Ae),Xo=s(Ae,"DIV",{class:!0});var Wu=r(Xo);v(Ts.$$.fragment,Wu),Ag=u(Wu),Ml=s(Wu,"P",{});var Fw=r(Ml);Og=d(Fw,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),Fw.forEach(t),Wu.forEach(t),Ig=u(Ae),Qo=s(Ae,"DIV",{class:!0});var Ru=r(Qo);v(ws.$$.fragment,Ru),Ng=u(Ru),$l=s(Ru,"P",{});var qw=r($l);Dg=d(qw,"Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),qw.forEach(t),Ru.forEach(t),Ae.forEach(t),Ap=u(o),Kt=s(o,"H2",{class:!0});var Uu=r(Kt);Ho=s(Uu,"A",{id:!0,class:!0,href:!0});var Bw=r(Ho);xl=s(Bw,"SPAN",{});var jw=r(xl);v(Ms.$$.fragment,jw),jw.forEach(t),Bw.forEach(t),Lg=u(Uu),zl=s(Uu,"SPAN",{});var Ew=r(zl);Gg=d(Ew,"MBartModel"),Ew.forEach(t),Uu.forEach(t),Op=u(o),We=s(o,"DIV",{class:!0});var ra=r(We);v($s.$$.fragment,ra),Wg=u(ra),xs=s(ra,"P",{});var Xu=r(xs);Rg=d(Xu,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Fi=s(Xu,"A",{href:!0});var Cw=r(Fi);Ug=d(Cw,"PreTrainedModel"),Cw.forEach(t),Xg=d(Xu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xu.forEach(t),Qg=u(ra),zs=s(ra,"P",{});var Qu=r(zs);Hg=d(Qu,"This model is also a PyTorch "),Fs=s(Qu,"A",{href:!0,rel:!0});var Pw=r(Fs);Vg=d(Pw,"torch.nn.Module"),Pw.forEach(t),Jg=d(Qu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qu.forEach(t),Kg=u(ra),Ze=s(ra,"DIV",{class:!0});var ia=r(Ze);v(qs.$$.fragment,ia),Zg=u(ia),Zt=s(ia,"P",{});var Vi=r(Zt);Yg=d(Vi,"The "),qi=s(Vi,"A",{href:!0});var Sw=r(qi);eb=d(Sw,"MBartModel"),Sw.forEach(t),tb=d(Vi," forward method, overrides the "),Fl=s(Vi,"CODE",{});var Aw=r(Fl);ob=d(Aw,"__call__"),Aw.forEach(t),nb=d(Vi," special method."),Vi.forEach(t),ab=u(ia),v(Vo.$$.fragment,ia),sb=u(ia),v(Jo.$$.fragment,ia),ia.forEach(t),ra.forEach(t),Ip=u(o),Yt=s(o,"H2",{class:!0});var Hu=r(Yt);Ko=s(Hu,"A",{id:!0,class:!0,href:!0});var Ow=r(Ko);ql=s(Ow,"SPAN",{});var Iw=r(ql);v(Bs.$$.fragment,Iw),Iw.forEach(t),Ow.forEach(t),rb=u(Hu),Bl=s(Hu,"SPAN",{});var Nw=r(Bl);ib=d(Nw,"MBartForConditionalGeneration"),Nw.forEach(t),Hu.forEach(t),Np=u(o),Re=s(o,"DIV",{class:!0});var da=r(Re);v(js.$$.fragment,da),db=u(da),Es=s(da,"P",{});var Vu=r(Es);lb=d(Vu,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Bi=s(Vu,"A",{href:!0});var Dw=r(Bi);cb=d(Dw,"PreTrainedModel"),Dw.forEach(t),pb=d(Vu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vu.forEach(t),ub=u(da),Cs=s(da,"P",{});var Ju=r(Cs);hb=d(Ju,"This model is also a PyTorch "),Ps=s(Ju,"A",{href:!0,rel:!0});var Lw=r(Ps);mb=d(Lw,"torch.nn.Module"),Lw.forEach(t),fb=d(Ju,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ju.forEach(t),_b=u(da),je=s(da,"DIV",{class:!0});var Mt=r(je);v(Ss.$$.fragment,Mt),gb=u(Mt),eo=s(Mt,"P",{});var Ji=r(eo);bb=d(Ji,"The "),ji=s(Ji,"A",{href:!0});var Gw=r(ji);kb=d(Gw,"MBartForConditionalGeneration"),Gw.forEach(t),yb=d(Ji," forward method, overrides the "),jl=s(Ji,"CODE",{});var Ww=r(jl);vb=d(Ww,"__call__"),Ww.forEach(t),Tb=d(Ji," special method."),Ji.forEach(t),wb=u(Mt),v(Zo.$$.fragment,Mt),Mb=u(Mt),v(Yo.$$.fragment,Mt),$b=u(Mt),v(en.$$.fragment,Mt),Mt.forEach(t),da.forEach(t),Dp=u(o),to=s(o,"H2",{class:!0});var Ku=r(to);tn=s(Ku,"A",{id:!0,class:!0,href:!0});var Rw=r(tn);El=s(Rw,"SPAN",{});var Uw=r(El);v(As.$$.fragment,Uw),Uw.forEach(t),Rw.forEach(t),xb=u(Ku),Cl=s(Ku,"SPAN",{});var Xw=r(Cl);zb=d(Xw,"MBartForQuestionAnswering"),Xw.forEach(t),Ku.forEach(t),Lp=u(o),we=s(o,"DIV",{class:!0});var $t=r(we);v(Os.$$.fragment,$t),Fb=u($t),oo=s($t,"P",{});var Ki=r(oo);qb=d(Ki,`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Pl=s(Ki,"CODE",{});var Qw=r(Pl);Bb=d(Qw,"span start logits"),Qw.forEach(t),jb=d(Ki," and "),Sl=s(Ki,"CODE",{});var Hw=r(Sl);Eb=d(Hw,"span end logits"),Hw.forEach(t),Cb=d(Ki,")."),Ki.forEach(t),Pb=u($t),Is=s($t,"P",{});var Zu=r(Is);Sb=d(Zu,"This model inherits from "),Ei=s(Zu,"A",{href:!0});var Vw=r(Ei);Ab=d(Vw,"PreTrainedModel"),Vw.forEach(t),Ob=d(Zu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zu.forEach(t),Ib=u($t),Ns=s($t,"P",{});var Yu=r(Ns);Nb=d(Yu,"This model is also a PyTorch "),Ds=s(Yu,"A",{href:!0,rel:!0});var Jw=r(Ds);Db=d(Jw,"torch.nn.Module"),Jw.forEach(t),Lb=d(Yu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yu.forEach(t),Gb=u($t),Ee=s($t,"DIV",{class:!0});var xt=r(Ee);v(Ls.$$.fragment,xt),Wb=u(xt),no=s(xt,"P",{});var Zi=r(no);Rb=d(Zi,"The "),Ci=s(Zi,"A",{href:!0});var Kw=r(Ci);Ub=d(Kw,"MBartForQuestionAnswering"),Kw.forEach(t),Xb=d(Zi," forward method, overrides the "),Al=s(Zi,"CODE",{});var Zw=r(Al);Qb=d(Zw,"__call__"),Zw.forEach(t),Hb=d(Zi," special method."),Zi.forEach(t),Vb=u(xt),v(on.$$.fragment,xt),Jb=u(xt),v(nn.$$.fragment,xt),Kb=u(xt),v(an.$$.fragment,xt),xt.forEach(t),$t.forEach(t),Gp=u(o),ao=s(o,"H2",{class:!0});var eh=r(ao);sn=s(eh,"A",{id:!0,class:!0,href:!0});var Yw=r(sn);Ol=s(Yw,"SPAN",{});var eM=r(Ol);v(Gs.$$.fragment,eM),eM.forEach(t),Yw.forEach(t),Zb=u(eh),Il=s(eh,"SPAN",{});var tM=r(Il);Yb=d(tM,"MBartForSequenceClassification"),tM.forEach(t),eh.forEach(t),Wp=u(o),Me=s(o,"DIV",{class:!0});var zt=r(Me);v(Ws.$$.fragment,zt),ek=u(zt),Nl=s(zt,"P",{});var oM=r(Nl);tk=d(oM,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),oM.forEach(t),ok=u(zt),Rs=s(zt,"P",{});var th=r(Rs);nk=d(th,"This model inherits from "),Pi=s(th,"A",{href:!0});var nM=r(Pi);ak=d(nM,"PreTrainedModel"),nM.forEach(t),sk=d(th,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),th.forEach(t),rk=u(zt),Us=s(zt,"P",{});var oh=r(Us);ik=d(oh,"This model is also a PyTorch "),Xs=s(oh,"A",{href:!0,rel:!0});var aM=r(Xs);dk=d(aM,"torch.nn.Module"),aM.forEach(t),lk=d(oh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),oh.forEach(t),ck=u(zt),Z=s(zt,"DIV",{class:!0});var Oe=r(Z);v(Qs.$$.fragment,Oe),pk=u(Oe),so=s(Oe,"P",{});var Yi=r(so);uk=d(Yi,"The "),Si=s(Yi,"A",{href:!0});var sM=r(Si);hk=d(sM,"MBartForSequenceClassification"),sM.forEach(t),mk=d(Yi," forward method, overrides the "),Dl=s(Yi,"CODE",{});var rM=r(Dl);fk=d(rM,"__call__"),rM.forEach(t),_k=d(Yi," special method."),Yi.forEach(t),gk=u(Oe),v(rn.$$.fragment,Oe),bk=u(Oe),v(dn.$$.fragment,Oe),kk=u(Oe),v(ln.$$.fragment,Oe),yk=u(Oe),v(cn.$$.fragment,Oe),vk=u(Oe),v(pn.$$.fragment,Oe),Oe.forEach(t),zt.forEach(t),Rp=u(o),ro=s(o,"H2",{class:!0});var nh=r(ro);un=s(nh,"A",{id:!0,class:!0,href:!0});var iM=r(un);Ll=s(iM,"SPAN",{});var dM=r(Ll);v(Hs.$$.fragment,dM),dM.forEach(t),iM.forEach(t),Tk=u(nh),Gl=s(nh,"SPAN",{});var lM=r(Gl);wk=d(lM,"MBartForCausalLM"),lM.forEach(t),nh.forEach(t),Up=u(o),io=s(o,"DIV",{class:!0});var ah=r(io);v(Vs.$$.fragment,ah),Mk=u(ah),hn=s(ah,"DIV",{class:!0});var sh=r(hn);v(Js.$$.fragment,sh),$k=u(sh),v(mn.$$.fragment,sh),sh.forEach(t),ah.forEach(t),Xp=u(o),lo=s(o,"H2",{class:!0});var rh=r(lo);fn=s(rh,"A",{id:!0,class:!0,href:!0});var cM=r(fn);Wl=s(cM,"SPAN",{});var pM=r(Wl);v(Ks.$$.fragment,pM),pM.forEach(t),cM.forEach(t),xk=u(rh),Rl=s(rh,"SPAN",{});var uM=r(Rl);zk=d(uM,"TFMBartModel"),uM.forEach(t),rh.forEach(t),Qp=u(o),$e=s(o,"DIV",{class:!0});var Ft=r($e);v(Zs.$$.fragment,Ft),Fk=u(Ft),Ys=s(Ft,"P",{});var ih=r(Ys);qk=d(ih,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ai=s(ih,"A",{href:!0});var hM=r(Ai);Bk=d(hM,"TFPreTrainedModel"),hM.forEach(t),jk=d(ih,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ih.forEach(t),Ek=u(Ft),er=s(Ft,"P",{});var dh=r(er);Ck=d(dh,"This model is also a "),tr=s(dh,"A",{href:!0,rel:!0});var mM=r(tr);Pk=d(mM,"tf.keras.Model"),mM.forEach(t),Sk=d(dh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dh.forEach(t),Ak=u(Ft),v(_n.$$.fragment,Ft),Ok=u(Ft),Ye=s(Ft,"DIV",{class:!0});var la=r(Ye);v(or.$$.fragment,la),Ik=u(la),co=s(la,"P",{});var ed=r(co);Nk=d(ed,"The "),Oi=s(ed,"A",{href:!0});var fM=r(Oi);Dk=d(fM,"TFMBartModel"),fM.forEach(t),Lk=d(ed," forward method, overrides the "),Ul=s(ed,"CODE",{});var _M=r(Ul);Gk=d(_M,"__call__"),_M.forEach(t),Wk=d(ed," special method."),ed.forEach(t),Rk=u(la),v(gn.$$.fragment,la),Uk=u(la),v(bn.$$.fragment,la),la.forEach(t),Ft.forEach(t),Hp=u(o),po=s(o,"H2",{class:!0});var lh=r(po);kn=s(lh,"A",{id:!0,class:!0,href:!0});var gM=r(kn);Xl=s(gM,"SPAN",{});var bM=r(Xl);v(nr.$$.fragment,bM),bM.forEach(t),gM.forEach(t),Xk=u(lh),Ql=s(lh,"SPAN",{});var kM=r(Ql);Qk=d(kM,"TFMBartForConditionalGeneration"),kM.forEach(t),lh.forEach(t),Vp=u(o),xe=s(o,"DIV",{class:!0});var qt=r(xe);v(ar.$$.fragment,qt),Hk=u(qt),sr=s(qt,"P",{});var ch=r(sr);Vk=d(ch,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ii=s(ch,"A",{href:!0});var yM=r(Ii);Jk=d(yM,"TFPreTrainedModel"),yM.forEach(t),Kk=d(ch,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ch.forEach(t),Zk=u(qt),rr=s(qt,"P",{});var ph=r(rr);Yk=d(ph,"This model is also a "),ir=s(ph,"A",{href:!0,rel:!0});var vM=r(ir);ey=d(vM,"tf.keras.Model"),vM.forEach(t),ty=d(ph,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ph.forEach(t),oy=u(qt),v(yn.$$.fragment,qt),ny=u(qt),Ce=s(qt,"DIV",{class:!0});var Bt=r(Ce);v(dr.$$.fragment,Bt),ay=u(Bt),uo=s(Bt,"P",{});var td=r(uo);sy=d(td,"The "),Ni=s(td,"A",{href:!0});var TM=r(Ni);ry=d(TM,"TFMBartForConditionalGeneration"),TM.forEach(t),iy=d(td," forward method, overrides the "),Hl=s(td,"CODE",{});var wM=r(Hl);dy=d(wM,"__call__"),wM.forEach(t),ly=d(td," special method."),td.forEach(t),cy=u(Bt),v(vn.$$.fragment,Bt),py=u(Bt),v(Tn.$$.fragment,Bt),uy=u(Bt),v(wn.$$.fragment,Bt),Bt.forEach(t),qt.forEach(t),Jp=u(o),ho=s(o,"H2",{class:!0});var uh=r(ho);Mn=s(uh,"A",{id:!0,class:!0,href:!0});var MM=r(Mn);Vl=s(MM,"SPAN",{});var $M=r(Vl);v(lr.$$.fragment,$M),$M.forEach(t),MM.forEach(t),hy=u(uh),Jl=s(uh,"SPAN",{});var xM=r(Jl);my=d(xM,"FlaxMBartModel"),xM.forEach(t),uh.forEach(t),Kp=u(o),W=s(o,"DIV",{class:!0});var pe=r(W);v(cr.$$.fragment,pe),fy=u(pe),pr=s(pe,"P",{});var hh=r(pr);_y=d(hh,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Di=s(hh,"A",{href:!0});var zM=r(Di);gy=d(zM,"FlaxPreTrainedModel"),zM.forEach(t),by=d(hh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hh.forEach(t),ky=u(pe),ur=s(pe,"P",{});var mh=r(ur);yy=d(mh,`This model is also a Flax Linen
`),hr=s(mh,"A",{href:!0,rel:!0});var FM=r(hr);vy=d(FM,"flax.nn.Module"),FM.forEach(t),Ty=d(mh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),mh.forEach(t),wy=u(pe),Kl=s(pe,"P",{});var qM=r(Kl);My=d(qM,"Finally, this model supports inherent JAX features such as:"),qM.forEach(t),$y=u(pe),mt=s(pe,"UL",{});var ca=r(mt);Zl=s(ca,"LI",{});var BM=r(Zl);mr=s(BM,"A",{href:!0,rel:!0});var jM=r(mr);xy=d(jM,"Just-In-Time (JIT) compilation"),jM.forEach(t),BM.forEach(t),zy=u(ca),Yl=s(ca,"LI",{});var EM=r(Yl);fr=s(EM,"A",{href:!0,rel:!0});var CM=r(fr);Fy=d(CM,"Automatic Differentiation"),CM.forEach(t),EM.forEach(t),qy=u(ca),ec=s(ca,"LI",{});var PM=r(ec);_r=s(PM,"A",{href:!0,rel:!0});var SM=r(_r);By=d(SM,"Vectorization"),SM.forEach(t),PM.forEach(t),jy=u(ca),tc=s(ca,"LI",{});var AM=r(tc);gr=s(AM,"A",{href:!0,rel:!0});var OM=r(gr);Ey=d(OM,"Parallelization"),OM.forEach(t),AM.forEach(t),ca.forEach(t),Cy=u(pe),et=s(pe,"DIV",{class:!0});var pa=r(et);v(br.$$.fragment,pa),Py=u(pa),mo=s(pa,"P",{});var od=r(mo);Sy=d(od,"The "),oc=s(od,"CODE",{});var IM=r(oc);Ay=d(IM,"FlaxMBartPreTrainedModel"),IM.forEach(t),Oy=d(od," forward method, overrides the "),nc=s(od,"CODE",{});var NM=r(nc);Iy=d(NM,"__call__"),NM.forEach(t),Ny=d(od," special method."),od.forEach(t),Dy=u(pa),v($n.$$.fragment,pa),Ly=u(pa),v(xn.$$.fragment,pa),pa.forEach(t),Gy=u(pe),zn=s(pe,"DIV",{class:!0});var fh=r(zn);v(kr.$$.fragment,fh),Wy=u(fh),v(Fn.$$.fragment,fh),fh.forEach(t),Ry=u(pe),qn=s(pe,"DIV",{class:!0});var _h=r(qn);v(yr.$$.fragment,_h),Uy=u(_h),v(Bn.$$.fragment,_h),_h.forEach(t),pe.forEach(t),Zp=u(o),fo=s(o,"H2",{class:!0});var gh=r(fo);jn=s(gh,"A",{id:!0,class:!0,href:!0});var DM=r(jn);ac=s(DM,"SPAN",{});var LM=r(ac);v(vr.$$.fragment,LM),LM.forEach(t),DM.forEach(t),Xy=u(gh),sc=s(gh,"SPAN",{});var GM=r(sc);Qy=d(GM,"FlaxMBartForConditionalGeneration"),GM.forEach(t),gh.forEach(t),Yp=u(o),R=s(o,"DIV",{class:!0});var ue=r(R);v(Tr.$$.fragment,ue),Hy=u(ue),wr=s(ue,"P",{});var bh=r(wr);Vy=d(bh,`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),Li=s(bh,"A",{href:!0});var WM=r(Li);Jy=d(WM,"FlaxPreTrainedModel"),WM.forEach(t),Ky=d(bh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bh.forEach(t),Zy=u(ue),Mr=s(ue,"P",{});var kh=r(Mr);Yy=d(kh,`This model is also a Flax Linen
`),$r=s(kh,"A",{href:!0,rel:!0});var RM=r($r);ev=d(RM,"flax.nn.Module"),RM.forEach(t),tv=d(kh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),kh.forEach(t),ov=u(ue),rc=s(ue,"P",{});var UM=r(rc);nv=d(UM,"Finally, this model supports inherent JAX features such as:"),UM.forEach(t),av=u(ue),ft=s(ue,"UL",{});var ua=r(ft);ic=s(ua,"LI",{});var XM=r(ic);xr=s(XM,"A",{href:!0,rel:!0});var QM=r(xr);sv=d(QM,"Just-In-Time (JIT) compilation"),QM.forEach(t),XM.forEach(t),rv=u(ua),dc=s(ua,"LI",{});var HM=r(dc);zr=s(HM,"A",{href:!0,rel:!0});var VM=r(zr);iv=d(VM,"Automatic Differentiation"),VM.forEach(t),HM.forEach(t),dv=u(ua),lc=s(ua,"LI",{});var JM=r(lc);Fr=s(JM,"A",{href:!0,rel:!0});var KM=r(Fr);lv=d(KM,"Vectorization"),KM.forEach(t),JM.forEach(t),cv=u(ua),cc=s(ua,"LI",{});var ZM=r(cc);qr=s(ZM,"A",{href:!0,rel:!0});var YM=r(qr);pv=d(YM,"Parallelization"),YM.forEach(t),ZM.forEach(t),ua.forEach(t),uv=u(ue),Pe=s(ue,"DIV",{class:!0});var jt=r(Pe);v(Br.$$.fragment,jt),hv=u(jt),_o=s(jt,"P",{});var nd=r(_o);mv=d(nd,"The "),pc=s(nd,"CODE",{});var e$=r(pc);fv=d(e$,"FlaxMBartPreTrainedModel"),e$.forEach(t),_v=d(nd," forward method, overrides the "),uc=s(nd,"CODE",{});var t$=r(uc);gv=d(t$,"__call__"),t$.forEach(t),bv=d(nd," special method."),nd.forEach(t),kv=u(jt),v(En.$$.fragment,jt),yv=u(jt),v(Cn.$$.fragment,jt),vv=u(jt),v(Pn.$$.fragment,jt),jt.forEach(t),Tv=u(ue),Sn=s(ue,"DIV",{class:!0});var yh=r(Sn);v(jr.$$.fragment,yh),wv=u(yh),v(An.$$.fragment,yh),yh.forEach(t),Mv=u(ue),On=s(ue,"DIV",{class:!0});var vh=r(On);v(Er.$$.fragment,vh),$v=u(vh),v(In.$$.fragment,vh),vh.forEach(t),ue.forEach(t),eu=u(o),go=s(o,"H2",{class:!0});var Th=r(go);Nn=s(Th,"A",{id:!0,class:!0,href:!0});var o$=r(Nn);hc=s(o$,"SPAN",{});var n$=r(hc);v(Cr.$$.fragment,n$),n$.forEach(t),o$.forEach(t),xv=u(Th),mc=s(Th,"SPAN",{});var a$=r(mc);zv=d(a$,"FlaxMBartForSequenceClassification"),a$.forEach(t),Th.forEach(t),tu=u(o),N=s(o,"DIV",{class:!0});var te=r(N);v(Pr.$$.fragment,te),Fv=u(te),fc=s(te,"P",{});var s$=r(fc);qv=d(s$,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),s$.forEach(t),Bv=u(te),Sr=s(te,"P",{});var wh=r(Sr);jv=d(wh,"This model inherits from "),Gi=s(wh,"A",{href:!0});var r$=r(Gi);Ev=d(r$,"FlaxPreTrainedModel"),r$.forEach(t),Cv=d(wh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wh.forEach(t),Pv=u(te),Ar=s(te,"P",{});var Mh=r(Ar);Sv=d(Mh,`This model is also a Flax Linen
`),Or=s(Mh,"A",{href:!0,rel:!0});var i$=r(Or);Av=d(i$,"flax.nn.Module"),i$.forEach(t),Ov=d(Mh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Mh.forEach(t),Iv=u(te),_c=s(te,"P",{});var d$=r(_c);Nv=d(d$,"Finally, this model supports inherent JAX features such as:"),d$.forEach(t),Dv=u(te),_t=s(te,"UL",{});var ha=r(_t);gc=s(ha,"LI",{});var l$=r(gc);Ir=s(l$,"A",{href:!0,rel:!0});var c$=r(Ir);Lv=d(c$,"Just-In-Time (JIT) compilation"),c$.forEach(t),l$.forEach(t),Gv=u(ha),bc=s(ha,"LI",{});var p$=r(bc);Nr=s(p$,"A",{href:!0,rel:!0});var u$=r(Nr);Wv=d(u$,"Automatic Differentiation"),u$.forEach(t),p$.forEach(t),Rv=u(ha),kc=s(ha,"LI",{});var h$=r(kc);Dr=s(h$,"A",{href:!0,rel:!0});var m$=r(Dr);Uv=d(m$,"Vectorization"),m$.forEach(t),h$.forEach(t),Xv=u(ha),yc=s(ha,"LI",{});var f$=r(yc);Lr=s(f$,"A",{href:!0,rel:!0});var _$=r(Lr);Qv=d(_$,"Parallelization"),_$.forEach(t),f$.forEach(t),ha.forEach(t),Hv=u(te),tt=s(te,"DIV",{class:!0});var ma=r(tt);v(Gr.$$.fragment,ma),Vv=u(ma),bo=s(ma,"P",{});var ad=r(bo);Jv=d(ad,"The "),vc=s(ad,"CODE",{});var g$=r(vc);Kv=d(g$,"FlaxMBartPreTrainedModel"),g$.forEach(t),Zv=d(ad," forward method, overrides the "),Tc=s(ad,"CODE",{});var b$=r(Tc);Yv=d(b$,"__call__"),b$.forEach(t),e1=d(ad," special method."),ad.forEach(t),t1=u(ma),v(Dn.$$.fragment,ma),o1=u(ma),v(Ln.$$.fragment,ma),ma.forEach(t),n1=u(te),Gn=s(te,"DIV",{class:!0});var $h=r(Gn);v(Wr.$$.fragment,$h),a1=u($h),v(Wn.$$.fragment,$h),$h.forEach(t),s1=u(te),Rn=s(te,"DIV",{class:!0});var xh=r(Rn);v(Rr.$$.fragment,xh),r1=u(xh),v(Un.$$.fragment,xh),xh.forEach(t),te.forEach(t),ou=u(o),ko=s(o,"H2",{class:!0});var zh=r(ko);Xn=s(zh,"A",{id:!0,class:!0,href:!0});var k$=r(Xn);wc=s(k$,"SPAN",{});var y$=r(wc);v(Ur.$$.fragment,y$),y$.forEach(t),k$.forEach(t),i1=u(zh),Mc=s(zh,"SPAN",{});var v$=r(Mc);d1=d(v$,"FlaxMBartForQuestionAnswering"),v$.forEach(t),zh.forEach(t),nu=u(o),D=s(o,"DIV",{class:!0});var oe=r(D);v(Xr.$$.fragment,oe),l1=u(oe),yo=s(oe,"P",{});var sd=r(yo);c1=d(sd,`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),$c=s(sd,"CODE",{});var T$=r($c);p1=d(T$,"span start logits"),T$.forEach(t),u1=d(sd," and "),xc=s(sd,"CODE",{});var w$=r(xc);h1=d(w$,"span end logits"),w$.forEach(t),m1=d(sd,")."),sd.forEach(t),f1=u(oe),Qr=s(oe,"P",{});var Fh=r(Qr);_1=d(Fh,"This model inherits from "),Wi=s(Fh,"A",{href:!0});var M$=r(Wi);g1=d(M$,"FlaxPreTrainedModel"),M$.forEach(t),b1=d(Fh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fh.forEach(t),k1=u(oe),Hr=s(oe,"P",{});var qh=r(Hr);y1=d(qh,`This model is also a Flax Linen
`),Vr=s(qh,"A",{href:!0,rel:!0});var $$=r(Vr);v1=d($$,"flax.nn.Module"),$$.forEach(t),T1=d(qh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),qh.forEach(t),w1=u(oe),zc=s(oe,"P",{});var x$=r(zc);M1=d(x$,"Finally, this model supports inherent JAX features such as:"),x$.forEach(t),$1=u(oe),gt=s(oe,"UL",{});var fa=r(gt);Fc=s(fa,"LI",{});var z$=r(Fc);Jr=s(z$,"A",{href:!0,rel:!0});var F$=r(Jr);x1=d(F$,"Just-In-Time (JIT) compilation"),F$.forEach(t),z$.forEach(t),z1=u(fa),qc=s(fa,"LI",{});var q$=r(qc);Kr=s(q$,"A",{href:!0,rel:!0});var B$=r(Kr);F1=d(B$,"Automatic Differentiation"),B$.forEach(t),q$.forEach(t),q1=u(fa),Bc=s(fa,"LI",{});var j$=r(Bc);Zr=s(j$,"A",{href:!0,rel:!0});var E$=r(Zr);B1=d(E$,"Vectorization"),E$.forEach(t),j$.forEach(t),j1=u(fa),jc=s(fa,"LI",{});var C$=r(jc);Yr=s(C$,"A",{href:!0,rel:!0});var P$=r(Yr);E1=d(P$,"Parallelization"),P$.forEach(t),C$.forEach(t),fa.forEach(t),C1=u(oe),ot=s(oe,"DIV",{class:!0});var _a=r(ot);v(ei.$$.fragment,_a),P1=u(_a),vo=s(_a,"P",{});var rd=r(vo);S1=d(rd,"The "),Ec=s(rd,"CODE",{});var S$=r(Ec);A1=d(S$,"FlaxMBartPreTrainedModel"),S$.forEach(t),O1=d(rd," forward method, overrides the "),Cc=s(rd,"CODE",{});var A$=r(Cc);I1=d(A$,"__call__"),A$.forEach(t),N1=d(rd," special method."),rd.forEach(t),D1=u(_a),v(Qn.$$.fragment,_a),L1=u(_a),v(Hn.$$.fragment,_a),_a.forEach(t),G1=u(oe),Vn=s(oe,"DIV",{class:!0});var Bh=r(Vn);v(ti.$$.fragment,Bh),W1=u(Bh),v(Jn.$$.fragment,Bh),Bh.forEach(t),R1=u(oe),Kn=s(oe,"DIV",{class:!0});var jh=r(Kn);v(oi.$$.fragment,jh),U1=u(jh),v(Zn.$$.fragment,jh),jh.forEach(t),oe.forEach(t),this.h()},h(){f(l,"name","hf:doc:metadata"),f(l,"content",JSON.stringify(Ex)),f(c,"id","mbart-and-mbart50"),f(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(c,"href","#mbart-and-mbart50"),f(m,"class","relative group"),f(me,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),f(me,"rel","nofollow"),f(L,"id","overview-of-mbart"),f(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(L,"href","#overview-of-mbart"),f(Q,"class","relative group"),f(H,"href","https://arxiv.org/abs/2001.08210"),f(H,"rel","nofollow"),f(be,"href","https://huggingface.co/valhalla"),f(be,"rel","nofollow"),f(ke,"href","https://github.com/pytorch/fairseq/tree/master/examples/mbart"),f(ke,"rel","nofollow"),f(j,"id","training-of-mbart"),f(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(j,"href","#training-of-mbart"),f(z,"class","relative group"),f(ga,"href","/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"),f(ci,"href","/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizer.as_target_tokenizer"),f($o,"id","overview-of-mbart50"),f($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f($o,"href","#overview-of-mbart50"),f(Dt,"class","relative group"),f(Ta,"href","https://arxiv.org/abs/2008.00401"),f(Ta,"rel","nofollow"),f(xo,"id","training-of-mbart50"),f(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(xo,"href","#training-of-mbart50"),f(Lt,"class","relative group"),f(fi,"href","/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBart50Tokenizer"),f(Fo,"id","transformers.MBartConfig"),f(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Fo,"href","#transformers.MBartConfig"),f(Gt,"class","relative group"),f(bi,"href","/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartModel"),f(qa,"href","https://huggingface.co/facebook/mbart-large-cc25"),f(qa,"rel","nofollow"),f(ki,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),f(yi,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),f(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Bo,"id","transformers.MBartTokenizer"),f(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Bo,"href","#transformers.MBartTokenizer"),f(Ut,"class","relative group"),f(vi,"href","/docs/transformers/pr_16919/en/model_doc/roberta#transformers.RobertaTokenizer"),f(Ti,"href","/docs/transformers/pr_16919/en/model_doc/xlnet#transformers.XLNetTokenizer"),f(Ea,"href","https://github.com/google/sentencepiece"),f(Ea,"rel","nofollow"),f(Eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Co,"id","transformers.MBartTokenizerFast"),f(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Co,"href","#transformers.MBartTokenizerFast"),f(Xt,"class","relative group"),f(Ga,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),f(Ga,"rel","nofollow"),f(wi,"href","/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartTokenizerFast"),f(Mi,"href","/docs/transformers/pr_16919/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizerFast"),f($i,"href","/docs/transformers/pr_16919/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizerFast"),f(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(So,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Io,"id","transformers.MBart50Tokenizer"),f(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Io,"href","#transformers.MBart50Tokenizer"),f(Ht,"class","relative group"),f(ts,"href","https://github.com/google/sentencepiece"),f(ts,"rel","nofollow"),f(xi,"href","/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Do,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ro,"id","transformers.MBart50TokenizerFast"),f(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ro,"href","#transformers.MBart50TokenizerFast"),f(Vt,"class","relative group"),f(fs,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),f(fs,"rel","nofollow"),f(zi,"href","/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ho,"id","transformers.MBartModel"),f(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ho,"href","#transformers.MBartModel"),f(Kt,"class","relative group"),f(Fi,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),f(Fs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Fs,"rel","nofollow"),f(qi,"href","/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartModel"),f(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ko,"id","transformers.MBartForConditionalGeneration"),f(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ko,"href","#transformers.MBartForConditionalGeneration"),f(Yt,"class","relative group"),f(Bi,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),f(Ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ps,"rel","nofollow"),f(ji,"href","/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartForConditionalGeneration"),f(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tn,"id","transformers.MBartForQuestionAnswering"),f(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(tn,"href","#transformers.MBartForQuestionAnswering"),f(to,"class","relative group"),f(Ei,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),f(Ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ds,"rel","nofollow"),f(Ci,"href","/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartForQuestionAnswering"),f(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(sn,"id","transformers.MBartForSequenceClassification"),f(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(sn,"href","#transformers.MBartForSequenceClassification"),f(ao,"class","relative group"),f(Pi,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),f(Xs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Xs,"rel","nofollow"),f(Si,"href","/docs/transformers/pr_16919/en/model_doc/mbart#transformers.MBartForSequenceClassification"),f(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(un,"id","transformers.MBartForCausalLM"),f(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(un,"href","#transformers.MBartForCausalLM"),f(ro,"class","relative group"),f(hn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(fn,"id","transformers.TFMBartModel"),f(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(fn,"href","#transformers.TFMBartModel"),f(lo,"class","relative group"),f(Ai,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),f(tr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(tr,"rel","nofollow"),f(Oi,"href","/docs/transformers/pr_16919/en/model_doc/mbart#transformers.TFMBartModel"),f(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(kn,"id","transformers.TFMBartForConditionalGeneration"),f(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(kn,"href","#transformers.TFMBartForConditionalGeneration"),f(po,"class","relative group"),f(Ii,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.TFPreTrainedModel"),f(ir,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ir,"rel","nofollow"),f(Ni,"href","/docs/transformers/pr_16919/en/model_doc/mbart#transformers.TFMBartForConditionalGeneration"),f(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Mn,"id","transformers.FlaxMBartModel"),f(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Mn,"href","#transformers.FlaxMBartModel"),f(ho,"class","relative group"),f(Di,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(hr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(hr,"rel","nofollow"),f(mr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(mr,"rel","nofollow"),f(fr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(fr,"rel","nofollow"),f(_r,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(_r,"rel","nofollow"),f(gr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(gr,"rel","nofollow"),f(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(zn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(qn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(jn,"id","transformers.FlaxMBartForConditionalGeneration"),f(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(jn,"href","#transformers.FlaxMBartForConditionalGeneration"),f(fo,"class","relative group"),f(Li,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),f($r,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f($r,"rel","nofollow"),f(xr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(xr,"rel","nofollow"),f(zr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(zr,"rel","nofollow"),f(Fr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Fr,"rel","nofollow"),f(qr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(qr,"rel","nofollow"),f(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(On,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Nn,"id","transformers.FlaxMBartForSequenceClassification"),f(Nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Nn,"href","#transformers.FlaxMBartForSequenceClassification"),f(go,"class","relative group"),f(Gi,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Or,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Or,"rel","nofollow"),f(Ir,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Ir,"rel","nofollow"),f(Nr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Nr,"rel","nofollow"),f(Dr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Dr,"rel","nofollow"),f(Lr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Lr,"rel","nofollow"),f(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Gn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Rn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Xn,"id","transformers.FlaxMBartForQuestionAnswering"),f(Xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Xn,"href","#transformers.FlaxMBartForQuestionAnswering"),f(ko,"class","relative group"),f(Wi,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Vr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Vr,"rel","nofollow"),f(Jr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Jr,"rel","nofollow"),f(Kr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Kr,"rel","nofollow"),f(Zr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Zr,"rel","nofollow"),f(Yr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Yr,"rel","nofollow"),f(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Vn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Kn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,l),b(o,k,_),b(o,m,_),e(m,c),e(c,g),T(n,g,null),e(m,h),e(m,q),e(q,st),b(o,ze,_),b(o,E,_),e(E,Ie),e(Ie,he),e(E,rt),e(E,me),e(me,fe),e(E,it),b(o,Xe,_),b(o,Q,_),e(Q,L),e(L,Ne),T(ne,Ne,null),e(Q,S),e(Q,A),e(A,dt),b(o,le,_),b(o,ce,_),e(ce,lt),e(ce,H),e(H,ct),e(ce,pt),b(o,G,_),b(o,Fe,_),e(Fe,_e),b(o,Qe,_),b(o,ae,_),e(ae,ge),e(ae,be),e(be,ut),e(ae,se),e(ae,ke),e(ke,ye),b(o,He,_),b(o,z,_),e(z,j),e(j,ve),T(De,ve,null),e(z,Et),e(z,V),e(V,Ct),b(o,bt,_),b(o,X,_),e(X,re),e(X,ie),e(ie,Pt),e(X,St),e(X,de),e(de,At),e(X,Ot),e(X,Le),e(Le,It),e(X,Eh),e(X,id),e(id,Ch),e(X,Ph),b(o,cp,_),b(o,kt,_),e(kt,Sh),e(kt,ga),e(ga,dd),e(dd,Ah),e(ga,Oh),e(kt,Ih),e(kt,ci),e(ci,Nh),e(kt,Dh),b(o,pp,_),b(o,pi,_),e(pi,ld),e(ld,Lh),b(o,up,_),T(ba,o,_),b(o,hp,_),b(o,ui,_),e(ui,ka),e(ka,cd),e(cd,Gh),e(ka,Wh),e(ka,Nt),e(Nt,Rh),e(Nt,pd),e(pd,Uh),e(Nt,Xh),e(Nt,ud),e(ud,Qh),e(Nt,Hh),b(o,mp,_),T(ya,o,_),b(o,fp,_),b(o,Dt,_),e(Dt,$o),e($o,hd),T(va,hd,null),e(Dt,Vh),e(Dt,md),e(md,Jh),b(o,_p,_),b(o,yt,_),e(yt,Kh),e(yt,Ta),e(Ta,Zh),e(yt,Yh),e(yt,fd),e(fd,em),e(yt,tm),b(o,gp,_),b(o,hi,_),e(hi,om),b(o,bp,_),b(o,mi,_),e(mi,_d),e(_d,nm),b(o,kp,_),b(o,Lt,_),e(Lt,xo),e(xo,gd),T(wa,gd,null),e(Lt,am),e(Lt,bd),e(bd,sm),b(o,yp,_),b(o,Ve,_),e(Ve,rm),e(Ve,kd),e(kd,im),e(Ve,dm),e(Ve,yd),e(yd,lm),e(Ve,cm),e(Ve,vd),e(vd,pm),e(Ve,um),b(o,vp,_),b(o,zo,_),e(zo,hm),e(zo,fi),e(fi,mm),e(zo,fm),b(o,Tp,_),b(o,_i,_),e(_i,Td),e(Td,_m),b(o,wp,_),T(Ma,o,_),b(o,Mp,_),b(o,gi,_),e(gi,$a),e($a,wd),e(wd,gm),e($a,bm),e($a,Te),e(Te,km),e(Te,Md),e(Md,ym),e(Te,vm),e(Te,$d),e($d,Tm),e(Te,wm),e(Te,xd),e(xd,Mm),e(Te,$m),e(Te,zd),e(zd,xm),e(Te,zm),e(Te,Fd),e(Fd,Fm),e(Te,qm),b(o,$p,_),T(xa,o,_),b(o,xp,_),b(o,Gt,_),e(Gt,Fo),e(Fo,qd),T(za,qd,null),e(Gt,Bm),e(Gt,Bd),e(Bd,jm),b(o,zp,_),b(o,Ge,_),T(Fa,Ge,null),e(Ge,Em),e(Ge,Wt),e(Wt,Cm),e(Wt,bi),e(bi,Pm),e(Wt,Sm),e(Wt,qa),e(qa,Am),e(Wt,Om),e(Ge,Im),e(Ge,Rt),e(Rt,Nm),e(Rt,ki),e(ki,Dm),e(Rt,Lm),e(Rt,yi),e(yi,Gm),e(Rt,Wm),e(Ge,Rm),T(qo,Ge,null),b(o,Fp,_),b(o,Ut,_),e(Ut,Bo),e(Bo,jd),T(Ba,jd,null),e(Ut,Um),e(Ut,Ed),e(Ed,Xm),b(o,qp,_),b(o,J,_),T(ja,J,null),e(J,Qm),e(J,Cd),e(Cd,Hm),e(J,Vm),e(J,ht),e(ht,Jm),e(ht,vi),e(vi,Km),e(ht,Zm),e(ht,Ti),e(Ti,Ym),e(ht,ef),e(ht,Ea),e(Ea,tf),e(ht,of),e(J,nf),e(J,Ca),e(Ca,af),e(Ca,Pd),e(Pd,sf),e(Ca,rf),e(J,df),T(jo,J,null),e(J,lf),e(J,Eo),T(Pa,Eo,null),e(Eo,cf),e(Eo,Sd),e(Sd,pf),e(J,uf),e(J,Je),T(Sa,Je,null),e(Je,hf),e(Je,Aa),e(Aa,mf),e(Aa,Ad),e(Ad,ff),e(Aa,_f),e(Je,gf),e(Je,Oa),e(Oa,Ia),e(Ia,Od),e(Od,bf),e(Ia,kf),e(Ia,Id),e(Id,yf),e(Oa,vf),e(Oa,Na),e(Na,Nd),e(Nd,Tf),e(Na,wf),e(Na,Dd),e(Dd,Mf),e(Je,$f),e(Je,Ld),e(Ld,xf),b(o,Bp,_),b(o,Xt,_),e(Xt,Co),e(Co,Gd),T(Da,Gd,null),e(Xt,zf),e(Xt,Wd),e(Wd,Ff),b(o,jp,_),b(o,O,_),T(La,O,null),e(O,qf),e(O,Qt),e(Qt,Bf),e(Qt,Rd),e(Rd,jf),e(Qt,Ef),e(Qt,Ga),e(Ga,Cf),e(Qt,Pf),e(O,Sf),e(O,vt),e(vt,wi),e(wi,Af),e(vt,Of),e(vt,Mi),e(Mi,If),e(vt,Nf),e(vt,$i),e($i,Df),e(vt,Lf),e(O,Gf),e(O,Wa),e(Wa,Wf),e(Wa,Ud),e(Ud,Rf),e(Wa,Uf),e(O,Xf),T(Po,O,null),e(O,Qf),e(O,qe),T(Ra,qe,null),e(qe,Hf),e(qe,Xd),e(Xd,Vf),e(qe,Jf),e(qe,Ua),e(Ua,Kf),e(Ua,Qd),e(Qd,Zf),e(Ua,Yf),e(qe,e_),e(qe,Xa),e(Xa,Qa),e(Qa,Hd),e(Hd,t_),e(Qa,o_),e(Qa,Vd),e(Vd,n_),e(Xa,a_),e(Xa,Ha),e(Ha,Jd),e(Jd,s_),e(Ha,r_),e(Ha,Kd),e(Kd,i_),e(qe,d_),e(qe,Zd),e(Zd,l_),e(O,c_),e(O,So),T(Va,So,null),e(So,p_),e(So,Yd),e(Yd,u_),e(O,h_),e(O,Ao),T(Ja,Ao,null),e(Ao,m_),e(Ao,el),e(el,f_),e(O,__),e(O,Oo),T(Ka,Oo,null),e(Oo,g_),e(Oo,tl),e(tl,b_),b(o,Ep,_),b(o,Ht,_),e(Ht,Io),e(Io,ol),T(Za,ol,null),e(Ht,k_),e(Ht,nl),e(nl,y_),b(o,Cp,_),b(o,I,_),T(Ya,I,null),e(I,v_),e(I,es),e(es,T_),e(es,ts),e(ts,w_),e(es,M_),e(I,$_),e(I,os),e(os,x_),e(os,xi),e(xi,z_),e(os,F_),e(I,q_),T(No,I,null),e(I,B_),e(I,Ke),T(ns,Ke,null),e(Ke,j_),e(Ke,as),e(as,E_),e(as,al),e(al,C_),e(as,P_),e(Ke,S_),e(Ke,ss),e(ss,rs),e(rs,sl),e(sl,A_),e(rs,O_),e(rs,rl),e(rl,I_),e(ss,N_),e(ss,is),e(is,il),e(il,D_),e(is,L_),e(is,dl),e(dl,G_),e(Ke,W_),e(Ke,ll),e(ll,R_),e(I,U_),e(I,Do),T(ds,Do,null),e(Do,X_),e(Do,cl),e(cl,Q_),e(I,H_),e(I,Lo),T(ls,Lo,null),e(Lo,V_),e(Lo,cs),e(cs,J_),e(cs,pl),e(pl,K_),e(cs,Z_),e(I,Y_),e(I,Go),T(ps,Go,null),e(Go,eg),e(Go,ul),e(ul,tg),e(I,og),e(I,Wo),T(us,Wo,null),e(Wo,ng),e(Wo,hl),e(hl,ag),b(o,Pp,_),b(o,Vt,_),e(Vt,Ro),e(Ro,ml),T(hs,ml,null),e(Vt,sg),e(Vt,fl),e(fl,rg),b(o,Sp,_),b(o,K,_),T(ms,K,null),e(K,ig),e(K,Jt),e(Jt,dg),e(Jt,_l),e(_l,lg),e(Jt,cg),e(Jt,fs),e(fs,pg),e(Jt,ug),e(K,hg),e(K,_s),e(_s,mg),e(_s,zi),e(zi,fg),e(_s,_g),e(K,gg),T(Uo,K,null),e(K,bg),e(K,Be),T(gs,Be,null),e(Be,kg),e(Be,gl),e(gl,yg),e(Be,vg),e(Be,bs),e(bs,Tg),e(bs,bl),e(bl,wg),e(bs,Mg),e(Be,$g),e(Be,ks),e(ks,ys),e(ys,kl),e(kl,xg),e(ys,zg),e(ys,yl),e(yl,Fg),e(ks,qg),e(ks,vs),e(vs,vl),e(vl,Bg),e(vs,jg),e(vs,Tl),e(Tl,Eg),e(Be,Cg),e(Be,wl),e(wl,Pg),e(K,Sg),e(K,Xo),T(Ts,Xo,null),e(Xo,Ag),e(Xo,Ml),e(Ml,Og),e(K,Ig),e(K,Qo),T(ws,Qo,null),e(Qo,Ng),e(Qo,$l),e($l,Dg),b(o,Ap,_),b(o,Kt,_),e(Kt,Ho),e(Ho,xl),T(Ms,xl,null),e(Kt,Lg),e(Kt,zl),e(zl,Gg),b(o,Op,_),b(o,We,_),T($s,We,null),e(We,Wg),e(We,xs),e(xs,Rg),e(xs,Fi),e(Fi,Ug),e(xs,Xg),e(We,Qg),e(We,zs),e(zs,Hg),e(zs,Fs),e(Fs,Vg),e(zs,Jg),e(We,Kg),e(We,Ze),T(qs,Ze,null),e(Ze,Zg),e(Ze,Zt),e(Zt,Yg),e(Zt,qi),e(qi,eb),e(Zt,tb),e(Zt,Fl),e(Fl,ob),e(Zt,nb),e(Ze,ab),T(Vo,Ze,null),e(Ze,sb),T(Jo,Ze,null),b(o,Ip,_),b(o,Yt,_),e(Yt,Ko),e(Ko,ql),T(Bs,ql,null),e(Yt,rb),e(Yt,Bl),e(Bl,ib),b(o,Np,_),b(o,Re,_),T(js,Re,null),e(Re,db),e(Re,Es),e(Es,lb),e(Es,Bi),e(Bi,cb),e(Es,pb),e(Re,ub),e(Re,Cs),e(Cs,hb),e(Cs,Ps),e(Ps,mb),e(Cs,fb),e(Re,_b),e(Re,je),T(Ss,je,null),e(je,gb),e(je,eo),e(eo,bb),e(eo,ji),e(ji,kb),e(eo,yb),e(eo,jl),e(jl,vb),e(eo,Tb),e(je,wb),T(Zo,je,null),e(je,Mb),T(Yo,je,null),e(je,$b),T(en,je,null),b(o,Dp,_),b(o,to,_),e(to,tn),e(tn,El),T(As,El,null),e(to,xb),e(to,Cl),e(Cl,zb),b(o,Lp,_),b(o,we,_),T(Os,we,null),e(we,Fb),e(we,oo),e(oo,qb),e(oo,Pl),e(Pl,Bb),e(oo,jb),e(oo,Sl),e(Sl,Eb),e(oo,Cb),e(we,Pb),e(we,Is),e(Is,Sb),e(Is,Ei),e(Ei,Ab),e(Is,Ob),e(we,Ib),e(we,Ns),e(Ns,Nb),e(Ns,Ds),e(Ds,Db),e(Ns,Lb),e(we,Gb),e(we,Ee),T(Ls,Ee,null),e(Ee,Wb),e(Ee,no),e(no,Rb),e(no,Ci),e(Ci,Ub),e(no,Xb),e(no,Al),e(Al,Qb),e(no,Hb),e(Ee,Vb),T(on,Ee,null),e(Ee,Jb),T(nn,Ee,null),e(Ee,Kb),T(an,Ee,null),b(o,Gp,_),b(o,ao,_),e(ao,sn),e(sn,Ol),T(Gs,Ol,null),e(ao,Zb),e(ao,Il),e(Il,Yb),b(o,Wp,_),b(o,Me,_),T(Ws,Me,null),e(Me,ek),e(Me,Nl),e(Nl,tk),e(Me,ok),e(Me,Rs),e(Rs,nk),e(Rs,Pi),e(Pi,ak),e(Rs,sk),e(Me,rk),e(Me,Us),e(Us,ik),e(Us,Xs),e(Xs,dk),e(Us,lk),e(Me,ck),e(Me,Z),T(Qs,Z,null),e(Z,pk),e(Z,so),e(so,uk),e(so,Si),e(Si,hk),e(so,mk),e(so,Dl),e(Dl,fk),e(so,_k),e(Z,gk),T(rn,Z,null),e(Z,bk),T(dn,Z,null),e(Z,kk),T(ln,Z,null),e(Z,yk),T(cn,Z,null),e(Z,vk),T(pn,Z,null),b(o,Rp,_),b(o,ro,_),e(ro,un),e(un,Ll),T(Hs,Ll,null),e(ro,Tk),e(ro,Gl),e(Gl,wk),b(o,Up,_),b(o,io,_),T(Vs,io,null),e(io,Mk),e(io,hn),T(Js,hn,null),e(hn,$k),T(mn,hn,null),b(o,Xp,_),b(o,lo,_),e(lo,fn),e(fn,Wl),T(Ks,Wl,null),e(lo,xk),e(lo,Rl),e(Rl,zk),b(o,Qp,_),b(o,$e,_),T(Zs,$e,null),e($e,Fk),e($e,Ys),e(Ys,qk),e(Ys,Ai),e(Ai,Bk),e(Ys,jk),e($e,Ek),e($e,er),e(er,Ck),e(er,tr),e(tr,Pk),e(er,Sk),e($e,Ak),T(_n,$e,null),e($e,Ok),e($e,Ye),T(or,Ye,null),e(Ye,Ik),e(Ye,co),e(co,Nk),e(co,Oi),e(Oi,Dk),e(co,Lk),e(co,Ul),e(Ul,Gk),e(co,Wk),e(Ye,Rk),T(gn,Ye,null),e(Ye,Uk),T(bn,Ye,null),b(o,Hp,_),b(o,po,_),e(po,kn),e(kn,Xl),T(nr,Xl,null),e(po,Xk),e(po,Ql),e(Ql,Qk),b(o,Vp,_),b(o,xe,_),T(ar,xe,null),e(xe,Hk),e(xe,sr),e(sr,Vk),e(sr,Ii),e(Ii,Jk),e(sr,Kk),e(xe,Zk),e(xe,rr),e(rr,Yk),e(rr,ir),e(ir,ey),e(rr,ty),e(xe,oy),T(yn,xe,null),e(xe,ny),e(xe,Ce),T(dr,Ce,null),e(Ce,ay),e(Ce,uo),e(uo,sy),e(uo,Ni),e(Ni,ry),e(uo,iy),e(uo,Hl),e(Hl,dy),e(uo,ly),e(Ce,cy),T(vn,Ce,null),e(Ce,py),T(Tn,Ce,null),e(Ce,uy),T(wn,Ce,null),b(o,Jp,_),b(o,ho,_),e(ho,Mn),e(Mn,Vl),T(lr,Vl,null),e(ho,hy),e(ho,Jl),e(Jl,my),b(o,Kp,_),b(o,W,_),T(cr,W,null),e(W,fy),e(W,pr),e(pr,_y),e(pr,Di),e(Di,gy),e(pr,by),e(W,ky),e(W,ur),e(ur,yy),e(ur,hr),e(hr,vy),e(ur,Ty),e(W,wy),e(W,Kl),e(Kl,My),e(W,$y),e(W,mt),e(mt,Zl),e(Zl,mr),e(mr,xy),e(mt,zy),e(mt,Yl),e(Yl,fr),e(fr,Fy),e(mt,qy),e(mt,ec),e(ec,_r),e(_r,By),e(mt,jy),e(mt,tc),e(tc,gr),e(gr,Ey),e(W,Cy),e(W,et),T(br,et,null),e(et,Py),e(et,mo),e(mo,Sy),e(mo,oc),e(oc,Ay),e(mo,Oy),e(mo,nc),e(nc,Iy),e(mo,Ny),e(et,Dy),T($n,et,null),e(et,Ly),T(xn,et,null),e(W,Gy),e(W,zn),T(kr,zn,null),e(zn,Wy),T(Fn,zn,null),e(W,Ry),e(W,qn),T(yr,qn,null),e(qn,Uy),T(Bn,qn,null),b(o,Zp,_),b(o,fo,_),e(fo,jn),e(jn,ac),T(vr,ac,null),e(fo,Xy),e(fo,sc),e(sc,Qy),b(o,Yp,_),b(o,R,_),T(Tr,R,null),e(R,Hy),e(R,wr),e(wr,Vy),e(wr,Li),e(Li,Jy),e(wr,Ky),e(R,Zy),e(R,Mr),e(Mr,Yy),e(Mr,$r),e($r,ev),e(Mr,tv),e(R,ov),e(R,rc),e(rc,nv),e(R,av),e(R,ft),e(ft,ic),e(ic,xr),e(xr,sv),e(ft,rv),e(ft,dc),e(dc,zr),e(zr,iv),e(ft,dv),e(ft,lc),e(lc,Fr),e(Fr,lv),e(ft,cv),e(ft,cc),e(cc,qr),e(qr,pv),e(R,uv),e(R,Pe),T(Br,Pe,null),e(Pe,hv),e(Pe,_o),e(_o,mv),e(_o,pc),e(pc,fv),e(_o,_v),e(_o,uc),e(uc,gv),e(_o,bv),e(Pe,kv),T(En,Pe,null),e(Pe,yv),T(Cn,Pe,null),e(Pe,vv),T(Pn,Pe,null),e(R,Tv),e(R,Sn),T(jr,Sn,null),e(Sn,wv),T(An,Sn,null),e(R,Mv),e(R,On),T(Er,On,null),e(On,$v),T(In,On,null),b(o,eu,_),b(o,go,_),e(go,Nn),e(Nn,hc),T(Cr,hc,null),e(go,xv),e(go,mc),e(mc,zv),b(o,tu,_),b(o,N,_),T(Pr,N,null),e(N,Fv),e(N,fc),e(fc,qv),e(N,Bv),e(N,Sr),e(Sr,jv),e(Sr,Gi),e(Gi,Ev),e(Sr,Cv),e(N,Pv),e(N,Ar),e(Ar,Sv),e(Ar,Or),e(Or,Av),e(Ar,Ov),e(N,Iv),e(N,_c),e(_c,Nv),e(N,Dv),e(N,_t),e(_t,gc),e(gc,Ir),e(Ir,Lv),e(_t,Gv),e(_t,bc),e(bc,Nr),e(Nr,Wv),e(_t,Rv),e(_t,kc),e(kc,Dr),e(Dr,Uv),e(_t,Xv),e(_t,yc),e(yc,Lr),e(Lr,Qv),e(N,Hv),e(N,tt),T(Gr,tt,null),e(tt,Vv),e(tt,bo),e(bo,Jv),e(bo,vc),e(vc,Kv),e(bo,Zv),e(bo,Tc),e(Tc,Yv),e(bo,e1),e(tt,t1),T(Dn,tt,null),e(tt,o1),T(Ln,tt,null),e(N,n1),e(N,Gn),T(Wr,Gn,null),e(Gn,a1),T(Wn,Gn,null),e(N,s1),e(N,Rn),T(Rr,Rn,null),e(Rn,r1),T(Un,Rn,null),b(o,ou,_),b(o,ko,_),e(ko,Xn),e(Xn,wc),T(Ur,wc,null),e(ko,i1),e(ko,Mc),e(Mc,d1),b(o,nu,_),b(o,D,_),T(Xr,D,null),e(D,l1),e(D,yo),e(yo,c1),e(yo,$c),e($c,p1),e(yo,u1),e(yo,xc),e(xc,h1),e(yo,m1),e(D,f1),e(D,Qr),e(Qr,_1),e(Qr,Wi),e(Wi,g1),e(Qr,b1),e(D,k1),e(D,Hr),e(Hr,y1),e(Hr,Vr),e(Vr,v1),e(Hr,T1),e(D,w1),e(D,zc),e(zc,M1),e(D,$1),e(D,gt),e(gt,Fc),e(Fc,Jr),e(Jr,x1),e(gt,z1),e(gt,qc),e(qc,Kr),e(Kr,F1),e(gt,q1),e(gt,Bc),e(Bc,Zr),e(Zr,B1),e(gt,j1),e(gt,jc),e(jc,Yr),e(Yr,E1),e(D,C1),e(D,ot),T(ei,ot,null),e(ot,P1),e(ot,vo),e(vo,S1),e(vo,Ec),e(Ec,A1),e(vo,O1),e(vo,Cc),e(Cc,I1),e(vo,N1),e(ot,D1),T(Qn,ot,null),e(ot,L1),T(Hn,ot,null),e(D,G1),e(D,Vn),T(ti,Vn,null),e(Vn,W1),T(Jn,Vn,null),e(D,R1),e(D,Kn),T(oi,Kn,null),e(Kn,U1),T(Zn,Kn,null),au=!0},p(o,[_]){const ni={};_&2&&(ni.$$scope={dirty:_,ctx:o}),qo.$set(ni);const Pc={};_&2&&(Pc.$$scope={dirty:_,ctx:o}),jo.$set(Pc);const Sc={};_&2&&(Sc.$$scope={dirty:_,ctx:o}),Po.$set(Sc);const Ac={};_&2&&(Ac.$$scope={dirty:_,ctx:o}),No.$set(Ac);const Yn={};_&2&&(Yn.$$scope={dirty:_,ctx:o}),Uo.$set(Yn);const Oc={};_&2&&(Oc.$$scope={dirty:_,ctx:o}),Vo.$set(Oc);const Ic={};_&2&&(Ic.$$scope={dirty:_,ctx:o}),Jo.$set(Ic);const ai={};_&2&&(ai.$$scope={dirty:_,ctx:o}),Zo.$set(ai);const Nc={};_&2&&(Nc.$$scope={dirty:_,ctx:o}),Yo.$set(Nc);const Dc={};_&2&&(Dc.$$scope={dirty:_,ctx:o}),en.$set(Dc);const Lc={};_&2&&(Lc.$$scope={dirty:_,ctx:o}),on.$set(Lc);const si={};_&2&&(si.$$scope={dirty:_,ctx:o}),nn.$set(si);const Gc={};_&2&&(Gc.$$scope={dirty:_,ctx:o}),an.$set(Gc);const Wc={};_&2&&(Wc.$$scope={dirty:_,ctx:o}),rn.$set(Wc);const ea={};_&2&&(ea.$$scope={dirty:_,ctx:o}),dn.$set(ea);const Rc={};_&2&&(Rc.$$scope={dirty:_,ctx:o}),ln.$set(Rc);const Uc={};_&2&&(Uc.$$scope={dirty:_,ctx:o}),cn.$set(Uc);const ri={};_&2&&(ri.$$scope={dirty:_,ctx:o}),pn.$set(ri);const Xc={};_&2&&(Xc.$$scope={dirty:_,ctx:o}),mn.$set(Xc);const Qc={};_&2&&(Qc.$$scope={dirty:_,ctx:o}),_n.$set(Qc);const Hc={};_&2&&(Hc.$$scope={dirty:_,ctx:o}),gn.$set(Hc);const Ue={};_&2&&(Ue.$$scope={dirty:_,ctx:o}),bn.$set(Ue);const Vc={};_&2&&(Vc.$$scope={dirty:_,ctx:o}),yn.$set(Vc);const Jc={};_&2&&(Jc.$$scope={dirty:_,ctx:o}),vn.$set(Jc);const Kc={};_&2&&(Kc.$$scope={dirty:_,ctx:o}),Tn.$set(Kc);const Zc={};_&2&&(Zc.$$scope={dirty:_,ctx:o}),wn.$set(Zc);const To={};_&2&&(To.$$scope={dirty:_,ctx:o}),$n.$set(To);const Ri={};_&2&&(Ri.$$scope={dirty:_,ctx:o}),xn.$set(Ri);const Yc={};_&2&&(Yc.$$scope={dirty:_,ctx:o}),Fn.$set(Yc);const ep={};_&2&&(ep.$$scope={dirty:_,ctx:o}),Bn.$set(ep);const tp={};_&2&&(tp.$$scope={dirty:_,ctx:o}),En.$set(tp);const op={};_&2&&(op.$$scope={dirty:_,ctx:o}),Cn.$set(op);const np={};_&2&&(np.$$scope={dirty:_,ctx:o}),Pn.$set(np);const ii={};_&2&&(ii.$$scope={dirty:_,ctx:o}),An.$set(ii);const ap={};_&2&&(ap.$$scope={dirty:_,ctx:o}),In.$set(ap);const wo={};_&2&&(wo.$$scope={dirty:_,ctx:o}),Dn.$set(wo);const sp={};_&2&&(sp.$$scope={dirty:_,ctx:o}),Ln.$set(sp);const rp={};_&2&&(rp.$$scope={dirty:_,ctx:o}),Wn.$set(rp);const di={};_&2&&(di.$$scope={dirty:_,ctx:o}),Un.$set(di);const ip={};_&2&&(ip.$$scope={dirty:_,ctx:o}),Qn.$set(ip);const dp={};_&2&&(dp.$$scope={dirty:_,ctx:o}),Hn.$set(dp);const lp={};_&2&&(lp.$$scope={dirty:_,ctx:o}),Jn.$set(lp);const Mo={};_&2&&(Mo.$$scope={dirty:_,ctx:o}),Zn.$set(Mo)},i(o){au||(w(n.$$.fragment,o),w(ne.$$.fragment,o),w(De.$$.fragment,o),w(ba.$$.fragment,o),w(ya.$$.fragment,o),w(va.$$.fragment,o),w(wa.$$.fragment,o),w(Ma.$$.fragment,o),w(xa.$$.fragment,o),w(za.$$.fragment,o),w(Fa.$$.fragment,o),w(qo.$$.fragment,o),w(Ba.$$.fragment,o),w(ja.$$.fragment,o),w(jo.$$.fragment,o),w(Pa.$$.fragment,o),w(Sa.$$.fragment,o),w(Da.$$.fragment,o),w(La.$$.fragment,o),w(Po.$$.fragment,o),w(Ra.$$.fragment,o),w(Va.$$.fragment,o),w(Ja.$$.fragment,o),w(Ka.$$.fragment,o),w(Za.$$.fragment,o),w(Ya.$$.fragment,o),w(No.$$.fragment,o),w(ns.$$.fragment,o),w(ds.$$.fragment,o),w(ls.$$.fragment,o),w(ps.$$.fragment,o),w(us.$$.fragment,o),w(hs.$$.fragment,o),w(ms.$$.fragment,o),w(Uo.$$.fragment,o),w(gs.$$.fragment,o),w(Ts.$$.fragment,o),w(ws.$$.fragment,o),w(Ms.$$.fragment,o),w($s.$$.fragment,o),w(qs.$$.fragment,o),w(Vo.$$.fragment,o),w(Jo.$$.fragment,o),w(Bs.$$.fragment,o),w(js.$$.fragment,o),w(Ss.$$.fragment,o),w(Zo.$$.fragment,o),w(Yo.$$.fragment,o),w(en.$$.fragment,o),w(As.$$.fragment,o),w(Os.$$.fragment,o),w(Ls.$$.fragment,o),w(on.$$.fragment,o),w(nn.$$.fragment,o),w(an.$$.fragment,o),w(Gs.$$.fragment,o),w(Ws.$$.fragment,o),w(Qs.$$.fragment,o),w(rn.$$.fragment,o),w(dn.$$.fragment,o),w(ln.$$.fragment,o),w(cn.$$.fragment,o),w(pn.$$.fragment,o),w(Hs.$$.fragment,o),w(Vs.$$.fragment,o),w(Js.$$.fragment,o),w(mn.$$.fragment,o),w(Ks.$$.fragment,o),w(Zs.$$.fragment,o),w(_n.$$.fragment,o),w(or.$$.fragment,o),w(gn.$$.fragment,o),w(bn.$$.fragment,o),w(nr.$$.fragment,o),w(ar.$$.fragment,o),w(yn.$$.fragment,o),w(dr.$$.fragment,o),w(vn.$$.fragment,o),w(Tn.$$.fragment,o),w(wn.$$.fragment,o),w(lr.$$.fragment,o),w(cr.$$.fragment,o),w(br.$$.fragment,o),w($n.$$.fragment,o),w(xn.$$.fragment,o),w(kr.$$.fragment,o),w(Fn.$$.fragment,o),w(yr.$$.fragment,o),w(Bn.$$.fragment,o),w(vr.$$.fragment,o),w(Tr.$$.fragment,o),w(Br.$$.fragment,o),w(En.$$.fragment,o),w(Cn.$$.fragment,o),w(Pn.$$.fragment,o),w(jr.$$.fragment,o),w(An.$$.fragment,o),w(Er.$$.fragment,o),w(In.$$.fragment,o),w(Cr.$$.fragment,o),w(Pr.$$.fragment,o),w(Gr.$$.fragment,o),w(Dn.$$.fragment,o),w(Ln.$$.fragment,o),w(Wr.$$.fragment,o),w(Wn.$$.fragment,o),w(Rr.$$.fragment,o),w(Un.$$.fragment,o),w(Ur.$$.fragment,o),w(Xr.$$.fragment,o),w(ei.$$.fragment,o),w(Qn.$$.fragment,o),w(Hn.$$.fragment,o),w(ti.$$.fragment,o),w(Jn.$$.fragment,o),w(oi.$$.fragment,o),w(Zn.$$.fragment,o),au=!0)},o(o){M(n.$$.fragment,o),M(ne.$$.fragment,o),M(De.$$.fragment,o),M(ba.$$.fragment,o),M(ya.$$.fragment,o),M(va.$$.fragment,o),M(wa.$$.fragment,o),M(Ma.$$.fragment,o),M(xa.$$.fragment,o),M(za.$$.fragment,o),M(Fa.$$.fragment,o),M(qo.$$.fragment,o),M(Ba.$$.fragment,o),M(ja.$$.fragment,o),M(jo.$$.fragment,o),M(Pa.$$.fragment,o),M(Sa.$$.fragment,o),M(Da.$$.fragment,o),M(La.$$.fragment,o),M(Po.$$.fragment,o),M(Ra.$$.fragment,o),M(Va.$$.fragment,o),M(Ja.$$.fragment,o),M(Ka.$$.fragment,o),M(Za.$$.fragment,o),M(Ya.$$.fragment,o),M(No.$$.fragment,o),M(ns.$$.fragment,o),M(ds.$$.fragment,o),M(ls.$$.fragment,o),M(ps.$$.fragment,o),M(us.$$.fragment,o),M(hs.$$.fragment,o),M(ms.$$.fragment,o),M(Uo.$$.fragment,o),M(gs.$$.fragment,o),M(Ts.$$.fragment,o),M(ws.$$.fragment,o),M(Ms.$$.fragment,o),M($s.$$.fragment,o),M(qs.$$.fragment,o),M(Vo.$$.fragment,o),M(Jo.$$.fragment,o),M(Bs.$$.fragment,o),M(js.$$.fragment,o),M(Ss.$$.fragment,o),M(Zo.$$.fragment,o),M(Yo.$$.fragment,o),M(en.$$.fragment,o),M(As.$$.fragment,o),M(Os.$$.fragment,o),M(Ls.$$.fragment,o),M(on.$$.fragment,o),M(nn.$$.fragment,o),M(an.$$.fragment,o),M(Gs.$$.fragment,o),M(Ws.$$.fragment,o),M(Qs.$$.fragment,o),M(rn.$$.fragment,o),M(dn.$$.fragment,o),M(ln.$$.fragment,o),M(cn.$$.fragment,o),M(pn.$$.fragment,o),M(Hs.$$.fragment,o),M(Vs.$$.fragment,o),M(Js.$$.fragment,o),M(mn.$$.fragment,o),M(Ks.$$.fragment,o),M(Zs.$$.fragment,o),M(_n.$$.fragment,o),M(or.$$.fragment,o),M(gn.$$.fragment,o),M(bn.$$.fragment,o),M(nr.$$.fragment,o),M(ar.$$.fragment,o),M(yn.$$.fragment,o),M(dr.$$.fragment,o),M(vn.$$.fragment,o),M(Tn.$$.fragment,o),M(wn.$$.fragment,o),M(lr.$$.fragment,o),M(cr.$$.fragment,o),M(br.$$.fragment,o),M($n.$$.fragment,o),M(xn.$$.fragment,o),M(kr.$$.fragment,o),M(Fn.$$.fragment,o),M(yr.$$.fragment,o),M(Bn.$$.fragment,o),M(vr.$$.fragment,o),M(Tr.$$.fragment,o),M(Br.$$.fragment,o),M(En.$$.fragment,o),M(Cn.$$.fragment,o),M(Pn.$$.fragment,o),M(jr.$$.fragment,o),M(An.$$.fragment,o),M(Er.$$.fragment,o),M(In.$$.fragment,o),M(Cr.$$.fragment,o),M(Pr.$$.fragment,o),M(Gr.$$.fragment,o),M(Dn.$$.fragment,o),M(Ln.$$.fragment,o),M(Wr.$$.fragment,o),M(Wn.$$.fragment,o),M(Rr.$$.fragment,o),M(Un.$$.fragment,o),M(Ur.$$.fragment,o),M(Xr.$$.fragment,o),M(ei.$$.fragment,o),M(Qn.$$.fragment,o),M(Hn.$$.fragment,o),M(ti.$$.fragment,o),M(Jn.$$.fragment,o),M(oi.$$.fragment,o),M(Zn.$$.fragment,o),au=!1},d(o){t(l),o&&t(k),o&&t(m),$(n),o&&t(ze),o&&t(E),o&&t(Xe),o&&t(Q),$(ne),o&&t(le),o&&t(ce),o&&t(G),o&&t(Fe),o&&t(Qe),o&&t(ae),o&&t(He),o&&t(z),$(De),o&&t(bt),o&&t(X),o&&t(cp),o&&t(kt),o&&t(pp),o&&t(pi),o&&t(up),$(ba,o),o&&t(hp),o&&t(ui),o&&t(mp),$(ya,o),o&&t(fp),o&&t(Dt),$(va),o&&t(_p),o&&t(yt),o&&t(gp),o&&t(hi),o&&t(bp),o&&t(mi),o&&t(kp),o&&t(Lt),$(wa),o&&t(yp),o&&t(Ve),o&&t(vp),o&&t(zo),o&&t(Tp),o&&t(_i),o&&t(wp),$(Ma,o),o&&t(Mp),o&&t(gi),o&&t($p),$(xa,o),o&&t(xp),o&&t(Gt),$(za),o&&t(zp),o&&t(Ge),$(Fa),$(qo),o&&t(Fp),o&&t(Ut),$(Ba),o&&t(qp),o&&t(J),$(ja),$(jo),$(Pa),$(Sa),o&&t(Bp),o&&t(Xt),$(Da),o&&t(jp),o&&t(O),$(La),$(Po),$(Ra),$(Va),$(Ja),$(Ka),o&&t(Ep),o&&t(Ht),$(Za),o&&t(Cp),o&&t(I),$(Ya),$(No),$(ns),$(ds),$(ls),$(ps),$(us),o&&t(Pp),o&&t(Vt),$(hs),o&&t(Sp),o&&t(K),$(ms),$(Uo),$(gs),$(Ts),$(ws),o&&t(Ap),o&&t(Kt),$(Ms),o&&t(Op),o&&t(We),$($s),$(qs),$(Vo),$(Jo),o&&t(Ip),o&&t(Yt),$(Bs),o&&t(Np),o&&t(Re),$(js),$(Ss),$(Zo),$(Yo),$(en),o&&t(Dp),o&&t(to),$(As),o&&t(Lp),o&&t(we),$(Os),$(Ls),$(on),$(nn),$(an),o&&t(Gp),o&&t(ao),$(Gs),o&&t(Wp),o&&t(Me),$(Ws),$(Qs),$(rn),$(dn),$(ln),$(cn),$(pn),o&&t(Rp),o&&t(ro),$(Hs),o&&t(Up),o&&t(io),$(Vs),$(Js),$(mn),o&&t(Xp),o&&t(lo),$(Ks),o&&t(Qp),o&&t($e),$(Zs),$(_n),$(or),$(gn),$(bn),o&&t(Hp),o&&t(po),$(nr),o&&t(Vp),o&&t(xe),$(ar),$(yn),$(dr),$(vn),$(Tn),$(wn),o&&t(Jp),o&&t(ho),$(lr),o&&t(Kp),o&&t(W),$(cr),$(br),$($n),$(xn),$(kr),$(Fn),$(yr),$(Bn),o&&t(Zp),o&&t(fo),$(vr),o&&t(Yp),o&&t(R),$(Tr),$(Br),$(En),$(Cn),$(Pn),$(jr),$(An),$(Er),$(In),o&&t(eu),o&&t(go),$(Cr),o&&t(tu),o&&t(N),$(Pr),$(Gr),$(Dn),$(Ln),$(Wr),$(Wn),$(Rr),$(Un),o&&t(ou),o&&t(ko),$(Ur),o&&t(nu),o&&t(D),$(Xr),$(ei),$(Qn),$(Hn),$(ti),$(Jn),$(oi),$(Zn)}}}const Ex={local:"mbart-and-mbart50",sections:[{local:"overview-of-mbart",sections:[{local:"training-of-mbart",title:"Training of MBart"}],title:"Overview of MBart"},{local:"overview-of-mbart50",sections:[{local:"training-of-mbart50",title:"Training of MBart-50"}],title:"Overview of MBart-50"},{local:"transformers.MBartConfig",title:"MBartConfig"},{local:"transformers.MBartTokenizer",title:"MBartTokenizer"},{local:"transformers.MBartTokenizerFast",title:"MBartTokenizerFast"},{local:"transformers.MBart50Tokenizer",title:"MBart50Tokenizer"},{local:"transformers.MBart50TokenizerFast",title:"MBart50TokenizerFast"},{local:"transformers.MBartModel",title:"MBartModel"},{local:"transformers.MBartForConditionalGeneration",title:"MBartForConditionalGeneration"},{local:"transformers.MBartForQuestionAnswering",title:"MBartForQuestionAnswering"},{local:"transformers.MBartForSequenceClassification",title:"MBartForSequenceClassification"},{local:"transformers.MBartForCausalLM",title:"MBartForCausalLM"},{local:"transformers.TFMBartModel",title:"TFMBartModel"},{local:"transformers.TFMBartForConditionalGeneration",title:"TFMBartForConditionalGeneration"},{local:"transformers.FlaxMBartModel",title:"FlaxMBartModel"},{local:"transformers.FlaxMBartForConditionalGeneration",title:"FlaxMBartForConditionalGeneration"},{local:"transformers.FlaxMBartForSequenceClassification",title:"FlaxMBartForSequenceClassification"},{local:"transformers.FlaxMBartForQuestionAnswering",title:"FlaxMBartForQuestionAnswering"}],title:"MBart and MBart-50"};function Cx(x){return L$(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Dx extends O${constructor(l){super();I$(this,l,Cx,jx,N$,{})}}export{Dx as default,Ex as metadata};
