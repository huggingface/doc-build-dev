import{S as vc,i as bc,s as wc,e as s,k as h,w,t as r,M as Cc,c as i,d as t,m as u,a as l,x as C,h as a,b as d,F as e,g as b,y,q as k,o as $,B as V,v as yc,L as ke}from"../../chunks/vendor-6b77c823.js";import{T as St}from"../../chunks/Tip-39098574.js";import{D as z}from"../../chunks/Docstring-1088f2fb.js";import{C as $e}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ee}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as ye}from"../../chunks/ExampleCodeBlock-5212b321.js";function kc(T){let c,_,m,f,v;return f=new $e({props:{code:`from transformers import Wav2Vec2ConformerModel, Wav2Vec2ConformerConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=s("p"),_=r("Example:"),m=h(),w(f.$$.fragment)},l(n){c=i(n,"P",{});var p=l(c);_=a(p,"Example:"),p.forEach(t),m=u(n),C(f.$$.fragment,n)},m(n,p){b(n,c,p),e(c,_),b(n,m,p),y(f,n,p),v=!0},p:ke,i(n){v||(k(f.$$.fragment,n),v=!0)},o(n){$(f.$$.fragment,n),v=!1},d(n){n&&t(c),n&&t(m),V(f,n)}}}function $c(T){let c,_,m,f,v;return{c(){c=s("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){c=i(n,"P",{});var p=l(c);_=a(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=i(p,"CODE",{});var W=l(m);f=a(W,"Module"),W.forEach(t),v=a(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){b(n,c,p),e(c,_),e(c,m),e(m,f),e(c,v)},d(n){n&&t(c)}}}function Vc(T){let c,_,m,f,v;return f=new $e({props:{code:`from transformers import Wav2Vec2Processor, Wav2Vec2ConformerModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">1024</span>]`}}),{c(){c=s("p"),_=r("Example:"),m=h(),w(f.$$.fragment)},l(n){c=i(n,"P",{});var p=l(c);_=a(p,"Example:"),p.forEach(t),m=u(n),C(f.$$.fragment,n)},m(n,p){b(n,c,p),e(c,_),b(n,m,p),y(f,n,p),v=!0},p:ke,i(n){v||(k(f.$$.fragment,n),v=!0)},o(n){$(f.$$.fragment,n),v=!1},d(n){n&&t(c),n&&t(m),V(f,n)}}}function Tc(T){let c,_,m,f,v;return{c(){c=s("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){c=i(n,"P",{});var p=l(c);_=a(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=i(p,"CODE",{});var W=l(m);f=a(W,"Module"),W.forEach(t),v=a(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){b(n,c,p),e(c,_),e(c,m),e(m,f),e(c,v)},d(n){n&&t(c)}}}function Wc(T){let c,_,m,f,v;return f=new $e({props:{code:`from transformers import Wav2Vec2Processor, Wav2Vec2ConformerForCTC
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
<span class="hljs-string">&#x27;MISTER QUILTER IS THE APOSTLE OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPEL&#x27;</span>`}}),{c(){c=s("p"),_=r("Example:"),m=h(),w(f.$$.fragment)},l(n){c=i(n,"P",{});var p=l(c);_=a(p,"Example:"),p.forEach(t),m=u(n),C(f.$$.fragment,n)},m(n,p){b(n,c,p),e(c,_),b(n,m,p),y(f,n,p),v=!0},p:ke,i(n){v||(k(f.$$.fragment,n),v=!0)},o(n){$(f.$$.fragment,n),v=!1},d(n){n&&t(c),n&&t(m),V(f,n)}}}function jc(T){let c,_;return c=new $e({props:{code:`with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">64.21</span>`}}),{c(){w(c.$$.fragment)},l(m){C(c.$$.fragment,m)},m(m,f){y(c,m,f),_=!0},p:ke,i(m){_||(k(c.$$.fragment,m),_=!0)},o(m){$(c.$$.fragment,m),_=!1},d(m){V(c,m)}}}function Fc(T){let c,_,m,f,v;return{c(){c=s("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){c=i(n,"P",{});var p=l(c);_=a(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=i(p,"CODE",{});var W=l(m);f=a(W,"Module"),W.forEach(t),v=a(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){b(n,c,p),e(c,_),e(c,m),e(m,f),e(c,v)},d(n){n&&t(c)}}}function xc(T){let c,_,m,f,v;return f=new $e({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ConformerForSequenceClassification
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
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){c=s("p"),_=r("Example:"),m=h(),w(f.$$.fragment)},l(n){c=i(n,"P",{});var p=l(c);_=a(p,"Example:"),p.forEach(t),m=u(n),C(f.$$.fragment,n)},m(n,p){b(n,c,p),e(c,_),b(n,m,p),y(f,n,p),v=!0},p:ke,i(n){v||(k(f.$$.fragment,n),v=!0)},o(n){$(f.$$.fragment,n),v=!1},d(n){n&&t(c),n&&t(m),V(f,n)}}}function qc(T){let c,_;return c=new $e({props:{code:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.68</span>`}}),{c(){w(c.$$.fragment)},l(m){C(c.$$.fragment,m)},m(m,f){y(c,m,f),_=!0},p:ke,i(m){_||(k(c.$$.fragment,m),_=!0)},o(m){$(c.$$.fragment,m),_=!1},d(m){V(c,m)}}}function Ec(T){let c,_,m,f,v;return{c(){c=s("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){c=i(n,"P",{});var p=l(c);_=a(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=i(p,"CODE",{});var W=l(m);f=a(W,"Module"),W.forEach(t),v=a(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){b(n,c,p),e(c,_),e(c,m),e(m,f),e(c,v)},d(n){n&&t(c)}}}function Pc(T){let c,_,m,f,v;return f=new $e({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ConformerForAudioFrameClassification
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
[<span class="hljs-number">1</span>, <span class="hljs-number">0</span>]`}}),{c(){c=s("p"),_=r("Example:"),m=h(),w(f.$$.fragment)},l(n){c=i(n,"P",{});var p=l(c);_=a(p,"Example:"),p.forEach(t),m=u(n),C(f.$$.fragment,n)},m(n,p){b(n,c,p),e(c,_),b(n,m,p),y(f,n,p),v=!0},p:ke,i(n){v||(k(f.$$.fragment,n),v=!0)},o(n){$(f.$$.fragment,n),v=!1},d(n){n&&t(c),n&&t(m),V(f,n)}}}function Mc(T){let c,_,m,f,v;return{c(){c=s("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){c=i(n,"P",{});var p=l(c);_=a(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=i(p,"CODE",{});var W=l(m);f=a(W,"Module"),W.forEach(t),v=a(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){b(n,c,p),e(c,_),e(c,m),e(m,f),e(c,v)},d(n){n&&t(c)}}}function Ac(T){let c,_,m,f,v;return f=new $e({props:{code:`from transformers import Wav2Vec2FeatureExtractor, Wav2Vec2ConformerForXVector
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
<span class="hljs-number">1.0</span>`}}),{c(){c=s("p"),_=r("Example:"),m=h(),w(f.$$.fragment)},l(n){c=i(n,"P",{});var p=l(c);_=a(p,"Example:"),p.forEach(t),m=u(n),C(f.$$.fragment,n)},m(n,p){b(n,c,p),e(c,_),b(n,m,p),y(f,n,p),v=!0},p:ke,i(n){v||(k(f.$$.fragment,n),v=!0)},o(n){$(f.$$.fragment,n),v=!1},d(n){n&&t(c),n&&t(m),V(f,n)}}}function zc(T){let c,_,m,f,v;return{c(){c=s("p"),_=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){c=i(n,"P",{});var p=l(c);_=a(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=i(p,"CODE",{});var W=l(m);f=a(W,"Module"),W.forEach(t),v=a(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(n,p){b(n,c,p),e(c,_),e(c,m),e(m,f),e(c,v)},d(n){n&&t(c)}}}function Sc(T){let c,_,m,f,v;return f=new $e({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_values, mask_time_indices=mask_time_indices).loss`}}),{c(){c=s("p"),_=r("Example:"),m=h(),w(f.$$.fragment)},l(n){c=i(n,"P",{});var p=l(c);_=a(p,"Example:"),p.forEach(t),m=u(n),C(f.$$.fragment,n)},m(n,p){b(n,c,p),e(c,_),b(n,m,p),y(f,n,p),v=!0},p:ke,i(n){v||(k(f.$$.fragment,n),v=!0)},o(n){$(f.$$.fragment,n),v=!1},d(n){n&&t(c),n&&t(m),V(f,n)}}}function Oc(T){let c,_,m,f,v,n,p,W,ya,Wr,oe,Ve,Ot,oo,ka,Dt,$a,jr,Te,Va,to,Ta,Wa,Fr,ct,ja,xr,U,H,Fa,Lt,xa,qa,Nt,Ea,Pa,ro,Ma,Aa,za,It,Sa,Oa,ao,Da,Xt,La,Na,qr,Z,Ia,no,Xa,Ba,so,Ha,Ra,Er,te,We,Bt,io,Ua,Ht,Za,Pr,S,lo,Qa,re,Ka,dt,Ga,Ja,co,Ya,en,on,ae,tn,mt,rn,an,pt,nn,sn,ln,je,Mr,ne,Fe,Rt,mo,cn,Ut,dn,Ar,se,po,mn,fo,pn,ft,fn,hn,zr,ie,xe,Zt,ho,un,Qt,gn,Sr,q,uo,_n,go,vn,_o,bn,wn,Cn,vo,yn,ht,kn,$n,Vn,bo,Tn,wo,Wn,jn,Fn,O,Co,xn,le,qn,ut,En,Pn,Kt,Mn,An,zn,qe,Sn,Ee,Or,ce,Pe,Gt,yo,On,Jt,Dn,Dr,E,ko,Ln,de,Nn,Yt,In,Xn,$o,Bn,Hn,Rn,Vo,Un,gt,Zn,Qn,Kn,To,Gn,Wo,Jn,Yn,es,M,jo,os,me,ts,_t,rs,as,er,ns,ss,is,Me,ls,Ae,cs,ze,Lr,pe,Se,or,Fo,ds,tr,ms,Nr,j,xo,ps,rr,fs,hs,qo,us,Eo,gs,_s,vs,Po,bs,vt,ws,Cs,ys,Mo,ks,Ao,$s,Vs,Ts,A,zo,Ws,fe,js,bt,Fs,xs,ar,qs,Es,Ps,Oe,Ms,De,As,Le,Ir,he,Ne,nr,So,zs,sr,Ss,Xr,F,Oo,Os,ir,Ds,Ls,Do,Ns,Lo,Is,Xs,Bs,No,Hs,wt,Rs,Us,Zs,Io,Qs,Xo,Ks,Gs,Js,D,Bo,Ys,ue,ei,Ct,oi,ti,lr,ri,ai,ni,Ie,si,Xe,Br,ge,Be,cr,Ho,ii,dr,li,Hr,x,Ro,ci,mr,di,mi,Uo,pi,Zo,fi,hi,ui,Qo,gi,yt,_i,vi,bi,Ko,wi,Go,Ci,yi,ki,L,Jo,$i,_e,Vi,kt,Ti,Wi,pr,ji,Fi,xi,He,qi,Re,Rr,ve,Ue,fr,Yo,Ei,hr,Pi,Ur,P,et,Mi,be,Ai,ur,zi,Si,ot,Oi,Di,Li,tt,Ni,$t,Ii,Xi,Bi,rt,Hi,at,Ri,Ui,Zi,N,nt,Qi,we,Ki,Vt,Gi,Ji,gr,Yi,el,ol,Ze,tl,Qe,Zr;return n=new ee({}),oo=new ee({}),io=new ee({}),lo=new z({props:{name:"class transformers.Wav2Vec2ConformerConfig",anchor:"transformers.Wav2Vec2ConformerConfig",parameters:[{name:"vocab_size",val:" = None"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"feat_quantizer_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"num_codevectors_per_group",val:" = 320"},{name:"num_codevector_groups",val:" = 2"},{name:"contrastive_logits_temperature",val:" = 0.1"},{name:"num_negatives",val:" = 100"},{name:"codevector_dim",val:" = 256"},{name:"proj_codevector_dim",val:" = 256"},{name:"diversity_loss_weight",val:" = 0.1"},{name:"ctc_loss_reduction",val:" = 'sum'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"tdnn_dim",val:" = (512, 512, 512, 512, 1500)"},{name:"tdnn_kernel",val:" = (5, 3, 3, 1, 1)"},{name:"tdnn_dilation",val:" = (1, 2, 3, 1, 1)"},{name:"xvector_output_dim",val:" = 512"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"add_adapter",val:" = False"},{name:"adapter_kernel_size",val:" = 3"},{name:"adapter_stride",val:" = 2"},{name:"num_adapter_layers",val:" = 3"},{name:"output_hidden_size",val:" = None"},{name:"position_embeddings_type",val:" = 'relative'"},{name:"rotary_embedding_base",val:" = 10000"},{name:"max_source_positions",val:" = 5000"},{name:"conv_depthwise_kernel_size",val:" = 31"},{name:"conformer_conv_dropout",val:" = 0.1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Vocabulary size of the Wav2Vec2Conformer model. Defines the number of different tokens that can be
represented by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerModel">Wav2Vec2ConformerModel</a>. Vocabulary size of the
model. Defines the different tokens that can be represented by the <em>inputs_ids</em> passed to the forward
method of <a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerModel">Wav2Vec2ConformerModel</a>.`,name:"vocab_size"},{anchor:"transformers.Wav2Vec2ConformerConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.Wav2Vec2ConformerConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.Wav2Vec2ConformerConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.Wav2Vec2ConformerConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.Wav2Vec2ConformerConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.Wav2Vec2ConformerConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.Wav2Vec2ConformerConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.Wav2Vec2ConformerConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForCTC">Wav2Vec2ConformerForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.Wav2Vec2ConformerConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.Wav2Vec2ConformerConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.Wav2Vec2ConformerConfig.feat_extract_norm",description:`<strong>feat_extract_norm</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;group&quot;</code>) &#x2014;
The norm to be applied to 1D convolutional layers in feature encoder. One of <code>&quot;group&quot;</code> for group
normalization of only the first 1D convolutional layer or <code>&quot;layer&quot;</code> for layer normalization of all 1D
convolutional layers.`,name:"feat_extract_norm"},{anchor:"transformers.Wav2Vec2ConformerConfig.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature encoder.`,name:"feat_proj_dropout"},{anchor:"transformers.Wav2Vec2ConformerConfig.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.Wav2Vec2ConformerConfig.feat_quantizer_dropout",description:`<strong>feat_quantizer_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for quantized feature encoder states.`,name:"feat_quantizer_dropout"},{anchor:"transformers.Wav2Vec2ConformerConfig.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature encoder. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.Wav2Vec2ConformerConfig.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 2, 2, 2, 2, 2)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature encoder. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.Wav2Vec2ConformerConfig.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 3, 3, 3, 3, 3)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature encoder. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the length of
<em>conv_dim</em>.`,name:"conv_kernel"},{anchor:"transformers.Wav2Vec2ConformerConfig.conv_bias",description:`<strong>conv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the 1D convolutional layers have a bias.`,name:"conv_bias"},{anchor:"transformers.Wav2Vec2ConformerConfig.num_conv_pos_embeddings",description:`<strong>num_conv_pos_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Number of convolutional positional embeddings. Defines the kernel size of 1D convolutional positional
embeddings layer.`,name:"num_conv_pos_embeddings"},{anchor:"transformers.Wav2Vec2ConformerConfig.num_conv_pos_embedding_groups",description:`<strong>num_conv_pos_embedding_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of groups of 1D convolutional positional embeddings layer.`,name:"num_conv_pos_embedding_groups"},{anchor:"transformers.Wav2Vec2ConformerConfig.apply_spec_augment",description:`<strong>apply_spec_augment</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
instance of <a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForCTC">Wav2Vec2ConformerForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.Wav2Vec2ConformerConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForCTC">Wav2Vec2ConformerForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.Wav2Vec2ConformerConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForSequenceClassification">Wav2Vec2ConformerForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.Wav2Vec2ConformerConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"},{anchor:"transformers.Wav2Vec2ConformerConfig.tdnn_dim",description:`<strong>tdnn_dim</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 1500)</code>) &#x2014;
A tuple of integers defining the number of output channels of each 1D convolutional layer in the <em>TDNN</em>
module of the <em>XVector</em> model. The length of <em>tdnn_dim</em> defines the number of <em>TDNN</em> layers.`,name:"tdnn_dim"},{anchor:"transformers.Wav2Vec2ConformerConfig.tdnn_kernel",description:`<strong>tdnn_kernel</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(5, 3, 3, 1, 1)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the <em>TDNN</em> module of the
<em>XVector</em> model. The length of <em>tdnn_kernel</em> has to match the length of <em>tdnn_dim</em>.`,name:"tdnn_kernel"},{anchor:"transformers.Wav2Vec2ConformerConfig.tdnn_dilation",description:`<strong>tdnn_dilation</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(1, 2, 3, 1, 1)</code>) &#x2014;
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
The dropout probability for all convolutional layers in Conformer blocks.`,name:"conformer_conv_dropout"}],source:"https://github.com/huggingface/transformers/blob/vr_16543/src/transformers/models/wav2vec2_conformer/configuration_wav2vec2_conformer.py#L33"}}),je=new ye({props:{anchor:"transformers.Wav2Vec2ConformerConfig.example",$$slots:{default:[kc]},$$scope:{ctx:T}}}),mo=new ee({}),po=new z({props:{name:"class transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput",anchor:"transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"projected_states",val:": FloatTensor = None"},{name:"projected_quantized_states",val:": FloatTensor = None"},{name:"codevector_perplexity",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"contrastive_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"diversity_loss",val:": typing.Optional[torch.FloatTensor] = None"}],parametersDescription:[{anchor:"transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>sample_negative_indices</code> are passed, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
The diversity loss (L_d) as stated in the <a href="https://arxiv.org/pdf/2006.11477.pdf" rel="nofollow">official paper</a> .`,name:"diversity_loss"}],source:"https://github.com/huggingface/transformers/blob/vr_16543/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L90"}}),ho=new ee({}),uo=new z({props:{name:"class transformers.Wav2Vec2ConformerModel",anchor:"transformers.Wav2Vec2ConformerModel",parameters:[{name:"config",val:": Wav2Vec2ConformerConfig"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig">Wav2Vec2ConformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16543/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16543/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1251"}}),Co=new z({props:{name:"forward",anchor:"transformers.Wav2Vec2ConformerModel.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ConformerModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_16543/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_16543/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1324",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16543/en/model_doc/wav2vec2#transformers.modeling_outputs.Wav2Vec2BaseModelOutput"
>transformers.modeling_outputs.Wav2Vec2BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig"
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
  href="/docs/transformers/pr_16543/en/model_doc/wav2vec2#transformers.modeling_outputs.Wav2Vec2BaseModelOutput"
>transformers.modeling_outputs.Wav2Vec2BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qe=new St({props:{$$slots:{default:[$c]},$$scope:{ctx:T}}}),Ee=new ye({props:{anchor:"transformers.Wav2Vec2ConformerModel.forward.example",$$slots:{default:[Vc]},$$scope:{ctx:T}}}),yo=new ee({}),ko=new z({props:{name:"class transformers.Wav2Vec2ConformerForCTC",anchor:"transformers.Wav2Vec2ConformerForCTC",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig">Wav2Vec2ConformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16543/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16543/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1602"}}),jo=new z({props:{name:"forward",anchor:"transformers.Wav2Vec2ConformerForCTC.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ConformerForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_16543/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ConformerForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16543/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1633",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16543/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig"
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
  href="/docs/transformers/pr_16543/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Me=new St({props:{$$slots:{default:[Tc]},$$scope:{ctx:T}}}),Ae=new ye({props:{anchor:"transformers.Wav2Vec2ConformerForCTC.forward.example",$$slots:{default:[Wc]},$$scope:{ctx:T}}}),ze=new ye({props:{anchor:"transformers.Wav2Vec2ConformerForCTC.forward.example-2",$$slots:{default:[jc]},$$scope:{ctx:T}}}),Fo=new ee({}),xo=new z({props:{name:"class transformers.Wav2Vec2ConformerForSequenceClassification",anchor:"transformers.Wav2Vec2ConformerForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig">Wav2Vec2ConformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16543/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16543/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1723"}}),zo=new z({props:{name:"forward",anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_16543/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16543/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1759",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16543/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig"
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
  href="/docs/transformers/pr_16543/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oe=new St({props:{$$slots:{default:[Fc]},$$scope:{ctx:T}}}),De=new ye({props:{anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.forward.example",$$slots:{default:[xc]},$$scope:{ctx:T}}}),Le=new ye({props:{anchor:"transformers.Wav2Vec2ConformerForSequenceClassification.forward.example-2",$$slots:{default:[qc]},$$scope:{ctx:T}}}),So=new ee({}),Oo=new z({props:{name:"class transformers.Wav2Vec2ConformerForAudioFrameClassification",anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig">Wav2Vec2ConformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16543/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16543/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1838"}}),Bo=new z({props:{name:"forward",anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_16543/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16543/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1873",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16543/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig"
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
  href="/docs/transformers/pr_16543/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ie=new St({props:{$$slots:{default:[Ec]},$$scope:{ctx:T}}}),Xe=new ye({props:{anchor:"transformers.Wav2Vec2ConformerForAudioFrameClassification.forward.example",$$slots:{default:[Pc]},$$scope:{ctx:T}}}),Ho=new ee({}),Ro=new z({props:{name:"class transformers.Wav2Vec2ConformerForXVector",anchor:"transformers.Wav2Vec2ConformerForXVector",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForXVector.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig">Wav2Vec2ConformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16543/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16543/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1988"}}),Jo=new z({props:{name:"forward",anchor:"transformers.Wav2Vec2ConformerForXVector.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForXVector.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ConformerForXVector.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_16543/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ConformerForXVector.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vr_16543/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L2041",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16543/en/main_classes/output#transformers.modeling_outputs.XVectorOutput"
>transformers.modeling_outputs.XVectorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig"
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
<p><a
  href="/docs/transformers/pr_16543/en/main_classes/output#transformers.modeling_outputs.XVectorOutput"
>transformers.modeling_outputs.XVectorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),He=new St({props:{$$slots:{default:[Mc]},$$scope:{ctx:T}}}),Re=new ye({props:{anchor:"transformers.Wav2Vec2ConformerForXVector.forward.example",$$slots:{default:[Ac]},$$scope:{ctx:T}}}),Yo=new ee({}),et=new z({props:{name:"class transformers.Wav2Vec2ConformerForPreTraining",anchor:"transformers.Wav2Vec2ConformerForPreTraining",parameters:[{name:"config",val:": Wav2Vec2ConformerConfig"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig">Wav2Vec2ConformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16543/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_16543/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1390"}}),nt=new z({props:{name:"forward",anchor:"transformers.Wav2Vec2ConformerForPreTraining.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.BoolTensor] = None"},{name:"sampled_negative_indices",val:": typing.Optional[torch.BoolTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.Wav2Vec2ConformerForPreTraining.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/pr_16543/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.Wav2Vec2ConformerForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_16543/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Wav2Vec2ConformerForPreTraining.forward.mask_time_indices",description:`<strong>mask_time_indices</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices to mask extracted features for contrastive loss. When in training mode, model learns to predict
masked extracted features in <em>config.proj_codevector_dim</em> space.`,name:"mask_time_indices"},{anchor:"transformers.Wav2Vec2ConformerForPreTraining.forward.sampled_negative_indices",description:`<strong>sampled_negative_indices</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length, num_negatives)</code>, <em>optional</em>) &#x2014;
Indices indicating which quantized target vectors are used as negative sampled vectors in contrastive loss.
Required input for pre-training.`,name:"sampled_negative_indices"}],source:"https://github.com/huggingface/transformers/blob/vr_16543/src/transformers/models/wav2vec2_conformer/modeling_wav2vec2_conformer.py#L1443",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput"
>transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerConfig"
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
  href="/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput"
>transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ze=new St({props:{$$slots:{default:[zc]},$$scope:{ctx:T}}}),Qe=new ye({props:{anchor:"transformers.Wav2Vec2ConformerForPreTraining.forward.example",$$slots:{default:[Sc]},$$scope:{ctx:T}}}),{c(){c=s("meta"),_=h(),m=s("h1"),f=s("a"),v=s("span"),w(n.$$.fragment),p=h(),W=s("span"),ya=r("Wav2Vec2-Conformer"),Wr=h(),oe=s("h2"),Ve=s("a"),Ot=s("span"),w(oo.$$.fragment),ka=h(),Dt=s("span"),$a=r("Overview"),jr=h(),Te=s("p"),Va=r("The Wav2Vec2-Conformer weights were released by the Meta AI team within the "),to=s("a"),Ta=r("Fairseq library"),Wa=r("."),Fr=h(),ct=s("p"),ja=r("Tips:"),xr=h(),U=s("ul"),H=s("li"),Fa=r("Wav2Vec2-Conformer follows the same architecture as Wav2Vec2, but replaces the "),Lt=s("em"),xa=r("Attention"),qa=r("-block with a "),Nt=s("em"),Ea=r("Conformer"),Pa=r(`-block
as introduced in `),ro=s("a"),Ma=r("Conformer: Convolution-augmented Transformer for Speech Recognition"),Aa=r("."),za=h(),It=s("li"),Sa=r("Wav2Vec2-Conformer uses the same tokenizer and feature extractor as Wav2Vec2."),Oa=h(),ao=s("li"),Da=r(`Wav2Vec2-Conformer can use either no relative position embeddings, Transformer-XL-like position embeddings, or
rotary position embeddings by setting the correct `),Xt=s("code"),La=r("config.position_embeddings_type"),Na=r("."),qr=h(),Z=s("p"),Ia=r("This model was contributed by "),no=s("a"),Xa=r("patrickvonplaten"),Ba=r(`.
The original code can be found `),so=s("a"),Ha=r("here"),Ra=r("."),Er=h(),te=s("h2"),We=s("a"),Bt=s("span"),w(io.$$.fragment),Ua=h(),Ht=s("span"),Za=r("Wav2Vec2ConformerConfig"),Pr=h(),S=s("div"),w(lo.$$.fragment),Qa=h(),re=s("p"),Ka=r("This is the configuration class to store the configuration of a "),dt=s("a"),Ga=r("Wav2Vec2ConformerModel"),Ja=r(`. It is used to
instantiate an Wav2Vec2Conformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Wav2Vec2Conformer
`),co=s("a"),Ya=r("facebook/wav2vec2-conformer-large-rel-pos"),en=r(`
architecture.`),on=h(),ae=s("p"),tn=r("Configuration objects inherit from "),mt=s("a"),rn=r("PretrainedConfig"),an=r(` and can be used to control the model outputs. Read the
documentation from `),pt=s("a"),nn=r("PretrainedConfig"),sn=r(" for more information."),ln=h(),w(je.$$.fragment),Mr=h(),ne=s("h2"),Fe=s("a"),Rt=s("span"),w(mo.$$.fragment),cn=h(),Ut=s("span"),dn=r("Wav2Vec2Conformer specific outputs"),Ar=h(),se=s("div"),w(po.$$.fragment),mn=h(),fo=s("p"),pn=r("Output type of "),ft=s("a"),fn=r("Wav2Vec2ConformerForPreTraining"),hn=r(", with potential hidden states and attentions."),zr=h(),ie=s("h2"),xe=s("a"),Zt=s("span"),w(ho.$$.fragment),un=h(),Qt=s("span"),gn=r("Wav2Vec2ConformerModel"),Sr=h(),q=s("div"),w(uo.$$.fragment),_n=h(),go=s("p"),vn=r(`The bare Wav2Vec2Conformer Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2Conformer was proposed in `),_o=s("a"),bn=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),wn=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Cn=h(),vo=s("p"),yn=r("This model inherits from "),ht=s("a"),kn=r("PreTrainedModel"),$n=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Vn=h(),bo=s("p"),Tn=r("This model is a PyTorch "),wo=s("a"),Wn=r("nn.Module"),jn=r(` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),Fn=h(),O=s("div"),w(Co.$$.fragment),xn=h(),le=s("p"),qn=r("The "),ut=s("a"),En=r("Wav2Vec2ConformerModel"),Pn=r(" forward method, overrides the "),Kt=s("code"),Mn=r("__call__"),An=r(" special method."),zn=h(),w(qe.$$.fragment),Sn=h(),w(Ee.$$.fragment),Or=h(),ce=s("h2"),Pe=s("a"),Gt=s("span"),w(yo.$$.fragment),On=h(),Jt=s("span"),Dn=r("Wav2Vec2ConformerForCTC"),Dr=h(),E=s("div"),w(ko.$$.fragment),Ln=h(),de=s("p"),Nn=r("Wav2Vec2Conformer Model with a "),Yt=s("code"),In=r("language modeling"),Xn=r(` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2Conformer was proposed in `),$o=s("a"),Bn=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Hn=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Rn=h(),Vo=s("p"),Un=r("This model inherits from "),gt=s("a"),Zn=r("PreTrainedModel"),Qn=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Kn=h(),To=s("p"),Gn=r("This model is a PyTorch "),Wo=s("a"),Jn=r("nn.Module"),Yn=r(` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),es=h(),M=s("div"),w(jo.$$.fragment),os=h(),me=s("p"),ts=r("The "),_t=s("a"),rs=r("Wav2Vec2ConformerForCTC"),as=r(" forward method, overrides the "),er=s("code"),ns=r("__call__"),ss=r(" special method."),is=h(),w(Me.$$.fragment),ls=h(),w(Ae.$$.fragment),cs=h(),w(ze.$$.fragment),Lr=h(),pe=s("h2"),Se=s("a"),or=s("span"),w(Fo.$$.fragment),ds=h(),tr=s("span"),ms=r("Wav2Vec2ConformerForSequenceClassification"),Nr=h(),j=s("div"),w(xo.$$.fragment),ps=h(),rr=s("p"),fs=r(`Wav2Vec2Conformer Model with a sequence classification head on top (a linear layer over the pooled output) for
tasks like SUPERB Keyword Spotting.`),hs=h(),qo=s("p"),us=r("Wav2Vec2Conformer was proposed in "),Eo=s("a"),gs=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),_s=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),vs=h(),Po=s("p"),bs=r("This model inherits from "),vt=s("a"),ws=r("PreTrainedModel"),Cs=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ys=h(),Mo=s("p"),ks=r("This model is a PyTorch "),Ao=s("a"),$s=r("nn.Module"),Vs=r(` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),Ts=h(),A=s("div"),w(zo.$$.fragment),Ws=h(),fe=s("p"),js=r("The "),bt=s("a"),Fs=r("Wav2Vec2ConformerForSequenceClassification"),xs=r(" forward method, overrides the "),ar=s("code"),qs=r("__call__"),Es=r(" special method."),Ps=h(),w(Oe.$$.fragment),Ms=h(),w(De.$$.fragment),As=h(),w(Le.$$.fragment),Ir=h(),he=s("h2"),Ne=s("a"),nr=s("span"),w(So.$$.fragment),zs=h(),sr=s("span"),Ss=r("Wav2Vec2ConformerForAudioFrameClassification"),Xr=h(),F=s("div"),w(Oo.$$.fragment),Os=h(),ir=s("p"),Ds=r("Wav2Vec2Conformer Model with a frame classification head on top for tasks like Speaker Diarization."),Ls=h(),Do=s("p"),Ns=r("Wav2Vec2Conformer was proposed in "),Lo=s("a"),Is=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Xs=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Bs=h(),No=s("p"),Hs=r("This model inherits from "),wt=s("a"),Rs=r("PreTrainedModel"),Us=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Zs=h(),Io=s("p"),Qs=r("This model is a PyTorch "),Xo=s("a"),Ks=r("nn.Module"),Gs=r(` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),Js=h(),D=s("div"),w(Bo.$$.fragment),Ys=h(),ue=s("p"),ei=r("The "),Ct=s("a"),oi=r("Wav2Vec2ConformerForAudioFrameClassification"),ti=r(" forward method, overrides the "),lr=s("code"),ri=r("__call__"),ai=r(" special method."),ni=h(),w(Ie.$$.fragment),si=h(),w(Xe.$$.fragment),Br=h(),ge=s("h2"),Be=s("a"),cr=s("span"),w(Ho.$$.fragment),ii=h(),dr=s("span"),li=r("Wav2Vec2ConformerForXVector"),Hr=h(),x=s("div"),w(Ro.$$.fragment),ci=h(),mr=s("p"),di=r("Wav2Vec2Conformer Model with an XVector feature extraction head on top for tasks like Speaker Verification."),mi=h(),Uo=s("p"),pi=r("Wav2Vec2Conformer was proposed in "),Zo=s("a"),fi=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),hi=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),ui=h(),Qo=s("p"),gi=r("This model inherits from "),yt=s("a"),_i=r("PreTrainedModel"),vi=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),bi=h(),Ko=s("p"),wi=r("This model is a PyTorch "),Go=s("a"),Ci=r("nn.Module"),yi=r(` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),ki=h(),L=s("div"),w(Jo.$$.fragment),$i=h(),_e=s("p"),Vi=r("The "),kt=s("a"),Ti=r("Wav2Vec2ConformerForXVector"),Wi=r(" forward method, overrides the "),pr=s("code"),ji=r("__call__"),Fi=r(" special method."),xi=h(),w(He.$$.fragment),qi=h(),w(Re.$$.fragment),Rr=h(),ve=s("h2"),Ue=s("a"),fr=s("span"),w(Yo.$$.fragment),Ei=h(),hr=s("span"),Pi=r("Wav2Vec2ConformerForPreTraining"),Ur=h(),P=s("div"),w(et.$$.fragment),Mi=h(),be=s("p"),Ai=r("Wav2Vec2Conformer Model with a quantizer and "),ur=s("code"),zi=r("VQ"),Si=r(` head on top.
Wav2Vec2Conformer was proposed in `),ot=s("a"),Oi=r(`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Di=r(` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),Li=h(),tt=s("p"),Ni=r("This model inherits from "),$t=s("a"),Ii=r("PreTrainedModel"),Xi=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Bi=h(),rt=s("p"),Hi=r("This model is a PyTorch "),at=s("a"),Ri=r("nn.Module"),Ui=r(` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),Zi=h(),N=s("div"),w(nt.$$.fragment),Qi=h(),we=s("p"),Ki=r("The "),Vt=s("a"),Gi=r("Wav2Vec2ConformerForPreTraining"),Ji=r(" forward method, overrides the "),gr=s("code"),Yi=r("__call__"),el=r(" special method."),ol=h(),w(Ze.$$.fragment),tl=h(),w(Qe.$$.fragment),this.h()},l(o){const g=Cc('[data-svelte="svelte-1phssyn"]',document.head);c=i(g,"META",{name:!0,content:!0}),g.forEach(t),_=u(o),m=i(o,"H1",{class:!0});var st=l(m);f=i(st,"A",{id:!0,class:!0,href:!0});var _r=l(f);v=i(_r,"SPAN",{});var vr=l(v);C(n.$$.fragment,vr),vr.forEach(t),_r.forEach(t),p=u(st),W=i(st,"SPAN",{});var br=l(W);ya=a(br,"Wav2Vec2-Conformer"),br.forEach(t),st.forEach(t),Wr=u(o),oe=i(o,"H2",{class:!0});var it=l(oe);Ve=i(it,"A",{id:!0,class:!0,href:!0});var wr=l(Ve);Ot=i(wr,"SPAN",{});var Cr=l(Ot);C(oo.$$.fragment,Cr),Cr.forEach(t),wr.forEach(t),ka=u(it),Dt=i(it,"SPAN",{});var yr=l(Dt);$a=a(yr,"Overview"),yr.forEach(t),it.forEach(t),jr=u(o),Te=i(o,"P",{});var lt=l(Te);Va=a(lt,"The Wav2Vec2-Conformer weights were released by the Meta AI team within the "),to=i(lt,"A",{href:!0,rel:!0});var kr=l(to);Ta=a(kr,"Fairseq library"),kr.forEach(t),Wa=a(lt,"."),lt.forEach(t),Fr=u(o),ct=i(o,"P",{});var $r=l(ct);ja=a($r,"Tips:"),$r.forEach(t),xr=u(o),U=i(o,"UL",{});var Ce=l(U);H=i(Ce,"LI",{});var R=l(H);Fa=a(R,"Wav2Vec2-Conformer follows the same architecture as Wav2Vec2, but replaces the "),Lt=i(R,"EM",{});var Vr=l(Lt);xa=a(Vr,"Attention"),Vr.forEach(t),qa=a(R,"-block with a "),Nt=i(R,"EM",{});var Tr=l(Nt);Ea=a(Tr,"Conformer"),Tr.forEach(t),Pa=a(R,`-block
as introduced in `),ro=i(R,"A",{href:!0,rel:!0});var rl=l(ro);Ma=a(rl,"Conformer: Convolution-augmented Transformer for Speech Recognition"),rl.forEach(t),Aa=a(R,"."),R.forEach(t),za=u(Ce),It=i(Ce,"LI",{});var al=l(It);Sa=a(al,"Wav2Vec2-Conformer uses the same tokenizer and feature extractor as Wav2Vec2."),al.forEach(t),Oa=u(Ce),ao=i(Ce,"LI",{});var Qr=l(ao);Da=a(Qr,`Wav2Vec2-Conformer can use either no relative position embeddings, Transformer-XL-like position embeddings, or
rotary position embeddings by setting the correct `),Xt=i(Qr,"CODE",{});var nl=l(Xt);La=a(nl,"config.position_embeddings_type"),nl.forEach(t),Na=a(Qr,"."),Qr.forEach(t),Ce.forEach(t),qr=u(o),Z=i(o,"P",{});var Tt=l(Z);Ia=a(Tt,"This model was contributed by "),no=i(Tt,"A",{href:!0,rel:!0});var sl=l(no);Xa=a(sl,"patrickvonplaten"),sl.forEach(t),Ba=a(Tt,`.
The original code can be found `),so=i(Tt,"A",{href:!0,rel:!0});var il=l(so);Ha=a(il,"here"),il.forEach(t),Ra=a(Tt,"."),Tt.forEach(t),Er=u(o),te=i(o,"H2",{class:!0});var Kr=l(te);We=i(Kr,"A",{id:!0,class:!0,href:!0});var ll=l(We);Bt=i(ll,"SPAN",{});var cl=l(Bt);C(io.$$.fragment,cl),cl.forEach(t),ll.forEach(t),Ua=u(Kr),Ht=i(Kr,"SPAN",{});var dl=l(Ht);Za=a(dl,"Wav2Vec2ConformerConfig"),dl.forEach(t),Kr.forEach(t),Pr=u(o),S=i(o,"DIV",{class:!0});var Ke=l(S);C(lo.$$.fragment,Ke),Qa=u(Ke),re=i(Ke,"P",{});var Wt=l(re);Ka=a(Wt,"This is the configuration class to store the configuration of a "),dt=i(Wt,"A",{href:!0});var ml=l(dt);Ga=a(ml,"Wav2Vec2ConformerModel"),ml.forEach(t),Ja=a(Wt,`. It is used to
instantiate an Wav2Vec2Conformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Wav2Vec2Conformer
`),co=i(Wt,"A",{href:!0,rel:!0});var pl=l(co);Ya=a(pl,"facebook/wav2vec2-conformer-large-rel-pos"),pl.forEach(t),en=a(Wt,`
architecture.`),Wt.forEach(t),on=u(Ke),ae=i(Ke,"P",{});var jt=l(ae);tn=a(jt,"Configuration objects inherit from "),mt=i(jt,"A",{href:!0});var fl=l(mt);rn=a(fl,"PretrainedConfig"),fl.forEach(t),an=a(jt,` and can be used to control the model outputs. Read the
documentation from `),pt=i(jt,"A",{href:!0});var hl=l(pt);nn=a(hl,"PretrainedConfig"),hl.forEach(t),sn=a(jt," for more information."),jt.forEach(t),ln=u(Ke),C(je.$$.fragment,Ke),Ke.forEach(t),Mr=u(o),ne=i(o,"H2",{class:!0});var Gr=l(ne);Fe=i(Gr,"A",{id:!0,class:!0,href:!0});var ul=l(Fe);Rt=i(ul,"SPAN",{});var gl=l(Rt);C(mo.$$.fragment,gl),gl.forEach(t),ul.forEach(t),cn=u(Gr),Ut=i(Gr,"SPAN",{});var _l=l(Ut);dn=a(_l,"Wav2Vec2Conformer specific outputs"),_l.forEach(t),Gr.forEach(t),Ar=u(o),se=i(o,"DIV",{class:!0});var Jr=l(se);C(po.$$.fragment,Jr),mn=u(Jr),fo=i(Jr,"P",{});var Yr=l(fo);pn=a(Yr,"Output type of "),ft=i(Yr,"A",{href:!0});var vl=l(ft);fn=a(vl,"Wav2Vec2ConformerForPreTraining"),vl.forEach(t),hn=a(Yr,", with potential hidden states and attentions."),Yr.forEach(t),Jr.forEach(t),zr=u(o),ie=i(o,"H2",{class:!0});var ea=l(ie);xe=i(ea,"A",{id:!0,class:!0,href:!0});var bl=l(xe);Zt=i(bl,"SPAN",{});var wl=l(Zt);C(ho.$$.fragment,wl),wl.forEach(t),bl.forEach(t),un=u(ea),Qt=i(ea,"SPAN",{});var Cl=l(Qt);gn=a(Cl,"Wav2Vec2ConformerModel"),Cl.forEach(t),ea.forEach(t),Sr=u(o),q=i(o,"DIV",{class:!0});var Q=l(q);C(uo.$$.fragment,Q),_n=u(Q),go=i(Q,"P",{});var oa=l(go);vn=a(oa,`The bare Wav2Vec2Conformer Model transformer outputting raw hidden-states without any specific head on top.
Wav2Vec2Conformer was proposed in `),_o=i(oa,"A",{href:!0,rel:!0});var yl=l(_o);bn=a(yl,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),yl.forEach(t),wn=a(oa,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),oa.forEach(t),Cn=u(Q),vo=i(Q,"P",{});var ta=l(vo);yn=a(ta,"This model inherits from "),ht=i(ta,"A",{href:!0});var kl=l(ht);kn=a(kl,"PreTrainedModel"),kl.forEach(t),$n=a(ta,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ta.forEach(t),Vn=u(Q),bo=i(Q,"P",{});var ra=l(bo);Tn=a(ra,"This model is a PyTorch "),wo=i(ra,"A",{href:!0,rel:!0});var $l=l(wo);Wn=a($l,"nn.Module"),$l.forEach(t),jn=a(ra,` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),ra.forEach(t),Fn=u(Q),O=i(Q,"DIV",{class:!0});var Ge=l(O);C(Co.$$.fragment,Ge),xn=u(Ge),le=i(Ge,"P",{});var Ft=l(le);qn=a(Ft,"The "),ut=i(Ft,"A",{href:!0});var Vl=l(ut);En=a(Vl,"Wav2Vec2ConformerModel"),Vl.forEach(t),Pn=a(Ft," forward method, overrides the "),Kt=i(Ft,"CODE",{});var Tl=l(Kt);Mn=a(Tl,"__call__"),Tl.forEach(t),An=a(Ft," special method."),Ft.forEach(t),zn=u(Ge),C(qe.$$.fragment,Ge),Sn=u(Ge),C(Ee.$$.fragment,Ge),Ge.forEach(t),Q.forEach(t),Or=u(o),ce=i(o,"H2",{class:!0});var aa=l(ce);Pe=i(aa,"A",{id:!0,class:!0,href:!0});var Wl=l(Pe);Gt=i(Wl,"SPAN",{});var jl=l(Gt);C(yo.$$.fragment,jl),jl.forEach(t),Wl.forEach(t),On=u(aa),Jt=i(aa,"SPAN",{});var Fl=l(Jt);Dn=a(Fl,"Wav2Vec2ConformerForCTC"),Fl.forEach(t),aa.forEach(t),Dr=u(o),E=i(o,"DIV",{class:!0});var K=l(E);C(ko.$$.fragment,K),Ln=u(K),de=i(K,"P",{});var xt=l(de);Nn=a(xt,"Wav2Vec2Conformer Model with a "),Yt=i(xt,"CODE",{});var xl=l(Yt);In=a(xl,"language modeling"),xl.forEach(t),Xn=a(xt,` head on top for Connectionist Temporal Classification (CTC).
Wav2Vec2Conformer was proposed in `),$o=i(xt,"A",{href:!0,rel:!0});var ql=l($o);Bn=a(ql,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),ql.forEach(t),Hn=a(xt,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),xt.forEach(t),Rn=u(K),Vo=i(K,"P",{});var na=l(Vo);Un=a(na,"This model inherits from "),gt=i(na,"A",{href:!0});var El=l(gt);Zn=a(El,"PreTrainedModel"),El.forEach(t),Qn=a(na,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),na.forEach(t),Kn=u(K),To=i(K,"P",{});var sa=l(To);Gn=a(sa,"This model is a PyTorch "),Wo=i(sa,"A",{href:!0,rel:!0});var Pl=l(Wo);Jn=a(Pl,"nn.Module"),Pl.forEach(t),Yn=a(sa,` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),sa.forEach(t),es=u(K),M=i(K,"DIV",{class:!0});var G=l(M);C(jo.$$.fragment,G),os=u(G),me=i(G,"P",{});var qt=l(me);ts=a(qt,"The "),_t=i(qt,"A",{href:!0});var Ml=l(_t);rs=a(Ml,"Wav2Vec2ConformerForCTC"),Ml.forEach(t),as=a(qt," forward method, overrides the "),er=i(qt,"CODE",{});var Al=l(er);ns=a(Al,"__call__"),Al.forEach(t),ss=a(qt," special method."),qt.forEach(t),is=u(G),C(Me.$$.fragment,G),ls=u(G),C(Ae.$$.fragment,G),cs=u(G),C(ze.$$.fragment,G),G.forEach(t),K.forEach(t),Lr=u(o),pe=i(o,"H2",{class:!0});var ia=l(pe);Se=i(ia,"A",{id:!0,class:!0,href:!0});var zl=l(Se);or=i(zl,"SPAN",{});var Sl=l(or);C(Fo.$$.fragment,Sl),Sl.forEach(t),zl.forEach(t),ds=u(ia),tr=i(ia,"SPAN",{});var Ol=l(tr);ms=a(Ol,"Wav2Vec2ConformerForSequenceClassification"),Ol.forEach(t),ia.forEach(t),Nr=u(o),j=i(o,"DIV",{class:!0});var I=l(j);C(xo.$$.fragment,I),ps=u(I),rr=i(I,"P",{});var Dl=l(rr);fs=a(Dl,`Wav2Vec2Conformer Model with a sequence classification head on top (a linear layer over the pooled output) for
tasks like SUPERB Keyword Spotting.`),Dl.forEach(t),hs=u(I),qo=i(I,"P",{});var la=l(qo);us=a(la,"Wav2Vec2Conformer was proposed in "),Eo=i(la,"A",{href:!0,rel:!0});var Ll=l(Eo);gs=a(Ll,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Ll.forEach(t),_s=a(la,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),la.forEach(t),vs=u(I),Po=i(I,"P",{});var ca=l(Po);bs=a(ca,"This model inherits from "),vt=i(ca,"A",{href:!0});var Nl=l(vt);ws=a(Nl,"PreTrainedModel"),Nl.forEach(t),Cs=a(ca,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ca.forEach(t),ys=u(I),Mo=i(I,"P",{});var da=l(Mo);ks=a(da,"This model is a PyTorch "),Ao=i(da,"A",{href:!0,rel:!0});var Il=l(Ao);$s=a(Il,"nn.Module"),Il.forEach(t),Vs=a(da,` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),da.forEach(t),Ts=u(I),A=i(I,"DIV",{class:!0});var J=l(A);C(zo.$$.fragment,J),Ws=u(J),fe=i(J,"P",{});var Et=l(fe);js=a(Et,"The "),bt=i(Et,"A",{href:!0});var Xl=l(bt);Fs=a(Xl,"Wav2Vec2ConformerForSequenceClassification"),Xl.forEach(t),xs=a(Et," forward method, overrides the "),ar=i(Et,"CODE",{});var Bl=l(ar);qs=a(Bl,"__call__"),Bl.forEach(t),Es=a(Et," special method."),Et.forEach(t),Ps=u(J),C(Oe.$$.fragment,J),Ms=u(J),C(De.$$.fragment,J),As=u(J),C(Le.$$.fragment,J),J.forEach(t),I.forEach(t),Ir=u(o),he=i(o,"H2",{class:!0});var ma=l(he);Ne=i(ma,"A",{id:!0,class:!0,href:!0});var Hl=l(Ne);nr=i(Hl,"SPAN",{});var Rl=l(nr);C(So.$$.fragment,Rl),Rl.forEach(t),Hl.forEach(t),zs=u(ma),sr=i(ma,"SPAN",{});var Ul=l(sr);Ss=a(Ul,"Wav2Vec2ConformerForAudioFrameClassification"),Ul.forEach(t),ma.forEach(t),Xr=u(o),F=i(o,"DIV",{class:!0});var X=l(F);C(Oo.$$.fragment,X),Os=u(X),ir=i(X,"P",{});var Zl=l(ir);Ds=a(Zl,"Wav2Vec2Conformer Model with a frame classification head on top for tasks like Speaker Diarization."),Zl.forEach(t),Ls=u(X),Do=i(X,"P",{});var pa=l(Do);Ns=a(pa,"Wav2Vec2Conformer was proposed in "),Lo=i(pa,"A",{href:!0,rel:!0});var Ql=l(Lo);Is=a(Ql,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),Ql.forEach(t),Xs=a(pa,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),pa.forEach(t),Bs=u(X),No=i(X,"P",{});var fa=l(No);Hs=a(fa,"This model inherits from "),wt=i(fa,"A",{href:!0});var Kl=l(wt);Rs=a(Kl,"PreTrainedModel"),Kl.forEach(t),Us=a(fa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),fa.forEach(t),Zs=u(X),Io=i(X,"P",{});var ha=l(Io);Qs=a(ha,"This model is a PyTorch "),Xo=i(ha,"A",{href:!0,rel:!0});var Gl=l(Xo);Ks=a(Gl,"nn.Module"),Gl.forEach(t),Gs=a(ha,` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),ha.forEach(t),Js=u(X),D=i(X,"DIV",{class:!0});var Je=l(D);C(Bo.$$.fragment,Je),Ys=u(Je),ue=i(Je,"P",{});var Pt=l(ue);ei=a(Pt,"The "),Ct=i(Pt,"A",{href:!0});var Jl=l(Ct);oi=a(Jl,"Wav2Vec2ConformerForAudioFrameClassification"),Jl.forEach(t),ti=a(Pt," forward method, overrides the "),lr=i(Pt,"CODE",{});var Yl=l(lr);ri=a(Yl,"__call__"),Yl.forEach(t),ai=a(Pt," special method."),Pt.forEach(t),ni=u(Je),C(Ie.$$.fragment,Je),si=u(Je),C(Xe.$$.fragment,Je),Je.forEach(t),X.forEach(t),Br=u(o),ge=i(o,"H2",{class:!0});var ua=l(ge);Be=i(ua,"A",{id:!0,class:!0,href:!0});var ec=l(Be);cr=i(ec,"SPAN",{});var oc=l(cr);C(Ho.$$.fragment,oc),oc.forEach(t),ec.forEach(t),ii=u(ua),dr=i(ua,"SPAN",{});var tc=l(dr);li=a(tc,"Wav2Vec2ConformerForXVector"),tc.forEach(t),ua.forEach(t),Hr=u(o),x=i(o,"DIV",{class:!0});var B=l(x);C(Ro.$$.fragment,B),ci=u(B),mr=i(B,"P",{});var rc=l(mr);di=a(rc,"Wav2Vec2Conformer Model with an XVector feature extraction head on top for tasks like Speaker Verification."),rc.forEach(t),mi=u(B),Uo=i(B,"P",{});var ga=l(Uo);pi=a(ga,"Wav2Vec2Conformer was proposed in "),Zo=i(ga,"A",{href:!0,rel:!0});var ac=l(Zo);fi=a(ac,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),ac.forEach(t),hi=a(ga,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),ga.forEach(t),ui=u(B),Qo=i(B,"P",{});var _a=l(Qo);gi=a(_a,"This model inherits from "),yt=i(_a,"A",{href:!0});var nc=l(yt);_i=a(nc,"PreTrainedModel"),nc.forEach(t),vi=a(_a,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),_a.forEach(t),bi=u(B),Ko=i(B,"P",{});var va=l(Ko);wi=a(va,"This model is a PyTorch "),Go=i(va,"A",{href:!0,rel:!0});var sc=l(Go);Ci=a(sc,"nn.Module"),sc.forEach(t),yi=a(va,` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),va.forEach(t),ki=u(B),L=i(B,"DIV",{class:!0});var Ye=l(L);C(Jo.$$.fragment,Ye),$i=u(Ye),_e=i(Ye,"P",{});var Mt=l(_e);Vi=a(Mt,"The "),kt=i(Mt,"A",{href:!0});var ic=l(kt);Ti=a(ic,"Wav2Vec2ConformerForXVector"),ic.forEach(t),Wi=a(Mt," forward method, overrides the "),pr=i(Mt,"CODE",{});var lc=l(pr);ji=a(lc,"__call__"),lc.forEach(t),Fi=a(Mt," special method."),Mt.forEach(t),xi=u(Ye),C(He.$$.fragment,Ye),qi=u(Ye),C(Re.$$.fragment,Ye),Ye.forEach(t),B.forEach(t),Rr=u(o),ve=i(o,"H2",{class:!0});var ba=l(ve);Ue=i(ba,"A",{id:!0,class:!0,href:!0});var cc=l(Ue);fr=i(cc,"SPAN",{});var dc=l(fr);C(Yo.$$.fragment,dc),dc.forEach(t),cc.forEach(t),Ei=u(ba),hr=i(ba,"SPAN",{});var mc=l(hr);Pi=a(mc,"Wav2Vec2ConformerForPreTraining"),mc.forEach(t),ba.forEach(t),Ur=u(o),P=i(o,"DIV",{class:!0});var Y=l(P);C(et.$$.fragment,Y),Mi=u(Y),be=i(Y,"P",{});var At=l(be);Ai=a(At,"Wav2Vec2Conformer Model with a quantizer and "),ur=i(At,"CODE",{});var pc=l(ur);zi=a(pc,"VQ"),pc.forEach(t),Si=a(At,` head on top.
Wav2Vec2Conformer was proposed in `),ot=i(At,"A",{href:!0,rel:!0});var fc=l(ot);Oi=a(fc,`wav2vec 2.0: A Framework for Self-Supervised Learning of Speech
Representations`),fc.forEach(t),Di=a(At,` by Alexei Baevski, Henry Zhou, Abdelrahman Mohamed, Michael
Auli.`),At.forEach(t),Li=u(Y),tt=i(Y,"P",{});var wa=l(tt);Ni=a(wa,"This model inherits from "),$t=i(wa,"A",{href:!0});var hc=l($t);Ii=a(hc,"PreTrainedModel"),hc.forEach(t),Xi=a(wa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),wa.forEach(t),Bi=u(Y),rt=i(Y,"P",{});var Ca=l(rt);Hi=a(Ca,"This model is a PyTorch "),at=i(Ca,"A",{href:!0,rel:!0});var uc=l(at);Ri=a(uc,"nn.Module"),uc.forEach(t),Ui=a(Ca,` sub-class. Use it as a
regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and behavior.`),Ca.forEach(t),Zi=u(Y),N=i(Y,"DIV",{class:!0});var eo=l(N);C(nt.$$.fragment,eo),Qi=u(eo),we=i(eo,"P",{});var zt=l(we);Ki=a(zt,"The "),Vt=i(zt,"A",{href:!0});var gc=l(Vt);Gi=a(gc,"Wav2Vec2ConformerForPreTraining"),gc.forEach(t),Ji=a(zt," forward method, overrides the "),gr=i(zt,"CODE",{});var _c=l(gr);Yi=a(_c,"__call__"),_c.forEach(t),el=a(zt," special method."),zt.forEach(t),ol=u(eo),C(Ze.$$.fragment,eo),tl=u(eo),C(Qe.$$.fragment,eo),eo.forEach(t),Y.forEach(t),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(Dc)),d(f,"id","wav2vec2conformer"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#wav2vec2conformer"),d(m,"class","relative group"),d(Ve,"id","overview"),d(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ve,"href","#overview"),d(oe,"class","relative group"),d(to,"href","https://github.com/pytorch/fairseq/blob/main/examples/wav2vec/README.md#pre-trained-models"),d(to,"rel","nofollow"),d(ro,"href","https://arxiv.org/abs/2005.08100"),d(ro,"rel","nofollow"),d(no,"href","https://huggingface.co/patrickvonplaten"),d(no,"rel","nofollow"),d(so,"href","https://github.com/pytorch/fairseq/tree/main/examples/wav2vec"),d(so,"rel","nofollow"),d(We,"id","transformers.Wav2Vec2ConformerConfig"),d(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(We,"href","#transformers.Wav2Vec2ConformerConfig"),d(te,"class","relative group"),d(dt,"href","/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerModel"),d(co,"href","https://huggingface.co/facebook/wav2vec2-conformer-large-rel-pos"),d(co,"rel","nofollow"),d(mt,"href","/docs/transformers/pr_16543/en/main_classes/configuration#transformers.PretrainedConfig"),d(pt,"href","/docs/transformers/pr_16543/en/main_classes/configuration#transformers.PretrainedConfig"),d(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Fe,"id","transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput"),d(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Fe,"href","#transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput"),d(ne,"class","relative group"),d(ft,"href","/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForPreTraining"),d(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(xe,"id","transformers.Wav2Vec2ConformerModel"),d(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(xe,"href","#transformers.Wav2Vec2ConformerModel"),d(ie,"class","relative group"),d(_o,"href","https://arxiv.org/abs/2006.11477"),d(_o,"rel","nofollow"),d(ht,"href","/docs/transformers/pr_16543/en/main_classes/model#transformers.PreTrainedModel"),d(wo,"href","https://pytorch.org/docs/stable/nn.html#nn.Module"),d(wo,"rel","nofollow"),d(ut,"href","/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerModel"),d(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Pe,"id","transformers.Wav2Vec2ConformerForCTC"),d(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Pe,"href","#transformers.Wav2Vec2ConformerForCTC"),d(ce,"class","relative group"),d($o,"href","https://arxiv.org/abs/2006.11477"),d($o,"rel","nofollow"),d(gt,"href","/docs/transformers/pr_16543/en/main_classes/model#transformers.PreTrainedModel"),d(Wo,"href","https://pytorch.org/docs/stable/nn.html#nn.Module"),d(Wo,"rel","nofollow"),d(_t,"href","/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForCTC"),d(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Se,"id","transformers.Wav2Vec2ConformerForSequenceClassification"),d(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Se,"href","#transformers.Wav2Vec2ConformerForSequenceClassification"),d(pe,"class","relative group"),d(Eo,"href","https://arxiv.org/abs/2006.11477"),d(Eo,"rel","nofollow"),d(vt,"href","/docs/transformers/pr_16543/en/main_classes/model#transformers.PreTrainedModel"),d(Ao,"href","https://pytorch.org/docs/stable/nn.html#nn.Module"),d(Ao,"rel","nofollow"),d(bt,"href","/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForSequenceClassification"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ne,"id","transformers.Wav2Vec2ConformerForAudioFrameClassification"),d(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ne,"href","#transformers.Wav2Vec2ConformerForAudioFrameClassification"),d(he,"class","relative group"),d(Lo,"href","https://arxiv.org/abs/2006.11477"),d(Lo,"rel","nofollow"),d(wt,"href","/docs/transformers/pr_16543/en/main_classes/model#transformers.PreTrainedModel"),d(Xo,"href","https://pytorch.org/docs/stable/nn.html#nn.Module"),d(Xo,"rel","nofollow"),d(Ct,"href","/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForAudioFrameClassification"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Be,"id","transformers.Wav2Vec2ConformerForXVector"),d(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Be,"href","#transformers.Wav2Vec2ConformerForXVector"),d(ge,"class","relative group"),d(Zo,"href","https://arxiv.org/abs/2006.11477"),d(Zo,"rel","nofollow"),d(yt,"href","/docs/transformers/pr_16543/en/main_classes/model#transformers.PreTrainedModel"),d(Go,"href","https://pytorch.org/docs/stable/nn.html#nn.Module"),d(Go,"rel","nofollow"),d(kt,"href","/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForXVector"),d(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ue,"id","transformers.Wav2Vec2ConformerForPreTraining"),d(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ue,"href","#transformers.Wav2Vec2ConformerForPreTraining"),d(ve,"class","relative group"),d(ot,"href","https://arxiv.org/abs/2006.11477"),d(ot,"rel","nofollow"),d($t,"href","/docs/transformers/pr_16543/en/main_classes/model#transformers.PreTrainedModel"),d(at,"href","https://pytorch.org/docs/stable/nn.html#nn.Module"),d(at,"rel","nofollow"),d(Vt,"href","/docs/transformers/pr_16543/en/model_doc/wav2vec2-conformer#transformers.Wav2Vec2ConformerForPreTraining"),d(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,c),b(o,_,g),b(o,m,g),e(m,f),e(f,v),y(n,v,null),e(m,p),e(m,W),e(W,ya),b(o,Wr,g),b(o,oe,g),e(oe,Ve),e(Ve,Ot),y(oo,Ot,null),e(oe,ka),e(oe,Dt),e(Dt,$a),b(o,jr,g),b(o,Te,g),e(Te,Va),e(Te,to),e(to,Ta),e(Te,Wa),b(o,Fr,g),b(o,ct,g),e(ct,ja),b(o,xr,g),b(o,U,g),e(U,H),e(H,Fa),e(H,Lt),e(Lt,xa),e(H,qa),e(H,Nt),e(Nt,Ea),e(H,Pa),e(H,ro),e(ro,Ma),e(H,Aa),e(U,za),e(U,It),e(It,Sa),e(U,Oa),e(U,ao),e(ao,Da),e(ao,Xt),e(Xt,La),e(ao,Na),b(o,qr,g),b(o,Z,g),e(Z,Ia),e(Z,no),e(no,Xa),e(Z,Ba),e(Z,so),e(so,Ha),e(Z,Ra),b(o,Er,g),b(o,te,g),e(te,We),e(We,Bt),y(io,Bt,null),e(te,Ua),e(te,Ht),e(Ht,Za),b(o,Pr,g),b(o,S,g),y(lo,S,null),e(S,Qa),e(S,re),e(re,Ka),e(re,dt),e(dt,Ga),e(re,Ja),e(re,co),e(co,Ya),e(re,en),e(S,on),e(S,ae),e(ae,tn),e(ae,mt),e(mt,rn),e(ae,an),e(ae,pt),e(pt,nn),e(ae,sn),e(S,ln),y(je,S,null),b(o,Mr,g),b(o,ne,g),e(ne,Fe),e(Fe,Rt),y(mo,Rt,null),e(ne,cn),e(ne,Ut),e(Ut,dn),b(o,Ar,g),b(o,se,g),y(po,se,null),e(se,mn),e(se,fo),e(fo,pn),e(fo,ft),e(ft,fn),e(fo,hn),b(o,zr,g),b(o,ie,g),e(ie,xe),e(xe,Zt),y(ho,Zt,null),e(ie,un),e(ie,Qt),e(Qt,gn),b(o,Sr,g),b(o,q,g),y(uo,q,null),e(q,_n),e(q,go),e(go,vn),e(go,_o),e(_o,bn),e(go,wn),e(q,Cn),e(q,vo),e(vo,yn),e(vo,ht),e(ht,kn),e(vo,$n),e(q,Vn),e(q,bo),e(bo,Tn),e(bo,wo),e(wo,Wn),e(bo,jn),e(q,Fn),e(q,O),y(Co,O,null),e(O,xn),e(O,le),e(le,qn),e(le,ut),e(ut,En),e(le,Pn),e(le,Kt),e(Kt,Mn),e(le,An),e(O,zn),y(qe,O,null),e(O,Sn),y(Ee,O,null),b(o,Or,g),b(o,ce,g),e(ce,Pe),e(Pe,Gt),y(yo,Gt,null),e(ce,On),e(ce,Jt),e(Jt,Dn),b(o,Dr,g),b(o,E,g),y(ko,E,null),e(E,Ln),e(E,de),e(de,Nn),e(de,Yt),e(Yt,In),e(de,Xn),e(de,$o),e($o,Bn),e(de,Hn),e(E,Rn),e(E,Vo),e(Vo,Un),e(Vo,gt),e(gt,Zn),e(Vo,Qn),e(E,Kn),e(E,To),e(To,Gn),e(To,Wo),e(Wo,Jn),e(To,Yn),e(E,es),e(E,M),y(jo,M,null),e(M,os),e(M,me),e(me,ts),e(me,_t),e(_t,rs),e(me,as),e(me,er),e(er,ns),e(me,ss),e(M,is),y(Me,M,null),e(M,ls),y(Ae,M,null),e(M,cs),y(ze,M,null),b(o,Lr,g),b(o,pe,g),e(pe,Se),e(Se,or),y(Fo,or,null),e(pe,ds),e(pe,tr),e(tr,ms),b(o,Nr,g),b(o,j,g),y(xo,j,null),e(j,ps),e(j,rr),e(rr,fs),e(j,hs),e(j,qo),e(qo,us),e(qo,Eo),e(Eo,gs),e(qo,_s),e(j,vs),e(j,Po),e(Po,bs),e(Po,vt),e(vt,ws),e(Po,Cs),e(j,ys),e(j,Mo),e(Mo,ks),e(Mo,Ao),e(Ao,$s),e(Mo,Vs),e(j,Ts),e(j,A),y(zo,A,null),e(A,Ws),e(A,fe),e(fe,js),e(fe,bt),e(bt,Fs),e(fe,xs),e(fe,ar),e(ar,qs),e(fe,Es),e(A,Ps),y(Oe,A,null),e(A,Ms),y(De,A,null),e(A,As),y(Le,A,null),b(o,Ir,g),b(o,he,g),e(he,Ne),e(Ne,nr),y(So,nr,null),e(he,zs),e(he,sr),e(sr,Ss),b(o,Xr,g),b(o,F,g),y(Oo,F,null),e(F,Os),e(F,ir),e(ir,Ds),e(F,Ls),e(F,Do),e(Do,Ns),e(Do,Lo),e(Lo,Is),e(Do,Xs),e(F,Bs),e(F,No),e(No,Hs),e(No,wt),e(wt,Rs),e(No,Us),e(F,Zs),e(F,Io),e(Io,Qs),e(Io,Xo),e(Xo,Ks),e(Io,Gs),e(F,Js),e(F,D),y(Bo,D,null),e(D,Ys),e(D,ue),e(ue,ei),e(ue,Ct),e(Ct,oi),e(ue,ti),e(ue,lr),e(lr,ri),e(ue,ai),e(D,ni),y(Ie,D,null),e(D,si),y(Xe,D,null),b(o,Br,g),b(o,ge,g),e(ge,Be),e(Be,cr),y(Ho,cr,null),e(ge,ii),e(ge,dr),e(dr,li),b(o,Hr,g),b(o,x,g),y(Ro,x,null),e(x,ci),e(x,mr),e(mr,di),e(x,mi),e(x,Uo),e(Uo,pi),e(Uo,Zo),e(Zo,fi),e(Uo,hi),e(x,ui),e(x,Qo),e(Qo,gi),e(Qo,yt),e(yt,_i),e(Qo,vi),e(x,bi),e(x,Ko),e(Ko,wi),e(Ko,Go),e(Go,Ci),e(Ko,yi),e(x,ki),e(x,L),y(Jo,L,null),e(L,$i),e(L,_e),e(_e,Vi),e(_e,kt),e(kt,Ti),e(_e,Wi),e(_e,pr),e(pr,ji),e(_e,Fi),e(L,xi),y(He,L,null),e(L,qi),y(Re,L,null),b(o,Rr,g),b(o,ve,g),e(ve,Ue),e(Ue,fr),y(Yo,fr,null),e(ve,Ei),e(ve,hr),e(hr,Pi),b(o,Ur,g),b(o,P,g),y(et,P,null),e(P,Mi),e(P,be),e(be,Ai),e(be,ur),e(ur,zi),e(be,Si),e(be,ot),e(ot,Oi),e(be,Di),e(P,Li),e(P,tt),e(tt,Ni),e(tt,$t),e($t,Ii),e(tt,Xi),e(P,Bi),e(P,rt),e(rt,Hi),e(rt,at),e(at,Ri),e(rt,Ui),e(P,Zi),e(P,N),y(nt,N,null),e(N,Qi),e(N,we),e(we,Ki),e(we,Vt),e(Vt,Gi),e(we,Ji),e(we,gr),e(gr,Yi),e(we,el),e(N,ol),y(Ze,N,null),e(N,tl),y(Qe,N,null),Zr=!0},p(o,[g]){const st={};g&2&&(st.$$scope={dirty:g,ctx:o}),je.$set(st);const _r={};g&2&&(_r.$$scope={dirty:g,ctx:o}),qe.$set(_r);const vr={};g&2&&(vr.$$scope={dirty:g,ctx:o}),Ee.$set(vr);const br={};g&2&&(br.$$scope={dirty:g,ctx:o}),Me.$set(br);const it={};g&2&&(it.$$scope={dirty:g,ctx:o}),Ae.$set(it);const wr={};g&2&&(wr.$$scope={dirty:g,ctx:o}),ze.$set(wr);const Cr={};g&2&&(Cr.$$scope={dirty:g,ctx:o}),Oe.$set(Cr);const yr={};g&2&&(yr.$$scope={dirty:g,ctx:o}),De.$set(yr);const lt={};g&2&&(lt.$$scope={dirty:g,ctx:o}),Le.$set(lt);const kr={};g&2&&(kr.$$scope={dirty:g,ctx:o}),Ie.$set(kr);const $r={};g&2&&($r.$$scope={dirty:g,ctx:o}),Xe.$set($r);const Ce={};g&2&&(Ce.$$scope={dirty:g,ctx:o}),He.$set(Ce);const R={};g&2&&(R.$$scope={dirty:g,ctx:o}),Re.$set(R);const Vr={};g&2&&(Vr.$$scope={dirty:g,ctx:o}),Ze.$set(Vr);const Tr={};g&2&&(Tr.$$scope={dirty:g,ctx:o}),Qe.$set(Tr)},i(o){Zr||(k(n.$$.fragment,o),k(oo.$$.fragment,o),k(io.$$.fragment,o),k(lo.$$.fragment,o),k(je.$$.fragment,o),k(mo.$$.fragment,o),k(po.$$.fragment,o),k(ho.$$.fragment,o),k(uo.$$.fragment,o),k(Co.$$.fragment,o),k(qe.$$.fragment,o),k(Ee.$$.fragment,o),k(yo.$$.fragment,o),k(ko.$$.fragment,o),k(jo.$$.fragment,o),k(Me.$$.fragment,o),k(Ae.$$.fragment,o),k(ze.$$.fragment,o),k(Fo.$$.fragment,o),k(xo.$$.fragment,o),k(zo.$$.fragment,o),k(Oe.$$.fragment,o),k(De.$$.fragment,o),k(Le.$$.fragment,o),k(So.$$.fragment,o),k(Oo.$$.fragment,o),k(Bo.$$.fragment,o),k(Ie.$$.fragment,o),k(Xe.$$.fragment,o),k(Ho.$$.fragment,o),k(Ro.$$.fragment,o),k(Jo.$$.fragment,o),k(He.$$.fragment,o),k(Re.$$.fragment,o),k(Yo.$$.fragment,o),k(et.$$.fragment,o),k(nt.$$.fragment,o),k(Ze.$$.fragment,o),k(Qe.$$.fragment,o),Zr=!0)},o(o){$(n.$$.fragment,o),$(oo.$$.fragment,o),$(io.$$.fragment,o),$(lo.$$.fragment,o),$(je.$$.fragment,o),$(mo.$$.fragment,o),$(po.$$.fragment,o),$(ho.$$.fragment,o),$(uo.$$.fragment,o),$(Co.$$.fragment,o),$(qe.$$.fragment,o),$(Ee.$$.fragment,o),$(yo.$$.fragment,o),$(ko.$$.fragment,o),$(jo.$$.fragment,o),$(Me.$$.fragment,o),$(Ae.$$.fragment,o),$(ze.$$.fragment,o),$(Fo.$$.fragment,o),$(xo.$$.fragment,o),$(zo.$$.fragment,o),$(Oe.$$.fragment,o),$(De.$$.fragment,o),$(Le.$$.fragment,o),$(So.$$.fragment,o),$(Oo.$$.fragment,o),$(Bo.$$.fragment,o),$(Ie.$$.fragment,o),$(Xe.$$.fragment,o),$(Ho.$$.fragment,o),$(Ro.$$.fragment,o),$(Jo.$$.fragment,o),$(He.$$.fragment,o),$(Re.$$.fragment,o),$(Yo.$$.fragment,o),$(et.$$.fragment,o),$(nt.$$.fragment,o),$(Ze.$$.fragment,o),$(Qe.$$.fragment,o),Zr=!1},d(o){t(c),o&&t(_),o&&t(m),V(n),o&&t(Wr),o&&t(oe),V(oo),o&&t(jr),o&&t(Te),o&&t(Fr),o&&t(ct),o&&t(xr),o&&t(U),o&&t(qr),o&&t(Z),o&&t(Er),o&&t(te),V(io),o&&t(Pr),o&&t(S),V(lo),V(je),o&&t(Mr),o&&t(ne),V(mo),o&&t(Ar),o&&t(se),V(po),o&&t(zr),o&&t(ie),V(ho),o&&t(Sr),o&&t(q),V(uo),V(Co),V(qe),V(Ee),o&&t(Or),o&&t(ce),V(yo),o&&t(Dr),o&&t(E),V(ko),V(jo),V(Me),V(Ae),V(ze),o&&t(Lr),o&&t(pe),V(Fo),o&&t(Nr),o&&t(j),V(xo),V(zo),V(Oe),V(De),V(Le),o&&t(Ir),o&&t(he),V(So),o&&t(Xr),o&&t(F),V(Oo),V(Bo),V(Ie),V(Xe),o&&t(Br),o&&t(ge),V(Ho),o&&t(Hr),o&&t(x),V(Ro),V(Jo),V(He),V(Re),o&&t(Rr),o&&t(ve),V(Yo),o&&t(Ur),o&&t(P),V(et),V(nt),V(Ze),V(Qe)}}}const Dc={local:"wav2vec2conformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.Wav2Vec2ConformerConfig",title:"Wav2Vec2ConformerConfig"},{local:"transformers.models.wav2vec2_conformer.modeling_wav2vec2_conformer.Wav2Vec2ConformerForPreTrainingOutput",title:"Wav2Vec2Conformer specific outputs"},{local:"transformers.Wav2Vec2ConformerModel",title:"Wav2Vec2ConformerModel"},{local:"transformers.Wav2Vec2ConformerForCTC",title:"Wav2Vec2ConformerForCTC"},{local:"transformers.Wav2Vec2ConformerForSequenceClassification",title:"Wav2Vec2ConformerForSequenceClassification"},{local:"transformers.Wav2Vec2ConformerForAudioFrameClassification",title:"Wav2Vec2ConformerForAudioFrameClassification"},{local:"transformers.Wav2Vec2ConformerForXVector",title:"Wav2Vec2ConformerForXVector"},{local:"transformers.Wav2Vec2ConformerForPreTraining",title:"Wav2Vec2ConformerForPreTraining"}],title:"Wav2Vec2-Conformer"};function Lc(T){return yc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Uc extends vc{constructor(c){super();bc(this,c,Lc,Oc,wc,{})}}export{Uc as default,Dc as metadata};
