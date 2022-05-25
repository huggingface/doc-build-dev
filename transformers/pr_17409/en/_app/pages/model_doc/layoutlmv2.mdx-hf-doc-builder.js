import{S as Sv,i as Rv,s as Uv,e as a,k as c,w as v,t as n,M as Bv,c as r,d as o,m as p,a as i,x as y,h as s,b as l,G as e,g as u,y as b,q as L,o as w,B as k,v as Wv,L as rn}from"../../chunks/vendor-hf-doc-builder.js";import{T as tl}from"../../chunks/Tip-hf-doc-builder.js";import{D}from"../../chunks/Docstring-hf-doc-builder.js";import{C as R}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as le}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as an}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Vv(j){let h,x,f,g,T;return g=new R({props:{code:`from transformers import LayoutLMv2Model, LayoutLMv2Config

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){h=a("p"),x=n("Example:"),f=c(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Example:"),_.forEach(o),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,x),u(m,f,_),b(g,m,_),T=!0},p:rn,i(m){T||(L(g.$$.fragment,m),T=!0)},o(m){w(g.$$.fragment,m),T=!1},d(m){m&&o(h),m&&o(f),k(g,m)}}}function Qv(j){let h,x,f,g,T;return g=new R({props:{code:`from transformers import LayoutLMv2FeatureExtractor
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;])</span>`}}),{c(){h=a("p"),x=n("Examples:"),f=c(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Examples:"),_.forEach(o),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,x),u(m,f,_),b(g,m,_),T=!0},p:rn,i(m){T||(L(g.$$.fragment,m),T=!0)},o(m){w(g.$$.fragment,m),T=!1},d(m){m&&o(h),m&&o(f),k(g,m)}}}function Gv(j){let h,x,f,g,T;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=s(O,"Module"),O.forEach(o),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(m,_){u(m,h,_),e(h,x),e(h,f),e(f,g),e(h,T)},d(m){m&&o(h)}}}function Hv(j){let h,x,f,g,T;return g=new R({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2Model, set_seed
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
torch.Size([<span class="hljs-number">1</span>, <span class="hljs-number">342</span>, <span class="hljs-number">768</span>])`}}),{c(){h=a("p"),x=n("Examples:"),f=c(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Examples:"),_.forEach(o),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,x),u(m,f,_),b(g,m,_),T=!0},p:rn,i(m){T||(L(g.$$.fragment,m),T=!0)},o(m){w(g.$$.fragment,m),T=!1},d(m){m&&o(h),m&&o(f),k(g,m)}}}function Kv(j){let h,x,f,g,T;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=s(O,"Module"),O.forEach(o),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(m,_){u(m,h,_),e(h,x),e(h,f),e(f,g),e(h,T)},d(m){m&&o(h)}}}function Xv(j){let h,x,f,g,T;return g=new R({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForSequenceClassification, set_seed
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
(<span class="hljs-number">4</span>, <span class="hljs-string">&#x27;advertisement&#x27;</span>)`}}),{c(){h=a("p"),x=n("Example:"),f=c(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Example:"),_.forEach(o),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,x),u(m,f,_),b(g,m,_),T=!0},p:rn,i(m){T||(L(g.$$.fragment,m),T=!0)},o(m){w(g.$$.fragment,m),T=!1},d(m){m&&o(h),m&&o(f),k(g,m)}}}function Yv(j){let h,x,f,g,T;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=s(O,"Module"),O.forEach(o),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(m,_){u(m,h,_),e(h,x),e(h,f),e(f,g),e(h,T)},d(m){m&&o(h)}}}function Zv(j){let h,x,f,g,T;return g=new R({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForTokenClassification, set_seed
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
[<span class="hljs-string">&#x27;B-ANSWER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>]`}}),{c(){h=a("p"),x=n("Example:"),f=c(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Example:"),_.forEach(o),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,x),u(m,f,_),b(g,m,_),T=!0},p:rn,i(m){T||(L(g.$$.fragment,m),T=!0)},o(m){w(g.$$.fragment,m),T=!1},d(m){m&&o(h),m&&o(f),k(g,m)}}}function Jv(j){let h,x,f,g,T;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=s(O,"Module"),O.forEach(o),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(m,_){u(m,h,_),e(h,x),e(h,f),e(f,g),e(h,T)},d(m){m&&o(h)}}}function ey(j){let h,x;return h=new R({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForQuestionAnswering, set_seed
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
<span class="hljs-string">&#x27;council mem - bers conducted by trrf treasurer philip g. kuehn to get answers which the public ...</span>`}}),{c(){v(h.$$.fragment)},l(f){y(h.$$.fragment,f)},m(f,g){b(h,f,g),x=!0},p:rn,i(f){x||(L(h.$$.fragment,f),x=!0)},o(f){w(h.$$.fragment,f),x=!1},d(f){k(h,f)}}}function ty(j){let h,x;return h=new R({props:{code:`target_start_index = torch.tensor([7])
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
(<span class="hljs-number">154</span>, <span class="hljs-number">287</span>)`}}),{c(){v(h.$$.fragment)},l(f){y(h.$$.fragment,f)},m(f,g){b(h,f,g),x=!0},p:rn,i(f){x||(L(h.$$.fragment,f),x=!0)},o(f){w(h.$$.fragment,f),x=!1},d(f){k(h,f)}}}function oy(j){let h,x,f,g,T,m,_,O,ol,Lr,$e,Qe,bs,qt,nl,Ls,sl,wr,ue,al,zt,rl,il,ln,ll,dl,kr,me,X,cl,jt,pl,ul,Ft,ml,hl,Pt,fl,gl,Ct,_l,vl,yl,It,bl,At,Ll,wl,kl,Dt,xl,Ot,Tl,Ml,xr,dn,$l,Tr,cn,ws,El,Mr,Ge,ql,ks,zl,jl,$r,Nt,Er,he,Fl,xs,Pl,Cl,Ts,Il,Al,qr,St,zr,fe,Dl,Ms,Ol,Nl,$s,Sl,Rl,jr,pn,Ul,Fr,V,Es,Bl,Wl,Rt,Vl,Ut,Ql,Gl,Hl,Bt,Kl,Wt,Xl,Yl,Zl,Ee,Jl,Vt,ed,td,Qt,od,nd,sd,M,ad,qs,rd,id,un,ld,dd,zs,cd,pd,js,ud,md,Fs,hd,fd,Ps,gd,_d,Cs,vd,yd,Is,bd,Ld,As,wd,kd,mn,xd,Td,Gt,Md,$d,Ht,Ed,qd,Pr,Kt,Cr,ge,zd,Ds,jd,Fd,Os,Pd,Cd,Ir,Xt,Ar,He,Id,hn,Ad,Dd,Dr,_e,I,Od,fn,Nd,Sd,Ns,Rd,Ud,Ss,Bd,Wd,gn,Vd,Qd,Rs,Gd,Hd,Us,Kd,Xd,Bs,Yd,Zd,Jd,Yt,ec,_n,tc,oc,nc,Zt,sc,Ws,ac,rc,Or,Ke,ic,vn,lc,dc,Nr,qe,Xe,Vs,Jt,cc,Qs,pc,Sr,Q,uc,yn,mc,hc,bn,fc,gc,Ln,_c,vc,wn,yc,bc,Rr,eo,Ur,E,Lc,kn,wc,kc,xn,xc,Tc,Gs,Mc,$c,Tn,Ec,qc,Mn,zc,jc,Hs,Fc,Pc,Ks,Cc,Ic,Xs,Ac,Dc,Ys,Oc,Nc,Zs,Sc,Rc,Br,B,$n,Uc,Bc,to,Wc,Vc,En,Qc,Gc,Js,Hc,Kc,ea,Xc,Yc,Wr,qn,Zc,Vr,zn,ta,Jc,Qr,jn,ep,Gr,oo,Hr,Fn,oa,tp,Kr,ve,op,na,np,sp,sa,ap,rp,Xr,no,Yr,Pn,aa,ip,Zr,G,lp,ra,dp,cp,ia,pp,up,la,mp,hp,da,fp,gp,Jr,so,ei,Cn,ca,_p,ti,In,vp,oi,ao,ni,An,pa,yp,si,Dn,bp,ai,ro,ri,ze,Ye,ua,io,Lp,ma,wp,ii,Y,lo,kp,je,xp,On,Tp,Mp,co,$p,Ep,qp,Fe,zp,Nn,jp,Fp,Sn,Pp,Cp,Ip,Ze,li,Pe,Je,ha,po,Ap,fa,Dp,di,Z,uo,Op,ga,Np,Sp,mo,Rp,_a,Up,Bp,Wp,ye,ho,Vp,va,Qp,Gp,et,ci,Ce,tt,ya,fo,Hp,ba,Kp,pi,N,go,Xp,S,Yp,Rn,Zp,Jp,La,eu,tu,wa,ou,nu,ka,su,au,xa,ru,iu,Ta,lu,du,cu,_o,pu,Un,uu,mu,hu,Bn,Wn,fu,gu,_u,ot,vo,vu,Ma,yu,bu,Vn,yo,ui,Ie,nt,$a,bo,Lu,Ea,wu,mi,J,Lo,ku,wo,xu,qa,Tu,Mu,$u,ko,Eu,Qn,qu,zu,ju,st,xo,Fu,za,Pu,hi,Ae,at,ja,To,Cu,Fa,Iu,fi,W,Mo,Au,Pa,Du,Ou,Gn,Hn,Nu,Su,Ru,F,Uu,Kn,Bu,Wu,Xn,Vu,Qu,Yn,Gu,Hu,Ca,Ku,Xu,Ia,Yu,Zu,Aa,Ju,em,Da,tm,om,Oa,nm,sm,Na,am,rm,im,be,$o,lm,$,dm,Sa,cm,pm,Eo,Ra,um,mm,hm,Zn,fm,gm,Ua,_m,vm,Ba,ym,bm,qo,Wa,Lm,wm,km,Va,xm,Tm,Jn,Mm,$m,Qa,Em,qm,Ga,zm,jm,Ha,Fm,Pm,Ka,Cm,Im,Am,Xa,Dm,gi,De,rt,Ya,zo,Om,Za,Nm,_i,de,jo,Sm,Fo,Rm,Po,Um,Bm,Wm,se,Co,Vm,Oe,Qm,es,Gm,Hm,Ja,Km,Xm,Ym,it,Zm,lt,vi,Ne,dt,er,Io,Jm,tr,eh,yi,ee,Ao,th,Do,oh,Oo,nh,sh,ah,No,rh,So,ih,lh,dh,ae,Ro,ch,Se,ph,ts,uh,mh,or,hh,fh,gh,ct,_h,pt,bi,Re,ut,nr,Uo,vh,sr,yh,Li,te,Bo,bh,oe,Lh,Wo,wh,kh,Vo,xh,Th,Qo,Mh,$h,Go,Eh,qh,zh,Ho,jh,Ko,Fh,Ph,Ch,re,Xo,Ih,Ue,Ah,os,Dh,Oh,ar,Nh,Sh,Rh,mt,Uh,ht,wi,Be,ft,rr,Yo,Bh,ir,Wh,ki,ne,Zo,Vh,ce,Qh,Jo,Gh,Hh,lr,Kh,Xh,dr,Yh,Zh,Jh,en,ef,tn,tf,of,nf,A,on,sf,We,af,ns,rf,lf,cr,df,cf,pf,gt,uf,pr,mf,hf,ur,ff,gf,_t,_f,vt,xi;return m=new le({}),qt=new le({}),Nt=new R({props:{code:"python -m pip install 'git+https://github.com/facebookresearch/detectron2.git'",highlighted:'<span class="hljs-keyword">python</span> -m pip install <span class="hljs-string">&#x27;git+https://github.com/facebookresearch/detectron2.git&#x27;</span>'}}),St=new R({props:{code:"python -m pip install torchvision pytesseract",highlighted:'<span class="hljs-comment">python</span> <span class="hljs-literal">-</span><span class="hljs-comment">m pip install torchvision pytesseract</span>'}}),Kt=new R({props:{code:`def normalize_bbox(bbox, width, height):
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
    ]`}}),Xt=new R({props:{code:`from PIL import Image

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
)

width, height = image.size`,highlighted:`<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
)

width, height = image.size`}}),Jt=new le({}),eo=new R({props:{code:`from transformers import LayoutLMv2FeatureExtractor, LayoutLMv2TokenizerFast, LayoutLMv2Processor

feature_extractor = LayoutLMv2FeatureExtractor()  # apply_ocr is set to True by default
tokenizer = LayoutLMv2TokenizerFast.from_pretrained("microsoft/layoutlmv2-base-uncased")
processor = LayoutLMv2Processor(feature_extractor, tokenizer)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2FeatureExtractor, LayoutLMv2TokenizerFast, LayoutLMv2Processor

feature_extractor = LayoutLMv2FeatureExtractor()  <span class="hljs-comment"># apply_ocr is set to True by default</span>
tokenizer = LayoutLMv2TokenizerFast.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
processor = LayoutLMv2Processor(feature_extractor, tokenizer)`}}),oo=new R({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),no=new R({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),so=new R({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;labels&#x27;, &#x27;image&#x27;])</span>`}}),ao=new R({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),ro=new R({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),io=new le({}),lo=new D({props:{name:"class transformers.LayoutLMv2Config",anchor:"transformers.LayoutLMv2Config",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"max_rel_pos",val:" = 128"},{name:"rel_pos_bins",val:" = 32"},{name:"fast_qkv",val:" = True"},{name:"max_rel_2d_pos",val:" = 256"},{name:"rel_2d_pos_bins",val:" = 64"},{name:"convert_sync_batchnorm",val:" = True"},{name:"image_feature_pool_shape",val:" = [7, 7, 256]"},{name:"coordinate_size",val:" = 128"},{name:"shape_size",val:" = 128"},{name:"has_relative_attention_bias",val:" = True"},{name:"has_spatial_attention_bias",val:" = True"},{name:"has_visual_segment_embedding",val:" = False"},{name:"detectron2_config_args",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the LayoutLMv2 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model">LayoutLMv2Model</a> or <code>TFLayoutLMv2Model</code>.`,name:"vocab_size"},{anchor:"transformers.LayoutLMv2Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model">LayoutLMv2Model</a> or
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
for details regarding default values.`,name:"detectron2_config_args"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/configuration_layoutlmv2.py#L34"}}),Ze=new an({props:{anchor:"transformers.LayoutLMv2Config.example",$$slots:{default:[Vv]},$$scope:{ctx:j}}}),po=new le({}),uo=new D({props:{name:"class transformers.LayoutLMv2FeatureExtractor",anchor:"transformers.LayoutLMv2FeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"apply_ocr",val:" = True"},{name:"ocr_lang",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2FeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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

					</div>`,name:"ocr_lang"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/feature_extraction_layoutlmv2.py#L82"}}),ho=new D({props:{name:"__call__",anchor:"transformers.LayoutLMv2FeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2FeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
The image or batch of images to be prepared. Each image can be a PIL image, NumPy array or PyTorch
tensor. In case of a NumPy array/PyTorch tensor, each image should be of shape (C, H, W), where C is a
number of channels, H and W are image height and width.`,name:"images"},{anchor:"transformers.LayoutLMv2FeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17409/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&apos;np&apos;</code>) &#x2014;
If set, will return tensors of a particular framework. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/feature_extraction_layoutlmv2.py#L123",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17409/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a> with the following fields:</p>
<ul>
<li><strong>pixel_values</strong> \u2014 Pixel values to be fed to a model, of shape (batch_size, num_channels, height,
width).</li>
<li><strong>words</strong> \u2014 Optional words as identified by Tesseract OCR (only when <a
  href="/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"
>LayoutLMv2FeatureExtractor</a> was
initialized with <code>apply_ocr</code> set to <code>True</code>).</li>
<li><strong>boxes</strong> \u2014 Optional bounding boxes as identified by Tesseract OCR, normalized based on the image size
(only when <a
  href="/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"
>LayoutLMv2FeatureExtractor</a> was initialized with <code>apply_ocr</code> set to <code>True</code>).</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17409/en/main_classes/feature_extractor#transformers.BatchFeature"
>BatchFeature</a></p>
`}}),et=new an({props:{anchor:"transformers.LayoutLMv2FeatureExtractor.__call__.example",$$slots:{default:[Qv]},$$scope:{ctx:j}}}),fo=new le({}),go=new D({props:{name:"class transformers.LayoutLMv2Tokenizer",anchor:"transformers.LayoutLMv2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"model_max_length",val:": int = 512"},{name:"additional_special_tokens",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L198"}}),vo=new D({props:{name:"__call__",anchor:"transformers.LayoutLMv2Tokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Tokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17409/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17409/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17409/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17409/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17409/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17409/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L418"}}),yo=new D({props:{name:"save_vocabulary",anchor:"transformers.LayoutLMv2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L398"}}),bo=new le({}),Lo=new D({props:{name:"class transformers.LayoutLMv2TokenizerFast",anchor:"transformers.LayoutLMv2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original LayoutLMv2).`,name:"tokenize_chinese_chars"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/tokenization_layoutlmv2_fast.py#L70"}}),xo=new D({props:{name:"__call__",anchor:"transformers.LayoutLMv2TokenizerFast.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17409/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17409/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17409/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17409/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_17409/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17409/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/tokenization_layoutlmv2_fast.py#L179"}}),To=new le({}),Mo=new D({props:{name:"class transformers.LayoutLMv2Processor",anchor:"transformers.LayoutLMv2Processor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>LayoutLMv2FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor">LayoutLMv2FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.LayoutLMv2Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>LayoutLMv2Tokenizer</code> or <code>LayoutLMv2TokenizerFast</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a> or <a href="/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast">LayoutLMv2TokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/processing_layoutlmv2.py#L25"}}),$o=new D({props:{name:"__call__",anchor:"transformers.LayoutLMv2Processor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/processing_layoutlmv2.py#L47"}}),zo=new le({}),jo=new D({props:{name:"class transformers.LayoutLMv2Model",anchor:"transformers.LayoutLMv2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17409/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L708"}}),Co=new D({props:{name:"forward",anchor:"transformers.LayoutLMv2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_17409/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17409/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17409/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L806",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17409/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
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
  href="/docs/transformers/pr_17409/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),it=new tl({props:{$$slots:{default:[Gv]},$$scope:{ctx:j}}}),lt=new an({props:{anchor:"transformers.LayoutLMv2Model.forward.example",$$slots:{default:[Hv]},$$scope:{ctx:j}}}),Io=new le({}),Ao=new D({props:{name:"class transformers.LayoutLMv2ForSequenceClassification",anchor:"transformers.LayoutLMv2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17409/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L964"}}),Ro=new D({props:{name:"forward",anchor:"transformers.LayoutLMv2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_17409/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17409/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17409/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L978",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17409/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
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
  href="/docs/transformers/pr_17409/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ct=new tl({props:{$$slots:{default:[Kv]},$$scope:{ctx:j}}}),pt=new an({props:{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.example",$$slots:{default:[Xv]},$$scope:{ctx:j}}}),Uo=new le({}),Bo=new D({props:{name:"class transformers.LayoutLMv2ForTokenClassification",anchor:"transformers.LayoutLMv2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17409/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1145"}}),Xo=new D({props:{name:"forward",anchor:"transformers.LayoutLMv2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_17409/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17409/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17409/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1159",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17409/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
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
  href="/docs/transformers/pr_17409/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mt=new tl({props:{$$slots:{default:[Yv]},$$scope:{ctx:j}}}),ht=new an({props:{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.example",$$slots:{default:[Zv]},$$scope:{ctx:j}}}),Yo=new le({}),Zo=new D({props:{name:"class transformers.LayoutLMv2ForQuestionAnswering",anchor:"transformers.LayoutLMv2ForQuestionAnswering",parameters:[{name:"config",val:""},{name:"has_visual_segment_embedding",val:" = True"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17409/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1276"}}),on=new D({props:{name:"forward",anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a>. See <a href="/docs/transformers/pr_17409/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_17409/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_17409/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1290",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17409/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
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
  href="/docs/transformers/pr_17409/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),gt=new tl({props:{$$slots:{default:[Jv]},$$scope:{ctx:j}}}),_t=new an({props:{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.example",$$slots:{default:[ey]},$$scope:{ctx:j}}}),vt=new an({props:{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.example-2",$$slots:{default:[ty]},$$scope:{ctx:j}}}),{c(){h=a("meta"),x=c(),f=a("h1"),g=a("a"),T=a("span"),v(m.$$.fragment),_=c(),O=a("span"),ol=n("LayoutLMV2"),Lr=c(),$e=a("h2"),Qe=a("a"),bs=a("span"),v(qt.$$.fragment),nl=c(),Ls=a("span"),sl=n("Overview"),wr=c(),ue=a("p"),al=n("The LayoutLMV2 model was proposed in "),zt=a("a"),rl=n("LayoutLMv2: Multi-modal Pre-training for Visually-Rich Document Understanding"),il=n(` by Yang Xu, Yiheng Xu, Tengchao Lv, Lei Cui, Furu Wei, Guoxin Wang, Yijuan Lu,
Dinei Florencio, Cha Zhang, Wanxiang Che, Min Zhang, Lidong Zhou. LayoutLMV2 improves `),ln=a("a"),ll=n("LayoutLM"),dl=n(` to obtain
state-of-the-art results across several document image understanding benchmarks:`),kr=c(),me=a("ul"),X=a("li"),cl=n("information extraction from scanned documents: the "),jt=a("a"),pl=n("FUNSD"),ul=n(` dataset (a
collection of 199 annotated forms comprising more than 30,000 words), the `),Ft=a("a"),ml=n("CORD"),hl=n(`
dataset (a collection of 800 receipts for training, 100 for validation and 100 for testing), the `),Pt=a("a"),fl=n("SROIE"),gl=n(` dataset (a collection of 626 receipts for training and 347 receipts for testing)
and the `),Ct=a("a"),_l=n("Kleister-NDA"),vl=n(` dataset (a collection of non-disclosure
agreements from the EDGAR database, including 254 documents for training, 83 documents for validation, and 203
documents for testing).`),yl=c(),It=a("li"),bl=n("document image classification: the "),At=a("a"),Ll=n("RVL-CDIP"),wl=n(` dataset (a collection of
400,000 images belonging to one of 16 classes).`),kl=c(),Dt=a("li"),xl=n("document visual question answering: the "),Ot=a("a"),Tl=n("DocVQA"),Ml=n(` dataset (a collection of 50,000
questions defined on 12,000+ document images).`),xr=c(),dn=a("p"),$l=n("The abstract from the paper is the following:"),Tr=c(),cn=a("p"),ws=a("em"),El=n(`Pre-training of text and layout has proved effective in a variety of visually-rich document understanding tasks due to
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
this https URL.`),Mr=c(),Ge=a("p"),ql=n("LayoutLMv2 depends on "),ks=a("code"),zl=n("detectron2"),jl=n(". Run the following to install it:"),$r=c(),v(Nt.$$.fragment),Er=c(),he=a("p"),Fl=n("If you wish to use the OCR feature, you should also install "),xs=a("code"),Pl=n("torchvision"),Cl=n(" and "),Ts=a("code"),Il=n("pytesseract"),Al=n(":"),qr=c(),v(St.$$.fragment),zr=c(),fe=a("p"),Dl=n("(If you are developing for LayoutLMv2, note that passing the doctests and certain tests for LayoutLMv2 requires the installation of all three packages, in addition to the installation of "),Ms=a("code"),Ol=n("datasets"),Nl=n(" and "),$s=a("code"),Sl=n("torch"),Rl=n(".)"),jr=c(),pn=a("p"),Ul=n("Tips:"),Fr=c(),V=a("ul"),Es=a("li"),Bl=n(`The main difference between LayoutLMv1 and LayoutLMv2 is that the latter incorporates visual embeddings during
pre-training (while LayoutLMv1 only adds visual embeddings during fine-tuning).`),Wl=c(),Rt=a("li"),Vl=n(`LayoutLMv2 adds both a relative 1D attention bias as well as a spatial 2D attention bias to the attention scores in
the self-attention layers. Details can be found on page 5 of the `),Ut=a("a"),Ql=n("paper"),Gl=n("."),Hl=c(),Bt=a("li"),Kl=n("Demo notebooks on how to use the LayoutLMv2 model on RVL-CDIP, FUNSD, DocVQA, CORD can be found "),Wt=a("a"),Xl=n("here"),Yl=n("."),Zl=c(),Ee=a("li"),Jl=n("LayoutLMv2 uses Facebook AI\u2019s "),Vt=a("a"),ed=n("Detectron2"),td=n(` package for its visual
backbone. See `),Qt=a("a"),od=n("this link"),nd=n(` for installation
instructions.`),sd=c(),M=a("li"),ad=n("In addition to "),qs=a("code"),rd=n("input_ids"),id=n(", "),un=a("a"),ld=n("forward()"),dd=n(` expects 2 additional inputs, namely
`),zs=a("code"),cd=n("image"),pd=n(" and "),js=a("code"),ud=n("bbox"),md=n(". The "),Fs=a("code"),hd=n("image"),fd=n(` input corresponds to the original document image in which the text
tokens occur. The model expects each document image to be of size 224x224. This means that if you have a batch of
document images, `),Ps=a("code"),gd=n("image"),_d=n(` should be a tensor of shape (batch_size, 3, 224, 224). This can be either a
`),Cs=a("code"),vd=n("torch.Tensor"),yd=n(" or a "),Is=a("code"),bd=n("Detectron2.structures.ImageList"),Ld=n(`. You don\u2019t need to normalize the channels, as this is
done by the model. Important to note is that the visual backbone expects BGR channels instead of RGB, as all models
in Detectron2 are pre-trained using the BGR format. The `),As=a("code"),wd=n("bbox"),kd=n(` input are the bounding boxes (i.e. 2D-positions)
of the input text tokens. This is identical to `),mn=a("a"),xd=n("LayoutLMModel"),Td=n(`. These can be obtained using an
external OCR engine such as Google\u2019s `),Gt=a("a"),Md=n("Tesseract"),$d=n(" (there\u2019s a "),Ht=a("a"),Ed=n(`Python
wrapper`),qd=n(` available). Each bounding box should be in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1)
represents the position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on
a 0-1000 scale. To normalize, you can use the following function:`),Pr=c(),v(Kt.$$.fragment),Cr=c(),ge=a("p"),zd=n("Here, "),Ds=a("code"),jd=n("width"),Fd=n(" and "),Os=a("code"),Pd=n("height"),Cd=n(` correspond to the width and height of the original document in which the token
occurs (before resizing the image). Those can be obtained using the Python Image Library (PIL) library for example, as
follows:`),Ir=c(),v(Xt.$$.fragment),Ar=c(),He=a("p"),Id=n("However, this model includes a brand new "),hn=a("a"),Ad=n("LayoutLMv2Processor"),Dd=n(` which can be used to directly
prepare data for the model (including applying OCR under the hood). More information can be found in the \u201CUsage\u201D
section below.`),Dr=c(),_e=a("ul"),I=a("li"),Od=n("Internally, "),fn=a("a"),Nd=n("LayoutLMv2Model"),Sd=n(" will send the "),Ns=a("code"),Rd=n("image"),Ud=n(` input through its visual backbone to
obtain a lower-resolution feature map, whose shape is equal to the `),Ss=a("code"),Bd=n("image_feature_pool_shape"),Wd=n(` attribute of
`),gn=a("a"),Vd=n("LayoutLMv2Config"),Qd=n(`. This feature map is then flattened to obtain a sequence of image tokens. As
the size of the feature map is 7x7 by default, one obtains 49 image tokens. These are then concatenated with the text
tokens, and send through the Transformer encoder. This means that the last hidden states of the model will have a
length of 512 + 49 = 561, if you pad the text tokens up to the max length. More generally, the last hidden states
will have a shape of `),Rs=a("code"),Gd=n("seq_length"),Hd=n(" + "),Us=a("code"),Kd=n("image_feature_pool_shape[0]"),Xd=n(` *
`),Bs=a("code"),Yd=n("config.image_feature_pool_shape[1]"),Zd=n("."),Jd=c(),Yt=a("li"),ec=n("When calling "),_n=a("a"),tc=n("from_pretrained()"),oc=n(`, a warning will be printed with a long list of
parameter names that are not initialized. This is not a problem, as these parameters are batch normalization
statistics, which are going to have values when fine-tuning on a custom dataset.`),nc=c(),Zt=a("li"),sc=n("If you want to train the model in a distributed environment, make sure to call "),Ws=a("code"),ac=n("synchronize_batch_norm"),rc=n(` on the
model in order to properly synchronize the batch normalization layers of the visual backbone.`),Or=c(),Ke=a("p"),ic=n(`In addition, there\u2019s LayoutXLM, which is a multilingual version of LayoutLMv2. More information can be found on
`),vn=a("a"),lc=n("LayoutXLM\u2019s documentation page"),dc=n("."),Nr=c(),qe=a("h2"),Xe=a("a"),Vs=a("span"),v(Jt.$$.fragment),cc=c(),Qs=a("span"),pc=n("Usage: LayoutLMv2Processor"),Sr=c(),Q=a("p"),uc=n("The easiest way to prepare data for the model is to use "),yn=a("a"),mc=n("LayoutLMv2Processor"),hc=n(`, which internally
combines a feature extractor (`),bn=a("a"),fc=n("LayoutLMv2FeatureExtractor"),gc=n(`) and a tokenizer
(`),Ln=a("a"),_c=n("LayoutLMv2Tokenizer"),vc=n(" or "),wn=a("a"),yc=n("LayoutLMv2TokenizerFast"),bc=n(`). The feature extractor
handles the image modality, while the tokenizer handles the text modality. A processor combines both, which is ideal
for a multi-modal model like LayoutLMv2. Note that you can still use both separately, if you only want to handle one
modality.`),Rr=c(),v(eo.$$.fragment),Ur=c(),E=a("p"),Lc=n("In short, one can provide a document image (and possibly additional data) to "),kn=a("a"),wc=n("LayoutLMv2Processor"),kc=n(`,
and it will create the inputs expected by the model. Internally, the processor first uses
`),xn=a("a"),xc=n("LayoutLMv2FeatureExtractor"),Tc=n(` to apply OCR on the image to get a list of words and normalized
bounding boxes, as well to resize the image to a given size in order to get the `),Gs=a("code"),Mc=n("image"),$c=n(` input. The words and
normalized bounding boxes are then provided to `),Tn=a("a"),Ec=n("LayoutLMv2Tokenizer"),qc=n(` or
`),Mn=a("a"),zc=n("LayoutLMv2TokenizerFast"),jc=n(", which converts them to token-level "),Hs=a("code"),Fc=n("input_ids"),Pc=n(`,
`),Ks=a("code"),Cc=n("attention_mask"),Ic=n(", "),Xs=a("code"),Ac=n("token_type_ids"),Dc=n(", "),Ys=a("code"),Oc=n("bbox"),Nc=n(`. Optionally, one can provide word labels to the processor,
which are turned into token-level `),Zs=a("code"),Sc=n("labels"),Rc=n("."),Br=c(),B=a("p"),$n=a("a"),Uc=n("LayoutLMv2Processor"),Bc=n(" uses "),to=a("a"),Wc=n("PyTesseract"),Vc=n(`, a Python
wrapper around Google\u2019s Tesseract OCR engine, under the hood. Note that you can still use your own OCR engine of
choice, and provide the words and normalized boxes yourself. This requires initializing
`),En=a("a"),Qc=n("LayoutLMv2FeatureExtractor"),Gc=n(" with "),Js=a("code"),Hc=n("apply_ocr"),Kc=n(" set to "),ea=a("code"),Xc=n("False"),Yc=n("."),Wr=c(),qn=a("p"),Zc=n(`In total, there are 5 use cases that are supported by the processor. Below, we list them all. Note that each of these
use cases work for both batched and non-batched inputs (we illustrate them for non-batched inputs).`),Vr=c(),zn=a("p"),ta=a("strong"),Jc=n(`Use case 1: document image classification (training, inference) + token classification (inference), apply_ocr =
True`),Qr=c(),jn=a("p"),ep=n(`This is the simplest case, in which the processor (actually the feature extractor) will perform OCR on the image to get
the words and normalized bounding boxes.`),Gr=c(),v(oo.$$.fragment),Hr=c(),Fn=a("p"),oa=a("strong"),tp=n("Use case 2: document image classification (training, inference) + token classification (inference), apply_ocr=False"),Kr=c(),ve=a("p"),op=n("In case one wants to do OCR themselves, one can initialize the feature extractor with "),na=a("code"),np=n("apply_ocr"),sp=n(` set to
`),sa=a("code"),ap=n("False"),rp=n(`. In that case, one should provide the words and corresponding (normalized) bounding boxes themselves to
the processor.`),Xr=c(),v(no.$$.fragment),Yr=c(),Pn=a("p"),aa=a("strong"),ip=n("Use case 3: token classification (training), apply_ocr=False"),Zr=c(),G=a("p"),lp=n(`For token classification tasks (such as FUNSD, CORD, SROIE, Kleister-NDA), one can also provide the corresponding word
labels in order to train a model. The processor will then convert these into token-level `),ra=a("code"),dp=n("labels"),cp=n(`. By default, it
will only label the first wordpiece of a word, and label the remaining wordpieces with -100, which is the
`),ia=a("code"),pp=n("ignore_index"),up=n(` of PyTorch\u2019s CrossEntropyLoss. In case you want all wordpieces of a word to be labeled, you can
initialize the tokenizer with `),la=a("code"),mp=n("only_label_first_subword"),hp=n(" set to "),da=a("code"),fp=n("False"),gp=n("."),Jr=c(),v(so.$$.fragment),ei=c(),Cn=a("p"),ca=a("strong"),_p=n("Use case 4: visual question answering (inference), apply_ocr=True"),ti=c(),In=a("p"),vp=n(`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. By default, the
processor will apply OCR on the image, and create [CLS] question tokens [SEP] word tokens [SEP].`),oi=c(),v(ao.$$.fragment),ni=c(),An=a("p"),pa=a("strong"),yp=n("Use case 5: visual question answering (inference), apply_ocr=False"),si=c(),Dn=a("p"),bp=n(`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. If you want to
perform OCR yourself, you can provide your own words and (normalized) bounding boxes to the processor.`),ai=c(),v(ro.$$.fragment),ri=c(),ze=a("h2"),Ye=a("a"),ua=a("span"),v(io.$$.fragment),Lp=c(),ma=a("span"),wp=n("LayoutLMv2Config"),ii=c(),Y=a("div"),v(lo.$$.fragment),kp=c(),je=a("p"),xp=n("This is the configuration class to store the configuration of a "),On=a("a"),Tp=n("LayoutLMv2Model"),Mp=n(`. It is used to instantiate an
LayoutLMv2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv2
`),co=a("a"),$p=n("microsoft/layoutlmv2-base-uncased"),Ep=n(" architecture."),qp=c(),Fe=a("p"),zp=n("Configuration objects inherit from "),Nn=a("a"),jp=n("PretrainedConfig"),Fp=n(` and can be used to control the model outputs. Read the
documentation from `),Sn=a("a"),Pp=n("PretrainedConfig"),Cp=n(" for more information."),Ip=c(),v(Ze.$$.fragment),li=c(),Pe=a("h2"),Je=a("a"),ha=a("span"),v(po.$$.fragment),Ap=c(),fa=a("span"),Dp=n("LayoutLMv2FeatureExtractor"),di=c(),Z=a("div"),v(uo.$$.fragment),Op=c(),ga=a("p"),Np=n(`Constructs a LayoutLMv2 feature extractor. This can be used to resize document images to the same size, as well as
to apply OCR on them in order to get a list of words and normalized bounding boxes.`),Sp=c(),mo=a("p"),Rp=n("This feature extractor inherits from "),_a=a("code"),Up=n("PreTrainedFeatureExtractor()"),Bp=n(` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),Wp=c(),ye=a("div"),v(ho.$$.fragment),Vp=c(),va=a("p"),Qp=n("Main method to prepare for the model one or several image(s)."),Gp=c(),v(et.$$.fragment),ci=c(),Ce=a("h2"),tt=a("a"),ya=a("span"),v(fo.$$.fragment),Hp=c(),ba=a("span"),Kp=n("LayoutLMv2Tokenizer"),pi=c(),N=a("div"),v(go.$$.fragment),Xp=c(),S=a("p"),Yp=n("Construct a LayoutLMv2 tokenizer. Based on WordPiece. "),Rn=a("a"),Zp=n("LayoutLMv2Tokenizer"),Jp=n(` can be used to turn words, word-level
bounding boxes and optional word labels to token-level `),La=a("code"),eu=n("input_ids"),tu=n(", "),wa=a("code"),ou=n("attention_mask"),nu=n(", "),ka=a("code"),su=n("token_type_ids"),au=n(", "),xa=a("code"),ru=n("bbox"),iu=n(`, and
optional `),Ta=a("code"),lu=n("labels"),du=n(" (for token classification)."),cu=c(),_o=a("p"),pu=n("This tokenizer inherits from "),Un=a("a"),uu=n("PreTrainedTokenizer"),mu=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),hu=c(),Bn=a("p"),Wn=a("a"),fu=n("LayoutLMv2Tokenizer"),gu=n(` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),_u=c(),ot=a("div"),v(vo.$$.fragment),vu=c(),Ma=a("p"),yu=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),bu=c(),Vn=a("div"),v(yo.$$.fragment),ui=c(),Ie=a("h2"),nt=a("a"),$a=a("span"),v(bo.$$.fragment),Lu=c(),Ea=a("span"),wu=n("LayoutLMv2TokenizerFast"),mi=c(),J=a("div"),v(Lo.$$.fragment),ku=c(),wo=a("p"),xu=n("Construct a \u201Cfast\u201D LayoutLMv2 tokenizer (backed by HuggingFace\u2019s "),qa=a("em"),Tu=n("tokenizers"),Mu=n(" library). Based on WordPiece."),$u=c(),ko=a("p"),Eu=n("This tokenizer inherits from "),Qn=a("a"),qu=n("PreTrainedTokenizerFast"),zu=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),ju=c(),st=a("div"),v(xo.$$.fragment),Fu=c(),za=a("p"),Pu=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),hi=c(),Ae=a("h2"),at=a("a"),ja=a("span"),v(To.$$.fragment),Cu=c(),Fa=a("span"),Iu=n("LayoutLMv2Processor"),fi=c(),W=a("div"),v(Mo.$$.fragment),Au=c(),Pa=a("p"),Du=n(`Constructs a LayoutLMv2 processor which combines a LayoutLMv2 feature extractor and a LayoutLMv2 tokenizer into a
single processor.`),Ou=c(),Gn=a("p"),Hn=a("a"),Nu=n("LayoutLMv2Processor"),Su=n(" offers all the functionalities you need to prepare data for the model."),Ru=c(),F=a("p"),Uu=n("It first uses "),Kn=a("a"),Bu=n("LayoutLMv2FeatureExtractor"),Wu=n(` to resize document images to a fixed size, and optionally applies OCR
to get words and normalized bounding boxes. These are then provided to `),Xn=a("a"),Vu=n("LayoutLMv2Tokenizer"),Qu=n(` or
`),Yn=a("a"),Gu=n("LayoutLMv2TokenizerFast"),Hu=n(", which turns the words and bounding boxes into token-level "),Ca=a("code"),Ku=n("input_ids"),Xu=n(`,
`),Ia=a("code"),Yu=n("attention_mask"),Zu=n(", "),Aa=a("code"),Ju=n("token_type_ids"),em=n(", "),Da=a("code"),tm=n("bbox"),om=n(". Optionally, one can provide integer "),Oa=a("code"),nm=n("word_labels"),sm=n(`, which are turned
into token-level `),Na=a("code"),am=n("labels"),rm=n(" for token classification tasks (such as FUNSD, CORD)."),im=c(),be=a("div"),v($o.$$.fragment),lm=c(),$=a("p"),dm=n("This method first forwards the "),Sa=a("code"),cm=n("images"),pm=n(" argument to "),Eo=a("a"),Ra=a("strong"),um=n("call"),mm=n("()"),hm=n(`. In case
`),Zn=a("a"),fm=n("LayoutLMv2FeatureExtractor"),gm=n(" was initialized with "),Ua=a("code"),_m=n("apply_ocr"),vm=n(" set to "),Ba=a("code"),ym=n("True"),bm=n(`, it passes the obtained words and
bounding boxes along with the additional arguments to `),qo=a("a"),Wa=a("strong"),Lm=n("call"),wm=n("()"),km=n(` and returns the output,
together with resized `),Va=a("code"),xm=n("images"),Tm=n(". In case "),Jn=a("a"),Mm=n("LayoutLMv2FeatureExtractor"),$m=n(" was initialized with "),Qa=a("code"),Em=n("apply_ocr"),qm=n(` set to
`),Ga=a("code"),zm=n("False"),jm=n(", it passes the words ("),Ha=a("code"),Fm=n("text"),Pm=n("/"),Ka=a("code"),Cm=n("text_pair`) and `boxes` specified by the user along with the additional arguments to [__call__()](/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__) and returns the output, together with resized `images"),Im=n("."),Am=c(),Xa=a("p"),Dm=n("Please refer to the docstring of the above two methods for more information."),gi=c(),De=a("h2"),rt=a("a"),Ya=a("span"),v(zo.$$.fragment),Om=c(),Za=a("span"),Nm=n("LayoutLMv2Model"),_i=c(),de=a("div"),v(jo.$$.fragment),Sm=c(),Fo=a("p"),Rm=n(`The bare LayoutLMv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Po=a("a"),Um=n("torch.nn.Module"),Bm=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wm=c(),se=a("div"),v(Co.$$.fragment),Vm=c(),Oe=a("p"),Qm=n("The "),es=a("a"),Gm=n("LayoutLMv2Model"),Hm=n(" forward method, overrides the "),Ja=a("code"),Km=n("__call__"),Xm=n(" special method."),Ym=c(),v(it.$$.fragment),Zm=c(),v(lt.$$.fragment),vi=c(),Ne=a("h2"),dt=a("a"),er=a("span"),v(Io.$$.fragment),Jm=c(),tr=a("span"),eh=n("LayoutLMv2ForSequenceClassification"),yi=c(),ee=a("div"),v(Ao.$$.fragment),th=c(),Do=a("p"),oh=n(`LayoutLMv2 Model with a sequence classification head on top (a linear layer on top of the concatenation of the
final hidden state of the [CLS] token, average-pooled initial visual embeddings and average-pooled final visual
embeddings, e.g. for document image classification tasks such as the
`),Oo=a("a"),nh=n("RVL-CDIP"),sh=n(" dataset."),ah=c(),No=a("p"),rh=n("This model is a PyTorch "),So=a("a"),ih=n("torch.nn.Module"),lh=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dh=c(),ae=a("div"),v(Ro.$$.fragment),ch=c(),Se=a("p"),ph=n("The "),ts=a("a"),uh=n("LayoutLMv2ForSequenceClassification"),mh=n(" forward method, overrides the "),or=a("code"),hh=n("__call__"),fh=n(" special method."),gh=c(),v(ct.$$.fragment),_h=c(),v(pt.$$.fragment),bi=c(),Re=a("h2"),ut=a("a"),nr=a("span"),v(Uo.$$.fragment),vh=c(),sr=a("span"),yh=n("LayoutLMv2ForTokenClassification"),Li=c(),te=a("div"),v(Bo.$$.fragment),bh=c(),oe=a("p"),Lh=n(`LayoutLMv2 Model with a token classification head on top (a linear layer on top of the text part of the hidden
states) e.g. for sequence labeling (information extraction) tasks such as
`),Wo=a("a"),wh=n("FUNSD"),kh=n(", "),Vo=a("a"),xh=n("SROIE"),Th=n(`,
`),Qo=a("a"),Mh=n("CORD"),$h=n(" and "),Go=a("a"),Eh=n("Kleister-NDA"),qh=n("."),zh=c(),Ho=a("p"),jh=n("This model is a PyTorch "),Ko=a("a"),Fh=n("torch.nn.Module"),Ph=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ch=c(),re=a("div"),v(Xo.$$.fragment),Ih=c(),Ue=a("p"),Ah=n("The "),os=a("a"),Dh=n("LayoutLMv2ForTokenClassification"),Oh=n(" forward method, overrides the "),ar=a("code"),Nh=n("__call__"),Sh=n(" special method."),Rh=c(),v(mt.$$.fragment),Uh=c(),v(ht.$$.fragment),wi=c(),Be=a("h2"),ft=a("a"),rr=a("span"),v(Yo.$$.fragment),Bh=c(),ir=a("span"),Wh=n("LayoutLMv2ForQuestionAnswering"),ki=c(),ne=a("div"),v(Zo.$$.fragment),Vh=c(),ce=a("p"),Qh=n(`LayoutLMv2 Model with a span classification head on top for extractive question-answering tasks such as
`),Jo=a("a"),Gh=n("DocVQA"),Hh=n(` (a linear layer on top of the text part of the hidden-states output to
compute `),lr=a("code"),Kh=n("span start logits"),Xh=n(" and "),dr=a("code"),Yh=n("span end logits"),Zh=n(")."),Jh=c(),en=a("p"),ef=n("This model is a PyTorch "),tn=a("a"),tf=n("torch.nn.Module"),of=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),nf=c(),A=a("div"),v(on.$$.fragment),sf=c(),We=a("p"),af=n("The "),ns=a("a"),rf=n("LayoutLMv2ForQuestionAnswering"),lf=n(" forward method, overrides the "),cr=a("code"),df=n("__call__"),cf=n(" special method."),pf=c(),v(gt.$$.fragment),uf=c(),pr=a("p"),mf=n("Example:"),hf=c(),ur=a("p"),ff=n(`In this example below, we give the LayoutLMv2 model an image (of texts) and ask it a question. It will give us
a prediction of what it thinks the answer is (the span of the answer within the texts parsed from the image).`),gf=c(),v(_t.$$.fragment),_f=c(),v(vt.$$.fragment),this.h()},l(t){const d=Bv('[data-svelte="svelte-1phssyn"]',document.head);h=r(d,"META",{name:!0,content:!0}),d.forEach(o),x=p(t),f=r(t,"H1",{class:!0});var nn=i(f);g=r(nn,"A",{id:!0,class:!0,href:!0});var mr=i(g);T=r(mr,"SPAN",{});var hr=i(T);y(m.$$.fragment,hr),hr.forEach(o),mr.forEach(o),_=p(nn),O=r(nn,"SPAN",{});var fr=i(O);ol=s(fr,"LayoutLMV2"),fr.forEach(o),nn.forEach(o),Lr=p(t),$e=r(t,"H2",{class:!0});var sn=i($e);Qe=r(sn,"A",{id:!0,class:!0,href:!0});var gr=i(Qe);bs=r(gr,"SPAN",{});var _r=i(bs);y(qt.$$.fragment,_r),_r.forEach(o),gr.forEach(o),nl=p(sn),Ls=r(sn,"SPAN",{});var vr=i(Ls);sl=s(vr,"Overview"),vr.forEach(o),sn.forEach(o),wr=p(t),ue=r(t,"P",{});var Ve=i(ue);al=s(Ve,"The LayoutLMV2 model was proposed in "),zt=r(Ve,"A",{href:!0,rel:!0});var yr=i(zt);rl=s(yr,"LayoutLMv2: Multi-modal Pre-training for Visually-Rich Document Understanding"),yr.forEach(o),il=s(Ve,` by Yang Xu, Yiheng Xu, Tengchao Lv, Lei Cui, Furu Wei, Guoxin Wang, Yijuan Lu,
Dinei Florencio, Cha Zhang, Wanxiang Che, Min Zhang, Lidong Zhou. LayoutLMV2 improves `),ln=r(Ve,"A",{href:!0});var br=i(ln);ll=s(br,"LayoutLM"),br.forEach(o),dl=s(Ve,` to obtain
state-of-the-art results across several document image understanding benchmarks:`),Ve.forEach(o),kr=p(t),me=r(t,"UL",{});var ss=i(me);X=r(ss,"LI",{});var Le=i(X);cl=s(Le,"information extraction from scanned documents: the "),jt=r(Le,"A",{href:!0,rel:!0});var wf=i(jt);pl=s(wf,"FUNSD"),wf.forEach(o),ul=s(Le,` dataset (a
collection of 199 annotated forms comprising more than 30,000 words), the `),Ft=r(Le,"A",{href:!0,rel:!0});var kf=i(Ft);ml=s(kf,"CORD"),kf.forEach(o),hl=s(Le,`
dataset (a collection of 800 receipts for training, 100 for validation and 100 for testing), the `),Pt=r(Le,"A",{href:!0,rel:!0});var xf=i(Pt);fl=s(xf,"SROIE"),xf.forEach(o),gl=s(Le,` dataset (a collection of 626 receipts for training and 347 receipts for testing)
and the `),Ct=r(Le,"A",{href:!0,rel:!0});var Tf=i(Ct);_l=s(Tf,"Kleister-NDA"),Tf.forEach(o),vl=s(Le,` dataset (a collection of non-disclosure
agreements from the EDGAR database, including 254 documents for training, 83 documents for validation, and 203
documents for testing).`),Le.forEach(o),yl=p(ss),It=r(ss,"LI",{});var Ti=i(It);bl=s(Ti,"document image classification: the "),At=r(Ti,"A",{href:!0,rel:!0});var Mf=i(At);Ll=s(Mf,"RVL-CDIP"),Mf.forEach(o),wl=s(Ti,` dataset (a collection of
400,000 images belonging to one of 16 classes).`),Ti.forEach(o),kl=p(ss),Dt=r(ss,"LI",{});var Mi=i(Dt);xl=s(Mi,"document visual question answering: the "),Ot=r(Mi,"A",{href:!0,rel:!0});var $f=i(Ot);Tl=s($f,"DocVQA"),$f.forEach(o),Ml=s(Mi,` dataset (a collection of 50,000
questions defined on 12,000+ document images).`),Mi.forEach(o),ss.forEach(o),xr=p(t),dn=r(t,"P",{});var Ef=i(dn);$l=s(Ef,"The abstract from the paper is the following:"),Ef.forEach(o),Tr=p(t),cn=r(t,"P",{});var qf=i(cn);ws=r(qf,"EM",{});var zf=i(ws);El=s(zf,`Pre-training of text and layout has proved effective in a variety of visually-rich document understanding tasks due to
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
this https URL.`),zf.forEach(o),qf.forEach(o),Mr=p(t),Ge=r(t,"P",{});var $i=i(Ge);ql=s($i,"LayoutLMv2 depends on "),ks=r($i,"CODE",{});var jf=i(ks);zl=s(jf,"detectron2"),jf.forEach(o),jl=s($i,". Run the following to install it:"),$i.forEach(o),$r=p(t),y(Nt.$$.fragment,t),Er=p(t),he=r(t,"P",{});var as=i(he);Fl=s(as,"If you wish to use the OCR feature, you should also install "),xs=r(as,"CODE",{});var Ff=i(xs);Pl=s(Ff,"torchvision"),Ff.forEach(o),Cl=s(as," and "),Ts=r(as,"CODE",{});var Pf=i(Ts);Il=s(Pf,"pytesseract"),Pf.forEach(o),Al=s(as,":"),as.forEach(o),qr=p(t),y(St.$$.fragment,t),zr=p(t),fe=r(t,"P",{});var rs=i(fe);Dl=s(rs,"(If you are developing for LayoutLMv2, note that passing the doctests and certain tests for LayoutLMv2 requires the installation of all three packages, in addition to the installation of "),Ms=r(rs,"CODE",{});var Cf=i(Ms);Ol=s(Cf,"datasets"),Cf.forEach(o),Nl=s(rs," and "),$s=r(rs,"CODE",{});var If=i($s);Sl=s(If,"torch"),If.forEach(o),Rl=s(rs,".)"),rs.forEach(o),jr=p(t),pn=r(t,"P",{});var Af=i(pn);Ul=s(Af,"Tips:"),Af.forEach(o),Fr=p(t),V=r(t,"UL",{});var we=i(V);Es=r(we,"LI",{});var Df=i(Es);Bl=s(Df,`The main difference between LayoutLMv1 and LayoutLMv2 is that the latter incorporates visual embeddings during
pre-training (while LayoutLMv1 only adds visual embeddings during fine-tuning).`),Df.forEach(o),Wl=p(we),Rt=r(we,"LI",{});var Ei=i(Rt);Vl=s(Ei,`LayoutLMv2 adds both a relative 1D attention bias as well as a spatial 2D attention bias to the attention scores in
the self-attention layers. Details can be found on page 5 of the `),Ut=r(Ei,"A",{href:!0,rel:!0});var Of=i(Ut);Ql=s(Of,"paper"),Of.forEach(o),Gl=s(Ei,"."),Ei.forEach(o),Hl=p(we),Bt=r(we,"LI",{});var qi=i(Bt);Kl=s(qi,"Demo notebooks on how to use the LayoutLMv2 model on RVL-CDIP, FUNSD, DocVQA, CORD can be found "),Wt=r(qi,"A",{href:!0,rel:!0});var Nf=i(Wt);Xl=s(Nf,"here"),Nf.forEach(o),Yl=s(qi,"."),qi.forEach(o),Zl=p(we),Ee=r(we,"LI",{});var is=i(Ee);Jl=s(is,"LayoutLMv2 uses Facebook AI\u2019s "),Vt=r(is,"A",{href:!0,rel:!0});var Sf=i(Vt);ed=s(Sf,"Detectron2"),Sf.forEach(o),td=s(is,` package for its visual
backbone. See `),Qt=r(is,"A",{href:!0,rel:!0});var Rf=i(Qt);od=s(Rf,"this link"),Rf.forEach(o),nd=s(is,` for installation
instructions.`),is.forEach(o),sd=p(we),M=r(we,"LI",{});var q=i(M);ad=s(q,"In addition to "),qs=r(q,"CODE",{});var Uf=i(qs);rd=s(Uf,"input_ids"),Uf.forEach(o),id=s(q,", "),un=r(q,"A",{href:!0});var Bf=i(un);ld=s(Bf,"forward()"),Bf.forEach(o),dd=s(q,` expects 2 additional inputs, namely
`),zs=r(q,"CODE",{});var Wf=i(zs);cd=s(Wf,"image"),Wf.forEach(o),pd=s(q," and "),js=r(q,"CODE",{});var Vf=i(js);ud=s(Vf,"bbox"),Vf.forEach(o),md=s(q,". The "),Fs=r(q,"CODE",{});var Qf=i(Fs);hd=s(Qf,"image"),Qf.forEach(o),fd=s(q,` input corresponds to the original document image in which the text
tokens occur. The model expects each document image to be of size 224x224. This means that if you have a batch of
document images, `),Ps=r(q,"CODE",{});var Gf=i(Ps);gd=s(Gf,"image"),Gf.forEach(o),_d=s(q,` should be a tensor of shape (batch_size, 3, 224, 224). This can be either a
`),Cs=r(q,"CODE",{});var Hf=i(Cs);vd=s(Hf,"torch.Tensor"),Hf.forEach(o),yd=s(q," or a "),Is=r(q,"CODE",{});var Kf=i(Is);bd=s(Kf,"Detectron2.structures.ImageList"),Kf.forEach(o),Ld=s(q,`. You don\u2019t need to normalize the channels, as this is
done by the model. Important to note is that the visual backbone expects BGR channels instead of RGB, as all models
in Detectron2 are pre-trained using the BGR format. The `),As=r(q,"CODE",{});var Xf=i(As);wd=s(Xf,"bbox"),Xf.forEach(o),kd=s(q,` input are the bounding boxes (i.e. 2D-positions)
of the input text tokens. This is identical to `),mn=r(q,"A",{href:!0});var Yf=i(mn);xd=s(Yf,"LayoutLMModel"),Yf.forEach(o),Td=s(q,`. These can be obtained using an
external OCR engine such as Google\u2019s `),Gt=r(q,"A",{href:!0,rel:!0});var Zf=i(Gt);Md=s(Zf,"Tesseract"),Zf.forEach(o),$d=s(q," (there\u2019s a "),Ht=r(q,"A",{href:!0,rel:!0});var Jf=i(Ht);Ed=s(Jf,`Python
wrapper`),Jf.forEach(o),qd=s(q,` available). Each bounding box should be in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1)
represents the position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on
a 0-1000 scale. To normalize, you can use the following function:`),q.forEach(o),we.forEach(o),Pr=p(t),y(Kt.$$.fragment,t),Cr=p(t),ge=r(t,"P",{});var ls=i(ge);zd=s(ls,"Here, "),Ds=r(ls,"CODE",{});var eg=i(Ds);jd=s(eg,"width"),eg.forEach(o),Fd=s(ls," and "),Os=r(ls,"CODE",{});var tg=i(Os);Pd=s(tg,"height"),tg.forEach(o),Cd=s(ls,` correspond to the width and height of the original document in which the token
occurs (before resizing the image). Those can be obtained using the Python Image Library (PIL) library for example, as
follows:`),ls.forEach(o),Ir=p(t),y(Xt.$$.fragment,t),Ar=p(t),He=r(t,"P",{});var zi=i(He);Id=s(zi,"However, this model includes a brand new "),hn=r(zi,"A",{href:!0});var og=i(hn);Ad=s(og,"LayoutLMv2Processor"),og.forEach(o),Dd=s(zi,` which can be used to directly
prepare data for the model (including applying OCR under the hood). More information can be found in the \u201CUsage\u201D
section below.`),zi.forEach(o),Dr=p(t),_e=r(t,"UL",{});var ds=i(_e);I=r(ds,"LI",{});var U=i(I);Od=s(U,"Internally, "),fn=r(U,"A",{href:!0});var ng=i(fn);Nd=s(ng,"LayoutLMv2Model"),ng.forEach(o),Sd=s(U," will send the "),Ns=r(U,"CODE",{});var sg=i(Ns);Rd=s(sg,"image"),sg.forEach(o),Ud=s(U,` input through its visual backbone to
obtain a lower-resolution feature map, whose shape is equal to the `),Ss=r(U,"CODE",{});var ag=i(Ss);Bd=s(ag,"image_feature_pool_shape"),ag.forEach(o),Wd=s(U,` attribute of
`),gn=r(U,"A",{href:!0});var rg=i(gn);Vd=s(rg,"LayoutLMv2Config"),rg.forEach(o),Qd=s(U,`. This feature map is then flattened to obtain a sequence of image tokens. As
the size of the feature map is 7x7 by default, one obtains 49 image tokens. These are then concatenated with the text
tokens, and send through the Transformer encoder. This means that the last hidden states of the model will have a
length of 512 + 49 = 561, if you pad the text tokens up to the max length. More generally, the last hidden states
will have a shape of `),Rs=r(U,"CODE",{});var ig=i(Rs);Gd=s(ig,"seq_length"),ig.forEach(o),Hd=s(U," + "),Us=r(U,"CODE",{});var lg=i(Us);Kd=s(lg,"image_feature_pool_shape[0]"),lg.forEach(o),Xd=s(U,` *
`),Bs=r(U,"CODE",{});var dg=i(Bs);Yd=s(dg,"config.image_feature_pool_shape[1]"),dg.forEach(o),Zd=s(U,"."),U.forEach(o),Jd=p(ds),Yt=r(ds,"LI",{});var ji=i(Yt);ec=s(ji,"When calling "),_n=r(ji,"A",{href:!0});var cg=i(_n);tc=s(cg,"from_pretrained()"),cg.forEach(o),oc=s(ji,`, a warning will be printed with a long list of
parameter names that are not initialized. This is not a problem, as these parameters are batch normalization
statistics, which are going to have values when fine-tuning on a custom dataset.`),ji.forEach(o),nc=p(ds),Zt=r(ds,"LI",{});var Fi=i(Zt);sc=s(Fi,"If you want to train the model in a distributed environment, make sure to call "),Ws=r(Fi,"CODE",{});var pg=i(Ws);ac=s(pg,"synchronize_batch_norm"),pg.forEach(o),rc=s(Fi,` on the
model in order to properly synchronize the batch normalization layers of the visual backbone.`),Fi.forEach(o),ds.forEach(o),Or=p(t),Ke=r(t,"P",{});var Pi=i(Ke);ic=s(Pi,`In addition, there\u2019s LayoutXLM, which is a multilingual version of LayoutLMv2. More information can be found on
`),vn=r(Pi,"A",{href:!0});var ug=i(vn);lc=s(ug,"LayoutXLM\u2019s documentation page"),ug.forEach(o),dc=s(Pi,"."),Pi.forEach(o),Nr=p(t),qe=r(t,"H2",{class:!0});var Ci=i(qe);Xe=r(Ci,"A",{id:!0,class:!0,href:!0});var mg=i(Xe);Vs=r(mg,"SPAN",{});var hg=i(Vs);y(Jt.$$.fragment,hg),hg.forEach(o),mg.forEach(o),cc=p(Ci),Qs=r(Ci,"SPAN",{});var fg=i(Qs);pc=s(fg,"Usage: LayoutLMv2Processor"),fg.forEach(o),Ci.forEach(o),Sr=p(t),Q=r(t,"P",{});var ke=i(Q);uc=s(ke,"The easiest way to prepare data for the model is to use "),yn=r(ke,"A",{href:!0});var gg=i(yn);mc=s(gg,"LayoutLMv2Processor"),gg.forEach(o),hc=s(ke,`, which internally
combines a feature extractor (`),bn=r(ke,"A",{href:!0});var _g=i(bn);fc=s(_g,"LayoutLMv2FeatureExtractor"),_g.forEach(o),gc=s(ke,`) and a tokenizer
(`),Ln=r(ke,"A",{href:!0});var vg=i(Ln);_c=s(vg,"LayoutLMv2Tokenizer"),vg.forEach(o),vc=s(ke," or "),wn=r(ke,"A",{href:!0});var yg=i(wn);yc=s(yg,"LayoutLMv2TokenizerFast"),yg.forEach(o),bc=s(ke,`). The feature extractor
handles the image modality, while the tokenizer handles the text modality. A processor combines both, which is ideal
for a multi-modal model like LayoutLMv2. Note that you can still use both separately, if you only want to handle one
modality.`),ke.forEach(o),Rr=p(t),y(eo.$$.fragment,t),Ur=p(t),E=r(t,"P",{});var P=i(E);Lc=s(P,"In short, one can provide a document image (and possibly additional data) to "),kn=r(P,"A",{href:!0});var bg=i(kn);wc=s(bg,"LayoutLMv2Processor"),bg.forEach(o),kc=s(P,`,
and it will create the inputs expected by the model. Internally, the processor first uses
`),xn=r(P,"A",{href:!0});var Lg=i(xn);xc=s(Lg,"LayoutLMv2FeatureExtractor"),Lg.forEach(o),Tc=s(P,` to apply OCR on the image to get a list of words and normalized
bounding boxes, as well to resize the image to a given size in order to get the `),Gs=r(P,"CODE",{});var wg=i(Gs);Mc=s(wg,"image"),wg.forEach(o),$c=s(P,` input. The words and
normalized bounding boxes are then provided to `),Tn=r(P,"A",{href:!0});var kg=i(Tn);Ec=s(kg,"LayoutLMv2Tokenizer"),kg.forEach(o),qc=s(P,` or
`),Mn=r(P,"A",{href:!0});var xg=i(Mn);zc=s(xg,"LayoutLMv2TokenizerFast"),xg.forEach(o),jc=s(P,", which converts them to token-level "),Hs=r(P,"CODE",{});var Tg=i(Hs);Fc=s(Tg,"input_ids"),Tg.forEach(o),Pc=s(P,`,
`),Ks=r(P,"CODE",{});var Mg=i(Ks);Cc=s(Mg,"attention_mask"),Mg.forEach(o),Ic=s(P,", "),Xs=r(P,"CODE",{});var $g=i(Xs);Ac=s($g,"token_type_ids"),$g.forEach(o),Dc=s(P,", "),Ys=r(P,"CODE",{});var Eg=i(Ys);Oc=s(Eg,"bbox"),Eg.forEach(o),Nc=s(P,`. Optionally, one can provide word labels to the processor,
which are turned into token-level `),Zs=r(P,"CODE",{});var qg=i(Zs);Sc=s(qg,"labels"),qg.forEach(o),Rc=s(P,"."),P.forEach(o),Br=p(t),B=r(t,"P",{});var pe=i(B);$n=r(pe,"A",{href:!0});var zg=i($n);Uc=s(zg,"LayoutLMv2Processor"),zg.forEach(o),Bc=s(pe," uses "),to=r(pe,"A",{href:!0,rel:!0});var jg=i(to);Wc=s(jg,"PyTesseract"),jg.forEach(o),Vc=s(pe,`, a Python
wrapper around Google\u2019s Tesseract OCR engine, under the hood. Note that you can still use your own OCR engine of
choice, and provide the words and normalized boxes yourself. This requires initializing
`),En=r(pe,"A",{href:!0});var Fg=i(En);Qc=s(Fg,"LayoutLMv2FeatureExtractor"),Fg.forEach(o),Gc=s(pe," with "),Js=r(pe,"CODE",{});var Pg=i(Js);Hc=s(Pg,"apply_ocr"),Pg.forEach(o),Kc=s(pe," set to "),ea=r(pe,"CODE",{});var Cg=i(ea);Xc=s(Cg,"False"),Cg.forEach(o),Yc=s(pe,"."),pe.forEach(o),Wr=p(t),qn=r(t,"P",{});var Ig=i(qn);Zc=s(Ig,`In total, there are 5 use cases that are supported by the processor. Below, we list them all. Note that each of these
use cases work for both batched and non-batched inputs (we illustrate them for non-batched inputs).`),Ig.forEach(o),Vr=p(t),zn=r(t,"P",{});var Ag=i(zn);ta=r(Ag,"STRONG",{});var Dg=i(ta);Jc=s(Dg,`Use case 1: document image classification (training, inference) + token classification (inference), apply_ocr =
True`),Dg.forEach(o),Ag.forEach(o),Qr=p(t),jn=r(t,"P",{});var Og=i(jn);ep=s(Og,`This is the simplest case, in which the processor (actually the feature extractor) will perform OCR on the image to get
the words and normalized bounding boxes.`),Og.forEach(o),Gr=p(t),y(oo.$$.fragment,t),Hr=p(t),Fn=r(t,"P",{});var Ng=i(Fn);oa=r(Ng,"STRONG",{});var Sg=i(oa);tp=s(Sg,"Use case 2: document image classification (training, inference) + token classification (inference), apply_ocr=False"),Sg.forEach(o),Ng.forEach(o),Kr=p(t),ve=r(t,"P",{});var cs=i(ve);op=s(cs,"In case one wants to do OCR themselves, one can initialize the feature extractor with "),na=r(cs,"CODE",{});var Rg=i(na);np=s(Rg,"apply_ocr"),Rg.forEach(o),sp=s(cs,` set to
`),sa=r(cs,"CODE",{});var Ug=i(sa);ap=s(Ug,"False"),Ug.forEach(o),rp=s(cs,`. In that case, one should provide the words and corresponding (normalized) bounding boxes themselves to
the processor.`),cs.forEach(o),Xr=p(t),y(no.$$.fragment,t),Yr=p(t),Pn=r(t,"P",{});var Bg=i(Pn);aa=r(Bg,"STRONG",{});var Wg=i(aa);ip=s(Wg,"Use case 3: token classification (training), apply_ocr=False"),Wg.forEach(o),Bg.forEach(o),Zr=p(t),G=r(t,"P",{});var xe=i(G);lp=s(xe,`For token classification tasks (such as FUNSD, CORD, SROIE, Kleister-NDA), one can also provide the corresponding word
labels in order to train a model. The processor will then convert these into token-level `),ra=r(xe,"CODE",{});var Vg=i(ra);dp=s(Vg,"labels"),Vg.forEach(o),cp=s(xe,`. By default, it
will only label the first wordpiece of a word, and label the remaining wordpieces with -100, which is the
`),ia=r(xe,"CODE",{});var Qg=i(ia);pp=s(Qg,"ignore_index"),Qg.forEach(o),up=s(xe,` of PyTorch\u2019s CrossEntropyLoss. In case you want all wordpieces of a word to be labeled, you can
initialize the tokenizer with `),la=r(xe,"CODE",{});var Gg=i(la);mp=s(Gg,"only_label_first_subword"),Gg.forEach(o),hp=s(xe," set to "),da=r(xe,"CODE",{});var Hg=i(da);fp=s(Hg,"False"),Hg.forEach(o),gp=s(xe,"."),xe.forEach(o),Jr=p(t),y(so.$$.fragment,t),ei=p(t),Cn=r(t,"P",{});var Kg=i(Cn);ca=r(Kg,"STRONG",{});var Xg=i(ca);_p=s(Xg,"Use case 4: visual question answering (inference), apply_ocr=True"),Xg.forEach(o),Kg.forEach(o),ti=p(t),In=r(t,"P",{});var Yg=i(In);vp=s(Yg,`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. By default, the
processor will apply OCR on the image, and create [CLS] question tokens [SEP] word tokens [SEP].`),Yg.forEach(o),oi=p(t),y(ao.$$.fragment,t),ni=p(t),An=r(t,"P",{});var Zg=i(An);pa=r(Zg,"STRONG",{});var Jg=i(pa);yp=s(Jg,"Use case 5: visual question answering (inference), apply_ocr=False"),Jg.forEach(o),Zg.forEach(o),si=p(t),Dn=r(t,"P",{});var e_=i(Dn);bp=s(e_,`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. If you want to
perform OCR yourself, you can provide your own words and (normalized) bounding boxes to the processor.`),e_.forEach(o),ai=p(t),y(ro.$$.fragment,t),ri=p(t),ze=r(t,"H2",{class:!0});var Ii=i(ze);Ye=r(Ii,"A",{id:!0,class:!0,href:!0});var t_=i(Ye);ua=r(t_,"SPAN",{});var o_=i(ua);y(io.$$.fragment,o_),o_.forEach(o),t_.forEach(o),Lp=p(Ii),ma=r(Ii,"SPAN",{});var n_=i(ma);wp=s(n_,"LayoutLMv2Config"),n_.forEach(o),Ii.forEach(o),ii=p(t),Y=r(t,"DIV",{class:!0});var yt=i(Y);y(lo.$$.fragment,yt),kp=p(yt),je=r(yt,"P",{});var ps=i(je);xp=s(ps,"This is the configuration class to store the configuration of a "),On=r(ps,"A",{href:!0});var s_=i(On);Tp=s(s_,"LayoutLMv2Model"),s_.forEach(o),Mp=s(ps,`. It is used to instantiate an
LayoutLMv2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv2
`),co=r(ps,"A",{href:!0,rel:!0});var a_=i(co);$p=s(a_,"microsoft/layoutlmv2-base-uncased"),a_.forEach(o),Ep=s(ps," architecture."),ps.forEach(o),qp=p(yt),Fe=r(yt,"P",{});var us=i(Fe);zp=s(us,"Configuration objects inherit from "),Nn=r(us,"A",{href:!0});var r_=i(Nn);jp=s(r_,"PretrainedConfig"),r_.forEach(o),Fp=s(us,` and can be used to control the model outputs. Read the
documentation from `),Sn=r(us,"A",{href:!0});var i_=i(Sn);Pp=s(i_,"PretrainedConfig"),i_.forEach(o),Cp=s(us," for more information."),us.forEach(o),Ip=p(yt),y(Ze.$$.fragment,yt),yt.forEach(o),li=p(t),Pe=r(t,"H2",{class:!0});var Ai=i(Pe);Je=r(Ai,"A",{id:!0,class:!0,href:!0});var l_=i(Je);ha=r(l_,"SPAN",{});var d_=i(ha);y(po.$$.fragment,d_),d_.forEach(o),l_.forEach(o),Ap=p(Ai),fa=r(Ai,"SPAN",{});var c_=i(fa);Dp=s(c_,"LayoutLMv2FeatureExtractor"),c_.forEach(o),Ai.forEach(o),di=p(t),Z=r(t,"DIV",{class:!0});var bt=i(Z);y(uo.$$.fragment,bt),Op=p(bt),ga=r(bt,"P",{});var p_=i(ga);Np=s(p_,`Constructs a LayoutLMv2 feature extractor. This can be used to resize document images to the same size, as well as
to apply OCR on them in order to get a list of words and normalized bounding boxes.`),p_.forEach(o),Sp=p(bt),mo=r(bt,"P",{});var Di=i(mo);Rp=s(Di,"This feature extractor inherits from "),_a=r(Di,"CODE",{});var u_=i(_a);Up=s(u_,"PreTrainedFeatureExtractor()"),u_.forEach(o),Bp=s(Di,` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),Di.forEach(o),Wp=p(bt),ye=r(bt,"DIV",{class:!0});var ms=i(ye);y(ho.$$.fragment,ms),Vp=p(ms),va=r(ms,"P",{});var m_=i(va);Qp=s(m_,"Main method to prepare for the model one or several image(s)."),m_.forEach(o),Gp=p(ms),y(et.$$.fragment,ms),ms.forEach(o),bt.forEach(o),ci=p(t),Ce=r(t,"H2",{class:!0});var Oi=i(Ce);tt=r(Oi,"A",{id:!0,class:!0,href:!0});var h_=i(tt);ya=r(h_,"SPAN",{});var f_=i(ya);y(fo.$$.fragment,f_),f_.forEach(o),h_.forEach(o),Hp=p(Oi),ba=r(Oi,"SPAN",{});var g_=i(ba);Kp=s(g_,"LayoutLMv2Tokenizer"),g_.forEach(o),Oi.forEach(o),pi=p(t),N=r(t,"DIV",{class:!0});var ie=i(N);y(go.$$.fragment,ie),Xp=p(ie),S=r(ie,"P",{});var H=i(S);Yp=s(H,"Construct a LayoutLMv2 tokenizer. Based on WordPiece. "),Rn=r(H,"A",{href:!0});var __=i(Rn);Zp=s(__,"LayoutLMv2Tokenizer"),__.forEach(o),Jp=s(H,` can be used to turn words, word-level
bounding boxes and optional word labels to token-level `),La=r(H,"CODE",{});var v_=i(La);eu=s(v_,"input_ids"),v_.forEach(o),tu=s(H,", "),wa=r(H,"CODE",{});var y_=i(wa);ou=s(y_,"attention_mask"),y_.forEach(o),nu=s(H,", "),ka=r(H,"CODE",{});var b_=i(ka);su=s(b_,"token_type_ids"),b_.forEach(o),au=s(H,", "),xa=r(H,"CODE",{});var L_=i(xa);ru=s(L_,"bbox"),L_.forEach(o),iu=s(H,`, and
optional `),Ta=r(H,"CODE",{});var w_=i(Ta);lu=s(w_,"labels"),w_.forEach(o),du=s(H," (for token classification)."),H.forEach(o),cu=p(ie),_o=r(ie,"P",{});var Ni=i(_o);pu=s(Ni,"This tokenizer inherits from "),Un=r(Ni,"A",{href:!0});var k_=i(Un);uu=s(k_,"PreTrainedTokenizer"),k_.forEach(o),mu=s(Ni,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ni.forEach(o),hu=p(ie),Bn=r(ie,"P",{});var vf=i(Bn);Wn=r(vf,"A",{href:!0});var x_=i(Wn);fu=s(x_,"LayoutLMv2Tokenizer"),x_.forEach(o),gu=s(vf,` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),vf.forEach(o),_u=p(ie),ot=r(ie,"DIV",{class:!0});var Si=i(ot);y(vo.$$.fragment,Si),vu=p(Si),Ma=r(Si,"P",{});var T_=i(Ma);yu=s(T_,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),T_.forEach(o),Si.forEach(o),bu=p(ie),Vn=r(ie,"DIV",{class:!0});var M_=i(Vn);y(yo.$$.fragment,M_),M_.forEach(o),ie.forEach(o),ui=p(t),Ie=r(t,"H2",{class:!0});var Ri=i(Ie);nt=r(Ri,"A",{id:!0,class:!0,href:!0});var $_=i(nt);$a=r($_,"SPAN",{});var E_=i($a);y(bo.$$.fragment,E_),E_.forEach(o),$_.forEach(o),Lu=p(Ri),Ea=r(Ri,"SPAN",{});var q_=i(Ea);wu=s(q_,"LayoutLMv2TokenizerFast"),q_.forEach(o),Ri.forEach(o),mi=p(t),J=r(t,"DIV",{class:!0});var Lt=i(J);y(Lo.$$.fragment,Lt),ku=p(Lt),wo=r(Lt,"P",{});var Ui=i(wo);xu=s(Ui,"Construct a \u201Cfast\u201D LayoutLMv2 tokenizer (backed by HuggingFace\u2019s "),qa=r(Ui,"EM",{});var z_=i(qa);Tu=s(z_,"tokenizers"),z_.forEach(o),Mu=s(Ui," library). Based on WordPiece."),Ui.forEach(o),$u=p(Lt),ko=r(Lt,"P",{});var Bi=i(ko);Eu=s(Bi,"This tokenizer inherits from "),Qn=r(Bi,"A",{href:!0});var j_=i(Qn);qu=s(j_,"PreTrainedTokenizerFast"),j_.forEach(o),zu=s(Bi,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Bi.forEach(o),ju=p(Lt),st=r(Lt,"DIV",{class:!0});var Wi=i(st);y(xo.$$.fragment,Wi),Fu=p(Wi),za=r(Wi,"P",{});var F_=i(za);Pu=s(F_,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),F_.forEach(o),Wi.forEach(o),Lt.forEach(o),hi=p(t),Ae=r(t,"H2",{class:!0});var Vi=i(Ae);at=r(Vi,"A",{id:!0,class:!0,href:!0});var P_=i(at);ja=r(P_,"SPAN",{});var C_=i(ja);y(To.$$.fragment,C_),C_.forEach(o),P_.forEach(o),Cu=p(Vi),Fa=r(Vi,"SPAN",{});var I_=i(Fa);Iu=s(I_,"LayoutLMv2Processor"),I_.forEach(o),Vi.forEach(o),fi=p(t),W=r(t,"DIV",{class:!0});var Te=i(W);y(Mo.$$.fragment,Te),Au=p(Te),Pa=r(Te,"P",{});var A_=i(Pa);Du=s(A_,`Constructs a LayoutLMv2 processor which combines a LayoutLMv2 feature extractor and a LayoutLMv2 tokenizer into a
single processor.`),A_.forEach(o),Ou=p(Te),Gn=r(Te,"P",{});var yf=i(Gn);Hn=r(yf,"A",{href:!0});var D_=i(Hn);Nu=s(D_,"LayoutLMv2Processor"),D_.forEach(o),Su=s(yf," offers all the functionalities you need to prepare data for the model."),yf.forEach(o),Ru=p(Te),F=r(Te,"P",{});var C=i(F);Uu=s(C,"It first uses "),Kn=r(C,"A",{href:!0});var O_=i(Kn);Bu=s(O_,"LayoutLMv2FeatureExtractor"),O_.forEach(o),Wu=s(C,` to resize document images to a fixed size, and optionally applies OCR
to get words and normalized bounding boxes. These are then provided to `),Xn=r(C,"A",{href:!0});var N_=i(Xn);Vu=s(N_,"LayoutLMv2Tokenizer"),N_.forEach(o),Qu=s(C,` or
`),Yn=r(C,"A",{href:!0});var S_=i(Yn);Gu=s(S_,"LayoutLMv2TokenizerFast"),S_.forEach(o),Hu=s(C,", which turns the words and bounding boxes into token-level "),Ca=r(C,"CODE",{});var R_=i(Ca);Ku=s(R_,"input_ids"),R_.forEach(o),Xu=s(C,`,
`),Ia=r(C,"CODE",{});var U_=i(Ia);Yu=s(U_,"attention_mask"),U_.forEach(o),Zu=s(C,", "),Aa=r(C,"CODE",{});var B_=i(Aa);Ju=s(B_,"token_type_ids"),B_.forEach(o),em=s(C,", "),Da=r(C,"CODE",{});var W_=i(Da);tm=s(W_,"bbox"),W_.forEach(o),om=s(C,". Optionally, one can provide integer "),Oa=r(C,"CODE",{});var V_=i(Oa);nm=s(V_,"word_labels"),V_.forEach(o),sm=s(C,`, which are turned
into token-level `),Na=r(C,"CODE",{});var Q_=i(Na);am=s(Q_,"labels"),Q_.forEach(o),rm=s(C," for token classification tasks (such as FUNSD, CORD)."),C.forEach(o),im=p(Te),be=r(Te,"DIV",{class:!0});var hs=i(be);y($o.$$.fragment,hs),lm=p(hs),$=r(hs,"P",{});var z=i($);dm=s(z,"This method first forwards the "),Sa=r(z,"CODE",{});var G_=i(Sa);cm=s(G_,"images"),G_.forEach(o),pm=s(z," argument to "),Eo=r(z,"A",{href:!0});var bf=i(Eo);Ra=r(bf,"STRONG",{});var H_=i(Ra);um=s(H_,"call"),H_.forEach(o),mm=s(bf,"()"),bf.forEach(o),hm=s(z,`. In case
`),Zn=r(z,"A",{href:!0});var K_=i(Zn);fm=s(K_,"LayoutLMv2FeatureExtractor"),K_.forEach(o),gm=s(z," was initialized with "),Ua=r(z,"CODE",{});var X_=i(Ua);_m=s(X_,"apply_ocr"),X_.forEach(o),vm=s(z," set to "),Ba=r(z,"CODE",{});var Y_=i(Ba);ym=s(Y_,"True"),Y_.forEach(o),bm=s(z,`, it passes the obtained words and
bounding boxes along with the additional arguments to `),qo=r(z,"A",{href:!0});var Lf=i(qo);Wa=r(Lf,"STRONG",{});var Z_=i(Wa);Lm=s(Z_,"call"),Z_.forEach(o),wm=s(Lf,"()"),Lf.forEach(o),km=s(z,` and returns the output,
together with resized `),Va=r(z,"CODE",{});var J_=i(Va);xm=s(J_,"images"),J_.forEach(o),Tm=s(z,". In case "),Jn=r(z,"A",{href:!0});var ev=i(Jn);Mm=s(ev,"LayoutLMv2FeatureExtractor"),ev.forEach(o),$m=s(z," was initialized with "),Qa=r(z,"CODE",{});var tv=i(Qa);Em=s(tv,"apply_ocr"),tv.forEach(o),qm=s(z,` set to
`),Ga=r(z,"CODE",{});var ov=i(Ga);zm=s(ov,"False"),ov.forEach(o),jm=s(z,", it passes the words ("),Ha=r(z,"CODE",{});var nv=i(Ha);Fm=s(nv,"text"),nv.forEach(o),Pm=s(z,"/"),Ka=r(z,"CODE",{});var sv=i(Ka);Cm=s(sv,"text_pair`) and `boxes` specified by the user along with the additional arguments to [__call__()](/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__) and returns the output, together with resized `images"),sv.forEach(o),Im=s(z,"."),z.forEach(o),Am=p(hs),Xa=r(hs,"P",{});var av=i(Xa);Dm=s(av,"Please refer to the docstring of the above two methods for more information."),av.forEach(o),hs.forEach(o),Te.forEach(o),gi=p(t),De=r(t,"H2",{class:!0});var Qi=i(De);rt=r(Qi,"A",{id:!0,class:!0,href:!0});var rv=i(rt);Ya=r(rv,"SPAN",{});var iv=i(Ya);y(zo.$$.fragment,iv),iv.forEach(o),rv.forEach(o),Om=p(Qi),Za=r(Qi,"SPAN",{});var lv=i(Za);Nm=s(lv,"LayoutLMv2Model"),lv.forEach(o),Qi.forEach(o),_i=p(t),de=r(t,"DIV",{class:!0});var fs=i(de);y(jo.$$.fragment,fs),Sm=p(fs),Fo=r(fs,"P",{});var Gi=i(Fo);Rm=s(Gi,`The bare LayoutLMv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Po=r(Gi,"A",{href:!0,rel:!0});var dv=i(Po);Um=s(dv,"torch.nn.Module"),dv.forEach(o),Bm=s(Gi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gi.forEach(o),Wm=p(fs),se=r(fs,"DIV",{class:!0});var wt=i(se);y(Co.$$.fragment,wt),Vm=p(wt),Oe=r(wt,"P",{});var gs=i(Oe);Qm=s(gs,"The "),es=r(gs,"A",{href:!0});var cv=i(es);Gm=s(cv,"LayoutLMv2Model"),cv.forEach(o),Hm=s(gs," forward method, overrides the "),Ja=r(gs,"CODE",{});var pv=i(Ja);Km=s(pv,"__call__"),pv.forEach(o),Xm=s(gs," special method."),gs.forEach(o),Ym=p(wt),y(it.$$.fragment,wt),Zm=p(wt),y(lt.$$.fragment,wt),wt.forEach(o),fs.forEach(o),vi=p(t),Ne=r(t,"H2",{class:!0});var Hi=i(Ne);dt=r(Hi,"A",{id:!0,class:!0,href:!0});var uv=i(dt);er=r(uv,"SPAN",{});var mv=i(er);y(Io.$$.fragment,mv),mv.forEach(o),uv.forEach(o),Jm=p(Hi),tr=r(Hi,"SPAN",{});var hv=i(tr);eh=s(hv,"LayoutLMv2ForSequenceClassification"),hv.forEach(o),Hi.forEach(o),yi=p(t),ee=r(t,"DIV",{class:!0});var kt=i(ee);y(Ao.$$.fragment,kt),th=p(kt),Do=r(kt,"P",{});var Ki=i(Do);oh=s(Ki,`LayoutLMv2 Model with a sequence classification head on top (a linear layer on top of the concatenation of the
final hidden state of the [CLS] token, average-pooled initial visual embeddings and average-pooled final visual
embeddings, e.g. for document image classification tasks such as the
`),Oo=r(Ki,"A",{href:!0,rel:!0});var fv=i(Oo);nh=s(fv,"RVL-CDIP"),fv.forEach(o),sh=s(Ki," dataset."),Ki.forEach(o),ah=p(kt),No=r(kt,"P",{});var Xi=i(No);rh=s(Xi,"This model is a PyTorch "),So=r(Xi,"A",{href:!0,rel:!0});var gv=i(So);ih=s(gv,"torch.nn.Module"),gv.forEach(o),lh=s(Xi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xi.forEach(o),dh=p(kt),ae=r(kt,"DIV",{class:!0});var xt=i(ae);y(Ro.$$.fragment,xt),ch=p(xt),Se=r(xt,"P",{});var _s=i(Se);ph=s(_s,"The "),ts=r(_s,"A",{href:!0});var _v=i(ts);uh=s(_v,"LayoutLMv2ForSequenceClassification"),_v.forEach(o),mh=s(_s," forward method, overrides the "),or=r(_s,"CODE",{});var vv=i(or);hh=s(vv,"__call__"),vv.forEach(o),fh=s(_s," special method."),_s.forEach(o),gh=p(xt),y(ct.$$.fragment,xt),_h=p(xt),y(pt.$$.fragment,xt),xt.forEach(o),kt.forEach(o),bi=p(t),Re=r(t,"H2",{class:!0});var Yi=i(Re);ut=r(Yi,"A",{id:!0,class:!0,href:!0});var yv=i(ut);nr=r(yv,"SPAN",{});var bv=i(nr);y(Uo.$$.fragment,bv),bv.forEach(o),yv.forEach(o),vh=p(Yi),sr=r(Yi,"SPAN",{});var Lv=i(sr);yh=s(Lv,"LayoutLMv2ForTokenClassification"),Lv.forEach(o),Yi.forEach(o),Li=p(t),te=r(t,"DIV",{class:!0});var Tt=i(te);y(Bo.$$.fragment,Tt),bh=p(Tt),oe=r(Tt,"P",{});var Me=i(oe);Lh=s(Me,`LayoutLMv2 Model with a token classification head on top (a linear layer on top of the text part of the hidden
states) e.g. for sequence labeling (information extraction) tasks such as
`),Wo=r(Me,"A",{href:!0,rel:!0});var wv=i(Wo);wh=s(wv,"FUNSD"),wv.forEach(o),kh=s(Me,", "),Vo=r(Me,"A",{href:!0,rel:!0});var kv=i(Vo);xh=s(kv,"SROIE"),kv.forEach(o),Th=s(Me,`,
`),Qo=r(Me,"A",{href:!0,rel:!0});var xv=i(Qo);Mh=s(xv,"CORD"),xv.forEach(o),$h=s(Me," and "),Go=r(Me,"A",{href:!0,rel:!0});var Tv=i(Go);Eh=s(Tv,"Kleister-NDA"),Tv.forEach(o),qh=s(Me,"."),Me.forEach(o),zh=p(Tt),Ho=r(Tt,"P",{});var Zi=i(Ho);jh=s(Zi,"This model is a PyTorch "),Ko=r(Zi,"A",{href:!0,rel:!0});var Mv=i(Ko);Fh=s(Mv,"torch.nn.Module"),Mv.forEach(o),Ph=s(Zi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zi.forEach(o),Ch=p(Tt),re=r(Tt,"DIV",{class:!0});var Mt=i(re);y(Xo.$$.fragment,Mt),Ih=p(Mt),Ue=r(Mt,"P",{});var vs=i(Ue);Ah=s(vs,"The "),os=r(vs,"A",{href:!0});var $v=i(os);Dh=s($v,"LayoutLMv2ForTokenClassification"),$v.forEach(o),Oh=s(vs," forward method, overrides the "),ar=r(vs,"CODE",{});var Ev=i(ar);Nh=s(Ev,"__call__"),Ev.forEach(o),Sh=s(vs," special method."),vs.forEach(o),Rh=p(Mt),y(mt.$$.fragment,Mt),Uh=p(Mt),y(ht.$$.fragment,Mt),Mt.forEach(o),Tt.forEach(o),wi=p(t),Be=r(t,"H2",{class:!0});var Ji=i(Be);ft=r(Ji,"A",{id:!0,class:!0,href:!0});var qv=i(ft);rr=r(qv,"SPAN",{});var zv=i(rr);y(Yo.$$.fragment,zv),zv.forEach(o),qv.forEach(o),Bh=p(Ji),ir=r(Ji,"SPAN",{});var jv=i(ir);Wh=s(jv,"LayoutLMv2ForQuestionAnswering"),jv.forEach(o),Ji.forEach(o),ki=p(t),ne=r(t,"DIV",{class:!0});var $t=i(ne);y(Zo.$$.fragment,$t),Vh=p($t),ce=r($t,"P",{});var Et=i(ce);Qh=s(Et,`LayoutLMv2 Model with a span classification head on top for extractive question-answering tasks such as
`),Jo=r(Et,"A",{href:!0,rel:!0});var Fv=i(Jo);Gh=s(Fv,"DocVQA"),Fv.forEach(o),Hh=s(Et,` (a linear layer on top of the text part of the hidden-states output to
compute `),lr=r(Et,"CODE",{});var Pv=i(lr);Kh=s(Pv,"span start logits"),Pv.forEach(o),Xh=s(Et," and "),dr=r(Et,"CODE",{});var Cv=i(dr);Yh=s(Cv,"span end logits"),Cv.forEach(o),Zh=s(Et,")."),Et.forEach(o),Jh=p($t),en=r($t,"P",{});var el=i(en);ef=s(el,"This model is a PyTorch "),tn=r(el,"A",{href:!0,rel:!0});var Iv=i(tn);tf=s(Iv,"torch.nn.Module"),Iv.forEach(o),of=s(el,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),el.forEach(o),nf=p($t),A=r($t,"DIV",{class:!0});var K=i(A);y(on.$$.fragment,K),sf=p(K),We=r(K,"P",{});var ys=i(We);af=s(ys,"The "),ns=r(ys,"A",{href:!0});var Av=i(ns);rf=s(Av,"LayoutLMv2ForQuestionAnswering"),Av.forEach(o),lf=s(ys," forward method, overrides the "),cr=r(ys,"CODE",{});var Dv=i(cr);df=s(Dv,"__call__"),Dv.forEach(o),cf=s(ys," special method."),ys.forEach(o),pf=p(K),y(gt.$$.fragment,K),uf=p(K),pr=r(K,"P",{});var Ov=i(pr);mf=s(Ov,"Example:"),Ov.forEach(o),hf=p(K),ur=r(K,"P",{});var Nv=i(ur);ff=s(Nv,`In this example below, we give the LayoutLMv2 model an image (of texts) and ask it a question. It will give us
a prediction of what it thinks the answer is (the span of the answer within the texts parsed from the image).`),Nv.forEach(o),gf=p(K),y(_t.$$.fragment,K),_f=p(K),y(vt.$$.fragment,K),K.forEach(o),$t.forEach(o),this.h()},h(){l(h,"name","hf:doc:metadata"),l(h,"content",JSON.stringify(ny)),l(g,"id","layoutlmv2"),l(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(g,"href","#layoutlmv2"),l(f,"class","relative group"),l(Qe,"id","overview"),l(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Qe,"href","#overview"),l($e,"class","relative group"),l(zt,"href","https://arxiv.org/abs/2012.14740"),l(zt,"rel","nofollow"),l(ln,"href","layoutlm"),l(jt,"href","https://guillaumejaume.github.io/FUNSD/"),l(jt,"rel","nofollow"),l(Ft,"href","https://github.com/clovaai/cord"),l(Ft,"rel","nofollow"),l(Pt,"href","https://rrc.cvc.uab.es/?ch=13"),l(Pt,"rel","nofollow"),l(Ct,"href","https://github.com/applicaai/kleister-nda"),l(Ct,"rel","nofollow"),l(At,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),l(At,"rel","nofollow"),l(Ot,"href","https://arxiv.org/abs/2007.00398"),l(Ot,"rel","nofollow"),l(Ut,"href","https://arxiv.org/abs/2012.14740"),l(Ut,"rel","nofollow"),l(Wt,"href","https://github.com/NielsRogge/Transformers-Tutorials"),l(Wt,"rel","nofollow"),l(Vt,"href","https://github.com/facebookresearch/detectron2/"),l(Vt,"rel","nofollow"),l(Qt,"href","https://detectron2.readthedocs.io/en/latest/tutorials/install.html"),l(Qt,"rel","nofollow"),l(un,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model.forward"),l(mn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlm#transformers.LayoutLMModel"),l(Gt,"href","https://github.com/tesseract-ocr/tesseract"),l(Gt,"rel","nofollow"),l(Ht,"href","https://pypi.org/project/pytesseract/"),l(Ht,"rel","nofollow"),l(hn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(fn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(gn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"),l(_n,"href","/docs/transformers/pr_17409/en/main_classes/model#transformers.PreTrainedModel.from_pretrained"),l(vn,"href","layoutxlm"),l(Xe,"id","usage-layoutlmv2processor"),l(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Xe,"href","#usage-layoutlmv2processor"),l(qe,"class","relative group"),l(yn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(bn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(Ln,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(wn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(kn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(xn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(Tn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Mn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l($n,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(to,"href","https://pypi.org/project/pytesseract/"),l(to,"rel","nofollow"),l(En,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(Ye,"id","transformers.LayoutLMv2Config"),l(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ye,"href","#transformers.LayoutLMv2Config"),l(ze,"class","relative group"),l(On,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(co,"href","https://huggingface.co/microsoft/layoutlmv2-base-uncased"),l(co,"rel","nofollow"),l(Nn,"href","/docs/transformers/pr_17409/en/main_classes/configuration#transformers.PretrainedConfig"),l(Sn,"href","/docs/transformers/pr_17409/en/main_classes/configuration#transformers.PretrainedConfig"),l(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Je,"id","transformers.LayoutLMv2FeatureExtractor"),l(Je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Je,"href","#transformers.LayoutLMv2FeatureExtractor"),l(Pe,"class","relative group"),l(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(tt,"id","transformers.LayoutLMv2Tokenizer"),l(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(tt,"href","#transformers.LayoutLMv2Tokenizer"),l(Ce,"class","relative group"),l(Rn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Un,"href","/docs/transformers/pr_17409/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(Wn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Vn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(nt,"id","transformers.LayoutLMv2TokenizerFast"),l(nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(nt,"href","#transformers.LayoutLMv2TokenizerFast"),l(Ie,"class","relative group"),l(Qn,"href","/docs/transformers/pr_17409/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),l(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(at,"id","transformers.LayoutLMv2Processor"),l(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(at,"href","#transformers.LayoutLMv2Processor"),l(Ae,"class","relative group"),l(Hn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(Kn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(Xn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Yn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(Eo,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__"),l(Zn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(qo,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__"),l(Jn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(rt,"id","transformers.LayoutLMv2Model"),l(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(rt,"href","#transformers.LayoutLMv2Model"),l(De,"class","relative group"),l(Po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Po,"rel","nofollow"),l(es,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(dt,"id","transformers.LayoutLMv2ForSequenceClassification"),l(dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(dt,"href","#transformers.LayoutLMv2ForSequenceClassification"),l(Ne,"class","relative group"),l(Oo,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),l(Oo,"rel","nofollow"),l(So,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(So,"rel","nofollow"),l(ts,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForSequenceClassification"),l(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ut,"id","transformers.LayoutLMv2ForTokenClassification"),l(ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ut,"href","#transformers.LayoutLMv2ForTokenClassification"),l(Re,"class","relative group"),l(Wo,"href","https://guillaumejaume.github.io/FUNSD/"),l(Wo,"rel","nofollow"),l(Vo,"href","https://rrc.cvc.uab.es/?ch=13"),l(Vo,"rel","nofollow"),l(Qo,"href","https://github.com/clovaai/cord"),l(Qo,"rel","nofollow"),l(Go,"href","https://github.com/applicaai/kleister-nda"),l(Go,"rel","nofollow"),l(Ko,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ko,"rel","nofollow"),l(os,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForTokenClassification"),l(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ft,"id","transformers.LayoutLMv2ForQuestionAnswering"),l(ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ft,"href","#transformers.LayoutLMv2ForQuestionAnswering"),l(Be,"class","relative group"),l(Jo,"href","https://rrc.cvc.uab.es/?ch=17"),l(Jo,"rel","nofollow"),l(tn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(tn,"rel","nofollow"),l(ns,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForQuestionAnswering"),l(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,d){e(document.head,h),u(t,x,d),u(t,f,d),e(f,g),e(g,T),b(m,T,null),e(f,_),e(f,O),e(O,ol),u(t,Lr,d),u(t,$e,d),e($e,Qe),e(Qe,bs),b(qt,bs,null),e($e,nl),e($e,Ls),e(Ls,sl),u(t,wr,d),u(t,ue,d),e(ue,al),e(ue,zt),e(zt,rl),e(ue,il),e(ue,ln),e(ln,ll),e(ue,dl),u(t,kr,d),u(t,me,d),e(me,X),e(X,cl),e(X,jt),e(jt,pl),e(X,ul),e(X,Ft),e(Ft,ml),e(X,hl),e(X,Pt),e(Pt,fl),e(X,gl),e(X,Ct),e(Ct,_l),e(X,vl),e(me,yl),e(me,It),e(It,bl),e(It,At),e(At,Ll),e(It,wl),e(me,kl),e(me,Dt),e(Dt,xl),e(Dt,Ot),e(Ot,Tl),e(Dt,Ml),u(t,xr,d),u(t,dn,d),e(dn,$l),u(t,Tr,d),u(t,cn,d),e(cn,ws),e(ws,El),u(t,Mr,d),u(t,Ge,d),e(Ge,ql),e(Ge,ks),e(ks,zl),e(Ge,jl),u(t,$r,d),b(Nt,t,d),u(t,Er,d),u(t,he,d),e(he,Fl),e(he,xs),e(xs,Pl),e(he,Cl),e(he,Ts),e(Ts,Il),e(he,Al),u(t,qr,d),b(St,t,d),u(t,zr,d),u(t,fe,d),e(fe,Dl),e(fe,Ms),e(Ms,Ol),e(fe,Nl),e(fe,$s),e($s,Sl),e(fe,Rl),u(t,jr,d),u(t,pn,d),e(pn,Ul),u(t,Fr,d),u(t,V,d),e(V,Es),e(Es,Bl),e(V,Wl),e(V,Rt),e(Rt,Vl),e(Rt,Ut),e(Ut,Ql),e(Rt,Gl),e(V,Hl),e(V,Bt),e(Bt,Kl),e(Bt,Wt),e(Wt,Xl),e(Bt,Yl),e(V,Zl),e(V,Ee),e(Ee,Jl),e(Ee,Vt),e(Vt,ed),e(Ee,td),e(Ee,Qt),e(Qt,od),e(Ee,nd),e(V,sd),e(V,M),e(M,ad),e(M,qs),e(qs,rd),e(M,id),e(M,un),e(un,ld),e(M,dd),e(M,zs),e(zs,cd),e(M,pd),e(M,js),e(js,ud),e(M,md),e(M,Fs),e(Fs,hd),e(M,fd),e(M,Ps),e(Ps,gd),e(M,_d),e(M,Cs),e(Cs,vd),e(M,yd),e(M,Is),e(Is,bd),e(M,Ld),e(M,As),e(As,wd),e(M,kd),e(M,mn),e(mn,xd),e(M,Td),e(M,Gt),e(Gt,Md),e(M,$d),e(M,Ht),e(Ht,Ed),e(M,qd),u(t,Pr,d),b(Kt,t,d),u(t,Cr,d),u(t,ge,d),e(ge,zd),e(ge,Ds),e(Ds,jd),e(ge,Fd),e(ge,Os),e(Os,Pd),e(ge,Cd),u(t,Ir,d),b(Xt,t,d),u(t,Ar,d),u(t,He,d),e(He,Id),e(He,hn),e(hn,Ad),e(He,Dd),u(t,Dr,d),u(t,_e,d),e(_e,I),e(I,Od),e(I,fn),e(fn,Nd),e(I,Sd),e(I,Ns),e(Ns,Rd),e(I,Ud),e(I,Ss),e(Ss,Bd),e(I,Wd),e(I,gn),e(gn,Vd),e(I,Qd),e(I,Rs),e(Rs,Gd),e(I,Hd),e(I,Us),e(Us,Kd),e(I,Xd),e(I,Bs),e(Bs,Yd),e(I,Zd),e(_e,Jd),e(_e,Yt),e(Yt,ec),e(Yt,_n),e(_n,tc),e(Yt,oc),e(_e,nc),e(_e,Zt),e(Zt,sc),e(Zt,Ws),e(Ws,ac),e(Zt,rc),u(t,Or,d),u(t,Ke,d),e(Ke,ic),e(Ke,vn),e(vn,lc),e(Ke,dc),u(t,Nr,d),u(t,qe,d),e(qe,Xe),e(Xe,Vs),b(Jt,Vs,null),e(qe,cc),e(qe,Qs),e(Qs,pc),u(t,Sr,d),u(t,Q,d),e(Q,uc),e(Q,yn),e(yn,mc),e(Q,hc),e(Q,bn),e(bn,fc),e(Q,gc),e(Q,Ln),e(Ln,_c),e(Q,vc),e(Q,wn),e(wn,yc),e(Q,bc),u(t,Rr,d),b(eo,t,d),u(t,Ur,d),u(t,E,d),e(E,Lc),e(E,kn),e(kn,wc),e(E,kc),e(E,xn),e(xn,xc),e(E,Tc),e(E,Gs),e(Gs,Mc),e(E,$c),e(E,Tn),e(Tn,Ec),e(E,qc),e(E,Mn),e(Mn,zc),e(E,jc),e(E,Hs),e(Hs,Fc),e(E,Pc),e(E,Ks),e(Ks,Cc),e(E,Ic),e(E,Xs),e(Xs,Ac),e(E,Dc),e(E,Ys),e(Ys,Oc),e(E,Nc),e(E,Zs),e(Zs,Sc),e(E,Rc),u(t,Br,d),u(t,B,d),e(B,$n),e($n,Uc),e(B,Bc),e(B,to),e(to,Wc),e(B,Vc),e(B,En),e(En,Qc),e(B,Gc),e(B,Js),e(Js,Hc),e(B,Kc),e(B,ea),e(ea,Xc),e(B,Yc),u(t,Wr,d),u(t,qn,d),e(qn,Zc),u(t,Vr,d),u(t,zn,d),e(zn,ta),e(ta,Jc),u(t,Qr,d),u(t,jn,d),e(jn,ep),u(t,Gr,d),b(oo,t,d),u(t,Hr,d),u(t,Fn,d),e(Fn,oa),e(oa,tp),u(t,Kr,d),u(t,ve,d),e(ve,op),e(ve,na),e(na,np),e(ve,sp),e(ve,sa),e(sa,ap),e(ve,rp),u(t,Xr,d),b(no,t,d),u(t,Yr,d),u(t,Pn,d),e(Pn,aa),e(aa,ip),u(t,Zr,d),u(t,G,d),e(G,lp),e(G,ra),e(ra,dp),e(G,cp),e(G,ia),e(ia,pp),e(G,up),e(G,la),e(la,mp),e(G,hp),e(G,da),e(da,fp),e(G,gp),u(t,Jr,d),b(so,t,d),u(t,ei,d),u(t,Cn,d),e(Cn,ca),e(ca,_p),u(t,ti,d),u(t,In,d),e(In,vp),u(t,oi,d),b(ao,t,d),u(t,ni,d),u(t,An,d),e(An,pa),e(pa,yp),u(t,si,d),u(t,Dn,d),e(Dn,bp),u(t,ai,d),b(ro,t,d),u(t,ri,d),u(t,ze,d),e(ze,Ye),e(Ye,ua),b(io,ua,null),e(ze,Lp),e(ze,ma),e(ma,wp),u(t,ii,d),u(t,Y,d),b(lo,Y,null),e(Y,kp),e(Y,je),e(je,xp),e(je,On),e(On,Tp),e(je,Mp),e(je,co),e(co,$p),e(je,Ep),e(Y,qp),e(Y,Fe),e(Fe,zp),e(Fe,Nn),e(Nn,jp),e(Fe,Fp),e(Fe,Sn),e(Sn,Pp),e(Fe,Cp),e(Y,Ip),b(Ze,Y,null),u(t,li,d),u(t,Pe,d),e(Pe,Je),e(Je,ha),b(po,ha,null),e(Pe,Ap),e(Pe,fa),e(fa,Dp),u(t,di,d),u(t,Z,d),b(uo,Z,null),e(Z,Op),e(Z,ga),e(ga,Np),e(Z,Sp),e(Z,mo),e(mo,Rp),e(mo,_a),e(_a,Up),e(mo,Bp),e(Z,Wp),e(Z,ye),b(ho,ye,null),e(ye,Vp),e(ye,va),e(va,Qp),e(ye,Gp),b(et,ye,null),u(t,ci,d),u(t,Ce,d),e(Ce,tt),e(tt,ya),b(fo,ya,null),e(Ce,Hp),e(Ce,ba),e(ba,Kp),u(t,pi,d),u(t,N,d),b(go,N,null),e(N,Xp),e(N,S),e(S,Yp),e(S,Rn),e(Rn,Zp),e(S,Jp),e(S,La),e(La,eu),e(S,tu),e(S,wa),e(wa,ou),e(S,nu),e(S,ka),e(ka,su),e(S,au),e(S,xa),e(xa,ru),e(S,iu),e(S,Ta),e(Ta,lu),e(S,du),e(N,cu),e(N,_o),e(_o,pu),e(_o,Un),e(Un,uu),e(_o,mu),e(N,hu),e(N,Bn),e(Bn,Wn),e(Wn,fu),e(Bn,gu),e(N,_u),e(N,ot),b(vo,ot,null),e(ot,vu),e(ot,Ma),e(Ma,yu),e(N,bu),e(N,Vn),b(yo,Vn,null),u(t,ui,d),u(t,Ie,d),e(Ie,nt),e(nt,$a),b(bo,$a,null),e(Ie,Lu),e(Ie,Ea),e(Ea,wu),u(t,mi,d),u(t,J,d),b(Lo,J,null),e(J,ku),e(J,wo),e(wo,xu),e(wo,qa),e(qa,Tu),e(wo,Mu),e(J,$u),e(J,ko),e(ko,Eu),e(ko,Qn),e(Qn,qu),e(ko,zu),e(J,ju),e(J,st),b(xo,st,null),e(st,Fu),e(st,za),e(za,Pu),u(t,hi,d),u(t,Ae,d),e(Ae,at),e(at,ja),b(To,ja,null),e(Ae,Cu),e(Ae,Fa),e(Fa,Iu),u(t,fi,d),u(t,W,d),b(Mo,W,null),e(W,Au),e(W,Pa),e(Pa,Du),e(W,Ou),e(W,Gn),e(Gn,Hn),e(Hn,Nu),e(Gn,Su),e(W,Ru),e(W,F),e(F,Uu),e(F,Kn),e(Kn,Bu),e(F,Wu),e(F,Xn),e(Xn,Vu),e(F,Qu),e(F,Yn),e(Yn,Gu),e(F,Hu),e(F,Ca),e(Ca,Ku),e(F,Xu),e(F,Ia),e(Ia,Yu),e(F,Zu),e(F,Aa),e(Aa,Ju),e(F,em),e(F,Da),e(Da,tm),e(F,om),e(F,Oa),e(Oa,nm),e(F,sm),e(F,Na),e(Na,am),e(F,rm),e(W,im),e(W,be),b($o,be,null),e(be,lm),e(be,$),e($,dm),e($,Sa),e(Sa,cm),e($,pm),e($,Eo),e(Eo,Ra),e(Ra,um),e(Eo,mm),e($,hm),e($,Zn),e(Zn,fm),e($,gm),e($,Ua),e(Ua,_m),e($,vm),e($,Ba),e(Ba,ym),e($,bm),e($,qo),e(qo,Wa),e(Wa,Lm),e(qo,wm),e($,km),e($,Va),e(Va,xm),e($,Tm),e($,Jn),e(Jn,Mm),e($,$m),e($,Qa),e(Qa,Em),e($,qm),e($,Ga),e(Ga,zm),e($,jm),e($,Ha),e(Ha,Fm),e($,Pm),e($,Ka),e(Ka,Cm),e($,Im),e(be,Am),e(be,Xa),e(Xa,Dm),u(t,gi,d),u(t,De,d),e(De,rt),e(rt,Ya),b(zo,Ya,null),e(De,Om),e(De,Za),e(Za,Nm),u(t,_i,d),u(t,de,d),b(jo,de,null),e(de,Sm),e(de,Fo),e(Fo,Rm),e(Fo,Po),e(Po,Um),e(Fo,Bm),e(de,Wm),e(de,se),b(Co,se,null),e(se,Vm),e(se,Oe),e(Oe,Qm),e(Oe,es),e(es,Gm),e(Oe,Hm),e(Oe,Ja),e(Ja,Km),e(Oe,Xm),e(se,Ym),b(it,se,null),e(se,Zm),b(lt,se,null),u(t,vi,d),u(t,Ne,d),e(Ne,dt),e(dt,er),b(Io,er,null),e(Ne,Jm),e(Ne,tr),e(tr,eh),u(t,yi,d),u(t,ee,d),b(Ao,ee,null),e(ee,th),e(ee,Do),e(Do,oh),e(Do,Oo),e(Oo,nh),e(Do,sh),e(ee,ah),e(ee,No),e(No,rh),e(No,So),e(So,ih),e(No,lh),e(ee,dh),e(ee,ae),b(Ro,ae,null),e(ae,ch),e(ae,Se),e(Se,ph),e(Se,ts),e(ts,uh),e(Se,mh),e(Se,or),e(or,hh),e(Se,fh),e(ae,gh),b(ct,ae,null),e(ae,_h),b(pt,ae,null),u(t,bi,d),u(t,Re,d),e(Re,ut),e(ut,nr),b(Uo,nr,null),e(Re,vh),e(Re,sr),e(sr,yh),u(t,Li,d),u(t,te,d),b(Bo,te,null),e(te,bh),e(te,oe),e(oe,Lh),e(oe,Wo),e(Wo,wh),e(oe,kh),e(oe,Vo),e(Vo,xh),e(oe,Th),e(oe,Qo),e(Qo,Mh),e(oe,$h),e(oe,Go),e(Go,Eh),e(oe,qh),e(te,zh),e(te,Ho),e(Ho,jh),e(Ho,Ko),e(Ko,Fh),e(Ho,Ph),e(te,Ch),e(te,re),b(Xo,re,null),e(re,Ih),e(re,Ue),e(Ue,Ah),e(Ue,os),e(os,Dh),e(Ue,Oh),e(Ue,ar),e(ar,Nh),e(Ue,Sh),e(re,Rh),b(mt,re,null),e(re,Uh),b(ht,re,null),u(t,wi,d),u(t,Be,d),e(Be,ft),e(ft,rr),b(Yo,rr,null),e(Be,Bh),e(Be,ir),e(ir,Wh),u(t,ki,d),u(t,ne,d),b(Zo,ne,null),e(ne,Vh),e(ne,ce),e(ce,Qh),e(ce,Jo),e(Jo,Gh),e(ce,Hh),e(ce,lr),e(lr,Kh),e(ce,Xh),e(ce,dr),e(dr,Yh),e(ce,Zh),e(ne,Jh),e(ne,en),e(en,ef),e(en,tn),e(tn,tf),e(en,of),e(ne,nf),e(ne,A),b(on,A,null),e(A,sf),e(A,We),e(We,af),e(We,ns),e(ns,rf),e(We,lf),e(We,cr),e(cr,df),e(We,cf),e(A,pf),b(gt,A,null),e(A,uf),e(A,pr),e(pr,mf),e(A,hf),e(A,ur),e(ur,ff),e(A,gf),b(_t,A,null),e(A,_f),b(vt,A,null),xi=!0},p(t,[d]){const nn={};d&2&&(nn.$$scope={dirty:d,ctx:t}),Ze.$set(nn);const mr={};d&2&&(mr.$$scope={dirty:d,ctx:t}),et.$set(mr);const hr={};d&2&&(hr.$$scope={dirty:d,ctx:t}),it.$set(hr);const fr={};d&2&&(fr.$$scope={dirty:d,ctx:t}),lt.$set(fr);const sn={};d&2&&(sn.$$scope={dirty:d,ctx:t}),ct.$set(sn);const gr={};d&2&&(gr.$$scope={dirty:d,ctx:t}),pt.$set(gr);const _r={};d&2&&(_r.$$scope={dirty:d,ctx:t}),mt.$set(_r);const vr={};d&2&&(vr.$$scope={dirty:d,ctx:t}),ht.$set(vr);const Ve={};d&2&&(Ve.$$scope={dirty:d,ctx:t}),gt.$set(Ve);const yr={};d&2&&(yr.$$scope={dirty:d,ctx:t}),_t.$set(yr);const br={};d&2&&(br.$$scope={dirty:d,ctx:t}),vt.$set(br)},i(t){xi||(L(m.$$.fragment,t),L(qt.$$.fragment,t),L(Nt.$$.fragment,t),L(St.$$.fragment,t),L(Kt.$$.fragment,t),L(Xt.$$.fragment,t),L(Jt.$$.fragment,t),L(eo.$$.fragment,t),L(oo.$$.fragment,t),L(no.$$.fragment,t),L(so.$$.fragment,t),L(ao.$$.fragment,t),L(ro.$$.fragment,t),L(io.$$.fragment,t),L(lo.$$.fragment,t),L(Ze.$$.fragment,t),L(po.$$.fragment,t),L(uo.$$.fragment,t),L(ho.$$.fragment,t),L(et.$$.fragment,t),L(fo.$$.fragment,t),L(go.$$.fragment,t),L(vo.$$.fragment,t),L(yo.$$.fragment,t),L(bo.$$.fragment,t),L(Lo.$$.fragment,t),L(xo.$$.fragment,t),L(To.$$.fragment,t),L(Mo.$$.fragment,t),L($o.$$.fragment,t),L(zo.$$.fragment,t),L(jo.$$.fragment,t),L(Co.$$.fragment,t),L(it.$$.fragment,t),L(lt.$$.fragment,t),L(Io.$$.fragment,t),L(Ao.$$.fragment,t),L(Ro.$$.fragment,t),L(ct.$$.fragment,t),L(pt.$$.fragment,t),L(Uo.$$.fragment,t),L(Bo.$$.fragment,t),L(Xo.$$.fragment,t),L(mt.$$.fragment,t),L(ht.$$.fragment,t),L(Yo.$$.fragment,t),L(Zo.$$.fragment,t),L(on.$$.fragment,t),L(gt.$$.fragment,t),L(_t.$$.fragment,t),L(vt.$$.fragment,t),xi=!0)},o(t){w(m.$$.fragment,t),w(qt.$$.fragment,t),w(Nt.$$.fragment,t),w(St.$$.fragment,t),w(Kt.$$.fragment,t),w(Xt.$$.fragment,t),w(Jt.$$.fragment,t),w(eo.$$.fragment,t),w(oo.$$.fragment,t),w(no.$$.fragment,t),w(so.$$.fragment,t),w(ao.$$.fragment,t),w(ro.$$.fragment,t),w(io.$$.fragment,t),w(lo.$$.fragment,t),w(Ze.$$.fragment,t),w(po.$$.fragment,t),w(uo.$$.fragment,t),w(ho.$$.fragment,t),w(et.$$.fragment,t),w(fo.$$.fragment,t),w(go.$$.fragment,t),w(vo.$$.fragment,t),w(yo.$$.fragment,t),w(bo.$$.fragment,t),w(Lo.$$.fragment,t),w(xo.$$.fragment,t),w(To.$$.fragment,t),w(Mo.$$.fragment,t),w($o.$$.fragment,t),w(zo.$$.fragment,t),w(jo.$$.fragment,t),w(Co.$$.fragment,t),w(it.$$.fragment,t),w(lt.$$.fragment,t),w(Io.$$.fragment,t),w(Ao.$$.fragment,t),w(Ro.$$.fragment,t),w(ct.$$.fragment,t),w(pt.$$.fragment,t),w(Uo.$$.fragment,t),w(Bo.$$.fragment,t),w(Xo.$$.fragment,t),w(mt.$$.fragment,t),w(ht.$$.fragment,t),w(Yo.$$.fragment,t),w(Zo.$$.fragment,t),w(on.$$.fragment,t),w(gt.$$.fragment,t),w(_t.$$.fragment,t),w(vt.$$.fragment,t),xi=!1},d(t){o(h),t&&o(x),t&&o(f),k(m),t&&o(Lr),t&&o($e),k(qt),t&&o(wr),t&&o(ue),t&&o(kr),t&&o(me),t&&o(xr),t&&o(dn),t&&o(Tr),t&&o(cn),t&&o(Mr),t&&o(Ge),t&&o($r),k(Nt,t),t&&o(Er),t&&o(he),t&&o(qr),k(St,t),t&&o(zr),t&&o(fe),t&&o(jr),t&&o(pn),t&&o(Fr),t&&o(V),t&&o(Pr),k(Kt,t),t&&o(Cr),t&&o(ge),t&&o(Ir),k(Xt,t),t&&o(Ar),t&&o(He),t&&o(Dr),t&&o(_e),t&&o(Or),t&&o(Ke),t&&o(Nr),t&&o(qe),k(Jt),t&&o(Sr),t&&o(Q),t&&o(Rr),k(eo,t),t&&o(Ur),t&&o(E),t&&o(Br),t&&o(B),t&&o(Wr),t&&o(qn),t&&o(Vr),t&&o(zn),t&&o(Qr),t&&o(jn),t&&o(Gr),k(oo,t),t&&o(Hr),t&&o(Fn),t&&o(Kr),t&&o(ve),t&&o(Xr),k(no,t),t&&o(Yr),t&&o(Pn),t&&o(Zr),t&&o(G),t&&o(Jr),k(so,t),t&&o(ei),t&&o(Cn),t&&o(ti),t&&o(In),t&&o(oi),k(ao,t),t&&o(ni),t&&o(An),t&&o(si),t&&o(Dn),t&&o(ai),k(ro,t),t&&o(ri),t&&o(ze),k(io),t&&o(ii),t&&o(Y),k(lo),k(Ze),t&&o(li),t&&o(Pe),k(po),t&&o(di),t&&o(Z),k(uo),k(ho),k(et),t&&o(ci),t&&o(Ce),k(fo),t&&o(pi),t&&o(N),k(go),k(vo),k(yo),t&&o(ui),t&&o(Ie),k(bo),t&&o(mi),t&&o(J),k(Lo),k(xo),t&&o(hi),t&&o(Ae),k(To),t&&o(fi),t&&o(W),k(Mo),k($o),t&&o(gi),t&&o(De),k(zo),t&&o(_i),t&&o(de),k(jo),k(Co),k(it),k(lt),t&&o(vi),t&&o(Ne),k(Io),t&&o(yi),t&&o(ee),k(Ao),k(Ro),k(ct),k(pt),t&&o(bi),t&&o(Re),k(Uo),t&&o(Li),t&&o(te),k(Bo),k(Xo),k(mt),k(ht),t&&o(wi),t&&o(Be),k(Yo),t&&o(ki),t&&o(ne),k(Zo),k(on),k(gt),k(_t),k(vt)}}}const ny={local:"layoutlmv2",sections:[{local:"overview",title:"Overview"},{local:"usage-layoutlmv2processor",title:"Usage: LayoutLMv2Processor"},{local:"transformers.LayoutLMv2Config",title:"LayoutLMv2Config"},{local:"transformers.LayoutLMv2FeatureExtractor",title:"LayoutLMv2FeatureExtractor"},{local:"transformers.LayoutLMv2Tokenizer",title:"LayoutLMv2Tokenizer"},{local:"transformers.LayoutLMv2TokenizerFast",title:"LayoutLMv2TokenizerFast"},{local:"transformers.LayoutLMv2Processor",title:"LayoutLMv2Processor"},{local:"transformers.LayoutLMv2Model",title:"LayoutLMv2Model"},{local:"transformers.LayoutLMv2ForSequenceClassification",title:"LayoutLMv2ForSequenceClassification"},{local:"transformers.LayoutLMv2ForTokenClassification",title:"LayoutLMv2ForTokenClassification"},{local:"transformers.LayoutLMv2ForQuestionAnswering",title:"LayoutLMv2ForQuestionAnswering"}],title:"LayoutLMV2"};function sy(j){return Wv(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class py extends Sv{constructor(h){super();Rv(this,h,sy,oy,Uv,{})}}export{py as default,ny as metadata};
