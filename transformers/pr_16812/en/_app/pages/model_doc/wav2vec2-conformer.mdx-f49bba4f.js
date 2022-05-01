import{S as Sc,i as zc,s as Oc,e as a,k as p,w,t as r,M as Dc,c as s,d as t,m as f,a as i,x as C,h as n,b as d,F as e,g as _,y,q as k,o as $,B as T,v as Nc,L as $e}from"../../chunks/vendor-6b77c823.js";import{T as Nt}from"../../chunks/Tip-39098574.js";import{D as M}from"../../chunks/Docstring-1088f2fb.js";import{C as Te}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ee}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as ke}from"../../chunks/ExampleCodeBlock-5212b321.js";function Lc(V){let c,v,m,u,b;return u=new Te({props:{code:`from transformers import Wav2Vec2ConformerModel, Wav2Vec2ConformerConfig

# Initializing a Wav2Vec2Conformer facebook/wav2vec2-conformer-large-rel-pos style configuration
configuration = Wav2Vec2ConformerConfig()

# Initializing a model from the facebook/wav2vec2-conformer-large-rel-pos style configuration
model = Wav2Vec2ConformerModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2ConformerModel, Wav2Vec2ConformerConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Wav2Vec2Conformer facebook/wav2vec2-conformer-large-rel-pos style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = Wav2Vec2ConformerConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/wav2vec2-conformer-large-rel-pos style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2ConformerModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=a("p"),v=r("Example:"),m=p(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=i(c);v=n(h,"Example:"),h.forEach(t),m=f(l),C(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,m,h),y(u,l,h),b=!0},p:$e,i(l){b||(k(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(m),T(u,l)}}}function Ic(V){let c,v,m,u,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=i(c);v=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var W=i(m);u=n(W,"Module"),W.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,m),e(m,u),e(c,b)},d(l){l&&t(c)}}}function Rc(V){let c,v,m,u,b;return u=new Te({props:{code:`from transformers import Wav2Vec2Processor, Wav2Vec2ConformerModel
import torch
from datasets import load_dataset

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-conformer-rope-large-960h-ft")
model = Wav2Vec2ConformerModel.from_pretrained("facebook/wav2vec2-conformer-rope-large-960h-ft")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, Wav2Vec2ConformerModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-conformer-rope-large-960h-ft&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2ConformerModel.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-conformer-rope-large-960h-ft&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">1024</span>]`}}),{c(){c=a("p"),v=r("Example:"),m=p(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=i(c);v=n(h,"Example:"),h.forEach(t),m=f(l),C(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,m,h),y(u,l,h),b=!0},p:$e,i(l){b||(k(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(m),T(u,l)}}}function Hc(V){let c,v,m,u,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=i(c);v=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var W=i(m);u=n(W,"Module"),W.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,m),e(m,u),e(c,b)},d(l){l&&t(c)}}}function Bc(V){let c,v,m,u,b;return u=new Te({props:{code:`from transformers import Wav2Vec2Processor, Wav2Vec2ConformerForCTC
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-conformer-rope-large-960h-ft")
model = Wav2Vec2ConformerForCTC.from_pretrained("facebook/wav2vec2-conformer-rope-large-960h-ft")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    logits = model(**inputs).logits
predicted_ids = torch.argmax(logits, dim=-1)

# transcribe speech
transcription = processor.batch_decode(predicted_ids)
transcription[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, Wav2Vec2ConformerForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-conformer-rope-large-960h-ft&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2ConformerForCTC.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-conformer-rope-large-960h-ft&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;MISTER QUILTER IS THE APOSTLE OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPEL&#x27;</span>`}}),{c(){c=a("p"),v=r("Example:"),m=p(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=i(c);v=n(h,"Example:"),h.forEach(t),m=f(l),C(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,m,h),y(u,l,h),b=!0},p:$e,i(l){b||(k(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(m),T(u,l)}}}function Xc(V){let c,v;return c=new Te({props:{code:`with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">64.21</span>`}}),{c(){w(c.$$.fragment)},l(m){C(c.$$.fragment,m)},m(m,u){y(c,m,u),v=!0},p:$e,i(m){v||(k(c.$$.fragment,m),v=!0)},o(m){$(c.$$.fragment,m),v=!1},d(m){T(c,m)}}}function Uc(V){let c,v,m,u,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=i(c);v=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var W=i(m);u=n(W,"Module"),W.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,m),e(m,u),e(c,b)},d(l){l&&t(c)}}}function Zc(V){let c,v,m,u,b;return u=new Te({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ConformerForSequenceClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("hf-internal-testing/wav2vec2-conformer-seq-class")
model = Wav2Vec2ConformerForSequenceClassification.from_pretrained("hf-internal-testing/wav2vec2-conformer-seq-class")

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_ids = torch.argmax(logits, dim=-1).item()
predicted_label = model.config.id2label[predicted_class_ids]
predicted_label`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, Wav2Vec2ConformerForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/wav2vec2-conformer-seq-class&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2ConformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/wav2vec2-conformer-seq-class&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){c=a("p"),v=r("Example:"),m=p(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=i(c);v=n(h,"Example:"),h.forEach(t),m=f(l),C(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,m,h),y(u,l,h),b=!0},p:$e,i(l){b||(k(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(m),T(u,l)}}}function Kc(V){let c,v;return c=new Te({props:{code:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.68</span>`}}),{c(){w(c.$$.fragment)},l(m){C(c.$$.fragment,m)},m(m,u){y(c,m,u),v=!0},p:$e,i(m){v||(k(c.$$.fragment,m),v=!0)},o(m){$(c.$$.fragment,m),v=!1},d(m){T(c,m)}}}function Qc(V){let c,v,m,u,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=i(c);v=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var W=i(m);u=n(W,"Module"),W.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,m),e(m,u),e(c,b)},d(l){l&&t(c)}}}function Gc(V){let c,v,m,u,b;return u=new Te({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ConformerForAudioFrameClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("hf-internal-testing/wav2vec2-conformer-frame-class")
model = Wav2Vec2ConformerForAudioFrameClassification.from_pretrained("hf-internal-testing/wav2vec2-conformer-frame-class")

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], return_tensors="pt", sampling_rate=sampling_rate)
with torch.no_grad():
    logits = model(**inputs).logits

probabilities = torch.sigmoid(logits[0])
# labels is a one-hot array of shape (num_frames, num_speakers)
labels = (probabilities > 0.5).long()
labels[0].tolist()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, Wav2Vec2ConformerForAudioFrameClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/wav2vec2-conformer-frame-class&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2ConformerForAudioFrameClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/wav2vec2-conformer-frame-class&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, sampling_rate=sampling_rate)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>probabilities = torch.sigmoid(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># labels is a one-hot array of shape (num_frames, num_speakers)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = (probabilities &gt; <span class="hljs-number">0.5</span>).long()
<span class="hljs-meta">&gt;&gt;&gt; </span>labels[<span class="hljs-number">0</span>].tolist()
[<span class="hljs-number">1</span>, <span class="hljs-number">0</span>]`}}),{c(){c=a("p"),v=r("Example:"),m=p(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=i(c);v=n(h,"Example:"),h.forEach(t),m=f(l),C(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,m,h),y(u,l,h),b=!0},p:$e,i(l){b||(k(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(m),T(u,l)}}}function Yc(V){let c,v,m,u,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=i(c);v=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var W=i(m);u=n(W,"Module"),W.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,m),e(m,u),e(c,b)},d(l){l&&t(c)}}}function Jc(V){let c,v,m,u,b;return u=new Te({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ConformerForXVector
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("hf-internal-testing/wav2vec2-conformer-xvector")
model = Wav2Vec2ConformerForXVector.from_pretrained("hf-internal-testing/wav2vec2-conformer-xvector")

# audio file is decoded on the fly
inputs = feature_extractor(
    [d["array"] for d in dataset[:2]["audio"]], sampling_rate=sampling_rate, return_tensors="pt", padding=True
)
with torch.no_grad():
    embeddings = model(**inputs).embeddings

embeddings = torch.nn.functional.normalize(embeddings, dim=-1).cpu()

# the resulting embeddings can be used for cosine similarity-based retrieval
cosine_sim = torch.nn.CosineSimilarity(dim=-1)
similarity = cosine_sim(embeddings[0], embeddings[1])
threshold = 0.7  # the optimal threshold is dataset-dependent
if similarity < threshold:
    print("Speakers are not the same!")
round(similarity.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, Wav2Vec2ConformerForXVector
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/wav2vec2-conformer-xvector&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2ConformerForXVector.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/wav2vec2-conformer-xvector&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(
<span class="hljs-meta">... </span>    [d[<span class="hljs-string">&quot;array&quot;</span>] <span class="hljs-keyword">for</span> d <span class="hljs-keyword">in</span> dataset[:<span class="hljs-number">2</span>][<span class="hljs-string">&quot;audio&quot;</span>]], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    embeddings = model(**inputs).embeddings

<span class="hljs-meta">&gt;&gt;&gt; </span>embeddings = torch.nn.functional.normalize(embeddings, dim=-<span class="hljs-number">1</span>).cpu()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the resulting embeddings can be used for cosine similarity-based retrieval</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>cosine_sim = torch.nn.CosineSimilarity(dim=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>similarity = cosine_sim(embeddings[<span class="hljs-number">0</span>], embeddings[<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>threshold = <span class="hljs-number">0.7</span>  <span class="hljs-comment"># the optimal threshold is dataset-dependent</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">if</span> similarity &lt; threshold:
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Speakers are not the same!&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(similarity.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">1.0</span>`}}),{c(){c=a("p"),v=r("Example:"),m=p(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=i(c);v=n(h,"Example:"),h.forEach(t),m=f(l),C(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,m,h),y(u,l,h),b=!0},p:$e,i(l){b||(k(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(m),T(u,l)}}}function ed(V){let c,v,m,u,b;return{c(){c=a("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=s(l,"P",{});var h=i(c);v=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(h,"CODE",{});var W=i(m);u=n(W,"Module"),W.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,c,h),e(c,v),e(c,m),e(m,u),e(c,b)},d(l){l&&t(c)}}}function od(V){let c,v,m,u,b;return u=new Te({props:{code:`import torch
from transformers import AutoFeatureExtractor, Wav2Vec2ConformerForPreTraining
from transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer import _compute_mask_indices
from datasets import load_dataset
import soundfile as sf

feature_extractor = AutoFeatureExtractor.from_pretrained(
    "facebook/wav2vec2_conformer-conformer-rel-pos-large"
)
model = Wav2Vec2ConformerForPreTraining.from_pretrained(
    "facebook/wav2vec2_conformer-conformer-rel-pos-large"
)

ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
input_values = feature_extractor(ds[0]["audio"]["array"], return_tensors="pt").input_values  # Batch size 1

# compute masked indices
batch_size, raw_sequence_length = input_values.shape
sequence_length = model._get_feat_extract_output_lengths(raw_sequence_length)
mask_time_indices = _compute_mask_indices((batch_size, sequence_length), mask_prob=0.2, mask_length=2)
mask_time_indices = torch.tensor(mask_time_indices, device=input_values.device, dtype=torch.long)

with torch.no_grad():
    outputs = model(input_values, mask_time_indices=mask_time_indices)

# compute cosine similarity between predicted (=projected_states) and target (=projected_quantized_states)
cosine_sim = torch.cosine_similarity(outputs.projected_states, outputs.projected_quantized_states, dim=-1)

# show that cosine similarity is much higher than random
cosine_sim[mask_time_indices.to(torch.bool)].mean() > 0.5

# for contrastive loss training model should be put into train mode
model = model.train()
loss = model(input_values, mask_time_indices=mask_time_indices).loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, Wav2Vec2ConformerForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer <span class="hljs-keyword">import</span> _compute_mask_indices
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/wav2vec2_conformer-conformer-rel-pos-large&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Wav2Vec2ConformerForPreTraining.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/wav2vec2_conformer-conformer-rel-pos-large&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = feature_extractor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_values  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute masked indices</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>batch_size, raw_sequence_length = input_values.shape
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_length = model._get_feat_extract_output_lengths(raw_sequence_length)
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_time_indices = _compute_mask_indices((batch_size, sequence_length), mask_prob=<span class="hljs-number">0.2</span>, mask_length=<span class="hljs-number">2</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_time_indices = torch.tensor(mask_time_indices, device=input_values.device, dtype=torch.long)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(input_values, mask_time_indices=mask_time_indices)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute cosine similarity between predicted (=projected_states) and target (=projected_quantized_states)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>cosine_sim = torch.cosine_similarity(outputs.projected_states, outputs.projected_quantized_states, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># show that cosine similarity is much higher than random</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>cosine_sim[mask_time_indices.to(torch.<span class="hljs-built_in">bool</span>)].mean() &gt; <span class="hljs-number">0.5</span>
tensor(<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># for contrastive loss training model should be put into train mode</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = model.train()
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_values, mask_time_indices=mask_time_indices).loss`}}),{c(){c=a("p"),v=r("Example:"),m=p(),w(u.$$.fragment)},l(l){c=s(l,"P",{});var h=i(c);v=n(h,"Example:"),h.forEach(t),m=f(l),C(u.$$.fragment,l)},m(l,h){_(l,c,h),e(c,v),_(l,m,h),y(u,l,h),b=!0},p:$e,i(l){b||(k(u.$$.fragment,l),b=!0)},o(l){$(u.$$.fragment,l),b=!1},d(l){l&&t(c),l&&t(m),T(u,l)}}}function td(V){let c,v,m,u,b,l,h,W,Mn,Pr,oe,Ve,Lt,oo,An,It,Sn,Mr,ct,zn,Ar,dt,On,Sr,mt,Rt,Dn,zr,pt,Nn,Or,U,B,Ln,Ht,In,Rn,Bt,Hn,Bn,to,Xn,Un,Zn,Xt,Kn,Qn,ro,Gn,Ut,Yn,Jn,Dr,Z,ea,no,oa,ta,ao,ra,na,Nr,te,We,Zt,so,aa,Kt,sa,Lr,z,io,ia,re,la,ft,ca,da,lo,ma,pa,fa,ne,ha,ht,ua,ga,ut,_a,va,ba,je,Ir,ae,Fe,Qt,co,wa,Gt,Ca,Rr,se,mo,ya,po,ka,Yt,$a,Ta,Hr,ie,fo,Va,ho,Wa,gt,ja,Fa,Br,le,xe,Jt,uo,xa,er,qa,Xr,q,go,Ea,_o,Pa,vo,Ma,Aa,Sa,bo,za,_t,Oa,Da,Na,wo,La,Co,Ia,Ra,Ha,O,yo,Ba,ce,Xa,vt,Ua,Za,or,Ka,Qa,Ga,qe,Ya,Ee,Ur,de,Pe,tr,ko,Ja,rr,es,Zr,E,$o,os,me,ts,nr,rs,ns,To,as,ss,is,Vo,ls,bt,cs,ds,ms,Wo,ps,jo,fs,hs,us,A,Fo,gs,pe,_s,wt,vs,bs,ar,ws,Cs,ys,Me,ks,Ae,$s,Se,Kr,fe,ze,sr,xo,Ts,ir,Vs,Qr,j,qo,Ws,lr,js,Fs,Eo,xs,Po,qs,Es,Ps,Mo,Ms,Ct,As,Ss,zs,Ao,Os,So,Ds,Ns,Ls,S,zo,Is,he,Rs,yt,Hs,Bs,cr,Xs,Us,Zs,Oe,Ks,De,Qs,Ne,Gr,ue,Le,dr,Oo,Gs,mr,Ys,Yr,F,Do,Js,pr,ei,oi,No,ti,Lo,ri,ni,ai,Io,si,kt,ii,li,ci,Ro,di,Ho,mi,pi,fi,D,Bo,hi,ge,ui,$t,gi,_i,fr,vi,bi,wi,Ie,Ci,Re,Jr,_e,He,hr,Xo,yi,ur,ki,en,x,Uo,$i,gr,Ti,Vi,Zo,Wi,Ko,ji,Fi,xi,Qo,qi,Tt,Ei,Pi,Mi,Go,Ai,Yo,Si,zi,Oi,N,Jo,Di,ve,Ni,Vt,Li,Ii,_r,Ri,Hi,Bi,Be,Xi,Xe,on,be,Ue,vr,et,Ui,br,Zi,tn,P,ot,Ki,we,Qi,wr,Gi,Yi,tt,Ji,el,ol,rt,tl,Wt,rl,nl,al,nt,sl,at,il,ll,cl,L,st,dl,Ce,ml,jt,pl,fl,Cr,hl,ul,gl,Ze,_l,Ke,rn;return l=new ee({}),oo=new ee({}),so=new ee({}),io=new M({props:{name:"class transformers.Wav2Vec2ConformerConfig",anchor:"transformers.Wav2Vec2ConformerConfig",parameters:[{name:"vocab_size",val:" = None"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"feat_quantizer_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"do_stable_layer_norm",val:" = False"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"num_codevectors_per_group",val:" = 320"},{name:"num_codevector_groups",val:" = 2"},{name:"contrastive_logits_temperature",val:" = 0.1"},{name:"num_negatives",val:" = 100"},{name:"codevector_dim",val:" = 256"},{name:"proj_codevector_dim",val:" = 256"},{name:"diversity_loss_weight",val:" = 0.1"},{name:"ctc_loss_reduction",val:" = 'sum'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"tdnn_dim",val:" = (512, 512, 512, 512, 1500)"},{name:"tdnn_kernel",val:" = (5, 3, 3, 1, 1)"},{name:"tdnn_dilation",val:" = (1, 2, 3, 1, 1)"},{name:"xvector_output_dim",val:" = 512"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"add_adapter",val:" = False"},{name:"adapter_kernel_size",val:" = 3"},{name:"adapter_stride",val:" = 2"},{name:"num_adapter_layers",val:" = 3"},{name:"output_hidden_size",val:" = None"},{name:"position_embeddings_type",val:" = 'relative'"},{name:"rotary_embedding_base",val:" = 10000"},{name:"max_source_positions",val:" = 5000"},{name:"conv_depthwise_kernel_size",val:" = 31"},{name:"conformer_conv_dropout",val:" = 0.1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Vocabulary size of the Wav2Vec2Conformer model. Defines the number of different tokens that can be
represented by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerModel">Wav2Vec2ConformerModel</a> or
<code>TFWav2Vec2ConformerModel</code>. Vocabulary size of the model. Defines the different tokens that can be
represented by the <em>inputs_ids</em> passed to the forward method of <a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerModel">Wav2Vec2ConformerModel</a>.`,name:"vocab_size"},{anchor:"transformers.Wav2Vec2ConformerConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.Wav2Vec2ConformerConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.Wav2Vec2ConformerConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.Wav2Vec2ConformerConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.Wav2Vec2ConformerConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.Wav2Vec2ConformerConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.Wav2Vec2ConformerConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.Wav2Vec2ConformerConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForCTC">Wav2Vec2ConformerForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.Wav2Vec2ConformerConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.Wav2Vec2ConformerConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.Wav2Vec2ConformerConfig.feat_extract_norm",description:`<strong>feat_extract_norm</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;group&quot;</code>) &#x2014;
The norm to be applied to 1D convolutional layers in feature encoder. One of <code>&quot;group&quot;</code> for group
normalization of only the first 1D convolutional layer or <code>&quot;layer&quot;</code> for layer normalization of all 1D
convolutional layers.`,name:"feat_extract_norm"},{anchor:"transformers.Wav2Vec2ConformerConfig.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature encoder.`,name:"feat_proj_dropout"},{anchor:"transformers.Wav2Vec2ConformerConfig.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.Wav2Vec2ConformerConfig.feat_quantizer_dropout",description:`<strong>feat_quantizer_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for quantized feature encoder states.`,name:"feat_quantizer_dropout"},{anchor:"transformers.Wav2Vec2ConformerConfig.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature encoder. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.Wav2Vec2ConformerConfig.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 2, 2, 2, 2, 2)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature encoder. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.Wav2Vec2ConformerConfig.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 3, 3, 3, 3, 3)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature encoder. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the length of
<em>conv_dim</em>.`,name:"conv_kernel"},{anchor:"transformers.Wav2Vec2ConformerConfig.conv_bias",description:`<strong>conv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the 1D convolutional layers have a bias.`,name:"conv_bias"},{anchor:"transformers.Wav2Vec2ConformerConfig.num_conv_pos_embeddings",description:`<strong>num_conv_pos_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Number of convolutional positional embeddings. Defines the kernel size of 1D convolutional positional
embeddings layer.`,name:"num_conv_pos_embeddings"},{anchor:"transformers.Wav2Vec2ConformerConfig.num_conv_pos_embedding_groups",description:`<strong>num_conv_pos_embedding_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of groups of 1D convolutional positional embeddings layer.`,name:"num_conv_pos_embedding_groups"},{anchor:"transformers.Wav2Vec2ConformerConfig.do_stable_layer_norm",description:`<strong>do_stable_layer_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply <em>stable</em> layer norm architecture of the Transformer encoder. <code>do_stable_layer_norm is True</code> corresponds to applying layer norm before the attention layer, whereas <code>do_stable_layer_norm is False</code> corresponds to applying layer norm after the attention layer.`,name:"do_stable_layer_norm"},{anchor:"transformers.Wav2Vec2ConformerConfig.apply_spec_augment",description:`<strong>apply_spec_augment</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply <em>SpecAugment</em> data augmentation to the outputs of the feature encoder. For reference see
<a href="https://arxiv.org/abs/1904.08779" rel="nofollow">SpecAugment: A Simple Data Augmentation Method for Automatic Speech
Recognition</a>.`,name:"apply_spec_augment"},{anchor:"transformers.Wav2Vec2ConformerConfig.mask_time_prob",description:`<strong>mask_time_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.05) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the time axis which will be masked. The masking
procecure generates &#x201D;mask_time_prob<em>len(time_axis)/mask_time_length&#x201D; independent masks over the axis. If
reasoning from the propability of each feature vector to be chosen as the start of the vector span to be
masked, </em>mask_time_prob<em> should be \`prob_vector_start</em>mask_time_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is True\`.`,name:"mask_time_prob"},{anchor:"transformers.Wav2Vec2ConformerConfig.mask_time_length",description:`<strong>mask_time_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the time axis.`,name:"mask_time_length"},{anchor:"transformers.Wav2Vec2ConformerConfig.mask_time_min_masks",description:`<strong>mask_time_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 2), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the time axis, each time step,
irrespectively of <code>mask_feature_prob</code>. Only relevant if &#x201D;mask_time_prob*len(time_axis)/mask_time_length &lt;
mask_time_min_masks&#x201D;`,name:"mask_time_min_masks"},{anchor:"transformers.Wav2Vec2ConformerConfig.mask_feature_prob",description:`<strong>mask_feature_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the feature axis which will be masked. The
masking procecure generates &#x201D;mask_feature_prob<em>len(feature_axis)/mask_time_length&#x201D; independent masks over
the axis. If reasoning from the propability of each feature vector to be chosen as the start of the vector
span to be masked, </em>mask_feature_prob<em> should be \`prob_vector_start</em>mask_feature_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is
True\`.`,name:"mask_feature_prob"},{anchor:"transformers.Wav2Vec2ConformerConfig.mask_feature_length",description:`<strong>mask_feature_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the feature axis.`,name:"mask_feature_length"},{anchor:"transformers.Wav2Vec2ConformerConfig.mask_feature_min_masks",description:`<strong>mask_feature_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 0), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the feature axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_feature_prob*len(feature_axis)/mask_feature_length &lt; mask_feature_min_masks&#x201D;`,name:"mask_feature_min_masks"},{anchor:"transformers.Wav2Vec2ConformerConfig.num_codevectors_per_group",description:`<strong>num_codevectors_per_group</strong> (<code>int</code>, <em>optional</em>, defaults to 320) &#x2014;
Number of entries in each quantization codebook (group).`,name:"num_codevectors_per_group"},{anchor:"transformers.Wav2Vec2ConformerConfig.num_codevector_groups",description:`<strong>num_codevector_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of codevector groups for product codevector quantization.`,name:"num_codevector_groups"},{anchor:"transformers.Wav2Vec2ConformerConfig.contrastive_logits_temperature",description:`<strong>contrastive_logits_temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The temperature <em>kappa</em> in the contrastive loss.`,name:"contrastive_logits_temperature"},{anchor:"transformers.Wav2Vec2ConformerConfig.feat_quantizer_dropout",description:`<strong>feat_quantizer_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for the output of the feature encoder that&#x2019;s used by the quantizer.`,name:"feat_quantizer_dropout"},{anchor:"transformers.Wav2Vec2ConformerConfig.num_negatives",description:`<strong>num_negatives</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Number of negative samples for the contrastive loss.`,name:"num_negatives"},{anchor:"transformers.Wav2Vec2ConformerConfig.codevector_dim",description:`<strong>codevector_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the quantized feature vectors.`,name:"codevector_dim"},{anchor:"transformers.Wav2Vec2ConformerConfig.proj_codevector_dim",description:`<strong>proj_codevector_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the final projection of both the quantized and the transformer features.`,name:"proj_codevector_dim"},{anchor:"transformers.Wav2Vec2ConformerConfig.diversity_loss_weight",description:`<strong>diversity_loss_weight</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The weight of the codebook diversity loss component.`,name:"diversity_loss_weight"},{anchor:"transformers.Wav2Vec2ConformerConfig.ctc_loss_reduction",description:`<strong>ctc_loss_reduction</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;sum&quot;</code>) &#x2014;
Specifies the reduction to apply to the output of <code>torch.nn.CTCLoss</code>. Only relevant when training an
instance of <a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForCTC">Wav2Vec2ConformerForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.Wav2Vec2ConformerConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForCTC">Wav2Vec2ConformerForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.Wav2Vec2ConformerConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForSequenceClassification">Wav2Vec2ConformerForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.Wav2Vec2ConformerConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"},{anchor:"transformers.Wav2Vec2ConformerConfig.tdnn_dim",description:`<strong>tdnn_dim</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 1500)</code>) &#x2014;
A tuple of integers defining the number of output channels of each 1D convolutional layer in the <em>TDNN</em>
module of the <em>XVector</em> model. The length of <em>tdnn_dim</em> defines the number of <em>TDNN</em> layers.`,name:"tdnn_dim"},{anchor:"transformers.Wav2Vec2ConformerConfig.tdnn_kernel",description:`<strong>tdnn_kernel</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(5, 3, 3, 1, 1)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the <em>TDNN</em> module of the
<em>XVector</em> model. The length of <em>tdnn_kernel</em> has to match the length of <em>tdnn_dim</em>.`,name:"tdnn_kernel"},{anchor:"transformers.Wav2Vec2ConformerConfig.tdnn_dilation",description:`<strong>tdnn_dilation</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(1, 2, 3, 1, 1)</code>) &#x2014;
A tuple of integers defining the dilation factor of each 1D convolutional layer in <em>TDNN</em> module of the
<em>XVector</em> model. The length of <em>tdnn_dilation</em> has to match the length of <em>tdnn_dim</em>.`,name:"tdnn_dilation"},{anchor:"transformers.Wav2Vec2ConformerConfig.xvector_output_dim",description:`<strong>xvector_output_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the <em>XVector</em> embedding vectors.`,name:"xvector_output_dim"},{anchor:"transformers.Wav2Vec2ConformerConfig.add_adapter",description:`<strong>add_adapter</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether a convolutional network should be stacked on top of the Wav2Vec2Conformer Encoder. Can be very
useful for warm-starting Wav2Vec2Conformer for SpeechEncoderDecoder models.`,name:"add_adapter"},{anchor:"transformers.Wav2Vec2ConformerConfig.adapter_kernel_size",description:`<strong>adapter_kernel_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Kernel size of the convolutional layers in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"adapter_kernel_size"},{anchor:"transformers.Wav2Vec2ConformerConfig.adapter_stride",description:`<strong>adapter_stride</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Stride of the convolutional layers in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"adapter_stride"},{anchor:"transformers.Wav2Vec2ConformerConfig.num_adapter_layers",description:`<strong>num_adapter_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Number of convolutional layers that should be used in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"num_adapter_layers"},{anchor:"transformers.Wav2Vec2ConformerConfig.output_hidden_size",description:`<strong>output_hidden_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Dimensionality of the encoder output layer. If not defined, this defaults to <em>hidden-size</em>. Only relevant
if <code>add_adapter is True</code>.`,name:"output_hidden_size"},{anchor:"transformers.Wav2Vec2ConformerConfig.position_embeddings_type",description:`<strong>position_embeddings_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;relative&quot;</code>) &#x2014;
Can be specified to <code>relative</code> or <code>rotary</code> for relative or rotary position embeddings respectively. If left
<code>None</code> no relative position embedding is applied.`,name:"position_embeddings_type"},{anchor:"transformers.Wav2Vec2ConformerConfig.rotary_embedding_base",description:`<strong>rotary_embedding_base</strong> (<code>int</code>, <em>optional</em>, defaults to 10000) &#x2014;
If <code>&quot;rotary&quot;</code> position embeddings are used, defines the size of the embedding base.`,name:"rotary_embedding_base"},{anchor:"transformers.Wav2Vec2ConformerConfig.max_source_positions",description:`<strong>max_source_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 5000) &#x2014;
if <code>&quot;relative&quot;</code> position embeddings are used, defines the maximum source input positions.`,name:"max_source_positions"},{anchor:"transformers.Wav2Vec2ConformerConfig.conv_depthwise_kernel_size",description:`<strong>conv_depthwise_kernel_size</strong> (<code>int</code>, defaults to 31) &#x2014;
Kernel size of convolutional depthwise 1D layer in Conformer blocks.`,name:"conv_depthwise_kernel_size"},{anchor:"transformers.Wav2Vec2ConformerConfig.conformer_conv_dropout",description:`<strong>conformer_conv_dropout</strong> (<code>float</code>, defaults to 0.1) &#x2014;
The dropout probability for all convolutional layers in Conformer blocks.`,name:"conformer_conv_dropout"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/wav2vec2_conformer/configuration_wav2vec2_conformer.py#L31"}}),je=new ke({props:{anchor:"transformers.Wav2Vec2ConformerConfig.example",$$slots:{default:[Lc]},$$scope:{ctx:V}}}),co=new ee({}),mo=new M({props:{name:"class transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerBaseModelOutput",anchor:"transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"extract_features",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerBaseModelOutput.extract_features",description:`<strong>extract_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, conv_dim[-1])</code>) &#x2014;
Sequence of extracted feature vectors of the last convolutional layer of the model.`,name:"extract_features"},{anchor:"transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L84"}}),fo=new M({props:{name:"class transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput",anchor:"transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"projected_states",val:": FloatTensor = None"},{name:"projected_quantized_states",val:": FloatTensor = None"},{name:"codevector_perplexity",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"contrastive_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"diversity_loss",val:": typing.Optional[torch.FloatTensor] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>sample_negative_indices</code> are passed, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the contrastive loss (L_m) and the diversity loss (L_d) as stated in the <a href="https://arxiv.org/pdf/2006.11477.pdf" rel="nofollow">official
paper</a> . (classification) loss.`,name:"loss"},{anchor:"transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput.projected_states",description:`<strong>projected_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) &#x2014;
Hidden-states of the model projected to <em>config.proj_codevector_dim</em> that can be used to predict the masked
projected quantized states.`,name:"projected_states"},{anchor:"transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput.projected_quantized_states",description:`<strong>projected_quantized_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) &#x2014;
Quantized extracted feature vectors projected to <em>config.proj_codevector_dim</em> representing the positive
target vectors for contrastive loss.`,name:"projected_quantized_states"},{anchor:"transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"},{anchor:"transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput.contrastive_loss",description:`<strong>contrastive_loss</strong> (<em>optional</em>, returned when <code>sample_negative_indices</code> are passed, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
The contrastive loss (L_m) as stated in the <a href="https://arxiv.org/pdf/2006.11477.pdf" rel="nofollow">official paper</a> .`,name:"contrastive_loss"},{anchor:"transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput.diversity_loss",description:`<strong>diversity_loss</strong> (<em>optional</em>, returned when <code>sample_negative_indices</code> are passed, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
The diversity loss (L_d) as stated in the <a href="https://arxiv.org/pdf/2006.11477.pdf" rel="nofollow">official paper</a> .`,name:"diversity_loss"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L114"}}),uo=new ee({}),go=new M({props:{name:"class transformers.Wav2Vec2ConformerModel",anchor:"transformers.Wav2Vec2ConformerModel",parameters:[{name:"config",val:": Wav2Vec2ConformerConfig"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig">Wav2Vec2ConformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1320"}}),yo=new M({props:{name:"forward",anchor:"transformers.Wav2Vec2ConformerModel.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ConformerModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-conformer-large-rel-pos" rel="nofollow">wav2vec2_conformer-base</a>,
<code>attention_mask</code> should <strong>not</strong> be passed to avoid degraded performance when doing batched inference. For
such models <code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware
that these models also yield slightly different results depending on whether <code>input_values</code> is padded or
not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Wav2Vec2ConformerModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Wav2Vec2ConformerModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Wav2Vec2ConformerModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1403",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerBaseModelOutput"
>transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig"
>Wav2Vec2ConformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>extract_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, conv_dim[-1])</code>) \u2014 Sequence of extracted feature vectors of the last convolutional layer of the model.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerBaseModelOutput"
>transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qe=new Nt({props:{$$slots:{default:[Ic]},$$scope:{ctx:V}}}),Ee=new ke({props:{anchor:"transformers.Wav2Vec2ConformerModel.forward.example",$$slots:{default:[Rc]},$$scope:{ctx:V}}}),ko=new ee({}),$o=new M({props:{name:"class transformers.Wav2Vec2ConformerForCTC",anchor:"transformers.Wav2Vec2ConformerForCTC",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig">Wav2Vec2ConformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1689"}}),Fo=new M({props:{name:"forward",anchor:"transformers.Wav2Vec2ConformerForCTC.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ConformerForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-conformer-large-rel-pos" rel="nofollow">wav2vec2_conformer-base</a>,
<code>attention_mask</code> should <strong>not</strong> be passed to avoid degraded performance when doing batched inference. For
such models <code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware
that these models also yield slightly different results depending on whether <code>input_values</code> is padded or
not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Wav2Vec2ConformerForCTC.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Wav2Vec2ConformerForCTC.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Wav2Vec2ConformerForCTC.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ConformerForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1730",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig"
>Wav2Vec2ConformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Me=new Nt({props:{$$slots:{default:[Hc]},$$scope:{ctx:V}}}),Ae=new ke({props:{anchor:"transformers.Wav2Vec2ConformerForCTC.forward.example",$$slots:{default:[Bc]},$$scope:{ctx:V}}}),Se=new ke({props:{anchor:"transformers.Wav2Vec2ConformerForCTC.forward.example-2",$$slots:{default:[Xc]},$$scope:{ctx:V}}}),xo=new ee({}),qo=new M({props:{name:"class transformers.Wav2Vec2ConformerForSequenceClassification",anchor:"transformers.Wav2Vec2ConformerForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig">Wav2Vec2ConformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1820"}}),zo=new M({props:{name:"forward",anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-conformer-large-rel-pos" rel="nofollow">wav2vec2_conformer-base</a>,
<code>attention_mask</code> should <strong>not</strong> be passed to avoid degraded performance when doing batched inference. For
such models <code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware
that these models also yield slightly different results depending on whether <code>input_values</code> is padded or
not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1865",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig"
>Wav2Vec2ConformerConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oe=new Nt({props:{$$slots:{default:[Uc]},$$scope:{ctx:V}}}),De=new ke({props:{anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.forward.example",$$slots:{default:[Zc]},$$scope:{ctx:V}}}),Ne=new ke({props:{anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.forward.example-2",$$slots:{default:[Kc]},$$scope:{ctx:V}}}),Oo=new ee({}),Do=new M({props:{name:"class transformers.Wav2Vec2ConformerForAudioFrameClassification",anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig">Wav2Vec2ConformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1944"}}),Bo=new M({props:{name:"forward",anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-conformer-large-rel-pos" rel="nofollow">wav2vec2_conformer-base</a>,
<code>attention_mask</code> should <strong>not</strong> be passed to avoid degraded performance when doing batched inference. For
such models <code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware
that these models also yield slightly different results depending on whether <code>input_values</code> is padded or
not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1987",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig"
>Wav2Vec2ConformerConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16812/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ie=new Nt({props:{$$slots:{default:[Qc]},$$scope:{ctx:V}}}),Re=new ke({props:{anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification.forward.example",$$slots:{default:[Gc]},$$scope:{ctx:V}}}),Xo=new ee({}),Uo=new M({props:{name:"class transformers.Wav2Vec2ConformerForXVector",anchor:"transformers.Wav2Vec2ConformerForXVector",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForXVector.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig">Wav2Vec2ConformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L2102"}}),Jo=new M({props:{name:"forward",anchor:"transformers.Wav2Vec2ConformerForXVector.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForXVector.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ConformerForXVector.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-conformer-large-rel-pos" rel="nofollow">wav2vec2_conformer-base</a>,
<code>attention_mask</code> should <strong>not</strong> be passed to avoid degraded performance when doing batched inference. For
such models <code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware
that these models also yield slightly different results depending on whether <code>input_values</code> is padded or
not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Wav2Vec2ConformerForXVector.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Wav2Vec2ConformerForXVector.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Wav2Vec2ConformerForXVector.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ConformerForXVector.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L2164",returnDescription:`
<p>A <code>transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.XVectorOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig"
>Wav2Vec2ConformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.xvector_output_dim)</code>) \u2014 Classification hidden states before AMSoftmax.</p>
</li>
<li>
<p><strong>embeddings</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.xvector_output_dim)</code>) \u2014 Utterance embeddings used for vector similarity-based retrieval.</p>
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
</ul>
`,returnType:`
<p><code>transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.XVectorOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Be=new Nt({props:{$$slots:{default:[Yc]},$$scope:{ctx:V}}}),Xe=new ke({props:{anchor:"transformers.Wav2Vec2ConformerForXVector.forward.example",$$slots:{default:[Jc]},$$scope:{ctx:V}}}),et=new ee({}),ot=new M({props:{name:"class transformers.Wav2Vec2ConformerForPreTraining",anchor:"transformers.Wav2Vec2ConformerForPreTraining",parameters:[{name:"config",val:": Wav2Vec2ConformerConfig"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig">Wav2Vec2ConformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1469"}}),st=new M({props:{name:"forward",anchor:"transformers.Wav2Vec2ConformerForPreTraining.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.BoolTensor] = None"},{name:"sampled_negative_indices",val:": typing.Optional[torch.BoolTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForPreTraining.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_16812/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ConformerForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, such as
<a href="https://huggingface.co/facebook/wav2vec2-conformer-large-rel-pos" rel="nofollow">wav2vec2_conformer-base</a>,
<code>attention_mask</code> should <strong>not</strong> be passed to avoid degraded performance when doing batched inference. For
such models <code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware
that these models also yield slightly different results depending on whether <code>input_values</code> is padded or
not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Wav2Vec2ConformerForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Wav2Vec2ConformerForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Wav2Vec2ConformerForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16812/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ConformerForPreTraining.forward.mask_time_indices",description:`<strong>mask_time_indices</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices to mask extracted features for contrastive loss. When in training mode, model learns to predict
masked extracted features in <em>config.proj_codevector_dim</em> space.`,name:"mask_time_indices"},{anchor:"transformers.Wav2Vec2ConformerForPreTraining.forward.sampled_negative_indices",description:`<strong>sampled_negative_indices</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length, num_negatives)</code>, <em>optional</em>) &#x2014;
Indices indicating which quantized target vectors are used as negative sampled vectors in contrastive loss.
Required input for pre-training.`,name:"sampled_negative_indices"}],source:"https://github.com/huggingface/transformers/blob/vr_16812/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1530",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput"
>transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig"
>Wav2Vec2ConformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>sample_negative_indices</code> are passed, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 Total loss as the sum of the contrastive loss (L_m) and the diversity loss (L_d) as stated in the <a
  href="https://arxiv.org/pdf/2006.11477.pdf"
  rel="nofollow"
>official
paper</a> . (classification) loss.</p>
</li>
<li>
<p><strong>projected_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) \u2014 Hidden-states of the model projected to <em>config.proj_codevector_dim</em> that can be used to predict the masked
projected quantized states.</p>
</li>
<li>
<p><strong>projected_quantized_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) \u2014 Quantized extracted feature vectors projected to <em>config.proj_codevector_dim</em> representing the positive
target vectors for contrastive loss.</p>
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
<p><strong>contrastive_loss</strong> (<em>optional</em>, returned when <code>sample_negative_indices</code> are passed, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 The contrastive loss (L_m) as stated in the <a
  href="https://arxiv.org/pdf/2006.11477.pdf"
  rel="nofollow"
>official paper</a> .</p>
</li>
<li>
<p><strong>diversity_loss</strong> (<em>optional</em>, returned when <code>sample_negative_indices</code> are passed, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 The diversity loss (L_d) as stated in the <a
  href="https://arxiv.org/pdf/2006.11477.pdf"
  rel="nofollow"
>official paper</a> .</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput"
>transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ze=new Nt({props:{$$slots:{default:[ed]},$$scope:{ctx:V}}}),Ke=new ke({props:{anchor:"transformers.Wav2Vec2ConformerForPreTraining.forward.example",$$slots:{default:[od]},$$scope:{ctx:V}}}),{c(){c=a("meta"),v=p(),m=a("h1"),u=a("a"),b=a("span"),w(l.$$.fragment),h=p(),W=a("span"),Mn=r("Wav2Vec2Conformer"),Pr=p(),oe=a("h2"),Ve=a("a"),Lt=a("span"),w(oo.$$.fragment),An=p(),It=a("span"),Sn=r("Overview"),Mr=p(),ct=a("p"),zn=r(`The Wav2Vec2Conformer model was proposed in [<INSERT PAPER NAME HERE>](<INSERT PAPER LINK HERE>) by <INSERT AUTHORS HERE>.
<INSERT SHORT SUMMARY HERE>`),Ar=p(),dt=a("p"),On=r("The abstract from the paper is the following:"),Sr=p(),mt=a("p"),Rt=a("em"),Dn=r("<INSERT PAPER ABSTRACT HERE>"),zr=p(),pt=a("p"),Nn=r("Tips:"),Or=p(),U=a("ul"),B=a("li"),Ln=r("Wav2Vec2Conformer follows the same architecture as Wav2Vec2, but replaces the "),Ht=a("em"),In=r("Attention"),Rn=r("-block with a "),Bt=a("em"),Hn=r("Conformer"),Bn=r(`-block
as introduced in `),to=a("a"),Xn=r("Conformer: Convolution-augmented Transformer for Speech Recognition"),Un=r("."),Zn=p(),Xt=a("li"),Kn=r("Wav2Vec2Conformer uses the same tokenizer and feature extractor as Wav2Vec2."),Qn=p(),ro=a("li"),Gn=r(`Wav2Vec2Conformer can use either no relative position embeddings, Transformer-XL-like position embeddings, or
rotary position embeddings by setting the correct `),Ut=a("code"),Yn=r("config.position_embeddings_type"),Jn=r("."),Dr=p(),Z=a("p"),ea=r("This model was contributed by "),no=a("a"),oa=r("patrickvonplaten"),ta=r(`.
The original code can be found `),ao=a("a"),ra=r("here"),na=r("."),Nr=p(),te=a("h2"),We=a("a"),Zt=a("span"),w(so.$$.fragment),aa=p(),Kt=a("span"),sa=r("Wav2Vec2ConformerConfig"),Lr=p(),z=a("div"),w(io.$$.fragment),ia=p(),re=a("p"),la=r("This is the configuration class to store the configuration of a "),ft=a("a"),ca=r("Wav2Vec2ConformerModel"),da=r(`. It is used to
instantiate an Wav2Vec2Conformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Wav2Vec2Conformer
`),lo=a("a"),ma=r("facebook/wav2vec2-conformer-large-rel-pos"),pa=r(`
architecture.`),fa=p(),ne=a("p"),ha=r("Configuration objects inherit from "),ht=a("a"),ua=r("PretrainedConfig"),ga=r(` and can be used to control the model outputs. Read the
documentation from `),ut=a("a"),_a=r("PretrainedConfig"),va=r(" for more information."),ba=p(),w(je.$$.fragment),Ir=p(),ae=a("h2"),Fe=a("a"),Qt=a("span"),w(co.$$.fragment),wa=p(),Gt=a("span"),Ca=r("Wav2Vec2Conformer specific outputs"),Rr=p(),se=a("div"),w(mo.$$.fragment),ya=p(),po=a("p"),ka=r("Output type of "),Yt=a("code"),$a=r("Wav2Vec2ConformerBaseModelOutput"),Ta=r(", with potential hidden states and attentions."),Hr=p(),ie=a("div"),w(fo.$$.fragment),Va=p(),ho=a("p"),Wa=r("Output type of "),gt=a("a"),ja=r("Wav2Vec2ConformerForPreTraining"),Fa=r(", with potential hidden states and attentions."),Br=p(),le=a("h2"),xe=a("a"),Jt=a("span"),w(uo.$$.fragment),xa=p(),er=a("span"),qa=r("Wav2Vec2ConformerModel"),Xr=p(),q=a("div"),w(go.$$.fragment),Ea=p(),_o=a("p"),Pa=r(`The bare Wav2Vec2Conformer Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2Conformer was proposed in `),vo=a("a"),Ma=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Aa=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Sa=p(),bo=a("p"),za=r("This model inherits from "),_t=a("a"),Oa=r("PreTrainedModel"),Da=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Na=p(),wo=a("p"),La=r("This model is a PyTorch "),Co=a("a"),Ia=r("nn.Module"),Ra=r(` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),Ha=p(),O=a("div"),w(yo.$$.fragment),Ba=p(),ce=a("p"),Xa=r("The "),vt=a("a"),Ua=r("Wav2Vec2ConformerModel"),Za=r(" forward method, overrides the "),or=a("code"),Ka=r("__call__"),Qa=r(" special method."),Ga=p(),w(qe.$$.fragment),Ya=p(),w(Ee.$$.fragment),Ur=p(),de=a("h2"),Pe=a("a"),tr=a("span"),w(ko.$$.fragment),Ja=p(),rr=a("span"),es=r("Wav2Vec2ConformerForCTC"),Zr=p(),E=a("div"),w($o.$$.fragment),os=p(),me=a("p"),ts=r("Wav2Vec2Conformer Model with a "),nr=a("code"),rs=r("language modeling"),ns=r(` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2Conformer was proposed in `),To=a("a"),as=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),ss=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),is=p(),Vo=a("p"),ls=r("This model inherits from "),bt=a("a"),cs=r("PreTrainedModel"),ds=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ms=p(),Wo=a("p"),ps=r("This model is a PyTorch "),jo=a("a"),fs=r("nn.Module"),hs=r(` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),us=p(),A=a("div"),w(Fo.$$.fragment),gs=p(),pe=a("p"),_s=r("The "),wt=a("a"),vs=r("Wav2Vec2ConformerForCTC"),bs=r(" forward method, overrides the "),ar=a("code"),ws=r("__call__"),Cs=r(" special method."),ys=p(),w(Me.$$.fragment),ks=p(),w(Ae.$$.fragment),$s=p(),w(Se.$$.fragment),Kr=p(),fe=a("h2"),ze=a("a"),sr=a("span"),w(xo.$$.fragment),Ts=p(),ir=a("span"),Vs=r("Wav2Vec2ConformerForSequenceClassification"),Qr=p(),j=a("div"),w(qo.$$.fragment),Ws=p(),lr=a("p"),js=r(`Wav2Vec2Conformer Model with a sequence classification head on top (a linear layer over the pooled output) for
tasks like SUPERB Keyword Spotting.`),Fs=p(),Eo=a("p"),xs=r("Wav2Vec2Conformer was proposed in "),Po=a("a"),qs=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Es=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Ps=p(),Mo=a("p"),Ms=r("This model inherits from "),Ct=a("a"),As=r("PreTrainedModel"),Ss=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),zs=p(),Ao=a("p"),Os=r("This model is a PyTorch "),So=a("a"),Ds=r("nn.Module"),Ns=r(` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),Ls=p(),S=a("div"),w(zo.$$.fragment),Is=p(),he=a("p"),Rs=r("The "),yt=a("a"),Hs=r("Wav2Vec2ConformerForSequenceClassification"),Bs=r(" forward method, overrides the "),cr=a("code"),Xs=r("__call__"),Us=r(" special method."),Zs=p(),w(Oe.$$.fragment),Ks=p(),w(De.$$.fragment),Qs=p(),w(Ne.$$.fragment),Gr=p(),ue=a("h2"),Le=a("a"),dr=a("span"),w(Oo.$$.fragment),Gs=p(),mr=a("span"),Ys=r("Wav2Vec2ConformerForAudioFrameClassification"),Yr=p(),F=a("div"),w(Do.$$.fragment),Js=p(),pr=a("p"),ei=r("Wav2Vec2Conformer Model with a frame classification head on top for tasks like Speaker Diarization."),oi=p(),No=a("p"),ti=r("Wav2Vec2Conformer was proposed in "),Lo=a("a"),ri=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),ni=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),ai=p(),Io=a("p"),si=r("This model inherits from "),kt=a("a"),ii=r("PreTrainedModel"),li=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ci=p(),Ro=a("p"),di=r("This model is a PyTorch "),Ho=a("a"),mi=r("nn.Module"),pi=r(` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),fi=p(),D=a("div"),w(Bo.$$.fragment),hi=p(),ge=a("p"),ui=r("The "),$t=a("a"),gi=r("Wav2Vec2ConformerForAudioFrameClassification"),_i=r(" forward method, overrides the "),fr=a("code"),vi=r("__call__"),bi=r(" special method."),wi=p(),w(Ie.$$.fragment),Ci=p(),w(Re.$$.fragment),Jr=p(),_e=a("h2"),He=a("a"),hr=a("span"),w(Xo.$$.fragment),yi=p(),ur=a("span"),ki=r("Wav2Vec2ConformerForXVector"),en=p(),x=a("div"),w(Uo.$$.fragment),$i=p(),gr=a("p"),Ti=r("Wav2Vec2Conformer Model with an XVector feature extraction head on top for tasks like Speaker Verification."),Vi=p(),Zo=a("p"),Wi=r("Wav2Vec2Conformer was proposed in "),Ko=a("a"),ji=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Fi=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),xi=p(),Qo=a("p"),qi=r("This model inherits from "),Tt=a("a"),Ei=r("PreTrainedModel"),Pi=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Mi=p(),Go=a("p"),Ai=r("This model is a PyTorch "),Yo=a("a"),Si=r("nn.Module"),zi=r(` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),Oi=p(),N=a("div"),w(Jo.$$.fragment),Di=p(),ve=a("p"),Ni=r("The "),Vt=a("a"),Li=r("Wav2Vec2ConformerForXVector"),Ii=r(" forward method, overrides the "),_r=a("code"),Ri=r("__call__"),Hi=r(" special method."),Bi=p(),w(Be.$$.fragment),Xi=p(),w(Xe.$$.fragment),on=p(),be=a("h2"),Ue=a("a"),vr=a("span"),w(et.$$.fragment),Ui=p(),br=a("span"),Zi=r("Wav2Vec2ConformerForPreTraining"),tn=p(),P=a("div"),w(ot.$$.fragment),Ki=p(),we=a("p"),Qi=r("Wav2Vec2Conformer Model with a quantizer and "),wr=a("code"),Gi=r("VQ"),Yi=r(` head on top.
Wav2Vec2Conformer was proposed in `),tt=a("a"),Ji=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),el=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),ol=p(),rt=a("p"),tl=r("This model inherits from "),Wt=a("a"),rl=r("PreTrainedModel"),nl=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),al=p(),nt=a("p"),sl=r("This model is a PyTorch "),at=a("a"),il=r("nn.Module"),ll=r(` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),cl=p(),L=a("div"),w(st.$$.fragment),dl=p(),Ce=a("p"),ml=r("The "),jt=a("a"),pl=r("Wav2Vec2ConformerForPreTraining"),fl=r(" forward method, overrides the "),Cr=a("code"),hl=r("__call__"),ul=r(" special method."),gl=p(),w(Ze.$$.fragment),_l=p(),w(Ke.$$.fragment),this.h()},l(o){const g=Dc('[data-svelte="svelte-1phssyn"]',document.head);c=s(g,"META",{name:!0,content:!0}),g.forEach(t),v=f(o),m=s(o,"H1",{class:!0});var it=i(m);u=s(it,"A",{id:!0,class:!0,href:!0});var yr=i(u);b=s(yr,"SPAN",{});var kr=i(b);C(l.$$.fragment,kr),kr.forEach(t),yr.forEach(t),h=f(it),W=s(it,"SPAN",{});var $r=i(W);Mn=n($r,"Wav2Vec2Conformer"),$r.forEach(t),it.forEach(t),Pr=f(o),oe=s(o,"H2",{class:!0});var lt=i(oe);Ve=s(lt,"A",{id:!0,class:!0,href:!0});var Tr=i(Ve);Lt=s(Tr,"SPAN",{});var Vr=i(Lt);C(oo.$$.fragment,Vr),Vr.forEach(t),Tr.forEach(t),An=f(lt),It=s(lt,"SPAN",{});var Wr=i(It);Sn=n(Wr,"Overview"),Wr.forEach(t),lt.forEach(t),Mr=f(o),ct=s(o,"P",{});var jr=i(ct);zn=n(jr,`The Wav2Vec2Conformer model was proposed in [<INSERT PAPER NAME HERE>](<INSERT PAPER LINK HERE>) by <INSERT AUTHORS HERE>.
<INSERT SHORT SUMMARY HERE>`),jr.forEach(t),Ar=f(o),dt=s(o,"P",{});var Fr=i(dt);On=n(Fr,"The abstract from the paper is the following:"),Fr.forEach(t),Sr=f(o),mt=s(o,"P",{});var xr=i(mt);Rt=s(xr,"EM",{});var qr=i(Rt);Dn=n(qr,"<INSERT PAPER ABSTRACT HERE>"),qr.forEach(t),xr.forEach(t),zr=f(o),pt=s(o,"P",{});var Er=i(pt);Nn=n(Er,"Tips:"),Er.forEach(t),Or=f(o),U=s(o,"UL",{});var ye=i(U);B=s(ye,"LI",{});var X=i(B);Ln=n(X,"Wav2Vec2Conformer follows the same architecture as Wav2Vec2, but replaces the "),Ht=s(X,"EM",{});var vl=i(Ht);In=n(vl,"Attention"),vl.forEach(t),Rn=n(X,"-block with a "),Bt=s(X,"EM",{});var bl=i(Bt);Hn=n(bl,"Conformer"),bl.forEach(t),Bn=n(X,`-block
as introduced in `),to=s(X,"A",{href:!0,rel:!0});var wl=i(to);Xn=n(wl,"Conformer: Convolution-augmented Transformer for Speech Recognition"),wl.forEach(t),Un=n(X,"."),X.forEach(t),Zn=f(ye),Xt=s(ye,"LI",{});var Cl=i(Xt);Kn=n(Cl,"Wav2Vec2Conformer uses the same tokenizer and feature extractor as Wav2Vec2."),Cl.forEach(t),Qn=f(ye),ro=s(ye,"LI",{});var nn=i(ro);Gn=n(nn,`Wav2Vec2Conformer can use either no relative position embeddings, Transformer-XL-like position embeddings, or
rotary position embeddings by setting the correct `),Ut=s(nn,"CODE",{});var yl=i(Ut);Yn=n(yl,"config.position_embeddings_type"),yl.forEach(t),Jn=n(nn,"."),nn.forEach(t),ye.forEach(t),Dr=f(o),Z=s(o,"P",{});var Ft=i(Z);ea=n(Ft,"This model was contributed by "),no=s(Ft,"A",{href:!0,rel:!0});var kl=i(no);oa=n(kl,"patrickvonplaten"),kl.forEach(t),ta=n(Ft,`.
The original code can be found `),ao=s(Ft,"A",{href:!0,rel:!0});var $l=i(ao);ra=n($l,"here"),$l.forEach(t),na=n(Ft,"."),Ft.forEach(t),Nr=f(o),te=s(o,"H2",{class:!0});var an=i(te);We=s(an,"A",{id:!0,class:!0,href:!0});var Tl=i(We);Zt=s(Tl,"SPAN",{});var Vl=i(Zt);C(so.$$.fragment,Vl),Vl.forEach(t),Tl.forEach(t),aa=f(an),Kt=s(an,"SPAN",{});var Wl=i(Kt);sa=n(Wl,"Wav2Vec2ConformerConfig"),Wl.forEach(t),an.forEach(t),Lr=f(o),z=s(o,"DIV",{class:!0});var Qe=i(z);C(io.$$.fragment,Qe),ia=f(Qe),re=s(Qe,"P",{});var xt=i(re);la=n(xt,"This is the configuration class to store the configuration of a "),ft=s(xt,"A",{href:!0});var jl=i(ft);ca=n(jl,"Wav2Vec2ConformerModel"),jl.forEach(t),da=n(xt,`. It is used to
instantiate an Wav2Vec2Conformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Wav2Vec2Conformer
`),lo=s(xt,"A",{href:!0,rel:!0});var Fl=i(lo);ma=n(Fl,"facebook/wav2vec2-conformer-large-rel-pos"),Fl.forEach(t),pa=n(xt,`
architecture.`),xt.forEach(t),fa=f(Qe),ne=s(Qe,"P",{});var qt=i(ne);ha=n(qt,"Configuration objects inherit from "),ht=s(qt,"A",{href:!0});var xl=i(ht);ua=n(xl,"PretrainedConfig"),xl.forEach(t),ga=n(qt,` and can be used to control the model outputs. Read the
documentation from `),ut=s(qt,"A",{href:!0});var ql=i(ut);_a=n(ql,"PretrainedConfig"),ql.forEach(t),va=n(qt," for more information."),qt.forEach(t),ba=f(Qe),C(je.$$.fragment,Qe),Qe.forEach(t),Ir=f(o),ae=s(o,"H2",{class:!0});var sn=i(ae);Fe=s(sn,"A",{id:!0,class:!0,href:!0});var El=i(Fe);Qt=s(El,"SPAN",{});var Pl=i(Qt);C(co.$$.fragment,Pl),Pl.forEach(t),El.forEach(t),wa=f(sn),Gt=s(sn,"SPAN",{});var Ml=i(Gt);Ca=n(Ml,"Wav2Vec2Conformer specific outputs"),Ml.forEach(t),sn.forEach(t),Rr=f(o),se=s(o,"DIV",{class:!0});var ln=i(se);C(mo.$$.fragment,ln),ya=f(ln),po=s(ln,"P",{});var cn=i(po);ka=n(cn,"Output type of "),Yt=s(cn,"CODE",{});var Al=i(Yt);$a=n(Al,"Wav2Vec2ConformerBaseModelOutput"),Al.forEach(t),Ta=n(cn,", with potential hidden states and attentions."),cn.forEach(t),ln.forEach(t),Hr=f(o),ie=s(o,"DIV",{class:!0});var dn=i(ie);C(fo.$$.fragment,dn),Va=f(dn),ho=s(dn,"P",{});var mn=i(ho);Wa=n(mn,"Output type of "),gt=s(mn,"A",{href:!0});var Sl=i(gt);ja=n(Sl,"Wav2Vec2ConformerForPreTraining"),Sl.forEach(t),Fa=n(mn,", with potential hidden states and attentions."),mn.forEach(t),dn.forEach(t),Br=f(o),le=s(o,"H2",{class:!0});var pn=i(le);xe=s(pn,"A",{id:!0,class:!0,href:!0});var zl=i(xe);Jt=s(zl,"SPAN",{});var Ol=i(Jt);C(uo.$$.fragment,Ol),Ol.forEach(t),zl.forEach(t),xa=f(pn),er=s(pn,"SPAN",{});var Dl=i(er);qa=n(Dl,"Wav2Vec2ConformerModel"),Dl.forEach(t),pn.forEach(t),Xr=f(o),q=s(o,"DIV",{class:!0});var K=i(q);C(go.$$.fragment,K),Ea=f(K),_o=s(K,"P",{});var fn=i(_o);Pa=n(fn,`The bare Wav2Vec2Conformer Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2Conformer was proposed in `),vo=s(fn,"A",{href:!0,rel:!0});var Nl=i(vo);Ma=n(Nl,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Nl.forEach(t),Aa=n(fn,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),fn.forEach(t),Sa=f(K),bo=s(K,"P",{});var hn=i(bo);za=n(hn,"This model inherits from "),_t=s(hn,"A",{href:!0});var Ll=i(_t);Oa=n(Ll,"PreTrainedModel"),Ll.forEach(t),Da=n(hn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),hn.forEach(t),Na=f(K),wo=s(K,"P",{});var un=i(wo);La=n(un,"This model is a PyTorch "),Co=s(un,"A",{href:!0,rel:!0});var Il=i(Co);Ia=n(Il,"nn.Module"),Il.forEach(t),Ra=n(un,` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),un.forEach(t),Ha=f(K),O=s(K,"DIV",{class:!0});var Ge=i(O);C(yo.$$.fragment,Ge),Ba=f(Ge),ce=s(Ge,"P",{});var Et=i(ce);Xa=n(Et,"The "),vt=s(Et,"A",{href:!0});var Rl=i(vt);Ua=n(Rl,"Wav2Vec2ConformerModel"),Rl.forEach(t),Za=n(Et," forward method, overrides the "),or=s(Et,"CODE",{});var Hl=i(or);Ka=n(Hl,"__call__"),Hl.forEach(t),Qa=n(Et," special method."),Et.forEach(t),Ga=f(Ge),C(qe.$$.fragment,Ge),Ya=f(Ge),C(Ee.$$.fragment,Ge),Ge.forEach(t),K.forEach(t),Ur=f(o),de=s(o,"H2",{class:!0});var gn=i(de);Pe=s(gn,"A",{id:!0,class:!0,href:!0});var Bl=i(Pe);tr=s(Bl,"SPAN",{});var Xl=i(tr);C(ko.$$.fragment,Xl),Xl.forEach(t),Bl.forEach(t),Ja=f(gn),rr=s(gn,"SPAN",{});var Ul=i(rr);es=n(Ul,"Wav2Vec2ConformerForCTC"),Ul.forEach(t),gn.forEach(t),Zr=f(o),E=s(o,"DIV",{class:!0});var Q=i(E);C($o.$$.fragment,Q),os=f(Q),me=s(Q,"P",{});var Pt=i(me);ts=n(Pt,"Wav2Vec2Conformer Model with a "),nr=s(Pt,"CODE",{});var Zl=i(nr);rs=n(Zl,"language modeling"),Zl.forEach(t),ns=n(Pt,` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2Conformer was proposed in `),To=s(Pt,"A",{href:!0,rel:!0});var Kl=i(To);as=n(Kl,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Kl.forEach(t),ss=n(Pt,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Pt.forEach(t),is=f(Q),Vo=s(Q,"P",{});var _n=i(Vo);ls=n(_n,"This model inherits from "),bt=s(_n,"A",{href:!0});var Ql=i(bt);cs=n(Ql,"PreTrainedModel"),Ql.forEach(t),ds=n(_n,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),_n.forEach(t),ms=f(Q),Wo=s(Q,"P",{});var vn=i(Wo);ps=n(vn,"This model is a PyTorch "),jo=s(vn,"A",{href:!0,rel:!0});var Gl=i(jo);fs=n(Gl,"nn.Module"),Gl.forEach(t),hs=n(vn,` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),vn.forEach(t),us=f(Q),A=s(Q,"DIV",{class:!0});var G=i(A);C(Fo.$$.fragment,G),gs=f(G),pe=s(G,"P",{});var Mt=i(pe);_s=n(Mt,"The "),wt=s(Mt,"A",{href:!0});var Yl=i(wt);vs=n(Yl,"Wav2Vec2ConformerForCTC"),Yl.forEach(t),bs=n(Mt," forward method, overrides the "),ar=s(Mt,"CODE",{});var Jl=i(ar);ws=n(Jl,"__call__"),Jl.forEach(t),Cs=n(Mt," special method."),Mt.forEach(t),ys=f(G),C(Me.$$.fragment,G),ks=f(G),C(Ae.$$.fragment,G),$s=f(G),C(Se.$$.fragment,G),G.forEach(t),Q.forEach(t),Kr=f(o),fe=s(o,"H2",{class:!0});var bn=i(fe);ze=s(bn,"A",{id:!0,class:!0,href:!0});var ec=i(ze);sr=s(ec,"SPAN",{});var oc=i(sr);C(xo.$$.fragment,oc),oc.forEach(t),ec.forEach(t),Ts=f(bn),ir=s(bn,"SPAN",{});var tc=i(ir);Vs=n(tc,"Wav2Vec2ConformerForSequenceClassification"),tc.forEach(t),bn.forEach(t),Qr=f(o),j=s(o,"DIV",{class:!0});var I=i(j);C(qo.$$.fragment,I),Ws=f(I),lr=s(I,"P",{});var rc=i(lr);js=n(rc,`Wav2Vec2Conformer Model with a sequence classification head on top (a linear layer over the pooled output) for
tasks like SUPERB Keyword Spotting.`),rc.forEach(t),Fs=f(I),Eo=s(I,"P",{});var wn=i(Eo);xs=n(wn,"Wav2Vec2Conformer was proposed in "),Po=s(wn,"A",{href:!0,rel:!0});var nc=i(Po);qs=n(nc,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),nc.forEach(t),Es=n(wn,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),wn.forEach(t),Ps=f(I),Mo=s(I,"P",{});var Cn=i(Mo);Ms=n(Cn,"This model inherits from "),Ct=s(Cn,"A",{href:!0});var ac=i(Ct);As=n(ac,"PreTrainedModel"),ac.forEach(t),Ss=n(Cn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Cn.forEach(t),zs=f(I),Ao=s(I,"P",{});var yn=i(Ao);Os=n(yn,"This model is a PyTorch "),So=s(yn,"A",{href:!0,rel:!0});var sc=i(So);Ds=n(sc,"nn.Module"),sc.forEach(t),Ns=n(yn,` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),yn.forEach(t),Ls=f(I),S=s(I,"DIV",{class:!0});var Y=i(S);C(zo.$$.fragment,Y),Is=f(Y),he=s(Y,"P",{});var At=i(he);Rs=n(At,"The "),yt=s(At,"A",{href:!0});var ic=i(yt);Hs=n(ic,"Wav2Vec2ConformerForSequenceClassification"),ic.forEach(t),Bs=n(At," forward method, overrides the "),cr=s(At,"CODE",{});var lc=i(cr);Xs=n(lc,"__call__"),lc.forEach(t),Us=n(At," special method."),At.forEach(t),Zs=f(Y),C(Oe.$$.fragment,Y),Ks=f(Y),C(De.$$.fragment,Y),Qs=f(Y),C(Ne.$$.fragment,Y),Y.forEach(t),I.forEach(t),Gr=f(o),ue=s(o,"H2",{class:!0});var kn=i(ue);Le=s(kn,"A",{id:!0,class:!0,href:!0});var cc=i(Le);dr=s(cc,"SPAN",{});var dc=i(dr);C(Oo.$$.fragment,dc),dc.forEach(t),cc.forEach(t),Gs=f(kn),mr=s(kn,"SPAN",{});var mc=i(mr);Ys=n(mc,"Wav2Vec2ConformerForAudioFrameClassification"),mc.forEach(t),kn.forEach(t),Yr=f(o),F=s(o,"DIV",{class:!0});var R=i(F);C(Do.$$.fragment,R),Js=f(R),pr=s(R,"P",{});var pc=i(pr);ei=n(pc,"Wav2Vec2Conformer Model with a frame classification head on top for tasks like Speaker Diarization."),pc.forEach(t),oi=f(R),No=s(R,"P",{});var $n=i(No);ti=n($n,"Wav2Vec2Conformer was proposed in "),Lo=s($n,"A",{href:!0,rel:!0});var fc=i(Lo);ri=n(fc,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),fc.forEach(t),ni=n($n,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),$n.forEach(t),ai=f(R),Io=s(R,"P",{});var Tn=i(Io);si=n(Tn,"This model inherits from "),kt=s(Tn,"A",{href:!0});var hc=i(kt);ii=n(hc,"PreTrainedModel"),hc.forEach(t),li=n(Tn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Tn.forEach(t),ci=f(R),Ro=s(R,"P",{});var Vn=i(Ro);di=n(Vn,"This model is a PyTorch "),Ho=s(Vn,"A",{href:!0,rel:!0});var uc=i(Ho);mi=n(uc,"nn.Module"),uc.forEach(t),pi=n(Vn,` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),Vn.forEach(t),fi=f(R),D=s(R,"DIV",{class:!0});var Ye=i(D);C(Bo.$$.fragment,Ye),hi=f(Ye),ge=s(Ye,"P",{});var St=i(ge);ui=n(St,"The "),$t=s(St,"A",{href:!0});var gc=i($t);gi=n(gc,"Wav2Vec2ConformerForAudioFrameClassification"),gc.forEach(t),_i=n(St," forward method, overrides the "),fr=s(St,"CODE",{});var _c=i(fr);vi=n(_c,"__call__"),_c.forEach(t),bi=n(St," special method."),St.forEach(t),wi=f(Ye),C(Ie.$$.fragment,Ye),Ci=f(Ye),C(Re.$$.fragment,Ye),Ye.forEach(t),R.forEach(t),Jr=f(o),_e=s(o,"H2",{class:!0});var Wn=i(_e);He=s(Wn,"A",{id:!0,class:!0,href:!0});var vc=i(He);hr=s(vc,"SPAN",{});var bc=i(hr);C(Xo.$$.fragment,bc),bc.forEach(t),vc.forEach(t),yi=f(Wn),ur=s(Wn,"SPAN",{});var wc=i(ur);ki=n(wc,"Wav2Vec2ConformerForXVector"),wc.forEach(t),Wn.forEach(t),en=f(o),x=s(o,"DIV",{class:!0});var H=i(x);C(Uo.$$.fragment,H),$i=f(H),gr=s(H,"P",{});var Cc=i(gr);Ti=n(Cc,"Wav2Vec2Conformer Model with an XVector feature extraction head on top for tasks like Speaker Verification."),Cc.forEach(t),Vi=f(H),Zo=s(H,"P",{});var jn=i(Zo);Wi=n(jn,"Wav2Vec2Conformer was proposed in "),Ko=s(jn,"A",{href:!0,rel:!0});var yc=i(Ko);ji=n(yc,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),yc.forEach(t),Fi=n(jn,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),jn.forEach(t),xi=f(H),Qo=s(H,"P",{});var Fn=i(Qo);qi=n(Fn,"This model inherits from "),Tt=s(Fn,"A",{href:!0});var kc=i(Tt);Ei=n(kc,"PreTrainedModel"),kc.forEach(t),Pi=n(Fn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Fn.forEach(t),Mi=f(H),Go=s(H,"P",{});var xn=i(Go);Ai=n(xn,"This model is a PyTorch "),Yo=s(xn,"A",{href:!0,rel:!0});var $c=i(Yo);Si=n($c,"nn.Module"),$c.forEach(t),zi=n(xn,` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),xn.forEach(t),Oi=f(H),N=s(H,"DIV",{class:!0});var Je=i(N);C(Jo.$$.fragment,Je),Di=f(Je),ve=s(Je,"P",{});var zt=i(ve);Ni=n(zt,"The "),Vt=s(zt,"A",{href:!0});var Tc=i(Vt);Li=n(Tc,"Wav2Vec2ConformerForXVector"),Tc.forEach(t),Ii=n(zt," forward method, overrides the "),_r=s(zt,"CODE",{});var Vc=i(_r);Ri=n(Vc,"__call__"),Vc.forEach(t),Hi=n(zt," special method."),zt.forEach(t),Bi=f(Je),C(Be.$$.fragment,Je),Xi=f(Je),C(Xe.$$.fragment,Je),Je.forEach(t),H.forEach(t),on=f(o),be=s(o,"H2",{class:!0});var qn=i(be);Ue=s(qn,"A",{id:!0,class:!0,href:!0});var Wc=i(Ue);vr=s(Wc,"SPAN",{});var jc=i(vr);C(et.$$.fragment,jc),jc.forEach(t),Wc.forEach(t),Ui=f(qn),br=s(qn,"SPAN",{});var Fc=i(br);Zi=n(Fc,"Wav2Vec2ConformerForPreTraining"),Fc.forEach(t),qn.forEach(t),tn=f(o),P=s(o,"DIV",{class:!0});var J=i(P);C(ot.$$.fragment,J),Ki=f(J),we=s(J,"P",{});var Ot=i(we);Qi=n(Ot,"Wav2Vec2Conformer Model with a quantizer and "),wr=s(Ot,"CODE",{});var xc=i(wr);Gi=n(xc,"VQ"),xc.forEach(t),Yi=n(Ot,` head on top.
Wav2Vec2Conformer was proposed in `),tt=s(Ot,"A",{href:!0,rel:!0});var qc=i(tt);Ji=n(qc,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),qc.forEach(t),el=n(Ot,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Ot.forEach(t),ol=f(J),rt=s(J,"P",{});var En=i(rt);tl=n(En,"This model inherits from "),Wt=s(En,"A",{href:!0});var Ec=i(Wt);rl=n(Ec,"PreTrainedModel"),Ec.forEach(t),nl=n(En,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),En.forEach(t),al=f(J),nt=s(J,"P",{});var Pn=i(nt);sl=n(Pn,"This model is a PyTorch "),at=s(Pn,"A",{href:!0,rel:!0});var Pc=i(at);il=n(Pc,"nn.Module"),Pc.forEach(t),ll=n(Pn,` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),Pn.forEach(t),cl=f(J),L=s(J,"DIV",{class:!0});var eo=i(L);C(st.$$.fragment,eo),dl=f(eo),Ce=s(eo,"P",{});var Dt=i(Ce);ml=n(Dt,"The "),jt=s(Dt,"A",{href:!0});var Mc=i(jt);pl=n(Mc,"Wav2Vec2ConformerForPreTraining"),Mc.forEach(t),fl=n(Dt," forward method, overrides the "),Cr=s(Dt,"CODE",{});var Ac=i(Cr);hl=n(Ac,"__call__"),Ac.forEach(t),ul=n(Dt," special method."),Dt.forEach(t),gl=f(eo),C(Ze.$$.fragment,eo),_l=f(eo),C(Ke.$$.fragment,eo),eo.forEach(t),J.forEach(t),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(rd)),d(u,"id","wav2vec2conformer"),d(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(u,"href","#wav2vec2conformer"),d(m,"class","relative group"),d(Ve,"id","overview"),d(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ve,"href","#overview"),d(oe,"class","relative group"),d(to,"href","https://arxiv.org/abs/2005.08100"),d(to,"rel","nofollow"),d(no,"href","https://huggingface.co/patrickvonplaten"),d(no,"rel","nofollow"),d(ao,"href","https://github.com/pytorch/fairseq/tree/main/examples/wav2vec"),d(ao,"rel","nofollow"),d(We,"id","transformers.Wav2Vec2ConformerConfig"),d(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(We,"href","#transformers.Wav2Vec2ConformerConfig"),d(te,"class","relative group"),d(ft,"href","/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerModel"),d(lo,"href","https://huggingface.co/facebook/wav2vec2-conformer-large-rel-pos"),d(lo,"rel","nofollow"),d(ht,"href","/docs/transformers/pr_16812/en/main_classes/configuration#transformers.PretrainedConfig"),d(ut,"href","/docs/transformers/pr_16812/en/main_classes/configuration#transformers.PretrainedConfig"),d(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Fe,"id","transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerBaseModelOutput"),d(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Fe,"href","#transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerBaseModelOutput"),d(ae,"class","relative group"),d(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(gt,"href","/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForPreTraining"),d(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(xe,"id","transformers.Wav2Vec2ConformerModel"),d(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(xe,"href","#transformers.Wav2Vec2ConformerModel"),d(le,"class","relative group"),d(vo,"href","https://arxiv.org/abs/2006.11477"),d(vo,"rel","nofollow"),d(_t,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel"),d(Co,"href","https://pytorch.org/docs/stable/nn.html#nn.Module"),d(Co,"rel","nofollow"),d(vt,"href","/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerModel"),d(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Pe,"id","transformers.Wav2Vec2ConformerForCTC"),d(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Pe,"href","#transformers.Wav2Vec2ConformerForCTC"),d(de,"class","relative group"),d(To,"href","https://arxiv.org/abs/2006.11477"),d(To,"rel","nofollow"),d(bt,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel"),d(jo,"href","https://pytorch.org/docs/stable/nn.html#nn.Module"),d(jo,"rel","nofollow"),d(wt,"href","/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForCTC"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ze,"id","transformers.Wav2Vec2ConformerForSequenceClassification"),d(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ze,"href","#transformers.Wav2Vec2ConformerForSequenceClassification"),d(fe,"class","relative group"),d(Po,"href","https://arxiv.org/abs/2006.11477"),d(Po,"rel","nofollow"),d(Ct,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel"),d(So,"href","https://pytorch.org/docs/stable/nn.html#nn.Module"),d(So,"rel","nofollow"),d(yt,"href","/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForSequenceClassification"),d(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Le,"id","transformers.Wav2Vec2ConformerForAudioFrameClassification"),d(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Le,"href","#transformers.Wav2Vec2ConformerForAudioFrameClassification"),d(ue,"class","relative group"),d(Lo,"href","https://arxiv.org/abs/2006.11477"),d(Lo,"rel","nofollow"),d(kt,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel"),d(Ho,"href","https://pytorch.org/docs/stable/nn.html#nn.Module"),d(Ho,"rel","nofollow"),d($t,"href","/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForAudioFrameClassification"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(He,"id","transformers.Wav2Vec2ConformerForXVector"),d(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(He,"href","#transformers.Wav2Vec2ConformerForXVector"),d(_e,"class","relative group"),d(Ko,"href","https://arxiv.org/abs/2006.11477"),d(Ko,"rel","nofollow"),d(Tt,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel"),d(Yo,"href","https://pytorch.org/docs/stable/nn.html#nn.Module"),d(Yo,"rel","nofollow"),d(Vt,"href","/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForXVector"),d(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ue,"id","transformers.Wav2Vec2ConformerForPreTraining"),d(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ue,"href","#transformers.Wav2Vec2ConformerForPreTraining"),d(be,"class","relative group"),d(tt,"href","https://arxiv.org/abs/2006.11477"),d(tt,"rel","nofollow"),d(Wt,"href","/docs/transformers/pr_16812/en/main_classes/model#transformers.PreTrainedModel"),d(at,"href","https://pytorch.org/docs/stable/nn.html#nn.Module"),d(at,"rel","nofollow"),d(jt,"href","/docs/transformers/pr_16812/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForPreTraining"),d(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,c),_(o,v,g),_(o,m,g),e(m,u),e(u,b),y(l,b,null),e(m,h),e(m,W),e(W,Mn),_(o,Pr,g),_(o,oe,g),e(oe,Ve),e(Ve,Lt),y(oo,Lt,null),e(oe,An),e(oe,It),e(It,Sn),_(o,Mr,g),_(o,ct,g),e(ct,zn),_(o,Ar,g),_(o,dt,g),e(dt,On),_(o,Sr,g),_(o,mt,g),e(mt,Rt),e(Rt,Dn),_(o,zr,g),_(o,pt,g),e(pt,Nn),_(o,Or,g),_(o,U,g),e(U,B),e(B,Ln),e(B,Ht),e(Ht,In),e(B,Rn),e(B,Bt),e(Bt,Hn),e(B,Bn),e(B,to),e(to,Xn),e(B,Un),e(U,Zn),e(U,Xt),e(Xt,Kn),e(U,Qn),e(U,ro),e(ro,Gn),e(ro,Ut),e(Ut,Yn),e(ro,Jn),_(o,Dr,g),_(o,Z,g),e(Z,ea),e(Z,no),e(no,oa),e(Z,ta),e(Z,ao),e(ao,ra),e(Z,na),_(o,Nr,g),_(o,te,g),e(te,We),e(We,Zt),y(so,Zt,null),e(te,aa),e(te,Kt),e(Kt,sa),_(o,Lr,g),_(o,z,g),y(io,z,null),e(z,ia),e(z,re),e(re,la),e(re,ft),e(ft,ca),e(re,da),e(re,lo),e(lo,ma),e(re,pa),e(z,fa),e(z,ne),e(ne,ha),e(ne,ht),e(ht,ua),e(ne,ga),e(ne,ut),e(ut,_a),e(ne,va),e(z,ba),y(je,z,null),_(o,Ir,g),_(o,ae,g),e(ae,Fe),e(Fe,Qt),y(co,Qt,null),e(ae,wa),e(ae,Gt),e(Gt,Ca),_(o,Rr,g),_(o,se,g),y(mo,se,null),e(se,ya),e(se,po),e(po,ka),e(po,Yt),e(Yt,$a),e(po,Ta),_(o,Hr,g),_(o,ie,g),y(fo,ie,null),e(ie,Va),e(ie,ho),e(ho,Wa),e(ho,gt),e(gt,ja),e(ho,Fa),_(o,Br,g),_(o,le,g),e(le,xe),e(xe,Jt),y(uo,Jt,null),e(le,xa),e(le,er),e(er,qa),_(o,Xr,g),_(o,q,g),y(go,q,null),e(q,Ea),e(q,_o),e(_o,Pa),e(_o,vo),e(vo,Ma),e(_o,Aa),e(q,Sa),e(q,bo),e(bo,za),e(bo,_t),e(_t,Oa),e(bo,Da),e(q,Na),e(q,wo),e(wo,La),e(wo,Co),e(Co,Ia),e(wo,Ra),e(q,Ha),e(q,O),y(yo,O,null),e(O,Ba),e(O,ce),e(ce,Xa),e(ce,vt),e(vt,Ua),e(ce,Za),e(ce,or),e(or,Ka),e(ce,Qa),e(O,Ga),y(qe,O,null),e(O,Ya),y(Ee,O,null),_(o,Ur,g),_(o,de,g),e(de,Pe),e(Pe,tr),y(ko,tr,null),e(de,Ja),e(de,rr),e(rr,es),_(o,Zr,g),_(o,E,g),y($o,E,null),e(E,os),e(E,me),e(me,ts),e(me,nr),e(nr,rs),e(me,ns),e(me,To),e(To,as),e(me,ss),e(E,is),e(E,Vo),e(Vo,ls),e(Vo,bt),e(bt,cs),e(Vo,ds),e(E,ms),e(E,Wo),e(Wo,ps),e(Wo,jo),e(jo,fs),e(Wo,hs),e(E,us),e(E,A),y(Fo,A,null),e(A,gs),e(A,pe),e(pe,_s),e(pe,wt),e(wt,vs),e(pe,bs),e(pe,ar),e(ar,ws),e(pe,Cs),e(A,ys),y(Me,A,null),e(A,ks),y(Ae,A,null),e(A,$s),y(Se,A,null),_(o,Kr,g),_(o,fe,g),e(fe,ze),e(ze,sr),y(xo,sr,null),e(fe,Ts),e(fe,ir),e(ir,Vs),_(o,Qr,g),_(o,j,g),y(qo,j,null),e(j,Ws),e(j,lr),e(lr,js),e(j,Fs),e(j,Eo),e(Eo,xs),e(Eo,Po),e(Po,qs),e(Eo,Es),e(j,Ps),e(j,Mo),e(Mo,Ms),e(Mo,Ct),e(Ct,As),e(Mo,Ss),e(j,zs),e(j,Ao),e(Ao,Os),e(Ao,So),e(So,Ds),e(Ao,Ns),e(j,Ls),e(j,S),y(zo,S,null),e(S,Is),e(S,he),e(he,Rs),e(he,yt),e(yt,Hs),e(he,Bs),e(he,cr),e(cr,Xs),e(he,Us),e(S,Zs),y(Oe,S,null),e(S,Ks),y(De,S,null),e(S,Qs),y(Ne,S,null),_(o,Gr,g),_(o,ue,g),e(ue,Le),e(Le,dr),y(Oo,dr,null),e(ue,Gs),e(ue,mr),e(mr,Ys),_(o,Yr,g),_(o,F,g),y(Do,F,null),e(F,Js),e(F,pr),e(pr,ei),e(F,oi),e(F,No),e(No,ti),e(No,Lo),e(Lo,ri),e(No,ni),e(F,ai),e(F,Io),e(Io,si),e(Io,kt),e(kt,ii),e(Io,li),e(F,ci),e(F,Ro),e(Ro,di),e(Ro,Ho),e(Ho,mi),e(Ro,pi),e(F,fi),e(F,D),y(Bo,D,null),e(D,hi),e(D,ge),e(ge,ui),e(ge,$t),e($t,gi),e(ge,_i),e(ge,fr),e(fr,vi),e(ge,bi),e(D,wi),y(Ie,D,null),e(D,Ci),y(Re,D,null),_(o,Jr,g),_(o,_e,g),e(_e,He),e(He,hr),y(Xo,hr,null),e(_e,yi),e(_e,ur),e(ur,ki),_(o,en,g),_(o,x,g),y(Uo,x,null),e(x,$i),e(x,gr),e(gr,Ti),e(x,Vi),e(x,Zo),e(Zo,Wi),e(Zo,Ko),e(Ko,ji),e(Zo,Fi),e(x,xi),e(x,Qo),e(Qo,qi),e(Qo,Tt),e(Tt,Ei),e(Qo,Pi),e(x,Mi),e(x,Go),e(Go,Ai),e(Go,Yo),e(Yo,Si),e(Go,zi),e(x,Oi),e(x,N),y(Jo,N,null),e(N,Di),e(N,ve),e(ve,Ni),e(ve,Vt),e(Vt,Li),e(ve,Ii),e(ve,_r),e(_r,Ri),e(ve,Hi),e(N,Bi),y(Be,N,null),e(N,Xi),y(Xe,N,null),_(o,on,g),_(o,be,g),e(be,Ue),e(Ue,vr),y(et,vr,null),e(be,Ui),e(be,br),e(br,Zi),_(o,tn,g),_(o,P,g),y(ot,P,null),e(P,Ki),e(P,we),e(we,Qi),e(we,wr),e(wr,Gi),e(we,Yi),e(we,tt),e(tt,Ji),e(we,el),e(P,ol),e(P,rt),e(rt,tl),e(rt,Wt),e(Wt,rl),e(rt,nl),e(P,al),e(P,nt),e(nt,sl),e(nt,at),e(at,il),e(nt,ll),e(P,cl),e(P,L),y(st,L,null),e(L,dl),e(L,Ce),e(Ce,ml),e(Ce,jt),e(jt,pl),e(Ce,fl),e(Ce,Cr),e(Cr,hl),e(Ce,ul),e(L,gl),y(Ze,L,null),e(L,_l),y(Ke,L,null),rn=!0},p(o,[g]){const it={};g&2&&(it.$$scope={dirty:g,ctx:o}),je.$set(it);const yr={};g&2&&(yr.$$scope={dirty:g,ctx:o}),qe.$set(yr);const kr={};g&2&&(kr.$$scope={dirty:g,ctx:o}),Ee.$set(kr);const $r={};g&2&&($r.$$scope={dirty:g,ctx:o}),Me.$set($r);const lt={};g&2&&(lt.$$scope={dirty:g,ctx:o}),Ae.$set(lt);const Tr={};g&2&&(Tr.$$scope={dirty:g,ctx:o}),Se.$set(Tr);const Vr={};g&2&&(Vr.$$scope={dirty:g,ctx:o}),Oe.$set(Vr);const Wr={};g&2&&(Wr.$$scope={dirty:g,ctx:o}),De.$set(Wr);const jr={};g&2&&(jr.$$scope={dirty:g,ctx:o}),Ne.$set(jr);const Fr={};g&2&&(Fr.$$scope={dirty:g,ctx:o}),Ie.$set(Fr);const xr={};g&2&&(xr.$$scope={dirty:g,ctx:o}),Re.$set(xr);const qr={};g&2&&(qr.$$scope={dirty:g,ctx:o}),Be.$set(qr);const Er={};g&2&&(Er.$$scope={dirty:g,ctx:o}),Xe.$set(Er);const ye={};g&2&&(ye.$$scope={dirty:g,ctx:o}),Ze.$set(ye);const X={};g&2&&(X.$$scope={dirty:g,ctx:o}),Ke.$set(X)},i(o){rn||(k(l.$$.fragment,o),k(oo.$$.fragment,o),k(so.$$.fragment,o),k(io.$$.fragment,o),k(je.$$.fragment,o),k(co.$$.fragment,o),k(mo.$$.fragment,o),k(fo.$$.fragment,o),k(uo.$$.fragment,o),k(go.$$.fragment,o),k(yo.$$.fragment,o),k(qe.$$.fragment,o),k(Ee.$$.fragment,o),k(ko.$$.fragment,o),k($o.$$.fragment,o),k(Fo.$$.fragment,o),k(Me.$$.fragment,o),k(Ae.$$.fragment,o),k(Se.$$.fragment,o),k(xo.$$.fragment,o),k(qo.$$.fragment,o),k(zo.$$.fragment,o),k(Oe.$$.fragment,o),k(De.$$.fragment,o),k(Ne.$$.fragment,o),k(Oo.$$.fragment,o),k(Do.$$.fragment,o),k(Bo.$$.fragment,o),k(Ie.$$.fragment,o),k(Re.$$.fragment,o),k(Xo.$$.fragment,o),k(Uo.$$.fragment,o),k(Jo.$$.fragment,o),k(Be.$$.fragment,o),k(Xe.$$.fragment,o),k(et.$$.fragment,o),k(ot.$$.fragment,o),k(st.$$.fragment,o),k(Ze.$$.fragment,o),k(Ke.$$.fragment,o),rn=!0)},o(o){$(l.$$.fragment,o),$(oo.$$.fragment,o),$(so.$$.fragment,o),$(io.$$.fragment,o),$(je.$$.fragment,o),$(co.$$.fragment,o),$(mo.$$.fragment,o),$(fo.$$.fragment,o),$(uo.$$.fragment,o),$(go.$$.fragment,o),$(yo.$$.fragment,o),$(qe.$$.fragment,o),$(Ee.$$.fragment,o),$(ko.$$.fragment,o),$($o.$$.fragment,o),$(Fo.$$.fragment,o),$(Me.$$.fragment,o),$(Ae.$$.fragment,o),$(Se.$$.fragment,o),$(xo.$$.fragment,o),$(qo.$$.fragment,o),$(zo.$$.fragment,o),$(Oe.$$.fragment,o),$(De.$$.fragment,o),$(Ne.$$.fragment,o),$(Oo.$$.fragment,o),$(Do.$$.fragment,o),$(Bo.$$.fragment,o),$(Ie.$$.fragment,o),$(Re.$$.fragment,o),$(Xo.$$.fragment,o),$(Uo.$$.fragment,o),$(Jo.$$.fragment,o),$(Be.$$.fragment,o),$(Xe.$$.fragment,o),$(et.$$.fragment,o),$(ot.$$.fragment,o),$(st.$$.fragment,o),$(Ze.$$.fragment,o),$(Ke.$$.fragment,o),rn=!1},d(o){t(c),o&&t(v),o&&t(m),T(l),o&&t(Pr),o&&t(oe),T(oo),o&&t(Mr),o&&t(ct),o&&t(Ar),o&&t(dt),o&&t(Sr),o&&t(mt),o&&t(zr),o&&t(pt),o&&t(Or),o&&t(U),o&&t(Dr),o&&t(Z),o&&t(Nr),o&&t(te),T(so),o&&t(Lr),o&&t(z),T(io),T(je),o&&t(Ir),o&&t(ae),T(co),o&&t(Rr),o&&t(se),T(mo),o&&t(Hr),o&&t(ie),T(fo),o&&t(Br),o&&t(le),T(uo),o&&t(Xr),o&&t(q),T(go),T(yo),T(qe),T(Ee),o&&t(Ur),o&&t(de),T(ko),o&&t(Zr),o&&t(E),T($o),T(Fo),T(Me),T(Ae),T(Se),o&&t(Kr),o&&t(fe),T(xo),o&&t(Qr),o&&t(j),T(qo),T(zo),T(Oe),T(De),T(Ne),o&&t(Gr),o&&t(ue),T(Oo),o&&t(Yr),o&&t(F),T(Do),T(Bo),T(Ie),T(Re),o&&t(Jr),o&&t(_e),T(Xo),o&&t(en),o&&t(x),T(Uo),T(Jo),T(Be),T(Xe),o&&t(on),o&&t(be),T(et),o&&t(tn),o&&t(P),T(ot),T(st),T(Ze),T(Ke)}}}const rd={local:"wav2vec2conformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.Wav2Vec2ConformerConfig",title:"Wav2Vec2ConformerConfig"},{local:"transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerBaseModelOutput",title:"Wav2Vec2Conformer specific outputs"},{local:"transformers.Wav2Vec2ConformerModel",title:"Wav2Vec2ConformerModel"},{local:"transformers.Wav2Vec2ConformerForCTC",title:"Wav2Vec2ConformerForCTC"},{local:"transformers.Wav2Vec2ConformerForSequenceClassification",title:"Wav2Vec2ConformerForSequenceClassification"},{local:"transformers.Wav2Vec2ConformerForAudioFrameClassification",title:"Wav2Vec2ConformerForAudioFrameClassification"},{local:"transformers.Wav2Vec2ConformerForXVector",title:"Wav2Vec2ConformerForXVector"},{local:"transformers.Wav2Vec2ConformerForPreTraining",title:"Wav2Vec2ConformerForPreTraining"}],title:"Wav2Vec2Conformer"};function nd(V){return Nc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class md extends Sc{constructor(c){super();zc(this,c,nd,td,Oc,{})}}export{md as default,rd as metadata};
