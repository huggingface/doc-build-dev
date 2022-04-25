import{S as XT,i as KT,s as ZT,e as a,k as u,w as y,t as i,M as YT,c as s,d as t,m,a as r,x as v,h as d,b as f,F as e,g as k,y as T,q as w,o as x,B as $,v as ew,L as P}from"../../chunks/vendor-6b77c823.js";import{T as Fe}from"../../chunks/Tip-39098574.js";import{D as B}from"../../chunks/Docstring-1088f2fb.js";import{C}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as V}from"../../chunks/IconCopyLink-7a11ce68.js";import{E}from"../../chunks/ExampleCodeBlock-5212b321.js";function tw(F){let l,_,h,c,g;return c=new C({props:{code:`from transformers import BartModel, BartConfig

# Initializing a BART facebook/bart-large style configuration
configuration = BartConfig()

# Initializing a model from the facebook/bart-large style configuration
model = BartModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartModel, BartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BART facebook/bart-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BartConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/bart-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),_=i("Example:"),h=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Example:"),p.forEach(t),h=m(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,_),k(n,h,p),T(c,n,p),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){x(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(h),$(c,n)}}}function ow(F){let l,_;return l=new C({props:{code:`from transformers import BartTokenizer
tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){y(l.$$.fragment)},l(h){v(l.$$.fragment,h)},m(h,c){T(l,h,c),_=!0},p:P,i(h){_||(w(l.$$.fragment,h),_=!0)},o(h){x(l.$$.fragment,h),_=!1},d(h){$(l,h)}}}function nw(F){let l,_,h,c,g;return{c(){l=a("p"),_=i("When used with "),h=a("code"),c=i("is_split_into_words=True"),g=i(", this tokenizer will add a space before each word (even the first one).")},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"When used with "),h=s(p,"CODE",{});var q=r(h);c=d(q,"is_split_into_words=True"),q.forEach(t),g=d(p,", this tokenizer will add a space before each word (even the first one)."),p.forEach(t)},m(n,p){k(n,l,p),e(l,_),e(l,h),e(h,c),e(l,g)},d(n){n&&t(l)}}}function aw(F){let l,_;return l=new C({props:{code:`from transformers import BartTokenizerFast
tokenizer = BartTokenizerFast.from_pretrained("facebook/bart-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BartTokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){y(l.$$.fragment)},l(h){v(l.$$.fragment,h)},m(h,c){T(l,h,c),_=!0},p:P,i(h){_||(w(l.$$.fragment,h),_=!0)},o(h){x(l.$$.fragment,h),_=!1},d(h){$(l,h)}}}function sw(F){let l,_,h,c,g,n,p,q;return{c(){l=a("p"),_=i("When used with "),h=a("code"),c=i("is_split_into_words=True"),g=i(", this tokenizer needs to be instantiated with "),n=a("code"),p=i("add_prefix_space=True"),q=i(".")},l(ne){l=s(ne,"P",{});var O=r(l);_=d(O,"When used with "),h=s(O,"CODE",{});var j=r(h);c=d(j,"is_split_into_words=True"),j.forEach(t),g=d(O,", this tokenizer needs to be instantiated with "),n=s(O,"CODE",{});var le=r(n);p=d(le,"add_prefix_space=True"),le.forEach(t),q=d(O,"."),O.forEach(t)},m(ne,O){k(ne,l,O),e(l,_),e(l,h),e(h,c),e(l,g),e(l,n),e(n,p),e(l,q)},d(ne){ne&&t(l)}}}function rw(F){let l,_,h,c,g;return{c(){l=a("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(p,"CODE",{});var q=r(h);c=d(q,"Module"),q.forEach(t),g=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,_),e(l,h),e(h,c),e(l,g)},d(n){n&&t(l)}}}function iw(F){let l,_,h,c,g;return c=new C({props:{code:`from transformers import BartTokenizer, BartModel
import torch

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = BartModel.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartModel.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),_=i("Example:"),h=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Example:"),p.forEach(t),h=m(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,_),k(n,h,p),T(c,n,p),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){x(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(h),$(c,n)}}}function dw(F){let l,_,h,c,g;return{c(){l=a("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(p,"CODE",{});var q=r(h);c=d(q,"Module"),q.forEach(t),g=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,_),e(l,h),e(h,c),e(l,g)},d(n){n&&t(l)}}}function lw(F){let l,_,h,c,g;return c=new C({props:{code:`from transformers import BartTokenizer, BartForConditionalGeneration

model = BartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

ARTICLE_TO_SUMMARIZE = (
    "PG&E stated it scheduled the blackouts in response to forecasts for high winds "
    "amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were "
    "scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow."
)
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="pt")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=2, max_length=20)
tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;PG&amp;E stated it scheduled the blackouts in response to forecasts for high winds &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">2</span>, max_length=<span class="hljs-number">20</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;PG&amp;E scheduled the blackouts in response to forecasts for high winds amid dry conditions&#x27;</span>`}}),{c(){l=a("p"),_=i("Summarization example:"),h=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Summarization example:"),p.forEach(t),h=m(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,_),k(n,h,p),T(c,n,p),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){x(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(h),$(c,n)}}}function cw(F){let l,_,h,c,g;return c=new C({props:{code:`from transformers import BartTokenizer, BartForConditionalGeneration

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = BartForConditionalGeneration.from_pretrained("facebook/bart-base")

TXT = "My friends are <mask> but they eat too many carbs."
input_ids = tokenizer([TXT], return_tensors="pt")["input_ids"]
logits = model(input_ids).logits

masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()
[<span class="hljs-string">&#x27;not&#x27;</span>, <span class="hljs-string">&#x27;good&#x27;</span>, <span class="hljs-string">&#x27;healthy&#x27;</span>, <span class="hljs-string">&#x27;great&#x27;</span>, <span class="hljs-string">&#x27;very&#x27;</span>]`}}),{c(){l=a("p"),_=i("Mask filling example:"),h=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Mask filling example:"),p.forEach(t),h=m(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,_),k(n,h,p),T(c,n,p),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){x(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(h),$(c,n)}}}function pw(F){let l,_,h,c,g;return{c(){l=a("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(p,"CODE",{});var q=r(h);c=d(q,"Module"),q.forEach(t),g=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,_),e(l,h),e(h,c),e(l,g)},d(n){n&&t(l)}}}function hw(F){let l,_,h,c,g;return c=new C({props:{code:`import torch
from transformers import BartTokenizer, BartForSequenceClassification

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = BartForSequenceClassification.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]`}}),{c(){l=a("p"),_=i("Example of single-label classification:"),h=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Example of single-label classification:"),p.forEach(t),h=m(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,_),k(n,h,p),T(c,n,p),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){x(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(h),$(c,n)}}}function uw(F){let l,_;return l=new C({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = BartForSequenceClassification.from_pretrained("facebook/bart-base", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(l.$$.fragment)},l(h){v(l.$$.fragment,h)},m(h,c){T(l,h,c),_=!0},p:P,i(h){_||(w(l.$$.fragment,h),_=!0)},o(h){x(l.$$.fragment,h),_=!1},d(h){$(l,h)}}}function mw(F){let l,_,h,c,g;return c=new C({props:{code:`import torch
from transformers import BartTokenizer, BartForSequenceClassification

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = BartForSequenceClassification.from_pretrained("facebook/bart-base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]`}}),{c(){l=a("p"),_=i("Example of multi-label classification:"),h=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Example of multi-label classification:"),p.forEach(t),h=m(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,_),k(n,h,p),T(c,n,p),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){x(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(h),$(c,n)}}}function fw(F){let l,_;return l=new C({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = BartForSequenceClassification.from_pretrained("facebook/bart-base", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(l.$$.fragment)},l(h){v(l.$$.fragment,h)},m(h,c){T(l,h,c),_=!0},p:P,i(h){_||(w(l.$$.fragment,h),_=!0)},o(h){x(l.$$.fragment,h),_=!1},d(h){$(l,h)}}}function gw(F){let l,_,h,c,g;return{c(){l=a("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(p,"CODE",{});var q=r(h);c=d(q,"Module"),q.forEach(t),g=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,_),e(l,h),e(h,c),e(l,g)},d(n){n&&t(l)}}}function _w(F){let l,_,h,c,g;return c=new C({props:{code:`from transformers import BartTokenizer, BartForQuestionAnswering
import torch

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = BartForQuestionAnswering.from_pretrained("facebook/bart-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
[<span class="hljs-number">1</span>, <span class="hljs-number">17</span>]`}}),{c(){l=a("p"),_=i("Example:"),h=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Example:"),p.forEach(t),h=m(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,_),k(n,h,p),T(c,n,p),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){x(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(h),$(c,n)}}}function bw(F){let l,_;return l=new C({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">2.98</span>`}}),{c(){y(l.$$.fragment)},l(h){v(l.$$.fragment,h)},m(h,c){T(l,h,c),_=!0},p:P,i(h){_||(w(l.$$.fragment,h),_=!0)},o(h){x(l.$$.fragment,h),_=!1},d(h){$(l,h)}}}function kw(F){let l,_,h,c,g;return c=new C({props:{code:`from transformers import BartTokenizer, BartForCausalLM

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = BartForCausalLM.from_pretrained("facebook/bart-base", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),{c(){l=a("p"),_=i("Example:"),h=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Example:"),p.forEach(t),h=m(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,_),k(n,h,p),T(c,n,p),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){x(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(h),$(c,n)}}}function yw(F){let l,_,h,c,g,n,p,q,ne,O,j,le,ge,et,_e,be,tt,Qe,J,D,Se,ae,S,I,ot,ce,pe,nt,X,at,st,G,ze,ke,He,Y,se,rt,it,K,dt,ye,Oe;return{c(){l=a("p"),_=i("TF 2.0 models accepts two formats as inputs:"),h=u(),c=a("ul"),g=a("li"),n=i("having all inputs as keyword arguments (like PyTorch models), or"),p=u(),q=a("li"),ne=i("having all inputs as a list, tuple or dict in the first positional arguments."),O=u(),j=a("p"),le=i("This second option is useful when using "),ge=a("code"),et=i("tf.keras.Model.fit"),_e=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),be=a("code"),tt=i("model(inputs)"),Qe=i("."),J=u(),D=a("p"),Se=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae=u(),S=a("ul"),I=a("li"),ot=i("a single Tensor with "),ce=a("code"),pe=i("input_ids"),nt=i(" only and nothing else: "),X=a("code"),at=i("model(input_ids)"),st=u(),G=a("li"),ze=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ke=a("code"),He=i("model([input_ids, attention_mask])"),Y=i(" or "),se=a("code"),rt=i("model([input_ids, attention_mask, token_type_ids])"),it=u(),K=a("li"),dt=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=a("code"),Oe=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){l=s(z,"P",{});var M=r(l);_=d(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),h=m(z),c=s(z,"UL",{});var H=r(c);g=s(H,"LI",{});var Bt=r(g);n=d(Bt,"having all inputs as keyword arguments (like PyTorch models), or"),Bt.forEach(t),p=m(H),q=s(H,"LI",{});var Ie=r(q);ne=d(Ie,"having all inputs as a list, tuple or dict in the first positional arguments."),Ie.forEach(t),H.forEach(t),O=m(z),j=s(z,"P",{});var re=r(j);le=d(re,"This second option is useful when using "),ge=s(re,"CODE",{});var jt=r(ge);et=d(jt,"tf.keras.Model.fit"),jt.forEach(t),_e=d(re,` method which currently requires having all the
tensors in the first argument of the model call function: `),be=s(re,"CODE",{});var Ne=r(be);tt=d(Ne,"model(inputs)"),Ne.forEach(t),Qe=d(re,"."),re.forEach(t),J=m(z),D=s(z,"P",{});var Ct=r(D);Se=d(Ct,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ct.forEach(t),ae=m(z),S=s(z,"UL",{});var ie=r(S);I=s(ie,"LI",{});var he=r(I);ot=d(he,"a single Tensor with "),ce=s(he,"CODE",{});var ve=r(ce);pe=d(ve,"input_ids"),ve.forEach(t),nt=d(he," only and nothing else: "),X=s(he,"CODE",{});var qe=r(X);at=d(qe,"model(input_ids)"),qe.forEach(t),he.forEach(t),st=m(ie),G=s(ie,"LI",{});var de=r(G);ze=d(de,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ke=s(de,"CODE",{});var Le=r(ke);He=d(Le,"model([input_ids, attention_mask])"),Le.forEach(t),Y=d(de," or "),se=s(de,"CODE",{});var Mt=r(se);rt=d(Mt,"model([input_ids, attention_mask, token_type_ids])"),Mt.forEach(t),de.forEach(t),it=m(ie),K=s(ie,"LI",{});var De=r(K);dt=d(De,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=s(De,"CODE",{});var Et=r(ye);Oe=d(Et,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Et.forEach(t),De.forEach(t),ie.forEach(t)},m(z,M){k(z,l,M),e(l,_),k(z,h,M),k(z,c,M),e(c,g),e(g,n),e(c,p),e(c,q),e(q,ne),k(z,O,M),k(z,j,M),e(j,le),e(j,ge),e(ge,et),e(j,_e),e(j,be),e(be,tt),e(j,Qe),k(z,J,M),k(z,D,M),e(D,Se),k(z,ae,M),k(z,S,M),e(S,I),e(I,ot),e(I,ce),e(ce,pe),e(I,nt),e(I,X),e(X,at),e(S,st),e(S,G),e(G,ze),e(G,ke),e(ke,He),e(G,Y),e(G,se),e(se,rt),e(S,it),e(S,K),e(K,dt),e(K,ye),e(ye,Oe)},d(z){z&&t(l),z&&t(h),z&&t(c),z&&t(O),z&&t(j),z&&t(J),z&&t(D),z&&t(ae),z&&t(S)}}}function vw(F){let l,_,h,c,g;return{c(){l=a("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(p,"CODE",{});var q=r(h);c=d(q,"Module"),q.forEach(t),g=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,_),e(l,h),e(h,c),e(l,g)},d(n){n&&t(l)}}}function Tw(F){let l,_,h,c,g;return c=new C({props:{code:`from transformers import BartTokenizer, TFBartModel
import tensorflow as tf

tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")
model = TFBartModel.from_pretrained("facebook/bart-large")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, TFBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),_=i("Example:"),h=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Example:"),p.forEach(t),h=m(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,_),k(n,h,p),T(c,n,p),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){x(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(h),$(c,n)}}}function ww(F){let l,_,h,c,g,n,p,q,ne,O,j,le,ge,et,_e,be,tt,Qe,J,D,Se,ae,S,I,ot,ce,pe,nt,X,at,st,G,ze,ke,He,Y,se,rt,it,K,dt,ye,Oe;return{c(){l=a("p"),_=i("TF 2.0 models accepts two formats as inputs:"),h=u(),c=a("ul"),g=a("li"),n=i("having all inputs as keyword arguments (like PyTorch models), or"),p=u(),q=a("li"),ne=i("having all inputs as a list, tuple or dict in the first positional arguments."),O=u(),j=a("p"),le=i("This second option is useful when using "),ge=a("code"),et=i("tf.keras.Model.fit"),_e=i(` method which currently requires having all the
tensors in the first argument of the model call function: `),be=a("code"),tt=i("model(inputs)"),Qe=i("."),J=u(),D=a("p"),Se=i(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae=u(),S=a("ul"),I=a("li"),ot=i("a single Tensor with "),ce=a("code"),pe=i("input_ids"),nt=i(" only and nothing else: "),X=a("code"),at=i("model(input_ids)"),st=u(),G=a("li"),ze=i(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ke=a("code"),He=i("model([input_ids, attention_mask])"),Y=i(" or "),se=a("code"),rt=i("model([input_ids, attention_mask, token_type_ids])"),it=u(),K=a("li"),dt=i(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=a("code"),Oe=i('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){l=s(z,"P",{});var M=r(l);_=d(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),h=m(z),c=s(z,"UL",{});var H=r(c);g=s(H,"LI",{});var Bt=r(g);n=d(Bt,"having all inputs as keyword arguments (like PyTorch models), or"),Bt.forEach(t),p=m(H),q=s(H,"LI",{});var Ie=r(q);ne=d(Ie,"having all inputs as a list, tuple or dict in the first positional arguments."),Ie.forEach(t),H.forEach(t),O=m(z),j=s(z,"P",{});var re=r(j);le=d(re,"This second option is useful when using "),ge=s(re,"CODE",{});var jt=r(ge);et=d(jt,"tf.keras.Model.fit"),jt.forEach(t),_e=d(re,` method which currently requires having all the
tensors in the first argument of the model call function: `),be=s(re,"CODE",{});var Ne=r(be);tt=d(Ne,"model(inputs)"),Ne.forEach(t),Qe=d(re,"."),re.forEach(t),J=m(z),D=s(z,"P",{});var Ct=r(D);Se=d(Ct,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ct.forEach(t),ae=m(z),S=s(z,"UL",{});var ie=r(S);I=s(ie,"LI",{});var he=r(I);ot=d(he,"a single Tensor with "),ce=s(he,"CODE",{});var ve=r(ce);pe=d(ve,"input_ids"),ve.forEach(t),nt=d(he," only and nothing else: "),X=s(he,"CODE",{});var qe=r(X);at=d(qe,"model(input_ids)"),qe.forEach(t),he.forEach(t),st=m(ie),G=s(ie,"LI",{});var de=r(G);ze=d(de,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ke=s(de,"CODE",{});var Le=r(ke);He=d(Le,"model([input_ids, attention_mask])"),Le.forEach(t),Y=d(de," or "),se=s(de,"CODE",{});var Mt=r(se);rt=d(Mt,"model([input_ids, attention_mask, token_type_ids])"),Mt.forEach(t),de.forEach(t),it=m(ie),K=s(ie,"LI",{});var De=r(K);dt=d(De,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=s(De,"CODE",{});var Et=r(ye);Oe=d(Et,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Et.forEach(t),De.forEach(t),ie.forEach(t)},m(z,M){k(z,l,M),e(l,_),k(z,h,M),k(z,c,M),e(c,g),e(g,n),e(c,p),e(c,q),e(q,ne),k(z,O,M),k(z,j,M),e(j,le),e(j,ge),e(ge,et),e(j,_e),e(j,be),e(be,tt),e(j,Qe),k(z,J,M),k(z,D,M),e(D,Se),k(z,ae,M),k(z,S,M),e(S,I),e(I,ot),e(I,ce),e(ce,pe),e(I,nt),e(I,X),e(X,at),e(S,st),e(S,G),e(G,ze),e(G,ke),e(ke,He),e(G,Y),e(G,se),e(se,rt),e(S,it),e(S,K),e(K,dt),e(K,ye),e(ye,Oe)},d(z){z&&t(l),z&&t(h),z&&t(c),z&&t(O),z&&t(j),z&&t(J),z&&t(D),z&&t(ae),z&&t(S)}}}function xw(F){let l,_,h,c,g;return{c(){l=a("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(p,"CODE",{});var q=r(h);c=d(q,"Module"),q.forEach(t),g=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,_),e(l,h),e(h,c),e(l,g)},d(n){n&&t(l)}}}function $w(F){let l,_,h,c,g;return c=new C({props:{code:`from transformers import BartTokenizer, TFBartForConditionalGeneration

model = TFBartForConditionalGeneration.from_pretrained("facebook/bart-large")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")

ARTICLE_TO_SUMMARIZE = "My friends are cool but they eat too many carbs."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="tf")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5)
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, TFBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=a("p"),_=i("Summarization example:"),h=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Summarization example:"),p.forEach(t),h=m(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,_),k(n,h,p),T(c,n,p),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){x(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(h),$(c,n)}}}function Fw(F){let l,_,h,c,g;return c=new C({props:{code:`from transformers import BartTokenizer, TFBartForConditionalGeneration

tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")
TXT = "My friends are <mask> but they eat too many carbs."

model = TFBartForConditionalGeneration.from_pretrained("facebook/bart-large")
input_ids = tokenizer([TXT], return_tensors="tf")["input_ids"]
logits = model(input_ids).logits
probs = tf.nn.softmax(logits[0])
# probs[5] is associated with the mask token`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, TFBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){l=a("p"),_=i("Mask filling example:"),h=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Mask filling example:"),p.forEach(t),h=m(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,_),k(n,h,p),T(c,n,p),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){x(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(h),$(c,n)}}}function zw(F){let l,_,h,c,g;return{c(){l=a("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(p,"CODE",{});var q=r(h);c=d(q,"Module"),q.forEach(t),g=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,_),e(l,h),e(h,c),e(l,g)},d(n){n&&t(l)}}}function qw(F){let l,_,h,c,g;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartModel

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartModel.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),_=i("Example:"),h=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Example:"),p.forEach(t),h=m(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,_),k(n,h,p),T(c,n,p),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){x(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(h),$(c,n)}}}function Bw(F){let l,_,h,c,g;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),_=i("Example:"),h=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Example:"),p.forEach(t),h=m(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,_),k(n,h,p),T(c,n,p),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){x(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(h),$(c,n)}}}function jw(F){let l,_,h,c,g;return c=new C({props:{code:`import jax.numpy as jnp
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),_=i("Example:"),h=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Example:"),p.forEach(t),h=m(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,_),k(n,h,p),T(c,n,p),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){x(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(h),$(c,n)}}}function Cw(F){let l,_,h,c,g;return{c(){l=a("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(p,"CODE",{});var q=r(h);c=d(q,"Module"),q.forEach(t),g=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,_),e(l,h),e(h,c),e(l,g)},d(n){n&&t(l)}}}function Mw(F){let l,_,h,c,g;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

ARTICLE_TO_SUMMARIZE = "My friends are cool but they eat too many carbs."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="np")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"]).sequences
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=a("p"),_=i("Summarization example:"),h=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Summarization example:"),p.forEach(t),h=m(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,_),k(n,h,p),T(c,n,p),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){x(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(h),$(c,n)}}}function Ew(F){let l,_,h,c,g;return c=new C({props:{code:`import jax
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")

TXT = "My friends are <mask> but they eat too many carbs."
input_ids = tokenizer([TXT], return_tensors="jax")["input_ids"]

logits = model(input_ids).logits
masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero()[0].item()
probs = jax.nn.softmax(logits[0, masked_index], axis=0)
values, predictions = jax.lax.top_k(probs, k=1)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero()[<span class="hljs-number">0</span>].item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits[<span class="hljs-number">0</span>, masked_index], axis=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = jax.lax.top_k(probs, k=<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),{c(){l=a("p"),_=i("Mask filling example:"),h=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Mask filling example:"),p.forEach(t),h=m(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,_),k(n,h,p),T(c,n,p),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){x(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(h),$(c,n)}}}function Pw(F){let l,_,h,c,g;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),_=i("Example:"),h=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Example:"),p.forEach(t),h=m(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,_),k(n,h,p),T(c,n,p),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){x(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(h),$(c,n)}}}function Aw(F){let l,_,h,c,g;return c=new C({props:{code:`import jax.numpy as jnp
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),_=i("Example:"),h=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Example:"),p.forEach(t),h=m(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,_),k(n,h,p),T(c,n,p),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){x(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(h),$(c,n)}}}function Sw(F){let l,_,h,c,g;return{c(){l=a("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(p,"CODE",{});var q=r(h);c=d(q,"Module"),q.forEach(t),g=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,_),e(l,h),e(h,c),e(l,g)},d(n){n&&t(l)}}}function Ow(F){let l,_,h,c,g;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForSequenceClassification

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartForSequenceClassification.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),_=i("Example:"),h=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Example:"),p.forEach(t),h=m(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,_),k(n,h,p),T(c,n,p),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){x(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(h),$(c,n)}}}function Iw(F){let l,_,h,c,g;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),_=i("Example:"),h=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Example:"),p.forEach(t),h=m(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,_),k(n,h,p),T(c,n,p),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){x(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(h),$(c,n)}}}function Nw(F){let l,_,h,c,g;return c=new C({props:{code:`import jax.numpy as jnp
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),_=i("Example:"),h=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Example:"),p.forEach(t),h=m(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,_),k(n,h,p),T(c,n,p),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){x(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(h),$(c,n)}}}function Lw(F){let l,_,h,c,g;return{c(){l=a("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(p,"CODE",{});var q=r(h);c=d(q,"Module"),q.forEach(t),g=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,_),e(l,h),e(h,c),e(l,g)},d(n){n&&t(l)}}}function Dw(F){let l,_,h,c,g;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForQuestionAnswering

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartForQuestionAnswering.from_pretrained("facebook/bart-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){l=a("p"),_=i("Example:"),h=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Example:"),p.forEach(t),h=m(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,_),k(n,h,p),T(c,n,p),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){x(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(h),$(c,n)}}}function Gw(F){let l,_,h,c,g;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=a("p"),_=i("Example:"),h=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Example:"),p.forEach(t),h=m(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,_),k(n,h,p),T(c,n,p),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){x(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(h),$(c,n)}}}function Ww(F){let l,_,h,c,g;return c=new C({props:{code:`import jax.numpy as jnp
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),_=i("Example:"),h=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Example:"),p.forEach(t),h=m(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,_),k(n,h,p),T(c,n,p),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){x(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(h),$(c,n)}}}function Uw(F){let l,_,h,c,g;return{c(){l=a("p"),_=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a("code"),c=i("Module"),g=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(p,"CODE",{});var q=r(h);c=d(q,"Module"),q.forEach(t),g=d(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){k(n,l,p),e(l,_),e(l,h),e(h,c),e(l,g)},d(n){n&&t(l)}}}function Rw(F){let l,_,h,c,g;return c=new C({props:{code:`from transformers import BartTokenizer, FlaxBartForCausalLM

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartForCausalLM.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

# retrieve logts for next token
next_token_logits = outputs.logits[:, -1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){l=a("p"),_=i("Example:"),h=u(),y(c.$$.fragment)},l(n){l=s(n,"P",{});var p=r(l);_=d(p,"Example:"),p.forEach(t),h=m(n),v(c.$$.fragment,n)},m(n,p){k(n,l,p),e(l,_),k(n,h,p),T(c,n,p),g=!0},p:P,i(n){g||(w(c.$$.fragment,n),g=!0)},o(n){x(c.$$.fragment,n),g=!1},d(n){n&&t(l),n&&t(h),$(c,n)}}}function Qw(F){let l,_,h,c,g,n,p,q,ne,O,j,le,ge,et,_e,be,tt,Qe,J,D,Se,ae,S,I,ot,ce,pe,nt,X,at,st,G,ze,ke,He,Y,se,rt,it,K,dt,ye,Oe,z,M,H,Bt,Ie,re,jt,Ne,Ct,ie,he,ve,qe,de,Le,Mt,De,Et,Jl,bt,ra,Op,ia,Ip,Np,Lp,lt,Dp,qr,Gp,Wp,wi,Up,Rp,da,Qp,Hp,Vp,vo,la,Jp,Xp,ca,Kp,Zp,Xl,Pt,To,xi,pa,Yp,$i,eh,Kl,Be,ct,th,Fi,oh,nh,Br,ah,sh,jr,rh,ih,dh,At,lh,Cr,ch,ph,zi,hh,uh,mh,St,fh,qi,gh,_h,Bi,bh,kh,yh,Mr,Er,vh,Th,wh,Ot,xh,ji,$h,Fh,Ci,zh,qh,Zl,It,wo,Mi,ha,Bh,Ei,jh,Yl,kt,Ch,Pi,Mh,Eh,Ai,Ph,Ah,ec,ua,tc,Nt,xo,Si,ma,Sh,Oi,Oh,oc,Ge,fa,Ih,Lt,Nh,Pr,Lh,Dh,ga,Gh,Wh,Uh,Dt,Rh,Ar,Qh,Hh,Sr,Vh,Jh,Xh,$o,nc,Gt,Fo,Ii,_a,Kh,Ni,Zh,ac,A,ba,Yh,Li,eu,tu,Di,ou,nu,zo,au,ka,su,Gi,ru,iu,du,qo,lu,ya,cu,Or,pu,hu,uu,yt,va,mu,Wi,fu,gu,Ta,Ir,_u,Ui,bu,ku,Nr,yu,Ri,vu,Tu,Bo,wa,wu,Qi,xu,$u,jo,xa,Fu,Hi,zu,qu,Co,$a,Bu,Fa,ju,Vi,Cu,Mu,sc,Wt,Mo,Ji,za,Eu,Xi,Pu,rc,U,qa,Au,Ba,Su,Ki,Ou,Iu,Nu,Zi,Lu,Du,Eo,Gu,ja,Wu,Yi,Uu,Ru,Qu,Po,Hu,Ca,Vu,Lr,Ju,Xu,Ku,Ao,Ma,Zu,ed,Yu,ic,Ut,So,td,Ea,em,od,tm,dc,We,Pa,om,Aa,nm,Dr,am,sm,rm,Sa,im,Oa,dm,lm,cm,Ve,Ia,pm,Rt,hm,Gr,um,mm,nd,fm,gm,_m,Oo,bm,Io,lc,Qt,No,ad,Na,km,sd,ym,cc,Ue,La,vm,Da,Tm,Wr,wm,xm,$m,Ga,Fm,Wa,zm,qm,Bm,je,Ua,jm,Ht,Cm,Ur,Mm,Em,rd,Pm,Am,Sm,Lo,Om,Do,Im,Go,pc,Vt,Wo,id,Ra,Nm,dd,Lm,hc,Te,Qa,Dm,ld,Gm,Wm,Ha,Um,Rr,Rm,Qm,Hm,Va,Vm,Ja,Jm,Xm,Km,ee,Xa,Zm,Jt,Ym,Qr,ef,tf,cd,of,nf,af,Uo,sf,Ro,rf,Qo,df,Ho,lf,Vo,uc,Xt,Jo,pd,Ka,cf,hd,pf,mc,we,Za,hf,Kt,uf,ud,mf,ff,md,gf,_f,bf,Ya,kf,Hr,yf,vf,Tf,es,wf,ts,xf,$f,Ff,Ce,os,zf,Zt,qf,Vr,Bf,jf,fd,Cf,Mf,Ef,Xo,Pf,Ko,Af,Zo,fc,Yt,Yo,gd,ns,Sf,_d,Of,gc,eo,as,If,en,ss,Nf,tn,_c,to,on,bd,rs,Lf,kd,Df,bc,xe,is,Gf,ds,Wf,Jr,Uf,Rf,Qf,ls,Hf,cs,Vf,Jf,Xf,nn,Kf,Je,ps,Zf,oo,Yf,Xr,eg,tg,yd,og,ng,ag,an,sg,sn,kc,no,rn,vd,hs,rg,Td,ig,yc,$e,us,dg,ms,lg,Kr,cg,pg,hg,fs,ug,gs,mg,fg,gg,dn,_g,Me,_s,bg,ao,kg,Zr,yg,vg,wd,Tg,wg,xg,ln,$g,cn,Fg,pn,vc,so,hn,xd,bs,zg,$d,qg,Tc,R,ks,Bg,ys,jg,Yr,Cg,Mg,Eg,vs,Pg,Ts,Ag,Sg,Og,Fd,Ig,Ng,pt,zd,ws,Lg,Dg,qd,xs,Gg,Wg,Bd,$s,Ug,Rg,jd,Fs,Qg,Hg,Xe,zs,Vg,ro,Jg,Cd,Xg,Kg,Md,Zg,Yg,e_,un,t_,mn,o_,fn,qs,n_,gn,a_,_n,Bs,s_,bn,wc,io,kn,Ed,js,r_,Pd,i_,xc,Q,Cs,d_,Ms,l_,ei,c_,p_,h_,Es,u_,Ps,m_,f_,g_,Ad,__,b_,ht,Sd,As,k_,y_,Od,Ss,v_,T_,Id,Os,w_,x_,Nd,Is,$_,F_,Ee,Ns,z_,lo,q_,Ld,B_,j_,Dd,C_,M_,E_,yn,P_,vn,A_,Tn,S_,wn,Ls,O_,xn,I_,$n,Ds,N_,Fn,$c,co,zn,Gd,Gs,L_,Wd,D_,Fc,N,Ws,G_,Ud,W_,U_,Us,R_,ti,Q_,H_,V_,Rs,J_,Qs,X_,K_,Z_,Rd,Y_,eb,ut,Qd,Hs,tb,ob,Hd,Vs,nb,ab,Vd,Js,sb,rb,Jd,Xs,ib,db,Ke,Ks,lb,po,cb,Xd,pb,hb,Kd,ub,mb,fb,qn,gb,Bn,_b,jn,Zs,bb,Cn,kb,Mn,Ys,yb,En,zc,ho,Pn,Zd,er,vb,Yd,Tb,qc,L,tr,wb,uo,xb,el,$b,Fb,tl,zb,qb,Bb,or,jb,oi,Cb,Mb,Eb,nr,Pb,ar,Ab,Sb,Ob,ol,Ib,Nb,mt,nl,sr,Lb,Db,al,rr,Gb,Wb,sl,ir,Ub,Rb,rl,dr,Qb,Hb,Ze,lr,Vb,mo,Jb,il,Xb,Kb,dl,Zb,Yb,ek,An,tk,Sn,ok,On,cr,nk,In,ak,Nn,pr,sk,Ln,Bc,fo,Dn,ll,hr,rk,cl,ik,jc,Z,ur,dk,pl,lk,ck,mr,pk,ni,hk,uk,mk,fr,fk,gr,gk,_k,bk,hl,kk,yk,ft,ul,_r,vk,Tk,ml,br,wk,xk,fl,kr,$k,Fk,gl,yr,zk,qk,Ye,vr,Bk,go,jk,_l,Ck,Mk,bl,Ek,Pk,Ak,Gn,Sk,Wn,Cc;return n=new V({}),ae=new V({}),Le=new V({}),pa=new V({}),ha=new V({}),ua=new C({props:{code:`from transformers import BartForConditionalGeneration, BartTokenizer

model = BartForConditionalGeneration.from_pretrained("facebook/bart-large", forced_bos_token_id=0)
tok = BartTokenizer.from_pretrained("facebook/bart-large")
example_english_phrase = "UN Chief Says There Is No <mask> in Syria"
batch = tok(example_english_phrase, return_tensors="pt")
generated_ids = model.generate(batch["input_ids"])
assert tok.batch_decode(generated_ids, skip_special_tokens=True) == [
    "UN Chief Says There Is No Plan to Stop Chemical Weapons in Syria"
]`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartForConditionalGeneration, BartTokenizer

model = BartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>, forced_bos_token_id=<span class="hljs-number">0</span>)
tok = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
example_english_phrase = <span class="hljs-string">&quot;UN Chief Says There Is No &lt;mask&gt; in Syria&quot;</span>
batch = tok(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
generated_ids = model.generate(batch[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-keyword">assert</span> tok.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>) == [
    <span class="hljs-string">&quot;UN Chief Says There Is No Plan to Stop Chemical Weapons in Syria&quot;</span>
]`}}),ma=new V({}),fa=new B({props:{name:"class transformers.BartConfig",anchor:"transformers.BartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"use_cache",val:" = True"},{name:"num_labels",val:" = 3"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"is_encoder_decoder",val:" = True"},{name:"decoder_start_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the BART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartModel">BartModel</a> or <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.TFBartModel">TFBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.BartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.BartConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.BartConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.BartConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.BartConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.BartConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.BartConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.BartConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.BartConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.BartConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.BartConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.BartConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.BartConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BartConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.BartConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.BartConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).
num_labels &#x2014; (<code>int</code>, <em>optional</em>, defaults to 3):
The number of labels to use in <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartForSequenceClassification">BartForSequenceClassification</a>.`,name:"use_cache"},{anchor:"transformers.BartConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/configuration_bart.py#L35"}}),$o=new E({props:{anchor:"transformers.BartConfig.example",$$slots:{default:[tw]},$$scope:{ctx:F}}}),_a=new V({}),ba=new B({props:{name:"class transformers.BartTokenizer",anchor:"transformers.BartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BartTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BartTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.BartTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BartTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BartTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BartTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BartTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BartTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BartTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BartTokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (BART tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/tokenization_bart.py#L101"}}),zo=new E({props:{anchor:"transformers.BartTokenizer.example",$$slots:{default:[ow]},$$scope:{ctx:F}}}),qo=new Fe({props:{$$slots:{default:[nw]},$$scope:{ctx:F}}}),va=new B({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/tokenization_bart.py#L338",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),wa=new B({props:{name:"convert_tokens_to_string",anchor:"transformers.BartTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/tokenization_bart.py#L303"}}),xa=new B({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/tokenization_bart.py#L390",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),$a=new B({props:{name:"get_special_tokens_mask",anchor:"transformers.BartTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BartTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BartTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/tokenization_bart.py#L363",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),za=new V({}),qa=new B({props:{name:"class transformers.BartTokenizerFast",anchor:"transformers.BartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BartTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BartTokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.BartTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BartTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BartTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BartTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BartTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BartTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BartTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BartTokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (BART tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.BartTokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/tokenization_bart_fast.py#L70"}}),Eo=new E({props:{anchor:"transformers.BartTokenizerFast.example",$$slots:{default:[aw]},$$scope:{ctx:F}}}),Po=new Fe({props:{$$slots:{default:[sw]},$$scope:{ctx:F}}}),Ma=new B({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/tokenization_bart_fast.py#L282",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ea=new V({}),Pa=new B({props:{name:"class transformers.BartModel",anchor:"transformers.BartModel",parameters:[{name:"config",val:": BartConfig"}],parametersDescription:[{anchor:"transformers.BartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_bart.py#L1138"}}),Ia=new B({props:{name:"forward",anchor:"transformers.BartModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BartModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_bart._prepare_decoder_inputs</code> and
modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information
on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BartModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BartModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BartModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BartModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BartModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BartModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BartModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BartModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_bart.py#L1165",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
`}}),Oo=new Fe({props:{$$slots:{default:[rw]},$$scope:{ctx:F}}}),Io=new E({props:{anchor:"transformers.BartModel.forward.example",$$slots:{default:[iw]},$$scope:{ctx:F}}}),Na=new V({}),La=new B({props:{name:"class transformers.BartForConditionalGeneration",anchor:"transformers.BartForConditionalGeneration",parameters:[{name:"config",val:": BartConfig"}],parametersDescription:[{anchor:"transformers.BartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_bart.py#L1265"}}),Ua=new B({props:{name:"forward",anchor:"transformers.BartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_bart._prepare_decoder_inputs</code> and
modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information
on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BartForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BartForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BartForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_bart.py#L1304",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
`}}),Lo=new Fe({props:{$$slots:{default:[dw]},$$scope:{ctx:F}}}),Do=new E({props:{anchor:"transformers.BartForConditionalGeneration.forward.example",$$slots:{default:[lw]},$$scope:{ctx:F}}}),Go=new E({props:{anchor:"transformers.BartForConditionalGeneration.forward.example-2",$$slots:{default:[cw]},$$scope:{ctx:F}}}),Ra=new V({}),Qa=new B({props:{name:"class transformers.BartForSequenceClassification",anchor:"transformers.BartForSequenceClassification",parameters:[{name:"config",val:": BartConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_bart.py#L1434"}}),Xa=new B({props:{name:"forward",anchor:"transformers.BartForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_bart._prepare_decoder_inputs</code> and
modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information
on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BartForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BartForSequenceClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BartForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BartForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BartForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BartForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_bart.py#L1447",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
`}}),Uo=new Fe({props:{$$slots:{default:[pw]},$$scope:{ctx:F}}}),Ro=new E({props:{anchor:"transformers.BartForSequenceClassification.forward.example",$$slots:{default:[hw]},$$scope:{ctx:F}}}),Qo=new E({props:{anchor:"transformers.BartForSequenceClassification.forward.example-2",$$slots:{default:[uw]},$$scope:{ctx:F}}}),Ho=new E({props:{anchor:"transformers.BartForSequenceClassification.forward.example-3",$$slots:{default:[mw]},$$scope:{ctx:F}}}),Vo=new E({props:{anchor:"transformers.BartForSequenceClassification.forward.example-4",$$slots:{default:[fw]},$$scope:{ctx:F}}}),Ka=new V({}),Za=new B({props:{name:"class transformers.BartForQuestionAnswering",anchor:"transformers.BartForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_bart.py#L1560"}}),os=new B({props:{name:"forward",anchor:"transformers.BartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Tensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_bart._prepare_decoder_inputs</code> and
modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information
on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BartForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BartForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BartForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_bart.py#L1572",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
`}}),Xo=new Fe({props:{$$slots:{default:[gw]},$$scope:{ctx:F}}}),Ko=new E({props:{anchor:"transformers.BartForQuestionAnswering.forward.example",$$slots:{default:[_w]},$$scope:{ctx:F}}}),Zo=new E({props:{anchor:"transformers.BartForQuestionAnswering.forward.example-2",$$slots:{default:[bw]},$$scope:{ctx:F}}}),ns=new V({}),as=new B({props:{name:"class transformers.BartForCausalLM",anchor:"transformers.BartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_bart.py#L1690"}}),ss=new B({props:{name:"forward",anchor:"transformers.BartForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BartForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.BartForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BartForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BartForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BartForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.BartForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.BartForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_bart.py#L1721",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
`}}),tn=new E({props:{anchor:"transformers.BartForCausalLM.forward.example",$$slots:{default:[kw]},$$scope:{ctx:F}}}),rs=new V({}),is=new B({props:{name:"class transformers.TFBartModel",anchor:"transformers.TFBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_tf_bart.py#L1129"}}),nn=new Fe({props:{$$slots:{default:[yw]},$$scope:{ctx:F}}}),ps=new B({props:{name:"call",anchor:"transformers.TFBartModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFBartModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBartModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBartModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBartModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBartModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBartModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBartModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBartModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBartModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBartModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_tf_bart.py#L1144",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
`}}),an=new Fe({props:{$$slots:{default:[vw]},$$scope:{ctx:F}}}),sn=new E({props:{anchor:"transformers.TFBartModel.call.example",$$slots:{default:[Tw]},$$scope:{ctx:F}}}),hs=new V({}),us=new B({props:{name:"class transformers.TFBartForConditionalGeneration",anchor:"transformers.TFBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_tf_bart.py#L1218"}}),dn=new Fe({props:{$$slots:{default:[ww]},$$scope:{ctx:F}}}),_s=new B({props:{name:"call",anchor:"transformers.TFBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFBartForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBartForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBartForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBartForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBartForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBartForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_tf_bart.py#L1253",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
`}}),ln=new Fe({props:{$$slots:{default:[xw]},$$scope:{ctx:F}}}),cn=new E({props:{anchor:"transformers.TFBartForConditionalGeneration.call.example",$$slots:{default:[$w]},$$scope:{ctx:F}}}),pn=new E({props:{anchor:"transformers.TFBartForConditionalGeneration.call.example-2",$$slots:{default:[Fw]},$$scope:{ctx:F}}}),bs=new V({}),ks=new B({props:{name:"class transformers.FlaxBartModel",anchor:"transformers.FlaxBartModel",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_flax_bart.py#L1229"}}),zs=new B({props:{name:"__call__",anchor:"transformers.FlaxBartModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_flax_bart.py#L1164",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
`}}),un=new Fe({props:{$$slots:{default:[zw]},$$scope:{ctx:F}}}),mn=new E({props:{anchor:"transformers.FlaxBartModel.__call__.example",$$slots:{default:[qw]},$$scope:{ctx:F}}}),qs=new B({props:{name:"encode",anchor:"transformers.FlaxBartModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_flax_bart.py#L987",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
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
`}}),gn=new E({props:{anchor:"transformers.FlaxBartModel.encode.example",$$slots:{default:[Bw]},$$scope:{ctx:F}}}),Bs=new B({props:{name:"decode",anchor:"transformers.FlaxBartModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_flax_bart.py#L1050",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
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
`}}),bn=new E({props:{anchor:"transformers.FlaxBartModel.decode.example",$$slots:{default:[jw]},$$scope:{ctx:F}}}),js=new V({}),Cs=new B({props:{name:"class transformers.FlaxBartForConditionalGeneration",anchor:"transformers.FlaxBartForConditionalGeneration",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_flax_bart.py#L1315"}}),Ns=new B({props:{name:"__call__",anchor:"transformers.FlaxBartForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_flax_bart.py#L1164",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
`}}),yn=new Fe({props:{$$slots:{default:[Cw]},$$scope:{ctx:F}}}),vn=new E({props:{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.example",$$slots:{default:[Mw]},$$scope:{ctx:F}}}),Tn=new E({props:{anchor:"transformers.FlaxBartForConditionalGeneration.__call__.example-2",$$slots:{default:[Ew]},$$scope:{ctx:F}}}),Ls=new B({props:{name:"encode",anchor:"transformers.FlaxBartForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForConditionalGeneration.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForConditionalGeneration.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForConditionalGeneration.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_flax_bart.py#L987",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
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
`}}),xn=new E({props:{anchor:"transformers.FlaxBartForConditionalGeneration.encode.example",$$slots:{default:[Pw]},$$scope:{ctx:F}}}),Ds=new B({props:{name:"decode",anchor:"transformers.FlaxBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_flax_bart.py#L1319",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
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
`}}),Fn=new E({props:{anchor:"transformers.FlaxBartForConditionalGeneration.decode.example",$$slots:{default:[Aw]},$$scope:{ctx:F}}}),Gs=new V({}),Ws=new B({props:{name:"class transformers.FlaxBartForSequenceClassification",anchor:"transformers.FlaxBartForSequenceClassification",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_flax_bart.py#L1628"}}),Ks=new B({props:{name:"__call__",anchor:"transformers.FlaxBartForSequenceClassification.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_flax_bart.py#L1164",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
`}}),qn=new Fe({props:{$$slots:{default:[Sw]},$$scope:{ctx:F}}}),Bn=new E({props:{anchor:"transformers.FlaxBartForSequenceClassification.__call__.example",$$slots:{default:[Ow]},$$scope:{ctx:F}}}),Zs=new B({props:{name:"encode",anchor:"transformers.FlaxBartForSequenceClassification.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForSequenceClassification.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForSequenceClassification.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForSequenceClassification.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_flax_bart.py#L987",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
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
`}}),Cn=new E({props:{anchor:"transformers.FlaxBartForSequenceClassification.encode.example",$$slots:{default:[Iw]},$$scope:{ctx:F}}}),Ys=new B({props:{name:"decode",anchor:"transformers.FlaxBartForSequenceClassification.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartForSequenceClassification.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartForSequenceClassification.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartForSequenceClassification.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartForSequenceClassification.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartForSequenceClassification.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForSequenceClassification.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForSequenceClassification.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_flax_bart.py#L1050",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
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
`}}),En=new E({props:{anchor:"transformers.FlaxBartForSequenceClassification.decode.example",$$slots:{default:[Nw]},$$scope:{ctx:F}}}),er=new V({}),tr=new B({props:{name:"class transformers.FlaxBartForQuestionAnswering",anchor:"transformers.FlaxBartForQuestionAnswering",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_flax_bart.py#L1715"}}),lr=new B({props:{name:"__call__",anchor:"transformers.FlaxBartForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_flax_bart.py#L1164",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
`}}),An=new Fe({props:{$$slots:{default:[Lw]},$$scope:{ctx:F}}}),Sn=new E({props:{anchor:"transformers.FlaxBartForQuestionAnswering.__call__.example",$$slots:{default:[Dw]},$$scope:{ctx:F}}}),cr=new B({props:{name:"encode",anchor:"transformers.FlaxBartForQuestionAnswering.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartForQuestionAnswering.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForQuestionAnswering.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForQuestionAnswering.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_flax_bart.py#L987",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
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
`}}),In=new E({props:{anchor:"transformers.FlaxBartForQuestionAnswering.encode.example",$$slots:{default:[Gw]},$$scope:{ctx:F}}}),pr=new B({props:{name:"decode",anchor:"transformers.FlaxBartForQuestionAnswering.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartForQuestionAnswering.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartForQuestionAnswering.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartForQuestionAnswering.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartForQuestionAnswering.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartForQuestionAnswering.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForQuestionAnswering.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForQuestionAnswering.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_flax_bart.py#L1050",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
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
`}}),Ln=new E({props:{anchor:"transformers.FlaxBartForQuestionAnswering.decode.example",$$slots:{default:[Ww]},$$scope:{ctx:F}}}),hr=new V({}),ur=new B({props:{name:"class transformers.FlaxBartForCausalLM",anchor:"transformers.FlaxBartForCausalLM",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBartForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_flax_bart.py#L1951"}}),vr=new B({props:{name:"__call__",anchor:"transformers.FlaxBartForCausalLM.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBartForCausalLM.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartForCausalLM.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartForCausalLM.__call__.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartForCausalLM.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartForCausalLM.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartForCausalLM.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartForCausalLM.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForCausalLM.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForCausalLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/bart/modeling_flax_bart.py#L1789",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
`}}),Gn=new Fe({props:{$$slots:{default:[Uw]},$$scope:{ctx:F}}}),Wn=new E({props:{anchor:"transformers.FlaxBartForCausalLM.__call__.example",$$slots:{default:[Rw]},$$scope:{ctx:F}}}),{c(){l=a("meta"),_=u(),h=a("h1"),c=a("a"),g=a("span"),y(n.$$.fragment),p=u(),q=a("span"),ne=i("BART"),O=u(),j=a("p"),le=a("strong"),ge=i("DISCLAIMER:"),et=i(" If you see something strange, file a "),_e=a("a"),be=i("Github Issue"),tt=i(` and assign
@patrickvonplaten`),Qe=u(),J=a("h2"),D=a("a"),Se=a("span"),y(ae.$$.fragment),S=u(),I=a("span"),ot=i("Overview"),ce=u(),pe=a("p"),nt=i("The Bart model was proposed in "),X=a("a"),at=i(`BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation,
Translation, and Comprehension`),st=i(` by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer on 29 Oct, 2019.`),G=u(),ze=a("p"),ke=i("According to the abstract,"),He=u(),Y=a("ul"),se=a("li"),rt=i(`Bart uses a standard seq2seq/machine translation architecture with a bidirectional encoder (like BERT) and a
left-to-right decoder (like GPT).`),it=u(),K=a("li"),dt=i(`The pretraining task involves randomly shuffling the order of the original sentences and a novel in-filling scheme,
where spans of text are replaced with a single mask token.`),ye=u(),Oe=a("li"),z=i(`BART is particularly effective when fine tuned for text generation but also works well for comprehension tasks. It
matches the performance of RoBERTa with comparable training resources on GLUE and SQuAD, achieves new
state-of-the-art results on a range of abstractive dialogue, question answering, and summarization tasks, with gains
of up to 6 ROUGE.`),M=u(),H=a("p"),Bt=i("This model was contributed by "),Ie=a("a"),re=i("sshleifer"),jt=i(". The Authors\u2019 code can be found "),Ne=a("a"),Ct=i("here"),ie=i("."),he=u(),ve=a("h3"),qe=a("a"),de=a("span"),y(Le.$$.fragment),Mt=u(),De=a("span"),Et=i("Examples"),Jl=u(),bt=a("ul"),ra=a("li"),Op=i(`Examples and scripts for fine-tuning BART and other models for sequence to sequence tasks can be found in
`),ia=a("a"),Ip=i("examples/pytorch/summarization/"),Np=i("."),Lp=u(),lt=a("li"),Dp=i("An example of how to train "),qr=a("a"),Gp=i("BartForConditionalGeneration"),Wp=i(" with a Hugging Face "),wi=a("code"),Up=i("datasets"),Rp=i(`
object can be found in this `),da=a("a"),Qp=i("forum discussion"),Hp=i("."),Vp=u(),vo=a("li"),la=a("a"),Jp=i("Distilled checkpoints"),Xp=i(" are described in this "),ca=a("a"),Kp=i("paper"),Zp=i("."),Xl=u(),Pt=a("h2"),To=a("a"),xi=a("span"),y(pa.$$.fragment),Yp=u(),$i=a("span"),eh=i("Implementation Notes"),Kl=u(),Be=a("ul"),ct=a("li"),th=i("Bart doesn\u2019t use "),Fi=a("code"),oh=i("token_type_ids"),nh=i(" for sequence classification. Use "),Br=a("a"),ah=i("BartTokenizer"),sh=i(` or
`),jr=a("a"),rh=i("encode()"),ih=i(" to get the proper splitting."),dh=u(),At=a("li"),lh=i("The forward pass of "),Cr=a("a"),ch=i("BartModel"),ph=i(" will create the "),zi=a("code"),hh=i("decoder_input_ids"),uh=i(` if they are not passed.
This is different than some other modeling APIs. A typical use case of this feature is mask filling.`),mh=u(),St=a("li"),fh=i(`Model predictions are intended to be identical to the original implementation when
`),qi=a("code"),gh=i("forced_bos_token_id=0"),_h=i(`. This only works, however, if the string you pass to
`),Bi=a("code"),bh=i("fairseq.encode"),kh=i(" starts with a space."),yh=u(),Mr=a("li"),Er=a("a"),vh=i("generate()"),Th=i(` should be used for conditional generation tasks like
summarization, see the example in that docstrings.`),wh=u(),Ot=a("li"),xh=i("Models that load the "),ji=a("em"),$h=i("facebook/bart-large-cnn"),Fh=i(" weights will not have a "),Ci=a("code"),zh=i("mask_token_id"),qh=i(`, or be able to perform
mask-filling tasks.`),Zl=u(),It=a("h2"),wo=a("a"),Mi=a("span"),y(ha.$$.fragment),Bh=u(),Ei=a("span"),jh=i("Mask Filling"),Yl=u(),kt=a("p"),Ch=i("The "),Pi=a("code"),Mh=i("facebook/bart-base"),Eh=i(" and "),Ai=a("code"),Ph=i("facebook/bart-large"),Ah=i(" checkpoints can be used to fill multi-token masks."),ec=u(),y(ua.$$.fragment),tc=u(),Nt=a("h2"),xo=a("a"),Si=a("span"),y(ma.$$.fragment),Sh=u(),Oi=a("span"),Oh=i("BartConfig"),oc=u(),Ge=a("div"),y(fa.$$.fragment),Ih=u(),Lt=a("p"),Nh=i("This is the configuration class to store the configuration of a "),Pr=a("a"),Lh=i("BartModel"),Dh=i(`. It is used to instantiate a BART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BART
`),ga=a("a"),Gh=i("facebook/bart-large"),Wh=i(" architecture."),Uh=u(),Dt=a("p"),Rh=i("Configuration objects inherit from "),Ar=a("a"),Qh=i("PretrainedConfig"),Hh=i(` and can be used to control the model outputs. Read the
documentation from `),Sr=a("a"),Vh=i("PretrainedConfig"),Jh=i(" for more information."),Xh=u(),y($o.$$.fragment),nc=u(),Gt=a("h2"),Fo=a("a"),Ii=a("span"),y(_a.$$.fragment),Kh=u(),Ni=a("span"),Zh=i("BartTokenizer"),ac=u(),A=a("div"),y(ba.$$.fragment),Yh=u(),Li=a("p"),eu=i("Constructs a BART tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding."),tu=u(),Di=a("p"),ou=i(`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),nu=u(),y(zo.$$.fragment),au=u(),ka=a("p"),su=i("You can get around that behavior by passing "),Gi=a("code"),ru=i("add_prefix_space=True"),iu=i(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),du=u(),y(qo.$$.fragment),lu=u(),ya=a("p"),cu=i("This tokenizer inherits from "),Or=a("a"),pu=i("PreTrainedTokenizer"),hu=i(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),uu=u(),yt=a("div"),y(va.$$.fragment),mu=u(),Wi=a("p"),fu=i(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),gu=u(),Ta=a("ul"),Ir=a("li"),_u=i("single sequence: "),Ui=a("code"),bu=i("<s> X </s>"),ku=u(),Nr=a("li"),yu=i("pair of sequences: "),Ri=a("code"),vu=i("<s> A </s></s> B </s>"),Tu=u(),Bo=a("div"),y(wa.$$.fragment),wu=u(),Qi=a("p"),xu=i("Converts a sequence of tokens (string) in a single string."),$u=u(),jo=a("div"),y(xa.$$.fragment),Fu=u(),Hi=a("p"),zu=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),qu=u(),Co=a("div"),y($a.$$.fragment),Bu=u(),Fa=a("p"),ju=i(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Vi=a("code"),Cu=i("prepare_for_model"),Mu=i(" method."),sc=u(),Wt=a("h2"),Mo=a("a"),Ji=a("span"),y(za.$$.fragment),Eu=u(),Xi=a("span"),Pu=i("BartTokenizerFast"),rc=u(),U=a("div"),y(qa.$$.fragment),Au=u(),Ba=a("p"),Su=i("Construct a \u201Cfast\u201D BART tokenizer (backed by HuggingFace\u2019s "),Ki=a("em"),Ou=i("tokenizers"),Iu=i(` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),Nu=u(),Zi=a("p"),Lu=i(`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),Du=u(),y(Eo.$$.fragment),Gu=u(),ja=a("p"),Wu=i("You can get around that behavior by passing "),Yi=a("code"),Uu=i("add_prefix_space=True"),Ru=i(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Qu=u(),y(Po.$$.fragment),Hu=u(),Ca=a("p"),Vu=i("This tokenizer inherits from "),Lr=a("a"),Ju=i("PreTrainedTokenizerFast"),Xu=i(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ku=u(),Ao=a("div"),y(Ma.$$.fragment),Zu=u(),ed=a("p"),Yu=i(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),ic=u(),Ut=a("h2"),So=a("a"),td=a("span"),y(Ea.$$.fragment),em=u(),od=a("span"),tm=i("BartModel"),dc=u(),We=a("div"),y(Pa.$$.fragment),om=u(),Aa=a("p"),nm=i(`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Dr=a("a"),am=i("PreTrainedModel"),sm=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rm=u(),Sa=a("p"),im=i("This model is also a PyTorch "),Oa=a("a"),dm=i("torch.nn.Module"),lm=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cm=u(),Ve=a("div"),y(Ia.$$.fragment),pm=u(),Rt=a("p"),hm=i("The "),Gr=a("a"),um=i("BartModel"),mm=i(" forward method, overrides the "),nd=a("code"),fm=i("__call__"),gm=i(" special method."),_m=u(),y(Oo.$$.fragment),bm=u(),y(Io.$$.fragment),lc=u(),Qt=a("h2"),No=a("a"),ad=a("span"),y(Na.$$.fragment),km=u(),sd=a("span"),ym=i("BartForConditionalGeneration"),cc=u(),Ue=a("div"),y(La.$$.fragment),vm=u(),Da=a("p"),Tm=i(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Wr=a("a"),wm=i("PreTrainedModel"),xm=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$m=u(),Ga=a("p"),Fm=i("This model is also a PyTorch "),Wa=a("a"),zm=i("torch.nn.Module"),qm=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bm=u(),je=a("div"),y(Ua.$$.fragment),jm=u(),Ht=a("p"),Cm=i("The "),Ur=a("a"),Mm=i("BartForConditionalGeneration"),Em=i(" forward method, overrides the "),rd=a("code"),Pm=i("__call__"),Am=i(" special method."),Sm=u(),y(Lo.$$.fragment),Om=u(),y(Do.$$.fragment),Im=u(),y(Go.$$.fragment),pc=u(),Vt=a("h2"),Wo=a("a"),id=a("span"),y(Ra.$$.fragment),Nm=u(),dd=a("span"),Lm=i("BartForSequenceClassification"),hc=u(),Te=a("div"),y(Qa.$$.fragment),Dm=u(),ld=a("p"),Gm=i(`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Wm=u(),Ha=a("p"),Um=i("This model inherits from "),Rr=a("a"),Rm=i("PreTrainedModel"),Qm=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hm=u(),Va=a("p"),Vm=i("This model is also a PyTorch "),Ja=a("a"),Jm=i("torch.nn.Module"),Xm=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Km=u(),ee=a("div"),y(Xa.$$.fragment),Zm=u(),Jt=a("p"),Ym=i("The "),Qr=a("a"),ef=i("BartForSequenceClassification"),tf=i(" forward method, overrides the "),cd=a("code"),of=i("__call__"),nf=i(" special method."),af=u(),y(Uo.$$.fragment),sf=u(),y(Ro.$$.fragment),rf=u(),y(Qo.$$.fragment),df=u(),y(Ho.$$.fragment),lf=u(),y(Vo.$$.fragment),uc=u(),Xt=a("h2"),Jo=a("a"),pd=a("span"),y(Ka.$$.fragment),cf=u(),hd=a("span"),pf=i("BartForQuestionAnswering"),mc=u(),we=a("div"),y(Za.$$.fragment),hf=u(),Kt=a("p"),uf=i(`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ud=a("code"),mf=i("span start logits"),ff=i(" and "),md=a("code"),gf=i("span end logits"),_f=i(")."),bf=u(),Ya=a("p"),kf=i("This model inherits from "),Hr=a("a"),yf=i("PreTrainedModel"),vf=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tf=u(),es=a("p"),wf=i("This model is also a PyTorch "),ts=a("a"),xf=i("torch.nn.Module"),$f=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ff=u(),Ce=a("div"),y(os.$$.fragment),zf=u(),Zt=a("p"),qf=i("The "),Vr=a("a"),Bf=i("BartForQuestionAnswering"),jf=i(" forward method, overrides the "),fd=a("code"),Cf=i("__call__"),Mf=i(" special method."),Ef=u(),y(Xo.$$.fragment),Pf=u(),y(Ko.$$.fragment),Af=u(),y(Zo.$$.fragment),fc=u(),Yt=a("h2"),Yo=a("a"),gd=a("span"),y(ns.$$.fragment),Sf=u(),_d=a("span"),Of=i("BartForCausalLM"),gc=u(),eo=a("div"),y(as.$$.fragment),If=u(),en=a("div"),y(ss.$$.fragment),Nf=u(),y(tn.$$.fragment),_c=u(),to=a("h2"),on=a("a"),bd=a("span"),y(rs.$$.fragment),Lf=u(),kd=a("span"),Df=i("TFBartModel"),bc=u(),xe=a("div"),y(is.$$.fragment),Gf=u(),ds=a("p"),Wf=i(`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Jr=a("a"),Uf=i("TFPreTrainedModel"),Rf=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qf=u(),ls=a("p"),Hf=i("This model is also a "),cs=a("a"),Vf=i("tf.keras.Model"),Jf=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xf=u(),y(nn.$$.fragment),Kf=u(),Je=a("div"),y(ps.$$.fragment),Zf=u(),oo=a("p"),Yf=i("The "),Xr=a("a"),eg=i("TFBartModel"),tg=i(" forward method, overrides the "),yd=a("code"),og=i("__call__"),ng=i(" special method."),ag=u(),y(an.$$.fragment),sg=u(),y(sn.$$.fragment),kc=u(),no=a("h2"),rn=a("a"),vd=a("span"),y(hs.$$.fragment),rg=u(),Td=a("span"),ig=i("TFBartForConditionalGeneration"),yc=u(),$e=a("div"),y(us.$$.fragment),dg=u(),ms=a("p"),lg=i(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Kr=a("a"),cg=i("TFPreTrainedModel"),pg=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hg=u(),fs=a("p"),ug=i("This model is also a "),gs=a("a"),mg=i("tf.keras.Model"),fg=i(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gg=u(),y(dn.$$.fragment),_g=u(),Me=a("div"),y(_s.$$.fragment),bg=u(),ao=a("p"),kg=i("The "),Zr=a("a"),yg=i("TFBartForConditionalGeneration"),vg=i(" forward method, overrides the "),wd=a("code"),Tg=i("__call__"),wg=i(" special method."),xg=u(),y(ln.$$.fragment),$g=u(),y(cn.$$.fragment),Fg=u(),y(pn.$$.fragment),vc=u(),so=a("h2"),hn=a("a"),xd=a("span"),y(bs.$$.fragment),zg=u(),$d=a("span"),qg=i("FlaxBartModel"),Tc=u(),R=a("div"),y(ks.$$.fragment),Bg=u(),ys=a("p"),jg=i(`The bare Bart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Yr=a("a"),Cg=i("FlaxPreTrainedModel"),Mg=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eg=u(),vs=a("p"),Pg=i(`This model is also a Flax Linen
`),Ts=a("a"),Ag=i("flax.nn.Module"),Sg=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Og=u(),Fd=a("p"),Ig=i("Finally, this model supports inherent JAX features such as:"),Ng=u(),pt=a("ul"),zd=a("li"),ws=a("a"),Lg=i("Just-In-Time (JIT) compilation"),Dg=u(),qd=a("li"),xs=a("a"),Gg=i("Automatic Differentiation"),Wg=u(),Bd=a("li"),$s=a("a"),Ug=i("Vectorization"),Rg=u(),jd=a("li"),Fs=a("a"),Qg=i("Parallelization"),Hg=u(),Xe=a("div"),y(zs.$$.fragment),Vg=u(),ro=a("p"),Jg=i("The "),Cd=a("code"),Xg=i("FlaxBartPreTrainedModel"),Kg=i(" forward method, overrides the "),Md=a("code"),Zg=i("__call__"),Yg=i(" special method."),e_=u(),y(un.$$.fragment),t_=u(),y(mn.$$.fragment),o_=u(),fn=a("div"),y(qs.$$.fragment),n_=u(),y(gn.$$.fragment),a_=u(),_n=a("div"),y(Bs.$$.fragment),s_=u(),y(bn.$$.fragment),wc=u(),io=a("h2"),kn=a("a"),Ed=a("span"),y(js.$$.fragment),r_=u(),Pd=a("span"),i_=i("FlaxBartForConditionalGeneration"),xc=u(),Q=a("div"),y(Cs.$$.fragment),d_=u(),Ms=a("p"),l_=i(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),ei=a("a"),c_=i("FlaxPreTrainedModel"),p_=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),h_=u(),Es=a("p"),u_=i(`This model is also a Flax Linen
`),Ps=a("a"),m_=i("flax.nn.Module"),f_=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),g_=u(),Ad=a("p"),__=i("Finally, this model supports inherent JAX features such as:"),b_=u(),ht=a("ul"),Sd=a("li"),As=a("a"),k_=i("Just-In-Time (JIT) compilation"),y_=u(),Od=a("li"),Ss=a("a"),v_=i("Automatic Differentiation"),T_=u(),Id=a("li"),Os=a("a"),w_=i("Vectorization"),x_=u(),Nd=a("li"),Is=a("a"),$_=i("Parallelization"),F_=u(),Ee=a("div"),y(Ns.$$.fragment),z_=u(),lo=a("p"),q_=i("The "),Ld=a("code"),B_=i("FlaxBartPreTrainedModel"),j_=i(" forward method, overrides the "),Dd=a("code"),C_=i("__call__"),M_=i(" special method."),E_=u(),y(yn.$$.fragment),P_=u(),y(vn.$$.fragment),A_=u(),y(Tn.$$.fragment),S_=u(),wn=a("div"),y(Ls.$$.fragment),O_=u(),y(xn.$$.fragment),I_=u(),$n=a("div"),y(Ds.$$.fragment),N_=u(),y(Fn.$$.fragment),$c=u(),co=a("h2"),zn=a("a"),Gd=a("span"),y(Gs.$$.fragment),L_=u(),Wd=a("span"),D_=i("FlaxBartForSequenceClassification"),Fc=u(),N=a("div"),y(Ws.$$.fragment),G_=u(),Ud=a("p"),W_=i(`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),U_=u(),Us=a("p"),R_=i("This model inherits from "),ti=a("a"),Q_=i("FlaxPreTrainedModel"),H_=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),V_=u(),Rs=a("p"),J_=i(`This model is also a Flax Linen
`),Qs=a("a"),X_=i("flax.nn.Module"),K_=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Z_=u(),Rd=a("p"),Y_=i("Finally, this model supports inherent JAX features such as:"),eb=u(),ut=a("ul"),Qd=a("li"),Hs=a("a"),tb=i("Just-In-Time (JIT) compilation"),ob=u(),Hd=a("li"),Vs=a("a"),nb=i("Automatic Differentiation"),ab=u(),Vd=a("li"),Js=a("a"),sb=i("Vectorization"),rb=u(),Jd=a("li"),Xs=a("a"),ib=i("Parallelization"),db=u(),Ke=a("div"),y(Ks.$$.fragment),lb=u(),po=a("p"),cb=i("The "),Xd=a("code"),pb=i("FlaxBartPreTrainedModel"),hb=i(" forward method, overrides the "),Kd=a("code"),ub=i("__call__"),mb=i(" special method."),fb=u(),y(qn.$$.fragment),gb=u(),y(Bn.$$.fragment),_b=u(),jn=a("div"),y(Zs.$$.fragment),bb=u(),y(Cn.$$.fragment),kb=u(),Mn=a("div"),y(Ys.$$.fragment),yb=u(),y(En.$$.fragment),zc=u(),ho=a("h2"),Pn=a("a"),Zd=a("span"),y(er.$$.fragment),vb=u(),Yd=a("span"),Tb=i("FlaxBartForQuestionAnswering"),qc=u(),L=a("div"),y(tr.$$.fragment),wb=u(),uo=a("p"),xb=i(`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),el=a("code"),$b=i("span start logits"),Fb=i(" and "),tl=a("code"),zb=i("span end logits"),qb=i(")."),Bb=u(),or=a("p"),jb=i("This model inherits from "),oi=a("a"),Cb=i("FlaxPreTrainedModel"),Mb=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eb=u(),nr=a("p"),Pb=i(`This model is also a Flax Linen
`),ar=a("a"),Ab=i("flax.nn.Module"),Sb=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ob=u(),ol=a("p"),Ib=i("Finally, this model supports inherent JAX features such as:"),Nb=u(),mt=a("ul"),nl=a("li"),sr=a("a"),Lb=i("Just-In-Time (JIT) compilation"),Db=u(),al=a("li"),rr=a("a"),Gb=i("Automatic Differentiation"),Wb=u(),sl=a("li"),ir=a("a"),Ub=i("Vectorization"),Rb=u(),rl=a("li"),dr=a("a"),Qb=i("Parallelization"),Hb=u(),Ze=a("div"),y(lr.$$.fragment),Vb=u(),mo=a("p"),Jb=i("The "),il=a("code"),Xb=i("FlaxBartPreTrainedModel"),Kb=i(" forward method, overrides the "),dl=a("code"),Zb=i("__call__"),Yb=i(" special method."),ek=u(),y(An.$$.fragment),tk=u(),y(Sn.$$.fragment),ok=u(),On=a("div"),y(cr.$$.fragment),nk=u(),y(In.$$.fragment),ak=u(),Nn=a("div"),y(pr.$$.fragment),sk=u(),y(Ln.$$.fragment),Bc=u(),fo=a("h2"),Dn=a("a"),ll=a("span"),y(hr.$$.fragment),rk=u(),cl=a("span"),ik=i("FlaxBartForCausalLM"),jc=u(),Z=a("div"),y(ur.$$.fragment),dk=u(),pl=a("p"),lk=i(`Bart Decoder Model with a language modeling head on top (linear layer with weights tied to the input embeddings)
e.g for autoregressive tasks.`),ck=u(),mr=a("p"),pk=i("This model inherits from "),ni=a("a"),hk=i("FlaxPreTrainedModel"),uk=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mk=u(),fr=a("p"),fk=i(`This model is also a Flax Linen
`),gr=a("a"),gk=i("flax.nn.Module"),_k=i(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),bk=u(),hl=a("p"),kk=i("Finally, this model supports inherent JAX features such as:"),yk=u(),ft=a("ul"),ul=a("li"),_r=a("a"),vk=i("Just-In-Time (JIT) compilation"),Tk=u(),ml=a("li"),br=a("a"),wk=i("Automatic Differentiation"),xk=u(),fl=a("li"),kr=a("a"),$k=i("Vectorization"),Fk=u(),gl=a("li"),yr=a("a"),zk=i("Parallelization"),qk=u(),Ye=a("div"),y(vr.$$.fragment),Bk=u(),go=a("p"),jk=i("The "),_l=a("code"),Ck=i("FlaxBartDecoderPreTrainedModel"),Mk=i(" forward method, overrides the "),bl=a("code"),Ek=i("__call__"),Pk=i(" special method."),Ak=u(),y(Gn.$$.fragment),Sk=u(),y(Wn.$$.fragment),this.h()},l(o){const b=YT('[data-svelte="svelte-1phssyn"]',document.head);l=s(b,"META",{name:!0,content:!0}),b.forEach(t),_=m(o),h=s(o,"H1",{class:!0});var Tr=r(h);c=s(Tr,"A",{id:!0,class:!0,href:!0});var kl=r(c);g=s(kl,"SPAN",{});var yl=r(g);v(n.$$.fragment,yl),yl.forEach(t),kl.forEach(t),p=m(Tr),q=s(Tr,"SPAN",{});var vl=r(q);ne=d(vl,"BART"),vl.forEach(t),Tr.forEach(t),O=m(o),j=s(o,"P",{});var Un=r(j);le=s(Un,"STRONG",{});var Tl=r(le);ge=d(Tl,"DISCLAIMER:"),Tl.forEach(t),et=d(Un," If you see something strange, file a "),_e=s(Un,"A",{href:!0,rel:!0});var wl=r(_e);be=d(wl,"Github Issue"),wl.forEach(t),tt=d(Un,` and assign
@patrickvonplaten`),Un.forEach(t),Qe=m(o),J=s(o,"H2",{class:!0});var wr=r(J);D=s(wr,"A",{id:!0,class:!0,href:!0});var xl=r(D);Se=s(xl,"SPAN",{});var $l=r(Se);v(ae.$$.fragment,$l),$l.forEach(t),xl.forEach(t),S=m(wr),I=s(wr,"SPAN",{});var Fl=r(I);ot=d(Fl,"Overview"),Fl.forEach(t),wr.forEach(t),ce=m(o),pe=s(o,"P",{});var xr=r(pe);nt=d(xr,"The Bart model was proposed in "),X=s(xr,"A",{href:!0,rel:!0});var zl=r(X);at=d(zl,`BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation,
Translation, and Comprehension`),zl.forEach(t),st=d(xr,` by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer on 29 Oct, 2019.`),xr.forEach(t),G=m(o),ze=s(o,"P",{});var ql=r(ze);ke=d(ql,"According to the abstract,"),ql.forEach(t),He=m(o),Y=s(o,"UL",{});var _o=r(Y);se=s(_o,"LI",{});var Bl=r(se);rt=d(Bl,`Bart uses a standard seq2seq/machine translation architecture with a bidirectional encoder (like BERT) and a
left-to-right decoder (like GPT).`),Bl.forEach(t),it=m(_o),K=s(_o,"LI",{});var jl=r(K);dt=d(jl,`The pretraining task involves randomly shuffling the order of the original sentences and a novel in-filling scheme,
where spans of text are replaced with a single mask token.`),jl.forEach(t),ye=m(_o),Oe=s(_o,"LI",{});var Cl=r(Oe);z=d(Cl,`BART is particularly effective when fine tuned for text generation but also works well for comprehension tasks. It
matches the performance of RoBERTa with comparable training resources on GLUE and SQuAD, achieves new
state-of-the-art results on a range of abstractive dialogue, question answering, and summarization tasks, with gains
of up to 6 ROUGE.`),Cl.forEach(t),_o.forEach(t),M=m(o),H=s(o,"P",{});var bo=r(H);Bt=d(bo,"This model was contributed by "),Ie=s(bo,"A",{href:!0,rel:!0});var Ml=r(Ie);re=d(Ml,"sshleifer"),Ml.forEach(t),jt=d(bo,". The Authors\u2019 code can be found "),Ne=s(bo,"A",{href:!0,rel:!0});var El=r(Ne);Ct=d(El,"here"),El.forEach(t),ie=d(bo,"."),bo.forEach(t),he=m(o),ve=s(o,"H3",{class:!0});var $r=r(ve);qe=s($r,"A",{id:!0,class:!0,href:!0});var Pl=r(qe);de=s(Pl,"SPAN",{});var Al=r(de);v(Le.$$.fragment,Al),Al.forEach(t),Pl.forEach(t),Mt=m($r),De=s($r,"SPAN",{});var Sl=r(De);Et=d(Sl,"Examples"),Sl.forEach(t),$r.forEach(t),Jl=m(o),bt=s(o,"UL",{});var ko=r(bt);ra=s(ko,"LI",{});var Fr=r(ra);Op=d(Fr,`Examples and scripts for fine-tuning BART and other models for sequence to sequence tasks can be found in
`),ia=s(Fr,"A",{href:!0,rel:!0});var Ol=r(ia);Ip=d(Ol,"examples/pytorch/summarization/"),Ol.forEach(t),Np=d(Fr,"."),Fr.forEach(t),Lp=m(ko),lt=s(ko,"LI",{});var gt=r(lt);Dp=d(gt,"An example of how to train "),qr=s(gt,"A",{href:!0});var Il=r(qr);Gp=d(Il,"BartForConditionalGeneration"),Il.forEach(t),Wp=d(gt," with a Hugging Face "),wi=s(gt,"CODE",{});var Nl=r(wi);Up=d(Nl,"datasets"),Nl.forEach(t),Rp=d(gt,`
object can be found in this `),da=s(gt,"A",{href:!0,rel:!0});var Ll=r(da);Qp=d(Ll,"forum discussion"),Ll.forEach(t),Hp=d(gt,"."),gt.forEach(t),Vp=m(ko),vo=s(ko,"LI",{});var Rn=r(vo);la=s(Rn,"A",{href:!0,rel:!0});var Dl=r(la);Jp=d(Dl,"Distilled checkpoints"),Dl.forEach(t),Xp=d(Rn," are described in this "),ca=s(Rn,"A",{href:!0,rel:!0});var Gl=r(ca);Kp=d(Gl,"paper"),Gl.forEach(t),Zp=d(Rn,"."),Rn.forEach(t),ko.forEach(t),Xl=m(o),Pt=s(o,"H2",{class:!0});var zr=r(Pt);To=s(zr,"A",{id:!0,class:!0,href:!0});var Wl=r(To);xi=s(Wl,"SPAN",{});var Ul=r(xi);v(pa.$$.fragment,Ul),Ul.forEach(t),Wl.forEach(t),Yp=m(zr),$i=s(zr,"SPAN",{});var Rl=r($i);eh=d(Rl,"Implementation Notes"),Rl.forEach(t),zr.forEach(t),Kl=m(o),Be=s(o,"UL",{});var Re=r(Be);ct=s(Re,"LI",{});var _t=r(ct);th=d(_t,"Bart doesn\u2019t use "),Fi=s(_t,"CODE",{});var Ql=r(Fi);oh=d(Ql,"token_type_ids"),Ql.forEach(t),nh=d(_t," for sequence classification. Use "),Br=s(_t,"A",{href:!0});var Hl=r(Br);ah=d(Hl,"BartTokenizer"),Hl.forEach(t),sh=d(_t,` or
`),jr=s(_t,"A",{href:!0});var Vl=r(jr);rh=d(Vl,"encode()"),Vl.forEach(t),ih=d(_t," to get the proper splitting."),_t.forEach(t),dh=m(Re),At=s(Re,"LI",{});var yo=r(At);lh=d(yo,"The forward pass of "),Cr=s(yo,"A",{href:!0});var Lk=r(Cr);ch=d(Lk,"BartModel"),Lk.forEach(t),ph=d(yo," will create the "),zi=s(yo,"CODE",{});var Dk=r(zi);hh=d(Dk,"decoder_input_ids"),Dk.forEach(t),uh=d(yo,` if they are not passed.
This is different than some other modeling APIs. A typical use case of this feature is mask filling.`),yo.forEach(t),mh=m(Re),St=s(Re,"LI",{});var ai=r(St);fh=d(ai,`Model predictions are intended to be identical to the original implementation when
`),qi=s(ai,"CODE",{});var Gk=r(qi);gh=d(Gk,"forced_bos_token_id=0"),Gk.forEach(t),_h=d(ai,`. This only works, however, if the string you pass to
`),Bi=s(ai,"CODE",{});var Wk=r(Bi);bh=d(Wk,"fairseq.encode"),Wk.forEach(t),kh=d(ai," starts with a space."),ai.forEach(t),yh=m(Re),Mr=s(Re,"LI",{});var Ok=r(Mr);Er=s(Ok,"A",{href:!0});var Uk=r(Er);vh=d(Uk,"generate()"),Uk.forEach(t),Th=d(Ok,` should be used for conditional generation tasks like
summarization, see the example in that docstrings.`),Ok.forEach(t),wh=m(Re),Ot=s(Re,"LI",{});var si=r(Ot);xh=d(si,"Models that load the "),ji=s(si,"EM",{});var Rk=r(ji);$h=d(Rk,"facebook/bart-large-cnn"),Rk.forEach(t),Fh=d(si," weights will not have a "),Ci=s(si,"CODE",{});var Qk=r(Ci);zh=d(Qk,"mask_token_id"),Qk.forEach(t),qh=d(si,`, or be able to perform
mask-filling tasks.`),si.forEach(t),Re.forEach(t),Zl=m(o),It=s(o,"H2",{class:!0});var Mc=r(It);wo=s(Mc,"A",{id:!0,class:!0,href:!0});var Hk=r(wo);Mi=s(Hk,"SPAN",{});var Vk=r(Mi);v(ha.$$.fragment,Vk),Vk.forEach(t),Hk.forEach(t),Bh=m(Mc),Ei=s(Mc,"SPAN",{});var Jk=r(Ei);jh=d(Jk,"Mask Filling"),Jk.forEach(t),Mc.forEach(t),Yl=m(o),kt=s(o,"P",{});var ri=r(kt);Ch=d(ri,"The "),Pi=s(ri,"CODE",{});var Xk=r(Pi);Mh=d(Xk,"facebook/bart-base"),Xk.forEach(t),Eh=d(ri," and "),Ai=s(ri,"CODE",{});var Kk=r(Ai);Ph=d(Kk,"facebook/bart-large"),Kk.forEach(t),Ah=d(ri," checkpoints can be used to fill multi-token masks."),ri.forEach(t),ec=m(o),v(ua.$$.fragment,o),tc=m(o),Nt=s(o,"H2",{class:!0});var Ec=r(Nt);xo=s(Ec,"A",{id:!0,class:!0,href:!0});var Zk=r(xo);Si=s(Zk,"SPAN",{});var Yk=r(Si);v(ma.$$.fragment,Yk),Yk.forEach(t),Zk.forEach(t),Sh=m(Ec),Oi=s(Ec,"SPAN",{});var ey=r(Oi);Oh=d(ey,"BartConfig"),ey.forEach(t),Ec.forEach(t),oc=m(o),Ge=s(o,"DIV",{class:!0});var Qn=r(Ge);v(fa.$$.fragment,Qn),Ih=m(Qn),Lt=s(Qn,"P",{});var ii=r(Lt);Nh=d(ii,"This is the configuration class to store the configuration of a "),Pr=s(ii,"A",{href:!0});var ty=r(Pr);Lh=d(ty,"BartModel"),ty.forEach(t),Dh=d(ii,`. It is used to instantiate a BART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BART
`),ga=s(ii,"A",{href:!0,rel:!0});var oy=r(ga);Gh=d(oy,"facebook/bart-large"),oy.forEach(t),Wh=d(ii," architecture."),ii.forEach(t),Uh=m(Qn),Dt=s(Qn,"P",{});var di=r(Dt);Rh=d(di,"Configuration objects inherit from "),Ar=s(di,"A",{href:!0});var ny=r(Ar);Qh=d(ny,"PretrainedConfig"),ny.forEach(t),Hh=d(di,` and can be used to control the model outputs. Read the
documentation from `),Sr=s(di,"A",{href:!0});var ay=r(Sr);Vh=d(ay,"PretrainedConfig"),ay.forEach(t),Jh=d(di," for more information."),di.forEach(t),Xh=m(Qn),v($o.$$.fragment,Qn),Qn.forEach(t),nc=m(o),Gt=s(o,"H2",{class:!0});var Pc=r(Gt);Fo=s(Pc,"A",{id:!0,class:!0,href:!0});var sy=r(Fo);Ii=s(sy,"SPAN",{});var ry=r(Ii);v(_a.$$.fragment,ry),ry.forEach(t),sy.forEach(t),Kh=m(Pc),Ni=s(Pc,"SPAN",{});var iy=r(Ni);Zh=d(iy,"BartTokenizer"),iy.forEach(t),Pc.forEach(t),ac=m(o),A=s(o,"DIV",{class:!0});var W=r(A);v(ba.$$.fragment,W),Yh=m(W),Li=s(W,"P",{});var dy=r(Li);eu=d(dy,"Constructs a BART tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding."),dy.forEach(t),tu=m(W),Di=s(W,"P",{});var ly=r(Di);ou=d(ly,`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),ly.forEach(t),nu=m(W),v(zo.$$.fragment,W),au=m(W),ka=s(W,"P",{});var Ac=r(ka);su=d(Ac,"You can get around that behavior by passing "),Gi=s(Ac,"CODE",{});var cy=r(Gi);ru=d(cy,"add_prefix_space=True"),cy.forEach(t),iu=d(Ac,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Ac.forEach(t),du=m(W),v(qo.$$.fragment,W),lu=m(W),ya=s(W,"P",{});var Sc=r(ya);cu=d(Sc,"This tokenizer inherits from "),Or=s(Sc,"A",{href:!0});var py=r(Or);pu=d(py,"PreTrainedTokenizer"),py.forEach(t),hu=d(Sc,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Sc.forEach(t),uu=m(W),yt=s(W,"DIV",{class:!0});var li=r(yt);v(va.$$.fragment,li),mu=m(li),Wi=s(li,"P",{});var hy=r(Wi);fu=d(hy,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),hy.forEach(t),gu=m(li),Ta=s(li,"UL",{});var Oc=r(Ta);Ir=s(Oc,"LI",{});var Ik=r(Ir);_u=d(Ik,"single sequence: "),Ui=s(Ik,"CODE",{});var uy=r(Ui);bu=d(uy,"<s> X </s>"),uy.forEach(t),Ik.forEach(t),ku=m(Oc),Nr=s(Oc,"LI",{});var Nk=r(Nr);yu=d(Nk,"pair of sequences: "),Ri=s(Nk,"CODE",{});var my=r(Ri);vu=d(my,"<s> A </s></s> B </s>"),my.forEach(t),Nk.forEach(t),Oc.forEach(t),li.forEach(t),Tu=m(W),Bo=s(W,"DIV",{class:!0});var Ic=r(Bo);v(wa.$$.fragment,Ic),wu=m(Ic),Qi=s(Ic,"P",{});var fy=r(Qi);xu=d(fy,"Converts a sequence of tokens (string) in a single string."),fy.forEach(t),Ic.forEach(t),$u=m(W),jo=s(W,"DIV",{class:!0});var Nc=r(jo);v(xa.$$.fragment,Nc),Fu=m(Nc),Hi=s(Nc,"P",{});var gy=r(Hi);zu=d(gy,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),gy.forEach(t),Nc.forEach(t),qu=m(W),Co=s(W,"DIV",{class:!0});var Lc=r(Co);v($a.$$.fragment,Lc),Bu=m(Lc),Fa=s(Lc,"P",{});var Dc=r(Fa);ju=d(Dc,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Vi=s(Dc,"CODE",{});var _y=r(Vi);Cu=d(_y,"prepare_for_model"),_y.forEach(t),Mu=d(Dc," method."),Dc.forEach(t),Lc.forEach(t),W.forEach(t),sc=m(o),Wt=s(o,"H2",{class:!0});var Gc=r(Wt);Mo=s(Gc,"A",{id:!0,class:!0,href:!0});var by=r(Mo);Ji=s(by,"SPAN",{});var ky=r(Ji);v(za.$$.fragment,ky),ky.forEach(t),by.forEach(t),Eu=m(Gc),Xi=s(Gc,"SPAN",{});var yy=r(Xi);Pu=d(yy,"BartTokenizerFast"),yy.forEach(t),Gc.forEach(t),rc=m(o),U=s(o,"DIV",{class:!0});var ue=r(U);v(qa.$$.fragment,ue),Au=m(ue),Ba=s(ue,"P",{});var Wc=r(Ba);Su=d(Wc,"Construct a \u201Cfast\u201D BART tokenizer (backed by HuggingFace\u2019s "),Ki=s(Wc,"EM",{});var vy=r(Ki);Ou=d(vy,"tokenizers"),vy.forEach(t),Iu=d(Wc,` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),Wc.forEach(t),Nu=m(ue),Zi=s(ue,"P",{});var Ty=r(Zi);Lu=d(Ty,`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),Ty.forEach(t),Du=m(ue),v(Eo.$$.fragment,ue),Gu=m(ue),ja=s(ue,"P",{});var Uc=r(ja);Wu=d(Uc,"You can get around that behavior by passing "),Yi=s(Uc,"CODE",{});var wy=r(Yi);Uu=d(wy,"add_prefix_space=True"),wy.forEach(t),Ru=d(Uc,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Uc.forEach(t),Qu=m(ue),v(Po.$$.fragment,ue),Hu=m(ue),Ca=s(ue,"P",{});var Rc=r(Ca);Vu=d(Rc,"This tokenizer inherits from "),Lr=s(Rc,"A",{href:!0});var xy=r(Lr);Ju=d(xy,"PreTrainedTokenizerFast"),xy.forEach(t),Xu=d(Rc,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Rc.forEach(t),Ku=m(ue),Ao=s(ue,"DIV",{class:!0});var Qc=r(Ao);v(Ma.$$.fragment,Qc),Zu=m(Qc),ed=s(Qc,"P",{});var $y=r(ed);Yu=d($y,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),$y.forEach(t),Qc.forEach(t),ue.forEach(t),ic=m(o),Ut=s(o,"H2",{class:!0});var Hc=r(Ut);So=s(Hc,"A",{id:!0,class:!0,href:!0});var Fy=r(So);td=s(Fy,"SPAN",{});var zy=r(td);v(Ea.$$.fragment,zy),zy.forEach(t),Fy.forEach(t),em=m(Hc),od=s(Hc,"SPAN",{});var qy=r(od);tm=d(qy,"BartModel"),qy.forEach(t),Hc.forEach(t),dc=m(o),We=s(o,"DIV",{class:!0});var Hn=r(We);v(Pa.$$.fragment,Hn),om=m(Hn),Aa=s(Hn,"P",{});var Vc=r(Aa);nm=d(Vc,`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Dr=s(Vc,"A",{href:!0});var By=r(Dr);am=d(By,"PreTrainedModel"),By.forEach(t),sm=d(Vc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vc.forEach(t),rm=m(Hn),Sa=s(Hn,"P",{});var Jc=r(Sa);im=d(Jc,"This model is also a PyTorch "),Oa=s(Jc,"A",{href:!0,rel:!0});var jy=r(Oa);dm=d(jy,"torch.nn.Module"),jy.forEach(t),lm=d(Jc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jc.forEach(t),cm=m(Hn),Ve=s(Hn,"DIV",{class:!0});var Vn=r(Ve);v(Ia.$$.fragment,Vn),pm=m(Vn),Rt=s(Vn,"P",{});var ci=r(Rt);hm=d(ci,"The "),Gr=s(ci,"A",{href:!0});var Cy=r(Gr);um=d(Cy,"BartModel"),Cy.forEach(t),mm=d(ci," forward method, overrides the "),nd=s(ci,"CODE",{});var My=r(nd);fm=d(My,"__call__"),My.forEach(t),gm=d(ci," special method."),ci.forEach(t),_m=m(Vn),v(Oo.$$.fragment,Vn),bm=m(Vn),v(Io.$$.fragment,Vn),Vn.forEach(t),Hn.forEach(t),lc=m(o),Qt=s(o,"H2",{class:!0});var Xc=r(Qt);No=s(Xc,"A",{id:!0,class:!0,href:!0});var Ey=r(No);ad=s(Ey,"SPAN",{});var Py=r(ad);v(Na.$$.fragment,Py),Py.forEach(t),Ey.forEach(t),km=m(Xc),sd=s(Xc,"SPAN",{});var Ay=r(sd);ym=d(Ay,"BartForConditionalGeneration"),Ay.forEach(t),Xc.forEach(t),cc=m(o),Ue=s(o,"DIV",{class:!0});var Jn=r(Ue);v(La.$$.fragment,Jn),vm=m(Jn),Da=s(Jn,"P",{});var Kc=r(Da);Tm=d(Kc,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Wr=s(Kc,"A",{href:!0});var Sy=r(Wr);wm=d(Sy,"PreTrainedModel"),Sy.forEach(t),xm=d(Kc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kc.forEach(t),$m=m(Jn),Ga=s(Jn,"P",{});var Zc=r(Ga);Fm=d(Zc,"This model is also a PyTorch "),Wa=s(Zc,"A",{href:!0,rel:!0});var Oy=r(Wa);zm=d(Oy,"torch.nn.Module"),Oy.forEach(t),qm=d(Zc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zc.forEach(t),Bm=m(Jn),je=s(Jn,"DIV",{class:!0});var vt=r(je);v(Ua.$$.fragment,vt),jm=m(vt),Ht=s(vt,"P",{});var pi=r(Ht);Cm=d(pi,"The "),Ur=s(pi,"A",{href:!0});var Iy=r(Ur);Mm=d(Iy,"BartForConditionalGeneration"),Iy.forEach(t),Em=d(pi," forward method, overrides the "),rd=s(pi,"CODE",{});var Ny=r(rd);Pm=d(Ny,"__call__"),Ny.forEach(t),Am=d(pi," special method."),pi.forEach(t),Sm=m(vt),v(Lo.$$.fragment,vt),Om=m(vt),v(Do.$$.fragment,vt),Im=m(vt),v(Go.$$.fragment,vt),vt.forEach(t),Jn.forEach(t),pc=m(o),Vt=s(o,"H2",{class:!0});var Yc=r(Vt);Wo=s(Yc,"A",{id:!0,class:!0,href:!0});var Ly=r(Wo);id=s(Ly,"SPAN",{});var Dy=r(id);v(Ra.$$.fragment,Dy),Dy.forEach(t),Ly.forEach(t),Nm=m(Yc),dd=s(Yc,"SPAN",{});var Gy=r(dd);Lm=d(Gy,"BartForSequenceClassification"),Gy.forEach(t),Yc.forEach(t),hc=m(o),Te=s(o,"DIV",{class:!0});var Tt=r(Te);v(Qa.$$.fragment,Tt),Dm=m(Tt),ld=s(Tt,"P",{});var Wy=r(ld);Gm=d(Wy,`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Wy.forEach(t),Wm=m(Tt),Ha=s(Tt,"P",{});var ep=r(Ha);Um=d(ep,"This model inherits from "),Rr=s(ep,"A",{href:!0});var Uy=r(Rr);Rm=d(Uy,"PreTrainedModel"),Uy.forEach(t),Qm=d(ep,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ep.forEach(t),Hm=m(Tt),Va=s(Tt,"P",{});var tp=r(Va);Vm=d(tp,"This model is also a PyTorch "),Ja=s(tp,"A",{href:!0,rel:!0});var Ry=r(Ja);Jm=d(Ry,"torch.nn.Module"),Ry.forEach(t),Xm=d(tp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tp.forEach(t),Km=m(Tt),ee=s(Tt,"DIV",{class:!0});var Pe=r(ee);v(Xa.$$.fragment,Pe),Zm=m(Pe),Jt=s(Pe,"P",{});var hi=r(Jt);Ym=d(hi,"The "),Qr=s(hi,"A",{href:!0});var Qy=r(Qr);ef=d(Qy,"BartForSequenceClassification"),Qy.forEach(t),tf=d(hi," forward method, overrides the "),cd=s(hi,"CODE",{});var Hy=r(cd);of=d(Hy,"__call__"),Hy.forEach(t),nf=d(hi," special method."),hi.forEach(t),af=m(Pe),v(Uo.$$.fragment,Pe),sf=m(Pe),v(Ro.$$.fragment,Pe),rf=m(Pe),v(Qo.$$.fragment,Pe),df=m(Pe),v(Ho.$$.fragment,Pe),lf=m(Pe),v(Vo.$$.fragment,Pe),Pe.forEach(t),Tt.forEach(t),uc=m(o),Xt=s(o,"H2",{class:!0});var op=r(Xt);Jo=s(op,"A",{id:!0,class:!0,href:!0});var Vy=r(Jo);pd=s(Vy,"SPAN",{});var Jy=r(pd);v(Ka.$$.fragment,Jy),Jy.forEach(t),Vy.forEach(t),cf=m(op),hd=s(op,"SPAN",{});var Xy=r(hd);pf=d(Xy,"BartForQuestionAnswering"),Xy.forEach(t),op.forEach(t),mc=m(o),we=s(o,"DIV",{class:!0});var wt=r(we);v(Za.$$.fragment,wt),hf=m(wt),Kt=s(wt,"P",{});var ui=r(Kt);uf=d(ui,`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ud=s(ui,"CODE",{});var Ky=r(ud);mf=d(Ky,"span start logits"),Ky.forEach(t),ff=d(ui," and "),md=s(ui,"CODE",{});var Zy=r(md);gf=d(Zy,"span end logits"),Zy.forEach(t),_f=d(ui,")."),ui.forEach(t),bf=m(wt),Ya=s(wt,"P",{});var np=r(Ya);kf=d(np,"This model inherits from "),Hr=s(np,"A",{href:!0});var Yy=r(Hr);yf=d(Yy,"PreTrainedModel"),Yy.forEach(t),vf=d(np,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),np.forEach(t),Tf=m(wt),es=s(wt,"P",{});var ap=r(es);wf=d(ap,"This model is also a PyTorch "),ts=s(ap,"A",{href:!0,rel:!0});var ev=r(ts);xf=d(ev,"torch.nn.Module"),ev.forEach(t),$f=d(ap,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ap.forEach(t),Ff=m(wt),Ce=s(wt,"DIV",{class:!0});var xt=r(Ce);v(os.$$.fragment,xt),zf=m(xt),Zt=s(xt,"P",{});var mi=r(Zt);qf=d(mi,"The "),Vr=s(mi,"A",{href:!0});var tv=r(Vr);Bf=d(tv,"BartForQuestionAnswering"),tv.forEach(t),jf=d(mi," forward method, overrides the "),fd=s(mi,"CODE",{});var ov=r(fd);Cf=d(ov,"__call__"),ov.forEach(t),Mf=d(mi," special method."),mi.forEach(t),Ef=m(xt),v(Xo.$$.fragment,xt),Pf=m(xt),v(Ko.$$.fragment,xt),Af=m(xt),v(Zo.$$.fragment,xt),xt.forEach(t),wt.forEach(t),fc=m(o),Yt=s(o,"H2",{class:!0});var sp=r(Yt);Yo=s(sp,"A",{id:!0,class:!0,href:!0});var nv=r(Yo);gd=s(nv,"SPAN",{});var av=r(gd);v(ns.$$.fragment,av),av.forEach(t),nv.forEach(t),Sf=m(sp),_d=s(sp,"SPAN",{});var sv=r(_d);Of=d(sv,"BartForCausalLM"),sv.forEach(t),sp.forEach(t),gc=m(o),eo=s(o,"DIV",{class:!0});var rp=r(eo);v(as.$$.fragment,rp),If=m(rp),en=s(rp,"DIV",{class:!0});var ip=r(en);v(ss.$$.fragment,ip),Nf=m(ip),v(tn.$$.fragment,ip),ip.forEach(t),rp.forEach(t),_c=m(o),to=s(o,"H2",{class:!0});var dp=r(to);on=s(dp,"A",{id:!0,class:!0,href:!0});var rv=r(on);bd=s(rv,"SPAN",{});var iv=r(bd);v(rs.$$.fragment,iv),iv.forEach(t),rv.forEach(t),Lf=m(dp),kd=s(dp,"SPAN",{});var dv=r(kd);Df=d(dv,"TFBartModel"),dv.forEach(t),dp.forEach(t),bc=m(o),xe=s(o,"DIV",{class:!0});var $t=r(xe);v(is.$$.fragment,$t),Gf=m($t),ds=s($t,"P",{});var lp=r(ds);Wf=d(lp,`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Jr=s(lp,"A",{href:!0});var lv=r(Jr);Uf=d(lv,"TFPreTrainedModel"),lv.forEach(t),Rf=d(lp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lp.forEach(t),Qf=m($t),ls=s($t,"P",{});var cp=r(ls);Hf=d(cp,"This model is also a "),cs=s(cp,"A",{href:!0,rel:!0});var cv=r(cs);Vf=d(cv,"tf.keras.Model"),cv.forEach(t),Jf=d(cp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cp.forEach(t),Xf=m($t),v(nn.$$.fragment,$t),Kf=m($t),Je=s($t,"DIV",{class:!0});var Xn=r(Je);v(ps.$$.fragment,Xn),Zf=m(Xn),oo=s(Xn,"P",{});var fi=r(oo);Yf=d(fi,"The "),Xr=s(fi,"A",{href:!0});var pv=r(Xr);eg=d(pv,"TFBartModel"),pv.forEach(t),tg=d(fi," forward method, overrides the "),yd=s(fi,"CODE",{});var hv=r(yd);og=d(hv,"__call__"),hv.forEach(t),ng=d(fi," special method."),fi.forEach(t),ag=m(Xn),v(an.$$.fragment,Xn),sg=m(Xn),v(sn.$$.fragment,Xn),Xn.forEach(t),$t.forEach(t),kc=m(o),no=s(o,"H2",{class:!0});var pp=r(no);rn=s(pp,"A",{id:!0,class:!0,href:!0});var uv=r(rn);vd=s(uv,"SPAN",{});var mv=r(vd);v(hs.$$.fragment,mv),mv.forEach(t),uv.forEach(t),rg=m(pp),Td=s(pp,"SPAN",{});var fv=r(Td);ig=d(fv,"TFBartForConditionalGeneration"),fv.forEach(t),pp.forEach(t),yc=m(o),$e=s(o,"DIV",{class:!0});var Ft=r($e);v(us.$$.fragment,Ft),dg=m(Ft),ms=s(Ft,"P",{});var hp=r(ms);lg=d(hp,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Kr=s(hp,"A",{href:!0});var gv=r(Kr);cg=d(gv,"TFPreTrainedModel"),gv.forEach(t),pg=d(hp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hp.forEach(t),hg=m(Ft),fs=s(Ft,"P",{});var up=r(fs);ug=d(up,"This model is also a "),gs=s(up,"A",{href:!0,rel:!0});var _v=r(gs);mg=d(_v,"tf.keras.Model"),_v.forEach(t),fg=d(up,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),up.forEach(t),gg=m(Ft),v(dn.$$.fragment,Ft),_g=m(Ft),Me=s(Ft,"DIV",{class:!0});var zt=r(Me);v(_s.$$.fragment,zt),bg=m(zt),ao=s(zt,"P",{});var gi=r(ao);kg=d(gi,"The "),Zr=s(gi,"A",{href:!0});var bv=r(Zr);yg=d(bv,"TFBartForConditionalGeneration"),bv.forEach(t),vg=d(gi," forward method, overrides the "),wd=s(gi,"CODE",{});var kv=r(wd);Tg=d(kv,"__call__"),kv.forEach(t),wg=d(gi," special method."),gi.forEach(t),xg=m(zt),v(ln.$$.fragment,zt),$g=m(zt),v(cn.$$.fragment,zt),Fg=m(zt),v(pn.$$.fragment,zt),zt.forEach(t),Ft.forEach(t),vc=m(o),so=s(o,"H2",{class:!0});var mp=r(so);hn=s(mp,"A",{id:!0,class:!0,href:!0});var yv=r(hn);xd=s(yv,"SPAN",{});var vv=r(xd);v(bs.$$.fragment,vv),vv.forEach(t),yv.forEach(t),zg=m(mp),$d=s(mp,"SPAN",{});var Tv=r($d);qg=d(Tv,"FlaxBartModel"),Tv.forEach(t),mp.forEach(t),Tc=m(o),R=s(o,"DIV",{class:!0});var me=r(R);v(ks.$$.fragment,me),Bg=m(me),ys=s(me,"P",{});var fp=r(ys);jg=d(fp,`The bare Bart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Yr=s(fp,"A",{href:!0});var wv=r(Yr);Cg=d(wv,"FlaxPreTrainedModel"),wv.forEach(t),Mg=d(fp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fp.forEach(t),Eg=m(me),vs=s(me,"P",{});var gp=r(vs);Pg=d(gp,`This model is also a Flax Linen
`),Ts=s(gp,"A",{href:!0,rel:!0});var xv=r(Ts);Ag=d(xv,"flax.nn.Module"),xv.forEach(t),Sg=d(gp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),gp.forEach(t),Og=m(me),Fd=s(me,"P",{});var $v=r(Fd);Ig=d($v,"Finally, this model supports inherent JAX features such as:"),$v.forEach(t),Ng=m(me),pt=s(me,"UL",{});var Kn=r(pt);zd=s(Kn,"LI",{});var Fv=r(zd);ws=s(Fv,"A",{href:!0,rel:!0});var zv=r(ws);Lg=d(zv,"Just-In-Time (JIT) compilation"),zv.forEach(t),Fv.forEach(t),Dg=m(Kn),qd=s(Kn,"LI",{});var qv=r(qd);xs=s(qv,"A",{href:!0,rel:!0});var Bv=r(xs);Gg=d(Bv,"Automatic Differentiation"),Bv.forEach(t),qv.forEach(t),Wg=m(Kn),Bd=s(Kn,"LI",{});var jv=r(Bd);$s=s(jv,"A",{href:!0,rel:!0});var Cv=r($s);Ug=d(Cv,"Vectorization"),Cv.forEach(t),jv.forEach(t),Rg=m(Kn),jd=s(Kn,"LI",{});var Mv=r(jd);Fs=s(Mv,"A",{href:!0,rel:!0});var Ev=r(Fs);Qg=d(Ev,"Parallelization"),Ev.forEach(t),Mv.forEach(t),Kn.forEach(t),Hg=m(me),Xe=s(me,"DIV",{class:!0});var Zn=r(Xe);v(zs.$$.fragment,Zn),Vg=m(Zn),ro=s(Zn,"P",{});var _i=r(ro);Jg=d(_i,"The "),Cd=s(_i,"CODE",{});var Pv=r(Cd);Xg=d(Pv,"FlaxBartPreTrainedModel"),Pv.forEach(t),Kg=d(_i," forward method, overrides the "),Md=s(_i,"CODE",{});var Av=r(Md);Zg=d(Av,"__call__"),Av.forEach(t),Yg=d(_i," special method."),_i.forEach(t),e_=m(Zn),v(un.$$.fragment,Zn),t_=m(Zn),v(mn.$$.fragment,Zn),Zn.forEach(t),o_=m(me),fn=s(me,"DIV",{class:!0});var _p=r(fn);v(qs.$$.fragment,_p),n_=m(_p),v(gn.$$.fragment,_p),_p.forEach(t),a_=m(me),_n=s(me,"DIV",{class:!0});var bp=r(_n);v(Bs.$$.fragment,bp),s_=m(bp),v(bn.$$.fragment,bp),bp.forEach(t),me.forEach(t),wc=m(o),io=s(o,"H2",{class:!0});var kp=r(io);kn=s(kp,"A",{id:!0,class:!0,href:!0});var Sv=r(kn);Ed=s(Sv,"SPAN",{});var Ov=r(Ed);v(js.$$.fragment,Ov),Ov.forEach(t),Sv.forEach(t),r_=m(kp),Pd=s(kp,"SPAN",{});var Iv=r(Pd);i_=d(Iv,"FlaxBartForConditionalGeneration"),Iv.forEach(t),kp.forEach(t),xc=m(o),Q=s(o,"DIV",{class:!0});var fe=r(Q);v(Cs.$$.fragment,fe),d_=m(fe),Ms=s(fe,"P",{});var yp=r(Ms);l_=d(yp,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),ei=s(yp,"A",{href:!0});var Nv=r(ei);c_=d(Nv,"FlaxPreTrainedModel"),Nv.forEach(t),p_=d(yp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yp.forEach(t),h_=m(fe),Es=s(fe,"P",{});var vp=r(Es);u_=d(vp,`This model is also a Flax Linen
`),Ps=s(vp,"A",{href:!0,rel:!0});var Lv=r(Ps);m_=d(Lv,"flax.nn.Module"),Lv.forEach(t),f_=d(vp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),vp.forEach(t),g_=m(fe),Ad=s(fe,"P",{});var Dv=r(Ad);__=d(Dv,"Finally, this model supports inherent JAX features such as:"),Dv.forEach(t),b_=m(fe),ht=s(fe,"UL",{});var Yn=r(ht);Sd=s(Yn,"LI",{});var Gv=r(Sd);As=s(Gv,"A",{href:!0,rel:!0});var Wv=r(As);k_=d(Wv,"Just-In-Time (JIT) compilation"),Wv.forEach(t),Gv.forEach(t),y_=m(Yn),Od=s(Yn,"LI",{});var Uv=r(Od);Ss=s(Uv,"A",{href:!0,rel:!0});var Rv=r(Ss);v_=d(Rv,"Automatic Differentiation"),Rv.forEach(t),Uv.forEach(t),T_=m(Yn),Id=s(Yn,"LI",{});var Qv=r(Id);Os=s(Qv,"A",{href:!0,rel:!0});var Hv=r(Os);w_=d(Hv,"Vectorization"),Hv.forEach(t),Qv.forEach(t),x_=m(Yn),Nd=s(Yn,"LI",{});var Vv=r(Nd);Is=s(Vv,"A",{href:!0,rel:!0});var Jv=r(Is);$_=d(Jv,"Parallelization"),Jv.forEach(t),Vv.forEach(t),Yn.forEach(t),F_=m(fe),Ee=s(fe,"DIV",{class:!0});var qt=r(Ee);v(Ns.$$.fragment,qt),z_=m(qt),lo=s(qt,"P",{});var bi=r(lo);q_=d(bi,"The "),Ld=s(bi,"CODE",{});var Xv=r(Ld);B_=d(Xv,"FlaxBartPreTrainedModel"),Xv.forEach(t),j_=d(bi," forward method, overrides the "),Dd=s(bi,"CODE",{});var Kv=r(Dd);C_=d(Kv,"__call__"),Kv.forEach(t),M_=d(bi," special method."),bi.forEach(t),E_=m(qt),v(yn.$$.fragment,qt),P_=m(qt),v(vn.$$.fragment,qt),A_=m(qt),v(Tn.$$.fragment,qt),qt.forEach(t),S_=m(fe),wn=s(fe,"DIV",{class:!0});var Tp=r(wn);v(Ls.$$.fragment,Tp),O_=m(Tp),v(xn.$$.fragment,Tp),Tp.forEach(t),I_=m(fe),$n=s(fe,"DIV",{class:!0});var wp=r($n);v(Ds.$$.fragment,wp),N_=m(wp),v(Fn.$$.fragment,wp),wp.forEach(t),fe.forEach(t),$c=m(o),co=s(o,"H2",{class:!0});var xp=r(co);zn=s(xp,"A",{id:!0,class:!0,href:!0});var Zv=r(zn);Gd=s(Zv,"SPAN",{});var Yv=r(Gd);v(Gs.$$.fragment,Yv),Yv.forEach(t),Zv.forEach(t),L_=m(xp),Wd=s(xp,"SPAN",{});var eT=r(Wd);D_=d(eT,"FlaxBartForSequenceClassification"),eT.forEach(t),xp.forEach(t),Fc=m(o),N=s(o,"DIV",{class:!0});var te=r(N);v(Ws.$$.fragment,te),G_=m(te),Ud=s(te,"P",{});var tT=r(Ud);W_=d(tT,`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),tT.forEach(t),U_=m(te),Us=s(te,"P",{});var $p=r(Us);R_=d($p,"This model inherits from "),ti=s($p,"A",{href:!0});var oT=r(ti);Q_=d(oT,"FlaxPreTrainedModel"),oT.forEach(t),H_=d($p,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$p.forEach(t),V_=m(te),Rs=s(te,"P",{});var Fp=r(Rs);J_=d(Fp,`This model is also a Flax Linen
`),Qs=s(Fp,"A",{href:!0,rel:!0});var nT=r(Qs);X_=d(nT,"flax.nn.Module"),nT.forEach(t),K_=d(Fp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Fp.forEach(t),Z_=m(te),Rd=s(te,"P",{});var aT=r(Rd);Y_=d(aT,"Finally, this model supports inherent JAX features such as:"),aT.forEach(t),eb=m(te),ut=s(te,"UL",{});var ea=r(ut);Qd=s(ea,"LI",{});var sT=r(Qd);Hs=s(sT,"A",{href:!0,rel:!0});var rT=r(Hs);tb=d(rT,"Just-In-Time (JIT) compilation"),rT.forEach(t),sT.forEach(t),ob=m(ea),Hd=s(ea,"LI",{});var iT=r(Hd);Vs=s(iT,"A",{href:!0,rel:!0});var dT=r(Vs);nb=d(dT,"Automatic Differentiation"),dT.forEach(t),iT.forEach(t),ab=m(ea),Vd=s(ea,"LI",{});var lT=r(Vd);Js=s(lT,"A",{href:!0,rel:!0});var cT=r(Js);sb=d(cT,"Vectorization"),cT.forEach(t),lT.forEach(t),rb=m(ea),Jd=s(ea,"LI",{});var pT=r(Jd);Xs=s(pT,"A",{href:!0,rel:!0});var hT=r(Xs);ib=d(hT,"Parallelization"),hT.forEach(t),pT.forEach(t),ea.forEach(t),db=m(te),Ke=s(te,"DIV",{class:!0});var ta=r(Ke);v(Ks.$$.fragment,ta),lb=m(ta),po=s(ta,"P",{});var ki=r(po);cb=d(ki,"The "),Xd=s(ki,"CODE",{});var uT=r(Xd);pb=d(uT,"FlaxBartPreTrainedModel"),uT.forEach(t),hb=d(ki," forward method, overrides the "),Kd=s(ki,"CODE",{});var mT=r(Kd);ub=d(mT,"__call__"),mT.forEach(t),mb=d(ki," special method."),ki.forEach(t),fb=m(ta),v(qn.$$.fragment,ta),gb=m(ta),v(Bn.$$.fragment,ta),ta.forEach(t),_b=m(te),jn=s(te,"DIV",{class:!0});var zp=r(jn);v(Zs.$$.fragment,zp),bb=m(zp),v(Cn.$$.fragment,zp),zp.forEach(t),kb=m(te),Mn=s(te,"DIV",{class:!0});var qp=r(Mn);v(Ys.$$.fragment,qp),yb=m(qp),v(En.$$.fragment,qp),qp.forEach(t),te.forEach(t),zc=m(o),ho=s(o,"H2",{class:!0});var Bp=r(ho);Pn=s(Bp,"A",{id:!0,class:!0,href:!0});var fT=r(Pn);Zd=s(fT,"SPAN",{});var gT=r(Zd);v(er.$$.fragment,gT),gT.forEach(t),fT.forEach(t),vb=m(Bp),Yd=s(Bp,"SPAN",{});var _T=r(Yd);Tb=d(_T,"FlaxBartForQuestionAnswering"),_T.forEach(t),Bp.forEach(t),qc=m(o),L=s(o,"DIV",{class:!0});var oe=r(L);v(tr.$$.fragment,oe),wb=m(oe),uo=s(oe,"P",{});var yi=r(uo);xb=d(yi,`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),el=s(yi,"CODE",{});var bT=r(el);$b=d(bT,"span start logits"),bT.forEach(t),Fb=d(yi," and "),tl=s(yi,"CODE",{});var kT=r(tl);zb=d(kT,"span end logits"),kT.forEach(t),qb=d(yi,")."),yi.forEach(t),Bb=m(oe),or=s(oe,"P",{});var jp=r(or);jb=d(jp,"This model inherits from "),oi=s(jp,"A",{href:!0});var yT=r(oi);Cb=d(yT,"FlaxPreTrainedModel"),yT.forEach(t),Mb=d(jp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jp.forEach(t),Eb=m(oe),nr=s(oe,"P",{});var Cp=r(nr);Pb=d(Cp,`This model is also a Flax Linen
`),ar=s(Cp,"A",{href:!0,rel:!0});var vT=r(ar);Ab=d(vT,"flax.nn.Module"),vT.forEach(t),Sb=d(Cp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Cp.forEach(t),Ob=m(oe),ol=s(oe,"P",{});var TT=r(ol);Ib=d(TT,"Finally, this model supports inherent JAX features such as:"),TT.forEach(t),Nb=m(oe),mt=s(oe,"UL",{});var oa=r(mt);nl=s(oa,"LI",{});var wT=r(nl);sr=s(wT,"A",{href:!0,rel:!0});var xT=r(sr);Lb=d(xT,"Just-In-Time (JIT) compilation"),xT.forEach(t),wT.forEach(t),Db=m(oa),al=s(oa,"LI",{});var $T=r(al);rr=s($T,"A",{href:!0,rel:!0});var FT=r(rr);Gb=d(FT,"Automatic Differentiation"),FT.forEach(t),$T.forEach(t),Wb=m(oa),sl=s(oa,"LI",{});var zT=r(sl);ir=s(zT,"A",{href:!0,rel:!0});var qT=r(ir);Ub=d(qT,"Vectorization"),qT.forEach(t),zT.forEach(t),Rb=m(oa),rl=s(oa,"LI",{});var BT=r(rl);dr=s(BT,"A",{href:!0,rel:!0});var jT=r(dr);Qb=d(jT,"Parallelization"),jT.forEach(t),BT.forEach(t),oa.forEach(t),Hb=m(oe),Ze=s(oe,"DIV",{class:!0});var na=r(Ze);v(lr.$$.fragment,na),Vb=m(na),mo=s(na,"P",{});var vi=r(mo);Jb=d(vi,"The "),il=s(vi,"CODE",{});var CT=r(il);Xb=d(CT,"FlaxBartPreTrainedModel"),CT.forEach(t),Kb=d(vi," forward method, overrides the "),dl=s(vi,"CODE",{});var MT=r(dl);Zb=d(MT,"__call__"),MT.forEach(t),Yb=d(vi," special method."),vi.forEach(t),ek=m(na),v(An.$$.fragment,na),tk=m(na),v(Sn.$$.fragment,na),na.forEach(t),ok=m(oe),On=s(oe,"DIV",{class:!0});var Mp=r(On);v(cr.$$.fragment,Mp),nk=m(Mp),v(In.$$.fragment,Mp),Mp.forEach(t),ak=m(oe),Nn=s(oe,"DIV",{class:!0});var Ep=r(Nn);v(pr.$$.fragment,Ep),sk=m(Ep),v(Ln.$$.fragment,Ep),Ep.forEach(t),oe.forEach(t),Bc=m(o),fo=s(o,"H2",{class:!0});var Pp=r(fo);Dn=s(Pp,"A",{id:!0,class:!0,href:!0});var ET=r(Dn);ll=s(ET,"SPAN",{});var PT=r(ll);v(hr.$$.fragment,PT),PT.forEach(t),ET.forEach(t),rk=m(Pp),cl=s(Pp,"SPAN",{});var AT=r(cl);ik=d(AT,"FlaxBartForCausalLM"),AT.forEach(t),Pp.forEach(t),jc=m(o),Z=s(o,"DIV",{class:!0});var Ae=r(Z);v(ur.$$.fragment,Ae),dk=m(Ae),pl=s(Ae,"P",{});var ST=r(pl);lk=d(ST,`Bart Decoder Model with a language modeling head on top (linear layer with weights tied to the input embeddings)
e.g for autoregressive tasks.`),ST.forEach(t),ck=m(Ae),mr=s(Ae,"P",{});var Ap=r(mr);pk=d(Ap,"This model inherits from "),ni=s(Ap,"A",{href:!0});var OT=r(ni);hk=d(OT,"FlaxPreTrainedModel"),OT.forEach(t),uk=d(Ap,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ap.forEach(t),mk=m(Ae),fr=s(Ae,"P",{});var Sp=r(fr);fk=d(Sp,`This model is also a Flax Linen
`),gr=s(Sp,"A",{href:!0,rel:!0});var IT=r(gr);gk=d(IT,"flax.nn.Module"),IT.forEach(t),_k=d(Sp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Sp.forEach(t),bk=m(Ae),hl=s(Ae,"P",{});var NT=r(hl);kk=d(NT,"Finally, this model supports inherent JAX features such as:"),NT.forEach(t),yk=m(Ae),ft=s(Ae,"UL",{});var aa=r(ft);ul=s(aa,"LI",{});var LT=r(ul);_r=s(LT,"A",{href:!0,rel:!0});var DT=r(_r);vk=d(DT,"Just-In-Time (JIT) compilation"),DT.forEach(t),LT.forEach(t),Tk=m(aa),ml=s(aa,"LI",{});var GT=r(ml);br=s(GT,"A",{href:!0,rel:!0});var WT=r(br);wk=d(WT,"Automatic Differentiation"),WT.forEach(t),GT.forEach(t),xk=m(aa),fl=s(aa,"LI",{});var UT=r(fl);kr=s(UT,"A",{href:!0,rel:!0});var RT=r(kr);$k=d(RT,"Vectorization"),RT.forEach(t),UT.forEach(t),Fk=m(aa),gl=s(aa,"LI",{});var QT=r(gl);yr=s(QT,"A",{href:!0,rel:!0});var HT=r(yr);zk=d(HT,"Parallelization"),HT.forEach(t),QT.forEach(t),aa.forEach(t),qk=m(Ae),Ye=s(Ae,"DIV",{class:!0});var sa=r(Ye);v(vr.$$.fragment,sa),Bk=m(sa),go=s(sa,"P",{});var Ti=r(go);jk=d(Ti,"The "),_l=s(Ti,"CODE",{});var VT=r(_l);Ck=d(VT,"FlaxBartDecoderPreTrainedModel"),VT.forEach(t),Mk=d(Ti," forward method, overrides the "),bl=s(Ti,"CODE",{});var JT=r(bl);Ek=d(JT,"__call__"),JT.forEach(t),Pk=d(Ti," special method."),Ti.forEach(t),Ak=m(sa),v(Gn.$$.fragment,sa),Sk=m(sa),v(Wn.$$.fragment,sa),sa.forEach(t),Ae.forEach(t),this.h()},h(){f(l,"name","hf:doc:metadata"),f(l,"content",JSON.stringify(Hw)),f(c,"id","bart"),f(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(c,"href","#bart"),f(h,"class","relative group"),f(_e,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),f(_e,"rel","nofollow"),f(D,"id","overview"),f(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(D,"href","#overview"),f(J,"class","relative group"),f(X,"href","https://arxiv.org/abs/1910.13461"),f(X,"rel","nofollow"),f(Ie,"href","https://huggingface.co/sshleifer"),f(Ie,"rel","nofollow"),f(Ne,"href","https://github.com/pytorch/fairseq/tree/master/examples/bart"),f(Ne,"rel","nofollow"),f(qe,"id","examples"),f(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(qe,"href","#examples"),f(ve,"class","relative group"),f(ia,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization/README.md"),f(ia,"rel","nofollow"),f(qr,"href","/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartForConditionalGeneration"),f(da,"href","https://discuss.huggingface.co/t/train-bart-for-conditional-generation-e-g-summarization/1904"),f(da,"rel","nofollow"),f(la,"href","https://huggingface.co/models?search=distilbart"),f(la,"rel","nofollow"),f(ca,"href","https://arxiv.org/abs/2010.13002"),f(ca,"rel","nofollow"),f(To,"id","implementation-notes"),f(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(To,"href","#implementation-notes"),f(Pt,"class","relative group"),f(Br,"href","/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartTokenizer"),f(jr,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode"),f(Cr,"href","/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartModel"),f(Er,"href","/docs/transformers/pr_highlight/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),f(wo,"id","mask-filling"),f(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(wo,"href","#mask-filling"),f(It,"class","relative group"),f(xo,"id","transformers.BartConfig"),f(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(xo,"href","#transformers.BartConfig"),f(Nt,"class","relative group"),f(Pr,"href","/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartModel"),f(ga,"href","https://huggingface.co/facebook/bart-large"),f(ga,"rel","nofollow"),f(Ar,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),f(Sr,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),f(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fo,"id","transformers.BartTokenizer"),f(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Fo,"href","#transformers.BartTokenizer"),f(Gt,"class","relative group"),f(Or,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Mo,"id","transformers.BartTokenizerFast"),f(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Mo,"href","#transformers.BartTokenizerFast"),f(Wt,"class","relative group"),f(Lr,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(Ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(So,"id","transformers.BartModel"),f(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(So,"href","#transformers.BartModel"),f(Ut,"class","relative group"),f(Dr,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),f(Oa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Oa,"rel","nofollow"),f(Gr,"href","/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartModel"),f(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(No,"id","transformers.BartForConditionalGeneration"),f(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(No,"href","#transformers.BartForConditionalGeneration"),f(Qt,"class","relative group"),f(Wr,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),f(Wa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Wa,"rel","nofollow"),f(Ur,"href","/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartForConditionalGeneration"),f(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Wo,"id","transformers.BartForSequenceClassification"),f(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Wo,"href","#transformers.BartForSequenceClassification"),f(Vt,"class","relative group"),f(Rr,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),f(Ja,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ja,"rel","nofollow"),f(Qr,"href","/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartForSequenceClassification"),f(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jo,"id","transformers.BartForQuestionAnswering"),f(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Jo,"href","#transformers.BartForQuestionAnswering"),f(Xt,"class","relative group"),f(Hr,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),f(ts,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ts,"rel","nofollow"),f(Vr,"href","/docs/transformers/pr_highlight/en/model_doc/bart#transformers.BartForQuestionAnswering"),f(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Yo,"id","transformers.BartForCausalLM"),f(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Yo,"href","#transformers.BartForCausalLM"),f(Yt,"class","relative group"),f(en,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(on,"id","transformers.TFBartModel"),f(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(on,"href","#transformers.TFBartModel"),f(to,"class","relative group"),f(Jr,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),f(cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(cs,"rel","nofollow"),f(Xr,"href","/docs/transformers/pr_highlight/en/model_doc/bart#transformers.TFBartModel"),f(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rn,"id","transformers.TFBartForConditionalGeneration"),f(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(rn,"href","#transformers.TFBartForConditionalGeneration"),f(no,"class","relative group"),f(Kr,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),f(gs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(gs,"rel","nofollow"),f(Zr,"href","/docs/transformers/pr_highlight/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),f(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(hn,"id","transformers.FlaxBartModel"),f(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(hn,"href","#transformers.FlaxBartModel"),f(so,"class","relative group"),f(Yr,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Ts,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Ts,"rel","nofollow"),f(ws,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(ws,"rel","nofollow"),f(xs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(xs,"rel","nofollow"),f($s,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f($s,"rel","nofollow"),f(Fs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Fs,"rel","nofollow"),f(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(fn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(_n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(kn,"id","transformers.FlaxBartForConditionalGeneration"),f(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(kn,"href","#transformers.FlaxBartForConditionalGeneration"),f(io,"class","relative group"),f(ei,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Ps,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Ps,"rel","nofollow"),f(As,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(As,"rel","nofollow"),f(Ss,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Ss,"rel","nofollow"),f(Os,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Os,"rel","nofollow"),f(Is,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Is,"rel","nofollow"),f(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(wn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(zn,"id","transformers.FlaxBartForSequenceClassification"),f(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(zn,"href","#transformers.FlaxBartForSequenceClassification"),f(co,"class","relative group"),f(ti,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Qs,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(Qs,"rel","nofollow"),f(Hs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Hs,"rel","nofollow"),f(Vs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Vs,"rel","nofollow"),f(Js,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Js,"rel","nofollow"),f(Xs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Xs,"rel","nofollow"),f(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(jn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Mn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Pn,"id","transformers.FlaxBartForQuestionAnswering"),f(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Pn,"href","#transformers.FlaxBartForQuestionAnswering"),f(ho,"class","relative group"),f(oi,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(ar,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(ar,"rel","nofollow"),f(sr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(sr,"rel","nofollow"),f(rr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(rr,"rel","nofollow"),f(ir,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(ir,"rel","nofollow"),f(dr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(dr,"rel","nofollow"),f(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(On,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Dn,"id","transformers.FlaxBartForCausalLM"),f(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Dn,"href","#transformers.FlaxBartForCausalLM"),f(fo,"class","relative group"),f(ni,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(gr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),f(gr,"rel","nofollow"),f(_r,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(_r,"rel","nofollow"),f(br,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(br,"rel","nofollow"),f(kr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(kr,"rel","nofollow"),f(yr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(yr,"rel","nofollow"),f(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,l),k(o,_,b),k(o,h,b),e(h,c),e(c,g),T(n,g,null),e(h,p),e(h,q),e(q,ne),k(o,O,b),k(o,j,b),e(j,le),e(le,ge),e(j,et),e(j,_e),e(_e,be),e(j,tt),k(o,Qe,b),k(o,J,b),e(J,D),e(D,Se),T(ae,Se,null),e(J,S),e(J,I),e(I,ot),k(o,ce,b),k(o,pe,b),e(pe,nt),e(pe,X),e(X,at),e(pe,st),k(o,G,b),k(o,ze,b),e(ze,ke),k(o,He,b),k(o,Y,b),e(Y,se),e(se,rt),e(Y,it),e(Y,K),e(K,dt),e(Y,ye),e(Y,Oe),e(Oe,z),k(o,M,b),k(o,H,b),e(H,Bt),e(H,Ie),e(Ie,re),e(H,jt),e(H,Ne),e(Ne,Ct),e(H,ie),k(o,he,b),k(o,ve,b),e(ve,qe),e(qe,de),T(Le,de,null),e(ve,Mt),e(ve,De),e(De,Et),k(o,Jl,b),k(o,bt,b),e(bt,ra),e(ra,Op),e(ra,ia),e(ia,Ip),e(ra,Np),e(bt,Lp),e(bt,lt),e(lt,Dp),e(lt,qr),e(qr,Gp),e(lt,Wp),e(lt,wi),e(wi,Up),e(lt,Rp),e(lt,da),e(da,Qp),e(lt,Hp),e(bt,Vp),e(bt,vo),e(vo,la),e(la,Jp),e(vo,Xp),e(vo,ca),e(ca,Kp),e(vo,Zp),k(o,Xl,b),k(o,Pt,b),e(Pt,To),e(To,xi),T(pa,xi,null),e(Pt,Yp),e(Pt,$i),e($i,eh),k(o,Kl,b),k(o,Be,b),e(Be,ct),e(ct,th),e(ct,Fi),e(Fi,oh),e(ct,nh),e(ct,Br),e(Br,ah),e(ct,sh),e(ct,jr),e(jr,rh),e(ct,ih),e(Be,dh),e(Be,At),e(At,lh),e(At,Cr),e(Cr,ch),e(At,ph),e(At,zi),e(zi,hh),e(At,uh),e(Be,mh),e(Be,St),e(St,fh),e(St,qi),e(qi,gh),e(St,_h),e(St,Bi),e(Bi,bh),e(St,kh),e(Be,yh),e(Be,Mr),e(Mr,Er),e(Er,vh),e(Mr,Th),e(Be,wh),e(Be,Ot),e(Ot,xh),e(Ot,ji),e(ji,$h),e(Ot,Fh),e(Ot,Ci),e(Ci,zh),e(Ot,qh),k(o,Zl,b),k(o,It,b),e(It,wo),e(wo,Mi),T(ha,Mi,null),e(It,Bh),e(It,Ei),e(Ei,jh),k(o,Yl,b),k(o,kt,b),e(kt,Ch),e(kt,Pi),e(Pi,Mh),e(kt,Eh),e(kt,Ai),e(Ai,Ph),e(kt,Ah),k(o,ec,b),T(ua,o,b),k(o,tc,b),k(o,Nt,b),e(Nt,xo),e(xo,Si),T(ma,Si,null),e(Nt,Sh),e(Nt,Oi),e(Oi,Oh),k(o,oc,b),k(o,Ge,b),T(fa,Ge,null),e(Ge,Ih),e(Ge,Lt),e(Lt,Nh),e(Lt,Pr),e(Pr,Lh),e(Lt,Dh),e(Lt,ga),e(ga,Gh),e(Lt,Wh),e(Ge,Uh),e(Ge,Dt),e(Dt,Rh),e(Dt,Ar),e(Ar,Qh),e(Dt,Hh),e(Dt,Sr),e(Sr,Vh),e(Dt,Jh),e(Ge,Xh),T($o,Ge,null),k(o,nc,b),k(o,Gt,b),e(Gt,Fo),e(Fo,Ii),T(_a,Ii,null),e(Gt,Kh),e(Gt,Ni),e(Ni,Zh),k(o,ac,b),k(o,A,b),T(ba,A,null),e(A,Yh),e(A,Li),e(Li,eu),e(A,tu),e(A,Di),e(Di,ou),e(A,nu),T(zo,A,null),e(A,au),e(A,ka),e(ka,su),e(ka,Gi),e(Gi,ru),e(ka,iu),e(A,du),T(qo,A,null),e(A,lu),e(A,ya),e(ya,cu),e(ya,Or),e(Or,pu),e(ya,hu),e(A,uu),e(A,yt),T(va,yt,null),e(yt,mu),e(yt,Wi),e(Wi,fu),e(yt,gu),e(yt,Ta),e(Ta,Ir),e(Ir,_u),e(Ir,Ui),e(Ui,bu),e(Ta,ku),e(Ta,Nr),e(Nr,yu),e(Nr,Ri),e(Ri,vu),e(A,Tu),e(A,Bo),T(wa,Bo,null),e(Bo,wu),e(Bo,Qi),e(Qi,xu),e(A,$u),e(A,jo),T(xa,jo,null),e(jo,Fu),e(jo,Hi),e(Hi,zu),e(A,qu),e(A,Co),T($a,Co,null),e(Co,Bu),e(Co,Fa),e(Fa,ju),e(Fa,Vi),e(Vi,Cu),e(Fa,Mu),k(o,sc,b),k(o,Wt,b),e(Wt,Mo),e(Mo,Ji),T(za,Ji,null),e(Wt,Eu),e(Wt,Xi),e(Xi,Pu),k(o,rc,b),k(o,U,b),T(qa,U,null),e(U,Au),e(U,Ba),e(Ba,Su),e(Ba,Ki),e(Ki,Ou),e(Ba,Iu),e(U,Nu),e(U,Zi),e(Zi,Lu),e(U,Du),T(Eo,U,null),e(U,Gu),e(U,ja),e(ja,Wu),e(ja,Yi),e(Yi,Uu),e(ja,Ru),e(U,Qu),T(Po,U,null),e(U,Hu),e(U,Ca),e(Ca,Vu),e(Ca,Lr),e(Lr,Ju),e(Ca,Xu),e(U,Ku),e(U,Ao),T(Ma,Ao,null),e(Ao,Zu),e(Ao,ed),e(ed,Yu),k(o,ic,b),k(o,Ut,b),e(Ut,So),e(So,td),T(Ea,td,null),e(Ut,em),e(Ut,od),e(od,tm),k(o,dc,b),k(o,We,b),T(Pa,We,null),e(We,om),e(We,Aa),e(Aa,nm),e(Aa,Dr),e(Dr,am),e(Aa,sm),e(We,rm),e(We,Sa),e(Sa,im),e(Sa,Oa),e(Oa,dm),e(Sa,lm),e(We,cm),e(We,Ve),T(Ia,Ve,null),e(Ve,pm),e(Ve,Rt),e(Rt,hm),e(Rt,Gr),e(Gr,um),e(Rt,mm),e(Rt,nd),e(nd,fm),e(Rt,gm),e(Ve,_m),T(Oo,Ve,null),e(Ve,bm),T(Io,Ve,null),k(o,lc,b),k(o,Qt,b),e(Qt,No),e(No,ad),T(Na,ad,null),e(Qt,km),e(Qt,sd),e(sd,ym),k(o,cc,b),k(o,Ue,b),T(La,Ue,null),e(Ue,vm),e(Ue,Da),e(Da,Tm),e(Da,Wr),e(Wr,wm),e(Da,xm),e(Ue,$m),e(Ue,Ga),e(Ga,Fm),e(Ga,Wa),e(Wa,zm),e(Ga,qm),e(Ue,Bm),e(Ue,je),T(Ua,je,null),e(je,jm),e(je,Ht),e(Ht,Cm),e(Ht,Ur),e(Ur,Mm),e(Ht,Em),e(Ht,rd),e(rd,Pm),e(Ht,Am),e(je,Sm),T(Lo,je,null),e(je,Om),T(Do,je,null),e(je,Im),T(Go,je,null),k(o,pc,b),k(o,Vt,b),e(Vt,Wo),e(Wo,id),T(Ra,id,null),e(Vt,Nm),e(Vt,dd),e(dd,Lm),k(o,hc,b),k(o,Te,b),T(Qa,Te,null),e(Te,Dm),e(Te,ld),e(ld,Gm),e(Te,Wm),e(Te,Ha),e(Ha,Um),e(Ha,Rr),e(Rr,Rm),e(Ha,Qm),e(Te,Hm),e(Te,Va),e(Va,Vm),e(Va,Ja),e(Ja,Jm),e(Va,Xm),e(Te,Km),e(Te,ee),T(Xa,ee,null),e(ee,Zm),e(ee,Jt),e(Jt,Ym),e(Jt,Qr),e(Qr,ef),e(Jt,tf),e(Jt,cd),e(cd,of),e(Jt,nf),e(ee,af),T(Uo,ee,null),e(ee,sf),T(Ro,ee,null),e(ee,rf),T(Qo,ee,null),e(ee,df),T(Ho,ee,null),e(ee,lf),T(Vo,ee,null),k(o,uc,b),k(o,Xt,b),e(Xt,Jo),e(Jo,pd),T(Ka,pd,null),e(Xt,cf),e(Xt,hd),e(hd,pf),k(o,mc,b),k(o,we,b),T(Za,we,null),e(we,hf),e(we,Kt),e(Kt,uf),e(Kt,ud),e(ud,mf),e(Kt,ff),e(Kt,md),e(md,gf),e(Kt,_f),e(we,bf),e(we,Ya),e(Ya,kf),e(Ya,Hr),e(Hr,yf),e(Ya,vf),e(we,Tf),e(we,es),e(es,wf),e(es,ts),e(ts,xf),e(es,$f),e(we,Ff),e(we,Ce),T(os,Ce,null),e(Ce,zf),e(Ce,Zt),e(Zt,qf),e(Zt,Vr),e(Vr,Bf),e(Zt,jf),e(Zt,fd),e(fd,Cf),e(Zt,Mf),e(Ce,Ef),T(Xo,Ce,null),e(Ce,Pf),T(Ko,Ce,null),e(Ce,Af),T(Zo,Ce,null),k(o,fc,b),k(o,Yt,b),e(Yt,Yo),e(Yo,gd),T(ns,gd,null),e(Yt,Sf),e(Yt,_d),e(_d,Of),k(o,gc,b),k(o,eo,b),T(as,eo,null),e(eo,If),e(eo,en),T(ss,en,null),e(en,Nf),T(tn,en,null),k(o,_c,b),k(o,to,b),e(to,on),e(on,bd),T(rs,bd,null),e(to,Lf),e(to,kd),e(kd,Df),k(o,bc,b),k(o,xe,b),T(is,xe,null),e(xe,Gf),e(xe,ds),e(ds,Wf),e(ds,Jr),e(Jr,Uf),e(ds,Rf),e(xe,Qf),e(xe,ls),e(ls,Hf),e(ls,cs),e(cs,Vf),e(ls,Jf),e(xe,Xf),T(nn,xe,null),e(xe,Kf),e(xe,Je),T(ps,Je,null),e(Je,Zf),e(Je,oo),e(oo,Yf),e(oo,Xr),e(Xr,eg),e(oo,tg),e(oo,yd),e(yd,og),e(oo,ng),e(Je,ag),T(an,Je,null),e(Je,sg),T(sn,Je,null),k(o,kc,b),k(o,no,b),e(no,rn),e(rn,vd),T(hs,vd,null),e(no,rg),e(no,Td),e(Td,ig),k(o,yc,b),k(o,$e,b),T(us,$e,null),e($e,dg),e($e,ms),e(ms,lg),e(ms,Kr),e(Kr,cg),e(ms,pg),e($e,hg),e($e,fs),e(fs,ug),e(fs,gs),e(gs,mg),e(fs,fg),e($e,gg),T(dn,$e,null),e($e,_g),e($e,Me),T(_s,Me,null),e(Me,bg),e(Me,ao),e(ao,kg),e(ao,Zr),e(Zr,yg),e(ao,vg),e(ao,wd),e(wd,Tg),e(ao,wg),e(Me,xg),T(ln,Me,null),e(Me,$g),T(cn,Me,null),e(Me,Fg),T(pn,Me,null),k(o,vc,b),k(o,so,b),e(so,hn),e(hn,xd),T(bs,xd,null),e(so,zg),e(so,$d),e($d,qg),k(o,Tc,b),k(o,R,b),T(ks,R,null),e(R,Bg),e(R,ys),e(ys,jg),e(ys,Yr),e(Yr,Cg),e(ys,Mg),e(R,Eg),e(R,vs),e(vs,Pg),e(vs,Ts),e(Ts,Ag),e(vs,Sg),e(R,Og),e(R,Fd),e(Fd,Ig),e(R,Ng),e(R,pt),e(pt,zd),e(zd,ws),e(ws,Lg),e(pt,Dg),e(pt,qd),e(qd,xs),e(xs,Gg),e(pt,Wg),e(pt,Bd),e(Bd,$s),e($s,Ug),e(pt,Rg),e(pt,jd),e(jd,Fs),e(Fs,Qg),e(R,Hg),e(R,Xe),T(zs,Xe,null),e(Xe,Vg),e(Xe,ro),e(ro,Jg),e(ro,Cd),e(Cd,Xg),e(ro,Kg),e(ro,Md),e(Md,Zg),e(ro,Yg),e(Xe,e_),T(un,Xe,null),e(Xe,t_),T(mn,Xe,null),e(R,o_),e(R,fn),T(qs,fn,null),e(fn,n_),T(gn,fn,null),e(R,a_),e(R,_n),T(Bs,_n,null),e(_n,s_),T(bn,_n,null),k(o,wc,b),k(o,io,b),e(io,kn),e(kn,Ed),T(js,Ed,null),e(io,r_),e(io,Pd),e(Pd,i_),k(o,xc,b),k(o,Q,b),T(Cs,Q,null),e(Q,d_),e(Q,Ms),e(Ms,l_),e(Ms,ei),e(ei,c_),e(Ms,p_),e(Q,h_),e(Q,Es),e(Es,u_),e(Es,Ps),e(Ps,m_),e(Es,f_),e(Q,g_),e(Q,Ad),e(Ad,__),e(Q,b_),e(Q,ht),e(ht,Sd),e(Sd,As),e(As,k_),e(ht,y_),e(ht,Od),e(Od,Ss),e(Ss,v_),e(ht,T_),e(ht,Id),e(Id,Os),e(Os,w_),e(ht,x_),e(ht,Nd),e(Nd,Is),e(Is,$_),e(Q,F_),e(Q,Ee),T(Ns,Ee,null),e(Ee,z_),e(Ee,lo),e(lo,q_),e(lo,Ld),e(Ld,B_),e(lo,j_),e(lo,Dd),e(Dd,C_),e(lo,M_),e(Ee,E_),T(yn,Ee,null),e(Ee,P_),T(vn,Ee,null),e(Ee,A_),T(Tn,Ee,null),e(Q,S_),e(Q,wn),T(Ls,wn,null),e(wn,O_),T(xn,wn,null),e(Q,I_),e(Q,$n),T(Ds,$n,null),e($n,N_),T(Fn,$n,null),k(o,$c,b),k(o,co,b),e(co,zn),e(zn,Gd),T(Gs,Gd,null),e(co,L_),e(co,Wd),e(Wd,D_),k(o,Fc,b),k(o,N,b),T(Ws,N,null),e(N,G_),e(N,Ud),e(Ud,W_),e(N,U_),e(N,Us),e(Us,R_),e(Us,ti),e(ti,Q_),e(Us,H_),e(N,V_),e(N,Rs),e(Rs,J_),e(Rs,Qs),e(Qs,X_),e(Rs,K_),e(N,Z_),e(N,Rd),e(Rd,Y_),e(N,eb),e(N,ut),e(ut,Qd),e(Qd,Hs),e(Hs,tb),e(ut,ob),e(ut,Hd),e(Hd,Vs),e(Vs,nb),e(ut,ab),e(ut,Vd),e(Vd,Js),e(Js,sb),e(ut,rb),e(ut,Jd),e(Jd,Xs),e(Xs,ib),e(N,db),e(N,Ke),T(Ks,Ke,null),e(Ke,lb),e(Ke,po),e(po,cb),e(po,Xd),e(Xd,pb),e(po,hb),e(po,Kd),e(Kd,ub),e(po,mb),e(Ke,fb),T(qn,Ke,null),e(Ke,gb),T(Bn,Ke,null),e(N,_b),e(N,jn),T(Zs,jn,null),e(jn,bb),T(Cn,jn,null),e(N,kb),e(N,Mn),T(Ys,Mn,null),e(Mn,yb),T(En,Mn,null),k(o,zc,b),k(o,ho,b),e(ho,Pn),e(Pn,Zd),T(er,Zd,null),e(ho,vb),e(ho,Yd),e(Yd,Tb),k(o,qc,b),k(o,L,b),T(tr,L,null),e(L,wb),e(L,uo),e(uo,xb),e(uo,el),e(el,$b),e(uo,Fb),e(uo,tl),e(tl,zb),e(uo,qb),e(L,Bb),e(L,or),e(or,jb),e(or,oi),e(oi,Cb),e(or,Mb),e(L,Eb),e(L,nr),e(nr,Pb),e(nr,ar),e(ar,Ab),e(nr,Sb),e(L,Ob),e(L,ol),e(ol,Ib),e(L,Nb),e(L,mt),e(mt,nl),e(nl,sr),e(sr,Lb),e(mt,Db),e(mt,al),e(al,rr),e(rr,Gb),e(mt,Wb),e(mt,sl),e(sl,ir),e(ir,Ub),e(mt,Rb),e(mt,rl),e(rl,dr),e(dr,Qb),e(L,Hb),e(L,Ze),T(lr,Ze,null),e(Ze,Vb),e(Ze,mo),e(mo,Jb),e(mo,il),e(il,Xb),e(mo,Kb),e(mo,dl),e(dl,Zb),e(mo,Yb),e(Ze,ek),T(An,Ze,null),e(Ze,tk),T(Sn,Ze,null),e(L,ok),e(L,On),T(cr,On,null),e(On,nk),T(In,On,null),e(L,ak),e(L,Nn),T(pr,Nn,null),e(Nn,sk),T(Ln,Nn,null),k(o,Bc,b),k(o,fo,b),e(fo,Dn),e(Dn,ll),T(hr,ll,null),e(fo,rk),e(fo,cl),e(cl,ik),k(o,jc,b),k(o,Z,b),T(ur,Z,null),e(Z,dk),e(Z,pl),e(pl,lk),e(Z,ck),e(Z,mr),e(mr,pk),e(mr,ni),e(ni,hk),e(mr,uk),e(Z,mk),e(Z,fr),e(fr,fk),e(fr,gr),e(gr,gk),e(fr,_k),e(Z,bk),e(Z,hl),e(hl,kk),e(Z,yk),e(Z,ft),e(ft,ul),e(ul,_r),e(_r,vk),e(ft,Tk),e(ft,ml),e(ml,br),e(br,wk),e(ft,xk),e(ft,fl),e(fl,kr),e(kr,$k),e(ft,Fk),e(ft,gl),e(gl,yr),e(yr,zk),e(Z,qk),e(Z,Ye),T(vr,Ye,null),e(Ye,Bk),e(Ye,go),e(go,jk),e(go,_l),e(_l,Ck),e(go,Mk),e(go,bl),e(bl,Ek),e(go,Pk),e(Ye,Ak),T(Gn,Ye,null),e(Ye,Sk),T(Wn,Ye,null),Cc=!0},p(o,[b]){const Tr={};b&2&&(Tr.$$scope={dirty:b,ctx:o}),$o.$set(Tr);const kl={};b&2&&(kl.$$scope={dirty:b,ctx:o}),zo.$set(kl);const yl={};b&2&&(yl.$$scope={dirty:b,ctx:o}),qo.$set(yl);const vl={};b&2&&(vl.$$scope={dirty:b,ctx:o}),Eo.$set(vl);const Un={};b&2&&(Un.$$scope={dirty:b,ctx:o}),Po.$set(Un);const Tl={};b&2&&(Tl.$$scope={dirty:b,ctx:o}),Oo.$set(Tl);const wl={};b&2&&(wl.$$scope={dirty:b,ctx:o}),Io.$set(wl);const wr={};b&2&&(wr.$$scope={dirty:b,ctx:o}),Lo.$set(wr);const xl={};b&2&&(xl.$$scope={dirty:b,ctx:o}),Do.$set(xl);const $l={};b&2&&($l.$$scope={dirty:b,ctx:o}),Go.$set($l);const Fl={};b&2&&(Fl.$$scope={dirty:b,ctx:o}),Uo.$set(Fl);const xr={};b&2&&(xr.$$scope={dirty:b,ctx:o}),Ro.$set(xr);const zl={};b&2&&(zl.$$scope={dirty:b,ctx:o}),Qo.$set(zl);const ql={};b&2&&(ql.$$scope={dirty:b,ctx:o}),Ho.$set(ql);const _o={};b&2&&(_o.$$scope={dirty:b,ctx:o}),Vo.$set(_o);const Bl={};b&2&&(Bl.$$scope={dirty:b,ctx:o}),Xo.$set(Bl);const jl={};b&2&&(jl.$$scope={dirty:b,ctx:o}),Ko.$set(jl);const Cl={};b&2&&(Cl.$$scope={dirty:b,ctx:o}),Zo.$set(Cl);const bo={};b&2&&(bo.$$scope={dirty:b,ctx:o}),tn.$set(bo);const Ml={};b&2&&(Ml.$$scope={dirty:b,ctx:o}),nn.$set(Ml);const El={};b&2&&(El.$$scope={dirty:b,ctx:o}),an.$set(El);const $r={};b&2&&($r.$$scope={dirty:b,ctx:o}),sn.$set($r);const Pl={};b&2&&(Pl.$$scope={dirty:b,ctx:o}),dn.$set(Pl);const Al={};b&2&&(Al.$$scope={dirty:b,ctx:o}),ln.$set(Al);const Sl={};b&2&&(Sl.$$scope={dirty:b,ctx:o}),cn.$set(Sl);const ko={};b&2&&(ko.$$scope={dirty:b,ctx:o}),pn.$set(ko);const Fr={};b&2&&(Fr.$$scope={dirty:b,ctx:o}),un.$set(Fr);const Ol={};b&2&&(Ol.$$scope={dirty:b,ctx:o}),mn.$set(Ol);const gt={};b&2&&(gt.$$scope={dirty:b,ctx:o}),gn.$set(gt);const Il={};b&2&&(Il.$$scope={dirty:b,ctx:o}),bn.$set(Il);const Nl={};b&2&&(Nl.$$scope={dirty:b,ctx:o}),yn.$set(Nl);const Ll={};b&2&&(Ll.$$scope={dirty:b,ctx:o}),vn.$set(Ll);const Rn={};b&2&&(Rn.$$scope={dirty:b,ctx:o}),Tn.$set(Rn);const Dl={};b&2&&(Dl.$$scope={dirty:b,ctx:o}),xn.$set(Dl);const Gl={};b&2&&(Gl.$$scope={dirty:b,ctx:o}),Fn.$set(Gl);const zr={};b&2&&(zr.$$scope={dirty:b,ctx:o}),qn.$set(zr);const Wl={};b&2&&(Wl.$$scope={dirty:b,ctx:o}),Bn.$set(Wl);const Ul={};b&2&&(Ul.$$scope={dirty:b,ctx:o}),Cn.$set(Ul);const Rl={};b&2&&(Rl.$$scope={dirty:b,ctx:o}),En.$set(Rl);const Re={};b&2&&(Re.$$scope={dirty:b,ctx:o}),An.$set(Re);const _t={};b&2&&(_t.$$scope={dirty:b,ctx:o}),Sn.$set(_t);const Ql={};b&2&&(Ql.$$scope={dirty:b,ctx:o}),In.$set(Ql);const Hl={};b&2&&(Hl.$$scope={dirty:b,ctx:o}),Ln.$set(Hl);const Vl={};b&2&&(Vl.$$scope={dirty:b,ctx:o}),Gn.$set(Vl);const yo={};b&2&&(yo.$$scope={dirty:b,ctx:o}),Wn.$set(yo)},i(o){Cc||(w(n.$$.fragment,o),w(ae.$$.fragment,o),w(Le.$$.fragment,o),w(pa.$$.fragment,o),w(ha.$$.fragment,o),w(ua.$$.fragment,o),w(ma.$$.fragment,o),w(fa.$$.fragment,o),w($o.$$.fragment,o),w(_a.$$.fragment,o),w(ba.$$.fragment,o),w(zo.$$.fragment,o),w(qo.$$.fragment,o),w(va.$$.fragment,o),w(wa.$$.fragment,o),w(xa.$$.fragment,o),w($a.$$.fragment,o),w(za.$$.fragment,o),w(qa.$$.fragment,o),w(Eo.$$.fragment,o),w(Po.$$.fragment,o),w(Ma.$$.fragment,o),w(Ea.$$.fragment,o),w(Pa.$$.fragment,o),w(Ia.$$.fragment,o),w(Oo.$$.fragment,o),w(Io.$$.fragment,o),w(Na.$$.fragment,o),w(La.$$.fragment,o),w(Ua.$$.fragment,o),w(Lo.$$.fragment,o),w(Do.$$.fragment,o),w(Go.$$.fragment,o),w(Ra.$$.fragment,o),w(Qa.$$.fragment,o),w(Xa.$$.fragment,o),w(Uo.$$.fragment,o),w(Ro.$$.fragment,o),w(Qo.$$.fragment,o),w(Ho.$$.fragment,o),w(Vo.$$.fragment,o),w(Ka.$$.fragment,o),w(Za.$$.fragment,o),w(os.$$.fragment,o),w(Xo.$$.fragment,o),w(Ko.$$.fragment,o),w(Zo.$$.fragment,o),w(ns.$$.fragment,o),w(as.$$.fragment,o),w(ss.$$.fragment,o),w(tn.$$.fragment,o),w(rs.$$.fragment,o),w(is.$$.fragment,o),w(nn.$$.fragment,o),w(ps.$$.fragment,o),w(an.$$.fragment,o),w(sn.$$.fragment,o),w(hs.$$.fragment,o),w(us.$$.fragment,o),w(dn.$$.fragment,o),w(_s.$$.fragment,o),w(ln.$$.fragment,o),w(cn.$$.fragment,o),w(pn.$$.fragment,o),w(bs.$$.fragment,o),w(ks.$$.fragment,o),w(zs.$$.fragment,o),w(un.$$.fragment,o),w(mn.$$.fragment,o),w(qs.$$.fragment,o),w(gn.$$.fragment,o),w(Bs.$$.fragment,o),w(bn.$$.fragment,o),w(js.$$.fragment,o),w(Cs.$$.fragment,o),w(Ns.$$.fragment,o),w(yn.$$.fragment,o),w(vn.$$.fragment,o),w(Tn.$$.fragment,o),w(Ls.$$.fragment,o),w(xn.$$.fragment,o),w(Ds.$$.fragment,o),w(Fn.$$.fragment,o),w(Gs.$$.fragment,o),w(Ws.$$.fragment,o),w(Ks.$$.fragment,o),w(qn.$$.fragment,o),w(Bn.$$.fragment,o),w(Zs.$$.fragment,o),w(Cn.$$.fragment,o),w(Ys.$$.fragment,o),w(En.$$.fragment,o),w(er.$$.fragment,o),w(tr.$$.fragment,o),w(lr.$$.fragment,o),w(An.$$.fragment,o),w(Sn.$$.fragment,o),w(cr.$$.fragment,o),w(In.$$.fragment,o),w(pr.$$.fragment,o),w(Ln.$$.fragment,o),w(hr.$$.fragment,o),w(ur.$$.fragment,o),w(vr.$$.fragment,o),w(Gn.$$.fragment,o),w(Wn.$$.fragment,o),Cc=!0)},o(o){x(n.$$.fragment,o),x(ae.$$.fragment,o),x(Le.$$.fragment,o),x(pa.$$.fragment,o),x(ha.$$.fragment,o),x(ua.$$.fragment,o),x(ma.$$.fragment,o),x(fa.$$.fragment,o),x($o.$$.fragment,o),x(_a.$$.fragment,o),x(ba.$$.fragment,o),x(zo.$$.fragment,o),x(qo.$$.fragment,o),x(va.$$.fragment,o),x(wa.$$.fragment,o),x(xa.$$.fragment,o),x($a.$$.fragment,o),x(za.$$.fragment,o),x(qa.$$.fragment,o),x(Eo.$$.fragment,o),x(Po.$$.fragment,o),x(Ma.$$.fragment,o),x(Ea.$$.fragment,o),x(Pa.$$.fragment,o),x(Ia.$$.fragment,o),x(Oo.$$.fragment,o),x(Io.$$.fragment,o),x(Na.$$.fragment,o),x(La.$$.fragment,o),x(Ua.$$.fragment,o),x(Lo.$$.fragment,o),x(Do.$$.fragment,o),x(Go.$$.fragment,o),x(Ra.$$.fragment,o),x(Qa.$$.fragment,o),x(Xa.$$.fragment,o),x(Uo.$$.fragment,o),x(Ro.$$.fragment,o),x(Qo.$$.fragment,o),x(Ho.$$.fragment,o),x(Vo.$$.fragment,o),x(Ka.$$.fragment,o),x(Za.$$.fragment,o),x(os.$$.fragment,o),x(Xo.$$.fragment,o),x(Ko.$$.fragment,o),x(Zo.$$.fragment,o),x(ns.$$.fragment,o),x(as.$$.fragment,o),x(ss.$$.fragment,o),x(tn.$$.fragment,o),x(rs.$$.fragment,o),x(is.$$.fragment,o),x(nn.$$.fragment,o),x(ps.$$.fragment,o),x(an.$$.fragment,o),x(sn.$$.fragment,o),x(hs.$$.fragment,o),x(us.$$.fragment,o),x(dn.$$.fragment,o),x(_s.$$.fragment,o),x(ln.$$.fragment,o),x(cn.$$.fragment,o),x(pn.$$.fragment,o),x(bs.$$.fragment,o),x(ks.$$.fragment,o),x(zs.$$.fragment,o),x(un.$$.fragment,o),x(mn.$$.fragment,o),x(qs.$$.fragment,o),x(gn.$$.fragment,o),x(Bs.$$.fragment,o),x(bn.$$.fragment,o),x(js.$$.fragment,o),x(Cs.$$.fragment,o),x(Ns.$$.fragment,o),x(yn.$$.fragment,o),x(vn.$$.fragment,o),x(Tn.$$.fragment,o),x(Ls.$$.fragment,o),x(xn.$$.fragment,o),x(Ds.$$.fragment,o),x(Fn.$$.fragment,o),x(Gs.$$.fragment,o),x(Ws.$$.fragment,o),x(Ks.$$.fragment,o),x(qn.$$.fragment,o),x(Bn.$$.fragment,o),x(Zs.$$.fragment,o),x(Cn.$$.fragment,o),x(Ys.$$.fragment,o),x(En.$$.fragment,o),x(er.$$.fragment,o),x(tr.$$.fragment,o),x(lr.$$.fragment,o),x(An.$$.fragment,o),x(Sn.$$.fragment,o),x(cr.$$.fragment,o),x(In.$$.fragment,o),x(pr.$$.fragment,o),x(Ln.$$.fragment,o),x(hr.$$.fragment,o),x(ur.$$.fragment,o),x(vr.$$.fragment,o),x(Gn.$$.fragment,o),x(Wn.$$.fragment,o),Cc=!1},d(o){t(l),o&&t(_),o&&t(h),$(n),o&&t(O),o&&t(j),o&&t(Qe),o&&t(J),$(ae),o&&t(ce),o&&t(pe),o&&t(G),o&&t(ze),o&&t(He),o&&t(Y),o&&t(M),o&&t(H),o&&t(he),o&&t(ve),$(Le),o&&t(Jl),o&&t(bt),o&&t(Xl),o&&t(Pt),$(pa),o&&t(Kl),o&&t(Be),o&&t(Zl),o&&t(It),$(ha),o&&t(Yl),o&&t(kt),o&&t(ec),$(ua,o),o&&t(tc),o&&t(Nt),$(ma),o&&t(oc),o&&t(Ge),$(fa),$($o),o&&t(nc),o&&t(Gt),$(_a),o&&t(ac),o&&t(A),$(ba),$(zo),$(qo),$(va),$(wa),$(xa),$($a),o&&t(sc),o&&t(Wt),$(za),o&&t(rc),o&&t(U),$(qa),$(Eo),$(Po),$(Ma),o&&t(ic),o&&t(Ut),$(Ea),o&&t(dc),o&&t(We),$(Pa),$(Ia),$(Oo),$(Io),o&&t(lc),o&&t(Qt),$(Na),o&&t(cc),o&&t(Ue),$(La),$(Ua),$(Lo),$(Do),$(Go),o&&t(pc),o&&t(Vt),$(Ra),o&&t(hc),o&&t(Te),$(Qa),$(Xa),$(Uo),$(Ro),$(Qo),$(Ho),$(Vo),o&&t(uc),o&&t(Xt),$(Ka),o&&t(mc),o&&t(we),$(Za),$(os),$(Xo),$(Ko),$(Zo),o&&t(fc),o&&t(Yt),$(ns),o&&t(gc),o&&t(eo),$(as),$(ss),$(tn),o&&t(_c),o&&t(to),$(rs),o&&t(bc),o&&t(xe),$(is),$(nn),$(ps),$(an),$(sn),o&&t(kc),o&&t(no),$(hs),o&&t(yc),o&&t($e),$(us),$(dn),$(_s),$(ln),$(cn),$(pn),o&&t(vc),o&&t(so),$(bs),o&&t(Tc),o&&t(R),$(ks),$(zs),$(un),$(mn),$(qs),$(gn),$(Bs),$(bn),o&&t(wc),o&&t(io),$(js),o&&t(xc),o&&t(Q),$(Cs),$(Ns),$(yn),$(vn),$(Tn),$(Ls),$(xn),$(Ds),$(Fn),o&&t($c),o&&t(co),$(Gs),o&&t(Fc),o&&t(N),$(Ws),$(Ks),$(qn),$(Bn),$(Zs),$(Cn),$(Ys),$(En),o&&t(zc),o&&t(ho),$(er),o&&t(qc),o&&t(L),$(tr),$(lr),$(An),$(Sn),$(cr),$(In),$(pr),$(Ln),o&&t(Bc),o&&t(fo),$(hr),o&&t(jc),o&&t(Z),$(ur),$(vr),$(Gn),$(Wn)}}}const Hw={local:"bart",sections:[{local:"overview",sections:[{local:"examples",title:"Examples"}],title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"mask-filling",title:"Mask Filling"},{local:"transformers.BartConfig",title:"BartConfig"},{local:"transformers.BartTokenizer",title:"BartTokenizer"},{local:"transformers.BartTokenizerFast",title:"BartTokenizerFast"},{local:"transformers.BartModel",title:"BartModel"},{local:"transformers.BartForConditionalGeneration",title:"BartForConditionalGeneration"},{local:"transformers.BartForSequenceClassification",title:"BartForSequenceClassification"},{local:"transformers.BartForQuestionAnswering",title:"BartForQuestionAnswering"},{local:"transformers.BartForCausalLM",title:"BartForCausalLM"},{local:"transformers.TFBartModel",title:"TFBartModel"},{local:"transformers.TFBartForConditionalGeneration",title:"TFBartForConditionalGeneration"},{local:"transformers.FlaxBartModel",title:"FlaxBartModel"},{local:"transformers.FlaxBartForConditionalGeneration",title:"FlaxBartForConditionalGeneration"},{local:"transformers.FlaxBartForSequenceClassification",title:"FlaxBartForSequenceClassification"},{local:"transformers.FlaxBartForQuestionAnswering",title:"FlaxBartForQuestionAnswering"},{local:"transformers.FlaxBartForCausalLM",title:"FlaxBartForCausalLM"}],title:"BART"};function Vw(F){return ew(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class tx extends XT{constructor(l){super();KT(this,l,Vw,Qw,ZT,{})}}export{tx as default,Hw as metadata};
