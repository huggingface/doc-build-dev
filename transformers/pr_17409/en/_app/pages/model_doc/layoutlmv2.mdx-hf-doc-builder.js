import{S as Fv,i as Pv,s as Cv,e as a,k as c,w as v,t as n,M as Iv,c as r,d as o,m as p,a as i,x as y,h as s,b as l,G as e,g as u,y as b,q as L,o as w,B as k,v as Av,L as an}from"../../chunks/vendor-hf-doc-builder.js";import{T as Zi}from"../../chunks/Tip-hf-doc-builder.js";import{D}from"../../chunks/Docstring-hf-doc-builder.js";import{C as R}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as le}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as sn}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Dv(j){let h,x,f,g,T;return g=new R({props:{code:`from transformers import LayoutLMv2Model, LayoutLMv2Config

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){h=a("p"),x=n("Example:"),f=c(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Example:"),_.forEach(o),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,x),u(m,f,_),b(g,m,_),T=!0},p:an,i(m){T||(L(g.$$.fragment,m),T=!0)},o(m){w(g.$$.fragment,m),T=!1},d(m){m&&o(h),m&&o(f),k(g,m)}}}function Ov(j){let h,x,f,g,T;return g=new R({props:{code:`from transformers import LayoutLMv2FeatureExtractor
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># dict_keys([&#x27;pixel_values&#x27;])</span>`}}),{c(){h=a("p"),x=n("Examples:"),f=c(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Examples:"),_.forEach(o),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,x),u(m,f,_),b(g,m,_),T=!0},p:an,i(m){T||(L(g.$$.fragment,m),T=!0)},o(m){w(g.$$.fragment,m),T=!1},d(m){m&&o(h),m&&o(f),k(g,m)}}}function Nv(j){let h,x,f,g,T;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=s(O,"Module"),O.forEach(o),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(m,_){u(m,h,_),e(h,x),e(h,f),e(f,g),e(h,T)},d(m){m&&o(h)}}}function Sv(j){let h,x,f,g,T;return g=new R({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2Model, set_seed
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
torch.Size([<span class="hljs-number">1</span>, <span class="hljs-number">342</span>, <span class="hljs-number">768</span>])`}}),{c(){h=a("p"),x=n("Examples:"),f=c(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Examples:"),_.forEach(o),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,x),u(m,f,_),b(g,m,_),T=!0},p:an,i(m){T||(L(g.$$.fragment,m),T=!0)},o(m){w(g.$$.fragment,m),T=!1},d(m){m&&o(h),m&&o(f),k(g,m)}}}function Rv(j){let h,x,f,g,T;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=s(O,"Module"),O.forEach(o),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(m,_){u(m,h,_),e(h,x),e(h,f),e(f,g),e(h,T)},d(m){m&&o(h)}}}function Uv(j){let h,x,f,g,T;return g=new R({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForSequenceClassification, set_seed
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
(<span class="hljs-number">4</span>, <span class="hljs-string">&#x27;advertisement&#x27;</span>)`}}),{c(){h=a("p"),x=n("Example:"),f=c(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Example:"),_.forEach(o),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,x),u(m,f,_),b(g,m,_),T=!0},p:an,i(m){T||(L(g.$$.fragment,m),T=!0)},o(m){w(g.$$.fragment,m),T=!1},d(m){m&&o(h),m&&o(f),k(g,m)}}}function Bv(j){let h,x,f,g,T;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=s(O,"Module"),O.forEach(o),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(m,_){u(m,h,_),e(h,x),e(h,f),e(f,g),e(h,T)},d(m){m&&o(h)}}}function Wv(j){let h,x,f,g,T;return g=new R({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForTokenClassification, set_seed
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
[<span class="hljs-string">&#x27;B-ANSWER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>]`}}),{c(){h=a("p"),x=n("Example:"),f=c(),v(g.$$.fragment)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Example:"),_.forEach(o),f=p(m),y(g.$$.fragment,m)},m(m,_){u(m,h,_),e(h,x),u(m,f,_),b(g,m,_),T=!0},p:an,i(m){T||(L(g.$$.fragment,m),T=!0)},o(m){w(g.$$.fragment,m),T=!1},d(m){m&&o(h),m&&o(f),k(g,m)}}}function Vv(j){let h,x,f,g,T;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(m){h=r(m,"P",{});var _=i(h);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var O=i(f);g=s(O,"Module"),O.forEach(o),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(m,_){u(m,h,_),e(h,x),e(h,f),e(f,g),e(h,T)},d(m){m&&o(h)}}}function Qv(j){let h,x;return h=new R({props:{code:`from transformers import LayoutLMv2Processor, LayoutLMv2ForQuestionAnswering, set_seed
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
<span class="hljs-string">&#x27;council mem - bers conducted by trrf treasurer philip g. kuehn to get answers which the public ...</span>`}}),{c(){v(h.$$.fragment)},l(f){y(h.$$.fragment,f)},m(f,g){b(h,f,g),x=!0},p:an,i(f){x||(L(h.$$.fragment,f),x=!0)},o(f){w(h.$$.fragment,f),x=!1},d(f){k(h,f)}}}function Gv(j){let h,x;return h=new R({props:{code:`target_start_index = torch.tensor([7])
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
(<span class="hljs-number">154</span>, <span class="hljs-number">287</span>)`}}),{c(){v(h.$$.fragment)},l(f){y(h.$$.fragment,f)},m(f,g){b(h,f,g),x=!0},p:an,i(f){x||(L(h.$$.fragment,f),x=!0)},o(f){w(h.$$.fragment,f),x=!1},d(f){k(h,f)}}}function Hv(j){let h,x,f,g,T,m,_,O,Ji,vr,Me,Ve,ys,Et,el,bs,tl,yr,ue,ol,qt,nl,sl,rn,al,rl,br,me,X,il,zt,ll,dl,jt,cl,pl,Ft,ul,ml,Pt,hl,fl,gl,Ct,_l,It,vl,yl,bl,At,Ll,Dt,wl,kl,Lr,ln,xl,wr,dn,Ls,Tl,kr,Qe,Ml,ws,$l,El,xr,Ot,Tr,he,ql,ks,zl,jl,xs,Fl,Pl,Mr,Nt,$r,cn,Cl,Er,pn,Il,qr,V,Ts,Al,Dl,St,Ol,Rt,Nl,Sl,Rl,Ut,Ul,Bt,Bl,Wl,Vl,$e,Ql,Wt,Gl,Hl,Vt,Kl,Xl,Yl,M,Zl,Ms,Jl,ed,un,td,od,$s,nd,sd,Es,ad,rd,qs,id,ld,zs,dd,cd,js,pd,ud,Fs,md,hd,Ps,fd,gd,mn,_d,vd,Qt,yd,bd,Gt,Ld,wd,zr,Ht,jr,fe,kd,Cs,xd,Td,Is,Md,$d,Fr,Kt,Pr,Ge,Ed,hn,qd,zd,Cr,ge,I,jd,fn,Fd,Pd,As,Cd,Id,Ds,Ad,Dd,gn,Od,Nd,Os,Sd,Rd,Ns,Ud,Bd,Ss,Wd,Vd,Qd,Xt,Gd,_n,Hd,Kd,Xd,Yt,Yd,Rs,Zd,Jd,Ir,He,ec,vn,tc,oc,Ar,Ee,Ke,Us,Zt,nc,Bs,sc,Dr,Q,ac,yn,rc,ic,bn,lc,dc,Ln,cc,pc,wn,uc,mc,Or,Jt,Nr,E,hc,kn,fc,gc,xn,_c,vc,Ws,yc,bc,Tn,Lc,wc,Mn,kc,xc,Vs,Tc,Mc,Qs,$c,Ec,Gs,qc,zc,Hs,jc,Fc,Ks,Pc,Cc,Sr,B,$n,Ic,Ac,eo,Dc,Oc,En,Nc,Sc,Xs,Rc,Uc,Ys,Bc,Wc,Rr,qn,Vc,Ur,zn,Zs,Qc,Br,jn,Gc,Wr,to,Vr,Fn,Js,Hc,Qr,_e,Kc,ea,Xc,Yc,ta,Zc,Jc,Gr,oo,Hr,Pn,oa,ep,Kr,G,tp,na,op,np,sa,sp,ap,aa,rp,ip,ra,lp,dp,Xr,no,Yr,Cn,ia,cp,Zr,In,pp,Jr,so,ei,An,la,up,ti,Dn,mp,oi,ao,ni,qe,Xe,da,ro,hp,ca,fp,si,Y,io,gp,ze,_p,On,vp,yp,lo,bp,Lp,wp,je,kp,Nn,xp,Tp,Sn,Mp,$p,Ep,Ye,ai,Fe,Ze,pa,co,qp,ua,zp,ri,Z,po,jp,ma,Fp,Pp,uo,Cp,ha,Ip,Ap,Dp,ve,mo,Op,fa,Np,Sp,Je,ii,Pe,et,ga,ho,Rp,_a,Up,li,N,fo,Bp,S,Wp,Rn,Vp,Qp,va,Gp,Hp,ya,Kp,Xp,ba,Yp,Zp,La,Jp,eu,wa,tu,ou,nu,go,su,Un,au,ru,iu,Bn,Wn,lu,du,cu,tt,_o,pu,ka,uu,mu,Vn,vo,di,Ce,ot,xa,yo,hu,Ta,fu,ci,J,bo,gu,Lo,_u,Ma,vu,yu,bu,wo,Lu,Qn,wu,ku,xu,nt,ko,Tu,$a,Mu,pi,Ie,st,Ea,xo,$u,qa,Eu,ui,W,To,qu,za,zu,ju,Gn,Hn,Fu,Pu,Cu,F,Iu,Kn,Au,Du,Xn,Ou,Nu,Yn,Su,Ru,ja,Uu,Bu,Fa,Wu,Vu,Pa,Qu,Gu,Ca,Hu,Ku,Ia,Xu,Yu,Aa,Zu,Ju,em,ye,Mo,tm,$,om,Da,nm,sm,$o,Oa,am,rm,im,Zn,lm,dm,Na,cm,pm,Sa,um,mm,Eo,Ra,hm,fm,gm,Ua,_m,vm,Jn,ym,bm,Ba,Lm,wm,Wa,km,xm,Va,Tm,Mm,Qa,$m,Em,qm,Ga,zm,mi,Ae,at,Ha,qo,jm,Ka,Fm,hi,de,zo,Pm,jo,Cm,Fo,Im,Am,Dm,se,Po,Om,De,Nm,es,Sm,Rm,Xa,Um,Bm,Wm,rt,Vm,it,fi,Oe,lt,Ya,Co,Qm,Za,Gm,gi,ee,Io,Hm,Ao,Km,Do,Xm,Ym,Zm,Oo,Jm,No,eh,th,oh,ae,So,nh,Ne,sh,ts,ah,rh,Ja,ih,lh,dh,dt,ch,ct,_i,Se,pt,er,Ro,ph,tr,uh,vi,te,Uo,mh,oe,hh,Bo,fh,gh,Wo,_h,vh,Vo,yh,bh,Qo,Lh,wh,kh,Go,xh,Ho,Th,Mh,$h,re,Ko,Eh,Re,qh,os,zh,jh,or,Fh,Ph,Ch,ut,Ih,mt,yi,Ue,ht,nr,Xo,Ah,sr,Dh,bi,ne,Yo,Oh,ce,Nh,Zo,Sh,Rh,ar,Uh,Bh,rr,Wh,Vh,Qh,Jo,Gh,en,Hh,Kh,Xh,A,tn,Yh,Be,Zh,ns,Jh,ef,ir,tf,of,nf,ft,sf,lr,af,rf,dr,lf,df,gt,cf,_t,Li;return m=new le({}),Et=new le({}),Ot=new R({props:{code:"python -m pip install 'git+https://github.com/facebookresearch/detectron2.git'",highlighted:'<span class="hljs-keyword">python</span> -m pip install <span class="hljs-string">&#x27;git+https://github.com/facebookresearch/detectron2.git&#x27;</span>'}}),Nt=new R({props:{code:"python -m pip install torchvision tesseract",highlighted:'<span class="hljs-comment">python</span> <span class="hljs-literal">-</span><span class="hljs-comment">m pip install torchvision tesseract</span>'}}),Ht=new R({props:{code:`def normalize_bbox(bbox, width, height):
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
    ]`}}),Kt=new R({props:{code:`from PIL import Image

image = Image.open(
    "name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images)."
)

width, height = image.size`,highlighted:`<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
)

width, height = image.size`}}),Zt=new le({}),Jt=new R({props:{code:`from transformers import LayoutLMv2FeatureExtractor, LayoutLMv2TokenizerFast, LayoutLMv2Processor

feature_extractor = LayoutLMv2FeatureExtractor()  # apply_ocr is set to True by default
tokenizer = LayoutLMv2TokenizerFast.from_pretrained("microsoft/layoutlmv2-base-uncased")
processor = LayoutLMv2Processor(feature_extractor, tokenizer)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2FeatureExtractor, LayoutLMv2TokenizerFast, LayoutLMv2Processor

feature_extractor = LayoutLMv2FeatureExtractor()  <span class="hljs-comment"># apply_ocr is set to True by default</span>
tokenizer = LayoutLMv2TokenizerFast.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
processor = LayoutLMv2Processor(feature_extractor, tokenizer)`}}),to=new R({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),oo=new R({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),no=new R({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;labels&#x27;, &#x27;image&#x27;])</span>`}}),so=new R({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),ao=new R({props:{code:`from transformers import LayoutLMv2Processor
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
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`}}),ro=new le({}),io=new D({props:{name:"class transformers.LayoutLMv2Config",anchor:"transformers.LayoutLMv2Config",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"max_rel_pos",val:" = 128"},{name:"rel_pos_bins",val:" = 32"},{name:"fast_qkv",val:" = True"},{name:"max_rel_2d_pos",val:" = 256"},{name:"rel_2d_pos_bins",val:" = 64"},{name:"convert_sync_batchnorm",val:" = True"},{name:"image_feature_pool_shape",val:" = [7, 7, 256]"},{name:"coordinate_size",val:" = 128"},{name:"shape_size",val:" = 128"},{name:"has_relative_attention_bias",val:" = True"},{name:"has_spatial_attention_bias",val:" = True"},{name:"has_visual_segment_embedding",val:" = False"},{name:"detectron2_config_args",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
for details regarding default values.`,name:"detectron2_config_args"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/configuration_layoutlmv2.py#L34"}}),Ye=new sn({props:{anchor:"transformers.LayoutLMv2Config.example",$$slots:{default:[Dv]},$$scope:{ctx:j}}}),co=new le({}),po=new D({props:{name:"class transformers.LayoutLMv2FeatureExtractor",anchor:"transformers.LayoutLMv2FeatureExtractor",parameters:[{name:"do_resize",val:" = True"},{name:"size",val:" = 224"},{name:"resample",val:" = <Resampling.BILINEAR: 2>"},{name:"apply_ocr",val:" = True"},{name:"ocr_lang",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2FeatureExtractor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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

					</div>`,name:"ocr_lang"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/feature_extraction_layoutlmv2.py#L82"}}),mo=new D({props:{name:"__call__",anchor:"transformers.LayoutLMv2FeatureExtractor.__call__",parameters:[{name:"images",val:": typing.Union[PIL.Image.Image, numpy.ndarray, ForwardRef('torch.Tensor'), typing.List[PIL.Image.Image], typing.List[numpy.ndarray], typing.List[ForwardRef('torch.Tensor')]]"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2FeatureExtractor.__call__.images",description:`<strong>images</strong> (<code>PIL.Image.Image</code>, <code>np.ndarray</code>, <code>torch.Tensor</code>, <code>List[PIL.Image.Image]</code>, <code>List[np.ndarray]</code>, <code>List[torch.Tensor]</code>) &#x2014;
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
`}}),Je=new sn({props:{anchor:"transformers.LayoutLMv2FeatureExtractor.__call__.example",$$slots:{default:[Ov]},$$scope:{ctx:j}}}),ho=new le({}),fo=new D({props:{name:"class transformers.LayoutLMv2Tokenizer",anchor:"transformers.LayoutLMv2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"model_max_length",val:": int = 512"},{name:"additional_special_tokens",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L198"}}),_o=new D({props:{name:"__call__",anchor:"transformers.LayoutLMv2Tokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Tokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
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
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L418"}}),vo=new D({props:{name:"save_vocabulary",anchor:"transformers.LayoutLMv2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L398"}}),yo=new le({}),bo=new D({props:{name:"class transformers.LayoutLMv2TokenizerFast",anchor:"transformers.LayoutLMv2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original LayoutLMv2).`,name:"tokenize_chinese_chars"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/tokenization_layoutlmv2_fast.py#L70"}}),ko=new D({props:{name:"__call__",anchor:"transformers.LayoutLMv2TokenizerFast.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]]"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
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
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/tokenization_layoutlmv2_fast.py#L179"}}),xo=new le({}),To=new D({props:{name:"class transformers.LayoutLMv2Processor",anchor:"transformers.LayoutLMv2Processor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>LayoutLMv2FeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor">LayoutLMv2FeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.LayoutLMv2Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>LayoutLMv2Tokenizer</code> or <code>LayoutLMv2TokenizerFast</code>) &#x2014;
An instance of <a href="/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a> or <a href="/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast">LayoutLMv2TokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/processing_layoutlmv2.py#L25"}}),Mo=new D({props:{name:"__call__",anchor:"transformers.LayoutLMv2Processor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": typing.Union[str, typing.List[str], typing.List[typing.List[str]]] = None"},{name:"text_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"boxes",val:": typing.Union[typing.List[typing.List[int]], typing.List[typing.List[typing.List[int]]]] = None"},{name:"word_labels",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/processing_layoutlmv2.py#L47"}}),qo=new le({}),zo=new D({props:{name:"class transformers.LayoutLMv2Model",anchor:"transformers.LayoutLMv2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17409/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L708"}}),Po=new D({props:{name:"forward",anchor:"transformers.LayoutLMv2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),rt=new Zi({props:{$$slots:{default:[Nv]},$$scope:{ctx:j}}}),it=new sn({props:{anchor:"transformers.LayoutLMv2Model.forward.example",$$slots:{default:[Sv]},$$scope:{ctx:j}}}),Co=new le({}),Io=new D({props:{name:"class transformers.LayoutLMv2ForSequenceClassification",anchor:"transformers.LayoutLMv2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17409/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L964"}}),So=new D({props:{name:"forward",anchor:"transformers.LayoutLMv2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
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
`}}),dt=new Zi({props:{$$slots:{default:[Rv]},$$scope:{ctx:j}}}),ct=new sn({props:{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.example",$$slots:{default:[Uv]},$$scope:{ctx:j}}}),Ro=new le({}),Uo=new D({props:{name:"class transformers.LayoutLMv2ForTokenClassification",anchor:"transformers.LayoutLMv2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17409/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1145"}}),Ko=new D({props:{name:"forward",anchor:"transformers.LayoutLMv2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
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
`}}),ut=new Zi({props:{$$slots:{default:[Bv]},$$scope:{ctx:j}}}),mt=new sn({props:{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.example",$$slots:{default:[Wv]},$$scope:{ctx:j}}}),Xo=new le({}),Yo=new D({props:{name:"class transformers.LayoutLMv2ForQuestionAnswering",anchor:"transformers.LayoutLMv2ForQuestionAnswering",parameters:[{name:"config",val:""},{name:"has_visual_segment_embedding",val:" = True"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17409/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17409/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1276"}}),tn=new D({props:{name:"forward",anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"image",val:": typing.Optional[torch.FloatTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
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
`}}),ft=new Zi({props:{$$slots:{default:[Vv]},$$scope:{ctx:j}}}),gt=new sn({props:{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.example",$$slots:{default:[Qv]},$$scope:{ctx:j}}}),_t=new sn({props:{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.example-2",$$slots:{default:[Gv]},$$scope:{ctx:j}}}),{c(){h=a("meta"),x=c(),f=a("h1"),g=a("a"),T=a("span"),v(m.$$.fragment),_=c(),O=a("span"),Ji=n("LayoutLMV2"),vr=c(),Me=a("h2"),Ve=a("a"),ys=a("span"),v(Et.$$.fragment),el=c(),bs=a("span"),tl=n("Overview"),yr=c(),ue=a("p"),ol=n("The LayoutLMV2 model was proposed in "),qt=a("a"),nl=n("LayoutLMv2: Multi-modal Pre-training for Visually-Rich Document Understanding"),sl=n(` by Yang Xu, Yiheng Xu, Tengchao Lv, Lei Cui, Furu Wei, Guoxin Wang, Yijuan Lu,
Dinei Florencio, Cha Zhang, Wanxiang Che, Min Zhang, Lidong Zhou. LayoutLMV2 improves `),rn=a("a"),al=n("LayoutLM"),rl=n(` to obtain
state-of-the-art results across several document image understanding benchmarks:`),br=c(),me=a("ul"),X=a("li"),il=n("information extraction from scanned documents: the "),zt=a("a"),ll=n("FUNSD"),dl=n(` dataset (a
collection of 199 annotated forms comprising more than 30,000 words), the `),jt=a("a"),cl=n("CORD"),pl=n(`
dataset (a collection of 800 receipts for training, 100 for validation and 100 for testing), the `),Ft=a("a"),ul=n("SROIE"),ml=n(` dataset (a collection of 626 receipts for training and 347 receipts for testing)
and the `),Pt=a("a"),hl=n("Kleister-NDA"),fl=n(` dataset (a collection of non-disclosure
agreements from the EDGAR database, including 254 documents for training, 83 documents for validation, and 203
documents for testing).`),gl=c(),Ct=a("li"),_l=n("document image classification: the "),It=a("a"),vl=n("RVL-CDIP"),yl=n(` dataset (a collection of
400,000 images belonging to one of 16 classes).`),bl=c(),At=a("li"),Ll=n("document visual question answering: the "),Dt=a("a"),wl=n("DocVQA"),kl=n(` dataset (a collection of 50,000
questions defined on 12,000+ document images).`),Lr=c(),ln=a("p"),xl=n("The abstract from the paper is the following:"),wr=c(),dn=a("p"),Ls=a("em"),Tl=n(`Pre-training of text and layout has proved effective in a variety of visually-rich document understanding tasks due to
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
this https URL.`),kr=c(),Qe=a("p"),Ml=n("LayoutLMv2 depends on "),ws=a("code"),$l=n("detectron2"),El=n(". Run the following to install it:"),xr=c(),v(Ot.$$.fragment),Tr=c(),he=a("p"),ql=n("If you wish to use the OCR feature, you should also install "),ks=a("code"),zl=n("torchvision"),jl=n(" and "),xs=a("code"),Fl=n("tesseract"),Pl=n(":"),Mr=c(),v(Nt.$$.fragment),$r=c(),cn=a("p"),Cl=n("(If you are developing for LayoutLMv2, note that passing the doctests and certain tests for LayoutLMv2 requires the installation of all three packages.)"),Er=c(),pn=a("p"),Il=n("Tips:"),qr=c(),V=a("ul"),Ts=a("li"),Al=n(`The main difference between LayoutLMv1 and LayoutLMv2 is that the latter incorporates visual embeddings during
pre-training (while LayoutLMv1 only adds visual embeddings during fine-tuning).`),Dl=c(),St=a("li"),Ol=n(`LayoutLMv2 adds both a relative 1D attention bias as well as a spatial 2D attention bias to the attention scores in
the self-attention layers. Details can be found on page 5 of the `),Rt=a("a"),Nl=n("paper"),Sl=n("."),Rl=c(),Ut=a("li"),Ul=n("Demo notebooks on how to use the LayoutLMv2 model on RVL-CDIP, FUNSD, DocVQA, CORD can be found "),Bt=a("a"),Bl=n("here"),Wl=n("."),Vl=c(),$e=a("li"),Ql=n("LayoutLMv2 uses Facebook AI\u2019s "),Wt=a("a"),Gl=n("Detectron2"),Hl=n(` package for its visual
backbone. See `),Vt=a("a"),Kl=n("this link"),Xl=n(` for installation
instructions.`),Yl=c(),M=a("li"),Zl=n("In addition to "),Ms=a("code"),Jl=n("input_ids"),ed=n(", "),un=a("a"),td=n("forward()"),od=n(` expects 2 additional inputs, namely
`),$s=a("code"),nd=n("image"),sd=n(" and "),Es=a("code"),ad=n("bbox"),rd=n(". The "),qs=a("code"),id=n("image"),ld=n(` input corresponds to the original document image in which the text
tokens occur. The model expects each document image to be of size 224x224. This means that if you have a batch of
document images, `),zs=a("code"),dd=n("image"),cd=n(` should be a tensor of shape (batch_size, 3, 224, 224). This can be either a
`),js=a("code"),pd=n("torch.Tensor"),ud=n(" or a "),Fs=a("code"),md=n("Detectron2.structures.ImageList"),hd=n(`. You don\u2019t need to normalize the channels, as this is
done by the model. Important to note is that the visual backbone expects BGR channels instead of RGB, as all models
in Detectron2 are pre-trained using the BGR format. The `),Ps=a("code"),fd=n("bbox"),gd=n(` input are the bounding boxes (i.e. 2D-positions)
of the input text tokens. This is identical to `),mn=a("a"),_d=n("LayoutLMModel"),vd=n(`. These can be obtained using an
external OCR engine such as Google\u2019s `),Qt=a("a"),yd=n("Tesseract"),bd=n(" (there\u2019s a "),Gt=a("a"),Ld=n(`Python
wrapper`),wd=n(` available). Each bounding box should be in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1)
represents the position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on
a 0-1000 scale. To normalize, you can use the following function:`),zr=c(),v(Ht.$$.fragment),jr=c(),fe=a("p"),kd=n("Here, "),Cs=a("code"),xd=n("width"),Td=n(" and "),Is=a("code"),Md=n("height"),$d=n(` correspond to the width and height of the original document in which the token
occurs (before resizing the image). Those can be obtained using the Python Image Library (PIL) library for example, as
follows:`),Fr=c(),v(Kt.$$.fragment),Pr=c(),Ge=a("p"),Ed=n("However, this model includes a brand new "),hn=a("a"),qd=n("LayoutLMv2Processor"),zd=n(` which can be used to directly
prepare data for the model (including applying OCR under the hood). More information can be found in the \u201CUsage\u201D
section below.`),Cr=c(),ge=a("ul"),I=a("li"),jd=n("Internally, "),fn=a("a"),Fd=n("LayoutLMv2Model"),Pd=n(" will send the "),As=a("code"),Cd=n("image"),Id=n(` input through its visual backbone to
obtain a lower-resolution feature map, whose shape is equal to the `),Ds=a("code"),Ad=n("image_feature_pool_shape"),Dd=n(` attribute of
`),gn=a("a"),Od=n("LayoutLMv2Config"),Nd=n(`. This feature map is then flattened to obtain a sequence of image tokens. As
the size of the feature map is 7x7 by default, one obtains 49 image tokens. These are then concatenated with the text
tokens, and send through the Transformer encoder. This means that the last hidden states of the model will have a
length of 512 + 49 = 561, if you pad the text tokens up to the max length. More generally, the last hidden states
will have a shape of `),Os=a("code"),Sd=n("seq_length"),Rd=n(" + "),Ns=a("code"),Ud=n("image_feature_pool_shape[0]"),Bd=n(` *
`),Ss=a("code"),Wd=n("config.image_feature_pool_shape[1]"),Vd=n("."),Qd=c(),Xt=a("li"),Gd=n("When calling "),_n=a("a"),Hd=n("from_pretrained()"),Kd=n(`, a warning will be printed with a long list of
parameter names that are not initialized. This is not a problem, as these parameters are batch normalization
statistics, which are going to have values when fine-tuning on a custom dataset.`),Xd=c(),Yt=a("li"),Yd=n("If you want to train the model in a distributed environment, make sure to call "),Rs=a("code"),Zd=n("synchronize_batch_norm"),Jd=n(` on the
model in order to properly synchronize the batch normalization layers of the visual backbone.`),Ir=c(),He=a("p"),ec=n(`In addition, there\u2019s LayoutXLM, which is a multilingual version of LayoutLMv2. More information can be found on
`),vn=a("a"),tc=n("LayoutXLM\u2019s documentation page"),oc=n("."),Ar=c(),Ee=a("h2"),Ke=a("a"),Us=a("span"),v(Zt.$$.fragment),nc=c(),Bs=a("span"),sc=n("Usage: LayoutLMv2Processor"),Dr=c(),Q=a("p"),ac=n("The easiest way to prepare data for the model is to use "),yn=a("a"),rc=n("LayoutLMv2Processor"),ic=n(`, which internally
combines a feature extractor (`),bn=a("a"),lc=n("LayoutLMv2FeatureExtractor"),dc=n(`) and a tokenizer
(`),Ln=a("a"),cc=n("LayoutLMv2Tokenizer"),pc=n(" or "),wn=a("a"),uc=n("LayoutLMv2TokenizerFast"),mc=n(`). The feature extractor
handles the image modality, while the tokenizer handles the text modality. A processor combines both, which is ideal
for a multi-modal model like LayoutLMv2. Note that you can still use both separately, if you only want to handle one
modality.`),Or=c(),v(Jt.$$.fragment),Nr=c(),E=a("p"),hc=n("In short, one can provide a document image (and possibly additional data) to "),kn=a("a"),fc=n("LayoutLMv2Processor"),gc=n(`,
and it will create the inputs expected by the model. Internally, the processor first uses
`),xn=a("a"),_c=n("LayoutLMv2FeatureExtractor"),vc=n(` to apply OCR on the image to get a list of words and normalized
bounding boxes, as well to resize the image to a given size in order to get the `),Ws=a("code"),yc=n("image"),bc=n(` input. The words and
normalized bounding boxes are then provided to `),Tn=a("a"),Lc=n("LayoutLMv2Tokenizer"),wc=n(` or
`),Mn=a("a"),kc=n("LayoutLMv2TokenizerFast"),xc=n(", which converts them to token-level "),Vs=a("code"),Tc=n("input_ids"),Mc=n(`,
`),Qs=a("code"),$c=n("attention_mask"),Ec=n(", "),Gs=a("code"),qc=n("token_type_ids"),zc=n(", "),Hs=a("code"),jc=n("bbox"),Fc=n(`. Optionally, one can provide word labels to the processor,
which are turned into token-level `),Ks=a("code"),Pc=n("labels"),Cc=n("."),Sr=c(),B=a("p"),$n=a("a"),Ic=n("LayoutLMv2Processor"),Ac=n(" uses "),eo=a("a"),Dc=n("PyTesseract"),Oc=n(`, a Python
wrapper around Google\u2019s Tesseract OCR engine, under the hood. Note that you can still use your own OCR engine of
choice, and provide the words and normalized boxes yourself. This requires initializing
`),En=a("a"),Nc=n("LayoutLMv2FeatureExtractor"),Sc=n(" with "),Xs=a("code"),Rc=n("apply_ocr"),Uc=n(" set to "),Ys=a("code"),Bc=n("False"),Wc=n("."),Rr=c(),qn=a("p"),Vc=n(`In total, there are 5 use cases that are supported by the processor. Below, we list them all. Note that each of these
use cases work for both batched and non-batched inputs (we illustrate them for non-batched inputs).`),Ur=c(),zn=a("p"),Zs=a("strong"),Qc=n(`Use case 1: document image classification (training, inference) + token classification (inference), apply_ocr =
True`),Br=c(),jn=a("p"),Gc=n(`This is the simplest case, in which the processor (actually the feature extractor) will perform OCR on the image to get
the words and normalized bounding boxes.`),Wr=c(),v(to.$$.fragment),Vr=c(),Fn=a("p"),Js=a("strong"),Hc=n("Use case 2: document image classification (training, inference) + token classification (inference), apply_ocr=False"),Qr=c(),_e=a("p"),Kc=n("In case one wants to do OCR themselves, one can initialize the feature extractor with "),ea=a("code"),Xc=n("apply_ocr"),Yc=n(` set to
`),ta=a("code"),Zc=n("False"),Jc=n(`. In that case, one should provide the words and corresponding (normalized) bounding boxes themselves to
the processor.`),Gr=c(),v(oo.$$.fragment),Hr=c(),Pn=a("p"),oa=a("strong"),ep=n("Use case 3: token classification (training), apply_ocr=False"),Kr=c(),G=a("p"),tp=n(`For token classification tasks (such as FUNSD, CORD, SROIE, Kleister-NDA), one can also provide the corresponding word
labels in order to train a model. The processor will then convert these into token-level `),na=a("code"),op=n("labels"),np=n(`. By default, it
will only label the first wordpiece of a word, and label the remaining wordpieces with -100, which is the
`),sa=a("code"),sp=n("ignore_index"),ap=n(` of PyTorch\u2019s CrossEntropyLoss. In case you want all wordpieces of a word to be labeled, you can
initialize the tokenizer with `),aa=a("code"),rp=n("only_label_first_subword"),ip=n(" set to "),ra=a("code"),lp=n("False"),dp=n("."),Xr=c(),v(no.$$.fragment),Yr=c(),Cn=a("p"),ia=a("strong"),cp=n("Use case 4: visual question answering (inference), apply_ocr=True"),Zr=c(),In=a("p"),pp=n(`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. By default, the
processor will apply OCR on the image, and create [CLS] question tokens [SEP] word tokens [SEP].`),Jr=c(),v(so.$$.fragment),ei=c(),An=a("p"),la=a("strong"),up=n("Use case 5: visual question answering (inference), apply_ocr=False"),ti=c(),Dn=a("p"),mp=n(`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. If you want to
perform OCR yourself, you can provide your own words and (normalized) bounding boxes to the processor.`),oi=c(),v(ao.$$.fragment),ni=c(),qe=a("h2"),Xe=a("a"),da=a("span"),v(ro.$$.fragment),hp=c(),ca=a("span"),fp=n("LayoutLMv2Config"),si=c(),Y=a("div"),v(io.$$.fragment),gp=c(),ze=a("p"),_p=n("This is the configuration class to store the configuration of a "),On=a("a"),vp=n("LayoutLMv2Model"),yp=n(`. It is used to instantiate an
LayoutLMv2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv2
`),lo=a("a"),bp=n("microsoft/layoutlmv2-base-uncased"),Lp=n(" architecture."),wp=c(),je=a("p"),kp=n("Configuration objects inherit from "),Nn=a("a"),xp=n("PretrainedConfig"),Tp=n(` and can be used to control the model outputs. Read the
documentation from `),Sn=a("a"),Mp=n("PretrainedConfig"),$p=n(" for more information."),Ep=c(),v(Ye.$$.fragment),ai=c(),Fe=a("h2"),Ze=a("a"),pa=a("span"),v(co.$$.fragment),qp=c(),ua=a("span"),zp=n("LayoutLMv2FeatureExtractor"),ri=c(),Z=a("div"),v(po.$$.fragment),jp=c(),ma=a("p"),Fp=n(`Constructs a LayoutLMv2 feature extractor. This can be used to resize document images to the same size, as well as
to apply OCR on them in order to get a list of words and normalized bounding boxes.`),Pp=c(),uo=a("p"),Cp=n("This feature extractor inherits from "),ha=a("code"),Ip=n("PreTrainedFeatureExtractor()"),Ap=n(` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),Dp=c(),ve=a("div"),v(mo.$$.fragment),Op=c(),fa=a("p"),Np=n("Main method to prepare for the model one or several image(s)."),Sp=c(),v(Je.$$.fragment),ii=c(),Pe=a("h2"),et=a("a"),ga=a("span"),v(ho.$$.fragment),Rp=c(),_a=a("span"),Up=n("LayoutLMv2Tokenizer"),li=c(),N=a("div"),v(fo.$$.fragment),Bp=c(),S=a("p"),Wp=n("Construct a LayoutLMv2 tokenizer. Based on WordPiece. "),Rn=a("a"),Vp=n("LayoutLMv2Tokenizer"),Qp=n(` can be used to turn words, word-level
bounding boxes and optional word labels to token-level `),va=a("code"),Gp=n("input_ids"),Hp=n(", "),ya=a("code"),Kp=n("attention_mask"),Xp=n(", "),ba=a("code"),Yp=n("token_type_ids"),Zp=n(", "),La=a("code"),Jp=n("bbox"),eu=n(`, and
optional `),wa=a("code"),tu=n("labels"),ou=n(" (for token classification)."),nu=c(),go=a("p"),su=n("This tokenizer inherits from "),Un=a("a"),au=n("PreTrainedTokenizer"),ru=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),iu=c(),Bn=a("p"),Wn=a("a"),lu=n("LayoutLMv2Tokenizer"),du=n(` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),cu=c(),tt=a("div"),v(_o.$$.fragment),pu=c(),ka=a("p"),uu=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),mu=c(),Vn=a("div"),v(vo.$$.fragment),di=c(),Ce=a("h2"),ot=a("a"),xa=a("span"),v(yo.$$.fragment),hu=c(),Ta=a("span"),fu=n("LayoutLMv2TokenizerFast"),ci=c(),J=a("div"),v(bo.$$.fragment),gu=c(),Lo=a("p"),_u=n("Construct a \u201Cfast\u201D LayoutLMv2 tokenizer (backed by HuggingFace\u2019s "),Ma=a("em"),vu=n("tokenizers"),yu=n(" library). Based on WordPiece."),bu=c(),wo=a("p"),Lu=n("This tokenizer inherits from "),Qn=a("a"),wu=n("PreTrainedTokenizerFast"),ku=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),xu=c(),nt=a("div"),v(ko.$$.fragment),Tu=c(),$a=a("p"),Mu=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),pi=c(),Ie=a("h2"),st=a("a"),Ea=a("span"),v(xo.$$.fragment),$u=c(),qa=a("span"),Eu=n("LayoutLMv2Processor"),ui=c(),W=a("div"),v(To.$$.fragment),qu=c(),za=a("p"),zu=n(`Constructs a LayoutLMv2 processor which combines a LayoutLMv2 feature extractor and a LayoutLMv2 tokenizer into a
single processor.`),ju=c(),Gn=a("p"),Hn=a("a"),Fu=n("LayoutLMv2Processor"),Pu=n(" offers all the functionalities you need to prepare data for the model."),Cu=c(),F=a("p"),Iu=n("It first uses "),Kn=a("a"),Au=n("LayoutLMv2FeatureExtractor"),Du=n(` to resize document images to a fixed size, and optionally applies OCR
to get words and normalized bounding boxes. These are then provided to `),Xn=a("a"),Ou=n("LayoutLMv2Tokenizer"),Nu=n(` or
`),Yn=a("a"),Su=n("LayoutLMv2TokenizerFast"),Ru=n(", which turns the words and bounding boxes into token-level "),ja=a("code"),Uu=n("input_ids"),Bu=n(`,
`),Fa=a("code"),Wu=n("attention_mask"),Vu=n(", "),Pa=a("code"),Qu=n("token_type_ids"),Gu=n(", "),Ca=a("code"),Hu=n("bbox"),Ku=n(". Optionally, one can provide integer "),Ia=a("code"),Xu=n("word_labels"),Yu=n(`, which are turned
into token-level `),Aa=a("code"),Zu=n("labels"),Ju=n(" for token classification tasks (such as FUNSD, CORD)."),em=c(),ye=a("div"),v(Mo.$$.fragment),tm=c(),$=a("p"),om=n("This method first forwards the "),Da=a("code"),nm=n("images"),sm=n(" argument to "),$o=a("a"),Oa=a("strong"),am=n("call"),rm=n("()"),im=n(`. In case
`),Zn=a("a"),lm=n("LayoutLMv2FeatureExtractor"),dm=n(" was initialized with "),Na=a("code"),cm=n("apply_ocr"),pm=n(" set to "),Sa=a("code"),um=n("True"),mm=n(`, it passes the obtained words and
bounding boxes along with the additional arguments to `),Eo=a("a"),Ra=a("strong"),hm=n("call"),fm=n("()"),gm=n(` and returns the output,
together with resized `),Ua=a("code"),_m=n("images"),vm=n(". In case "),Jn=a("a"),ym=n("LayoutLMv2FeatureExtractor"),bm=n(" was initialized with "),Ba=a("code"),Lm=n("apply_ocr"),wm=n(` set to
`),Wa=a("code"),km=n("False"),xm=n(", it passes the words ("),Va=a("code"),Tm=n("text"),Mm=n("/"),Qa=a("code"),$m=n("text_pair`) and `boxes` specified by the user along with the additional arguments to [__call__()](/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__) and returns the output, together with resized `images"),Em=n("."),qm=c(),Ga=a("p"),zm=n("Please refer to the docstring of the above two methods for more information."),mi=c(),Ae=a("h2"),at=a("a"),Ha=a("span"),v(qo.$$.fragment),jm=c(),Ka=a("span"),Fm=n("LayoutLMv2Model"),hi=c(),de=a("div"),v(zo.$$.fragment),Pm=c(),jo=a("p"),Cm=n(`The bare LayoutLMv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Fo=a("a"),Im=n("torch.nn.Module"),Am=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Dm=c(),se=a("div"),v(Po.$$.fragment),Om=c(),De=a("p"),Nm=n("The "),es=a("a"),Sm=n("LayoutLMv2Model"),Rm=n(" forward method, overrides the "),Xa=a("code"),Um=n("__call__"),Bm=n(" special method."),Wm=c(),v(rt.$$.fragment),Vm=c(),v(it.$$.fragment),fi=c(),Oe=a("h2"),lt=a("a"),Ya=a("span"),v(Co.$$.fragment),Qm=c(),Za=a("span"),Gm=n("LayoutLMv2ForSequenceClassification"),gi=c(),ee=a("div"),v(Io.$$.fragment),Hm=c(),Ao=a("p"),Km=n(`LayoutLMv2 Model with a sequence classification head on top (a linear layer on top of the concatenation of the
final hidden state of the [CLS] token, average-pooled initial visual embeddings and average-pooled final visual
embeddings, e.g. for document image classification tasks such as the
`),Do=a("a"),Xm=n("RVL-CDIP"),Ym=n(" dataset."),Zm=c(),Oo=a("p"),Jm=n("This model is a PyTorch "),No=a("a"),eh=n("torch.nn.Module"),th=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),oh=c(),ae=a("div"),v(So.$$.fragment),nh=c(),Ne=a("p"),sh=n("The "),ts=a("a"),ah=n("LayoutLMv2ForSequenceClassification"),rh=n(" forward method, overrides the "),Ja=a("code"),ih=n("__call__"),lh=n(" special method."),dh=c(),v(dt.$$.fragment),ch=c(),v(ct.$$.fragment),_i=c(),Se=a("h2"),pt=a("a"),er=a("span"),v(Ro.$$.fragment),ph=c(),tr=a("span"),uh=n("LayoutLMv2ForTokenClassification"),vi=c(),te=a("div"),v(Uo.$$.fragment),mh=c(),oe=a("p"),hh=n(`LayoutLMv2 Model with a token classification head on top (a linear layer on top of the text part of the hidden
states) e.g. for sequence labeling (information extraction) tasks such as
`),Bo=a("a"),fh=n("FUNSD"),gh=n(", "),Wo=a("a"),_h=n("SROIE"),vh=n(`,
`),Vo=a("a"),yh=n("CORD"),bh=n(" and "),Qo=a("a"),Lh=n("Kleister-NDA"),wh=n("."),kh=c(),Go=a("p"),xh=n("This model is a PyTorch "),Ho=a("a"),Th=n("torch.nn.Module"),Mh=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),$h=c(),re=a("div"),v(Ko.$$.fragment),Eh=c(),Re=a("p"),qh=n("The "),os=a("a"),zh=n("LayoutLMv2ForTokenClassification"),jh=n(" forward method, overrides the "),or=a("code"),Fh=n("__call__"),Ph=n(" special method."),Ch=c(),v(ut.$$.fragment),Ih=c(),v(mt.$$.fragment),yi=c(),Ue=a("h2"),ht=a("a"),nr=a("span"),v(Xo.$$.fragment),Ah=c(),sr=a("span"),Dh=n("LayoutLMv2ForQuestionAnswering"),bi=c(),ne=a("div"),v(Yo.$$.fragment),Oh=c(),ce=a("p"),Nh=n(`LayoutLMv2 Model with a span classification head on top for extractive question-answering tasks such as
`),Zo=a("a"),Sh=n("DocVQA"),Rh=n(` (a linear layer on top of the text part of the hidden-states output to
compute `),ar=a("code"),Uh=n("span start logits"),Bh=n(" and "),rr=a("code"),Wh=n("span end logits"),Vh=n(")."),Qh=c(),Jo=a("p"),Gh=n("This model is a PyTorch "),en=a("a"),Hh=n("torch.nn.Module"),Kh=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xh=c(),A=a("div"),v(tn.$$.fragment),Yh=c(),Be=a("p"),Zh=n("The "),ns=a("a"),Jh=n("LayoutLMv2ForQuestionAnswering"),ef=n(" forward method, overrides the "),ir=a("code"),tf=n("__call__"),of=n(" special method."),nf=c(),v(ft.$$.fragment),sf=c(),lr=a("p"),af=n("Example:"),rf=c(),dr=a("p"),lf=n(`In this example below, we give the LayoutLMv2 model an image (of texts) and ask it a question. It will give us
a prediction of what it thinks the answer is (the span of the answer within the texts parsed from the image).`),df=c(),v(gt.$$.fragment),cf=c(),v(_t.$$.fragment),this.h()},l(t){const d=Iv('[data-svelte="svelte-1phssyn"]',document.head);h=r(d,"META",{name:!0,content:!0}),d.forEach(o),x=p(t),f=r(t,"H1",{class:!0});var on=i(f);g=r(on,"A",{id:!0,class:!0,href:!0});var cr=i(g);T=r(cr,"SPAN",{});var pr=i(T);y(m.$$.fragment,pr),pr.forEach(o),cr.forEach(o),_=p(on),O=r(on,"SPAN",{});var ur=i(O);Ji=s(ur,"LayoutLMV2"),ur.forEach(o),on.forEach(o),vr=p(t),Me=r(t,"H2",{class:!0});var nn=i(Me);Ve=r(nn,"A",{id:!0,class:!0,href:!0});var mr=i(Ve);ys=r(mr,"SPAN",{});var hr=i(ys);y(Et.$$.fragment,hr),hr.forEach(o),mr.forEach(o),el=p(nn),bs=r(nn,"SPAN",{});var fr=i(bs);tl=s(fr,"Overview"),fr.forEach(o),nn.forEach(o),yr=p(t),ue=r(t,"P",{});var We=i(ue);ol=s(We,"The LayoutLMV2 model was proposed in "),qt=r(We,"A",{href:!0,rel:!0});var gr=i(qt);nl=s(gr,"LayoutLMv2: Multi-modal Pre-training for Visually-Rich Document Understanding"),gr.forEach(o),sl=s(We,` by Yang Xu, Yiheng Xu, Tengchao Lv, Lei Cui, Furu Wei, Guoxin Wang, Yijuan Lu,
Dinei Florencio, Cha Zhang, Wanxiang Che, Min Zhang, Lidong Zhou. LayoutLMV2 improves `),rn=r(We,"A",{href:!0});var _r=i(rn);al=s(_r,"LayoutLM"),_r.forEach(o),rl=s(We,` to obtain
state-of-the-art results across several document image understanding benchmarks:`),We.forEach(o),br=p(t),me=r(t,"UL",{});var ss=i(me);X=r(ss,"LI",{});var be=i(X);il=s(be,"information extraction from scanned documents: the "),zt=r(be,"A",{href:!0,rel:!0});var ff=i(zt);ll=s(ff,"FUNSD"),ff.forEach(o),dl=s(be,` dataset (a
collection of 199 annotated forms comprising more than 30,000 words), the `),jt=r(be,"A",{href:!0,rel:!0});var gf=i(jt);cl=s(gf,"CORD"),gf.forEach(o),pl=s(be,`
dataset (a collection of 800 receipts for training, 100 for validation and 100 for testing), the `),Ft=r(be,"A",{href:!0,rel:!0});var _f=i(Ft);ul=s(_f,"SROIE"),_f.forEach(o),ml=s(be,` dataset (a collection of 626 receipts for training and 347 receipts for testing)
and the `),Pt=r(be,"A",{href:!0,rel:!0});var vf=i(Pt);hl=s(vf,"Kleister-NDA"),vf.forEach(o),fl=s(be,` dataset (a collection of non-disclosure
agreements from the EDGAR database, including 254 documents for training, 83 documents for validation, and 203
documents for testing).`),be.forEach(o),gl=p(ss),Ct=r(ss,"LI",{});var wi=i(Ct);_l=s(wi,"document image classification: the "),It=r(wi,"A",{href:!0,rel:!0});var yf=i(It);vl=s(yf,"RVL-CDIP"),yf.forEach(o),yl=s(wi,` dataset (a collection of
400,000 images belonging to one of 16 classes).`),wi.forEach(o),bl=p(ss),At=r(ss,"LI",{});var ki=i(At);Ll=s(ki,"document visual question answering: the "),Dt=r(ki,"A",{href:!0,rel:!0});var bf=i(Dt);wl=s(bf,"DocVQA"),bf.forEach(o),kl=s(ki,` dataset (a collection of 50,000
questions defined on 12,000+ document images).`),ki.forEach(o),ss.forEach(o),Lr=p(t),ln=r(t,"P",{});var Lf=i(ln);xl=s(Lf,"The abstract from the paper is the following:"),Lf.forEach(o),wr=p(t),dn=r(t,"P",{});var wf=i(dn);Ls=r(wf,"EM",{});var kf=i(Ls);Tl=s(kf,`Pre-training of text and layout has proved effective in a variety of visually-rich document understanding tasks due to
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
this https URL.`),kf.forEach(o),wf.forEach(o),kr=p(t),Qe=r(t,"P",{});var xi=i(Qe);Ml=s(xi,"LayoutLMv2 depends on "),ws=r(xi,"CODE",{});var xf=i(ws);$l=s(xf,"detectron2"),xf.forEach(o),El=s(xi,". Run the following to install it:"),xi.forEach(o),xr=p(t),y(Ot.$$.fragment,t),Tr=p(t),he=r(t,"P",{});var as=i(he);ql=s(as,"If you wish to use the OCR feature, you should also install "),ks=r(as,"CODE",{});var Tf=i(ks);zl=s(Tf,"torchvision"),Tf.forEach(o),jl=s(as," and "),xs=r(as,"CODE",{});var Mf=i(xs);Fl=s(Mf,"tesseract"),Mf.forEach(o),Pl=s(as,":"),as.forEach(o),Mr=p(t),y(Nt.$$.fragment,t),$r=p(t),cn=r(t,"P",{});var $f=i(cn);Cl=s($f,"(If you are developing for LayoutLMv2, note that passing the doctests and certain tests for LayoutLMv2 requires the installation of all three packages.)"),$f.forEach(o),Er=p(t),pn=r(t,"P",{});var Ef=i(pn);Il=s(Ef,"Tips:"),Ef.forEach(o),qr=p(t),V=r(t,"UL",{});var Le=i(V);Ts=r(Le,"LI",{});var qf=i(Ts);Al=s(qf,`The main difference between LayoutLMv1 and LayoutLMv2 is that the latter incorporates visual embeddings during
pre-training (while LayoutLMv1 only adds visual embeddings during fine-tuning).`),qf.forEach(o),Dl=p(Le),St=r(Le,"LI",{});var Ti=i(St);Ol=s(Ti,`LayoutLMv2 adds both a relative 1D attention bias as well as a spatial 2D attention bias to the attention scores in
the self-attention layers. Details can be found on page 5 of the `),Rt=r(Ti,"A",{href:!0,rel:!0});var zf=i(Rt);Nl=s(zf,"paper"),zf.forEach(o),Sl=s(Ti,"."),Ti.forEach(o),Rl=p(Le),Ut=r(Le,"LI",{});var Mi=i(Ut);Ul=s(Mi,"Demo notebooks on how to use the LayoutLMv2 model on RVL-CDIP, FUNSD, DocVQA, CORD can be found "),Bt=r(Mi,"A",{href:!0,rel:!0});var jf=i(Bt);Bl=s(jf,"here"),jf.forEach(o),Wl=s(Mi,"."),Mi.forEach(o),Vl=p(Le),$e=r(Le,"LI",{});var rs=i($e);Ql=s(rs,"LayoutLMv2 uses Facebook AI\u2019s "),Wt=r(rs,"A",{href:!0,rel:!0});var Ff=i(Wt);Gl=s(Ff,"Detectron2"),Ff.forEach(o),Hl=s(rs,` package for its visual
backbone. See `),Vt=r(rs,"A",{href:!0,rel:!0});var Pf=i(Vt);Kl=s(Pf,"this link"),Pf.forEach(o),Xl=s(rs,` for installation
instructions.`),rs.forEach(o),Yl=p(Le),M=r(Le,"LI",{});var q=i(M);Zl=s(q,"In addition to "),Ms=r(q,"CODE",{});var Cf=i(Ms);Jl=s(Cf,"input_ids"),Cf.forEach(o),ed=s(q,", "),un=r(q,"A",{href:!0});var If=i(un);td=s(If,"forward()"),If.forEach(o),od=s(q,` expects 2 additional inputs, namely
`),$s=r(q,"CODE",{});var Af=i($s);nd=s(Af,"image"),Af.forEach(o),sd=s(q," and "),Es=r(q,"CODE",{});var Df=i(Es);ad=s(Df,"bbox"),Df.forEach(o),rd=s(q,". The "),qs=r(q,"CODE",{});var Of=i(qs);id=s(Of,"image"),Of.forEach(o),ld=s(q,` input corresponds to the original document image in which the text
tokens occur. The model expects each document image to be of size 224x224. This means that if you have a batch of
document images, `),zs=r(q,"CODE",{});var Nf=i(zs);dd=s(Nf,"image"),Nf.forEach(o),cd=s(q,` should be a tensor of shape (batch_size, 3, 224, 224). This can be either a
`),js=r(q,"CODE",{});var Sf=i(js);pd=s(Sf,"torch.Tensor"),Sf.forEach(o),ud=s(q," or a "),Fs=r(q,"CODE",{});var Rf=i(Fs);md=s(Rf,"Detectron2.structures.ImageList"),Rf.forEach(o),hd=s(q,`. You don\u2019t need to normalize the channels, as this is
done by the model. Important to note is that the visual backbone expects BGR channels instead of RGB, as all models
in Detectron2 are pre-trained using the BGR format. The `),Ps=r(q,"CODE",{});var Uf=i(Ps);fd=s(Uf,"bbox"),Uf.forEach(o),gd=s(q,` input are the bounding boxes (i.e. 2D-positions)
of the input text tokens. This is identical to `),mn=r(q,"A",{href:!0});var Bf=i(mn);_d=s(Bf,"LayoutLMModel"),Bf.forEach(o),vd=s(q,`. These can be obtained using an
external OCR engine such as Google\u2019s `),Qt=r(q,"A",{href:!0,rel:!0});var Wf=i(Qt);yd=s(Wf,"Tesseract"),Wf.forEach(o),bd=s(q," (there\u2019s a "),Gt=r(q,"A",{href:!0,rel:!0});var Vf=i(Gt);Ld=s(Vf,`Python
wrapper`),Vf.forEach(o),wd=s(q,` available). Each bounding box should be in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1)
represents the position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on
a 0-1000 scale. To normalize, you can use the following function:`),q.forEach(o),Le.forEach(o),zr=p(t),y(Ht.$$.fragment,t),jr=p(t),fe=r(t,"P",{});var is=i(fe);kd=s(is,"Here, "),Cs=r(is,"CODE",{});var Qf=i(Cs);xd=s(Qf,"width"),Qf.forEach(o),Td=s(is," and "),Is=r(is,"CODE",{});var Gf=i(Is);Md=s(Gf,"height"),Gf.forEach(o),$d=s(is,` correspond to the width and height of the original document in which the token
occurs (before resizing the image). Those can be obtained using the Python Image Library (PIL) library for example, as
follows:`),is.forEach(o),Fr=p(t),y(Kt.$$.fragment,t),Pr=p(t),Ge=r(t,"P",{});var $i=i(Ge);Ed=s($i,"However, this model includes a brand new "),hn=r($i,"A",{href:!0});var Hf=i(hn);qd=s(Hf,"LayoutLMv2Processor"),Hf.forEach(o),zd=s($i,` which can be used to directly
prepare data for the model (including applying OCR under the hood). More information can be found in the \u201CUsage\u201D
section below.`),$i.forEach(o),Cr=p(t),ge=r(t,"UL",{});var ls=i(ge);I=r(ls,"LI",{});var U=i(I);jd=s(U,"Internally, "),fn=r(U,"A",{href:!0});var Kf=i(fn);Fd=s(Kf,"LayoutLMv2Model"),Kf.forEach(o),Pd=s(U," will send the "),As=r(U,"CODE",{});var Xf=i(As);Cd=s(Xf,"image"),Xf.forEach(o),Id=s(U,` input through its visual backbone to
obtain a lower-resolution feature map, whose shape is equal to the `),Ds=r(U,"CODE",{});var Yf=i(Ds);Ad=s(Yf,"image_feature_pool_shape"),Yf.forEach(o),Dd=s(U,` attribute of
`),gn=r(U,"A",{href:!0});var Zf=i(gn);Od=s(Zf,"LayoutLMv2Config"),Zf.forEach(o),Nd=s(U,`. This feature map is then flattened to obtain a sequence of image tokens. As
the size of the feature map is 7x7 by default, one obtains 49 image tokens. These are then concatenated with the text
tokens, and send through the Transformer encoder. This means that the last hidden states of the model will have a
length of 512 + 49 = 561, if you pad the text tokens up to the max length. More generally, the last hidden states
will have a shape of `),Os=r(U,"CODE",{});var Jf=i(Os);Sd=s(Jf,"seq_length"),Jf.forEach(o),Rd=s(U," + "),Ns=r(U,"CODE",{});var eg=i(Ns);Ud=s(eg,"image_feature_pool_shape[0]"),eg.forEach(o),Bd=s(U,` *
`),Ss=r(U,"CODE",{});var tg=i(Ss);Wd=s(tg,"config.image_feature_pool_shape[1]"),tg.forEach(o),Vd=s(U,"."),U.forEach(o),Qd=p(ls),Xt=r(ls,"LI",{});var Ei=i(Xt);Gd=s(Ei,"When calling "),_n=r(Ei,"A",{href:!0});var og=i(_n);Hd=s(og,"from_pretrained()"),og.forEach(o),Kd=s(Ei,`, a warning will be printed with a long list of
parameter names that are not initialized. This is not a problem, as these parameters are batch normalization
statistics, which are going to have values when fine-tuning on a custom dataset.`),Ei.forEach(o),Xd=p(ls),Yt=r(ls,"LI",{});var qi=i(Yt);Yd=s(qi,"If you want to train the model in a distributed environment, make sure to call "),Rs=r(qi,"CODE",{});var ng=i(Rs);Zd=s(ng,"synchronize_batch_norm"),ng.forEach(o),Jd=s(qi,` on the
model in order to properly synchronize the batch normalization layers of the visual backbone.`),qi.forEach(o),ls.forEach(o),Ir=p(t),He=r(t,"P",{});var zi=i(He);ec=s(zi,`In addition, there\u2019s LayoutXLM, which is a multilingual version of LayoutLMv2. More information can be found on
`),vn=r(zi,"A",{href:!0});var sg=i(vn);tc=s(sg,"LayoutXLM\u2019s documentation page"),sg.forEach(o),oc=s(zi,"."),zi.forEach(o),Ar=p(t),Ee=r(t,"H2",{class:!0});var ji=i(Ee);Ke=r(ji,"A",{id:!0,class:!0,href:!0});var ag=i(Ke);Us=r(ag,"SPAN",{});var rg=i(Us);y(Zt.$$.fragment,rg),rg.forEach(o),ag.forEach(o),nc=p(ji),Bs=r(ji,"SPAN",{});var ig=i(Bs);sc=s(ig,"Usage: LayoutLMv2Processor"),ig.forEach(o),ji.forEach(o),Dr=p(t),Q=r(t,"P",{});var we=i(Q);ac=s(we,"The easiest way to prepare data for the model is to use "),yn=r(we,"A",{href:!0});var lg=i(yn);rc=s(lg,"LayoutLMv2Processor"),lg.forEach(o),ic=s(we,`, which internally
combines a feature extractor (`),bn=r(we,"A",{href:!0});var dg=i(bn);lc=s(dg,"LayoutLMv2FeatureExtractor"),dg.forEach(o),dc=s(we,`) and a tokenizer
(`),Ln=r(we,"A",{href:!0});var cg=i(Ln);cc=s(cg,"LayoutLMv2Tokenizer"),cg.forEach(o),pc=s(we," or "),wn=r(we,"A",{href:!0});var pg=i(wn);uc=s(pg,"LayoutLMv2TokenizerFast"),pg.forEach(o),mc=s(we,`). The feature extractor
handles the image modality, while the tokenizer handles the text modality. A processor combines both, which is ideal
for a multi-modal model like LayoutLMv2. Note that you can still use both separately, if you only want to handle one
modality.`),we.forEach(o),Or=p(t),y(Jt.$$.fragment,t),Nr=p(t),E=r(t,"P",{});var P=i(E);hc=s(P,"In short, one can provide a document image (and possibly additional data) to "),kn=r(P,"A",{href:!0});var ug=i(kn);fc=s(ug,"LayoutLMv2Processor"),ug.forEach(o),gc=s(P,`,
and it will create the inputs expected by the model. Internally, the processor first uses
`),xn=r(P,"A",{href:!0});var mg=i(xn);_c=s(mg,"LayoutLMv2FeatureExtractor"),mg.forEach(o),vc=s(P,` to apply OCR on the image to get a list of words and normalized
bounding boxes, as well to resize the image to a given size in order to get the `),Ws=r(P,"CODE",{});var hg=i(Ws);yc=s(hg,"image"),hg.forEach(o),bc=s(P,` input. The words and
normalized bounding boxes are then provided to `),Tn=r(P,"A",{href:!0});var fg=i(Tn);Lc=s(fg,"LayoutLMv2Tokenizer"),fg.forEach(o),wc=s(P,` or
`),Mn=r(P,"A",{href:!0});var gg=i(Mn);kc=s(gg,"LayoutLMv2TokenizerFast"),gg.forEach(o),xc=s(P,", which converts them to token-level "),Vs=r(P,"CODE",{});var _g=i(Vs);Tc=s(_g,"input_ids"),_g.forEach(o),Mc=s(P,`,
`),Qs=r(P,"CODE",{});var vg=i(Qs);$c=s(vg,"attention_mask"),vg.forEach(o),Ec=s(P,", "),Gs=r(P,"CODE",{});var yg=i(Gs);qc=s(yg,"token_type_ids"),yg.forEach(o),zc=s(P,", "),Hs=r(P,"CODE",{});var bg=i(Hs);jc=s(bg,"bbox"),bg.forEach(o),Fc=s(P,`. Optionally, one can provide word labels to the processor,
which are turned into token-level `),Ks=r(P,"CODE",{});var Lg=i(Ks);Pc=s(Lg,"labels"),Lg.forEach(o),Cc=s(P,"."),P.forEach(o),Sr=p(t),B=r(t,"P",{});var pe=i(B);$n=r(pe,"A",{href:!0});var wg=i($n);Ic=s(wg,"LayoutLMv2Processor"),wg.forEach(o),Ac=s(pe," uses "),eo=r(pe,"A",{href:!0,rel:!0});var kg=i(eo);Dc=s(kg,"PyTesseract"),kg.forEach(o),Oc=s(pe,`, a Python
wrapper around Google\u2019s Tesseract OCR engine, under the hood. Note that you can still use your own OCR engine of
choice, and provide the words and normalized boxes yourself. This requires initializing
`),En=r(pe,"A",{href:!0});var xg=i(En);Nc=s(xg,"LayoutLMv2FeatureExtractor"),xg.forEach(o),Sc=s(pe," with "),Xs=r(pe,"CODE",{});var Tg=i(Xs);Rc=s(Tg,"apply_ocr"),Tg.forEach(o),Uc=s(pe," set to "),Ys=r(pe,"CODE",{});var Mg=i(Ys);Bc=s(Mg,"False"),Mg.forEach(o),Wc=s(pe,"."),pe.forEach(o),Rr=p(t),qn=r(t,"P",{});var $g=i(qn);Vc=s($g,`In total, there are 5 use cases that are supported by the processor. Below, we list them all. Note that each of these
use cases work for both batched and non-batched inputs (we illustrate them for non-batched inputs).`),$g.forEach(o),Ur=p(t),zn=r(t,"P",{});var Eg=i(zn);Zs=r(Eg,"STRONG",{});var qg=i(Zs);Qc=s(qg,`Use case 1: document image classification (training, inference) + token classification (inference), apply_ocr =
True`),qg.forEach(o),Eg.forEach(o),Br=p(t),jn=r(t,"P",{});var zg=i(jn);Gc=s(zg,`This is the simplest case, in which the processor (actually the feature extractor) will perform OCR on the image to get
the words and normalized bounding boxes.`),zg.forEach(o),Wr=p(t),y(to.$$.fragment,t),Vr=p(t),Fn=r(t,"P",{});var jg=i(Fn);Js=r(jg,"STRONG",{});var Fg=i(Js);Hc=s(Fg,"Use case 2: document image classification (training, inference) + token classification (inference), apply_ocr=False"),Fg.forEach(o),jg.forEach(o),Qr=p(t),_e=r(t,"P",{});var ds=i(_e);Kc=s(ds,"In case one wants to do OCR themselves, one can initialize the feature extractor with "),ea=r(ds,"CODE",{});var Pg=i(ea);Xc=s(Pg,"apply_ocr"),Pg.forEach(o),Yc=s(ds,` set to
`),ta=r(ds,"CODE",{});var Cg=i(ta);Zc=s(Cg,"False"),Cg.forEach(o),Jc=s(ds,`. In that case, one should provide the words and corresponding (normalized) bounding boxes themselves to
the processor.`),ds.forEach(o),Gr=p(t),y(oo.$$.fragment,t),Hr=p(t),Pn=r(t,"P",{});var Ig=i(Pn);oa=r(Ig,"STRONG",{});var Ag=i(oa);ep=s(Ag,"Use case 3: token classification (training), apply_ocr=False"),Ag.forEach(o),Ig.forEach(o),Kr=p(t),G=r(t,"P",{});var ke=i(G);tp=s(ke,`For token classification tasks (such as FUNSD, CORD, SROIE, Kleister-NDA), one can also provide the corresponding word
labels in order to train a model. The processor will then convert these into token-level `),na=r(ke,"CODE",{});var Dg=i(na);op=s(Dg,"labels"),Dg.forEach(o),np=s(ke,`. By default, it
will only label the first wordpiece of a word, and label the remaining wordpieces with -100, which is the
`),sa=r(ke,"CODE",{});var Og=i(sa);sp=s(Og,"ignore_index"),Og.forEach(o),ap=s(ke,` of PyTorch\u2019s CrossEntropyLoss. In case you want all wordpieces of a word to be labeled, you can
initialize the tokenizer with `),aa=r(ke,"CODE",{});var Ng=i(aa);rp=s(Ng,"only_label_first_subword"),Ng.forEach(o),ip=s(ke," set to "),ra=r(ke,"CODE",{});var Sg=i(ra);lp=s(Sg,"False"),Sg.forEach(o),dp=s(ke,"."),ke.forEach(o),Xr=p(t),y(no.$$.fragment,t),Yr=p(t),Cn=r(t,"P",{});var Rg=i(Cn);ia=r(Rg,"STRONG",{});var Ug=i(ia);cp=s(Ug,"Use case 4: visual question answering (inference), apply_ocr=True"),Ug.forEach(o),Rg.forEach(o),Zr=p(t),In=r(t,"P",{});var Bg=i(In);pp=s(Bg,`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. By default, the
processor will apply OCR on the image, and create [CLS] question tokens [SEP] word tokens [SEP].`),Bg.forEach(o),Jr=p(t),y(so.$$.fragment,t),ei=p(t),An=r(t,"P",{});var Wg=i(An);la=r(Wg,"STRONG",{});var Vg=i(la);up=s(Vg,"Use case 5: visual question answering (inference), apply_ocr=False"),Vg.forEach(o),Wg.forEach(o),ti=p(t),Dn=r(t,"P",{});var Qg=i(Dn);mp=s(Qg,`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. If you want to
perform OCR yourself, you can provide your own words and (normalized) bounding boxes to the processor.`),Qg.forEach(o),oi=p(t),y(ao.$$.fragment,t),ni=p(t),qe=r(t,"H2",{class:!0});var Fi=i(qe);Xe=r(Fi,"A",{id:!0,class:!0,href:!0});var Gg=i(Xe);da=r(Gg,"SPAN",{});var Hg=i(da);y(ro.$$.fragment,Hg),Hg.forEach(o),Gg.forEach(o),hp=p(Fi),ca=r(Fi,"SPAN",{});var Kg=i(ca);fp=s(Kg,"LayoutLMv2Config"),Kg.forEach(o),Fi.forEach(o),si=p(t),Y=r(t,"DIV",{class:!0});var vt=i(Y);y(io.$$.fragment,vt),gp=p(vt),ze=r(vt,"P",{});var cs=i(ze);_p=s(cs,"This is the configuration class to store the configuration of a "),On=r(cs,"A",{href:!0});var Xg=i(On);vp=s(Xg,"LayoutLMv2Model"),Xg.forEach(o),yp=s(cs,`. It is used to instantiate an
LayoutLMv2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv2
`),lo=r(cs,"A",{href:!0,rel:!0});var Yg=i(lo);bp=s(Yg,"microsoft/layoutlmv2-base-uncased"),Yg.forEach(o),Lp=s(cs," architecture."),cs.forEach(o),wp=p(vt),je=r(vt,"P",{});var ps=i(je);kp=s(ps,"Configuration objects inherit from "),Nn=r(ps,"A",{href:!0});var Zg=i(Nn);xp=s(Zg,"PretrainedConfig"),Zg.forEach(o),Tp=s(ps,` and can be used to control the model outputs. Read the
documentation from `),Sn=r(ps,"A",{href:!0});var Jg=i(Sn);Mp=s(Jg,"PretrainedConfig"),Jg.forEach(o),$p=s(ps," for more information."),ps.forEach(o),Ep=p(vt),y(Ye.$$.fragment,vt),vt.forEach(o),ai=p(t),Fe=r(t,"H2",{class:!0});var Pi=i(Fe);Ze=r(Pi,"A",{id:!0,class:!0,href:!0});var e_=i(Ze);pa=r(e_,"SPAN",{});var t_=i(pa);y(co.$$.fragment,t_),t_.forEach(o),e_.forEach(o),qp=p(Pi),ua=r(Pi,"SPAN",{});var o_=i(ua);zp=s(o_,"LayoutLMv2FeatureExtractor"),o_.forEach(o),Pi.forEach(o),ri=p(t),Z=r(t,"DIV",{class:!0});var yt=i(Z);y(po.$$.fragment,yt),jp=p(yt),ma=r(yt,"P",{});var n_=i(ma);Fp=s(n_,`Constructs a LayoutLMv2 feature extractor. This can be used to resize document images to the same size, as well as
to apply OCR on them in order to get a list of words and normalized bounding boxes.`),n_.forEach(o),Pp=p(yt),uo=r(yt,"P",{});var Ci=i(uo);Cp=s(Ci,"This feature extractor inherits from "),ha=r(Ci,"CODE",{});var s_=i(ha);Ip=s(s_,"PreTrainedFeatureExtractor()"),s_.forEach(o),Ap=s(Ci,` which contains most
of the main methods. Users should refer to this superclass for more information regarding those methods.`),Ci.forEach(o),Dp=p(yt),ve=r(yt,"DIV",{class:!0});var us=i(ve);y(mo.$$.fragment,us),Op=p(us),fa=r(us,"P",{});var a_=i(fa);Np=s(a_,"Main method to prepare for the model one or several image(s)."),a_.forEach(o),Sp=p(us),y(Je.$$.fragment,us),us.forEach(o),yt.forEach(o),ii=p(t),Pe=r(t,"H2",{class:!0});var Ii=i(Pe);et=r(Ii,"A",{id:!0,class:!0,href:!0});var r_=i(et);ga=r(r_,"SPAN",{});var i_=i(ga);y(ho.$$.fragment,i_),i_.forEach(o),r_.forEach(o),Rp=p(Ii),_a=r(Ii,"SPAN",{});var l_=i(_a);Up=s(l_,"LayoutLMv2Tokenizer"),l_.forEach(o),Ii.forEach(o),li=p(t),N=r(t,"DIV",{class:!0});var ie=i(N);y(fo.$$.fragment,ie),Bp=p(ie),S=r(ie,"P",{});var H=i(S);Wp=s(H,"Construct a LayoutLMv2 tokenizer. Based on WordPiece. "),Rn=r(H,"A",{href:!0});var d_=i(Rn);Vp=s(d_,"LayoutLMv2Tokenizer"),d_.forEach(o),Qp=s(H,` can be used to turn words, word-level
bounding boxes and optional word labels to token-level `),va=r(H,"CODE",{});var c_=i(va);Gp=s(c_,"input_ids"),c_.forEach(o),Hp=s(H,", "),ya=r(H,"CODE",{});var p_=i(ya);Kp=s(p_,"attention_mask"),p_.forEach(o),Xp=s(H,", "),ba=r(H,"CODE",{});var u_=i(ba);Yp=s(u_,"token_type_ids"),u_.forEach(o),Zp=s(H,", "),La=r(H,"CODE",{});var m_=i(La);Jp=s(m_,"bbox"),m_.forEach(o),eu=s(H,`, and
optional `),wa=r(H,"CODE",{});var h_=i(wa);tu=s(h_,"labels"),h_.forEach(o),ou=s(H," (for token classification)."),H.forEach(o),nu=p(ie),go=r(ie,"P",{});var Ai=i(go);su=s(Ai,"This tokenizer inherits from "),Un=r(Ai,"A",{href:!0});var f_=i(Un);au=s(f_,"PreTrainedTokenizer"),f_.forEach(o),ru=s(Ai,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ai.forEach(o),iu=p(ie),Bn=r(ie,"P",{});var pf=i(Bn);Wn=r(pf,"A",{href:!0});var g_=i(Wn);lu=s(g_,"LayoutLMv2Tokenizer"),g_.forEach(o),du=s(pf,` runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`),pf.forEach(o),cu=p(ie),tt=r(ie,"DIV",{class:!0});var Di=i(tt);y(_o.$$.fragment,Di),pu=p(Di),ka=r(Di,"P",{});var __=i(ka);uu=s(__,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),__.forEach(o),Di.forEach(o),mu=p(ie),Vn=r(ie,"DIV",{class:!0});var v_=i(Vn);y(vo.$$.fragment,v_),v_.forEach(o),ie.forEach(o),di=p(t),Ce=r(t,"H2",{class:!0});var Oi=i(Ce);ot=r(Oi,"A",{id:!0,class:!0,href:!0});var y_=i(ot);xa=r(y_,"SPAN",{});var b_=i(xa);y(yo.$$.fragment,b_),b_.forEach(o),y_.forEach(o),hu=p(Oi),Ta=r(Oi,"SPAN",{});var L_=i(Ta);fu=s(L_,"LayoutLMv2TokenizerFast"),L_.forEach(o),Oi.forEach(o),ci=p(t),J=r(t,"DIV",{class:!0});var bt=i(J);y(bo.$$.fragment,bt),gu=p(bt),Lo=r(bt,"P",{});var Ni=i(Lo);_u=s(Ni,"Construct a \u201Cfast\u201D LayoutLMv2 tokenizer (backed by HuggingFace\u2019s "),Ma=r(Ni,"EM",{});var w_=i(Ma);vu=s(w_,"tokenizers"),w_.forEach(o),yu=s(Ni," library). Based on WordPiece."),Ni.forEach(o),bu=p(bt),wo=r(bt,"P",{});var Si=i(wo);Lu=s(Si,"This tokenizer inherits from "),Qn=r(Si,"A",{href:!0});var k_=i(Qn);wu=s(k_,"PreTrainedTokenizerFast"),k_.forEach(o),ku=s(Si,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Si.forEach(o),xu=p(bt),nt=r(bt,"DIV",{class:!0});var Ri=i(nt);y(ko.$$.fragment,Ri),Tu=p(Ri),$a=r(Ri,"P",{});var x_=i($a);Mu=s(x_,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`),x_.forEach(o),Ri.forEach(o),bt.forEach(o),pi=p(t),Ie=r(t,"H2",{class:!0});var Ui=i(Ie);st=r(Ui,"A",{id:!0,class:!0,href:!0});var T_=i(st);Ea=r(T_,"SPAN",{});var M_=i(Ea);y(xo.$$.fragment,M_),M_.forEach(o),T_.forEach(o),$u=p(Ui),qa=r(Ui,"SPAN",{});var $_=i(qa);Eu=s($_,"LayoutLMv2Processor"),$_.forEach(o),Ui.forEach(o),ui=p(t),W=r(t,"DIV",{class:!0});var xe=i(W);y(To.$$.fragment,xe),qu=p(xe),za=r(xe,"P",{});var E_=i(za);zu=s(E_,`Constructs a LayoutLMv2 processor which combines a LayoutLMv2 feature extractor and a LayoutLMv2 tokenizer into a
single processor.`),E_.forEach(o),ju=p(xe),Gn=r(xe,"P",{});var uf=i(Gn);Hn=r(uf,"A",{href:!0});var q_=i(Hn);Fu=s(q_,"LayoutLMv2Processor"),q_.forEach(o),Pu=s(uf," offers all the functionalities you need to prepare data for the model."),uf.forEach(o),Cu=p(xe),F=r(xe,"P",{});var C=i(F);Iu=s(C,"It first uses "),Kn=r(C,"A",{href:!0});var z_=i(Kn);Au=s(z_,"LayoutLMv2FeatureExtractor"),z_.forEach(o),Du=s(C,` to resize document images to a fixed size, and optionally applies OCR
to get words and normalized bounding boxes. These are then provided to `),Xn=r(C,"A",{href:!0});var j_=i(Xn);Ou=s(j_,"LayoutLMv2Tokenizer"),j_.forEach(o),Nu=s(C,` or
`),Yn=r(C,"A",{href:!0});var F_=i(Yn);Su=s(F_,"LayoutLMv2TokenizerFast"),F_.forEach(o),Ru=s(C,", which turns the words and bounding boxes into token-level "),ja=r(C,"CODE",{});var P_=i(ja);Uu=s(P_,"input_ids"),P_.forEach(o),Bu=s(C,`,
`),Fa=r(C,"CODE",{});var C_=i(Fa);Wu=s(C_,"attention_mask"),C_.forEach(o),Vu=s(C,", "),Pa=r(C,"CODE",{});var I_=i(Pa);Qu=s(I_,"token_type_ids"),I_.forEach(o),Gu=s(C,", "),Ca=r(C,"CODE",{});var A_=i(Ca);Hu=s(A_,"bbox"),A_.forEach(o),Ku=s(C,". Optionally, one can provide integer "),Ia=r(C,"CODE",{});var D_=i(Ia);Xu=s(D_,"word_labels"),D_.forEach(o),Yu=s(C,`, which are turned
into token-level `),Aa=r(C,"CODE",{});var O_=i(Aa);Zu=s(O_,"labels"),O_.forEach(o),Ju=s(C," for token classification tasks (such as FUNSD, CORD)."),C.forEach(o),em=p(xe),ye=r(xe,"DIV",{class:!0});var ms=i(ye);y(Mo.$$.fragment,ms),tm=p(ms),$=r(ms,"P",{});var z=i($);om=s(z,"This method first forwards the "),Da=r(z,"CODE",{});var N_=i(Da);nm=s(N_,"images"),N_.forEach(o),sm=s(z," argument to "),$o=r(z,"A",{href:!0});var mf=i($o);Oa=r(mf,"STRONG",{});var S_=i(Oa);am=s(S_,"call"),S_.forEach(o),rm=s(mf,"()"),mf.forEach(o),im=s(z,`. In case
`),Zn=r(z,"A",{href:!0});var R_=i(Zn);lm=s(R_,"LayoutLMv2FeatureExtractor"),R_.forEach(o),dm=s(z," was initialized with "),Na=r(z,"CODE",{});var U_=i(Na);cm=s(U_,"apply_ocr"),U_.forEach(o),pm=s(z," set to "),Sa=r(z,"CODE",{});var B_=i(Sa);um=s(B_,"True"),B_.forEach(o),mm=s(z,`, it passes the obtained words and
bounding boxes along with the additional arguments to `),Eo=r(z,"A",{href:!0});var hf=i(Eo);Ra=r(hf,"STRONG",{});var W_=i(Ra);hm=s(W_,"call"),W_.forEach(o),fm=s(hf,"()"),hf.forEach(o),gm=s(z,` and returns the output,
together with resized `),Ua=r(z,"CODE",{});var V_=i(Ua);_m=s(V_,"images"),V_.forEach(o),vm=s(z,". In case "),Jn=r(z,"A",{href:!0});var Q_=i(Jn);ym=s(Q_,"LayoutLMv2FeatureExtractor"),Q_.forEach(o),bm=s(z," was initialized with "),Ba=r(z,"CODE",{});var G_=i(Ba);Lm=s(G_,"apply_ocr"),G_.forEach(o),wm=s(z,` set to
`),Wa=r(z,"CODE",{});var H_=i(Wa);km=s(H_,"False"),H_.forEach(o),xm=s(z,", it passes the words ("),Va=r(z,"CODE",{});var K_=i(Va);Tm=s(K_,"text"),K_.forEach(o),Mm=s(z,"/"),Qa=r(z,"CODE",{});var X_=i(Qa);$m=s(X_,"text_pair`) and `boxes` specified by the user along with the additional arguments to [__call__()](/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__) and returns the output, together with resized `images"),X_.forEach(o),Em=s(z,"."),z.forEach(o),qm=p(ms),Ga=r(ms,"P",{});var Y_=i(Ga);zm=s(Y_,"Please refer to the docstring of the above two methods for more information."),Y_.forEach(o),ms.forEach(o),xe.forEach(o),mi=p(t),Ae=r(t,"H2",{class:!0});var Bi=i(Ae);at=r(Bi,"A",{id:!0,class:!0,href:!0});var Z_=i(at);Ha=r(Z_,"SPAN",{});var J_=i(Ha);y(qo.$$.fragment,J_),J_.forEach(o),Z_.forEach(o),jm=p(Bi),Ka=r(Bi,"SPAN",{});var ev=i(Ka);Fm=s(ev,"LayoutLMv2Model"),ev.forEach(o),Bi.forEach(o),hi=p(t),de=r(t,"DIV",{class:!0});var hs=i(de);y(zo.$$.fragment,hs),Pm=p(hs),jo=r(hs,"P",{});var Wi=i(jo);Cm=s(Wi,`The bare LayoutLMv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Fo=r(Wi,"A",{href:!0,rel:!0});var tv=i(Fo);Im=s(tv,"torch.nn.Module"),tv.forEach(o),Am=s(Wi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wi.forEach(o),Dm=p(hs),se=r(hs,"DIV",{class:!0});var Lt=i(se);y(Po.$$.fragment,Lt),Om=p(Lt),De=r(Lt,"P",{});var fs=i(De);Nm=s(fs,"The "),es=r(fs,"A",{href:!0});var ov=i(es);Sm=s(ov,"LayoutLMv2Model"),ov.forEach(o),Rm=s(fs," forward method, overrides the "),Xa=r(fs,"CODE",{});var nv=i(Xa);Um=s(nv,"__call__"),nv.forEach(o),Bm=s(fs," special method."),fs.forEach(o),Wm=p(Lt),y(rt.$$.fragment,Lt),Vm=p(Lt),y(it.$$.fragment,Lt),Lt.forEach(o),hs.forEach(o),fi=p(t),Oe=r(t,"H2",{class:!0});var Vi=i(Oe);lt=r(Vi,"A",{id:!0,class:!0,href:!0});var sv=i(lt);Ya=r(sv,"SPAN",{});var av=i(Ya);y(Co.$$.fragment,av),av.forEach(o),sv.forEach(o),Qm=p(Vi),Za=r(Vi,"SPAN",{});var rv=i(Za);Gm=s(rv,"LayoutLMv2ForSequenceClassification"),rv.forEach(o),Vi.forEach(o),gi=p(t),ee=r(t,"DIV",{class:!0});var wt=i(ee);y(Io.$$.fragment,wt),Hm=p(wt),Ao=r(wt,"P",{});var Qi=i(Ao);Km=s(Qi,`LayoutLMv2 Model with a sequence classification head on top (a linear layer on top of the concatenation of the
final hidden state of the [CLS] token, average-pooled initial visual embeddings and average-pooled final visual
embeddings, e.g. for document image classification tasks such as the
`),Do=r(Qi,"A",{href:!0,rel:!0});var iv=i(Do);Xm=s(iv,"RVL-CDIP"),iv.forEach(o),Ym=s(Qi," dataset."),Qi.forEach(o),Zm=p(wt),Oo=r(wt,"P",{});var Gi=i(Oo);Jm=s(Gi,"This model is a PyTorch "),No=r(Gi,"A",{href:!0,rel:!0});var lv=i(No);eh=s(lv,"torch.nn.Module"),lv.forEach(o),th=s(Gi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gi.forEach(o),oh=p(wt),ae=r(wt,"DIV",{class:!0});var kt=i(ae);y(So.$$.fragment,kt),nh=p(kt),Ne=r(kt,"P",{});var gs=i(Ne);sh=s(gs,"The "),ts=r(gs,"A",{href:!0});var dv=i(ts);ah=s(dv,"LayoutLMv2ForSequenceClassification"),dv.forEach(o),rh=s(gs," forward method, overrides the "),Ja=r(gs,"CODE",{});var cv=i(Ja);ih=s(cv,"__call__"),cv.forEach(o),lh=s(gs," special method."),gs.forEach(o),dh=p(kt),y(dt.$$.fragment,kt),ch=p(kt),y(ct.$$.fragment,kt),kt.forEach(o),wt.forEach(o),_i=p(t),Se=r(t,"H2",{class:!0});var Hi=i(Se);pt=r(Hi,"A",{id:!0,class:!0,href:!0});var pv=i(pt);er=r(pv,"SPAN",{});var uv=i(er);y(Ro.$$.fragment,uv),uv.forEach(o),pv.forEach(o),ph=p(Hi),tr=r(Hi,"SPAN",{});var mv=i(tr);uh=s(mv,"LayoutLMv2ForTokenClassification"),mv.forEach(o),Hi.forEach(o),vi=p(t),te=r(t,"DIV",{class:!0});var xt=i(te);y(Uo.$$.fragment,xt),mh=p(xt),oe=r(xt,"P",{});var Te=i(oe);hh=s(Te,`LayoutLMv2 Model with a token classification head on top (a linear layer on top of the text part of the hidden
states) e.g. for sequence labeling (information extraction) tasks such as
`),Bo=r(Te,"A",{href:!0,rel:!0});var hv=i(Bo);fh=s(hv,"FUNSD"),hv.forEach(o),gh=s(Te,", "),Wo=r(Te,"A",{href:!0,rel:!0});var fv=i(Wo);_h=s(fv,"SROIE"),fv.forEach(o),vh=s(Te,`,
`),Vo=r(Te,"A",{href:!0,rel:!0});var gv=i(Vo);yh=s(gv,"CORD"),gv.forEach(o),bh=s(Te," and "),Qo=r(Te,"A",{href:!0,rel:!0});var _v=i(Qo);Lh=s(_v,"Kleister-NDA"),_v.forEach(o),wh=s(Te,"."),Te.forEach(o),kh=p(xt),Go=r(xt,"P",{});var Ki=i(Go);xh=s(Ki,"This model is a PyTorch "),Ho=r(Ki,"A",{href:!0,rel:!0});var vv=i(Ho);Th=s(vv,"torch.nn.Module"),vv.forEach(o),Mh=s(Ki,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ki.forEach(o),$h=p(xt),re=r(xt,"DIV",{class:!0});var Tt=i(re);y(Ko.$$.fragment,Tt),Eh=p(Tt),Re=r(Tt,"P",{});var _s=i(Re);qh=s(_s,"The "),os=r(_s,"A",{href:!0});var yv=i(os);zh=s(yv,"LayoutLMv2ForTokenClassification"),yv.forEach(o),jh=s(_s," forward method, overrides the "),or=r(_s,"CODE",{});var bv=i(or);Fh=s(bv,"__call__"),bv.forEach(o),Ph=s(_s," special method."),_s.forEach(o),Ch=p(Tt),y(ut.$$.fragment,Tt),Ih=p(Tt),y(mt.$$.fragment,Tt),Tt.forEach(o),xt.forEach(o),yi=p(t),Ue=r(t,"H2",{class:!0});var Xi=i(Ue);ht=r(Xi,"A",{id:!0,class:!0,href:!0});var Lv=i(ht);nr=r(Lv,"SPAN",{});var wv=i(nr);y(Xo.$$.fragment,wv),wv.forEach(o),Lv.forEach(o),Ah=p(Xi),sr=r(Xi,"SPAN",{});var kv=i(sr);Dh=s(kv,"LayoutLMv2ForQuestionAnswering"),kv.forEach(o),Xi.forEach(o),bi=p(t),ne=r(t,"DIV",{class:!0});var Mt=i(ne);y(Yo.$$.fragment,Mt),Oh=p(Mt),ce=r(Mt,"P",{});var $t=i(ce);Nh=s($t,`LayoutLMv2 Model with a span classification head on top for extractive question-answering tasks such as
`),Zo=r($t,"A",{href:!0,rel:!0});var xv=i(Zo);Sh=s(xv,"DocVQA"),xv.forEach(o),Rh=s($t,` (a linear layer on top of the text part of the hidden-states output to
compute `),ar=r($t,"CODE",{});var Tv=i(ar);Uh=s(Tv,"span start logits"),Tv.forEach(o),Bh=s($t," and "),rr=r($t,"CODE",{});var Mv=i(rr);Wh=s(Mv,"span end logits"),Mv.forEach(o),Vh=s($t,")."),$t.forEach(o),Qh=p(Mt),Jo=r(Mt,"P",{});var Yi=i(Jo);Gh=s(Yi,"This model is a PyTorch "),en=r(Yi,"A",{href:!0,rel:!0});var $v=i(en);Hh=s($v,"torch.nn.Module"),$v.forEach(o),Kh=s(Yi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Yi.forEach(o),Xh=p(Mt),A=r(Mt,"DIV",{class:!0});var K=i(A);y(tn.$$.fragment,K),Yh=p(K),Be=r(K,"P",{});var vs=i(Be);Zh=s(vs,"The "),ns=r(vs,"A",{href:!0});var Ev=i(ns);Jh=s(Ev,"LayoutLMv2ForQuestionAnswering"),Ev.forEach(o),ef=s(vs," forward method, overrides the "),ir=r(vs,"CODE",{});var qv=i(ir);tf=s(qv,"__call__"),qv.forEach(o),of=s(vs," special method."),vs.forEach(o),nf=p(K),y(ft.$$.fragment,K),sf=p(K),lr=r(K,"P",{});var zv=i(lr);af=s(zv,"Example:"),zv.forEach(o),rf=p(K),dr=r(K,"P",{});var jv=i(dr);lf=s(jv,`In this example below, we give the LayoutLMv2 model an image (of texts) and ask it a question. It will give us
a prediction of what it thinks the answer is (the span of the answer within the texts parsed from the image).`),jv.forEach(o),df=p(K),y(gt.$$.fragment,K),cf=p(K),y(_t.$$.fragment,K),K.forEach(o),Mt.forEach(o),this.h()},h(){l(h,"name","hf:doc:metadata"),l(h,"content",JSON.stringify(Kv)),l(g,"id","layoutlmv2"),l(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(g,"href","#layoutlmv2"),l(f,"class","relative group"),l(Ve,"id","overview"),l(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ve,"href","#overview"),l(Me,"class","relative group"),l(qt,"href","https://arxiv.org/abs/2012.14740"),l(qt,"rel","nofollow"),l(rn,"href","layoutlm"),l(zt,"href","https://guillaumejaume.github.io/FUNSD/"),l(zt,"rel","nofollow"),l(jt,"href","https://github.com/clovaai/cord"),l(jt,"rel","nofollow"),l(Ft,"href","https://rrc.cvc.uab.es/?ch=13"),l(Ft,"rel","nofollow"),l(Pt,"href","https://github.com/applicaai/kleister-nda"),l(Pt,"rel","nofollow"),l(It,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),l(It,"rel","nofollow"),l(Dt,"href","https://arxiv.org/abs/2007.00398"),l(Dt,"rel","nofollow"),l(Rt,"href","https://arxiv.org/abs/2012.14740"),l(Rt,"rel","nofollow"),l(Bt,"href","https://github.com/NielsRogge/Transformers-Tutorials"),l(Bt,"rel","nofollow"),l(Wt,"href","https://github.com/facebookresearch/detectron2/"),l(Wt,"rel","nofollow"),l(Vt,"href","https://detectron2.readthedocs.io/en/latest/tutorials/install.html"),l(Vt,"rel","nofollow"),l(un,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model.forward"),l(mn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlm#transformers.LayoutLMModel"),l(Qt,"href","https://github.com/tesseract-ocr/tesseract"),l(Qt,"rel","nofollow"),l(Gt,"href","https://pypi.org/project/pytesseract/"),l(Gt,"rel","nofollow"),l(hn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(fn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(gn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"),l(_n,"href","/docs/transformers/pr_17409/en/main_classes/model#transformers.PreTrainedModel.from_pretrained"),l(vn,"href","layoutxlm"),l(Ke,"id","usage-layoutlmv2processor"),l(Ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ke,"href","#usage-layoutlmv2processor"),l(Ee,"class","relative group"),l(yn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(bn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(Ln,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(wn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l(kn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(xn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(Tn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Mn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l($n,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(eo,"href","https://pypi.org/project/pytesseract/"),l(eo,"rel","nofollow"),l(En,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(Xe,"id","transformers.LayoutLMv2Config"),l(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Xe,"href","#transformers.LayoutLMv2Config"),l(qe,"class","relative group"),l(On,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(lo,"href","https://huggingface.co/microsoft/layoutlmv2-base-uncased"),l(lo,"rel","nofollow"),l(Nn,"href","/docs/transformers/pr_17409/en/main_classes/configuration#transformers.PretrainedConfig"),l(Sn,"href","/docs/transformers/pr_17409/en/main_classes/configuration#transformers.PretrainedConfig"),l(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ze,"id","transformers.LayoutLMv2FeatureExtractor"),l(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ze,"href","#transformers.LayoutLMv2FeatureExtractor"),l(Fe,"class","relative group"),l(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(et,"id","transformers.LayoutLMv2Tokenizer"),l(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(et,"href","#transformers.LayoutLMv2Tokenizer"),l(Pe,"class","relative group"),l(Rn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Un,"href","/docs/transformers/pr_17409/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(Wn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Vn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ot,"id","transformers.LayoutLMv2TokenizerFast"),l(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ot,"href","#transformers.LayoutLMv2TokenizerFast"),l(Ce,"class","relative group"),l(Qn,"href","/docs/transformers/pr_17409/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),l(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(st,"id","transformers.LayoutLMv2Processor"),l(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(st,"href","#transformers.LayoutLMv2Processor"),l(Ie,"class","relative group"),l(Hn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor"),l(Kn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(Xn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer"),l(Yn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast"),l($o,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__"),l(Zn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(Eo,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__"),l(Jn,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor"),l(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(at,"id","transformers.LayoutLMv2Model"),l(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(at,"href","#transformers.LayoutLMv2Model"),l(Ae,"class","relative group"),l(Fo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Fo,"rel","nofollow"),l(es,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model"),l(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(lt,"id","transformers.LayoutLMv2ForSequenceClassification"),l(lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(lt,"href","#transformers.LayoutLMv2ForSequenceClassification"),l(Oe,"class","relative group"),l(Do,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),l(Do,"rel","nofollow"),l(No,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(No,"rel","nofollow"),l(ts,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForSequenceClassification"),l(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(pt,"id","transformers.LayoutLMv2ForTokenClassification"),l(pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(pt,"href","#transformers.LayoutLMv2ForTokenClassification"),l(Se,"class","relative group"),l(Bo,"href","https://guillaumejaume.github.io/FUNSD/"),l(Bo,"rel","nofollow"),l(Wo,"href","https://rrc.cvc.uab.es/?ch=13"),l(Wo,"rel","nofollow"),l(Vo,"href","https://github.com/clovaai/cord"),l(Vo,"rel","nofollow"),l(Qo,"href","https://github.com/applicaai/kleister-nda"),l(Qo,"rel","nofollow"),l(Ho,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ho,"rel","nofollow"),l(os,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForTokenClassification"),l(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ht,"id","transformers.LayoutLMv2ForQuestionAnswering"),l(ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ht,"href","#transformers.LayoutLMv2ForQuestionAnswering"),l(Ue,"class","relative group"),l(Zo,"href","https://rrc.cvc.uab.es/?ch=17"),l(Zo,"rel","nofollow"),l(en,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(en,"rel","nofollow"),l(ns,"href","/docs/transformers/pr_17409/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForQuestionAnswering"),l(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,d){e(document.head,h),u(t,x,d),u(t,f,d),e(f,g),e(g,T),b(m,T,null),e(f,_),e(f,O),e(O,Ji),u(t,vr,d),u(t,Me,d),e(Me,Ve),e(Ve,ys),b(Et,ys,null),e(Me,el),e(Me,bs),e(bs,tl),u(t,yr,d),u(t,ue,d),e(ue,ol),e(ue,qt),e(qt,nl),e(ue,sl),e(ue,rn),e(rn,al),e(ue,rl),u(t,br,d),u(t,me,d),e(me,X),e(X,il),e(X,zt),e(zt,ll),e(X,dl),e(X,jt),e(jt,cl),e(X,pl),e(X,Ft),e(Ft,ul),e(X,ml),e(X,Pt),e(Pt,hl),e(X,fl),e(me,gl),e(me,Ct),e(Ct,_l),e(Ct,It),e(It,vl),e(Ct,yl),e(me,bl),e(me,At),e(At,Ll),e(At,Dt),e(Dt,wl),e(At,kl),u(t,Lr,d),u(t,ln,d),e(ln,xl),u(t,wr,d),u(t,dn,d),e(dn,Ls),e(Ls,Tl),u(t,kr,d),u(t,Qe,d),e(Qe,Ml),e(Qe,ws),e(ws,$l),e(Qe,El),u(t,xr,d),b(Ot,t,d),u(t,Tr,d),u(t,he,d),e(he,ql),e(he,ks),e(ks,zl),e(he,jl),e(he,xs),e(xs,Fl),e(he,Pl),u(t,Mr,d),b(Nt,t,d),u(t,$r,d),u(t,cn,d),e(cn,Cl),u(t,Er,d),u(t,pn,d),e(pn,Il),u(t,qr,d),u(t,V,d),e(V,Ts),e(Ts,Al),e(V,Dl),e(V,St),e(St,Ol),e(St,Rt),e(Rt,Nl),e(St,Sl),e(V,Rl),e(V,Ut),e(Ut,Ul),e(Ut,Bt),e(Bt,Bl),e(Ut,Wl),e(V,Vl),e(V,$e),e($e,Ql),e($e,Wt),e(Wt,Gl),e($e,Hl),e($e,Vt),e(Vt,Kl),e($e,Xl),e(V,Yl),e(V,M),e(M,Zl),e(M,Ms),e(Ms,Jl),e(M,ed),e(M,un),e(un,td),e(M,od),e(M,$s),e($s,nd),e(M,sd),e(M,Es),e(Es,ad),e(M,rd),e(M,qs),e(qs,id),e(M,ld),e(M,zs),e(zs,dd),e(M,cd),e(M,js),e(js,pd),e(M,ud),e(M,Fs),e(Fs,md),e(M,hd),e(M,Ps),e(Ps,fd),e(M,gd),e(M,mn),e(mn,_d),e(M,vd),e(M,Qt),e(Qt,yd),e(M,bd),e(M,Gt),e(Gt,Ld),e(M,wd),u(t,zr,d),b(Ht,t,d),u(t,jr,d),u(t,fe,d),e(fe,kd),e(fe,Cs),e(Cs,xd),e(fe,Td),e(fe,Is),e(Is,Md),e(fe,$d),u(t,Fr,d),b(Kt,t,d),u(t,Pr,d),u(t,Ge,d),e(Ge,Ed),e(Ge,hn),e(hn,qd),e(Ge,zd),u(t,Cr,d),u(t,ge,d),e(ge,I),e(I,jd),e(I,fn),e(fn,Fd),e(I,Pd),e(I,As),e(As,Cd),e(I,Id),e(I,Ds),e(Ds,Ad),e(I,Dd),e(I,gn),e(gn,Od),e(I,Nd),e(I,Os),e(Os,Sd),e(I,Rd),e(I,Ns),e(Ns,Ud),e(I,Bd),e(I,Ss),e(Ss,Wd),e(I,Vd),e(ge,Qd),e(ge,Xt),e(Xt,Gd),e(Xt,_n),e(_n,Hd),e(Xt,Kd),e(ge,Xd),e(ge,Yt),e(Yt,Yd),e(Yt,Rs),e(Rs,Zd),e(Yt,Jd),u(t,Ir,d),u(t,He,d),e(He,ec),e(He,vn),e(vn,tc),e(He,oc),u(t,Ar,d),u(t,Ee,d),e(Ee,Ke),e(Ke,Us),b(Zt,Us,null),e(Ee,nc),e(Ee,Bs),e(Bs,sc),u(t,Dr,d),u(t,Q,d),e(Q,ac),e(Q,yn),e(yn,rc),e(Q,ic),e(Q,bn),e(bn,lc),e(Q,dc),e(Q,Ln),e(Ln,cc),e(Q,pc),e(Q,wn),e(wn,uc),e(Q,mc),u(t,Or,d),b(Jt,t,d),u(t,Nr,d),u(t,E,d),e(E,hc),e(E,kn),e(kn,fc),e(E,gc),e(E,xn),e(xn,_c),e(E,vc),e(E,Ws),e(Ws,yc),e(E,bc),e(E,Tn),e(Tn,Lc),e(E,wc),e(E,Mn),e(Mn,kc),e(E,xc),e(E,Vs),e(Vs,Tc),e(E,Mc),e(E,Qs),e(Qs,$c),e(E,Ec),e(E,Gs),e(Gs,qc),e(E,zc),e(E,Hs),e(Hs,jc),e(E,Fc),e(E,Ks),e(Ks,Pc),e(E,Cc),u(t,Sr,d),u(t,B,d),e(B,$n),e($n,Ic),e(B,Ac),e(B,eo),e(eo,Dc),e(B,Oc),e(B,En),e(En,Nc),e(B,Sc),e(B,Xs),e(Xs,Rc),e(B,Uc),e(B,Ys),e(Ys,Bc),e(B,Wc),u(t,Rr,d),u(t,qn,d),e(qn,Vc),u(t,Ur,d),u(t,zn,d),e(zn,Zs),e(Zs,Qc),u(t,Br,d),u(t,jn,d),e(jn,Gc),u(t,Wr,d),b(to,t,d),u(t,Vr,d),u(t,Fn,d),e(Fn,Js),e(Js,Hc),u(t,Qr,d),u(t,_e,d),e(_e,Kc),e(_e,ea),e(ea,Xc),e(_e,Yc),e(_e,ta),e(ta,Zc),e(_e,Jc),u(t,Gr,d),b(oo,t,d),u(t,Hr,d),u(t,Pn,d),e(Pn,oa),e(oa,ep),u(t,Kr,d),u(t,G,d),e(G,tp),e(G,na),e(na,op),e(G,np),e(G,sa),e(sa,sp),e(G,ap),e(G,aa),e(aa,rp),e(G,ip),e(G,ra),e(ra,lp),e(G,dp),u(t,Xr,d),b(no,t,d),u(t,Yr,d),u(t,Cn,d),e(Cn,ia),e(ia,cp),u(t,Zr,d),u(t,In,d),e(In,pp),u(t,Jr,d),b(so,t,d),u(t,ei,d),u(t,An,d),e(An,la),e(la,up),u(t,ti,d),u(t,Dn,d),e(Dn,mp),u(t,oi,d),b(ao,t,d),u(t,ni,d),u(t,qe,d),e(qe,Xe),e(Xe,da),b(ro,da,null),e(qe,hp),e(qe,ca),e(ca,fp),u(t,si,d),u(t,Y,d),b(io,Y,null),e(Y,gp),e(Y,ze),e(ze,_p),e(ze,On),e(On,vp),e(ze,yp),e(ze,lo),e(lo,bp),e(ze,Lp),e(Y,wp),e(Y,je),e(je,kp),e(je,Nn),e(Nn,xp),e(je,Tp),e(je,Sn),e(Sn,Mp),e(je,$p),e(Y,Ep),b(Ye,Y,null),u(t,ai,d),u(t,Fe,d),e(Fe,Ze),e(Ze,pa),b(co,pa,null),e(Fe,qp),e(Fe,ua),e(ua,zp),u(t,ri,d),u(t,Z,d),b(po,Z,null),e(Z,jp),e(Z,ma),e(ma,Fp),e(Z,Pp),e(Z,uo),e(uo,Cp),e(uo,ha),e(ha,Ip),e(uo,Ap),e(Z,Dp),e(Z,ve),b(mo,ve,null),e(ve,Op),e(ve,fa),e(fa,Np),e(ve,Sp),b(Je,ve,null),u(t,ii,d),u(t,Pe,d),e(Pe,et),e(et,ga),b(ho,ga,null),e(Pe,Rp),e(Pe,_a),e(_a,Up),u(t,li,d),u(t,N,d),b(fo,N,null),e(N,Bp),e(N,S),e(S,Wp),e(S,Rn),e(Rn,Vp),e(S,Qp),e(S,va),e(va,Gp),e(S,Hp),e(S,ya),e(ya,Kp),e(S,Xp),e(S,ba),e(ba,Yp),e(S,Zp),e(S,La),e(La,Jp),e(S,eu),e(S,wa),e(wa,tu),e(S,ou),e(N,nu),e(N,go),e(go,su),e(go,Un),e(Un,au),e(go,ru),e(N,iu),e(N,Bn),e(Bn,Wn),e(Wn,lu),e(Bn,du),e(N,cu),e(N,tt),b(_o,tt,null),e(tt,pu),e(tt,ka),e(ka,uu),e(N,mu),e(N,Vn),b(vo,Vn,null),u(t,di,d),u(t,Ce,d),e(Ce,ot),e(ot,xa),b(yo,xa,null),e(Ce,hu),e(Ce,Ta),e(Ta,fu),u(t,ci,d),u(t,J,d),b(bo,J,null),e(J,gu),e(J,Lo),e(Lo,_u),e(Lo,Ma),e(Ma,vu),e(Lo,yu),e(J,bu),e(J,wo),e(wo,Lu),e(wo,Qn),e(Qn,wu),e(wo,ku),e(J,xu),e(J,nt),b(ko,nt,null),e(nt,Tu),e(nt,$a),e($a,Mu),u(t,pi,d),u(t,Ie,d),e(Ie,st),e(st,Ea),b(xo,Ea,null),e(Ie,$u),e(Ie,qa),e(qa,Eu),u(t,ui,d),u(t,W,d),b(To,W,null),e(W,qu),e(W,za),e(za,zu),e(W,ju),e(W,Gn),e(Gn,Hn),e(Hn,Fu),e(Gn,Pu),e(W,Cu),e(W,F),e(F,Iu),e(F,Kn),e(Kn,Au),e(F,Du),e(F,Xn),e(Xn,Ou),e(F,Nu),e(F,Yn),e(Yn,Su),e(F,Ru),e(F,ja),e(ja,Uu),e(F,Bu),e(F,Fa),e(Fa,Wu),e(F,Vu),e(F,Pa),e(Pa,Qu),e(F,Gu),e(F,Ca),e(Ca,Hu),e(F,Ku),e(F,Ia),e(Ia,Xu),e(F,Yu),e(F,Aa),e(Aa,Zu),e(F,Ju),e(W,em),e(W,ye),b(Mo,ye,null),e(ye,tm),e(ye,$),e($,om),e($,Da),e(Da,nm),e($,sm),e($,$o),e($o,Oa),e(Oa,am),e($o,rm),e($,im),e($,Zn),e(Zn,lm),e($,dm),e($,Na),e(Na,cm),e($,pm),e($,Sa),e(Sa,um),e($,mm),e($,Eo),e(Eo,Ra),e(Ra,hm),e(Eo,fm),e($,gm),e($,Ua),e(Ua,_m),e($,vm),e($,Jn),e(Jn,ym),e($,bm),e($,Ba),e(Ba,Lm),e($,wm),e($,Wa),e(Wa,km),e($,xm),e($,Va),e(Va,Tm),e($,Mm),e($,Qa),e(Qa,$m),e($,Em),e(ye,qm),e(ye,Ga),e(Ga,zm),u(t,mi,d),u(t,Ae,d),e(Ae,at),e(at,Ha),b(qo,Ha,null),e(Ae,jm),e(Ae,Ka),e(Ka,Fm),u(t,hi,d),u(t,de,d),b(zo,de,null),e(de,Pm),e(de,jo),e(jo,Cm),e(jo,Fo),e(Fo,Im),e(jo,Am),e(de,Dm),e(de,se),b(Po,se,null),e(se,Om),e(se,De),e(De,Nm),e(De,es),e(es,Sm),e(De,Rm),e(De,Xa),e(Xa,Um),e(De,Bm),e(se,Wm),b(rt,se,null),e(se,Vm),b(it,se,null),u(t,fi,d),u(t,Oe,d),e(Oe,lt),e(lt,Ya),b(Co,Ya,null),e(Oe,Qm),e(Oe,Za),e(Za,Gm),u(t,gi,d),u(t,ee,d),b(Io,ee,null),e(ee,Hm),e(ee,Ao),e(Ao,Km),e(Ao,Do),e(Do,Xm),e(Ao,Ym),e(ee,Zm),e(ee,Oo),e(Oo,Jm),e(Oo,No),e(No,eh),e(Oo,th),e(ee,oh),e(ee,ae),b(So,ae,null),e(ae,nh),e(ae,Ne),e(Ne,sh),e(Ne,ts),e(ts,ah),e(Ne,rh),e(Ne,Ja),e(Ja,ih),e(Ne,lh),e(ae,dh),b(dt,ae,null),e(ae,ch),b(ct,ae,null),u(t,_i,d),u(t,Se,d),e(Se,pt),e(pt,er),b(Ro,er,null),e(Se,ph),e(Se,tr),e(tr,uh),u(t,vi,d),u(t,te,d),b(Uo,te,null),e(te,mh),e(te,oe),e(oe,hh),e(oe,Bo),e(Bo,fh),e(oe,gh),e(oe,Wo),e(Wo,_h),e(oe,vh),e(oe,Vo),e(Vo,yh),e(oe,bh),e(oe,Qo),e(Qo,Lh),e(oe,wh),e(te,kh),e(te,Go),e(Go,xh),e(Go,Ho),e(Ho,Th),e(Go,Mh),e(te,$h),e(te,re),b(Ko,re,null),e(re,Eh),e(re,Re),e(Re,qh),e(Re,os),e(os,zh),e(Re,jh),e(Re,or),e(or,Fh),e(Re,Ph),e(re,Ch),b(ut,re,null),e(re,Ih),b(mt,re,null),u(t,yi,d),u(t,Ue,d),e(Ue,ht),e(ht,nr),b(Xo,nr,null),e(Ue,Ah),e(Ue,sr),e(sr,Dh),u(t,bi,d),u(t,ne,d),b(Yo,ne,null),e(ne,Oh),e(ne,ce),e(ce,Nh),e(ce,Zo),e(Zo,Sh),e(ce,Rh),e(ce,ar),e(ar,Uh),e(ce,Bh),e(ce,rr),e(rr,Wh),e(ce,Vh),e(ne,Qh),e(ne,Jo),e(Jo,Gh),e(Jo,en),e(en,Hh),e(Jo,Kh),e(ne,Xh),e(ne,A),b(tn,A,null),e(A,Yh),e(A,Be),e(Be,Zh),e(Be,ns),e(ns,Jh),e(Be,ef),e(Be,ir),e(ir,tf),e(Be,of),e(A,nf),b(ft,A,null),e(A,sf),e(A,lr),e(lr,af),e(A,rf),e(A,dr),e(dr,lf),e(A,df),b(gt,A,null),e(A,cf),b(_t,A,null),Li=!0},p(t,[d]){const on={};d&2&&(on.$$scope={dirty:d,ctx:t}),Ye.$set(on);const cr={};d&2&&(cr.$$scope={dirty:d,ctx:t}),Je.$set(cr);const pr={};d&2&&(pr.$$scope={dirty:d,ctx:t}),rt.$set(pr);const ur={};d&2&&(ur.$$scope={dirty:d,ctx:t}),it.$set(ur);const nn={};d&2&&(nn.$$scope={dirty:d,ctx:t}),dt.$set(nn);const mr={};d&2&&(mr.$$scope={dirty:d,ctx:t}),ct.$set(mr);const hr={};d&2&&(hr.$$scope={dirty:d,ctx:t}),ut.$set(hr);const fr={};d&2&&(fr.$$scope={dirty:d,ctx:t}),mt.$set(fr);const We={};d&2&&(We.$$scope={dirty:d,ctx:t}),ft.$set(We);const gr={};d&2&&(gr.$$scope={dirty:d,ctx:t}),gt.$set(gr);const _r={};d&2&&(_r.$$scope={dirty:d,ctx:t}),_t.$set(_r)},i(t){Li||(L(m.$$.fragment,t),L(Et.$$.fragment,t),L(Ot.$$.fragment,t),L(Nt.$$.fragment,t),L(Ht.$$.fragment,t),L(Kt.$$.fragment,t),L(Zt.$$.fragment,t),L(Jt.$$.fragment,t),L(to.$$.fragment,t),L(oo.$$.fragment,t),L(no.$$.fragment,t),L(so.$$.fragment,t),L(ao.$$.fragment,t),L(ro.$$.fragment,t),L(io.$$.fragment,t),L(Ye.$$.fragment,t),L(co.$$.fragment,t),L(po.$$.fragment,t),L(mo.$$.fragment,t),L(Je.$$.fragment,t),L(ho.$$.fragment,t),L(fo.$$.fragment,t),L(_o.$$.fragment,t),L(vo.$$.fragment,t),L(yo.$$.fragment,t),L(bo.$$.fragment,t),L(ko.$$.fragment,t),L(xo.$$.fragment,t),L(To.$$.fragment,t),L(Mo.$$.fragment,t),L(qo.$$.fragment,t),L(zo.$$.fragment,t),L(Po.$$.fragment,t),L(rt.$$.fragment,t),L(it.$$.fragment,t),L(Co.$$.fragment,t),L(Io.$$.fragment,t),L(So.$$.fragment,t),L(dt.$$.fragment,t),L(ct.$$.fragment,t),L(Ro.$$.fragment,t),L(Uo.$$.fragment,t),L(Ko.$$.fragment,t),L(ut.$$.fragment,t),L(mt.$$.fragment,t),L(Xo.$$.fragment,t),L(Yo.$$.fragment,t),L(tn.$$.fragment,t),L(ft.$$.fragment,t),L(gt.$$.fragment,t),L(_t.$$.fragment,t),Li=!0)},o(t){w(m.$$.fragment,t),w(Et.$$.fragment,t),w(Ot.$$.fragment,t),w(Nt.$$.fragment,t),w(Ht.$$.fragment,t),w(Kt.$$.fragment,t),w(Zt.$$.fragment,t),w(Jt.$$.fragment,t),w(to.$$.fragment,t),w(oo.$$.fragment,t),w(no.$$.fragment,t),w(so.$$.fragment,t),w(ao.$$.fragment,t),w(ro.$$.fragment,t),w(io.$$.fragment,t),w(Ye.$$.fragment,t),w(co.$$.fragment,t),w(po.$$.fragment,t),w(mo.$$.fragment,t),w(Je.$$.fragment,t),w(ho.$$.fragment,t),w(fo.$$.fragment,t),w(_o.$$.fragment,t),w(vo.$$.fragment,t),w(yo.$$.fragment,t),w(bo.$$.fragment,t),w(ko.$$.fragment,t),w(xo.$$.fragment,t),w(To.$$.fragment,t),w(Mo.$$.fragment,t),w(qo.$$.fragment,t),w(zo.$$.fragment,t),w(Po.$$.fragment,t),w(rt.$$.fragment,t),w(it.$$.fragment,t),w(Co.$$.fragment,t),w(Io.$$.fragment,t),w(So.$$.fragment,t),w(dt.$$.fragment,t),w(ct.$$.fragment,t),w(Ro.$$.fragment,t),w(Uo.$$.fragment,t),w(Ko.$$.fragment,t),w(ut.$$.fragment,t),w(mt.$$.fragment,t),w(Xo.$$.fragment,t),w(Yo.$$.fragment,t),w(tn.$$.fragment,t),w(ft.$$.fragment,t),w(gt.$$.fragment,t),w(_t.$$.fragment,t),Li=!1},d(t){o(h),t&&o(x),t&&o(f),k(m),t&&o(vr),t&&o(Me),k(Et),t&&o(yr),t&&o(ue),t&&o(br),t&&o(me),t&&o(Lr),t&&o(ln),t&&o(wr),t&&o(dn),t&&o(kr),t&&o(Qe),t&&o(xr),k(Ot,t),t&&o(Tr),t&&o(he),t&&o(Mr),k(Nt,t),t&&o($r),t&&o(cn),t&&o(Er),t&&o(pn),t&&o(qr),t&&o(V),t&&o(zr),k(Ht,t),t&&o(jr),t&&o(fe),t&&o(Fr),k(Kt,t),t&&o(Pr),t&&o(Ge),t&&o(Cr),t&&o(ge),t&&o(Ir),t&&o(He),t&&o(Ar),t&&o(Ee),k(Zt),t&&o(Dr),t&&o(Q),t&&o(Or),k(Jt,t),t&&o(Nr),t&&o(E),t&&o(Sr),t&&o(B),t&&o(Rr),t&&o(qn),t&&o(Ur),t&&o(zn),t&&o(Br),t&&o(jn),t&&o(Wr),k(to,t),t&&o(Vr),t&&o(Fn),t&&o(Qr),t&&o(_e),t&&o(Gr),k(oo,t),t&&o(Hr),t&&o(Pn),t&&o(Kr),t&&o(G),t&&o(Xr),k(no,t),t&&o(Yr),t&&o(Cn),t&&o(Zr),t&&o(In),t&&o(Jr),k(so,t),t&&o(ei),t&&o(An),t&&o(ti),t&&o(Dn),t&&o(oi),k(ao,t),t&&o(ni),t&&o(qe),k(ro),t&&o(si),t&&o(Y),k(io),k(Ye),t&&o(ai),t&&o(Fe),k(co),t&&o(ri),t&&o(Z),k(po),k(mo),k(Je),t&&o(ii),t&&o(Pe),k(ho),t&&o(li),t&&o(N),k(fo),k(_o),k(vo),t&&o(di),t&&o(Ce),k(yo),t&&o(ci),t&&o(J),k(bo),k(ko),t&&o(pi),t&&o(Ie),k(xo),t&&o(ui),t&&o(W),k(To),k(Mo),t&&o(mi),t&&o(Ae),k(qo),t&&o(hi),t&&o(de),k(zo),k(Po),k(rt),k(it),t&&o(fi),t&&o(Oe),k(Co),t&&o(gi),t&&o(ee),k(Io),k(So),k(dt),k(ct),t&&o(_i),t&&o(Se),k(Ro),t&&o(vi),t&&o(te),k(Uo),k(Ko),k(ut),k(mt),t&&o(yi),t&&o(Ue),k(Xo),t&&o(bi),t&&o(ne),k(Yo),k(tn),k(ft),k(gt),k(_t)}}}const Kv={local:"layoutlmv2",sections:[{local:"overview",title:"Overview"},{local:"usage-layoutlmv2processor",title:"Usage: LayoutLMv2Processor"},{local:"transformers.LayoutLMv2Config",title:"LayoutLMv2Config"},{local:"transformers.LayoutLMv2FeatureExtractor",title:"LayoutLMv2FeatureExtractor"},{local:"transformers.LayoutLMv2Tokenizer",title:"LayoutLMv2Tokenizer"},{local:"transformers.LayoutLMv2TokenizerFast",title:"LayoutLMv2TokenizerFast"},{local:"transformers.LayoutLMv2Processor",title:"LayoutLMv2Processor"},{local:"transformers.LayoutLMv2Model",title:"LayoutLMv2Model"},{local:"transformers.LayoutLMv2ForSequenceClassification",title:"LayoutLMv2ForSequenceClassification"},{local:"transformers.LayoutLMv2ForTokenClassification",title:"LayoutLMv2ForTokenClassification"},{local:"transformers.LayoutLMv2ForQuestionAnswering",title:"LayoutLMv2ForQuestionAnswering"}],title:"LayoutLMV2"};function Xv(j){return Av(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ny extends Fv{constructor(h){super();Pv(this,h,Xv,Hv,Cv,{})}}export{ny as default,Kv as metadata};
