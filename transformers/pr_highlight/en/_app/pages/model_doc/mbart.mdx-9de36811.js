import{S as Ox,i as Ix,s as Nx,e as a,k as p,w as y,t as i,M as Dx,c as s,d as t,m as h,a as r,x as v,h as d,b as f,F as e,g as b,y as T,q as w,o as M,B as $,v as Lx,L as P}from"../../chunks/vendor-6b77c823.js";import{T as at}from"../../chunks/Tip-39098574.js";import{D as F}from"../../chunks/Docstring-1088f2fb.js";import{C as B}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as U}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as C}from"../../chunks/ExampleCodeBlock-5212b321.js";function Gx(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartModel, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Wx(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),{c(){l=a("p"),k=i("Examples:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Examples:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Rx(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizerFast

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
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),{c(){l=a("p"),k=i("Examples:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Examples:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Ux(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBart50Tokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),{c(){l=a("p"),k=i("Examples:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Examples:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Xx(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBart50TokenizerFast

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),{c(){l=a("p"),k=i("Examples:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Examples:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Qx(x){let l,k,m,c,_;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){b(n,l,u),e(l,k),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function Hx(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Vx(x){let l,k,m,c,_;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){b(n,l,u),e(l,k),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function Jx(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

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
<span class="hljs-string">&#x27;42 este r\u0103spuns&#x27;</span>`}}),{c(){l=a("p"),k=i("Translation example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Translation example:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Kx(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

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
[<span class="hljs-string">&#x27;nett&#x27;</span>, <span class="hljs-string">&#x27;sehr&#x27;</span>, <span class="hljs-string">&#x27;ganz&#x27;</span>, <span class="hljs-string">&#x27;nicht&#x27;</span>, <span class="hljs-string">&#x27;so&#x27;</span>]`}}),{c(){l=a("p"),k=i("Mask filling example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Mask filling example:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function Zx(x){let l,k,m,c,_;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){b(n,l,u),e(l,k),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function Yx(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartForQuestionAnswering
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
[<span class="hljs-number">1</span>, <span class="hljs-number">16</span>]`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function e1(x){let l,k;return l=new B({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">3.04</span>`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,c){T(l,m,c),k=!0},p:P,i(m){k||(w(l.$$.fragment,m),k=!0)},o(m){M(l.$$.fragment,m),k=!1},d(m){$(l,m)}}}function t1(x){let l,k,m,c,_;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){b(n,l,u),e(l,k),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function o1(x){let l,k,m,c,_;return c=new B({props:{code:`import torch
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
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]`}}),{c(){l=a("p"),k=i("Example of single-label classification:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example of single-label classification:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function n1(x){let l,k;return l=new B({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,c){T(l,m,c),k=!0},p:P,i(m){k||(w(l.$$.fragment,m),k=!0)},o(m){M(l.$$.fragment,m),k=!1},d(m){$(l,m)}}}function a1(x){let l,k,m,c,_;return c=new B({props:{code:`import torch
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
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]`}}),{c(){l=a("p"),k=i("Example of multi-label classification:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example of multi-label classification:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function s1(x){let l,k;return l=new B({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,c){T(l,m,c),k=!0},p:P,i(m){k||(w(l.$$.fragment,m),k=!0)},o(m){M(l.$$.fragment,m),k=!1},d(m){$(l,m)}}}function r1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, MBartForCausalLM

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
<span class="hljs-literal">True</span>`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function i1(x){let l,k,m,c,_,n,u,q,st,ze,E,Ie,ue,rt,me,fe,it,Xe,Q,L,Ne,ne,S,A,dt,le,ce,lt,H,ct,pt,G,Fe,ge,Qe,ae,_e,be,ht,se,ke,ye,He;return{c(){l=a("p"),k=i("TF 2.0 models accepts two formats as inputs:"),m=p(),c=a("ul"),_=a("li"),n=i("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),q=a("li"),st=i("having all inputs as a list, tuple or dict in the first positional arguments."),ze=p(),E=a("p"),Ie=i("This second option is useful when using "),ue=a("code"),rt=i("tf.keras.Model.fit"),me=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),fe=a("code"),it=i("model(inputs)"),Xe=i("."),Q=p(),L=a("p"),Ne=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ne=p(),S=a("ul"),A=a("li"),dt=i("a single Tensor with "),le=a("code"),ce=i("input_ids"),lt=i(" only and nothing else: "),H=a("code"),ct=i("model(input_ids)"),pt=p(),G=a("li"),Fe=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ge=a("code"),Qe=i("model([input_ids, attention_mask])"),ae=i(" or "),_e=a("code"),be=i("model([input_ids, attention_mask, token_type_ids])"),ht=p(),se=a("li"),ke=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=a("code"),He=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){l=s(z,"P",{});var j=r(l);k=d(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),m=h(z),c=s(z,"UL",{});var ve=r(c);_=s(ve,"LI",{});var De=r(_);n=d(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(t),u=h(ve),q=s(ve,"LI",{});var Et=r(q);st=d(Et,"having all inputs as a list, tuple or dict in the first positional arguments."),Et.forEach(t),ve.forEach(t),ze=h(z),E=s(z,"P",{});var V=r(E);Ie=d(V,"This second option is useful when using "),ue=s(V,"CODE",{});var Ct=r(ue);rt=d(Ct,"tf.keras.Model.fit"),Ct.forEach(t),me=d(V,` method which currently requires having all the
tensors in the first argument of the model call function: `),fe=s(V,"CODE",{});var bt=r(fe);it=d(bt,"model(inputs)"),bt.forEach(t),Xe=d(V,"."),V.forEach(t),Q=h(z),L=s(z,"P",{});var X=r(L);Ne=d(X,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X.forEach(t),ne=h(z),S=s(z,"UL",{});var re=r(S);A=s(re,"LI",{});var ie=r(A);dt=d(ie,"a single Tensor with "),le=s(ie,"CODE",{});var Pt=r(le);ce=d(Pt,"input_ids"),Pt.forEach(t),lt=d(ie," only and nothing else: "),H=s(ie,"CODE",{});var St=r(H);ct=d(St,"model(input_ids)"),St.forEach(t),ie.forEach(t),pt=h(re),G=s(re,"LI",{});var de=r(G);Fe=d(de,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ge=s(de,"CODE",{});var At=r(ge);Qe=d(At,"model([input_ids, attention_mask])"),At.forEach(t),ae=d(de," or "),_e=s(de,"CODE",{});var Ot=r(_e);be=d(Ot,"model([input_ids, attention_mask, token_type_ids])"),Ot.forEach(t),de.forEach(t),ht=h(re),se=s(re,"LI",{});var Le=r(se);ke=d(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=s(Le,"CODE",{});var It=r(ye);He=d(It,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),It.forEach(t),Le.forEach(t),re.forEach(t)},m(z,j){b(z,l,j),e(l,k),b(z,m,j),b(z,c,j),e(c,_),e(_,n),e(c,u),e(c,q),e(q,st),b(z,ze,j),b(z,E,j),e(E,Ie),e(E,ue),e(ue,rt),e(E,me),e(E,fe),e(fe,it),e(E,Xe),b(z,Q,j),b(z,L,j),e(L,Ne),b(z,ne,j),b(z,S,j),e(S,A),e(A,dt),e(A,le),e(le,ce),e(A,lt),e(A,H),e(H,ct),e(S,pt),e(S,G),e(G,Fe),e(G,ge),e(ge,Qe),e(G,ae),e(G,_e),e(_e,be),e(S,ht),e(S,se),e(se,ke),e(se,ye),e(ye,He)},d(z){z&&t(l),z&&t(m),z&&t(c),z&&t(ze),z&&t(E),z&&t(Q),z&&t(L),z&&t(ne),z&&t(S)}}}function d1(x){let l,k,m,c,_;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){b(n,l,u),e(l,k),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function l1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, TFMBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function c1(x){let l,k,m,c,_,n,u,q,st,ze,E,Ie,ue,rt,me,fe,it,Xe,Q,L,Ne,ne,S,A,dt,le,ce,lt,H,ct,pt,G,Fe,ge,Qe,ae,_e,be,ht,se,ke,ye,He;return{c(){l=a("p"),k=i("TF 2.0 models accepts two formats as inputs:"),m=p(),c=a("ul"),_=a("li"),n=i("having all inputs as keyword arguments (like PyTorch models), or"),u=p(),q=a("li"),st=i("having all inputs as a list, tuple or dict in the first positional arguments."),ze=p(),E=a("p"),Ie=i("This second option is useful when using "),ue=a("code"),rt=i("tf.keras.Model.fit"),me=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),fe=a("code"),it=i("model(inputs)"),Xe=i("."),Q=p(),L=a("p"),Ne=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ne=p(),S=a("ul"),A=a("li"),dt=i("a single Tensor with "),le=a("code"),ce=i("input_ids"),lt=i(" only and nothing else: "),H=a("code"),ct=i("model(input_ids)"),pt=p(),G=a("li"),Fe=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ge=a("code"),Qe=i("model([input_ids, attention_mask])"),ae=i(" or "),_e=a("code"),be=i("model([input_ids, attention_mask, token_type_ids])"),ht=p(),se=a("li"),ke=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=a("code"),He=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){l=s(z,"P",{});var j=r(l);k=d(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),m=h(z),c=s(z,"UL",{});var ve=r(c);_=s(ve,"LI",{});var De=r(_);n=d(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(t),u=h(ve),q=s(ve,"LI",{});var Et=r(q);st=d(Et,"having all inputs as a list, tuple or dict in the first positional arguments."),Et.forEach(t),ve.forEach(t),ze=h(z),E=s(z,"P",{});var V=r(E);Ie=d(V,"This second option is useful when using "),ue=s(V,"CODE",{});var Ct=r(ue);rt=d(Ct,"tf.keras.Model.fit"),Ct.forEach(t),me=d(V,` method which currently requires having all the
tensors in the first argument of the model call function: `),fe=s(V,"CODE",{});var bt=r(fe);it=d(bt,"model(inputs)"),bt.forEach(t),Xe=d(V,"."),V.forEach(t),Q=h(z),L=s(z,"P",{});var X=r(L);Ne=d(X,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X.forEach(t),ne=h(z),S=s(z,"UL",{});var re=r(S);A=s(re,"LI",{});var ie=r(A);dt=d(ie,"a single Tensor with "),le=s(ie,"CODE",{});var Pt=r(le);ce=d(Pt,"input_ids"),Pt.forEach(t),lt=d(ie," only and nothing else: "),H=s(ie,"CODE",{});var St=r(H);ct=d(St,"model(input_ids)"),St.forEach(t),ie.forEach(t),pt=h(re),G=s(re,"LI",{});var de=r(G);Fe=d(de,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ge=s(de,"CODE",{});var At=r(ge);Qe=d(At,"model([input_ids, attention_mask])"),At.forEach(t),ae=d(de," or "),_e=s(de,"CODE",{});var Ot=r(_e);be=d(Ot,"model([input_ids, attention_mask, token_type_ids])"),Ot.forEach(t),de.forEach(t),ht=h(re),se=s(re,"LI",{});var Le=r(se);ke=d(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=s(Le,"CODE",{});var It=r(ye);He=d(It,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),It.forEach(t),Le.forEach(t),re.forEach(t)},m(z,j){b(z,l,j),e(l,k),b(z,m,j),b(z,c,j),e(c,_),e(_,n),e(c,u),e(c,q),e(q,st),b(z,ze,j),b(z,E,j),e(E,Ie),e(E,ue),e(ue,rt),e(E,me),e(E,fe),e(fe,it),e(E,Xe),b(z,Q,j),b(z,L,j),e(L,Ne),b(z,ne,j),b(z,S,j),e(S,A),e(A,dt),e(A,le),e(le,ce),e(A,lt),e(A,H),e(H,ct),e(S,pt),e(S,G),e(G,Fe),e(G,ge),e(ge,Qe),e(G,ae),e(G,_e),e(_e,be),e(S,ht),e(S,se),e(se,ke),e(se,ye),e(ye,He)},d(z){z&&t(l),z&&t(m),z&&t(c),z&&t(ze),z&&t(E),z&&t(Q),z&&t(L),z&&t(ne),z&&t(S)}}}function p1(x){let l,k,m,c,_;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){b(n,l,u),e(l,k),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function h1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=a("p"),k=i("Summarization example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Summarization example:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function u1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){l=a("p"),k=i("Mask filling example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Mask filling example:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function m1(x){let l,k,m,c,_;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){b(n,l,u),e(l,k),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function f1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartModel

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function g1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function _1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function b1(x){let l,k,m,c,_;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){b(n,l,u),e(l,k),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function k1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=a("p"),k=i("Summarization example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Summarization example:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function y1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),{c(){l=a("p"),k=i("Mask filling example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Mask filling example:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function v1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function T1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function w1(x){let l,k,m,c,_;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){b(n,l,u),e(l,k),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function M1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function $1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function x1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function z1(x){let l,k,m,c,_;return{c(){l=a("p"),k=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),c=i("Module"),_=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(u,"CODE",{});var q=r(m);c=d(q,"Module"),q.forEach(t),_=d(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(n,u){b(n,l,u),e(l,k),e(l,m),e(m,c),e(l,_)},d(n){n&&t(l)}}}function F1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function q1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function B1(x){let l,k,m,c,_;return c=new B({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),k=i("Example:"),m=p(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var u=r(l);k=d(u,"Example:"),u.forEach(t),m=h(n),v(c.$$.fragment,n)},m(n,u){b(n,l,u),e(l,k),b(n,m,u),T(c,n,u),_=!0},p:P,i(n){_||(w(c.$$.fragment,n),_=!0)},o(n){M(c.$$.fragment,n),_=!1},d(n){n&&t(l),n&&t(m),$(c,n)}}}function j1(x){let l,k,m,c,_,n,u,q,st,ze,E,Ie,ue,rt,me,fe,it,Xe,Q,L,Ne,ne,S,A,dt,le,ce,lt,H,ct,pt,G,Fe,ge,Qe,ae,_e,be,ht,se,ke,ye,He,z,j,ve,De,Et,V,Ct,bt,X,re,ie,Pt,St,de,At,Ot,Le,It,Eu,id,Cu,Pu,cp,kt,Su,_a,dd,Au,Ou,Iu,ci,Nu,Du,pp,pi,ld,Lu,hp,ba,up,hi,ka,cd,Gu,Wu,Nt,Ru,pd,Uu,Xu,hd,Qu,Hu,mp,ya,fp,Dt,$o,ud,va,Vu,md,Ju,gp,yt,Ku,Ta,Zu,Yu,fd,em,tm,_p,ui,om,bp,mi,gd,nm,kp,Lt,xo,_d,wa,am,bd,sm,yp,Ve,rm,kd,im,dm,yd,lm,cm,vd,pm,hm,vp,zo,um,fi,mm,fm,Tp,gi,Td,gm,wp,Ma,Mp,_i,$a,wd,_m,bm,Te,km,Md,ym,vm,$d,Tm,wm,xd,Mm,$m,zd,xm,zm,Fd,Fm,qm,$p,xa,xp,Gt,Fo,qd,za,Bm,Bd,jm,zp,Ge,Fa,Em,Wt,Cm,bi,Pm,Sm,qa,Am,Om,Im,Rt,Nm,ki,Dm,Lm,yi,Gm,Wm,Rm,qo,Fp,Ut,Bo,jd,Ba,Um,Ed,Xm,qp,J,ja,Qm,Cd,Hm,Vm,ut,Jm,vi,Km,Zm,Ti,Ym,ef,Ea,tf,of,nf,Ca,af,Pd,sf,rf,df,jo,lf,Eo,Pa,cf,Sd,pf,hf,Je,Sa,uf,Aa,mf,Ad,ff,gf,_f,Oa,Ia,Od,bf,kf,Id,yf,vf,Na,Nd,Tf,wf,Dd,Mf,$f,Ld,xf,Bp,Xt,Co,Gd,Da,zf,Wd,Ff,jp,O,La,qf,Qt,Bf,Rd,jf,Ef,Ga,Cf,Pf,Sf,vt,wi,Af,Of,Mi,If,Nf,$i,Df,Lf,Gf,Wa,Wf,Ud,Rf,Uf,Xf,Po,Qf,qe,Ra,Hf,Xd,Vf,Jf,Ua,Kf,Qd,Zf,Yf,eg,Xa,Qa,Hd,tg,og,Vd,ng,ag,Ha,Jd,sg,rg,Kd,ig,dg,Zd,lg,cg,So,Va,pg,Yd,hg,ug,Ao,Ja,mg,el,fg,gg,Oo,Ka,_g,tl,bg,Ep,Ht,Io,ol,Za,kg,nl,yg,Cp,I,Ya,vg,es,Tg,ts,wg,Mg,$g,os,xg,xi,zg,Fg,qg,No,Bg,Ke,ns,jg,as,Eg,al,Cg,Pg,Sg,ss,rs,sl,Ag,Og,rl,Ig,Ng,is,il,Dg,Lg,dl,Gg,Wg,ll,Rg,Ug,Do,ds,Xg,cl,Qg,Hg,Lo,ls,Vg,cs,Jg,pl,Kg,Zg,Yg,Go,ps,e_,hl,t_,o_,Wo,hs,n_,ul,a_,Pp,Vt,Ro,ml,us,s_,fl,r_,Sp,K,ms,i_,Jt,d_,gl,l_,c_,fs,p_,h_,u_,gs,m_,zi,f_,g_,__,Uo,b_,Be,_s,k_,_l,y_,v_,bs,T_,bl,w_,M_,$_,ks,ys,kl,x_,z_,yl,F_,q_,vs,vl,B_,j_,Tl,E_,C_,wl,P_,S_,Xo,Ts,A_,Ml,O_,I_,Qo,ws,N_,$l,D_,Ap,Kt,Ho,xl,Ms,L_,zl,G_,Op,We,$s,W_,xs,R_,Fi,U_,X_,Q_,zs,H_,Fs,V_,J_,K_,Ze,qs,Z_,Zt,Y_,qi,eb,tb,Fl,ob,nb,ab,Vo,sb,Jo,Ip,Yt,Ko,ql,Bs,rb,Bl,ib,Np,Re,js,db,Es,lb,Bi,cb,pb,hb,Cs,ub,Ps,mb,fb,gb,je,Ss,_b,eo,bb,ji,kb,yb,jl,vb,Tb,wb,Zo,Mb,Yo,$b,en,Dp,to,tn,El,As,xb,Cl,zb,Lp,we,Os,Fb,oo,qb,Pl,Bb,jb,Sl,Eb,Cb,Pb,Is,Sb,Ei,Ab,Ob,Ib,Ns,Nb,Ds,Db,Lb,Gb,Ee,Ls,Wb,no,Rb,Ci,Ub,Xb,Al,Qb,Hb,Vb,on,Jb,nn,Kb,an,Gp,ao,sn,Ol,Gs,Zb,Il,Yb,Wp,Me,Ws,ek,Nl,tk,ok,Rs,nk,Pi,ak,sk,rk,Us,ik,Xs,dk,lk,ck,Z,Qs,pk,so,hk,Si,uk,mk,Dl,fk,gk,_k,rn,bk,dn,kk,ln,yk,cn,vk,pn,Rp,ro,hn,Ll,Hs,Tk,Gl,wk,Up,io,Vs,Mk,un,Js,$k,mn,Xp,lo,fn,Wl,Ks,xk,Rl,zk,Qp,$e,Zs,Fk,Ys,qk,Ai,Bk,jk,Ek,er,Ck,tr,Pk,Sk,Ak,gn,Ok,Ye,or,Ik,co,Nk,Oi,Dk,Lk,Ul,Gk,Wk,Rk,_n,Uk,bn,Hp,po,kn,Xl,nr,Xk,Ql,Qk,Vp,xe,ar,Hk,sr,Vk,Ii,Jk,Kk,Zk,rr,Yk,ir,ey,ty,oy,yn,ny,Ce,dr,ay,ho,sy,Ni,ry,iy,Hl,dy,ly,cy,vn,py,Tn,hy,wn,Jp,uo,Mn,Vl,lr,uy,Jl,my,Kp,W,cr,fy,pr,gy,Di,_y,by,ky,hr,yy,ur,vy,Ty,wy,Kl,My,$y,mt,Zl,mr,xy,zy,Yl,fr,Fy,qy,ec,gr,By,jy,tc,_r,Ey,Cy,et,br,Py,mo,Sy,oc,Ay,Oy,nc,Iy,Ny,Dy,$n,Ly,xn,Gy,zn,kr,Wy,Fn,Ry,qn,yr,Uy,Bn,Zp,fo,jn,ac,vr,Xy,sc,Qy,Yp,R,Tr,Hy,wr,Vy,Li,Jy,Ky,Zy,Mr,Yy,$r,ev,tv,ov,rc,nv,av,ft,ic,xr,sv,rv,dc,zr,iv,dv,lc,Fr,lv,cv,cc,qr,pv,hv,Pe,Br,uv,go,mv,pc,fv,gv,hc,_v,bv,kv,En,yv,Cn,vv,Pn,Tv,Sn,jr,wv,An,Mv,On,Er,$v,In,eh,_o,Nn,uc,Cr,xv,mc,zv,th,N,Pr,Fv,fc,qv,Bv,Sr,jv,Gi,Ev,Cv,Pv,Ar,Sv,Or,Av,Ov,Iv,gc,Nv,Dv,gt,_c,Ir,Lv,Gv,bc,Nr,Wv,Rv,kc,Dr,Uv,Xv,yc,Lr,Qv,Hv,tt,Gr,Vv,bo,Jv,vc,Kv,Zv,Tc,Yv,eT,tT,Dn,oT,Ln,nT,Gn,Wr,aT,Wn,sT,Rn,Rr,rT,Un,oh,ko,Xn,wc,Ur,iT,Mc,dT,nh,D,Xr,lT,yo,cT,$c,pT,hT,xc,uT,mT,fT,Qr,gT,Wi,_T,bT,kT,Hr,yT,Vr,vT,TT,wT,zc,MT,$T,_t,Fc,Jr,xT,zT,qc,Kr,FT,qT,Bc,Zr,BT,jT,jc,Yr,ET,CT,ot,ei,PT,vo,ST,Ec,AT,OT,Cc,IT,NT,DT,Qn,LT,Hn,GT,Vn,ti,WT,Jn,RT,Kn,oi,UT,Zn,ah;return n=new U({}),ne=new U({}),De=new U({}),ba=new B({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

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
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartModel">MBartModel</a> or <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.TFMBartModel">TFMBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.MBartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/configuration_mbart.py#L34"}}),qo=new C({props:{anchor:"transformers.MBartConfig.example",$$slots:{default:[Gx]},$$scope:{ctx:x}}}),Ba=new U({}),ja=new F({props:{name:"class transformers.MBartTokenizer",anchor:"transformers.MBartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/tokenization_mbart.py#L50"}}),jo=new C({props:{anchor:"transformers.MBartTokenizer.example",$$slots:{default:[Wx]},$$scope:{ctx:x}}}),Pa=new F({props:{name:"as_target_tokenizer",anchor:"transformers.MBartTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/tokenization_mbart.py#L339"}}),Sa=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/tokenization_mbart.py#L218",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Da=new U({}),La=new F({props:{name:"class transformers.MBartTokenizerFast",anchor:"transformers.MBartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/tokenization_mbart_fast.py#L60"}}),Po=new C({props:{anchor:"transformers.MBartTokenizerFast.example",$$slots:{default:[Rx]},$$scope:{ctx:x}}}),Ra=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/tokenization_mbart_fast.py#L162",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Va=new F({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/tokenization_mbart_fast.py#L191",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ja=new F({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/tokenization_mbart_fast.py#L250"}}),Ka=new F({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/tokenization_mbart_fast.py#L265"}}),Za=new U({}),Ya=new F({props:{name:"class transformers.MBart50Tokenizer",anchor:"transformers.MBart50Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBart50Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart50/tokenization_mbart50.py#L48"}}),No=new C({props:{anchor:"transformers.MBart50Tokenizer.example",$$slots:{default:[Ux]},$$scope:{ctx:x}}}),ns=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart50/tokenization_mbart50.py#L287",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ds=new F({props:{name:"convert_tokens_to_string",anchor:"transformers.MBart50Tokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:": typing.List[str]"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart50/tokenization_mbart50.py#L236"}}),ls=new F({props:{name:"get_special_tokens_mask",anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart50/tokenization_mbart50.py#L257",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ps=new F({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart50/tokenization_mbart50.py#L348"}}),hs=new F({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart50/tokenization_mbart50.py#L354"}}),us=new U({}),ms=new F({props:{name:"class transformers.MBart50TokenizerFast",anchor:"transformers.MBart50TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L56"}}),Uo=new C({props:{anchor:"transformers.MBart50TokenizerFast.example",$$slots:{default:[Xx]},$$scope:{ctx:x}}}),_s=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L169",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ts=new F({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L220"}}),ws=new F({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L235"}}),Ms=new U({}),$s=new F({props:{name:"class transformers.MBartModel",anchor:"transformers.MBartModel",parameters:[{name:"config",val:": MBartConfig"}],parametersDescription:[{anchor:"transformers.MBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_mbart.py#L1134"}}),qs=new F({props:{name:"forward",anchor:"transformers.MBartModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_mbart.py#L1161",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vo=new at({props:{$$slots:{default:[Qx]},$$scope:{ctx:x}}}),Jo=new C({props:{anchor:"transformers.MBartModel.forward.example",$$slots:{default:[Hx]},$$scope:{ctx:x}}}),Bs=new U({}),js=new F({props:{name:"class transformers.MBartForConditionalGeneration",anchor:"transformers.MBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"}],parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_mbart.py#L1251"}}),Ss=new F({props:{name:"forward",anchor:"transformers.MBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_mbart.py#L1295",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zo=new at({props:{$$slots:{default:[Vx]},$$scope:{ctx:x}}}),Yo=new C({props:{anchor:"transformers.MBartForConditionalGeneration.forward.example",$$slots:{default:[Jx]},$$scope:{ctx:x}}}),en=new C({props:{anchor:"transformers.MBartForConditionalGeneration.forward.example-2",$$slots:{default:[Kx]},$$scope:{ctx:x}}}),As=new U({}),Os=new F({props:{name:"class transformers.MBartForQuestionAnswering",anchor:"transformers.MBartForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_mbart.py#L1551"}}),Ls=new F({props:{name:"forward",anchor:"transformers.MBartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Tensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MBartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_mbart.py#L1563",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),on=new at({props:{$$slots:{default:[Zx]},$$scope:{ctx:x}}}),nn=new C({props:{anchor:"transformers.MBartForQuestionAnswering.forward.example",$$slots:{default:[Yx]},$$scope:{ctx:x}}}),an=new C({props:{anchor:"transformers.MBartForQuestionAnswering.forward.example-2",$$slots:{default:[e1]},$$scope:{ctx:x}}}),Gs=new U({}),Ws=new F({props:{name:"class transformers.MBartForSequenceClassification",anchor:"transformers.MBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_mbart.py#L1424"}}),Qs=new F({props:{name:"forward",anchor:"transformers.MBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_mbart.py#L1437",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rn=new at({props:{$$slots:{default:[t1]},$$scope:{ctx:x}}}),dn=new C({props:{anchor:"transformers.MBartForSequenceClassification.forward.example",$$slots:{default:[o1]},$$scope:{ctx:x}}}),ln=new C({props:{anchor:"transformers.MBartForSequenceClassification.forward.example-2",$$slots:{default:[n1]},$$scope:{ctx:x}}}),cn=new C({props:{anchor:"transformers.MBartForSequenceClassification.forward.example-3",$$slots:{default:[a1]},$$scope:{ctx:x}}}),pn=new C({props:{anchor:"transformers.MBartForSequenceClassification.forward.example-4",$$slots:{default:[s1]},$$scope:{ctx:x}}}),Hs=new U({}),Vs=new F({props:{name:"class transformers.MBartForCausalLM",anchor:"transformers.MBartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_mbart.py#L1684"}}),Js=new F({props:{name:"forward",anchor:"transformers.MBartForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_mbart.py#L1715",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mn=new C({props:{anchor:"transformers.MBartForCausalLM.forward.example",$$slots:{default:[r1]},$$scope:{ctx:x}}}),Ks=new U({}),Zs=new F({props:{name:"class transformers.TFMBartModel",anchor:"transformers.TFMBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_tf_mbart.py#L1147"}}),gn=new at({props:{$$slots:{default:[i1]},$$scope:{ctx:x}}}),or=new F({props:{name:"call",anchor:"transformers.TFMBartModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[tensorflow.python.framework.ops.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_tf_mbart.py#L1159",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),_n=new at({props:{$$slots:{default:[d1]},$$scope:{ctx:x}}}),bn=new C({props:{anchor:"transformers.TFMBartModel.call.example",$$slots:{default:[l1]},$$scope:{ctx:x}}}),nr=new U({}),ar=new F({props:{name:"class transformers.TFMBartForConditionalGeneration",anchor:"transformers.TFMBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_tf_mbart.py#L1234"}}),yn=new at({props:{$$slots:{default:[c1]},$$scope:{ctx:x}}}),dr=new F({props:{name:"call",anchor:"transformers.TFMBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": [typing.Tuple[typing.Tuple[tensorflow.python.framework.ops.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_tf_mbart.py#L1267",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vn=new at({props:{$$slots:{default:[p1]},$$scope:{ctx:x}}}),Tn=new C({props:{anchor:"transformers.TFMBartForConditionalGeneration.call.example",$$slots:{default:[h1]},$$scope:{ctx:x}}}),wn=new C({props:{anchor:"transformers.TFMBartForConditionalGeneration.call.example-2",$$slots:{default:[u1]},$$scope:{ctx:x}}}),lr=new U({}),cr=new F({props:{name:"class transformers.FlaxMBartModel",anchor:"transformers.FlaxMBartModel",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_flax_mbart.py#L1265"}}),br=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_flax_mbart.py#L1202",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$n=new at({props:{$$slots:{default:[m1]},$$scope:{ctx:x}}}),xn=new C({props:{anchor:"transformers.FlaxMBartModel.__call__.example",$$slots:{default:[f1]},$$scope:{ctx:x}}}),kr=new F({props:{name:"encode",anchor:"transformers.FlaxMBartModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_flax_mbart.py#L1026",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fn=new C({props:{anchor:"transformers.FlaxMBartModel.encode.example",$$slots:{default:[g1]},$$scope:{ctx:x}}}),yr=new F({props:{name:"decode",anchor:"transformers.FlaxMBartModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_flax_mbart.py#L1089",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bn=new C({props:{anchor:"transformers.FlaxMBartModel.decode.example",$$slots:{default:[_1]},$$scope:{ctx:x}}}),vr=new U({}),Tr=new F({props:{name:"class transformers.FlaxMBartForConditionalGeneration",anchor:"transformers.FlaxMBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_flax_mbart.py#L1352"}}),Br=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_flax_mbart.py#L1202",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),En=new at({props:{$$slots:{default:[b1]},$$scope:{ctx:x}}}),Cn=new C({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.example",$$slots:{default:[k1]},$$scope:{ctx:x}}}),Pn=new C({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.__call__.example-2",$$slots:{default:[y1]},$$scope:{ctx:x}}}),jr=new F({props:{name:"encode",anchor:"transformers.FlaxMBartForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_flax_mbart.py#L1026",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),An=new C({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.encode.example",$$slots:{default:[v1]},$$scope:{ctx:x}}}),Er=new F({props:{name:"decode",anchor:"transformers.FlaxMBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_flax_mbart.py#L1356",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),In=new C({props:{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.example",$$slots:{default:[T1]},$$scope:{ctx:x}}}),Cr=new U({}),Pr=new F({props:{name:"class transformers.FlaxMBartForSequenceClassification",anchor:"transformers.FlaxMBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_flax_mbart.py#L1665"}}),Gr=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartForSequenceClassification.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_flax_mbart.py#L1202",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Dn=new at({props:{$$slots:{default:[w1]},$$scope:{ctx:x}}}),Ln=new C({props:{anchor:"transformers.FlaxMBartForSequenceClassification.__call__.example",$$slots:{default:[M1]},$$scope:{ctx:x}}}),Wr=new F({props:{name:"encode",anchor:"transformers.FlaxMBartForSequenceClassification.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_flax_mbart.py#L1026",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wn=new C({props:{anchor:"transformers.FlaxMBartForSequenceClassification.encode.example",$$slots:{default:[$1]},$$scope:{ctx:x}}}),Rr=new F({props:{name:"decode",anchor:"transformers.FlaxMBartForSequenceClassification.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_flax_mbart.py#L1089",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Un=new C({props:{anchor:"transformers.FlaxMBartForSequenceClassification.decode.example",$$slots:{default:[x1]},$$scope:{ctx:x}}}),Ur=new U({}),Xr=new F({props:{name:"class transformers.FlaxMBartForQuestionAnswering",anchor:"transformers.FlaxMBartForQuestionAnswering",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_flax_mbart.py#L1753"}}),ei=new F({props:{name:"__call__",anchor:"transformers.FlaxMBartForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_flax_mbart.py#L1202",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qn=new at({props:{$$slots:{default:[z1]},$$scope:{ctx:x}}}),Hn=new C({props:{anchor:"transformers.FlaxMBartForQuestionAnswering.__call__.example",$$slots:{default:[F1]},$$scope:{ctx:x}}}),ti=new F({props:{name:"encode",anchor:"transformers.FlaxMBartForQuestionAnswering.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_flax_mbart.py#L1026",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jn=new C({props:{anchor:"transformers.FlaxMBartForQuestionAnswering.encode.example",$$slots:{default:[q1]},$$scope:{ctx:x}}}),oi=new F({props:{name:"decode",anchor:"transformers.FlaxMBartForQuestionAnswering.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/mbart/modeling_flax_mbart.py#L1089",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zn=new C({props:{anchor:"transformers.FlaxMBartForQuestionAnswering.decode.example",$$slots:{default:[B1]},$$scope:{ctx:x}}}),{c(){l=a("meta"),k=p(),m=a("h1"),c=a("a"),_=a("span"),y(n.$$.fragment),u=p(),q=a("span"),st=i("MBart and MBart-50"),ze=p(),E=a("p"),Ie=a("strong"),ue=i("DISCLAIMER:"),rt=i(" If you see something strange, file a "),me=a("a"),fe=i("Github Issue"),it=i(` and assign
@patrickvonplaten`),Xe=p(),Q=a("h2"),L=a("a"),Ne=a("span"),y(ne.$$.fragment),S=p(),A=a("span"),dt=i("Overview of MBart"),le=p(),ce=a("p"),lt=i("The MBart model was presented in "),H=a("a"),ct=i("Multilingual Denoising Pre-training for Neural Machine Translation"),pt=i(` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),G=p(),Fe=a("p"),ge=i(`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),Qe=p(),ae=a("p"),_e=i("This model was contributed by "),be=a("a"),ht=i("valhalla"),se=i(". The Authors\u2019 code can be found "),ke=a("a"),ye=i("here"),He=p(),z=a("h3"),j=a("a"),ve=a("span"),y(De.$$.fragment),Et=p(),V=a("span"),Ct=i("Training of MBart"),bt=p(),X=a("p"),re=i(`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),ie=a("code"),Pt=i("X [eos, src_lang_code]"),St=i(" where "),de=a("code"),At=i("X"),Ot=i(` is the source text. The
target text format is `),Le=a("code"),It=i("[tgt_lang_code] X [eos]"),Eu=i(". "),id=a("code"),Cu=i("bos"),Pu=i(" is never used."),cp=p(),kt=a("p"),Su=i("The regular "),_a=a("a"),dd=a("strong"),Au=i("call"),Ou=i("()"),Iu=i(` will encode source text format, and it should be wrapped
inside the context manager `),ci=a("a"),Nu=i("as_target_tokenizer()"),Du=i(" to encode target text format."),pp=p(),pi=a("ul"),ld=a("li"),Lu=i("Supervised training"),hp=p(),y(ba.$$.fragment),up=p(),hi=a("ul"),ka=a("li"),cd=a("p"),Gu=i("Generation"),Wu=p(),Nt=a("p"),Ru=i("While generating the target text set the "),pd=a("code"),Uu=i("decoder_start_token_id"),Xu=i(` to the target language id. The following
example shows how to translate English to Romanian using the `),hd=a("em"),Qu=i("facebook/mbart-large-en-ro"),Hu=i(" model."),mp=p(),y(ya.$$.fragment),fp=p(),Dt=a("h2"),$o=a("a"),ud=a("span"),y(va.$$.fragment),Vu=p(),md=a("span"),Ju=i("Overview of MBart-50"),gp=p(),yt=a("p"),Ku=i("MBart-50 was introduced in the "),Ta=a("a"),Zu=i("Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),Yu=i(` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),fd=a("em"),em=i("mbart-large-cc25"),tm=i(` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),_p=p(),ui=a("p"),om=i("According to the abstract"),bp=p(),mi=a("p"),gd=a("em"),nm=i(`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),kp=p(),Lt=a("h3"),xo=a("a"),_d=a("span"),y(wa.$$.fragment),am=p(),bd=a("span"),sm=i("Training of MBart-50"),yp=p(),Ve=a("p"),rm=i(`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),kd=a("code"),im=i("[lang_code] X [eos]"),dm=i(", where "),yd=a("code"),lm=i("lang_code"),cm=i(` is source
language id for source text and target language id for target text, with `),vd=a("code"),pm=i("X"),hm=i(` being the source or target text
respectively.`),vp=p(),zo=a("p"),um=i("MBart-50 has its own tokenizer "),fi=a("a"),mm=i("MBart50Tokenizer"),fm=i("."),Tp=p(),gi=a("ul"),Td=a("li"),gm=i("Supervised training"),wp=p(),y(Ma.$$.fragment),Mp=p(),_i=a("ul"),$a=a("li"),wd=a("p"),_m=i("Generation"),bm=p(),Te=a("p"),km=i("To generate using the mBART-50 multilingual translation models, "),Md=a("code"),ym=i("eos_token_id"),vm=i(` is used as the
`),$d=a("code"),Tm=i("decoder_start_token_id"),wm=i(` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),xd=a("em"),Mm=i("forced_bos_token_id"),$m=i(" parameter to the "),zd=a("em"),xm=i("generate"),zm=i(` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),Fd=a("em"),Fm=i("facebook/mbart-50-large-many-to-many"),qm=i(" checkpoint."),$p=p(),y(xa.$$.fragment),xp=p(),Gt=a("h2"),Fo=a("a"),qd=a("span"),y(za.$$.fragment),Bm=p(),Bd=a("span"),jm=i("MBartConfig"),zp=p(),Ge=a("div"),y(Fa.$$.fragment),Em=p(),Wt=a("p"),Cm=i("This is the configuration class to store the configuration of a "),bi=a("a"),Pm=i("MBartModel"),Sm=i(`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),qa=a("a"),Am=i("facebook/mbart-large-cc25"),Om=i(" architecture."),Im=p(),Rt=a("p"),Nm=i("Configuration objects inherit from "),ki=a("a"),Dm=i("PretrainedConfig"),Lm=i(` and can be used to control the model outputs. Read the
documentation from `),yi=a("a"),Gm=i("PretrainedConfig"),Wm=i(" for more information."),Rm=p(),y(qo.$$.fragment),Fp=p(),Ut=a("h2"),Bo=a("a"),jd=a("span"),y(Ba.$$.fragment),Um=p(),Ed=a("span"),Xm=i("MBartTokenizer"),qp=p(),J=a("div"),y(ja.$$.fragment),Qm=p(),Cd=a("p"),Hm=i("Construct an MBART tokenizer."),Vm=p(),ut=a("p"),Jm=i("Adapted from "),vi=a("a"),Km=i("RobertaTokenizer"),Zm=i(" and "),Ti=a("a"),Ym=i("XLNetTokenizer"),ef=i(`. Based on
`),Ea=a("a"),tf=i("SentencePiece"),of=i("."),nf=p(),Ca=a("p"),af=i("The tokenization method is "),Pd=a("code"),sf=i("<tokens> <eos> <language code>"),rf=i(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),df=p(),y(jo.$$.fragment),lf=p(),Eo=a("div"),y(Pa.$$.fragment),cf=p(),Sd=a("p"),pf=i(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),hf=p(),Je=a("div"),y(Sa.$$.fragment),uf=p(),Aa=a("p"),mf=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Ad=a("code"),ff=i("X"),gf=i(" represents the sequence:"),_f=p(),Oa=a("ul"),Ia=a("li"),Od=a("code"),bf=i("input_ids"),kf=i(" (for encoder) "),Id=a("code"),yf=i("X [eos, src_lang_code]"),vf=p(),Na=a("li"),Nd=a("code"),Tf=i("decoder_input_ids"),wf=i(": (for decoder) "),Dd=a("code"),Mf=i("X [eos, tgt_lang_code]"),$f=p(),Ld=a("p"),xf=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Bp=p(),Xt=a("h2"),Co=a("a"),Gd=a("span"),y(Da.$$.fragment),zf=p(),Wd=a("span"),Ff=i("MBartTokenizerFast"),jp=p(),O=a("div"),y(La.$$.fragment),qf=p(),Qt=a("p"),Bf=i("Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Rd=a("em"),jf=i("tokenizers"),Ef=i(` library). Based on
`),Ga=a("a"),Cf=i("BPE"),Pf=i("."),Sf=p(),vt=a("p"),wi=a("a"),Af=i("MBartTokenizerFast"),Of=i(" is a subclass of "),Mi=a("a"),If=i("XLMRobertaTokenizerFast"),Nf=i(`. Refer to superclass
`),$i=a("a"),Df=i("XLMRobertaTokenizerFast"),Lf=i(` for usage examples and documentation concerning the initialization parameters and other
methods.`),Gf=p(),Wa=a("p"),Wf=i("The tokenization method is "),Ud=a("code"),Rf=i("<tokens> <eos> <language code>"),Uf=i(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Xf=p(),y(Po.$$.fragment),Qf=p(),qe=a("div"),y(Ra.$$.fragment),Hf=p(),Xd=a("p"),Vf=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),Jf=p(),Ua=a("p"),Kf=i("An MBART sequence has the following format, where "),Qd=a("code"),Zf=i("X"),Yf=i(" represents the sequence:"),eg=p(),Xa=a("ul"),Qa=a("li"),Hd=a("code"),tg=i("input_ids"),og=i(" (for encoder) "),Vd=a("code"),ng=i("X [eos, src_lang_code]"),ag=p(),Ha=a("li"),Jd=a("code"),sg=i("decoder_input_ids"),rg=i(": (for decoder) "),Kd=a("code"),ig=i("X [eos, tgt_lang_code]"),dg=p(),Zd=a("p"),lg=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),cg=p(),So=a("div"),y(Va.$$.fragment),pg=p(),Yd=a("p"),hg=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),ug=p(),Ao=a("div"),y(Ja.$$.fragment),mg=p(),el=a("p"),fg=i("Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),gg=p(),Oo=a("div"),y(Ka.$$.fragment),_g=p(),tl=a("p"),bg=i("Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),Ep=p(),Ht=a("h2"),Io=a("a"),ol=a("span"),y(Za.$$.fragment),kg=p(),nl=a("span"),yg=i("MBart50Tokenizer"),Cp=p(),I=a("div"),y(Ya.$$.fragment),vg=p(),es=a("p"),Tg=i("Construct a MBart50 tokenizer. Based on "),ts=a("a"),wg=i("SentencePiece"),Mg=i("."),$g=p(),os=a("p"),xg=i("This tokenizer inherits from "),xi=a("a"),zg=i("PreTrainedTokenizer"),Fg=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),qg=p(),y(No.$$.fragment),Bg=p(),Ke=a("div"),y(ns.$$.fragment),jg=p(),as=a("p"),Eg=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),al=a("code"),Cg=i("X"),Pg=i(" represents the sequence:"),Sg=p(),ss=a("ul"),rs=a("li"),sl=a("code"),Ag=i("input_ids"),Og=i(" (for encoder) "),rl=a("code"),Ig=i("[src_lang_code] X [eos]"),Ng=p(),is=a("li"),il=a("code"),Dg=i("labels"),Lg=i(": (for decoder) "),dl=a("code"),Gg=i("[tgt_lang_code] X [eos]"),Wg=p(),ll=a("p"),Rg=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Ug=p(),Do=a("div"),y(ds.$$.fragment),Xg=p(),cl=a("p"),Qg=i("Converts a sequence of tokens (strings for sub-words) in a single string."),Hg=p(),Lo=a("div"),y(ls.$$.fragment),Vg=p(),cs=a("p"),Jg=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),pl=a("code"),Kg=i("prepare_for_model"),Zg=i(" method."),Yg=p(),Go=a("div"),y(ps.$$.fragment),e_=p(),hl=a("p"),t_=i("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),o_=p(),Wo=a("div"),y(hs.$$.fragment),n_=p(),ul=a("p"),a_=i("Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),Pp=p(),Vt=a("h2"),Ro=a("a"),ml=a("span"),y(us.$$.fragment),s_=p(),fl=a("span"),r_=i("MBart50TokenizerFast"),Sp=p(),K=a("div"),y(ms.$$.fragment),i_=p(),Jt=a("p"),d_=i("Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),gl=a("em"),l_=i("tokenizers"),c_=i(` library). Based on
`),fs=a("a"),p_=i("BPE"),h_=i("."),u_=p(),gs=a("p"),m_=i("This tokenizer inherits from "),zi=a("a"),f_=i("PreTrainedTokenizerFast"),g_=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),__=p(),y(Uo.$$.fragment),b_=p(),Be=a("div"),y(_s.$$.fragment),k_=p(),_l=a("p"),y_=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),v_=p(),bs=a("p"),T_=i("An MBART-50 sequence has the following format, where "),bl=a("code"),w_=i("X"),M_=i(" represents the sequence:"),$_=p(),ks=a("ul"),ys=a("li"),kl=a("code"),x_=i("input_ids"),z_=i(" (for encoder) "),yl=a("code"),F_=i("[src_lang_code] X [eos]"),q_=p(),vs=a("li"),vl=a("code"),B_=i("labels"),j_=i(": (for decoder) "),Tl=a("code"),E_=i("[tgt_lang_code] X [eos]"),C_=p(),wl=a("p"),P_=i(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),S_=p(),Xo=a("div"),y(Ts.$$.fragment),A_=p(),Ml=a("p"),O_=i("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),I_=p(),Qo=a("div"),y(ws.$$.fragment),N_=p(),$l=a("p"),D_=i("Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),Ap=p(),Kt=a("h2"),Ho=a("a"),xl=a("span"),y(Ms.$$.fragment),L_=p(),zl=a("span"),G_=i("MBartModel"),Op=p(),We=a("div"),y($s.$$.fragment),W_=p(),xs=a("p"),R_=i(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Fi=a("a"),U_=i("PreTrainedModel"),X_=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Q_=p(),zs=a("p"),H_=i("This model is also a PyTorch "),Fs=a("a"),V_=i("torch.nn.Module"),J_=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),K_=p(),Ze=a("div"),y(qs.$$.fragment),Z_=p(),Zt=a("p"),Y_=i("The "),qi=a("a"),eb=i("MBartModel"),tb=i(" forward method, overrides the "),Fl=a("code"),ob=i("__call__"),nb=i(" special method."),ab=p(),y(Vo.$$.fragment),sb=p(),y(Jo.$$.fragment),Ip=p(),Yt=a("h2"),Ko=a("a"),ql=a("span"),y(Bs.$$.fragment),rb=p(),Bl=a("span"),ib=i("MBartForConditionalGeneration"),Np=p(),Re=a("div"),y(js.$$.fragment),db=p(),Es=a("p"),lb=i(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Bi=a("a"),cb=i("PreTrainedModel"),pb=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hb=p(),Cs=a("p"),ub=i("This model is also a PyTorch "),Ps=a("a"),mb=i("torch.nn.Module"),fb=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gb=p(),je=a("div"),y(Ss.$$.fragment),_b=p(),eo=a("p"),bb=i("The "),ji=a("a"),kb=i("MBartForConditionalGeneration"),yb=i(" forward method, overrides the "),jl=a("code"),vb=i("__call__"),Tb=i(" special method."),wb=p(),y(Zo.$$.fragment),Mb=p(),y(Yo.$$.fragment),$b=p(),y(en.$$.fragment),Dp=p(),to=a("h2"),tn=a("a"),El=a("span"),y(As.$$.fragment),xb=p(),Cl=a("span"),zb=i("MBartForQuestionAnswering"),Lp=p(),we=a("div"),y(Os.$$.fragment),Fb=p(),oo=a("p"),qb=i(`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Pl=a("code"),Bb=i("span start logits"),jb=i(" and "),Sl=a("code"),Eb=i("span end logits"),Cb=i(")."),Pb=p(),Is=a("p"),Sb=i("This model inherits from "),Ei=a("a"),Ab=i("PreTrainedModel"),Ob=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ib=p(),Ns=a("p"),Nb=i("This model is also a PyTorch "),Ds=a("a"),Db=i("torch.nn.Module"),Lb=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gb=p(),Ee=a("div"),y(Ls.$$.fragment),Wb=p(),no=a("p"),Rb=i("The "),Ci=a("a"),Ub=i("MBartForQuestionAnswering"),Xb=i(" forward method, overrides the "),Al=a("code"),Qb=i("__call__"),Hb=i(" special method."),Vb=p(),y(on.$$.fragment),Jb=p(),y(nn.$$.fragment),Kb=p(),y(an.$$.fragment),Gp=p(),ao=a("h2"),sn=a("a"),Ol=a("span"),y(Gs.$$.fragment),Zb=p(),Il=a("span"),Yb=i("MBartForSequenceClassification"),Wp=p(),Me=a("div"),y(Ws.$$.fragment),ek=p(),Nl=a("p"),tk=i(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),ok=p(),Rs=a("p"),nk=i("This model inherits from "),Pi=a("a"),ak=i("PreTrainedModel"),sk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rk=p(),Us=a("p"),ik=i("This model is also a PyTorch "),Xs=a("a"),dk=i("torch.nn.Module"),lk=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ck=p(),Z=a("div"),y(Qs.$$.fragment),pk=p(),so=a("p"),hk=i("The "),Si=a("a"),uk=i("MBartForSequenceClassification"),mk=i(" forward method, overrides the "),Dl=a("code"),fk=i("__call__"),gk=i(" special method."),_k=p(),y(rn.$$.fragment),bk=p(),y(dn.$$.fragment),kk=p(),y(ln.$$.fragment),yk=p(),y(cn.$$.fragment),vk=p(),y(pn.$$.fragment),Rp=p(),ro=a("h2"),hn=a("a"),Ll=a("span"),y(Hs.$$.fragment),Tk=p(),Gl=a("span"),wk=i("MBartForCausalLM"),Up=p(),io=a("div"),y(Vs.$$.fragment),Mk=p(),un=a("div"),y(Js.$$.fragment),$k=p(),y(mn.$$.fragment),Xp=p(),lo=a("h2"),fn=a("a"),Wl=a("span"),y(Ks.$$.fragment),xk=p(),Rl=a("span"),zk=i("TFMBartModel"),Qp=p(),$e=a("div"),y(Zs.$$.fragment),Fk=p(),Ys=a("p"),qk=i(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ai=a("a"),Bk=i("TFPreTrainedModel"),jk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ek=p(),er=a("p"),Ck=i("This model is also a "),tr=a("a"),Pk=i("tf.keras.Model"),Sk=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ak=p(),y(gn.$$.fragment),Ok=p(),Ye=a("div"),y(or.$$.fragment),Ik=p(),co=a("p"),Nk=i("The "),Oi=a("a"),Dk=i("TFMBartModel"),Lk=i(" forward method, overrides the "),Ul=a("code"),Gk=i("__call__"),Wk=i(" special method."),Rk=p(),y(_n.$$.fragment),Uk=p(),y(bn.$$.fragment),Hp=p(),po=a("h2"),kn=a("a"),Xl=a("span"),y(nr.$$.fragment),Xk=p(),Ql=a("span"),Qk=i("TFMBartForConditionalGeneration"),Vp=p(),xe=a("div"),y(ar.$$.fragment),Hk=p(),sr=a("p"),Vk=i(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ii=a("a"),Jk=i("TFPreTrainedModel"),Kk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zk=p(),rr=a("p"),Yk=i("This model is also a "),ir=a("a"),ey=i("tf.keras.Model"),ty=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),oy=p(),y(yn.$$.fragment),ny=p(),Ce=a("div"),y(dr.$$.fragment),ay=p(),ho=a("p"),sy=i("The "),Ni=a("a"),ry=i("TFMBartForConditionalGeneration"),iy=i(" forward method, overrides the "),Hl=a("code"),dy=i("__call__"),ly=i(" special method."),cy=p(),y(vn.$$.fragment),py=p(),y(Tn.$$.fragment),hy=p(),y(wn.$$.fragment),Jp=p(),uo=a("h2"),Mn=a("a"),Vl=a("span"),y(lr.$$.fragment),uy=p(),Jl=a("span"),my=i("FlaxMBartModel"),Kp=p(),W=a("div"),y(cr.$$.fragment),fy=p(),pr=a("p"),gy=i(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Di=a("a"),_y=i("FlaxPreTrainedModel"),by=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ky=p(),hr=a("p"),yy=i(`This model is also a Flax Linen
`),ur=a("a"),vy=i("flax.nn.Module"),Ty=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),wy=p(),Kl=a("p"),My=i("Finally, this model supports inherent JAX features such as:"),$y=p(),mt=a("ul"),Zl=a("li"),mr=a("a"),xy=i("Just-In-Time (JIT) compilation"),zy=p(),Yl=a("li"),fr=a("a"),Fy=i("Automatic Differentiation"),qy=p(),ec=a("li"),gr=a("a"),By=i("Vectorization"),jy=p(),tc=a("li"),_r=a("a"),Ey=i("Parallelization"),Cy=p(),et=a("div"),y(br.$$.fragment),Py=p(),mo=a("p"),Sy=i("The "),oc=a("code"),Ay=i("FlaxMBartPreTrainedModel"),Oy=i(" forward method, overrides the "),nc=a("code"),Iy=i("__call__"),Ny=i(" special method."),Dy=p(),y($n.$$.fragment),Ly=p(),y(xn.$$.fragment),Gy=p(),zn=a("div"),y(kr.$$.fragment),Wy=p(),y(Fn.$$.fragment),Ry=p(),qn=a("div"),y(yr.$$.fragment),Uy=p(),y(Bn.$$.fragment),Zp=p(),fo=a("h2"),jn=a("a"),ac=a("span"),y(vr.$$.fragment),Xy=p(),sc=a("span"),Qy=i("FlaxMBartForConditionalGeneration"),Yp=p(),R=a("div"),y(Tr.$$.fragment),Hy=p(),wr=a("p"),Vy=i(`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),Li=a("a"),Jy=i("FlaxPreTrainedModel"),Ky=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zy=p(),Mr=a("p"),Yy=i(`This model is also a Flax Linen
`),$r=a("a"),ev=i("flax.nn.Module"),tv=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ov=p(),rc=a("p"),nv=i("Finally, this model supports inherent JAX features such as:"),av=p(),ft=a("ul"),ic=a("li"),xr=a("a"),sv=i("Just-In-Time (JIT) compilation"),rv=p(),dc=a("li"),zr=a("a"),iv=i("Automatic Differentiation"),dv=p(),lc=a("li"),Fr=a("a"),lv=i("Vectorization"),cv=p(),cc=a("li"),qr=a("a"),pv=i("Parallelization"),hv=p(),Pe=a("div"),y(Br.$$.fragment),uv=p(),go=a("p"),mv=i("The "),pc=a("code"),fv=i("FlaxMBartPreTrainedModel"),gv=i(" forward method, overrides the "),hc=a("code"),_v=i("__call__"),bv=i(" special method."),kv=p(),y(En.$$.fragment),yv=p(),y(Cn.$$.fragment),vv=p(),y(Pn.$$.fragment),Tv=p(),Sn=a("div"),y(jr.$$.fragment),wv=p(),y(An.$$.fragment),Mv=p(),On=a("div"),y(Er.$$.fragment),$v=p(),y(In.$$.fragment),eh=p(),_o=a("h2"),Nn=a("a"),uc=a("span"),y(Cr.$$.fragment),xv=p(),mc=a("span"),zv=i("FlaxMBartForSequenceClassification"),th=p(),N=a("div"),y(Pr.$$.fragment),Fv=p(),fc=a("p"),qv=i(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Bv=p(),Sr=a("p"),jv=i("This model inherits from "),Gi=a("a"),Ev=i("FlaxPreTrainedModel"),Cv=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pv=p(),Ar=a("p"),Sv=i(`This model is also a Flax Linen
`),Or=a("a"),Av=i("flax.nn.Module"),Ov=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Iv=p(),gc=a("p"),Nv=i("Finally, this model supports inherent JAX features such as:"),Dv=p(),gt=a("ul"),_c=a("li"),Ir=a("a"),Lv=i("Just-In-Time (JIT) compilation"),Gv=p(),bc=a("li"),Nr=a("a"),Wv=i("Automatic Differentiation"),Rv=p(),kc=a("li"),Dr=a("a"),Uv=i("Vectorization"),Xv=p(),yc=a("li"),Lr=a("a"),Qv=i("Parallelization"),Hv=p(),tt=a("div"),y(Gr.$$.fragment),Vv=p(),bo=a("p"),Jv=i("The "),vc=a("code"),Kv=i("FlaxMBartPreTrainedModel"),Zv=i(" forward method, overrides the "),Tc=a("code"),Yv=i("__call__"),eT=i(" special method."),tT=p(),y(Dn.$$.fragment),oT=p(),y(Ln.$$.fragment),nT=p(),Gn=a("div"),y(Wr.$$.fragment),aT=p(),y(Wn.$$.fragment),sT=p(),Rn=a("div"),y(Rr.$$.fragment),rT=p(),y(Un.$$.fragment),oh=p(),ko=a("h2"),Xn=a("a"),wc=a("span"),y(Ur.$$.fragment),iT=p(),Mc=a("span"),dT=i("FlaxMBartForQuestionAnswering"),nh=p(),D=a("div"),y(Xr.$$.fragment),lT=p(),yo=a("p"),cT=i(`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),$c=a("code"),pT=i("span start logits"),hT=i(" and "),xc=a("code"),uT=i("span end logits"),mT=i(")."),fT=p(),Qr=a("p"),gT=i("This model inherits from "),Wi=a("a"),_T=i("FlaxPreTrainedModel"),bT=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kT=p(),Hr=a("p"),yT=i(`This model is also a Flax Linen
`),Vr=a("a"),vT=i("flax.nn.Module"),TT=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),wT=p(),zc=a("p"),MT=i("Finally, this model supports inherent JAX features such as:"),$T=p(),_t=a("ul"),Fc=a("li"),Jr=a("a"),xT=i("Just-In-Time (JIT) compilation"),zT=p(),qc=a("li"),Kr=a("a"),FT=i("Automatic Differentiation"),qT=p(),Bc=a("li"),Zr=a("a"),BT=i("Vectorization"),jT=p(),jc=a("li"),Yr=a("a"),ET=i("Parallelization"),CT=p(),ot=a("div"),y(ei.$$.fragment),PT=p(),vo=a("p"),ST=i("The "),Ec=a("code"),AT=i("FlaxMBartPreTrainedModel"),OT=i(" forward method, overrides the "),Cc=a("code"),IT=i("__call__"),NT=i(" special method."),DT=p(),y(Qn.$$.fragment),LT=p(),y(Hn.$$.fragment),GT=p(),Vn=a("div"),y(ti.$$.fragment),WT=p(),y(Jn.$$.fragment),RT=p(),Kn=a("div"),y(oi.$$.fragment),UT=p(),y(Zn.$$.fragment),this.h()},l(o){const g=Dx('[data-svelte="svelte-1phssyn"]',document.head);l=s(g,"META",{name:!0,content:!0}),g.forEach(t),k=h(o),m=s(o,"H1",{class:!0});var ni=r(m);c=s(ni,"A",{id:!0,class:!0,href:!0});var Pc=r(c);_=s(Pc,"SPAN",{});var Sc=r(_);v(n.$$.fragment,Sc),Sc.forEach(t),Pc.forEach(t),u=h(ni),q=s(ni,"SPAN",{});var Ac=r(q);st=d(Ac,"MBart and MBart-50"),Ac.forEach(t),ni.forEach(t),ze=h(o),E=s(o,"P",{});var Yn=r(E);Ie=s(Yn,"STRONG",{});var Oc=r(Ie);ue=d(Oc,"DISCLAIMER:"),Oc.forEach(t),rt=d(Yn," If you see something strange, file a "),me=s(Yn,"A",{href:!0,rel:!0});var Ic=r(me);fe=d(Ic,"Github Issue"),Ic.forEach(t),it=d(Yn,` and assign
@patrickvonplaten`),Yn.forEach(t),Xe=h(o),Q=s(o,"H2",{class:!0});var ai=r(Q);L=s(ai,"A",{id:!0,class:!0,href:!0});var Nc=r(L);Ne=s(Nc,"SPAN",{});var Dc=r(Ne);v(ne.$$.fragment,Dc),Dc.forEach(t),Nc.forEach(t),S=h(ai),A=s(ai,"SPAN",{});var Lc=r(A);dt=d(Lc,"Overview of MBart"),Lc.forEach(t),ai.forEach(t),le=h(o),ce=s(o,"P",{});var si=r(ce);lt=d(si,"The MBart model was presented in "),H=s(si,"A",{href:!0,rel:!0});var Gc=r(H);ct=d(Gc,"Multilingual Denoising Pre-training for Neural Machine Translation"),Gc.forEach(t),pt=d(si,` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),si.forEach(t),G=h(o),Fe=s(o,"P",{});var Wc=r(Fe);ge=d(Wc,`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),Wc.forEach(t),Qe=h(o),ae=s(o,"P",{});var ea=r(ae);_e=d(ea,"This model was contributed by "),be=s(ea,"A",{href:!0,rel:!0});var Rc=r(be);ht=d(Rc,"valhalla"),Rc.forEach(t),se=d(ea,". The Authors\u2019 code can be found "),ke=s(ea,"A",{href:!0,rel:!0});var Uc=r(ke);ye=d(Uc,"here"),Uc.forEach(t),ea.forEach(t),He=h(o),z=s(o,"H3",{class:!0});var ri=r(z);j=s(ri,"A",{id:!0,class:!0,href:!0});var Xc=r(j);ve=s(Xc,"SPAN",{});var Qc=r(ve);v(De.$$.fragment,Qc),Qc.forEach(t),Xc.forEach(t),Et=h(ri),V=s(ri,"SPAN",{});var Hc=r(V);Ct=d(Hc,"Training of MBart"),Hc.forEach(t),ri.forEach(t),bt=h(o),X=s(o,"P",{});var Ue=r(X);re=d(Ue,`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),ie=s(Ue,"CODE",{});var Vc=r(ie);Pt=d(Vc,"X [eos, src_lang_code]"),Vc.forEach(t),St=d(Ue," where "),de=s(Ue,"CODE",{});var Jc=r(de);At=d(Jc,"X"),Jc.forEach(t),Ot=d(Ue,` is the source text. The
target text format is `),Le=s(Ue,"CODE",{});var Kc=r(Le);It=d(Kc,"[tgt_lang_code] X [eos]"),Kc.forEach(t),Eu=d(Ue,". "),id=s(Ue,"CODE",{});var Zc=r(id);Cu=d(Zc,"bos"),Zc.forEach(t),Pu=d(Ue," is never used."),Ue.forEach(t),cp=h(o),kt=s(o,"P",{});var To=r(kt);Su=d(To,"The regular "),_a=s(To,"A",{href:!0});var Ri=r(_a);dd=s(Ri,"STRONG",{});var Yc=r(dd);Au=d(Yc,"call"),Yc.forEach(t),Ou=d(Ri,"()"),Ri.forEach(t),Iu=d(To,` will encode source text format, and it should be wrapped
inside the context manager `),ci=s(To,"A",{href:!0});var ep=r(ci);Nu=d(ep,"as_target_tokenizer()"),ep.forEach(t),Du=d(To," to encode target text format."),To.forEach(t),pp=h(o),pi=s(o,"UL",{});var tp=r(pi);ld=s(tp,"LI",{});var op=r(ld);Lu=d(op,"Supervised training"),op.forEach(t),tp.forEach(t),hp=h(o),v(ba.$$.fragment,o),up=h(o),hi=s(o,"UL",{});var np=r(hi);ka=s(np,"LI",{});var ii=r(ka);cd=s(ii,"P",{});var ap=r(cd);Gu=d(ap,"Generation"),ap.forEach(t),Wu=h(ii),Nt=s(ii,"P",{});var wo=r(Nt);Ru=d(wo,"While generating the target text set the "),pd=s(wo,"CODE",{});var sp=r(pd);Uu=d(sp,"decoder_start_token_id"),sp.forEach(t),Xu=d(wo,` to the target language id. The following
example shows how to translate English to Romanian using the `),hd=s(wo,"EM",{});var rp=r(hd);Qu=d(rp,"facebook/mbart-large-en-ro"),rp.forEach(t),Hu=d(wo," model."),wo.forEach(t),ii.forEach(t),np.forEach(t),mp=h(o),v(ya.$$.fragment,o),fp=h(o),Dt=s(o,"H2",{class:!0});var di=r(Dt);$o=s(di,"A",{id:!0,class:!0,href:!0});var ip=r($o);ud=s(ip,"SPAN",{});var dp=r(ud);v(va.$$.fragment,dp),dp.forEach(t),ip.forEach(t),Vu=h(di),md=s(di,"SPAN",{});var lp=r(md);Ju=d(lp,"Overview of MBart-50"),lp.forEach(t),di.forEach(t),gp=h(o),yt=s(o,"P",{});var Mo=r(yt);Ku=d(Mo,"MBart-50 was introduced in the "),Ta=s(Mo,"A",{href:!0,rel:!0});var XT=r(Ta);Zu=d(XT,"Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),XT.forEach(t),Yu=d(Mo,` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),fd=s(Mo,"EM",{});var QT=r(fd);em=d(QT,"mbart-large-cc25"),QT.forEach(t),tm=d(Mo,` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),Mo.forEach(t),_p=h(o),ui=s(o,"P",{});var HT=r(ui);om=d(HT,"According to the abstract"),HT.forEach(t),bp=h(o),mi=s(o,"P",{});var VT=r(mi);gd=s(VT,"EM",{});var JT=r(gd);nm=d(JT,`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),JT.forEach(t),VT.forEach(t),kp=h(o),Lt=s(o,"H3",{class:!0});var sh=r(Lt);xo=s(sh,"A",{id:!0,class:!0,href:!0});var KT=r(xo);_d=s(KT,"SPAN",{});var ZT=r(_d);v(wa.$$.fragment,ZT),ZT.forEach(t),KT.forEach(t),am=h(sh),bd=s(sh,"SPAN",{});var YT=r(bd);sm=d(YT,"Training of MBart-50"),YT.forEach(t),sh.forEach(t),yp=h(o),Ve=s(o,"P",{});var ta=r(Ve);rm=d(ta,`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),kd=s(ta,"CODE",{});var ew=r(kd);im=d(ew,"[lang_code] X [eos]"),ew.forEach(t),dm=d(ta,", where "),yd=s(ta,"CODE",{});var tw=r(yd);lm=d(tw,"lang_code"),tw.forEach(t),cm=d(ta,` is source
language id for source text and target language id for target text, with `),vd=s(ta,"CODE",{});var ow=r(vd);pm=d(ow,"X"),ow.forEach(t),hm=d(ta,` being the source or target text
respectively.`),ta.forEach(t),vp=h(o),zo=s(o,"P",{});var rh=r(zo);um=d(rh,"MBart-50 has its own tokenizer "),fi=s(rh,"A",{href:!0});var nw=r(fi);mm=d(nw,"MBart50Tokenizer"),nw.forEach(t),fm=d(rh,"."),rh.forEach(t),Tp=h(o),gi=s(o,"UL",{});var aw=r(gi);Td=s(aw,"LI",{});var sw=r(Td);gm=d(sw,"Supervised training"),sw.forEach(t),aw.forEach(t),wp=h(o),v(Ma.$$.fragment,o),Mp=h(o),_i=s(o,"UL",{});var rw=r(_i);$a=s(rw,"LI",{});var ih=r($a);wd=s(ih,"P",{});var iw=r(wd);_m=d(iw,"Generation"),iw.forEach(t),bm=h(ih),Te=s(ih,"P",{});var nt=r(Te);km=d(nt,"To generate using the mBART-50 multilingual translation models, "),Md=s(nt,"CODE",{});var dw=r(Md);ym=d(dw,"eos_token_id"),dw.forEach(t),vm=d(nt,` is used as the
`),$d=s(nt,"CODE",{});var lw=r($d);Tm=d(lw,"decoder_start_token_id"),lw.forEach(t),wm=d(nt,` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),xd=s(nt,"EM",{});var cw=r(xd);Mm=d(cw,"forced_bos_token_id"),cw.forEach(t),$m=d(nt," parameter to the "),zd=s(nt,"EM",{});var pw=r(zd);xm=d(pw,"generate"),pw.forEach(t),zm=d(nt,` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),Fd=s(nt,"EM",{});var hw=r(Fd);Fm=d(hw,"facebook/mbart-50-large-many-to-many"),hw.forEach(t),qm=d(nt," checkpoint."),nt.forEach(t),ih.forEach(t),rw.forEach(t),$p=h(o),v(xa.$$.fragment,o),xp=h(o),Gt=s(o,"H2",{class:!0});var dh=r(Gt);Fo=s(dh,"A",{id:!0,class:!0,href:!0});var uw=r(Fo);qd=s(uw,"SPAN",{});var mw=r(qd);v(za.$$.fragment,mw),mw.forEach(t),uw.forEach(t),Bm=h(dh),Bd=s(dh,"SPAN",{});var fw=r(Bd);jm=d(fw,"MBartConfig"),fw.forEach(t),dh.forEach(t),zp=h(o),Ge=s(o,"DIV",{class:!0});var oa=r(Ge);v(Fa.$$.fragment,oa),Em=h(oa),Wt=s(oa,"P",{});var Ui=r(Wt);Cm=d(Ui,"This is the configuration class to store the configuration of a "),bi=s(Ui,"A",{href:!0});var gw=r(bi);Pm=d(gw,"MBartModel"),gw.forEach(t),Sm=d(Ui,`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),qa=s(Ui,"A",{href:!0,rel:!0});var _w=r(qa);Am=d(_w,"facebook/mbart-large-cc25"),_w.forEach(t),Om=d(Ui," architecture."),Ui.forEach(t),Im=h(oa),Rt=s(oa,"P",{});var Xi=r(Rt);Nm=d(Xi,"Configuration objects inherit from "),ki=s(Xi,"A",{href:!0});var bw=r(ki);Dm=d(bw,"PretrainedConfig"),bw.forEach(t),Lm=d(Xi,` and can be used to control the model outputs. Read the
documentation from `),yi=s(Xi,"A",{href:!0});var kw=r(yi);Gm=d(kw,"PretrainedConfig"),kw.forEach(t),Wm=d(Xi," for more information."),Xi.forEach(t),Rm=h(oa),v(qo.$$.fragment,oa),oa.forEach(t),Fp=h(o),Ut=s(o,"H2",{class:!0});var lh=r(Ut);Bo=s(lh,"A",{id:!0,class:!0,href:!0});var yw=r(Bo);jd=s(yw,"SPAN",{});var vw=r(jd);v(Ba.$$.fragment,vw),vw.forEach(t),yw.forEach(t),Um=h(lh),Ed=s(lh,"SPAN",{});var Tw=r(Ed);Xm=d(Tw,"MBartTokenizer"),Tw.forEach(t),lh.forEach(t),qp=h(o),J=s(o,"DIV",{class:!0});var Se=r(J);v(ja.$$.fragment,Se),Qm=h(Se),Cd=s(Se,"P",{});var ww=r(Cd);Hm=d(ww,"Construct an MBART tokenizer."),ww.forEach(t),Vm=h(Se),ut=s(Se,"P",{});var na=r(ut);Jm=d(na,"Adapted from "),vi=s(na,"A",{href:!0});var Mw=r(vi);Km=d(Mw,"RobertaTokenizer"),Mw.forEach(t),Zm=d(na," and "),Ti=s(na,"A",{href:!0});var $w=r(Ti);Ym=d($w,"XLNetTokenizer"),$w.forEach(t),ef=d(na,`. Based on
`),Ea=s(na,"A",{href:!0,rel:!0});var xw=r(Ea);tf=d(xw,"SentencePiece"),xw.forEach(t),of=d(na,"."),na.forEach(t),nf=h(Se),Ca=s(Se,"P",{});var ch=r(Ca);af=d(ch,"The tokenization method is "),Pd=s(ch,"CODE",{});var zw=r(Pd);sf=d(zw,"<tokens> <eos> <language code>"),zw.forEach(t),rf=d(ch," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),ch.forEach(t),df=h(Se),v(jo.$$.fragment,Se),lf=h(Se),Eo=s(Se,"DIV",{class:!0});var ph=r(Eo);v(Pa.$$.fragment,ph),cf=h(ph),Sd=s(ph,"P",{});var Fw=r(Sd);pf=d(Fw,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),Fw.forEach(t),ph.forEach(t),hf=h(Se),Je=s(Se,"DIV",{class:!0});var aa=r(Je);v(Sa.$$.fragment,aa),uf=h(aa),Aa=s(aa,"P",{});var hh=r(Aa);mf=d(hh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Ad=s(hh,"CODE",{});var qw=r(Ad);ff=d(qw,"X"),qw.forEach(t),gf=d(hh," represents the sequence:"),hh.forEach(t),_f=h(aa),Oa=s(aa,"UL",{});var uh=r(Oa);Ia=s(uh,"LI",{});var mh=r(Ia);Od=s(mh,"CODE",{});var Bw=r(Od);bf=d(Bw,"input_ids"),Bw.forEach(t),kf=d(mh," (for encoder) "),Id=s(mh,"CODE",{});var jw=r(Id);yf=d(jw,"X [eos, src_lang_code]"),jw.forEach(t),mh.forEach(t),vf=h(uh),Na=s(uh,"LI",{});var fh=r(Na);Nd=s(fh,"CODE",{});var Ew=r(Nd);Tf=d(Ew,"decoder_input_ids"),Ew.forEach(t),wf=d(fh,": (for decoder) "),Dd=s(fh,"CODE",{});var Cw=r(Dd);Mf=d(Cw,"X [eos, tgt_lang_code]"),Cw.forEach(t),fh.forEach(t),uh.forEach(t),$f=h(aa),Ld=s(aa,"P",{});var Pw=r(Ld);xf=d(Pw,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Pw.forEach(t),aa.forEach(t),Se.forEach(t),Bp=h(o),Xt=s(o,"H2",{class:!0});var gh=r(Xt);Co=s(gh,"A",{id:!0,class:!0,href:!0});var Sw=r(Co);Gd=s(Sw,"SPAN",{});var Aw=r(Gd);v(Da.$$.fragment,Aw),Aw.forEach(t),Sw.forEach(t),zf=h(gh),Wd=s(gh,"SPAN",{});var Ow=r(Wd);Ff=d(Ow,"MBartTokenizerFast"),Ow.forEach(t),gh.forEach(t),jp=h(o),O=s(o,"DIV",{class:!0});var Y=r(O);v(La.$$.fragment,Y),qf=h(Y),Qt=s(Y,"P",{});var Qi=r(Qt);Bf=d(Qi,"Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Rd=s(Qi,"EM",{});var Iw=r(Rd);jf=d(Iw,"tokenizers"),Iw.forEach(t),Ef=d(Qi,` library). Based on
`),Ga=s(Qi,"A",{href:!0,rel:!0});var Nw=r(Ga);Cf=d(Nw,"BPE"),Nw.forEach(t),Pf=d(Qi,"."),Qi.forEach(t),Sf=h(Y),vt=s(Y,"P",{});var li=r(vt);wi=s(li,"A",{href:!0});var Dw=r(wi);Af=d(Dw,"MBartTokenizerFast"),Dw.forEach(t),Of=d(li," is a subclass of "),Mi=s(li,"A",{href:!0});var Lw=r(Mi);If=d(Lw,"XLMRobertaTokenizerFast"),Lw.forEach(t),Nf=d(li,`. Refer to superclass
`),$i=s(li,"A",{href:!0});var Gw=r($i);Df=d(Gw,"XLMRobertaTokenizerFast"),Gw.forEach(t),Lf=d(li,` for usage examples and documentation concerning the initialization parameters and other
methods.`),li.forEach(t),Gf=h(Y),Wa=s(Y,"P",{});var _h=r(Wa);Wf=d(_h,"The tokenization method is "),Ud=s(_h,"CODE",{});var Ww=r(Ud);Rf=d(Ww,"<tokens> <eos> <language code>"),Ww.forEach(t),Uf=d(_h," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),_h.forEach(t),Xf=h(Y),v(Po.$$.fragment,Y),Qf=h(Y),qe=s(Y,"DIV",{class:!0});var Tt=r(qe);v(Ra.$$.fragment,Tt),Hf=h(Tt),Xd=s(Tt,"P",{});var Rw=r(Xd);Vf=d(Rw,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),Rw.forEach(t),Jf=h(Tt),Ua=s(Tt,"P",{});var bh=r(Ua);Kf=d(bh,"An MBART sequence has the following format, where "),Qd=s(bh,"CODE",{});var Uw=r(Qd);Zf=d(Uw,"X"),Uw.forEach(t),Yf=d(bh," represents the sequence:"),bh.forEach(t),eg=h(Tt),Xa=s(Tt,"UL",{});var kh=r(Xa);Qa=s(kh,"LI",{});var yh=r(Qa);Hd=s(yh,"CODE",{});var Xw=r(Hd);tg=d(Xw,"input_ids"),Xw.forEach(t),og=d(yh," (for encoder) "),Vd=s(yh,"CODE",{});var Qw=r(Vd);ng=d(Qw,"X [eos, src_lang_code]"),Qw.forEach(t),yh.forEach(t),ag=h(kh),Ha=s(kh,"LI",{});var vh=r(Ha);Jd=s(vh,"CODE",{});var Hw=r(Jd);sg=d(Hw,"decoder_input_ids"),Hw.forEach(t),rg=d(vh,": (for decoder) "),Kd=s(vh,"CODE",{});var Vw=r(Kd);ig=d(Vw,"X [eos, tgt_lang_code]"),Vw.forEach(t),vh.forEach(t),kh.forEach(t),dg=h(Tt),Zd=s(Tt,"P",{});var Jw=r(Zd);lg=d(Jw,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Jw.forEach(t),Tt.forEach(t),cg=h(Y),So=s(Y,"DIV",{class:!0});var Th=r(So);v(Va.$$.fragment,Th),pg=h(Th),Yd=s(Th,"P",{});var Kw=r(Yd);hg=d(Kw,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),Kw.forEach(t),Th.forEach(t),ug=h(Y),Ao=s(Y,"DIV",{class:!0});var wh=r(Ao);v(Ja.$$.fragment,wh),mg=h(wh),el=s(wh,"P",{});var Zw=r(el);fg=d(Zw,"Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),Zw.forEach(t),wh.forEach(t),gg=h(Y),Oo=s(Y,"DIV",{class:!0});var Mh=r(Oo);v(Ka.$$.fragment,Mh),_g=h(Mh),tl=s(Mh,"P",{});var Yw=r(tl);bg=d(Yw,"Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),Yw.forEach(t),Mh.forEach(t),Y.forEach(t),Ep=h(o),Ht=s(o,"H2",{class:!0});var $h=r(Ht);Io=s($h,"A",{id:!0,class:!0,href:!0});var eM=r(Io);ol=s(eM,"SPAN",{});var tM=r(ol);v(Za.$$.fragment,tM),tM.forEach(t),eM.forEach(t),kg=h($h),nl=s($h,"SPAN",{});var oM=r(nl);yg=d(oM,"MBart50Tokenizer"),oM.forEach(t),$h.forEach(t),Cp=h(o),I=s(o,"DIV",{class:!0});var ee=r(I);v(Ya.$$.fragment,ee),vg=h(ee),es=s(ee,"P",{});var xh=r(es);Tg=d(xh,"Construct a MBart50 tokenizer. Based on "),ts=s(xh,"A",{href:!0,rel:!0});var nM=r(ts);wg=d(nM,"SentencePiece"),nM.forEach(t),Mg=d(xh,"."),xh.forEach(t),$g=h(ee),os=s(ee,"P",{});var zh=r(os);xg=d(zh,"This tokenizer inherits from "),xi=s(zh,"A",{href:!0});var aM=r(xi);zg=d(aM,"PreTrainedTokenizer"),aM.forEach(t),Fg=d(zh,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),zh.forEach(t),qg=h(ee),v(No.$$.fragment,ee),Bg=h(ee),Ke=s(ee,"DIV",{class:!0});var sa=r(Ke);v(ns.$$.fragment,sa),jg=h(sa),as=s(sa,"P",{});var Fh=r(as);Eg=d(Fh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),al=s(Fh,"CODE",{});var sM=r(al);Cg=d(sM,"X"),sM.forEach(t),Pg=d(Fh," represents the sequence:"),Fh.forEach(t),Sg=h(sa),ss=s(sa,"UL",{});var qh=r(ss);rs=s(qh,"LI",{});var Bh=r(rs);sl=s(Bh,"CODE",{});var rM=r(sl);Ag=d(rM,"input_ids"),rM.forEach(t),Og=d(Bh," (for encoder) "),rl=s(Bh,"CODE",{});var iM=r(rl);Ig=d(iM,"[src_lang_code] X [eos]"),iM.forEach(t),Bh.forEach(t),Ng=h(qh),is=s(qh,"LI",{});var jh=r(is);il=s(jh,"CODE",{});var dM=r(il);Dg=d(dM,"labels"),dM.forEach(t),Lg=d(jh,": (for decoder) "),dl=s(jh,"CODE",{});var lM=r(dl);Gg=d(lM,"[tgt_lang_code] X [eos]"),lM.forEach(t),jh.forEach(t),qh.forEach(t),Wg=h(sa),ll=s(sa,"P",{});var cM=r(ll);Rg=d(cM,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),cM.forEach(t),sa.forEach(t),Ug=h(ee),Do=s(ee,"DIV",{class:!0});var Eh=r(Do);v(ds.$$.fragment,Eh),Xg=h(Eh),cl=s(Eh,"P",{});var pM=r(cl);Qg=d(pM,"Converts a sequence of tokens (strings for sub-words) in a single string."),pM.forEach(t),Eh.forEach(t),Hg=h(ee),Lo=s(ee,"DIV",{class:!0});var Ch=r(Lo);v(ls.$$.fragment,Ch),Vg=h(Ch),cs=s(Ch,"P",{});var Ph=r(cs);Jg=d(Ph,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),pl=s(Ph,"CODE",{});var hM=r(pl);Kg=d(hM,"prepare_for_model"),hM.forEach(t),Zg=d(Ph," method."),Ph.forEach(t),Ch.forEach(t),Yg=h(ee),Go=s(ee,"DIV",{class:!0});var Sh=r(Go);v(ps.$$.fragment,Sh),e_=h(Sh),hl=s(Sh,"P",{});var uM=r(hl);t_=d(uM,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),uM.forEach(t),Sh.forEach(t),o_=h(ee),Wo=s(ee,"DIV",{class:!0});var Ah=r(Wo);v(hs.$$.fragment,Ah),n_=h(Ah),ul=s(Ah,"P",{});var mM=r(ul);a_=d(mM,"Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),mM.forEach(t),Ah.forEach(t),ee.forEach(t),Pp=h(o),Vt=s(o,"H2",{class:!0});var Oh=r(Vt);Ro=s(Oh,"A",{id:!0,class:!0,href:!0});var fM=r(Ro);ml=s(fM,"SPAN",{});var gM=r(ml);v(us.$$.fragment,gM),gM.forEach(t),fM.forEach(t),s_=h(Oh),fl=s(Oh,"SPAN",{});var _M=r(fl);r_=d(_M,"MBart50TokenizerFast"),_M.forEach(t),Oh.forEach(t),Sp=h(o),K=s(o,"DIV",{class:!0});var Ae=r(K);v(ms.$$.fragment,Ae),i_=h(Ae),Jt=s(Ae,"P",{});var Hi=r(Jt);d_=d(Hi,"Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),gl=s(Hi,"EM",{});var bM=r(gl);l_=d(bM,"tokenizers"),bM.forEach(t),c_=d(Hi,` library). Based on
`),fs=s(Hi,"A",{href:!0,rel:!0});var kM=r(fs);p_=d(kM,"BPE"),kM.forEach(t),h_=d(Hi,"."),Hi.forEach(t),u_=h(Ae),gs=s(Ae,"P",{});var Ih=r(gs);m_=d(Ih,"This tokenizer inherits from "),zi=s(Ih,"A",{href:!0});var yM=r(zi);f_=d(yM,"PreTrainedTokenizerFast"),yM.forEach(t),g_=d(Ih,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ih.forEach(t),__=h(Ae),v(Uo.$$.fragment,Ae),b_=h(Ae),Be=s(Ae,"DIV",{class:!0});var wt=r(Be);v(_s.$$.fragment,wt),k_=h(wt),_l=s(wt,"P",{});var vM=r(_l);y_=d(vM,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),vM.forEach(t),v_=h(wt),bs=s(wt,"P",{});var Nh=r(bs);T_=d(Nh,"An MBART-50 sequence has the following format, where "),bl=s(Nh,"CODE",{});var TM=r(bl);w_=d(TM,"X"),TM.forEach(t),M_=d(Nh," represents the sequence:"),Nh.forEach(t),$_=h(wt),ks=s(wt,"UL",{});var Dh=r(ks);ys=s(Dh,"LI",{});var Lh=r(ys);kl=s(Lh,"CODE",{});var wM=r(kl);x_=d(wM,"input_ids"),wM.forEach(t),z_=d(Lh," (for encoder) "),yl=s(Lh,"CODE",{});var MM=r(yl);F_=d(MM,"[src_lang_code] X [eos]"),MM.forEach(t),Lh.forEach(t),q_=h(Dh),vs=s(Dh,"LI",{});var Gh=r(vs);vl=s(Gh,"CODE",{});var $M=r(vl);B_=d($M,"labels"),$M.forEach(t),j_=d(Gh,": (for decoder) "),Tl=s(Gh,"CODE",{});var xM=r(Tl);E_=d(xM,"[tgt_lang_code] X [eos]"),xM.forEach(t),Gh.forEach(t),Dh.forEach(t),C_=h(wt),wl=s(wt,"P",{});var zM=r(wl);P_=d(zM,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),zM.forEach(t),wt.forEach(t),S_=h(Ae),Xo=s(Ae,"DIV",{class:!0});var Wh=r(Xo);v(Ts.$$.fragment,Wh),A_=h(Wh),Ml=s(Wh,"P",{});var FM=r(Ml);O_=d(FM,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),FM.forEach(t),Wh.forEach(t),I_=h(Ae),Qo=s(Ae,"DIV",{class:!0});var Rh=r(Qo);v(ws.$$.fragment,Rh),N_=h(Rh),$l=s(Rh,"P",{});var qM=r($l);D_=d(qM,"Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),qM.forEach(t),Rh.forEach(t),Ae.forEach(t),Ap=h(o),Kt=s(o,"H2",{class:!0});var Uh=r(Kt);Ho=s(Uh,"A",{id:!0,class:!0,href:!0});var BM=r(Ho);xl=s(BM,"SPAN",{});var jM=r(xl);v(Ms.$$.fragment,jM),jM.forEach(t),BM.forEach(t),L_=h(Uh),zl=s(Uh,"SPAN",{});var EM=r(zl);G_=d(EM,"MBartModel"),EM.forEach(t),Uh.forEach(t),Op=h(o),We=s(o,"DIV",{class:!0});var ra=r(We);v($s.$$.fragment,ra),W_=h(ra),xs=s(ra,"P",{});var Xh=r(xs);R_=d(Xh,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Fi=s(Xh,"A",{href:!0});var CM=r(Fi);U_=d(CM,"PreTrainedModel"),CM.forEach(t),X_=d(Xh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xh.forEach(t),Q_=h(ra),zs=s(ra,"P",{});var Qh=r(zs);H_=d(Qh,"This model is also a PyTorch "),Fs=s(Qh,"A",{href:!0,rel:!0});var PM=r(Fs);V_=d(PM,"torch.nn.Module"),PM.forEach(t),J_=d(Qh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qh.forEach(t),K_=h(ra),Ze=s(ra,"DIV",{class:!0});var ia=r(Ze);v(qs.$$.fragment,ia),Z_=h(ia),Zt=s(ia,"P",{});var Vi=r(Zt);Y_=d(Vi,"The "),qi=s(Vi,"A",{href:!0});var SM=r(qi);eb=d(SM,"MBartModel"),SM.forEach(t),tb=d(Vi," forward method, overrides the "),Fl=s(Vi,"CODE",{});var AM=r(Fl);ob=d(AM,"__call__"),AM.forEach(t),nb=d(Vi," special method."),Vi.forEach(t),ab=h(ia),v(Vo.$$.fragment,ia),sb=h(ia),v(Jo.$$.fragment,ia),ia.forEach(t),ra.forEach(t),Ip=h(o),Yt=s(o,"H2",{class:!0});var Hh=r(Yt);Ko=s(Hh,"A",{id:!0,class:!0,href:!0});var OM=r(Ko);ql=s(OM,"SPAN",{});var IM=r(ql);v(Bs.$$.fragment,IM),IM.forEach(t),OM.forEach(t),rb=h(Hh),Bl=s(Hh,"SPAN",{});var NM=r(Bl);ib=d(NM,"MBartForConditionalGeneration"),NM.forEach(t),Hh.forEach(t),Np=h(o),Re=s(o,"DIV",{class:!0});var da=r(Re);v(js.$$.fragment,da),db=h(da),Es=s(da,"P",{});var Vh=r(Es);lb=d(Vh,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Bi=s(Vh,"A",{href:!0});var DM=r(Bi);cb=d(DM,"PreTrainedModel"),DM.forEach(t),pb=d(Vh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vh.forEach(t),hb=h(da),Cs=s(da,"P",{});var Jh=r(Cs);ub=d(Jh,"This model is also a PyTorch "),Ps=s(Jh,"A",{href:!0,rel:!0});var LM=r(Ps);mb=d(LM,"torch.nn.Module"),LM.forEach(t),fb=d(Jh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jh.forEach(t),gb=h(da),je=s(da,"DIV",{class:!0});var Mt=r(je);v(Ss.$$.fragment,Mt),_b=h(Mt),eo=s(Mt,"P",{});var Ji=r(eo);bb=d(Ji,"The "),ji=s(Ji,"A",{href:!0});var GM=r(ji);kb=d(GM,"MBartForConditionalGeneration"),GM.forEach(t),yb=d(Ji," forward method, overrides the "),jl=s(Ji,"CODE",{});var WM=r(jl);vb=d(WM,"__call__"),WM.forEach(t),Tb=d(Ji," special method."),Ji.forEach(t),wb=h(Mt),v(Zo.$$.fragment,Mt),Mb=h(Mt),v(Yo.$$.fragment,Mt),$b=h(Mt),v(en.$$.fragment,Mt),Mt.forEach(t),da.forEach(t),Dp=h(o),to=s(o,"H2",{class:!0});var Kh=r(to);tn=s(Kh,"A",{id:!0,class:!0,href:!0});var RM=r(tn);El=s(RM,"SPAN",{});var UM=r(El);v(As.$$.fragment,UM),UM.forEach(t),RM.forEach(t),xb=h(Kh),Cl=s(Kh,"SPAN",{});var XM=r(Cl);zb=d(XM,"MBartForQuestionAnswering"),XM.forEach(t),Kh.forEach(t),Lp=h(o),we=s(o,"DIV",{class:!0});var $t=r(we);v(Os.$$.fragment,$t),Fb=h($t),oo=s($t,"P",{});var Ki=r(oo);qb=d(Ki,`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Pl=s(Ki,"CODE",{});var QM=r(Pl);Bb=d(QM,"span start logits"),QM.forEach(t),jb=d(Ki," and "),Sl=s(Ki,"CODE",{});var HM=r(Sl);Eb=d(HM,"span end logits"),HM.forEach(t),Cb=d(Ki,")."),Ki.forEach(t),Pb=h($t),Is=s($t,"P",{});var Zh=r(Is);Sb=d(Zh,"This model inherits from "),Ei=s(Zh,"A",{href:!0});var VM=r(Ei);Ab=d(VM,"PreTrainedModel"),VM.forEach(t),Ob=d(Zh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zh.forEach(t),Ib=h($t),Ns=s($t,"P",{});var Yh=r(Ns);Nb=d(Yh,"This model is also a PyTorch "),Ds=s(Yh,"A",{href:!0,rel:!0});var JM=r(Ds);Db=d(JM,"torch.nn.Module"),JM.forEach(t),Lb=d(Yh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yh.forEach(t),Gb=h($t),Ee=s($t,"DIV",{class:!0});var xt=r(Ee);v(Ls.$$.fragment,xt),Wb=h(xt),no=s(xt,"P",{});var Zi=r(no);Rb=d(Zi,"The "),Ci=s(Zi,"A",{href:!0});var KM=r(Ci);Ub=d(KM,"MBartForQuestionAnswering"),KM.forEach(t),Xb=d(Zi," forward method, overrides the "),Al=s(Zi,"CODE",{});var ZM=r(Al);Qb=d(ZM,"__call__"),ZM.forEach(t),Hb=d(Zi," special method."),Zi.forEach(t),Vb=h(xt),v(on.$$.fragment,xt),Jb=h(xt),v(nn.$$.fragment,xt),Kb=h(xt),v(an.$$.fragment,xt),xt.forEach(t),$t.forEach(t),Gp=h(o),ao=s(o,"H2",{class:!0});var eu=r(ao);sn=s(eu,"A",{id:!0,class:!0,href:!0});var YM=r(sn);Ol=s(YM,"SPAN",{});var e$=r(Ol);v(Gs.$$.fragment,e$),e$.forEach(t),YM.forEach(t),Zb=h(eu),Il=s(eu,"SPAN",{});var t$=r(Il);Yb=d(t$,"MBartForSequenceClassification"),t$.forEach(t),eu.forEach(t),Wp=h(o),Me=s(o,"DIV",{class:!0});var zt=r(Me);v(Ws.$$.fragment,zt),ek=h(zt),Nl=s(zt,"P",{});var o$=r(Nl);tk=d(o$,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),o$.forEach(t),ok=h(zt),Rs=s(zt,"P",{});var tu=r(Rs);nk=d(tu,"This model inherits from "),Pi=s(tu,"A",{href:!0});var n$=r(Pi);ak=d(n$,"PreTrainedModel"),n$.forEach(t),sk=d(tu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tu.forEach(t),rk=h(zt),Us=s(zt,"P",{});var ou=r(Us);ik=d(ou,"This model is also a PyTorch "),Xs=s(ou,"A",{href:!0,rel:!0});var a$=r(Xs);dk=d(a$,"torch.nn.Module"),a$.forEach(t),lk=d(ou,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ou.forEach(t),ck=h(zt),Z=s(zt,"DIV",{class:!0});var Oe=r(Z);v(Qs.$$.fragment,Oe),pk=h(Oe),so=s(Oe,"P",{});var Yi=r(so);hk=d(Yi,"The "),Si=s(Yi,"A",{href:!0});var s$=r(Si);uk=d(s$,"MBartForSequenceClassification"),s$.forEach(t),mk=d(Yi," forward method, overrides the "),Dl=s(Yi,"CODE",{});var r$=r(Dl);fk=d(r$,"__call__"),r$.forEach(t),gk=d(Yi," special method."),Yi.forEach(t),_k=h(Oe),v(rn.$$.fragment,Oe),bk=h(Oe),v(dn.$$.fragment,Oe),kk=h(Oe),v(ln.$$.fragment,Oe),yk=h(Oe),v(cn.$$.fragment,Oe),vk=h(Oe),v(pn.$$.fragment,Oe),Oe.forEach(t),zt.forEach(t),Rp=h(o),ro=s(o,"H2",{class:!0});var nu=r(ro);hn=s(nu,"A",{id:!0,class:!0,href:!0});var i$=r(hn);Ll=s(i$,"SPAN",{});var d$=r(Ll);v(Hs.$$.fragment,d$),d$.forEach(t),i$.forEach(t),Tk=h(nu),Gl=s(nu,"SPAN",{});var l$=r(Gl);wk=d(l$,"MBartForCausalLM"),l$.forEach(t),nu.forEach(t),Up=h(o),io=s(o,"DIV",{class:!0});var au=r(io);v(Vs.$$.fragment,au),Mk=h(au),un=s(au,"DIV",{class:!0});var su=r(un);v(Js.$$.fragment,su),$k=h(su),v(mn.$$.fragment,su),su.forEach(t),au.forEach(t),Xp=h(o),lo=s(o,"H2",{class:!0});var ru=r(lo);fn=s(ru,"A",{id:!0,class:!0,href:!0});var c$=r(fn);Wl=s(c$,"SPAN",{});var p$=r(Wl);v(Ks.$$.fragment,p$),p$.forEach(t),c$.forEach(t),xk=h(ru),Rl=s(ru,"SPAN",{});var h$=r(Rl);zk=d(h$,"TFMBartModel"),h$.forEach(t),ru.forEach(t),Qp=h(o),$e=s(o,"DIV",{class:!0});var Ft=r($e);v(Zs.$$.fragment,Ft),Fk=h(Ft),Ys=s(Ft,"P",{});var iu=r(Ys);qk=d(iu,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Ai=s(iu,"A",{href:!0});var u$=r(Ai);Bk=d(u$,"TFPreTrainedModel"),u$.forEach(t),jk=d(iu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),iu.forEach(t),Ek=h(Ft),er=s(Ft,"P",{});var du=r(er);Ck=d(du,"This model is also a "),tr=s(du,"A",{href:!0,rel:!0});var m$=r(tr);Pk=d(m$,"tf.keras.Model"),m$.forEach(t),Sk=d(du,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),du.forEach(t),Ak=h(Ft),v(gn.$$.fragment,Ft),Ok=h(Ft),Ye=s(Ft,"DIV",{class:!0});var la=r(Ye);v(or.$$.fragment,la),Ik=h(la),co=s(la,"P",{});var ed=r(co);Nk=d(ed,"The "),Oi=s(ed,"A",{href:!0});var f$=r(Oi);Dk=d(f$,"TFMBartModel"),f$.forEach(t),Lk=d(ed," forward method, overrides the "),Ul=s(ed,"CODE",{});var g$=r(Ul);Gk=d(g$,"__call__"),g$.forEach(t),Wk=d(ed," special method."),ed.forEach(t),Rk=h(la),v(_n.$$.fragment,la),Uk=h(la),v(bn.$$.fragment,la),la.forEach(t),Ft.forEach(t),Hp=h(o),po=s(o,"H2",{class:!0});var lu=r(po);kn=s(lu,"A",{id:!0,class:!0,href:!0});var _$=r(kn);Xl=s(_$,"SPAN",{});var b$=r(Xl);v(nr.$$.fragment,b$),b$.forEach(t),_$.forEach(t),Xk=h(lu),Ql=s(lu,"SPAN",{});var k$=r(Ql);Qk=d(k$,"TFMBartForConditionalGeneration"),k$.forEach(t),lu.forEach(t),Vp=h(o),xe=s(o,"DIV",{class:!0});var qt=r(xe);v(ar.$$.fragment,qt),Hk=h(qt),sr=s(qt,"P",{});var cu=r(sr);Vk=d(cu,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ii=s(cu,"A",{href:!0});var y$=r(Ii);Jk=d(y$,"TFPreTrainedModel"),y$.forEach(t),Kk=d(cu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cu.forEach(t),Zk=h(qt),rr=s(qt,"P",{});var pu=r(rr);Yk=d(pu,"This model is also a "),ir=s(pu,"A",{href:!0,rel:!0});var v$=r(ir);ey=d(v$,"tf.keras.Model"),v$.forEach(t),ty=d(pu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pu.forEach(t),oy=h(qt),v(yn.$$.fragment,qt),ny=h(qt),Ce=s(qt,"DIV",{class:!0});var Bt=r(Ce);v(dr.$$.fragment,Bt),ay=h(Bt),ho=s(Bt,"P",{});var td=r(ho);sy=d(td,"The "),Ni=s(td,"A",{href:!0});var T$=r(Ni);ry=d(T$,"TFMBartForConditionalGeneration"),T$.forEach(t),iy=d(td," forward method, overrides the "),Hl=s(td,"CODE",{});var w$=r(Hl);dy=d(w$,"__call__"),w$.forEach(t),ly=d(td," special method."),td.forEach(t),cy=h(Bt),v(vn.$$.fragment,Bt),py=h(Bt),v(Tn.$$.fragment,Bt),hy=h(Bt),v(wn.$$.fragment,Bt),Bt.forEach(t),qt.forEach(t),Jp=h(o),uo=s(o,"H2",{class:!0});var hu=r(uo);Mn=s(hu,"A",{id:!0,class:!0,href:!0});var M$=r(Mn);Vl=s(M$,"SPAN",{});var $$=r(Vl);v(lr.$$.fragment,$$),$$.forEach(t),M$.forEach(t),uy=h(hu),Jl=s(hu,"SPAN",{});var x$=r(Jl);my=d(x$,"FlaxMBartModel"),x$.forEach(t),hu.forEach(t),Kp=h(o),W=s(o,"DIV",{class:!0});var pe=r(W);v(cr.$$.fragment,pe),fy=h(pe),pr=s(pe,"P",{});var uu=r(pr);gy=d(uu,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Di=s(uu,"A",{href:!0});var z$=r(Di);_y=d(z$,"FlaxPreTrainedModel"),z$.forEach(t),by=d(uu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uu.forEach(t),ky=h(pe),hr=s(pe,"P",{});var mu=r(hr);yy=d(mu,`This model is also a Flax Linen
`),ur=s(mu,"A",{href:!0,rel:!0});var F$=r(ur);vy=d(F$,"flax.nn.Module"),F$.forEach(t),Ty=d(mu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),mu.forEach(t),wy=h(pe),Kl=s(pe,"P",{});var q$=r(Kl);My=d(q$,"Finally, this model supports inherent JAX features such as:"),q$.forEach(t),$y=h(pe),mt=s(pe,"UL",{});var ca=r(mt);Zl=s(ca,"LI",{});var B$=r(Zl);mr=s(B$,"A",{href:!0,rel:!0});var j$=r(mr);xy=d(j$,"Just-In-Time (JIT) compilation"),j$.forEach(t),B$.forEach(t),zy=h(ca),Yl=s(ca,"LI",{});var E$=r(Yl);fr=s(E$,"A",{href:!0,rel:!0});var C$=r(fr);Fy=d(C$,"Automatic Differentiation"),C$.forEach(t),E$.forEach(t),qy=h(ca),ec=s(ca,"LI",{});var P$=r(ec);gr=s(P$,"A",{href:!0,rel:!0});var S$=r(gr);By=d(S$,"Vectorization"),S$.forEach(t),P$.forEach(t),jy=h(ca),tc=s(ca,"LI",{});var A$=r(tc);_r=s(A$,"A",{href:!0,rel:!0});var O$=r(_r);Ey=d(O$,"Parallelization"),O$.forEach(t),A$.forEach(t),ca.forEach(t),Cy=h(pe),et=s(pe,"DIV",{class:!0});var pa=r(et);v(br.$$.fragment,pa),Py=h(pa),mo=s(pa,"P",{});var od=r(mo);Sy=d(od,"The "),oc=s(od,"CODE",{});var I$=r(oc);Ay=d(I$,"FlaxMBartPreTrainedModel"),I$.forEach(t),Oy=d(od," forward method, overrides the "),nc=s(od,"CODE",{});var N$=r(nc);Iy=d(N$,"__call__"),N$.forEach(t),Ny=d(od," special method."),od.forEach(t),Dy=h(pa),v($n.$$.fragment,pa),Ly=h(pa),v(xn.$$.fragment,pa),pa.forEach(t),Gy=h(pe),zn=s(pe,"DIV",{class:!0});var fu=r(zn);v(kr.$$.fragment,fu),Wy=h(fu),v(Fn.$$.fragment,fu),fu.forEach(t),Ry=h(pe),qn=s(pe,"DIV",{class:!0});var gu=r(qn);v(yr.$$.fragment,gu),Uy=h(gu),v(Bn.$$.fragment,gu),gu.forEach(t),pe.forEach(t),Zp=h(o),fo=s(o,"H2",{class:!0});var _u=r(fo);jn=s(_u,"A",{id:!0,class:!0,href:!0});var D$=r(jn);ac=s(D$,"SPAN",{});var L$=r(ac);v(vr.$$.fragment,L$),L$.forEach(t),D$.forEach(t),Xy=h(_u),sc=s(_u,"SPAN",{});var G$=r(sc);Qy=d(G$,"FlaxMBartForConditionalGeneration"),G$.forEach(t),_u.forEach(t),Yp=h(o),R=s(o,"DIV",{class:!0});var he=r(R);v(Tr.$$.fragment,he),Hy=h(he),wr=s(he,"P",{});var bu=r(wr);Vy=d(bu,`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),Li=s(bu,"A",{href:!0});var W$=r(Li);Jy=d(W$,"FlaxPreTrainedModel"),W$.forEach(t),Ky=d(bu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bu.forEach(t),Zy=h(he),Mr=s(he,"P",{});var ku=r(Mr);Yy=d(ku,`This model is also a Flax Linen
`),$r=s(ku,"A",{href:!0,rel:!0});var R$=r($r);ev=d(R$,"flax.nn.Module"),R$.forEach(t),tv=d(ku,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ku.forEach(t),ov=h(he),rc=s(he,"P",{});var U$=r(rc);nv=d(U$,"Finally, this model supports inherent JAX features such as:"),U$.forEach(t),av=h(he),ft=s(he,"UL",{});var ha=r(ft);ic=s(ha,"LI",{});var X$=r(ic);xr=s(X$,"A",{href:!0,rel:!0});var Q$=r(xr);sv=d(Q$,"Just-In-Time (JIT) compilation"),Q$.forEach(t),X$.forEach(t),rv=h(ha),dc=s(ha,"LI",{});var H$=r(dc);zr=s(H$,"A",{href:!0,rel:!0});var V$=r(zr);iv=d(V$,"Automatic Differentiation"),V$.forEach(t),H$.forEach(t),dv=h(ha),lc=s(ha,"LI",{});var J$=r(lc);Fr=s(J$,"A",{href:!0,rel:!0});var K$=r(Fr);lv=d(K$,"Vectorization"),K$.forEach(t),J$.forEach(t),cv=h(ha),cc=s(ha,"LI",{});var Z$=r(cc);qr=s(Z$,"A",{href:!0,rel:!0});var Y$=r(qr);pv=d(Y$,"Parallelization"),Y$.forEach(t),Z$.forEach(t),ha.forEach(t),hv=h(he),Pe=s(he,"DIV",{class:!0});var jt=r(Pe);v(Br.$$.fragment,jt),uv=h(jt),go=s(jt,"P",{});var nd=r(go);mv=d(nd,"The "),pc=s(nd,"CODE",{});var ex=r(pc);fv=d(ex,"FlaxMBartPreTrainedModel"),ex.forEach(t),gv=d(nd," forward method, overrides the "),hc=s(nd,"CODE",{});var tx=r(hc);_v=d(tx,"__call__"),tx.forEach(t),bv=d(nd," special method."),nd.forEach(t),kv=h(jt),v(En.$$.fragment,jt),yv=h(jt),v(Cn.$$.fragment,jt),vv=h(jt),v(Pn.$$.fragment,jt),jt.forEach(t),Tv=h(he),Sn=s(he,"DIV",{class:!0});var yu=r(Sn);v(jr.$$.fragment,yu),wv=h(yu),v(An.$$.fragment,yu),yu.forEach(t),Mv=h(he),On=s(he,"DIV",{class:!0});var vu=r(On);v(Er.$$.fragment,vu),$v=h(vu),v(In.$$.fragment,vu),vu.forEach(t),he.forEach(t),eh=h(o),_o=s(o,"H2",{class:!0});var Tu=r(_o);Nn=s(Tu,"A",{id:!0,class:!0,href:!0});var ox=r(Nn);uc=s(ox,"SPAN",{});var nx=r(uc);v(Cr.$$.fragment,nx),nx.forEach(t),ox.forEach(t),xv=h(Tu),mc=s(Tu,"SPAN",{});var ax=r(mc);zv=d(ax,"FlaxMBartForSequenceClassification"),ax.forEach(t),Tu.forEach(t),th=h(o),N=s(o,"DIV",{class:!0});var te=r(N);v(Pr.$$.fragment,te),Fv=h(te),fc=s(te,"P",{});var sx=r(fc);qv=d(sx,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),sx.forEach(t),Bv=h(te),Sr=s(te,"P",{});var wu=r(Sr);jv=d(wu,"This model inherits from "),Gi=s(wu,"A",{href:!0});var rx=r(Gi);Ev=d(rx,"FlaxPreTrainedModel"),rx.forEach(t),Cv=d(wu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wu.forEach(t),Pv=h(te),Ar=s(te,"P",{});var Mu=r(Ar);Sv=d(Mu,`This model is also a Flax Linen
`),Or=s(Mu,"A",{href:!0,rel:!0});var ix=r(Or);Av=d(ix,"flax.nn.Module"),ix.forEach(t),Ov=d(Mu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Mu.forEach(t),Iv=h(te),gc=s(te,"P",{});var dx=r(gc);Nv=d(dx,"Finally, this model supports inherent JAX features such as:"),dx.forEach(t),Dv=h(te),gt=s(te,"UL",{});var ua=r(gt);_c=s(ua,"LI",{});var lx=r(_c);Ir=s(lx,"A",{href:!0,rel:!0});var cx=r(Ir);Lv=d(cx,"Just-In-Time (JIT) compilation"),cx.forEach(t),lx.forEach(t),Gv=h(ua),bc=s(ua,"LI",{});var px=r(bc);Nr=s(px,"A",{href:!0,rel:!0});var hx=r(Nr);Wv=d(hx,"Automatic Differentiation"),hx.forEach(t),px.forEach(t),Rv=h(ua),kc=s(ua,"LI",{});var ux=r(kc);Dr=s(ux,"A",{href:!0,rel:!0});var mx=r(Dr);Uv=d(mx,"Vectorization"),mx.forEach(t),ux.forEach(t),Xv=h(ua),yc=s(ua,"LI",{});var fx=r(yc);Lr=s(fx,"A",{href:!0,rel:!0});var gx=r(Lr);Qv=d(gx,"Parallelization"),gx.forEach(t),fx.forEach(t),ua.forEach(t),Hv=h(te),tt=s(te,"DIV",{class:!0});var ma=r(tt);v(Gr.$$.fragment,ma),Vv=h(ma),bo=s(ma,"P",{});var ad=r(bo);Jv=d(ad,"The "),vc=s(ad,"CODE",{});var _x=r(vc);Kv=d(_x,"FlaxMBartPreTrainedModel"),_x.forEach(t),Zv=d(ad," forward method, overrides the "),Tc=s(ad,"CODE",{});var bx=r(Tc);Yv=d(bx,"__call__"),bx.forEach(t),eT=d(ad," special method."),ad.forEach(t),tT=h(ma),v(Dn.$$.fragment,ma),oT=h(ma),v(Ln.$$.fragment,ma),ma.forEach(t),nT=h(te),Gn=s(te,"DIV",{class:!0});var $u=r(Gn);v(Wr.$$.fragment,$u),aT=h($u),v(Wn.$$.fragment,$u),$u.forEach(t),sT=h(te),Rn=s(te,"DIV",{class:!0});var xu=r(Rn);v(Rr.$$.fragment,xu),rT=h(xu),v(Un.$$.fragment,xu),xu.forEach(t),te.forEach(t),oh=h(o),ko=s(o,"H2",{class:!0});var zu=r(ko);Xn=s(zu,"A",{id:!0,class:!0,href:!0});var kx=r(Xn);wc=s(kx,"SPAN",{});var yx=r(wc);v(Ur.$$.fragment,yx),yx.forEach(t),kx.forEach(t),iT=h(zu),Mc=s(zu,"SPAN",{});var vx=r(Mc);dT=d(vx,"FlaxMBartForQuestionAnswering"),vx.forEach(t),zu.forEach(t),nh=h(o),D=s(o,"DIV",{class:!0});var oe=r(D);v(Xr.$$.fragment,oe),lT=h(oe),yo=s(oe,"P",{});var sd=r(yo);cT=d(sd,`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),$c=s(sd,"CODE",{});var Tx=r($c);pT=d(Tx,"span start logits"),Tx.forEach(t),hT=d(sd," and "),xc=s(sd,"CODE",{});var wx=r(xc);uT=d(wx,"span end logits"),wx.forEach(t),mT=d(sd,")."),sd.forEach(t),fT=h(oe),Qr=s(oe,"P",{});var Fu=r(Qr);gT=d(Fu,"This model inherits from "),Wi=s(Fu,"A",{href:!0});var Mx=r(Wi);_T=d(Mx,"FlaxPreTrainedModel"),Mx.forEach(t),bT=d(Fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fu.forEach(t),kT=h(oe),Hr=s(oe,"P",{});var qu=r(Hr);yT=d(qu,`This model is also a Flax Linen
`),Vr=s(qu,"A",{href:!0,rel:!0});var $x=r(Vr);vT=d($x,"flax.nn.Module"),$x.forEach(t),TT=d(qu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),qu.forEach(t),wT=h(oe),zc=s(oe,"P",{});var xx=r(zc);MT=d(xx,"Finally, this model supports inherent JAX features such as:"),xx.forEach(t),$T=h(oe),_t=s(oe,"UL",{});var fa=r(_t);Fc=s(fa,"LI",{});var zx=r(Fc);Jr=s(zx,"A",{href:!0,rel:!0});var Fx=r(Jr);xT=d(Fx,"Just-In-Time (JIT) compilation"),Fx.forEach(t),zx.forEach(t),zT=h(fa),qc=s(fa,"LI",{});var qx=r(qc);Kr=s(qx,"A",{href:!0,rel:!0});var Bx=r(Kr);FT=d(Bx,"Automatic Differentiation"),Bx.forEach(t),qx.forEach(t),qT=h(fa),Bc=s(fa,"LI",{});var jx=r(Bc);Zr=s(jx,"A",{href:!0,rel:!0});var Ex=r(Zr);BT=d(Ex,"Vectorization"),Ex.forEach(t),jx.forEach(t),jT=h(fa),jc=s(fa,"LI",{});var Cx=r(jc);Yr=s(Cx,"A",{href:!0,rel:!0});var Px=r(Yr);ET=d(Px,"Parallelization"),Px.forEach(t),Cx.forEach(t),fa.forEach(t),CT=h(oe),ot=s(oe,"DIV",{class:!0});var ga=r(ot);v(ei.$$.fragment,ga),PT=h(ga),vo=s(ga,"P",{});var rd=r(vo);ST=d(rd,"The "),Ec=s(rd,"CODE",{});var Sx=r(Ec);AT=d(Sx,"FlaxMBartPreTrainedModel"),Sx.forEach(t),OT=d(rd," forward method, overrides the "),Cc=s(rd,"CODE",{});var Ax=r(Cc);IT=d(Ax,"__call__"),Ax.forEach(t),NT=d(rd," special method."),rd.forEach(t),DT=h(ga),v(Qn.$$.fragment,ga),LT=h(ga),v(Hn.$$.fragment,ga),ga.forEach(t),GT=h(oe),Vn=s(oe,"DIV",{class:!0});var Bu=r(Vn);v(ti.$$.fragment,Bu),WT=h(Bu),v(Jn.$$.fragment,Bu),Bu.forEach(t),RT=h(oe),Kn=s(oe,"DIV",{class:!0});var ju=r(Kn);v(oi.$$.fragment,ju),UT=h(ju),v(Zn.$$.fragment,ju),ju.forEach(t),oe.forEach(t),this.h()},h(){f(l,"name","hf:doc:metadata"),f(l,"content",JSON.stringify(E1)),f(c,"id","mbart-and-mbart50"),f(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(c,"href","#mbart-and-mbart50"),f(m,"class","relative group"),f(me,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),f(me,"rel","nofollow"),f(L,"id","overview-of-mbart"),f(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(L,"href","#overview-of-mbart"),f(Q,"class","relative group"),f(H,"href","https://arxiv.org/abs/2001.08210"),f(H,"rel","nofollow"),f(be,"href","https://huggingface.co/valhalla"),f(be,"rel","nofollow"),f(ke,"href","https://github.com/pytorch/fairseq/tree/master/examples/mbart"),f(ke,"rel","nofollow"),f(j,"id","training-of-mbart"),f(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(j,"href","#training-of-mbart"),f(z,"class","relative group"),f(_a,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"),f(ci,"href","/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizer.as_target_tokenizer"),f($o,"id","overview-of-mbart50"),f($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f($o,"href","#overview-of-mbart50"),f(Dt,"class","relative group"),f(Ta,"href","https://arxiv.org/abs/2008.00401"),f(Ta,"rel","nofollow"),f(xo,"id","training-of-mbart50"),f(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(xo,"href","#training-of-mbart50"),f(Lt,"class","relative group"),f(fi,"href","/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBart50Tokenizer"),f(Fo,"id","transformers.MBartConfig"),f(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Fo,"href","#transformers.MBartConfig"),f(Gt,"class","relative group"),f(bi,"href","/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartModel"),f(qa,"href","https://huggingface.co/facebook/mbart-large-cc25"),f(qa,"rel","nofollow"),f(ki,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),f(yi,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),f(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Bo,"id","transformers.MBartTokenizer"),f(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Bo,"href","#transformers.MBartTokenizer"),f(Ut,"class","relative group"),f(vi,"href","/docs/transformers/pr_highlight/en/model_doc/roberta#transformers.RobertaTokenizer"),f(Ti,"href","/docs/transformers/pr_highlight/en/model_doc/xlnet#transformers.XLNetTokenizer"),f(Ea,"href","https://github.com/google/sentencepiece"),f(Ea,"rel","nofollow"),f(Eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Co,"id","transformers.MBartTokenizerFast"),f(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Co,"href","#transformers.MBartTokenizerFast"),f(Xt,"class","relative group"),f(Ga,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),f(Ga,"rel","nofollow"),f(wi,"href","/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartTokenizerFast"),f(Mi,"href","/docs/transformers/pr_highlight/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizerFast"),f($i,"href","/docs/transformers/pr_highlight/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizerFast"),f(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(So,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Io,"id","transformers.MBart50Tokenizer"),f(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Io,"href","#transformers.MBart50Tokenizer"),f(Ht,"class","relative group"),f(ts,"href","https://github.com/google/sentencepiece"),f(ts,"rel","nofollow"),f(xi,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Do,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ro,"id","transformers.MBart50TokenizerFast"),f(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ro,"href","#transformers.MBart50TokenizerFast"),f(Vt,"class","relative group"),f(fs,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),f(fs,"rel","nofollow"),f(zi,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ho,"id","transformers.MBartModel"),f(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ho,"href","#transformers.MBartModel"),f(Kt,"class","relative group"),f(Fi,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),f(Fs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Fs,"rel","nofollow"),f(qi,"href","/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartModel"),f(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ko,"id","transformers.MBartForConditionalGeneration"),f(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ko,"href","#transformers.MBartForConditionalGeneration"),f(Yt,"class","relative group"),f(Bi,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),f(Ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ps,"rel","nofollow"),f(ji,"href","/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartForConditionalGeneration"),f(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tn,"id","transformers.MBartForQuestionAnswering"),f(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(tn,"href","#transformers.MBartForQuestionAnswering"),f(to,"class","relative group"),f(Ei,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),f(Ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ds,"rel","nofollow"),f(Ci,"href","/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartForQuestionAnswering"),f(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(sn,"id","transformers.MBartForSequenceClassification"),f(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(sn,"href","#transformers.MBartForSequenceClassification"),f(ao,"class","relative group"),f(Pi,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),f(Xs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Xs,"rel","nofollow"),f(Si,"href","/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.MBartForSequenceClassification"),f(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(hn,"id","transformers.MBartForCausalLM"),f(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(hn,"href","#transformers.MBartForCausalLM"),f(ro,"class","relative group"),f(un,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(fn,"id","transformers.TFMBartModel"),f(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(fn,"href","#transformers.TFMBartModel"),f(lo,"class","relative group"),f(Ai,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),f(tr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(tr,"rel","nofollow"),f(Oi,"href","/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.TFMBartModel"),f(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(kn,"id","transformers.TFMBartForConditionalGeneration"),f(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(kn,"href","#transformers.TFMBartForConditionalGeneration"),f(po,"class","relative group"),f(Ii,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),f(ir,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ir,"rel","nofollow"),f(Ni,"href","/docs/transformers/pr_highlight/en/model_doc/mbart#transformers.TFMBartForConditionalGeneration"),f(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Mn,"id","transformers.FlaxMBartModel"),f(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Mn,"href","#transformers.FlaxMBartModel"),f(uo,"class","relative group"),f(Di,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(ur,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(ur,"rel","nofollow"),f(mr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(mr,"rel","nofollow"),f(fr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(fr,"rel","nofollow"),f(gr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(gr,"rel","nofollow"),f(_r,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(_r,"rel","nofollow"),f(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(zn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(qn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(jn,"id","transformers.FlaxMBartForConditionalGeneration"),f(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(jn,"href","#transformers.FlaxMBartForConditionalGeneration"),f(fo,"class","relative group"),f(Li,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),f($r,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f($r,"rel","nofollow"),f(xr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(xr,"rel","nofollow"),f(zr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(zr,"rel","nofollow"),f(Fr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Fr,"rel","nofollow"),f(qr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(qr,"rel","nofollow"),f(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(On,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Nn,"id","transformers.FlaxMBartForSequenceClassification"),f(Nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Nn,"href","#transformers.FlaxMBartForSequenceClassification"),f(_o,"class","relative group"),f(Gi,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Or,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Or,"rel","nofollow"),f(Ir,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Ir,"rel","nofollow"),f(Nr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Nr,"rel","nofollow"),f(Dr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Dr,"rel","nofollow"),f(Lr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Lr,"rel","nofollow"),f(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Gn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Rn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Xn,"id","transformers.FlaxMBartForQuestionAnswering"),f(Xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Xn,"href","#transformers.FlaxMBartForQuestionAnswering"),f(ko,"class","relative group"),f(Wi,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Vr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Vr,"rel","nofollow"),f(Jr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Jr,"rel","nofollow"),f(Kr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Kr,"rel","nofollow"),f(Zr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Zr,"rel","nofollow"),f(Yr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Yr,"rel","nofollow"),f(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Vn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Kn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,l),b(o,k,g),b(o,m,g),e(m,c),e(c,_),T(n,_,null),e(m,u),e(m,q),e(q,st),b(o,ze,g),b(o,E,g),e(E,Ie),e(Ie,ue),e(E,rt),e(E,me),e(me,fe),e(E,it),b(o,Xe,g),b(o,Q,g),e(Q,L),e(L,Ne),T(ne,Ne,null),e(Q,S),e(Q,A),e(A,dt),b(o,le,g),b(o,ce,g),e(ce,lt),e(ce,H),e(H,ct),e(ce,pt),b(o,G,g),b(o,Fe,g),e(Fe,ge),b(o,Qe,g),b(o,ae,g),e(ae,_e),e(ae,be),e(be,ht),e(ae,se),e(ae,ke),e(ke,ye),b(o,He,g),b(o,z,g),e(z,j),e(j,ve),T(De,ve,null),e(z,Et),e(z,V),e(V,Ct),b(o,bt,g),b(o,X,g),e(X,re),e(X,ie),e(ie,Pt),e(X,St),e(X,de),e(de,At),e(X,Ot),e(X,Le),e(Le,It),e(X,Eu),e(X,id),e(id,Cu),e(X,Pu),b(o,cp,g),b(o,kt,g),e(kt,Su),e(kt,_a),e(_a,dd),e(dd,Au),e(_a,Ou),e(kt,Iu),e(kt,ci),e(ci,Nu),e(kt,Du),b(o,pp,g),b(o,pi,g),e(pi,ld),e(ld,Lu),b(o,hp,g),T(ba,o,g),b(o,up,g),b(o,hi,g),e(hi,ka),e(ka,cd),e(cd,Gu),e(ka,Wu),e(ka,Nt),e(Nt,Ru),e(Nt,pd),e(pd,Uu),e(Nt,Xu),e(Nt,hd),e(hd,Qu),e(Nt,Hu),b(o,mp,g),T(ya,o,g),b(o,fp,g),b(o,Dt,g),e(Dt,$o),e($o,ud),T(va,ud,null),e(Dt,Vu),e(Dt,md),e(md,Ju),b(o,gp,g),b(o,yt,g),e(yt,Ku),e(yt,Ta),e(Ta,Zu),e(yt,Yu),e(yt,fd),e(fd,em),e(yt,tm),b(o,_p,g),b(o,ui,g),e(ui,om),b(o,bp,g),b(o,mi,g),e(mi,gd),e(gd,nm),b(o,kp,g),b(o,Lt,g),e(Lt,xo),e(xo,_d),T(wa,_d,null),e(Lt,am),e(Lt,bd),e(bd,sm),b(o,yp,g),b(o,Ve,g),e(Ve,rm),e(Ve,kd),e(kd,im),e(Ve,dm),e(Ve,yd),e(yd,lm),e(Ve,cm),e(Ve,vd),e(vd,pm),e(Ve,hm),b(o,vp,g),b(o,zo,g),e(zo,um),e(zo,fi),e(fi,mm),e(zo,fm),b(o,Tp,g),b(o,gi,g),e(gi,Td),e(Td,gm),b(o,wp,g),T(Ma,o,g),b(o,Mp,g),b(o,_i,g),e(_i,$a),e($a,wd),e(wd,_m),e($a,bm),e($a,Te),e(Te,km),e(Te,Md),e(Md,ym),e(Te,vm),e(Te,$d),e($d,Tm),e(Te,wm),e(Te,xd),e(xd,Mm),e(Te,$m),e(Te,zd),e(zd,xm),e(Te,zm),e(Te,Fd),e(Fd,Fm),e(Te,qm),b(o,$p,g),T(xa,o,g),b(o,xp,g),b(o,Gt,g),e(Gt,Fo),e(Fo,qd),T(za,qd,null),e(Gt,Bm),e(Gt,Bd),e(Bd,jm),b(o,zp,g),b(o,Ge,g),T(Fa,Ge,null),e(Ge,Em),e(Ge,Wt),e(Wt,Cm),e(Wt,bi),e(bi,Pm),e(Wt,Sm),e(Wt,qa),e(qa,Am),e(Wt,Om),e(Ge,Im),e(Ge,Rt),e(Rt,Nm),e(Rt,ki),e(ki,Dm),e(Rt,Lm),e(Rt,yi),e(yi,Gm),e(Rt,Wm),e(Ge,Rm),T(qo,Ge,null),b(o,Fp,g),b(o,Ut,g),e(Ut,Bo),e(Bo,jd),T(Ba,jd,null),e(Ut,Um),e(Ut,Ed),e(Ed,Xm),b(o,qp,g),b(o,J,g),T(ja,J,null),e(J,Qm),e(J,Cd),e(Cd,Hm),e(J,Vm),e(J,ut),e(ut,Jm),e(ut,vi),e(vi,Km),e(ut,Zm),e(ut,Ti),e(Ti,Ym),e(ut,ef),e(ut,Ea),e(Ea,tf),e(ut,of),e(J,nf),e(J,Ca),e(Ca,af),e(Ca,Pd),e(Pd,sf),e(Ca,rf),e(J,df),T(jo,J,null),e(J,lf),e(J,Eo),T(Pa,Eo,null),e(Eo,cf),e(Eo,Sd),e(Sd,pf),e(J,hf),e(J,Je),T(Sa,Je,null),e(Je,uf),e(Je,Aa),e(Aa,mf),e(Aa,Ad),e(Ad,ff),e(Aa,gf),e(Je,_f),e(Je,Oa),e(Oa,Ia),e(Ia,Od),e(Od,bf),e(Ia,kf),e(Ia,Id),e(Id,yf),e(Oa,vf),e(Oa,Na),e(Na,Nd),e(Nd,Tf),e(Na,wf),e(Na,Dd),e(Dd,Mf),e(Je,$f),e(Je,Ld),e(Ld,xf),b(o,Bp,g),b(o,Xt,g),e(Xt,Co),e(Co,Gd),T(Da,Gd,null),e(Xt,zf),e(Xt,Wd),e(Wd,Ff),b(o,jp,g),b(o,O,g),T(La,O,null),e(O,qf),e(O,Qt),e(Qt,Bf),e(Qt,Rd),e(Rd,jf),e(Qt,Ef),e(Qt,Ga),e(Ga,Cf),e(Qt,Pf),e(O,Sf),e(O,vt),e(vt,wi),e(wi,Af),e(vt,Of),e(vt,Mi),e(Mi,If),e(vt,Nf),e(vt,$i),e($i,Df),e(vt,Lf),e(O,Gf),e(O,Wa),e(Wa,Wf),e(Wa,Ud),e(Ud,Rf),e(Wa,Uf),e(O,Xf),T(Po,O,null),e(O,Qf),e(O,qe),T(Ra,qe,null),e(qe,Hf),e(qe,Xd),e(Xd,Vf),e(qe,Jf),e(qe,Ua),e(Ua,Kf),e(Ua,Qd),e(Qd,Zf),e(Ua,Yf),e(qe,eg),e(qe,Xa),e(Xa,Qa),e(Qa,Hd),e(Hd,tg),e(Qa,og),e(Qa,Vd),e(Vd,ng),e(Xa,ag),e(Xa,Ha),e(Ha,Jd),e(Jd,sg),e(Ha,rg),e(Ha,Kd),e(Kd,ig),e(qe,dg),e(qe,Zd),e(Zd,lg),e(O,cg),e(O,So),T(Va,So,null),e(So,pg),e(So,Yd),e(Yd,hg),e(O,ug),e(O,Ao),T(Ja,Ao,null),e(Ao,mg),e(Ao,el),e(el,fg),e(O,gg),e(O,Oo),T(Ka,Oo,null),e(Oo,_g),e(Oo,tl),e(tl,bg),b(o,Ep,g),b(o,Ht,g),e(Ht,Io),e(Io,ol),T(Za,ol,null),e(Ht,kg),e(Ht,nl),e(nl,yg),b(o,Cp,g),b(o,I,g),T(Ya,I,null),e(I,vg),e(I,es),e(es,Tg),e(es,ts),e(ts,wg),e(es,Mg),e(I,$g),e(I,os),e(os,xg),e(os,xi),e(xi,zg),e(os,Fg),e(I,qg),T(No,I,null),e(I,Bg),e(I,Ke),T(ns,Ke,null),e(Ke,jg),e(Ke,as),e(as,Eg),e(as,al),e(al,Cg),e(as,Pg),e(Ke,Sg),e(Ke,ss),e(ss,rs),e(rs,sl),e(sl,Ag),e(rs,Og),e(rs,rl),e(rl,Ig),e(ss,Ng),e(ss,is),e(is,il),e(il,Dg),e(is,Lg),e(is,dl),e(dl,Gg),e(Ke,Wg),e(Ke,ll),e(ll,Rg),e(I,Ug),e(I,Do),T(ds,Do,null),e(Do,Xg),e(Do,cl),e(cl,Qg),e(I,Hg),e(I,Lo),T(ls,Lo,null),e(Lo,Vg),e(Lo,cs),e(cs,Jg),e(cs,pl),e(pl,Kg),e(cs,Zg),e(I,Yg),e(I,Go),T(ps,Go,null),e(Go,e_),e(Go,hl),e(hl,t_),e(I,o_),e(I,Wo),T(hs,Wo,null),e(Wo,n_),e(Wo,ul),e(ul,a_),b(o,Pp,g),b(o,Vt,g),e(Vt,Ro),e(Ro,ml),T(us,ml,null),e(Vt,s_),e(Vt,fl),e(fl,r_),b(o,Sp,g),b(o,K,g),T(ms,K,null),e(K,i_),e(K,Jt),e(Jt,d_),e(Jt,gl),e(gl,l_),e(Jt,c_),e(Jt,fs),e(fs,p_),e(Jt,h_),e(K,u_),e(K,gs),e(gs,m_),e(gs,zi),e(zi,f_),e(gs,g_),e(K,__),T(Uo,K,null),e(K,b_),e(K,Be),T(_s,Be,null),e(Be,k_),e(Be,_l),e(_l,y_),e(Be,v_),e(Be,bs),e(bs,T_),e(bs,bl),e(bl,w_),e(bs,M_),e(Be,$_),e(Be,ks),e(ks,ys),e(ys,kl),e(kl,x_),e(ys,z_),e(ys,yl),e(yl,F_),e(ks,q_),e(ks,vs),e(vs,vl),e(vl,B_),e(vs,j_),e(vs,Tl),e(Tl,E_),e(Be,C_),e(Be,wl),e(wl,P_),e(K,S_),e(K,Xo),T(Ts,Xo,null),e(Xo,A_),e(Xo,Ml),e(Ml,O_),e(K,I_),e(K,Qo),T(ws,Qo,null),e(Qo,N_),e(Qo,$l),e($l,D_),b(o,Ap,g),b(o,Kt,g),e(Kt,Ho),e(Ho,xl),T(Ms,xl,null),e(Kt,L_),e(Kt,zl),e(zl,G_),b(o,Op,g),b(o,We,g),T($s,We,null),e(We,W_),e(We,xs),e(xs,R_),e(xs,Fi),e(Fi,U_),e(xs,X_),e(We,Q_),e(We,zs),e(zs,H_),e(zs,Fs),e(Fs,V_),e(zs,J_),e(We,K_),e(We,Ze),T(qs,Ze,null),e(Ze,Z_),e(Ze,Zt),e(Zt,Y_),e(Zt,qi),e(qi,eb),e(Zt,tb),e(Zt,Fl),e(Fl,ob),e(Zt,nb),e(Ze,ab),T(Vo,Ze,null),e(Ze,sb),T(Jo,Ze,null),b(o,Ip,g),b(o,Yt,g),e(Yt,Ko),e(Ko,ql),T(Bs,ql,null),e(Yt,rb),e(Yt,Bl),e(Bl,ib),b(o,Np,g),b(o,Re,g),T(js,Re,null),e(Re,db),e(Re,Es),e(Es,lb),e(Es,Bi),e(Bi,cb),e(Es,pb),e(Re,hb),e(Re,Cs),e(Cs,ub),e(Cs,Ps),e(Ps,mb),e(Cs,fb),e(Re,gb),e(Re,je),T(Ss,je,null),e(je,_b),e(je,eo),e(eo,bb),e(eo,ji),e(ji,kb),e(eo,yb),e(eo,jl),e(jl,vb),e(eo,Tb),e(je,wb),T(Zo,je,null),e(je,Mb),T(Yo,je,null),e(je,$b),T(en,je,null),b(o,Dp,g),b(o,to,g),e(to,tn),e(tn,El),T(As,El,null),e(to,xb),e(to,Cl),e(Cl,zb),b(o,Lp,g),b(o,we,g),T(Os,we,null),e(we,Fb),e(we,oo),e(oo,qb),e(oo,Pl),e(Pl,Bb),e(oo,jb),e(oo,Sl),e(Sl,Eb),e(oo,Cb),e(we,Pb),e(we,Is),e(Is,Sb),e(Is,Ei),e(Ei,Ab),e(Is,Ob),e(we,Ib),e(we,Ns),e(Ns,Nb),e(Ns,Ds),e(Ds,Db),e(Ns,Lb),e(we,Gb),e(we,Ee),T(Ls,Ee,null),e(Ee,Wb),e(Ee,no),e(no,Rb),e(no,Ci),e(Ci,Ub),e(no,Xb),e(no,Al),e(Al,Qb),e(no,Hb),e(Ee,Vb),T(on,Ee,null),e(Ee,Jb),T(nn,Ee,null),e(Ee,Kb),T(an,Ee,null),b(o,Gp,g),b(o,ao,g),e(ao,sn),e(sn,Ol),T(Gs,Ol,null),e(ao,Zb),e(ao,Il),e(Il,Yb),b(o,Wp,g),b(o,Me,g),T(Ws,Me,null),e(Me,ek),e(Me,Nl),e(Nl,tk),e(Me,ok),e(Me,Rs),e(Rs,nk),e(Rs,Pi),e(Pi,ak),e(Rs,sk),e(Me,rk),e(Me,Us),e(Us,ik),e(Us,Xs),e(Xs,dk),e(Us,lk),e(Me,ck),e(Me,Z),T(Qs,Z,null),e(Z,pk),e(Z,so),e(so,hk),e(so,Si),e(Si,uk),e(so,mk),e(so,Dl),e(Dl,fk),e(so,gk),e(Z,_k),T(rn,Z,null),e(Z,bk),T(dn,Z,null),e(Z,kk),T(ln,Z,null),e(Z,yk),T(cn,Z,null),e(Z,vk),T(pn,Z,null),b(o,Rp,g),b(o,ro,g),e(ro,hn),e(hn,Ll),T(Hs,Ll,null),e(ro,Tk),e(ro,Gl),e(Gl,wk),b(o,Up,g),b(o,io,g),T(Vs,io,null),e(io,Mk),e(io,un),T(Js,un,null),e(un,$k),T(mn,un,null),b(o,Xp,g),b(o,lo,g),e(lo,fn),e(fn,Wl),T(Ks,Wl,null),e(lo,xk),e(lo,Rl),e(Rl,zk),b(o,Qp,g),b(o,$e,g),T(Zs,$e,null),e($e,Fk),e($e,Ys),e(Ys,qk),e(Ys,Ai),e(Ai,Bk),e(Ys,jk),e($e,Ek),e($e,er),e(er,Ck),e(er,tr),e(tr,Pk),e(er,Sk),e($e,Ak),T(gn,$e,null),e($e,Ok),e($e,Ye),T(or,Ye,null),e(Ye,Ik),e(Ye,co),e(co,Nk),e(co,Oi),e(Oi,Dk),e(co,Lk),e(co,Ul),e(Ul,Gk),e(co,Wk),e(Ye,Rk),T(_n,Ye,null),e(Ye,Uk),T(bn,Ye,null),b(o,Hp,g),b(o,po,g),e(po,kn),e(kn,Xl),T(nr,Xl,null),e(po,Xk),e(po,Ql),e(Ql,Qk),b(o,Vp,g),b(o,xe,g),T(ar,xe,null),e(xe,Hk),e(xe,sr),e(sr,Vk),e(sr,Ii),e(Ii,Jk),e(sr,Kk),e(xe,Zk),e(xe,rr),e(rr,Yk),e(rr,ir),e(ir,ey),e(rr,ty),e(xe,oy),T(yn,xe,null),e(xe,ny),e(xe,Ce),T(dr,Ce,null),e(Ce,ay),e(Ce,ho),e(ho,sy),e(ho,Ni),e(Ni,ry),e(ho,iy),e(ho,Hl),e(Hl,dy),e(ho,ly),e(Ce,cy),T(vn,Ce,null),e(Ce,py),T(Tn,Ce,null),e(Ce,hy),T(wn,Ce,null),b(o,Jp,g),b(o,uo,g),e(uo,Mn),e(Mn,Vl),T(lr,Vl,null),e(uo,uy),e(uo,Jl),e(Jl,my),b(o,Kp,g),b(o,W,g),T(cr,W,null),e(W,fy),e(W,pr),e(pr,gy),e(pr,Di),e(Di,_y),e(pr,by),e(W,ky),e(W,hr),e(hr,yy),e(hr,ur),e(ur,vy),e(hr,Ty),e(W,wy),e(W,Kl),e(Kl,My),e(W,$y),e(W,mt),e(mt,Zl),e(Zl,mr),e(mr,xy),e(mt,zy),e(mt,Yl),e(Yl,fr),e(fr,Fy),e(mt,qy),e(mt,ec),e(ec,gr),e(gr,By),e(mt,jy),e(mt,tc),e(tc,_r),e(_r,Ey),e(W,Cy),e(W,et),T(br,et,null),e(et,Py),e(et,mo),e(mo,Sy),e(mo,oc),e(oc,Ay),e(mo,Oy),e(mo,nc),e(nc,Iy),e(mo,Ny),e(et,Dy),T($n,et,null),e(et,Ly),T(xn,et,null),e(W,Gy),e(W,zn),T(kr,zn,null),e(zn,Wy),T(Fn,zn,null),e(W,Ry),e(W,qn),T(yr,qn,null),e(qn,Uy),T(Bn,qn,null),b(o,Zp,g),b(o,fo,g),e(fo,jn),e(jn,ac),T(vr,ac,null),e(fo,Xy),e(fo,sc),e(sc,Qy),b(o,Yp,g),b(o,R,g),T(Tr,R,null),e(R,Hy),e(R,wr),e(wr,Vy),e(wr,Li),e(Li,Jy),e(wr,Ky),e(R,Zy),e(R,Mr),e(Mr,Yy),e(Mr,$r),e($r,ev),e(Mr,tv),e(R,ov),e(R,rc),e(rc,nv),e(R,av),e(R,ft),e(ft,ic),e(ic,xr),e(xr,sv),e(ft,rv),e(ft,dc),e(dc,zr),e(zr,iv),e(ft,dv),e(ft,lc),e(lc,Fr),e(Fr,lv),e(ft,cv),e(ft,cc),e(cc,qr),e(qr,pv),e(R,hv),e(R,Pe),T(Br,Pe,null),e(Pe,uv),e(Pe,go),e(go,mv),e(go,pc),e(pc,fv),e(go,gv),e(go,hc),e(hc,_v),e(go,bv),e(Pe,kv),T(En,Pe,null),e(Pe,yv),T(Cn,Pe,null),e(Pe,vv),T(Pn,Pe,null),e(R,Tv),e(R,Sn),T(jr,Sn,null),e(Sn,wv),T(An,Sn,null),e(R,Mv),e(R,On),T(Er,On,null),e(On,$v),T(In,On,null),b(o,eh,g),b(o,_o,g),e(_o,Nn),e(Nn,uc),T(Cr,uc,null),e(_o,xv),e(_o,mc),e(mc,zv),b(o,th,g),b(o,N,g),T(Pr,N,null),e(N,Fv),e(N,fc),e(fc,qv),e(N,Bv),e(N,Sr),e(Sr,jv),e(Sr,Gi),e(Gi,Ev),e(Sr,Cv),e(N,Pv),e(N,Ar),e(Ar,Sv),e(Ar,Or),e(Or,Av),e(Ar,Ov),e(N,Iv),e(N,gc),e(gc,Nv),e(N,Dv),e(N,gt),e(gt,_c),e(_c,Ir),e(Ir,Lv),e(gt,Gv),e(gt,bc),e(bc,Nr),e(Nr,Wv),e(gt,Rv),e(gt,kc),e(kc,Dr),e(Dr,Uv),e(gt,Xv),e(gt,yc),e(yc,Lr),e(Lr,Qv),e(N,Hv),e(N,tt),T(Gr,tt,null),e(tt,Vv),e(tt,bo),e(bo,Jv),e(bo,vc),e(vc,Kv),e(bo,Zv),e(bo,Tc),e(Tc,Yv),e(bo,eT),e(tt,tT),T(Dn,tt,null),e(tt,oT),T(Ln,tt,null),e(N,nT),e(N,Gn),T(Wr,Gn,null),e(Gn,aT),T(Wn,Gn,null),e(N,sT),e(N,Rn),T(Rr,Rn,null),e(Rn,rT),T(Un,Rn,null),b(o,oh,g),b(o,ko,g),e(ko,Xn),e(Xn,wc),T(Ur,wc,null),e(ko,iT),e(ko,Mc),e(Mc,dT),b(o,nh,g),b(o,D,g),T(Xr,D,null),e(D,lT),e(D,yo),e(yo,cT),e(yo,$c),e($c,pT),e(yo,hT),e(yo,xc),e(xc,uT),e(yo,mT),e(D,fT),e(D,Qr),e(Qr,gT),e(Qr,Wi),e(Wi,_T),e(Qr,bT),e(D,kT),e(D,Hr),e(Hr,yT),e(Hr,Vr),e(Vr,vT),e(Hr,TT),e(D,wT),e(D,zc),e(zc,MT),e(D,$T),e(D,_t),e(_t,Fc),e(Fc,Jr),e(Jr,xT),e(_t,zT),e(_t,qc),e(qc,Kr),e(Kr,FT),e(_t,qT),e(_t,Bc),e(Bc,Zr),e(Zr,BT),e(_t,jT),e(_t,jc),e(jc,Yr),e(Yr,ET),e(D,CT),e(D,ot),T(ei,ot,null),e(ot,PT),e(ot,vo),e(vo,ST),e(vo,Ec),e(Ec,AT),e(vo,OT),e(vo,Cc),e(Cc,IT),e(vo,NT),e(ot,DT),T(Qn,ot,null),e(ot,LT),T(Hn,ot,null),e(D,GT),e(D,Vn),T(ti,Vn,null),e(Vn,WT),T(Jn,Vn,null),e(D,RT),e(D,Kn),T(oi,Kn,null),e(Kn,UT),T(Zn,Kn,null),ah=!0},p(o,[g]){const ni={};g&2&&(ni.$$scope={dirty:g,ctx:o}),qo.$set(ni);const Pc={};g&2&&(Pc.$$scope={dirty:g,ctx:o}),jo.$set(Pc);const Sc={};g&2&&(Sc.$$scope={dirty:g,ctx:o}),Po.$set(Sc);const Ac={};g&2&&(Ac.$$scope={dirty:g,ctx:o}),No.$set(Ac);const Yn={};g&2&&(Yn.$$scope={dirty:g,ctx:o}),Uo.$set(Yn);const Oc={};g&2&&(Oc.$$scope={dirty:g,ctx:o}),Vo.$set(Oc);const Ic={};g&2&&(Ic.$$scope={dirty:g,ctx:o}),Jo.$set(Ic);const ai={};g&2&&(ai.$$scope={dirty:g,ctx:o}),Zo.$set(ai);const Nc={};g&2&&(Nc.$$scope={dirty:g,ctx:o}),Yo.$set(Nc);const Dc={};g&2&&(Dc.$$scope={dirty:g,ctx:o}),en.$set(Dc);const Lc={};g&2&&(Lc.$$scope={dirty:g,ctx:o}),on.$set(Lc);const si={};g&2&&(si.$$scope={dirty:g,ctx:o}),nn.$set(si);const Gc={};g&2&&(Gc.$$scope={dirty:g,ctx:o}),an.$set(Gc);const Wc={};g&2&&(Wc.$$scope={dirty:g,ctx:o}),rn.$set(Wc);const ea={};g&2&&(ea.$$scope={dirty:g,ctx:o}),dn.$set(ea);const Rc={};g&2&&(Rc.$$scope={dirty:g,ctx:o}),ln.$set(Rc);const Uc={};g&2&&(Uc.$$scope={dirty:g,ctx:o}),cn.$set(Uc);const ri={};g&2&&(ri.$$scope={dirty:g,ctx:o}),pn.$set(ri);const Xc={};g&2&&(Xc.$$scope={dirty:g,ctx:o}),mn.$set(Xc);const Qc={};g&2&&(Qc.$$scope={dirty:g,ctx:o}),gn.$set(Qc);const Hc={};g&2&&(Hc.$$scope={dirty:g,ctx:o}),_n.$set(Hc);const Ue={};g&2&&(Ue.$$scope={dirty:g,ctx:o}),bn.$set(Ue);const Vc={};g&2&&(Vc.$$scope={dirty:g,ctx:o}),yn.$set(Vc);const Jc={};g&2&&(Jc.$$scope={dirty:g,ctx:o}),vn.$set(Jc);const Kc={};g&2&&(Kc.$$scope={dirty:g,ctx:o}),Tn.$set(Kc);const Zc={};g&2&&(Zc.$$scope={dirty:g,ctx:o}),wn.$set(Zc);const To={};g&2&&(To.$$scope={dirty:g,ctx:o}),$n.$set(To);const Ri={};g&2&&(Ri.$$scope={dirty:g,ctx:o}),xn.$set(Ri);const Yc={};g&2&&(Yc.$$scope={dirty:g,ctx:o}),Fn.$set(Yc);const ep={};g&2&&(ep.$$scope={dirty:g,ctx:o}),Bn.$set(ep);const tp={};g&2&&(tp.$$scope={dirty:g,ctx:o}),En.$set(tp);const op={};g&2&&(op.$$scope={dirty:g,ctx:o}),Cn.$set(op);const np={};g&2&&(np.$$scope={dirty:g,ctx:o}),Pn.$set(np);const ii={};g&2&&(ii.$$scope={dirty:g,ctx:o}),An.$set(ii);const ap={};g&2&&(ap.$$scope={dirty:g,ctx:o}),In.$set(ap);const wo={};g&2&&(wo.$$scope={dirty:g,ctx:o}),Dn.$set(wo);const sp={};g&2&&(sp.$$scope={dirty:g,ctx:o}),Ln.$set(sp);const rp={};g&2&&(rp.$$scope={dirty:g,ctx:o}),Wn.$set(rp);const di={};g&2&&(di.$$scope={dirty:g,ctx:o}),Un.$set(di);const ip={};g&2&&(ip.$$scope={dirty:g,ctx:o}),Qn.$set(ip);const dp={};g&2&&(dp.$$scope={dirty:g,ctx:o}),Hn.$set(dp);const lp={};g&2&&(lp.$$scope={dirty:g,ctx:o}),Jn.$set(lp);const Mo={};g&2&&(Mo.$$scope={dirty:g,ctx:o}),Zn.$set(Mo)},i(o){ah||(w(n.$$.fragment,o),w(ne.$$.fragment,o),w(De.$$.fragment,o),w(ba.$$.fragment,o),w(ya.$$.fragment,o),w(va.$$.fragment,o),w(wa.$$.fragment,o),w(Ma.$$.fragment,o),w(xa.$$.fragment,o),w(za.$$.fragment,o),w(Fa.$$.fragment,o),w(qo.$$.fragment,o),w(Ba.$$.fragment,o),w(ja.$$.fragment,o),w(jo.$$.fragment,o),w(Pa.$$.fragment,o),w(Sa.$$.fragment,o),w(Da.$$.fragment,o),w(La.$$.fragment,o),w(Po.$$.fragment,o),w(Ra.$$.fragment,o),w(Va.$$.fragment,o),w(Ja.$$.fragment,o),w(Ka.$$.fragment,o),w(Za.$$.fragment,o),w(Ya.$$.fragment,o),w(No.$$.fragment,o),w(ns.$$.fragment,o),w(ds.$$.fragment,o),w(ls.$$.fragment,o),w(ps.$$.fragment,o),w(hs.$$.fragment,o),w(us.$$.fragment,o),w(ms.$$.fragment,o),w(Uo.$$.fragment,o),w(_s.$$.fragment,o),w(Ts.$$.fragment,o),w(ws.$$.fragment,o),w(Ms.$$.fragment,o),w($s.$$.fragment,o),w(qs.$$.fragment,o),w(Vo.$$.fragment,o),w(Jo.$$.fragment,o),w(Bs.$$.fragment,o),w(js.$$.fragment,o),w(Ss.$$.fragment,o),w(Zo.$$.fragment,o),w(Yo.$$.fragment,o),w(en.$$.fragment,o),w(As.$$.fragment,o),w(Os.$$.fragment,o),w(Ls.$$.fragment,o),w(on.$$.fragment,o),w(nn.$$.fragment,o),w(an.$$.fragment,o),w(Gs.$$.fragment,o),w(Ws.$$.fragment,o),w(Qs.$$.fragment,o),w(rn.$$.fragment,o),w(dn.$$.fragment,o),w(ln.$$.fragment,o),w(cn.$$.fragment,o),w(pn.$$.fragment,o),w(Hs.$$.fragment,o),w(Vs.$$.fragment,o),w(Js.$$.fragment,o),w(mn.$$.fragment,o),w(Ks.$$.fragment,o),w(Zs.$$.fragment,o),w(gn.$$.fragment,o),w(or.$$.fragment,o),w(_n.$$.fragment,o),w(bn.$$.fragment,o),w(nr.$$.fragment,o),w(ar.$$.fragment,o),w(yn.$$.fragment,o),w(dr.$$.fragment,o),w(vn.$$.fragment,o),w(Tn.$$.fragment,o),w(wn.$$.fragment,o),w(lr.$$.fragment,o),w(cr.$$.fragment,o),w(br.$$.fragment,o),w($n.$$.fragment,o),w(xn.$$.fragment,o),w(kr.$$.fragment,o),w(Fn.$$.fragment,o),w(yr.$$.fragment,o),w(Bn.$$.fragment,o),w(vr.$$.fragment,o),w(Tr.$$.fragment,o),w(Br.$$.fragment,o),w(En.$$.fragment,o),w(Cn.$$.fragment,o),w(Pn.$$.fragment,o),w(jr.$$.fragment,o),w(An.$$.fragment,o),w(Er.$$.fragment,o),w(In.$$.fragment,o),w(Cr.$$.fragment,o),w(Pr.$$.fragment,o),w(Gr.$$.fragment,o),w(Dn.$$.fragment,o),w(Ln.$$.fragment,o),w(Wr.$$.fragment,o),w(Wn.$$.fragment,o),w(Rr.$$.fragment,o),w(Un.$$.fragment,o),w(Ur.$$.fragment,o),w(Xr.$$.fragment,o),w(ei.$$.fragment,o),w(Qn.$$.fragment,o),w(Hn.$$.fragment,o),w(ti.$$.fragment,o),w(Jn.$$.fragment,o),w(oi.$$.fragment,o),w(Zn.$$.fragment,o),ah=!0)},o(o){M(n.$$.fragment,o),M(ne.$$.fragment,o),M(De.$$.fragment,o),M(ba.$$.fragment,o),M(ya.$$.fragment,o),M(va.$$.fragment,o),M(wa.$$.fragment,o),M(Ma.$$.fragment,o),M(xa.$$.fragment,o),M(za.$$.fragment,o),M(Fa.$$.fragment,o),M(qo.$$.fragment,o),M(Ba.$$.fragment,o),M(ja.$$.fragment,o),M(jo.$$.fragment,o),M(Pa.$$.fragment,o),M(Sa.$$.fragment,o),M(Da.$$.fragment,o),M(La.$$.fragment,o),M(Po.$$.fragment,o),M(Ra.$$.fragment,o),M(Va.$$.fragment,o),M(Ja.$$.fragment,o),M(Ka.$$.fragment,o),M(Za.$$.fragment,o),M(Ya.$$.fragment,o),M(No.$$.fragment,o),M(ns.$$.fragment,o),M(ds.$$.fragment,o),M(ls.$$.fragment,o),M(ps.$$.fragment,o),M(hs.$$.fragment,o),M(us.$$.fragment,o),M(ms.$$.fragment,o),M(Uo.$$.fragment,o),M(_s.$$.fragment,o),M(Ts.$$.fragment,o),M(ws.$$.fragment,o),M(Ms.$$.fragment,o),M($s.$$.fragment,o),M(qs.$$.fragment,o),M(Vo.$$.fragment,o),M(Jo.$$.fragment,o),M(Bs.$$.fragment,o),M(js.$$.fragment,o),M(Ss.$$.fragment,o),M(Zo.$$.fragment,o),M(Yo.$$.fragment,o),M(en.$$.fragment,o),M(As.$$.fragment,o),M(Os.$$.fragment,o),M(Ls.$$.fragment,o),M(on.$$.fragment,o),M(nn.$$.fragment,o),M(an.$$.fragment,o),M(Gs.$$.fragment,o),M(Ws.$$.fragment,o),M(Qs.$$.fragment,o),M(rn.$$.fragment,o),M(dn.$$.fragment,o),M(ln.$$.fragment,o),M(cn.$$.fragment,o),M(pn.$$.fragment,o),M(Hs.$$.fragment,o),M(Vs.$$.fragment,o),M(Js.$$.fragment,o),M(mn.$$.fragment,o),M(Ks.$$.fragment,o),M(Zs.$$.fragment,o),M(gn.$$.fragment,o),M(or.$$.fragment,o),M(_n.$$.fragment,o),M(bn.$$.fragment,o),M(nr.$$.fragment,o),M(ar.$$.fragment,o),M(yn.$$.fragment,o),M(dr.$$.fragment,o),M(vn.$$.fragment,o),M(Tn.$$.fragment,o),M(wn.$$.fragment,o),M(lr.$$.fragment,o),M(cr.$$.fragment,o),M(br.$$.fragment,o),M($n.$$.fragment,o),M(xn.$$.fragment,o),M(kr.$$.fragment,o),M(Fn.$$.fragment,o),M(yr.$$.fragment,o),M(Bn.$$.fragment,o),M(vr.$$.fragment,o),M(Tr.$$.fragment,o),M(Br.$$.fragment,o),M(En.$$.fragment,o),M(Cn.$$.fragment,o),M(Pn.$$.fragment,o),M(jr.$$.fragment,o),M(An.$$.fragment,o),M(Er.$$.fragment,o),M(In.$$.fragment,o),M(Cr.$$.fragment,o),M(Pr.$$.fragment,o),M(Gr.$$.fragment,o),M(Dn.$$.fragment,o),M(Ln.$$.fragment,o),M(Wr.$$.fragment,o),M(Wn.$$.fragment,o),M(Rr.$$.fragment,o),M(Un.$$.fragment,o),M(Ur.$$.fragment,o),M(Xr.$$.fragment,o),M(ei.$$.fragment,o),M(Qn.$$.fragment,o),M(Hn.$$.fragment,o),M(ti.$$.fragment,o),M(Jn.$$.fragment,o),M(oi.$$.fragment,o),M(Zn.$$.fragment,o),ah=!1},d(o){t(l),o&&t(k),o&&t(m),$(n),o&&t(ze),o&&t(E),o&&t(Xe),o&&t(Q),$(ne),o&&t(le),o&&t(ce),o&&t(G),o&&t(Fe),o&&t(Qe),o&&t(ae),o&&t(He),o&&t(z),$(De),o&&t(bt),o&&t(X),o&&t(cp),o&&t(kt),o&&t(pp),o&&t(pi),o&&t(hp),$(ba,o),o&&t(up),o&&t(hi),o&&t(mp),$(ya,o),o&&t(fp),o&&t(Dt),$(va),o&&t(gp),o&&t(yt),o&&t(_p),o&&t(ui),o&&t(bp),o&&t(mi),o&&t(kp),o&&t(Lt),$(wa),o&&t(yp),o&&t(Ve),o&&t(vp),o&&t(zo),o&&t(Tp),o&&t(gi),o&&t(wp),$(Ma,o),o&&t(Mp),o&&t(_i),o&&t($p),$(xa,o),o&&t(xp),o&&t(Gt),$(za),o&&t(zp),o&&t(Ge),$(Fa),$(qo),o&&t(Fp),o&&t(Ut),$(Ba),o&&t(qp),o&&t(J),$(ja),$(jo),$(Pa),$(Sa),o&&t(Bp),o&&t(Xt),$(Da),o&&t(jp),o&&t(O),$(La),$(Po),$(Ra),$(Va),$(Ja),$(Ka),o&&t(Ep),o&&t(Ht),$(Za),o&&t(Cp),o&&t(I),$(Ya),$(No),$(ns),$(ds),$(ls),$(ps),$(hs),o&&t(Pp),o&&t(Vt),$(us),o&&t(Sp),o&&t(K),$(ms),$(Uo),$(_s),$(Ts),$(ws),o&&t(Ap),o&&t(Kt),$(Ms),o&&t(Op),o&&t(We),$($s),$(qs),$(Vo),$(Jo),o&&t(Ip),o&&t(Yt),$(Bs),o&&t(Np),o&&t(Re),$(js),$(Ss),$(Zo),$(Yo),$(en),o&&t(Dp),o&&t(to),$(As),o&&t(Lp),o&&t(we),$(Os),$(Ls),$(on),$(nn),$(an),o&&t(Gp),o&&t(ao),$(Gs),o&&t(Wp),o&&t(Me),$(Ws),$(Qs),$(rn),$(dn),$(ln),$(cn),$(pn),o&&t(Rp),o&&t(ro),$(Hs),o&&t(Up),o&&t(io),$(Vs),$(Js),$(mn),o&&t(Xp),o&&t(lo),$(Ks),o&&t(Qp),o&&t($e),$(Zs),$(gn),$(or),$(_n),$(bn),o&&t(Hp),o&&t(po),$(nr),o&&t(Vp),o&&t(xe),$(ar),$(yn),$(dr),$(vn),$(Tn),$(wn),o&&t(Jp),o&&t(uo),$(lr),o&&t(Kp),o&&t(W),$(cr),$(br),$($n),$(xn),$(kr),$(Fn),$(yr),$(Bn),o&&t(Zp),o&&t(fo),$(vr),o&&t(Yp),o&&t(R),$(Tr),$(Br),$(En),$(Cn),$(Pn),$(jr),$(An),$(Er),$(In),o&&t(eh),o&&t(_o),$(Cr),o&&t(th),o&&t(N),$(Pr),$(Gr),$(Dn),$(Ln),$(Wr),$(Wn),$(Rr),$(Un),o&&t(oh),o&&t(ko),$(Ur),o&&t(nh),o&&t(D),$(Xr),$(ei),$(Qn),$(Hn),$(ti),$(Jn),$(oi),$(Zn)}}}const E1={local:"mbart-and-mbart50",sections:[{local:"overview-of-mbart",sections:[{local:"training-of-mbart",title:"Training of MBart"}],title:"Overview of MBart"},{local:"overview-of-mbart50",sections:[{local:"training-of-mbart50",title:"Training of MBart-50"}],title:"Overview of MBart-50"},{local:"transformers.MBartConfig",title:"MBartConfig"},{local:"transformers.MBartTokenizer",title:"MBartTokenizer"},{local:"transformers.MBartTokenizerFast",title:"MBartTokenizerFast"},{local:"transformers.MBart50Tokenizer",title:"MBart50Tokenizer"},{local:"transformers.MBart50TokenizerFast",title:"MBart50TokenizerFast"},{local:"transformers.MBartModel",title:"MBartModel"},{local:"transformers.MBartForConditionalGeneration",title:"MBartForConditionalGeneration"},{local:"transformers.MBartForQuestionAnswering",title:"MBartForQuestionAnswering"},{local:"transformers.MBartForSequenceClassification",title:"MBartForSequenceClassification"},{local:"transformers.MBartForCausalLM",title:"MBartForCausalLM"},{local:"transformers.TFMBartModel",title:"TFMBartModel"},{local:"transformers.TFMBartForConditionalGeneration",title:"TFMBartForConditionalGeneration"},{local:"transformers.FlaxMBartModel",title:"FlaxMBartModel"},{local:"transformers.FlaxMBartForConditionalGeneration",title:"FlaxMBartForConditionalGeneration"},{local:"transformers.FlaxMBartForSequenceClassification",title:"FlaxMBartForSequenceClassification"},{local:"transformers.FlaxMBartForQuestionAnswering",title:"FlaxMBartForQuestionAnswering"}],title:"MBart and MBart-50"};function C1(x){return Lx(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class D1 extends Ox{constructor(l){super();Ix(this,l,C1,j1,Nx,{})}}export{D1 as default,E1 as metadata};
