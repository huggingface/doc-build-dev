import{S as av,i as sv,s as rv,e as s,k as c,w as v,t as n,M as iv,c as r,d as o,m as p,a as i,x as y,h as a,b as l,F as e,g as u,y as b,q as L,o as w,B as k,v as lv,L as tn}from"../../chunks/vendor-6b77c823.js";import{T as Di}from"../../chunks/Tip-39098574.js";import{D}from"../../chunks/Docstring-1088f2fb.js";import{C as W}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as le}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as en}from"../../chunks/ExampleCodeBlock-5212b321.js";function dv(j){let h,x,f,g,T;return g=new W({props:{code:`from transformers import LayoutLMv2Model, LayoutLMv2Config

# Initializing a LayoutLMv2 microsoft/layoutlmv2-base-uncased style configuration
configuration = LayoutLMv2Config()

# Initializing a model from the microsoft/layoutlmv2-base-uncased style configuration
model = LayoutLMv2Model(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Model, LayoutLMv2Config

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a LayoutLMv2 microsoft/layoutlmv2-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LayoutLMv2Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the microsoft/layoutlmv2-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){h=s("p"),x=n("Example:"),f=c(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);x=a(_,"Example:"),_.forEach(o),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,x),u(m,f,_),b(g,m,_),T=!0},p:tn,i(m){T||(L(g.$$.fragment,m),T=!0)},o(m){w(g.$$.fragment,m),T=!1},d(m){m&&o(h),m&&o(f),k(g,m)}}}function cv(j){let h,x,f,g,T;return g=new W({props:{code:`from transformers import LayoutLMv2FeatureExtractor
from PIL import Image

image = Image.open("name_of_your_document - can be a png file, pdf, etc.").convert("RGB")

# option 1: with apply_ocr=True (default)
feature_extractor = LayoutLMv2FeatureExtractor()
encoding = feature_extractor(image, return_tensors="pt")
print(encoding.keys())
# dict_keys(['pixel_values', 'words', 'boxes'])

# option 2: with apply_ocr=False
feature_extractor = LayoutLMv2FeatureExtractor(apply_ocr=False)
encoding = feature_extractor(image, return_tensors="pt")
print(encoding.keys())
# dict_keys(['pixel_values'])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2FeatureExtractor
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>).convert(<span class="hljs-string">&quot;RGB&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># option 1: with apply_ocr=True (default)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = LayoutLMv2FeatureExtractor()
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;, &#x27;words&#x27;, &#x27;boxes&#x27;])</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># option 2: with apply_ocr=False</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = LayoutLMv2FeatureExtractor(apply_ocr=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = feature_extractor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;])</span>`}}),{c(){h=s("p"),x=n("Examples:"),f=c(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);x=a(_,"Examples:"),_.forEach(o),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,x),u(m,f,_),b(g,m,_),T=!0},p:tn,i(m){T||(L(g.$$.fragment,m),T=!0)},o(m){w(g.$$.fragment,m),T=!1},d(m){m&&o(h),m&&o(f),k(g,m)}}}function pv(j){let h,x,f,g,T;return{c(){h=s("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){h=r(m,"P",{});var _=i(h);x=a(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=a(O,"Module"),O.forEach(o),T=a(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(m,_){u(m,h,_),e(h,x),e(h,f),e(f,g),e(h,T)},d(m){m&&o(h)}}}function uv(j){let h,x,f,g,T;return g=new W({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2Model, set_seed
from PIL import Image
import torch
from datasets import load_dataset

set_seed(88)

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased")
model = LayoutLMv2Model.from_pretrained("microsoft/layoutlmv2-base-uncased")


dataset = load_dataset("hf-internal-testing/fixtures_docvqa")
image_path = dataset["test"][0]["file"]
image = Image.open(image_path).convert("RGB")

encoding = processor(image, return_tensors="pt")

outputs = model(**encoding)
last_hidden_states = outputs.last_hidden_state

last_hidden_states.shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor, LayoutLMv2Model, set_seed
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>set_seed(<span class="hljs-number">88</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2Model.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/fixtures_docvqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image_path = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;file&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(image_path).convert(<span class="hljs-string">&quot;RGB&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states.shape
torch.Size([<span class="hljs-number">1</span>, <span class="hljs-number">342</span>, <span class="hljs-number">768</span>])`}}),{c(){h=s("p"),x=n("Examples:"),f=c(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);x=a(_,"Examples:"),_.forEach(o),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,x),u(m,f,_),b(g,m,_),T=!0},p:tn,i(m){T||(L(g.$$.fragment,m),T=!0)},o(m){w(g.$$.fragment,m),T=!1},d(m){m&&o(h),m&&o(f),k(g,m)}}}function mv(j){let h,x,f,g,T;return{c(){h=s("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){h=r(m,"P",{});var _=i(h);x=a(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=a(O,"Module"),O.forEach(o),T=a(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(m,_){u(m,h,_),e(h,x),e(h,f),e(f,g),e(h,T)},d(m){m&&o(h)}}}function hv(j){let h,x,f,g,T;return g=new W({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForSequenceClassification, set_seed
from PIL import Image
import torch
from datasets import load_dataset

set_seed(88)

dataset = load_dataset("rvl_cdip", split="train", streaming=True)
data = next(iter(dataset))
image = data["image"].convert("RGB")

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased")
model = LayoutLMv2ForSequenceClassification.from_pretrained(
    "microsoft/layoutlmv2-base-uncased", num_labels=dataset.info.features["label"].num_classes
)

encoding = processor(image, return_tensors="pt")
sequence_label = torch.tensor([data["label"]])

outputs = model(**encoding, labels=sequence_label)

loss, logits = outputs.loss, outputs.logits
predicted_idx = logits.argmax(dim=-1).item()
predicted_answer = dataset.info.features["label"].names[4]
predicted_idx, predicted_answer`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor, LayoutLMv2ForSequenceClassification, set_seed
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>set_seed(<span class="hljs-number">88</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;rvl_cdip&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>, streaming=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>data = <span class="hljs-built_in">next</span>(<span class="hljs-built_in">iter</span>(dataset))
<span class="hljs-meta">&gt;&gt;&gt; </span>image = data[<span class="hljs-string">&quot;image&quot;</span>].convert(<span class="hljs-string">&quot;RGB&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2ForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, num_labels=dataset.info.features[<span class="hljs-string">&quot;label&quot;</span>].num_classes
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_label = torch.tensor([data[<span class="hljs-string">&quot;label&quot;</span>]])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=sequence_label)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss, logits = outputs.loss, outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_idx = logits.argmax(dim=-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer = dataset.info.features[<span class="hljs-string">&quot;label&quot;</span>].names[<span class="hljs-number">4</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_idx, predicted_answer
(<span class="hljs-number">4</span>, <span class="hljs-string">&#x27;advertisement&#x27;</span>)`}}),{c(){h=s("p"),x=n("Example:"),f=c(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);x=a(_,"Example:"),_.forEach(o),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,x),u(m,f,_),b(g,m,_),T=!0},p:tn,i(m){T||(L(g.$$.fragment,m),T=!0)},o(m){w(g.$$.fragment,m),T=!1},d(m){m&&o(h),m&&o(f),k(g,m)}}}function fv(j){let h,x,f,g,T;return{c(){h=s("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){h=r(m,"P",{});var _=i(h);x=a(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=a(O,"Module"),O.forEach(o),T=a(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(m,_){u(m,h,_),e(h,x),e(h,f),e(f,g),e(h,T)},d(m){m&&o(h)}}}function gv(j){let h,x,f,g,T;return g=new W({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForTokenClassification, set_seed
from PIL import Image
from datasets import load_dataset

set_seed(88)

datasets = load_dataset("nielsr/funsd", split="test")
labels = datasets.features["ner_tags"].feature.names
id2label = {v: k for v, k in enumerate(labels)}

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased", revision="no_ocr")
model = LayoutLMv2ForTokenClassification.from_pretrained(
    "microsoft/layoutlmv2-base-uncased", num_labels=len(labels)
)

data = datasets[0]
image = Image.open(data["image_path"]).convert("RGB")
words = data["words"]
boxes = data["bboxes"]  # make sure to normalize your bounding boxes
word_labels = data["ner_tags"]
encoding = processor(
    image,
    words,
    boxes=boxes,
    word_labels=word_labels,
    padding="max_length",
    truncation=True,
    return_tensors="pt",
)

outputs = model(**encoding)
logits, loss = outputs.logits, outputs.loss

predicted_token_class_ids = logits.argmax(-1)
predicted_tokens_classes = [id2label[t.item()] for t in predicted_token_class_ids[0]]
predicted_tokens_classes[:5]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor, LayoutLMv2ForTokenClassification, set_seed
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>set_seed(<span class="hljs-number">88</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>datasets = load_dataset(<span class="hljs-string">&quot;nielsr/funsd&quot;</span>, split=<span class="hljs-string">&quot;test&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = datasets.features[<span class="hljs-string">&quot;ner_tags&quot;</span>].feature.names
<span class="hljs-meta">&gt;&gt;&gt; </span>id2label = {v: k <span class="hljs-keyword">for</span> v, k <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(labels)}

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, revision=<span class="hljs-string">&quot;no_ocr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2ForTokenClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, num_labels=<span class="hljs-built_in">len</span>(labels)
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = datasets[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(data[<span class="hljs-string">&quot;image_path&quot;</span>]).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>words = data[<span class="hljs-string">&quot;words&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = data[<span class="hljs-string">&quot;bboxes&quot;</span>]  <span class="hljs-comment"># make sure to normalize your bounding boxes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>word_labels = data[<span class="hljs-string">&quot;ner_tags&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(
<span class="hljs-meta">... </span>    image,
<span class="hljs-meta">... </span>    words,
<span class="hljs-meta">... </span>    boxes=boxes,
<span class="hljs-meta">... </span>    word_labels=word_labels,
<span class="hljs-meta">... </span>    padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>    truncation=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits, loss = outputs.logits, outputs.loss

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = logits.argmax(-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [id2label[t.item()] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes[:<span class="hljs-number">5</span>]
[<span class="hljs-string">&#x27;B-ANSWER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>]`}}),{c(){h=s("p"),x=n("Example:"),f=c(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);x=a(_,"Example:"),_.forEach(o),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,x),u(m,f,_),b(g,m,_),T=!0},p:tn,i(m){T||(L(g.$$.fragment,m),T=!0)},o(m){w(g.$$.fragment,m),T=!1},d(m){m&&o(h),m&&o(f),k(g,m)}}}function _v(j){let h,x,f,g,T;return{c(){h=s("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){h=r(m,"P",{});var _=i(h);x=a(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=a(O,"Module"),O.forEach(o),T=a(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(m,_){u(m,h,_),e(h,x),e(h,f),e(f,g),e(h,T)},d(m){m&&o(h)}}}function vv(j){let h,x;return h=new W({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForQuestionAnswering, set_seed
import torch
from PIL import Image
from datasets import load_dataset

set_seed(88)
processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased")
model = LayoutLMv2ForQuestionAnswering.from_pretrained("microsoft/layoutlmv2-base-uncased")

dataset = load_dataset("hf-internal-testing/fixtures_docvqa")
image_path = dataset["test"][0]["file"]
image = Image.open(image_path).convert("RGB")
question = "When is coffee break?"
encoding = processor(image, question, return_tensors="pt")

outputs = model(**encoding)
predicted_start_idx = outputs.start_logits.argmax(-1).item()
predicted_end_idx = outputs.end_logits.argmax(-1).item()
predicted_start_idx, predicted_end_idx

predicted_answer_tokens = encoding.input_ids.squeeze()[predicted_start_idx : predicted_end_idx + 1]
predicted_answer = processor.tokenizer.decode(predicted_answer_tokens)
predicted_answer  # results are not very good without further fine-tuning`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor, LayoutLMv2ForQuestionAnswering, set_seed
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>set_seed(<span class="hljs-number">88</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2ForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/fixtures_docvqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image_path = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;file&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(image_path).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;When is coffee break?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, question, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_start_idx = outputs.start_logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_end_idx = outputs.end_logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_start_idx, predicted_end_idx
(<span class="hljs-number">154</span>, <span class="hljs-number">287</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer_tokens = encoding.input_ids.squeeze()[predicted_start_idx : predicted_end_idx + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer = processor.tokenizer.decode(predicted_answer_tokens)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer  <span class="hljs-comment"># results are not very good without further fine-tuning</span>
<span class="hljs-string">&#x27;council mem - bers conducted by trrf treasurer philip g. kuehn to get answers which the public ...</span>`}}),{c(){v(h.$$.fragment)},l(f){y(h.$$.fragment,f)},m(f,g){b(h,f,g),x=!0},p:tn,i(f){x||(L(h.$$.fragment,f),x=!0)},o(f){w(h.$$.fragment,f),x=!1},d(f){k(h,f)}}}function yv(j){let h,x;return h=new W({props:{code:`target_start_index = torch.tensor([7])
target_end_index = torch.tensor([14])
outputs = model(**encoding, start_positions=target_start_index, end_positions=target_end_index)
predicted_answer_span_start = outputs.start_logits.argmax(-1).item()
predicted_answer_span_end = outputs.end_logits.argmax(-1).item()
predicted_answer_span_start, predicted_answer_span_end`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">7</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer_span_start = outputs.start_logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer_span_end = outputs.end_logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer_span_start, predicted_answer_span_end
(<span class="hljs-number">154</span>, <span class="hljs-number">287</span>)`}}),{c(){v(h.$$.fragment)},l(f){y(h.$$.fragment,f)},m(f,g){b(h,f,g),x=!0},p:tn,i(f){x||(L(h.$$.fragment,f),x=!0)},o(f){w(h.$$.fragment,f),x=!1},d(f){k(h,f)}}}function bv(j){let h,x,f,g,T,m,_,O,Oi,dr,Te,We,ma,Mt,Ni,ha,Si,cr,ue,Ri,$t,Ui,Bi,on,Wi,Vi,pr,me,X,Qi,Et,Gi,Hi,qt,Ki,Xi,zt,Yi,Zi,jt,Ji,el,tl,Ft,ol,Pt,nl,al,sl,Ct,rl,It,il,ll,ur,nn,dl,mr,an,fa,cl,hr,sn,pl,fr,V,ga,ul,ml,At,hl,Dt,fl,gl,_l,Ot,vl,Nt,yl,bl,Ll,Me,wl,St,kl,xl,Rt,Tl,Ml,$l,M,El,_a,ql,zl,rn,jl,Fl,va,Pl,Cl,ya,Il,Al,ba,Dl,Ol,La,Nl,Sl,wa,Rl,Ul,ka,Bl,Wl,xa,Vl,Ql,ln,Gl,Hl,Ut,Kl,Xl,Bt,Yl,Zl,gr,Wt,_r,he,Jl,Ta,ed,td,Ma,od,nd,vr,Vt,yr,Ve,ad,dn,sd,rd,br,fe,I,id,cn,ld,dd,$a,cd,pd,Ea,ud,md,pn,hd,fd,qa,gd,_d,za,vd,yd,ja,bd,Ld,wd,Qt,kd,un,xd,Td,Md,Gt,$d,Fa,Ed,qd,Lr,Qe,zd,mn,jd,Fd,wr,$e,Ge,Pa,Ht,Pd,Ca,Cd,kr,Q,Id,hn,Ad,Dd,fn,Od,Nd,gn,Sd,Rd,_n,Ud,Bd,xr,Kt,Tr,E,Wd,vn,Vd,Qd,yn,Gd,Hd,Ia,Kd,Xd,bn,Yd,Zd,Ln,Jd,ec,Aa,tc,oc,Da,nc,ac,Oa,sc,rc,Na,ic,lc,Sa,dc,cc,Mr,U,wn,pc,uc,Xt,mc,hc,kn,fc,gc,Ra,_c,vc,Ua,yc,bc,$r,xn,Lc,Er,Tn,Ba,wc,qr,Mn,kc,zr,Yt,jr,$n,Wa,xc,Fr,ge,Tc,Va,Mc,$c,Qa,Ec,qc,Pr,Zt,Cr,En,Ga,zc,Ir,G,jc,Ha,Fc,Pc,Ka,Cc,Ic,Xa,Ac,Dc,Ya,Oc,Nc,Ar,Jt,Dr,qn,Za,Sc,Or,zn,Rc,Nr,eo,Sr,jn,Ja,Uc,Rr,Fn,Bc,Ur,to,Br,Ee,He,es,oo,Wc,ts,Vc,Wr,Y,no,Qc,qe,Gc,Pn,Hc,Kc,ao,Xc,Yc,Zc,ze,Jc,Cn,ep,tp,In,op,np,ap,Ke,Vr,je,Xe,os,so,sp,ns,rp,Qr,Z,ro,ip,as,lp,dp,io,cp,ss,pp,up,mp,_e,lo,hp,rs,fp,gp,Ye,Gr,Fe,Ze,is,co,_p,ls,vp,Hr,N,po,yp,S,bp,An,Lp,wp,ds,kp,xp,cs,Tp,Mp,ps,$p,Ep,us,qp,zp,ms,jp,Fp,Pp,uo,Cp,Dn,Ip,Ap,Dp,On,Nn,Op,Np,Sp,Je,mo,Rp,hs,Up,Bp,Sn,ho,Kr,Pe,et,fs,fo,Wp,gs,Vp,Xr,J,go,Qp,_o,Gp,_s,Hp,Kp,Xp,vo,Yp,Rn,Zp,Jp,eu,tt,yo,tu,vs,ou,Yr,Ce,ot,ys,bo,nu,bs,au,Zr,B,Lo,su,Ls,ru,iu,Un,Bn,lu,du,cu,F,pu,Wn,uu,mu,Vn,hu,fu,Qn,gu,_u,ws,vu,yu,ks,bu,Lu,xs,wu,ku,Ts,xu,Tu,Ms,Mu,$u,$s,Eu,qu,zu,ve,wo,ju,$,Fu,Es,Pu,Cu,ko,qs,Iu,Au,Du,Gn,Ou,Nu,zs,Su,Ru,js,Uu,Bu,xo,Fs,Wu,Vu,Qu,Ps,Gu,Hu,Hn,Ku,Xu,Cs,Yu,Zu,Is,Ju,em,As,tm,om,Ds,nm,am,sm,Os,rm,Jr,Ie,nt,Ns,To,im,Ss,lm,ei,de,Mo,dm,$o,cm,Eo,pm,um,mm,ae,qo,hm,Ae,fm,Kn,gm,_m,Rs,vm,ym,bm,at,Lm,st,ti,De,rt,Us,zo,wm,Bs,km,oi,ee,jo,xm,Fo,Tm,Po,Mm,$m,Em,Co,qm,Io,zm,jm,Fm,se,Ao,Pm,Oe,Cm,Xn,Im,Am,Ws,Dm,Om,Nm,it,Sm,lt,ni,Ne,dt,Vs,Do,Rm,Qs,Um,ai,te,Oo,Bm,oe,Wm,No,Vm,Qm,So,Gm,Hm,Ro,Km,Xm,Uo,Ym,Zm,Jm,Bo,eh,Wo,th,oh,nh,re,Vo,ah,Se,sh,Yn,rh,ih,Gs,lh,dh,ch,ct,ph,pt,si,Re,ut,Hs,Qo,uh,Ks,mh,ri,ne,Go,hh,ce,fh,Ho,gh,_h,Xs,vh,yh,Ys,bh,Lh,wh,Ko,kh,Xo,xh,Th,Mh,A,Yo,$h,Ue,Eh,Zn,qh,zh,Zs,jh,Fh,Ph,mt,Ch,Js,Ih,Ah,er,Dh,Oh,ht,Nh,ft,ii;return m=new le({}),Mt=new le({}),Wt=new W({props:{code:`def normalize_bbox(bbox, width, height):
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
    ]`}}),Vt=new W({props:{code:`from PIL import Image

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
)

width, height = image.size`,highlighted:`<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
)

width, height = image.size`}}),Ht=new le({}),Kt=new W({props:{code:`from transformers import LayoutLMv2FeatureExtractor, LayoutLMv2TokenizerFast, LayoutLMv2Processor

feature_extractor = LayoutLMv2FeatureExtractor()  # apply_ocr is set to True by default
tokenizer = LayoutLMv2TokenizerFast.from_pretrained("microsoft/layoutlmv2-base-uncased")
processor = LayoutLMv2Processor(feature_extractor, tokenizer)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2FeatureExtractor, LayoutLMv2TokenizerFast, LayoutLMv2Processor

feature_extractor = LayoutLMv2FeatureExtractor()  <span class="hljs-comment"># apply_ocr is set to True by default</span>
tokenizer = LayoutLMv2TokenizerFast.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
processor = LayoutLMv2Processor(feature_extractor, tokenizer)`}}),Yt=new W({props:{code:`from transformers import LayoutLMv2Processor
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased")

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
).convert("RGB")
encoding = processor(
    image, return_tensors="pt"
)  # you can also add all tokenizer parameters here such as padding, truncation
print(encoding.keys())
# dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'bbox', 'image'])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
encoding = processor(
    image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
)  <span class="hljs-comment"># you can also add all tokenizer parameters here such as padding, truncation</span>
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),Zt=new W({props:{code:`from transformers import LayoutLMv2Processor
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased", revision="no_ocr")

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
).convert("RGB")
words = ["hello", "world"]
boxes = [[1, 2, 3, 4], [5, 6, 7, 8]]  # make sure to normalize your bounding boxes
encoding = processor(image, words, boxes=boxes, return_tensors="pt")
print(encoding.keys())
# dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'bbox', 'image'])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, revision=<span class="hljs-string">&quot;no_ocr&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
words = [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
boxes = [[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>], [<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]]  <span class="hljs-comment"># make sure to normalize your bounding boxes</span>
encoding = processor(image, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),Jt=new W({props:{code:`from transformers import LayoutLMv2Processor
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased", revision="no_ocr")

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
).convert("RGB")
words = ["hello", "world"]
boxes = [[1, 2, 3, 4], [5, 6, 7, 8]]  # make sure to normalize your bounding boxes
word_labels = [1, 2]
encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors="pt")
print(encoding.keys())
# dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'bbox', 'labels', 'image'])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, revision=<span class="hljs-string">&quot;no_ocr&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
words = [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
boxes = [[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>], [<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]]  <span class="hljs-comment"># make sure to normalize your bounding boxes</span>
word_labels = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]
encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;labels&#x27;, &#x27;image&#x27;])</span>`}}),eo=new W({props:{code:`from transformers import LayoutLMv2Processor
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased")

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
).convert("RGB")
question = "What's his name?"
encoding = processor(image, question, return_tensors="pt")
print(encoding.keys())
# dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'bbox', 'image'])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
question = <span class="hljs-string">&quot;What&#x27;s his name?&quot;</span>
encoding = processor(image, question, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),to=new W({props:{code:`from transformers import LayoutLMv2Processor
from PIL import Image

processor = LayoutLMv2Processor.from_pretrained("microsoft/layoutlmv2-base-uncased", revision="no_ocr")

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
).convert("RGB")
question = "What's his name?"
words = ["hello", "world"]
boxes = [[1, 2, 3, 4], [5, 6, 7, 8]]  # make sure to normalize your bounding boxes
encoding = processor(image, question, words, boxes=boxes, return_tensors="pt")
print(encoding.keys())
# dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'bbox', 'image'])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, revision=<span class="hljs-string">&quot;no_ocr&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
question = <span class="hljs-string">&quot;What&#x27;s his name?&quot;</span>
words = [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
boxes = [[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>], [<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]]  <span class="hljs-comment"># make sure to normalize your bounding boxes</span>
encoding = processor(image, question, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),oo=new le({}),no=new D({props:{name:"class transformers.LayoutLMv2Config",anchor:"transformers.LayoutLMv2Config",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"max_rel_pos",val:" = 128"},{name:"rel_pos_bins",val:" = 32"},{name:"fast_qkv",val:" = True"},{name:"max_rel_2d_pos",val:" = 256"},{name:"rel_2d_pos_bins",val:" = 64"},{name:"convert_sync_batchnorm",val:" = True"},{name:"image_feature_pool_shape",val:" = [7, 7, 256]"},{name:"coordinate_size",val:" = 128"},{name:"shape_size",val:" = 128"},{name:"has_relative_attention_bias",val:" = True"},{name:"has_spatial_attention_bias",val:" = True"},{name:"has_visual_segment_embedding",val:" = False"},{name:"detectron2_config_args",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the LayoutLMv2 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model">LayoutLMv2Model</a> or <code>TFLayoutLMv2Model</code>.`,name:"vocab_size"},{anchor:"transformers.LayoutLMv2Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.LayoutLMv2Config.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.LayoutLMv2Config.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.LayoutLMv2Config.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.LayoutLMv2Config.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.LayoutLMv2Config.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.LayoutLMv2Config.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.LayoutLMv2Config.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.LayoutLMv2Config.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model">LayoutLMv2Model</a> or
<code>TFLayoutLMv2Model</code>.`,name:"type_vocab_size"},{anchor:"transformers.LayoutLMv2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.LayoutLMv2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LayoutLMv2Config.max_2d_position_embeddings",description:`<strong>max_2d_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum value that the 2D position embedding might ever be used with. Typically set this to something
large just in case (e.g., 1024).`,name:"max_2d_position_embeddings"},{anchor:"transformers.LayoutLMv2Config.max_rel_pos",description:`<strong>max_rel_pos</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The maximum number of relative positions to be used in the self-attention mechanism.`,name:"max_rel_pos"},{anchor:"transformers.LayoutLMv2Config.rel_pos_bins",description:`<strong>rel_pos_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of relative position bins to be used in the self-attention mechanism.`,name:"rel_pos_bins"},{anchor:"transformers.LayoutLMv2Config.fast_qkv",description:`<strong>fast_qkv</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a single matrix for the queries, keys, values in the self-attention layers.`,name:"fast_qkv"},{anchor:"transformers.LayoutLMv2Config.max_rel_2d_pos",description:`<strong>max_rel_2d_pos</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
The maximum number of relative 2D positions in the self-attention mechanism.`,name:"max_rel_2d_pos"},{anchor:"transformers.LayoutLMv2Config.rel_2d_pos_bins",description:`<strong>rel_2d_pos_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
The number of 2D relative position bins in the self-attention mechanism.`,name:"rel_2d_pos_bins"},{anchor:"transformers.LayoutLMv2Config.image_feature_pool_shape",description:`<strong>image_feature_pool_shape</strong> (<code>List[int]</code>, <em>optional</em>, defaults to [7, 7, 256]) &#x2014;
The shape of the average-pooled feature map.`,name:"image_feature_pool_shape"},{anchor:"transformers.LayoutLMv2Config.coordinate_size",description:`<strong>coordinate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Dimension of the coordinate embeddings.`,name:"coordinate_size"},{anchor:"transformers.LayoutLMv2Config.shape_size",description:`<strong>shape_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Dimension of the width and height embeddings.`,name:"shape_size"},{anchor:"transformers.LayoutLMv2Config.has_relative_attention_bias",description:`<strong>has_relative_attention_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a relative attention bias in the self-attention mechanism.`,name:"has_relative_attention_bias"},{anchor:"transformers.LayoutLMv2Config.has_spatial_attention_bias",description:`<strong>has_spatial_attention_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a spatial attention bias in the self-attention mechanism.`,name:"has_spatial_attention_bias"},{anchor:"transformers.LayoutLMv2Config.has_visual_segment_embedding",description:`<strong>has_visual_segment_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add visual segment embeddings.`,name:"has_visual_segment_embedding"},{anchor:"transformers.LayoutLMv2Config.detectron2_config_args",description:`<strong>detectron2_config_args</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary containing the configuration arguments of the Detectron2 visual backbone. Refer to <a href="https://github.com/microsoft/unilm/blob/master/layoutlmft/layoutlmft/models/layoutlmv2/detectron2_config.py" rel="nofollow">this
file</a>
for details regarding default values.`,name:"detectron2_config_args"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/configuration_layoutlmv2.py#L34"}}),Ke=new en({props:{anchor:"transformers.LayoutLMv2Config.example",$$slots:{default:[dv]},$$scope:{ctx:j}}}),so=new le({}),ro=new D({props:{name:"class transformers.LayoutLMv2FeatureExtractor",anchor:"transformers.LayoutLMv2FeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"apply_ocr",val:" = True"},{name:"ocr_lang",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2FeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the input to a certain <code>size</code>.`,name:"do_resize"},{anchor:"transformers.LayoutLMv2FeatureExtractor.size",description:`<strong>size</strong> (<code>int</code> or <code>Tuple(int)</code>, <em>optional</em>, defaults to 224) &#x2014;
Resize the input to the given size. If a tuple is provided, it should be (width, height). If only an
integer is provided, then the input will be resized to (size, size). Only has an effect if <code>do_resize</code> is
set to <code>True</code>.`,name:"size"},{anchor:"transformers.LayoutLMv2FeatureExtractor.resample",description:`<strong>resample</strong> (<code>int</code>, <em>optional</em>, defaults to <code>PIL.Image.BILINEAR</code>) &#x2014;
An optional resampling filter. This can be one of <code>PIL.Image.NEAREST</code>, <code>PIL.Image.BOX</code>,
<code>PIL.Image.BILINEAR</code>, <code>PIL.Image.HAMMING</code>, <code>PIL.Image.BICUBIC</code> or <code>PIL.Image.LANCZOS</code>. Only has an effect
if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.LayoutLMv2FeatureExtractor.apply_ocr",description:`<strong>apply_ocr</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply the Tesseract OCR engine to get words + normalized bounding boxes.`,name:"apply_ocr"},{anchor:"transformers.LayoutLMv2FeatureExtractor.ocr_lang",description:`<strong>ocr_lang</strong> (<code>Optional[str]</code>, <em>optional</em>) &#x2014;
The language, specified by its ISO code, to be used by the Tesseract OCR engine. By default, English is
used.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>LayoutLMv2FeatureExtractor uses Google&#x2019;s Tesseract OCR engine under the hood.</p>

					</div>`,name:"ocr_lang"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/feature_extraction_layoutlmv2.py#L82"}}),lo=new D({props:{name:"__call__",anchor:"transformers.LayoutLMv2FeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2FeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.LayoutLMv2FeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17168/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/feature_extraction_layoutlmv2.py#L123",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17168/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
<li><strong>words</strong> \u2014 Optional words as identified by Tesseract OCR (only when <a
  href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"
>LayoutLMv2FeatureExtractor</a> was
initialized with <code>apply_ocr</code> set to <code>True</code>).</li>
<li><strong>boxes</strong> \u2014 Optional bounding boxes as identified by Tesseract OCR, normalized based on the image size
(only when <a
  href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"
>LayoutLMv2FeatureExtractor</a> was initialized with <code>apply_ocr</code> set to <code>True</code>).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17168/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),Ye=new en({props:{anchor:"transformers.LayoutLMv2FeatureExtractor.__call__.example",$$slots:{default:[cv]},$$scope:{ctx:j}}}),co=new le({}),po=new D({props:{name:"class transformers.LayoutLMv2Tokenizer",anchor:"transformers.LayoutLMv2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"model_max_length",val:": int = 512"},{name:"additional_special_tokens",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L198"}}),mo=new D({props:{name:"__call__",anchor:"transformers.LayoutLMv2Tokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Tokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17168/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17168/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17168/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17168/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17168/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters. If left unset or set to
<code>None</code>, this will use the predefined model maximum length if a maximum length is required by one of the
truncation/padding parameters. If the model has no specific maximum input length (like XLNet)
truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17168/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L418"}}),ho=new D({props:{name:"save_vocabulary",anchor:"transformers.LayoutLMv2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L398"}}),fo=new le({}),go=new D({props:{name:"class transformers.LayoutLMv2TokenizerFast",anchor:"transformers.LayoutLMv2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.LayoutLMv2TokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.LayoutLMv2TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.LayoutLMv2TokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.LayoutLMv2TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.LayoutLMv2TokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.LayoutLMv2TokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.LayoutLMv2TokenizerFast.cls_token_box",description:`<strong>cls_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [CLS] token.`,name:"cls_token_box"},{anchor:"transformers.LayoutLMv2TokenizerFast.sep_token_box",description:`<strong>sep_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[1000, 1000, 1000, 1000]</code>) &#x2014;
The bounding box to use for the special [SEP] token.`,name:"sep_token_box"},{anchor:"transformers.LayoutLMv2TokenizerFast.pad_token_box",description:`<strong>pad_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [PAD] token.`,name:"pad_token_box"},{anchor:"transformers.LayoutLMv2TokenizerFast.pad_token_label",description:`<strong>pad_token_label</strong> (<code>int</code>, <em>optional</em>, defaults to -100) &#x2014;
The label to use for padding tokens. Defaults to -100, which is the <code>ignore_index</code> of PyTorch&#x2019;s
CrossEntropyLoss.`,name:"pad_token_label"},{anchor:"transformers.LayoutLMv2TokenizerFast.only_label_first_subword",description:`<strong>only_label_first_subword</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"},{anchor:"transformers.LayoutLMv2TokenizerFast.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see <a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">this
issue</a>).
strip_accents &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original LayoutLMv2).`,name:"tokenize_chinese_chars"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/tokenization_layoutlmv2_fast.py#L70"}}),yo=new D({props:{name:"__call__",anchor:"transformers.LayoutLMv2TokenizerFast.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17168/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17168/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17168/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17168/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17168/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters. If left unset or set to
<code>None</code>, this will use the predefined model maximum length if a maximum length is required by one of the
truncation/padding parameters. If the model has no specific maximum input length (like XLNet)
truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17168/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/tokenization_layoutlmv2_fast.py#L179"}}),bo=new le({}),Lo=new D({props:{name:"class transformers.LayoutLMv2Processor",anchor:"transformers.LayoutLMv2Processor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>LayoutLMv2FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor">LayoutLMv2FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.LayoutLMv2Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>LayoutLMv2Tokenizer</code> or <code>LayoutLMv2TokenizerFast</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a> or <a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast">LayoutLMv2TokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/processing_layoutlmv2.py#L25"}}),wo=new D({props:{name:"__call__",anchor:"transformers.LayoutLMv2Processor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/processing_layoutlmv2.py#L47"}}),To=new le({}),Mo=new D({props:{name:"class transformers.LayoutLMv2Model",anchor:"transformers.LayoutLMv2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17168/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L714"}}),qo=new D({props:{name:"forward",anchor:"transformers.LayoutLMv2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_17168/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17168/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv2Model.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>((batch_size, sequence_length), 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv2Model.forward.image",description:`<strong>image</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code> or <code>detectron.structures.ImageList</code> whose <code>tensors</code> is of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"image"},{anchor:"transformers.LayoutLMv2Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv2Model.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv2Model.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv2Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv2Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv2Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv2Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv2Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17168/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L812",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17168/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
>LayoutLMv2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/pr_17168/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),at=new Di({props:{$$slots:{default:[pv]},$$scope:{ctx:j}}}),st=new en({props:{anchor:"transformers.LayoutLMv2Model.forward.example",$$slots:{default:[uv]},$$scope:{ctx:j}}}),zo=new le({}),jo=new D({props:{name:"class transformers.LayoutLMv2ForSequenceClassification",anchor:"transformers.LayoutLMv2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17168/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L970"}}),Ao=new D({props:{name:"forward",anchor:"transformers.LayoutLMv2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_17168/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17168/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.image",description:`<strong>image</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code> or <code>detectron.structures.ImageList</code> whose <code>tensors</code> is of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"image"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17168/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L984",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17168/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
>LayoutLMv2Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17168/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),it=new Di({props:{$$slots:{default:[mv]},$$scope:{ctx:j}}}),lt=new en({props:{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.example",$$slots:{default:[hv]},$$scope:{ctx:j}}}),Do=new le({}),Oo=new D({props:{name:"class transformers.LayoutLMv2ForTokenClassification",anchor:"transformers.LayoutLMv2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17168/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1151"}}),Vo=new D({props:{name:"forward",anchor:"transformers.LayoutLMv2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_17168/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17168/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.image",description:`<strong>image</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code> or <code>detectron.structures.ImageList</code> whose <code>tensors</code> is of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"image"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17168/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1165",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17168/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
>LayoutLMv2Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17168/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ct=new Di({props:{$$slots:{default:[fv]},$$scope:{ctx:j}}}),pt=new en({props:{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.example",$$slots:{default:[gv]},$$scope:{ctx:j}}}),Qo=new le({}),Go=new D({props:{name:"class transformers.LayoutLMv2ForQuestionAnswering",anchor:"transformers.LayoutLMv2ForQuestionAnswering",parameters:[{name:"config",val:""},{name:"has_visual_segment_embedding",val:" = True"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17168/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1282"}}),Yo=new D({props:{name:"forward",anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_17168/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17168/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.image",description:`<strong>image</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code> or <code>detectron.structures.ImageList</code> whose <code>tensors</code> is of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"image"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_17168/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1296",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17168/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
>LayoutLMv2Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_17168/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mt=new Di({props:{$$slots:{default:[_v]},$$scope:{ctx:j}}}),ht=new en({props:{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.example",$$slots:{default:[vv]},$$scope:{ctx:j}}}),ft=new en({props:{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.example-2",$$slots:{default:[yv]},$$scope:{ctx:j}}}),{c(){h=s("meta"),x=c(),f=s("h1"),g=s("a"),T=s("span"),v(m.$$.fragment),_=c(),O=s("span"),Oi=n("LayoutLMV2"),dr=c(),Te=s("h2"),We=s("a"),ma=s("span"),v(Mt.$$.fragment),Ni=c(),ha=s("span"),Si=n("Overview"),cr=c(),ue=s("p"),Ri=n("The LayoutLMV2 model was proposed in "),$t=s("a"),Ui=n("LayoutLMv2: Multi-modal Pre-training for Visually-Rich Document Understanding"),Bi=n(` by Yang Xu, Yiheng Xu, Tengchao Lv, Lei Cui, Furu Wei, Guoxin Wang, Yijuan Lu,
Dinei Florencio, Cha Zhang, Wanxiang Che, Min Zhang, Lidong Zhou. LayoutLMV2 improves `),on=s("a"),Wi=n("LayoutLM"),Vi=n(` to obtain
state-of-the-art results across several document image understanding benchmarks:`),pr=c(),me=s("ul"),X=s("li"),Qi=n("information extraction from scanned documents: the "),Et=s("a"),Gi=n("FUNSD"),Hi=n(` dataset (a
collection of 199 annotated forms comprising more than 30,000 words), the `),qt=s("a"),Ki=n("CORD"),Xi=n(`
dataset (a collection of 800 receipts for training, 100 for validation and 100 for testing), the `),zt=s("a"),Yi=n("SROIE"),Zi=n(` dataset (a collection of 626 receipts for training and 347 receipts for testing)
and the `),jt=s("a"),Ji=n("Kleister-NDA"),el=n(` dataset (a collection of non-disclosure
agreements from the EDGAR database, including 254 documents for training, 83 documents for validation, and 203
documents for testing).`),tl=c(),Ft=s("li"),ol=n("document image classification: the "),Pt=s("a"),nl=n("RVL-CDIP"),al=n(` dataset (a collection of
400,000 images belonging to one of 16 classes).`),sl=c(),Ct=s("li"),rl=n("document visual question answering: the "),It=s("a"),il=n("DocVQA"),ll=n(` dataset (a collection of 50,000
questions defined on 12,000+ document images).`),ur=c(),nn=s("p"),dl=n("The abstract from the paper is the following:"),mr=c(),an=s("p"),fa=s("em"),cl=n(`Pre-training of text and layout has proved effective in a variety of visually-rich document understanding tasks due to
its effective model architecture and the advantage of large-scale unlabeled scanned/digital-born documents. In this
paper, we present LayoutLMv2 by pre-training text, layout and image in a multi-modal framework, where new model
architectures and pre-training tasks are leveraged. Specifically, LayoutLMv2 not only uses the existing masked
visual-language modeling task but also the new text-image alignment and text-image matching tasks in the pre-training
stage, where cross-modality interaction is better learned. Meanwhile, it also integrates a spatial-aware self-attention
mechanism into the Transformer architecture, so that the model can fully understand the relative positional
relationship among different text blocks. Experiment results show that LayoutLMv2 outperforms strong baselines and
achieves new state-of-the-art results on a wide variety of downstream visually-rich document understanding tasks,
including FUNSD (0.7895 -> 0.8420), CORD (0.9493 -> 0.9601), SROIE (0.9524 -> 0.9781), Kleister-NDA (0.834 -> 0.852),
RVL-CDIP (0.9443 -> 0.9564), and DocVQA (0.7295 -> 0.8672). The pre-trained LayoutLMv2 model is publicly available at
this https URL.`),hr=c(),sn=s("p"),pl=n("Tips:"),fr=c(),V=s("ul"),ga=s("li"),ul=n(`The main difference between LayoutLMv1 and LayoutLMv2 is that the latter incorporates visual embeddings during
pre-training (while LayoutLMv1 only adds visual embeddings during fine-tuning).`),ml=c(),At=s("li"),hl=n(`LayoutLMv2 adds both a relative 1D attention bias as well as a spatial 2D attention bias to the attention scores in
the self-attention layers. Details can be found on page 5 of the `),Dt=s("a"),fl=n("paper"),gl=n("."),_l=c(),Ot=s("li"),vl=n("Demo notebooks on how to use the LayoutLMv2 model on RVL-CDIP, FUNSD, DocVQA, CORD can be found "),Nt=s("a"),yl=n("here"),bl=n("."),Ll=c(),Me=s("li"),wl=n("LayoutLMv2 uses Facebook AI\u2019s "),St=s("a"),kl=n("Detectron2"),xl=n(` package for its visual
backbone. See `),Rt=s("a"),Tl=n("this link"),Ml=n(` for installation
instructions.`),$l=c(),M=s("li"),El=n("In addition to "),_a=s("code"),ql=n("input_ids"),zl=n(", "),rn=s("a"),jl=n("forward()"),Fl=n(` expects 2 additional inputs, namely
`),va=s("code"),Pl=n("image"),Cl=n(" and "),ya=s("code"),Il=n("bbox"),Al=n(". The "),ba=s("code"),Dl=n("image"),Ol=n(` input corresponds to the original document image in which the text
tokens occur. The model expects each document image to be of size 224x224. This means that if you have a batch of
document images, `),La=s("code"),Nl=n("image"),Sl=n(` should be a tensor of shape (batch_size, 3, 224, 224). This can be either a
`),wa=s("code"),Rl=n("torch.Tensor"),Ul=n(" or a "),ka=s("code"),Bl=n("Detectron2.structures.ImageList"),Wl=n(`. You don\u2019t need to normalize the channels, as this is
done by the model. Important to note is that the visual backbone expects BGR channels instead of RGB, as all models
in Detectron2 are pre-trained using the BGR format. The `),xa=s("code"),Vl=n("bbox"),Ql=n(` input are the bounding boxes (i.e. 2D-positions)
of the input text tokens. This is identical to `),ln=s("a"),Gl=n("LayoutLMModel"),Hl=n(`. These can be obtained using an
external OCR engine such as Google\u2019s `),Ut=s("a"),Kl=n("Tesseract"),Xl=n(" (there\u2019s a "),Bt=s("a"),Yl=n(`Python
wrapper`),Zl=n(` available). Each bounding box should be in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1)
represents the position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on
a 0-1000 scale. To normalize, you can use the following function:`),gr=c(),v(Wt.$$.fragment),_r=c(),he=s("p"),Jl=n("Here, "),Ta=s("code"),ed=n("width"),td=n(" and "),Ma=s("code"),od=n("height"),nd=n(` correspond to the width and height of the original document in which the token
occurs (before resizing the image). Those can be obtained using the Python Image Library (PIL) library for example, as
follows:`),vr=c(),v(Vt.$$.fragment),yr=c(),Ve=s("p"),ad=n("However, this model includes a brand new "),dn=s("a"),sd=n("LayoutLMv2Processor"),rd=n(` which can be used to directly
prepare data for the model (including applying OCR under the hood). More information can be found in the \u201CUsage\u201D
section below.`),br=c(),fe=s("ul"),I=s("li"),id=n("Internally, "),cn=s("a"),ld=n("LayoutLMv2Model"),dd=n(" will send the "),$a=s("code"),cd=n("image"),pd=n(` input through its visual backbone to
obtain a lower-resolution feature map, whose shape is equal to the `),Ea=s("code"),ud=n("image_feature_pool_shape"),md=n(` attribute of
`),pn=s("a"),hd=n("LayoutLMv2Config"),fd=n(`. This feature map is then flattened to obtain a sequence of image tokens. As
the size of the feature map is 7x7 by default, one obtains 49 image tokens. These are then concatenated with the text
tokens, and send through the Transformer encoder. This means that the last hidden states of the model will have a
length of 512 + 49 = 561, if you pad the text tokens up to the max length. More generally, the last hidden states
will have a shape of `),qa=s("code"),gd=n("seq_length"),_d=n(" + "),za=s("code"),vd=n("image_feature_pool_shape[0]"),yd=n(` *
`),ja=s("code"),bd=n("config.image_feature_pool_shape[1]"),Ld=n("."),wd=c(),Qt=s("li"),kd=n("When calling "),un=s("a"),xd=n("from_pretrained()"),Td=n(`, a warning will be printed with a long list of
parameter names that are not initialized. This is not a problem, as these parameters are batch normalization
statistics, which are going to have values when fine-tuning on a custom dataset.`),Md=c(),Gt=s("li"),$d=n("If you want to train the model in a distributed environment, make sure to call "),Fa=s("code"),Ed=n("synchronize_batch_norm"),qd=n(` on the
model in order to properly synchronize the batch normalization layers of the visual backbone.`),Lr=c(),Qe=s("p"),zd=n(`In addition, there\u2019s LayoutXLM, which is a multilingual version of LayoutLMv2. More information can be found on
`),mn=s("a"),jd=n("LayoutXLM\u2019s documentation page"),Fd=n("."),wr=c(),$e=s("h2"),Ge=s("a"),Pa=s("span"),v(Ht.$$.fragment),Pd=c(),Ca=s("span"),Cd=n("Usage: LayoutLMv2Processor"),kr=c(),Q=s("p"),Id=n("The easiest way to prepare data for the model is to use "),hn=s("a"),Ad=n("LayoutLMv2Processor"),Dd=n(`, which internally
combines a feature extractor (`),fn=s("a"),Od=n("LayoutLMv2FeatureExtractor"),Nd=n(`) and a tokenizer
(`),gn=s("a"),Sd=n("LayoutLMv2Tokenizer"),Rd=n(" or "),_n=s("a"),Ud=n("LayoutLMv2TokenizerFast"),Bd=n(`). The feature extractor
handles the image modality, while the tokenizer handles the text modality. A processor combines both, which is ideal
for a multi-modal model like LayoutLMv2. Note that you can still use both separately, if you only want to handle one
modality.`),xr=c(),v(Kt.$$.fragment),Tr=c(),E=s("p"),Wd=n("In short, one can provide a document image (and possibly additional data) to "),vn=s("a"),Vd=n("LayoutLMv2Processor"),Qd=n(`,
and it will create the inputs expected by the model. Internally, the processor first uses
`),yn=s("a"),Gd=n("LayoutLMv2FeatureExtractor"),Hd=n(` to apply OCR on the image to get a list of words and normalized
bounding boxes, as well to resize the image to a given size in order to get the `),Ia=s("code"),Kd=n("image"),Xd=n(` input. The words and
normalized bounding boxes are then provided to `),bn=s("a"),Yd=n("LayoutLMv2Tokenizer"),Zd=n(` or
`),Ln=s("a"),Jd=n("LayoutLMv2TokenizerFast"),ec=n(", which converts them to token-level "),Aa=s("code"),tc=n("input_ids"),oc=n(`,
`),Da=s("code"),nc=n("attention_mask"),ac=n(", "),Oa=s("code"),sc=n("token_type_ids"),rc=n(", "),Na=s("code"),ic=n("bbox"),lc=n(`. Optionally, one can provide word labels to the processor,
which are turned into token-level `),Sa=s("code"),dc=n("labels"),cc=n("."),Mr=c(),U=s("p"),wn=s("a"),pc=n("LayoutLMv2Processor"),uc=n(" uses "),Xt=s("a"),mc=n("PyTesseract"),hc=n(`, a Python
wrapper around Google\u2019s Tesseract OCR engine, under the hood. Note that you can still use your own OCR engine of
choice, and provide the words and normalized boxes yourself. This requires initializing
`),kn=s("a"),fc=n("LayoutLMv2FeatureExtractor"),gc=n(" with "),Ra=s("code"),_c=n("apply_ocr"),vc=n(" set to "),Ua=s("code"),yc=n("False"),bc=n("."),$r=c(),xn=s("p"),Lc=n(`In total, there are 5 use cases that are supported by the processor. Below, we list them all. Note that each of these
use cases work for both batched and non-batched inputs (we illustrate them for non-batched inputs).`),Er=c(),Tn=s("p"),Ba=s("strong"),wc=n(`Use case 1: document image classification (training, inference) + token classification (inference), apply_ocr =
True`),qr=c(),Mn=s("p"),kc=n(`This is the simplest case, in which the processor (actually the feature extractor) will perform OCR on the image to get
the words and normalized bounding boxes.`),zr=c(),v(Yt.$$.fragment),jr=c(),$n=s("p"),Wa=s("strong"),xc=n("Use case 2: document image classification (training, inference) + token classification (inference), apply_ocr=False"),Fr=c(),ge=s("p"),Tc=n("In case one wants to do OCR themselves, one can initialize the feature extractor with "),Va=s("code"),Mc=n("apply_ocr"),$c=n(` set to
`),Qa=s("code"),Ec=n("False"),qc=n(`. In that case, one should provide the words and corresponding (normalized) bounding boxes themselves to
the processor.`),Pr=c(),v(Zt.$$.fragment),Cr=c(),En=s("p"),Ga=s("strong"),zc=n("Use case 3: token classification (training), apply_ocr=False"),Ir=c(),G=s("p"),jc=n(`For token classification tasks (such as FUNSD, CORD, SROIE, Kleister-NDA), one can also provide the corresponding word
labels in order to train a model. The processor will then convert these into token-level `),Ha=s("code"),Fc=n("labels"),Pc=n(`. By default, it
will only label the first wordpiece of a word, and label the remaining wordpieces with -100, which is the
`),Ka=s("code"),Cc=n("ignore_index"),Ic=n(` of PyTorch\u2019s CrossEntropyLoss. In case you want all wordpieces of a word to be labeled, you can
initialize the tokenizer with `),Xa=s("code"),Ac=n("only_label_first_subword"),Dc=n(" set to "),Ya=s("code"),Oc=n("False"),Nc=n("."),Ar=c(),v(Jt.$$.fragment),Dr=c(),qn=s("p"),Za=s("strong"),Sc=n("Use case 4: visual question answering (inference), apply_ocr=True"),Or=c(),zn=s("p"),Rc=n(`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. By default, the
processor will apply OCR on the image, and create [CLS] question tokens [SEP] word tokens [SEP].`),Nr=c(),v(eo.$$.fragment),Sr=c(),jn=s("p"),Ja=s("strong"),Uc=n("Use case 5: visual question answering (inference), apply_ocr=False"),Rr=c(),Fn=s("p"),Bc=n(`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. If you want to
perform OCR yourself, you can provide your own words and (normalized) bounding boxes to the processor.`),Ur=c(),v(to.$$.fragment),Br=c(),Ee=s("h2"),He=s("a"),es=s("span"),v(oo.$$.fragment),Wc=c(),ts=s("span"),Vc=n("LayoutLMv2Config"),Wr=c(),Y=s("div"),v(no.$$.fragment),Qc=c(),qe=s("p"),Gc=n("This is the configuration class to store the configuration of a "),Pn=s("a"),Hc=n("LayoutLMv2Model"),Kc=n(`. It is used to instantiate an
LayoutLMv2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv2
`),ao=s("a"),Xc=n("microsoft/layoutlmv2-base-uncased"),Yc=n(" architecture."),Zc=c(),ze=s("p"),Jc=n("Configuration objects inherit from "),Cn=s("a"),ep=n("PretrainedConfig"),tp=n(` and can be used to control the model outputs. Read the
documentation from `),In=s("a"),op=n("PretrainedConfig"),np=n(" for more information."),ap=c(),v(Ke.$$.fragment),Vr=c(),je=s("h2"),Xe=s("a"),os=s("span"),v(so.$$.fragment),sp=c(),ns=s("span"),rp=n("LayoutLMv2FeatureExtractor"),Qr=c(),Z=s("div"),v(ro.$$.fragment),ip=c(),as=s("p"),lp=n(`Constructs a LayoutLMv2 feature extractor. This can be used to resize document images to the same size, as well as
to apply OCR on them in order to get a list of words and normalized bounding boxes.`),dp=c(),io=s("p"),cp=n("This feature extractor inherits from "),ss=s("code"),pp=n("PreTrainedFeatureExtractor()"),up=n(` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),mp=c(),_e=s("div"),v(lo.$$.fragment),hp=c(),rs=s("p"),fp=n("Main method to prepare for the model one or several image(s)."),gp=c(),v(Ye.$$.fragment),Gr=c(),Fe=s("h2"),Ze=s("a"),is=s("span"),v(co.$$.fragment),_p=c(),ls=s("span"),vp=n("LayoutLMv2Tokenizer"),Hr=c(),N=s("div"),v(po.$$.fragment),yp=c(),S=s("p"),bp=n("Construct a LayoutLMv2 tokenizer. Based on WordPiece. "),An=s("a"),Lp=n("LayoutLMv2Tokenizer"),wp=n(` can be used to turn words, word-level
bounding boxes and optional word labels to token-level `),ds=s("code"),kp=n("input_ids"),xp=n(", "),cs=s("code"),Tp=n("attention_mask"),Mp=n(", "),ps=s("code"),$p=n("token_type_ids"),Ep=n(", "),us=s("code"),qp=n("bbox"),zp=n(`, and
optional `),ms=s("code"),jp=n("labels"),Fp=n(" (for token classification)."),Pp=c(),uo=s("p"),Cp=n("This tokenizer inherits from "),Dn=s("a"),Ip=n("PreTrainedTokenizer"),Ap=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Dp=c(),On=s("p"),Nn=s("a"),Op=n("LayoutLMv2Tokenizer"),Np=n(` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),Sp=c(),Je=s("div"),v(mo.$$.fragment),Rp=c(),hs=s("p"),Up=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Bp=c(),Sn=s("div"),v(ho.$$.fragment),Kr=c(),Pe=s("h2"),et=s("a"),fs=s("span"),v(fo.$$.fragment),Wp=c(),gs=s("span"),Vp=n("LayoutLMv2TokenizerFast"),Xr=c(),J=s("div"),v(go.$$.fragment),Qp=c(),_o=s("p"),Gp=n("Construct a \u201Cfast\u201D LayoutLMv2 tokenizer (backed by HuggingFace\u2019s "),_s=s("em"),Hp=n("tokenizers"),Kp=n(" library). Based on WordPiece."),Xp=c(),vo=s("p"),Yp=n("This tokenizer inherits from "),Rn=s("a"),Zp=n("PreTrainedTokenizerFast"),Jp=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),eu=c(),tt=s("div"),v(yo.$$.fragment),tu=c(),vs=s("p"),ou=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Yr=c(),Ce=s("h2"),ot=s("a"),ys=s("span"),v(bo.$$.fragment),nu=c(),bs=s("span"),au=n("LayoutLMv2Processor"),Zr=c(),B=s("div"),v(Lo.$$.fragment),su=c(),Ls=s("p"),ru=n(`Constructs a LayoutLMv2 processor which combines a LayoutLMv2 feature extractor and a LayoutLMv2 tokenizer into a
single processor.`),iu=c(),Un=s("p"),Bn=s("a"),lu=n("LayoutLMv2Processor"),du=n(" offers all the functionalities you need to prepare data for the model."),cu=c(),F=s("p"),pu=n("It first uses "),Wn=s("a"),uu=n("LayoutLMv2FeatureExtractor"),mu=n(` to resize document images to a fixed size, and optionally applies OCR
to get words and normalized bounding boxes. These are then provided to `),Vn=s("a"),hu=n("LayoutLMv2Tokenizer"),fu=n(` or
`),Qn=s("a"),gu=n("LayoutLMv2TokenizerFast"),_u=n(", which turns the words and bounding boxes into token-level "),ws=s("code"),vu=n("input_ids"),yu=n(`,
`),ks=s("code"),bu=n("attention_mask"),Lu=n(", "),xs=s("code"),wu=n("token_type_ids"),ku=n(", "),Ts=s("code"),xu=n("bbox"),Tu=n(". Optionally, one can provide integer "),Ms=s("code"),Mu=n("word_labels"),$u=n(`, which are turned
into token-level `),$s=s("code"),Eu=n("labels"),qu=n(" for token classification tasks (such as FUNSD, CORD)."),zu=c(),ve=s("div"),v(wo.$$.fragment),ju=c(),$=s("p"),Fu=n("This method first forwards the "),Es=s("code"),Pu=n("images"),Cu=n(" argument to "),ko=s("a"),qs=s("strong"),Iu=n("call"),Au=n("()"),Du=n(`. In case
`),Gn=s("a"),Ou=n("LayoutLMv2FeatureExtractor"),Nu=n(" was initialized with "),zs=s("code"),Su=n("apply_ocr"),Ru=n(" set to "),js=s("code"),Uu=n("True"),Bu=n(`, it passes the obtained words and
bounding boxes along with the additional arguments to `),xo=s("a"),Fs=s("strong"),Wu=n("call"),Vu=n("()"),Qu=n(` and returns the output,
together with resized `),Ps=s("code"),Gu=n("images"),Hu=n(". In case "),Hn=s("a"),Ku=n("LayoutLMv2FeatureExtractor"),Xu=n(" was initialized with "),Cs=s("code"),Yu=n("apply_ocr"),Zu=n(` set to
`),Is=s("code"),Ju=n("False"),em=n(", it passes the words ("),As=s("code"),tm=n("text"),om=n("/"),Ds=s("code"),nm=n("text_pair`) and `boxes` specified by the user along with the additional arguments to [__call__()](/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__) and returns the output, together with resized `images"),am=n("."),sm=c(),Os=s("p"),rm=n("Please refer to the docstring of the above two methods for more information."),Jr=c(),Ie=s("h2"),nt=s("a"),Ns=s("span"),v(To.$$.fragment),im=c(),Ss=s("span"),lm=n("LayoutLMv2Model"),ei=c(),de=s("div"),v(Mo.$$.fragment),dm=c(),$o=s("p"),cm=n(`The bare LayoutLMv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Eo=s("a"),pm=n("torch.nn.Module"),um=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),mm=c(),ae=s("div"),v(qo.$$.fragment),hm=c(),Ae=s("p"),fm=n("The "),Kn=s("a"),gm=n("LayoutLMv2Model"),_m=n(" forward method, overrides the "),Rs=s("code"),vm=n("__call__"),ym=n(" special method."),bm=c(),v(at.$$.fragment),Lm=c(),v(st.$$.fragment),ti=c(),De=s("h2"),rt=s("a"),Us=s("span"),v(zo.$$.fragment),wm=c(),Bs=s("span"),km=n("LayoutLMv2ForSequenceClassification"),oi=c(),ee=s("div"),v(jo.$$.fragment),xm=c(),Fo=s("p"),Tm=n(`LayoutLMv2 Model with a sequence classification head on top (a linear layer on top of the concatenation of the
final hidden state of the [CLS] token, average-pooled initial visual embeddings and average-pooled final visual
embeddings, e.g. for document image classification tasks such as the
`),Po=s("a"),Mm=n("RVL-CDIP"),$m=n(" dataset."),Em=c(),Co=s("p"),qm=n("This model is a PyTorch "),Io=s("a"),zm=n("torch.nn.Module"),jm=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Fm=c(),se=s("div"),v(Ao.$$.fragment),Pm=c(),Oe=s("p"),Cm=n("The "),Xn=s("a"),Im=n("LayoutLMv2ForSequenceClassification"),Am=n(" forward method, overrides the "),Ws=s("code"),Dm=n("__call__"),Om=n(" special method."),Nm=c(),v(it.$$.fragment),Sm=c(),v(lt.$$.fragment),ni=c(),Ne=s("h2"),dt=s("a"),Vs=s("span"),v(Do.$$.fragment),Rm=c(),Qs=s("span"),Um=n("LayoutLMv2ForTokenClassification"),ai=c(),te=s("div"),v(Oo.$$.fragment),Bm=c(),oe=s("p"),Wm=n(`LayoutLMv2 Model with a token classification head on top (a linear layer on top of the text part of the hidden
states) e.g. for sequence labeling (information extraction) tasks such as
`),No=s("a"),Vm=n("FUNSD"),Qm=n(", "),So=s("a"),Gm=n("SROIE"),Hm=n(`,
`),Ro=s("a"),Km=n("CORD"),Xm=n(" and "),Uo=s("a"),Ym=n("Kleister-NDA"),Zm=n("."),Jm=c(),Bo=s("p"),eh=n("This model is a PyTorch "),Wo=s("a"),th=n("torch.nn.Module"),oh=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),nh=c(),re=s("div"),v(Vo.$$.fragment),ah=c(),Se=s("p"),sh=n("The "),Yn=s("a"),rh=n("LayoutLMv2ForTokenClassification"),ih=n(" forward method, overrides the "),Gs=s("code"),lh=n("__call__"),dh=n(" special method."),ch=c(),v(ct.$$.fragment),ph=c(),v(pt.$$.fragment),si=c(),Re=s("h2"),ut=s("a"),Hs=s("span"),v(Qo.$$.fragment),uh=c(),Ks=s("span"),mh=n("LayoutLMv2ForQuestionAnswering"),ri=c(),ne=s("div"),v(Go.$$.fragment),hh=c(),ce=s("p"),fh=n(`LayoutLMv2 Model with a span classification head on top for extractive question-answering tasks such as
`),Ho=s("a"),gh=n("DocVQA"),_h=n(` (a linear layer on top of the text part of the hidden-states output to
compute `),Xs=s("code"),vh=n("span start logits"),yh=n(" and "),Ys=s("code"),bh=n("span end logits"),Lh=n(")."),wh=c(),Ko=s("p"),kh=n("This model is a PyTorch "),Xo=s("a"),xh=n("torch.nn.Module"),Th=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Mh=c(),A=s("div"),v(Yo.$$.fragment),$h=c(),Ue=s("p"),Eh=n("The "),Zn=s("a"),qh=n("LayoutLMv2ForQuestionAnswering"),zh=n(" forward method, overrides the "),Zs=s("code"),jh=n("__call__"),Fh=n(" special method."),Ph=c(),v(mt.$$.fragment),Ch=c(),Js=s("p"),Ih=n("Example:"),Ah=c(),er=s("p"),Dh=n(`In this example below, we give the LayoutLMv2 model an image (of texts) and ask it a question. It will give us
a prediction of what it thinks the answer is (the span of the answer within the texts parsed from the image).`),Oh=c(),v(ht.$$.fragment),Nh=c(),v(ft.$$.fragment),this.h()},l(t){const d=iv('[data-svelte="svelte-1phssyn"]',document.head);h=r(d,"META",{name:!0,content:!0}),d.forEach(o),x=p(t),f=r(t,"H1",{class:!0});var Zo=i(f);g=r(Zo,"A",{id:!0,class:!0,href:!0});var tr=i(g);T=r(tr,"SPAN",{});var or=i(T);y(m.$$.fragment,or),or.forEach(o),tr.forEach(o),_=p(Zo),O=r(Zo,"SPAN",{});var nr=i(O);Oi=a(nr,"LayoutLMV2"),nr.forEach(o),Zo.forEach(o),dr=p(t),Te=r(t,"H2",{class:!0});var Jo=i(Te);We=r(Jo,"A",{id:!0,class:!0,href:!0});var ar=i(We);ma=r(ar,"SPAN",{});var sr=i(ma);y(Mt.$$.fragment,sr),sr.forEach(o),ar.forEach(o),Ni=p(Jo),ha=r(Jo,"SPAN",{});var rr=i(ha);Si=a(rr,"Overview"),rr.forEach(o),Jo.forEach(o),cr=p(t),ue=r(t,"P",{});var Be=i(ue);Ri=a(Be,"The LayoutLMV2 model was proposed in "),$t=r(Be,"A",{href:!0,rel:!0});var ir=i($t);Ui=a(ir,"LayoutLMv2: Multi-modal Pre-training for Visually-Rich Document Understanding"),ir.forEach(o),Bi=a(Be,` by Yang Xu, Yiheng Xu, Tengchao Lv, Lei Cui, Furu Wei, Guoxin Wang, Yijuan Lu,
Dinei Florencio, Cha Zhang, Wanxiang Che, Min Zhang, Lidong Zhou. LayoutLMV2 improves `),on=r(Be,"A",{href:!0});var lr=i(on);Wi=a(lr,"LayoutLM"),lr.forEach(o),Vi=a(Be,` to obtain
state-of-the-art results across several document image understanding benchmarks:`),Be.forEach(o),pr=p(t),me=r(t,"UL",{});var Jn=i(me);X=r(Jn,"LI",{});var ye=i(X);Qi=a(ye,"information extraction from scanned documents: the "),Et=r(ye,"A",{href:!0,rel:!0});var Wh=i(Et);Gi=a(Wh,"FUNSD"),Wh.forEach(o),Hi=a(ye,` dataset (a
collection of 199 annotated forms comprising more than 30,000 words), the `),qt=r(ye,"A",{href:!0,rel:!0});var Vh=i(qt);Ki=a(Vh,"CORD"),Vh.forEach(o),Xi=a(ye,`
dataset (a collection of 800 receipts for training, 100 for validation and 100 for testing), the `),zt=r(ye,"A",{href:!0,rel:!0});var Qh=i(zt);Yi=a(Qh,"SROIE"),Qh.forEach(o),Zi=a(ye,` dataset (a collection of 626 receipts for training and 347 receipts for testing)
and the `),jt=r(ye,"A",{href:!0,rel:!0});var Gh=i(jt);Ji=a(Gh,"Kleister-NDA"),Gh.forEach(o),el=a(ye,` dataset (a collection of non-disclosure
agreements from the EDGAR database, including 254 documents for training, 83 documents for validation, and 203
documents for testing).`),ye.forEach(o),tl=p(Jn),Ft=r(Jn,"LI",{});var li=i(Ft);ol=a(li,"document image classification: the "),Pt=r(li,"A",{href:!0,rel:!0});var Hh=i(Pt);nl=a(Hh,"RVL-CDIP"),Hh.forEach(o),al=a(li,` dataset (a collection of
400,000 images belonging to one of 16 classes).`),li.forEach(o),sl=p(Jn),Ct=r(Jn,"LI",{});var di=i(Ct);rl=a(di,"document visual question answering: the "),It=r(di,"A",{href:!0,rel:!0});var Kh=i(It);il=a(Kh,"DocVQA"),Kh.forEach(o),ll=a(di,` dataset (a collection of 50,000
questions defined on 12,000+ document images).`),di.forEach(o),Jn.forEach(o),ur=p(t),nn=r(t,"P",{});var Xh=i(nn);dl=a(Xh,"The abstract from the paper is the following:"),Xh.forEach(o),mr=p(t),an=r(t,"P",{});var Yh=i(an);fa=r(Yh,"EM",{});var Zh=i(fa);cl=a(Zh,`Pre-training of text and layout has proved effective in a variety of visually-rich document understanding tasks due to
its effective model architecture and the advantage of large-scale unlabeled scanned/digital-born documents. In this
paper, we present LayoutLMv2 by pre-training text, layout and image in a multi-modal framework, where new model
architectures and pre-training tasks are leveraged. Specifically, LayoutLMv2 not only uses the existing masked
visual-language modeling task but also the new text-image alignment and text-image matching tasks in the pre-training
stage, where cross-modality interaction is better learned. Meanwhile, it also integrates a spatial-aware self-attention
mechanism into the Transformer architecture, so that the model can fully understand the relative positional
relationship among different text blocks. Experiment results show that LayoutLMv2 outperforms strong baselines and
achieves new state-of-the-art results on a wide variety of downstream visually-rich document understanding tasks,
including FUNSD (0.7895 -> 0.8420), CORD (0.9493 -> 0.9601), SROIE (0.9524 -> 0.9781), Kleister-NDA (0.834 -> 0.852),
RVL-CDIP (0.9443 -> 0.9564), and DocVQA (0.7295 -> 0.8672). The pre-trained LayoutLMv2 model is publicly available at
this https URL.`),Zh.forEach(o),Yh.forEach(o),hr=p(t),sn=r(t,"P",{});var Jh=i(sn);pl=a(Jh,"Tips:"),Jh.forEach(o),fr=p(t),V=r(t,"UL",{});var be=i(V);ga=r(be,"LI",{});var ef=i(ga);ul=a(ef,`The main difference between LayoutLMv1 and LayoutLMv2 is that the latter incorporates visual embeddings during
pre-training (while LayoutLMv1 only adds visual embeddings during fine-tuning).`),ef.forEach(o),ml=p(be),At=r(be,"LI",{});var ci=i(At);hl=a(ci,`LayoutLMv2 adds both a relative 1D attention bias as well as a spatial 2D attention bias to the attention scores in
the self-attention layers. Details can be found on page 5 of the `),Dt=r(ci,"A",{href:!0,rel:!0});var tf=i(Dt);fl=a(tf,"paper"),tf.forEach(o),gl=a(ci,"."),ci.forEach(o),_l=p(be),Ot=r(be,"LI",{});var pi=i(Ot);vl=a(pi,"Demo notebooks on how to use the LayoutLMv2 model on RVL-CDIP, FUNSD, DocVQA, CORD can be found "),Nt=r(pi,"A",{href:!0,rel:!0});var of=i(Nt);yl=a(of,"here"),of.forEach(o),bl=a(pi,"."),pi.forEach(o),Ll=p(be),Me=r(be,"LI",{});var ea=i(Me);wl=a(ea,"LayoutLMv2 uses Facebook AI\u2019s "),St=r(ea,"A",{href:!0,rel:!0});var nf=i(St);kl=a(nf,"Detectron2"),nf.forEach(o),xl=a(ea,` package for its visual
backbone. See `),Rt=r(ea,"A",{href:!0,rel:!0});var af=i(Rt);Tl=a(af,"this link"),af.forEach(o),Ml=a(ea,` for installation
instructions.`),ea.forEach(o),$l=p(be),M=r(be,"LI",{});var q=i(M);El=a(q,"In addition to "),_a=r(q,"CODE",{});var sf=i(_a);ql=a(sf,"input_ids"),sf.forEach(o),zl=a(q,", "),rn=r(q,"A",{href:!0});var rf=i(rn);jl=a(rf,"forward()"),rf.forEach(o),Fl=a(q,` expects 2 additional inputs, namely
`),va=r(q,"CODE",{});var lf=i(va);Pl=a(lf,"image"),lf.forEach(o),Cl=a(q," and "),ya=r(q,"CODE",{});var df=i(ya);Il=a(df,"bbox"),df.forEach(o),Al=a(q,". The "),ba=r(q,"CODE",{});var cf=i(ba);Dl=a(cf,"image"),cf.forEach(o),Ol=a(q,` input corresponds to the original document image in which the text
tokens occur. The model expects each document image to be of size 224x224. This means that if you have a batch of
document images, `),La=r(q,"CODE",{});var pf=i(La);Nl=a(pf,"image"),pf.forEach(o),Sl=a(q,` should be a tensor of shape (batch_size, 3, 224, 224). This can be either a
`),wa=r(q,"CODE",{});var uf=i(wa);Rl=a(uf,"torch.Tensor"),uf.forEach(o),Ul=a(q," or a "),ka=r(q,"CODE",{});var mf=i(ka);Bl=a(mf,"Detectron2.structures.ImageList"),mf.forEach(o),Wl=a(q,`. You don\u2019t need to normalize the channels, as this is
done by the model. Important to note is that the visual backbone expects BGR channels instead of RGB, as all models
in Detectron2 are pre-trained using the BGR format. The `),xa=r(q,"CODE",{});var hf=i(xa);Vl=a(hf,"bbox"),hf.forEach(o),Ql=a(q,` input are the bounding boxes (i.e. 2D-positions)
of the input text tokens. This is identical to `),ln=r(q,"A",{href:!0});var ff=i(ln);Gl=a(ff,"LayoutLMModel"),ff.forEach(o),Hl=a(q,`. These can be obtained using an
external OCR engine such as Google\u2019s `),Ut=r(q,"A",{href:!0,rel:!0});var gf=i(Ut);Kl=a(gf,"Tesseract"),gf.forEach(o),Xl=a(q," (there\u2019s a "),Bt=r(q,"A",{href:!0,rel:!0});var _f=i(Bt);Yl=a(_f,`Python
wrapper`),_f.forEach(o),Zl=a(q,` available). Each bounding box should be in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1)
represents the position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on
a 0-1000 scale. To normalize, you can use the following function:`),q.forEach(o),be.forEach(o),gr=p(t),y(Wt.$$.fragment,t),_r=p(t),he=r(t,"P",{});var ta=i(he);Jl=a(ta,"Here, "),Ta=r(ta,"CODE",{});var vf=i(Ta);ed=a(vf,"width"),vf.forEach(o),td=a(ta," and "),Ma=r(ta,"CODE",{});var yf=i(Ma);od=a(yf,"height"),yf.forEach(o),nd=a(ta,` correspond to the width and height of the original document in which the token
occurs (before resizing the image). Those can be obtained using the Python Image Library (PIL) library for example, as
follows:`),ta.forEach(o),vr=p(t),y(Vt.$$.fragment,t),yr=p(t),Ve=r(t,"P",{});var ui=i(Ve);ad=a(ui,"However, this model includes a brand new "),dn=r(ui,"A",{href:!0});var bf=i(dn);sd=a(bf,"LayoutLMv2Processor"),bf.forEach(o),rd=a(ui,` which can be used to directly
prepare data for the model (including applying OCR under the hood). More information can be found in the \u201CUsage\u201D
section below.`),ui.forEach(o),br=p(t),fe=r(t,"UL",{});var oa=i(fe);I=r(oa,"LI",{});var R=i(I);id=a(R,"Internally, "),cn=r(R,"A",{href:!0});var Lf=i(cn);ld=a(Lf,"LayoutLMv2Model"),Lf.forEach(o),dd=a(R," will send the "),$a=r(R,"CODE",{});var wf=i($a);cd=a(wf,"image"),wf.forEach(o),pd=a(R,` input through its visual backbone to
obtain a lower-resolution feature map, whose shape is equal to the `),Ea=r(R,"CODE",{});var kf=i(Ea);ud=a(kf,"image_feature_pool_shape"),kf.forEach(o),md=a(R,` attribute of
`),pn=r(R,"A",{href:!0});var xf=i(pn);hd=a(xf,"LayoutLMv2Config"),xf.forEach(o),fd=a(R,`. This feature map is then flattened to obtain a sequence of image tokens. As
the size of the feature map is 7x7 by default, one obtains 49 image tokens. These are then concatenated with the text
tokens, and send through the Transformer encoder. This means that the last hidden states of the model will have a
length of 512 + 49 = 561, if you pad the text tokens up to the max length. More generally, the last hidden states
will have a shape of `),qa=r(R,"CODE",{});var Tf=i(qa);gd=a(Tf,"seq_length"),Tf.forEach(o),_d=a(R," + "),za=r(R,"CODE",{});var Mf=i(za);vd=a(Mf,"image_feature_pool_shape[0]"),Mf.forEach(o),yd=a(R,` *
`),ja=r(R,"CODE",{});var $f=i(ja);bd=a($f,"config.image_feature_pool_shape[1]"),$f.forEach(o),Ld=a(R,"."),R.forEach(o),wd=p(oa),Qt=r(oa,"LI",{});var mi=i(Qt);kd=a(mi,"When calling "),un=r(mi,"A",{href:!0});var Ef=i(un);xd=a(Ef,"from_pretrained()"),Ef.forEach(o),Td=a(mi,`, a warning will be printed with a long list of
parameter names that are not initialized. This is not a problem, as these parameters are batch normalization
statistics, which are going to have values when fine-tuning on a custom dataset.`),mi.forEach(o),Md=p(oa),Gt=r(oa,"LI",{});var hi=i(Gt);$d=a(hi,"If you want to train the model in a distributed environment, make sure to call "),Fa=r(hi,"CODE",{});var qf=i(Fa);Ed=a(qf,"synchronize_batch_norm"),qf.forEach(o),qd=a(hi,` on the
model in order to properly synchronize the batch normalization layers of the visual backbone.`),hi.forEach(o),oa.forEach(o),Lr=p(t),Qe=r(t,"P",{});var fi=i(Qe);zd=a(fi,`In addition, there\u2019s LayoutXLM, which is a multilingual version of LayoutLMv2. More information can be found on
`),mn=r(fi,"A",{href:!0});var zf=i(mn);jd=a(zf,"LayoutXLM\u2019s documentation page"),zf.forEach(o),Fd=a(fi,"."),fi.forEach(o),wr=p(t),$e=r(t,"H2",{class:!0});var gi=i($e);Ge=r(gi,"A",{id:!0,class:!0,href:!0});var jf=i(Ge);Pa=r(jf,"SPAN",{});var Ff=i(Pa);y(Ht.$$.fragment,Ff),Ff.forEach(o),jf.forEach(o),Pd=p(gi),Ca=r(gi,"SPAN",{});var Pf=i(Ca);Cd=a(Pf,"Usage: LayoutLMv2Processor"),Pf.forEach(o),gi.forEach(o),kr=p(t),Q=r(t,"P",{});var Le=i(Q);Id=a(Le,"The easiest way to prepare data for the model is to use "),hn=r(Le,"A",{href:!0});var Cf=i(hn);Ad=a(Cf,"LayoutLMv2Processor"),Cf.forEach(o),Dd=a(Le,`, which internally
combines a feature extractor (`),fn=r(Le,"A",{href:!0});var If=i(fn);Od=a(If,"LayoutLMv2FeatureExtractor"),If.forEach(o),Nd=a(Le,`) and a tokenizer
(`),gn=r(Le,"A",{href:!0});var Af=i(gn);Sd=a(Af,"LayoutLMv2Tokenizer"),Af.forEach(o),Rd=a(Le," or "),_n=r(Le,"A",{href:!0});var Df=i(_n);Ud=a(Df,"LayoutLMv2TokenizerFast"),Df.forEach(o),Bd=a(Le,`). The feature extractor
handles the image modality, while the tokenizer handles the text modality. A processor combines both, which is ideal
for a multi-modal model like LayoutLMv2. Note that you can still use both separately, if you only want to handle one
modality.`),Le.forEach(o),xr=p(t),y(Kt.$$.fragment,t),Tr=p(t),E=r(t,"P",{});var P=i(E);Wd=a(P,"In short, one can provide a document image (and possibly additional data) to "),vn=r(P,"A",{href:!0});var Of=i(vn);Vd=a(Of,"LayoutLMv2Processor"),Of.forEach(o),Qd=a(P,`,
and it will create the inputs expected by the model. Internally, the processor first uses
`),yn=r(P,"A",{href:!0});var Nf=i(yn);Gd=a(Nf,"LayoutLMv2FeatureExtractor"),Nf.forEach(o),Hd=a(P,` to apply OCR on the image to get a list of words and normalized
bounding boxes, as well to resize the image to a given size in order to get the `),Ia=r(P,"CODE",{});var Sf=i(Ia);Kd=a(Sf,"image"),Sf.forEach(o),Xd=a(P,` input. The words and
normalized bounding boxes are then provided to `),bn=r(P,"A",{href:!0});var Rf=i(bn);Yd=a(Rf,"LayoutLMv2Tokenizer"),Rf.forEach(o),Zd=a(P,` or
`),Ln=r(P,"A",{href:!0});var Uf=i(Ln);Jd=a(Uf,"LayoutLMv2TokenizerFast"),Uf.forEach(o),ec=a(P,", which converts them to token-level "),Aa=r(P,"CODE",{});var Bf=i(Aa);tc=a(Bf,"input_ids"),Bf.forEach(o),oc=a(P,`,
`),Da=r(P,"CODE",{});var Wf=i(Da);nc=a(Wf,"attention_mask"),Wf.forEach(o),ac=a(P,", "),Oa=r(P,"CODE",{});var Vf=i(Oa);sc=a(Vf,"token_type_ids"),Vf.forEach(o),rc=a(P,", "),Na=r(P,"CODE",{});var Qf=i(Na);ic=a(Qf,"bbox"),Qf.forEach(o),lc=a(P,`. Optionally, one can provide word labels to the processor,
which are turned into token-level `),Sa=r(P,"CODE",{});var Gf=i(Sa);dc=a(Gf,"labels"),Gf.forEach(o),cc=a(P,"."),P.forEach(o),Mr=p(t),U=r(t,"P",{});var pe=i(U);wn=r(pe,"A",{href:!0});var Hf=i(wn);pc=a(Hf,"LayoutLMv2Processor"),Hf.forEach(o),uc=a(pe," uses "),Xt=r(pe,"A",{href:!0,rel:!0});var Kf=i(Xt);mc=a(Kf,"PyTesseract"),Kf.forEach(o),hc=a(pe,`, a Python
wrapper around Google\u2019s Tesseract OCR engine, under the hood. Note that you can still use your own OCR engine of
choice, and provide the words and normalized boxes yourself. This requires initializing
`),kn=r(pe,"A",{href:!0});var Xf=i(kn);fc=a(Xf,"LayoutLMv2FeatureExtractor"),Xf.forEach(o),gc=a(pe," with "),Ra=r(pe,"CODE",{});var Yf=i(Ra);_c=a(Yf,"apply_ocr"),Yf.forEach(o),vc=a(pe," set to "),Ua=r(pe,"CODE",{});var Zf=i(Ua);yc=a(Zf,"False"),Zf.forEach(o),bc=a(pe,"."),pe.forEach(o),$r=p(t),xn=r(t,"P",{});var Jf=i(xn);Lc=a(Jf,`In total, there are 5 use cases that are supported by the processor. Below, we list them all. Note that each of these
use cases work for both batched and non-batched inputs (we illustrate them for non-batched inputs).`),Jf.forEach(o),Er=p(t),Tn=r(t,"P",{});var eg=i(Tn);Ba=r(eg,"STRONG",{});var tg=i(Ba);wc=a(tg,`Use case 1: document image classification (training, inference) + token classification (inference), apply_ocr =
True`),tg.forEach(o),eg.forEach(o),qr=p(t),Mn=r(t,"P",{});var og=i(Mn);kc=a(og,`This is the simplest case, in which the processor (actually the feature extractor) will perform OCR on the image to get
the words and normalized bounding boxes.`),og.forEach(o),zr=p(t),y(Yt.$$.fragment,t),jr=p(t),$n=r(t,"P",{});var ng=i($n);Wa=r(ng,"STRONG",{});var ag=i(Wa);xc=a(ag,"Use case 2: document image classification (training, inference) + token classification (inference), apply_ocr=False"),ag.forEach(o),ng.forEach(o),Fr=p(t),ge=r(t,"P",{});var na=i(ge);Tc=a(na,"In case one wants to do OCR themselves, one can initialize the feature extractor with "),Va=r(na,"CODE",{});var sg=i(Va);Mc=a(sg,"apply_ocr"),sg.forEach(o),$c=a(na,` set to
`),Qa=r(na,"CODE",{});var rg=i(Qa);Ec=a(rg,"False"),rg.forEach(o),qc=a(na,`. In that case, one should provide the words and corresponding (normalized) bounding boxes themselves to
the processor.`),na.forEach(o),Pr=p(t),y(Zt.$$.fragment,t),Cr=p(t),En=r(t,"P",{});var ig=i(En);Ga=r(ig,"STRONG",{});var lg=i(Ga);zc=a(lg,"Use case 3: token classification (training), apply_ocr=False"),lg.forEach(o),ig.forEach(o),Ir=p(t),G=r(t,"P",{});var we=i(G);jc=a(we,`For token classification tasks (such as FUNSD, CORD, SROIE, Kleister-NDA), one can also provide the corresponding word
labels in order to train a model. The processor will then convert these into token-level `),Ha=r(we,"CODE",{});var dg=i(Ha);Fc=a(dg,"labels"),dg.forEach(o),Pc=a(we,`. By default, it
will only label the first wordpiece of a word, and label the remaining wordpieces with -100, which is the
`),Ka=r(we,"CODE",{});var cg=i(Ka);Cc=a(cg,"ignore_index"),cg.forEach(o),Ic=a(we,` of PyTorch\u2019s CrossEntropyLoss. In case you want all wordpieces of a word to be labeled, you can
initialize the tokenizer with `),Xa=r(we,"CODE",{});var pg=i(Xa);Ac=a(pg,"only_label_first_subword"),pg.forEach(o),Dc=a(we," set to "),Ya=r(we,"CODE",{});var ug=i(Ya);Oc=a(ug,"False"),ug.forEach(o),Nc=a(we,"."),we.forEach(o),Ar=p(t),y(Jt.$$.fragment,t),Dr=p(t),qn=r(t,"P",{});var mg=i(qn);Za=r(mg,"STRONG",{});var hg=i(Za);Sc=a(hg,"Use case 4: visual question answering (inference), apply_ocr=True"),hg.forEach(o),mg.forEach(o),Or=p(t),zn=r(t,"P",{});var fg=i(zn);Rc=a(fg,`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. By default, the
processor will apply OCR on the image, and create [CLS] question tokens [SEP] word tokens [SEP].`),fg.forEach(o),Nr=p(t),y(eo.$$.fragment,t),Sr=p(t),jn=r(t,"P",{});var gg=i(jn);Ja=r(gg,"STRONG",{});var _g=i(Ja);Uc=a(_g,"Use case 5: visual question answering (inference), apply_ocr=False"),_g.forEach(o),gg.forEach(o),Rr=p(t),Fn=r(t,"P",{});var vg=i(Fn);Bc=a(vg,`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. If you want to
perform OCR yourself, you can provide your own words and (normalized) bounding boxes to the processor.`),vg.forEach(o),Ur=p(t),y(to.$$.fragment,t),Br=p(t),Ee=r(t,"H2",{class:!0});var _i=i(Ee);He=r(_i,"A",{id:!0,class:!0,href:!0});var yg=i(He);es=r(yg,"SPAN",{});var bg=i(es);y(oo.$$.fragment,bg),bg.forEach(o),yg.forEach(o),Wc=p(_i),ts=r(_i,"SPAN",{});var Lg=i(ts);Vc=a(Lg,"LayoutLMv2Config"),Lg.forEach(o),_i.forEach(o),Wr=p(t),Y=r(t,"DIV",{class:!0});var gt=i(Y);y(no.$$.fragment,gt),Qc=p(gt),qe=r(gt,"P",{});var aa=i(qe);Gc=a(aa,"This is the configuration class to store the configuration of a "),Pn=r(aa,"A",{href:!0});var wg=i(Pn);Hc=a(wg,"LayoutLMv2Model"),wg.forEach(o),Kc=a(aa,`. It is used to instantiate an
LayoutLMv2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv2
`),ao=r(aa,"A",{href:!0,rel:!0});var kg=i(ao);Xc=a(kg,"microsoft/layoutlmv2-base-uncased"),kg.forEach(o),Yc=a(aa," architecture."),aa.forEach(o),Zc=p(gt),ze=r(gt,"P",{});var sa=i(ze);Jc=a(sa,"Configuration objects inherit from "),Cn=r(sa,"A",{href:!0});var xg=i(Cn);ep=a(xg,"PretrainedConfig"),xg.forEach(o),tp=a(sa,` and can be used to control the model outputs. Read the
documentation from `),In=r(sa,"A",{href:!0});var Tg=i(In);op=a(Tg,"PretrainedConfig"),Tg.forEach(o),np=a(sa," for more information."),sa.forEach(o),ap=p(gt),y(Ke.$$.fragment,gt),gt.forEach(o),Vr=p(t),je=r(t,"H2",{class:!0});var vi=i(je);Xe=r(vi,"A",{id:!0,class:!0,href:!0});var Mg=i(Xe);os=r(Mg,"SPAN",{});var $g=i(os);y(so.$$.fragment,$g),$g.forEach(o),Mg.forEach(o),sp=p(vi),ns=r(vi,"SPAN",{});var Eg=i(ns);rp=a(Eg,"LayoutLMv2FeatureExtractor"),Eg.forEach(o),vi.forEach(o),Qr=p(t),Z=r(t,"DIV",{class:!0});var _t=i(Z);y(ro.$$.fragment,_t),ip=p(_t),as=r(_t,"P",{});var qg=i(as);lp=a(qg,`Constructs a LayoutLMv2 feature extractor. This can be used to resize document images to the same size, as well as
to apply OCR on them in order to get a list of words and normalized bounding boxes.`),qg.forEach(o),dp=p(_t),io=r(_t,"P",{});var yi=i(io);cp=a(yi,"This feature extractor inherits from "),ss=r(yi,"CODE",{});var zg=i(ss);pp=a(zg,"PreTrainedFeatureExtractor()"),zg.forEach(o),up=a(yi,` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),yi.forEach(o),mp=p(_t),_e=r(_t,"DIV",{class:!0});var ra=i(_e);y(lo.$$.fragment,ra),hp=p(ra),rs=r(ra,"P",{});var jg=i(rs);fp=a(jg,"Main method to prepare for the model one or several image(s)."),jg.forEach(o),gp=p(ra),y(Ye.$$.fragment,ra),ra.forEach(o),_t.forEach(o),Gr=p(t),Fe=r(t,"H2",{class:!0});var bi=i(Fe);Ze=r(bi,"A",{id:!0,class:!0,href:!0});var Fg=i(Ze);is=r(Fg,"SPAN",{});var Pg=i(is);y(co.$$.fragment,Pg),Pg.forEach(o),Fg.forEach(o),_p=p(bi),ls=r(bi,"SPAN",{});var Cg=i(ls);vp=a(Cg,"LayoutLMv2Tokenizer"),Cg.forEach(o),bi.forEach(o),Hr=p(t),N=r(t,"DIV",{class:!0});var ie=i(N);y(po.$$.fragment,ie),yp=p(ie),S=r(ie,"P",{});var H=i(S);bp=a(H,"Construct a LayoutLMv2 tokenizer. Based on WordPiece. "),An=r(H,"A",{href:!0});var Ig=i(An);Lp=a(Ig,"LayoutLMv2Tokenizer"),Ig.forEach(o),wp=a(H,` can be used to turn words, word-level
bounding boxes and optional word labels to token-level `),ds=r(H,"CODE",{});var Ag=i(ds);kp=a(Ag,"input_ids"),Ag.forEach(o),xp=a(H,", "),cs=r(H,"CODE",{});var Dg=i(cs);Tp=a(Dg,"attention_mask"),Dg.forEach(o),Mp=a(H,", "),ps=r(H,"CODE",{});var Og=i(ps);$p=a(Og,"token_type_ids"),Og.forEach(o),Ep=a(H,", "),us=r(H,"CODE",{});var Ng=i(us);qp=a(Ng,"bbox"),Ng.forEach(o),zp=a(H,`, and
optional `),ms=r(H,"CODE",{});var Sg=i(ms);jp=a(Sg,"labels"),Sg.forEach(o),Fp=a(H," (for token classification)."),H.forEach(o),Pp=p(ie),uo=r(ie,"P",{});var Li=i(uo);Cp=a(Li,"This tokenizer inherits from "),Dn=r(Li,"A",{href:!0});var Rg=i(Dn);Ip=a(Rg,"PreTrainedTokenizer"),Rg.forEach(o),Ap=a(Li,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Li.forEach(o),Dp=p(ie),On=r(ie,"P",{});var Sh=i(On);Nn=r(Sh,"A",{href:!0});var Ug=i(Nn);Op=a(Ug,"LayoutLMv2Tokenizer"),Ug.forEach(o),Np=a(Sh,` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),Sh.forEach(o),Sp=p(ie),Je=r(ie,"DIV",{class:!0});var wi=i(Je);y(mo.$$.fragment,wi),Rp=p(wi),hs=r(wi,"P",{});var Bg=i(hs);Up=a(Bg,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Bg.forEach(o),wi.forEach(o),Bp=p(ie),Sn=r(ie,"DIV",{class:!0});var Wg=i(Sn);y(ho.$$.fragment,Wg),Wg.forEach(o),ie.forEach(o),Kr=p(t),Pe=r(t,"H2",{class:!0});var ki=i(Pe);et=r(ki,"A",{id:!0,class:!0,href:!0});var Vg=i(et);fs=r(Vg,"SPAN",{});var Qg=i(fs);y(fo.$$.fragment,Qg),Qg.forEach(o),Vg.forEach(o),Wp=p(ki),gs=r(ki,"SPAN",{});var Gg=i(gs);Vp=a(Gg,"LayoutLMv2TokenizerFast"),Gg.forEach(o),ki.forEach(o),Xr=p(t),J=r(t,"DIV",{class:!0});var vt=i(J);y(go.$$.fragment,vt),Qp=p(vt),_o=r(vt,"P",{});var xi=i(_o);Gp=a(xi,"Construct a \u201Cfast\u201D LayoutLMv2 tokenizer (backed by HuggingFace\u2019s "),_s=r(xi,"EM",{});var Hg=i(_s);Hp=a(Hg,"tokenizers"),Hg.forEach(o),Kp=a(xi," library). Based on WordPiece."),xi.forEach(o),Xp=p(vt),vo=r(vt,"P",{});var Ti=i(vo);Yp=a(Ti,"This tokenizer inherits from "),Rn=r(Ti,"A",{href:!0});var Kg=i(Rn);Zp=a(Kg,"PreTrainedTokenizerFast"),Kg.forEach(o),Jp=a(Ti,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ti.forEach(o),eu=p(vt),tt=r(vt,"DIV",{class:!0});var Mi=i(tt);y(yo.$$.fragment,Mi),tu=p(Mi),vs=r(Mi,"P",{});var Xg=i(vs);ou=a(Xg,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),Xg.forEach(o),Mi.forEach(o),vt.forEach(o),Yr=p(t),Ce=r(t,"H2",{class:!0});var $i=i(Ce);ot=r($i,"A",{id:!0,class:!0,href:!0});var Yg=i(ot);ys=r(Yg,"SPAN",{});var Zg=i(ys);y(bo.$$.fragment,Zg),Zg.forEach(o),Yg.forEach(o),nu=p($i),bs=r($i,"SPAN",{});var Jg=i(bs);au=a(Jg,"LayoutLMv2Processor"),Jg.forEach(o),$i.forEach(o),Zr=p(t),B=r(t,"DIV",{class:!0});var ke=i(B);y(Lo.$$.fragment,ke),su=p(ke),Ls=r(ke,"P",{});var e_=i(Ls);ru=a(e_,`Constructs a LayoutLMv2 processor which combines a LayoutLMv2 feature extractor and a LayoutLMv2 tokenizer into a
single processor.`),e_.forEach(o),iu=p(ke),Un=r(ke,"P",{});var Rh=i(Un);Bn=r(Rh,"A",{href:!0});var t_=i(Bn);lu=a(t_,"LayoutLMv2Processor"),t_.forEach(o),du=a(Rh," offers all the functionalities you need to prepare data for the model."),Rh.forEach(o),cu=p(ke),F=r(ke,"P",{});var C=i(F);pu=a(C,"It first uses "),Wn=r(C,"A",{href:!0});var o_=i(Wn);uu=a(o_,"LayoutLMv2FeatureExtractor"),o_.forEach(o),mu=a(C,` to resize document images to a fixed size, and optionally applies OCR
to get words and normalized bounding boxes. These are then provided to `),Vn=r(C,"A",{href:!0});var n_=i(Vn);hu=a(n_,"LayoutLMv2Tokenizer"),n_.forEach(o),fu=a(C,` or
`),Qn=r(C,"A",{href:!0});var a_=i(Qn);gu=a(a_,"LayoutLMv2TokenizerFast"),a_.forEach(o),_u=a(C,", which turns the words and bounding boxes into token-level "),ws=r(C,"CODE",{});var s_=i(ws);vu=a(s_,"input_ids"),s_.forEach(o),yu=a(C,`,
`),ks=r(C,"CODE",{});var r_=i(ks);bu=a(r_,"attention_mask"),r_.forEach(o),Lu=a(C,", "),xs=r(C,"CODE",{});var i_=i(xs);wu=a(i_,"token_type_ids"),i_.forEach(o),ku=a(C,", "),Ts=r(C,"CODE",{});var l_=i(Ts);xu=a(l_,"bbox"),l_.forEach(o),Tu=a(C,". Optionally, one can provide integer "),Ms=r(C,"CODE",{});var d_=i(Ms);Mu=a(d_,"word_labels"),d_.forEach(o),$u=a(C,`, which are turned
into token-level `),$s=r(C,"CODE",{});var c_=i($s);Eu=a(c_,"labels"),c_.forEach(o),qu=a(C," for token classification tasks (such as FUNSD, CORD)."),C.forEach(o),zu=p(ke),ve=r(ke,"DIV",{class:!0});var ia=i(ve);y(wo.$$.fragment,ia),ju=p(ia),$=r(ia,"P",{});var z=i($);Fu=a(z,"This method first forwards the "),Es=r(z,"CODE",{});var p_=i(Es);Pu=a(p_,"images"),p_.forEach(o),Cu=a(z," argument to "),ko=r(z,"A",{href:!0});var Uh=i(ko);qs=r(Uh,"STRONG",{});var u_=i(qs);Iu=a(u_,"call"),u_.forEach(o),Au=a(Uh,"()"),Uh.forEach(o),Du=a(z,`. In case
`),Gn=r(z,"A",{href:!0});var m_=i(Gn);Ou=a(m_,"LayoutLMv2FeatureExtractor"),m_.forEach(o),Nu=a(z," was initialized with "),zs=r(z,"CODE",{});var h_=i(zs);Su=a(h_,"apply_ocr"),h_.forEach(o),Ru=a(z," set to "),js=r(z,"CODE",{});var f_=i(js);Uu=a(f_,"True"),f_.forEach(o),Bu=a(z,`, it passes the obtained words and
bounding boxes along with the additional arguments to `),xo=r(z,"A",{href:!0});var Bh=i(xo);Fs=r(Bh,"STRONG",{});var g_=i(Fs);Wu=a(g_,"call"),g_.forEach(o),Vu=a(Bh,"()"),Bh.forEach(o),Qu=a(z,` and returns the output,
together with resized `),Ps=r(z,"CODE",{});var __=i(Ps);Gu=a(__,"images"),__.forEach(o),Hu=a(z,". In case "),Hn=r(z,"A",{href:!0});var v_=i(Hn);Ku=a(v_,"LayoutLMv2FeatureExtractor"),v_.forEach(o),Xu=a(z," was initialized with "),Cs=r(z,"CODE",{});var y_=i(Cs);Yu=a(y_,"apply_ocr"),y_.forEach(o),Zu=a(z,` set to
`),Is=r(z,"CODE",{});var b_=i(Is);Ju=a(b_,"False"),b_.forEach(o),em=a(z,", it passes the words ("),As=r(z,"CODE",{});var L_=i(As);tm=a(L_,"text"),L_.forEach(o),om=a(z,"/"),Ds=r(z,"CODE",{});var w_=i(Ds);nm=a(w_,"text_pair`) and `boxes` specified by the user along with the additional arguments to [__call__()](/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__) and returns the output, together with resized `images"),w_.forEach(o),am=a(z,"."),z.forEach(o),sm=p(ia),Os=r(ia,"P",{});var k_=i(Os);rm=a(k_,"Please refer to the docstring of the above two methods for more information."),k_.forEach(o),ia.forEach(o),ke.forEach(o),Jr=p(t),Ie=r(t,"H2",{class:!0});var Ei=i(Ie);nt=r(Ei,"A",{id:!0,class:!0,href:!0});var x_=i(nt);Ns=r(x_,"SPAN",{});var T_=i(Ns);y(To.$$.fragment,T_),T_.forEach(o),x_.forEach(o),im=p(Ei),Ss=r(Ei,"SPAN",{});var M_=i(Ss);lm=a(M_,"LayoutLMv2Model"),M_.forEach(o),Ei.forEach(o),ei=p(t),de=r(t,"DIV",{class:!0});var la=i(de);y(Mo.$$.fragment,la),dm=p(la),$o=r(la,"P",{});var qi=i($o);cm=a(qi,`The bare LayoutLMv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Eo=r(qi,"A",{href:!0,rel:!0});var $_=i(Eo);pm=a($_,"torch.nn.Module"),$_.forEach(o),um=a(qi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),qi.forEach(o),mm=p(la),ae=r(la,"DIV",{class:!0});var yt=i(ae);y(qo.$$.fragment,yt),hm=p(yt),Ae=r(yt,"P",{});var da=i(Ae);fm=a(da,"The "),Kn=r(da,"A",{href:!0});var E_=i(Kn);gm=a(E_,"LayoutLMv2Model"),E_.forEach(o),_m=a(da," forward method, overrides the "),Rs=r(da,"CODE",{});var q_=i(Rs);vm=a(q_,"__call__"),q_.forEach(o),ym=a(da," special method."),da.forEach(o),bm=p(yt),y(at.$$.fragment,yt),Lm=p(yt),y(st.$$.fragment,yt),yt.forEach(o),la.forEach(o),ti=p(t),De=r(t,"H2",{class:!0});var zi=i(De);rt=r(zi,"A",{id:!0,class:!0,href:!0});var z_=i(rt);Us=r(z_,"SPAN",{});var j_=i(Us);y(zo.$$.fragment,j_),j_.forEach(o),z_.forEach(o),wm=p(zi),Bs=r(zi,"SPAN",{});var F_=i(Bs);km=a(F_,"LayoutLMv2ForSequenceClassification"),F_.forEach(o),zi.forEach(o),oi=p(t),ee=r(t,"DIV",{class:!0});var bt=i(ee);y(jo.$$.fragment,bt),xm=p(bt),Fo=r(bt,"P",{});var ji=i(Fo);Tm=a(ji,`LayoutLMv2 Model with a sequence classification head on top (a linear layer on top of the concatenation of the
final hidden state of the [CLS] token, average-pooled initial visual embeddings and average-pooled final visual
embeddings, e.g. for document image classification tasks such as the
`),Po=r(ji,"A",{href:!0,rel:!0});var P_=i(Po);Mm=a(P_,"RVL-CDIP"),P_.forEach(o),$m=a(ji," dataset."),ji.forEach(o),Em=p(bt),Co=r(bt,"P",{});var Fi=i(Co);qm=a(Fi,"This model is a PyTorch "),Io=r(Fi,"A",{href:!0,rel:!0});var C_=i(Io);zm=a(C_,"torch.nn.Module"),C_.forEach(o),jm=a(Fi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Fi.forEach(o),Fm=p(bt),se=r(bt,"DIV",{class:!0});var Lt=i(se);y(Ao.$$.fragment,Lt),Pm=p(Lt),Oe=r(Lt,"P",{});var ca=i(Oe);Cm=a(ca,"The "),Xn=r(ca,"A",{href:!0});var I_=i(Xn);Im=a(I_,"LayoutLMv2ForSequenceClassification"),I_.forEach(o),Am=a(ca," forward method, overrides the "),Ws=r(ca,"CODE",{});var A_=i(Ws);Dm=a(A_,"__call__"),A_.forEach(o),Om=a(ca," special method."),ca.forEach(o),Nm=p(Lt),y(it.$$.fragment,Lt),Sm=p(Lt),y(lt.$$.fragment,Lt),Lt.forEach(o),bt.forEach(o),ni=p(t),Ne=r(t,"H2",{class:!0});var Pi=i(Ne);dt=r(Pi,"A",{id:!0,class:!0,href:!0});var D_=i(dt);Vs=r(D_,"SPAN",{});var O_=i(Vs);y(Do.$$.fragment,O_),O_.forEach(o),D_.forEach(o),Rm=p(Pi),Qs=r(Pi,"SPAN",{});var N_=i(Qs);Um=a(N_,"LayoutLMv2ForTokenClassification"),N_.forEach(o),Pi.forEach(o),ai=p(t),te=r(t,"DIV",{class:!0});var wt=i(te);y(Oo.$$.fragment,wt),Bm=p(wt),oe=r(wt,"P",{});var xe=i(oe);Wm=a(xe,`LayoutLMv2 Model with a token classification head on top (a linear layer on top of the text part of the hidden
states) e.g. for sequence labeling (information extraction) tasks such as
`),No=r(xe,"A",{href:!0,rel:!0});var S_=i(No);Vm=a(S_,"FUNSD"),S_.forEach(o),Qm=a(xe,", "),So=r(xe,"A",{href:!0,rel:!0});var R_=i(So);Gm=a(R_,"SROIE"),R_.forEach(o),Hm=a(xe,`,
`),Ro=r(xe,"A",{href:!0,rel:!0});var U_=i(Ro);Km=a(U_,"CORD"),U_.forEach(o),Xm=a(xe," and "),Uo=r(xe,"A",{href:!0,rel:!0});var B_=i(Uo);Ym=a(B_,"Kleister-NDA"),B_.forEach(o),Zm=a(xe,"."),xe.forEach(o),Jm=p(wt),Bo=r(wt,"P",{});var Ci=i(Bo);eh=a(Ci,"This model is a PyTorch "),Wo=r(Ci,"A",{href:!0,rel:!0});var W_=i(Wo);th=a(W_,"torch.nn.Module"),W_.forEach(o),oh=a(Ci,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ci.forEach(o),nh=p(wt),re=r(wt,"DIV",{class:!0});var kt=i(re);y(Vo.$$.fragment,kt),ah=p(kt),Se=r(kt,"P",{});var pa=i(Se);sh=a(pa,"The "),Yn=r(pa,"A",{href:!0});var V_=i(Yn);rh=a(V_,"LayoutLMv2ForTokenClassification"),V_.forEach(o),ih=a(pa," forward method, overrides the "),Gs=r(pa,"CODE",{});var Q_=i(Gs);lh=a(Q_,"__call__"),Q_.forEach(o),dh=a(pa," special method."),pa.forEach(o),ch=p(kt),y(ct.$$.fragment,kt),ph=p(kt),y(pt.$$.fragment,kt),kt.forEach(o),wt.forEach(o),si=p(t),Re=r(t,"H2",{class:!0});var Ii=i(Re);ut=r(Ii,"A",{id:!0,class:!0,href:!0});var G_=i(ut);Hs=r(G_,"SPAN",{});var H_=i(Hs);y(Qo.$$.fragment,H_),H_.forEach(o),G_.forEach(o),uh=p(Ii),Ks=r(Ii,"SPAN",{});var K_=i(Ks);mh=a(K_,"LayoutLMv2ForQuestionAnswering"),K_.forEach(o),Ii.forEach(o),ri=p(t),ne=r(t,"DIV",{class:!0});var xt=i(ne);y(Go.$$.fragment,xt),hh=p(xt),ce=r(xt,"P",{});var Tt=i(ce);fh=a(Tt,`LayoutLMv2 Model with a span classification head on top for extractive question-answering tasks such as
`),Ho=r(Tt,"A",{href:!0,rel:!0});var X_=i(Ho);gh=a(X_,"DocVQA"),X_.forEach(o),_h=a(Tt,` (a linear layer on top of the text part of the hidden-states output to
compute `),Xs=r(Tt,"CODE",{});var Y_=i(Xs);vh=a(Y_,"span start logits"),Y_.forEach(o),yh=a(Tt," and "),Ys=r(Tt,"CODE",{});var Z_=i(Ys);bh=a(Z_,"span end logits"),Z_.forEach(o),Lh=a(Tt,")."),Tt.forEach(o),wh=p(xt),Ko=r(xt,"P",{});var Ai=i(Ko);kh=a(Ai,"This model is a PyTorch "),Xo=r(Ai,"A",{href:!0,rel:!0});var J_=i(Xo);xh=a(J_,"torch.nn.Module"),J_.forEach(o),Th=a(Ai,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ai.forEach(o),Mh=p(xt),A=r(xt,"DIV",{class:!0});var K=i(A);y(Yo.$$.fragment,K),$h=p(K),Ue=r(K,"P",{});var ua=i(Ue);Eh=a(ua,"The "),Zn=r(ua,"A",{href:!0});var ev=i(Zn);qh=a(ev,"LayoutLMv2ForQuestionAnswering"),ev.forEach(o),zh=a(ua," forward method, overrides the "),Zs=r(ua,"CODE",{});var tv=i(Zs);jh=a(tv,"__call__"),tv.forEach(o),Fh=a(ua," special method."),ua.forEach(o),Ph=p(K),y(mt.$$.fragment,K),Ch=p(K),Js=r(K,"P",{});var ov=i(Js);Ih=a(ov,"Example:"),ov.forEach(o),Ah=p(K),er=r(K,"P",{});var nv=i(er);Dh=a(nv,`In this example below, we give the LayoutLMv2 model an image (of texts) and ask it a question. It will give us
a prediction of what it thinks the answer is (the span of the answer within the texts parsed from the image).`),nv.forEach(o),Oh=p(K),y(ht.$$.fragment,K),Nh=p(K),y(ft.$$.fragment,K),K.forEach(o),xt.forEach(o),this.h()},h(){l(h,"name","hf:doc:metadata"),l(h,"content",JSON.stringify(Lv)),l(g,"id","layoutlmv2"),l(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(g,"href","#layoutlmv2"),l(f,"class","relative group"),l(We,"id","overview"),l(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(We,"href","#overview"),l(Te,"class","relative group"),l($t,"href","https://arxiv.org/abs/2012.14740"),l($t,"rel","nofollow"),l(on,"href","layoutlm"),l(Et,"href","https://guillaumejaume.github.io/FUNSD/"),l(Et,"rel","nofollow"),l(qt,"href","https://github.com/clovaai/cord"),l(qt,"rel","nofollow"),l(zt,"href","https://rrc.cvc.uab.es/?ch=13"),l(zt,"rel","nofollow"),l(jt,"href","https://github.com/applicaai/kleister-nda"),l(jt,"rel","nofollow"),l(Pt,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),l(Pt,"rel","nofollow"),l(It,"href","https://arxiv.org/abs/2007.00398"),l(It,"rel","nofollow"),l(Dt,"href","https://arxiv.org/abs/2012.14740"),l(Dt,"rel","nofollow"),l(Nt,"href","https://github.com/NielsRogge/Transformers-Tutorials"),l(Nt,"rel","nofollow"),l(St,"href","https://github.com/facebookresearch/detectron2/"),l(St,"rel","nofollow"),l(Rt,"href","https://detectron2.readthedocs.io/en/latest/tutorials/install.html"),l(Rt,"rel","nofollow"),l(rn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model.forward"),l(ln,"href","/docs/transformers/pr_17168/en/model_doc/layoutlm#transformers.LayoutLMModel"),l(Ut,"href","https://github.com/tesseract-ocr/tesseract"),l(Ut,"rel","nofollow"),l(Bt,"href","https://pypi.org/project/pytesseract/"),l(Bt,"rel","nofollow"),l(dn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(cn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(pn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"),l(un,"href","/docs/transformers/pr_17168/en/main_classes/model#transformers.PreTrainedModel.from_pretrained"),l(mn,"href","layoutxlm"),l(Ge,"id","usage-layoutlmv2processor"),l(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ge,"href","#usage-layoutlmv2processor"),l($e,"class","relative group"),l(hn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(fn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(gn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(_n,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(vn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(yn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(bn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Ln,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(wn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(Xt,"href","https://pypi.org/project/pytesseract/"),l(Xt,"rel","nofollow"),l(kn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(He,"id","transformers.LayoutLMv2Config"),l(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(He,"href","#transformers.LayoutLMv2Config"),l(Ee,"class","relative group"),l(Pn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(ao,"href","https://huggingface.co/microsoft/layoutlmv2-base-uncased"),l(ao,"rel","nofollow"),l(Cn,"href","/docs/transformers/pr_17168/en/main_classes/configuration#transformers.PretrainedConfig"),l(In,"href","/docs/transformers/pr_17168/en/main_classes/configuration#transformers.PretrainedConfig"),l(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Xe,"id","transformers.LayoutLMv2FeatureExtractor"),l(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Xe,"href","#transformers.LayoutLMv2FeatureExtractor"),l(je,"class","relative group"),l(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ze,"id","transformers.LayoutLMv2Tokenizer"),l(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ze,"href","#transformers.LayoutLMv2Tokenizer"),l(Fe,"class","relative group"),l(An,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Dn,"href","/docs/transformers/pr_17168/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(Nn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(et,"id","transformers.LayoutLMv2TokenizerFast"),l(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(et,"href","#transformers.LayoutLMv2TokenizerFast"),l(Pe,"class","relative group"),l(Rn,"href","/docs/transformers/pr_17168/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),l(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ot,"id","transformers.LayoutLMv2Processor"),l(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ot,"href","#transformers.LayoutLMv2Processor"),l(Ce,"class","relative group"),l(Bn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(Wn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(Vn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Qn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(ko,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__"),l(Gn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(xo,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__"),l(Hn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(nt,"id","transformers.LayoutLMv2Model"),l(nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(nt,"href","#transformers.LayoutLMv2Model"),l(Ie,"class","relative group"),l(Eo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Eo,"rel","nofollow"),l(Kn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(rt,"id","transformers.LayoutLMv2ForSequenceClassification"),l(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(rt,"href","#transformers.LayoutLMv2ForSequenceClassification"),l(De,"class","relative group"),l(Po,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),l(Po,"rel","nofollow"),l(Io,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Io,"rel","nofollow"),l(Xn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForSequenceClassification"),l(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(dt,"id","transformers.LayoutLMv2ForTokenClassification"),l(dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(dt,"href","#transformers.LayoutLMv2ForTokenClassification"),l(Ne,"class","relative group"),l(No,"href","https://guillaumejaume.github.io/FUNSD/"),l(No,"rel","nofollow"),l(So,"href","https://rrc.cvc.uab.es/?ch=13"),l(So,"rel","nofollow"),l(Ro,"href","https://github.com/clovaai/cord"),l(Ro,"rel","nofollow"),l(Uo,"href","https://github.com/applicaai/kleister-nda"),l(Uo,"rel","nofollow"),l(Wo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Wo,"rel","nofollow"),l(Yn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForTokenClassification"),l(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ut,"id","transformers.LayoutLMv2ForQuestionAnswering"),l(ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ut,"href","#transformers.LayoutLMv2ForQuestionAnswering"),l(Re,"class","relative group"),l(Ho,"href","https://rrc.cvc.uab.es/?ch=17"),l(Ho,"rel","nofollow"),l(Xo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Xo,"rel","nofollow"),l(Zn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForQuestionAnswering"),l(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,d){e(document.head,h),u(t,x,d),u(t,f,d),e(f,g),e(g,T),b(m,T,null),e(f,_),e(f,O),e(O,Oi),u(t,dr,d),u(t,Te,d),e(Te,We),e(We,ma),b(Mt,ma,null),e(Te,Ni),e(Te,ha),e(ha,Si),u(t,cr,d),u(t,ue,d),e(ue,Ri),e(ue,$t),e($t,Ui),e(ue,Bi),e(ue,on),e(on,Wi),e(ue,Vi),u(t,pr,d),u(t,me,d),e(me,X),e(X,Qi),e(X,Et),e(Et,Gi),e(X,Hi),e(X,qt),e(qt,Ki),e(X,Xi),e(X,zt),e(zt,Yi),e(X,Zi),e(X,jt),e(jt,Ji),e(X,el),e(me,tl),e(me,Ft),e(Ft,ol),e(Ft,Pt),e(Pt,nl),e(Ft,al),e(me,sl),e(me,Ct),e(Ct,rl),e(Ct,It),e(It,il),e(Ct,ll),u(t,ur,d),u(t,nn,d),e(nn,dl),u(t,mr,d),u(t,an,d),e(an,fa),e(fa,cl),u(t,hr,d),u(t,sn,d),e(sn,pl),u(t,fr,d),u(t,V,d),e(V,ga),e(ga,ul),e(V,ml),e(V,At),e(At,hl),e(At,Dt),e(Dt,fl),e(At,gl),e(V,_l),e(V,Ot),e(Ot,vl),e(Ot,Nt),e(Nt,yl),e(Ot,bl),e(V,Ll),e(V,Me),e(Me,wl),e(Me,St),e(St,kl),e(Me,xl),e(Me,Rt),e(Rt,Tl),e(Me,Ml),e(V,$l),e(V,M),e(M,El),e(M,_a),e(_a,ql),e(M,zl),e(M,rn),e(rn,jl),e(M,Fl),e(M,va),e(va,Pl),e(M,Cl),e(M,ya),e(ya,Il),e(M,Al),e(M,ba),e(ba,Dl),e(M,Ol),e(M,La),e(La,Nl),e(M,Sl),e(M,wa),e(wa,Rl),e(M,Ul),e(M,ka),e(ka,Bl),e(M,Wl),e(M,xa),e(xa,Vl),e(M,Ql),e(M,ln),e(ln,Gl),e(M,Hl),e(M,Ut),e(Ut,Kl),e(M,Xl),e(M,Bt),e(Bt,Yl),e(M,Zl),u(t,gr,d),b(Wt,t,d),u(t,_r,d),u(t,he,d),e(he,Jl),e(he,Ta),e(Ta,ed),e(he,td),e(he,Ma),e(Ma,od),e(he,nd),u(t,vr,d),b(Vt,t,d),u(t,yr,d),u(t,Ve,d),e(Ve,ad),e(Ve,dn),e(dn,sd),e(Ve,rd),u(t,br,d),u(t,fe,d),e(fe,I),e(I,id),e(I,cn),e(cn,ld),e(I,dd),e(I,$a),e($a,cd),e(I,pd),e(I,Ea),e(Ea,ud),e(I,md),e(I,pn),e(pn,hd),e(I,fd),e(I,qa),e(qa,gd),e(I,_d),e(I,za),e(za,vd),e(I,yd),e(I,ja),e(ja,bd),e(I,Ld),e(fe,wd),e(fe,Qt),e(Qt,kd),e(Qt,un),e(un,xd),e(Qt,Td),e(fe,Md),e(fe,Gt),e(Gt,$d),e(Gt,Fa),e(Fa,Ed),e(Gt,qd),u(t,Lr,d),u(t,Qe,d),e(Qe,zd),e(Qe,mn),e(mn,jd),e(Qe,Fd),u(t,wr,d),u(t,$e,d),e($e,Ge),e(Ge,Pa),b(Ht,Pa,null),e($e,Pd),e($e,Ca),e(Ca,Cd),u(t,kr,d),u(t,Q,d),e(Q,Id),e(Q,hn),e(hn,Ad),e(Q,Dd),e(Q,fn),e(fn,Od),e(Q,Nd),e(Q,gn),e(gn,Sd),e(Q,Rd),e(Q,_n),e(_n,Ud),e(Q,Bd),u(t,xr,d),b(Kt,t,d),u(t,Tr,d),u(t,E,d),e(E,Wd),e(E,vn),e(vn,Vd),e(E,Qd),e(E,yn),e(yn,Gd),e(E,Hd),e(E,Ia),e(Ia,Kd),e(E,Xd),e(E,bn),e(bn,Yd),e(E,Zd),e(E,Ln),e(Ln,Jd),e(E,ec),e(E,Aa),e(Aa,tc),e(E,oc),e(E,Da),e(Da,nc),e(E,ac),e(E,Oa),e(Oa,sc),e(E,rc),e(E,Na),e(Na,ic),e(E,lc),e(E,Sa),e(Sa,dc),e(E,cc),u(t,Mr,d),u(t,U,d),e(U,wn),e(wn,pc),e(U,uc),e(U,Xt),e(Xt,mc),e(U,hc),e(U,kn),e(kn,fc),e(U,gc),e(U,Ra),e(Ra,_c),e(U,vc),e(U,Ua),e(Ua,yc),e(U,bc),u(t,$r,d),u(t,xn,d),e(xn,Lc),u(t,Er,d),u(t,Tn,d),e(Tn,Ba),e(Ba,wc),u(t,qr,d),u(t,Mn,d),e(Mn,kc),u(t,zr,d),b(Yt,t,d),u(t,jr,d),u(t,$n,d),e($n,Wa),e(Wa,xc),u(t,Fr,d),u(t,ge,d),e(ge,Tc),e(ge,Va),e(Va,Mc),e(ge,$c),e(ge,Qa),e(Qa,Ec),e(ge,qc),u(t,Pr,d),b(Zt,t,d),u(t,Cr,d),u(t,En,d),e(En,Ga),e(Ga,zc),u(t,Ir,d),u(t,G,d),e(G,jc),e(G,Ha),e(Ha,Fc),e(G,Pc),e(G,Ka),e(Ka,Cc),e(G,Ic),e(G,Xa),e(Xa,Ac),e(G,Dc),e(G,Ya),e(Ya,Oc),e(G,Nc),u(t,Ar,d),b(Jt,t,d),u(t,Dr,d),u(t,qn,d),e(qn,Za),e(Za,Sc),u(t,Or,d),u(t,zn,d),e(zn,Rc),u(t,Nr,d),b(eo,t,d),u(t,Sr,d),u(t,jn,d),e(jn,Ja),e(Ja,Uc),u(t,Rr,d),u(t,Fn,d),e(Fn,Bc),u(t,Ur,d),b(to,t,d),u(t,Br,d),u(t,Ee,d),e(Ee,He),e(He,es),b(oo,es,null),e(Ee,Wc),e(Ee,ts),e(ts,Vc),u(t,Wr,d),u(t,Y,d),b(no,Y,null),e(Y,Qc),e(Y,qe),e(qe,Gc),e(qe,Pn),e(Pn,Hc),e(qe,Kc),e(qe,ao),e(ao,Xc),e(qe,Yc),e(Y,Zc),e(Y,ze),e(ze,Jc),e(ze,Cn),e(Cn,ep),e(ze,tp),e(ze,In),e(In,op),e(ze,np),e(Y,ap),b(Ke,Y,null),u(t,Vr,d),u(t,je,d),e(je,Xe),e(Xe,os),b(so,os,null),e(je,sp),e(je,ns),e(ns,rp),u(t,Qr,d),u(t,Z,d),b(ro,Z,null),e(Z,ip),e(Z,as),e(as,lp),e(Z,dp),e(Z,io),e(io,cp),e(io,ss),e(ss,pp),e(io,up),e(Z,mp),e(Z,_e),b(lo,_e,null),e(_e,hp),e(_e,rs),e(rs,fp),e(_e,gp),b(Ye,_e,null),u(t,Gr,d),u(t,Fe,d),e(Fe,Ze),e(Ze,is),b(co,is,null),e(Fe,_p),e(Fe,ls),e(ls,vp),u(t,Hr,d),u(t,N,d),b(po,N,null),e(N,yp),e(N,S),e(S,bp),e(S,An),e(An,Lp),e(S,wp),e(S,ds),e(ds,kp),e(S,xp),e(S,cs),e(cs,Tp),e(S,Mp),e(S,ps),e(ps,$p),e(S,Ep),e(S,us),e(us,qp),e(S,zp),e(S,ms),e(ms,jp),e(S,Fp),e(N,Pp),e(N,uo),e(uo,Cp),e(uo,Dn),e(Dn,Ip),e(uo,Ap),e(N,Dp),e(N,On),e(On,Nn),e(Nn,Op),e(On,Np),e(N,Sp),e(N,Je),b(mo,Je,null),e(Je,Rp),e(Je,hs),e(hs,Up),e(N,Bp),e(N,Sn),b(ho,Sn,null),u(t,Kr,d),u(t,Pe,d),e(Pe,et),e(et,fs),b(fo,fs,null),e(Pe,Wp),e(Pe,gs),e(gs,Vp),u(t,Xr,d),u(t,J,d),b(go,J,null),e(J,Qp),e(J,_o),e(_o,Gp),e(_o,_s),e(_s,Hp),e(_o,Kp),e(J,Xp),e(J,vo),e(vo,Yp),e(vo,Rn),e(Rn,Zp),e(vo,Jp),e(J,eu),e(J,tt),b(yo,tt,null),e(tt,tu),e(tt,vs),e(vs,ou),u(t,Yr,d),u(t,Ce,d),e(Ce,ot),e(ot,ys),b(bo,ys,null),e(Ce,nu),e(Ce,bs),e(bs,au),u(t,Zr,d),u(t,B,d),b(Lo,B,null),e(B,su),e(B,Ls),e(Ls,ru),e(B,iu),e(B,Un),e(Un,Bn),e(Bn,lu),e(Un,du),e(B,cu),e(B,F),e(F,pu),e(F,Wn),e(Wn,uu),e(F,mu),e(F,Vn),e(Vn,hu),e(F,fu),e(F,Qn),e(Qn,gu),e(F,_u),e(F,ws),e(ws,vu),e(F,yu),e(F,ks),e(ks,bu),e(F,Lu),e(F,xs),e(xs,wu),e(F,ku),e(F,Ts),e(Ts,xu),e(F,Tu),e(F,Ms),e(Ms,Mu),e(F,$u),e(F,$s),e($s,Eu),e(F,qu),e(B,zu),e(B,ve),b(wo,ve,null),e(ve,ju),e(ve,$),e($,Fu),e($,Es),e(Es,Pu),e($,Cu),e($,ko),e(ko,qs),e(qs,Iu),e(ko,Au),e($,Du),e($,Gn),e(Gn,Ou),e($,Nu),e($,zs),e(zs,Su),e($,Ru),e($,js),e(js,Uu),e($,Bu),e($,xo),e(xo,Fs),e(Fs,Wu),e(xo,Vu),e($,Qu),e($,Ps),e(Ps,Gu),e($,Hu),e($,Hn),e(Hn,Ku),e($,Xu),e($,Cs),e(Cs,Yu),e($,Zu),e($,Is),e(Is,Ju),e($,em),e($,As),e(As,tm),e($,om),e($,Ds),e(Ds,nm),e($,am),e(ve,sm),e(ve,Os),e(Os,rm),u(t,Jr,d),u(t,Ie,d),e(Ie,nt),e(nt,Ns),b(To,Ns,null),e(Ie,im),e(Ie,Ss),e(Ss,lm),u(t,ei,d),u(t,de,d),b(Mo,de,null),e(de,dm),e(de,$o),e($o,cm),e($o,Eo),e(Eo,pm),e($o,um),e(de,mm),e(de,ae),b(qo,ae,null),e(ae,hm),e(ae,Ae),e(Ae,fm),e(Ae,Kn),e(Kn,gm),e(Ae,_m),e(Ae,Rs),e(Rs,vm),e(Ae,ym),e(ae,bm),b(at,ae,null),e(ae,Lm),b(st,ae,null),u(t,ti,d),u(t,De,d),e(De,rt),e(rt,Us),b(zo,Us,null),e(De,wm),e(De,Bs),e(Bs,km),u(t,oi,d),u(t,ee,d),b(jo,ee,null),e(ee,xm),e(ee,Fo),e(Fo,Tm),e(Fo,Po),e(Po,Mm),e(Fo,$m),e(ee,Em),e(ee,Co),e(Co,qm),e(Co,Io),e(Io,zm),e(Co,jm),e(ee,Fm),e(ee,se),b(Ao,se,null),e(se,Pm),e(se,Oe),e(Oe,Cm),e(Oe,Xn),e(Xn,Im),e(Oe,Am),e(Oe,Ws),e(Ws,Dm),e(Oe,Om),e(se,Nm),b(it,se,null),e(se,Sm),b(lt,se,null),u(t,ni,d),u(t,Ne,d),e(Ne,dt),e(dt,Vs),b(Do,Vs,null),e(Ne,Rm),e(Ne,Qs),e(Qs,Um),u(t,ai,d),u(t,te,d),b(Oo,te,null),e(te,Bm),e(te,oe),e(oe,Wm),e(oe,No),e(No,Vm),e(oe,Qm),e(oe,So),e(So,Gm),e(oe,Hm),e(oe,Ro),e(Ro,Km),e(oe,Xm),e(oe,Uo),e(Uo,Ym),e(oe,Zm),e(te,Jm),e(te,Bo),e(Bo,eh),e(Bo,Wo),e(Wo,th),e(Bo,oh),e(te,nh),e(te,re),b(Vo,re,null),e(re,ah),e(re,Se),e(Se,sh),e(Se,Yn),e(Yn,rh),e(Se,ih),e(Se,Gs),e(Gs,lh),e(Se,dh),e(re,ch),b(ct,re,null),e(re,ph),b(pt,re,null),u(t,si,d),u(t,Re,d),e(Re,ut),e(ut,Hs),b(Qo,Hs,null),e(Re,uh),e(Re,Ks),e(Ks,mh),u(t,ri,d),u(t,ne,d),b(Go,ne,null),e(ne,hh),e(ne,ce),e(ce,fh),e(ce,Ho),e(Ho,gh),e(ce,_h),e(ce,Xs),e(Xs,vh),e(ce,yh),e(ce,Ys),e(Ys,bh),e(ce,Lh),e(ne,wh),e(ne,Ko),e(Ko,kh),e(Ko,Xo),e(Xo,xh),e(Ko,Th),e(ne,Mh),e(ne,A),b(Yo,A,null),e(A,$h),e(A,Ue),e(Ue,Eh),e(Ue,Zn),e(Zn,qh),e(Ue,zh),e(Ue,Zs),e(Zs,jh),e(Ue,Fh),e(A,Ph),b(mt,A,null),e(A,Ch),e(A,Js),e(Js,Ih),e(A,Ah),e(A,er),e(er,Dh),e(A,Oh),b(ht,A,null),e(A,Nh),b(ft,A,null),ii=!0},p(t,[d]){const Zo={};d&2&&(Zo.$$scope={dirty:d,ctx:t}),Ke.$set(Zo);const tr={};d&2&&(tr.$$scope={dirty:d,ctx:t}),Ye.$set(tr);const or={};d&2&&(or.$$scope={dirty:d,ctx:t}),at.$set(or);const nr={};d&2&&(nr.$$scope={dirty:d,ctx:t}),st.$set(nr);const Jo={};d&2&&(Jo.$$scope={dirty:d,ctx:t}),it.$set(Jo);const ar={};d&2&&(ar.$$scope={dirty:d,ctx:t}),lt.$set(ar);const sr={};d&2&&(sr.$$scope={dirty:d,ctx:t}),ct.$set(sr);const rr={};d&2&&(rr.$$scope={dirty:d,ctx:t}),pt.$set(rr);const Be={};d&2&&(Be.$$scope={dirty:d,ctx:t}),mt.$set(Be);const ir={};d&2&&(ir.$$scope={dirty:d,ctx:t}),ht.$set(ir);const lr={};d&2&&(lr.$$scope={dirty:d,ctx:t}),ft.$set(lr)},i(t){ii||(L(m.$$.fragment,t),L(Mt.$$.fragment,t),L(Wt.$$.fragment,t),L(Vt.$$.fragment,t),L(Ht.$$.fragment,t),L(Kt.$$.fragment,t),L(Yt.$$.fragment,t),L(Zt.$$.fragment,t),L(Jt.$$.fragment,t),L(eo.$$.fragment,t),L(to.$$.fragment,t),L(oo.$$.fragment,t),L(no.$$.fragment,t),L(Ke.$$.fragment,t),L(so.$$.fragment,t),L(ro.$$.fragment,t),L(lo.$$.fragment,t),L(Ye.$$.fragment,t),L(co.$$.fragment,t),L(po.$$.fragment,t),L(mo.$$.fragment,t),L(ho.$$.fragment,t),L(fo.$$.fragment,t),L(go.$$.fragment,t),L(yo.$$.fragment,t),L(bo.$$.fragment,t),L(Lo.$$.fragment,t),L(wo.$$.fragment,t),L(To.$$.fragment,t),L(Mo.$$.fragment,t),L(qo.$$.fragment,t),L(at.$$.fragment,t),L(st.$$.fragment,t),L(zo.$$.fragment,t),L(jo.$$.fragment,t),L(Ao.$$.fragment,t),L(it.$$.fragment,t),L(lt.$$.fragment,t),L(Do.$$.fragment,t),L(Oo.$$.fragment,t),L(Vo.$$.fragment,t),L(ct.$$.fragment,t),L(pt.$$.fragment,t),L(Qo.$$.fragment,t),L(Go.$$.fragment,t),L(Yo.$$.fragment,t),L(mt.$$.fragment,t),L(ht.$$.fragment,t),L(ft.$$.fragment,t),ii=!0)},o(t){w(m.$$.fragment,t),w(Mt.$$.fragment,t),w(Wt.$$.fragment,t),w(Vt.$$.fragment,t),w(Ht.$$.fragment,t),w(Kt.$$.fragment,t),w(Yt.$$.fragment,t),w(Zt.$$.fragment,t),w(Jt.$$.fragment,t),w(eo.$$.fragment,t),w(to.$$.fragment,t),w(oo.$$.fragment,t),w(no.$$.fragment,t),w(Ke.$$.fragment,t),w(so.$$.fragment,t),w(ro.$$.fragment,t),w(lo.$$.fragment,t),w(Ye.$$.fragment,t),w(co.$$.fragment,t),w(po.$$.fragment,t),w(mo.$$.fragment,t),w(ho.$$.fragment,t),w(fo.$$.fragment,t),w(go.$$.fragment,t),w(yo.$$.fragment,t),w(bo.$$.fragment,t),w(Lo.$$.fragment,t),w(wo.$$.fragment,t),w(To.$$.fragment,t),w(Mo.$$.fragment,t),w(qo.$$.fragment,t),w(at.$$.fragment,t),w(st.$$.fragment,t),w(zo.$$.fragment,t),w(jo.$$.fragment,t),w(Ao.$$.fragment,t),w(it.$$.fragment,t),w(lt.$$.fragment,t),w(Do.$$.fragment,t),w(Oo.$$.fragment,t),w(Vo.$$.fragment,t),w(ct.$$.fragment,t),w(pt.$$.fragment,t),w(Qo.$$.fragment,t),w(Go.$$.fragment,t),w(Yo.$$.fragment,t),w(mt.$$.fragment,t),w(ht.$$.fragment,t),w(ft.$$.fragment,t),ii=!1},d(t){o(h),t&&o(x),t&&o(f),k(m),t&&o(dr),t&&o(Te),k(Mt),t&&o(cr),t&&o(ue),t&&o(pr),t&&o(me),t&&o(ur),t&&o(nn),t&&o(mr),t&&o(an),t&&o(hr),t&&o(sn),t&&o(fr),t&&o(V),t&&o(gr),k(Wt,t),t&&o(_r),t&&o(he),t&&o(vr),k(Vt,t),t&&o(yr),t&&o(Ve),t&&o(br),t&&o(fe),t&&o(Lr),t&&o(Qe),t&&o(wr),t&&o($e),k(Ht),t&&o(kr),t&&o(Q),t&&o(xr),k(Kt,t),t&&o(Tr),t&&o(E),t&&o(Mr),t&&o(U),t&&o($r),t&&o(xn),t&&o(Er),t&&o(Tn),t&&o(qr),t&&o(Mn),t&&o(zr),k(Yt,t),t&&o(jr),t&&o($n),t&&o(Fr),t&&o(ge),t&&o(Pr),k(Zt,t),t&&o(Cr),t&&o(En),t&&o(Ir),t&&o(G),t&&o(Ar),k(Jt,t),t&&o(Dr),t&&o(qn),t&&o(Or),t&&o(zn),t&&o(Nr),k(eo,t),t&&o(Sr),t&&o(jn),t&&o(Rr),t&&o(Fn),t&&o(Ur),k(to,t),t&&o(Br),t&&o(Ee),k(oo),t&&o(Wr),t&&o(Y),k(no),k(Ke),t&&o(Vr),t&&o(je),k(so),t&&o(Qr),t&&o(Z),k(ro),k(lo),k(Ye),t&&o(Gr),t&&o(Fe),k(co),t&&o(Hr),t&&o(N),k(po),k(mo),k(ho),t&&o(Kr),t&&o(Pe),k(fo),t&&o(Xr),t&&o(J),k(go),k(yo),t&&o(Yr),t&&o(Ce),k(bo),t&&o(Zr),t&&o(B),k(Lo),k(wo),t&&o(Jr),t&&o(Ie),k(To),t&&o(ei),t&&o(de),k(Mo),k(qo),k(at),k(st),t&&o(ti),t&&o(De),k(zo),t&&o(oi),t&&o(ee),k(jo),k(Ao),k(it),k(lt),t&&o(ni),t&&o(Ne),k(Do),t&&o(ai),t&&o(te),k(Oo),k(Vo),k(ct),k(pt),t&&o(si),t&&o(Re),k(Qo),t&&o(ri),t&&o(ne),k(Go),k(Yo),k(mt),k(ht),k(ft)}}}const Lv={local:"layoutlmv2",sections:[{local:"overview",title:"Overview"},{local:"usage-layoutlmv2processor",title:"Usage: LayoutLMv2Processor"},{local:"transformers.LayoutLMv2Config",title:"LayoutLMv2Config"},{local:"transformers.LayoutLMv2FeatureExtractor",title:"LayoutLMv2FeatureExtractor"},{local:"transformers.LayoutLMv2Tokenizer",title:"LayoutLMv2Tokenizer"},{local:"transformers.LayoutLMv2TokenizerFast",title:"LayoutLMv2TokenizerFast"},{local:"transformers.LayoutLMv2Processor",title:"LayoutLMv2Processor"},{local:"transformers.LayoutLMv2Model",title:"LayoutLMv2Model"},{local:"transformers.LayoutLMv2ForSequenceClassification",title:"LayoutLMv2ForSequenceClassification"},{local:"transformers.LayoutLMv2ForTokenClassification",title:"LayoutLMv2ForTokenClassification"},{local:"transformers.LayoutLMv2ForQuestionAnswering",title:"LayoutLMv2ForQuestionAnswering"}],title:"LayoutLMV2"};function wv(j){return lv(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qv extends av{constructor(h){super();sv(this,h,wv,bv,rv,{})}}export{qv as default,Lv as metadata};
