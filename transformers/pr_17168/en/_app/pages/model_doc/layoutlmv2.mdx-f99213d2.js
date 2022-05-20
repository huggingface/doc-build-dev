import{S as Ev,i as qv,s as zv,e as s,k as c,w as v,t as n,M as jv,c as r,d as o,m as p,a as i,x as y,h as a,b as l,F as e,g as u,y as b,q as L,o as w,B as k,v as Fv,L as nn}from"../../chunks/vendor-6b77c823.js";import{T as Vi}from"../../chunks/Tip-39098574.js";import{D}from"../../chunks/Docstring-1088f2fb.js";import{C as V}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ce}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as on}from"../../chunks/ExampleCodeBlock-5212b321.js";function Pv(j){let h,x,f,g,T;return g=new V({props:{code:`from transformers import LayoutLMv2Model, LayoutLMv2Config

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){h=s("p"),x=n("Example:"),f=c(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);x=a(_,"Example:"),_.forEach(o),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,x),u(m,f,_),b(g,m,_),T=!0},p:nn,i(m){T||(L(g.$$.fragment,m),T=!0)},o(m){w(g.$$.fragment,m),T=!1},d(m){m&&o(h),m&&o(f),k(g,m)}}}function Cv(j){let h,x,f,g,T;return g=new V({props:{code:`from transformers import LayoutLMv2FeatureExtractor
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;])</span>`}}),{c(){h=s("p"),x=n("Examples:"),f=c(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);x=a(_,"Examples:"),_.forEach(o),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,x),u(m,f,_),b(g,m,_),T=!0},p:nn,i(m){T||(L(g.$$.fragment,m),T=!0)},o(m){w(g.$$.fragment,m),T=!1},d(m){m&&o(h),m&&o(f),k(g,m)}}}function Iv(j){let h,x,f,g,T;return{c(){h=s("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){h=r(m,"P",{});var _=i(h);x=a(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=a(O,"Module"),O.forEach(o),T=a(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(m,_){u(m,h,_),e(h,x),e(h,f),e(f,g),e(h,T)},d(m){m&&o(h)}}}function Av(j){let h,x,f,g,T;return g=new V({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2Model, set_seed
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
torch.Size([<span class="hljs-number">1</span>, <span class="hljs-number">342</span>, <span class="hljs-number">768</span>])`}}),{c(){h=s("p"),x=n("Examples:"),f=c(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);x=a(_,"Examples:"),_.forEach(o),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,x),u(m,f,_),b(g,m,_),T=!0},p:nn,i(m){T||(L(g.$$.fragment,m),T=!0)},o(m){w(g.$$.fragment,m),T=!1},d(m){m&&o(h),m&&o(f),k(g,m)}}}function Dv(j){let h,x,f,g,T;return{c(){h=s("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){h=r(m,"P",{});var _=i(h);x=a(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=a(O,"Module"),O.forEach(o),T=a(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(m,_){u(m,h,_),e(h,x),e(h,f),e(f,g),e(h,T)},d(m){m&&o(h)}}}function Ov(j){let h,x,f,g,T;return g=new V({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForSequenceClassification, set_seed
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
(<span class="hljs-number">4</span>, <span class="hljs-string">&#x27;advertisement&#x27;</span>)`}}),{c(){h=s("p"),x=n("Example:"),f=c(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);x=a(_,"Example:"),_.forEach(o),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,x),u(m,f,_),b(g,m,_),T=!0},p:nn,i(m){T||(L(g.$$.fragment,m),T=!0)},o(m){w(g.$$.fragment,m),T=!1},d(m){m&&o(h),m&&o(f),k(g,m)}}}function Nv(j){let h,x,f,g,T;return{c(){h=s("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){h=r(m,"P",{});var _=i(h);x=a(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=a(O,"Module"),O.forEach(o),T=a(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(m,_){u(m,h,_),e(h,x),e(h,f),e(f,g),e(h,T)},d(m){m&&o(h)}}}function Sv(j){let h,x,f,g,T;return g=new V({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForTokenClassification, set_seed
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
[<span class="hljs-string">&#x27;B-ANSWER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>]`}}),{c(){h=s("p"),x=n("Example:"),f=c(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);x=a(_,"Example:"),_.forEach(o),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,x),u(m,f,_),b(g,m,_),T=!0},p:nn,i(m){T||(L(g.$$.fragment,m),T=!0)},o(m){w(g.$$.fragment,m),T=!1},d(m){m&&o(h),m&&o(f),k(g,m)}}}function Rv(j){let h,x,f,g,T;return{c(){h=s("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){h=r(m,"P",{});var _=i(h);x=a(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=a(O,"Module"),O.forEach(o),T=a(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(m,_){u(m,h,_),e(h,x),e(h,f),e(f,g),e(h,T)},d(m){m&&o(h)}}}function Uv(j){let h,x;return h=new V({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForQuestionAnswering, set_seed
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
<span class="hljs-string">&#x27;council mem - bers conducted by trrf treasurer philip g. kuehn to get answers which the public ...</span>`}}),{c(){v(h.$$.fragment)},l(f){y(h.$$.fragment,f)},m(f,g){b(h,f,g),x=!0},p:nn,i(f){x||(L(h.$$.fragment,f),x=!0)},o(f){w(h.$$.fragment,f),x=!1},d(f){k(h,f)}}}function Bv(j){let h,x;return h=new V({props:{code:`target_start_index = torch.tensor([7])
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
(<span class="hljs-number">154</span>, <span class="hljs-number">287</span>)`}}),{c(){v(h.$$.fragment)},l(f){y(h.$$.fragment,f)},m(f,g){b(h,f,g),x=!0},p:nn,i(f){x||(L(h.$$.fragment,f),x=!0)},o(f){w(h.$$.fragment,f),x=!1},d(f){k(h,f)}}}function Wv(j){let h,x,f,g,T,m,_,O,Qi,gr,$e,Qe,fa,Et,Gi,ga,Hi,_r,he,Ki,qt,Xi,Yi,an,Zi,Ji,vr,fe,Y,el,zt,tl,ol,jt,nl,al,Ft,sl,rl,Pt,il,ll,dl,Ct,cl,It,pl,ul,ml,At,hl,Dt,fl,gl,yr,sn,_l,br,rn,_a,vl,Lr,R,yl,va,bl,Ll,ya,wl,kl,ba,xl,Tl,La,Ml,$l,wa,El,ql,wr,ln,zl,kr,Q,ka,jl,Fl,Ot,Pl,Nt,Cl,Il,Al,St,Dl,Rt,Ol,Nl,Sl,Ee,Rl,Ut,Ul,Bl,Bt,Wl,Vl,Ql,M,Gl,xa,Hl,Kl,dn,Xl,Yl,Ta,Zl,Jl,Ma,ed,td,$a,od,nd,Ea,ad,sd,qa,rd,id,za,ld,dd,ja,cd,pd,cn,ud,md,Wt,hd,fd,Vt,gd,_d,xr,Qt,Tr,ge,vd,Fa,yd,bd,Pa,Ld,wd,Mr,Gt,$r,Ge,kd,pn,xd,Td,Er,_e,I,Md,un,$d,Ed,Ca,qd,zd,Ia,jd,Fd,mn,Pd,Cd,Aa,Id,Ad,Da,Dd,Od,Oa,Nd,Sd,Rd,Ht,Ud,hn,Bd,Wd,Vd,Kt,Qd,Na,Gd,Hd,qr,He,Kd,fn,Xd,Yd,zr,qe,Ke,Sa,Xt,Zd,Ra,Jd,jr,G,ec,gn,tc,oc,_n,nc,ac,vn,sc,rc,yn,ic,lc,Fr,Yt,Pr,E,dc,bn,cc,pc,Ln,uc,mc,Ua,hc,fc,wn,gc,_c,kn,vc,yc,Ba,bc,Lc,Wa,wc,kc,Va,xc,Tc,Qa,Mc,$c,Ga,Ec,qc,Cr,B,xn,zc,jc,Zt,Fc,Pc,Tn,Cc,Ic,Ha,Ac,Dc,Ka,Oc,Nc,Ir,Mn,Sc,Ar,$n,Xa,Rc,Dr,En,Uc,Or,Jt,Nr,qn,Ya,Bc,Sr,ve,Wc,Za,Vc,Qc,Ja,Gc,Hc,Rr,eo,Ur,zn,es,Kc,Br,H,Xc,ts,Yc,Zc,os,Jc,ep,ns,tp,op,as,np,ap,Wr,to,Vr,jn,ss,sp,Qr,Fn,rp,Gr,oo,Hr,Pn,rs,ip,Kr,Cn,lp,Xr,no,Yr,ze,Xe,is,ao,dp,ls,cp,Zr,Z,so,pp,je,up,In,mp,hp,ro,fp,gp,_p,Fe,vp,An,yp,bp,Dn,Lp,wp,kp,Ye,Jr,Pe,Ze,ds,io,xp,cs,Tp,ei,J,lo,Mp,ps,$p,Ep,co,qp,us,zp,jp,Fp,ye,po,Pp,ms,Cp,Ip,Je,ti,Ce,et,hs,uo,Ap,fs,Dp,oi,N,mo,Op,S,Np,On,Sp,Rp,gs,Up,Bp,_s,Wp,Vp,vs,Qp,Gp,ys,Hp,Kp,bs,Xp,Yp,Zp,ho,Jp,Nn,eu,tu,ou,Sn,Rn,nu,au,su,tt,fo,ru,Ls,iu,lu,Un,go,ni,Ie,ot,ws,_o,du,ks,cu,ai,ee,vo,pu,yo,uu,xs,mu,hu,fu,bo,gu,Bn,_u,vu,yu,nt,Lo,bu,Ts,Lu,si,Ae,at,Ms,wo,wu,$s,ku,ri,W,ko,xu,Es,Tu,Mu,Wn,Vn,$u,Eu,qu,F,zu,Qn,ju,Fu,Gn,Pu,Cu,Hn,Iu,Au,qs,Du,Ou,zs,Nu,Su,js,Ru,Uu,Fs,Bu,Wu,Ps,Vu,Qu,Cs,Gu,Hu,Ku,be,xo,Xu,$,Yu,Is,Zu,Ju,To,As,em,tm,om,Kn,nm,am,Ds,sm,rm,Os,im,lm,Mo,Ns,dm,cm,pm,Ss,um,mm,Xn,hm,fm,Rs,gm,_m,Us,vm,ym,Bs,bm,Lm,Ws,wm,km,xm,Vs,Tm,ii,De,st,Qs,$o,Mm,Gs,$m,li,pe,Eo,Em,qo,qm,zo,zm,jm,Fm,se,jo,Pm,Oe,Cm,Yn,Im,Am,Hs,Dm,Om,Nm,rt,Sm,it,di,Ne,lt,Ks,Fo,Rm,Xs,Um,ci,te,Po,Bm,Co,Wm,Io,Vm,Qm,Gm,Ao,Hm,Do,Km,Xm,Ym,re,Oo,Zm,Se,Jm,Zn,eh,th,Ys,oh,nh,ah,dt,sh,ct,pi,Re,pt,Zs,No,rh,Js,ih,ui,oe,So,lh,ne,dh,Ro,ch,ph,Uo,uh,mh,Bo,hh,fh,Wo,gh,_h,vh,Vo,yh,Qo,bh,Lh,wh,ie,Go,kh,Ue,xh,Jn,Th,Mh,er,$h,Eh,qh,ut,zh,mt,mi,Be,ht,tr,Ho,jh,or,Fh,hi,ae,Ko,Ph,ue,Ch,Xo,Ih,Ah,nr,Dh,Oh,ar,Nh,Sh,Rh,Yo,Uh,Zo,Bh,Wh,Vh,A,Jo,Qh,We,Gh,ea,Hh,Kh,sr,Xh,Yh,Zh,ft,Jh,rr,ef,tf,ir,of,nf,gt,af,_t,fi;return m=new ce({}),Et=new ce({}),Qt=new V({props:{code:`def normalize_bbox(bbox, width, height):
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
    ]`}}),Gt=new V({props:{code:`from PIL import Image

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
)

width, height = image.size`,highlighted:`<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
)

width, height = image.size`}}),Xt=new ce({}),Yt=new V({props:{code:`from transformers import LayoutLMv2FeatureExtractor, LayoutLMv2TokenizerFast, LayoutLMv2Processor

feature_extractor = LayoutLMv2FeatureExtractor()  # apply_ocr is set to True by default
tokenizer = LayoutLMv2TokenizerFast.from_pretrained("microsoft/layoutlmv2-base-uncased")
processor = LayoutLMv2Processor(feature_extractor, tokenizer)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2FeatureExtractor, LayoutLMv2TokenizerFast, LayoutLMv2Processor

feature_extractor = LayoutLMv2FeatureExtractor()  <span class="hljs-comment"># apply_ocr is set to True by default</span>
tokenizer = LayoutLMv2TokenizerFast.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
processor = LayoutLMv2Processor(feature_extractor, tokenizer)`}}),Jt=new V({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),eo=new V({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),to=new V({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;labels&#x27;, &#x27;image&#x27;])</span>`}}),oo=new V({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),no=new V({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),ao=new ce({}),so=new D({props:{name:"class transformers.LayoutLMv2Config",anchor:"transformers.LayoutLMv2Config",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"max_rel_pos",val:" = 128"},{name:"rel_pos_bins",val:" = 32"},{name:"fast_qkv",val:" = True"},{name:"max_rel_2d_pos",val:" = 256"},{name:"rel_2d_pos_bins",val:" = 64"},{name:"convert_sync_batchnorm",val:" = True"},{name:"image_feature_pool_shape",val:" = [7, 7, 256]"},{name:"coordinate_size",val:" = 128"},{name:"shape_size",val:" = 128"},{name:"has_relative_attention_bias",val:" = True"},{name:"has_spatial_attention_bias",val:" = True"},{name:"has_visual_segment_embedding",val:" = False"},{name:"detectron2_config_args",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
for details regarding default values.`,name:"detectron2_config_args"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/configuration_layoutlmv2.py#L34"}}),Ye=new on({props:{anchor:"transformers.LayoutLMv2Config.example",$$slots:{default:[Pv]},$$scope:{ctx:j}}}),io=new ce({}),lo=new D({props:{name:"class transformers.LayoutLMv2FeatureExtractor",anchor:"transformers.LayoutLMv2FeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"apply_ocr",val:" = True"},{name:"ocr_lang",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2FeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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

					</div>`,name:"ocr_lang"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/feature_extraction_layoutlmv2.py#L82"}}),po=new D({props:{name:"__call__",anchor:"transformers.LayoutLMv2FeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2FeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
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
`}}),Je=new on({props:{anchor:"transformers.LayoutLMv2FeatureExtractor.__call__.example",$$slots:{default:[Cv]},$$scope:{ctx:j}}}),uo=new ce({}),mo=new D({props:{name:"class transformers.LayoutLMv2Tokenizer",anchor:"transformers.LayoutLMv2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"model_max_length",val:": int = 512"},{name:"additional_special_tokens",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L198"}}),fo=new D({props:{name:"__call__",anchor:"transformers.LayoutLMv2Tokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Tokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
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
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L418"}}),go=new D({props:{name:"save_vocabulary",anchor:"transformers.LayoutLMv2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L398"}}),_o=new ce({}),vo=new D({props:{name:"class transformers.LayoutLMv2TokenizerFast",anchor:"transformers.LayoutLMv2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original LayoutLMv2).`,name:"tokenize_chinese_chars"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/tokenization_layoutlmv2_fast.py#L70"}}),Lo=new D({props:{name:"__call__",anchor:"transformers.LayoutLMv2TokenizerFast.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
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
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/tokenization_layoutlmv2_fast.py#L179"}}),wo=new ce({}),ko=new D({props:{name:"class transformers.LayoutLMv2Processor",anchor:"transformers.LayoutLMv2Processor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>LayoutLMv2FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor">LayoutLMv2FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.LayoutLMv2Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>LayoutLMv2Tokenizer</code> or <code>LayoutLMv2TokenizerFast</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a> or <a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast">LayoutLMv2TokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/processing_layoutlmv2.py#L25"}}),xo=new D({props:{name:"__call__",anchor:"transformers.LayoutLMv2Processor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/processing_layoutlmv2.py#L47"}}),$o=new ce({}),Eo=new D({props:{name:"class transformers.LayoutLMv2Model",anchor:"transformers.LayoutLMv2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17168/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L708"}}),jo=new D({props:{name:"forward",anchor:"transformers.LayoutLMv2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_17168/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L806",returnDescription:`
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
`}}),rt=new Vi({props:{$$slots:{default:[Iv]},$$scope:{ctx:j}}}),it=new on({props:{anchor:"transformers.LayoutLMv2Model.forward.example",$$slots:{default:[Av]},$$scope:{ctx:j}}}),Fo=new ce({}),Po=new D({props:{name:"class transformers.LayoutLMv2ForSequenceClassification",anchor:"transformers.LayoutLMv2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17168/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L964"}}),Oo=new D({props:{name:"forward",anchor:"transformers.LayoutLMv2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L978",returnDescription:`
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
`}}),dt=new Vi({props:{$$slots:{default:[Dv]},$$scope:{ctx:j}}}),ct=new on({props:{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.example",$$slots:{default:[Ov]},$$scope:{ctx:j}}}),No=new ce({}),So=new D({props:{name:"class transformers.LayoutLMv2ForTokenClassification",anchor:"transformers.LayoutLMv2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17168/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1145"}}),Go=new D({props:{name:"forward",anchor:"transformers.LayoutLMv2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1159",returnDescription:`
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
`}}),ut=new Vi({props:{$$slots:{default:[Nv]},$$scope:{ctx:j}}}),mt=new on({props:{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.example",$$slots:{default:[Sv]},$$scope:{ctx:j}}}),Ho=new ce({}),Ko=new D({props:{name:"class transformers.LayoutLMv2ForQuestionAnswering",anchor:"transformers.LayoutLMv2ForQuestionAnswering",parameters:[{name:"config",val:""},{name:"has_visual_segment_embedding",val:" = True"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17168/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1276"}}),Jo=new D({props:{name:"forward",anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17168/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1290",returnDescription:`
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
`}}),ft=new Vi({props:{$$slots:{default:[Rv]},$$scope:{ctx:j}}}),gt=new on({props:{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.example",$$slots:{default:[Uv]},$$scope:{ctx:j}}}),_t=new on({props:{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.example-2",$$slots:{default:[Bv]},$$scope:{ctx:j}}}),{c(){h=s("meta"),x=c(),f=s("h1"),g=s("a"),T=s("span"),v(m.$$.fragment),_=c(),O=s("span"),Qi=n("LayoutLMV2"),gr=c(),$e=s("h2"),Qe=s("a"),fa=s("span"),v(Et.$$.fragment),Gi=c(),ga=s("span"),Hi=n("Overview"),_r=c(),he=s("p"),Ki=n("The LayoutLMV2 model was proposed in "),qt=s("a"),Xi=n("LayoutLMv2: Multi-modal Pre-training for Visually-Rich Document Understanding"),Yi=n(` by Yang Xu, Yiheng Xu, Tengchao Lv, Lei Cui, Furu Wei, Guoxin Wang, Yijuan Lu,
Dinei Florencio, Cha Zhang, Wanxiang Che, Min Zhang, Lidong Zhou. LayoutLMV2 improves `),an=s("a"),Zi=n("LayoutLM"),Ji=n(` to obtain
state-of-the-art results across several document image understanding benchmarks:`),vr=c(),fe=s("ul"),Y=s("li"),el=n("information extraction from scanned documents: the "),zt=s("a"),tl=n("FUNSD"),ol=n(` dataset (a
collection of 199 annotated forms comprising more than 30,000 words), the `),jt=s("a"),nl=n("CORD"),al=n(`
dataset (a collection of 800 receipts for training, 100 for validation and 100 for testing), the `),Ft=s("a"),sl=n("SROIE"),rl=n(` dataset (a collection of 626 receipts for training and 347 receipts for testing)
and the `),Pt=s("a"),il=n("Kleister-NDA"),ll=n(` dataset (a collection of non-disclosure
agreements from the EDGAR database, including 254 documents for training, 83 documents for validation, and 203
documents for testing).`),dl=c(),Ct=s("li"),cl=n("document image classification: the "),It=s("a"),pl=n("RVL-CDIP"),ul=n(` dataset (a collection of
400,000 images belonging to one of 16 classes).`),ml=c(),At=s("li"),hl=n("document visual question answering: the "),Dt=s("a"),fl=n("DocVQA"),gl=n(` dataset (a collection of 50,000
questions defined on 12,000+ document images).`),yr=c(),sn=s("p"),_l=n("The abstract from the paper is the following:"),br=c(),rn=s("p"),_a=s("em"),vl=n(`Pre-training of text and layout has proved effective in a variety of visually-rich document understanding tasks due to
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
this https URL.`),Lr=c(),R=s("p"),yl=n("LayoutLMv2 depends on "),va=s("code"),bl=n("detectron2"),Ll=n(", "),ya=s("code"),wl=n("torchvision"),kl=n(" and "),ba=s("code"),xl=n("tesseract"),Tl=n(`. Run the
following to install them:
`),La=s("code"),Ml=n("python -m pip install 'git+https://github.com/facebookresearch/detectron2.git'"),$l=c(),wa=s("code"),El=n("python -m pip install torchvision tesseract"),ql=n(`
(If you are developing for LayoutLMv2, note that passing the doctests also requires the installation of these packages.)`),wr=c(),ln=s("p"),zl=n("Tips:"),kr=c(),Q=s("ul"),ka=s("li"),jl=n(`The main difference between LayoutLMv1 and LayoutLMv2 is that the latter incorporates visual embeddings during
pre-training (while LayoutLMv1 only adds visual embeddings during fine-tuning).`),Fl=c(),Ot=s("li"),Pl=n(`LayoutLMv2 adds both a relative 1D attention bias as well as a spatial 2D attention bias to the attention scores in
the self-attention layers. Details can be found on page 5 of the `),Nt=s("a"),Cl=n("paper"),Il=n("."),Al=c(),St=s("li"),Dl=n("Demo notebooks on how to use the LayoutLMv2 model on RVL-CDIP, FUNSD, DocVQA, CORD can be found "),Rt=s("a"),Ol=n("here"),Nl=n("."),Sl=c(),Ee=s("li"),Rl=n("LayoutLMv2 uses Facebook AI\u2019s "),Ut=s("a"),Ul=n("Detectron2"),Bl=n(` package for its visual
backbone. See `),Bt=s("a"),Wl=n("this link"),Vl=n(` for installation
instructions.`),Ql=c(),M=s("li"),Gl=n("In addition to "),xa=s("code"),Hl=n("input_ids"),Kl=n(", "),dn=s("a"),Xl=n("forward()"),Yl=n(` expects 2 additional inputs, namely
`),Ta=s("code"),Zl=n("image"),Jl=n(" and "),Ma=s("code"),ed=n("bbox"),td=n(". The "),$a=s("code"),od=n("image"),nd=n(` input corresponds to the original document image in which the text
tokens occur. The model expects each document image to be of size 224x224. This means that if you have a batch of
document images, `),Ea=s("code"),ad=n("image"),sd=n(` should be a tensor of shape (batch_size, 3, 224, 224). This can be either a
`),qa=s("code"),rd=n("torch.Tensor"),id=n(" or a "),za=s("code"),ld=n("Detectron2.structures.ImageList"),dd=n(`. You don\u2019t need to normalize the channels, as this is
done by the model. Important to note is that the visual backbone expects BGR channels instead of RGB, as all models
in Detectron2 are pre-trained using the BGR format. The `),ja=s("code"),cd=n("bbox"),pd=n(` input are the bounding boxes (i.e. 2D-positions)
of the input text tokens. This is identical to `),cn=s("a"),ud=n("LayoutLMModel"),md=n(`. These can be obtained using an
external OCR engine such as Google\u2019s `),Wt=s("a"),hd=n("Tesseract"),fd=n(" (there\u2019s a "),Vt=s("a"),gd=n(`Python
wrapper`),_d=n(` available). Each bounding box should be in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1)
represents the position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on
a 0-1000 scale. To normalize, you can use the following function:`),xr=c(),v(Qt.$$.fragment),Tr=c(),ge=s("p"),vd=n("Here, "),Fa=s("code"),yd=n("width"),bd=n(" and "),Pa=s("code"),Ld=n("height"),wd=n(` correspond to the width and height of the original document in which the token
occurs (before resizing the image). Those can be obtained using the Python Image Library (PIL) library for example, as
follows:`),Mr=c(),v(Gt.$$.fragment),$r=c(),Ge=s("p"),kd=n("However, this model includes a brand new "),pn=s("a"),xd=n("LayoutLMv2Processor"),Td=n(` which can be used to directly
prepare data for the model (including applying OCR under the hood). More information can be found in the \u201CUsage\u201D
section below.`),Er=c(),_e=s("ul"),I=s("li"),Md=n("Internally, "),un=s("a"),$d=n("LayoutLMv2Model"),Ed=n(" will send the "),Ca=s("code"),qd=n("image"),zd=n(` input through its visual backbone to
obtain a lower-resolution feature map, whose shape is equal to the `),Ia=s("code"),jd=n("image_feature_pool_shape"),Fd=n(` attribute of
`),mn=s("a"),Pd=n("LayoutLMv2Config"),Cd=n(`. This feature map is then flattened to obtain a sequence of image tokens. As
the size of the feature map is 7x7 by default, one obtains 49 image tokens. These are then concatenated with the text
tokens, and send through the Transformer encoder. This means that the last hidden states of the model will have a
length of 512 + 49 = 561, if you pad the text tokens up to the max length. More generally, the last hidden states
will have a shape of `),Aa=s("code"),Id=n("seq_length"),Ad=n(" + "),Da=s("code"),Dd=n("image_feature_pool_shape[0]"),Od=n(` *
`),Oa=s("code"),Nd=n("config.image_feature_pool_shape[1]"),Sd=n("."),Rd=c(),Ht=s("li"),Ud=n("When calling "),hn=s("a"),Bd=n("from_pretrained()"),Wd=n(`, a warning will be printed with a long list of
parameter names that are not initialized. This is not a problem, as these parameters are batch normalization
statistics, which are going to have values when fine-tuning on a custom dataset.`),Vd=c(),Kt=s("li"),Qd=n("If you want to train the model in a distributed environment, make sure to call "),Na=s("code"),Gd=n("synchronize_batch_norm"),Hd=n(` on the
model in order to properly synchronize the batch normalization layers of the visual backbone.`),qr=c(),He=s("p"),Kd=n(`In addition, there\u2019s LayoutXLM, which is a multilingual version of LayoutLMv2. More information can be found on
`),fn=s("a"),Xd=n("LayoutXLM\u2019s documentation page"),Yd=n("."),zr=c(),qe=s("h2"),Ke=s("a"),Sa=s("span"),v(Xt.$$.fragment),Zd=c(),Ra=s("span"),Jd=n("Usage: LayoutLMv2Processor"),jr=c(),G=s("p"),ec=n("The easiest way to prepare data for the model is to use "),gn=s("a"),tc=n("LayoutLMv2Processor"),oc=n(`, which internally
combines a feature extractor (`),_n=s("a"),nc=n("LayoutLMv2FeatureExtractor"),ac=n(`) and a tokenizer
(`),vn=s("a"),sc=n("LayoutLMv2Tokenizer"),rc=n(" or "),yn=s("a"),ic=n("LayoutLMv2TokenizerFast"),lc=n(`). The feature extractor
handles the image modality, while the tokenizer handles the text modality. A processor combines both, which is ideal
for a multi-modal model like LayoutLMv2. Note that you can still use both separately, if you only want to handle one
modality.`),Fr=c(),v(Yt.$$.fragment),Pr=c(),E=s("p"),dc=n("In short, one can provide a document image (and possibly additional data) to "),bn=s("a"),cc=n("LayoutLMv2Processor"),pc=n(`,
and it will create the inputs expected by the model. Internally, the processor first uses
`),Ln=s("a"),uc=n("LayoutLMv2FeatureExtractor"),mc=n(` to apply OCR on the image to get a list of words and normalized
bounding boxes, as well to resize the image to a given size in order to get the `),Ua=s("code"),hc=n("image"),fc=n(` input. The words and
normalized bounding boxes are then provided to `),wn=s("a"),gc=n("LayoutLMv2Tokenizer"),_c=n(` or
`),kn=s("a"),vc=n("LayoutLMv2TokenizerFast"),yc=n(", which converts them to token-level "),Ba=s("code"),bc=n("input_ids"),Lc=n(`,
`),Wa=s("code"),wc=n("attention_mask"),kc=n(", "),Va=s("code"),xc=n("token_type_ids"),Tc=n(", "),Qa=s("code"),Mc=n("bbox"),$c=n(`. Optionally, one can provide word labels to the processor,
which are turned into token-level `),Ga=s("code"),Ec=n("labels"),qc=n("."),Cr=c(),B=s("p"),xn=s("a"),zc=n("LayoutLMv2Processor"),jc=n(" uses "),Zt=s("a"),Fc=n("PyTesseract"),Pc=n(`, a Python
wrapper around Google\u2019s Tesseract OCR engine, under the hood. Note that you can still use your own OCR engine of
choice, and provide the words and normalized boxes yourself. This requires initializing
`),Tn=s("a"),Cc=n("LayoutLMv2FeatureExtractor"),Ic=n(" with "),Ha=s("code"),Ac=n("apply_ocr"),Dc=n(" set to "),Ka=s("code"),Oc=n("False"),Nc=n("."),Ir=c(),Mn=s("p"),Sc=n(`In total, there are 5 use cases that are supported by the processor. Below, we list them all. Note that each of these
use cases work for both batched and non-batched inputs (we illustrate them for non-batched inputs).`),Ar=c(),$n=s("p"),Xa=s("strong"),Rc=n(`Use case 1: document image classification (training, inference) + token classification (inference), apply_ocr =
True`),Dr=c(),En=s("p"),Uc=n(`This is the simplest case, in which the processor (actually the feature extractor) will perform OCR on the image to get
the words and normalized bounding boxes.`),Or=c(),v(Jt.$$.fragment),Nr=c(),qn=s("p"),Ya=s("strong"),Bc=n("Use case 2: document image classification (training, inference) + token classification (inference), apply_ocr=False"),Sr=c(),ve=s("p"),Wc=n("In case one wants to do OCR themselves, one can initialize the feature extractor with "),Za=s("code"),Vc=n("apply_ocr"),Qc=n(` set to
`),Ja=s("code"),Gc=n("False"),Hc=n(`. In that case, one should provide the words and corresponding (normalized) bounding boxes themselves to
the processor.`),Rr=c(),v(eo.$$.fragment),Ur=c(),zn=s("p"),es=s("strong"),Kc=n("Use case 3: token classification (training), apply_ocr=False"),Br=c(),H=s("p"),Xc=n(`For token classification tasks (such as FUNSD, CORD, SROIE, Kleister-NDA), one can also provide the corresponding word
labels in order to train a model. The processor will then convert these into token-level `),ts=s("code"),Yc=n("labels"),Zc=n(`. By default, it
will only label the first wordpiece of a word, and label the remaining wordpieces with -100, which is the
`),os=s("code"),Jc=n("ignore_index"),ep=n(` of PyTorch\u2019s CrossEntropyLoss. In case you want all wordpieces of a word to be labeled, you can
initialize the tokenizer with `),ns=s("code"),tp=n("only_label_first_subword"),op=n(" set to "),as=s("code"),np=n("False"),ap=n("."),Wr=c(),v(to.$$.fragment),Vr=c(),jn=s("p"),ss=s("strong"),sp=n("Use case 4: visual question answering (inference), apply_ocr=True"),Qr=c(),Fn=s("p"),rp=n(`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. By default, the
processor will apply OCR on the image, and create [CLS] question tokens [SEP] word tokens [SEP].`),Gr=c(),v(oo.$$.fragment),Hr=c(),Pn=s("p"),rs=s("strong"),ip=n("Use case 5: visual question answering (inference), apply_ocr=False"),Kr=c(),Cn=s("p"),lp=n(`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. If you want to
perform OCR yourself, you can provide your own words and (normalized) bounding boxes to the processor.`),Xr=c(),v(no.$$.fragment),Yr=c(),ze=s("h2"),Xe=s("a"),is=s("span"),v(ao.$$.fragment),dp=c(),ls=s("span"),cp=n("LayoutLMv2Config"),Zr=c(),Z=s("div"),v(so.$$.fragment),pp=c(),je=s("p"),up=n("This is the configuration class to store the configuration of a "),In=s("a"),mp=n("LayoutLMv2Model"),hp=n(`. It is used to instantiate an
LayoutLMv2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv2
`),ro=s("a"),fp=n("microsoft/layoutlmv2-base-uncased"),gp=n(" architecture."),_p=c(),Fe=s("p"),vp=n("Configuration objects inherit from "),An=s("a"),yp=n("PretrainedConfig"),bp=n(` and can be used to control the model outputs. Read the
documentation from `),Dn=s("a"),Lp=n("PretrainedConfig"),wp=n(" for more information."),kp=c(),v(Ye.$$.fragment),Jr=c(),Pe=s("h2"),Ze=s("a"),ds=s("span"),v(io.$$.fragment),xp=c(),cs=s("span"),Tp=n("LayoutLMv2FeatureExtractor"),ei=c(),J=s("div"),v(lo.$$.fragment),Mp=c(),ps=s("p"),$p=n(`Constructs a LayoutLMv2 feature extractor. This can be used to resize document images to the same size, as well as
to apply OCR on them in order to get a list of words and normalized bounding boxes.`),Ep=c(),co=s("p"),qp=n("This feature extractor inherits from "),us=s("code"),zp=n("PreTrainedFeatureExtractor()"),jp=n(` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),Fp=c(),ye=s("div"),v(po.$$.fragment),Pp=c(),ms=s("p"),Cp=n("Main method to prepare for the model one or several image(s)."),Ip=c(),v(Je.$$.fragment),ti=c(),Ce=s("h2"),et=s("a"),hs=s("span"),v(uo.$$.fragment),Ap=c(),fs=s("span"),Dp=n("LayoutLMv2Tokenizer"),oi=c(),N=s("div"),v(mo.$$.fragment),Op=c(),S=s("p"),Np=n("Construct a LayoutLMv2 tokenizer. Based on WordPiece. "),On=s("a"),Sp=n("LayoutLMv2Tokenizer"),Rp=n(` can be used to turn words, word-level
bounding boxes and optional word labels to token-level `),gs=s("code"),Up=n("input_ids"),Bp=n(", "),_s=s("code"),Wp=n("attention_mask"),Vp=n(", "),vs=s("code"),Qp=n("token_type_ids"),Gp=n(", "),ys=s("code"),Hp=n("bbox"),Kp=n(`, and
optional `),bs=s("code"),Xp=n("labels"),Yp=n(" (for token classification)."),Zp=c(),ho=s("p"),Jp=n("This tokenizer inherits from "),Nn=s("a"),eu=n("PreTrainedTokenizer"),tu=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ou=c(),Sn=s("p"),Rn=s("a"),nu=n("LayoutLMv2Tokenizer"),au=n(` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),su=c(),tt=s("div"),v(fo.$$.fragment),ru=c(),Ls=s("p"),iu=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),lu=c(),Un=s("div"),v(go.$$.fragment),ni=c(),Ie=s("h2"),ot=s("a"),ws=s("span"),v(_o.$$.fragment),du=c(),ks=s("span"),cu=n("LayoutLMv2TokenizerFast"),ai=c(),ee=s("div"),v(vo.$$.fragment),pu=c(),yo=s("p"),uu=n("Construct a \u201Cfast\u201D LayoutLMv2 tokenizer (backed by HuggingFace\u2019s "),xs=s("em"),mu=n("tokenizers"),hu=n(" library). Based on WordPiece."),fu=c(),bo=s("p"),gu=n("This tokenizer inherits from "),Bn=s("a"),_u=n("PreTrainedTokenizerFast"),vu=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),yu=c(),nt=s("div"),v(Lo.$$.fragment),bu=c(),Ts=s("p"),Lu=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),si=c(),Ae=s("h2"),at=s("a"),Ms=s("span"),v(wo.$$.fragment),wu=c(),$s=s("span"),ku=n("LayoutLMv2Processor"),ri=c(),W=s("div"),v(ko.$$.fragment),xu=c(),Es=s("p"),Tu=n(`Constructs a LayoutLMv2 processor which combines a LayoutLMv2 feature extractor and a LayoutLMv2 tokenizer into a
single processor.`),Mu=c(),Wn=s("p"),Vn=s("a"),$u=n("LayoutLMv2Processor"),Eu=n(" offers all the functionalities you need to prepare data for the model."),qu=c(),F=s("p"),zu=n("It first uses "),Qn=s("a"),ju=n("LayoutLMv2FeatureExtractor"),Fu=n(` to resize document images to a fixed size, and optionally applies OCR
to get words and normalized bounding boxes. These are then provided to `),Gn=s("a"),Pu=n("LayoutLMv2Tokenizer"),Cu=n(` or
`),Hn=s("a"),Iu=n("LayoutLMv2TokenizerFast"),Au=n(", which turns the words and bounding boxes into token-level "),qs=s("code"),Du=n("input_ids"),Ou=n(`,
`),zs=s("code"),Nu=n("attention_mask"),Su=n(", "),js=s("code"),Ru=n("token_type_ids"),Uu=n(", "),Fs=s("code"),Bu=n("bbox"),Wu=n(". Optionally, one can provide integer "),Ps=s("code"),Vu=n("word_labels"),Qu=n(`, which are turned
into token-level `),Cs=s("code"),Gu=n("labels"),Hu=n(" for token classification tasks (such as FUNSD, CORD)."),Ku=c(),be=s("div"),v(xo.$$.fragment),Xu=c(),$=s("p"),Yu=n("This method first forwards the "),Is=s("code"),Zu=n("images"),Ju=n(" argument to "),To=s("a"),As=s("strong"),em=n("call"),tm=n("()"),om=n(`. In case
`),Kn=s("a"),nm=n("LayoutLMv2FeatureExtractor"),am=n(" was initialized with "),Ds=s("code"),sm=n("apply_ocr"),rm=n(" set to "),Os=s("code"),im=n("True"),lm=n(`, it passes the obtained words and
bounding boxes along with the additional arguments to `),Mo=s("a"),Ns=s("strong"),dm=n("call"),cm=n("()"),pm=n(` and returns the output,
together with resized `),Ss=s("code"),um=n("images"),mm=n(". In case "),Xn=s("a"),hm=n("LayoutLMv2FeatureExtractor"),fm=n(" was initialized with "),Rs=s("code"),gm=n("apply_ocr"),_m=n(` set to
`),Us=s("code"),vm=n("False"),ym=n(", it passes the words ("),Bs=s("code"),bm=n("text"),Lm=n("/"),Ws=s("code"),wm=n("text_pair`) and `boxes` specified by the user along with the additional arguments to [__call__()](/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__) and returns the output, together with resized `images"),km=n("."),xm=c(),Vs=s("p"),Tm=n("Please refer to the docstring of the above two methods for more information."),ii=c(),De=s("h2"),st=s("a"),Qs=s("span"),v($o.$$.fragment),Mm=c(),Gs=s("span"),$m=n("LayoutLMv2Model"),li=c(),pe=s("div"),v(Eo.$$.fragment),Em=c(),qo=s("p"),qm=n(`The bare LayoutLMv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),zo=s("a"),zm=n("torch.nn.Module"),jm=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Fm=c(),se=s("div"),v(jo.$$.fragment),Pm=c(),Oe=s("p"),Cm=n("The "),Yn=s("a"),Im=n("LayoutLMv2Model"),Am=n(" forward method, overrides the "),Hs=s("code"),Dm=n("__call__"),Om=n(" special method."),Nm=c(),v(rt.$$.fragment),Sm=c(),v(it.$$.fragment),di=c(),Ne=s("h2"),lt=s("a"),Ks=s("span"),v(Fo.$$.fragment),Rm=c(),Xs=s("span"),Um=n("LayoutLMv2ForSequenceClassification"),ci=c(),te=s("div"),v(Po.$$.fragment),Bm=c(),Co=s("p"),Wm=n(`LayoutLMv2 Model with a sequence classification head on top (a linear layer on top of the concatenation of the
final hidden state of the [CLS] token, average-pooled initial visual embeddings and average-pooled final visual
embeddings, e.g. for document image classification tasks such as the
`),Io=s("a"),Vm=n("RVL-CDIP"),Qm=n(" dataset."),Gm=c(),Ao=s("p"),Hm=n("This model is a PyTorch "),Do=s("a"),Km=n("torch.nn.Module"),Xm=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ym=c(),re=s("div"),v(Oo.$$.fragment),Zm=c(),Se=s("p"),Jm=n("The "),Zn=s("a"),eh=n("LayoutLMv2ForSequenceClassification"),th=n(" forward method, overrides the "),Ys=s("code"),oh=n("__call__"),nh=n(" special method."),ah=c(),v(dt.$$.fragment),sh=c(),v(ct.$$.fragment),pi=c(),Re=s("h2"),pt=s("a"),Zs=s("span"),v(No.$$.fragment),rh=c(),Js=s("span"),ih=n("LayoutLMv2ForTokenClassification"),ui=c(),oe=s("div"),v(So.$$.fragment),lh=c(),ne=s("p"),dh=n(`LayoutLMv2 Model with a token classification head on top (a linear layer on top of the text part of the hidden
states) e.g. for sequence labeling (information extraction) tasks such as
`),Ro=s("a"),ch=n("FUNSD"),ph=n(", "),Uo=s("a"),uh=n("SROIE"),mh=n(`,
`),Bo=s("a"),hh=n("CORD"),fh=n(" and "),Wo=s("a"),gh=n("Kleister-NDA"),_h=n("."),vh=c(),Vo=s("p"),yh=n("This model is a PyTorch "),Qo=s("a"),bh=n("torch.nn.Module"),Lh=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wh=c(),ie=s("div"),v(Go.$$.fragment),kh=c(),Ue=s("p"),xh=n("The "),Jn=s("a"),Th=n("LayoutLMv2ForTokenClassification"),Mh=n(" forward method, overrides the "),er=s("code"),$h=n("__call__"),Eh=n(" special method."),qh=c(),v(ut.$$.fragment),zh=c(),v(mt.$$.fragment),mi=c(),Be=s("h2"),ht=s("a"),tr=s("span"),v(Ho.$$.fragment),jh=c(),or=s("span"),Fh=n("LayoutLMv2ForQuestionAnswering"),hi=c(),ae=s("div"),v(Ko.$$.fragment),Ph=c(),ue=s("p"),Ch=n(`LayoutLMv2 Model with a span classification head on top for extractive question-answering tasks such as
`),Xo=s("a"),Ih=n("DocVQA"),Ah=n(` (a linear layer on top of the text part of the hidden-states output to
compute `),nr=s("code"),Dh=n("span start logits"),Oh=n(" and "),ar=s("code"),Nh=n("span end logits"),Sh=n(")."),Rh=c(),Yo=s("p"),Uh=n("This model is a PyTorch "),Zo=s("a"),Bh=n("torch.nn.Module"),Wh=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vh=c(),A=s("div"),v(Jo.$$.fragment),Qh=c(),We=s("p"),Gh=n("The "),ea=s("a"),Hh=n("LayoutLMv2ForQuestionAnswering"),Kh=n(" forward method, overrides the "),sr=s("code"),Xh=n("__call__"),Yh=n(" special method."),Zh=c(),v(ft.$$.fragment),Jh=c(),rr=s("p"),ef=n("Example:"),tf=c(),ir=s("p"),of=n(`In this example below, we give the LayoutLMv2 model an image (of texts) and ask it a question. It will give us
a prediction of what it thinks the answer is (the span of the answer within the texts parsed from the image).`),nf=c(),v(gt.$$.fragment),af=c(),v(_t.$$.fragment),this.h()},l(t){const d=jv('[data-svelte="svelte-1phssyn"]',document.head);h=r(d,"META",{name:!0,content:!0}),d.forEach(o),x=p(t),f=r(t,"H1",{class:!0});var en=i(f);g=r(en,"A",{id:!0,class:!0,href:!0});var lr=i(g);T=r(lr,"SPAN",{});var dr=i(T);y(m.$$.fragment,dr),dr.forEach(o),lr.forEach(o),_=p(en),O=r(en,"SPAN",{});var cr=i(O);Qi=a(cr,"LayoutLMV2"),cr.forEach(o),en.forEach(o),gr=p(t),$e=r(t,"H2",{class:!0});var tn=i($e);Qe=r(tn,"A",{id:!0,class:!0,href:!0});var pr=i(Qe);fa=r(pr,"SPAN",{});var ur=i(fa);y(Et.$$.fragment,ur),ur.forEach(o),pr.forEach(o),Gi=p(tn),ga=r(tn,"SPAN",{});var mr=i(ga);Hi=a(mr,"Overview"),mr.forEach(o),tn.forEach(o),_r=p(t),he=r(t,"P",{});var Ve=i(he);Ki=a(Ve,"The LayoutLMV2 model was proposed in "),qt=r(Ve,"A",{href:!0,rel:!0});var hr=i(qt);Xi=a(hr,"LayoutLMv2: Multi-modal Pre-training for Visually-Rich Document Understanding"),hr.forEach(o),Yi=a(Ve,` by Yang Xu, Yiheng Xu, Tengchao Lv, Lei Cui, Furu Wei, Guoxin Wang, Yijuan Lu,
Dinei Florencio, Cha Zhang, Wanxiang Che, Min Zhang, Lidong Zhou. LayoutLMV2 improves `),an=r(Ve,"A",{href:!0});var fr=i(an);Zi=a(fr,"LayoutLM"),fr.forEach(o),Ji=a(Ve,` to obtain
state-of-the-art results across several document image understanding benchmarks:`),Ve.forEach(o),vr=p(t),fe=r(t,"UL",{});var ta=i(fe);Y=r(ta,"LI",{});var Le=i(Y);el=a(Le,"information extraction from scanned documents: the "),zt=r(Le,"A",{href:!0,rel:!0});var cf=i(zt);tl=a(cf,"FUNSD"),cf.forEach(o),ol=a(Le,` dataset (a
collection of 199 annotated forms comprising more than 30,000 words), the `),jt=r(Le,"A",{href:!0,rel:!0});var pf=i(jt);nl=a(pf,"CORD"),pf.forEach(o),al=a(Le,`
dataset (a collection of 800 receipts for training, 100 for validation and 100 for testing), the `),Ft=r(Le,"A",{href:!0,rel:!0});var uf=i(Ft);sl=a(uf,"SROIE"),uf.forEach(o),rl=a(Le,` dataset (a collection of 626 receipts for training and 347 receipts for testing)
and the `),Pt=r(Le,"A",{href:!0,rel:!0});var mf=i(Pt);il=a(mf,"Kleister-NDA"),mf.forEach(o),ll=a(Le,` dataset (a collection of non-disclosure
agreements from the EDGAR database, including 254 documents for training, 83 documents for validation, and 203
documents for testing).`),Le.forEach(o),dl=p(ta),Ct=r(ta,"LI",{});var gi=i(Ct);cl=a(gi,"document image classification: the "),It=r(gi,"A",{href:!0,rel:!0});var hf=i(It);pl=a(hf,"RVL-CDIP"),hf.forEach(o),ul=a(gi,` dataset (a collection of
400,000 images belonging to one of 16 classes).`),gi.forEach(o),ml=p(ta),At=r(ta,"LI",{});var _i=i(At);hl=a(_i,"document visual question answering: the "),Dt=r(_i,"A",{href:!0,rel:!0});var ff=i(Dt);fl=a(ff,"DocVQA"),ff.forEach(o),gl=a(_i,` dataset (a collection of 50,000
questions defined on 12,000+ document images).`),_i.forEach(o),ta.forEach(o),yr=p(t),sn=r(t,"P",{});var gf=i(sn);_l=a(gf,"The abstract from the paper is the following:"),gf.forEach(o),br=p(t),rn=r(t,"P",{});var _f=i(rn);_a=r(_f,"EM",{});var vf=i(_a);vl=a(vf,`Pre-training of text and layout has proved effective in a variety of visually-rich document understanding tasks due to
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
this https URL.`),vf.forEach(o),_f.forEach(o),Lr=p(t),R=r(t,"P",{});var le=i(R);yl=a(le,"LayoutLMv2 depends on "),va=r(le,"CODE",{});var yf=i(va);bl=a(yf,"detectron2"),yf.forEach(o),Ll=a(le,", "),ya=r(le,"CODE",{});var bf=i(ya);wl=a(bf,"torchvision"),bf.forEach(o),kl=a(le," and "),ba=r(le,"CODE",{});var Lf=i(ba);xl=a(Lf,"tesseract"),Lf.forEach(o),Tl=a(le,`. Run the
following to install them:
`),La=r(le,"CODE",{});var wf=i(La);Ml=a(wf,"python -m pip install 'git+https://github.com/facebookresearch/detectron2.git'"),wf.forEach(o),$l=p(le),wa=r(le,"CODE",{});var kf=i(wa);El=a(kf,"python -m pip install torchvision tesseract"),kf.forEach(o),ql=a(le,`
(If you are developing for LayoutLMv2, note that passing the doctests also requires the installation of these packages.)`),le.forEach(o),wr=p(t),ln=r(t,"P",{});var xf=i(ln);zl=a(xf,"Tips:"),xf.forEach(o),kr=p(t),Q=r(t,"UL",{});var we=i(Q);ka=r(we,"LI",{});var Tf=i(ka);jl=a(Tf,`The main difference between LayoutLMv1 and LayoutLMv2 is that the latter incorporates visual embeddings during
pre-training (while LayoutLMv1 only adds visual embeddings during fine-tuning).`),Tf.forEach(o),Fl=p(we),Ot=r(we,"LI",{});var vi=i(Ot);Pl=a(vi,`LayoutLMv2 adds both a relative 1D attention bias as well as a spatial 2D attention bias to the attention scores in
the self-attention layers. Details can be found on page 5 of the `),Nt=r(vi,"A",{href:!0,rel:!0});var Mf=i(Nt);Cl=a(Mf,"paper"),Mf.forEach(o),Il=a(vi,"."),vi.forEach(o),Al=p(we),St=r(we,"LI",{});var yi=i(St);Dl=a(yi,"Demo notebooks on how to use the LayoutLMv2 model on RVL-CDIP, FUNSD, DocVQA, CORD can be found "),Rt=r(yi,"A",{href:!0,rel:!0});var $f=i(Rt);Ol=a($f,"here"),$f.forEach(o),Nl=a(yi,"."),yi.forEach(o),Sl=p(we),Ee=r(we,"LI",{});var oa=i(Ee);Rl=a(oa,"LayoutLMv2 uses Facebook AI\u2019s "),Ut=r(oa,"A",{href:!0,rel:!0});var Ef=i(Ut);Ul=a(Ef,"Detectron2"),Ef.forEach(o),Bl=a(oa,` package for its visual
backbone. See `),Bt=r(oa,"A",{href:!0,rel:!0});var qf=i(Bt);Wl=a(qf,"this link"),qf.forEach(o),Vl=a(oa,` for installation
instructions.`),oa.forEach(o),Ql=p(we),M=r(we,"LI",{});var q=i(M);Gl=a(q,"In addition to "),xa=r(q,"CODE",{});var zf=i(xa);Hl=a(zf,"input_ids"),zf.forEach(o),Kl=a(q,", "),dn=r(q,"A",{href:!0});var jf=i(dn);Xl=a(jf,"forward()"),jf.forEach(o),Yl=a(q,` expects 2 additional inputs, namely
`),Ta=r(q,"CODE",{});var Ff=i(Ta);Zl=a(Ff,"image"),Ff.forEach(o),Jl=a(q," and "),Ma=r(q,"CODE",{});var Pf=i(Ma);ed=a(Pf,"bbox"),Pf.forEach(o),td=a(q,". The "),$a=r(q,"CODE",{});var Cf=i($a);od=a(Cf,"image"),Cf.forEach(o),nd=a(q,` input corresponds to the original document image in which the text
tokens occur. The model expects each document image to be of size 224x224. This means that if you have a batch of
document images, `),Ea=r(q,"CODE",{});var If=i(Ea);ad=a(If,"image"),If.forEach(o),sd=a(q,` should be a tensor of shape (batch_size, 3, 224, 224). This can be either a
`),qa=r(q,"CODE",{});var Af=i(qa);rd=a(Af,"torch.Tensor"),Af.forEach(o),id=a(q," or a "),za=r(q,"CODE",{});var Df=i(za);ld=a(Df,"Detectron2.structures.ImageList"),Df.forEach(o),dd=a(q,`. You don\u2019t need to normalize the channels, as this is
done by the model. Important to note is that the visual backbone expects BGR channels instead of RGB, as all models
in Detectron2 are pre-trained using the BGR format. The `),ja=r(q,"CODE",{});var Of=i(ja);cd=a(Of,"bbox"),Of.forEach(o),pd=a(q,` input are the bounding boxes (i.e. 2D-positions)
of the input text tokens. This is identical to `),cn=r(q,"A",{href:!0});var Nf=i(cn);ud=a(Nf,"LayoutLMModel"),Nf.forEach(o),md=a(q,`. These can be obtained using an
external OCR engine such as Google\u2019s `),Wt=r(q,"A",{href:!0,rel:!0});var Sf=i(Wt);hd=a(Sf,"Tesseract"),Sf.forEach(o),fd=a(q," (there\u2019s a "),Vt=r(q,"A",{href:!0,rel:!0});var Rf=i(Vt);gd=a(Rf,`Python
wrapper`),Rf.forEach(o),_d=a(q,` available). Each bounding box should be in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1)
represents the position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on
a 0-1000 scale. To normalize, you can use the following function:`),q.forEach(o),we.forEach(o),xr=p(t),y(Qt.$$.fragment,t),Tr=p(t),ge=r(t,"P",{});var na=i(ge);vd=a(na,"Here, "),Fa=r(na,"CODE",{});var Uf=i(Fa);yd=a(Uf,"width"),Uf.forEach(o),bd=a(na," and "),Pa=r(na,"CODE",{});var Bf=i(Pa);Ld=a(Bf,"height"),Bf.forEach(o),wd=a(na,` correspond to the width and height of the original document in which the token
occurs (before resizing the image). Those can be obtained using the Python Image Library (PIL) library for example, as
follows:`),na.forEach(o),Mr=p(t),y(Gt.$$.fragment,t),$r=p(t),Ge=r(t,"P",{});var bi=i(Ge);kd=a(bi,"However, this model includes a brand new "),pn=r(bi,"A",{href:!0});var Wf=i(pn);xd=a(Wf,"LayoutLMv2Processor"),Wf.forEach(o),Td=a(bi,` which can be used to directly
prepare data for the model (including applying OCR under the hood). More information can be found in the \u201CUsage\u201D
section below.`),bi.forEach(o),Er=p(t),_e=r(t,"UL",{});var aa=i(_e);I=r(aa,"LI",{});var U=i(I);Md=a(U,"Internally, "),un=r(U,"A",{href:!0});var Vf=i(un);$d=a(Vf,"LayoutLMv2Model"),Vf.forEach(o),Ed=a(U," will send the "),Ca=r(U,"CODE",{});var Qf=i(Ca);qd=a(Qf,"image"),Qf.forEach(o),zd=a(U,` input through its visual backbone to
obtain a lower-resolution feature map, whose shape is equal to the `),Ia=r(U,"CODE",{});var Gf=i(Ia);jd=a(Gf,"image_feature_pool_shape"),Gf.forEach(o),Fd=a(U,` attribute of
`),mn=r(U,"A",{href:!0});var Hf=i(mn);Pd=a(Hf,"LayoutLMv2Config"),Hf.forEach(o),Cd=a(U,`. This feature map is then flattened to obtain a sequence of image tokens. As
the size of the feature map is 7x7 by default, one obtains 49 image tokens. These are then concatenated with the text
tokens, and send through the Transformer encoder. This means that the last hidden states of the model will have a
length of 512 + 49 = 561, if you pad the text tokens up to the max length. More generally, the last hidden states
will have a shape of `),Aa=r(U,"CODE",{});var Kf=i(Aa);Id=a(Kf,"seq_length"),Kf.forEach(o),Ad=a(U," + "),Da=r(U,"CODE",{});var Xf=i(Da);Dd=a(Xf,"image_feature_pool_shape[0]"),Xf.forEach(o),Od=a(U,` *
`),Oa=r(U,"CODE",{});var Yf=i(Oa);Nd=a(Yf,"config.image_feature_pool_shape[1]"),Yf.forEach(o),Sd=a(U,"."),U.forEach(o),Rd=p(aa),Ht=r(aa,"LI",{});var Li=i(Ht);Ud=a(Li,"When calling "),hn=r(Li,"A",{href:!0});var Zf=i(hn);Bd=a(Zf,"from_pretrained()"),Zf.forEach(o),Wd=a(Li,`, a warning will be printed with a long list of
parameter names that are not initialized. This is not a problem, as these parameters are batch normalization
statistics, which are going to have values when fine-tuning on a custom dataset.`),Li.forEach(o),Vd=p(aa),Kt=r(aa,"LI",{});var wi=i(Kt);Qd=a(wi,"If you want to train the model in a distributed environment, make sure to call "),Na=r(wi,"CODE",{});var Jf=i(Na);Gd=a(Jf,"synchronize_batch_norm"),Jf.forEach(o),Hd=a(wi,` on the
model in order to properly synchronize the batch normalization layers of the visual backbone.`),wi.forEach(o),aa.forEach(o),qr=p(t),He=r(t,"P",{});var ki=i(He);Kd=a(ki,`In addition, there\u2019s LayoutXLM, which is a multilingual version of LayoutLMv2. More information can be found on
`),fn=r(ki,"A",{href:!0});var eg=i(fn);Xd=a(eg,"LayoutXLM\u2019s documentation page"),eg.forEach(o),Yd=a(ki,"."),ki.forEach(o),zr=p(t),qe=r(t,"H2",{class:!0});var xi=i(qe);Ke=r(xi,"A",{id:!0,class:!0,href:!0});var tg=i(Ke);Sa=r(tg,"SPAN",{});var og=i(Sa);y(Xt.$$.fragment,og),og.forEach(o),tg.forEach(o),Zd=p(xi),Ra=r(xi,"SPAN",{});var ng=i(Ra);Jd=a(ng,"Usage: LayoutLMv2Processor"),ng.forEach(o),xi.forEach(o),jr=p(t),G=r(t,"P",{});var ke=i(G);ec=a(ke,"The easiest way to prepare data for the model is to use "),gn=r(ke,"A",{href:!0});var ag=i(gn);tc=a(ag,"LayoutLMv2Processor"),ag.forEach(o),oc=a(ke,`, which internally
combines a feature extractor (`),_n=r(ke,"A",{href:!0});var sg=i(_n);nc=a(sg,"LayoutLMv2FeatureExtractor"),sg.forEach(o),ac=a(ke,`) and a tokenizer
(`),vn=r(ke,"A",{href:!0});var rg=i(vn);sc=a(rg,"LayoutLMv2Tokenizer"),rg.forEach(o),rc=a(ke," or "),yn=r(ke,"A",{href:!0});var ig=i(yn);ic=a(ig,"LayoutLMv2TokenizerFast"),ig.forEach(o),lc=a(ke,`). The feature extractor
handles the image modality, while the tokenizer handles the text modality. A processor combines both, which is ideal
for a multi-modal model like LayoutLMv2. Note that you can still use both separately, if you only want to handle one
modality.`),ke.forEach(o),Fr=p(t),y(Yt.$$.fragment,t),Pr=p(t),E=r(t,"P",{});var P=i(E);dc=a(P,"In short, one can provide a document image (and possibly additional data) to "),bn=r(P,"A",{href:!0});var lg=i(bn);cc=a(lg,"LayoutLMv2Processor"),lg.forEach(o),pc=a(P,`,
and it will create the inputs expected by the model. Internally, the processor first uses
`),Ln=r(P,"A",{href:!0});var dg=i(Ln);uc=a(dg,"LayoutLMv2FeatureExtractor"),dg.forEach(o),mc=a(P,` to apply OCR on the image to get a list of words and normalized
bounding boxes, as well to resize the image to a given size in order to get the `),Ua=r(P,"CODE",{});var cg=i(Ua);hc=a(cg,"image"),cg.forEach(o),fc=a(P,` input. The words and
normalized bounding boxes are then provided to `),wn=r(P,"A",{href:!0});var pg=i(wn);gc=a(pg,"LayoutLMv2Tokenizer"),pg.forEach(o),_c=a(P,` or
`),kn=r(P,"A",{href:!0});var ug=i(kn);vc=a(ug,"LayoutLMv2TokenizerFast"),ug.forEach(o),yc=a(P,", which converts them to token-level "),Ba=r(P,"CODE",{});var mg=i(Ba);bc=a(mg,"input_ids"),mg.forEach(o),Lc=a(P,`,
`),Wa=r(P,"CODE",{});var hg=i(Wa);wc=a(hg,"attention_mask"),hg.forEach(o),kc=a(P,", "),Va=r(P,"CODE",{});var fg=i(Va);xc=a(fg,"token_type_ids"),fg.forEach(o),Tc=a(P,", "),Qa=r(P,"CODE",{});var gg=i(Qa);Mc=a(gg,"bbox"),gg.forEach(o),$c=a(P,`. Optionally, one can provide word labels to the processor,
which are turned into token-level `),Ga=r(P,"CODE",{});var _g=i(Ga);Ec=a(_g,"labels"),_g.forEach(o),qc=a(P,"."),P.forEach(o),Cr=p(t),B=r(t,"P",{});var me=i(B);xn=r(me,"A",{href:!0});var vg=i(xn);zc=a(vg,"LayoutLMv2Processor"),vg.forEach(o),jc=a(me," uses "),Zt=r(me,"A",{href:!0,rel:!0});var yg=i(Zt);Fc=a(yg,"PyTesseract"),yg.forEach(o),Pc=a(me,`, a Python
wrapper around Google\u2019s Tesseract OCR engine, under the hood. Note that you can still use your own OCR engine of
choice, and provide the words and normalized boxes yourself. This requires initializing
`),Tn=r(me,"A",{href:!0});var bg=i(Tn);Cc=a(bg,"LayoutLMv2FeatureExtractor"),bg.forEach(o),Ic=a(me," with "),Ha=r(me,"CODE",{});var Lg=i(Ha);Ac=a(Lg,"apply_ocr"),Lg.forEach(o),Dc=a(me," set to "),Ka=r(me,"CODE",{});var wg=i(Ka);Oc=a(wg,"False"),wg.forEach(o),Nc=a(me,"."),me.forEach(o),Ir=p(t),Mn=r(t,"P",{});var kg=i(Mn);Sc=a(kg,`In total, there are 5 use cases that are supported by the processor. Below, we list them all. Note that each of these
use cases work for both batched and non-batched inputs (we illustrate them for non-batched inputs).`),kg.forEach(o),Ar=p(t),$n=r(t,"P",{});var xg=i($n);Xa=r(xg,"STRONG",{});var Tg=i(Xa);Rc=a(Tg,`Use case 1: document image classification (training, inference) + token classification (inference), apply_ocr =
True`),Tg.forEach(o),xg.forEach(o),Dr=p(t),En=r(t,"P",{});var Mg=i(En);Uc=a(Mg,`This is the simplest case, in which the processor (actually the feature extractor) will perform OCR on the image to get
the words and normalized bounding boxes.`),Mg.forEach(o),Or=p(t),y(Jt.$$.fragment,t),Nr=p(t),qn=r(t,"P",{});var $g=i(qn);Ya=r($g,"STRONG",{});var Eg=i(Ya);Bc=a(Eg,"Use case 2: document image classification (training, inference) + token classification (inference), apply_ocr=False"),Eg.forEach(o),$g.forEach(o),Sr=p(t),ve=r(t,"P",{});var sa=i(ve);Wc=a(sa,"In case one wants to do OCR themselves, one can initialize the feature extractor with "),Za=r(sa,"CODE",{});var qg=i(Za);Vc=a(qg,"apply_ocr"),qg.forEach(o),Qc=a(sa,` set to
`),Ja=r(sa,"CODE",{});var zg=i(Ja);Gc=a(zg,"False"),zg.forEach(o),Hc=a(sa,`. In that case, one should provide the words and corresponding (normalized) bounding boxes themselves to
the processor.`),sa.forEach(o),Rr=p(t),y(eo.$$.fragment,t),Ur=p(t),zn=r(t,"P",{});var jg=i(zn);es=r(jg,"STRONG",{});var Fg=i(es);Kc=a(Fg,"Use case 3: token classification (training), apply_ocr=False"),Fg.forEach(o),jg.forEach(o),Br=p(t),H=r(t,"P",{});var xe=i(H);Xc=a(xe,`For token classification tasks (such as FUNSD, CORD, SROIE, Kleister-NDA), one can also provide the corresponding word
labels in order to train a model. The processor will then convert these into token-level `),ts=r(xe,"CODE",{});var Pg=i(ts);Yc=a(Pg,"labels"),Pg.forEach(o),Zc=a(xe,`. By default, it
will only label the first wordpiece of a word, and label the remaining wordpieces with -100, which is the
`),os=r(xe,"CODE",{});var Cg=i(os);Jc=a(Cg,"ignore_index"),Cg.forEach(o),ep=a(xe,` of PyTorch\u2019s CrossEntropyLoss. In case you want all wordpieces of a word to be labeled, you can
initialize the tokenizer with `),ns=r(xe,"CODE",{});var Ig=i(ns);tp=a(Ig,"only_label_first_subword"),Ig.forEach(o),op=a(xe," set to "),as=r(xe,"CODE",{});var Ag=i(as);np=a(Ag,"False"),Ag.forEach(o),ap=a(xe,"."),xe.forEach(o),Wr=p(t),y(to.$$.fragment,t),Vr=p(t),jn=r(t,"P",{});var Dg=i(jn);ss=r(Dg,"STRONG",{});var Og=i(ss);sp=a(Og,"Use case 4: visual question answering (inference), apply_ocr=True"),Og.forEach(o),Dg.forEach(o),Qr=p(t),Fn=r(t,"P",{});var Ng=i(Fn);rp=a(Ng,`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. By default, the
processor will apply OCR on the image, and create [CLS] question tokens [SEP] word tokens [SEP].`),Ng.forEach(o),Gr=p(t),y(oo.$$.fragment,t),Hr=p(t),Pn=r(t,"P",{});var Sg=i(Pn);rs=r(Sg,"STRONG",{});var Rg=i(rs);ip=a(Rg,"Use case 5: visual question answering (inference), apply_ocr=False"),Rg.forEach(o),Sg.forEach(o),Kr=p(t),Cn=r(t,"P",{});var Ug=i(Cn);lp=a(Ug,`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. If you want to
perform OCR yourself, you can provide your own words and (normalized) bounding boxes to the processor.`),Ug.forEach(o),Xr=p(t),y(no.$$.fragment,t),Yr=p(t),ze=r(t,"H2",{class:!0});var Ti=i(ze);Xe=r(Ti,"A",{id:!0,class:!0,href:!0});var Bg=i(Xe);is=r(Bg,"SPAN",{});var Wg=i(is);y(ao.$$.fragment,Wg),Wg.forEach(o),Bg.forEach(o),dp=p(Ti),ls=r(Ti,"SPAN",{});var Vg=i(ls);cp=a(Vg,"LayoutLMv2Config"),Vg.forEach(o),Ti.forEach(o),Zr=p(t),Z=r(t,"DIV",{class:!0});var vt=i(Z);y(so.$$.fragment,vt),pp=p(vt),je=r(vt,"P",{});var ra=i(je);up=a(ra,"This is the configuration class to store the configuration of a "),In=r(ra,"A",{href:!0});var Qg=i(In);mp=a(Qg,"LayoutLMv2Model"),Qg.forEach(o),hp=a(ra,`. It is used to instantiate an
LayoutLMv2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv2
`),ro=r(ra,"A",{href:!0,rel:!0});var Gg=i(ro);fp=a(Gg,"microsoft/layoutlmv2-base-uncased"),Gg.forEach(o),gp=a(ra," architecture."),ra.forEach(o),_p=p(vt),Fe=r(vt,"P",{});var ia=i(Fe);vp=a(ia,"Configuration objects inherit from "),An=r(ia,"A",{href:!0});var Hg=i(An);yp=a(Hg,"PretrainedConfig"),Hg.forEach(o),bp=a(ia,` and can be used to control the model outputs. Read the
documentation from `),Dn=r(ia,"A",{href:!0});var Kg=i(Dn);Lp=a(Kg,"PretrainedConfig"),Kg.forEach(o),wp=a(ia," for more information."),ia.forEach(o),kp=p(vt),y(Ye.$$.fragment,vt),vt.forEach(o),Jr=p(t),Pe=r(t,"H2",{class:!0});var Mi=i(Pe);Ze=r(Mi,"A",{id:!0,class:!0,href:!0});var Xg=i(Ze);ds=r(Xg,"SPAN",{});var Yg=i(ds);y(io.$$.fragment,Yg),Yg.forEach(o),Xg.forEach(o),xp=p(Mi),cs=r(Mi,"SPAN",{});var Zg=i(cs);Tp=a(Zg,"LayoutLMv2FeatureExtractor"),Zg.forEach(o),Mi.forEach(o),ei=p(t),J=r(t,"DIV",{class:!0});var yt=i(J);y(lo.$$.fragment,yt),Mp=p(yt),ps=r(yt,"P",{});var Jg=i(ps);$p=a(Jg,`Constructs a LayoutLMv2 feature extractor. This can be used to resize document images to the same size, as well as
to apply OCR on them in order to get a list of words and normalized bounding boxes.`),Jg.forEach(o),Ep=p(yt),co=r(yt,"P",{});var $i=i(co);qp=a($i,"This feature extractor inherits from "),us=r($i,"CODE",{});var e_=i(us);zp=a(e_,"PreTrainedFeatureExtractor()"),e_.forEach(o),jp=a($i,` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),$i.forEach(o),Fp=p(yt),ye=r(yt,"DIV",{class:!0});var la=i(ye);y(po.$$.fragment,la),Pp=p(la),ms=r(la,"P",{});var t_=i(ms);Cp=a(t_,"Main method to prepare for the model one or several image(s)."),t_.forEach(o),Ip=p(la),y(Je.$$.fragment,la),la.forEach(o),yt.forEach(o),ti=p(t),Ce=r(t,"H2",{class:!0});var Ei=i(Ce);et=r(Ei,"A",{id:!0,class:!0,href:!0});var o_=i(et);hs=r(o_,"SPAN",{});var n_=i(hs);y(uo.$$.fragment,n_),n_.forEach(o),o_.forEach(o),Ap=p(Ei),fs=r(Ei,"SPAN",{});var a_=i(fs);Dp=a(a_,"LayoutLMv2Tokenizer"),a_.forEach(o),Ei.forEach(o),oi=p(t),N=r(t,"DIV",{class:!0});var de=i(N);y(mo.$$.fragment,de),Op=p(de),S=r(de,"P",{});var K=i(S);Np=a(K,"Construct a LayoutLMv2 tokenizer. Based on WordPiece. "),On=r(K,"A",{href:!0});var s_=i(On);Sp=a(s_,"LayoutLMv2Tokenizer"),s_.forEach(o),Rp=a(K,` can be used to turn words, word-level
bounding boxes and optional word labels to token-level `),gs=r(K,"CODE",{});var r_=i(gs);Up=a(r_,"input_ids"),r_.forEach(o),Bp=a(K,", "),_s=r(K,"CODE",{});var i_=i(_s);Wp=a(i_,"attention_mask"),i_.forEach(o),Vp=a(K,", "),vs=r(K,"CODE",{});var l_=i(vs);Qp=a(l_,"token_type_ids"),l_.forEach(o),Gp=a(K,", "),ys=r(K,"CODE",{});var d_=i(ys);Hp=a(d_,"bbox"),d_.forEach(o),Kp=a(K,`, and
optional `),bs=r(K,"CODE",{});var c_=i(bs);Xp=a(c_,"labels"),c_.forEach(o),Yp=a(K," (for token classification)."),K.forEach(o),Zp=p(de),ho=r(de,"P",{});var qi=i(ho);Jp=a(qi,"This tokenizer inherits from "),Nn=r(qi,"A",{href:!0});var p_=i(Nn);eu=a(p_,"PreTrainedTokenizer"),p_.forEach(o),tu=a(qi,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),qi.forEach(o),ou=p(de),Sn=r(de,"P",{});var sf=i(Sn);Rn=r(sf,"A",{href:!0});var u_=i(Rn);nu=a(u_,"LayoutLMv2Tokenizer"),u_.forEach(o),au=a(sf,` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),sf.forEach(o),su=p(de),tt=r(de,"DIV",{class:!0});var zi=i(tt);y(fo.$$.fragment,zi),ru=p(zi),Ls=r(zi,"P",{});var m_=i(Ls);iu=a(m_,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),m_.forEach(o),zi.forEach(o),lu=p(de),Un=r(de,"DIV",{class:!0});var h_=i(Un);y(go.$$.fragment,h_),h_.forEach(o),de.forEach(o),ni=p(t),Ie=r(t,"H2",{class:!0});var ji=i(Ie);ot=r(ji,"A",{id:!0,class:!0,href:!0});var f_=i(ot);ws=r(f_,"SPAN",{});var g_=i(ws);y(_o.$$.fragment,g_),g_.forEach(o),f_.forEach(o),du=p(ji),ks=r(ji,"SPAN",{});var __=i(ks);cu=a(__,"LayoutLMv2TokenizerFast"),__.forEach(o),ji.forEach(o),ai=p(t),ee=r(t,"DIV",{class:!0});var bt=i(ee);y(vo.$$.fragment,bt),pu=p(bt),yo=r(bt,"P",{});var Fi=i(yo);uu=a(Fi,"Construct a \u201Cfast\u201D LayoutLMv2 tokenizer (backed by HuggingFace\u2019s "),xs=r(Fi,"EM",{});var v_=i(xs);mu=a(v_,"tokenizers"),v_.forEach(o),hu=a(Fi," library). Based on WordPiece."),Fi.forEach(o),fu=p(bt),bo=r(bt,"P",{});var Pi=i(bo);gu=a(Pi,"This tokenizer inherits from "),Bn=r(Pi,"A",{href:!0});var y_=i(Bn);_u=a(y_,"PreTrainedTokenizerFast"),y_.forEach(o),vu=a(Pi,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Pi.forEach(o),yu=p(bt),nt=r(bt,"DIV",{class:!0});var Ci=i(nt);y(Lo.$$.fragment,Ci),bu=p(Ci),Ts=r(Ci,"P",{});var b_=i(Ts);Lu=a(b_,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),b_.forEach(o),Ci.forEach(o),bt.forEach(o),si=p(t),Ae=r(t,"H2",{class:!0});var Ii=i(Ae);at=r(Ii,"A",{id:!0,class:!0,href:!0});var L_=i(at);Ms=r(L_,"SPAN",{});var w_=i(Ms);y(wo.$$.fragment,w_),w_.forEach(o),L_.forEach(o),wu=p(Ii),$s=r(Ii,"SPAN",{});var k_=i($s);ku=a(k_,"LayoutLMv2Processor"),k_.forEach(o),Ii.forEach(o),ri=p(t),W=r(t,"DIV",{class:!0});var Te=i(W);y(ko.$$.fragment,Te),xu=p(Te),Es=r(Te,"P",{});var x_=i(Es);Tu=a(x_,`Constructs a LayoutLMv2 processor which combines a LayoutLMv2 feature extractor and a LayoutLMv2 tokenizer into a
single processor.`),x_.forEach(o),Mu=p(Te),Wn=r(Te,"P",{});var rf=i(Wn);Vn=r(rf,"A",{href:!0});var T_=i(Vn);$u=a(T_,"LayoutLMv2Processor"),T_.forEach(o),Eu=a(rf," offers all the functionalities you need to prepare data for the model."),rf.forEach(o),qu=p(Te),F=r(Te,"P",{});var C=i(F);zu=a(C,"It first uses "),Qn=r(C,"A",{href:!0});var M_=i(Qn);ju=a(M_,"LayoutLMv2FeatureExtractor"),M_.forEach(o),Fu=a(C,` to resize document images to a fixed size, and optionally applies OCR
to get words and normalized bounding boxes. These are then provided to `),Gn=r(C,"A",{href:!0});var $_=i(Gn);Pu=a($_,"LayoutLMv2Tokenizer"),$_.forEach(o),Cu=a(C,` or
`),Hn=r(C,"A",{href:!0});var E_=i(Hn);Iu=a(E_,"LayoutLMv2TokenizerFast"),E_.forEach(o),Au=a(C,", which turns the words and bounding boxes into token-level "),qs=r(C,"CODE",{});var q_=i(qs);Du=a(q_,"input_ids"),q_.forEach(o),Ou=a(C,`,
`),zs=r(C,"CODE",{});var z_=i(zs);Nu=a(z_,"attention_mask"),z_.forEach(o),Su=a(C,", "),js=r(C,"CODE",{});var j_=i(js);Ru=a(j_,"token_type_ids"),j_.forEach(o),Uu=a(C,", "),Fs=r(C,"CODE",{});var F_=i(Fs);Bu=a(F_,"bbox"),F_.forEach(o),Wu=a(C,". Optionally, one can provide integer "),Ps=r(C,"CODE",{});var P_=i(Ps);Vu=a(P_,"word_labels"),P_.forEach(o),Qu=a(C,`, which are turned
into token-level `),Cs=r(C,"CODE",{});var C_=i(Cs);Gu=a(C_,"labels"),C_.forEach(o),Hu=a(C," for token classification tasks (such as FUNSD, CORD)."),C.forEach(o),Ku=p(Te),be=r(Te,"DIV",{class:!0});var da=i(be);y(xo.$$.fragment,da),Xu=p(da),$=r(da,"P",{});var z=i($);Yu=a(z,"This method first forwards the "),Is=r(z,"CODE",{});var I_=i(Is);Zu=a(I_,"images"),I_.forEach(o),Ju=a(z," argument to "),To=r(z,"A",{href:!0});var lf=i(To);As=r(lf,"STRONG",{});var A_=i(As);em=a(A_,"call"),A_.forEach(o),tm=a(lf,"()"),lf.forEach(o),om=a(z,`. In case
`),Kn=r(z,"A",{href:!0});var D_=i(Kn);nm=a(D_,"LayoutLMv2FeatureExtractor"),D_.forEach(o),am=a(z," was initialized with "),Ds=r(z,"CODE",{});var O_=i(Ds);sm=a(O_,"apply_ocr"),O_.forEach(o),rm=a(z," set to "),Os=r(z,"CODE",{});var N_=i(Os);im=a(N_,"True"),N_.forEach(o),lm=a(z,`, it passes the obtained words and
bounding boxes along with the additional arguments to `),Mo=r(z,"A",{href:!0});var df=i(Mo);Ns=r(df,"STRONG",{});var S_=i(Ns);dm=a(S_,"call"),S_.forEach(o),cm=a(df,"()"),df.forEach(o),pm=a(z,` and returns the output,
together with resized `),Ss=r(z,"CODE",{});var R_=i(Ss);um=a(R_,"images"),R_.forEach(o),mm=a(z,". In case "),Xn=r(z,"A",{href:!0});var U_=i(Xn);hm=a(U_,"LayoutLMv2FeatureExtractor"),U_.forEach(o),fm=a(z," was initialized with "),Rs=r(z,"CODE",{});var B_=i(Rs);gm=a(B_,"apply_ocr"),B_.forEach(o),_m=a(z,` set to
`),Us=r(z,"CODE",{});var W_=i(Us);vm=a(W_,"False"),W_.forEach(o),ym=a(z,", it passes the words ("),Bs=r(z,"CODE",{});var V_=i(Bs);bm=a(V_,"text"),V_.forEach(o),Lm=a(z,"/"),Ws=r(z,"CODE",{});var Q_=i(Ws);wm=a(Q_,"text_pair`) and `boxes` specified by the user along with the additional arguments to [__call__()](/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__) and returns the output, together with resized `images"),Q_.forEach(o),km=a(z,"."),z.forEach(o),xm=p(da),Vs=r(da,"P",{});var G_=i(Vs);Tm=a(G_,"Please refer to the docstring of the above two methods for more information."),G_.forEach(o),da.forEach(o),Te.forEach(o),ii=p(t),De=r(t,"H2",{class:!0});var Ai=i(De);st=r(Ai,"A",{id:!0,class:!0,href:!0});var H_=i(st);Qs=r(H_,"SPAN",{});var K_=i(Qs);y($o.$$.fragment,K_),K_.forEach(o),H_.forEach(o),Mm=p(Ai),Gs=r(Ai,"SPAN",{});var X_=i(Gs);$m=a(X_,"LayoutLMv2Model"),X_.forEach(o),Ai.forEach(o),li=p(t),pe=r(t,"DIV",{class:!0});var ca=i(pe);y(Eo.$$.fragment,ca),Em=p(ca),qo=r(ca,"P",{});var Di=i(qo);qm=a(Di,`The bare LayoutLMv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),zo=r(Di,"A",{href:!0,rel:!0});var Y_=i(zo);zm=a(Y_,"torch.nn.Module"),Y_.forEach(o),jm=a(Di,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Di.forEach(o),Fm=p(ca),se=r(ca,"DIV",{class:!0});var Lt=i(se);y(jo.$$.fragment,Lt),Pm=p(Lt),Oe=r(Lt,"P",{});var pa=i(Oe);Cm=a(pa,"The "),Yn=r(pa,"A",{href:!0});var Z_=i(Yn);Im=a(Z_,"LayoutLMv2Model"),Z_.forEach(o),Am=a(pa," forward method, overrides the "),Hs=r(pa,"CODE",{});var J_=i(Hs);Dm=a(J_,"__call__"),J_.forEach(o),Om=a(pa," special method."),pa.forEach(o),Nm=p(Lt),y(rt.$$.fragment,Lt),Sm=p(Lt),y(it.$$.fragment,Lt),Lt.forEach(o),ca.forEach(o),di=p(t),Ne=r(t,"H2",{class:!0});var Oi=i(Ne);lt=r(Oi,"A",{id:!0,class:!0,href:!0});var ev=i(lt);Ks=r(ev,"SPAN",{});var tv=i(Ks);y(Fo.$$.fragment,tv),tv.forEach(o),ev.forEach(o),Rm=p(Oi),Xs=r(Oi,"SPAN",{});var ov=i(Xs);Um=a(ov,"LayoutLMv2ForSequenceClassification"),ov.forEach(o),Oi.forEach(o),ci=p(t),te=r(t,"DIV",{class:!0});var wt=i(te);y(Po.$$.fragment,wt),Bm=p(wt),Co=r(wt,"P",{});var Ni=i(Co);Wm=a(Ni,`LayoutLMv2 Model with a sequence classification head on top (a linear layer on top of the concatenation of the
final hidden state of the [CLS] token, average-pooled initial visual embeddings and average-pooled final visual
embeddings, e.g. for document image classification tasks such as the
`),Io=r(Ni,"A",{href:!0,rel:!0});var nv=i(Io);Vm=a(nv,"RVL-CDIP"),nv.forEach(o),Qm=a(Ni," dataset."),Ni.forEach(o),Gm=p(wt),Ao=r(wt,"P",{});var Si=i(Ao);Hm=a(Si,"This model is a PyTorch "),Do=r(Si,"A",{href:!0,rel:!0});var av=i(Do);Km=a(av,"torch.nn.Module"),av.forEach(o),Xm=a(Si,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Si.forEach(o),Ym=p(wt),re=r(wt,"DIV",{class:!0});var kt=i(re);y(Oo.$$.fragment,kt),Zm=p(kt),Se=r(kt,"P",{});var ua=i(Se);Jm=a(ua,"The "),Zn=r(ua,"A",{href:!0});var sv=i(Zn);eh=a(sv,"LayoutLMv2ForSequenceClassification"),sv.forEach(o),th=a(ua," forward method, overrides the "),Ys=r(ua,"CODE",{});var rv=i(Ys);oh=a(rv,"__call__"),rv.forEach(o),nh=a(ua," special method."),ua.forEach(o),ah=p(kt),y(dt.$$.fragment,kt),sh=p(kt),y(ct.$$.fragment,kt),kt.forEach(o),wt.forEach(o),pi=p(t),Re=r(t,"H2",{class:!0});var Ri=i(Re);pt=r(Ri,"A",{id:!0,class:!0,href:!0});var iv=i(pt);Zs=r(iv,"SPAN",{});var lv=i(Zs);y(No.$$.fragment,lv),lv.forEach(o),iv.forEach(o),rh=p(Ri),Js=r(Ri,"SPAN",{});var dv=i(Js);ih=a(dv,"LayoutLMv2ForTokenClassification"),dv.forEach(o),Ri.forEach(o),ui=p(t),oe=r(t,"DIV",{class:!0});var xt=i(oe);y(So.$$.fragment,xt),lh=p(xt),ne=r(xt,"P",{});var Me=i(ne);dh=a(Me,`LayoutLMv2 Model with a token classification head on top (a linear layer on top of the text part of the hidden
states) e.g. for sequence labeling (information extraction) tasks such as
`),Ro=r(Me,"A",{href:!0,rel:!0});var cv=i(Ro);ch=a(cv,"FUNSD"),cv.forEach(o),ph=a(Me,", "),Uo=r(Me,"A",{href:!0,rel:!0});var pv=i(Uo);uh=a(pv,"SROIE"),pv.forEach(o),mh=a(Me,`,
`),Bo=r(Me,"A",{href:!0,rel:!0});var uv=i(Bo);hh=a(uv,"CORD"),uv.forEach(o),fh=a(Me," and "),Wo=r(Me,"A",{href:!0,rel:!0});var mv=i(Wo);gh=a(mv,"Kleister-NDA"),mv.forEach(o),_h=a(Me,"."),Me.forEach(o),vh=p(xt),Vo=r(xt,"P",{});var Ui=i(Vo);yh=a(Ui,"This model is a PyTorch "),Qo=r(Ui,"A",{href:!0,rel:!0});var hv=i(Qo);bh=a(hv,"torch.nn.Module"),hv.forEach(o),Lh=a(Ui,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ui.forEach(o),wh=p(xt),ie=r(xt,"DIV",{class:!0});var Tt=i(ie);y(Go.$$.fragment,Tt),kh=p(Tt),Ue=r(Tt,"P",{});var ma=i(Ue);xh=a(ma,"The "),Jn=r(ma,"A",{href:!0});var fv=i(Jn);Th=a(fv,"LayoutLMv2ForTokenClassification"),fv.forEach(o),Mh=a(ma," forward method, overrides the "),er=r(ma,"CODE",{});var gv=i(er);$h=a(gv,"__call__"),gv.forEach(o),Eh=a(ma," special method."),ma.forEach(o),qh=p(Tt),y(ut.$$.fragment,Tt),zh=p(Tt),y(mt.$$.fragment,Tt),Tt.forEach(o),xt.forEach(o),mi=p(t),Be=r(t,"H2",{class:!0});var Bi=i(Be);ht=r(Bi,"A",{id:!0,class:!0,href:!0});var _v=i(ht);tr=r(_v,"SPAN",{});var vv=i(tr);y(Ho.$$.fragment,vv),vv.forEach(o),_v.forEach(o),jh=p(Bi),or=r(Bi,"SPAN",{});var yv=i(or);Fh=a(yv,"LayoutLMv2ForQuestionAnswering"),yv.forEach(o),Bi.forEach(o),hi=p(t),ae=r(t,"DIV",{class:!0});var Mt=i(ae);y(Ko.$$.fragment,Mt),Ph=p(Mt),ue=r(Mt,"P",{});var $t=i(ue);Ch=a($t,`LayoutLMv2 Model with a span classification head on top for extractive question-answering tasks such as
`),Xo=r($t,"A",{href:!0,rel:!0});var bv=i(Xo);Ih=a(bv,"DocVQA"),bv.forEach(o),Ah=a($t,` (a linear layer on top of the text part of the hidden-states output to
compute `),nr=r($t,"CODE",{});var Lv=i(nr);Dh=a(Lv,"span start logits"),Lv.forEach(o),Oh=a($t," and "),ar=r($t,"CODE",{});var wv=i(ar);Nh=a(wv,"span end logits"),wv.forEach(o),Sh=a($t,")."),$t.forEach(o),Rh=p(Mt),Yo=r(Mt,"P",{});var Wi=i(Yo);Uh=a(Wi,"This model is a PyTorch "),Zo=r(Wi,"A",{href:!0,rel:!0});var kv=i(Zo);Bh=a(kv,"torch.nn.Module"),kv.forEach(o),Wh=a(Wi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wi.forEach(o),Vh=p(Mt),A=r(Mt,"DIV",{class:!0});var X=i(A);y(Jo.$$.fragment,X),Qh=p(X),We=r(X,"P",{});var ha=i(We);Gh=a(ha,"The "),ea=r(ha,"A",{href:!0});var xv=i(ea);Hh=a(xv,"LayoutLMv2ForQuestionAnswering"),xv.forEach(o),Kh=a(ha," forward method, overrides the "),sr=r(ha,"CODE",{});var Tv=i(sr);Xh=a(Tv,"__call__"),Tv.forEach(o),Yh=a(ha," special method."),ha.forEach(o),Zh=p(X),y(ft.$$.fragment,X),Jh=p(X),rr=r(X,"P",{});var Mv=i(rr);ef=a(Mv,"Example:"),Mv.forEach(o),tf=p(X),ir=r(X,"P",{});var $v=i(ir);of=a($v,`In this example below, we give the LayoutLMv2 model an image (of texts) and ask it a question. It will give us
a prediction of what it thinks the answer is (the span of the answer within the texts parsed from the image).`),$v.forEach(o),nf=p(X),y(gt.$$.fragment,X),af=p(X),y(_t.$$.fragment,X),X.forEach(o),Mt.forEach(o),this.h()},h(){l(h,"name","hf:doc:metadata"),l(h,"content",JSON.stringify(Vv)),l(g,"id","layoutlmv2"),l(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(g,"href","#layoutlmv2"),l(f,"class","relative group"),l(Qe,"id","overview"),l(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Qe,"href","#overview"),l($e,"class","relative group"),l(qt,"href","https://arxiv.org/abs/2012.14740"),l(qt,"rel","nofollow"),l(an,"href","layoutlm"),l(zt,"href","https://guillaumejaume.github.io/FUNSD/"),l(zt,"rel","nofollow"),l(jt,"href","https://github.com/clovaai/cord"),l(jt,"rel","nofollow"),l(Ft,"href","https://rrc.cvc.uab.es/?ch=13"),l(Ft,"rel","nofollow"),l(Pt,"href","https://github.com/applicaai/kleister-nda"),l(Pt,"rel","nofollow"),l(It,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),l(It,"rel","nofollow"),l(Dt,"href","https://arxiv.org/abs/2007.00398"),l(Dt,"rel","nofollow"),l(Nt,"href","https://arxiv.org/abs/2012.14740"),l(Nt,"rel","nofollow"),l(Rt,"href","https://github.com/NielsRogge/Transformers-Tutorials"),l(Rt,"rel","nofollow"),l(Ut,"href","https://github.com/facebookresearch/detectron2/"),l(Ut,"rel","nofollow"),l(Bt,"href","https://detectron2.readthedocs.io/en/latest/tutorials/install.html"),l(Bt,"rel","nofollow"),l(dn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model.forward"),l(cn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlm#transformers.LayoutLMModel"),l(Wt,"href","https://github.com/tesseract-ocr/tesseract"),l(Wt,"rel","nofollow"),l(Vt,"href","https://pypi.org/project/pytesseract/"),l(Vt,"rel","nofollow"),l(pn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(un,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(mn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"),l(hn,"href","/docs/transformers/pr_17168/en/main_classes/model#transformers.PreTrainedModel.from_pretrained"),l(fn,"href","layoutxlm"),l(Ke,"id","usage-layoutlmv2processor"),l(Ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ke,"href","#usage-layoutlmv2processor"),l(qe,"class","relative group"),l(gn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(_n,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(vn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(yn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(bn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(Ln,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(wn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(kn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(xn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(Zt,"href","https://pypi.org/project/pytesseract/"),l(Zt,"rel","nofollow"),l(Tn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(Xe,"id","transformers.LayoutLMv2Config"),l(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Xe,"href","#transformers.LayoutLMv2Config"),l(ze,"class","relative group"),l(In,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(ro,"href","https://huggingface.co/microsoft/layoutlmv2-base-uncased"),l(ro,"rel","nofollow"),l(An,"href","/docs/transformers/pr_17168/en/main_classes/configuration#transformers.PretrainedConfig"),l(Dn,"href","/docs/transformers/pr_17168/en/main_classes/configuration#transformers.PretrainedConfig"),l(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ze,"id","transformers.LayoutLMv2FeatureExtractor"),l(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ze,"href","#transformers.LayoutLMv2FeatureExtractor"),l(Pe,"class","relative group"),l(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(et,"id","transformers.LayoutLMv2Tokenizer"),l(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(et,"href","#transformers.LayoutLMv2Tokenizer"),l(Ce,"class","relative group"),l(On,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Nn,"href","/docs/transformers/pr_17168/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(Rn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Un,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ot,"id","transformers.LayoutLMv2TokenizerFast"),l(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ot,"href","#transformers.LayoutLMv2TokenizerFast"),l(Ie,"class","relative group"),l(Bn,"href","/docs/transformers/pr_17168/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),l(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(at,"id","transformers.LayoutLMv2Processor"),l(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(at,"href","#transformers.LayoutLMv2Processor"),l(Ae,"class","relative group"),l(Vn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(Qn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(Gn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Hn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(To,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__"),l(Kn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(Mo,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__"),l(Xn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(st,"id","transformers.LayoutLMv2Model"),l(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(st,"href","#transformers.LayoutLMv2Model"),l(De,"class","relative group"),l(zo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(zo,"rel","nofollow"),l(Yn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(lt,"id","transformers.LayoutLMv2ForSequenceClassification"),l(lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(lt,"href","#transformers.LayoutLMv2ForSequenceClassification"),l(Ne,"class","relative group"),l(Io,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),l(Io,"rel","nofollow"),l(Do,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Do,"rel","nofollow"),l(Zn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForSequenceClassification"),l(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(pt,"id","transformers.LayoutLMv2ForTokenClassification"),l(pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(pt,"href","#transformers.LayoutLMv2ForTokenClassification"),l(Re,"class","relative group"),l(Ro,"href","https://guillaumejaume.github.io/FUNSD/"),l(Ro,"rel","nofollow"),l(Uo,"href","https://rrc.cvc.uab.es/?ch=13"),l(Uo,"rel","nofollow"),l(Bo,"href","https://github.com/clovaai/cord"),l(Bo,"rel","nofollow"),l(Wo,"href","https://github.com/applicaai/kleister-nda"),l(Wo,"rel","nofollow"),l(Qo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Qo,"rel","nofollow"),l(Jn,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForTokenClassification"),l(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ht,"id","transformers.LayoutLMv2ForQuestionAnswering"),l(ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ht,"href","#transformers.LayoutLMv2ForQuestionAnswering"),l(Be,"class","relative group"),l(Xo,"href","https://rrc.cvc.uab.es/?ch=17"),l(Xo,"rel","nofollow"),l(Zo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Zo,"rel","nofollow"),l(ea,"href","/docs/transformers/pr_17168/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForQuestionAnswering"),l(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,d){e(document.head,h),u(t,x,d),u(t,f,d),e(f,g),e(g,T),b(m,T,null),e(f,_),e(f,O),e(O,Qi),u(t,gr,d),u(t,$e,d),e($e,Qe),e(Qe,fa),b(Et,fa,null),e($e,Gi),e($e,ga),e(ga,Hi),u(t,_r,d),u(t,he,d),e(he,Ki),e(he,qt),e(qt,Xi),e(he,Yi),e(he,an),e(an,Zi),e(he,Ji),u(t,vr,d),u(t,fe,d),e(fe,Y),e(Y,el),e(Y,zt),e(zt,tl),e(Y,ol),e(Y,jt),e(jt,nl),e(Y,al),e(Y,Ft),e(Ft,sl),e(Y,rl),e(Y,Pt),e(Pt,il),e(Y,ll),e(fe,dl),e(fe,Ct),e(Ct,cl),e(Ct,It),e(It,pl),e(Ct,ul),e(fe,ml),e(fe,At),e(At,hl),e(At,Dt),e(Dt,fl),e(At,gl),u(t,yr,d),u(t,sn,d),e(sn,_l),u(t,br,d),u(t,rn,d),e(rn,_a),e(_a,vl),u(t,Lr,d),u(t,R,d),e(R,yl),e(R,va),e(va,bl),e(R,Ll),e(R,ya),e(ya,wl),e(R,kl),e(R,ba),e(ba,xl),e(R,Tl),e(R,La),e(La,Ml),e(R,$l),e(R,wa),e(wa,El),e(R,ql),u(t,wr,d),u(t,ln,d),e(ln,zl),u(t,kr,d),u(t,Q,d),e(Q,ka),e(ka,jl),e(Q,Fl),e(Q,Ot),e(Ot,Pl),e(Ot,Nt),e(Nt,Cl),e(Ot,Il),e(Q,Al),e(Q,St),e(St,Dl),e(St,Rt),e(Rt,Ol),e(St,Nl),e(Q,Sl),e(Q,Ee),e(Ee,Rl),e(Ee,Ut),e(Ut,Ul),e(Ee,Bl),e(Ee,Bt),e(Bt,Wl),e(Ee,Vl),e(Q,Ql),e(Q,M),e(M,Gl),e(M,xa),e(xa,Hl),e(M,Kl),e(M,dn),e(dn,Xl),e(M,Yl),e(M,Ta),e(Ta,Zl),e(M,Jl),e(M,Ma),e(Ma,ed),e(M,td),e(M,$a),e($a,od),e(M,nd),e(M,Ea),e(Ea,ad),e(M,sd),e(M,qa),e(qa,rd),e(M,id),e(M,za),e(za,ld),e(M,dd),e(M,ja),e(ja,cd),e(M,pd),e(M,cn),e(cn,ud),e(M,md),e(M,Wt),e(Wt,hd),e(M,fd),e(M,Vt),e(Vt,gd),e(M,_d),u(t,xr,d),b(Qt,t,d),u(t,Tr,d),u(t,ge,d),e(ge,vd),e(ge,Fa),e(Fa,yd),e(ge,bd),e(ge,Pa),e(Pa,Ld),e(ge,wd),u(t,Mr,d),b(Gt,t,d),u(t,$r,d),u(t,Ge,d),e(Ge,kd),e(Ge,pn),e(pn,xd),e(Ge,Td),u(t,Er,d),u(t,_e,d),e(_e,I),e(I,Md),e(I,un),e(un,$d),e(I,Ed),e(I,Ca),e(Ca,qd),e(I,zd),e(I,Ia),e(Ia,jd),e(I,Fd),e(I,mn),e(mn,Pd),e(I,Cd),e(I,Aa),e(Aa,Id),e(I,Ad),e(I,Da),e(Da,Dd),e(I,Od),e(I,Oa),e(Oa,Nd),e(I,Sd),e(_e,Rd),e(_e,Ht),e(Ht,Ud),e(Ht,hn),e(hn,Bd),e(Ht,Wd),e(_e,Vd),e(_e,Kt),e(Kt,Qd),e(Kt,Na),e(Na,Gd),e(Kt,Hd),u(t,qr,d),u(t,He,d),e(He,Kd),e(He,fn),e(fn,Xd),e(He,Yd),u(t,zr,d),u(t,qe,d),e(qe,Ke),e(Ke,Sa),b(Xt,Sa,null),e(qe,Zd),e(qe,Ra),e(Ra,Jd),u(t,jr,d),u(t,G,d),e(G,ec),e(G,gn),e(gn,tc),e(G,oc),e(G,_n),e(_n,nc),e(G,ac),e(G,vn),e(vn,sc),e(G,rc),e(G,yn),e(yn,ic),e(G,lc),u(t,Fr,d),b(Yt,t,d),u(t,Pr,d),u(t,E,d),e(E,dc),e(E,bn),e(bn,cc),e(E,pc),e(E,Ln),e(Ln,uc),e(E,mc),e(E,Ua),e(Ua,hc),e(E,fc),e(E,wn),e(wn,gc),e(E,_c),e(E,kn),e(kn,vc),e(E,yc),e(E,Ba),e(Ba,bc),e(E,Lc),e(E,Wa),e(Wa,wc),e(E,kc),e(E,Va),e(Va,xc),e(E,Tc),e(E,Qa),e(Qa,Mc),e(E,$c),e(E,Ga),e(Ga,Ec),e(E,qc),u(t,Cr,d),u(t,B,d),e(B,xn),e(xn,zc),e(B,jc),e(B,Zt),e(Zt,Fc),e(B,Pc),e(B,Tn),e(Tn,Cc),e(B,Ic),e(B,Ha),e(Ha,Ac),e(B,Dc),e(B,Ka),e(Ka,Oc),e(B,Nc),u(t,Ir,d),u(t,Mn,d),e(Mn,Sc),u(t,Ar,d),u(t,$n,d),e($n,Xa),e(Xa,Rc),u(t,Dr,d),u(t,En,d),e(En,Uc),u(t,Or,d),b(Jt,t,d),u(t,Nr,d),u(t,qn,d),e(qn,Ya),e(Ya,Bc),u(t,Sr,d),u(t,ve,d),e(ve,Wc),e(ve,Za),e(Za,Vc),e(ve,Qc),e(ve,Ja),e(Ja,Gc),e(ve,Hc),u(t,Rr,d),b(eo,t,d),u(t,Ur,d),u(t,zn,d),e(zn,es),e(es,Kc),u(t,Br,d),u(t,H,d),e(H,Xc),e(H,ts),e(ts,Yc),e(H,Zc),e(H,os),e(os,Jc),e(H,ep),e(H,ns),e(ns,tp),e(H,op),e(H,as),e(as,np),e(H,ap),u(t,Wr,d),b(to,t,d),u(t,Vr,d),u(t,jn,d),e(jn,ss),e(ss,sp),u(t,Qr,d),u(t,Fn,d),e(Fn,rp),u(t,Gr,d),b(oo,t,d),u(t,Hr,d),u(t,Pn,d),e(Pn,rs),e(rs,ip),u(t,Kr,d),u(t,Cn,d),e(Cn,lp),u(t,Xr,d),b(no,t,d),u(t,Yr,d),u(t,ze,d),e(ze,Xe),e(Xe,is),b(ao,is,null),e(ze,dp),e(ze,ls),e(ls,cp),u(t,Zr,d),u(t,Z,d),b(so,Z,null),e(Z,pp),e(Z,je),e(je,up),e(je,In),e(In,mp),e(je,hp),e(je,ro),e(ro,fp),e(je,gp),e(Z,_p),e(Z,Fe),e(Fe,vp),e(Fe,An),e(An,yp),e(Fe,bp),e(Fe,Dn),e(Dn,Lp),e(Fe,wp),e(Z,kp),b(Ye,Z,null),u(t,Jr,d),u(t,Pe,d),e(Pe,Ze),e(Ze,ds),b(io,ds,null),e(Pe,xp),e(Pe,cs),e(cs,Tp),u(t,ei,d),u(t,J,d),b(lo,J,null),e(J,Mp),e(J,ps),e(ps,$p),e(J,Ep),e(J,co),e(co,qp),e(co,us),e(us,zp),e(co,jp),e(J,Fp),e(J,ye),b(po,ye,null),e(ye,Pp),e(ye,ms),e(ms,Cp),e(ye,Ip),b(Je,ye,null),u(t,ti,d),u(t,Ce,d),e(Ce,et),e(et,hs),b(uo,hs,null),e(Ce,Ap),e(Ce,fs),e(fs,Dp),u(t,oi,d),u(t,N,d),b(mo,N,null),e(N,Op),e(N,S),e(S,Np),e(S,On),e(On,Sp),e(S,Rp),e(S,gs),e(gs,Up),e(S,Bp),e(S,_s),e(_s,Wp),e(S,Vp),e(S,vs),e(vs,Qp),e(S,Gp),e(S,ys),e(ys,Hp),e(S,Kp),e(S,bs),e(bs,Xp),e(S,Yp),e(N,Zp),e(N,ho),e(ho,Jp),e(ho,Nn),e(Nn,eu),e(ho,tu),e(N,ou),e(N,Sn),e(Sn,Rn),e(Rn,nu),e(Sn,au),e(N,su),e(N,tt),b(fo,tt,null),e(tt,ru),e(tt,Ls),e(Ls,iu),e(N,lu),e(N,Un),b(go,Un,null),u(t,ni,d),u(t,Ie,d),e(Ie,ot),e(ot,ws),b(_o,ws,null),e(Ie,du),e(Ie,ks),e(ks,cu),u(t,ai,d),u(t,ee,d),b(vo,ee,null),e(ee,pu),e(ee,yo),e(yo,uu),e(yo,xs),e(xs,mu),e(yo,hu),e(ee,fu),e(ee,bo),e(bo,gu),e(bo,Bn),e(Bn,_u),e(bo,vu),e(ee,yu),e(ee,nt),b(Lo,nt,null),e(nt,bu),e(nt,Ts),e(Ts,Lu),u(t,si,d),u(t,Ae,d),e(Ae,at),e(at,Ms),b(wo,Ms,null),e(Ae,wu),e(Ae,$s),e($s,ku),u(t,ri,d),u(t,W,d),b(ko,W,null),e(W,xu),e(W,Es),e(Es,Tu),e(W,Mu),e(W,Wn),e(Wn,Vn),e(Vn,$u),e(Wn,Eu),e(W,qu),e(W,F),e(F,zu),e(F,Qn),e(Qn,ju),e(F,Fu),e(F,Gn),e(Gn,Pu),e(F,Cu),e(F,Hn),e(Hn,Iu),e(F,Au),e(F,qs),e(qs,Du),e(F,Ou),e(F,zs),e(zs,Nu),e(F,Su),e(F,js),e(js,Ru),e(F,Uu),e(F,Fs),e(Fs,Bu),e(F,Wu),e(F,Ps),e(Ps,Vu),e(F,Qu),e(F,Cs),e(Cs,Gu),e(F,Hu),e(W,Ku),e(W,be),b(xo,be,null),e(be,Xu),e(be,$),e($,Yu),e($,Is),e(Is,Zu),e($,Ju),e($,To),e(To,As),e(As,em),e(To,tm),e($,om),e($,Kn),e(Kn,nm),e($,am),e($,Ds),e(Ds,sm),e($,rm),e($,Os),e(Os,im),e($,lm),e($,Mo),e(Mo,Ns),e(Ns,dm),e(Mo,cm),e($,pm),e($,Ss),e(Ss,um),e($,mm),e($,Xn),e(Xn,hm),e($,fm),e($,Rs),e(Rs,gm),e($,_m),e($,Us),e(Us,vm),e($,ym),e($,Bs),e(Bs,bm),e($,Lm),e($,Ws),e(Ws,wm),e($,km),e(be,xm),e(be,Vs),e(Vs,Tm),u(t,ii,d),u(t,De,d),e(De,st),e(st,Qs),b($o,Qs,null),e(De,Mm),e(De,Gs),e(Gs,$m),u(t,li,d),u(t,pe,d),b(Eo,pe,null),e(pe,Em),e(pe,qo),e(qo,qm),e(qo,zo),e(zo,zm),e(qo,jm),e(pe,Fm),e(pe,se),b(jo,se,null),e(se,Pm),e(se,Oe),e(Oe,Cm),e(Oe,Yn),e(Yn,Im),e(Oe,Am),e(Oe,Hs),e(Hs,Dm),e(Oe,Om),e(se,Nm),b(rt,se,null),e(se,Sm),b(it,se,null),u(t,di,d),u(t,Ne,d),e(Ne,lt),e(lt,Ks),b(Fo,Ks,null),e(Ne,Rm),e(Ne,Xs),e(Xs,Um),u(t,ci,d),u(t,te,d),b(Po,te,null),e(te,Bm),e(te,Co),e(Co,Wm),e(Co,Io),e(Io,Vm),e(Co,Qm),e(te,Gm),e(te,Ao),e(Ao,Hm),e(Ao,Do),e(Do,Km),e(Ao,Xm),e(te,Ym),e(te,re),b(Oo,re,null),e(re,Zm),e(re,Se),e(Se,Jm),e(Se,Zn),e(Zn,eh),e(Se,th),e(Se,Ys),e(Ys,oh),e(Se,nh),e(re,ah),b(dt,re,null),e(re,sh),b(ct,re,null),u(t,pi,d),u(t,Re,d),e(Re,pt),e(pt,Zs),b(No,Zs,null),e(Re,rh),e(Re,Js),e(Js,ih),u(t,ui,d),u(t,oe,d),b(So,oe,null),e(oe,lh),e(oe,ne),e(ne,dh),e(ne,Ro),e(Ro,ch),e(ne,ph),e(ne,Uo),e(Uo,uh),e(ne,mh),e(ne,Bo),e(Bo,hh),e(ne,fh),e(ne,Wo),e(Wo,gh),e(ne,_h),e(oe,vh),e(oe,Vo),e(Vo,yh),e(Vo,Qo),e(Qo,bh),e(Vo,Lh),e(oe,wh),e(oe,ie),b(Go,ie,null),e(ie,kh),e(ie,Ue),e(Ue,xh),e(Ue,Jn),e(Jn,Th),e(Ue,Mh),e(Ue,er),e(er,$h),e(Ue,Eh),e(ie,qh),b(ut,ie,null),e(ie,zh),b(mt,ie,null),u(t,mi,d),u(t,Be,d),e(Be,ht),e(ht,tr),b(Ho,tr,null),e(Be,jh),e(Be,or),e(or,Fh),u(t,hi,d),u(t,ae,d),b(Ko,ae,null),e(ae,Ph),e(ae,ue),e(ue,Ch),e(ue,Xo),e(Xo,Ih),e(ue,Ah),e(ue,nr),e(nr,Dh),e(ue,Oh),e(ue,ar),e(ar,Nh),e(ue,Sh),e(ae,Rh),e(ae,Yo),e(Yo,Uh),e(Yo,Zo),e(Zo,Bh),e(Yo,Wh),e(ae,Vh),e(ae,A),b(Jo,A,null),e(A,Qh),e(A,We),e(We,Gh),e(We,ea),e(ea,Hh),e(We,Kh),e(We,sr),e(sr,Xh),e(We,Yh),e(A,Zh),b(ft,A,null),e(A,Jh),e(A,rr),e(rr,ef),e(A,tf),e(A,ir),e(ir,of),e(A,nf),b(gt,A,null),e(A,af),b(_t,A,null),fi=!0},p(t,[d]){const en={};d&2&&(en.$$scope={dirty:d,ctx:t}),Ye.$set(en);const lr={};d&2&&(lr.$$scope={dirty:d,ctx:t}),Je.$set(lr);const dr={};d&2&&(dr.$$scope={dirty:d,ctx:t}),rt.$set(dr);const cr={};d&2&&(cr.$$scope={dirty:d,ctx:t}),it.$set(cr);const tn={};d&2&&(tn.$$scope={dirty:d,ctx:t}),dt.$set(tn);const pr={};d&2&&(pr.$$scope={dirty:d,ctx:t}),ct.$set(pr);const ur={};d&2&&(ur.$$scope={dirty:d,ctx:t}),ut.$set(ur);const mr={};d&2&&(mr.$$scope={dirty:d,ctx:t}),mt.$set(mr);const Ve={};d&2&&(Ve.$$scope={dirty:d,ctx:t}),ft.$set(Ve);const hr={};d&2&&(hr.$$scope={dirty:d,ctx:t}),gt.$set(hr);const fr={};d&2&&(fr.$$scope={dirty:d,ctx:t}),_t.$set(fr)},i(t){fi||(L(m.$$.fragment,t),L(Et.$$.fragment,t),L(Qt.$$.fragment,t),L(Gt.$$.fragment,t),L(Xt.$$.fragment,t),L(Yt.$$.fragment,t),L(Jt.$$.fragment,t),L(eo.$$.fragment,t),L(to.$$.fragment,t),L(oo.$$.fragment,t),L(no.$$.fragment,t),L(ao.$$.fragment,t),L(so.$$.fragment,t),L(Ye.$$.fragment,t),L(io.$$.fragment,t),L(lo.$$.fragment,t),L(po.$$.fragment,t),L(Je.$$.fragment,t),L(uo.$$.fragment,t),L(mo.$$.fragment,t),L(fo.$$.fragment,t),L(go.$$.fragment,t),L(_o.$$.fragment,t),L(vo.$$.fragment,t),L(Lo.$$.fragment,t),L(wo.$$.fragment,t),L(ko.$$.fragment,t),L(xo.$$.fragment,t),L($o.$$.fragment,t),L(Eo.$$.fragment,t),L(jo.$$.fragment,t),L(rt.$$.fragment,t),L(it.$$.fragment,t),L(Fo.$$.fragment,t),L(Po.$$.fragment,t),L(Oo.$$.fragment,t),L(dt.$$.fragment,t),L(ct.$$.fragment,t),L(No.$$.fragment,t),L(So.$$.fragment,t),L(Go.$$.fragment,t),L(ut.$$.fragment,t),L(mt.$$.fragment,t),L(Ho.$$.fragment,t),L(Ko.$$.fragment,t),L(Jo.$$.fragment,t),L(ft.$$.fragment,t),L(gt.$$.fragment,t),L(_t.$$.fragment,t),fi=!0)},o(t){w(m.$$.fragment,t),w(Et.$$.fragment,t),w(Qt.$$.fragment,t),w(Gt.$$.fragment,t),w(Xt.$$.fragment,t),w(Yt.$$.fragment,t),w(Jt.$$.fragment,t),w(eo.$$.fragment,t),w(to.$$.fragment,t),w(oo.$$.fragment,t),w(no.$$.fragment,t),w(ao.$$.fragment,t),w(so.$$.fragment,t),w(Ye.$$.fragment,t),w(io.$$.fragment,t),w(lo.$$.fragment,t),w(po.$$.fragment,t),w(Je.$$.fragment,t),w(uo.$$.fragment,t),w(mo.$$.fragment,t),w(fo.$$.fragment,t),w(go.$$.fragment,t),w(_o.$$.fragment,t),w(vo.$$.fragment,t),w(Lo.$$.fragment,t),w(wo.$$.fragment,t),w(ko.$$.fragment,t),w(xo.$$.fragment,t),w($o.$$.fragment,t),w(Eo.$$.fragment,t),w(jo.$$.fragment,t),w(rt.$$.fragment,t),w(it.$$.fragment,t),w(Fo.$$.fragment,t),w(Po.$$.fragment,t),w(Oo.$$.fragment,t),w(dt.$$.fragment,t),w(ct.$$.fragment,t),w(No.$$.fragment,t),w(So.$$.fragment,t),w(Go.$$.fragment,t),w(ut.$$.fragment,t),w(mt.$$.fragment,t),w(Ho.$$.fragment,t),w(Ko.$$.fragment,t),w(Jo.$$.fragment,t),w(ft.$$.fragment,t),w(gt.$$.fragment,t),w(_t.$$.fragment,t),fi=!1},d(t){o(h),t&&o(x),t&&o(f),k(m),t&&o(gr),t&&o($e),k(Et),t&&o(_r),t&&o(he),t&&o(vr),t&&o(fe),t&&o(yr),t&&o(sn),t&&o(br),t&&o(rn),t&&o(Lr),t&&o(R),t&&o(wr),t&&o(ln),t&&o(kr),t&&o(Q),t&&o(xr),k(Qt,t),t&&o(Tr),t&&o(ge),t&&o(Mr),k(Gt,t),t&&o($r),t&&o(Ge),t&&o(Er),t&&o(_e),t&&o(qr),t&&o(He),t&&o(zr),t&&o(qe),k(Xt),t&&o(jr),t&&o(G),t&&o(Fr),k(Yt,t),t&&o(Pr),t&&o(E),t&&o(Cr),t&&o(B),t&&o(Ir),t&&o(Mn),t&&o(Ar),t&&o($n),t&&o(Dr),t&&o(En),t&&o(Or),k(Jt,t),t&&o(Nr),t&&o(qn),t&&o(Sr),t&&o(ve),t&&o(Rr),k(eo,t),t&&o(Ur),t&&o(zn),t&&o(Br),t&&o(H),t&&o(Wr),k(to,t),t&&o(Vr),t&&o(jn),t&&o(Qr),t&&o(Fn),t&&o(Gr),k(oo,t),t&&o(Hr),t&&o(Pn),t&&o(Kr),t&&o(Cn),t&&o(Xr),k(no,t),t&&o(Yr),t&&o(ze),k(ao),t&&o(Zr),t&&o(Z),k(so),k(Ye),t&&o(Jr),t&&o(Pe),k(io),t&&o(ei),t&&o(J),k(lo),k(po),k(Je),t&&o(ti),t&&o(Ce),k(uo),t&&o(oi),t&&o(N),k(mo),k(fo),k(go),t&&o(ni),t&&o(Ie),k(_o),t&&o(ai),t&&o(ee),k(vo),k(Lo),t&&o(si),t&&o(Ae),k(wo),t&&o(ri),t&&o(W),k(ko),k(xo),t&&o(ii),t&&o(De),k($o),t&&o(li),t&&o(pe),k(Eo),k(jo),k(rt),k(it),t&&o(di),t&&o(Ne),k(Fo),t&&o(ci),t&&o(te),k(Po),k(Oo),k(dt),k(ct),t&&o(pi),t&&o(Re),k(No),t&&o(ui),t&&o(oe),k(So),k(Go),k(ut),k(mt),t&&o(mi),t&&o(Be),k(Ho),t&&o(hi),t&&o(ae),k(Ko),k(Jo),k(ft),k(gt),k(_t)}}}const Vv={local:"layoutlmv2",sections:[{local:"overview",title:"Overview"},{local:"usage-layoutlmv2processor",title:"Usage: LayoutLMv2Processor"},{local:"transformers.LayoutLMv2Config",title:"LayoutLMv2Config"},{local:"transformers.LayoutLMv2FeatureExtractor",title:"LayoutLMv2FeatureExtractor"},{local:"transformers.LayoutLMv2Tokenizer",title:"LayoutLMv2Tokenizer"},{local:"transformers.LayoutLMv2TokenizerFast",title:"LayoutLMv2TokenizerFast"},{local:"transformers.LayoutLMv2Processor",title:"LayoutLMv2Processor"},{local:"transformers.LayoutLMv2Model",title:"LayoutLMv2Model"},{local:"transformers.LayoutLMv2ForSequenceClassification",title:"LayoutLMv2ForSequenceClassification"},{local:"transformers.LayoutLMv2ForTokenClassification",title:"LayoutLMv2ForTokenClassification"},{local:"transformers.LayoutLMv2ForQuestionAnswering",title:"LayoutLMv2ForQuestionAnswering"}],title:"LayoutLMV2"};function Qv(j){return Fv(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Jv extends Ev{constructor(h){super();qv(this,h,Qv,Wv,zv,{})}}export{Jv as default,Vv as metadata};
